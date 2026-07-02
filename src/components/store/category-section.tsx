import type { ProductSection } from "@/data/catalog";
import { ProductCard } from "@/components/store/product-card";

export function CategorySection({ section }: { section: ProductSection }) {
  return (
    <section className="py-10">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 h-[2px] w-16 bg-[#9a1818]" />
        <h2 className="text-xl font-bold tracking-wider text-white uppercase md:text-2xl">
          {section.title}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {section.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
