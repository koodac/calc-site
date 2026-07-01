/** 건강 카테고리 순수 계산 함수 */

/** BMI 계산 */
export function calcBMI(weightKg: number, heightCm: number): number {
  if (heightCm <= 0) return 0;
  return weightKg / Math.pow(heightCm / 100, 2);
}

export function bmiCategory(bmi: number): string {
  if (bmi < 18.5) return "저체중";
  if (bmi < 23) return "정상";
  if (bmi < 25) return "과체중";
  if (bmi < 30) return "비만 1단계";
  return "비만 2단계";
}

/** 기초대사량 BMR (Mifflin–St Jeor) */
export function calcBMR(
  male: boolean,
  age: number,
  weightKg: number,
  heightCm: number,
): number {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return male ? base + 5 : base - 161;
}

/** TDEE: BMR × 활동계수 */
export function calcTDEE(bmr: number, activityMultiplier: number): number {
  return bmr * activityMultiplier;
}

/** 표준체중 (브로카법) */
export function calcStandardWeight(heightCm: number, male: boolean): number {
  return male ? (heightCm - 100) * 0.9 : (heightCm - 100) * 0.85;
}

/** 단백질 권장량 (체중 × 1.2 g) */
export function calcProtein(weightKg: number): number {
  return weightKg * 1.2;
}

/** 수분 권장량 (체중 × 35 ml) */
export function calcWater(weightKg: number): number {
  return Math.round(weightKg * 35);
}

/** 걸음 수 칼로리 */
export function calcStepsCalories(steps: number, weightKg: number): number {
  return steps * 0.0004 * weightKg;
}

/** 불쾌지수 & Heat Index */
export function calcHeatIndex(
  tempC: number,
  humidity: number,
): { discomfortIndex: number; heatIndexC: number | null } {
  const di = 0.81 * tempC + 0.01 * humidity * (0.99 * tempC - 14.99) + 46.3;
  let hi: number | null = null;
  if (tempC >= 27 && humidity >= 40) {
    const tf = (tempC * 9) / 5 + 32;
    const hif =
      -42.379 +
      2.04901523 * tf +
      10.14333127 * humidity -
      0.22475541 * tf * humidity -
      0.00683783 * tf * tf -
      0.05481717 * humidity * humidity +
      0.00122874 * tf * tf * humidity +
      0.00085282 * tf * humidity * humidity -
      0.00000199 * tf * tf * humidity * humidity;
    hi = ((hif - 32) * 5) / 9;
  }
  return { discomfortIndex: di, heatIndexC: hi };
}

/** 1RM 계산 (Epley 공식) */
export function calcOneRM(weightKg: number, reps: number): number {
  if (reps === 1) return weightKg;
  return weightKg * (1 + reps / 30);
}

/** 목표 심박수 (Karvonen 공식) */
export function calcHeartRateReserve(
  maxHR: number,
  restHR: number,
  intensityPct: number,
): number {
  return Math.round(restHR + (maxHR - restHR) * (intensityPct / 100));
}

/** FFMI (체지방제외근육지수) */
export function calcFFMI(
  weightKg: number,
  heightCm: number,
  bodyFatPct: number,
): number {
  if (heightCm <= 0) return 0;
  const leanMass = weightKg * (1 - bodyFatPct / 100);
  return leanMass / Math.pow(heightCm / 100, 2);
}

/** 체표면적 BSA (Du Bois 공식) */
export function calcBSA(weightKg: number, heightCm: number): number {
  return 0.007184 * Math.pow(weightKg, 0.425) * Math.pow(heightCm, 0.725);
}

/** 체표면적 BSA (Mosteller 공식) — sqrt(h×w/3600) */
export function calcBSAMosteller(weightKg: number, heightCm: number): number {
  return Math.sqrt((heightCm * weightKg) / 3600);
}

/** 크레아티닌 청소율 (Cockcroft-Gault) */
export function calcCreatinineClearance(
  creatinine: number,
  age: number,
  weightKg: number,
  male: boolean,
): number {
  const base = ((140 - age) * weightKg) / (72 * creatinine);
  return male ? base : base * 0.85;
}

