"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

import type { Product } from "@/data/catalog";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProductGrid } from "@/components/store/product-grid";
import {
  getBulkDiscounts,
  getCategoryHref,
  getProductImages,
} from "@/lib/products";
import { cn } from "@/lib/utils";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

export function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const images = getProductImages(product);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description",
  );

  const bulkDiscounts = getBulkDiscounts(product.salePrice);
  const brandQuote = product.name.split(" ")[0]?.toUpperCase() ?? "VULTURES";

  return (
    <div className="page-load-animate mx-auto max-w-[1200px] px-6 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: product.category, href: getCategoryHref(product) },
          { label: product.name },
        ]}
      />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#111]">
            {product.discount > 0 && (
              <span className="absolute top-3 left-3 z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#9a1818] text-xs leading-none font-bold text-white">
                -{product.discount}%
              </span>
            )}
            <Image
              src={images[activeImage]}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="cursor-zoom-in object-contain p-4 transition-transform duration-500 hover:scale-110"
            />
          </div>

          {images.length > 1 && (
            <div className="mt-3 flex gap-2 overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={cn(
                    "relative h-20 w-16 shrink-0 overflow-hidden rounded-lg border-2 bg-[#111]",
                    activeImage === index
                      ? "border-[#9a1818]"
                      : "border-transparent hover:border-white/30",
                  )}
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="text-2xl font-bold text-white md:text-[28px]">
            {product.name}
          </h1>
          <div className="mt-4 h-[2px] w-10 bg-white/20" />
          <div className="mt-4 flex items-baseline gap-3">
            <span className="price-original text-lg">
              {product.originalPrice}
            </span>
            <span className="price-sale text-2xl">{product.salePrice}</span>
          </div>

          <div className="mt-6 overflow-hidden rounded-lg border border-white/10">
            <table className="w-full text-sm">
              <thead className="bg-[#111] text-left text-gray-400">
                <tr>
                  <th className="px-4 py-3 font-medium">Title</th>
                  <th className="px-4 py-3 font-medium">Range</th>
                  <th className="px-4 py-3 font-medium">Discount</th>
                </tr>
              </thead>
              <tbody>
                {bulkDiscounts.map((row) => (
                  <tr key={row.title} className="border-t border-white/10">
                    <td className="px-4 py-3 text-white">{row.title}</td>
                    <td className="px-4 py-3 text-gray-400">{row.range}</td>
                    <td className="px-4 py-3 font-bold text-white">
                      {row.discount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6">
            <p className="mb-3 text-sm font-bold tracking-wider text-white uppercase">
              Size
            </p>
            <div className="flex flex-wrap gap-2">
              {SIZES.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "h-11 w-11 rounded-full border-2 text-sm font-bold transition-colors",
                    selectedSize === size
                      ? "border-[#9a1818] bg-[#9a1818] text-white"
                      : "border-white/20 text-white hover:border-[#9a1818]",
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <div className="flex items-center border border-white/20">
              <button
                type="button"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                className="px-3 py-3 text-white hover:text-[#9a1818]"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-[40px] px-2 text-center text-white">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((value) => value + 1)}
                className="px-3 py-3 text-white hover:text-[#9a1818]"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              className="flex-1 bg-[#9a1818] py-3 text-sm font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#7a1313]"
            >
              Add to cart
            </button>
          </div>

          <div className="mt-6 flex items-center gap-3">
            {["f", "t", "p", "in"].map((network) => (
              <button
                key={network}
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs font-bold text-white uppercase transition-colors hover:border-[#9a1818] hover:text-[#9a1818]"
              >
                {network}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex border-b border-white/10">
          {(["description", "reviews"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={cn(
                "relative px-6 py-3 text-sm font-bold tracking-wider uppercase transition-colors",
                activeTab === tab
                  ? "text-white"
                  : "text-gray-500 hover:text-white",
              )}
            >
              {tab === "description" ? "Description" : "Reviews (0)"}
              {activeTab === tab && (
                <span className="absolute right-0 bottom-0 left-0 h-[3px] bg-[#9a1818]" />
              )}
            </button>
          ))}
        </div>

        {activeTab === "description" ? (
          <div className="space-y-4 py-6 text-sm leading-relaxed text-gray-300">
            <ul className="list-inside list-disc space-y-2">
              <li>100% Premium Biowashed Cotton</li>
              <li>Elastic Drawstrings Attached</li>
              <li>Heavy Weight Brushed Cotton Fleece</li>
              <li>Baggy Straight Fit Sweatpants</li>
              <li>Black Colour</li>
              <li>Biowashed | Combed | Hypo-Allergic Fabric</li>
              <li>GOTS Organic Cotton Certified</li>
            </ul>
            <p className="font-bold text-white">
              &quot;{brandQuote}&quot; BY RAGE STUDIOS ©
            </p>
            <p>♡ Proudly Made in India</p>
            <p className="text-gray-500">
              note : the above product is artisan stitched and screen printed,
              crafted by human hands, not machines :))
            </p>
          </div>
        ) : (
          <p className="py-6 text-sm text-gray-400">No reviews yet.</p>
        )}
      </div>

      {related.length > 0 && (
        <div className="mt-12">
          <SectionHeading title="Related Products" />
          <ProductGrid products={related} />
        </div>
      )}
    </div>
  );
}
