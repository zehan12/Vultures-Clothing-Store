import type { Metadata } from "next";

import { ContentPageView } from "@/components/content/content-page";

export const metadata: Metadata = {
  title: "Privacy Policy - Vultures",
};

export default function PrivacyPolicyPage() {
  return <ContentPageView pageId="privacy-policy" />;
}
