import { describe, it, expect } from "vitest";
import {
  calcBMI,
  bmiCategory,
  calcBMR,
  calcTDEE,
  calcStandardWeight,
  calcProtein,
  calcWater,
  calcStepsCalories,
  calcHeatIndex,
  calcOneRM,
  calcHeartRateReserve,
  calcFFMI,
  calcBSA,
  calcCreatinineClearance,
  calcEGFR,
  calcFriedewaldLDL,
  calcBACWidmark,
  calcAlcoholGrams,
  calcLeanMass,
  calcSleepCycleTimes,
  calcMETCalories,
  calcHOMAIR,
  calcHeightPrediction,
} from "../health";

describe("calcBMI", () => {
  it("70kg, 170cm → BMI 약 24.2", () => {
    expect(calcBMI(70, 170)).toBeCloseTo(24.22, 1);
  });
  it("키 0 → 0", () => {
    expect(calcBMI(70, 0)).toBe(0);
  });
});

describe("bmiCategory", () => {
  it("18 → 저체중", () => expect(bmiCategory(18)).toBe("저체중"));
  it("22 → 정상", () => expect(bmiCategory(22)).toBe("정상"));
  it("24 → 과체중", () => expect(bmiCategory(24)).toBe("과체중"));
  it("27 → 비만 1단계", () => expect(bmiCategory(27)).toBe("비만 1단계"));
  it("35 → 비만 2단계", () => expect(bmiCategory(35)).toBe("비만 2단계"));
});

describe("calcBMR", () => {
  it("남성 30세 70kg 175cm", () => {
    // 10*70 + 6.25*175 - 5*30 + 5 = 700+1093.75-150+5 = 1648.75
    expect(calcBMR(true, 30, 70, 175)).toBeCloseTo(1648.75, 1);
  });
  it("여성 30세 60kg 160cm", () => {
    // 10*60 + 6.25*160 - 5*30 - 161 = 600+1000-150-161 = 1289
    expect(calcBMR(false, 30, 60, 160)).toBeCloseTo(1289, 1);
  });
});

describe("calcTDEE", () => {
  it("BMR 1600 × 1.55 = 2480", () => {
    expect(calcTDEE(1600, 1.55)).toBeCloseTo(2480, 0);
  });
});

describe("calcStandardWeight", () => {
  it("남성 170cm → (170-100)×0.9 = 63kg", () => {
    expect(calcStandardWeight(170, true)).toBeCloseTo(63, 1);
  });
  it("여성 160cm → (160-100)×0.85 = 51kg", () => {
    expect(calcStandardWeight(160, false)).toBeCloseTo(51, 1);
  });
});

describe("calcProtein", () => {
  it("70kg → 84g", () => {
    expect(calcProtein(70)).toBeCloseTo(84, 0);
  });
});

describe("calcWater", () => {
  it("70kg → 2450ml", () => {
    expect(calcWater(70)).toBe(2450);
  });
});

describe("calcStepsCalories", () => {
  it("8000보, 70kg → 약 224kcal", () => {
    expect(calcStepsCalories(8000, 70)).toBeCloseTo(224, 0);
  });
});

describe("calcHeatIndex", () => {
  it("기온 35, 습도 80 → 불쾌지수 > 80 (매우 불쾌)", () => {
    const r = calcHeatIndex(35, 80);
    expect(r.discomfortIndex).toBeGreaterThan(80);
  });
  it("기온 27, 습도 40 이상 → Heat Index 계산됨", () => {
    const r = calcHeatIndex(27, 40);
    expect(r.heatIndexC).not.toBeNull();
  });
  it("기온 20, 습도 50 → Heat Index 없음", () => {
    const r = calcHeatIndex(20, 50);
    expect(r.heatIndexC).toBeNull();
  });
});

describe("calcOneRM", () => {
  it("100kg, 5회 → 약 116.7kg", () => {
    expect(calcOneRM(100, 5)).toBeCloseTo(116.7, 0);
  });
  it("1RM 그대로 → 동일", () => {
    expect(calcOneRM(100, 1)).toBe(100);
  });
});

describe("calcHeartRateReserve", () => {
  it("최대 190, 안정시 60, 강도 70% → 148", () => {
    expect(calcHeartRateReserve(190, 60, 70)).toBe(151);
  });
});

