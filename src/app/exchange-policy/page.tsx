import type { Metadata } from "next";

import { ContentPageView } from "@/components/content/content-page";
import { contentPages } from "@/data/content";

export const metadata: Metadata = {
  title: "Exchange Policy - Gengy Summer",
};

export default function ExchangePolicyPage() {
  return <ContentPageView page={contentPages["exchange-policy"]} />;
}
