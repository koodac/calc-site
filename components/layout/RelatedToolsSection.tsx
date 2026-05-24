"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { ToolItem } from "@/lib/tools";
import { pickRandomToolsClient } from "@/lib/tools";

type Props = {
  current: ToolItem;
};

export function RelatedToolsSection({ current }: Props) {
  const [related, setRelated] = useState<ToolItem[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    queueMicrotask(() => {
      if (!cancelled) setRelated(pickRandomToolsClient(current.slug, 4));
    });
    return () => {
      cancelled = true;
    };
  }, [current.slug]);

  if (related === null) {
    return (
      <section className="mt-10 border-t border-neutral-200 pt-8" aria-busy="true" aria-label="다른 계산기 불러오는 중">
        <div className="mb-4 h-7 w-40 animate-pulse rounded bg-neutral-200" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-20 animate-pulse rounded-xl border border-neutral-100 bg-neutral-100" />
          ))}
        </div>
      </section>
    );
  }

  if (related.length === 0) return null;

  return (
    <section className="mt-10 border-t border-neutral-200 pt-8" aria-labelledby="related-tools-title">
      <div className="mb-4 flex items-center gap-2">
        <h2 id="related-tools-title" className="text-lg font-semibold text-neutral-900">
          다른 계산기
        </h2>
        <p className="text-xs text-neutral-500">새로고침마다 달라질 수 있어요</p>
        <Link
          href="/"
          className="focus-ring ml-auto rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs font-medium text-neutral-700 hover:bg-neutral-50"
        >
          더보기
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {related.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="focus-ring rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-sm transition-colors hover:border-neutral-300 hover:bg-neutral-50"
          >
            <p className="font-medium text-neutral-900">
              <span aria-hidden>{tool.icon}</span> {tool.title}
            </p>
            <p className="mt-1 text-sm text-neutral-600">{tool.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
