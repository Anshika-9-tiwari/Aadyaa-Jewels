"use client";

import { useCart } from "@/lib/cart-context";

export default function QuickAdd({
  productId,
  slug,
  name,
  image,
  price,
  metal,
}: {
  productId: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  metal: string | null;
}) {
  const { addItem } = useCart();
  return (
    <button
      onClick={() => addItem({ productId, slug, name, image, price, metal })}
      className="btn btn-primary btn-sm w-full rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus:opacity-100"
      aria-label={`Add ${name} to cart`}
    >
      Add to Cart
    </button>
  );
}
