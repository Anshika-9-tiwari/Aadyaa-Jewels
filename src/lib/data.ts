import { prisma } from "@/lib/prisma";

export async function getCategories() {
  return prisma.category.findMany({
    orderBy: { sortOrder: "asc" },
    include: { _count: { select: { products: true } } },
  });
}

export async function getFeaturedProducts(limit = 8) {
  return prisma.product.findMany({
    where: { featured: true },
    take: limit,
    orderBy: { createdAt: "desc" },
    include: { category: true },
  });
}

export async function getNewArrivals(limit = 10) {
  return prisma.product.findMany({
    where: { isNew: true },
    take: limit,
    orderBy: { createdAt: "desc" },
    include: { category: true },
  });
}

export async function getBestsellers(limit = 8) {
  return prisma.product.findMany({
    where: { isBestseller: true },
    take: limit,
    orderBy: { reviews: "desc" },
    include: { category: true },
  });
}

export async function getProductBySlug(slug: string) {
  return prisma.product.findUnique({
    where: { slug },
    include: { category: true },
  });
}

export async function getRelatedProducts(productId: string, categoryId: string, limit = 4) {
  return prisma.product.findMany({
    where: { categoryId, id: { not: productId } },
    take: limit,
    include: { category: true },
  });
}

export async function getShopProducts(params: {
  category?: string;
  q?: string;
  sort?: string;
}) {
  const { category, q, sort } = params;

  const where = {
    ...(category && category !== "all" ? { category: { slug: category } } : {}),
    ...(q
      ? {
          OR: [
            { name: { contains: q, mode: "insensitive" as const } },
            { tagline: { contains: q, mode: "insensitive" as const } },
            { description: { contains: q, mode: "insensitive" as const } },
          ],
        }
      : {}),
  };

  const orderBy =
    sort === "price-asc"
      ? { price: "asc" as const }
      : sort === "price-desc"
        ? { price: "desc" as const }
        : sort === "rating"
          ? { rating: "desc" as const }
          : { createdAt: "desc" as const };

  const [products, total] = await Promise.all([
    prisma.product.findMany({ where, orderBy, include: { category: true } }),
    prisma.product.count({ where }),
  ]);

  return { products, total };
}
