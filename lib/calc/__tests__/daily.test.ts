import { describe, it, expect } from "vitest";
import {
  calcDday,
  calcInternationalAge,
  calcDutchPay,
  calcTip,
  calcFuelCost,
  calcElectricityCost,
  calcTrafficFine,
  calcCarTax,
  calcPercentChange,
  calcPercentOf,
  calcPercentRatio,
} from "../daily";

describe("calcDday", () => {
  it("당일 → 0", () => expect(calcDday("2025-01-01", "2025-01-01")).toBe(0));
  it("내일 → 1", () => expect(calcDday("2025-01-02", "2025-01-01")).toBe(1));
  it("어제 → -1", () => expect(calcDday("2024-12-31", "2025-01-01")).toBe(-1));
});

describe("calcInternationalAge", () => {
  it("1990-01-01, 기준 2025-01-01 → 35세", () => {
    expect(calcInternationalAge("1990-01-01", "2025-01-01")).toBe(35);
  });
  it("생일 당일 → 만 나이 증가", () => {
    expect(calcInternationalAge("2000-06-15", "2025-06-15")).toBe(25);
  });
  it("생일 전날 → 아직 전 나이", () => {
    expect(calcInternationalAge("2000-06-15", "2025-06-14")).toBe(24);
  });
});

describe("calcDutchPay", () => {
  it("총액 100, 3명 → 33원씩, 나머지 1원", () => {
    const r = calcDutchPay(100, 3);
    expect(r.perPerson).toBe(33);
    expect(r.remainder).toBe(1);
  });
  it("나누어 떨어지는 경우 나머지 0", () => {
    const r = calcDutchPay(100_000, 4);
    expect(r.perPerson).toBe(25_000);
    expect(r.remainder).toBe(0);
  });
  it("사람 0 → perPerson 0", () => {
    const r = calcDutchPay(100, 0);
    expect(r.perPerson).toBe(0);
  });
});

describe("calcTip", () => {
  it("10만원, 10% → 팁 1만원, 합계 11만원", () => {
    const r = calcTip(100_000, 10);
    expect(r.tipAmt).toBe(10_000);
    expect(r.total).toBe(110_000);
  });
  it("팁 0% → 팁 없음", () => {
    const r = calcTip(100_000, 0);
    expect(r.tipAmt).toBe(0);
  });
});

describe("calcFuelCost", () => {
  it("100km, 연비 10km/L, 리터당 1600원 → 16,000원", () => {
    const r = calcFuelCost(100, 10, 1600);
    expect(r.litersNeeded).toBeCloseTo(10, 5);
    expect(r.totalCost).toBe(16_000);
  });
  it("연비 0 → 0", () => {
    const r = calcFuelCost(100, 0, 1600);
    expect(r.totalCost).toBe(0);
  });
});

describe("calcElectricityCost", () => {
  it("100kWh → 기본요금 910원 + 사용요금", () => {
    const r = calcElectricityCost(100);
    expect(r.baseFee).toBe(910);
    expect(r.total).toBeGreaterThan(0);
  });
  it("300kWh → 2단계 요금", () => {
    const r = calcElectricityCost(300);
    expect(r.baseFee).toBe(1600);
  });
  it("500kWh → 3단계 요금", () => {
    const r = calcElectricityCost(500);
    expect(r.baseFee).toBe(7300);
  });
  it("사용량 증가 → 요금 증가", () => {
    expect(calcElectricityCost(300).total).toBeGreaterThan(calcElectricityCost(100).total);
  });
});

describe("calcTrafficFine", () => {
  it("20km/h 이하 초과 (일반) → 40,000원", () => {
    expect(calcTrafficFine(80, 70)).toBe(40_000);
  });
  it("제한속도 이하 → 0", () => {
    expect(calcTrafficFine(60, 70)).toBe(0);
  });
  it("스쿨존 → 일반보다 높은 과태료", () => {
    const normal = calcTrafficFine(90, 70, "normal");
    const school = calcTrafficFine(90, 70, "school");
    expect(school).toBeGreaterThan(normal);
  });
  it("40km/h 초과~60 미만 (일반) → 100,000원", () => {
    expect(calcTrafficFine(120, 70)).toBe(100_000);
  });
});

describe("calcCarTax", () => {
  it("1000cc 이하 → 80원×cc, 연간", () => {
    expect(calcCarTax(1000, 12)).toBe(80_000);
  });
  it("2000cc → 200원×cc = 400,000원", () => {
    expect(calcCarTax(2000, 12)).toBe(400_000);
  });
  it("6개월분", () => {
    expect(calcCarTax(2000, 6)).toBe(200_000);
  });
});

describe("calcPercentChange", () => {
  it("100→125 → 25% 증가", () => expect(calcPercentChange(100, 125)).toBe(25));
  it("100→75 → -25% 감소", () => expect(calcPercentChange(100, 75)).toBe(-25));
  it("기준 0 → 0", () => expect(calcPercentChange(0, 100)).toBe(0));
});

describe("calcPercentOf", () => {
  it("200의 15% = 30", () => expect(calcPercentOf(200, 15)).toBe(30));
});

describe("calcPercentRatio", () => {
  it("50은 200의 25%", () => expect(calcPercentRatio(200, 50)).toBe(25));
  it("전체 0 → 0", () => expect(calcPercentRatio(0, 50)).toBe(0));
});
