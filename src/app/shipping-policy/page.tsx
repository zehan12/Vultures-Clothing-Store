import type { Metadata } from "next";

import { ContentPageView } from "@/components/content/content-page";
import { contentPages } from "@/data/content";

export const metadata: Metadata = {
  title: "Shipping Policy - Vultures",
};

export default function ShippingPolicyPage() {
  return <ContentPageView page={contentPages["shipping-policy"]} />;
}
