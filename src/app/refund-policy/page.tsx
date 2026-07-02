import type { Metadata } from "next";

import { ContentPageView } from "@/components/content/content-page";

export const metadata: Metadata = {
  title: "Refund Policy - Vultures",
};

export default function RefundPolicyPage() {
  return <ContentPageView pageId="refund-policy" />;
}
