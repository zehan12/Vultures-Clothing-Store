import Link from "next/link";

import { cn } from "@/lib/utils";

export function Pagination({
  currentPage,
  totalPages,
  basePath,
  searchParams,
}: {
  currentPage: number;
  totalPages: number;
  basePath: string;
  searchParams?: Record<string, string | undefined>;
}) {
  if (totalPages <= 1) return null;

  const buildHref = (page: number) => {
    const params = new URLSearchParams();
    if (searchParams) {
      for (const [key, value] of Object.entries(searchParams)) {
        if (value && key !== "page") params.set(key, value);
      }
    }
    if (page > 1) params.set("page", String(page));
    const query = params.toString();
    return query ? `${basePath}?${query}` : basePath;
  };

  return (
    <div className="mt-10 flex justify-center gap-2">
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        const isActive = page === currentPage;

        return (
          <Link
            key={page}
            href={buildHref(page)}
            className={cn(
              "flex h-10 w-10 items-center justify-center text-sm font-bold transition-colors",
              isActive
                ? "bg-[#9a1818] text-white"
                : "bg-[#111] text-gray-400 hover:text-white",
            )}
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
}
