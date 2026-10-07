import Link from "next/link";

const SHOP_LINKS = [
  { label: "All Jewellery", href: "/shop" },
  { label: "Rings", href: "/shop?category=rings" },
  { label: "Solitaires", href: "/shop?category=solitaires" },
  { label: "Pendants", href: "/shop?category=pendants" },
  { label: "Earrings", href: "/shop?category=earrings" },
  { label: "Necklaces", href: "/shop?category=necklaces" },
  { label: "Bangles & Bracelets", href: "/shop?category=bangles-bracelets" },
];

const COMPANY_LINKS = [
  { label: "Our Story", href: "/our-story" },
  { label: "Lab-Grown Difference", href: "/#difference" },
  { label: "Our Promise", href: "/#promise" },
  { label: "Journal", href: "/#journal" },
  { label: "Visit the Showroom", href: "/#visit" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-content">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-2xl font-semibold uppercase tracking-[0.18em]">
            Aadyaa<span className="text-accent"> Jewels</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary-content/70">
            Delhi NCR&apos;s oldest exclusive lab-grown diamond jewellery brand.
            Ethical, sustainable and indistinguishable from mined diamonds.
          </p>
          <div className="mt-6 flex gap-3">
            {["instagram", "facebook", "whatsapp"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="btn btn-circle btn-outline btn-sm border-secondary-content/25 text-secondary-content/70 hover:border-accent hover:text-accent"
              >
                <span className="text-[10px] uppercase tracking-wide">{s.slice(0, 3).toUpperCase()}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Shop</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SHOP_LINKS.map((l) => (
              <li key={l.href + l.label}>
                <Link href={l.href} className="text-secondary-content/70 transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {COMPANY_LINKS.map((l) => (
              <li key={l.href + l.label}>
                <Link href={l.href} className="text-secondary-content/70 transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Visit Us</h3>
          <address className="mt-4 space-y-2.5 text-sm not-italic text-secondary-content/70">
            <p>Aadyaa Jewels Showroom</p>
            <p>7B/3, Maharani Bagh, New Delhi - 110025</p>
            <p className="pt-2">
              <a href="tel:+918822664433" className="hover:text-accent">+91 88226 64433</a>
            </p>
            <p>
              <a href="mailto:aadyaajewelscvd@gmail.com" className="hover:text-accent">
                aadyaajewelscvd@gmail.com
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-secondary-content/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-secondary-content/50 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Aadyaa Jewels. All rights reserved.</p>
          <p className="tracking-luxe uppercase">Lab-grown · HUID certified · Conflict-free</p>
        </div>
      </div>
    </footer>
  );
}
