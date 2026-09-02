"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";

type Props = {
  productId: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  metal: string | null;
  stock: number;
};

export default function AddToCart({ productId, slug, name, image, price, metal, stock }: Props) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="text-sm uppercase tracking-[0.2em] text-base-content/60">Qty</span>
        <div className="join">
          <button
            className="btn join-item btn-outline btn-sm rounded-l-full"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="btn join-item btn-sm pointer-events-none w-12">{quantity}</span>
          <button
            className="btn join-item btn-outline btn-sm rounded-r-full"
            onClick={() => setQuantity((q) => Math.min(stock, q + 1))}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={() =>
          addItem({ productId, slug, name, image, price, metal }, quantity)
        }
        disabled={stock <= 0}
        className="btn btn-primary h-12 rounded-full text-xs uppercase tracking-[0.25em]"
      >
        {stock > 0 ? `Add to Cart — ₹${(price * quantity).toLocaleString("en-IN")}` : "Sold Out"}
      </button>
    </div>
  );
}
