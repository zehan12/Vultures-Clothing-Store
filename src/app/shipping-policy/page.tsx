import type { Metadata } from "next";

import { ContentPageView } from "@/components/content/content-page";

export const metadata: Metadata = {
  title: "Shipping Policy - Vultures",
};

export default function ShippingPolicyPage() {
  return <ContentPageView pageId="shipping-policy" />;
}
