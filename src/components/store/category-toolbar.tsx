"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { SORT_OPTIONS, type SortValue } from "@/lib/products";

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

  const onSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "popularity") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }
    params.delete("page");
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  };

  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-gray-400">
        {total === 0
          ? "Showing 0 results"
          : `Showing ${start}–${end} of ${total} results`}
      </p>
      <select
        value={currentSort}
        onChange={(event) => onSortChange(event.target.value)}
        className="bg-black border border-white/20 px-4 py-2 text-sm text-white focus:border-[#9a1818] focus:outline-none"
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
