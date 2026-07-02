import { notFound } from "next/navigation";
import { Suspense } from "react";

import { Breadcrumb } from "@/components/shared/breadcrumb";
import { Pagination } from "@/components/shared/pagination";
import { SectionHeading } from "@/components/shared/section-heading";
import { CategoryToolbar } from "@/components/store/category-toolbar";
import { ProductGrid } from "@/components/store/product-grid";
import { ProductFilters } from "@/components/store/product-filters";
import {
  CATEGORY_MAP,
  type SortValue,
  getProductsByCategory,
  paginateProducts,
  sortProducts,
} from "@/lib/products";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string; sort?: string; view?: string }>;
};

export async function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const meta = CATEGORY_MAP[slug];
  if (!meta) return { title: "Category Not Found" };

  return {
    title: `${meta.title} - Vultures`,
    description: `Shop ${meta.title} at Vultures premium streetwear.`,
  };
}

export default async function CategoryPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const query = await searchParams;
  const meta = CATEGORY_MAP[slug];

  if (!meta) notFound();

  const page = Number(query.page ?? "1");
  const sort = (query.sort ?? "popularity") as SortValue;
  const view = query.view ?? "3";
  const products = sortProducts(getProductsByCategory(slug), sort);
  const pagination = paginateProducts(products, page);

  const isAllProducts = slug === "all-products";

  return (
    <div className="page-load-animate mx-auto max-w-[1200px] px-6 py-8">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: meta.title }]}
      />
      <SectionHeading title={meta.title} as="h1" />

      <Suspense fallback={null}>
        <CategoryToolbar
          start={pagination.start}
          end={pagination.end}
          total={pagination.total}
        />
      </Suspense>

      <div className={isAllProducts ? "mt-8 flex flex-col gap-8 lg:flex-row lg:items-start" : "mt-8"}>
        {isAllProducts && <ProductFilters />}
        <div className="flex-1">
          <ProductGrid products={pagination.items} view={view as string} />
        </div>
      </div>

      <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        basePath={`/category/${slug}`}
        searchParams={{ sort: query.sort }}
      />
    </div>
  );
}

