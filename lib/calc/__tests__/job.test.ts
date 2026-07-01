import { describe, it, expect } from "vitest";
import {
  calcWeeklyHolidayPay,
  calcWorkMinutes,
  calcMonthlyToHourly,
  calcUPH,
  calcUnusedAnnualPay,
  calcAttendanceRate,
  calcPartTimePay,
  calcAchievementRate,
  calcDailyRate,
  calcSalaryForecast,
  calcDateDiff,
  calcAnnualLeaveDays,
  calcSeverancePay,
  calcFourInsurance,
  calcSalaryRaise,
  isAboveMinimumWage,
  calcOvertimePay,
  calcMaternityPay,
  calcParentalLeavePay,
  calcUnemploymentBenefit,
  MINIMUM_HOURLY_2026,
} from "../job";

describe("calcWeeklyHolidayPay", () => {
  it("주 40시간, 시급 10000원 → 주휴수당 80000원", () => {
    expect(calcWeeklyHolidayPay(10_000, 40)).toBe(80_000);
  });
  it("주 15시간 미만 → 0원", () => {
    expect(calcWeeklyHolidayPay(10_000, 14)).toBe(0);
  });
  it("주 15시간 정확히 → 지급", () => {
    expect(calcWeeklyHolidayPay(10_000, 15)).toBeGreaterThan(0);
  });
  it("주 50시간이어도 40시간 상한 적용", () => {
    expect(calcWeeklyHolidayPay(10_000, 50)).toBe(calcWeeklyHolidayPay(10_000, 40));
  });
  it("주 20시간 → 8h×(20/40) = 4h치", () => {
    expect(calcWeeklyHolidayPay(10_000, 20)).toBeCloseTo(40_000);
  });
});

describe("calcWorkMinutes", () => {
  it("9시~18시 = 540분", () => {
    expect(calcWorkMinutes(9, 0, 18, 0)).toBe(540);
  });
  it("야간 근무: 22시~06시 = 480분", () => {
    expect(calcWorkMinutes(22, 0, 6, 0)).toBe(480);
  });
  it("9시~9시30분 = 30분", () => {
    expect(calcWorkMinutes(9, 0, 9, 30)).toBe(30);
  });
});

describe("calcMonthlyToHourly", () => {
  it("2,500,000 / 209h = 약 11,962원", () => {
    expect(calcMonthlyToHourly(2_500_000, 209)).toBeCloseTo(11961.7, 0);
  });
  it("시간 0 → 0", () => {
    expect(calcMonthlyToHourly(2_500_000, 0)).toBe(0);
  });
});

describe("calcUPH", () => {
  it("120개 / 8h = 15 UPH", () => {
    expect(calcUPH(120, 8)).toBe(15);
  });
  it("시간 0 → 0", () => {
    expect(calcUPH(100, 0)).toBe(0);
  });
});

describe("calcUnusedAnnualPay", () => {
  it("1일 12만원 × 5일 = 60만원", () => {
    expect(calcUnusedAnnualPay(120_000, 5)).toBe(600_000);
  });
});

describe("calcAttendanceRate", () => {
  it("20/22 = 약 90.91%", () => {
    expect(calcAttendanceRate(20, 22)).toBeCloseTo(90.91, 1);
  });
  it("전체 0 → 0", () => {
    expect(calcAttendanceRate(5, 0)).toBe(0);
  });
});

describe("calcPartTimePay", () => {
  it("10320 × 20h × 4주 = 825,600원", () => {
    expect(calcPartTimePay(10_320, 20, 4)).toBe(825_600);
  });
});

describe("calcAchievementRate", () => {
  it("80/100 = 80%", () => {
    expect(calcAchievementRate(100, 80)).toBe(80);
  });
  it("목표 0 → 0", () => {
    expect(calcAchievementRate(0, 50)).toBe(0);
  });
  it("초과달성 → 100% 이상", () => {
    expect(calcAchievementRate(100, 120)).toBe(120);
  });
});

describe("calcDailyRate", () => {
  it("3,000,000 / 30 × 10일 = 1,000,000원", () => {
    expect(calcDailyRate(3_000_000, 10)).toBe(1_000_000);
  });
});

describe("calcSalaryForecast", () => {
  it("5000만, 3%, 1년 → 약 5150만", () => {
    expect(calcSalaryForecast(50_000_000, 3, 1)).toBeCloseTo(51_500_000, -3);
  });
  it("0% 인상 → 동일", () => {
    expect(calcSalaryForecast(50_000_000, 0, 5)).toBe(50_000_000);
  });
});

describe("calcDateDiff", () => {
  it("같은 날 → 1일", () => {
    const r = calcDateDiff("2024-01-01", "2024-01-01");
    expect(r.days).toBe(1);
  });
  it("1년 차이 → 366일(2024 윤년)", () => {
    const r = calcDateDiff("2024-01-01", "2024-12-31");
    expect(r.days).toBe(366);
  });
  it("종료가 시작보다 앞 → 0", () => {
    const r = calcDateDiff("2024-06-01", "2024-01-01");
    expect(r.days).toBe(0);
  });
});

