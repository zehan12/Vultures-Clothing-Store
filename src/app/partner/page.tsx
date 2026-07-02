import type { Metadata } from "next";

import { ContentPageView } from "@/components/content/content-page";
import { contentPages } from "@/data/content";

export const metadata: Metadata = {
  title: "Partner With Us - Gengy Summer",
};

export default function PartnerPage() {
  return <ContentPageView page={contentPages["partner"]} />;
}
