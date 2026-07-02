import Image from "next/image";
import Link from "next/link";

import type { FeaturedProduct } from "@/data/catalog";

function FeaturedCard({
  title,
  products,
}: {
  title: string;
  products: FeaturedProduct[];
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#111] p-5">
      <h3 className="mb-4 text-lg font-bold text-white">{title}</h3>
      <div className="space-y-3">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={product.slug}
            className="group flex items-center gap-3"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={60}
              height={60}
              className="shrink-0 rounded-lg object-cover"
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white transition-colors group-hover:text-[#9a1818]">
                {product.name}
              </p>
              <p className="mt-0.5 text-xs">
                <span className="price-original">{product.originalPrice}</span>{" "}
                <span className="price-sale">{product.salePrice}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function FeaturedProducts({
  bestSelling,
  bigDiscount,
}: {
  bestSelling: FeaturedProduct[];
  bigDiscount: FeaturedProduct[];
}) {
  return (
    <div className="mt-12 mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
      <FeaturedCard title="Best Selling" products={bestSelling} />
      <FeaturedCard title="Big Discount" products={bigDiscount} />
    </div>
  );
}
