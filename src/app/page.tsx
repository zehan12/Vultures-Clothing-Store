import { CategorySection } from "@/components/store/category-section";
import { FeaturedProducts } from "@/components/store/featured-products";
import { Hero } from "@/components/store/hero";
import { SuperSaleBanner } from "@/components/store/super-sale-banner";
import { CustomerReviews } from "@/components/store/customer-reviews";
import { catalog } from "@/data/catalog";

export default function Home() {
  const [baggy, hoodies, tshirts, hoodie] = catalog.sections;

  return (
    <>
      <Hero />
      <div className="mx-auto mt-8 max-w-[1200px] px-6">
        <CategorySection section={baggy} />
        <CategorySection section={hoodies} />
        <SuperSaleBanner />
        <CategorySection section={tshirts} />
        <CategorySection section={hoodie} />
        <FeaturedProducts
          bestSelling={catalog.footer.bestSelling}
          bigDiscount={catalog.footer.bigDiscount}
        />
      </div>
      <CustomerReviews />
    </>
  );
}
