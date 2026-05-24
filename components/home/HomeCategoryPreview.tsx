"use client";

import type { ToolCategory, ToolItem } from "@/lib/tools";
import { CATEGORIES, getToolsByCategory } from "@/lib/tools";
import { CATEGORY_EMOJI } from "@/lib/categoryMeta";
import { ToolGrid } from "@/components/ToolGrid";

const PREVIEW_COUNT = 6;

type HomeCategoryPreviewProps = {
  expanded: Partial<Record<Exclude<ToolCategory, "전체">, boolean>>;
  onToggleExpand: (cat: Exclude<ToolCategory, "전체">) => void;
  /** 지정 시 해당 카테고리 한 섹션만 표시 */
  onlyCategory?: Exclude<ToolCategory, "전체">;
};

export function HomeCategoryPreview({
  expanded,
  onToggleExpand,
  onlyCategory,
}: HomeCategoryPreviewProps) {
  const cats = onlyCategory
    ? [onlyCategory]
    : CATEGORIES.filter((c): c is Exclude<ToolCategory, "전체"> => c !== "전체");

  return (
    <div className="space-y-10 sm:space-y-12">
      {cats.map((cat) => (
        <CategoryPreviewSection
          key={cat}
          category={cat}
          tools={getToolsByCategory(cat)}
          isExpanded={expanded[cat] ?? false}
          onToggle={() => onToggleExpand(cat)}
        />
      ))}
    </div>
  );
}

function CategoryPreviewSection({
  category,
  tools,
  isExpanded,
  onToggle,
}: {
  category: Exclude<ToolCategory, "전체">;
  tools: ToolItem[];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const emoji = CATEGORY_EMOJI[category];
  const hasMore = tools.length > PREVIEW_COUNT;
  const visible = isExpanded ? tools : tools.slice(0, PREVIEW_COUNT);

  return (
    <section aria-labelledby={`cat-heading-${category}`}>
      <h2
        id={`cat-heading-${category}`}
        className="mb-4 flex items-center gap-2 text-base font-bold tracking-tight text-neutral-900 sm:text-lg"
      >
        <span className="text-xl" aria-hidden>
          {emoji}
        </span>
        {category}
      </h2>
      <ToolGrid tools={visible} />
      {hasMore && (
        <div className="mt-4 flex justify-center sm:justify-start">
          <button
            type="button"
            onClick={onToggle}
            className="focus-ring rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium text-neutral-700 shadow-sm transition-colors hover:border-neutral-300 hover:bg-neutral-50"
          >
            {isExpanded
              ? "접기"
              : `${category} 계산기 ${tools.length - PREVIEW_COUNT}개 더보기`}
          </button>
        </div>
      )}
    </section>
  );
}
