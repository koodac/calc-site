import { TAX_AT_10M_BY_DEPENDENTS_2026, TAX_BANDS_2026 } from "./incomeTaxTable2026";

const roundWon = (v: number) => Math.round(v);
const floorTo10 = (v: number) => Math.floor(v / 10) * 10;

function lookupBandTax(monthlyTaxableWage: number, familyColIndex: number): number {
  const wage = Math.max(0, monthlyTaxableWage);
  if (wage < 770_000) return 0;

  const col = Math.min(Math.max(familyColIndex, 0), 10);
  const wageThousand = Math.floor(wage / 1_000);

  let lo = 0;
  let hi = TAX_BANDS_2026.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    const [minThousandWon, maxThousandWon, taxes] = TAX_BANDS_2026[mid];

    if (wageThousand < minThousandWon) {
      hi = mid - 1;
      continue;
    }
    if (wageThousand > maxThousandWon) {
      lo = mid + 1;
      continue;
    }

    return taxes[col] ?? 0;
  }

  return TAX_BANDS_2026[TAX_BANDS_2026.length - 1][2][col] ?? 0;
}

function highIncomeTaxDep1(monthlyTaxableWage: number): number {
  const w = Math.max(10_000_000, monthlyTaxableWage);
  const baseAt10M = TAX_AT_10M_BY_DEPENDENTS_2026[0];

  if (w <= 14_000_000) {
    return baseAt10M + 25_000 + (w - 10_000_000) * 0.98 * 0.35;
  }
  if (w <= 28_000_000) {
    return baseAt10M + 1_397_000 + (w - 14_000_000) * 0.98 * 0.38;
  }
  if (w <= 30_000_000) {
    return baseAt10M + 6_610_600 + (w - 28_000_000) * 0.98 * 0.4;
  }
  if (w <= 45_000_000) {
    return baseAt10M + 7_394_600 + (w - 30_000_000) * 0.4;
  }
  if (w <= 87_000_000) {
    return baseAt10M + 13_394_600 + (w - 45_000_000) * 0.42;
  }
  return baseAt10M + 31_034_600 + (w - 87_000_000) * 0.45;
}

function lookupTax(monthlyWage: number, familyColIndex: number): number {
  const col = Math.min(Math.max(familyColIndex, 0), 10);
  if (monthlyWage <= 10_000_000) {
    return lookupBandTax(monthlyWage, col);
  }

  const dep1Tax = highIncomeTaxDep1(monthlyWage);
  const depAdjustment = TAX_AT_10M_BY_DEPENDENTS_2026[0] - TAX_AT_10M_BY_DEPENDENTS_2026[col];
  return Math.max(0, dep1Tax - depAdjustment);
}

function childTaxCreditApprox(childrenUnder20: number): number {
  const c = Math.min(Math.max(childrenUnder20, 0), 10);
  if (c <= 0) return 0;
  if (c === 1) return 20_830;
  if (c === 2) return 45_830;
  return 45_830 + (c - 2) * 33_330;
}

export function estimateSimplifiedIncomeTax(input: {
  monthlyTaxableWage: number;
  dependentsIncludingSelf: number;
  childrenUnder20: number;
}): number {
  const wage = Math.max(0, input.monthlyTaxableWage);
  const fam = Math.min(Math.max(input.dependentsIncludingSelf, 1), 11);
  const col = fam - 1;

  let tax = lookupTax(wage, col);
  tax -= childTaxCreditApprox(input.childrenUnder20);
  return floorTo10(roundWon(Math.max(0, tax)));
}
