"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { formatINR } from "@/lib/format";

const EMPTY_FORM = {
  customerName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
};

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart();
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderNo, setOrderNo] = useState<string | null>(null);

  const set = (key: keyof typeof EMPTY_FORM) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  async function placeOrder(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          items: items.map((i) => ({ productId: i.productId, quantity: i.quantity })),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      clearCart();
      setOrderNo(data.orderNo);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError("Network error — please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (orderNo) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-success/10 text-4xl">✓</div>
        <h1 className="mt-6 font-serif text-4xl font-semibold">Thank You!</h1>
        <p className="mt-3 text-base-content/70">
          Your order <span className="font-semibold text-primary">{orderNo}</span> has been placed successfully.
        </p>
        <p className="mt-2 text-sm text-base-content/50">
          A confirmation has been sent to your email. Our team will call you shortly to confirm the details.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/shop" className="btn btn-primary rounded-full px-8 text-xs uppercase tracking-[0.25em]">
            Continue Shopping
          </Link>
          <Link href="/" className="btn btn-outline rounded-full px-8 text-xs uppercase tracking-[0.25em]">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <span className="text-6xl">💎</span>
        <h1 className="mt-6 font-serif text-4xl font-semibold">Your Cart is Empty</h1>
        <p className="mt-3 text-base-content/60">
          Discover lab-grown diamonds that are as kind to the planet as they are to you.
        </p>
        <Link href="/shop" className="btn btn-primary mt-8 rounded-full px-10 text-xs uppercase tracking-[0.25em]">
          Shop the Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="font-serif text-4xl font-semibold">Checkout</h1>
      <p className="mt-2 text-sm text-base-content/50">Free insured shipping · 30-day returns · HUID certified</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        {/* Items */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-base-content/50">Your Items</h2>
          <div className="mt-4 divide-y divide-base-200 rounded-2xl border border-base-200 bg-base-100">
            {items.map((item) => (
              <div key={item.productId} className="flex gap-4 p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.name} className="h-24 w-24 rounded-xl object-cover" />
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <Link href={`/product/${item.slug}`} className="font-serif text-lg font-semibold hover:text-primary">
                        {item.name}
                      </Link>
                      {item.metal && <p className="text-xs uppercase tracking-wider text-base-content/50">{item.metal}</p>}
                    </div>
                    <button
                      onClick={() => removeItem(item.productId)}
                      className="btn btn-ghost btn-xs text-base-content/40 hover:text-error"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <div className="join">
                      <button className="btn join-item btn-xs" onClick={() => updateQuantity(item.productId, item.quantity - 1)}>
                        −
                      </button>
                      <span className="btn join-item btn-xs pointer-events-none">{item.quantity}</span>
                      <button className="btn join-item btn-xs" onClick={() => updateQuantity(item.productId, item.quantity + 1)}>
                        +
                      </button>
                    </div>
                    <p className="font-serif text-lg font-semibold">{formatINR(item.price * item.quantity)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary + form */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-base-200 bg-base-100 p-6">
            <h2 className="font-serif text-xl font-semibold">Order Summary</h2>
            <dl className="mt-4 space-y-2.5 text-sm">
              <div className="flex justify-between">
                <dt className="text-base-content/60">Subtotal</dt>
                <dd className="font-medium">{formatINR(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-base-content/60">Shipping</dt>
                <dd className="font-medium text-success">FREE</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-base-content/60">Taxes</dt>
                <dd className="font-medium">Included</dd>
              </div>
              <div className="flex justify-between border-t border-base-200 pt-3 text-base">
                <dt className="font-semibold">Total</dt>
                <dd className="font-serif text-2xl font-semibold">{formatINR(subtotal)}</dd>
              </div>
            </dl>
          </div>

          <form onSubmit={placeOrder} className="rounded-2xl border border-base-200 bg-base-100 p-6">
            <h2 className="font-serif text-xl font-semibold">Delivery Details</h2>
            <div className="mt-4 grid gap-3">
              <input required value={form.customerName} onChange={set("customerName")} placeholder="Full name" className="input input-bordered rounded-xl" />
              <div className="grid gap-3 sm:grid-cols-2">
                <input required type="email" value={form.email} onChange={set("email")} placeholder="Email address" className="input input-bordered rounded-xl" />
                <input required type="tel" value={form.phone} onChange={set("phone")} placeholder="Phone number" className="input input-bordered rounded-xl" />
              </div>
              <textarea
                required
                value={form.address}
                onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
                placeholder="Full address (house, street, landmark)"
                className="textarea textarea-bordered rounded-xl"
                rows={2}
              />
              <div className="grid gap-3 sm:grid-cols-3">
                <input required value={form.city} onChange={set("city")} placeholder="City" className="input input-bordered rounded-xl" />
                <input required value={form.state} onChange={set("state")} placeholder="State" className="input input-bordered rounded-xl" />
                <input required value={form.pincode} onChange={set("pincode")} placeholder="PIN code" className="input input-bordered rounded-xl" maxLength={6} />
              </div>
            </div>

            {error && (
              <div role="alert" className="alert alert-error mt-4 rounded-xl text-sm">
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="btn btn-primary btn-block mt-5 h-12 rounded-full text-xs uppercase tracking-[0.25em]"
            >
              {submitting ? (
                <>
                  <span className="loading loading-spinner loading-xs" /> Placing Order…
                </>
              ) : (
                `Place Order · ${formatINR(subtotal)}`
              )}
            </button>
            <p className="mt-3 text-center text-[11px] text-base-content/40">
              Demo checkout — no payment is processed. Pay on delivery available.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
