import { describe, it, expect } from "vitest";
import {
  calcGCD,
  calcLCM,
  calcStats,
  calcWeightedAvg,
  calcModulo,
  calcFibonacci,
  calcFactorial,
  calcPermutation,
  calcCombination,
  calcRankPercentile,
  calcSchoolGrade,
  calcGPA,
  calcConfidenceInterval,
  calcSpeechTime,
  calcFractionToDecimal,
  calcDecimalToFraction,
  isPrime,
  calcProportion,
  calcCorrelation,
} from "../school";

describe("calcGCD", () => {
  it("gcd(48, 18) = 6", () => expect(calcGCD(48, 18)).toBe(6));
  it("gcd(0, 5) = 5", () => expect(calcGCD(0, 5)).toBe(5));
  it("gcd(7, 13) = 1 (서로소)", () => expect(calcGCD(7, 13)).toBe(1));
  it("gcd(12, 12) = 12", () => expect(calcGCD(12, 12)).toBe(12));
});

describe("calcLCM", () => {
  it("lcm(12, 18) = 36", () => expect(calcLCM(12, 18)).toBe(36));
  it("lcm(0, 5) = 0", () => expect(calcLCM(0, 5)).toBe(0));
  it("lcm(4, 6) = 12", () => expect(calcLCM(4, 6)).toBe(12));
});

describe("calcStats", () => {
  it("빈 배열 → null", () => expect(calcStats([])).toBeNull());
  it("[2, 4, 6] 평균 4", () => {
    const r = calcStats([2, 4, 6]);
    expect(r!.mean).toBe(4);
    expect(r!.sum).toBe(12);
    expect(r!.min).toBe(2);
    expect(r!.max).toBe(6);
    expect(r!.median).toBe(4);
  });
  it("짝수 개 중앙값 평균", () => {
    const r = calcStats([1, 3, 5, 7]);
    expect(r!.median).toBe(4);
  });
});

describe("calcWeightedAvg", () => {
  it("[80, 90], 가중 [3, 1] → 82.5", () => {
    expect(calcWeightedAvg([80, 90], [3, 1])).toBe(82.5);
  });
  it("가중치 합 0 → 0", () => {
    expect(calcWeightedAvg([80, 90], [0, 0])).toBe(0);
  });
});

describe("calcModulo", () => {
  it("10 % 3 = 1", () => expect(calcModulo(10, 3)).toBe(1));
  it("-7 % 3 = 2 (수학적 나머지)", () => expect(calcModulo(-7, 3)).toBe(2));
  it("나누기 0 → NaN", () => expect(calcModulo(5, 0)).toBeNaN());
});

describe("calcFibonacci", () => {
  it("7번째까지 → [0,1,1,2,3,5,8]", () => {
    expect(calcFibonacci(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });
  it("0개 → []", () => expect(calcFibonacci(0)).toEqual([]));
});

describe("calcFactorial", () => {
  it("0! = 1", () => expect(calcFactorial(0)).toBe(1));
  it("5! = 120", () => expect(calcFactorial(5)).toBe(120));
  it("음수 → NaN", () => expect(calcFactorial(-1)).toBeNaN());
});

describe("calcPermutation", () => {
  it("P(5,2) = 20", () => expect(calcPermutation(5, 2)).toBe(20));
  it("P(5,0) = 1", () => expect(calcPermutation(5, 0)).toBe(1));
  it("r > n → 0", () => expect(calcPermutation(3, 5)).toBe(0));
});

describe("calcCombination", () => {
  it("C(5,2) = 10", () => expect(calcCombination(5, 2)).toBe(10));
  it("C(5,0) = 1", () => expect(calcCombination(5, 0)).toBe(1));
  it("C(5,5) = 1", () => expect(calcCombination(5, 5)).toBe(1));
});

describe("calcRankPercentile", () => {
  it("전체 100명 중 1등 → 상위 99%", () => {
    expect(calcRankPercentile(1, 100)).toBeCloseTo(99, 0);
  });
  it("전체 = 0 → 0", () => expect(calcRankPercentile(1, 0)).toBe(0));
});

describe("calcSchoolGrade", () => {
  it("1등/100명 → 1등급", () => expect(calcSchoolGrade(1, 100)).toBe(1));
  it("50등/100명 → 5등급", () => expect(calcSchoolGrade(50, 100)).toBe(5));
});

describe("calcGPA", () => {
  it("4.0 × 3학점 + 3.0 × 1학점 → GPA 3.75", () => {
    const r = calcGPA([
      { score: 4.0, credits: 3 },
      { score: 3.0, credits: 1 },
    ]);
    expect(r).toBeCloseTo(3.75, 2);
  });
  it("빈 배열 → 0", () => expect(calcGPA([])).toBe(0));
});

describe("calcConfidenceInterval", () => {
  it("평균 100, std 15, n 100, z 1.96 → 오차범위 약 2.94", () => {
    const r = calcConfidenceInterval(100, 15, 100, 1.96);
    expect(r.marginOfError).toBeCloseTo(2.94, 1);
    expect(r.lower).toBeCloseTo(97.06, 1);
    expect(r.upper).toBeCloseTo(102.94, 1);
  });
});

describe("calcSpeechTime", () => {
  it("130단어, 130wpm → 1분", () => {
    const r = calcSpeechTime(130, 130);
    expect(r.minutes).toBe(1);
    expect(r.seconds).toBe(0);
  });
  it("65단어, 130wpm → 30초", () => {
    const r = calcSpeechTime(65, 130);
    expect(r.minutes).toBe(0);
    expect(r.seconds).toBe(30);
  });
});

describe("calcFractionToDecimal", () => {
  it("1/4 = 0.25", () => expect(calcFractionToDecimal(1, 4)).toBe(0.25));
  it("분모 0 → NaN", () => expect(calcFractionToDecimal(1, 0)).toBeNaN());
});

describe("calcDecimalToFraction", () => {
  it("0.5 → 1/2", () => {
    const r = calcDecimalToFraction(0.5);
    expect(r.numerator / r.denominator).toBeCloseTo(0.5, 5);
  });
});

describe("isPrime", () => {
  it("2 → true", () => expect(isPrime(2)).toBe(true));
  it("17 → true", () => expect(isPrime(17)).toBe(true));
  it("1 → false", () => expect(isPrime(1)).toBe(false));
  it("4 → false", () => expect(isPrime(4)).toBe(false));
  it("0 → false", () => expect(isPrime(0)).toBe(false));
  it("소수: 97 → true", () => expect(isPrime(97)).toBe(true));
});

describe("calcProportion", () => {
  it("3:6 = 5:? → 10", () => expect(calcProportion(3, 6, 5)).toBeCloseTo(10, 5));
  it("A = 0 → 0", () => expect(calcProportion(0, 6, 5)).toBe(0));
});

describe("calcCorrelation", () => {
  it("완전 양의 상관 → 1", () => {
    expect(calcCorrelation([1, 2, 3], [1, 2, 3])).toBeCloseTo(1, 5);
  });
  it("완전 음의 상관 → -1", () => {
    expect(calcCorrelation([1, 2, 3], [3, 2, 1])).toBeCloseTo(-1, 5);
  });
  it("상관없는 데이터 → 0에 가까움", () => {
    const r = calcCorrelation([1, 1, 1], [1, 2, 3]);
    expect(r).toBe(0);
  });
});
