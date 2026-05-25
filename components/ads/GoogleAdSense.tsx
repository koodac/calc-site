"use client";

import { useEffect, useRef } from "react";
import { ADSENSE_PUBLISHER_ID } from "@/lib/adsConfig";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

type AdFormat = "auto" | "rectangle" | "vertical" | "horizontal";

type Props = {
  slotId: string;
  format?: AdFormat;
  style?: React.CSSProperties;
  className?: string;
};

/**
 * Google AdSense 광고 단위 컴포넌트.
 * slotId는 lib/adsConfig.ts 에서 관리합니다.
 * 슬롯 ID가 "REPLACE_SLOT_ID" 문자열을 포함하면 dev 플레이스홀더를 렌더합니다.
 */
export function GoogleAdSense({ slotId, format = "auto", style, className }: Props) {
  const insRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  const isPlaceholder = slotId.includes("REPLACE_SLOT_ID");

  useEffect(() => {
    if (isPlaceholder || pushed.current || !insRef.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // adsbygoogle may not be loaded yet — no-op
    }
  }, [isPlaceholder]);

  if (isPlaceholder) {
    return (
      <aside
        aria-label="광고 영역"
        className="flex min-h-[90px] items-center justify-center rounded-lg border border-dashed border-blue-200 bg-blue-50/40 px-3 py-4 text-center text-[11px] text-blue-400"
      >
        AdSense 슬롯 ID를 lib/adsConfig.ts 에 입력하세요
      </aside>
    );
  }

  return (
    <ins
      ref={insRef}
      className={`adsbygoogle${className ? ` ${className}` : ""}`}
      style={{ display: "block", ...style }}
      data-ad-client={ADSENSE_PUBLISHER_ID}
      data-ad-slot={slotId}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}
