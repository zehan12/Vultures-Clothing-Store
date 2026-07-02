"use client";

import { Plus, Minus, X } from "lucide-react";
import { useState } from "react";

const FILTER_SECTIONS = [
  "Gender",
  "Category",
  "Size",
  "Sport",
  "Brand",
  "Color",
];

export function ProductFilters() {
  const [openSection, setOpenSection] = useState<string | null>("Price");

  return (
    <div className="w-full shrink-0 lg:w-[280px]">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold text-white">Filters (1)</h2>
        <button className="text-sm font-medium text-[#4f46e5] hover:underline">
          Clear all <X className="ml-1 inline h-4 w-4" />
        </button>
      </div>

      <div className="divide-y divide-white/10 border-t border-white/10">
        <div className="py-4">
          <button
            className="flex w-full items-center justify-between font-medium text-white"
            onClick={() =>
              setOpenSection(openSection === "Price" ? null : "Price")
            }
          >
            Price
            {openSection === "Price" ? (
              <Minus className="h-5 w-5" />
            ) : (
              <Plus className="h-5 w-5" />
            )}
          </button>
          
          {openSection === "Price" && (
            <div className="mt-4 text-sm text-gray-400">
              <p className="mb-4">From ₹199 to ₹12,499</p>
              
              {/* Dummy Slider UI */}
              <div className="relative mb-6 h-2 w-full rounded-full bg-white/20">
                <div className="absolute left-[10%] h-full w-[80%] rounded-full bg-[#4f46e5]"></div>
                <div className="absolute left-[10%] top-1/2 -mt-2.5 h-5 w-5 -translate-x-1/2 rounded-full border-2 border-white bg-[#4f46e5]"></div>
                <div className="absolute left-[90%] top-1/2 -mt-2.5 h-5 w-5 -translate-x-1/2 rounded-full border-2 border-white bg-[#4f46e5]"></div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="mb-1 text-xs">Minimum</label>
                  <div className="rounded border border-white/20 px-3 py-2 text-white">
                    ₹199
                  </div>
                </div>
                <div className="flex-1">
                  <label className="mb-1 text-xs">Maximum</label>
                  <div className="rounded border border-white/20 px-3 py-2 text-white">
                    ₹12,499
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {FILTER_SECTIONS.map((section) => (
          <div key={section} className="py-4">
            <button
              className="flex w-full items-center justify-between font-medium text-white"
              onClick={() =>
                setOpenSection(openSection === section ? null : section)
              }
            >
              {section}
              {openSection === section ? (
                <Minus className="h-5 w-5" />
              ) : (
                <Plus className="h-5 w-5" />
              )}
            </button>
            {openSection === section && (
              <div className="mt-4 text-sm text-gray-400">
                Options for {section}...
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
