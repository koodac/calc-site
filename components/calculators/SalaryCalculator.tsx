"use client";

import { type ReactNode, useMemo, useState } from "react";
import { calculateMonthlySalary } from "@/lib/payroll/calculateMonthlySalary";
import { getPensionHealthCeiling } from "@/lib/payroll/insuranceCeiling";

const fmt = (n: number) =>
  new Intl.NumberFormat("ko-KR", { maximumFractionDigits: 0 }).format(Math.round(n));

type TipKey =
  | "nonTax"
  | "dependents"
  | "children"
  | "pension"
  | "health"
  | "longTerm"
  | "employment"
  | "incomeTax"
  | "localTax";

export function SalaryCalculator() {
  const [annualSalary, setAnnualSalary] = useState(48_000_000);
  const [monthlyNonTaxInput, setMonthlyNonTaxInput] = useState(200_000);
  const [retirementPayMode, setRetirementPayMode] = useState<"separate" | "included">("separate");
  const [dependents, setDependents] = useState(1);
  const [childrenUnder20, setChildrenUnder20] = useState(0);
  const [openTip, setOpenTip] = useState<TipKey | null>(null);
  const insuranceCeiling = getPensionHealthCeiling();
  const annualNonTax = monthlyNonTaxInput * 12;
  const annualSalaryForCalc =
    retirementPayMode === "included" ? Math.floor((annualSalary * 12) / 13) : annualSalary;
  const invalidChildrenCount = childrenUnder20 >= dependents;

  const breakdown = useMemo(
    () =>
      calculateMonthlySalary({
        annualSalary: annualSalaryForCalc,
        annualNonTax,
        dependentsIncludingSelf: dependents,
        childrenUnder20,
      }),
    [annualSalaryForCalc, annualNonTax, dependents, childrenUnder20],
  );

  const tipMap: Record<TipKey, string> = {
    nonTax:
      "월 소득에서 세금을 바로 계산하지 않는 금액입니다. 월 급여에서 비과세를 뺀 금액으로 4대 보험·세금을 계산합니다.",
    dependents:
      "기본공제 대상자(본인 포함) 수입니다. 연간 소득요건 등 세법 기준에 따라 실제 반영 여부가 달라질 수 있습니다.",
    children:
      "8세 이상 20세 이하 자녀 수 기준의 세액공제 추정에 사용합니다. 세법 요건과 다르면 실제와 차이가 납니다.",
    pension: `국민연금은 과세 기준액의 4.75%(근로자 부담)로 계산하며, 상한은 ${fmt(insuranceCeiling)}원 기준입니다.`,
    health: "건강보험은 보수월액 기준 근로자 부담 3.595%를 적용합니다.",
    longTerm: "장기요양은 건강보험료에 장기요양보험 요율을 곱해 계산합니다.",
    employment: "고용보험은 과세 기준액에서 근로자 부담 0.9%를 적용합니다.",
    incomeTax:
      "근로소득세는 2026 간이세액표 기반 추정치입니다. 부양가족·자녀수·비과세 적용에 따라 실제와 차이가 날 수 있습니다.",
    localTax: "지방소득세는 근로소득세의 10%를 기준으로 계산합니다.",
  };

  function addAnnual(amount: number) {
    setAnnualSalary((v) => Math.max(0, v + amount));
  }
  function resetAnnual() {
    setAnnualSalary(0);
  }
  function addNonTax(amount: number) {
    setMonthlyNonTaxInput((v) => Math.max(0, v + amount));
  }
  function resetNonTax() {
    setMonthlyNonTaxInput(0);
  }

  const deductionTotal =
    breakdown.nationalPension +
    breakdown.healthInsurance +
    breakdown.longTermCare +
    breakdown.employmentInsurance +
    breakdown.incomeTax +
    breakdown.localIncomeTax;

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:gap-6">
      <section className="rounded-xl border border-neutral-200 bg-white p-4 sm:p-5">
        <h2 className="text-base font-semibold text-neutral-900">현재(희망) 연봉 입력</h2>

        <div className="mt-4 space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-neutral-700">연봉</label>
            <div className="flex items-center overflow-hidden rounded-lg border border-neutral-200 bg-white">
              <input
                type="number"
                min={0}
                step={100000}
                value={annualSalary}
                onChange={(e) => setAnnualSalary(Math.max(0, Number(e.target.value) || 0))}
                className="focus-ring h-11 w-full border-0 bg-transparent px-3 text-[15px]"
              />
              <span className="shrink-0 border-l border-neutral-200 px-3 text-sm text-neutral-500">원</span>
            </div>
            <p className="mt-1 text-sm text-neutral-700">{fmt(annualSalary)}원</p>
            {retirementPayMode === "included" ? (
              <p className="mt-1 text-xs text-neutral-500">
                퇴직금 포함 기준이므로 계산에는 {fmt(annualSalaryForCalc)}원이 반영됩니다.
              </p>
            ) : null}
            <div className="mt-2 flex flex-wrap gap-2">
              <AmountButton onClick={() => addAnnual(100_000_000)}>+ 억</AmountButton>
              <AmountButton onClick={() => addAnnual(10_000_000)}>+ 천만원</AmountButton>
              <AmountButton onClick={() => addAnnual(1_000_000)}>+ 백만원</AmountButton>
              <AmountButton onClick={() => addAnnual(100_000)}>+ 십만원</AmountButton>
              <ResetButton onClick={resetAnnual}>정정</ResetButton>
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-neutral-700">퇴직금</label>
            <div className="grid grid-cols-2 overflow-hidden rounded-lg border border-neutral-200 bg-white">
              <button
                type="button"
                onClick={() => setRetirementPayMode("separate")}
                className={`focus-ring h-11 text-sm font-medium ${
                  retirementPayMode === "separate"
                    ? "bg-blue-50 text-blue-700"
                    : "bg-white text-neutral-500 hover:bg-neutral-50"
                }`}
              >
                별도
              </button>
              <button
                type="button"
                onClick={() => setRetirementPayMode("included")}
                className={`focus-ring h-11 border-l border-neutral-200 text-sm font-medium ${
                  retirementPayMode === "included"
                    ? "bg-blue-50 text-blue-700"
                    : "bg-white text-neutral-500 hover:bg-neutral-50"
                }`}
              >
                포함
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-neutral-700">
              비과세액(월)
              <TipButton onClick={() => setOpenTip(openTip === "nonTax" ? null : "nonTax")} />
            </div>
            <div className="flex items-center overflow-hidden rounded-lg border border-neutral-200 bg-white">
              <input
                type="number"
                min={0}
                step={100000}
                value={monthlyNonTaxInput}
                onChange={(e) => setMonthlyNonTaxInput(Math.max(0, Number(e.target.value) || 0))}
                className="focus-ring h-11 w-full border-0 bg-transparent px-3 text-[15px]"
              />
              <span className="shrink-0 border-l border-neutral-200 px-3 text-sm text-neutral-500">원</span>
            </div>
            <p className="mt-1 text-sm text-neutral-700">{fmt(monthlyNonTaxInput)}원</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <AmountButton onClick={() => addNonTax(100_000_000)}>+ 억</AmountButton>
              <AmountButton onClick={() => addNonTax(10_000_000)}>+ 천만원</AmountButton>
              <AmountButton onClick={() => addNonTax(1_000_000)}>+ 백만원</AmountButton>
              <AmountButton onClick={() => addNonTax(100_000)}>+ 십만원</AmountButton>
              <ResetButton onClick={resetNonTax}>정정</ResetButton>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="relative">
              <div className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-neutral-700">
                부양가족수(본인 포함)
                <TipButton onClick={() => setOpenTip(openTip === "dependents" ? null : "dependents")} />
              </div>
              <InputWithUnit
                value={dependents}
                unit="명"
                min={1}
                max={11}
                onChange={(v) => setDependents(Math.min(11, Math.max(1, v)))}
              />
            </div>
            <div className="relative">
              <div className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-neutral-700">
                8세 이상 20세 이하 자녀수
                <TipButton onClick={() => setOpenTip(openTip === "children" ? null : "children")} />
              </div>
              <InputWithUnit
                value={childrenUnder20}
                unit="명"
                min={0}
                max={15}
                onChange={(v) => setChildrenUnder20(Math.min(15, Math.max(0, v)))}
              />
              {invalidChildrenCount ? (
                <p className="mt-1 text-xs font-medium text-red-600">
                  자녀수가 부양가족수보다 같거나 클 수 없습니다.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 sm:p-5">
        <h2 className="text-base font-semibold text-neutral-900">세금 공제한 월 실수령액</h2>

        <div className="mt-4 border-b border-neutral-200 pb-3">
          <p className="text-sm font-medium text-neutral-700">예상 소득액(월)</p>
          <p className="mt-1 text-right text-xl font-semibold text-neutral-900">{fmt(breakdown.monthlyGross)}원</p>
        </div>

        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-medium text-neutral-700">공제액 합계</p>
            <p className="text-sm font-semibold text-neutral-900">{fmt(deductionTotal)}원</p>
          </div>
          <div className="space-y-1.5">
            <ResultRow
              label="국민연금"
              value={breakdown.nationalPension}
              onTip={() => setOpenTip(openTip === "pension" ? null : "pension")}
            />
            <ResultRow
              label="건강보험"
              value={breakdown.healthInsurance}
              onTip={() => setOpenTip(openTip === "health" ? null : "health")}
            />
            <ResultRow
              label="장기요양"
              value={breakdown.longTermCare}
              onTip={() => setOpenTip(openTip === "longTerm" ? null : "longTerm")}
            />
            <ResultRow
              label="고용보험"
              value={breakdown.employmentInsurance}
              onTip={() => setOpenTip(openTip === "employment" ? null : "employment")}
            />
            <ResultRow
              label="소득세"
              value={breakdown.incomeTax}
              onTip={() => setOpenTip(openTip === "incomeTax" ? null : "incomeTax")}
            />
            <ResultRow
              label="지방소득세"
              value={breakdown.localIncomeTax}
              onTip={() => setOpenTip(openTip === "localTax" ? null : "localTax")}
            />
          </div>
        </div>

        <div className="mt-5 rounded-lg border border-neutral-200 bg-white p-4">
          <p className="text-sm font-medium text-neutral-700">예상 실수령액(월)</p>
          <p className="mt-1 text-right text-3xl font-semibold text-blue-600">{fmt(breakdown.netMonthly)}원</p>
        </div>
      </section>

      <TipModal
        open={openTip !== null}
        text={openTip ? tipMap[openTip] : ""}
        onClose={() => setOpenTip(null)}
      />
    </div>
  );
}

function AmountButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className="focus-ring rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function ResetButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className="focus-ring rounded-md border border-red-100 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-700 hover:bg-red-100"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function TipButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="focus-ring inline-flex h-4 w-4 items-center justify-center rounded-sm border border-neutral-300 text-[10px] font-bold leading-none text-neutral-600"
      aria-label="도움말"
      aria-haspopup="dialog"
    >
      ?
    </button>
  );
}

