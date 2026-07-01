import { describe, it, expect } from "vitest";
import {
  calcPyeongToM2,
  calcM2ToPyeong,
  convertTemperature,
  calcInchToCm,
  calcCmToInch,
  calcByteConvert,
  calcGallonToLiter,
  calcLiterToGallon,
  calcDMSToDecimal,
  calcDecimalToDMS,
  calcSlopeAngle,
  calcRadianToDegree,
  calcDegreeToRadian,
  calcCubicMeter,
  calcWatt,
  calcDecibel,
  calcPPM,
  calcPerimeter,
  calcDensity,
  calcBuildingCoverage,
  calcFloorAreaRatio,
  calcSpeedDistanceTime,
  calcParallelResistor,
  calcHaversine,
  convertLength,
} from "../unit";

describe("pyeong/m2", () => {
  it("10평 → 약 33.06m²", () => expect(calcPyeongToM2(10)).toBeCloseTo(33.06, 1));
  it("33.0579m² → 약 10평", () => expect(calcM2ToPyeong(33.0579)).toBeCloseTo(10, 2));
  it("왕복 변환 일치", () => expect(calcM2ToPyeong(calcPyeongToM2(25))).toBeCloseTo(25, 5));
});

describe("convertTemperature", () => {
  it("0°C = 32°F", () => expect(convertTemperature(0, "C", "F")).toBeCloseTo(32, 5));
  it("100°C = 373.15K", () => expect(convertTemperature(100, "C", "K")).toBeCloseTo(373.15, 2));
  it("32°F = 0°C", () => expect(convertTemperature(32, "F", "C")).toBeCloseTo(0, 5));
  it("C→F→C 왕복", () => expect(convertTemperature(convertTemperature(25, "C", "F"), "F", "C")).toBeCloseTo(25, 5));
});

describe("inch/cm", () => {
  it("1인치 = 2.54cm", () => expect(calcInchToCm(1)).toBeCloseTo(2.54, 5));
  it("2.54cm = 1인치", () => expect(calcCmToInch(2.54)).toBeCloseTo(1, 5));
});

describe("calcByteConvert", () => {
  it("1 GB = 1024 MB", () => expect(calcByteConvert(1, "GB", "MB")).toBe(1024));
  it("1024 KB = 1 MB", () => expect(calcByteConvert(1024, "KB", "MB")).toBe(1));
  it("1 TB = 1024 GB", () => expect(calcByteConvert(1, "TB", "GB")).toBe(1024));
});

describe("gallon/liter", () => {
  it("1갤런 ≈ 3.785L", () => expect(calcGallonToLiter(1)).toBeCloseTo(3.785, 2));
  it("3.78541L ≈ 1갤런", () => expect(calcLiterToGallon(3.78541)).toBeCloseTo(1, 4));
});

describe("calcDMSToDecimal", () => {
  it("37° 30' 0\" = 37.5°", () => expect(calcDMSToDecimal(37, 30, 0)).toBeCloseTo(37.5, 5));
  it("0° 0' 0\" = 0°", () => expect(calcDMSToDecimal(0, 0, 0)).toBe(0));
});

describe("calcDecimalToDMS", () => {
  it("37.5° = 37° 30' 0\"", () => {
    const r = calcDecimalToDMS(37.5);
    expect(r.degrees).toBe(37);
    expect(r.minutes).toBe(30);
    expect(r.seconds).toBeCloseTo(0, 5);
  });
});

describe("calcSlopeAngle", () => {
  it("rise=1, run=1 → 45°", () => {
    expect(calcSlopeAngle(1, 1).degrees).toBeCloseTo(45, 3);
  });
  it("run=0 → 90°", () => {
    expect(calcSlopeAngle(1, 0).degrees).toBe(90);
  });
  it("경사율 % 계산", () => {
    expect(calcSlopeAngle(1, 10).percent).toBeCloseTo(10, 5);
  });
});

