import catalogData from "./catalog.json";

export type Product = {
  id: string;
  discount: number;
  name: string;
  category: string;
  originalPrice: string;
  salePrice: string;
  slug: string;
  image: string;
  hoverImage: string;
};

export type FeaturedProduct = {
  slug: string;
  name: string;
  image: string;
  originalPrice: string;
  salePrice: string;
};

export type ProductSection = {
  id: string;
  title: string;
  products: Product[];
};

export type NavLink = {
  label: string;
  href: string;
};

export const catalog = catalogData as {
  sections: ProductSection[];
  footer: {
    bestSelling: FeaturedProduct[];
    bigDiscount: FeaturedProduct[];
  };
  navLinks: NavLink[];
  policyLinks: NavLink[];
  helpLinks: NavLink[];
  assets: {
    logo: string;
    hero: string;
  };
};
