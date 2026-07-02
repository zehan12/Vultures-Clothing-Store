import Link from "next/link";

import { catalog } from "@/data/catalog";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-3">
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">Categories</h3>
          <nav className="flex flex-col gap-2">
            {catalog.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-white">Policies</h3>
          <nav className="flex flex-col gap-2">
            {catalog.policyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-white">Help</h3>
          <nav className="flex flex-col gap-2">
            {catalog.helpLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center">
        <p className="text-sm text-gray-500">
          Copyright 2026 © <span className="font-bold text-white">Huddie</span>
        </p>
      </div>
    </footer>
  );
}
