import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Profile - Vultures",
};

export default function ProfilePage() {
  return (
    <div className="page-load-animate mx-auto max-w-[800px] px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold text-white">My Profile</h1>
      
      <div className="rounded-xl border border-white/10 bg-[#111] p-6 md:p-8">
        <div className="mb-8 flex items-center gap-4 border-b border-white/10 pb-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#9a1818] text-xl font-bold text-white">
            GS
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">John Doe</h2>
            <p className="text-sm text-gray-400">john.doe@example.com</p>
          </div>
        </div>

        <div className="space-y-4">
          <Link href="/track-order" className="flex items-center justify-between rounded-xl border border-white/10 bg-black p-4 transition-colors hover:border-[#9a1818]">
            <span className="font-bold text-white">My Orders</span>
            <span className="text-gray-400">→</span>
          </Link>
          <Link href="/wishlist" className="flex items-center justify-between rounded-xl border border-white/10 bg-black p-4 transition-colors hover:border-[#9a1818]">
            <span className="font-bold text-white">Wishlist</span>
            <span className="text-gray-400">→</span>
          </Link>
          <Link href="/account" className="flex items-center justify-between rounded-xl border border-white/10 bg-black p-4 transition-colors hover:border-[#9a1818]">
            <span className="font-bold text-white">Account Settings</span>
            <span className="text-gray-400">→</span>
          </Link>
          <button className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-black p-4 text-left transition-colors hover:border-[#9a1818]">
            <span className="font-bold text-[#dd3333]">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
