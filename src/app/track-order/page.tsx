import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumb } from "@/components/shared/breadcrumb";

export const metadata: Metadata = {
  title: "Track Order - Gengy Summer",
};

export default function TrackOrderPage() {
  return (
    <div className="page-load-animate mx-auto max-w-[800px] px-6 py-12">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Track Order" }]}
      />
      <h1 className="mb-4 text-3xl font-bold text-white">Track Your Order</h1>
      <p className="mb-8 text-sm text-gray-400">
        Enter your Order ID or Transaction ID to check the status of your order.
      </p>

      <form className="space-y-4">
        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Order ID / Transaction ID <span className="text-[#dd3333]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. GS17756778039723ycrl5"
            className="w-full rounded-xl border border-white/20 bg-black px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-[#9a1818] focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-[#9a1818] py-3 text-sm font-bold text-white transition-colors hover:bg-[#7a1313] sm:w-auto sm:px-10"
        >
          Search
        </button>
      </form>

      <div className="mt-10 text-sm text-gray-400">
        <p className="mb-2 font-bold text-white">Need Help?</p>
        <p>
          If you have any issues tracking your order, please{" "}
          <Link href="/contact-us" className="text-[#9a1818] hover:underline">
            contact us
          </Link>{" "}
          with your order details.
        </p>
      </div>
    </div>
  );
}
