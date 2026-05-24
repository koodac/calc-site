"use client";

import Link from "next/link";
import { type MouseEvent, useEffect, useState } from "react";
import type { ToolItem } from "@/lib/tools";
import {
  FAVORITES_UPDATED_EVENT,
  isFavoriteSlug,
  toggleFavoriteSlug,
} from "@/lib/favorites";

type ToolCardProps = {
  tool: ToolItem;
};

export function ToolCard({ tool }: ToolCardProps) {
  // localStorage는 첫 paint 전용으로 쓰면 서버 HTML과 달라져 하이드레이션 오류가 난다. 마운트 후에만 동기화.
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const sync = () => setIsFavorite(isFavoriteSlug(tool.slug));
    sync();
    window.addEventListener(FAVORITES_UPDATED_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(FAVORITES_UPDATED_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, [tool.slug]);

  function onToggleFavorite(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(toggleFavoriteSlug(tool.slug));
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggleFavorite}
        className="focus-ring absolute right-2 top-2 z-[2] rounded-md p-1 text-lg leading-none text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700"
        aria-label={isFavorite ? "즐겨찾기 해제" : "즐겨찾기 추가"}
      >
        {isFavorite ? "★" : "☆"}
      </button>
      <Link
        href={`/tools/${tool.slug}`}
        className="focus-ring group flex gap-3 rounded-xl border border-neutral-200 bg-white p-4 pr-10 shadow-sm transition-shadow hover:border-neutral-300 hover:shadow-md sm:gap-4"
      >
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-neutral-50 text-xl"
          aria-hidden
        >
          {tool.icon}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold leading-snug text-neutral-900 group-hover:text-neutral-950">
            {tool.title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-neutral-600">
            {tool.description}
          </p>
        </div>
      </Link>
    </div>
  );
}
