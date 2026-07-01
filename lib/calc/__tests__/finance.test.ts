import { describe, it, expect } from "vitest";
import {
  calcVAT,
  calcDiscount,
  calcCAGR,
  calcROI,
  calcROAS,
  calcMortgagePayment,
  calcCompoundSavings,
  calcMargin,
  calcAPY,
  calcCPM,
  calcBreakevenRecovery,
  calcMortgageCompare,
  calcPrepayment,
  calcJeonwolse,
  calcJeonseVsMonthly,
  calcStraightLineDepreciation,
  calcEBITDA,
  calcOverspendRatio,
  calcRetirementFund,
  calcSubscriptionScore,
  calcAcquisitionTax,
  calcCapitalGainsTax,
  calcGiftTax,
  calcNationalPensionEstimate,
} from "../finance";

describe("calcVAT", () => {
  it("공급가액 1,000,000 → 부가세 100,000, 합계 1,100,000", () => {
    const r = calcVAT(1_000_000, "supplyToTotal");
    expect(r.vat).toBe(100_000);
    expect(r.total).toBe(1_100_000);
    expect(r.supply).toBe(1_000_000);
  });
  it("합계 1,100,000 → 공급가액 1,000,000", () => {
    const r = calcVAT(1_100_000, "totalToSupply");
    expect(r.supply).toBe(1_000_000);
    expect(r.total).toBe(1_100_000);
  });
});

describe("calcDiscount", () => {
  it("10만원 10% 할인 → 9만원", () => {
    const r = calcDiscount(100_000, 10);
    expect(r.finalPrice).toBeCloseTo(90_000, 0);
  });
  it("2단계 할인 10%+10% → 19% 총할인", () => {
    const r = calcDiscount(100_000, 10, 10);
    expect(r.totalRatePct).toBeCloseTo(19, 1);
  });
  it("할인율 0 → 원가 그대로", () => {
    const r = calcDiscount(100_000, 0);
    expect(r.finalPrice).toBe(100_000);
  });
});

describe("calcCAGR", () => {
  it("1000만→1500만 5년 → CAGR 약 8.45%", () => {
    expect(calcCAGR(10_000_000, 15_000_000, 5)).toBeCloseTo(8.45, 1);
  });
  it("시작값 0 → 0", () => {
    expect(calcCAGR(0, 1_000_000, 5)).toBe(0);
  });
});

describe("calcROI", () => {
  it("투입 1000만, 회수 1350만 → ROI 35%", () => {
    const r = calcROI(10_000_000, 13_500_000);
    expect(r.roiPct).toBeCloseTo(35, 1);
    expect(r.netProfit).toBe(3_500_000);
  });
  it("손실 → ROI 음수", () => {
    const r = calcROI(1_000_000, 800_000);
    expect(r.roiPct).toBeLessThan(0);
  });
});

describe("calcROAS", () => {
  it("매출 1000만, 광고비 200만 → ROAS 5", () => {
    const r = calcROAS(10_000_000, 2_000_000, 30);
    expect(r.roas).toBeCloseTo(5, 1);
  });
  it("광고비 0 → ROAS 0", () => {
    const r = calcROAS(1_000_000, 0, 30);
    expect(r.roas).toBe(0);
  });
});

describe("calcMortgagePayment", () => {
  it("3억, 4.5%, 360개월 → 월 약 152만원대", () => {
    const r = calcMortgagePayment(300_000_000, 4.5, 360);
    expect(r.monthlyPayment).toBeGreaterThan(1_400_000);
    expect(r.monthlyPayment).toBeLessThan(1_700_000);
  });
  it("금리 0 → 원금 균등 분할", () => {
    const r = calcMortgagePayment(12_000_000, 0, 12);
    expect(r.monthlyPayment).toBeCloseTo(1_000_000, 0);
  });
  it("총 이자 = 총 상환액 - 원금", () => {
    const r = calcMortgagePayment(100_000_000, 5, 120);
    expect(r.totalInterest).toBeCloseTo(r.totalPayment - 100_000_000, 0);
  });
});

