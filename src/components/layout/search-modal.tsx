"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export function SearchModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center bg-black/80 px-6 pt-24">
      <button
        type="button"
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Close search"
      />
      <div className="relative w-full max-w-xl">
        <div className="flex items-center border border-white/20 bg-black">
          <input
            ref={inputRef}
            type="search"
            placeholder="Search products..."
            className="flex-1 bg-transparent px-4 py-4 text-sm text-white placeholder:text-gray-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-4 text-white hover:text-[#9a1818]"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
