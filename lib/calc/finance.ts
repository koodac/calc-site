/** 금융 카테고리 순수 계산 함수 */

/** 부가세(10%) 계산 */
export function calcVAT(
  value: number,
  mode: "supplyToTotal" | "totalToSupply",
): { supply: number; vat: number; total: number } {
  if (mode === "supplyToTotal") {
    const vat = Math.round(value * 0.1);
    return { supply: value, vat, total: value + vat };
  }
  const supply = Math.round(value / 1.1);
  return { supply, vat: value - supply, total: value };
}

/** 할인 계산 (2단계 할인 가능) */
export function calcDiscount(
  price: number,
  rate1Pct: number,
  rate2Pct = 0,
): { finalPrice: number; discountAmt: number; totalRatePct: number } {
  const r1 = Math.max(0, Math.min(100, rate1Pct)) / 100;
  const r2 = Math.max(0, Math.min(100, rate2Pct)) / 100;
  const finalPrice = price * (1 - r1) * (1 - r2);
  const discountAmt = price - finalPrice;
  const totalRatePct = (1 - (1 - r1) * (1 - r2)) * 100;
  return { finalPrice, discountAmt, totalRatePct };
}

/** CAGR */
export function calcCAGR(
  startVal: number,
  endVal: number,
  years: number,
): number {
  if (startVal <= 0 || endVal <= 0 || years <= 0) return 0;
  return (Math.pow(endVal / startVal, 1 / years) - 1) * 100;
}

/** ROI */
export function calcROI(
  cost: number,
  returns: number,
  periodYears = 1,
): { netProfit: number; roiPct: number; annualizedRoiPct: number } {
  const netProfit = returns - cost;
  const roiPct = cost === 0 ? 0 : (netProfit / cost) * 100;
  const annualizedRoiPct =
    cost <= 0 || returns <= 0 || periodYears <= 0
      ? 0
      : (Math.pow(returns / cost, 1 / periodYears) - 1) * 100;
  return { netProfit, roiPct, annualizedRoiPct };
}

/** ROAS */
export function calcROAS(
  revenue: number,
  adCost: number,
  marginRatePct: number,
): { roas: number; bepRoas: number; marginProfit: number } {
  const roas = adCost === 0 ? 0 : revenue / adCost;
  const bepRoas = marginRatePct === 0 ? 0 : 1 / (marginRatePct / 100);
  const marginProfit = revenue * (marginRatePct / 100) - adCost;
  return { roas, bepRoas, marginProfit };
}

/** 원리금균등 대출 월납액 */
export function calcMortgagePayment(
  principal: number,
  annualRatePct: number,
  months: number,
): { monthlyPayment: number; totalPayment: number; totalInterest: number } {
  const r = annualRatePct / 100 / 12;
  const n = Math.max(1, Math.floor(months));
  const mp =
    r === 0
      ? principal / n
      : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayment = mp * n;
  return { monthlyPayment: mp, totalPayment, totalInterest: totalPayment - principal };
}

/** 적금 만기 예상액 (월말 복리) */
export function calcCompoundSavings(
  monthlyPayment: number,
  annualRatePct: number,
  months: number,
): { fv: number; totalPaid: number; grossInterest: number; taxAmount: number; afterTax: number } {
  const r = annualRatePct / 100 / 12;
  let fv = 0;
  for (let i = 0; i < months; i++) {
    fv = (fv + monthlyPayment) * (1 + r);
  }
  const totalPaid = monthlyPayment * months;
  const grossInterest = fv - totalPaid;
  const taxAmount = grossInterest * 0.154;
  return { fv, totalPaid, grossInterest, taxAmount, afterTax: fv - taxAmount };
}

/** 마진율 / 마크업 */
export function calcMargin(
  cost: number,
  price: number,
): { profit: number; marginPct: number; markupPct: number; costRatePct: number } {
  const profit = price - cost;
  const marginPct = price === 0 ? 0 : (profit / price) * 100;
  const markupPct = cost === 0 ? 0 : (profit / cost) * 100;
  const costRatePct = price === 0 ? 0 : (cost / price) * 100;
  return { profit, marginPct, markupPct, costRatePct };
}

/** APY (유효 연율) */
export function calcAPY(nominalRatePct: number, compoundingsPerYear: number): number {
  if (compoundingsPerYear <= 0) return 0;
  return (Math.pow(1 + nominalRatePct / 100 / compoundingsPerYear, compoundingsPerYear) - 1) * 100;
}

/** CPM / CPC / CVR */
export function calcCPM(
  adCost: number,
  impressions: number,
  clicks: number,
  conversions: number,
): { cpm: number; cpc: number; cpConv: number; ctr: number; cvr: number } {
  return {
    cpm: impressions === 0 ? 0 : (adCost / impressions) * 1000,
    cpc: clicks === 0 ? 0 : adCost / clicks,
    cpConv: conversions === 0 ? 0 : adCost / conversions,
    ctr: impressions === 0 ? 0 : (clicks / impressions) * 100,
    cvr: clicks === 0 ? 0 : (conversions / clicks) * 100,
  };
}

