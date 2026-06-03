"use client";

import {
  useState,
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

export const num = (v: string) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
};

export const won = (n: number) =>
  new Intl.NumberFormat("ko-KR", { maximumFractionDigits: 0 }).format(Math.round(n));

type NumInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "type"> & {
  /** number 타입이면 0 → 빈칸, string 타입이면 그대로 표시 */
  value: number | string;
};

/**
 * 숫자 입력 컴포넌트.
 * - value가 숫자 0일 때 빈 칸으로 시작 (사용자가 "0" 위에 덧붙이는 문제 방지)
 * - 포커스 해제 시 "05" → "5" 정규화 (value가 number일 때만)
 * - value가 string이면 부모 컴포넌트가 직접 문자열 상태를 관리하는 케이스
 */
export function NumInput({
  value,
  onChange,
  onBlur,
  step,
  className,
  placeholder,
  // min/max는 type="number" 전용 — type="text" 내부에선 사용 안 함
  min: _min,
  max: _max,
  ...rest
}: NumInputProps) {
  const hasDecimal = step !== undefined && String(step).includes(".");
  const isNumericValue = typeof value === "number";
  const [str, setStr] = useState(() =>
    isNumericValue ? (value === 0 ? "" : String(value)) : String(value)
  );
  return (
    <input
      {...rest}
      type="text"
      inputMode={hasDecimal ? "decimal" : "numeric"}
      className={className}
      placeholder={placeholder}
      value={str}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setStr(e.target.value);
        onChange?.(e);
      }}
      onBlur={(e: FocusEvent<HTMLInputElement>) => {
        if (isNumericValue) {
          // 숫자 모드: "05" → "5", "" 유지
          const n = parseFloat(str);
          setStr(isNaN(n) ? "" : String(n));
        }
        onBlur?.(e);
      }}
    />
  );
}
