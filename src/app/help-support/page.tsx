import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help & Support - Gengy Summer",
};

export default function HelpSupportPage() {
  return (
    <div className="page-load-animate mx-auto max-w-[800px] px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold text-white text-center">Help & Support</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Link href="/track-order" className="rounded-xl border border-white/10 bg-[#111] p-6 transition-colors hover:border-[#9a1818]">
          <h2 className="mb-2 text-xl font-bold text-white">Track Order</h2>
          <p className="text-sm text-gray-400">Check the status of your recent orders</p>
        </Link>
        <Link href="/return-policy" className="rounded-xl border border-white/10 bg-[#111] p-6 transition-colors hover:border-[#9a1818]">
          <h2 className="mb-2 text-xl font-bold text-white">Returns &amp; Exchanges</h2>
          <p className="text-sm text-gray-400">Learn about our return policy and process</p>
        </Link>
        <Link href="/shipping-policy" className="rounded-xl border border-white/10 bg-[#111] p-6 transition-colors hover:border-[#9a1818]">
          <h2 className="mb-2 text-xl font-bold text-white">Shipping Info</h2>
          <p className="text-sm text-gray-400">View shipping rates and delivery times</p>
        </Link>
        <Link href="/contact-us" className="rounded-xl border border-white/10 bg-[#111] p-6 transition-colors hover:border-[#9a1818]">
          <h2 className="mb-2 text-xl font-bold text-white">Contact Us</h2>
          <p className="text-sm text-gray-400">Get in touch with our support team</p>
        </Link>
      </div>
    </div>
  );
}
