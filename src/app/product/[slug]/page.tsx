import { notFound } from "next/navigation";

import { ProductDetail } from "@/components/store/product-detail";
import { getAllProducts, getProductBySlug, getRelatedProducts } from "@/lib/products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProducts().map((product) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} - Vultures`,
    description: `Buy ${product.name} at ${product.salePrice}. Premium streetwear with free shipping.`,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = getRelatedProducts(product);

  return <ProductDetail product={product} related={related} />;
}
