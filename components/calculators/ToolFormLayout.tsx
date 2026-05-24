"use client";

import type { ReactNode } from "react";

/** SalaryCalculator와 동일한 입력 필드 스타일 */
export const INPUT_CLASS =
  "focus-ring w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm";

export const TEXTAREA_CLASS = INPUT_CLASS;

export const DEFAULT_CALCULATOR_FOOTNOTES = [
  "본 결과는 참고용 추정이며, 법령·고시·개인 조건에 따라 실제 값과 다를 수 있습니다.",
  "계약·신고·진단 등 최종 판단에는 공식 자료와 전문가 확인을 권장합니다.",
];

export function CalculatorShell({
  children,
  footnotes = true,
}: {
  children: ReactNode;
  /** SalaryCalculator처럼 도구 전용 하단 문구가 이미 있으면 false */
  footnotes?: boolean;
}) {
  return (
    <div className="space-y-8">
      {children}
      {footnotes ? <FootnoteList lines={DEFAULT_CALCULATOR_FOOTNOTES} /> : null}
    </div>
  );
}

export function ResultPanel({
  title,
  highlight,
  subtitle,
  children,
}: {
  title: string;
  highlight?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  const showHighlight = highlight != null && highlight !== "";
  return (
    <section className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
      <h2 className="text-lg font-semibold text-neutral-900">{title}</h2>
      {showHighlight ? (
        <p className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">{highlight}</p>
      ) : null}
      {subtitle ? <p className="mt-2 text-sm text-neutral-600">{subtitle}</p> : null}
      {children}
    </section>
  );
}

export function ResultRows({
  rows,
}: {
  rows: { label: ReactNode; value: ReactNode }[];
}) {
  return (
    <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
      {rows.map((r, i) => (
        <div key={i} className="flex justify-between gap-4 border-b border-neutral-200 pb-2">
          <dt className="text-neutral-600">{r.label}</dt>
          <dd className="font-medium text-neutral-900">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function FootnoteList({ lines }: { lines: readonly ReactNode[] }) {
  return (
    <ul className="space-y-2 text-xs leading-relaxed text-neutral-600">
      {lines.map((line, i) => (
        <li key={i}>• {line}</li>
      ))}
    </ul>
  );
}