function TipModal({
  open,
  text,
  onClose,
}: {
  open: boolean;
  text: string;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/25 px-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="도움말"
        className="w-full max-w-sm rounded-xl border border-neutral-200 bg-white p-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-semibold text-neutral-900">도움말</p>
          <button
            type="button"
            onClick={onClose}
            className="focus-ring rounded-md border border-neutral-200 px-2 py-1 text-xs text-neutral-600 hover:bg-neutral-50"
          >
            닫기
          </button>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-neutral-700">{text}</p>
      </div>
    </div>
  );
}

function InputWithUnit({
  value,
  unit,
  min,
  max,
  onChange,
}: {
  value: number;
  unit: string;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center overflow-hidden rounded-lg border border-neutral-200 bg-white">
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        className="focus-ring h-11 w-full border-0 bg-transparent px-3 text-[15px]"
      />
      <span className="shrink-0 border-l border-neutral-200 px-3 text-sm text-neutral-500">{unit}</span>
    </div>
  );
}

function ResultRow({
  label,
  value,
  onTip,
}: {
  label: string;
  value: number;
  onTip: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-2 text-sm">
      <div className="flex items-center gap-1.5 text-neutral-700">
        {label}
        <TipButton onClick={onTip} />
      </div>
      <span className="text-neutral-900">{fmt(value)}원</span>
    </div>
  );
}
