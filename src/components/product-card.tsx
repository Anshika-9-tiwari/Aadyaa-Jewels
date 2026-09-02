import Link from "next/link";
import type { Category, Product } from "@prisma/client";
import QuickAdd from "@/components/quick-add";
import { discountPercent, formatINR } from "@/lib/format";

type ProductWithCategory = Product & { category: Category };

export default function ProductCard({ product }: { product: ProductWithCategory }) {
  const discount = discountPercent(product.price, product.compareAtPrice);

  return (
    <div className="group card overflow-hidden rounded-2xl border border-base-200 bg-base-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-base-300/60">
      <Link href={`/product/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden bg-base-200">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.isNew && <span className="badge badge-secondary badge-sm border-0 uppercase tracking-wider">New</span>}
          {discount && (
            <span className="badge badge-primary badge-sm border-0 uppercase tracking-wider">−{discount}%</span>
          )}
          {product.isBestseller && (
            <span className="badge badge-accent badge-sm border-0 text-secondary uppercase tracking-wider">Bestseller</span>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-serif text-lg font-semibold leading-tight transition-colors text-primary">
            {product.name}
          </h3>
        </Link>
        {product.tagline && (
          <p className="mt-0.5 line-clamp-1 text-xs text-base-content/50">{product.tagline}</p>
        )}

        <div className="mt-2 flex items-center gap-2 text-xs text-base-content/50">
          <span className="text-warning">★★★★★</span>
          <span>{product.rating.toFixed(1)}</span>
          <span>·</span>
          <span>{product.reviews} reviews</span>
        </div>

        <div className="mt-2.5 flex items-baseline gap-2">
          <p className="font-serif text-lg font-semibold text-primary">{formatINR(product.price)}</p>
          {product.compareAtPrice && (
            <p className="text-sm text-base-content/40 line-through">{formatINR(product.compareAtPrice)}</p>
          )}
        </div>

        <div className="mt-3">
          <QuickAdd
            productId={product.id}
            slug={product.slug}
            name={product.name}
            image={product.images[0]}
            price={product.price}
            metal={product.metal}
          />
        </div>
      </div>
    </div>
  );
}
