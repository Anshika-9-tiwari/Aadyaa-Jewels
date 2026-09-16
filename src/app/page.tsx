import Link from "next/link";
import HeroCarousel from "@/components/hero-carousel";
import Carousel from "@/components/carousel";
import ProductCard from "@/components/product-card";
import Newsletter from "@/components/newsletter";
import { getCategories, getFeaturedProducts, getNewArrivals } from "@/lib/data";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export const dynamic = "force-dynamic";

const PROMISES = [
  {
    icon: "🚚",
    title: "Free Shipping",
    text: "Enjoy the luxury of FREE insured shipping on every order, straight to your doorstep.",
  },
  {
    icon: "🌿",
    title: "Sustainable",
    text: "Crafted with care, our sustainable jewellery combines timeless beauty with eco-friendly values.",
  },
  {
    icon: "💠",
    title: "HUID Certified",
    text: "Every piece is certified and HUID tagged for purity and authenticity — full traceability.",
  },
  {
    icon: "🤝",
    title: "Ethical",
    text: "Adorning you with elegance, crafted responsibly and ethically. Conflict-free, always.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The solitaire I bought from Aadyaa looks identical to my mother's mined diamond — at a fraction of the price. The HUID certificate gave me total peace of mind.",
    name: "Ananya Sharma",
    role: "Bought the Isla Solitaire Ring",
  },
  {
    quote:
      "Their craftsmanship is exceptional. The pendant set I ordered for my wife's birthday arrived in two days, beautifully packed with a lifetime polishing card.",
    name: "Rohit Malhotra",
    role: "Bought the Aiyana Pendant Set",
  },
  {
    quote:
      "As someone conscious about sustainability, Aadyaa was the obvious choice. Knowing the diamonds are grown using solar energy makes the sparkle even brighter.",
    name: "Priya Nair",
    role: "Bought the Tennis Diamond Bracelet",
  },
  {
    quote:
      "The showroom near Ashram is stunning and the team guided us through the entire CVD process. We designed our engagement ring together — an experience we'll treasure.",
    name: "Kabir & Meera",
    role: "Custom Engagement Ring",
  },
];