describe("radian/degree", () => {
  it("π rad = 180°", () => expect(calcRadianToDegree(Math.PI)).toBeCloseTo(180, 5));
  it("180° = π rad", () => expect(calcDegreeToRadian(180)).toBeCloseTo(Math.PI, 5));
});

describe("calcCubicMeter", () => {
  it("2×3×4 = 24", () => expect(calcCubicMeter(2, 3, 4)).toBe(24));
});

describe("calcWatt", () => {
  it("220V × 10A = 2200W", () => expect(calcWatt(220, 10)).toBe(2200));
});

describe("calcDecibel", () => {
  it("p1=p2 → 0dB", () => expect(calcDecibel(1, 1)).toBeCloseTo(0, 5));
  it("p1=10p2 → 10dB", () => expect(calcDecibel(10, 1)).toBeCloseTo(10, 5));
});

describe("calcPPM", () => {
  it("5mg / 1L = 5ppm", () => expect(calcPPM(5, 1)).toBe(5));
  it("분모 0 → 0", () => expect(calcPPM(5, 0)).toBe(0));
});

describe("calcPerimeter", () => {
  it("원 반지름 5 → 둘레 약 31.42", () => expect(calcPerimeter("circle", [5])).toBeCloseTo(31.42, 1));
  it("직사각형 3×4 → 14", () => expect(calcPerimeter("rectangle", [3, 4])).toBe(14));
  it("삼각형 3+4+5 = 12", () => expect(calcPerimeter("triangle", [3, 4, 5])).toBe(12));
});

describe("calcDensity", () => {
  it("100g / 50ml = 2 g/ml", () => expect(calcDensity(100, 50)).toBe(2));
  it("부피 0 → 0", () => expect(calcDensity(100, 0)).toBe(0));
});

describe("calcBuildingCoverage", () => {
  it("건물 60m² / 토지 100m² = 60%", () => expect(calcBuildingCoverage(60, 100)).toBe(60));
});

describe("calcFloorAreaRatio", () => {
  it("연면적 200m² / 토지 100m² = 200%", () => expect(calcFloorAreaRatio(200, 100)).toBe(200));
});

describe("calcSpeedDistanceTime", () => {
  it("속도=거리/시간: 100km / 2h = 50km/h", () => {
    expect(calcSpeedDistanceTime("speed", { distance: 100, time: 2 })).toBe(50);
  });
  it("거리=속도×시간: 60×3 = 180km", () => {
    expect(calcSpeedDistanceTime("distance", { speed: 60, time: 3 })).toBe(180);
  });
  it("시간=거리/속도: 150/60 = 2.5h", () => {
    expect(calcSpeedDistanceTime("time", { speed: 60, distance: 150 })).toBeCloseTo(2.5, 5);
  });
});

describe("calcParallelResistor", () => {
  it("R1=R2=10Ω → 병렬 5Ω", () => expect(calcParallelResistor(10, 10)).toBe(5));
  it("R=0 → 0", () => expect(calcParallelResistor(0, 10)).toBe(0));
});

describe("calcHaversine", () => {
  it("서울(37.57, 126.98) → 부산(35.18, 129.07) ≈ 325km", () => {
    expect(calcHaversine(37.57, 126.98, 35.18, 129.07)).toBeCloseTo(325, -1);
  });
  it("같은 좌표 → 0", () => {
    expect(calcHaversine(37.5, 127.0, 37.5, 127.0)).toBeCloseTo(0, 5);
  });
});

describe("convertLength", () => {
  it("1m = 100cm", () => expect(convertLength(1, "m", "cm")).toBeCloseTo(100, 5));
  it("1km = 1000m", () => expect(convertLength(1, "km", "m")).toBe(1000));
  it("1in = 2.54cm", () => expect(convertLength(1, "in", "cm")).toBeCloseTo(2.54, 4));
  it("왕복 변환", () => expect(convertLength(convertLength(5, "m", "ft"), "ft", "m")).toBeCloseTo(5, 5));
});
