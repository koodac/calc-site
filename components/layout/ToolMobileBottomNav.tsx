"use client";

import Link from "next/link";

export function ToolMobileBottomNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white md:hidden"
      aria-label="하단 메뉴"
    >
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-around px-4">
        <Link href="/" className="focus-ring inline-flex flex-col items-center justify-center gap-0.5 px-3 py-1 text-xs text-blue-600">
          <span className="text-base" aria-hidden>
            ⌂
          </span>
          <span>홈</span>
        </Link>
        <Link
          href="/?mobileTab=favorites"
          className="focus-ring inline-flex flex-col items-center justify-center gap-0.5 px-3 py-1 text-xs text-neutral-500"
        >
          <span className="text-base" aria-hidden>
            ☆
          </span>
          <span>즐겨찾기</span>
        </Link>
        <Link
          href="/?mobileTab=menu"
          className="focus-ring inline-flex flex-col items-center justify-center gap-0.5 px-3 py-1 text-xs text-neutral-500"
        >
          <span className="text-base" aria-hidden>
            ☰
          </span>
          <span>메뉴</span>
        </Link>
      </div>
    </nav>
  );
}
