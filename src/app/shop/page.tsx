import Link from "next/link";
import type { Metadata } from "next";
import ProductCard from "@/components/product-card";
import SortSelect from "@/components/sort-select";
import { getCategories, getShopProducts } from "@/lib/data";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export const metadata: Metadata = {
  title: "Shop All Jewellery",
  description:
    "Browse lab-grown diamond rings, solitaires, pendants, earrings, necklaces and bangles — HUID certified and ethically grown.",
};

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ category?: string; q?: string; sort?: string }>;

const SORTS = [
  { value: "newest", label: "Newest First" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export default async function ShopPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const category = params.category ?? "all";
  const q = params.q ?? "";
  const sort = params.sort ?? "newest";

  const [categories, { products, total }] = await Promise.all([
    getCategories(),
    getShopProducts({ category, q, sort }),
  ]);

  const buildHref = (next: Record<string, string | undefined>) => {
    const sp = new URLSearchParams();
    const merged = { category, q, sort, ...next };
    if (merged.category && merged.category !== "all") sp.set("category", merged.category);
    if (merged.q) sp.set("q", merged.q);
    if (merged.sort && merged.sort !== "newest") sp.set("sort", merged.sort);
    const qs = sp.toString();
    return qs ? `/shop?${qs}` : "/shop";
  };

  return (
    <>
      {/* Page header */}
      <section className="border-b border-base-200 bg-base-200/50">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">The Collection</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
            {q ? `Results for “${q}”` : category === "all" ? "Shop All Jewellery" : categories.find((c: { slug: string; }) => c.slug === category)?.name ?? "Shop"}
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-base-content/60">
            {q
              ? `${total} design${total === 1 ? "" : "s"} found — grown from the seed of a mined diamond.`
              : categories.find((c: { slug: string; }) => c.slug === category)?.description ??
                "Every piece is lab-grown, HUID certified and crafted in New Delhi."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-2 py-10 sm:px-4">
        {/* Filters */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            <Link
              href={buildHref({ category: "all" })}
              className={`btn btn-sm rounded-full px-5 text-xs uppercase tracking-[0.12em] ${
                category === "all" ? "btn-primary" : "btn-ghost border border-base-300"
              }`}  
            >
              All
            </Link>
            {categories.map((c: { id: Key | null | undefined; slug: string; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
              <Link
                key={c.id}
                href={buildHref({ category: c.slug })}
                className={`btn btn-sm rounded-full px-4 text-xs uppercase tracking-[0.12em] ${
                  category === c.slug ? "btn-primary" : "btn-ghost border border-base-300"
                }`}
              >
                {c.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs  tracking-[0.1em] text-base-content/80">{total} pieces</span>
            <SortSelect category={category} q={q} currentSort={sort} options={SORTS} />
          </div> 
        </div>

        {/* Grid */}
        {products.length === 0 ? (
          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <span className="text-5xl">🔍</span>
            <p className="font-serif text-2xl">No pieces found</p>
            <p className="max-w-md text-sm text-base-content/60">
              Try a different search term or browse the full collection.
            </p>
            <Link href="/shop" className="btn btn-primary btn-sm rounded-full px-8">
              View All
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
            {products.map(
              (
                product: Awaited<ReturnType<typeof getShopProducts>>["products"][number],
              ) => (
                <ProductCard key={product.id} product={product} />
              ),
            )}
          </div>
        )}
      </section>
    </>
  );
}