describe("calcFFMI", () => {
  it("80kg, 180cm, 체지방 15% → 약 20.99", () => {
    // 제지방 = 80×0.85 = 68kg, FFMI = 68/1.8² = 68/3.24 ≈ 20.99
    expect(calcFFMI(80, 180, 15)).toBeCloseTo(20.99, 1);
  });
});

describe("calcBSA", () => {
  it("70kg, 170cm → 약 1.8 m²", () => {
    expect(calcBSA(70, 170)).toBeCloseTo(1.8, 0);
  });
});

describe("calcCreatinineClearance", () => {
  it("남성 30세 70kg 크레아티닌 1.0 → 약 106.9 mL/min", () => {
    // ((140-30)×70) / (72×1.0) = 7700/72 ≈ 106.94
    expect(calcCreatinineClearance(1.0, 30, 70, true)).toBeCloseTo(106.9, 0);
  });
  it("여성는 0.85 계수 적용", () => {
    const male = calcCreatinineClearance(1.0, 30, 70, true);
    const female = calcCreatinineClearance(1.0, 30, 70, false);
    expect(female).toBeCloseTo(male * 0.85, 1);
  });
});

describe("calcEGFR", () => {
  it("크레아티닌 1.0, 50세 남성 → 양수", () => {
    expect(calcEGFR(1.0, 50, true)).toBeGreaterThan(0);
  });
});

describe("calcFriedewaldLDL", () => {
  it("총콜 200, HDL 50, TG 100 → LDL = 200-50-20 = 130", () => {
    expect(calcFriedewaldLDL(200, 50, 100)).toBe(130);
  });
});

describe("calcBACWidmark", () => {
  it("음주 후 시간 경과 시 BAC 감소", () => {
    const bac0 = calcBACWidmark(20, 70, true, 0);
    const bac2 = calcBACWidmark(20, 70, true, 2);
    expect(bac2).toBeLessThan(bac0);
  });
  it("BAC는 0 이상", () => {
    expect(calcBACWidmark(5, 70, true, 24)).toBeGreaterThanOrEqual(0);
  });
});

describe("calcAlcoholGrams", () => {
  it("소주 1잔(50ml, 도수 25%) → 약 9.86g", () => {
    expect(calcAlcoholGrams(50, 25)).toBeCloseTo(9.86, 1);
  });
});

describe("calcLeanMass", () => {
  it("70kg, 체지방 20% → 제지방 56kg", () => {
    expect(calcLeanMass(70, 20)).toBeCloseTo(56, 1);
  });
});

describe("calcSleepCycleTimes", () => {
  it("23시 취침 → 6주기 후 08:00", () => {
    // 23:00 + 6×90분 = 23:00 + 540분 = 32시 = 08:00
    const times = calcSleepCycleTimes(23, 0);
    expect(times).toHaveLength(6);
    const sixthCycle = times[5]!;
    expect(sixthCycle.hour).toBe(8);
    expect(sixthCycle.minute).toBe(0);
  });
  it("1주기 = 90분 후", () => {
    const times = calcSleepCycleTimes(22, 0);
    expect(times[0]!.hour).toBe(23);
    expect(times[0]!.minute).toBe(30);
  });
});

describe("calcMETCalories", () => {
  it("MET 4, 70kg, 60분 → 280 kcal", () => {
    expect(calcMETCalories(4, 70, 60)).toBeCloseTo(280, 0);
  });
});

describe("calcHOMAIR", () => {
  it("공복혈당 100, 인슐린 10 → 약 2.47", () => {
    expect(calcHOMAIR(100, 10)).toBeCloseTo(2.47, 1);
  });
});

describe("calcHeightPrediction", () => {
  it("부 180, 모 165, 남아 → 예측키 179cm", () => {
    // (180 + 165 + 13) / 2 = 358/2 = 179
    const r = calcHeightPrediction(180, 165, true);
    expect(r.predicted).toBeCloseTo(179, 0);
  });
  it("여아는 남아보다 낮게 예측", () => {
    const male = calcHeightPrediction(180, 165, true);
    const female = calcHeightPrediction(180, 165, false);
    expect(female.predicted).toBeLessThan(male.predicted);
  });
});
