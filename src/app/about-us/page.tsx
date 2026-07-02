import type { Metadata } from "next";

import { ContentPageView } from "@/components/content/content-page";

export const metadata: Metadata = {
  title: "About Us - Vultures",
};

export default function AboutUsPage() {
  return <ContentPageView pageId="about-us" />;
}
