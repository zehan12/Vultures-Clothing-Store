"use client";

import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/data/catalog";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card group relative text-center">
      <Link
        href={product.slug}
        className="relative block aspect-[3/4] overflow-hidden bg-[#0d0d0d]"
      >
        {product.discount > 0 && (
          <span className="absolute top-3 left-3 z-10 flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#9a1818] text-[11px] leading-none font-bold text-white">
            -{product.discount}%
          </span>
        )}

        <div className="product-image-main absolute inset-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain p-2"
          />
        </div>

        {product.hoverImage && (
          <div className="product-image-hover absolute inset-0">
            <Image
              src={product.hoverImage}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-contain p-2"
            />
          </div>
        )}

        <button
          type="button"
          className="quick-view-btn absolute bottom-3 left-1/2 z-10 flex items-center gap-1.5 rounded-sm bg-white px-4 py-2 text-xs font-bold tracking-wider text-black uppercase transition-colors hover:bg-[#9a1818] hover:text-white"
          onClick={(event) => event.preventDefault()}
        >
          Quick View
        </button>
      </Link>

      <div className="mt-3 space-y-1 px-1">
        <p className="text-[11px] tracking-widest text-gray-500 uppercase">
          {product.category}
        </p>
        <Link href={product.slug} className="block">
          <h3 className="line-clamp-2 text-[13px] leading-snug font-bold text-white transition-colors hover:text-[#9a1818]">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-2 pt-0.5">
          <span className="price-original">{product.originalPrice}</span>
          <span className="price-sale">{product.salePrice}</span>
        </div>
      </div>

      <button
        type="button"
        className="add-cart-btn mt-2 w-full bg-[#32373c] py-2 text-[11px] font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#9a1818]"
      >
        Add to cart
      </button>
    </div>
  );
}
