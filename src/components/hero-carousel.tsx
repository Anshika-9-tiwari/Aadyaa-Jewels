"use client";

import Link from "next/link";
import Carousel from "@/components/carousel";

const SLIDES = [
  {
    image: "rings/ready-to-engagement-ring.avif",
    kicker: "Lab-Grown Diamond Jewellery",
    title: "Brilliance, Without the Earth's Cost",
    subtitle:
      "Type IIA diamonds grown from the seed of a mined diamond — identical in chemistry, cut and fire. Certified & HUID-tagged.",
    cta: "Shop Solitaires",
    href: "/shop?category=solitaires",
  },
  {
    image: "/images/hero-1.jpg",
    kicker: "New Season · 2026 Collection",
    title: "Classic to Contemporary",
    subtitle:
      "From timeless solitaires to bold statement pieces — luxury made accessible, designed in New Delhi.",
    cta: "Explore New Arrivals",
    href: "/shop?sort=newest",
  },
  {
    image: "/images/hero-3.jpg",
    kicker: "The Aadyaa Promise",
    title: "Free Shipping · Certified · Ethical",
    subtitle:
      "Every order ships free across India, insured and packed in signature Aadyaa boxes. HUID certified for purity.",
    cta: "Discover Our Promise",
    href: "/#promise",
  },
];

export default function HeroCarousel() {
  return (
    <Carousel
      autoplay
      autoplayDelay={6000}
      showDots
      slideClass="embla-hero__slide"
      className="relative"
    >
      {SLIDES.map((slide) => (
        <div key={slide.title} className="relative flex min-h-[560px] items-center overflow-hidden sm:min-h-[640px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/10" />
          <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
            <div className="max-w-xl text-base-100">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">{slide.kicker}</p>
              <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.05] sm:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-base-100/85 sm:text-base">
                {slide.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={slide.href} className="btn btn-primary rounded-full px-8 uppercase tracking-[0.2em] text-xs">
                  {slide.cta}
                </Link>
                <Link
                  href="/shop"
                  className="btn btn-outline rounded-full border-base-100/60 px-8 text-xs uppercase tracking-[0.2em] text-base-100 hover:border-base-100 hover:bg-base-100 hover:text-secondary"
                >
                  Shop All
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
