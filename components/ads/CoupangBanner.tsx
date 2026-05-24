"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    PartnersCoupang?: {
      G: new (config: {
        id: number;
        template: string;
        trackingCode: string;
        width: string;
        height: string;
        tsource: string;
      }) => void;
    };
  }
}

/** 쿠팡 파트너스 다이나믹 배너 (고객 관심 기반 추천) */
export function CoupangBanner() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    function initBanner() {
      if (!window.PartnersCoupang) return;
      initialized.current = true;
      new window.PartnersCoupang.G({
        id: 991611,
        template: "carousel",
        trackingCode: "AF7721557",
        width: "680",
        height: "140",
        tsource: "",
      });
    }

    // g.js가 이미 로드된 경우
    if (window.PartnersCoupang) {
      initBanner();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://ads-partners.coupang.com/g.js";
    script.async = true;
    script.onload = initBanner;
    document.head.appendChild(script);
  }, []);

  return (
    <div
      className="w-full overflow-hidden rounded-lg"
      style={{ minHeight: 140 }}
      aria-label="쿠팡 파트너스 광고"
    />
  );
}
