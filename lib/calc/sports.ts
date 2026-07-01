/** 스포츠 카테고리 순수 계산 함수 */

/** 달리기 페이스 (분/km) */
export function calcRunningPace(
  distanceKm: number,
  totalMinutes: number,
): { paceMinPerKm: number; paceMin: number; paceSec: number } {
  if (distanceKm <= 0) return { paceMinPerKm: 0, paceMin: 0, paceSec: 0 };
  const paceMinPerKm = totalMinutes / distanceKm;
  return {
    paceMinPerKm,
    paceMin: Math.floor(paceMinPerKm),
    paceSec: Math.round((paceMinPerKm % 1) * 60),
  };
}

/** ERA (이닝 소수점 처리 포함) */
export function calcERA(earnedRuns: number, inningsPitched: number): number {
  const ipInt = Math.floor(inningsPitched);
  const ipOut = Math.round((inningsPitched - ipInt) * 10);
  const totalInnings = ipInt + ipOut / 3;
  if (totalInnings === 0) return 0;
  return (earnedRuns / totalInnings) * 9;
}

/** 타율 */
export function calcBattingAvg(hits: number, atBats: number): number {
  if (atBats <= 0) return 0;
  return hits / atBats;
}

/** 출루율 */
export function calcOBP(
  hits: number,
  walks: number,
  hbp: number,
  atBats: number,
  sacrificeFlies: number,
): number {
  const denom = atBats + walks + hbp + sacrificeFlies;
  if (denom <= 0) return 0;
  return (hits + walks + hbp) / denom;
}

/** 장타율 */
export function calcSLG(
  singles: number,
  doubles: number,
  triples: number,
  homeRuns: number,
  atBats: number,
): number {
  if (atBats <= 0) return 0;
  return (singles + doubles * 2 + triples * 3 + homeRuns * 4) / atBats;
}

/** 수평 FOV (카메라/게임) */
export function calcFOV(
  sensorWidthMm: number,
  focalLengthMm: number,
): number {
  if (focalLengthMm <= 0) return 0;
  return 2 * Math.atan(sensorWidthMm / (2 * focalLengthMm)) * (180 / Math.PI);
}

/** 볼링 핀 합산 */
export function calcBowlingPinSum(scores: number[]): number {
  return scores.reduce((a, b) => a + b, 0);
}

/** EDPI (게임 실효 감도) */
export function calcEDPI(dpi: number, inGameSensitivity: number): number {
  return dpi * inGameSensitivity;
}

/** VDOT (Jack Daniels, 경기 기록 → 체력 지수) */
export function calcVDOT(distanceKm: number, timeMinutes: number): number {
  if (timeMinutes <= 0) return 0;
  const v = distanceKm / timeMinutes;
  const percentMax = 0.8 + 0.1894393 * Math.exp(-0.012778 * timeMinutes) + 0.2989558 * Math.exp(-0.1932605 * timeMinutes);
  const vo2 = -4.6 + 0.182258 * v * 1000 + 0.000104 * Math.pow(v * 1000, 2);
  return vo2 / percentMax;
}

/** 승률 */
export function calcWinRate(wins: number, total: number): number {
  if (total <= 0) return 0;
  return (wins / total) * 100;
}

/** 오류율 */
export function calcErrorRate(errors: number, total: number): number {
  if (total <= 0) return 0;
  return (errors / total) * 100;
}
