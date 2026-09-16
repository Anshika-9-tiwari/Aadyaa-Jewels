import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const itemSchema = z.object({
  productId: z.string().min(1),
  quantity: z.number().int().min(1).max(10),
});

const bodySchema = z.object({
  customerName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number").max(15),
  address: z.string().min(5, "Please enter your full address"),
  city: z.string().min(2, "Please enter your city"),
  state: z.string().min(2, "Please enter your state"),
  pincode: z.string().regex(/^\d{6}$/, "Please enter a valid 6-digit pincode"),
  items: z.array(itemSchema).min(1, "Your cart is empty"),
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parsed = bodySchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid request" },
        { status: 400 },
      );
    }

    const { items, ...customer } = parsed.data;

    const products = await prisma.product.findMany({
      where: { id: { in: items.map((i) => i.productId) } },
    });

    const productMap = new Map(products.map((p) => [p.id, p]));
    let subtotal = 0;

    for (const item of items) {
      const product = productMap.get(item.productId);
      if (!product) {
        return NextResponse.json(
          { ok: false, error: "One of the items in your cart is no longer available." },
          { status: 400 },
        );
      }
      if (product.stock < item.quantity) {
        return NextResponse.json(
          { ok: false, error: `“${product.name}” does not have enough stock.` },
          { status: 400 },
        );
      }
      subtotal += product.price * item.quantity;
    }

    const orderNo = `AJ-${Date.now().toString().slice(-8)}${Math.floor(Math.random() * 90 + 10)}`;

    const order = await prisma.$transaction(async (tx) => {
      const created = await tx.order.create({
        data: {
          orderNo,
          ...customer,
          subtotal,
          shipping: 0,
          total: subtotal,
          status: "PLACED",
          items: {
            create: items.map((item) => {
              const product = productMap.get(item.productId)!;
              return {
                productId: product.id,
                name: product.name,
                price: product.price,
                quantity: item.quantity,
              };
            }),
          },
        },
        include: { items: true },
      });

      for (const item of items) {
        await tx.product.update({
          where: { id: item.productId },
          data: { stock: { decrement: item.quantity } },
        });
      }

      return created;
    });

    return NextResponse.json({
      ok: true,
      orderNo: order.orderNo,
      total: order.total,
    });
  } catch (err) {
    console.error("Checkout failed:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}