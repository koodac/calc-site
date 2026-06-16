"use client";

import Link from "next/link";
import { SearchTrendingTicker } from "@/components/home/SearchTrendingTicker";

export function SiteAppHeader() {
  return (
    <header className="mb-6">
      <div className="flex items-center gap-3 sm:gap-4">
        <Link
          href="/"
          className="focus-ring flex min-w-0 shrink-0 items-center gap-2.5 rounded-lg outline-offset-2"
        >
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-[10px] font-bold leading-tight tracking-tight text-white shadow-sm"
            aria-hidden
          >
            TOOLS
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-neutral-900 sm:text-base">
              계산기 <span className="text-neutral-400">&amp;</span> 툴
            </p>
          </div>
        </Link>

        <Link
          href="/guide"
          className="shrink-0 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
        >
          📖 가이드
        </Link>

        <div className="hidden min-w-0 sm:block sm:flex-1">
          <SearchTrendingTicker />
        </div>
      </div>

      <div className="mt-2 sm:hidden">
        <SearchTrendingTicker />
      </div>
    </header>
  );
}
