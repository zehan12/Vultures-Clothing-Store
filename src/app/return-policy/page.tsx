import type { Metadata } from "next";

import { ContentPageView } from "@/components/content/content-page";

export const metadata: Metadata = {
  title: "Return Policy - Vultures",
};

export default function ReturnPolicyPage() {
  return <ContentPageView pageId="return-policy" />;
}
