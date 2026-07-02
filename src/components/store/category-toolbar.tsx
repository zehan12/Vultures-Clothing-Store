"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LayoutGrid, Grid3x3, AlignJustify } from "lucide-react";
import { SORT_OPTIONS, type SortValue } from "@/lib/products";
import { cn } from "@/lib/utils";

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
  const currentSort = (searchParams.get("sort") ?? "popularity") as SortValue;
  const currentView = searchParams.get("view") ?? "3";

  const onSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "popularity") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`);
  };

  const onViewChange = (view: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (view === "3") {
      params.delete("view");
    } else {
      params.set("view", view);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4 text-gray-400">
        <button
          onClick={() => onViewChange("2")}
          className={cn("hover:text-white", currentView === "2" && "text-white")}
          aria-label="2 Grid View"
        >
          <LayoutGrid className="h-5 w-5" />
        </button>
        <button
          onClick={() => onViewChange("3")}
          className={cn("hover:text-white", currentView === "3" && "text-white")}
          aria-label="3 Grid View"
        >
          <Grid3x3 className="h-5 w-5" />
        </button>
        <button
          onClick={() => onViewChange("list")}
          className={cn("hover:text-white", currentView === "list" && "text-white")}
          aria-label="List View"
        >
          <AlignJustify className="h-5 w-5" />
        </button>
      </div>

      <p className="text-sm font-bold tracking-wider text-gray-400 uppercase">
        {total} Products
      </p>

      <select
        value={currentSort}
        onChange={(event) => onSortChange(event.target.value)}
        className="border border-white/20 bg-black px-4 py-2 text-[11px] font-bold tracking-wider text-white uppercase focus:border-[#9a1818] focus:outline-none"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
