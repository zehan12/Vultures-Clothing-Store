import type { Metadata } from "next";

import { ContentPageView } from "@/components/content/content-page";
import { contentPages } from "@/data/content";

export const metadata: Metadata = {
  title: "Policies - Vultures",
};

export default function PoliciesPage() {
  return <ContentPageView page={contentPages["policies"]} />;
}