describe("calcCompoundSavings", () => {
  it("월 50만, 4%, 36개월 → 세전 이자 > 0", () => {
    const r = calcCompoundSavings(500_000, 4, 36);
    expect(r.grossInterest).toBeGreaterThan(0);
  });
  it("금리 0 → 이자 0", () => {
    const r = calcCompoundSavings(100_000, 0, 12);
    expect(r.grossInterest).toBeCloseTo(0, 0);
  });
  it("세후 < 세전", () => {
    const r = calcCompoundSavings(500_000, 5, 24);
    expect(r.afterTax).toBeLessThan(r.fv);
  });
});

describe("calcMargin", () => {
  it("원가 7000, 판매가 10000 → 마진율 30%", () => {
    const r = calcMargin(7_000, 10_000);
    expect(r.marginPct).toBeCloseTo(30, 1);
    expect(r.profit).toBe(3_000);
  });
  it("원가 = 판매가 → 마진율 0", () => {
    const r = calcMargin(10_000, 10_000);
    expect(r.marginPct).toBe(0);
  });
});

describe("calcAPY", () => {
  it("연 4% 월복리 → APY 약 4.074%", () => {
    expect(calcAPY(4, 12)).toBeCloseTo(4.074, 2);
  });
  it("복리 1회(단리) → APY = 명목이율", () => {
    expect(calcAPY(5, 1)).toBeCloseTo(5, 3);
  });
});

describe("calcCPM", () => {
  it("광고비 50만, 노출 100만 → CPM 500원", () => {
    const r = calcCPM(500_000, 1_000_000, 5_000, 50);
    expect(r.cpm).toBeCloseTo(500, 0);
  });
  it("노출 0 → CPM 0", () => {
    const r = calcCPM(500_000, 0, 0, 0);
    expect(r.cpm).toBe(0);
  });
});

describe("calcBreakevenRecovery", () => {
  it("손실 50% → 복구 100% 필요", () => {
    expect(calcBreakevenRecovery(50)).toBeCloseTo(100, 0);
  });
  it("손실 0 → 복구 0%", () => {
    expect(calcBreakevenRecovery(0)).toBe(0);
  });
  it("손실 100% → Infinity", () => {
    expect(calcBreakevenRecovery(100)).toBe(Infinity);
  });
  it("손실 20% → 복구 25%", () => {
    expect(calcBreakevenRecovery(20)).toBeCloseTo(25, 1);
  });
});

describe("calcMortgageCompare", () => {
  it("원금균등 총이자 < 원리금균등 총이자", () => {
    const r = calcMortgageCompare(100_000_000, 5, 120);
    expect(r.equalPrincipal.totalInterest).toBeLessThan(r.equalPayment.totalInterest);
  });
});

describe("calcPrepayment", () => {
  it("중도상환 후 월납 감소", () => {
    const r = calcPrepayment(100_000_000, 5, 10_000_000, 120);
    expect(r.newMonthly).toBeLessThan(r.originalMonthly);
  });
  it("이자 절감액 > 0", () => {
    const r = calcPrepayment(100_000_000, 5, 10_000_000, 120);
    expect(r.savedInterest).toBeGreaterThan(0);
  });
});

describe("calcJeonwolse", () => {
  it("전세 3억, 월세 보증금 5천만, 월세 50만 → 전환율 약 2.4%", () => {
    // (50만×12) / (3억-5천만) × 100 = 600만/2.5억 × 100 = 2.4%
    expect(calcJeonwolse(300_000_000, 50_000_000, 500_000)).toBeCloseTo(2.4, 1);
  });
});

