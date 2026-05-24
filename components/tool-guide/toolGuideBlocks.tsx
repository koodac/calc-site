import type { ReactNode } from "react";

export function AdSlot({ label = "광고 영역" }: { label?: string }) {
  return (
    <aside
      aria-label="광고 슬롯"
      className="my-6 flex min-h-[72px] items-center justify-center rounded-lg border border-dashed border-neutral-300 bg-white/60 px-4 py-6 text-center text-xs text-neutral-400 sm:min-h-[90px] sm:text-sm"
    >
      {/* 개발 환경에서만 슬롯 라벨 표시 — production 에서는 빈 슬롯 */}
      {process.env.NODE_ENV === "development" ? label : null}
    </aside>
  );
}

export function GuideH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-8 text-base font-semibold tracking-tight text-neutral-900 first:mt-0 sm:text-lg">
      {children}
    </h2>
  );
}

export function GuideH3({ children }: { children: ReactNode }) {
  return <h3 className="mt-6 text-sm font-semibold text-neutral-900 sm:text-base">{children}</h3>;
}

export function GuideP({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`mt-3 text-sm leading-relaxed text-neutral-600 sm:text-[15px] ${className}`}>
      {children}
    </p>
  );
}

/** 연가보상비·툴 가이드용 — 연한 배경, 공식 한 줄 강조 */
export function GuideFormulaBox({ children }: { children: ReactNode }) {
  return (
    <div className="mt-3 rounded-lg border border-neutral-200/90 bg-neutral-50 px-4 py-3 text-center font-mono text-sm leading-relaxed text-neutral-800 sm:text-[15px]">
      {children}
    </div>
  );
}

export function GuideBulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-neutral-600 sm:text-[15px]">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export function GuideTwoColCards({
  items,
}: {
  items: { title: string; body: ReactNode }[];
}) {
  return (
    <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
      {items.map((item) => (
        <section
          key={item.title}
          className="rounded-lg border border-neutral-200/90 bg-white px-4 py-4 shadow-sm"
        >
          <h4 className="text-sm font-semibold text-neutral-900">{item.title}</h4>
          <div className="mt-2 text-sm leading-relaxed text-neutral-600">{item.body}</div>
        </section>
      ))}
    </div>
  );
}

export function GuideFaq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <dl className="mt-4 space-y-5">
      {items.map((row) => (
        <div key={row.q}>
          <dt className="text-sm font-semibold text-neutral-900">Q. {row.q}</dt>
          <dd className="mt-1.5 text-sm leading-relaxed text-neutral-500">A. {row.a}</dd>
        </div>
      ))}
    </dl>
  );
}

export function GuideTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="mt-4 overflow-x-auto rounded-lg border border-neutral-200 bg-white">
      <table className="w-full min-w-[280px] text-left text-sm text-neutral-700">
        <thead>
          <tr className="border-b border-neutral-200 bg-neutral-100/80">
            {headers.map((h) => (
              <th key={h} className="px-3 py-2.5 font-semibold text-neutral-900">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells, i) => (
            <tr key={i} className="border-b border-neutral-100 last:border-0">
              {cells.map((c, j) => (
                <td key={j} className="px-3 py-2.5">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
