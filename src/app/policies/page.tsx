import type { Metadata } from "next";

import { ContentPageView } from "@/components/content/content-page";

export const metadata: Metadata = {
  title: "Policies - Vultures",
};

export default function PoliciesPage() {
  return <ContentPageView pageId="policies" />;
}
