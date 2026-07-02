import { ArrowRight, PackageSearch } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exchange Portal - Gengy Summer",
};

export default function ExchangePortalPage() {
  return (
    <div className="mx-auto max-w-[800px] px-6 py-12 text-center md:py-24">
      <PackageSearch className="mx-auto mb-6 h-16 w-16 text-white" />
      <h1 className="mb-4 text-3xl font-bold uppercase tracking-widest text-white md:text-5xl">
        Exchange Portal
      </h1>
      <p className="mx-auto mb-8 max-w-[600px] text-gray-400">
        Enter your order details below to initiate an exchange for your item.
      </p>

      <div className="mx-auto max-w-[500px] space-y-4">
        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="orderId" className="text-sm font-bold text-gray-400">ORDER NUMBER</label>
          <input 
            type="text" 
            id="orderId"
            className="w-full border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#9a1818] focus:outline-none" 
            placeholder="e.g. #GEN1234"
          />
        </div>
        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="email" className="text-sm font-bold text-gray-400">EMAIL OR PHONE</label>
          <input 
            type="text" 
            id="email"
            className="w-full border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#9a1818] focus:outline-none" 
            placeholder="Enter email or phone number"
          />
        </div>
        <button className="mt-4 flex w-full items-center justify-center gap-2 bg-white px-8 py-4 text-[13px] font-bold tracking-wider text-black uppercase transition-colors hover:bg-gray-200">
          Find Order <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
