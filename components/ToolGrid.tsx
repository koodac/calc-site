"use client";

import type { ToolItem } from "@/lib/tools";
import { ToolCard } from "@/components/ToolCard";

type ToolGridProps = {
  tools: ToolItem[];
  emptyMessage?: string;
};

export function ToolGrid({
  tools,
  emptyMessage = "검색 결과가 없습니다. 다른 키워드를 시도해 보세요.",
}: ToolGridProps) {
  if (tools.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-neutral-200 bg-white/80 py-16 text-center text-sm text-neutral-500">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
      {tools.map((tool) => (
        <ToolCard key={tool.slug} tool={tool} />
      ))}
    </div>
  );
}
