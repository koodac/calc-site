"use client";

import {
  useState,
  useEffect,
  type ChangeEvent,
  type FocusEvent,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

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

/**
 * 문자열 → 숫자 변환 헬퍼.
 * 천단위 쉼표(1,000,000)를 자동으로 제거하므로 NumInput과 함께 사용 가능.
 */
export const num = (v: string) => {
  const stripped = v.replace(/,/g, "");
  const n = Number(stripped);
  return Number.isFinite(n) ? n : 0;
};

export const won = (n: number) =>
  new Intl.NumberFormat("ko-KR", { maximumFractionDigits: 0 }).format(Math.round(n));

/** 정수부에 천단위 쉼표 추가. 소수부·음수·부분 입력(예: "3.") 유지. */
function addCommas(s: string): string {
  if (!s) return s;
  const neg = s.startsWith("-");
  const abs = neg ? s.slice(1) : s;
  if (!/^\d*\.?\d*$/.test(abs)) return s;
  const dotIdx = abs.indexOf(".");
  const intPart = dotIdx >= 0 ? abs.slice(0, dotIdx) : abs;
  const decPart = dotIdx >= 0 ? abs.slice(dotIdx) : "";
  const formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (neg ? "-" : "") + formatted + decPart;
}

type NumInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "type"> & {
  /** number 타입이면 0 → 빈칸 + 천단위 쉼표, string 타입이면 그대로 표시 */
  value: number | string;
};

/**
 * 숫자 입력 컴포넌트.
 * - value가 숫자 0 → 빈 칸 (사용자가 "0" 위에 덧붙이는 문제 방지)
 * - 타이핑 중 천단위 쉼표 자동 적용 (4000000 → 4,000,000)
 * - 포커스 해제 시 앞자리 0 정리 (05 → 5)
 * - num()이 쉼표를 제거하므로 부모 onChange 핸들러 변경 불필요
 * - value prop이 외부에서 바뀌면 표시 동기화 (핫리로드·리셋 시에도 올바르게 표시)
 */
export function NumInput({
  value,
  onChange,
  onBlur,
  step,
  className,
  placeholder,
  min: _min,
  max: _max,
  ...rest
}: NumInputProps) {
  const hasDecimal = step !== undefined && String(step).includes(".");
  const isNumericValue = typeof value === "number";

  const [str, setStr] = useState(() => {
    if (!isNumericValue) return String(value);
    return (value as number) === 0 ? "" : addCommas(String(value));
  });

  // value prop이 외부에서 바뀔 때(핫리로드·초기값 등) 표시 문자열 동기화
  useEffect(() => {
    if (!isNumericValue) return;
    const numVal = value as number;
    const expected = numVal === 0 ? "" : addCommas(String(numVal));
    setStr((prev) => {
      if (prev === expected) return prev; // 이미 올바른 포맷 — 아무것도 안 함
      const prevStripped = prev.replace(/,/g, "");
      if (prevStripped.endsWith(".")) return prev; // "3." 처럼 소수점 입력 중 — 보호
      return expected; // 포맷 불일치(핫리로드·스테일 상태 등) → 교정
    });
  }, [isNumericValue, value]);

  return (
    <input
      {...rest}
      type="text"
      inputMode={hasDecimal ? "decimal" : "numeric"}
      className={className}
      placeholder={placeholder}
      value={str}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value;
        if (isNumericValue) {
          const stripped = raw.replace(/,/g, "");
          setStr(addCommas(stripped));
          e.target.value = stripped;
        } else {
          setStr(raw);
        }
        onChange?.(e);
      }}
      onBlur={(e: FocusEvent<HTMLInputElement>) => {
        if (isNumericValue) {
          const stripped = str.replace(/,/g, "");
          const n = parseFloat(stripped);
          setStr(isNaN(n) ? "" : addCommas(String(n)));
        }
        onBlur?.(e);
      }}
    />
  );
}