/** eGFR (CKD-EPI 간이) */
export function calcEGFR(
  creatinine: number,
  age: number,
  male: boolean,
): number {
  const kappa = male ? 0.9 : 0.7;
  const alpha = male ? -0.411 : -0.329;
  const ratio = creatinine / kappa;
  const factor = male ? 1 : 1.018;
  return 141 * Math.pow(Math.min(ratio, 1), alpha) * Math.pow(Math.max(ratio, 1), -1.209) * Math.pow(0.993, age) * factor;
}

/** Friedewald LDL */
export function calcFriedewaldLDL(
  totalCholesterol: number,
  hdl: number,
  triglycerides: number,
): number {
  return totalCholesterol - hdl - triglycerides / 5;
}

/** Widmark BAC */
export function calcBACWidmark(
  alcoholGrams: number,
  weightKg: number,
  male: boolean,
  hoursElapsed: number,
): number {
  const r = male ? 0.68 : 0.55;
  const bac = alcoholGrams / (weightKg * r * 10) - 0.015 * hoursElapsed;
  return Math.max(0, bac);
}

/** 알코올 그램 계산 (음료 → g) */
export function calcAlcoholGrams(
  drinksMl: number,
  abvPct: number,
): number {
  return drinksMl * (abvPct / 100) * 0.789;
}

/** 체지방량 (린 매스) */
export function calcLeanMass(weightKg: number, bodyFatPct: number): number {
  return weightKg * (1 - bodyFatPct / 100);
}

/** 수면 사이클 기상 시각 (90분 × n주기) */
export function calcSleepCycleTimes(
  bedHour: number,
  bedMinute = 0,
): Array<{ cycles: number; hour: number; minute: number }> {
  return [1, 2, 3, 4, 5, 6].map((n) => {
    const totalMin = bedHour * 60 + bedMinute + n * 90;
    return { cycles: n, hour: Math.floor(totalMin / 60) % 24, minute: totalMin % 60 };
  });
}

/** 최대 자연근육량 (Martin Berkhan 공식) */
export function calcMaxMuscleMass(heightCm: number): number {
  return (heightCm - 100) * 1.0;
}

/** 비만도 (표준체중 대비%) */
export function calcObesityRate(weightKg: number, heightCm: number, male: boolean): number {
  const std = calcStandardWeight(heightCm, male);
  if (std <= 0) return 0;
  return ((weightKg - std) / std) * 100;
}

/** 카페인 권장 상한(mg) — 성인 기준 400mg */
export const CAFFEINE_DAILY_LIMIT_MG = 400;

/** MET 칼로리 소모 */
export function calcMETCalories(
  met: number,
  weightKg: number,
  durationMin: number,
): number {
  return met * weightKg * (durationMin / 60);
}

/** HOMA-IR (인슐린 저항성 지수) */
export function calcHOMAIR(fastingGlucose: number, fastingInsulin: number): number {
  return (fastingGlucose * fastingInsulin) / 405;
}

/** 단백질 하루 필요량 (고급, 운동 수준별) */
export function calcProteinByActivity(
  weightKg: number,
  activityLevel: "sedentary" | "moderate" | "active",
): { min: number; max: number } {
  const multipliers = { sedentary: [0.8, 1.0], moderate: [1.2, 1.6], active: [1.6, 2.2] };
  const [lo, hi] = multipliers[activityLevel];
  return { min: weightKg * lo, max: weightKg * hi };
}

/** 키 예측 (Tanner-Whitehouse — 부모 평균 신장법) */
export function calcHeightPrediction(
  fatherCm: number,
  motherCm: number,
  male: boolean,
): { predicted: number; rangeMin: number; rangeMax: number } {
  const predicted = male
    ? (fatherCm + motherCm + 13) / 2
    : (fatherCm + motherCm - 13) / 2;
  return { predicted, rangeMin: predicted - 8.5, rangeMax: predicted + 8.5 };
}
