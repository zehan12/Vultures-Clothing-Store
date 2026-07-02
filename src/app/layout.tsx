import type { Metadata } from "next";
import { Dancing_Script, Lato } from "next/font/google";

import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import "./globals.css";

const lato = Lato({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Gengy Summer - Premium Streetwear",
  description:
    "Stock clearance sale 35% Extra Discount on premium streetwear. Baggy Pants, Oversized Hoodies, T-shirts & more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-black text-white">
        <AnnouncementBar />
        <Header />
        <main className="flex-1 bg-black">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
