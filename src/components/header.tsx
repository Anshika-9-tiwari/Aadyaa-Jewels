"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart-context";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop All", href: "/shop" },
  { label: "Rings", href: "/shop?category=rings" },
  { label: "Necklaces", href: "/shop?category=necklaces" },
  { label: "Earrings", href: "/shop?category=earrings" },
  { label: "Bracelets", href: "/shop?category=bracelets" },
  { label: "Our Story", href: "/our-story" },
];

export default function Header() {
  const { count, openCart } = useCart();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-secondary text-secondary-content text-[11px] sm:text-xs tracking-luxe uppercase">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 overflow-hidden px-4 py-2">
          <span className="hidden sm:inline">Free shipping across India</span>
          <span className="hidden md:inline text-accent">✦</span>
          <span className="hidden sm:inline">HUID certified lab-grown diamonds</span>
          <span className="hidden md:inline text-accent">✦</span>
          <span className="truncate">Ethical · Sustainable · Conflict-free</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 border-b transition-all duration-300 ${
          scrolled
            ? "border-base-300 bg-base-100/90 shadow-sm backdrop-blur-md"
            : "border-transparent bg-base-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-2 py-3 sm:px-4">
          {/* Mobile menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              className="btn btn-ghost btn-sm btn-square"
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-5">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h10" />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <Link href="/" className="group flex flex-col items-center leading-none">
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-[0.15em] uppercase">
              Aadyaa<span className="gold-gradient-text"> Jewels</span>
            </span>
            <span className="mt-1 hidden text-[9px] uppercase tracking-[0.4em] text-base-content/50 sm:block">
              Lab-grown diamond jewellery
            </span> 
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href.split("?")[0]) && link.href !== "/";
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[13px] uppercase tracking-[0.18em] transition-colors hover:text-primary ${
                    active ? "text-primary" : "text-base-content/80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            <form action="/shop" method="get" className="hidden md:block">
              <label className="input input-sm join-item input-bordered flex items-center gap-2 rounded-full bg-base-200/60 px-3 focus-within:border-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4 opacity-60">
                  <circle cx="11" cy="11" r="7" />
                  <path strokeLinecap="round" d="m20 20-3.5-3.5" />
                </svg>
                <input
                  name="q"
                  placeholder="Search jewellery…"
                  className="w-30 bg-transparent text-sm outline-none placeholder:text-base-content/40"
                />
              </label>
            </form>

            {/* <button
              className="btn btn-ghost btn-sm btn-square hidden sm:inline-flex"
              aria-label="Account"
              title="Account"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-5">
                <circle cx="12" cy="8" r="4" />
                <path strokeLinecap="round" d="M4.5 20c1.6-3.2 4.2-4.8 7.5-4.8s5.9 1.6 7.5 4.8" />
              </svg>
            </button> */}

            <button
              onClick={openCart}
              className="btn btn-ghost btn-sm btn-square relative"
              aria-label="Open cart"
              title="Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-6">
                <path d="M6 8h12l-1.2 11a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 8Z" />
                <path strokeLinecap="round" d="M9 10V6a3 3 0 0 1 6 0v4" />
              </svg>
              {count > 0 && (
                <span className="badge badge-primary badge-xs absolute -right-0.5 -top-0.5 h-4.5 min-h-4.5 w-4.5 items-center justify-center p-0 text-[10px] font-semibold">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="border-t border-base-200 bg-base-100 px-4 py-4 lg:hidden">
            <form action="/shop" method="get" className="mb-3">
              <label className="input input-sm input-bordered flex items-center gap-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4 opacity-60">
                  <circle cx="11" cy="11" r="7" />
                  <path strokeLinecap="round" d="m20 20-3.5-3.5" />
                </svg>
                <input name="q" placeholder="Search jewellery…" className="w-full bg-transparent text-sm outline-none" />
              </label>
            </form>
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-sm uppercase tracking-[0.18em] text-base-content/80 hover:bg-base-200 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
