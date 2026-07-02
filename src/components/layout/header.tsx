"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, Search, X, Heart, Bell } from "lucide-react";

import { SearchModal } from "@/components/layout/search-modal";
import { catalog } from "@/data/catalog";
import { cn } from "@/lib/utils";

function CartIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z"
      />
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div className="mx-auto flex h-[70px] max-w-[1200px] items-center justify-between px-6 md:h-[90px]">
        <button
          type="button"
          className="p-2 text-white md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        <Link href="/" className="shrink-0">
          <Image
            src={catalog.assets.logo}
            alt="Gengy Summer"
            width={70}
            height={70}
            className="h-[40px] w-auto object-contain md:h-[55px]"
          />
        </Link>

        <nav className="hidden flex-1 flex-wrap items-center justify-center gap-x-5 gap-y-1 px-6 md:flex">
          {catalog.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-bold tracking-wider whitespace-nowrap text-white uppercase transition-colors hover:text-[#9a1818]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-4">
          <button
            type="button"
            className="text-white transition-colors hover:text-[#9a1818]"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="h-5 w-5" />
          </button>

          <Link
            href="/notifications"
            className="text-white transition-colors hover:text-[#9a1818]"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
          </Link>

          <Link
            href="/wishlist"
            className="text-white transition-colors hover:text-[#9a1818]"
            aria-label="Wishlist"
          >
            <Heart className="h-5 w-5" />
          </Link>

          <Link
            href="/account"
            className="hidden text-[13px] font-bold tracking-wider text-white uppercase transition-colors hover:text-[#9a1818] sm:block"
          >
            LOGIN
          </Link>

          <Link
            href="/cart"
            className="hidden items-center gap-1.5 text-[13px] tracking-wider text-white transition-colors hover:text-[#9a1818] sm:flex"
          >
            <span className="font-normal">CART /</span>
            <span>₹0.00</span>
            <span className="relative ml-1 inline-flex h-[30px] w-[28px] items-center justify-center">
              <CartIcon className="h-full w-full" />
              <span className="absolute top-[11px] left-1/2 -translate-x-1/2 text-[10px] leading-none font-bold text-white">
                0
              </span>
            </span>
          </Link>

          <Link
            href="/cart"
            className="relative inline-flex h-[28px] w-[26px] items-center justify-center text-white sm:hidden"
            aria-label="Cart"
          >
            <CartIcon className="h-full w-full" />
            <span className="absolute top-[10px] left-1/2 -translate-x-1/2 text-[9px] leading-none font-bold text-white">
              0
            </span>
          </Link>
        </div>
      </div>

      <nav
        className={cn(
          "border-t border-white/10 bg-black md:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <div className="mx-auto flex max-w-[1200px] flex-col gap-1 px-6 py-4">
          {catalog.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 text-[13px] font-bold tracking-wider text-white uppercase transition-colors hover:text-[#9a1818]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/account"
            className="py-2 text-[13px] font-bold tracking-wider text-white uppercase transition-colors hover:text-[#9a1818]"
            onClick={() => setMobileOpen(false)}
          >
            LOGIN
          </Link>
        </div>
      </nav>
    </header>
    <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
