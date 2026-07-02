import Link from "next/link";

import { catalog } from "@/data/catalog";

export function Hero() {
  return (
    <section className="page-load-animate relative w-full">
      <div
        className="relative flex min-h-[400px] items-end justify-center bg-cover bg-center pb-12 md:min-h-[550px]"
        style={{ backgroundImage: `url(${catalog.assets.hero})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex gap-4">
          <Link
            href="/category/hoodie"
            className="bg-[#9a1818] px-8 py-3 text-sm font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#7a1313]"
          >
            Shop Hoodie
          </Link>
          <Link
            href="/category/baggy-pants"
            className="bg-[#32373c] px-8 py-3 text-sm font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#9a1818]"
          >
            Shop Baggy
          </Link>
        </div>
      </div>
    </section>
  );
}
