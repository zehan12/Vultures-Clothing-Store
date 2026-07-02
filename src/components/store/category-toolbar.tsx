"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LayoutGrid, Grid3x3, AlignJustify } from "lucide-react";
import { SORT_OPTIONS, type SortValue } from "@/lib/products";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";

export function CategoryToolbar({
  start,
  end,
  total,
}: {
  start: number;
  end: number;
  total: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { t } = useLanguage();

  const currentSort = searchParams.get("sort") || "popularity";
  const currentView = searchParams.get("view") || "3-grid";

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", e.target.value);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleViewChange = (view: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", view);
    router.push(`${pathname}?${params.toString()}`);
  };

  // Helper to translate sort option labels
  const getSortLabel = (label: string) => {
    if (label === "SORT BY POPULARITY") return t("common.sortByPopularity");
    if (label === "PRICE: LOW TO HIGH") return t("common.priceLowToHigh");
    if (label === "PRICE: HIGH TO LOW") return t("common.priceHighToLow");
    if (label === "NEWEST FIRST") return t("common.newest");
    return label;
  };

  return (
    <div className="flex flex-col items-center justify-between gap-4 border-b border-white/10 pb-4 sm:flex-row">
      <div className="flex items-center gap-4">
        {/* View toggles remain the same */}
        <div className="flex items-center gap-2">
          <button 
            type="button" 
            className={cn(
              "text-gray-400 transition-colors hover:text-white",
              currentView === "2-grid" && "text-white"
            )}
            onClick={() => handleViewChange("2-grid")}
            aria-label="2 columns view"
          >
            <LayoutGrid className="h-5 w-5" />
          </button>
          <button 
            type="button" 
            className={cn(
              "text-gray-400 transition-colors hover:text-white hidden sm:block",
              currentView === "3-grid" && "text-white"
            )}
            onClick={() => handleViewChange("3-grid")}
            aria-label="3 columns view"
          >
            <Grid3x3 className="h-5 w-5" />
          </button>
          <button 
            type="button" 
            className={cn(
              "text-gray-400 transition-colors hover:text-white",
              currentView === "list" && "text-white"
            )}
            onClick={() => handleViewChange("list")}
            aria-label="List view"
          >
            <AlignJustify className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="text-[13px] font-bold tracking-wider text-gray-400">
        {total} {t("common.products")}
      </div>

      <div className="flex items-center gap-2">
        <select
          value={currentSort}
          onChange={handleSortChange}
          className="bg-black text-[11px] font-bold tracking-wider text-white outline-none ring-0 focus:ring-0 sm:text-[13px] uppercase border border-white/10 px-3 py-2"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {getSortLabel(option.label)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
