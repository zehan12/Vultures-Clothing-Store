import type { Metadata } from "next";

import { ContentPageView } from "@/components/content/content-page";
import { contentPages } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us - Vultures",
};

export default function AboutUsPage() {
  return <ContentPageView page={contentPages["about-us"]} />;
}
