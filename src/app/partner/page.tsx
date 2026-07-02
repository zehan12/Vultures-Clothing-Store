import type { Metadata } from "next";

import { ContentPageView } from "@/components/content/content-page";

export const metadata: Metadata = {
  title: "Partner With Us - Vultures",
};

export default function PartnerPage() {
  return <ContentPageView pageId="partner" />;
}
