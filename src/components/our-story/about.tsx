import type { Metadata } from "next";
import Link from "next/link";
import {
  Ruler,
  Wrench,
  Phone,
  Mail,
  MessageSquare,
  Check,
  AlertTriangle,
  Expand,
  SlidersHorizontal,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQAccordion from "@/components/our-story/FAQAccordian";

export const metadata: Metadata = {
  title: "About Aadyaa Jewels | Care, Sizing & Support",
  description:
    "Learn about Aadyaa Jewels — Delhi NCR's oldest lab-grown diamond brand. Ring & bangle sizing charts, jewellery care, resizing, repairs and FAQs.",
};

/* ── Imagery (stock, hotlinked) ── */
const HERO_IMG =
  "/images/bridal-set.avif";
const RESIZE_IMG =
  "https://images.pexels.com/photos/6263112/pexels-photo-6263112.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=620";
const REPAIR_IMG =
  "https://images.pexels.com/photos/7167019/pexels-photo-7167019.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=620";
const BANGLE_IMG =
  "/bangles/sol-starburst-diamond-bangles-2.jpg";

/* ── Ring sizing data ── */
const ringSizes = [
  { in: 1, usa: "1.75", dia: "13.06", circ: "41" },
  { in: 2, usa: "2", dia: "13.26", circ: "41.7" },
  { in: 3, usa: "2.5", dia: "13.67", circ: "42.9" },
  { in: 4, usa: "2.75", dia: "13.87", circ: "43.6" },
  { in: 5, usa: "3.25", dia: "14.27", circ: "44.8" },
  { in: 6, usa: "3.75", dia: "14.68", circ: "46.1" },
  { in: 7, usa: "4.25", dia: "15.09", circ: "47.4" },
  { in: 8, usa: "4.5", dia: "15.29", circ: "48" },
  { in: 9, usa: "4.75", dia: "15.49", circ: "48.7" },
  { in: 10, usa: "5.25", dia: "15.9", circ: "50" },
  { in: 11, usa: "5.75", dia: "16.31", circ: "51.2" },
  { in: 12, usa: "6", dia: "16.51", circ: "51.9" },
  { in: 13, usa: "6.5", dia: "16.92", circ: "53.1" },
  { in: 14, usa: "7", dia: "17.32", circ: "54.4" },
  { in: 15, usa: "7.25", dia: "17.53", circ: "55.1" },
  { in: 16, usa: "7.75", dia: "17.93", circ: "56.3" },
  { in: 17, usa: "8", dia: "18.14", circ: "57" },
  { in: 18, usa: "8.5", dia: "18.54", circ: "58.3" },
  { in: 19, usa: "8.75", dia: "18.75", circ: "58.9" },
  { in: 20, usa: "9.25", dia: "19.15", circ: "60.2" },
  { in: 21, usa: "9.5", dia: "19.35", circ: "60.8" },
  { in: 22, usa: "10", dia: "19.76", circ: "62.1" },
  { in: 23, usa: "10.25", dia: "19.96", circ: "62.7" },
  { in: 24, usa: "10.75", dia: "20.37", circ: "64" },
  { in: 25, usa: "11", dia: "20.57", circ: "64.6" },
  { in: 26, usa: "11.5", dia: "20.98", circ: "65.9" },
  { in: 27, usa: "12", dia: "21.39", circ: "67.2" },
  { in: 28, usa: "12.25", dia: "21.59", circ: "67.8" },
  { in: 29, usa: "12.75", dia: "22", circ: "69.1" },
  { in: 30, usa: "13", dia: "22.2", circ: "69.7" },
  { in: 31, usa: "13.5", dia: "22.61", circ: "71" },
  { in: 32, usa: "13.75", dia: "22.81", circ: "71.7" },
  { in: 33, usa: "14.25", dia: "23.22", circ: "72.9" },
  { in: 34, usa: "14.75", dia: "23.62", circ: "74.4" },
  { in: 35, usa: "15", dia: "23.83", circ: "74.8" },
  { in: 36, usa: "15.5", dia: "24.23", circ: "76.1" },
  { in: 37, usa: "16", dia: "24.64", circ: "77.4" },
];

const resizeCost = [
  "Depending on the new ring size, the cost may increase or decrease.",
  "If there's an increase, you pay the difference via transfer / COD.",
  "If there's a decrease, we transfer the differential amount to you.",
  "Shipping charges are borne by the customer.",
];

const repairSteps = [
  "Get in touch with customer support — they'll help you determine whether repairs are needed.",
  "Send the product back to us.",
  "On receiving it, we provide a repair estimate; after full payment, it's repaired and sent back to you.",
  "Charges are determined by the company on a case-to-case basis.",
];

const bangleTips = [
  {
    icon: Ruler,
    title: "Using a Measuring Tape",
    desc: "Measure your wrist at its widest point, just above the wrist bone.",
  },
  {
    icon: Expand,
    title: "Adding Comfort",
    desc: "Add ¼ to ½ inch to your wrist measurement for a comfortable fit.",
  },
  {
    icon: SlidersHorizontal,
    title: "Adjustable Bracelets",
    desc: "Opt for adjustable designs for a customised fit that suits various wrist sizes.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative h-[52vh] min-h-[500px] flex items-center overflow-hidden bg-secondary">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-neutral/85 via-secondary/75 to-secondary/65"
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-6 sm:px-8 text-secondary-content">
          <nav
            className="flex items-center gap-2 text-xs md:text-sm text-secondary-content/65 mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-secondary-content transition">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-accent font-medium">About</span>
          </nav>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 max-w-2xl text-balance">
            About <span className="gold-gradient-text">Aadyaa Jewels</span>
          </h1>
          <p className="text-secondary-content/80 text-base md:text-lg max-w-xl leading-relaxed">
            Delhi NCR&apos;s oldest exclusive lab-grown diamond brand. Explore
            our care, resizing, sizing guides and answers to everything you need
            to know.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              { icon: Sparkles, label: "Lifetime Care" },
              { icon: Ruler, label: "Free Sizing Guide" },
              { icon: Wrench, label: "Expert Repairs" },
            ].map(({ icon: Icon, label }, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 bg-secondary-content/10 backdrop-blur-sm border border-secondary-content/25 rounded-full px-4 py-2 text-sm font-medium"
              >
                <Icon className="w-4 h-4 text-accent" /> {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <main>
        {/* ──────────── 1. CARE & REPAIR ──────────── */}
        <section id="care" className="scroll-mt-32 py-16 md:py-20 bg-base-200/70">
          <div className="container mx-auto px-4 sm:px-6">
            <SectionHeading
              subtitle="After You Buy"
              title="Jewellery Care & Repair"
              description="We stand behind every piece. Here's how resizing and repairs work with Aadyaa Jewels."
            />

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16">
              {/* Resizing */}
              <div className="bg-base-100 rounded-3xl border border-base-300 shadow-lg shadow-secondary/5 overflow-hidden flex flex-col">
                <div className="relative h-56 sm:h-60">
                  <img
                    src={RESIZE_IMG}
                    alt="Ring resizing"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/75 to-transparent" />
                  <div className="absolute bottom-4 left-5 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                      <Ruler className="w-5 h-5 text-primary-content" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-secondary-content">
                      Resizing
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <h4 className="font-semibold text-base-content text-base mb-2 flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      Can a ring be re-sized?
                    </h4>
                    <p className="text-sm text-base-content/60 leading-relaxed">
                      Whether a ring can be re-sized depends on multiple factors
                      like design, new ring size, and more. First, please get in
                      touch with our customer care via call / chat / email to
                      confirm. They will guide you further.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-base-content text-base mb-3 flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      How much will it cost?
                    </h4>
                    <ul className="space-y-2.5">
                      {resizeCost.map((c, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-base-content/60"
                        >
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-start gap-3 bg-warning/10 border border-warning/20 rounded-xl p-4">
                    <AlertTriangle className="w-4 h-4 text-warning mt-0.5 shrink-0" />
                    <p className="text-xs text-warning leading-relaxed font-medium">
                      This feature is not available for international orders
                      (orders shipped abroad from India).
                    </p>
                  </div>
                </div>
              </div>

              {/* Repairs */}
              <div className="bg-base-100 rounded-3xl border border-base-300 shadow-lg shadow-secondary/5 overflow-hidden flex flex-col">
                <div className="relative h-56 sm:h-60">
                  <img
                    src={REPAIR_IMG}
                    alt="Jewellery repair"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral/80 to-transparent" />
                  <div className="absolute bottom-4 left-5 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shadow-lg">
                      <Wrench className="w-5 h-5 text-accent-content" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-secondary-content">
                      Repairs
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <ol className="space-y-4">
                    {repairSteps.map((s, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="w-8 h-8 rounded-full bg-secondary text-accent text-sm font-bold flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        <p className="text-sm text-base-content/60 leading-relaxed pt-1">
                          {s}
                        </p>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-6 pt-6 border-t border-base-300 space-y-2.5">
                    <p className="flex items-start gap-3 text-sm text-base-content/60">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>Shipping charges are borne by the customer.</span>
                    </p>
                    <p className="flex items-start gap-3 text-xs text-warning font-medium bg-warning/10 border border-warning/20 rounded-xl p-3">
                      <AlertTriangle className="w-4 h-4 text-warning mt-0.5 shrink-0" />
                      <span>
                        Not available for international orders (shipped abroad
                        from India).
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────── 2. RING SIZING ──────────── */}
        <section id="ring-sizing" className="scroll-mt-32 py-16 md:py-20 bg-base-100">
          <div className="container mx-auto px-4 sm:px-6">
            <SectionHeading
              subtitle="Find Your Fit"
              title="Sizing Chart — Rings"
              description="Not sure of your ring size? Here's exactly what you can do."
            />

            {/* How to measure */}
            <div className="mt-12 md:mt-14 grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-base-200/70 rounded-3xl border border-base-300 p-6 sm:p-8">
                <h3 className="font-serif text-xl font-bold text-base-content mb-5 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                    <Ruler className="w-5 h-5 text-primary" />
                  </span>
                  Measure an Existing Ring
                </h3>
                <ol className="space-y-4">
                  {[
                    "Take one of your existing rings and a ruler.",
                    "Place the innermost diameter of the ring at point 0 on the scale, exactly as shown.",
                    "Measure the internal diameter of your ring in millimetres.",
                    "Match that diameter to the corresponding size in the chart below.",
                  ].map((s, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="w-7 h-7 rounded-full bg-primary text-primary-content text-xs font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <p className="text-sm sm:text-base text-base-content/65 leading-relaxed pt-0.5">
                        {s}
                      </p>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-xl p-4">
                  <AlertTriangle className="w-4 h-4 text-primary shrink-0" />
                  <p className="text-xs sm:text-sm text-primary font-medium">
                    Be sure to measure in <strong>millimetres</strong>.
                  </p>
                </div>
              </div>

              {/* Side card */}
              <div className="bg-secondary rounded-3xl p-6 sm:p-8 text-secondary-content flex flex-col justify-between shadow-lg shadow-secondary/20">
                <div>
                  <p className="text-accent text-xs font-semibold uppercase tracking-luxe mb-3">
                    Still Unsure?
                  </p>
                  <h3 className="font-serif text-2xl font-bold mb-3">
                    Let our team help
                  </h3>
                  <p className="text-secondary-content/70 text-sm leading-relaxed">
                    Our experts can confirm your size over call, chat or email —
                    free of charge, before you order.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-content font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 shadow-md shadow-primary/25"
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* The chart */}
            <div className="mt-8 overflow-auto max-h-[520px] rounded-2xl border border-base-300 bg-base-100 shadow-md shadow-secondary/5">
              <table className="w-full text-sm">
                <thead className="sticky top-0 z-10 bg-secondary text-secondary-content">
                  <tr>
                    <th className="text-left px-4 sm:px-6 py-4 font-semibold whitespace-nowrap">
                      Indian Standard
                    </th>
                    <th className="text-left px-4 sm:px-6 py-4 font-semibold whitespace-nowrap">
                      USA / Canada
                    </th>
                    <th className="text-right px-4 sm:px-6 py-4 font-semibold whitespace-nowrap">
                      Diameter (mm)
                    </th>
                    <th className="text-right px-4 sm:px-6 py-4 font-semibold whitespace-nowrap">
                      Circumference (mm)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ringSizes.map((r, i) => (
                    <tr
                      key={r.in}
                      className={i % 2 ? "bg-base-200/40" : "bg-base-100"}
                    >
                      <td className="px-4 sm:px-6 py-3 font-semibold text-base-content border-t border-base-200/70">
                        {r.in}
                      </td>
                      <td className="px-4 sm:px-6 py-3 text-base-content/60 border-t border-base-200/70">
                        {r.usa}
                      </td>
                      <td className="px-4 sm:px-6 py-3 text-right font-mono text-base-content/70 border-t border-base-200/70">
                        {r.dia}
                      </td>
                      <td className="px-4 sm:px-6 py-3 text-right font-mono text-base-content/70 border-t border-base-200/70">
                        {r.circ}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ──────────── 3. BANGLE & BRACELET ──────────── */}
        <section id="bangle-sizing" className="scroll-mt-32 py-16 md:py-20 bg-base-100">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div
                  className="absolute -inset-3 border border-accent/40 rounded-3xl"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-2xl aspect-[6/5] max-h-[520px] bg-base-300 shadow-xl shadow-secondary/10">
                  <img
                    src={BANGLE_IMG}
                    alt="Bangles and bracelets"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Tips */}
              <div className="order-1 lg:order-2">
                <SectionHeading
                  align="left"
                  subtitle="Perfect Fit"
                  title="Sizing Chart — Bangles & Bracelets"
                />
                <div className="space-y-4 mt-8">
                  {bangleTips.map(({ icon: Icon, title, desc }, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 bg-base-100 rounded-2xl border border-base-300 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                    >
                      <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base-content mb-1">
                          {title}
                        </h4>
                        <p className="text-sm text-base-content/60 leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────── 4. FAQ ──────────── */}
        <section id="faq" className="scroll-mt-32 py-16 md:py-20 bg-base-200/70">
          <div className="container mx-auto px-4 sm:px-6">
            <SectionHeading
              subtitle="Good To Know"
              title="Frequently Asked Questions"
              description="Everything you need to know about our lab-grown diamonds."
            />
            <div className="max-w-3xl mx-auto mt-12 md:mt-16">
              <FAQAccordion />
            </div>
          </div>
        </section>

        {/* ──────────── CLOSING CTA ──────────── */}
        <section className="py-16 md:py-20 bg-base-100">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="relative rounded-3xl overflow-hidden bg-secondary text-secondary-content shadow-2xl shadow-secondary/30">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: `url(${HERO_IMG})` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/60 to-secondary/30" />
              <div className="relative p-8 sm:p-12 text-center max-w-2xl mx-auto">
                <p className="text-accent text-xs font-semibold uppercase tracking-luxe mb-4">
                  We&apos;re here for you
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-balance">
                  Still have questions?
                </h2>
                <p className="text-secondary-content/70 text-base md:text-lg mb-8">
                  Our gemologists and care team are here to help you with
                  sizing, resizing, repairs and everything in between.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="tel:+918822664433"
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-content font-semibold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 shadow-md shadow-primary/25"
                  >
                    <Phone className="w-4 h-4" /> Call Us
                  </a>
                  <a
                    href="mailto:aadyaajewelscvd@gmail.com"
                    className="inline-flex items-center justify-center gap-2 bg-secondary-content/10 hover:bg-secondary-content/20 border border-secondary-content/25 text-secondary-content font-semibold px-7 py-3.5 rounded-full transition-all"
                  >
                    <Mail className="w-4 h-4" /> Email Us
                  </a>
                  <a
                    href="https://wa.me/918822664433"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-success hover:bg-success/90 text-success-content font-semibold px-7 py-3.5 rounded-full transition-all"
                  >
                    <MessageSquare className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}