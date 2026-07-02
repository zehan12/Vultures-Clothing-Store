import type { Product } from "@/data/catalog";
import { ProductCard } from "@/components/store/product-card";
import { cn } from "@/lib/utils";

export function ProductGrid({
  products,
  view = "3",
}: {
  products: Product[];
  view?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-4 md:gap-6",
        view === "2" && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2",
        view === "3" && "grid-cols-2 sm:grid-cols-3 lg:grid-cols-3",
        view === "list" && "grid-cols-1 lg:grid-cols-4", // Assuming list is a 4 col layout on desktop based on image 3
        !["2", "3", "list"].includes(view) && "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
