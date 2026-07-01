import { describe, it, expect } from "vitest";
import {
  calcRunningPace,
  calcERA,
  calcBattingAvg,
  calcOBP,
  calcSLG,
  calcFOV,
  calcBowlingPinSum,
  calcEDPI,
  calcVDOT,
  calcWinRate,
  calcErrorRate,
} from "../sports";

describe("calcRunningPace", () => {
  it("5km, 25분 → 5분/km", () => {
    const r = calcRunningPace(5, 25);
    expect(r.paceMin).toBe(5);
    expect(r.paceSec).toBe(0);
  });
  it("거리 0 → 페이스 0", () => {
    const r = calcRunningPace(0, 25);
    expect(r.paceMinPerKm).toBe(0);
  });
  it("10km, 45분 → 4분 30초", () => {
    const r = calcRunningPace(10, 45);
    expect(r.paceMin).toBe(4);
    expect(r.paceSec).toBe(30);
  });
});

describe("calcERA", () => {
  it("3자책, 9이닝 → ERA 3.00", () => {
    expect(calcERA(3, 9)).toBeCloseTo(3.0, 2);
  });
  it("이닝 소수점 처리: 5.1이닝 = 5+1/3 이닝", () => {
    const era = calcERA(1, 5.1);
    expect(era).toBeCloseTo(9 / (5 + 1 / 3), 2);
  });
  it("이닝 0 → 0", () => {
    expect(calcERA(3, 0)).toBe(0);
  });
});

describe("calcBattingAvg", () => {
  it("30안타/100타수 → 3할", () => expect(calcBattingAvg(30, 100)).toBeCloseTo(0.3, 3));
  it("타수 0 → 0", () => expect(calcBattingAvg(10, 0)).toBe(0));
});

describe("calcOBP", () => {
  it("안타+볼넷+사구 / (타수+볼넷+사구+희비)", () => {
    expect(calcOBP(20, 10, 2, 80, 5)).toBeCloseTo((20 + 10 + 2) / (80 + 10 + 2 + 5), 4);
  });
  it("분모 0 → 0", () => expect(calcOBP(0, 0, 0, 0, 0)).toBe(0));
});

describe("calcSLG", () => {
  it("단안 10, 2루 5, 3루 2, HR 3 / 80타 → SLG", () => {
    const expected = (10 + 5 * 2 + 2 * 3 + 3 * 4) / 80;
    expect(calcSLG(10, 5, 2, 3, 80)).toBeCloseTo(expected, 4);
  });
  it("타수 0 → 0", () => expect(calcSLG(5, 0, 0, 0, 0)).toBe(0));
});

describe("calcFOV", () => {
  it("센서 36mm, 초점거리 50mm → FOV 약 39.6°", () => {
    expect(calcFOV(36, 50)).toBeCloseTo(39.6, 0);
  });
  it("초점거리 0 → 0", () => expect(calcFOV(36, 0)).toBe(0));
});

describe("calcBowlingPinSum", () => {
  it("[1,2,3,4] → 10", () => expect(calcBowlingPinSum([1, 2, 3, 4])).toBe(10));
  it("빈 배열 → 0", () => expect(calcBowlingPinSum([])).toBe(0));
});

describe("calcEDPI", () => {
  it("DPI 800, 감도 2 → 1600", () => expect(calcEDPI(800, 2)).toBe(1600));
  it("감도 0 → 0", () => expect(calcEDPI(800, 0)).toBe(0));
});

describe("calcVDOT", () => {
  it("5km, 20분 → VDOT 양수", () => {
    expect(calcVDOT(5, 20)).toBeGreaterThan(0);
  });
  it("시간 0 → 0", () => expect(calcVDOT(5, 0)).toBe(0));
});

describe("calcWinRate", () => {
  it("7승/10경기 → 70%", () => expect(calcWinRate(7, 10)).toBe(70));
  it("경기 0 → 0", () => expect(calcWinRate(5, 0)).toBe(0));
});

describe("calcErrorRate", () => {
  it("2오류/100건 → 2%", () => expect(calcErrorRate(2, 100)).toBe(2));
  it("전체 0 → 0", () => expect(calcErrorRate(0, 0)).toBe(0));
});
