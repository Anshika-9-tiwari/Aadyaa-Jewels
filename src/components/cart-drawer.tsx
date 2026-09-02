"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatINR } from "@/lib/format";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-base-100 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-base-200 px-5 py-4">
          <h2 className="font-serif text-xl font-semibold tracking-wide">
            Your Cart{" "}
            <span className="text-sm font-normal text-base-content/50">
              ({items.reduce((s, i) => s + i.quantity, 0)})
            </span>
          </h2>
          <button className="btn btn-ghost btn-sm btn-square" onClick={closeCart} aria-label="Close cart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-5">
              <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <span className="text-5xl">💎</span>
            <p className="font-serif text-xl">Your cart is empty</p>
            <p className="text-sm text-base-content/60">
              Discover lab-grown diamonds that are as kind to the planet as they are to you.
            </p>
            <Link href="/shop" onClick={closeCart} className="btn btn-primary mt-2 rounded-full px-8">
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
              {items.map((item) => (
                <div key={item.productId} className="flex gap-4 rounded-xl border border-base-200 bg-base-100 p-3">
                  <Link href={`/product/${item.slug}`} onClick={closeCart} className="shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-lg object-cover"
                      loading="lazy"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        href={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="font-serif text-sm font-semibold leading-snug hover:text-primary"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.productId)}
                        className="text-base-content/40 transition-colors hover:text-error"
                        aria-label={`Remove ${item.name}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-4">
                          <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
                        </svg>
                      </button>
                    </div>
                    {item.metal && (
                      <p className="mt-0.5 text-xs uppercase tracking-wider text-base-content/50">{item.metal}</p>
                    )}
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="join join-sm">
                        <button className="btn join-item btn-xs" onClick={() => updateQuantity(item.productId, item.quantity - 1)}>
                          −
                        </button>
                        <span className="btn join-item btn-xs pointer-events-none">{item.quantity}</span>
                        <button className="btn join-item btn-xs" onClick={() => updateQuantity(item.productId, item.quantity + 1)}>
                          +
                        </button>
                      </div>
                      <p className="text-sm font-semibold">{formatINR(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-base-200 px-5 py-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-base-content/60">Subtotal</span>
                <span className="font-serif text-lg font-semibold">{formatINR(subtotal)}</span>
              </div>
              <p className="text-xs text-base-content/50">
                Free insured shipping &amp; lifetime polishing included. Taxes calculated at checkout.
              </p>
              <Link href="/cart" onClick={closeCart} className="btn btn-primary btn-block rounded-full">
                Checkout · {formatINR(subtotal)}
              </Link>
              <button onClick={closeCart} className="btn btn-ghost btn-block rounded-full text-sm">
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
