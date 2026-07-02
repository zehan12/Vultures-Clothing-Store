import { catalog, type Product } from "@/data/catalog";

export const CATEGORY_MAP: Record<
  string,
  { title: string; sectionId?: string }
> = {
  "all-products": { title: "All Products" },
  "new-arrivals": { title: "New Arrivals" },
  "baggy-pants": { title: "Baggy Pants", sectionId: "baggy-pants" },
  "oversized-hoodies": {
    title: "Oversized Hoodies",
    sectionId: "oversized-hoodies",
  },
  "oversized-tshirts": {
    title: "Oversized T-shirts",
    sectionId: "oversized-tshirts",
  },
  shorts: { title: "Shorts", sectionId: "shorts" },
  hoodie: { title: "Hoodie", sectionId: "hoodie" },
  "tank-tops": { title: "Tank Tops" },
  jeans: { title: "Jeans" },
  accessories: { title: "Accessories" },
  clearance: { title: "Clearance" },
  basics: { title: "Basics" },
};

export const SORT_OPTIONS = [
  { value: "popularity", label: "Sort by popularity" },
  { value: "latest", label: "Sort by latest" },
  { value: "price-asc", label: "Sort by price: low to high" },
  { value: "price-desc", label: "Sort by price: high to low" },
  { value: "name", label: "Sort by name" },
] as const;

export type SortValue = (typeof SORT_OPTIONS)[number]["value"];

export const PRODUCTS_PER_PAGE = 12;

export function getAllProducts(): Product[] {
  return catalog.sections.flatMap((section) => section.products);
}

export function getProductsByCategory(slug: string): Product[] {
  const meta = CATEGORY_MAP[slug];
  if (!meta) return [];

  const all = getAllProducts();

  if (slug === "all-products" || slug === "accessories" || slug === "jeans" || slug === "tank-tops" || slug === "basics") {
    return all;
  }

  if (slug === "new-arrivals") {
    return sortProducts(all, "latest").slice(0, 20);
  }

  if (slug === "clearance") {
    return sortProducts(all, "price-asc").slice(0, 20);
  }

  const section = catalog.sections.find((item) => item.id === meta.sectionId);
  return section?.products ?? [];
}

export function getProductBySlug(slug: string): Product | undefined {
  const normalized = slug.startsWith("/product/") ? slug : `/product/${slug}`;
  return getAllProducts().find((product) => product.slug === normalized);
}

export function getCategorySlugForProduct(product: Product): string | undefined {
  const section = catalog.sections.find((item) =>
    item.products.some((entry) => entry.id === product.id),
  );
  return section?.id;
}

export function getCategoryHref(product: Product): string {
  const slug = getCategorySlugForProduct(product);
  return slug ? `/category/${slug}` : "/category/all-products";
}

export function getRelatedProducts(product: Product, limit = 8): Product[] {
  return getAllProducts()
    .filter(
      (entry) => entry.category === product.category && entry.id !== product.id,
    )
    .slice(0, limit);
}

export function parsePrice(price: string): number {
  return Number(price.replace(/[^\d.]/g, ""));
}

export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function sortProducts(products: Product[], sort: SortValue): Product[] {
  const sorted = [...products];

  switch (sort) {
    case "price-asc":
      return sorted.sort(
        (a, b) => parsePrice(a.salePrice) - parsePrice(b.salePrice),
      );
    case "price-desc":
      return sorted.sort(
        (a, b) => parsePrice(b.salePrice) - parsePrice(a.salePrice),
      );
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "latest":
      return sorted.reverse();
    default:
      return sorted;
  }
}

export function paginateProducts<T>(
  items: T[],
  page: number,
  perPage = PRODUCTS_PER_PAGE,
) {
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  return {
    items: items.slice(start, end),
    total,
    totalPages,
    currentPage,
    start: total === 0 ? 0 : start + 1,
    end: Math.min(end, total),
  };
}

export function getBulkDiscounts(salePrice: string) {
  const price = parsePrice(salePrice);
  return [
    {
      title: "Buy 2 Get 15% Extra Off",
      range: "2",
      discount: formatPrice(price * 0.85),
    },
    {
      title: "Buy 3 Get 35% Extra Off",
      range: "3",
      discount: formatPrice(price * 0.65),
    },
  ];
}

export function getProductImages(product: Product): string[] {
  const images = [product.image];
  if (product.hoverImage && product.hoverImage !== product.image) {
    images.push(product.hoverImage);
  }
  return images;
}