describe("calcJeonseVsMonthly", () => {
  it("전세비용 vs 월세비용 계산됨", () => {
    const r = calcJeonseVsMonthly(300_000_000, 50_000_000, 800_000, 4);
    expect(r.jeonseAnnualCost).toBeGreaterThan(0);
    expect(r.monthlyAnnualCost).toBeGreaterThan(0);
  });
});

describe("calcStraightLineDepreciation", () => {
  it("1000만, 잔존 100만, 5년 → 연 180만", () => {
    const r = calcStraightLineDepreciation(10_000_000, 1_000_000, 5);
    expect(r.annualDepreciation).toBe(1_800_000);
    expect(r.bookValues).toHaveLength(6);
    expect(r.bookValues[0]).toBe(10_000_000);
    expect(r.bookValues[5]).toBe(1_000_000);
  });
});

describe("calcEBITDA", () => {
  it("매출 1억, 매출원가 6천만, 판관비 2천만, D&A 5백만 → EBITDA 2500만", () => {
    const r = calcEBITDA(100_000_000, 60_000_000, 20_000_000, 5_000_000);
    expect(r.ebitda).toBe(25_000_000);
    expect(r.ebitdaMarginPct).toBeCloseTo(25, 1);
  });
});

describe("calcOverspendRatio", () => {
  it("지출 150만, 수입 200만 → 75%", () => {
    expect(calcOverspendRatio(1_500_000, 2_000_000)).toBeCloseTo(75, 1);
  });
  it("수입 0 → 0", () => {
    expect(calcOverspendRatio(1_000_000, 0)).toBe(0);
  });
});

describe("calcRetirementFund", () => {
  it("월 50만, 5%, 10년 → 적립액 > 납입액", () => {
    const r = calcRetirementFund(500_000, 5, 10);
    expect(r.fv).toBeGreaterThan(r.totalContributed);
  });
});

describe("calcSubscriptionScore", () => {
  it("무주택 10년, 부양 3명, 가입 5년 → 총점 계산", () => {
    const r = calcSubscriptionScore(10, 3, 60);
    expect(r.total).toBe(r.homeless + r.dependents + r.savings);
    expect(r.total).toBeGreaterThan(0);
  });
  it("총점 84점 초과 불가", () => {
    const r = calcSubscriptionScore(100, 100, 3000);
    expect(r.total).toBeLessThanOrEqual(84);
  });
});

describe("calcAcquisitionTax", () => {
  it("6억 이하 주택 → 취득세율 1%", () => {
    const r = calcAcquisitionTax(500_000_000, false);
    expect(r.ratePct).toBe(1.0);
  });
  it("다주택자 → 8% 중과", () => {
    const r = calcAcquisitionTax(300_000_000, true);
    expect(r.ratePct).toBe(8.0);
  });
});

describe("calcCapitalGainsTax", () => {
  it("차익 5000만, 보유 3년 이상 → 30% 장기공제 적용", () => {
    const r = calcCapitalGainsTax(50_000_000, 3);
    expect(r.longTermDeduction).toBe(15_000_000);
    expect(r.taxBase).toBe(35_000_000);
  });
  it("보유 2년 이하 → 공제 없음", () => {
    const r = calcCapitalGainsTax(50_000_000, 2);
    expect(r.longTermDeduction).toBe(0);
  });
});

describe("calcGiftTax", () => {
  it("배우자 증여 6억 → 공제 6억 초과분에만 과세", () => {
    const r = calcGiftTax(600_000_000, "배우자");
    expect(r.tax).toBe(0);
  });
  it("직계비속 1억 → 5000만 공제 후 5000만 과세", () => {
    const r = calcGiftTax(100_000_000, "직계비속");
    expect(r.taxBase).toBe(50_000_000);
    expect(r.tax).toBe(5_000_000);
  });
});

describe("calcNationalPensionEstimate", () => {
  it("평균소득 300만, 납입 240개월 → 양수", () => {
    expect(calcNationalPensionEstimate(3_000_000, 240)).toBeGreaterThan(0);
  });
});
