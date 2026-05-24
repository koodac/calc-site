import { PENSION_HEALTH_CEILING_2026_H1, PENSION_HEALTH_CEILING_2026_H2 } from "@/lib/payroll/constants";

/**
 * 국민연금 기준소득월액 상한.
 * 건강보험·고용보험의 상한은 훨씬 높아 별도 처리됩니다.
 *
 * 근거: 보건복지부 「국민연금 및 건강보험 보험료 등의 징수 등에 관한 규칙」 기준소득월액 상한 고시.
 * — 2026년 7월분부터 659만 원으로 인상 예정.
 */
export function getPensionHealthCeiling(reference = new Date()): number {
  const y = reference.getFullYear();
  const m = reference.getMonth() + 1;

  if (y >= 2027) {
    return PENSION_HEALTH_CEILING_2026_H2;
  }
  if (y === 2026 && m >= 7) {
    return PENSION_HEALTH_CEILING_2026_H2;
  }
  return PENSION_HEALTH_CEILING_2026_H1;
}
