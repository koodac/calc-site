/** 직장 카테고리 순수 계산 함수 */

import {
  EMPLOYMENT_INSURANCE_RATE_EMPLOYEE,
  HEALTH_INSURANCE_RATE_EMPLOYEE,
  LONG_TERM_CARE_FACTOR_OF_HEALTH,
  NATIONAL_PENSION_RATE_EMPLOYEE,
} from "@/lib/payroll/constants";
import { getPensionHealthCeiling } from "@/lib/payroll/insuranceCeiling";

export const MINIMUM_HOURLY_2026 = 10_320;

/** 주휴수당: 주 15h 미만 → 0, 40h 상한 */
export function calcWeeklyHolidayPay(hourlyWage: number, weeklyHours: number): number {
  if (weeklyHours < 15) return 0;
  return hourlyWage * 8 * (Math.min(weeklyHours, 40) / 40);
}

/** 근무시간(분): 야간 근무 처리 포함 */
export function calcWorkMinutes(
  startH: number,
  startM: number,
  endH: number,
  endM: number,
): number {
  const start = startH * 60 + startM;
  let end = endH * 60 + endM;
  if (end < start) end += 24 * 60;
  return end - start;
}

/** 월급 → 시급 환산 */
export function calcMonthlyToHourly(monthly: number, monthlyHours: number): number {
  if (monthlyHours <= 0) return 0;
  return monthly / monthlyHours;
}

/** 시간당 처리량(UPH) */
export function calcUPH(units: number, hours: number): number {
  if (hours <= 0) return 0;
  return units / hours;
}

/** 미사용 연차수당 */
export function calcUnusedAnnualPay(dailyWage: number, unusedDays: number): number {
  return Math.round(dailyWage * unusedDays);
}

/** 출근율 */
export function calcAttendanceRate(workedDays: number, totalDays: number): number {
  if (totalDays <= 0) return 0;
  return (workedDays / totalDays) * 100;
}

/** 알바 주급 계산 */
export function calcPartTimePay(
  hourlyWage: number,
  weeklyHours: number,
  weeks: number,
): number {
  return hourlyWage * weeklyHours * weeks;
}

/** 달성률 */
export function calcAchievementRate(target: number, achieved: number): number {
  if (target === 0) return 0;
  return (achieved / target) * 100;
}

/** 연가보상비 간이 (월/30 × 일수) */
export function calcDailyRate(monthly: number, days: number): number {
  return Math.round((monthly / 30) * days);
}

/** 연봉 예측 (복리) */
export function calcSalaryForecast(
  currentSalary: number,
  annualRatePct: number,
  years: number,
): number {
  return currentSalary * Math.pow(1 + annualRatePct / 100, years);
}

/** 날짜 차이 계산 (양 끝 포함) */
export function calcDateDiff(
  startDateStr: string,
  endDateStr: string,
): { days: number; years: number } {
  const a = new Date(`${startDateStr}T00:00:00`);
  const b = new Date(`${endDateStr}T00:00:00`);
  if (b < a) return { days: 0, years: 0 };
  const days = Math.floor((b.getTime() - a.getTime()) / 86400000) + 1;
  return { days, years: days / 365 };
}

/** 연차 참고치 계산 */
export function calcAnnualLeaveDays(startDateStr: string, endDateStr: string): number {
  const { days, years } = calcDateDiff(startDateStr, endDateStr);
  if (days <= 0) return 0;
  const fullYears = Math.floor(years);
  if (fullYears < 1) {
    const a = new Date(`${startDateStr}T00:00:00`);
    const b = new Date(`${endDateStr}T00:00:00`);
    const rawMonths =
      (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth());
    const fullMonths = b.getDate() >= a.getDate() ? rawMonths : rawMonths - 1;
    return Math.min(11, Math.max(0, fullMonths));
  }
  return Math.min(25, 15 + Math.floor((fullYears - 1) / 2));
}

/** 퇴직금 (통상 산식) */
export function calcSeverancePay(
  dailyWage: number,
  hireDateStr: string,
  leaveDateStr: string,
): { serviceDays: number; yearsFrac: number; severance: number } {
  const start = new Date(`${hireDateStr}T00:00:00`);
  const end = new Date(`${leaveDateStr}T00:00:00`);
  if (
    Number.isNaN(start.getTime()) ||
    Number.isNaN(end.getTime()) ||
    end < start
  ) {
    return { serviceDays: 0, yearsFrac: 0, severance: 0 };
  }
  const serviceDays =
    Math.floor((end.getTime() - start.getTime()) / 86400000) + 1;
  const yearsFrac = serviceDays / 365;
  return { serviceDays, yearsFrac, severance: dailyWage * 30 * yearsFrac };
}

