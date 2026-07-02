import type { Metadata } from "next";

import { ContentPageView } from "@/components/content/content-page";
import { contentPages } from "@/data/content";

export const metadata: Metadata = {
  title: "Terms of Service - Vultures",
};

export default function TermsOfServicePage() {
  return <ContentPageView page={contentPages["terms-of-service"]} />;
}
