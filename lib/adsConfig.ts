/**
 * Google AdSense 광고 단위 설정
 * AdSense 대시보드 > 광고 > 광고 단위 에서 발급받은 data-ad-slot 값을 입력하세요.
 *
 * Publisher ID: ca-pub-5752557189528627
 */
export const ADS_CONFIG = {
  /** 본문 하단 — 가로형 배너 (728×90 / 반응형 권장) */
  BANNER_BOTTOM: "REPLACE_SLOT_ID_1",
  /** 우측 사이드바 — 직사각형 (300×600 / 반응형) */
  SIDEBAR_TALL: "REPLACE_SLOT_ID_2",
  /** 우측 사이드바 — 정사각형 (300×250) */
  SIDEBAR_SQUARE: "REPLACE_SLOT_ID_3",
  /** 우측 사이드바 — 보조 소형 */
  SIDEBAR_SMALL: "REPLACE_SLOT_ID_4",
} as const;

export const ADSENSE_PUBLISHER_ID = "ca-pub-5752557189528627";
