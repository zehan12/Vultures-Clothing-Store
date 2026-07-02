import type { Metadata } from "next";

import { ContentPageView } from "@/components/content/content-page";

export const metadata: Metadata = {
  title: "Terms of Service - Vultures",
};

export default function TermsOfServicePage() {
  return <ContentPageView pageId="terms-of-service" />;
}
