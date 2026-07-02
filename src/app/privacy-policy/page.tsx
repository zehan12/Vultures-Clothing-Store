import type { Metadata } from "next";

import { ContentPageView } from "@/components/content/content-page";
import { contentPages } from "@/data/content";

export const metadata: Metadata = {
  title: "Privacy Policy - Vultures",
};

export default function PrivacyPolicyPage() {
  return <ContentPageView page={contentPages["privacy-policy"]} />;
}
