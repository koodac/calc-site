/** 일상 카테고리 순수 계산 함수 */

/** D-day 계산 */
export function calcDday(targetDateStr: string, fromDateStr?: string): number {
  const from = fromDateStr
    ? new Date(`${fromDateStr}T00:00:00`)
    : new Date(new Date().toISOString().slice(0, 10) + "T00:00:00");
  const target = new Date(`${targetDateStr}T00:00:00`);
  return Math.ceil((target.getTime() - from.getTime()) / 86400000);
}

/** 만 나이 계산 */
export function calcInternationalAge(
  birthDateStr: string,
  targetDateStr?: string,
): number {
  const today = targetDateStr ? new Date(targetDateStr) : new Date();
  const birth = new Date(birthDateStr);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}

/** 더치페이 */
export function calcDutchPay(
  total: number,
  people: number,
): { perPerson: number; remainder: number } {
  if (people <= 0) return { perPerson: 0, remainder: 0 };
  const perPerson = Math.floor(total / people);
  return { perPerson, remainder: total - perPerson * people };
}

/** 팁 계산 */
export function calcTip(
  amount: number,
  tipPct: number,
): { tipAmt: number; total: number } {
  const tipAmt = Math.round(amount * (tipPct / 100));
  return { tipAmt, total: amount + tipAmt };
}

/** 주유비 계산 */
export function calcFuelCost(
  distanceKm: number,
  fuelEfficiencyKmL: number,
  fuelPricePerLiter: number,
): { litersNeeded: number; totalCost: number } {
  if (fuelEfficiencyKmL <= 0) return { litersNeeded: 0, totalCost: 0 };
  const litersNeeded = distanceKm / fuelEfficiencyKmL;
  return { litersNeeded, totalCost: Math.round(litersNeeded * fuelPricePerLiter) };
}

/** 전기요금 간이 추정 (한전 누진 3단계, 2026년 기준) */
export function calcElectricityCost(kwhUsed: number): {
  baseFee: number;
  usageFee: number;
  total: number;
} {
  let usageFee = 0;
  if (kwhUsed <= 200) {
    usageFee = kwhUsed * 93.3;
  } else if (kwhUsed <= 400) {
    usageFee = 200 * 93.3 + (kwhUsed - 200) * 187.9;
  } else {
    usageFee = 200 * 93.3 + 200 * 187.9 + (kwhUsed - 400) * 280.6;
  }
  const baseFee = kwhUsed <= 200 ? 910 : kwhUsed <= 400 ? 1600 : 7300;
  const total = Math.round(baseFee + usageFee * 1.137);
  return { baseFee, usageFee: Math.round(usageFee), total };
}

/** 속도위반 과태료 (일반 도로, 2026년) */
export function calcTrafficFine(
  actualSpeedKmh: number,
  limitKmh: number,
  zone: "school" | "normal" = "normal",
): number {
  const over = actualSpeedKmh - limitKmh;
  if (over <= 0) return 0;
  const fines = zone === "school"
    ? [
        { threshold: 20, fine: 70_000 },
        { threshold: 40, fine: 100_000 },
        { threshold: 60, fine: 130_000 },
        { threshold: Infinity, fine: 160_000 },
      ]
    : [
        { threshold: 20, fine: 40_000 },
        { threshold: 40, fine: 70_000 },
        { threshold: 60, fine: 100_000 },
        { threshold: Infinity, fine: 130_000 },
      ];
  return fines.find((f) => over <= f.threshold)?.fine ?? 0;
}

/** 자동차세 (cc 기준, 비영업용 승용차) */
export function calcCarTax(displacementCC: number, months = 12): number {
  let rate: number;
  if (displacementCC <= 1000) rate = 80;
  else if (displacementCC <= 1600) rate = 140;
  else if (displacementCC <= 2000) rate = 200;
  else if (displacementCC <= 2500) rate = 220;
  else rate = 240;
  const annualTax = displacementCC * rate;
  return Math.round((annualTax * months) / 12);
}

/** 증감률 / 퍼센트 계산 */
export function calcPercentChange(before: number, after: number): number {
  if (before === 0) return 0;
  return ((after - before) / Math.abs(before)) * 100;
}

/** A의 B% */
export function calcPercentOf(value: number, pct: number): number {
  return value * (pct / 100);
}

/** B는 A의 몇%? */
export function calcPercentRatio(whole: number, part: number): number {
  if (whole === 0) return 0;
  return (part / whole) * 100;
}