/** 4대보험 근로자 부담분 */
export function calcFourInsurance(monthly: number): {
  nationalPension: number;
  healthInsurance: number;
  longTermCare: number;
  employmentInsurance: number;
  total: number;
} {
  const ceiling = getPensionHealthCeiling();
  const pensionBase = Math.min(monthly, ceiling);
  const flr10 = (n: number) => Math.floor(n / 10) * 10;
  const np = flr10(pensionBase * NATIONAL_PENSION_RATE_EMPLOYEE);
  const hi = flr10(monthly * HEALTH_INSURANCE_RATE_EMPLOYEE);
  const lt = Math.round((hi * LONG_TERM_CARE_FACTOR_OF_HEALTH) / 10) * 10;
  const ei = flr10(monthly * EMPLOYMENT_INSURANCE_RATE_EMPLOYEE);
  return {
    nationalPension: np,
    healthInsurance: hi,
    longTermCare: lt,
    employmentInsurance: ei,
    total: np + hi + lt + ei,
  };
}

/** 연봉 인상률 */
export function calcSalaryRaise(
  before: number,
  after: number,
): { diffAmt: number; raisePct: number } {
  const diffAmt = after - before;
  const raisePct = before === 0 ? 0 : (diffAmt / before) * 100;
  return { diffAmt, raisePct };
}

/** 최저임금 기준 초과 여부 */
export function isAboveMinimumWage(hourly: number): boolean {
  return hourly >= MINIMUM_HOURLY_2026;
}

/** 초과근무수당 */
export function calcOvertimePay(
  hourlyWage: number,
  regularHours: number,
  overtimeHours: number,
  nightHours = 0,
): { regularPay: number; overtimePay: number; nightPay: number; total: number } {
  const regularPay = hourlyWage * regularHours;
  const overtimePay = hourlyWage * overtimeHours * 1.5;
  const nightPay = hourlyWage * nightHours * 0.5;
  return { regularPay, overtimePay, nightPay, total: regularPay + overtimePay + nightPay };
}

/** 출산전후휴가급여 (2026년 기준, 상한 월 210만원 × 90일/30일 비례) */
export function calcMaternityPay(monthlySalary: number): {
  paid: number;
  cap: number;
  actual: number;
} {
  const cap = 2_100_000;
  const paid = monthlySalary * 3;
  const actual = Math.min(paid, cap * 3);
  return { paid, cap: cap * 3, actual };
}

/** 육아휴직급여 (통상임금 기준, 월 상한 150만원) */
export function calcParentalLeavePay(monthlySalary: number): {
  base: number;
  cap: number;
  actual: number;
} {
  const cap = 1_500_000;
  const base = monthlySalary * 0.8;
  return { base, cap, actual: Math.min(base, cap) };
}

/** 실업급여 (구직급여) 일액 */
export function calcUnemploymentBenefit(
  avgDailyWage: number,
  employmentMonths: number,
): { dailyBenefit: number; durationDays: number; total: number } {
  // 2026년 기준: 하한 = 최저임금(10,320원) × 8h × 80% = 66,048원
  // 상한 = 66,000원 (고용노동부 고시) — 하한이 상한보다 크면 하한 우선
  const MIN_DAILY = Math.round(10_320 * 8 * 0.8); // 66,048원
  const MAX_DAILY = 66_000;
  const rawDaily = Math.round(avgDailyWage * 0.6);
  const dailyBenefit = Math.max(MIN_DAILY, Math.min(MAX_DAILY, rawDaily));
  let durationDays = 120;
  if (employmentMonths >= 12 && employmentMonths < 36) durationDays = 150;
  else if (employmentMonths >= 36 && employmentMonths < 60) durationDays = 180;
  else if (employmentMonths >= 60 && employmentMonths < 120) durationDays = 210;
  else if (employmentMonths >= 120) durationDays = 240;
  return { dailyBenefit, durationDays, total: dailyBenefit * durationDays };
}

/** 근로소득 간이세액 (간이 추정) */
export function calcIncomeTaxMonthly(
  monthlyGross: number,
  dependents = 1,
): { incomeTax: number; localTax: number; total: number } {
  const annual = monthlyGross * 12;
  let taxRate = 0;
  if (annual <= 14_000_000) taxRate = 0.06;
  else if (annual <= 50_000_000) taxRate = 0.15;
  else if (annual <= 88_000_000) taxRate = 0.24;
  else if (annual <= 150_000_000) taxRate = 0.35;
  else taxRate = 0.38;
  const deductionPerDependent = 150_000 * (dependents - 1);
  const annualTax = Math.max(0, annual * taxRate - deductionPerDependent);
  const incomeTax = Math.round(annualTax / 12);
  const localTax = Math.round(incomeTax * 0.1);
  return { incomeTax, localTax, total: incomeTax + localTax };
}
