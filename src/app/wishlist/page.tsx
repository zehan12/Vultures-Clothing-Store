import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wishlist - Vultures",
};

export default function WishlistPage() {
  return (
    <div className="page-load-animate mx-auto max-w-[1200px] px-6 py-20 text-center">
      <h1 className="text-3xl font-bold text-white">Your wishlist is empty</h1>
      <p className="mt-4 text-gray-400">
        Save items you love to your wishlist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block bg-[#9a1818] px-8 py-3 text-sm font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#7a1313]"
      >
        Return to shop
      </Link>
    </div>
  );
}
