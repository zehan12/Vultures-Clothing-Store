import type { Metadata } from "next";

import { ContentPageView } from "@/components/content/content-page";
import { contentPages } from "@/data/content";

export const metadata: Metadata = {
  title: "Refund Policy - Gengy Summer",
};

export default function RefundPolicyPage() {
  return <ContentPageView page={contentPages["refund-policy"]} />;
}
