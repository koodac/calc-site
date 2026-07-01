/** 학교/수학 카테고리 순수 계산 함수 */

/** 최대공약수 (유클리드 호제법) */
export function calcGCD(a: number, b: number): number {
  let x = Math.abs(Math.floor(a));
  let y = Math.abs(Math.floor(b));
  while (y) {
    [x, y] = [y, x % y];
  }
  return x || 0;
}

/** 최소공배수 */
export function calcLCM(a: number, b: number): number {
  const g = calcGCD(a, b);
  return g === 0 ? 0 : Math.abs(a * b) / g;
}

/** 평균 및 통계 */
export function calcStats(nums: number[]): {
  count: number;
  sum: number;
  mean: number;
  min: number;
  max: number;
  median: number;
  stddev: number;
} | null {
  if (!nums.length) return null;
  const count = nums.length;
  const sum = nums.reduce((a, b) => a + b, 0);
  const mean = sum / count;
  const sorted = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(count / 2);
  const median =
    count % 2 === 1 ? sorted[mid]! : (sorted[mid - 1]! + sorted[mid]!) / 2;
  const stddev = Math.sqrt(
    nums.reduce((acc, x) => acc + (x - mean) ** 2, 0) / count,
  );
  return { count, sum, mean, min: sorted[0]!, max: sorted[count - 1]!, median, stddev };
}

/** 가중 평균 */
export function calcWeightedAvg(
  values: number[],
  weights: number[],
): number {
  const totalWeight = weights.reduce((a, b) => a + b, 0);
  if (totalWeight === 0) return 0;
  const weighted = values.reduce((acc, v, i) => acc + v * (weights[i] ?? 0), 0);
  return weighted / totalWeight;
}

/** 나머지(Modulo) */
export function calcModulo(a: number, b: number): number {
  if (b === 0) return NaN;
  return ((a % b) + b) % b;
}

/** 피보나치 수열 */
export function calcFibonacci(n: number): number[] {
  const result: number[] = [];
  let a = 0;
  let b = 1;
  for (let i = 0; i < Math.min(n, 50); i++) {
    result.push(a);
    [a, b] = [b, a + b];
  }
  return result;
}

/** 팩토리얼 */
export function calcFactorial(n: number): number {
  if (n < 0 || !Number.isInteger(n)) return NaN;
  if (n === 0) return 1;
  let result = 1;
  for (let i = 2; i <= Math.min(n, 18); i++) result *= i;
  return n > 18 ? Infinity : result;
}

/** 순열 nPr */
export function calcPermutation(n: number, r: number): number {
  if (r > n || r < 0 || n < 0) return 0;
  let result = 1;
  for (let i = n; i > n - r; i--) result *= i;
  return result;
}

/** 조합 nCr */
export function calcCombination(n: number, r: number): number {
  if (r > n || r < 0 || n < 0) return 0;
  const perm = calcPermutation(n, r);
  return perm / calcFactorial(r);
}

/** 석차 백분위 */
export function calcRankPercentile(rank: number, total: number): number {
  if (total <= 0) return 0;
  return ((total - rank) / total) * 100;
}

/** 석차 등급 (9등급제) */
export function calcSchoolGrade(rank: number, total: number): number {
  const pct = calcRankPercentile(rank, total);
  if (pct >= 96) return 1;
  if (pct >= 89) return 2;
  if (pct >= 77) return 3;
  if (pct >= 60) return 4;
  if (pct >= 40) return 5;
  if (pct >= 23) return 6;
  if (pct >= 11) return 7;
  if (pct >= 4) return 8;
  return 9;
}

/** GPA 계산 (4.5 만점) */
export function calcGPA(grades: Array<{ score: number; credits: number }>): number {
  const totalCredits = grades.reduce((a, g) => a + g.credits, 0);
  if (totalCredits === 0) return 0;
  const weighted = grades.reduce((a, g) => a + g.score * g.credits, 0);
  return weighted / totalCredits;
}

