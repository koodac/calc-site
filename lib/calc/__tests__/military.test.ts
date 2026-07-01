import { describe, it, expect } from "vitest";
import {
  calcDischargeDate,
  calcMarineClass,
  calcServiceDays,
  calcFortyNineDay,
} from "../military";

describe("calcDischargeDate", () => {
  it("2024-01-15 입대, 18개월 → 2025-07-15", () => {
    expect(calcDischargeDate("2024-01-15", 18)).toBe("2025-07-15");
  });
  it("2024-01-15 입대, 21개월(공군) → 2025-10-15", () => {
    expect(calcDischargeDate("2024-01-15", 21)).toBe("2025-10-15");
  });
  it("2024-01-15 입대, 20개월(해군) → 2025-09-15", () => {
    expect(calcDischargeDate("2024-01-15", 20)).toBe("2025-09-15");
  });
});

describe("calcMarineClass", () => {
  it("창설일(1949-08-15) → 1기", () => {
    expect(calcMarineClass("1949-08-15")).toBe(1);
  });
  it("창설 전 날짜 → 0", () => {
    expect(calcMarineClass("1949-08-14")).toBe(0);
  });
  it("4개월 후 → 2기", () => {
    expect(calcMarineClass("1949-12-15")).toBe(2);
  });
});

describe("calcServiceDays", () => {
  it("입대 당일 기준 → 경과일 0, 잔여 = 전체", () => {
    const r = calcServiceDays("2024-01-01", "2024-01-01");
    expect(r.elapsed).toBe(0);
    expect(r.remaining).toBe(r.totalDays);
  });
  it("전역일 이후 → remaining 0", () => {
    const r = calcServiceDays("2023-01-01", "2025-01-01");
    expect(r.remaining).toBe(0);
  });
});

describe("calcFortyNineDay", () => {
  it("시작일 + 48일 = 49재일", () => {
    expect(calcFortyNineDay("2025-01-01")).toBe("2025-02-18");
  });
});