/** 손실 후 본전 복구 필요 수익률 */
export function calcBreakevenRecovery(lossPct: number): number {
  if (lossPct <= 0) return 0;
  if (lossPct >= 100) return Infinity;
  return (100 / (100 - lossPct) - 1) * 100;
}

/** 원금균등 vs 원리금균등 비교 */
export function calcMortgageCompare(
  principal: number,
  annualRatePct: number,
  months: number,
): {
  equalPayment: { monthly: number; totalInterest: number };
  equalPrincipal: { firstMonth: number; lastMonth: number; totalInterest: number };
} {
  const r = annualRatePct / 100 / 12;
  const n = Math.max(1, months);

  // 원리금균등
  const mp =
    r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const epTotalInterest = mp * n - principal;

  // 원금균등
  const principalPart = principal / n;
  let balance = principal;
  let eprinTotalInterest = 0;
  for (let i = 0; i < n; i++) {
    const interest = balance * r;
    eprinTotalInterest += interest;
    balance -= principalPart;
  }
  const firstMonth = principalPart + principal * r;
  const lastMonth = principalPart + principalPart * r;

  return {
    equalPayment: { monthly: mp, totalInterest: epTotalInterest },
    equalPrincipal: { firstMonth, lastMonth, totalInterest: eprinTotalInterest },
  };
}

