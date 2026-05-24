"use client";

import { forwardRef } from "react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

function SearchGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  function SearchBar(
    {
      value,
      onChange,
      placeholder = "원하는 계산기를 검색해 보세요 (예: 연봉, BMI, 전기요금)",
    },
    ref,
  ) {
    return (
      <div id="tool-search" className="scroll-mt-28 mb-5 sm:mb-6">
        <label htmlFor="tool-search-input" className="sr-only">
          계산기 검색
        </label>
        <div className="flex overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm ring-1 ring-black/5">
          <input
            ref={ref}
            id="tool-search-input"
            type="search"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="focus-ring min-h-[48px] flex-1 border-0 bg-transparent px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 sm:min-h-[52px] sm:px-5 sm:text-[15px]"
            autoComplete="off"
          />
          <button
            type="button"
            className="focus-ring flex w-12 shrink-0 items-center justify-center bg-[#2563eb] text-white transition-colors hover:bg-blue-700 sm:w-14"
            aria-label="검색"
            onClick={() => {
              if (ref != null && typeof ref !== "function") {
                ref.current?.focus();
              }
            }}
          >
            <SearchGlyph className="opacity-95" />
          </button>
        </div>
      </div>
    );
  },
);
