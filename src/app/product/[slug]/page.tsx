import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductGallery from "@/components/product-gallery";
import AddToCart from "@/components/add-to-cart";
import ProductCard from "@/components/product-card";
import { getProductBySlug, getRelatedProducts } from "@/lib/data";
import { discountPercent, formatINR } from "@/lib/format";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description.slice(0, 155),
  };
}

const SPECS: Record<string, string> = {
  "Free Insured Shipping": "🚚",
  "HUID Certified": "💠",
  "Lifetime Polishing": "✨",
  "30-Day Returns": "↩️",
};

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const related = await getRelatedProducts(product.id, product.categoryId, 4);
  const discount = discountPercent(product.price, product.compareAtPrice);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {/* Breadcrumb */}
        <nav className="text-xs uppercase tracking-[0.2em] text-base-content/50" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-primary">Shop</Link>
          <span className="mx-2">/</span>
          <Link href={`/shop?category=${product.category.slug}`} className="hover:text-primary">
            {product.category.name}
          </Link>
        </nav>

        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              {product.isNew && <span className="badge badge-secondary badge-sm uppercase tracking-wider">New</span>}
              {discount && <span className="badge badge-primary badge-sm uppercase tracking-wider">Save {discount}%</span>}
              {product.isBestseller && <span className="badge badge-accent badge-sm text-secondary uppercase tracking-wider">Bestseller</span>}
            </div>

            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">{product.name}</h1>
            {product.tagline && <p className="mt-2 text-sm uppercase tracking-[0.2em] text-primary">{product.tagline}</p>}

            <div className="mt-4 flex items-center gap-3 text-sm">
              <span className="rating rating-sm">
                {[...Array(5)].map((_, i) => (
                  <input
                    key={i}
                    type="radio"
                    name="rating-static"
                    className="mask mask-star-2 bg-warning"
                    defaultChecked={i === Math.round(product.rating) - 1}
                    disabled
                  />
                ))}
              </span>
              <span className="font-medium">{product.rating.toFixed(1)}</span>
              <span className="text-base-content/50">· {product.reviews} reviews</span>
            </div>

            <div className="mt-6 flex items-baseline gap-3">
              <p className="font-serif text-3xl font-semibold">{formatINR(product.price)}</p>
              {product.compareAtPrice && (
                <p className="text-lg text-base-content/40 line-through">{formatINR(product.compareAtPrice)}</p>
              )}
            </div>
            <p className="mt-1 text-xs text-base-content/50">Inclusive of all taxes · EMI available at checkout</p>

            <div className="my-6 h-px bg-base-200" />

            {/* Specs */}
            <dl className="grid grid-cols-2 gap-4 text-sm">
              {[
                ["Metal", product.metal],
                ["Diamond Carat", product.carat ? `${product.carat.toFixed(1)} ct` : "—"],
                ["Clarity", product.clarity ?? "—"],
                ["Origin", "CVD · Solar Energy"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-base-200 bg-base-100 p-3">
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-base-content/50">{label}</dt>
                  <dd className="mt-1 font-medium">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6">
              <AddToCart
                productId={product.id}
                slug={product.slug}
                name={product.name}
                image={product.images[0]}
                price={product.price}
                metal={product.metal}
                stock={product.stock}
              />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {Object.entries(SPECS).map(([label, icon]) => (
                <div key={label} className="flex flex-col items-center gap-1.5 rounded-xl bg-base-200/70 px-2 py-3 text-center">
                  <span className="text-xl">{icon}</span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-base-content/60">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-2xl border border-base-200 bg-base-100 p-8">
            <h2 className="font-serif text-2xl font-semibold">The Story Behind the Sparkle</h2>
            <p className="mt-4 leading-relaxed text-base-content/75">{product.description}</p>
            <p className="mt-4 text-sm leading-relaxed text-base-content/60">
              This piece is crafted in our New Delhi atelier, grown from the seed of a mined diamond using the CVD
              method with solar energy. Each stone is Type IIA pure, laser-inscribed with its HUID and accompanied by
              a certification report.
            </p>
          </div>
          <div className="rounded-2xl bg-secondary p-8 text-secondary-content">
            <h3 className="font-serif text-xl font-semibold">The Aadyaa Assurance</h3>
            <ul className="mt-4 space-y-3 text-sm text-secondary-content/80">
              <li className="flex gap-2.5"><span className="text-accent">✦</span> IGI / GIA certified diamonds</li>
              <li className="flex gap-2.5"><span className="text-accent">✦</span> HUID laser inscription</li>
              <li className="flex gap-2.5"><span className="text-accent">✦</span> Free insured shipping across India</li>
              <li className="flex gap-2.5"><span className="text-accent">✦</span> 30-day easy returns</li>
              <li className="flex gap-2.5"><span className="text-accent">✦</span> Lifetime free polishing</li>
            </ul>
            <Link href="/#promise" className="btn btn-outline btn-sm mt-6 rounded-full border-secondary-content/40 text-secondary-content hover:border-accent hover:bg-accent hover:text-secondary">
              Our Promise
            </Link>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="font-serif text-3xl font-semibold">You May Also Love</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}