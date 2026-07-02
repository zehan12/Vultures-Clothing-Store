import Link from "next/link";

import { catalog } from "@/data/catalog";

export function Footer() {
  const footerLinks = [
    { label: "TRACK MY ORDER", href: "/track-order" },
    { label: "EXCHANGE PORTAL", href: "/exchange-portal" },
    { label: "GENRAGE Reviews", href: "/reviews" },
    { label: "Exchange Policy", href: "/exchange-policy" },
    { label: "Policies", href: "/policies" },
    { label: "About us", href: "/about-us" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "PARTNER WITH US", href: "/partner" },
    { label: "Blogs", href: "/blogs" },
  ];

  return (
    <footer className="mt-16 border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-[1200px] flex-col px-6 py-12 md:py-16">
        <nav className="flex flex-col gap-4 text-center md:text-left">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-light text-gray-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10 py-6 text-center">
        <p className="text-sm text-gray-500">
          Copyright 2026 © <span className="font-bold text-white">GENRAGE</span>
        </p>
      </div>
    </footer>
  );
}