describe("calcAnnualLeaveDays", () => {
  it("6개월 근무 → 6일", () => {
    expect(calcAnnualLeaveDays("2024-01-01", "2024-07-01")).toBe(6);
  });
  it("1년 근무 → 15일", () => {
    expect(calcAnnualLeaveDays("2023-01-01", "2024-01-01")).toBe(15);
  });
  it("3년 근무 → 16일", () => {
    expect(calcAnnualLeaveDays("2021-01-01", "2024-01-01")).toBe(16);
  });
  it("최대 25일 상한", () => {
    expect(calcAnnualLeaveDays("2000-01-01", "2030-01-01")).toBe(25);
  });
});

describe("calcSeverancePay", () => {
  it("1일 평균임금 10만, 1년(366일 포함) → 약 300만(±1%)", () => {
    // 양 끝 포함 366일/365 × 30 × 10만 = 약 300.8만
    const r = calcSeverancePay(100_000, "2023-01-01", "2024-01-01");
    expect(r.severance).toBeGreaterThan(2_900_000);
    expect(r.severance).toBeLessThan(3_100_000);
  });
  it("종료가 입사보다 앞 → 퇴직금 0", () => {
    const r = calcSeverancePay(100_000, "2024-01-01", "2023-01-01");
    expect(r.severance).toBe(0);
  });
});

describe("calcFourInsurance", () => {
  it("월급 300만원 → 합계가 0보다 크다", () => {
    const r = calcFourInsurance(3_000_000);
    expect(r.total).toBeGreaterThan(0);
  });
  it("국민연금 + 건강 + 장기요양 + 고용보험 = total", () => {
    const r = calcFourInsurance(3_000_000);
    expect(r.total).toBe(r.nationalPension + r.healthInsurance + r.longTermCare + r.employmentInsurance);
  });
  it("월급 0 → 합계 0", () => {
    const r = calcFourInsurance(0);
    expect(r.total).toBe(0);
  });
});

describe("calcSalaryRaise", () => {
  it("4800→5100 → 인상률 약 6.25%", () => {
    const r = calcSalaryRaise(48_000_000, 51_000_000);
    expect(r.raisePct).toBeCloseTo(6.25, 1);
    expect(r.diffAmt).toBe(3_000_000);
  });
  it("기존 0 → 인상률 0", () => {
    const r = calcSalaryRaise(0, 1_000_000);
    expect(r.raisePct).toBe(0);
  });
});

describe("isAboveMinimumWage", () => {
  it(`${MINIMUM_HOURLY_2026}원 이상 → true`, () => {
    expect(isAboveMinimumWage(MINIMUM_HOURLY_2026)).toBe(true);
  });
  it("기준 미만 → false", () => {
    expect(isAboveMinimumWage(MINIMUM_HOURLY_2026 - 1)).toBe(false);
  });
});

describe("calcOvertimePay", () => {
  it("시급 10000, 정규 8h, 연장 2h → 10만 + 3만 = 13만", () => {
    const r = calcOvertimePay(10_000, 8, 2);
    expect(r.regularPay).toBe(80_000);
    expect(r.overtimePay).toBe(30_000);
    expect(r.total).toBe(110_000);
  });
});

describe("calcMaternityPay", () => {
  it("월급 200만 → 상한 내에서 600만", () => {
    const r = calcMaternityPay(2_000_000);
    expect(r.actual).toBe(6_000_000);
  });
  it("월급 300만 → 상한(630만) 적용", () => {
    const r = calcMaternityPay(3_000_000);
    expect(r.actual).toBe(r.cap);
  });
});

describe("calcParentalLeavePay", () => {
  it("월급 100만 → 80만 (80%, 상한 미적용)", () => {
    const r = calcParentalLeavePay(1_000_000);
    expect(r.actual).toBe(800_000);
  });
  it("월급 200만 이상 → 상한 150만 적용 (160만 > 150만)", () => {
    const r = calcParentalLeavePay(2_000_000);
    expect(r.actual).toBe(1_500_000);
  });
});

describe("calcUnemploymentBenefit", () => {
  it("평균 일당 10만, 6개월 미만 → 120일, 하한(66048원) 적용", () => {
    const r = calcUnemploymentBenefit(100_000, 5);
    expect(r.durationDays).toBe(120);
    // 60,000원 < 하한 66,048원 → 하한 우선 (2026년 최저임금 10,320×8×80%)
    expect(r.dailyBenefit).toBe(66_048);
  });
  it("일당 11만: 66,000원 상한보다 하한(66,048원)이 크므로 하한 적용", () => {
    const r = calcUnemploymentBenefit(110_000, 5);
    // 66,000원(상한) < 66,048원(하한) → 하한 우선
    expect(r.dailyBenefit).toBe(66_048);
  });
  it("가입 3년 이상 → 180일", () => {
    const r = calcUnemploymentBenefit(100_000, 36);
    expect(r.durationDays).toBe(180);
  });
});
