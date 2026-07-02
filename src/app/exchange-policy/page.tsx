import type { Metadata } from "next";

import { ContentPageView } from "@/components/content/content-page";

export const metadata: Metadata = {
  title: "Exchange Policy - Vultures",
};

export default function ExchangePolicyPage() {
  return <ContentPageView pageId="exchange-policy" />;
}
