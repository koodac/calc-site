/** 군대 카테고리 순수 계산 함수 */

function fmtDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** 전역일 계산 */
export function calcDischargeDate(
  enlistDateStr: string,
  serviceMonths: number,
): string {
  const enlist = new Date(`${enlistDateStr}T00:00:00`);
  enlist.setMonth(enlist.getMonth() + serviceMonths);
  return fmtDate(enlist);
}

/** 해병대 기수 계산 (1949-08-15 창설일 기준) */
export function calcMarineClass(enlistDateStr: string): number {
  const founding = new Date("1949-08-15T00:00:00");
  const enlist = new Date(`${enlistDateStr}T00:00:00`);
  if (enlist < founding) return 0;
  const monthsDiff =
    (enlist.getFullYear() - founding.getFullYear()) * 12 +
    (enlist.getMonth() - founding.getMonth());
  return Math.floor(monthsDiff / 4) + 1;
}

/** 공군 점수 계산 */
export function calcAirForceScore(params: {
  combatReadiness: number;
  missionAccomplishment: number;
  discipline: number;
  specialBonus: number;
}): number {
  return (
    params.combatReadiness * 0.4 +
    params.missionAccomplishment * 0.3 +
    params.discipline * 0.2 +
    params.specialBonus * 0.1
  );
}

/** 복무 경과일 계산 */
export function calcServiceDays(
  enlistDateStr: string,
  targetDateStr?: string,
): { elapsed: number; remaining: number; totalDays: number; serviceMonths: number } {
  const today = targetDateStr
    ? new Date(`${targetDateStr}T00:00:00`)
    : new Date(new Date().toISOString().slice(0, 10) + "T00:00:00");
  const enlist = new Date(`${enlistDateStr}T00:00:00`);

  // 기본 육군 18개월
  const serviceMonths = 18;
  const discharge = new Date(enlist);
  discharge.setMonth(discharge.getMonth() + serviceMonths);

  const totalDays = Math.floor((discharge.getTime() - enlist.getTime()) / 86400000);
  const elapsed = Math.max(0, Math.floor((today.getTime() - enlist.getTime()) / 86400000));
  const remaining = Math.max(0, totalDays - elapsed);

  return { elapsed, remaining, totalDays, serviceMonths };
}

/** 49일 기도 날짜 계산 */
export function calcFortyNineDay(startDateStr: string): string {
  const start = new Date(`${startDateStr}T00:00:00`);
  start.setDate(start.getDate() + 48);
  return fmtDate(start);
}
