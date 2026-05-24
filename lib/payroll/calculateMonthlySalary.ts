import {
  EMPLOYMENT_INSURANCE_RATE_EMPLOYEE,
  HEALTH_INSURANCE_RATE_EMPLOYEE,
  LOCAL_INCOME_TAX_FACTOR,
  LONG_TERM_CARE_FACTOR_OF_HEALTH,
  NATIONAL_PENSION_RATE_EMPLOYEE,
} from "@/lib/payroll/constants";
import { getPensionHealthCeiling } from "@/lib/payroll/insuranceCeiling";
import { estimateSimplifiedIncomeTax } from "@/lib/payroll/incomeTaxSimplified2026";

const floorTo10 = (n: number) => Math.floor(n / 10) * 10;
const roundTo10 = (n: number) => Math.round(n / 10) * 10;

export type SalaryBreakdown = {
  monthlyGross: number;
  monthlyNonTax: number;
  monthlyTaxableForInsurance: number;
  nationalPension: number;
  healthInsurance: number;
  longTermCare: number;
  employmentInsurance: number;
  incomeTax: number;
  localIncomeTax: number;
  netMonthly: number;
};

export function calculateMonthlySalary(
  input: {
    annualSalary: number;
    annualNonTax: number;
    dependentsIncludingSelf: number;
    childrenUnder20: number;
  },
  /** 보험료 상한 등에 쓸 기준일(기본: 오늘). 급여 귀속 월과 다를 수 있습니다. */
  referenceDate: Date = new Date(),
): SalaryBreakdown {
  const annualSalary = Math.max(0, input.annualSalary);
  const annualNonTax = Math.max(0, input.annualNonTax);
  const dependents = Math.min(Math.max(Math.floor(input.dependentsIncludingSelf), 1), 11);
  const childrenUnder20 = Math.min(Math.max(Math.floor(input.childrenUnder20), 0), 15);

  const monthlyGross = Math.floor(annualSalary / 12);
  const monthlyNonTax = Math.floor(annualNonTax / 12);

  // 국민연금만 기준소득월액 상한(637만/659만) 적용; 건강보험·고용보험은 상한이 훨씬 높아 전액 기준
  const pensionCeiling = getPensionHealthCeiling(referenceDate);
  const pensionBase = Math.min(monthlyGross, pensionCeiling);

  const nationalPension = floorTo10(pensionBase * NATIONAL_PENSION_RATE_EMPLOYEE);
  const healthInsurance = floorTo10(monthlyGross * HEALTH_INSURANCE_RATE_EMPLOYEE);
  const longTermCare = roundTo10(healthInsurance * LONG_TERM_CARE_FACTOR_OF_HEALTH);
  const employmentInsurance = floorTo10(monthlyGross * EMPLOYMENT_INSURANCE_RATE_EMPLOYEE);

  const monthlyTaxableForTable = Math.max(0, monthlyGross - monthlyNonTax);

  const incomeTax = estimateSimplifiedIncomeTax({
    monthlyTaxableWage: monthlyTaxableForTable,
    dependentsIncludingSelf: dependents,
    childrenUnder20,
  });

  const localIncomeTax = floorTo10(incomeTax * LOCAL_INCOME_TAX_FACTOR);

  const netMonthly =
    monthlyGross -
    nationalPension -
    healthInsurance -
    longTermCare -
    employmentInsurance -
    incomeTax -
    localIncomeTax;

  return {
    monthlyGross,
    monthlyNonTax,
    monthlyTaxableForInsurance: pensionBase,
    nationalPension,
    healthInsurance,
    longTermCare,
    employmentInsurance,
    incomeTax,
    localIncomeTax,
    netMonthly,
  };
}
