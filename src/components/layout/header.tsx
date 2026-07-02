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
          className="p-2 text-white lg:hidden"
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

        <nav className="hidden flex-1 items-center justify-center gap-x-3 lg:gap-x-4 xl:gap-x-5 px-4 lg:flex">
          {catalog.navLinks.map((link) => (
            <div key={link.label} className="group relative">
              <Link
                href={link.href || "#"}
                className={cn(
                  "py-4 text-[11px] xl:text-[13px] font-bold tracking-wider whitespace-nowrap uppercase transition-colors flex items-center gap-1.5 lg:gap-2",
                  link.label === "Clearance" ? "text-white" : "text-white hover:text-[#9a1818]"
                )}
              >
                {link.label === "Clearance" && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
                  </span>
                )}
                <span>{link.label}</span>
                {link.label === "Clearance" && (
                  <span className="rounded-full bg-[#1a0505] px-2 py-0.5 text-[10px] text-red-500 ring-1 ring-red-900/50">
                    SALE
                  </span>
                )}
              </Link>
              {link.items && (
                <div className="absolute top-full left-1/2 z-50 hidden min-w-[200px] -translate-x-1/2 flex-col border border-white/10 bg-black py-2 group-hover:flex">
                  {link.items.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href || "#"}
                      className="px-6 py-3 text-[13px] font-bold tracking-wider whitespace-nowrap text-white uppercase transition-colors hover:bg-white/5 hover:text-[#9a1818]"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3 lg:gap-4">
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
          "border-t border-white/10 bg-black lg:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <div className="mx-auto flex max-w-[1200px] flex-col gap-1 px-6 py-4">
          {catalog.navLinks.map((link) => (
            <div key={link.label} className="flex flex-col">
              <Link
                href={link.href || "#"}
                className={cn(
                  "py-2 text-[13px] font-bold tracking-wider uppercase transition-colors flex items-center gap-2",
                  link.label === "Clearance" ? "text-white" : "text-white hover:text-[#9a1818]"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label === "Clearance" && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
                  </span>
                )}
                <span>{link.label}</span>
                {link.label === "Clearance" && (
                  <span className="rounded-full bg-[#1a0505] px-2 py-0.5 text-[10px] text-red-500 ring-1 ring-red-900/50">
                    SALE
                  </span>
                )}
              </Link>
              {link.items && (
                <div className="flex flex-col pl-4">
                  {link.items.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href || "#"}
                      className="py-2 text-[13px] font-bold tracking-wider text-gray-400 uppercase transition-colors hover:text-[#9a1818]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
