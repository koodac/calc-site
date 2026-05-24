/**
 * 2026년 급여·보험료 산출용 상수.
 * 고시가 바뀌면 여기와 `incomeTaxSimplified2026.ts`를 함께 점검하세요.
 */

/**
 * 2026년 상반기(1~6월 분) 기준소득월액 상한 — 보건복지부 고시 (단위: 원).
 * 2025년 하반기와 동일 637만 원 구간이 이어지는 경우가 많습니다.
 */
export const PENSION_HEALTH_CEILING_2026_H1 = 6_370_000;

/**
 * 2026년 7월 분 보험료부터 적용되는 상한 인상분 — 고시 659만 원.
 * @see 보건복지부 「국민연금 및 건강보험 보험료 등의 징수 등에 관한 규칙」 개정 고시 등
 */
export const PENSION_HEALTH_CEILING_2026_H2 = 6_590_000;

/**
 * 국민연금 근로자 부담 요율.
 * 2026년 보험료율 9.5%(근로자·사업주 각 4.75%) — 국민연금법·고시.
 */
export const NATIONAL_PENSION_RATE_EMPLOYEE = 0.0475;

/**
 * 건강보험 직장가입자 근로자 부담 요율.
 * 2026년 건강보험료율 7.19% 중 근로자 절반 ≈ 3.595% — 보건복지부 보도(2026년 요율).
 */
export const HEALTH_INSURANCE_RATE_EMPLOYEE = 0.03595;

/**
 * 장기요양보험료 = 건강보험료 × 고시 비율.
 * 2026년 건강보험료 대비 13.14% 등 — 보건복지부 장기요양보험료율 고시.
 */
export const LONG_TERM_CARE_FACTOR_OF_HEALTH = 0.1314;

/**
 * 고용보험 근로자 부담 요율(실업급여 등 분).
 * 2026년 0.9% 유지 등 — 고용노동부 고시.
 */
export const EMPLOYMENT_INSURANCE_RATE_EMPLOYEE = 0.009;

/** 지방소득세 = 근로소득세 × 10%(통상) */
export const LOCAL_INCOME_TAX_FACTOR = 0.1;
