"use client";

import type { ToolCategory } from "@/lib/tools";

type CategoryNavProps = {
  categories: Exclude<ToolCategory, "전체">[];
  active: Exclude<ToolCategory, "전체">;
  onSelect: (category: Exclude<ToolCategory, "전체">) => void;
};

export function CategoryNav({ categories, active, onSelect }: CategoryNavProps) {
  return (
    <nav
      className="relative z-10 mb-6 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label="카테고리"
    >
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onSelect(cat)}
            className={`focus-ring touch-manipulation shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-200 bg-white text-neutral-700 shadow-sm hover:border-neutral-300 hover:bg-neutral-50"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </nav>
  );
}
