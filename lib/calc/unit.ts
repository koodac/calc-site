/** 단위 변환 카테고리 순수 계산 함수 */

/** 평 ↔ m² */
export function calcPyeongToM2(pyeong: number): number { return pyeong * 3.30579; }
export function calcM2ToPyeong(m2: number): number { return m2 / 3.30579; }

/** 온도 변환 */
export function convertTemperature(
  value: number,
  from: "C" | "F" | "K",
  to: "C" | "F" | "K",
): number {
  let celsius: number;
  switch (from) {
    case "C": celsius = value; break;
    case "F": celsius = (value - 32) * 5 / 9; break;
    case "K": celsius = value - 273.15; break;
  }
  switch (to) {
    case "C": return celsius;
    case "F": return celsius * 9 / 5 + 32;
    case "K": return celsius + 273.15;
  }
}

/** 인치 ↔ cm */
export function calcInchToCm(inches: number): number { return inches * 2.54; }
export function calcCmToInch(cm: number): number { return cm / 2.54; }

/** 바이트 단위 변환 */
export function calcByteConvert(
  value: number,
  fromUnit: "B" | "KB" | "MB" | "GB" | "TB",
  toUnit: "B" | "KB" | "MB" | "GB" | "TB",
): number {
  const units = { B: 1, KB: 1024, MB: 1024 ** 2, GB: 1024 ** 3, TB: 1024 ** 4 };
  return (value * units[fromUnit]) / units[toUnit];
}

/** 갤런 ↔ 리터 */
export function calcGallonToLiter(gallons: number): number { return gallons * 3.78541; }
export function calcLiterToGallon(liters: number): number { return liters / 3.78541; }

/** 도분초 → 십진수 각도 */
export function calcDMSToDecimal(degrees: number, minutes: number, seconds: number): number {
  return degrees + minutes / 60 + seconds / 3600;
}

/** 십진수 각도 → 도분초 */
export function calcDecimalToDMS(decimal: number): { degrees: number; minutes: number; seconds: number } {
  const deg = Math.floor(decimal);
  const minFloat = (decimal - deg) * 60;
  const min = Math.floor(minFloat);
  const sec = (minFloat - min) * 60;
  return { degrees: deg, minutes: min, seconds: sec };
}

/** 경사각 */
export function calcSlopeAngle(rise: number, run: number): { degrees: number; percent: number } {
  if (run === 0) return { degrees: 90, percent: Infinity };
  const radians = Math.atan(rise / run);
  return { degrees: (radians * 180) / Math.PI, percent: (rise / run) * 100 };
}

/** 라디안 ↔ 도 */
export function calcRadianToDegree(rad: number): number { return (rad * 180) / Math.PI; }
export function calcDegreeToRadian(deg: number): number { return (deg * Math.PI) / 180; }

/** 부피 (가로×세로×높이) */
export function calcCubicMeter(l: number, w: number, h: number): number { return l * w * h; }

/** 전력(와트) */
export function calcWatt(voltage: number, current: number): number { return voltage * current; }

/** 데시벨 */
export function calcDecibel(p1: number, p2: number): number {
  if (p2 <= 0) return 0;
  return 10 * Math.log10(p1 / p2);
}

/** PPM 농도 */
export function calcPPM(soluteMg: number, solutionLiter: number): number {
  if (solutionLiter <= 0) return 0;
  return soluteMg / solutionLiter;
}

/** 둘레 계산 */
export function calcPerimeter(
  shape: "circle" | "rectangle" | "triangle",
  dims: number[],
): number {
  switch (shape) {
    case "circle": return 2 * Math.PI * (dims[0] ?? 0);
    case "rectangle": return 2 * ((dims[0] ?? 0) + (dims[1] ?? 0));
    case "triangle": return (dims[0] ?? 0) + (dims[1] ?? 0) + (dims[2] ?? 0);
    default: return 0;
  }
}

/** 밀도 */
export function calcDensity(mass: number, volume: number): number {
  if (volume <= 0) return 0;
  return mass / volume;
}

/** 건폐율 */
export function calcBuildingCoverage(buildingArea: number, landArea: number): number {
  if (landArea <= 0) return 0;
  return (buildingArea / landArea) * 100;
}

/** 용적률 */
export function calcFloorAreaRatio(totalFloorArea: number, landArea: number): number {
  if (landArea <= 0) return 0;
  return (totalFloorArea / landArea) * 100;
}

/** 속도/거리/시간 (하나를 구함) */
export function calcSpeedDistanceTime(
  solve: "speed" | "distance" | "time",
  known: { speed?: number; distance?: number; time?: number },
): number {
  const { speed = 0, distance = 0, time = 0 } = known;
  switch (solve) {
    case "speed": return time === 0 ? 0 : distance / time;
    case "distance": return speed * time;
    case "time": return speed === 0 ? 0 : distance / speed;
  }
}

/** 병렬 저항 */
export function calcParallelResistor(r1: number, r2: number): number {
  if (r1 <= 0 || r2 <= 0) return 0;
  return (r1 * r2) / (r1 + r2);
}

/** 하버사인 거리 (km) */
export function calcHaversine(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/** 일반 단위 변환 (길이) */
export function convertLength(
  value: number,
  from: "mm" | "cm" | "m" | "km" | "in" | "ft" | "yd" | "mi",
  to: "mm" | "cm" | "m" | "km" | "in" | "ft" | "yd" | "mi",
): number {
  const toMeter: Record<string, number> = {
    mm: 0.001, cm: 0.01, m: 1, km: 1000,
    in: 0.0254, ft: 0.3048, yd: 0.9144, mi: 1609.344,
  };
  return (value * toMeter[from]) / toMeter[to];
}
