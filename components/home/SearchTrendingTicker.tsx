"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getToolBySlug } from "@/lib/tools";
import {
  HOME_TRENDING_TOP10,
  type HomeTrendingEntry,
  type TrendDirection,
} from "@/lib/homeTrending";

function TrendBadge({ trend, delta }: { trend: TrendDirection; delta: number }) {
  if (trend === "flat") return <span className="tabular-nums text-neutral-400">—</span>;
  if (trend === "down") return <span className="whitespace-nowrap text-xs font-medium text-rose-600">↓ {delta}</span>;
  return <span className="whitespace-nowrap text-xs font-medium text-emerald-600">↑ {delta}</span>;
}

function TrendRowLine({ row, dense }: { row: HomeTrendingEntry; dense?: boolean }) {
  const tool = getToolBySlug(row.slug);
  if (!tool) return null;
  return (
    <span className="flex w-full min-w-0 items-center gap-1.5 sm:gap-2">
      <span className={`shrink-0 font-semibold tabular-nums text-neutral-400 ${dense ? "" : "min-w-[1.25rem]"}`}>{row.rank}.</span>
      <span className="shrink-0" aria-hidden>{tool.icon}</span>
      <span className={`min-w-0 flex-1 font-medium text-neutral-800 ${dense ? "truncate text-[13px] sm:text-sm" : "truncate"}`}>{tool.title}</span>
      <span className="shrink-0"><TrendBadge trend={row.trend} delta={row.delta} /></span>
    </span>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg className={`h-4 w-4 shrink-0 text-neutral-400 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SearchTrendingTicker({ className = "" }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [open, setOpen] = useState(false);
  const [rotateIndex, setRotateIndex] = useState(0);
  const [hoverFine, setHoverFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const apply = () => setHoverFine(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setRotateIndex((i) => (i + 1) % HOME_TRENDING_TOP10.length), 4200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDocPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDocPointerDown);
    return () => document.removeEventListener("pointerdown", onDocPointerDown);
  }, [open]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const row = HOME_TRENDING_TOP10[rotateIndex];

  const handleMouseEnter = () => {
    if (!hoverFine) return;
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    if (!hoverFine) return;
    closeTimerRef.current = setTimeout(() => setOpen(false), 260);
  };

  return (
    <div
      ref={rootRef}
      className={`relative z-20 min-w-0 flex-1 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className="focus-ring touch-manipulation relative z-10 flex w-full min-w-0 items-center gap-1 rounded-lg py-1.5 text-left text-xs text-neutral-600 transition-colors hover:bg-neutral-100/80 sm:gap-1.5 sm:text-sm"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="인기 검색 순위 열기"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="min-w-0 flex-1"><TrendRowLine row={row} /></span>
        <Chevron open={open} />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-[120] mt-1 w-[min(calc(100vw-2rem),22rem)] rounded-xl border border-neutral-200 bg-white py-2 shadow-xl ring-1 ring-black/5" role="dialog" aria-label="인기 검색 순위 상위 10">
          <div className="absolute -top-2 right-8 h-3 w-3 rotate-45 border-l border-t border-neutral-200 bg-white" aria-hidden />
          <ul className="max-h-[min(70vh,24rem)] overflow-y-auto px-1">
            {HOME_TRENDING_TOP10.map((r) => {
              const t = getToolBySlug(r.slug);
              if (!t) return null;
              return (
                <li key={r.slug}>
                  <Link
                    href={`/tools/${r.slug}`}
                    className="focus-ring touch-manipulation block rounded-lg px-3 py-2.5 text-left hover:bg-neutral-50"
                    onClick={() => setOpen(false)}
                  >
                    <TrendRowLine row={r} dense />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
