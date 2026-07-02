import type { Metadata } from "next";

import { ContentPageView } from "@/components/content/content-page";
import { contentPages } from "@/data/content";

export const metadata: Metadata = {
  title: "Return Policy - Vultures",
};

export default function ReturnPolicyPage() {
  return <ContentPageView page={contentPages["return-policy"]} />;
}