/** 중도상환 시뮬레이션 */
export function calcPrepayment(
  remainingBalance: number,
  annualRatePct: number,
  prepaymentAmt: number,
  remainingMonths: number,
): { savedInterest: number; newMonthly: number; originalMonthly: number } {
  const r = annualRatePct / 100 / 12;
  const n = remainingMonths;
  const calcMonthly = (bal: number) =>
    r === 0 ? bal / n : (bal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const originalMonthly = calcMonthly(remainingBalance);
  const newBalance = Math.max(0, remainingBalance - prepaymentAmt);
  const newMonthly = calcMonthly(newBalance);
  const savedInterest =
    originalMonthly * n - remainingBalance - (newMonthly * n - newBalance);
  return { savedInterest, newMonthly, originalMonthly };
}

/** 전월세 전환율 */
export function calcJeonwolse(
  jeonseDeposit: number,
  monthlyDeposit: number,
  monthlyRent: number,
): number {
  const depositDiff = jeonseDeposit - monthlyDeposit;
  if (depositDiff <= 0) return 0;
  return (monthlyRent * 12) / depositDiff * 100;
}

/** 전세 vs 월세 비교 (기회비용) */
export function calcJeonseVsMonthly(
  jeonseDeposit: number,
  monthlyDeposit: number,
  monthlyRent: number,
  investRatePct: number,
): { jeonseAnnualCost: number; monthlyAnnualCost: number; breakEvenMonths: number } {
  const depositDiff = jeonseDeposit - monthlyDeposit;
  const opportunityCost = depositDiff * (investRatePct / 100);
  const jeonseAnnualCost = opportunityCost;
  const monthlyAnnualCost = monthlyRent * 12;
  const breakEvenMonths =
    monthlyRent === 0 ? 0 : (depositDiff / (monthlyRent * 12 - opportunityCost)) * 12;
  return { jeonseAnnualCost, monthlyAnnualCost, breakEvenMonths };
}

/** 정액법 감가상각 */
export function calcStraightLineDepreciation(
  cost: number,
  salvage: number,
  usefulYears: number,
): { annualDepreciation: number; bookValues: number[] } {
  const annualDepreciation = (cost - salvage) / usefulYears;
  const bookValues = Array.from(
    { length: usefulYears + 1 },
    (_, i) => cost - annualDepreciation * i,
  );
  return { annualDepreciation, bookValues };
}

/** EBITDA */
export function calcEBITDA(
  revenue: number,
  cogs: number,
  opex: number,
  da: number,
): { ebitda: number; ebitdaMarginPct: number } {
  const ebitda = revenue - cogs - opex + da;
  const ebitdaMarginPct = revenue === 0 ? 0 : (ebitda / revenue) * 100;
  return { ebitda, ebitdaMarginPct };
}

/** 실질 연이율 APR 변환 */
export function calcAPR(
  nominalRatePct: number,
  fees: number,
  principal: number,
  months: number,
): number {
  if (principal <= 0) return nominalRatePct;
  const effectiveMonthlyRate = nominalRatePct / 100 / 12;
  const totalFeeRate = fees / principal;
  const apr = (effectiveMonthlyRate + totalFeeRate / months) * 12 * 100;
  return apr;
}

/** 과소비율 */
export function calcOverspendRatio(spend: number, income: number): number {
  if (income <= 0) return 0;
  return (spend / income) * 100;
}

/** 퇴직연금 예상 수령액 */
export function calcRetirementFund(
  monthlyContribution: number,
  annualRatePct: number,
  years: number,
): { totalContributed: number; fv: number; interest: number } {
  const months = years * 12;
  const r = annualRatePct / 100 / 12;
  let fv = 0;
  for (let i = 0; i < months; i++) {
    fv = (fv + monthlyContribution) * (1 + r);
  }
  const totalContributed = monthlyContribution * months;
  return { totalContributed, fv, interest: fv - totalContributed };
}

/** 청약 가점 계산 */
export function calcSubscriptionScore(
  homelessYears: number,
  dependents: number,
  savingsMonths: number,
): { homeless: number; dependents: number; savings: number; total: number } {
  const homelessScore = Math.min(32, Math.floor(homelessYears) * 2);
  const dependentScore = Math.min(35, dependents <= 0 ? 5 : 5 + (dependents - 1) * 5);
  const savingsScore = Math.min(17, Math.floor(savingsMonths / 12) * 1);
  return {
    homeless: homelessScore,
    dependents: dependentScore,
    savings: savingsScore,
    total: homelessScore + dependentScore + savingsScore,
  };
}

/** 취득세 계산 (주택, 간이) */
export function calcAcquisitionTax(
  price: number,
  isMultiHome: boolean,
): { tax: number; ratePct: number } {
  let ratePct = 1.0;
  if (price > 900_000_000) ratePct = 3.0;
  else if (price > 600_000_000) ratePct = 2.0;
  if (isMultiHome) ratePct = 8.0;
  return { tax: Math.round(price * (ratePct / 100)), ratePct };
}

/** 양도소득세 간이 */
export function calcCapitalGainsTax(
  gainAmt: number,
  holdingYears: number,
): { longTermDeduction: number; taxBase: number; tax: number } {
  const longTermDeduction = holdingYears >= 3 ? Math.min(gainAmt * 0.3, gainAmt) : 0;
  const taxBase = gainAmt - longTermDeduction;
  let rate = 0.38;
  if (taxBase <= 12_000_000) rate = 0.06;
  else if (taxBase <= 46_000_000) rate = 0.15;
  else if (taxBase <= 88_000_000) rate = 0.24;
  else if (taxBase <= 150_000_000) rate = 0.35;
  return { longTermDeduction, taxBase, tax: Math.round(taxBase * rate) };
}

/** 증여세 간이 */
export function calcGiftTax(
  amount: number,
  relationship: "직계존속" | "직계비속" | "배우자" | "기타",
): { exemption: number; taxBase: number; tax: number } {
  const exemptions: Record<string, number> = {
    직계존속: 50_000_000,
    직계비속: 50_000_000,
    배우자: 600_000_000,
    기타: 10_000_000,
  };
  const exemption = exemptions[relationship] ?? 10_000_000;
  const taxBase = Math.max(0, amount - exemption);
  let tax = 0;
  if (taxBase <= 100_000_000) tax = taxBase * 0.1;
  else if (taxBase <= 500_000_000) tax = 10_000_000 + (taxBase - 100_000_000) * 0.2;
  else if (taxBase <= 1_000_000_000) tax = 90_000_000 + (taxBase - 500_000_000) * 0.3;
  else tax = 240_000_000 + (taxBase - 1_000_000_000) * 0.4;
  return { exemption, taxBase, tax: Math.round(tax) };
}

/** 근로장려금 (EITC) 간이 추정 */
export function calcEITC(annualIncome: number, hasChildren: boolean): number {
  if (hasChildren) {
    if (annualIncome <= 9_000_000) return Math.round((annualIncome / 9_000_000) * 3_000_000);
    if (annualIncome <= 21_000_000) return 3_000_000;
    if (annualIncome <= 38_000_000)
      return Math.round(3_000_000 * (1 - (annualIncome - 21_000_000) / 17_000_000));
    return 0;
  }
  if (annualIncome <= 3_000_000) return Math.round((annualIncome / 3_000_000) * 150_000);
  if (annualIncome <= 13_000_000) return 150_000;
  if (annualIncome <= 22_000_000)
    return Math.round(150_000 * (1 - (annualIncome - 13_000_000) / 9_000_000));
  return 0;
}

/** 국민연금 예상 수령액 간이 */
export function calcNationalPensionEstimate(
  avgMonthlyIncome: number,
  contributionMonths: number,
): number {
  const A = 2_690_000;
  const B = avgMonthlyIncome;
  return Math.round((0.5 * (A + B) + 0.00075 * B * contributionMonths) * (contributionMonths / 480));
}