const JOURNAL = [
  {
    title: "Lab-Grown vs Natural Diamonds: What Really Matters",
    date: "April 27, 2026",
    excerpt:
      "Every diamond purchase is a decision layered with emotion, budget, and values. Here's how to choose with confidence.",
    image:
      "https://images.pexels.com/photos/15777275/pexels-photo-15777275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "The Future of Ethical Luxury: Why Sustainability Matters in Jewellery",
    date: "December 9, 2024",
    excerpt:
      "Ethical luxury is no longer a niche but a necessity, reshaping how jewellery is designed, grown and worn.",
    image:
      "https://images.pexels.com/photos/3641059/pexels-photo-3641059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "The Ultimate Diamond Jewellery Guide: Rings, Studs, Solitaires & Pendants",
    date: "March 2, 2026",
    excerpt:
      "From everyday studs to once-in-a-lifetime solitaires — how to choose the perfect piece for every occasion.",
    image:
      "https://images.pexels.com/photos/13204122/pexels-photo-13204122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export default async function HomePage() {
  const [categories, featured, newArrivals] = await Promise.all([
    getCategories(),
    getFeaturedProducts(6),
    getNewArrivals(10),
  ]);

  return (
    <>
      {/* ---------- HERO ---------- */}
      <HeroCarousel />

      {/* ---------- MARQUEE ---------- */}
      <div className="overflow-hidden border-y border-accent/30 bg-primary py-3">
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center gap-10">
              {[
                "Lab-Grown Diamonds",
                "Type IIA Purity",
                "HUID Certified",
                "CVD Technology",
                "Solar Energy Grown",
                "Conflict-Free",
                "Free Insured Shipping",
                "Lifetime Polishing",
              ].map((t) => (
                <span
                  key={t + dup}
                  className="flex items-center gap-10 text-xs font-semibold uppercase tracking-[0.3em] text-primary-content"
                >
                  {t} <span className="text-accent">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ---------- SHOP BY CATEGORY ---------- */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Curated for you</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Shop by Category</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-base-content/60">
            Classic to contemporary — explore our handcrafted collections, all grown from the seed of a mined diamond.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {categories.map((cat: { id: Key | null | undefined; slug: any; image: any; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; _count: { products: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }; }) => (
            <Link
              key={cat.id}
              href={`/shop?category=${cat.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-base-200"
            >
              <div className="aspect-[4/3] overflow-hidden bg-base-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.image ?? ""}
                  alt={String(cat.name ?? "")}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-serif text-2xl font-semibold text-base-100">{cat.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-accent">
                  {cat._count.products} designs →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- OUR STORY ---------- */}
      <section id="story" className="bg-base-200/60">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/ring-2.jpg" alt="Master craftsman at work" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-accent/40 bg-base-100 px-6 py-5 shadow-xl sm:block">
              <p className="font-serif text-4xl font-semibold gold-gradient-text">20+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-base-content/60">Years of Craft</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Our Story</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Delhi NCR&apos;s Oldest Exclusive Lab-Grown Diamond Brand
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-base-content/70 sm:text-base">
              Welcome to Aadyaa Jewels. As a leading manufacturer, designer and retailer, we are redefining the
              jewellery industry by offering stunning, ethically-sourced and environmentally-conscious pieces that
              capture the brilliance of natural diamonds — without the environmental impact.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-base-content/70 sm:text-base">
              Our diamonds are carefully engineered to replicate the natural formation process, resulting in stones
              that are indistinguishable from mined diamonds, but without the ethical dilemmas. Identical in
              chemical, physical and optical properties — only kinder to the planet.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-base-content/70 sm:text-base">
              As mined diamonds are <em className="text-primary">#lovefromuniverse</em>, green diamonds are{" "}
              <em className="text-primary">#energyfromexistence</em>. The seed of a mined diamond is placed in a
              reactor, under the CVD method using solar energy — forming pure Type IIA diamonds.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="btn btn-primary rounded-full px-8 text-xs uppercase tracking-[0.25em]">
                Explore the Collection
              </Link>
              <Link
                href="/#visit"
                className="btn btn-outline rounded-full border-base-content/30 px-8 text-xs uppercase tracking-[0.25em]"
              >
                Visit the Showroom
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- NEW ARRIVALS ---------- */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Just landed</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">New Arrivals</h2>
          </div>
          <Link href="/shop?sort=newest" className="btn btn-outline rounded-full border-base-content/30 px-7 text-xs uppercase tracking-[0.25em]">
            View All →
          </Link>
        </div>

        <div className="mt-10">
          <Carousel slideClass="embla-products__slide" loop autoplay autoplayDelay={4200} showArrows>
            {newArrivals.map((product: any) => (
              <div key={product.id} className="px-2">
                <ProductCard product={product} />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* ---------- TRENDING COLLECTIONS ---------- */}
      <section className="bg-secondary text-secondary-content">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">Most loved</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Trending Collections</h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-secondary-content/70">
                The pieces our community can&apos;t stop wearing — bestsellers, bridal favourites and the
                solitaires redefining ethical luxury in India.
              </p>
              <div className="mt-8">
                <Carousel slideClass="embla-products__slide" loop autoplay autoplayDelay={3800} showArrows arrowsDark>
                  {featured.map((product: any) => (
                    <div key={product.id} className="px-2">
                      <ProductCard product={product} />
                    </div>
                  ))}
                </Carousel>
              </div>
          </div>
        </div>
      </section>

      {/* ---------- OUR PROMISE ---------- */}
      <section id="promise" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Why Aadyaa</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Our Promise</h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROMISES.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-base-200 bg-base-100 p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-base-300/50"
            >
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-base-200 text-2xl transition-colors group-hover:bg-primary/10">
                {p.icon}
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-base-content/60">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- LAB-GROWN DIFFERENCE ---------- */}
      <section id="difference" className="bg-base-200/60">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">The Science of Sparkle</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              CVD-Grown, Solar-Powered, <span className="gold-gradient-text">Type IIA Pure</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-base-content/70 sm:text-base">
              A seed of a mined diamond is placed in a reactor and grown under the Chemical Vapour Deposition (CVD)
              method — powered entirely by solar energy. The result is a Type IIA pure diamond: the rarest grade
              found in nature, chemically, physically and optically identical to mined diamonds.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "IGI / GIA certified with full grading reports",
                "HUID laser-inscribed for digital traceability",
                "Up to 70% more affordable than mined diamonds",
                "Zero mining footprint — 100% conflict-free",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-base-content/75">
                  <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-primary/15 text-xs text-primary">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 overflow-hidden rounded-2xl lg:order-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hero-1.jpg" alt="Type IIA lab-grown diamond ring" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="bg-secondary text-secondary-content relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 py-18 sm:px-6">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/story.jpg" alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-secondary/85" />
          </div>
          <div className="text-center relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">Love from our community</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Words that Sparkle</h2>
          </div>
          <div className="mt-12">
            <Carousel autoplay autoplayDelay={5000} showDots slideClass="embla-hero__slide">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="px-4 text-center sm:px-16">
                  <p className="font-serif text-6xl leading-none text-accent">&ldquo;</p>
                  <blockquote className="mx-auto max-w-3xl font-serif text-xl font-medium leading-relaxed text-secondary-content/90 sm:text-2xl">
                    {t.quote}
                  </blockquote>
                  <div className="mt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">{t.name}</p>
                    <p className="mt-1 text-xs text-secondary-content/50">{t.role}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* ---------- JOURNAL ---------- */}
      <section id="journal" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">The Journal</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Stories &amp; Guides</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {JOURNAL.map((a) => (
            <article key={a.title} className="group overflow-hidden rounded-2xl border border-base-200 bg-base-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="overflow-hidden aspect-[16/10]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.image} alt={a.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">{a.date}</p>
                <h3 className="mt-2 font-serif text-xl font-semibold leading-snug transition-colors group-hover:text-primary">
                  {a.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-base-content/60">{a.excerpt}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Read More →</p>
              </div>
            </article>
          ))}
        </div>
      </section>


      {/* ---------- VISIT / NEWSLETTER ---------- */}
      <section id="visit" className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-3.jpg" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">The Aadyaa Circle</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-base-100 sm:text-5xl">
            Private Previews, First
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-base-100/70">
            Join our newsletter for private collection previews, exclusive pricing and invitations to our New Delhi
            showroom — near Ashram, New Delhi.
          </p>
          <Newsletter />
        </div>
      </section>
    </>
  );
}