/** 신뢰구간 */
export function calcConfidenceInterval(
  mean: number,
  stddev: number,
  n: number,
  zScore = 1.96,
): { lower: number; upper: number; marginOfError: number } {
  const marginOfError = zScore * (stddev / Math.sqrt(n));
  return { lower: mean - marginOfError, upper: mean + marginOfError, marginOfError };
}

/** 발표 시간 (단어 수 / 분당 단어 수) */
export function calcSpeechTime(
  wordCount: number,
  wpm = 130,
): { minutes: number; seconds: number } {
  const totalSeconds = Math.round((wordCount / wpm) * 60);
  return { minutes: Math.floor(totalSeconds / 60), seconds: totalSeconds % 60 };
}

/** 분수 ↔ 소수 변환 */
export function calcFractionToDecimal(
  numerator: number,
  denominator: number,
): number {
  if (denominator === 0) return NaN;
  return numerator / denominator;
}

/** 소수 → 분수 (최대 분모 1000) */
export function calcDecimalToFraction(
  decimal: number,
): { numerator: number; denominator: number } {
  const precision = 1000;
  const n = Math.round(decimal * precision);
  const g = calcGCD(Math.abs(n), precision);
  return { numerator: n / g, denominator: precision / g };
}

/** 소수 판별 */
export function isPrime(n: number): boolean {
  if (!Number.isInteger(n) || n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

/** 비례식 계산 (A:B = C:?) */
export function calcProportion(a: number, b: number, c: number): number {
  if (a === 0) return 0;
  return (b * c) / a;
}

/** Z-점수 → P-값 (표준정규분포, 단측) */
export function calcPValueFromZ(z: number): number {
  const absZ = Math.abs(z);
  const t = 1 / (1 + 0.2316419 * absZ);
  const poly =
    t * (0.319381530 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
  const pdf = Math.exp(-0.5 * absZ * absZ) / Math.sqrt(2 * Math.PI);
  const oneTail = pdf * poly;
  return oneTail;
}

/** 피어슨 상관계수 */
export function calcCorrelation(xs: number[], ys: number[]): number {
  const n = xs.length;
  if (n !== ys.length || n === 0) return 0;
  const meanX = xs.reduce((a, b) => a + b, 0) / n;
  const meanY = ys.reduce((a, b) => a + b, 0) / n;
  const num = xs.reduce((acc, x, i) => acc + (x - meanX) * (ys[i]! - meanY), 0);
  const denomX = Math.sqrt(xs.reduce((acc, x) => acc + (x - meanX) ** 2, 0));
  const denomY = Math.sqrt(ys.reduce((acc, y) => acc + (y - meanY) ** 2, 0));
  return denomX === 0 || denomY === 0 ? 0 : num / (denomX * denomY);
}

/** 키 백분위 (한국 2017 성장도표 간이 - 18세 남성 기준) */
export function calcHeightPercentile(heightCm: number, age: number, male: boolean): string {
  const mean = male ? 158 + age * 1.5 : 154 + age * 0.8;
  const std = 6;
  const z = (heightCm - mean) / std;
  if (z >= 1.645) return "상위 5%";
  if (z >= 1.282) return "상위 10%";
  if (z >= 0.842) return "상위 20%";
  if (z >= 0) return "평균 이상";
  if (z >= -0.842) return "평균 이하";
  if (z >= -1.282) return "하위 20%";
  return "하위 10%";
}

/** 수능 등급 (원점수 → 등급, 표준점수 기준 간이) */
export function calcCSATGrade(standardScore: number): number {
  if (standardScore >= 131) return 1;
  if (standardScore >= 122) return 2;
  if (standardScore >= 113) return 3;
  if (standardScore >= 104) return 4;
  if (standardScore >= 96) return 5;
  if (standardScore >= 88) return 6;
  if (standardScore >= 80) return 7;
  if (standardScore >= 72) return 8;
  return 9;
}
