"use client";

import type { ToolItem } from "@/lib/tools";
import { ToolCard } from "@/components/ToolCard";
import { HomeMidAd } from "@/components/home/HomeMidAd";
import { HomeBottomAd } from "@/components/home/HomeBottomAd";

const FIRST_CHUNK = 10;

const gridClass = "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4";

type CatalogToolGridProps = {
  tools: ToolItem[];
  emptyMessage?: string;
};

export function CatalogToolGrid({
  tools,
  emptyMessage = "검색 결과가 없습니다. 다른 키워드를 시도해 보세요.",
}: CatalogToolGridProps) {
  if (tools.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-neutral-200 bg-white/80 py-16 text-center text-sm text-neutral-500">
        {emptyMessage}
      </p>
    );
  }

  if (tools.length <= FIRST_CHUNK) {
    return (
      <>
        <div className={gridClass}>
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
        <HomeMidAd />
        <HomeBottomAd />
      </>
    );
  }

  const first = tools.slice(0, FIRST_CHUNK);
  const rest = tools.slice(FIRST_CHUNK);

  return (
    <>
      <div className={gridClass}>
        {first.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
      <HomeMidAd />
      <div className={gridClass}>
        {rest.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
      <HomeBottomAd />
    </>
  );
}
