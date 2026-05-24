"use client";

import type { ReactNode } from "react";

export function Labeled({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block rounded-xl border border-neutral-200 bg-white p-4">
      <span className="text-sm font-medium text-neutral-800">{label}</span>
      {hint ? <span className="mt-1 block text-xs text-neutral-500">{hint}</span> : null}
      <div className="mt-2">{children}</div>
    </label>
  );
}

export const num = (v: string) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
};

export const won = (n: number) =>
  new Intl.NumberFormat("ko-KR", { maximumFractionDigits: 0 }).format(Math.round(n));
