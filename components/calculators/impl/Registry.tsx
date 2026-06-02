"use client";

import { useMemo, useState, useEffect, useRef, type ReactNode } from "react";
import { QRCodeSVG } from "qrcode.react";
import { estimateSimplifiedIncomeTax } from "@/lib/payroll/incomeTaxSimplified2026";
import type { CalculatorKind } from "@/lib/calculatorKind";
import type { ToolItem } from "@/lib/tools";
import { SalaryCalculator } from "@/components/calculators/SalaryCalculator";
import { ReferenceStub } from "@/components/calculators/ReferenceStub";
import {
  CalculatorShell,
  INPUT_CLASS,
  ResultPanel,
  ResultRows,
  TEXTAREA_CLASS,
} from "@/components/calculators/ToolFormLayout";
import { Labeled, num, won } from "@/components/calculators/calcUi";
import {
  EMPLOYMENT_INSURANCE_RATE_EMPLOYEE,
  HEALTH_INSURANCE_RATE_EMPLOYEE,
  LONG_TERM_CARE_FACTOR_OF_HEALTH,
  NATIONAL_PENSION_RATE_EMPLOYEE,
} from "@/lib/payroll/constants";
import { getPensionHealthCeiling } from "@/lib/payroll/insuranceCeiling";
import {
  AchievementRateForm,
  AttendanceRateForm,
  BacWidmarkForm,
  BiorhythmForm,
  BsaForm,
  CreatinineClearanceForm,
  DailyRateMoneyForm,
  EgfrForm,
  FfmiForm,
  FractionDecimalForm,
  FriedewaldLdlForm,
  HeartRateReserveForm,
  HeatIndexForm,
  MinimumWageForm,
  MonthlyHourlyForm,
  OneRmForm,
  OvulationForm,
  PartTimeWeeklyPayForm,
  ProteinIntakeForm,
  SalaryForecastForm,
  SleepCycleForm,
  StandardWeightForm,
  StepsCaloriesForm,
  TenureDateRangeForm,
  TdeeForm,
  UnitsPerHourForm,
  UnusedAnnualPayForm,
  WaterIntakeForm,
  WeeklyHolidaySimpleForm,
  WorkMinutesSimpleForm,
} from "@/components/calculators/UnmappedKindForms";

function Box({ children }: { children: ReactNode }) {
  return <CalculatorShell>{children}</CalculatorShell>;
}

export function renderCalculatorBody(kind: CalculatorKind, tool: ToolItem) {
  switch (kind) {
    case "salary":
      return <SalaryCalculator />;
    case "severancePay":
      return <SeverancePayForm />;
    case "fourInsuranceWorker":
      return <FourInsuranceForm />;
    case "bmi":
      return <BmiForm />;
    case "bmr":
      return <BmrForm />;
    case "percentChange":
      return <PercentForm />;
    case "vat":
      return <VatForm />;
    case "discount":
      return <DiscountForm />;
    case "currency":
      return <CurrencyForm />;
    case "cagr":
      return <CagrForm />;
    case "roi":
      return <RoiForm />;
    case "roas":
      return <RoasForm />;
    case "mortgageEqualPayment":
      return <MortgageForm />;
    case "compoundSavings":
      return <SavingsForm />;
    case "margin":
      return <MarginForm />;
    case "ratioPER":
      return <RatioForm label="PER" aLabel="주가" bLabel="EPS" />;
    case "ratioPBR":
      return <RatioForm label="PBR" aLabel="주가" bLabel="BPS" />;
    case "ratioROE":
      return <RatioForm label="ROE(%)" aLabel="순이익" bLabel="자기자본" isPercentResult />;
    case "apyEffective":
      return <ApyForm />;
    case "cpm":
      return <CpmForm />;
    case "breakevenRecovery":
      return <BreakevenForm />;
    case "lcm":
      return <LcmForm />;
    case "gcd":
      return <GcdForm />;
    case "average":
      return <AvgForm />;
    case "modulo":
      return <ModForm />;
    case "fibonacci":
      return <FibForm />;
    case "factorial":
      return <FactForm />;
    case "permutation":
      return <PermForm />;
    case "pyeongM2":
      return <PyeongForm />;
    case "temperature":
      return <TempForm />;
    case "inchCm":
      return <InchCmForm />;
    case "byteUnit":
      return <ByteForm />;
    case "parallelResistor":
      return <ParallelRForm />;
    case "speedDistanceTime":
      return <SdtForm />;
    case "dday":
      return <DdayForm />;
    case "ageInternational":
      return <AgeForm />;
    case "dutchPay":
      return <DutchForm />;
    case "tip":
      return <TipForm />;
    case "randomPassword":
      return <PwForm />;
    case "uuid":
      return <UuidForm />;
    case "base64":
      return <B64Form />;
    case "urlEncode":
      return <UrlForm />;
    case "radixConvert":
      return <RadixForm />;
    case "jsonLint":
      return <JsonForm />;
    case "lotto645":
      return <LottoForm />;
    case "edpi":
      return <EdpiForm />;
    case "coinFlip":
      return <CoinForm />;
    case "gachaChance":
      return <GachaForm />;
    case "haversineKm":
      return <HaversineForm />;
    case "fuelCost":
      return <FuelForm />;
    case "electricityEstimate":
      return <ElecForm />;
    case "charCount":
    case "neisCounter":
      return <CharForm neisMode={kind === "neisCounter"} />;
    case "hashStub":
      return <HashShaForm />;
    case "regexTester":
      return <RegexForm />;
    case "colorHexRgb":
      return <ColorForm />;
    case "subnetMask":
      return <SubnetForm />;
    case "randomApiKey":
      return <ApiKeyForm />;
    case "caesarCipher":
      return <CaesarForm />;
    case "morseCode":
      return <MorseForm />;
    case "runningPace":
      return <PaceForm />;
    case "eraBaseball":
      return <EraForm />;
    case "battingSlash":
      return <BattingForm />;
    case "fovHorizontal":
      return <FovForm />;
    case "rsaStub":
      return (
        <ReferenceStub
          tool={tool}
          title="RSA는 브라우저 단독 구현 대신 서버 라이브러리·백엔드 연동을 권장합니다."
        />
      );
    case "airForceWeightedScore":
      return <AirForceWeightedScoreForm />;
    case "marineClassEstimate":
      return <MarineClassEstimateForm />;
    case "dischargeDateEstimate":
      return <DischargeDateEstimateForm />;
    case "bowlingPinSum":
      return <BowlingPinSumForm />;
    case "curlingEndSum":
      return <CurlingEndSumForm />;
    case "vdotEstimate":
      return <VdotEstimateForm />;
    case "referenceStub":
      return (
        <Box>
          <ReferenceStub tool={tool} />
        </Box>
      );
    case "salaryRaisePercent":
      return <SalaryRaiseForm />;
    case "achievementRate":
      return <AchievementRateForm />;
    case "listAverage":
      return <AvgForm />;
    case "dailyRateMoney":
      return <DailyRateMoneyForm />;
    case "salaryForecast":
      return <SalaryForecastForm />;
    case "dateDiffDetailed":
      return <TenureDateRangeForm variant="tenure" />;
    case "annualLeaveDays":
      return <TenureDateRangeForm variant="leave" />;
    case "workMinutes":
      return <WorkMinutesSimpleForm />;
    case "monthlyToHourly":
      return <MonthlyHourlyForm />;
    case "unitsPerHour":
      return <UnitsPerHourForm />;
    case "minimumWage":
      return <MinimumWageForm />;
    case "weeklyHolidayPay":
      return <WeeklyHolidaySimpleForm />;
    case "unusedAnnualPay":
      return <UnusedAnnualPayForm />;
    case "attendanceRate":
      return <AttendanceRateForm />;
    case "partTimeWeeklyPay":
      return <PartTimeWeeklyPayForm />;
    case "standardWeight":
      return <StandardWeightForm />;
    case "proteinIntake":
      return <ProteinIntakeForm />;
    case "waterIntake":
      return <WaterIntakeForm />;
    case "sleepCycle":
      return <SleepCycleForm />;
    case "stepsCalories":
      return <StepsCaloriesForm />;
    case "heatIndex":
      return <HeatIndexForm />;
    case "oneRm":
      return <OneRmForm />;
    case "biorhythm":
      return <BiorhythmForm />;
    case "heartRateReserve":
      return <HeartRateReserveForm />;
    case "tdee":
      return <TdeeForm />;
    case "ffmi":
      return <FfmiForm />;
    case "bsa":
      return <BsaForm />;
    case "creatinineClearance":
      return <CreatinineClearanceForm />;
    case "ovulation":
      return <OvulationForm />;
    case "egfr":
      return <EgfrForm />;
    case "friedewaldLdl":
      return <FriedewaldLdlForm />;
    case "bacWidmark":
      return <BacWidmarkForm />;
    case "fractionDecimal":
      return <FractionDecimalForm />;
    case "ppmConcentration":
      return <PpmForm />;
    case "perimeter":
      return <PerimeterForm />;
    case "densityCalc":
      return <DensityForm />;
    case "polynomialFactor":
      return <PolynomialFactorForm />;
    case "gaussianElimination":
      return <GaussianForm />;
    case "incomeTaxMonthly":
      return <IncomeTaxMonthlyForm />;
    case "bonusTax":
      return <BonusTaxForm />;
    case "unemploymentBenefit":
      return <UnemploymentForm />;
    case "parentalLeavePay":
      return <ParentalLeaveForm />;
    case "subscriptionScore":
      return <SubscriptionScoreForm />;
    case "qrCodeGen":
      return <QrCodeForm />;
    case "lunarCalendar":
      return <LunarCalendarForm />;
    case "onlineTimer":
      return <OnlineTimerForm />;
    case "mortgageCompare":
      return <MortgageCompareForm />;
    case "prepaymentCalc":
      return <PrepaymentForm />;
    case "jeonwolse":
      return <JeonwolseForm />;
    case "gallonLiter":
      return <GallonLiterForm />;
    case "buildingCoverage":
      return <BuildingCoverageForm />;
    case "floorAreaRatio":
      return <FloorAreaRatioForm />;
    case "dmsConvert":
      return <DmsConvertForm />;
    case "slopeAngle":
      return <SlopeAngleForm />;
    case "radianConvert":
      return <RadianConvertForm />;
    case "cubicMeter":
      return <CubicMeterForm />;
    case "wattCalc":
      return <WattCalcForm />;
    case "decibelCalc":
      return <DecibelCalcForm />;
    case "unitConvert":
      return <UnitConvertForm />;
    case "schoolRank":
      return <SchoolRankForm />;
    case "gpaCalc":
      return <GpaCalcForm />;
    case "confidenceInterval":
      return <ConfidenceIntervalForm />;
    case "speechTime":
      return <SpeechTimeForm />;
    case "pValueZ":
      return <PValueZForm />;
    case "weightedAvg":
      return <WeightedAvgForm />;
    case "correlation":
      return <CorrelationForm />;
    case "heightPercentile":
      return <HeightPercentileForm />;
    case "caffeineIntake":
      return <CaffeineIntakeForm />;
    case "maternityPay":
      return <MaternityPayForm />;
    case "eitcPay":
      return <EitcPayForm />;
    case "overspendRatio":
      return <OverspendRatioForm />;
    case "jeonseVsMonthly":
      return <JeonseVsMonthlyForm />;
    case "straightLineDepreciation":
      return <StraightLineDepreciationForm />;
    case "ebitdaCalc":
      return <EbitdaCalcForm />;
    case "aprCalc":
      return <AprCalcForm />;
    case "fifaFee":
      return <FifaFeeForm />;
    case "rouletteSpinner":
      return <RouletteSpinnerForm />;
    case "withholdingTax":
      return <WithholdingTaxForm />;
    case "carTax":
      return <CarTaxForm />;
    default:
      return (
        <Box>
          <GenericShortForm kind={kind} tool={tool} />
        </Box>
      );
  }
}

/** 나머지 종류: 짧은 입력 + 간이 결과(참고) */
function GenericShortForm({ kind, tool }: { kind: CalculatorKind; tool: ToolItem }) {
  void kind;
  return (
    <div className="space-y-8">
      <ReferenceStub tool={tool} title="아래 간이 계산으로 대략치를 확인할 수 있습니다." />
      <section className="rounded-xl border border-neutral-200 bg-white p-4">
        <h2 className="text-sm font-medium text-neutral-800">이 도구에 대해</h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">{tool.description}</p>
      </section>
    </div>
  );
}

function FourInsuranceForm() {
  const [monthly, setMonthly] = useState(4_000_000);
  const ceiling = getPensionHealthCeiling();
  // 국민연금만 상한(637만원) 적용; 건강보험·고용보험은 상한이 훨씬 높아 실질적으로 전액 기준
  const pensionBase = Math.min(monthly, ceiling);
  const np = Math.round(pensionBase * NATIONAL_PENSION_RATE_EMPLOYEE);
  const hi = Math.round(monthly * HEALTH_INSURANCE_RATE_EMPLOYEE);
  const lt = Math.round(hi * LONG_TERM_CARE_FACTOR_OF_HEALTH);
  const ei = Math.round(monthly * EMPLOYMENT_INSURANCE_RATE_EMPLOYEE);
  return (
    <Box>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:gap-6">
        <section className="rounded-xl border border-neutral-200 bg-white p-4 sm:p-5">
          <h2 className="text-base font-semibold text-neutral-900">보수월액 입력</h2>
          <p className="mt-1 text-xs text-neutral-500">
            국민연금·건강보험 산출 기준액(상한 적용)과 고용보험 산출 기준이 다를 수 있습니다. 이 화면은 간이 참고용입니다.
          </p>
          <div className="mt-4">
            <Labeled label="월 급여(원)">
              <input
                type="number"
                className={INPUT_CLASS}
                value={monthly}
                onChange={(e) => setMonthly(num(e.target.value))}
              />
            </Labeled>
          </div>
        </section>
        <ResultPanel
          title="근로자 부담분 (월)"
          subtitle={`국민연금 기준소득월액 상한 ${won(ceiling)}원(오늘 날짜 기준). 2026년 7월분부터 659만 원으로 인상 예정. 건강보험·고용보험은 상한이 훨씬 높아 전액 기준으로 계산합니다.`}
        >
          <ResultRows
            rows={[
              { label: "국민연금(근로자)", value: `${won(np)}원` },
              { label: "건강보험", value: `${won(hi)}원` },
              { label: "장기요양", value: `${won(lt)}원` },
              { label: "고용보험", value: `${won(ei)}원` },
              { label: "합계", value: `${won(np + hi + lt + ei)}원` },
            ]}
          />
        </ResultPanel>
      </div>
    </Box>
  );
}

/** 근로기준법 통상 산식: 1일 평균임금 × 30일 × (재직일수 ÷ 365) — 참고용 추정 */
function SeverancePayForm() {
  const [dailyWage, setDailyWage] = useState(180_000);
  const [hireDate, setHireDate] = useState("2019-03-04");
  const [leaveDate, setLeaveDate] = useState(() => new Date().toISOString().slice(0, 10));

  const breakdown = useMemo(() => {
    const start = new Date(`${hireDate}T00:00:00`);
    const end = new Date(`${leaveDate}T00:00:00`);
    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end < start) {
      return { serviceDays: 0, yearsFrac: 0, severance: 0 };
    }
    const serviceDays = Math.floor((end.getTime() - start.getTime()) / 86400000) + 1;
    const yearsFrac = serviceDays / 365;
    const severance = dailyWage * 30 * yearsFrac;
    return { serviceDays, yearsFrac, severance };
  }, [dailyWage, hireDate, leaveDate]);

  function addDaily(n: number) {
    setDailyWage((v) => Math.max(0, v + n));
  }

  return (
    <Box>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:gap-6">
        <section className="rounded-xl border border-neutral-200 bg-white p-4 sm:p-5">
          <h2 className="text-base font-semibold text-neutral-900">입력</h2>
          <fieldset className="mt-4 rounded-lg border border-neutral-200 bg-white p-4">
            <legend className="px-1 text-sm font-medium text-neutral-800">1일 평균임금</legend>
            <p className="mt-1 text-xs text-neutral-500">
              퇴직 전 3개월 등 산정 규정에 따른 평균임금을 1일분으로 환산한 금액을 입력하세요.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <button
                type="button"
                className="focus-ring rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-800 hover:bg-neutral-100"
                onClick={() => addDaily(100_000)}
              >
                + 십만
              </button>
              <button
                type="button"
                className="focus-ring rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-800 hover:bg-neutral-100"
                onClick={() => addDaily(50_000)}
              >
                + 오만
              </button>
              <button
                type="button"
                className="focus-ring rounded-full border border-red-100 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-800 hover:bg-red-100"
                onClick={() => setDailyWage(0)}
              >
                정정
              </button>
            </div>
            <label className="mt-4 block text-xs text-neutral-500">원</label>
            <input
              type="number"
              min={0}
              step={1000}
              className={INPUT_CLASS}
              value={dailyWage}
              onChange={(e) => setDailyWage(Math.max(0, Number(e.target.value) || 0))}
            />
            <p className="mt-1 text-sm text-neutral-700">{won(dailyWage)}원</p>
          </fieldset>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Labeled label="입사일">
              <input type="date" className={INPUT_CLASS} value={hireDate} onChange={(e) => setHireDate(e.target.value)} />
            </Labeled>
            <Labeled label="퇴직(기준)일">
              <input type="date" className={INPUT_CLASS} value={leaveDate} onChange={(e) => setLeaveDate(e.target.value)} />
            </Labeled>
          </div>
        </section>

        <ResultPanel title="퇴직금(추정)" highlight={`${won(breakdown.severance)}원`}>
          <ResultRows
            rows={[
              { label: "재직일수(포함)", value: `${breakdown.serviceDays.toLocaleString("ko-KR")}일` },
              { label: "재직일수 ÷ 365", value: breakdown.yearsFrac.toFixed(6) },
              { label: "산식 요약", value: "평균임금×30×(재직일÷365)" },
            ]}
          />
        </ResultPanel>
      </div>
    </Box>
  );
}

function BmiForm() {
  const [w, setW] = useState(70);
  const [h, setH] = useState(170);
  const bmi = h > 0 ? w / (h / 100) ** 2 : 0;
  const cat = bmi < 18.5 ? "저체중" : bmi < 23 ? "정상" : bmi < 25 ? "과체중" : bmi < 30 ? "비만 1단계" : "비만 2단계";
  const hm = h / 100;
  const stdMin = (18.5 * hm * hm).toFixed(1);
  const stdMax = (22.9 * hm * hm).toFixed(1);
  const ideal = (22 * hm * hm).toFixed(1);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="체중 (kg)"><input type="number" className={INPUT_CLASS} value={w} onChange={(e) => setW(num(e.target.value))} /></Labeled>
        <Labeled label="키 (cm)"><input type="number" className={INPUT_CLASS} value={h} onChange={(e) => setH(num(e.target.value))} /></Labeled>
      </div>
      <ResultPanel title="BMI 측정 결과" highlight={`BMI ${bmi.toFixed(1)}`} subtitle={`판정: ${cat}`}>
        <ResultRows rows={[
          { label: "BMI 수치", value: bmi.toFixed(2) },
          { label: "판정", value: cat },
          { label: "정상 체중 범위", value: `${stdMin} ~ ${stdMax} kg` },
          { label: "표준 체중 (BMI 22)", value: `${ideal} kg` },
          { label: "표준 대비 차이", value: `${(w - Number(ideal)) >= 0 ? "+" : ""}${(w - Number(ideal)).toFixed(1)} kg` },
        ]} />
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="bg-neutral-100">{["저체중","정상","과체중","비만 1단계","비만 2단계"].map(l => <th key={l} className="border border-neutral-200 px-2 py-1.5 font-medium">{l}</th>)}</tr></thead>
            <tbody><tr>{["< 18.5","18.5~22.9","23~24.9","25~29.9","≥ 30"].map(v => <td key={v} className="border border-neutral-200 px-2 py-1.5 text-center text-neutral-700">{v}</td>)}</tr></tbody>
          </table>
        </div>
      </ResultPanel>
    </Box>
  );
}

function BmrForm() {
  const [male, setMale] = useState(true);
  const [age, setAge] = useState(30);
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(175);
  const [act, setAct] = useState(1.55);

  const ACTIVITY_LEVELS = [
    { label: "비활동적", desc: "거의 운동 안 함", mult: 1.2 },
    { label: "가벼운 활동", desc: "주 1–3회 운동", mult: 1.375 },
    { label: "보통 활동", desc: "주 3–5회 운동", mult: 1.55 },
    { label: "적극적 활동", desc: "주 6–7회 운동", mult: 1.725 },
    { label: "매우 활동적", desc: "고강도 운동 또는 육체노동", mult: 1.9 },
  ];

  const { bmr, tdee, carb, protein, fat } = useMemo(() => {
    const bmr = male
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;
    const tdee = bmr * act;
    return { bmr, tdee, carb: (tdee * 0.5) / 4, protein: (tdee * 0.25) / 4, fat: (tdee * 0.25) / 9 };
  }, [male, age, weight, height, act]);

  return (
    <Box>
      <div className="flex gap-2">
        {[true, false].map((m) => (
          <button key={String(m)} type="button" onClick={() => setMale(m)}
            className={`rounded-full px-4 py-2 text-sm ${male === m ? "bg-neutral-900 text-white" : "border border-neutral-300"}`}>
            {m ? "남" : "여"}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="나이"><input type="number" className={INPUT_CLASS} value={age} onChange={(e) => setAge(Math.max(1, num(e.target.value)))} /></Labeled>
        <Labeled label="체중(kg)"><input type="number" className={INPUT_CLASS} value={weight} onChange={(e) => setWeight(num(e.target.value))} /></Labeled>
        <Labeled label="키(cm)"><input type="number" className={INPUT_CLASS} value={height} onChange={(e) => setHeight(num(e.target.value))} /></Labeled>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-neutral-800">활동 수준</p>
        <div className="flex flex-wrap gap-2">
          {ACTIVITY_LEVELS.map((lv) => (
            <button key={lv.mult} type="button" onClick={() => setAct(lv.mult)}
              className={`rounded-lg border px-3 py-2 text-xs transition-colors ${act === lv.mult ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 hover:border-neutral-400"}`}>
              {lv.label}<span className="ml-1 opacity-70">×{lv.mult}</span>
            </button>
          ))}
        </div>
      </div>
      <ResultPanel title="TDEE (일일 총 에너지 소비량)" highlight={`${Math.round(tdee).toLocaleString("ko-KR")} kcal/일`} subtitle={`기초대사량(BMR): ${Math.round(bmr).toLocaleString("ko-KR")} kcal/일`}>
        <ResultRows rows={[
          { label: "탄수화물 (50% / 4 kcal/g)", value: `${Math.round(carb)} g` },
          { label: "단백질 (25% / 4 kcal/g)", value: `${Math.round(protein)} g` },
          { label: "지방 (25% / 9 kcal/g)", value: `${Math.round(fat)} g` },
        ]} />
      </ResultPanel>
      <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-neutral-50 text-xs font-semibold text-neutral-600">
            <tr>
              <th className="px-4 py-3 text-left">활동 수준</th>
              <th className="px-4 py-3 text-left">설명</th>
              <th className="px-4 py-3 text-right">계수</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {ACTIVITY_LEVELS.map((lv) => (
              <tr key={lv.mult} className={act === lv.mult ? "bg-neutral-50 font-medium" : ""}>
                <td className="px-4 py-3">{lv.label}</td>
                <td className="px-4 py-3 text-neutral-600">{lv.desc}</td>
                <td className="px-4 py-3 text-right">×{lv.mult}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  );
}

type PercentMode = "change" | "aOfB" | "bOfA";

function PercentForm() {
  const [mode, setMode] = useState<PercentMode>("change");
  const [a, setA] = useState(200);
  const [b, setB] = useState(250);
  const [pct, setPct] = useState(15);

  const MODES: { key: PercentMode; label: string }[] = [
    { key: "change", label: "증감률" },
    { key: "aOfB", label: "A의 B%" },
    { key: "bOfA", label: "B는 A의 몇%" },
  ];

  const result = useMemo(() => {
    if (mode === "change") {
      if (a === 0) return { primary: "기준값이 0입니다", secondary: null };
      const rate = ((b - a) / Math.abs(a)) * 100;
      const diff = b - a;
      return { primary: `${rate >= 0 ? "+" : ""}${rate.toFixed(2)}%`, secondary: `변화량: ${diff >= 0 ? "+" : ""}${diff.toLocaleString("ko-KR")}` };
    }
    if (mode === "aOfB") {
      const val = a * (pct / 100);
      return { primary: `${val.toLocaleString("ko-KR")}`, secondary: null };
    }
    if (a === 0) return { primary: "A가 0입니다", secondary: null };
    const ratio = (b / a) * 100;
    return { primary: `${ratio.toFixed(4)}%`, secondary: null };
  }, [mode, a, b, pct]);

  return (
    <Box>
      <div className="flex gap-2 border-b border-neutral-200 pb-3">
        {MODES.map((m) => (
          <button key={m.key} type="button" onClick={() => setMode(m.key)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${mode === m.key ? "border-b-2 border-neutral-900 text-neutral-900" : "text-neutral-500 hover:text-neutral-700"}`}>
            {m.label}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {mode === "change" && (<>
          <Labeled label="기준값"><input type="number" className={INPUT_CLASS} value={a} onChange={(e) => setA(num(e.target.value))} /></Labeled>
          <Labeled label="변경값"><input type="number" className={INPUT_CLASS} value={b} onChange={(e) => setB(num(e.target.value))} /></Labeled>
        </>)}
        {mode === "aOfB" && (<>
          <Labeled label="A (기준값)"><input type="number" className={INPUT_CLASS} value={a} onChange={(e) => setA(num(e.target.value))} /></Labeled>
          <Labeled label="B (%)"><input type="number" className={INPUT_CLASS} value={pct} onChange={(e) => setPct(num(e.target.value))} /></Labeled>
        </>)}
        {mode === "bOfA" && (<>
          <Labeled label="A (전체값)"><input type="number" className={INPUT_CLASS} value={a} onChange={(e) => setA(num(e.target.value))} /></Labeled>
          <Labeled label="B (부분값)"><input type="number" className={INPUT_CLASS} value={b} onChange={(e) => setB(num(e.target.value))} /></Labeled>
        </>)}
      </div>
      <ResultPanel
        title={mode === "change" ? "증감률" : mode === "aOfB" ? `A의 ${pct}%` : "B는 A의 몇%?"}
        highlight={result.primary}
        subtitle={result.secondary ?? undefined}
      />
    </Box>
  );
}

function SalaryRaiseForm() {
  const [before, setBefore] = useState(48_000_000);
  const [after, setAfter] = useState(52_000_000);
  const { pct, diff } = useMemo(() => {
    const diff = after - before;
    const pct = before === 0 ? 0 : (diff / before) * 100;
    return { pct, diff };
  }, [before, after]);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="기존 연봉(원)"><input type="number" className={INPUT_CLASS} value={before} onChange={(e) => setBefore(num(e.target.value))} /></Labeled>
        <Labeled label="인상 후 연봉(원)"><input type="number" className={INPUT_CLASS} value={after} onChange={(e) => setAfter(num(e.target.value))} /></Labeled>
      </div>
      <ResultPanel title="연봉 인상 분석" highlight={`${pct >= 0 ? "+" : ""}${pct.toFixed(2)}%`} subtitle="인상률">
        <ResultRows rows={[
          { label: "연봉 인상액", value: `${won(diff)}원` },
          { label: "월급 인상액", value: `${won(diff / 12)}원` },
          { label: "인상 후 월급", value: `${won(after / 12)}원` },
        ]} />
      </ResultPanel>
    </Box>
  );
}

type VatMode = "supplyToTotal" | "totalToSupply";

function VatForm() {
  const [mode, setMode] = useState<VatMode>("supplyToTotal");
  const [value, setValue] = useState(1_000_000);
  const { supply, vat, total } = useMemo(() => {
    if (mode === "supplyToTotal") {
      const supply = value;
      const vat = Math.round(value * 0.1);
      return { supply, vat, total: supply + vat };
    } else {
      const supply = Math.round(value / 1.1);
      const vat = value - supply;
      return { supply, vat, total: value };
    }
  }, [mode, value]);
  return (
    <Box>
      <div className="flex gap-2">
        {(["supplyToTotal", "totalToSupply"] as VatMode[]).map((m) => (
          <button key={m} type="button" onClick={() => setMode(m)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${mode === m ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 hover:border-neutral-400"}`}>
            {m === "supplyToTotal" ? "공급가액 → 합계" : "합계 → 공급가액"}
          </button>
        ))}
      </div>
      <Labeled label={mode === "supplyToTotal" ? "공급가액(원)" : "합계금액(원)"}>
        <input type="number" className={INPUT_CLASS} value={value} onChange={(e) => setValue(num(e.target.value))} />
      </Labeled>
      <ResultPanel title="부가가치세(10%) 계산" highlight={mode === "supplyToTotal" ? `합계 ${won(total)}원` : `공급가액 ${won(supply)}원`}>
        <ResultRows rows={[
          { label: "공급가액", value: `${won(supply)}원` },
          { label: "부가세(10%)", value: `${won(vat)}원` },
          { label: "합계금액", value: `${won(total)}원` },
        ]} />
      </ResultPanel>
    </Box>
  );
}

function DiscountForm() {
  const [price, setPrice] = useState(100_000);
  const [rate1, setRate1] = useState(10);
  const [rate2, setRate2] = useState(0);
  const PRESETS = [5, 10, 15, 20, 30];
  const { finalPrice, discountAmt, totalRate } = useMemo(() => {
    const r1 = Math.max(0, Math.min(100, rate1));
    const r2 = Math.max(0, Math.min(100, rate2));
    const totalRate = (1 - (1 - r1 / 100) * (1 - r2 / 100)) * 100;
    const finalPrice = price * (1 - r1 / 100) * (1 - r2 / 100);
    return { finalPrice, discountAmt: price - finalPrice, totalRate };
  }, [price, rate1, rate2]);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="정가(원)"><input type="number" className={INPUT_CLASS} value={price} onChange={(e) => setPrice(num(e.target.value))} /></Labeled>
        <Labeled label="1차 할인율(%)"><input type="number" step="0.1" min={0} max={100} className={INPUT_CLASS} value={rate1} onChange={(e) => setRate1(num(e.target.value))} /></Labeled>
        <div className="sm:col-span-2">
          <Labeled label="2차 추가 할인율(%)"><input type="number" step="0.1" min={0} max={100} className={INPUT_CLASS} value={rate2} onChange={(e) => setRate2(num(e.target.value))} /></Labeled>
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs text-neutral-500">빠른 할인율 선택 (1차 적용, 2차 초기화)</p>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button key={p} type="button" onClick={() => { setRate1(p); setRate2(0); }}
              className={`rounded-full border px-3 py-1 text-sm transition-colors ${rate1 === p && rate2 === 0 ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 hover:border-neutral-400"}`}>
              {p}%
            </button>
          ))}
        </div>
      </div>
      <ResultPanel title="할인 계산 결과" highlight={`${won(finalPrice)}원`} subtitle="최종 판매가">
        <ResultRows rows={[
          { label: "할인 금액", value: `${won(discountAmt)}원` },
          { label: "최종 할인율", value: `${totalRate.toFixed(2)}%` },
        ]} />
      </ResultPanel>
    </Box>
  );
}

type CurrencyMode = "krwToFx" | "fxToKrw";
type CurrencyKey = "usd" | "eur" | "jpy" | "cny" | "gbp";

function CurrencyForm() {
  const [mode, setMode] = useState<CurrencyMode>("krwToFx");
  const [amount, setAmount] = useState(1_000_000);
  const [selectedCcy, setSelectedCcy] = useState<CurrencyKey>("usd");
  const [rates, setRates] = useState<Record<CurrencyKey, number>>({ usd: 1380, eur: 1510, jpy: 940, cny: 190, gbp: 1750 });

  const currencies: { key: CurrencyKey; label: string; unit: string }[] = [
    { key: "usd", label: "USD (미국 달러)", unit: "USD" },
    { key: "eur", label: "EUR (유로)", unit: "EUR" },
    { key: "jpy", label: "JPY/100 (일본 엔)", unit: "JPY" },
    { key: "cny", label: "CNY (위안)", unit: "CNY" },
    { key: "gbp", label: "GBP (영국 파운드)", unit: "GBP" },
  ];

  const fxResults = useMemo(() =>
    currencies.map(({ key, unit }) => {
      const rate = rates[key];
      const converted = rate > 0 ? amount / rate : 0;
      return { label: `${unit} (환율 ${won(rate)}원)`, value: `${converted.toFixed(key === "jpy" ? 0 : 2)} ${unit}` };
    }), [amount, rates]);

  const krwResult = useMemo(() => { const rate = rates[selectedCcy]; return rate > 0 ? amount * rate : 0; }, [amount, rates, selectedCcy]);

  return (
    <Box>
      <div className="flex gap-2">
        {(["krwToFx", "fxToKrw"] as CurrencyMode[]).map((m) => (
          <button key={m} type="button" onClick={() => setMode(m)}
            className={`rounded-full px-4 py-2 text-sm font-medium ${mode === m ? "bg-neutral-900 text-white" : "border border-neutral-200 text-neutral-700 hover:bg-neutral-50"}`}>
            {m === "krwToFx" ? "원→외화" : "외화→원"}
          </button>
        ))}
      </div>
      <Labeled label={mode === "krwToFx" ? "원화 금액(원)" : "외화 금액"}>
        <input type="number" className={INPUT_CLASS} value={amount} onChange={(e) => setAmount(num(e.target.value))} />
      </Labeled>
      {mode === "fxToKrw" && (
        <div className="flex flex-wrap gap-2">
          {currencies.map(({ key, unit }) => (
            <button key={key} type="button" onClick={() => setSelectedCcy(key)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium ${selectedCcy === key ? "bg-neutral-900 text-white" : "border border-neutral-200 text-neutral-700 hover:bg-neutral-50"}`}>
              {unit}
            </button>
          ))}
        </div>
      )}
      <div className="rounded-xl border border-neutral-200 bg-white p-4">
        <p className="mb-3 text-sm font-semibold text-neutral-800">환율 설정 (원/외화 단위)</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {currencies.map(({ key, label }) => (
            <Labeled key={key} label={label}>
              <input type="number" className={INPUT_CLASS} value={rates[key]}
                onChange={(e) => setRates((prev) => ({ ...prev, [key]: num(e.target.value) }))} />
            </Labeled>
          ))}
        </div>
      </div>
      {mode === "krwToFx" ? (
        <ResultPanel title="환전 결과" subtitle={`${won(amount)}원 기준`}>
          <ResultRows rows={fxResults} />
        </ResultPanel>
      ) : (
        <ResultPanel title="원화 환산" highlight={`약 ${won(krwResult)}원`}
          subtitle={`${amount} ${currencies.find((c) => c.key === selectedCcy)?.unit ?? ""} × ${won(rates[selectedCcy])}원`} />
      )}
    </Box>
  );
}

function CagrForm() {
  const [startVal, setStartVal] = useState(10_000_000);
  const [endVal, setEndVal] = useState(15_000_000);
  const [years, setYears] = useState(5);
  const cagr = useMemo(() => startVal <= 0 || endVal <= 0 || years <= 0 ? 0 : (Math.pow(endVal / startVal, 1 / years) - 1) * 100, [startVal, endVal, years]);
  const tableRows = useMemo(() => {
    const n = Math.min(years, 10);
    return Array.from({ length: n + 1 }, (_, i) => ({ year: i, value: startVal * Math.pow(1 + cagr / 100, i) }));
  }, [startVal, cagr, years]);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="초기값(원)"><input type="number" className={INPUT_CLASS} value={startVal} onChange={(e) => setStartVal(num(e.target.value))} /></Labeled>
        <Labeled label="최종값(원)"><input type="number" className={INPUT_CLASS} value={endVal} onChange={(e) => setEndVal(num(e.target.value))} /></Labeled>
        <div className="sm:col-span-2">
          <Labeled label="기간(년)" hint="연도별 표는 최대 10년까지 표시됩니다">
            <input type="number" className={INPUT_CLASS} value={years} min={1} onChange={(e) => setYears(Math.max(1, Math.floor(num(e.target.value))))} />
          </Labeled>
        </div>
      </div>
      <ResultPanel title="CAGR 계산 결과" highlight={`CAGR ${cagr.toFixed(2)}%`} subtitle={`${won(startVal)}원 → ${won(endVal)}원 (${years}년)`} />
      <div className="rounded-xl border border-neutral-200 bg-white p-4">
        <p className="mb-3 text-sm font-semibold text-neutral-800">연도별 추정액{years > 10 ? " (최대 10년 표시)" : ""}</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="bg-neutral-100 text-xs text-neutral-600">
              <th className="border border-neutral-200 px-3 py-2 text-left font-medium">연도</th>
              <th className="border border-neutral-200 px-3 py-2 text-right font-medium">추정 금액(원)</th>
              <th className="border border-neutral-200 px-3 py-2 text-right font-medium">누적 증감(원)</th>
            </tr></thead>
            <tbody>
              {tableRows.map(({ year, value }) => (
                <tr key={year} className={year === 0 || year === Math.min(years, 10) ? "bg-neutral-50 font-medium" : ""}>
                  <td className="border border-neutral-200 px-3 py-2">{year}년차</td>
                  <td className="border border-neutral-200 px-3 py-2 text-right font-mono">{won(value)}</td>
                  <td className="border border-neutral-200 px-3 py-2 text-right font-mono text-neutral-500">{year === 0 ? "—" : `+${won(value - startVal)}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Box>
  );
}

function RoiForm() {
  const [cost, setCost] = useState(10_000_000);
  const [returns, setReturns] = useState(13_500_000);
  const [period, setPeriod] = useState(1);
  const results = useMemo(() => {
    const netProfit = returns - cost;
    const roi = cost === 0 ? 0 : (netProfit / cost) * 100;
    const annualizedRoi = cost <= 0 || returns <= 0 || period <= 0 ? 0 : (Math.pow(returns / cost, 1 / period) - 1) * 100;
    const totalReturn = cost === 0 ? 0 : (returns / cost) * 100;
    return { netProfit, roi, annualizedRoi, totalReturn };
  }, [cost, returns, period]);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="투입 비용(원)"><input type="number" className={INPUT_CLASS} value={cost} onChange={(e) => setCost(num(e.target.value))} /></Labeled>
        <Labeled label="최종 회수액(원)"><input type="number" className={INPUT_CLASS} value={returns} onChange={(e) => setReturns(num(e.target.value))} /></Labeled>
        <div className="sm:col-span-2">
          <Labeled label="기간(년)" hint="연환산 ROI(CAGR 방식) 계산에 사용됩니다">
            <input type="number" className={INPUT_CLASS} value={period} min={0.1} step={0.5} onChange={(e) => setPeriod(Math.max(0.1, num(e.target.value)))} />
          </Labeled>
        </div>
      </div>
      <ResultPanel title="ROI 분석" highlight={`ROI ${results.roi.toFixed(2)}%`} subtitle={results.netProfit >= 0 ? `순이익 ${won(results.netProfit)}원` : `순손실 ${won(-results.netProfit)}원`}>
        <ResultRows rows={[
          { label: "순이익 (회수 − 투입)", value: `${results.netProfit >= 0 ? "" : "−"}${won(Math.abs(results.netProfit))}원` },
          { label: "ROI", value: `${results.roi.toFixed(2)}%` },
          { label: `연환산 ROI (CAGR식, ${period}년)`, value: `${results.annualizedRoi.toFixed(2)}%` },
          { label: "총 수익률 (회수/투입×100)", value: `${results.totalReturn.toFixed(2)}%` },
        ]} />
      </ResultPanel>
    </Box>
  );
}

function RoasForm() {
  const [revenue, setRevenue] = useState(10_000_000);
  const [adCost, setAdCost] = useState(2_000_000);
  const [marginRate, setMarginRate] = useState(30);
  const results = useMemo(() => {
    const roas = adCost === 0 ? 0 : revenue / adCost;
    const marginProfit = revenue * (marginRate / 100) - adCost;
    const bepRoas = marginRate === 0 ? 0 : 1 / (marginRate / 100);
    const adCostRate = revenue === 0 ? 0 : (adCost / revenue) * 100;
    return { roas, marginProfit, bepRoas, adCostRate };
  }, [revenue, adCost, marginRate]);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="매출(원)"><input type="number" className={INPUT_CLASS} value={revenue} onChange={(e) => setRevenue(num(e.target.value))} /></Labeled>
        <Labeled label="광고비(원)"><input type="number" className={INPUT_CLASS} value={adCost} onChange={(e) => setAdCost(num(e.target.value))} /></Labeled>
        <div className="sm:col-span-2">
          <Labeled label="마진율(%)" hint="매출 대비 총이익 비율 (예: 30 → 30%)">
            <input type="number" className={INPUT_CLASS} value={marginRate} min={0} max={100} onChange={(e) => setMarginRate(Math.max(0, Math.min(100, num(e.target.value))))} />
          </Labeled>
        </div>
      </div>
      <ResultPanel title="ROAS 분석" highlight={`ROAS ${results.roas.toFixed(2)}배`}
        subtitle={results.bepRoas > 0 ? (results.roas >= results.bepRoas ? `손익분기 ROAS(${results.bepRoas.toFixed(2)}배) 이상 — 흑자` : `손익분기 ROAS(${results.bepRoas.toFixed(2)}배) 미달 — 적자`) : undefined}>
        <ResultRows rows={[
          { label: "ROAS (매출/광고비)", value: `${results.roas.toFixed(2)}배` },
          { label: "광고비 대비 마진", value: `${results.marginProfit >= 0 ? "" : "−"}${won(Math.abs(results.marginProfit))}원` },
          { label: `손익분기 ROAS (1÷${marginRate}%)`, value: `${results.bepRoas.toFixed(2)}배` },
          { label: "광고비 비율 (광고비/매출)", value: `${results.adCostRate.toFixed(2)}%` },
        ]} />
      </ResultPanel>
    </Box>
  );
}

function MortgageForm() {
  const [principal, setPrincipal] = useState(300_000_000);
  const [annualRate, setAnnualRate] = useState(4.5);
  const [months, setMonths] = useState(360);
  const [expanded, setExpanded] = useState(false);
  const { monthlyPayment, totalPayment, totalInterest, schedule } = useMemo(() => {
    const r = annualRate / 100 / 12;
    const n = Math.max(1, Math.floor(months));
    const mp = r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    let balance = principal;
    const sched: { month: number; principalPaid: number; interest: number; remaining: number }[] = [];
    for (let i = 1; i <= n; i++) {
      const interest = balance * r;
      const principalPaid = mp - interest;
      balance = Math.max(0, balance - principalPaid);
      sched.push({ month: i, principalPaid, interest, remaining: balance });
    }
    const totalPay = mp * n;
    return { monthlyPayment: mp, totalPayment: totalPay, totalInterest: totalPay - principal, schedule: sched };
  }, [principal, annualRate, months]);
  const displayRows = expanded ? schedule : schedule.slice(0, 12);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="대출원금(원)"><input type="number" className={INPUT_CLASS} value={principal} onChange={(e) => setPrincipal(num(e.target.value))} /></Labeled>
        <Labeled label="연이율(%)"><input type="number" className={INPUT_CLASS} value={annualRate} step={0.1} onChange={(e) => setAnnualRate(num(e.target.value))} /></Labeled>
        <div className="sm:col-span-2">
          <Labeled label="상환 개월 수" hint="예: 360개월 = 30년, 180개월 = 15년">
            <input type="number" className={INPUT_CLASS} value={months} min={1} onChange={(e) => setMonths(Math.max(1, Math.floor(num(e.target.value))))} />
          </Labeled>
        </div>
      </div>
      <ResultPanel title="월 상환액" subtitle="원리금 균등 상환 기준" highlight={`약 ${won(monthlyPayment)}원`}>
        <ResultRows rows={[
          { label: "총 상환액", value: `${won(totalPayment)}원` },
          { label: "총 이자", value: `${won(totalInterest)}원` },
          { label: "이자 비율", value: `${totalPayment > 0 ? ((totalInterest / totalPayment) * 100).toFixed(1) : 0}%` },
        ]} />
      </ResultPanel>
      {schedule.length > 0 && (
        <div className="rounded-xl border border-neutral-200 bg-white p-4">
          <p className="mb-3 text-sm font-semibold text-neutral-800">상환 스케줄 (월별){schedule.length > 12 && !expanded ? " — 첫 12개월" : ""}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead><tr className="bg-neutral-100 text-neutral-600">
                <th className="border border-neutral-200 px-2 py-2 text-center font-medium">월</th>
                <th className="border border-neutral-200 px-2 py-2 text-right font-medium">원금(원)</th>
                <th className="border border-neutral-200 px-2 py-2 text-right font-medium">이자(원)</th>
                <th className="border border-neutral-200 px-2 py-2 text-right font-medium">잔여원금(원)</th>
              </tr></thead>
              <tbody>
                {displayRows.map(({ month, principalPaid, interest, remaining }) => (
                  <tr key={month} className={month % 12 === 0 ? "bg-neutral-50 font-medium" : ""}>
                    <td className="border border-neutral-200 px-2 py-1.5 text-center">{month}</td>
                    <td className="border border-neutral-200 px-2 py-1.5 text-right font-mono">{won(principalPaid)}</td>
                    <td className="border border-neutral-200 px-2 py-1.5 text-right font-mono text-neutral-500">{won(interest)}</td>
                    <td className="border border-neutral-200 px-2 py-1.5 text-right font-mono">{won(remaining)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {schedule.length > 12 && (
            <button type="button" onClick={() => setExpanded((v) => !v)}
              className="mt-3 w-full rounded-lg border border-neutral-200 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-50">
              {expanded ? `접기 (${schedule.length}개월 전체 숨김)` : `전체 보기 (${schedule.length}개월)`}
            </button>
          )}
        </div>
      )}
    </Box>
  );
}

function SavingsForm() {
  const [pmt, setPmt] = useState(500_000);
  const [annual, setAnnual] = useState(4);
  const [months, setMonths] = useState(36);
  const result = useMemo(() => {
    const r = annual / 100 / 12;
    let fv = 0;
    const yearRows: { year: number; cumPmt: number; balance: number }[] = [];
    for (let i = 1; i <= months; i++) {
      fv = (fv + pmt) * (1 + r);
      const isYearEnd = i % 12 === 0;
      const isLast = i === months;
      const yr = Math.ceil(i / 12);
      if ((isYearEnd || isLast) && yr <= 10 && (!yearRows.length || yearRows[yearRows.length - 1]!.year !== yr)) {
        yearRows.push({ year: yr, cumPmt: pmt * i, balance: fv });
      }
    }
    const totalPmt = pmt * months;
    const grossInterest = fv - totalPmt;
    const taxAmount = grossInterest * 0.154;
    return { fv, totalPmt, grossInterest, taxAmount, afterTax: fv - taxAmount, yearRows };
  }, [pmt, annual, months]);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="월 납입(원)"><input type="number" className={INPUT_CLASS} value={pmt} onChange={(e) => setPmt(Math.max(0, num(e.target.value)))} /></Labeled>
        <Labeled label="연이율(%)"><input type="number" className={INPUT_CLASS} value={annual} onChange={(e) => setAnnual(num(e.target.value))} /></Labeled>
        <div className="sm:col-span-2">
          <Labeled label="개월 수"><input type="number" className={INPUT_CLASS} value={months} onChange={(e) => setMonths(Math.max(1, Math.min(1200, Math.floor(num(e.target.value)))))} /></Labeled>
        </div>
      </div>
      <ResultPanel title="만기 예상액" subtitle="월말 복리 기준 · 이자소득세 15.4% 적용" highlight={`약 ${won(result.fv)}원`}>
        <ResultRows rows={[
          { label: "총 납입원금", value: `${won(result.totalPmt)}원` },
          { label: "세전 이자", value: `${won(result.grossInterest)}원` },
          { label: "이자소득세 (15.4%)", value: `${won(result.taxAmount)}원` },
          { label: "세후 수령액", value: `${won(result.afterTax)}원` },
        ]} />
        {result.yearRows.length > 0 && (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-xs">
              <thead><tr className="bg-neutral-100 text-left">
                <th className="border border-neutral-200 px-3 py-2 font-medium">연차</th>
                <th className="border border-neutral-200 px-3 py-2 font-medium">누적납입</th>
                <th className="border border-neutral-200 px-3 py-2 font-medium">잔액</th>
              </tr></thead>
              <tbody>
                {result.yearRows.map((row) => (
                  <tr key={row.year} className="even:bg-neutral-50">
                    <td className="border border-neutral-200 px-3 py-1.5 text-center">{row.year}년</td>
                    <td className="border border-neutral-200 px-3 py-1.5 text-right">{won(row.cumPmt)}원</td>
                    <td className="border border-neutral-200 px-3 py-1.5 text-right font-medium text-neutral-900">{won(row.balance)}원</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </ResultPanel>
    </Box>
  );
}

function MarginForm() {
  const [cost, setCost] = useState(7_000);
  const [price, setPrice] = useState(10_000);
  const result = useMemo(() => {
    const profit = price - cost;
    const marginPct = price === 0 ? 0 : (profit / price) * 100;
    const markupPct = cost === 0 ? 0 : (profit / cost) * 100;
    const costRatePct = price === 0 ? 0 : (cost / price) * 100;
    return { profit, marginPct, markupPct, costRatePct };
  }, [cost, price]);
  function applyTargetMargin(targetPct: number) {
    if (targetPct >= 100) return;
    setPrice(Math.round(cost / (1 - targetPct / 100)));
  }
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="원가(원)"><input type="number" className={INPUT_CLASS} value={cost} onChange={(e) => setCost(Math.max(0, num(e.target.value)))} /></Labeled>
        <Labeled label="판매가(원)"><input type="number" className={INPUT_CLASS} value={price} onChange={(e) => setPrice(Math.max(0, num(e.target.value)))} /></Labeled>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-neutral-500">목표 마진율:</span>
        {[20, 30, 40, 50].map((t) => (
          <button key={t} type="button" onClick={() => applyTargetMargin(t)}
            className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-800 hover:bg-neutral-100">
            {t}%
          </button>
        ))}
      </div>
      <ResultPanel title="마진 분석" highlight={`마진율 ${result.marginPct.toFixed(2)}%`}>
        <ResultRows rows={[
          { label: "마진율 (margin%)", value: `${result.marginPct.toFixed(2)}%` },
          { label: "마크업률 (markup%)", value: `${result.markupPct.toFixed(2)}%` },
          { label: "이익금액", value: `${won(result.profit)}원` },
          { label: "원가율", value: `${result.costRatePct.toFixed(2)}%` },
        ]} />
      </ResultPanel>
    </Box>
  );
}

function RatioForm({
  label,
  aLabel,
  bLabel,
  isPercentResult,
}: {
  label: string;
  aLabel: string;
  bLabel: string;
  isPercentResult?: boolean;
}) {
  const [a, setA] = useState(50000);
  const [b, setB] = useState(2000);
  const v = b === 0 ? 0 : a / b;
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label={aLabel}>
          <input type="number" className={INPUT_CLASS} value={a} onChange={(e) => setA(num(e.target.value))} />
        </Labeled>
        <Labeled label={bLabel}>
          <input type="number" className={INPUT_CLASS} value={b} onChange={(e) => setB(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel
        title="계산 결과"
        highlight={
          isPercentResult ? `${label} ${(v * 100).toFixed(2)}%` : `${label} ${v.toFixed(2)}`
        }
      />
    </Box>
  );
}

function ApyForm() {
  const [nominal, setNominal] = useState(4);
  const [n, setN] = useState(12);
  const apy = useMemo(() => n > 0 ? (Math.pow(1 + nominal / 100 / n, n) - 1) * 100 : 0, [nominal, n]);
  const compoundingOptions = [
    { label: "연 (n=1)", n: 1 },
    { label: "반기 (n=2)", n: 2 },
    { label: "분기 (n=4)", n: 4 },
    { label: "월 (n=12)", n: 12 },
    { label: "주 (n=52)", n: 52 },
    { label: "일 (n=365)", n: 365 },
  ];
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="명목 연이율(%)"><input type="number" className={INPUT_CLASS} value={nominal} onChange={(e) => setNominal(num(e.target.value))} /></Labeled>
        <Labeled label="복리 주기(연 n회)"><input type="number" className={INPUT_CLASS} value={n} onChange={(e) => setN(Math.max(1, Math.floor(num(e.target.value))))} /></Labeled>
      </div>
      <ResultPanel title="유효 연율 (APY)" subtitle="실질 연 수익률 (복리 효과 반영)" highlight={`약 ${apy.toFixed(4)}%`}>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="bg-neutral-100 text-left">
              <th className="border border-neutral-200 px-3 py-2 font-medium">복리 주기</th>
              <th className="border border-neutral-200 px-3 py-2 font-medium text-right">APY</th>
            </tr></thead>
            <tbody>
              {compoundingOptions.map((opt) => {
                const rowApy = (Math.pow(1 + nominal / 100 / opt.n, opt.n) - 1) * 100;
                const isSelected = opt.n === n;
                return (
                  <tr key={opt.n} className={isSelected ? "bg-neutral-900 text-white" : "even:bg-neutral-50"}>
                    <td className="border border-neutral-200 px-3 py-1.5">{opt.label}</td>
                    <td className={`border border-neutral-200 px-3 py-1.5 text-right font-medium ${isSelected ? "text-white" : "text-neutral-900"}`}>{rowApy.toFixed(4)}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </ResultPanel>
    </Box>
  );
}

function CpmForm() {
  const [adCost, setAdCost] = useState(500_000);
  const [impressions, setImpressions] = useState(1_000_000);
  const [clicks, setClicks] = useState(5_000);
  const [conversions, setConversions] = useState(50);
  const result = useMemo(() => ({
    cpm: impressions === 0 ? 0 : (adCost / impressions) * 1000,
    cpc: clicks === 0 ? 0 : adCost / clicks,
    cpConv: conversions === 0 ? 0 : adCost / conversions,
    ctr: impressions === 0 ? 0 : (clicks / impressions) * 100,
    cvr: clicks === 0 ? 0 : (conversions / clicks) * 100,
  }), [adCost, impressions, clicks, conversions]);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="광고비(원)"><input type="number" className={INPUT_CLASS} value={adCost} onChange={(e) => setAdCost(Math.max(0, num(e.target.value)))} /></Labeled>
        <Labeled label="노출수"><input type="number" className={INPUT_CLASS} value={impressions} onChange={(e) => setImpressions(Math.max(0, num(e.target.value)))} /></Labeled>
        <Labeled label="클릭수"><input type="number" className={INPUT_CLASS} value={clicks} onChange={(e) => setClicks(Math.max(0, num(e.target.value)))} /></Labeled>
        <Labeled label="전환수"><input type="number" className={INPUT_CLASS} value={conversions} onChange={(e) => setConversions(Math.max(0, num(e.target.value)))} /></Labeled>
      </div>
      <ResultPanel title="광고 지표" highlight={`CPM ${won(result.cpm)}원`}>
        <ResultRows rows={[
          { label: "CPM (1,000 노출당 비용)", value: `${won(result.cpm)}원` },
          { label: "CPC (클릭당 비용)", value: `${won(result.cpc)}원` },
          { label: "전환당 비용 (CPConv)", value: `${won(result.cpConv)}원` },
          { label: "CTR (클릭률)", value: `${result.ctr.toFixed(3)}%` },
          { label: "CVR (전환율)", value: `${result.cvr.toFixed(3)}%` },
        ]} />
      </ResultPanel>
    </Box>
  );
}

function BreakevenForm() {
  const [loss, setLoss] = useState(20);
  const recoveryPct = useMemo(() => {
    if (loss <= 0) return 0;
    if (loss >= 100) return Infinity;
    return (100 / (100 - loss) - 1) * 100;
  }, [loss]);
  const referenceRows = [
    { loss: 10, recovery: 11.1 },
    { loss: 20, recovery: 25 },
    { loss: 30, recovery: 42.9 },
    { loss: 40, recovery: 66.7 },
    { loss: 50, recovery: 100 },
    { loss: 60, recovery: 150 },
    { loss: 70, recovery: 233 },
    { loss: 80, recovery: 400 },
    { loss: 90, recovery: 900 },
  ];
  const closestLoss = referenceRows.reduce((prev, cur) => Math.abs(cur.loss - loss) < Math.abs(prev.loss - loss) ? cur : prev).loss;
  return (
    <Box>
      <Labeled label="손실률(%)">
        <input type="number" className={INPUT_CLASS} value={loss} min={0} max={99.99} step={1} onChange={(e) => setLoss(Math.max(0, Math.min(99.99, num(e.target.value))))} />
      </Labeled>
      <ResultPanel title="본전 복구 필요 수익률" subtitle="손실 후 원금을 회복하기 위해 필요한 수익률 (참고)"
        highlight={Number.isFinite(recoveryPct) ? `약 ${recoveryPct.toFixed(2)}%` : "∞"}>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="bg-neutral-100 text-left">
              <th className="border border-neutral-200 px-3 py-2 font-medium">손실률</th>
              <th className="border border-neutral-200 px-3 py-2 font-medium text-right">필요 수익률</th>
            </tr></thead>
            <tbody>
              {referenceRows.map((row) => (
                <tr key={row.loss} className={row.loss === closestLoss ? "bg-neutral-900 text-white" : "even:bg-neutral-50"}>
                  <td className="border border-neutral-200 px-3 py-1.5">{row.loss}%</td>
                  <td className={`border border-neutral-200 px-3 py-1.5 text-right font-medium ${row.loss === closestLoss ? "text-white" : "text-neutral-900"}`}>{row.recovery}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ResultPanel>
    </Box>
  );
}

function gcdTwo(a: number, b: number): number {
  let x = Math.abs(Math.floor(a));
  let y = Math.abs(Math.floor(b));
  while (y) [x, y] = [y, x % y];
  return x || 0;
}

function lcmTwo(a: number, b: number) {
  const g = gcdTwo(a, b);
  return g === 0 ? 0 : Math.abs(a * b) / g;
}

function LcmForm() {
  const [aStr, setAStr] = useState("12");
  const [bStr, setBStr] = useState("18");
  const [cStr, setCStr] = useState("0");
  const { lcmAB, lcmABC, steps } = useMemo(() => {
    const a = Math.abs(Math.floor(num(aStr)));
    const b = Math.abs(Math.floor(num(bStr)));
    const c = Math.abs(Math.floor(num(cStr)));
    const lcmAB = lcmTwo(a, b);
    const lcmABC = c > 0 ? lcmTwo(lcmAB, c) : null;
    const steps: string[] = [];
    let x = a; let y = b; let count = 0;
    while (y > 0 && count < 8) {
      const q = Math.floor(x / y); const r = x % y;
      steps.push(r === 0 ? `${x} = ${q}×${y} + 0 → gcd=${y}` : `${x} = ${q}×${y} + ${r}`);
      x = y; y = r; count++;
    }
    return { lcmAB, lcmABC, steps };
  }, [aStr, bStr, cStr]);
  const hasC = num(cStr) > 0;
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-3">
        <Labeled label="a"><input type="number" className={INPUT_CLASS} value={aStr} onChange={(e) => setAStr(e.target.value)} /></Labeled>
        <Labeled label="b"><input type="number" className={INPUT_CLASS} value={bStr} onChange={(e) => setBStr(e.target.value)} /></Labeled>
        <Labeled label="c (0 = 무시)"><input type="number" className={INPUT_CLASS} value={cStr} onChange={(e) => setCStr(e.target.value)} /></Labeled>
      </div>
      <ResultPanel title="최소공배수(LCM)" highlight={`LCM(a,b) = ${won(lcmAB)}`} subtitle={hasC && lcmABC !== null ? `LCM(LCM(a,b),c) = ${won(lcmABC)}` : undefined}>
        {hasC && lcmABC !== null && <ResultRows rows={[{ label: "LCM(a, b)", value: won(lcmAB) }, { label: "LCM(LCM(a,b), c)", value: won(lcmABC) }]} />}
        {steps.length > 0 && (
          <div className="mt-6">
            <p className="mb-2 text-xs font-medium text-neutral-700">유클리드 호제법 단계 — gcd({Math.abs(Math.floor(num(aStr)))}, {Math.abs(Math.floor(num(bStr)))})</p>
            <ol className="space-y-1">{steps.map((s, i) => <li key={i} className="font-mono text-xs text-neutral-700">{s}</li>)}</ol>
          </div>
        )}
      </ResultPanel>
    </Box>
  );
}

function GcdForm() {
  const [aStr, setAStr] = useState("48");
  const [bStr, setBStr] = useState("18");
  const [cStr, setCStr] = useState("0");
  const { gcdAB, gcdABC, steps } = useMemo(() => {
    const a = Math.abs(Math.floor(num(aStr)));
    const b = Math.abs(Math.floor(num(bStr)));
    const c = Math.abs(Math.floor(num(cStr)));
    const gcdAB = gcdTwo(a, b);
    const gcdABC = c > 0 ? gcdTwo(gcdAB, c) : null;
    const steps: string[] = [];
    let x = a; let y = b; let count = 0;
    while (y > 0 && count < 8) {
      const q = Math.floor(x / y); const r = x % y;
      steps.push(r === 0 ? `${x} = ${q}×${y} + 0 → gcd=${y}` : `${x} = ${q}×${y} + ${r}`);
      x = y; y = r; count++;
    }
    return { gcdAB, gcdABC, steps };
  }, [aStr, bStr, cStr]);
  const hasC = num(cStr) > 0;
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-3">
        <Labeled label="a"><input type="number" className={INPUT_CLASS} value={aStr} onChange={(e) => setAStr(e.target.value)} /></Labeled>
        <Labeled label="b"><input type="number" className={INPUT_CLASS} value={bStr} onChange={(e) => setBStr(e.target.value)} /></Labeled>
        <Labeled label="c (0 = 무시)"><input type="number" className={INPUT_CLASS} value={cStr} onChange={(e) => setCStr(e.target.value)} /></Labeled>
      </div>
      <ResultPanel title="최대공약수(GCD)" highlight={`GCD(a,b) = ${gcdAB}`} subtitle={hasC && gcdABC !== null ? `GCD(GCD(a,b),c) = ${gcdABC}` : undefined}>
        {hasC && gcdABC !== null && <ResultRows rows={[{ label: "GCD(a, b)", value: String(gcdAB) }, { label: "GCD(GCD(a,b), c)", value: String(gcdABC) }]} />}
        {steps.length > 0 && (
          <div className="mt-6">
            <p className="mb-2 text-xs font-medium text-neutral-700">유클리드 호제법 단계 — gcd({Math.abs(Math.floor(num(aStr)))}, {Math.abs(Math.floor(num(bStr)))})</p>
            <ol className="space-y-1">{steps.map((s, i) => <li key={i} className="font-mono text-xs text-neutral-700">{s}</li>)}</ol>
          </div>
        )}
      </ResultPanel>
    </Box>
  );
}

function AvgForm() {
  const [text, setText] = useState("4, 8, 15, 16, 23, 42");
  const stats = useMemo(() => {
    const xs = text.split(/[\s,]+/).map((s) => Number(s.trim())).filter((n) => Number.isFinite(n));
    if (!xs.length) return null;
    const count = xs.length;
    const sum = xs.reduce((a, b) => a + b, 0);
    const mean = sum / count;
    const min = Math.min(...xs);
    const max = Math.max(...xs);
    const sorted = [...xs].sort((a, b) => a - b);
    const mid = Math.floor(count / 2);
    const median = count % 2 === 1 ? sorted[mid]! : (sorted[mid - 1]! + sorted[mid]!) / 2;
    const stddev = Math.sqrt(xs.reduce((acc, x) => acc + (x - mean) ** 2, 0) / count);
    return { count, sum, mean, min, max, median, stddev };
  }, [text]);
  const fmt = (n: number) => Number.isInteger(n) ? n.toLocaleString("ko-KR") : parseFloat(n.toFixed(4)).toString();
  return (
    <Box>
      <Labeled label="숫자 목록 (쉼표 또는 공백 구분)">
        <textarea className={TEXTAREA_CLASS} rows={4} value={text} onChange={(e) => setText(e.target.value)} />
      </Labeled>
      <ResultPanel title="통계 계산 결과" highlight={stats ? `평균 ${fmt(stats.mean)}` : "—"}>
        {stats ? (
          <ResultRows rows={[
            { label: "개수", value: String(stats.count) },
            { label: "합계", value: fmt(stats.sum) },
            { label: "평균", value: fmt(stats.mean) },
            { label: "최솟값", value: fmt(stats.min) },
            { label: "최댓값", value: fmt(stats.max) },
            { label: "중앙값", value: fmt(stats.median) },
            { label: "표준편차 (모집단)", value: fmt(stats.stddev) },
          ]} />
        ) : <p className="mt-4 text-sm text-neutral-500">숫자를 입력하면 결과가 표시됩니다.</p>}
      </ResultPanel>
    </Box>
  );
}

function ModForm() {
  const [a, setA] = useState(17);
  const [b, setB] = useState(5);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="피제수">
          <input type="number" className={INPUT_CLASS} value={a} onChange={(e) => setA(num(e.target.value))} />
        </Labeled>
        <Labeled label="제수">
          <input type="number" className={INPUT_CLASS} value={b} onChange={(e) => setB(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과">
        <ResultRows
          rows={[
            { label: "몫", value: b === 0 ? "—" : String(Math.trunc(a / b)) },
            { label: "나머지", value: b === 0 ? "—" : String(a % b) },
          ]}
        />
      </ResultPanel>
    </Box>
  );
}

function FibForm() {
  const [nStr, setNStr] = useState("10");
  const { seq, fn, phi } = useMemo(() => {
    const n = Math.max(0, Math.min(50, Math.floor(num(nStr))));
    const seq: number[] = [0, 1];
    for (let i = 2; i <= n; i++) seq.push(seq[i - 1]! + seq[i - 2]!);
    const trimmed = seq.slice(0, n + 1);
    const fn = trimmed[n] ?? 0;
    const phi = n >= 2 && trimmed[n - 1] !== 0 ? fn / trimmed[n - 1]! : null;
    return { seq: trimmed, fn, phi };
  }, [nStr]);
  const n = Math.max(0, Math.min(50, Math.floor(num(nStr))));
  return (
    <Box>
      <Labeled label="n (0 ~ 50)">
        <input type="number" min={0} max={50} className={INPUT_CLASS} value={nStr} onChange={(e) => setNStr(e.target.value)} />
      </Labeled>
      <ResultPanel title="피보나치 수열" highlight={`F(${n}) = ${won(fn)}`} subtitle={phi !== null ? `황금비 근사: F(n)/F(n-1) ≈ ${phi.toFixed(8)}` : undefined}>
        <div className="mt-4">
          <p className="mb-2 text-xs font-medium text-neutral-700">F(0) ~ F({n}) 전체 수열</p>
          <div className="overflow-x-auto rounded-lg border border-neutral-200 bg-white p-3">
            <p className="whitespace-nowrap font-mono text-xs text-neutral-800">
              {seq.map((v, i) => (
                <span key={i} className={i === n ? "font-bold underline decoration-dotted" : ""}>{won(v)}</span>
              )).reduce<ReactNode[]>((acc, el, i) => {
                if (i === 0) return [el];
                return [...acc, <span key={`s${i}`} className="text-neutral-400">, </span>, el];
              }, [])}
            </p>
          </div>
        </div>
      </ResultPanel>
    </Box>
  );
}

function FactForm() {
  const [n, setN] = useState(6);
  const v = useMemo(() => {
    const t = Math.max(0, Math.min(170, Math.floor(n)));
    let r = 1;
    for (let i = 2; i <= t; i++) r *= i;
    return r;
  }, [n]);
  return (
    <Box>
      <Labeled label="n">
        <input type="number" className={INPUT_CLASS} value={n} onChange={(e) => setN(num(e.target.value))} />
      </Labeled>
      <ResultPanel title="계산 결과" highlight={`n! = ${v}`} />
    </Box>
  );
}

function PermForm() {
  const [n, setN] = useState(5);
  const [r, setR] = useState(2);
  const perm = (x: number) => {
    let t = 1;
    for (let i = 0; i < r; i++) t *= x - i;
    return t;
  };
  const comb = (x: number) => perm(x) / (r <= 0 ? 1 : factorial(r));
  function factorial(k: number) {
    let t = 1;
    for (let i = 2; i <= k; i++) t *= i;
    return t;
  }
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="n">
          <input type="number" className={INPUT_CLASS} value={n} onChange={(e) => setN(Math.max(0, Math.floor(num(e.target.value))))} />
        </Labeled>
        <Labeled label="r">
          <input type="number" className={INPUT_CLASS} value={r} onChange={(e) => setR(Math.max(0, Math.floor(num(e.target.value))))} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과">
        <ResultRows
          rows={[
            { label: `순열 P(n,r)`, value: String(n >= r ? perm(n) : 0) },
            { label: `조합 C(n,r)`, value: String(n >= r ? comb(n) : 0) },
          ]}
        />
      </ResultPanel>
    </Box>
  );
}

function PyeongForm() {
  const RATE = 3.30579;
  const REF_ROWS = [
    { pyeong: 10, m2: 33.1 }, { pyeong: 20, m2: 66.1 }, { pyeong: 25, m2: 82.6 },
    { pyeong: 30, m2: 99.2 }, { pyeong: 34, m2: 112.4 }, { pyeong: 40, m2: 132.2 }, { pyeong: 50, m2: 165.3 },
  ];
  const [mode, setMode] = useState<"pyeong" | "m2">("pyeong");
  const [valStr, setValStr] = useState("32");
  const { converted, inputPyeong } = useMemo(() => {
    const v = num(valStr);
    if (mode === "pyeong") return { converted: v * RATE, inputPyeong: v };
    return { converted: v / RATE, inputPyeong: v / RATE };
  }, [mode, valStr]);
  const closestIdx = useMemo(() => {
    let best = 0; let bestDiff = Infinity;
    REF_ROWS.forEach((r, i) => { const d = Math.abs(r.pyeong - inputPyeong); if (d < bestDiff) { bestDiff = d; best = i; } });
    return best;
  }, [inputPyeong]);
  return (
    <Box>
      <div className="flex gap-2">
        <button type="button" onClick={() => { setMode("pyeong"); setValStr("32"); }}
          className={`rounded-full px-4 py-2 text-sm font-medium ${mode === "pyeong" ? "bg-neutral-900 text-white" : "border border-neutral-300"}`}>
          평 → ㎡
        </button>
        <button type="button" onClick={() => { setMode("m2"); setValStr("99.2"); }}
          className={`rounded-full px-4 py-2 text-sm font-medium ${mode === "m2" ? "bg-neutral-900 text-white" : "border border-neutral-300"}`}>
          ㎡ → 평
        </button>
      </div>
      <Labeled label={mode === "pyeong" ? "평수 입력" : "㎡ 입력"}>
        <input type="number" step="0.01" className={INPUT_CLASS} value={valStr} onChange={(e) => setValStr(e.target.value)} />
      </Labeled>
      <ResultPanel title="변환 결과" highlight={mode === "pyeong" ? `${num(valStr).toFixed(1)}평 → ${converted.toFixed(2)}㎡` : `${num(valStr).toFixed(2)}㎡ → ${converted.toFixed(2)}평`} subtitle="1평 = 3.30579 ㎡">
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="bg-neutral-100">
              <th className="border border-neutral-200 px-3 py-2 text-left font-medium text-neutral-700">평</th>
              <th className="border border-neutral-200 px-3 py-2 text-left font-medium text-neutral-700">㎡</th>
            </tr></thead>
            <tbody>
              {REF_ROWS.map((r, i) => (
                <tr key={r.pyeong} className={i === closestIdx ? "bg-neutral-900 text-white font-semibold" : i % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                  <td className="border border-neutral-200 px-3 py-2">{r.pyeong}평</td>
                  <td className="border border-neutral-200 px-3 py-2">{r.m2}㎡</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ResultPanel>
    </Box>
  );
}

type TempUnit = "C" | "F" | "K";

function TempForm() {
  const [unit, setUnit] = useState<TempUnit>("C");
  const [raw, setRaw] = useState("20");
  const { celsius, fahrenheit, kelvin } = useMemo(() => {
    const v = num(raw);
    if (unit === "C") return { celsius: v, fahrenheit: v * 9 / 5 + 32, kelvin: v + 273.15 };
    if (unit === "F") { const c = (v - 32) * 5 / 9; return { celsius: c, fahrenheit: v, kelvin: c + 273.15 }; }
    const c = v - 273.15; return { celsius: c, fahrenheit: c * 9 / 5 + 32, kelvin: v };
  }, [unit, raw]);
  const REF_ROWS = [
    { label: "-40", c: -40, f: -40, k: 233.15 },
    { label: "빙점 0°C", c: 0, f: 32, k: 273.15 },
    { label: "실온 20°C", c: 20, f: 68, k: 293.15 },
    { label: "체온 37°C", c: 37, f: 98.6, k: 310.15 },
    { label: "끓는점 100°C", c: 100, f: 212, k: 373.15 },
  ];
  const resultRows = unit === "C"
    ? [{ label: "화씨(°F)", value: `${fahrenheit.toFixed(2)} °F` }, { label: "켈빈(K)", value: `${kelvin.toFixed(2)} K` }]
    : unit === "F"
    ? [{ label: "섭씨(°C)", value: `${celsius.toFixed(2)} °C` }, { label: "켈빈(K)", value: `${kelvin.toFixed(2)} K` }]
    : [{ label: "섭씨(°C)", value: `${celsius.toFixed(2)} °C` }, { label: "화씨(°F)", value: `${fahrenheit.toFixed(2)} °F` }];
  return (
    <Box>
      <div className="flex flex-wrap gap-2">
        {(["C", "F", "K"] as TempUnit[]).map((u) => (
          <button key={u} type="button" onClick={() => setUnit(u)}
            className={`rounded-full px-4 py-2 text-sm ${unit === u ? "bg-neutral-900 text-white" : "border border-neutral-300"}`}>
            {u === "C" ? "섭씨 (°C)" : u === "F" ? "화씨 (°F)" : "켈빈 (K)"}
          </button>
        ))}
      </div>
      <Labeled label={`입력값 (${unit === "C" ? "°C" : unit === "F" ? "°F" : "K"})`}>
        <input type="number" className={INPUT_CLASS} value={raw} onChange={(e) => setRaw(e.target.value)} />
      </Labeled>
      <ResultPanel title="온도 변환" highlight={unit === "C" ? `${celsius.toFixed(2)} °C` : unit === "F" ? `${fahrenheit.toFixed(2)} °F` : `${kelvin.toFixed(2)} K`}>
        <ResultRows rows={resultRows} />
      </ResultPanel>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-neutral-200 text-left text-neutral-600">
            <th className="pb-2 pr-4 font-medium">기준 온도</th>
            <th className="pb-2 pr-4 font-medium">°C</th>
            <th className="pb-2 pr-4 font-medium">°F</th>
            <th className="pb-2 font-medium">K</th>
          </tr></thead>
          <tbody>
            {REF_ROWS.map((r) => (
              <tr key={r.label} className="border-b border-neutral-100">
                <td className="py-2 pr-4 text-neutral-600">{r.label}</td>
                <td className="py-2 pr-4 font-medium">{r.c}</td>
                <td className="py-2 pr-4 font-medium">{r.f}</td>
                <td className="py-2 font-medium">{r.k}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  );
}

type InchDir = "inch-to-cm" | "cm-to-inch";

function InchCmForm() {
  const [dir, setDir] = useState<InchDir>("inch-to-cm");
  const [raw, setRaw] = useState("170");
  const result = useMemo(() => {
    const v = num(raw);
    if (dir === "inch-to-cm") {
      const cm = v * 2.54;
      const ft = Math.floor(v / 12); const inches = v % 12;
      return { primary: `${cm.toFixed(1)} cm`, secondary: `${ft}ft ${inches.toFixed(1)}in` };
    } else {
      const totalInches = v / 2.54;
      const ft = Math.floor(totalInches / 12); const inches = totalInches % 12;
      return { primary: `${totalInches.toFixed(1)} inch`, secondary: `${ft}ft ${inches.toFixed(1)}in` };
    }
  }, [dir, raw]);
  const REF = [{ cm: 160, inch: 63 }, { cm: 165, inch: 65 }, { cm: 170, inch: 67 }, { cm: 175, inch: 69 }, { cm: 180, inch: 71 }, { cm: 185, inch: 73 }];
  return (
    <Box>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => setDir("inch-to-cm")}
          className={`rounded-full px-4 py-2 text-sm ${dir === "inch-to-cm" ? "bg-neutral-900 text-white" : "border border-neutral-300"}`}>inch → cm</button>
        <button type="button" onClick={() => setDir("cm-to-inch")}
          className={`rounded-full px-4 py-2 text-sm ${dir === "cm-to-inch" ? "bg-neutral-900 text-white" : "border border-neutral-300"}`}>cm → inch</button>
      </div>
      <Labeled label={dir === "inch-to-cm" ? "인치(inch)" : "센티미터(cm)"}>
        <input type="number" className={INPUT_CLASS} value={raw} onChange={(e) => setRaw(e.target.value)} />
      </Labeled>
      <ResultPanel title="변환 결과" highlight={result.primary}>
        <ResultRows rows={[{ label: "feet+inches 형식", value: result.secondary }]} />
      </ResultPanel>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-neutral-200 text-left text-neutral-600">
            <th className="pb-2 pr-4 font-medium">cm</th><th className="pb-2 font-medium">inch</th>
          </tr></thead>
          <tbody>
            {REF.map((r) => (
              <tr key={r.cm} className="border-b border-neutral-100">
                <td className="py-2 pr-4 font-medium">{r.cm} cm</td>
                <td className="py-2 font-medium">{r.inch} in</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  );
}

type ByteUnit = "B" | "KiB" | "MiB" | "GiB" | "TiB";

function ByteForm() {
  const UNITS: ByteUnit[] = ["B", "KiB", "MiB", "GiB", "TiB"];
  const FACTORS: Record<ByteUnit, number> = { B: 1, KiB: 1024, MiB: 1024 ** 2, GiB: 1024 ** 3, TiB: 1024 ** 4 };
  const [raw, setRaw] = useState("1");
  const [unit, setUnit] = useState<ByteUnit>("GiB");
  const bytes = useMemo(() => num(raw) * FACTORS[unit], [raw, unit]);
  const rows = useMemo(() => UNITS.map((u) => {
    const v = bytes / FACTORS[u];
    const display = v >= 1e12 || (v < 0.0001 && v > 0) ? v.toExponential(3) : v % 1 === 0 ? v.toLocaleString("ko-KR") : parseFloat(v.toFixed(6)).toString();
    return { label: u, value: display };
  }), [bytes]);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="값"><input type="number" className={INPUT_CLASS} value={raw} onChange={(e) => setRaw(e.target.value)} /></Labeled>
        <Labeled label="단위">
          <select className={INPUT_CLASS} value={unit} onChange={(e) => setUnit(e.target.value as ByteUnit)}>
            {UNITS.map((u) => <option key={u} value={u}>{u}</option>)}
          </select>
        </Labeled>
      </div>
      <ResultPanel title="바이트 단위 변환" subtitle="1 KiB = 1,024 B 기준 (이진 접두사)">
        <ResultRows rows={rows} />
      </ResultPanel>
    </Box>
  );
}

function ParallelRForm() {
  const [r1, setR1] = useState(100);
  const [r2, setR2] = useState(200);
  const rp = r1 <= 0 || r2 <= 0 ? 0 : 1 / (1 / r1 + 1 / r2);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="R1(Ω)">
          <input type="number" className={INPUT_CLASS} value={r1} onChange={(e) => setR1(num(e.target.value))} />
        </Labeled>
        <Labeled label="R2(Ω)">
          <input type="number" className={INPUT_CLASS} value={r2} onChange={(e) => setR2(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과" highlight={`합성 R ≈ ${rp.toFixed(2)}Ω`} />
    </Box>
  );
}

function SdtForm() {
  const [mode, setMode] = useState<"v" | "t" | "d">("v");
  const [v, setV] = useState(60);
  const [t, setT] = useState(2);
  const [d, setD] = useState(100);

  const result =
    mode === "v" ? (t > 0 ? d / t : 0)
    : mode === "t" ? (v > 0 ? d / v : 0)
    : v * t;

  const labels: Record<typeof mode, string> = {
    v: `속도 ${result.toFixed(2)} km/h`,
    t: `시간 ${result.toFixed(2)} h`,
    d: `거리 ${result.toFixed(2)} km`,
  };

  return (
    <Box>
      <p className="mb-3 text-sm text-neutral-500">구하려는 항목을 선택하면 나머지 두 값을 입력합니다.</p>
      <div className="flex gap-2 text-sm mb-4">
        {([["v", "속도 구하기"], ["t", "시간 구하기"], ["d", "거리 구하기"]] as const).map(([m, l]) => (
          <button key={m} type="button"
            className={`rounded-full border px-3 py-1 ${mode === m ? "bg-neutral-900 text-white" : ""}`}
            onClick={() => setMode(m)}>{l}</button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {mode !== "v" && (
          <Labeled label="속도 (km/h)">
            <input type="number" step="0.1" className={INPUT_CLASS} value={v} onChange={(e) => setV(num(e.target.value))} />
          </Labeled>
        )}
        {mode !== "t" && (
          <Labeled label="시간 (h)">
            <input type="number" step="0.1" className={INPUT_CLASS} value={t} onChange={(e) => setT(num(e.target.value))} />
          </Labeled>
        )}
        {mode !== "d" && (
          <Labeled label="거리 (km)">
            <input type="number" step="0.1" className={INPUT_CLASS} value={d} onChange={(e) => setD(num(e.target.value))} />
          </Labeled>
        )}
      </div>
      <ResultPanel title="계산 결과" highlight={labels[mode]} />
    </Box>
  );
}

function DdayForm() {
  const today = new Date().toISOString().slice(0, 10);
  const [start, setStart] = useState(today);
  const [target, setTarget] = useState(() => new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10));
  const result = useMemo(() => {
    const s = new Date(`${start}T00:00:00`);
    const t = new Date(`${target}T00:00:00`);
    const diff = Math.round((t.getTime() - s.getTime()) / 86400000);
    const absDiff = Math.abs(diff);
    const weeks = Math.floor(absDiff / 7);
    const DAY_NAMES = ["일", "월", "화", "수", "목", "금", "토"];
    const targetDay = DAY_NAMES[t.getDay()];
    const dday = diff > 0 ? `D-${diff}` : diff < 0 ? `D+${absDiff}` : "D-Day";
    return { diff, absDiff, weeks, targetDay, dday };
  }, [start, target]);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="시작일"><input type="date" className={INPUT_CLASS} value={start} onChange={(e) => setStart(e.target.value)} /></Labeled>
        <Labeled label="목표일"><input type="date" className={INPUT_CLASS} value={target} onChange={(e) => setTarget(e.target.value)} /></Labeled>
      </div>
      <ResultPanel title="D-Day" highlight={result.dday}
        subtitle={result.diff > 0 ? "목표일까지 남은 날" : result.diff < 0 ? "목표일이 지났습니다" : "오늘이 목표일입니다"}>
        <ResultRows rows={[
          { label: "총 일수", value: `${result.absDiff.toLocaleString("ko-KR")}일` },
          { label: "주수", value: `${result.weeks}주` },
          { label: "목표일 요일", value: `${result.targetDay}요일` },
        ]} />
      </ResultPanel>
    </Box>
  );
}

function AgeForm() {
  const [birth, setBirth] = useState("1995-01-01");
  const [base, setBase] = useState(() => new Date().toISOString().slice(0, 10));
  const result = useMemo(() => {
    const b = new Date(`${birth}T00:00:00`);
    const d = new Date(`${base}T00:00:00`);
    let intlAge = d.getFullYear() - b.getFullYear();
    const hasBirthdayPassed = d.getMonth() > b.getMonth() || (d.getMonth() === b.getMonth() && d.getDate() >= b.getDate());
    if (!hasBirthdayPassed) intlAge -= 1;
    const koreanAge = d.getFullYear() - b.getFullYear() + 1;
    const livedDays = Math.floor((d.getTime() - b.getTime()) / 86400000);
    const nextBirthday = new Date(d.getFullYear(), b.getMonth(), b.getDate());
    if (nextBirthday <= d) nextBirthday.setFullYear(d.getFullYear() + 1);
    const daysToNextBirthday = Math.ceil((nextBirthday.getTime() - d.getTime()) / 86400000);
    const DAY_NAMES = ["일", "월", "화", "수", "목", "금", "토"];
    return { intlAge, koreanAge, livedDays, daysToNextBirthday, birthDayName: DAY_NAMES[b.getDay()] };
  }, [birth, base]);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="생년월일"><input type="date" className={INPUT_CLASS} value={birth} onChange={(e) => setBirth(e.target.value)} /></Labeled>
        <Labeled label="기준일"><input type="date" className={INPUT_CLASS} value={base} onChange={(e) => setBase(e.target.value)} /></Labeled>
      </div>
      <ResultPanel title="나이 계산" highlight={`만 ${result.intlAge}세`}>
        <ResultRows rows={[
          { label: "한국 나이", value: `${result.koreanAge}세` },
          { label: "다음 생일까지", value: `${result.daysToNextBirthday.toLocaleString("ko-KR")}일` },
          { label: "살아온 날", value: `${result.livedDays.toLocaleString("ko-KR")}일` },
          { label: "태어난 요일", value: `${result.birthDayName}요일` },
        ]} />
      </ResultPanel>
    </Box>
  );
}

type DutchMode = "total" | "items";
type DutchItem = { id: number; name: string; amount: number };

function DutchForm() {
  const [mode, setMode] = useState<DutchMode>("total");
  const [total, setTotal] = useState(120_000);
  const [people, setPeople] = useState(4);
  const [items, setItems] = useState<DutchItem[]>([
    { id: 1, name: "음식", amount: 60_000 },
    { id: 2, name: "술", amount: 40_000 },
  ]);
  const [newName, setNewName] = useState("");
  const [newAmt, setNewAmt] = useState(0);
  const { grandTotal, perPerson, remainder } = useMemo(() => {
    const gt = mode === "total" ? total : items.reduce((s, i) => s + i.amount, 0);
    const per = people <= 0 ? 0 : gt / people;
    const floor = Math.floor(per);
    return { grandTotal: gt, perPerson: per, remainder: gt - floor * people };
  }, [mode, total, items, people]);
  function addItem() {
    if (newAmt <= 0) return;
    setItems((prev) => [...prev, { id: Date.now(), name: newName || `항목 ${prev.length + 1}`, amount: newAmt }]);
    setNewName(""); setNewAmt(0);
  }
  function removeItem(id: number) { setItems((prev) => prev.filter((i) => i.id !== id)); }
  return (
    <Box>
      <div className="flex gap-2">
        <button type="button" onClick={() => setMode("total")} className={`rounded-full px-4 py-2 text-sm font-medium ${mode === "total" ? "bg-neutral-900 text-white" : "border border-neutral-200"}`}>전체 금액</button>
        <button type="button" onClick={() => setMode("items")} className={`rounded-full px-4 py-2 text-sm font-medium ${mode === "items" ? "bg-neutral-900 text-white" : "border border-neutral-200"}`}>항목별 입력</button>
      </div>
      {mode === "total" && (
        <Labeled label="총 금액(원)"><input type="number" className={INPUT_CLASS} value={total} onChange={(e) => setTotal(num(e.target.value))} /></Labeled>
      )}
      {mode === "items" && (
        <div className="space-y-2">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-sm">
              <span className="flex-1 text-neutral-800">{item.name}</span>
              <span className="font-medium text-neutral-900">{won(item.amount)}원</span>
              <button type="button" onClick={() => removeItem(item.id)} className="text-neutral-400 hover:text-red-500">✕</button>
            </div>
          ))}
          <div className="flex gap-2">
            <input className={`${INPUT_CLASS} flex-1`} placeholder="항목명" value={newName} onChange={(e) => setNewName(e.target.value)} />
            <input type="number" className={`${INPUT_CLASS} w-32`} placeholder="금액" value={newAmt || ""} onChange={(e) => setNewAmt(num(e.target.value))} />
            <button type="button" onClick={addItem} className="rounded-lg bg-neutral-900 px-3 py-2 text-sm text-white">추가</button>
          </div>
        </div>
      )}
      <Labeled label="인원">
        <input type="number" className={INPUT_CLASS} value={people} min={1} onChange={(e) => setPeople(Math.max(1, Math.floor(num(e.target.value))))} />
      </Labeled>
      <ResultPanel title="더치페이 계산" highlight={`1인당 약 ${won(perPerson)}원`}>
        <ResultRows rows={[
          { label: "합계", value: `${won(grandTotal)}원` },
          { label: "1인 부담 (내림)", value: `${won(Math.floor(perPerson))}원` },
          { label: "잔돈 (총액 - 내림×인원)", value: `${won(remainder)}원` },
        ]} />
      </ResultPanel>
    </Box>
  );
}

function TipForm() {
  const [bill, setBill] = useState(80_000);
  const [pct, setPct] = useState(10);
  const [n, setN] = useState(3);
  const TIP_PRESETS = [5, 10, 15, 18, 20];
  const tipAmt = bill * (pct / 100);
  const total = bill + tipAmt;
  const per = n <= 0 ? 0 : total / n;
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="식사금액(원)"><input type="number" className={INPUT_CLASS} value={bill} onChange={(e) => setBill(num(e.target.value))} /></Labeled>
        <Labeled label="팁(%)"><input type="number" className={INPUT_CLASS} value={pct} onChange={(e) => setPct(num(e.target.value))} /></Labeled>
        <div className="sm:col-span-2">
          <Labeled label="인원"><input type="number" className={INPUT_CLASS} value={n} min={1} onChange={(e) => setN(Math.max(1, Math.floor(num(e.target.value))))} /></Labeled>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {TIP_PRESETS.map((p) => (
          <button key={p} type="button" onClick={() => setPct(p)}
            className={`rounded-full border px-3 py-1 text-sm ${pct === p ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 hover:border-neutral-400"}`}>
            {p}%
          </button>
        ))}
      </div>
      <ResultPanel title="팁 계산 결과" highlight={`합계 ${won(total)}원`}>
        <ResultRows rows={[
          { label: "팁 금액", value: `${won(tipAmt)}원` },
          { label: "합계 (식사+팁)", value: `${won(total)}원` },
          { label: "1인 부담", value: `${won(per)}원` },
        ]} />
      </ResultPanel>
      <div className="rounded-xl border border-neutral-200 bg-white p-4">
        <p className="mb-3 text-sm font-semibold text-neutral-800">팁 비율 비교</p>
        <table className="w-full text-xs">
          <thead><tr className="bg-neutral-100">
            <th className="border border-neutral-200 px-2 py-2 text-left font-medium">팁 비율</th>
            <th className="border border-neutral-200 px-2 py-2 text-right font-medium">팁 금액</th>
            <th className="border border-neutral-200 px-2 py-2 text-right font-medium">합계</th>
            <th className="border border-neutral-200 px-2 py-2 text-right font-medium">1인 부담</th>
          </tr></thead>
          <tbody>
            {TIP_PRESETS.map((p) => {
              const t = bill * (p / 100); const tot = bill + t;
              return (
                <tr key={p} className={pct === p ? "bg-neutral-900 text-white" : "even:bg-neutral-50"}>
                  <td className="border border-neutral-200 px-2 py-1.5">{p}%</td>
                  <td className="border border-neutral-200 px-2 py-1.5 text-right">{won(t)}원</td>
                  <td className="border border-neutral-200 px-2 py-1.5 text-right">{won(tot)}원</td>
                  <td className="border border-neutral-200 px-2 py-1.5 text-right">{won(n > 0 ? tot / n : 0)}원</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Box>
  );
}

function PwForm() {
  const [len, setLen] = useState(16);
  const [pw, setPw] = useState("");
  const gen = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%";
    let s = "";
    const cryptoObj = globalThis.crypto;
    for (let i = 0; i < len; i++) {
      const x = cryptoObj ? cryptoObj.getRandomValues(new Uint32Array(1))[0]! : Math.floor(Math.random() * 1e9);
      s += chars[x % chars.length]!;
    }
    setPw(s);
  };
  return (
    <Box>
      <Labeled label="길이">
        <input type="number" className={INPUT_CLASS} value={len} onChange={(e) => setLen(Math.max(4, Math.min(64, Math.floor(num(e.target.value)))))} />
      </Labeled>
      <button type="button" className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white" onClick={gen}>
        생성
      </button>
      <ResultPanel title="생성 결과">
        <p className="mt-4 break-all font-mono text-sm text-neutral-900">{pw || "—"}</p>
      </ResultPanel>
    </Box>
  );
}

function UuidForm() {
  const [v, setV] = useState("");
  const gen = () => setV(crypto.randomUUID());
  return (
    <Box>
      <button type="button" className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white" onClick={gen}>
        UUID v4 생성
      </button>
      <ResultPanel title="생성 결과">
        <p className="mt-4 break-all font-mono text-sm text-neutral-900">{v || "—"}</p>
      </ResultPanel>
    </Box>
  );
}

function B64Form() {
  const [text, setText] = useState("hello");
  const enc = typeof window !== "undefined" ? btoa(unescape(encodeURIComponent(text))) : "";
  const dec = () => {
    try {
      return decodeURIComponent(escape(atob(text)));
    } catch {
      return "(decode error)";
    }
  };
  return (
    <Box>
      <Labeled label="텍스트">
        <textarea className={TEXTAREA_CLASS} rows={3} value={text} onChange={(e) => setText(e.target.value)} />
      </Labeled>
      <ResultPanel title="변환 결과">
        <div className="mt-4 space-y-2 text-sm">
          <p className="break-all">Base64: {enc}</p>
          <p className="break-all text-neutral-600">역(입력을 B64로 가정): {dec()}</p>
        </div>
      </ResultPanel>
    </Box>
  );
}

function UrlForm() {
  const [t, setT] = useState("한글 테스트");
  return (
    <Box>
      <textarea className={TEXTAREA_CLASS} rows={2} value={t} onChange={(e) => setT(e.target.value)} />
      <ResultPanel title="변환 결과">
        <div className="mt-4 space-y-2 text-sm break-all">
          <p>encode: {encodeURIComponent(t)}</p>
          <p className="text-neutral-600">
            decode: {(() => { try { return decodeURIComponent(t); } catch { return ""; } })()}
          </p>
        </div>
      </ResultPanel>
    </Box>
  );
}

function RadixForm() {
  const [n, setN] = useState("255");
  const [from, setFrom] = useState(10);
  const v10 = parseInt(n, from);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label={`숫자 문자열 (진수 ${from})`}>
          <input className={`${INPUT_CLASS} font-mono text-sm`} value={n} onChange={(e) => setN(e.target.value)} />
        </Labeled>
        <Labeled label="from 진수">
          <input type="number" className={INPUT_CLASS} value={from} onChange={(e) => setFrom(Math.min(36, Math.max(2, Math.floor(num(e.target.value)))))} />
        </Labeled>
      </div>
      <ResultPanel title="변환 결과">
        <div className="mt-4 space-y-2 font-mono text-sm">
          <p>10진: {Number.isFinite(v10) ? v10 : "NaN"}</p>
          <p>
            2진: {Number.isFinite(v10) ? v10.toString(2) : "-"} · 16진: {Number.isFinite(v10) ? v10.toString(16) : "-"}
          </p>
        </div>
      </ResultPanel>
    </Box>
  );
}

function JsonForm() {
  const [t, setT] = useState('{"a":1}');
  const err = useMemo(() => {
    try {
      JSON.parse(t);
      return "";
    } catch (err: unknown) {
      return String(err);
    }
  }, [t]);
  return (
    <Box>
      <textarea className={`${TEXTAREA_CLASS} font-mono text-xs`} rows={8} value={t} onChange={(e) => setT(e.target.value)} />
      <ResultPanel title="검증">
        <p className={`mt-4 text-sm ${err ? "text-red-600" : "text-green-700"}`}>{err ? err : "유효한 JSON"}</p>
      </ResultPanel>
    </Box>
  );
}

function LottoForm() {
  const [nums, setNums] = useState<number[]>([]);
  const draw = () => {
    const s = new Set<number>();
    const cryptoObj = globalThis.crypto;
    while (s.size < 6) {
      const x = cryptoObj ? cryptoObj.getRandomValues(new Uint32Array(1))[0]! : Math.floor(Math.random() * 1e9);
      s.add((x % 45) + 1);
    }
    setNums([...s].sort((a, b) => a - b));
  };
  return (
    <Box>
      <button type="button" className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white" onClick={draw}>
        6개 뽑기
      </button>
      <ResultPanel title="당첨 번호" highlight={nums.length ? nums.join(", ") : "—"} />
    </Box>
  );
}

function EdpiForm() {
  const [dpi, setDpi] = useState(800);
  const [sens, setSens] = useState(1.2);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="DPI">
          <input type="number" className={INPUT_CLASS} value={dpi} onChange={(e) => setDpi(num(e.target.value))} />
        </Labeled>
        <Labeled label="감도">
          <input type="number" className={INPUT_CLASS} value={sens} onChange={(e) => setSens(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과" highlight={`eDPI ≈ ${Math.round(dpi * sens)}`} />
    </Box>
  );
}

function CoinForm() {
  const [side, setSide] = useState("");
  const flip = () => setSide(Math.random() < 0.5 ? "앞" : "뒤");
  return (
    <Box>
      <button type="button" className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white" onClick={flip}>
        던지기
      </button>
      <ResultPanel title="결과" highlight={side || "—"} />
    </Box>
  );
}

function GachaForm() {
  const [p, setP] = useState(0.01);
  const [t, setT] = useState(100);
  const prob = 1 - Math.pow(1 - p, t);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="1회 성공 확률 p">
          <input type="number" step="0.001" className={INPUT_CLASS} value={p} onChange={(e) => setP(num(e.target.value))} />
        </Labeled>
        <Labeled label="시도 횟수">
          <input type="number" className={INPUT_CLASS} value={t} onChange={(e) => setT(Math.max(1, Math.floor(num(e.target.value))))} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과" highlight={`최소 1회 성공 확률 ${(prob * 100).toFixed(4)}%`} />
    </Box>
  );
}

function haversine(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371;
  const toR = (d: number) => (d * Math.PI) / 180;
  const dLat = toR(lat2 - lat1);
  const dLon = toR(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toR(lat1)) * Math.cos(toR(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

function HaversineForm() {
  const [la, setLa] = useState(37.5665);
  const [lo, setLo] = useState(126.978);
  const [lb, setLb] = useState(35.1796);
  const [lob, setLob] = useState(129.0756);
  const d = haversine(la, lo, lb, lob);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="위도 A">
          <input type="number" className={INPUT_CLASS} value={la} onChange={(e) => setLa(num(e.target.value))} />
        </Labeled>
        <Labeled label="경도 A">
          <input type="number" className={INPUT_CLASS} value={lo} onChange={(e) => setLo(num(e.target.value))} />
        </Labeled>
        <Labeled label="위도 B">
          <input type="number" className={INPUT_CLASS} value={lb} onChange={(e) => setLb(num(e.target.value))} />
        </Labeled>
        <Labeled label="경도 B">
          <input type="number" className={INPUT_CLASS} value={lob} onChange={(e) => setLob(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과" highlight={`대략 거리 ${d.toFixed(2)} km`} />
    </Box>
  );
}

function FuelForm() {
  const [efficiency, setEfficiency] = useState(12);
  const [fuelPrice, setFuelPrice] = useState(1700);
  const [distance, setDistance] = useState(100);
  const { litersNeeded, tripCost, costPerKm } = useMemo(() => {
    const litersNeeded = efficiency > 0 ? distance / efficiency : 0;
    return { litersNeeded, tripCost: litersNeeded * fuelPrice, costPerKm: efficiency > 0 ? fuelPrice / efficiency : 0 };
  }, [efficiency, fuelPrice, distance]);
  const PRICE_COMPARE = [1500, 1600, 1700, 1800, 1900];
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="연비(km/L)"><input type="number" className={INPUT_CLASS} value={efficiency} onChange={(e) => setEfficiency(num(e.target.value))} /></Labeled>
        <Labeled label="유가(원/L)"><input type="number" className={INPUT_CLASS} value={fuelPrice} onChange={(e) => setFuelPrice(num(e.target.value))} /></Labeled>
        <div className="sm:col-span-2">
          <Labeled label="이동거리(km)"><input type="number" className={INPUT_CLASS} value={distance} onChange={(e) => setDistance(num(e.target.value))} /></Labeled>
        </div>
      </div>
      <ResultPanel title="연료비 계산" highlight={`예상 연료비 ${won(tripCost)}원`}>
        <ResultRows rows={[
          { label: "필요 연료", value: `${litersNeeded.toFixed(2)} L` },
          { label: "예상 연료비", value: `${won(tripCost)}원` },
          { label: "km당 비용", value: `${won(costPerKm)}원/km` },
        ]} />
      </ResultPanel>
      <div className="rounded-xl border border-neutral-200 bg-white p-4">
        <p className="mb-3 text-sm font-semibold text-neutral-800">유가별 {distance}km 비용 비교</p>
        <table className="w-full text-xs">
          <thead><tr className="bg-neutral-100">
            <th className="border border-neutral-200 px-3 py-2 text-left font-medium">유가(원/L)</th>
            <th className="border border-neutral-200 px-3 py-2 text-right font-medium">예상 연료비</th>
          </tr></thead>
          <tbody>
            {PRICE_COMPARE.map((p) => (
              <tr key={p} className={p === fuelPrice ? "bg-neutral-900 text-white" : "even:bg-neutral-50"}>
                <td className="border border-neutral-200 px-3 py-1.5">{won(p)}원</td>
                <td className="border border-neutral-200 px-3 py-1.5 text-right">{won(efficiency > 0 ? (distance / efficiency) * p : 0)}원</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  );
}

function ElecForm() {
  const [kwh, setKwh] = useState(300);
  const result = useMemo(() => {
    // 주택용 저압 (2024 한전 기준)
    const TIERS = [
      { limit: 200, rate: 88.3, base: 910 },
      { limit: 400, rate: 182.9, base: 1600 },
      { limit: Infinity, rate: 275.6, base: 7300 },
    ];
    let tierIdx = kwh <= 200 ? 0 : kwh <= 400 ? 1 : 2;
    const baseFee = TIERS[tierIdx]!.base;
    // 전력량 요금 (누진 구간별 합산)
    let energyFee = 0;
    let remaining = kwh;
    const tierBreakdown: { label: string; kwh: number; fee: number }[] = [];
    for (const tier of TIERS) {
      if (remaining <= 0) break;
      const prevLimit = tier === TIERS[0] ? 0 : tier === TIERS[1] ? 200 : 400;
      const tierKwh = Math.min(remaining, tier.limit - prevLimit);
      const tierFee = tierKwh * tier.rate;
      energyFee += tierFee;
      tierBreakdown.push({ label: tier.limit === Infinity ? "401kWh~" : `~${tier.limit}kWh`, kwh: tierKwh, fee: tierFee });
      remaining -= tierKwh;
    }
    const vat = Math.round(energyFee * 0.1);
    const fund = Math.round(energyFee * 0.037);
    const total = baseFee + energyFee + vat + fund;
    return { baseFee, energyFee, vat, fund, total, tierBreakdown };
  }, [kwh]);
  return (
    <Box>
      <Labeled label="월 사용량(kWh)">
        <input type="number" className={INPUT_CLASS} value={kwh} min={0} onChange={(e) => setKwh(Math.max(0, num(e.target.value)))} />
      </Labeled>
      <ResultPanel title="전기요금 계산" subtitle="주택용 저압 기준 (2024 한전 누진제) · 실제 고지와 다를 수 있습니다" highlight={`총 청구금액 약 ${won(result.total)}원`}>
        <ResultRows rows={[
          { label: "기본요금", value: `${won(result.baseFee)}원` },
          { label: "전력량 요금", value: `${won(result.energyFee)}원` },
          { label: "부가세 (10%)", value: `${won(result.vat)}원` },
          { label: "전력산업기반기금 (3.7%)", value: `${won(result.fund)}원` },
          { label: "총 청구금액", value: `${won(result.total)}원` },
        ]} />
        <div className="mt-6">
          <p className="mb-2 text-xs font-medium text-neutral-700">구간별 전력량 요금 내역</p>
          <table className="w-full text-xs">
            <thead><tr className="bg-neutral-100">
              <th className="border border-neutral-200 px-3 py-2 text-left font-medium">구간</th>
              <th className="border border-neutral-200 px-3 py-2 text-right font-medium">사용량</th>
              <th className="border border-neutral-200 px-3 py-2 text-right font-medium">요금</th>
            </tr></thead>
            <tbody>
              {result.tierBreakdown.filter((t) => t.kwh > 0).map((t) => (
                <tr key={t.label} className="even:bg-neutral-50">
                  <td className="border border-neutral-200 px-3 py-1.5">{t.label}</td>
                  <td className="border border-neutral-200 px-3 py-1.5 text-right">{t.kwh.toFixed(0)} kWh</td>
                  <td className="border border-neutral-200 px-3 py-1.5 text-right">{won(t.fee)}원</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ResultPanel>
    </Box>
  );
}

function CharForm({ neisMode }: { neisMode: boolean }) {
  const [t, setT] = useState("안녕하세요.");
  const bytes = new TextEncoder().encode(t).length;
  return (
    <Box>
      <textarea className={TEXTAREA_CLASS} rows={6} value={t} onChange={(e) => setT(e.target.value)} />
      <ResultPanel title="집계">
        <ResultRows
          rows={[
            { label: "글자 수", value: String(t.length) },
            { label: "바이트(UTF-8)", value: String(bytes) },
          ]}
        />
        {neisMode ? <p className="mt-4 text-xs text-neutral-500">NEIS는 바이트/공백 규칙이 별도입니다.</p> : null}
      </ResultPanel>
    </Box>
  );
}

function HashShaForm() {
  const [text, setText] = useState("hello");
  const [hash, setHash] = useState("");
  const run = async () => {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    setHash([...new Uint8Array(buf)].map((x) => x.toString(16).padStart(2, "0")).join(""));
  };
  return (
    <Box>
      <textarea className={TEXTAREA_CLASS} rows={3} value={text} onChange={(e) => setText(e.target.value)} />
      <button type="button" className="mt-2 rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white" onClick={run}>
        SHA-256
      </button>
      <ResultPanel title="해시 결과">
        <p className="mt-4 break-all font-mono text-xs text-neutral-900">{hash || "—"}</p>
      </ResultPanel>
    </Box>
  );
}

function RegexForm() {
  const [pat, setPat] = useState("\\d+");
  const [s, setS] = useState("abc 123");
  const m = useMemo(() => {
    try {
      const r = new RegExp(pat, "g");
      return s.match(r);
    } catch {
      return null;
    }
  }, [pat, s]);
  return (
    <Box>
      <Labeled label="패턴">
        <input className={`${INPUT_CLASS} font-mono text-sm`} value={pat} onChange={(e) => setPat(e.target.value)} />
      </Labeled>
      <textarea className={TEXTAREA_CLASS} rows={3} value={s} onChange={(e) => setS(e.target.value)} />
      <ResultPanel title="매치 결과">
        <p className="mt-4 text-sm">{m ? m.join(", ") : "오류 또는 없음"}</p>
      </ResultPanel>
    </Box>
  );
}

function ColorForm() {
  const [hex, setHex] = useState("#3366cc");
  const rgb = useMemo(() => {
    const h = hex.replace("#", "");
    if (h.length !== 6) return null;
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return { r, g, b };
  }, [hex]);
  return (
    <Box>
      <Labeled label="HEX">
        <input className={`${INPUT_CLASS} font-mono`} value={hex} onChange={(e) => setHex(e.target.value)} />
      </Labeled>
      <ResultPanel title="RGB" highlight={rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : "형식: #RRGGBB"} />
    </Box>
  );
}

function ipToInt(ip: string) {
  const p = ip.split(".").map((x) => Number(x));
  if (p.length !== 4 || p.some((n) => !Number.isFinite(n) || n < 0 || n > 255)) return null;
  return ((p[0]! << 24) >>> 0) + (p[1]! << 16) + (p[2]! << 8) + p[3]!;
}

function intToIp(n: number): string {
  return [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join(".");
}

function SubnetForm() {
  const [ip, setIp] = useState("192.168.1.10");
  const [cidr, setCidr] = useState(24);
  const info = useMemo(() => {
    const host = ipToInt(ip);
    if (host === null) return null;
    const mask = cidr === 0 ? 0 : (~0 << (32 - cidr)) >>> 0;
    const network = (host & mask) >>> 0;
    const broadcast = (network | (~mask >>> 0)) >>> 0;
    const hostCount = cidr >= 31 ? Math.pow(2, 32 - cidr) : Math.max(0, Math.pow(2, 32 - cidr) - 2);
    return {
      networkDot: intToIp(network),
      broadcastDot: intToIp(broadcast),
      maskDot: intToIp(mask),
      hostCount,
      firstHost: cidr < 31 ? intToIp(network + 1) : intToIp(network),
      lastHost: cidr < 31 ? intToIp(broadcast - 1) : intToIp(broadcast),
    };
  }, [ip, cidr]);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="IPv4 주소">
          <input className={`${INPUT_CLASS} font-mono text-sm`} value={ip} onChange={(e) => setIp(e.target.value)} placeholder="192.168.1.10" />
        </Labeled>
        <Labeled label="프리픽스 길이 /CIDR (0–32)">
          <input type="number" className={INPUT_CLASS} value={cidr} min={0} max={32} onChange={(e) => setCidr(Math.min(32, Math.max(0, Math.floor(num(e.target.value)))))} />
        </Labeled>
      </div>
      {info ? (
        <ResultPanel title="서브넷 계산 결과">
          <ResultRows rows={[
            { label: "네트워크 주소", value: info.networkDot },
            { label: "브로드캐스트 주소", value: info.broadcastDot },
            { label: "서브넷 마스크", value: info.maskDot },
            { label: "사용 가능 호스트 수", value: info.hostCount.toLocaleString("ko-KR") + "개" },
            { label: "첫 번째 호스트", value: info.firstHost },
            { label: "마지막 호스트", value: info.lastHost },
          ]} />
        </ResultPanel>
      ) : (
        <ResultPanel title="계산 결과">
          <p className="mt-4 text-sm text-red-500">IPv4 주소 형식이 올바르지 않습니다 (예: 192.168.1.10)</p>
        </ResultPanel>
      )}
    </Box>
  );
}

function ApiKeyForm() {
  const [k, setK] = useState("");
  const gen = () => {
    const a = [...crypto.getRandomValues(new Uint8Array(24))].map((x) => x.toString(16).padStart(2, "0")).join("");
    setK(a);
  };
  return (
    <Box>
      <button type="button" className="rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white" onClick={gen}>
        생성(48 hex)
      </button>
      <ResultPanel title="키">
        <p className="mt-4 break-all font-mono text-xs text-neutral-900">{k || "—"}</p>
      </ResultPanel>
    </Box>
  );
}

function CaesarForm() {
  const [t, setT] = useState("Hello");
  const [shift, setShift] = useState(3);
  const enc = t.replace(/[a-zA-Z]/g, (ch) => {
    const base = ch <= "Z" ? 65 : 97;
    return String.fromCharCode((((ch.charCodeAt(0) - base + shift) % 26) + 26) % 26 + base);
  });
  return (
    <Box>
      <textarea className={TEXTAREA_CLASS} rows={2} value={t} onChange={(e) => setT(e.target.value)} />
      <Labeled label="시프트">
        <input type="number" className={INPUT_CLASS} value={shift} onChange={(e) => setShift(Math.floor(num(e.target.value)))} />
      </Labeled>
      <ResultPanel title="암호문">
        <p className="mt-4 font-mono text-sm text-neutral-900">{enc}</p>
      </ResultPanel>
    </Box>
  );
}

const MORSE: Record<string, string> = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

function MorseForm() {
  const [t, setT] = useState("SOS");
  const up = t.toUpperCase().replace(/[^A-Z\s]/g, "");
  const out = [...up].map((c) => (c === " " ? "/" : MORSE[c] ?? "?")).join(" ");
  return (
    <Box>
      <textarea className={TEXTAREA_CLASS} rows={2} value={t} onChange={(e) => setT(e.target.value)} />
      <ResultPanel title="모스 부호">
        <p className="mt-4 font-mono text-sm text-neutral-900">{out}</p>
      </ResultPanel>
    </Box>
  );
}

function PaceForm() {
  const [min, setMin] = useState(5);
  const [sec, setSec] = useState(30);
  const [dist, setDist] = useState(5);
  const paceSec = min * 60 + sec;
  const speed = paceSec > 0 ? dist / (paceSec / 3600) : 0;
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="페이스 분">
          <input type="number" className={INPUT_CLASS} value={min} onChange={(e) => setMin(num(e.target.value))} />
        </Labeled>
        <Labeled label="페이스 초">
          <input type="number" className={INPUT_CLASS} value={sec} onChange={(e) => setSec(num(e.target.value))} />
        </Labeled>
        <div className="sm:col-span-2">
          <Labeled label="거리 km">
            <input type="number" className={INPUT_CLASS} value={dist} onChange={(e) => setDist(num(e.target.value))} />
          </Labeled>
        </div>
      </div>
      <ResultPanel title="계산 결과" highlight={`평균 속도 약 ${speed.toFixed(2)} km/h`} />
    </Box>
  );
}

function EraForm() {
  const [er, setEr] = useState(20);
  const [ip, setIp] = useState(120);
  // IP 소수점 표기 변환: 5.1 = 5이닝 1아웃 = 5 + 1/3 이닝, 5.2 = 5 + 2/3 이닝
  // 아웃 자리(소수점 이하)가 0~2 범위여야 유효 (3은 다음 이닝)
  const ipInt = Math.floor(ip);
  const ipOut = Math.round((ip - ipInt) * 10); // 0, 1, 2
  const actualIp = ipInt + (ipOut / 3);
  const era = actualIp > 0 ? (er * 9) / actualIp : 0;
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="자책점 ER">
          <input type="number" className={INPUT_CLASS} value={er} onChange={(e) => setEr(num(e.target.value))} />
        </Labeled>
        <Labeled label="이닝 IP (소수점 표기: 5.1=5⅓이닝, 5.2=5⅔이닝)">
          <input type="number" step="0.1" className={INPUT_CLASS} value={ip} onChange={(e) => setIp(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과" highlight={`ERA 약 ${era.toFixed(2)}`} subtitle={`실제 이닝: ${actualIp.toFixed(3)}`} />
    </Box>
  );
}

function BattingForm() {
  const [h, setH] = useState(150);
  const [ab, setAb] = useState(500);
  const [doubles, setDoubles] = useState(30);
  const [triples, setTriples] = useState(5);
  const [hr, setHr] = useState(20);
  const [bb, setBb] = useState(50);
  const [hbp, setHbp] = useState(5);
  const [sf, setSf] = useState(5);

  const singles = Math.max(0, h - doubles - triples - hr);
  const avg = ab > 0 ? h / ab : 0;
  const obpDenom = ab + bb + hbp + sf;
  const obp = obpDenom > 0 ? (h + bb + hbp) / obpDenom : 0;
  const slg = ab > 0 ? (singles + 2 * doubles + 3 * triples + 4 * hr) / ab : 0;
  const ops = obp + slg;

  return (
    <Box>
      <p className="mb-4 text-sm text-neutral-500">타격 스탯을 입력하면 타율·출루율·장타율·OPS를 계산합니다.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Labeled label="안타 H">
          <input type="number" min={0} className={INPUT_CLASS} value={h} onChange={(e) => setH(num(e.target.value))} />
        </Labeled>
        <Labeled label="타수 AB">
          <input type="number" min={0} className={INPUT_CLASS} value={ab} onChange={(e) => setAb(num(e.target.value))} />
        </Labeled>
        <Labeled label="2루타 2B">
          <input type="number" min={0} className={INPUT_CLASS} value={doubles} onChange={(e) => setDoubles(num(e.target.value))} />
        </Labeled>
        <Labeled label="3루타 3B">
          <input type="number" min={0} className={INPUT_CLASS} value={triples} onChange={(e) => setTriples(num(e.target.value))} />
        </Labeled>
        <Labeled label="홈런 HR">
          <input type="number" min={0} className={INPUT_CLASS} value={hr} onChange={(e) => setHr(num(e.target.value))} />
        </Labeled>
        <Labeled label="볼넷 BB">
          <input type="number" min={0} className={INPUT_CLASS} value={bb} onChange={(e) => setBb(num(e.target.value))} />
        </Labeled>
        <Labeled label="사구 HBP">
          <input type="number" min={0} className={INPUT_CLASS} value={hbp} onChange={(e) => setHbp(num(e.target.value))} />
        </Labeled>
        <Labeled label="희생플라이 SF">
          <input type="number" min={0} className={INPUT_CLASS} value={sf} onChange={(e) => setSf(num(e.target.value))} />
        </Labeled>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-center">
          <p className="text-xs text-neutral-500">타율 AVG</p>
          <p className="mt-1 text-2xl font-bold text-blue-600">{avg.toFixed(3)}</p>
          <p className="mt-0.5 text-xs text-neutral-400">H / AB</p>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-center">
          <p className="text-xs text-neutral-500">출루율 OBP</p>
          <p className="mt-1 text-2xl font-bold text-blue-600">{obp.toFixed(3)}</p>
          <p className="mt-0.5 text-xs text-neutral-400">(H+BB+HBP) / (AB+BB+HBP+SF)</p>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-center">
          <p className="text-xs text-neutral-500">장타율 SLG</p>
          <p className="mt-1 text-2xl font-bold text-blue-600">{slg.toFixed(3)}</p>
          <p className="mt-0.5 text-xs text-neutral-400">루타합계 / AB (1B×1 + 2B×2 + 3B×3 + HR×4)</p>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-center">
          <p className="text-xs text-neutral-500">OPS</p>
          <p className="mt-1 text-2xl font-bold text-green-600">{ops.toFixed(3)}</p>
          <p className="mt-0.5 text-xs text-neutral-400">OBP + SLG</p>
        </div>
      </div>
      {singles < 0 && (
        <p className="mt-3 text-sm text-red-500">⚠ 2루타+3루타+홈런 합계가 안타 수를 초과합니다. 값을 확인해 주세요.</p>
      )}
    </Box>
  );
}

function FovForm() {
  const [sensor, setSensor] = useState(36);
  const [focal, setFocal] = useState(50);
  const h = 2 * Math.atan(sensor / (2 * focal)) * (180 / Math.PI);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="센서 가로(mm)">
          <input type="number" className={INPUT_CLASS} value={sensor} onChange={(e) => setSensor(num(e.target.value))} />
        </Labeled>
        <Labeled label="초점거리(mm)">
          <input type="number" className={INPUT_CLASS} value={focal} onChange={(e) => setFocal(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과" subtitle="근사값입니다." highlight={`수평 시야각 약 ${h.toFixed(2)}°`} />
    </Box>
  );
}

function addCalendarMonths(iso: string, months: number): string {
  const [ys, ms, ds] = iso.split("-");
  const y = parseInt(ys ?? "0", 10);
  const m = parseInt(ms ?? "1", 10);
  const d = parseInt(ds ?? "1", 10);
  if (!y || !m) return iso;
  const nd = new Date(y, m - 1 + months, d);
  const yy = nd.getFullYear();
  const mm = String(nd.getMonth() + 1).padStart(2, "0");
  const dd = String(nd.getDate()).padStart(2, "0");
  return `${yy}-${mm}-${dd}`;
}

type WRow = { name: string; score: number; weight: number };

function AirForceWeightedScoreForm() {
  const [rows, setRows] = useState<WRow[]>([
    { name: "체력(유산소)", score: 80, weight: 25 },
    { name: "근력·근지구력", score: 75, weight: 25 },
    { name: "순발력", score: 70, weight: 25 },
    { name: "면접·인성", score: 85, weight: 25 },
  ]);
  const { wSum, mean } = useMemo(() => {
    let sW = 0;
    let acc = 0;
    for (const r of rows) {
      const w = Math.max(0, r.weight);
      sW += w;
      acc += r.score * w;
    }
    return { wSum: sW, mean: sW > 0 ? acc / sW : 0 };
  }, [rows]);
  return (
    <Box>
      <p className="text-sm text-neutral-600">
        항목명·원점수·가중치(%)를 직접 맞춥니다. 실제 모집 표준점수·환산 방식과 다를 수 있습니다.
      </p>
      <div className="space-y-4">
        {rows.map((r, i) => (
          <div key={i} className="grid gap-3 rounded-lg border border-neutral-200 p-3 sm:grid-cols-2">
            <Labeled label="항목">
              <input
                type="text"
                className={INPUT_CLASS}
                value={r.name}
                onChange={(e) => {
                  const next = [...rows];
                  next[i] = { ...next[i], name: e.target.value };
                  setRows(next);
                }}
              />
            </Labeled>
            <Labeled label="점수">
              <input
                type="number"
                className={INPUT_CLASS}
                value={r.score}
                onChange={(e) => {
                  const next = [...rows];
                  next[i] = { ...next[i], score: num(e.target.value) };
                  setRows(next);
                }}
              />
            </Labeled>
            <Labeled label="가중치">
              <input
                type="number"
                className={INPUT_CLASS}
                value={r.weight}
                onChange={(e) => {
                  const next = [...rows];
                  next[i] = { ...next[i], weight: num(e.target.value) };
                  setRows(next);
                }}
              />
            </Labeled>
          </div>
        ))}
      </div>
      <ResultPanel
        title="가중 평균(참고)"
        subtitle="가중치 합이 100이 아니어도 비율로 환산됩니다."
        highlight={wSum > 0 ? mean.toFixed(2) : "—"}
      />
    </Box>
  );
}

function MarineClassEstimateForm() {
  const [d, setD] = useState("2026-03-01");
  // 참고: 해병대 1기(1949년 창설), 2024년 기준 약 480기 수준으로 알려져 있음
  // 연간 약 6기 편성(격월) 기준으로 추정
  const REF_YEAR = 2024;
  const REF_CYCLE = 480;
  const CYCLES_PER_YEAR = 6; // 약 격월

  const info = useMemo(() => {
    if (!d) return null;
    const dt = new Date(`${d}T12:00:00`);
    if (Number.isNaN(dt.getTime())) return null;
    const year = dt.getFullYear();
    const month = dt.getMonth() + 1; // 1~12
    if (year < 1949) return null;
    // 해당 연도·월 기준 기수 추정
    const yearDiff = year - REF_YEAR;
    const cycleInYear = Math.floor((month - 1) / (12 / CYCLES_PER_YEAR)); // 0~5
    const estimated = REF_CYCLE + yearDiff * CYCLES_PER_YEAR + cycleInYear;
    return { year, month, day: dt.getDate(), estimated };
  }, [d]);

  return (
    <Box>
      <Labeled label="입대 예정일">
        <input type="date" className={INPUT_CLASS} value={d} onChange={(e) => setD(e.target.value)} />
      </Labeled>
      <ResultPanel
        title="기수 추정 결과"
        highlight={info ? `약 ${info.estimated}기` : "—"}
        subtitle="연간 6기 편성 기준 추정값으로, 실제 기수와 다를 수 있습니다."
      >
        <ResultRows rows={[
          { label: "입대 연도·월", value: info ? `${info.year}년 ${info.month}월` : "—" },
          { label: "추정 기수", value: info ? `약 ${info.estimated}기` : "—" },
          { label: "안내", value: "공식 기수는 입영 통지서 또는 해병대 사령부 확인 필요" },
        ]} />
      </ResultPanel>
    </Box>
  );
}

function DischargeDateEstimateForm() {
  const [enlist, setEnlist] = useState("2026-03-18");
  const [months, setMonths] = useState(18);
  const out = useMemo(() => {
    if (!enlist) return "";
    return addCalendarMonths(enlist, Math.max(0, Math.floor(months)));
  }, [enlist, months]);
  return (
    <Box>
      <Labeled label="입대일">
        <input type="date" className={INPUT_CLASS} value={enlist} onChange={(e) => setEnlist(e.target.value)} />
      </Labeled>
      <Labeled label="복무 개월 수">
        <input
          type="number"
          className={INPUT_CLASS}
          value={months}
          onChange={(e) => setMonths(Math.max(0, Math.floor(num(e.target.value))))}
        />
      </Labeled>
      <div className="flex flex-wrap gap-2">
        {[18, 20, 21].map((m) => (
          <button
            key={m}
            type="button"
            className="rounded-full border px-3 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50"
            onClick={() => setMonths(m)}
          >
            {m}개월
          </button>
        ))}
      </div>
      <ResultPanel
        title="전역 예정일(달력 가산)"
        subtitle="휴가·편성·감면 일수는 반영하지 않습니다."
        highlight={out || "—"}
      />
    </Box>
  );
}

type BFrame = { r1: number; r2: number; r3: number };

function getBowlingBalls(frames: BFrame[]): number[] {
  const balls: number[] = [];
  for (let i = 0; i < 9; i++) {
    const f = frames[i]!;
    balls.push(f.r1);
    if (f.r1 < 10) balls.push(f.r2);
  }
  const f10 = frames[9]!;
  balls.push(f10.r1, f10.r2);
  if (f10.r1 >= 10 || f10.r1 + f10.r2 >= 10) balls.push(f10.r3);
  return balls;
}

function calcBowlingScores(frames: BFrame[]): { frameScores: (number | null)[]; cumulative: (number | null)[]; total: number } {
  const balls = getBowlingBalls(frames);
  const frameScores: (number | null)[] = [];
  const cumulative: (number | null)[] = [];
  let ballIdx = 0;
  let runningTotal = 0;

  for (let i = 0; i < 9; i++) {
    const b0 = balls[ballIdx] ?? 0;
    const b1 = balls[ballIdx + 1] ?? 0;
    const b2 = balls[ballIdx + 2] ?? 0;
    if (b0 >= 10) {
      // strike: need 2 more balls to score — show null if not available yet
      if (balls.length > ballIdx + 2) {
        frameScores.push(10 + b1 + b2);
        runningTotal += 10 + b1 + b2;
        cumulative.push(runningTotal);
      } else {
        frameScores.push(null);
        cumulative.push(null);
      }
      ballIdx += 1;
    } else if (b0 + b1 >= 10) {
      // spare: need 1 more ball
      if (balls.length > ballIdx + 2) {
        frameScores.push(10 + b2);
        runningTotal += 10 + b2;
        cumulative.push(runningTotal);
      } else {
        frameScores.push(null);
        cumulative.push(null);
      }
      ballIdx += 2;
    } else {
      frameScores.push(b0 + b1);
      runningTotal += b0 + b1;
      cumulative.push(runningTotal);
      ballIdx += 2;
    }
  }

  // 10th frame
  const f10 = frames[9]!;
  const needsR3 = f10.r1 >= 10 || f10.r1 + f10.r2 >= 10;
  const f10score = f10.r1 + f10.r2 + (needsR3 ? f10.r3 : 0);
  frameScores.push(f10score);
  runningTotal += f10score;
  cumulative.push(runningTotal);

  return { frameScores, cumulative, total: runningTotal };
}

function BowlingPinSumForm() {
  const [frames, setFrames] = useState<BFrame[]>(() =>
    Array.from({ length: 10 }, () => ({ r1: 0, r2: 0, r3: 0 }))
  );

  const { frameScores, cumulative, total } = useMemo(() => calcBowlingScores(frames), [frames]);

  const updateFrame = (i: number, field: keyof BFrame, raw: number) => {
    const next = frames.map((f) => ({ ...f }));
    const f = next[i]!;
    if (i < 9) {
      if (field === "r1") {
        const v = Math.min(10, Math.max(0, Math.round(raw)));
        f.r1 = v;
        if (v >= 10) f.r2 = 0;
        else f.r2 = Math.min(10 - v, f.r2);
      } else if (field === "r2") {
        f.r2 = Math.min(10 - f.r1, Math.max(0, Math.round(raw)));
      }
    } else {
      // 10th frame
      if (field === "r1") {
        const v = Math.min(10, Math.max(0, Math.round(raw)));
        f.r1 = v;
        if (v < 10) { f.r2 = Math.min(10 - v, f.r2); f.r3 = 0; }
      } else if (field === "r2") {
        const maxR2 = f.r1 >= 10 ? 10 : 10 - f.r1;
        f.r2 = Math.min(maxR2, Math.max(0, Math.round(raw)));
        if (f.r1 < 10 && f.r1 + f.r2 < 10) f.r3 = 0;
      } else if (field === "r3") {
        const needsR3 = f.r1 >= 10 || f.r1 + f.r2 >= 10;
        if (needsR3) {
          let maxR3 = 10;
          if (f.r1 >= 10 && f.r2 >= 10) maxR3 = 10;
          else if (f.r1 >= 10) maxR3 = 10 - f.r2;
          f.r3 = Math.min(maxR3, Math.max(0, Math.round(raw)));
        }
      }
    }
    setFrames(next);
  };

  return (
    <Box>
      <p className="mb-3 text-sm text-neutral-500">스트라이크·스페어 가점을 포함한 실제 볼링 점수를 계산합니다.</p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-xs">
          <thead>
            <tr className="border-b border-neutral-200 text-neutral-500">
              <th className="pb-1 pr-2 text-left font-normal">프레임</th>
              <th className="pb-1 px-1 font-normal">1구</th>
              <th className="pb-1 px-1 font-normal">2구</th>
              <th className="pb-1 px-1 font-normal">3구</th>
              <th className="pb-1 px-1 font-normal">프레임 점수</th>
              <th className="pb-1 pl-1 font-normal">누계</th>
            </tr>
          </thead>
          <tbody>
            {frames.map((f, i) => {
              const is10th = i === 9;
              const isStrike = f.r1 >= 10;
              const isSpare = !isStrike && f.r1 + f.r2 >= 10;
              const needsR3 = is10th && (isStrike || isSpare);
              const fscore = frameScores[i];
              const cum = cumulative[i];
              return (
                <tr key={i} className="border-b border-neutral-100">
                  <td className="py-2 pr-2 text-neutral-500">{i + 1}F{is10th ? " (10)" : ""}</td>
                  <td className="py-2 px-1">
                    <input type="number" min={0} max={10}
                      className="w-14 rounded border border-neutral-200 px-2 py-1 text-center text-sm"
                      value={f.r1}
                      onChange={(e) => updateFrame(i, "r1", num(e.target.value))} />
                  </td>
                  <td className="py-2 px-1">
                    <input type="number" min={0} max={is10th && isStrike ? 10 : 10 - f.r1}
                      className="w-14 rounded border border-neutral-200 px-2 py-1 text-center text-sm disabled:bg-neutral-100"
                      value={f.r2}
                      disabled={!is10th && isStrike}
                      onChange={(e) => updateFrame(i, "r2", num(e.target.value))} />
                  </td>
                  <td className="py-2 px-1">
                    {needsR3 ? (
                      <input type="number" min={0} max={10}
                        className="w-14 rounded border border-neutral-200 px-2 py-1 text-center text-sm"
                        value={f.r3}
                        onChange={(e) => updateFrame(i, "r3", num(e.target.value))} />
                    ) : (
                      <span className="pl-4 text-neutral-300">—</span>
                    )}
                  </td>
                  <td className="py-2 px-1 text-center font-medium">
                    {fscore !== null ? (
                      <span className={isStrike ? "text-blue-600" : isSpare ? "text-green-600" : ""}>
                        {fscore}{isStrike && !is10th ? " ★" : isSpare && !is10th ? " /" : ""}
                      </span>
                    ) : <span className="text-neutral-300">—</span>}
                  </td>
                  <td className="py-2 pl-1 text-right font-medium">
                    {cum !== null ? cum : <span className="text-neutral-300">—</span>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ResultPanel title="최종 점수" highlight={`${total}점`} subtitle="스트라이크/스페어 앞 프레임 점수는 다음 투구 입력 후 확정됩니다." />
    </Box>
  );
}

function CurlingEndSumForm() {
  const [endCount, setEndCount] = useState(10);
  const [teamA, setTeamA] = useState(() => Array.from({ length: 10 }, () => 0));
  const [teamB, setTeamB] = useState(() => Array.from({ length: 10 }, () => 0));

  const totalA = teamA.slice(0, endCount).reduce((a, b) => a + b, 0);
  const totalB = teamB.slice(0, endCount).reduce((a, b) => a + b, 0);
  const winner = totalA > totalB ? "A팀 승" : totalB > totalA ? "B팀 승" : "무승부";
  const winnerColor = totalA > totalB ? "text-blue-600" : totalB > totalA ? "text-red-500" : "text-neutral-500";

  const updateScore = (team: "A" | "B", i: number, val: number) => {
    const v = Math.max(0, Math.floor(val));
    if (team === "A") {
      const next = [...teamA]; next[i] = v; setTeamA(next);
    } else {
      const next = [...teamB]; next[i] = v; setTeamB(next);
    }
  };

  return (
    <Box>
      <div className="mb-4 flex items-center gap-3">
        <span className="text-sm text-neutral-600">엔드 수:</span>
        {([8, 10] as const).map((n) => (
          <button key={n} type="button"
            className={`rounded-full border px-3 py-1 text-sm ${endCount === n ? "bg-neutral-900 text-white" : ""}`}
            onClick={() => setEndCount(n)}>{n}엔드</button>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] text-sm">
          <thead>
            <tr className="border-b border-neutral-200 text-xs text-neutral-500">
              <th className="pb-1 pr-2 text-left font-normal">팀</th>
              {Array.from({ length: endCount }, (_, i) => (
                <th key={i} className="pb-1 px-1 font-normal text-center">{i + 1}</th>
              ))}
              <th className="pb-1 pl-2 font-medium text-center">합계</th>
            </tr>
          </thead>
          <tbody>
            {(["A", "B"] as const).map((team) => {
              const scores = team === "A" ? teamA : teamB;
              const total = team === "A" ? totalA : totalB;
              return (
                <tr key={team} className="border-b border-neutral-100">
                  <td className={`py-2 pr-2 font-semibold ${team === "A" ? "text-blue-600" : "text-red-500"}`}>{team}팀</td>
                  {Array.from({ length: endCount }, (_, i) => (
                    <td key={i} className="py-2 px-1">
                      <input type="number" min={0}
                        className="w-12 rounded border border-neutral-200 px-1 py-1 text-center text-sm"
                        value={scores[i] ?? 0}
                        onChange={(e) => updateScore(team, i, num(e.target.value))} />
                    </td>
                  ))}
                  <td className={`py-2 pl-2 text-center text-base font-bold ${team === "A" ? "text-blue-600" : "text-red-500"}`}>{total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ResultPanel title="결과">
        <div className={`mt-4 text-center text-2xl font-bold ${winnerColor}`}>{winner}</div>
        <ResultRows rows={[
          { label: "A팀 총점", value: `${totalA}점` },
          { label: "B팀 총점", value: `${totalB}점` },
          { label: "점수 차", value: `${Math.abs(totalA - totalB)}점` },
        ]} />
      </ResultPanel>
    </Box>
  );
}

// ─────────────────────────────────────────
// PPM 농도
// ─────────────────────────────────────────
function PpmForm() {
  const [mode, setMode] = useState<"ppm" | "mass" | "vol">("ppm");
  const [solute, setSolute] = useState(5);
  const [solution, setSolution] = useState(1000);
  const [ppmVal, setPpmVal] = useState(5000);

  const result = useMemo(() => {
    switch (mode) {
      case "ppm": return solution > 0 ? (solute / solution) * 1_000_000 : 0;
      case "mass": return (ppmVal * solution) / 1_000_000;
      case "vol": return ppmVal > 0 ? (solute / ppmVal) * 1_000_000 : 0;
    }
  }, [mode, solute, solution, ppmVal]);

  return (
    <Box>
      <div className="flex flex-wrap gap-2 text-sm">
        {(["ppm", "mass", "vol"] as const).map((m) => (
          <button key={m} type="button"
            className={`rounded-full border px-3 py-1 ${mode === m ? "bg-neutral-900 text-white" : ""}`}
            onClick={() => setMode(m)}>
            {m === "ppm" ? "농도(ppm) 구하기" : m === "mass" ? "용질 질량 구하기" : "용액 부피 구하기"}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {mode !== "mass" && (
          <Labeled label="용질 질량 (mg 또는 g)">
            <input type="number" className={INPUT_CLASS} value={solute} onChange={(e) => setSolute(num(e.target.value))} />
          </Labeled>
        )}
        {mode !== "vol" && (
          <Labeled label="용액 질량/부피 (mL 또는 g)">
            <input type="number" className={INPUT_CLASS} value={solution} onChange={(e) => setSolution(num(e.target.value))} />
          </Labeled>
        )}
        {mode !== "ppm" && (
          <Labeled label="농도 (ppm)">
            <input type="number" className={INPUT_CLASS} value={ppmVal} onChange={(e) => setPpmVal(num(e.target.value))} />
          </Labeled>
        )}
      </div>
      <ResultPanel
        title="계산 결과"
        subtitle="ppm = mg/L = mg/kg (물 기준). 단위를 맞춰 입력하세요."
        highlight={
          mode === "ppm" ? `${result.toFixed(4)} ppm` :
          mode === "mass" ? `${result.toFixed(6)} g (용질)` :
          `${result.toFixed(4)} mL (용액)`
        }
      />
    </Box>
  );
}

// ─────────────────────────────────────────
// 둘레 계산기
// ─────────────────────────────────────────
function PerimeterForm() {
  const [shape, setShape] = useState<"circle" | "square" | "rect" | "triangle">("circle");
  const [r, setR] = useState(5);
  const [a, setA] = useState(4);
  const [w, setW] = useState(6);
  const [h, setH] = useState(4);
  const [s1, setS1] = useState(3);
  const [s2, setS2] = useState(4);
  const [s3, setS3] = useState(5);

  const result = useMemo(() => {
    switch (shape) {
      case "circle": return { p: 2 * Math.PI * r, area: Math.PI * r * r };
      case "square": return { p: 4 * a, area: a * a };
      case "rect": return { p: 2 * (w + h), area: w * h };
      case "triangle": return { p: s1 + s2 + s3, area: null };
    }
  }, [shape, r, a, w, h, s1, s2, s3]);

  const shapes = [["circle", "원"], ["square", "정사각형"], ["rect", "직사각형"], ["triangle", "삼각형"]] as const;

  return (
    <Box>
      <div className="flex flex-wrap gap-2 text-sm">
        {shapes.map(([v, label]) => (
          <button key={v} type="button"
            className={`rounded-full border px-3 py-1 ${shape === v ? "bg-neutral-900 text-white" : ""}`}
            onClick={() => setShape(v)}>{label}</button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {shape === "circle" && <Labeled label="반지름 r"><input type="number" className={INPUT_CLASS} value={r} onChange={(e) => setR(num(e.target.value))} /></Labeled>}
        {shape === "square" && <Labeled label="한 변의 길이 a"><input type="number" className={INPUT_CLASS} value={a} onChange={(e) => setA(num(e.target.value))} /></Labeled>}
        {shape === "rect" && (<>
          <Labeled label="가로 w"><input type="number" className={INPUT_CLASS} value={w} onChange={(e) => setW(num(e.target.value))} /></Labeled>
          <Labeled label="세로 h"><input type="number" className={INPUT_CLASS} value={h} onChange={(e) => setH(num(e.target.value))} /></Labeled>
        </>)}
        {shape === "triangle" && (<>
          <Labeled label="변 a"><input type="number" className={INPUT_CLASS} value={s1} onChange={(e) => setS1(num(e.target.value))} /></Labeled>
          <Labeled label="변 b"><input type="number" className={INPUT_CLASS} value={s2} onChange={(e) => setS2(num(e.target.value))} /></Labeled>
          <div className="sm:col-span-2"><Labeled label="변 c"><input type="number" className={INPUT_CLASS} value={s3} onChange={(e) => setS3(num(e.target.value))} /></Labeled></div>
        </>)}
      </div>
      <ResultPanel title="계산 결과">
        <ResultRows rows={[
          { label: "둘레", value: `${result.p.toFixed(6)}` },
          ...(result.area != null ? [{ label: "넓이", value: `${result.area.toFixed(6)}` }] : []),
        ]} />
      </ResultPanel>
    </Box>
  );
}

// ─────────────────────────────────────────
// 밀도 계산기
// ─────────────────────────────────────────
function DensityForm() {
  const [mode, setMode] = useState<"d" | "m" | "v">("d");
  const [mass, setMass] = useState(500);
  const [volume, setVolume] = useState(250);
  const [density, setDensity] = useState(2);

  const result = useMemo(() => {
    switch (mode) {
      case "d": return volume > 0 ? mass / volume : 0;
      case "m": return density * volume;
      case "v": return density > 0 ? mass / density : 0;
    }
  }, [mode, mass, volume, density]);

  const label = mode === "d" ? "밀도 (g/cm³)" : mode === "m" ? "질량 (g)" : "부피 (cm³)";

  return (
    <Box>
      <div className="flex flex-wrap gap-2 text-sm">
        {([["d", "밀도(ρ)"], ["m", "질량(m)"], ["v", "부피(V)"]] as const).map(([v, l]) => (
          <button key={v} type="button"
            className={`rounded-full border px-3 py-1 ${mode === v ? "bg-neutral-900 text-white" : ""}`}
            onClick={() => setMode(v)}>{l} 구하기</button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {mode !== "m" && <Labeled label="질량 m (g)"><input type="number" className={INPUT_CLASS} value={mass} onChange={(e) => setMass(num(e.target.value))} /></Labeled>}
        {mode !== "v" && <Labeled label="부피 V (cm³)"><input type="number" className={INPUT_CLASS} value={volume} onChange={(e) => setVolume(num(e.target.value))} /></Labeled>}
        {mode !== "d" && <Labeled label="밀도 ρ (g/cm³)"><input type="number" className={INPUT_CLASS} value={density} onChange={(e) => setDensity(num(e.target.value))} /></Labeled>}
      </div>
      <ResultPanel title="계산 결과" subtitle="ρ = m / V" highlight={`${label}: ${result.toFixed(6)}`} />
    </Box>
  );
}

// ─────────────────────────────────────────
// 다항식 인수분해 (이차방정식 ax²+bx+c=0)
// ─────────────────────────────────────────
function PolynomialFactorForm() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(-5);
  const [c, setC] = useState(6);

  type PolyResult = { type: "all" } | { type: "none" } | { type: "linear"; x: number } | { type: "complex"; disc: number } | { type: "double"; x: number; disc: number } | { type: "two"; x1: number; x2: number; disc: number };
  const res = useMemo((): PolyResult => {
    if (a === 0) {
      if (b === 0) return c === 0 ? { type: "all" } : { type: "none" };
      return { type: "linear", x: -c / b };
    }
    const disc = b * b - 4 * a * c;
    if (disc < 0) return { type: "complex", disc };
    if (disc === 0) {
      const x = -b / (2 * a);
      return { type: "double", x, disc };
    }
    const x1 = (-b + Math.sqrt(disc)) / (2 * a);
    const x2 = (-b - Math.sqrt(disc)) / (2 * a);
    return { type: "two", x1, x2, disc };
  }, [a, b, c]);

  function fmtCoeff(v: number, x: string, first = false): string {
    if (v === 0) return "";
    const s = v < 0 ? "-" : first ? "" : "+";
    const abs = Math.abs(v);
    return `${s}${abs === 1 && x ? "" : abs}${x}`;
  }

  const expr = `${fmtCoeff(a, "x²", true) || "0"}${fmtCoeff(b, "x")}${fmtCoeff(c, "")} = 0`;

  return (
    <Box>
      <p className="text-sm text-neutral-500">이차방정식 ax² + bx + c = 0 형태</p>
      <div className="grid gap-6 sm:grid-cols-3">
        <Labeled label="a (x² 계수)"><input type="number" className={INPUT_CLASS} value={a} onChange={(e) => setA(num(e.target.value))} /></Labeled>
        <Labeled label="b (x 계수)"><input type="number" className={INPUT_CLASS} value={b} onChange={(e) => setB(num(e.target.value))} /></Labeled>
        <Labeled label="c (상수)"><input type="number" className={INPUT_CLASS} value={c} onChange={(e) => setC(num(e.target.value))} /></Labeled>
      </div>
      <ResultPanel title="계산 결과" subtitle={`식: ${expr}`}>
        {res.type === "all" && <p className="mt-4 text-sm">모든 실수가 해입니다.</p>}
        {res.type === "none" && <p className="mt-4 text-sm text-red-600">해가 없습니다.</p>}
        {res.type === "linear" && <ResultRows rows={[{ label: "해", value: `x = ${res.x.toFixed(6)}` }]} />}
        {res.type === "complex" && (
          <ResultRows rows={[
            { label: "판별식 D", value: `${(b*b - 4*a*c).toFixed(4)} (< 0)` },
            { label: "실수 해", value: "없음 (복소수 해)" },
            { label: "복소수 해", value: `x = (${-b} ± √${Math.abs(b*b-4*a*c)}i) / ${2*a}` },
          ]} />
        )}
        {(res.type === "double") && (
          <ResultRows rows={[
            { label: "판별식 D", value: `${res.disc}` },
            { label: "중근", value: `x = ${res.x.toFixed(6)}` },
            { label: "인수분해", value: `${a}(x - ${res.x.toFixed(4)})²` },
          ]} />
        )}
        {res.type === "two" && (
          <ResultRows rows={[
            { label: "판별식 D", value: `${res.disc.toFixed(4)}` },
            { label: "x₁", value: `${res.x1.toFixed(8)}` },
            { label: "x₂", value: `${res.x2.toFixed(8)}` },
            { label: "인수분해", value: `${a}(x - ${res.x1.toFixed(4)})(x - ${res.x2.toFixed(4)})` },
          ]} />
        )}
      </ResultPanel>
    </Box>
  );
}

// ─────────────────────────────────────────
// 가우스 소거법 (연립방정식)
// ─────────────────────────────────────────
function GaussianForm() {
  const [dim, setDim] = useState<2 | 3>(2);
  const [mat2, setMat2] = useState([[1, 2, 5], [3, 4, 6]]);
  const [mat3, setMat3] = useState([[2, 1, -1, 8], [-3, -1, 2, -11], [-2, 1, 2, -3]]);

  function gaussSolve(rows: number[][]): string[] | null {
    const n = rows.length;
    const m = rows.map((r) => [...r]);
    for (let col = 0; col < n; col++) {
      let pivotRow = -1;
      let pivotVal = 0;
      for (let row = col; row < n; row++) {
        if (Math.abs(m[row][col]) > pivotVal) { pivotVal = Math.abs(m[row][col]); pivotRow = row; }
      }
      if (pivotRow === -1 || pivotVal < 1e-12) return null;
      [m[col], m[pivotRow]] = [m[pivotRow], m[col]];
      const f = m[col][col];
      for (let j = col; j <= n; j++) m[col][j] /= f;
      for (let row = 0; row < n; row++) {
        if (row === col) continue;
        const factor = m[row][col];
        for (let j = col; j <= n; j++) m[row][j] -= factor * m[col][j];
      }
    }
    return m.map((row) => row[n].toFixed(6));
  }

  const vars2 = ["x", "y"];
  const vars3 = ["x", "y", "z"];
  const sol2 = useMemo(() => gaussSolve(mat2), [mat2]);
  const sol3 = useMemo(() => gaussSolve(mat3), [mat3]);
  const mat = dim === 2 ? mat2 : mat3;
  const setMat = dim === 2 ? setMat2 : setMat3;
  const vars = dim === 2 ? vars2 : vars3;
  const sol = dim === 2 ? sol2 : sol3;

  function setCell(row: number, col: number, val: number) {
    const next = mat.map((r) => [...r]);
    next[row][col] = val;
    setMat(next as any);
  }

  return (
    <Box>
      <div className="flex gap-2 text-sm">
        {([2, 3] as const).map((d) => (
          <button key={d} type="button"
            className={`rounded-full border px-3 py-1 ${dim === d ? "bg-neutral-900 text-white" : ""}`}
            onClick={() => setDim(d)}>{d}×{d} 연립방정식</button>
        ))}
      </div>
      <p className="text-xs text-neutral-500">각 행은 방정식 계수와 우변 상수입니다. 예: [a, b, c] → ax + by = c</p>
      <div className="space-y-3">
        {mat.map((row, ri) => (
          <div key={ri} className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-neutral-500 w-6">{ri + 1}식</span>
            {row.map((val, ci) => (
              <div key={ci} className="flex items-center gap-1">
                <input
                  type="number"
                  className={`${INPUT_CLASS} w-20`}
                  value={val}
                  onChange={(e) => setCell(ri, ci, num(e.target.value))}
                />
                {ci < vars.length ? <span className="text-sm text-neutral-600">{vars[ci]}</span> : null}
                {ci < vars.length - 1 ? <span className="text-sm text-neutral-400">+</span> : ci === vars.length - 1 ? <span className="text-sm text-neutral-400">=</span> : null}
              </div>
            ))}
          </div>
        ))}
      </div>
      <ResultPanel title="해">
        {sol ? (
          <ResultRows rows={vars.map((v, i) => ({ label: v, value: sol[i] }))} />
        ) : (
          <p className="mt-4 text-sm text-red-600">해 없음 또는 무수히 많은 해 (행렬식 = 0)</p>
        )}
      </ResultPanel>
    </Box>
  );
}

// ─────────────────────────────────────────
// 근로소득세(갑근세) — 간이세액표 기반
// ─────────────────────────────────────────
function IncomeTaxMonthlyForm() {
  const [monthly, setMonthly] = useState(4_000_000);
  const [deps, setDeps] = useState(1);
  const [children, setChildren] = useState(0);
  const [nonTax, setNonTax] = useState(200_000);

  const taxable = Math.max(0, monthly - nonTax);
  const income = estimateSimplifiedIncomeTax({
    monthlyTaxableWage: taxable,
    dependentsIncludingSelf: deps,
    childrenUnder20: children,
  });
  const local = Math.floor((income * 0.1) / 10) * 10;

  return (
    <Box>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:gap-6">
        <section className="rounded-xl border border-neutral-200 bg-white p-4 sm:p-5">
          <h2 className="text-base font-semibold text-neutral-900">입력</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Labeled label="월 급여 (원)"><input type="number" className={INPUT_CLASS} value={monthly} onChange={(e) => setMonthly(num(e.target.value))} /></Labeled>
            <Labeled label="비과세액 (원, 식대 등)"><input type="number" className={INPUT_CLASS} value={nonTax} onChange={(e) => setNonTax(num(e.target.value))} /></Labeled>
            <Labeled label="공제 대상 부양가족 수 (본인 포함)">
              <input type="number" min={1} max={11} className={INPUT_CLASS} value={deps} onChange={(e) => setDeps(Math.min(11, Math.max(1, Math.floor(num(e.target.value)))))} />
            </Labeled>
            <Labeled label="20세 이하 자녀 수">
              <input type="number" min={0} max={10} className={INPUT_CLASS} value={children} onChange={(e) => setChildren(Math.min(10, Math.max(0, Math.floor(num(e.target.value)))))} />
            </Labeled>
          </div>
        </section>
        <ResultPanel title="원천징수 세액 (월)" subtitle="2026년 간이세액표 기준. 비과세 월 200,000원(식대) 기본 설정.">
          <ResultRows rows={[
            { label: "과세표준 월급여", value: `${won(taxable)}원` },
            { label: "근로소득세", value: `${won(income)}원` },
            { label: "지방소득세(10%)", value: `${won(local)}원` },
            { label: "합계", value: `${won(income + local)}원` },
          ]} />
        </ResultPanel>
      </div>
    </Box>
  );
}

// ─────────────────────────────────────────
// 성과급(상여) 세금 계산기
// ─────────────────────────────────────────
function BonusTaxForm() {
  const [bonus, setBonus] = useState(3_000_000);
  const [monthly, setMonthly] = useState(4_000_000);
  const [deps, setDeps] = useState(1);
  const [children, setChildren] = useState(0);

  const taxWithSalary = estimateSimplifiedIncomeTax({
    monthlyTaxableWage: monthly + Math.round(bonus / 12),
    dependentsIncludingSelf: deps,
    childrenUnder20: children,
  });
  const taxSalaryOnly = estimateSimplifiedIncomeTax({
    monthlyTaxableWage: monthly,
    dependentsIncludingSelf: deps,
    childrenUnder20: children,
  });
  const bonusTax = Math.max(0, taxWithSalary - taxSalaryOnly) * 12;
  const localTax = Math.floor((bonusTax * 0.1) / 10) * 10;

  return (
    <Box>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:gap-6">
        <section className="rounded-xl border border-neutral-200 bg-white p-4 sm:p-5">
          <h2 className="text-base font-semibold text-neutral-900">입력</h2>
          <p className="mt-1 text-xs text-neutral-500">국세청 간이세액표 방법: (월급 + 상여÷12)에서 월급 세액을 뺀 후 12배</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Labeled label="성과급·상여 총액 (원)"><input type="number" className={INPUT_CLASS} value={bonus} onChange={(e) => setBonus(num(e.target.value))} /></Labeled>
            <Labeled label="과세 월 급여 (원)"><input type="number" className={INPUT_CLASS} value={monthly} onChange={(e) => setMonthly(num(e.target.value))} /></Labeled>
            <Labeled label="부양가족 수 (본인 포함)">
              <input type="number" min={1} max={11} className={INPUT_CLASS} value={deps} onChange={(e) => setDeps(Math.min(11, Math.max(1, Math.floor(num(e.target.value)))))} />
            </Labeled>
            <Labeled label="20세 이하 자녀 수">
              <input type="number" min={0} max={10} className={INPUT_CLASS} value={children} onChange={(e) => setChildren(Math.min(10, Math.max(0, Math.floor(num(e.target.value)))))} />
            </Labeled>
          </div>
        </section>
        <ResultPanel title="성과급 원천징수 (추정)" subtitle="실제 세액은 연말정산으로 정산됩니다.">
          <ResultRows rows={[
            { label: "성과급 소득세", value: `${won(bonusTax)}원` },
            { label: "지방소득세", value: `${won(localTax)}원` },
            { label: "합계 공제", value: `${won(bonusTax + localTax)}원` },
            { label: "세후 성과급", value: `${won(bonus - bonusTax - localTax)}원` },
          ]} />
        </ResultPanel>
      </div>
    </Box>
  );
}

// ─────────────────────────────────────────
// 실업급여 계산기
// ─────────────────────────────────────────
const UNEMP_DURATION: Array<[number, number[]]> = [
  [50, [120, 150, 180, 210, 240]],
  [60, [120, 180, 210, 240, 270]],
  [999, [120, 180, 210, 240, 270]],
];
const UNEMP_WY = [1, 3, 5, 10, 10]; // under 1y, 1-3y, 3-5y, 5-10y, 10y+

function getUnempDays(age: number, workYears: number): number {
  const wyIdx = workYears < 1 ? 0 : workYears < 3 ? 1 : workYears < 5 ? 2 : workYears < 10 ? 3 : 4;
  for (const [ageLimit, days] of UNEMP_DURATION) {
    if (age < ageLimit) return days[wyIdx];
  }
  return UNEMP_DURATION[UNEMP_DURATION.length - 1][1][wyIdx];
}

function UnemploymentForm() {
  const [dailyWage, setDailyWage] = useState(100_000);
  const [age, setAge] = useState(35);
  const [workYears, setWorkYears] = useState(3);

  const MIN_DAILY = Math.round(10_320 * 8 * 0.8); // 최저임금 × 8h × 80%
  const MAX_DAILY = 66_000;
  const rawDaily = Math.round(dailyWage * 0.6);
  const benefitDaily = Math.min(MAX_DAILY, Math.max(MIN_DAILY, rawDaily));
  const days = getUnempDays(age, workYears);
  const total = benefitDaily * days;

  return (
    <Box>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:gap-6">
        <section className="rounded-xl border border-neutral-200 bg-white p-4 sm:p-5">
          <h2 className="text-base font-semibold">입력</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Labeled label="1일 평균임금 (원)"><input type="number" className={INPUT_CLASS} value={dailyWage} onChange={(e) => setDailyWage(num(e.target.value))} /></Labeled>
            <Labeled label="이직 당시 나이"><input type="number" min={18} max={80} className={INPUT_CLASS} value={age} onChange={(e) => setAge(num(e.target.value))} /></Labeled>
            <Labeled label="피보험 단위기간(고용보험 가입 년수)">
              <input type="number" min={0} max={30} step={0.5} className={INPUT_CLASS} value={workYears} onChange={(e) => setWorkYears(num(e.target.value))} />
            </Labeled>
          </div>
        </section>
        <ResultPanel title="실업급여 추정" subtitle="2026년 기준. 소정급여일수는 나이·가입기간으로 결정.">
          <ResultRows rows={[
            { label: "1일 구직급여 (60%)", value: `${won(rawDaily)}원` },
            { label: "하한(최저임금 80% × 8h)", value: `${won(MIN_DAILY)}원` },
            { label: "상한", value: `${won(MAX_DAILY)}원` },
            { label: "지급 1일액", value: `${won(benefitDaily)}원` },
            { label: "소정급여일수", value: `${days}일` },
            { label: "예상 총액", value: `${won(total)}원` },
          ]} />
        </ResultPanel>
      </div>
    </Box>
  );
}

// ─────────────────────────────────────────
// 육아휴직 급여 계산기 (6+6 포함)
// ─────────────────────────────────────────
function ParentalLeaveForm() {
  const [mode, setMode] = useState<"std" | "66">("std");
  const [wage, setWage] = useState(3_000_000);
  const [parentOrder, setParentOrder] = useState<1 | 2>(1);

  const STD_RATE = 0.8;
  const STD_CAP = 1_500_000;
  const STD_FLOOR = 700_000;

  // 6+6 상한: 1번째 사용 부모 [200~450만], 2번째 사용 부모 [250~500만] (각 월 50만 증가)
  const CAPS_66_FIRST  = [200, 250, 300, 350, 400, 450].map((v) => v * 10_000);
  const CAPS_66_SECOND = [250, 300, 350, 400, 450, 500].map((v) => v * 10_000);

  const results = useMemo(() => {
    if (mode === "std") {
      const monthly = Math.min(STD_CAP, Math.max(STD_FLOOR, Math.round(wage * STD_RATE)));
      return Array.from({ length: 12 }, (_, i) => ({ month: i + 1, pay: monthly }));
    }
    // 6+6: 최초 6개월 100%(상한 월별 상향), 이후 80% 상한 150만
    const caps = parentOrder === 2 ? CAPS_66_SECOND : CAPS_66_FIRST;
    return Array.from({ length: 12 }, (_, i) => {
      if (i < 6) {
        const cap = caps[i]!;
        const pay = Math.min(cap, wage);
        return { month: i + 1, pay };
      }
      return { month: i + 1, pay: Math.min(STD_CAP, Math.max(STD_FLOOR, Math.round(wage * STD_RATE))) };
    });
  }, [mode, wage, parentOrder]);

  const total = results.reduce((s, r) => s + r.pay, 0);

  return (
    <Box>
      <div className="flex flex-wrap gap-2 text-sm mb-2">
        {([["std", "일반 육아휴직"], ["66", "6+6 부모육아휴직"]] as const).map(([v, l]) => (
          <button key={v} type="button"
            className={`rounded-full border px-3 py-1 ${mode === v ? "bg-neutral-900 text-white" : ""}`}
            onClick={() => setMode(v)}>{l}</button>
        ))}
      </div>
      {mode === "66" && (
        <div className="flex gap-2 text-sm">
          {([1, 2] as const).map((o) => (
            <button key={o} type="button"
              className={`rounded-full border px-3 py-1 ${parentOrder === o ? "bg-neutral-900 text-white" : ""}`}
              onClick={() => setParentOrder(o)}>{o}번째 사용 부모</button>
          ))}
        </div>
      )}
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:gap-6">
        <section className="rounded-xl border border-neutral-200 bg-white p-4">
          <Labeled label="통상임금 (월)"><input type="number" className={INPUT_CLASS} value={wage} onChange={(e) => setWage(num(e.target.value))} /></Labeled>
          <p className="mt-2 text-xs text-neutral-500">
            {mode === "std"
              ? "일반: 통상임금 80%, 상한 150만원, 하한 70만원"
              : "6+6: 최초 6개월 100%(상한 200→450만원), 이후 80%(상한 150만원)"}
          </p>
          <div className="mt-4 space-y-2">
            {results.map((r) => (
              <div key={r.month} className="flex justify-between text-sm">
                <span className="text-neutral-600">{r.month}개월째</span>
                <span className="font-medium">{won(r.pay)}원</span>
              </div>
            ))}
          </div>
        </section>
        <ResultPanel title="12개월 합계 (추정)">
          <ResultRows rows={[{ label: "12개월 총급여", value: `${won(total)}원` }]} />
        </ResultPanel>
      </div>
    </Box>
  );
}

// ─────────────────────────────────────────
// 청약 가점 계산기
// ─────────────────────────────────────────
function SubscriptionScoreForm() {
  const [noHomeYears, setNoHomeYears] = useState(5);
  const [dependants, setDependants] = useState(2);
  const [accountYears, setAccountYears] = useState(5);

  const noHomeScore = useMemo(() => {
    const y = Math.max(0, Math.floor(noHomeYears));
    if (y === 0) return 2;
    return Math.min(32, 2 + y * 2);
  }, [noHomeYears]);

  const depScore = useMemo(() => {
    const d = Math.min(6, Math.max(0, Math.floor(dependants)));
    return [5, 10, 15, 20, 25, 30, 35][d];
  }, [dependants]);

  const accScore = useMemo(() => {
    const y = Math.max(0, accountYears);
    if (y < 0.5) return 0;
    if (y >= 15) return 17;
    if (y >= 14) return 15;
    if (y >= 13) return 14;
    if (y >= 12) return 13;
    if (y >= 11) return 12;
    if (y >= 10) return 11;
    if (y >= 9) return 10;
    if (y >= 8) return 9;
    if (y >= 7) return 8;
    if (y >= 6) return 7;
    if (y >= 5) return 6;
    if (y >= 4) return 5;
    if (y >= 3) return 4;
    if (y >= 2) return 3;
    if (y >= 1) return 2;
    return 1;
  }, [accountYears]);

  const total = noHomeScore + depScore + accScore;

  return (
    <Box>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:gap-6">
        <section className="rounded-xl border border-neutral-200 bg-white p-4 sm:p-5">
          <h2 className="text-base font-semibold">입력</h2>
          <div className="mt-4 grid gap-4">
            <Labeled label="무주택 기간 (년, 0=주택 소유)">
              <input type="number" min={0} max={15} className={INPUT_CLASS} value={noHomeYears} onChange={(e) => setNoHomeYears(num(e.target.value))} />
            </Labeled>
            <Labeled label="부양가족 수 (0~6명 이상)">
              <input type="number" min={0} max={6} className={INPUT_CLASS} value={dependants} onChange={(e) => setDependants(num(e.target.value))} />
            </Labeled>
            <Labeled label="청약통장 가입기간 (년)">
              <input type="number" min={0} max={20} step={0.5} className={INPUT_CLASS} value={accountYears} onChange={(e) => setAccountYears(num(e.target.value))} />
            </Labeled>
          </div>
        </section>
        <ResultPanel title="청약 가점 (참고)" subtitle="최고 84점. 청약홈에서 반드시 공식 확인하세요.">
          <ResultRows rows={[
            { label: `무주택 기간 (최대 32점)`, value: `${noHomeScore}점` },
            { label: `부양가족 수 (최대 35점)`, value: `${depScore}점` },
            { label: `청약통장 가입기간 (최대 17점)`, value: `${accScore}점` },
            { label: "합계", value: `${total}점 / 84점` },
          ]} />
        </ResultPanel>
      </div>
    </Box>
  );
}

// ─────────────────────────────────────────
// QR 코드 생성기
// ─────────────────────────────────────────
function QrCodeForm() {
  const [text, setText] = useState("https://calcmoa.com");
  const [size, setSize] = useState(200);
  const [level, setLevel] = useState<"L" | "M" | "Q" | "H">("M");
  const [copied, setCopied] = useState(false);

  function copyAsSvg() {
    const svgEl = document.querySelector("#qr-svg-output svg");
    if (!svgEl) return;
    const xml = new XMLSerializer().serializeToString(svgEl);
    navigator.clipboard.writeText(xml).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  }

  return (
    <Box>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,280px)] lg:gap-6">
        <section className="rounded-xl border border-neutral-200 bg-white p-4">
          <h2 className="text-base font-semibold">내용 입력</h2>
          <div className="mt-4 space-y-4">
            <Labeled label="텍스트 또는 URL">
              <textarea className={`${TEXTAREA_CLASS} font-mono text-sm`} rows={4} value={text} onChange={(e) => setText(e.target.value)} />
            </Labeled>
            <div className="grid gap-4 sm:grid-cols-2">
              <Labeled label={`크기: ${size}px`}>
                <input type="range" min={100} max={400} step={10} className="w-full" value={size} onChange={(e) => setSize(Number(e.target.value))} />
              </Labeled>
              <Labeled label="오류 정정 수준">
                <div className="flex gap-2 flex-wrap">
                  {(["L", "M", "Q", "H"] as const).map((l) => (
                    <button key={l} type="button"
                      className={`rounded-full border px-3 py-1 text-xs ${level === l ? "bg-neutral-900 text-white" : ""}`}
                      onClick={() => setLevel(l)}>{l}</button>
                  ))}
                </div>
              </Labeled>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4">
          <div id="qr-svg-output" className="rounded-lg overflow-hidden bg-white">
            {text.trim() ? (
              <QRCodeSVG value={text.trim()} size={size} level={level} includeMargin />
            ) : (
              <div className="flex items-center justify-center bg-neutral-100 text-sm text-neutral-500" style={{ width: size, height: size }}>내용을 입력하세요</div>
            )}
          </div>
          <button type="button"
            className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white"
            onClick={copyAsSvg}>
            {copied ? "복사됨!" : "SVG 복사"}
          </button>
        </section>
      </div>
    </Box>
  );
}

// ─────────────────────────────────────────
// 양력 → 음력 변환기 (근사 알고리즘)
// ─────────────────────────────────────────
// 음력 신년 양력 날짜 + 윤달 정보 (2000-2040)
// [year, lunarNewYearMD, leapAfterMonth, monthLengths...]
// leapAfterMonth=0 → 윤달 없음
type LunarYearData = { lny: [number, number]; leapAfter: number; months: number[] };
const LUNAR_DATA: Record<number, LunarYearData> = {
  2000: { lny: [2, 5], leapAfter: 0, months: [30, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30] },
  2001: { lny: [1, 24], leapAfter: 5, months: [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30] },
  2002: { lny: [2, 12], leapAfter: 0, months: [29, 30, 29, 30, 29, 30, 29, 30, 30, 29, 30, 29] },
  2003: { lny: [2, 1], leapAfter: 0, months: [30, 29, 30, 29, 30, 29, 30, 29, 30, 30, 29, 30] },
  2004: { lny: [1, 22], leapAfter: 2, months: [29, 30, 29, 29, 30, 29, 30, 29, 30, 30, 29, 30, 30] },
  2005: { lny: [2, 9], leapAfter: 0, months: [29, 30, 29, 30, 29, 30, 29, 29, 30, 30, 29, 30] },
  2006: { lny: [1, 29], leapAfter: 7, months: [30, 29, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 30] },
  2007: { lny: [2, 18], leapAfter: 0, months: [29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30] },
  2008: { lny: [2, 7], leapAfter: 0, months: [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29] },
  2009: { lny: [1, 26], leapAfter: 5, months: [30, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30, 29, 30] },
  2010: { lny: [2, 14], leapAfter: 0, months: [29, 30, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30] },
  2011: { lny: [2, 3], leapAfter: 0, months: [30, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29, 29] },
  2012: { lny: [1, 23], leapAfter: 4, months: [30, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 29] },
  2013: { lny: [2, 10], leapAfter: 0, months: [30, 30, 29, 30, 29, 30, 29, 30, 30, 29, 30, 29] },
  2014: { lny: [1, 31], leapAfter: 9, months: [29, 30, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30, 29] },
  2015: { lny: [2, 19], leapAfter: 0, months: [29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 29, 30] },
  2016: { lny: [2, 8], leapAfter: 0, months: [30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 29] },
  2017: { lny: [1, 28], leapAfter: 6, months: [30, 29, 30, 30, 29, 30, 29, 30, 30, 29, 30, 29, 29] },
  2018: { lny: [2, 16], leapAfter: 0, months: [30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30] },
  2019: { lny: [2, 5], leapAfter: 0, months: [29, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 29] },
  2020: { lny: [1, 25], leapAfter: 4, months: [30, 29, 30, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30] },
  2021: { lny: [2, 12], leapAfter: 0, months: [29, 30, 29, 29, 30, 30, 29, 30, 30, 29, 30, 29] },
  2022: { lny: [2, 1], leapAfter: 0, months: [30, 29, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30] },
  2023: { lny: [1, 22], leapAfter: 2, months: [29, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30] },
  2024: { lny: [2, 10], leapAfter: 0, months: [30, 29, 30, 29, 30, 29, 30, 29, 30, 30, 29, 30] },
  2025: { lny: [1, 29], leapAfter: 6, months: [29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29] },
  2026: { lny: [2, 17], leapAfter: 0, months: [30, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 30] },
  2027: { lny: [2, 6], leapAfter: 0, months: [29, 30, 30, 29, 30, 29, 30, 29, 30, 29, 29, 30] },
  2028: { lny: [1, 26], leapAfter: 5, months: [30, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29, 29, 30] },
  2029: { lny: [2, 13], leapAfter: 0, months: [30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30] },
  2030: { lny: [2, 3], leapAfter: 0, months: [29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29, 29] },
  2031: { lny: [1, 23], leapAfter: 3, months: [30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 30, 29, 29] },
  2032: { lny: [2, 11], leapAfter: 0, months: [30, 29, 30, 30, 29, 30, 29, 30, 29, 29, 30, 30] },
  2033: { lny: [1, 31], leapAfter: 11, months: [29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29, 30] },
  2034: { lny: [2, 19], leapAfter: 0, months: [29, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 29] },
  2035: { lny: [2, 8], leapAfter: 0, months: [30, 29, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30] },
  2036: { lny: [1, 28], leapAfter: 6, months: [29, 30, 29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29] },
  2037: { lny: [2, 15], leapAfter: 0, months: [30, 29, 30, 29, 30, 29, 29, 30, 30, 29, 30, 30] },
  2038: { lny: [2, 4], leapAfter: 0, months: [29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30, 29] },
  2039: { lny: [1, 24], leapAfter: 5, months: [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30, 29] },
  2040: { lny: [2, 12], leapAfter: 0, months: [30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30] },
};

function gregorianToLunar(year: number, month: number, day: number): { lunarYear: number; lunarMonth: number; lunarDay: number; isLeap: boolean } | null {
  const gDate = new Date(year, month - 1, day);
  const msDay = 86400000;
  for (let y = year; y >= year - 1; y--) {
    const data = LUNAR_DATA[y];
    if (!data) continue;
    const [lm, ld] = data.lny;
    const lnyDate = new Date(y, lm - 1, ld);
    if (gDate < lnyDate) continue;
    let cursor = new Date(lnyDate);
    let lunarMonth = 0;
    let isLeap = false;
    const allMonths: { month: number; isLeap: boolean; days: number }[] = [];
    for (let mi = 0; mi < data.months.length; mi++) {
      const actualMonth = isLeap ? lunarMonth : lunarMonth + 1;
      if (!isLeap) lunarMonth++;
      allMonths.push({ month: actualMonth, isLeap, days: data.months[mi] });
      if (data.leapAfter > 0 && actualMonth === data.leapAfter && !isLeap) {
        isLeap = true;
        mi--;
        lunarMonth--;
      } else {
        isLeap = false;
      }
    }
    lunarMonth = 0;
    isLeap = false;
    let monthIdx = 0;
    for (const m of allMonths) {
      const nextCursor = new Date(cursor.getTime() + m.days * msDay);
      if (gDate >= cursor && gDate < nextCursor) {
        const lunarDay = Math.floor((gDate.getTime() - cursor.getTime()) / msDay) + 1;
        return { lunarYear: y, lunarMonth: m.month, lunarDay, isLeap: m.isLeap };
      }
      cursor = nextCursor;
      monthIdx++;
    }
  }
  return null;
}

function LunarCalendarForm() {
  const today = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(today);

  const result = useMemo(() => {
    const d = new Date(date + "T12:00:00");
    if (Number.isNaN(d.getTime())) return null;
    return gregorianToLunar(d.getFullYear(), d.getMonth() + 1, d.getDate());
  }, [date]);

  const GANZHI_YEAR = ["甲子", "乙丑", "丙寅", "丁卯", "戊辰", "己巳", "庚午", "辛未", "壬申", "癸酉", "甲戌", "乙亥", "丙子", "丁丑", "戊寅", "己卯", "庚辰", "辛巳", "壬午", "癸未", "甲申", "乙酉", "丙戌", "丁亥", "戊子", "己丑", "庚寅", "辛卯", "壬辰", "癸巳", "甲午", "乙未", "丙申", "丁酉", "戊戌", "己亥", "庚子", "辛丑", "壬寅", "癸卯", "甲辰", "乙巳", "丙午", "丁未", "戊申", "己酉", "庚戌", "辛亥", "壬子", "癸丑", "甲寅", "乙卯", "丙辰", "丁巳", "戊午", "己未", "庚申", "辛酉", "壬戌", "癸亥"];
  const KOREAN_YEAR = ["갑자", "을축", "병인", "정묘", "무진", "기사", "경오", "신미", "임신", "계유", "갑술", "을해", "병자", "정축", "무인", "기묘", "경진", "신사", "임오", "계미", "갑신", "을유", "병술", "정해", "무자", "기축", "경인", "신묘", "임진", "계사", "갑오", "을미", "병신", "정유", "무술", "기해", "경자", "신축", "임인", "계묘", "갑진", "을사", "병오", "정미", "무신", "기유", "경술", "신해", "임자", "계축", "갑인", "을묘", "병진", "정사", "무오", "기미", "경신", "신유", "임술", "계해"];
  const ZODIAC = ["쥐", "소", "호랑이", "토끼", "용", "뱀", "말", "양", "원숭이", "닭", "개", "돼지"];
  const MONTHS_KO = ["", "정월", "이월", "삼월", "사월", "오월", "유월", "칠월", "팔월", "구월", "시월", "동월", "섣달"];

  return (
    <Box>
      <Labeled label="양력 날짜">
        <input type="date" className={INPUT_CLASS} value={date} onChange={(e) => setDate(e.target.value)} />
      </Labeled>
      {result ? (
        <ResultPanel title="음력 변환 (2000~2040년 참고용)">
          {(() => {
            const ganIdx = ((result.lunarYear - 4) % 60 + 60) % 60;
            const zodiacIdx = ((result.lunarYear - 4) % 12 + 12) % 12;
            return (
              <ResultRows rows={[
                { label: "음력 날짜", value: `${result.lunarYear}년 ${result.isLeap ? "윤" : ""}${result.lunarMonth}월 ${result.lunarDay}일` },
                { label: "음력 월 이름", value: `${result.isLeap ? "윤" : ""}${MONTHS_KO[result.lunarMonth] ?? `${result.lunarMonth}월`}` },
                { label: "간지", value: `${GANZHI_YEAR[ganIdx]} (${KOREAN_YEAR[ganIdx]})` },
                { label: "띠", value: `${ZODIAC[zodiacIdx]}띠` },
              ]} />
            );
          })()}
        </ResultPanel>
      ) : (
        <ResultPanel title="음력 변환">
          <p className="mt-4 text-sm text-neutral-500">지원 범위: 2000~2040년. 범위를 벗어난 날짜입니다.</p>
        </ResultPanel>
      )}
    </Box>
  );
}

// ─────────────────────────────────────────
// 온라인 타이머 (카운트다운 + 스톱워치)
// ─────────────────────────────────────────
function OnlineTimerForm() {
  const [tab, setTab] = useState<"countdown" | "stopwatch">("countdown");
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  function startCountdown() {
    const total = (minutes * 60 + seconds) * 1000;
    if (total <= 0) return;
    setRemaining(total);
    setRunning(true);
    const end = Date.now() + total;
    intervalRef.current = setInterval(() => {
      const left = end - Date.now();
      if (left <= 0) {
        clearInterval(intervalRef.current!);
        setRemaining(0);
        setRunning(false);
      } else {
        setRemaining(left);
      }
    }, 100);
  }

  function startStopwatch() {
    setRunning(true);
    const start = Date.now() - elapsed;
    intervalRef.current = setInterval(() => setElapsed(Date.now() - start), 100);
  }

  function stop() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setRunning(false);
  }

  function reset() {
    stop();
    setRemaining(null);
    setElapsed(0);
  }

  function fmtMs(ms: number) {
    const totalSec = Math.ceil(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    const centis = Math.floor((ms % 1000) / 10);
    return h > 0
      ? `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
      : `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}.${String(centis).padStart(2, "0")}`;
  }

  const displayMs = tab === "countdown" ? (remaining ?? (minutes * 60 + seconds) * 1000) : elapsed;

  return (
    <Box>
      <div className="flex gap-2 text-sm">
        {(["countdown", "stopwatch"] as const).map((t) => (
          <button key={t} type="button"
            className={`rounded-full border px-3 py-1 ${tab === t ? "bg-neutral-900 text-white" : ""}`}
            onClick={() => { reset(); setTab(t); }}>
            {t === "countdown" ? "카운트다운" : "스톱워치"}
          </button>
        ))}
      </div>
      {tab === "countdown" && remaining === null && (
        <div className="grid gap-6 sm:grid-cols-2">
          <Labeled label="분"><input type="number" min={0} max={99} className={INPUT_CLASS} value={minutes} onChange={(e) => setMinutes(Math.max(0, Math.floor(num(e.target.value))))} /></Labeled>
          <Labeled label="초"><input type="number" min={0} max={59} className={INPUT_CLASS} value={seconds} onChange={(e) => setSeconds(Math.max(0, Math.min(59, Math.floor(num(e.target.value)))))} /></Labeled>
        </div>
      )}
      <div className="flex flex-col items-center gap-6 rounded-xl border border-neutral-200 bg-white p-6">
        <div className={`font-mono text-5xl font-bold tracking-widest ${tab === "countdown" && remaining === 0 ? "text-red-600 animate-pulse" : "text-neutral-900"}`}>
          {fmtMs(displayMs)}
        </div>
        {tab === "countdown" && remaining === 0 && (
          <p className="text-sm font-medium text-red-600">시간 종료!</p>
        )}
        <div className="flex gap-3">
          {!running ? (
            <button type="button" className="rounded-xl bg-neutral-900 px-5 py-2 text-sm font-medium text-white"
              onClick={tab === "countdown" ? startCountdown : startStopwatch}>
              시작
            </button>
          ) : (
            <button type="button" className="rounded-xl bg-neutral-900 px-5 py-2 text-sm font-medium text-white" onClick={stop}>일시정지</button>
          )}
          <button type="button" className="rounded-xl border px-5 py-2 text-sm font-medium" onClick={reset}>초기화</button>
        </div>
      </div>
    </Box>
  );
}

// ─────────────────────────────────────────
// 원리금균등 vs 원금균등 비교
// ─────────────────────────────────────────
function MortgageCompareForm() {
  const [principal, setPrincipal] = useState(200_000_000);
  const [annualRate, setAnnualRate] = useState(4.5);
  const [months, setMonths] = useState(360);

  const r = annualRate / 100 / 12;

  const equalTotal = useMemo(() => {
    if (r === 0) { const pay = principal / months; return { pay, totalInterest: 0 }; }
    const pay = (principal * r) / (1 - Math.pow(1 + r, -months));
    return { pay, totalInterest: pay * months - principal };
  }, [principal, r, months]);

  const equalPrincipal = useMemo(() => {
    const monthlyPrincipal = principal / months;
    let totalInterest = 0;
    let firstPay = 0;
    let lastPay = 0;
    for (let i = 0; i < months; i++) {
      const interest = (principal - monthlyPrincipal * i) * r;
      totalInterest += interest;
      if (i === 0) firstPay = monthlyPrincipal + interest;
      if (i === months - 1) lastPay = monthlyPrincipal + interest;
    }
    return { firstPay, lastPay, totalInterest };
  }, [principal, r, months]);

  const interestDiff = equalTotal.totalInterest - equalPrincipal.totalInterest;

  return (
    <Box>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-6">
        <section className="rounded-xl border border-neutral-200 bg-white p-4">
          <h2 className="text-base font-semibold">대출 조건</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Labeled label="대출원금 (원)"><input type="number" className={INPUT_CLASS} value={principal} onChange={(e) => setPrincipal(num(e.target.value))} /></Labeled>
            <Labeled label="연이율 (%)"><input type="number" step="0.1" className={INPUT_CLASS} value={annualRate} onChange={(e) => setAnnualRate(num(e.target.value))} /></Labeled>
            <div className="sm:col-span-2"><Labeled label="상환 개월 수"><input type="number" className={INPUT_CLASS} value={months} onChange={(e) => setMonths(Math.max(1, Math.floor(num(e.target.value))))} /></Labeled></div>
          </div>
        </section>
        <ResultPanel title="상환 방식 비교" subtitle="원금균등이 총이자는 적지만 초기 월납입이 더 큽니다.">
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">원리금균등 상환</p>
              <ResultRows rows={[
                { label: "매월 납입액", value: `${won(equalTotal.pay)}원` },
                { label: "총이자", value: `${won(equalTotal.totalInterest)}원` },
              ]} />
            </div>
            <div>
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">원금균등 상환</p>
              <ResultRows rows={[
                { label: "첫 달 납입액", value: `${won(equalPrincipal.firstPay)}원` },
                { label: "마지막 달 납입액", value: `${won(equalPrincipal.lastPay)}원` },
                { label: "총이자", value: `${won(equalPrincipal.totalInterest)}원` },
              ]} />
            </div>
            <div className="rounded-lg bg-blue-50 p-3">
              <p className="text-sm font-medium text-blue-900">원금균등이 이자 <strong>{won(interestDiff)}원</strong> 절약</p>
            </div>
          </div>
        </ResultPanel>
      </div>
    </Box>
  );
}

// ─────────────────────────────────────────
// 중도상환 시뮬레이터
// ─────────────────────────────────────────
function PrepaymentForm() {
  const [principal, setPrincipal] = useState(200_000_000);
  const [annualRate, setAnnualRate] = useState(4.5);
  const [totalMonths, setTotalMonths] = useState(360);
  const [prepayMonth, setPrepayMonth] = useState(60);
  const [prepayAmount, setPrepayAmount] = useState(20_000_000);

  const r = annualRate / 100 / 12;

  const base = useMemo(() => {
    if (r === 0) return { monthlyPay: principal / totalMonths, totalInterest: 0 };
    const pay = (principal * r) / (1 - Math.pow(1 + r, -totalMonths));
    return { monthlyPay: pay, totalInterest: pay * totalMonths - principal };
  }, [principal, r, totalMonths]);

  const withPrepay = useMemo(() => {
    if (r === 0) return null;
    const pay = base.monthlyPay;
    let balance = principal;
    let totalInterestPaid = 0;
    for (let i = 1; i <= prepayMonth && balance > 0; i++) {
      const interest = balance * r;
      const princ = pay - interest;
      totalInterestPaid += interest;
      balance = Math.max(0, balance - princ);
    }
    balance = Math.max(0, balance - prepayAmount);
    if (balance <= 0) return { interestAfter: 0, totalInterest: totalInterestPaid, remaining: 0 };
    const remainingMonths = Math.ceil(Math.log(pay / (pay - balance * r)) / Math.log(1 + r));
    let interestAfter = 0;
    let bal2 = balance;
    for (let i = 0; i < remainingMonths && bal2 > 0; i++) {
      const interest = bal2 * r;
      interestAfter += interest;
      bal2 = Math.max(0, bal2 - (pay - interest));
    }
    return {
      totalInterest: totalInterestPaid + interestAfter,
      remainingMonths,
      balanceAtPrepay: balance + prepayAmount,
    };
  }, [principal, r, totalMonths, prepayMonth, prepayAmount, base]);

  const saved = withPrepay ? base.totalInterest - withPrepay.totalInterest : 0;

  return (
    <Box>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:gap-6">
        <section className="rounded-xl border border-neutral-200 bg-white p-4">
          <h2 className="text-base font-semibold">대출 조건</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Labeled label="대출원금 (원)"><input type="number" className={INPUT_CLASS} value={principal} onChange={(e) => setPrincipal(num(e.target.value))} /></Labeled>
            <Labeled label="연이율 (%)"><input type="number" step="0.1" className={INPUT_CLASS} value={annualRate} onChange={(e) => setAnnualRate(num(e.target.value))} /></Labeled>
            <Labeled label="총 상환 기간 (개월)"><input type="number" className={INPUT_CLASS} value={totalMonths} onChange={(e) => setTotalMonths(Math.max(1, Math.floor(num(e.target.value))))} /></Labeled>
            <Labeled label="중도상환 시점 (n개월 후)"><input type="number" min={1} className={INPUT_CLASS} value={prepayMonth} onChange={(e) => setPrepayMonth(Math.max(1, Math.floor(num(e.target.value))))} /></Labeled>
            <div className="sm:col-span-2"><Labeled label="중도상환 금액 (원)"><input type="number" className={INPUT_CLASS} value={prepayAmount} onChange={(e) => setPrepayAmount(num(e.target.value))} /></Labeled></div>
          </div>
        </section>
        <ResultPanel title="중도상환 효과" subtitle="중도상환 수수료는 포함하지 않습니다.">
          <ResultRows rows={[
            { label: "월 납입액 (원리금균등)", value: `${won(base.monthlyPay)}원` },
            { label: "중도상환 없이 총이자", value: `${won(base.totalInterest)}원` },
            ...(withPrepay ? [
              { label: "중도상환 후 총이자", value: `${won(withPrepay.totalInterest)}원` },
              { label: "이자 절약액", value: `${won(saved)}원` },
              { label: "상환 후 잔여 기간", value: `약 ${withPrepay.remainingMonths}개월` },
            ] : []),
          ]} />
        </ResultPanel>
      </div>
    </Box>
  );
}

// ─────────────────────────────────────────
// 전월세 전환율 계산기
// ─────────────────────────────────────────
function JeonwolseForm() {
  const [mode, setMode] = useState<"toMonthly" | "toJeonse">("toMonthly");
  const [jeonse, setJeonse] = useState(300_000_000);
  const [deposit, setDeposit] = useState(50_000_000);
  const [monthly, setMonthly] = useState(800_000);
  const [rate, setRate] = useState(5.5);

  const toMonthly = Math.round(((jeonse - deposit) * (rate / 100)) / 12);
  const toJeonse = deposit + Math.round((monthly * 12) / (rate / 100));

  return (
    <Box>
      <div className="flex flex-wrap gap-2 text-sm mb-2">
        {([["toMonthly", "전세 → 월세"], ["toJeonse", "월세 → 전세"]] as const).map(([v, l]) => (
          <button key={v} type="button"
            className={`rounded-full border px-3 py-1 ${mode === v ? "bg-neutral-900 text-white" : ""}`}
            onClick={() => setMode(v)}>{l}</button>
        ))}
      </div>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:gap-6">
        <section className="rounded-xl border border-neutral-200 bg-white p-4">
          <div className="space-y-4">
            {mode === "toMonthly" ? (<>
              <Labeled label="전세 보증금 (원)"><input type="number" className={INPUT_CLASS} value={jeonse} onChange={(e) => setJeonse(num(e.target.value))} /></Labeled>
              <Labeled label="월세 보증금 (원)"><input type="number" className={INPUT_CLASS} value={deposit} onChange={(e) => setDeposit(num(e.target.value))} /></Labeled>
            </>) : (<>
              <Labeled label="월세 보증금 (원)"><input type="number" className={INPUT_CLASS} value={deposit} onChange={(e) => setDeposit(num(e.target.value))} /></Labeled>
              <Labeled label="월세 (원/월)"><input type="number" className={INPUT_CLASS} value={monthly} onChange={(e) => setMonthly(num(e.target.value))} /></Labeled>
            </>)}
            <Labeled label="전월세 전환율 (%, 법정 기준금리+2%)">
              <input type="number" step="0.1" className={INPUT_CLASS} value={rate} onChange={(e) => setRate(num(e.target.value))} />
            </Labeled>
          </div>
        </section>
        <ResultPanel
          title={mode === "toMonthly" ? "월세 전환 결과" : "전세 전환 결과"}
          subtitle="월세전환율 = (월세×12) / (전세금-보증금). 2026년 기준금리에 따라 전환율이 달라집니다."
          highlight={mode === "toMonthly" ? `월세 약 ${won(toMonthly)}원/월` : `전세보증금 약 ${won(toJeonse)}원`}
        />
      </div>
    </Box>
  );
}

function VdotEstimateForm() {
  const [distKm, setDistKm] = useState(5);
  const [min, setMin] = useState(25);
  const [sec, setSec] = useState(0);
  const vdot = useMemo(() => {
    const tMin = min + sec / 60;
    if (tMin <= 0 || distKm <= 0) return 0;
    const distM = distKm * 1000;
    const velocity = distM / tMin;
    const vo2 = -4.6 + 0.182258 * velocity + 0.000104 * velocity * velocity;
    const pct =
      0.8 + 0.1894393 * Math.exp(-0.012778 * tMin) + 0.2989558 * Math.exp(-0.1932605 * tMin);
    if (pct <= 0) return 0;
    return vo2 / pct;
  }, [distKm, min, sec]);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Labeled label="거리 (km)">
            <input
              type="number"
              className={INPUT_CLASS}
              value={distKm}
              onChange={(e) => setDistKm(Math.max(0.001, num(e.target.value)))}
            />
          </Labeled>
        </div>
        <Labeled label="시간(분)">
          <input type="number" className={INPUT_CLASS} value={min} onChange={(e) => setMin(num(e.target.value))} />
        </Labeled>
        <Labeled label="시간(초)">
          <input type="number" className={INPUT_CLASS} value={sec} onChange={(e) => setSec(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel
        title="VDOT (추정)"
        subtitle="Jack Daniels 공식류로 경주 거리·시간에서 추정합니다."
        highlight={vdot > 0 ? vdot.toFixed(1) : "—"}
      />
    </Box>
  );
}

// 1. 갤런 ↔ 리터
function GallonLiterForm() {
  const [mode, setMode] = useState<'galToL' | 'lToGal'>('galToL');
  const [val, setVal] = useState(1);
  const RATIO = 3.785411784;
  const result = mode === 'galToL' ? val * RATIO : val / RATIO;
  return (
    <Box>
      <div className='flex flex-wrap gap-2 text-sm mb-2'>
        {([['galToL', '갤런 → 리터'], ['lToGal', '리터 → 갤런']] as const).map(([v, l]) => (
          <button key={v} type='button'
            className={'rounded-full border px-3 py-1 ' + (mode === v ? 'bg-neutral-900 text-white' : '')}
            onClick={() => setMode(v)}>{l}</button>
        ))}
      </div>
      <Labeled label={mode === 'galToL' ? '갤런 (gal)' : '리터 (L)'}>
        <input className={INPUT_CLASS} type='number' value={val} onChange={e => setVal(num(e.target.value))} />
      </Labeled>
      <ResultPanel title='변환 결과'>
        <ResultRows rows={[{ label: mode === 'galToL' ? '리터 (L)' : '갤런 (gal)', value: result.toFixed(6) }]} />
      </ResultPanel>
    </Box>
  );
}

// 2. 건폐율
function BuildingCoverageForm() {
  const [building, setBuilding] = useState(200);
  const [land, setLand] = useState(500);
  const ratio = land > 0 ? (building / land) * 100 : 0;
  return (
    <Box>
      <div className='grid gap-6 sm:grid-cols-2'>
        <Labeled label='건축면적 (㎡)'><input className={INPUT_CLASS} type='number' value={building} onChange={e => setBuilding(num(e.target.value))} /></Labeled>
        <Labeled label='대지면적 (㎡)'><input className={INPUT_CLASS} type='number' value={land} onChange={e => setLand(num(e.target.value))} /></Labeled>
      </div>
      <ResultPanel title='건폐율'>
        <ResultRows rows={[{ label: '건폐율', value: ratio.toFixed(2) + '%' }]} />
      </ResultPanel>
    </Box>
  );
}

// 3. 용적률
function FloorAreaRatioForm() {
  const [floor, setFloor] = useState(800);
  const [land, setLand] = useState(500);
  const ratio = land > 0 ? (floor / land) * 100 : 0;
  return (
    <Box>
      <div className='grid gap-6 sm:grid-cols-2'>
        <Labeled label='연면적 (㎡)'><input className={INPUT_CLASS} type='number' value={floor} onChange={e => setFloor(num(e.target.value))} /></Labeled>
        <Labeled label='대지면적 (㎡)'><input className={INPUT_CLASS} type='number' value={land} onChange={e => setLand(num(e.target.value))} /></Labeled>
      </div>
      <ResultPanel title='용적률'>
        <ResultRows rows={[{ label: '용적률', value: ratio.toFixed(2) + '%' }]} />
      </ResultPanel>
    </Box>
  );
}

// 4. 도분초 ↔ 십진도 변환
function DmsConvertForm() {
  const [mode, setMode] = useState<'dmsToDecimal' | 'decimalToDms'>('dmsToDecimal');
  const [deg, setDeg] = useState(37);
  const [minVal, setMinVal] = useState(30);
  const [sec, setSec] = useState(0);
  const [decimal, setDecimal] = useState(37.5);
  const decimalResult = deg + minVal / 60 + sec / 3600;
  const dDeg = Math.floor(Math.abs(decimal));
  const dMin = Math.floor((Math.abs(decimal) - dDeg) * 60);
  const dSec = ((Math.abs(decimal) - dDeg) * 60 - dMin) * 60;
  return (
    <Box>
      <div className='flex flex-wrap gap-2 text-sm mb-2'>
        {([['dmsToDecimal', '도분초 → 십진도'], ['decimalToDms', '십진도 → 도분초']] as const).map(([v, l]) => (
          <button key={v} type='button'
            className={'rounded-full border px-3 py-1 ' + (mode === v ? 'bg-neutral-900 text-white' : '')}
            onClick={() => setMode(v)}>{l}</button>
        ))}
      </div>
      {mode === 'dmsToDecimal' ? (
        <div className='grid gap-6 sm:grid-cols-3'>
          <Labeled label='도 (°)'><input className={INPUT_CLASS} type='number' value={deg} onChange={e => setDeg(num(e.target.value))} /></Labeled>
          <Labeled label='분 (′)'><input className={INPUT_CLASS} type='number' value={minVal} onChange={e => setMinVal(num(e.target.value))} /></Labeled>
          <Labeled label='초 (″)'><input className={INPUT_CLASS} type='number' value={sec} onChange={e => setSec(num(e.target.value))} /></Labeled>
        </div>
      ) : (
        <Labeled label='십진도 (°)'>
          <input className={INPUT_CLASS} type='number' step='0.000001' value={decimal} onChange={e => setDecimal(num(e.target.value))} />
        </Labeled>
      )}
      <ResultPanel title='변환 결과'>
        {mode === 'dmsToDecimal' ? (
          <ResultRows rows={[{ label: '십진도', value: decimalResult.toFixed(6) + '°' }]} />
        ) : (
          <ResultRows rows={[{ label: '도분초', value: dDeg + '° ' + dMin + '′ ' + dSec.toFixed(3) + '″' }]} />
        )}
      </ResultPanel>
    </Box>
  );
}

// 5. 경사도
function SlopeAngleForm() {
  const [h, setH] = useState(10);
  const [d, setD] = useState(100);
  const angle = d > 0 ? Math.atan(h / d) * (180 / Math.PI) : 0;
  const slopeRate = d > 0 ? (h / d) * 100 : 0;
  return (
    <Box>
      <div className='grid gap-6 sm:grid-cols-2'>
        <Labeled label='높이 (m)'><input className={INPUT_CLASS} type='number' value={h} onChange={e => setH(num(e.target.value))} /></Labeled>
        <Labeled label='수평 거리 (m)'><input className={INPUT_CLASS} type='number' value={d} onChange={e => setD(num(e.target.value))} /></Labeled>
      </div>
      <ResultPanel title='경사도 결과'>
        <ResultRows rows={[
          { label: '경사각 (°)', value: angle.toFixed(3) + '°' },
          { label: '경사율 (%)', value: slopeRate.toFixed(2) + '%' },
        ]} />
      </ResultPanel>
    </Box>
  );
}

// 6. 도 ↔ 라디안
function RadianConvertForm() {
  const [mode, setMode] = useState<'degToRad' | 'radToDeg'>('degToRad');
  const [val, setVal] = useState(180);
  const result = mode === 'degToRad' ? val * (Math.PI / 180) : val * (180 / Math.PI);
  return (
    <Box>
      <div className='flex flex-wrap gap-2 text-sm mb-2'>
        {([['degToRad', '도 → 라디안'], ['radToDeg', '라디안 → 도']] as const).map(([v, l]) => (
          <button key={v} type='button'
            className={'rounded-full border px-3 py-1 ' + (mode === v ? 'bg-neutral-900 text-white' : '')}
            onClick={() => setMode(v)}>{l}</button>
        ))}
      </div>
      <Labeled label={mode === 'degToRad' ? '도 (°)' : '라디안 (rad)'}>
        <input className={INPUT_CLASS} type='number' value={val} onChange={e => setVal(num(e.target.value))} />
      </Labeled>
      <ResultPanel title='변환 결과'>
        <ResultRows rows={[{ label: mode === 'degToRad' ? '라디안 (rad)' : '도 (°)', value: result.toFixed(6) }]} />
      </ResultPanel>
    </Box>
  );
}

// 7. 루베 (m³)
function CubicMeterForm() {
  const [w, setW] = useState(2);
  const [l, setL] = useState(3);
  const [h, setH] = useState(1.5);
  const volume = w * l * h;
  return (
    <Box>
      <div className='grid gap-6 sm:grid-cols-3'>
        <Labeled label='가로 (m)'><input className={INPUT_CLASS} type='number' step='0.01' value={w} onChange={e => setW(num(e.target.value))} /></Labeled>
        <Labeled label='세로 (m)'><input className={INPUT_CLASS} type='number' step='0.01' value={l} onChange={e => setL(num(e.target.value))} /></Labeled>
        <Labeled label='높이 (m)'><input className={INPUT_CLASS} type='number' step='0.01' value={h} onChange={e => setH(num(e.target.value))} /></Labeled>
      </div>
      <ResultPanel title='루베 계산'>
        <ResultRows rows={[{ label: '부피 (m³ / 루베)', value: volume.toFixed(4) + ' m³' }]} />
      </ResultPanel>
    </Box>
  );
}

// 8. W = V × A
function WattCalcForm() {
  const [volt, setVolt] = useState(220);
  const [amp, setAmp] = useState(5);
  const watt = volt * amp;
  return (
    <Box>
      <div className='grid gap-6 sm:grid-cols-2'>
        <Labeled label='전압 (V)'><input className={INPUT_CLASS} type='number' value={volt} onChange={e => setVolt(num(e.target.value))} /></Labeled>
        <Labeled label='전류 (A)'><input className={INPUT_CLASS} type='number' value={amp} onChange={e => setAmp(num(e.target.value))} /></Labeled>
      </div>
      <ResultPanel title='전력 계산'>
        <ResultRows rows={[
          { label: '전력 (W)', value: watt.toLocaleString('ko-KR') + ' W' },
          { label: '전력 (kW)', value: (watt / 1000).toFixed(3) + ' kW' },
        ]} />
      </ResultPanel>
    </Box>
  );
}

// 9. 데시벨 계산기
function DecibelCalcForm() {
  const [mode, setMode] = useState<'toDb' | 'fromDb'>('toDb');
  const [measured, setMeasured] = useState(2);
  const [reference, setReference] = useState(1);
  const [db, setDb] = useState(6);
  const dbResult = reference > 0 ? 20 * Math.log10(measured / reference) : 0;
  const ratio = Math.pow(10, db / 20);
  return (
    <Box>
      <div className='flex flex-wrap gap-2 text-sm mb-2'>
        {([['toDb', '압력비 → dB'], ['fromDb', 'dB → 압력비']] as const).map(([v, l]) => (
          <button key={v} type='button'
            className={'rounded-full border px-3 py-1 ' + (mode === v ? 'bg-neutral-900 text-white' : '')}
            onClick={() => setMode(v)}>{l}</button>
        ))}
      </div>
      {mode === 'toDb' ? (
        <div className='grid gap-6 sm:grid-cols-2'>
          <Labeled label='측정값'><input className={INPUT_CLASS} type='number' value={measured} onChange={e => setMeasured(num(e.target.value))} /></Labeled>
          <Labeled label='기준값'><input className={INPUT_CLASS} type='number' value={reference} onChange={e => setReference(num(e.target.value))} /></Labeled>
        </div>
      ) : (
        <Labeled label='데시벨 (dB)'><input className={INPUT_CLASS} type='number' value={db} onChange={e => setDb(num(e.target.value))} /></Labeled>
      )}
      <ResultPanel title='데시벨 결과'>
        {mode === 'toDb' ? (
          <ResultRows rows={[{ label: '데시벨 (dB)', value: dbResult.toFixed(3) + ' dB' }]} />
        ) : (
          <ResultRows rows={[{ label: '압력비', value: ratio.toFixed(6) }]} />
        )}
      </ResultPanel>
    </Box>
  );
}

// 10. 단위 변환 (길이/무게/부피)
function UnitConvertForm() {
  type Cat = 'length' | 'weight' | 'volume';
  const CATS: { key: Cat; label: string }[] = [
    { key: 'length', label: '길이' },
    { key: 'weight', label: '무게' },
    { key: 'volume', label: '부피' },
  ];
  const UNITS: Record<Cat, { label: string; toBase: number }[]> = {
    length: [
      { label: 'mm', toBase: 0.001 },
      { label: 'cm', toBase: 0.01 },
      { label: 'm', toBase: 1 },
      { label: 'km', toBase: 1000 },
      { label: 'in', toBase: 0.0254 },
      { label: 'ft', toBase: 0.3048 },
      { label: 'yd', toBase: 0.9144 },
      { label: 'mi', toBase: 1609.344 },
    ],
    weight: [
      { label: 'mg', toBase: 0.000001 },
      { label: 'g', toBase: 0.001 },
      { label: 'kg', toBase: 1 },
      { label: 't', toBase: 1000 },
      { label: 'lb', toBase: 0.453592 },
      { label: 'oz', toBase: 0.0283495 },
    ],
    volume: [
      { label: 'mL', toBase: 0.001 },
      { label: 'L', toBase: 1 },
      { label: 'm3', toBase: 1000 },
      { label: 'fl oz', toBase: 0.0295735 },
      { label: 'gal(US)', toBase: 3.785412 },
      { label: 'qt', toBase: 0.946353 },
    ],
  };
  const [cat, setCat] = useState<Cat>('length');
  const [fromIdx, setFromIdx] = useState(2);
  const [toIdx, setToIdx] = useState(0);
  const [val, setVal] = useState(1);
  const units = UNITS[cat];
  const result = useMemo(() => {
    const base = val * units[fromIdx].toBase;
    return base / units[toIdx].toBase;
  }, [val, units, fromIdx, toIdx]);
  function handleCatChange(c: Cat) { setCat(c); setFromIdx(0); setToIdx(1); }
  return (
    <Box>
      <div className='flex flex-wrap gap-2 text-sm mb-4'>
        {CATS.map(c => (
          <button key={c.key} type='button'
            className={'rounded-full border px-3 py-1 ' + (cat === c.key ? 'bg-neutral-900 text-white' : '')}
            onClick={() => handleCatChange(c.key)}>{c.label}</button>
        ))}
      </div>
      <div className='grid gap-6 sm:grid-cols-3 items-end'>
        <Labeled label='값'>
          <input className={INPUT_CLASS} type='number' value={val} onChange={e => setVal(num(e.target.value))} />
        </Labeled>
        <Labeled label='변환 전'>
          <select className={INPUT_CLASS} value={fromIdx} onChange={e => setFromIdx(Number(e.target.value))}>
            {units.map((u, i) => <option key={u.label} value={i}>{u.label}</option>)}
          </select>
        </Labeled>
        <Labeled label='변환 후'>
          <select className={INPUT_CLASS} value={toIdx} onChange={e => setToIdx(Number(e.target.value))}>
            {units.map((u, i) => <option key={u.label} value={i}>{u.label}</option>)}
          </select>
        </Labeled>
      </div>
      <ResultPanel title='변환 결과'>
        <ResultRows rows={[{ label: units[fromIdx].label + ' → ' + units[toIdx].label, value: result.toFixed(6) }]} />
      </ResultPanel>
    </Box>
  );
}

// 11. 석차백분율
function SchoolRankForm() {
  const [rank, setRank] = useState(10);
  const [total, setTotal] = useState(100);
  const rankPct = total > 0 ? (rank / total) * 100 : 0;
  const topPct = total > 0 ? ((rank - 1) / total) * 100 : 0;
  return (
    <Box>
      <div className='grid gap-6 sm:grid-cols-2'>
        <Labeled label='내 석차'><input className={INPUT_CLASS} type='number' value={rank} onChange={e => setRank(num(e.target.value))} /></Labeled>
        <Labeled label='전체 인원'><input className={INPUT_CLASS} type='number' value={total} onChange={e => setTotal(num(e.target.value))} /></Labeled>
      </div>
      <ResultPanel title='석차 결과'>
        <ResultRows rows={[
          { label: '석차백분율 (석차/전체×100)', value: rankPct.toFixed(2) + '%' },
          { label: '상위 % (석차-1)/전체×100', value: topPct.toFixed(2) + '%' },
        ]} />
      </ResultPanel>
    </Box>
  );
}

// 12. 학점 (GPA) 계산기
function GpaCalcForm() {
  const EMPTY = { score: '', credit: '' };
  const [subjects, setSubjects] = useState(Array.from({ length: 4 }, () => ({ ...EMPTY })));
  function scoreToGrade(s: number): number {
    if (s >= 95) return 4.5;
    if (s >= 90) return 4.0;
    if (s >= 85) return 3.5;
    if (s >= 80) return 3.0;
    if (s >= 75) return 2.5;
    if (s >= 70) return 2.0;
    if (s >= 65) return 1.5;
    if (s >= 60) return 1.0;
    return 0.0;
  }
  const { gpa, totalCredit } = useMemo(() => {
    let wSum = 0; let cSum = 0;
    for (const sub of subjects) {
      const s = parseFloat(sub.score); const c = parseFloat(sub.credit);
      if (!isNaN(s) && !isNaN(c) && c > 0) { wSum += scoreToGrade(s) * c; cSum += c; }
    }
    return { gpa: cSum > 0 ? wSum / cSum : 0, totalCredit: cSum };
  }, [subjects]);
  function updateSubject(i: number, key: 'score' | 'credit', val: string) {
    setSubjects(prev => prev.map((s, idx) => idx === i ? { ...s, [key]: val } : s));
  }
  function addRow() { if (subjects.length < 8) setSubjects(prev => [...prev, { ...EMPTY }]); }
  function removeRow() { if (subjects.length > 1) setSubjects(prev => prev.slice(0, -1)); }
  return (
    <Box>
      <div className='space-y-2'>
        {subjects.map((sub, i) => (
          <div key={i} className='grid grid-cols-2 gap-3'>
            <Labeled label={'과목 ' + (i + 1) + ' 점수'}>
              <input className={INPUT_CLASS} type='number' placeholder='0~100' value={sub.score} onChange={e => updateSubject(i, 'score', e.target.value)} />
            </Labeled>
            <Labeled label='학점'>
              <input className={INPUT_CLASS} type='number' placeholder='3' value={sub.credit} onChange={e => updateSubject(i, 'credit', e.target.value)} />
            </Labeled>
          </div>
        ))}
      </div>
      <div className='flex gap-2 mt-2'>
        <button type='button' onClick={addRow} className='rounded-full border border-neutral-300 px-3 py-1 text-xs'>+ 과목 추가</button>
        <button type='button' onClick={removeRow} className='rounded-full border border-neutral-300 px-3 py-1 text-xs'>- 과목 제거</button>
      </div>
      <ResultPanel title='GPA 결과'>
        <ResultRows rows={[
          { label: '총 이수학점', value: String(totalCredit) },
          { label: '가중평균 GPA (4.5 기준)', value: gpa.toFixed(2) },
        ]} />
      </ResultPanel>
    </Box>
  );
}

// 13. 신뢰구간
function ConfidenceIntervalForm() {
  const [mean, setMean] = useState(100);
  const [sigma, setSigma] = useState(15);
  const [n, setN] = useState(30);
  const [level, setLevel] = useState(95);
  const Z_MAP: Record<number, number> = { 90: 1.645, 95: 1.96, 99: 2.576 };
  const z = Z_MAP[level] ?? 1.96;
  const margin = n > 0 ? z * (sigma / Math.sqrt(n)) : 0;
  return (
    <Box>
      <div className='flex flex-wrap gap-2 text-sm mb-4'>
        {[90, 95, 99].map(lv => (
          <button key={lv} type='button'
            className={'rounded-full border px-3 py-1 ' + (level === lv ? 'bg-neutral-900 text-white' : '')}
            onClick={() => setLevel(lv)}>{lv}% 신뢰수준</button>
        ))}
      </div>
      <div className='grid gap-6 sm:grid-cols-3'>
        <Labeled label='표본평균 (μ)'><input className={INPUT_CLASS} type='number' value={mean} onChange={e => setMean(num(e.target.value))} /></Labeled>
        <Labeled label='표준편차 (σ)'><input className={INPUT_CLASS} type='number' value={sigma} onChange={e => setSigma(num(e.target.value))} /></Labeled>
        <Labeled label='표본 수 (n)'><input className={INPUT_CLASS} type='number' value={n} onChange={e => setN(Math.max(1, num(e.target.value)))} /></Labeled>
      </div>
      <ResultPanel title='신뢰구간'>
        <ResultRows rows={[
          { label: 'Z값', value: String(z) },
          { label: '오차 한계 (±)', value: margin.toFixed(4) },
          { label: '신뢰구간 하한', value: (mean - margin).toFixed(4) },
          { label: '신뢰구간 상한', value: (mean + margin).toFixed(4) },
        ]} />
      </ResultPanel>
    </Box>
  );
}

// 14. 발표 시간
function SpeechTimeForm() {
  const [chars, setChars] = useState(1000);
  const [cpm, setCpm] = useState(250);
  const totalSec = cpm > 0 ? Math.round((chars / cpm) * 60) : 0;
  const minutes = Math.floor(totalSec / 60);
  const seconds = totalSec % 60;
  return (
    <Box>
      <div className='grid gap-6 sm:grid-cols-2'>
        <Labeled label='글자 수'><input className={INPUT_CLASS} type='number' value={chars} onChange={e => setChars(num(e.target.value))} /></Labeled>
        <Labeled label='분당 글자 수 (기본 250)'><input className={INPUT_CLASS} type='number' value={cpm} onChange={e => setCpm(Math.max(1, num(e.target.value)))} /></Labeled>
      </div>
      <ResultPanel title='발표 시간'>
        <ResultRows rows={[
          { label: '발표 시간', value: minutes + '분 ' + seconds + '초' },
          { label: '총 초', value: totalSec + '초' },
        ]} />
      </ResultPanel>
    </Box>
  );
}

// 15. P값 (Z값 입력)
function PValueZForm() {
  const [z, setZ] = useState(1.96);
  const pValue = useMemo(() => {
    const absZ = Math.abs(z);
    const p = 0.2316419;
    const b1 = 0.319381530; const b2 = -0.356563782;
    const b3 = 1.781477937; const b4 = -1.821255978; const b5 = 1.330274429;
    const t = 1 / (1 + p * absZ);
    const phi2 = (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * absZ * absZ)
      * (b1 * t + b2 * Math.pow(t, 2) + b3 * Math.pow(t, 3) + b4 * Math.pow(t, 4) + b5 * Math.pow(t, 5));
    return 2 * phi2;
  }, [z]);
  return (
    <Box>
      <Labeled label='Z값'>
        <input className={INPUT_CLASS} type='number' step='0.01' value={z} onChange={e => setZ(num(e.target.value))} />
      </Labeled>
      <ResultPanel title='P값'>
        <ResultRows rows={[
          { label: '양측 P값', value: pValue < 0.0001 ? '< 0.0001' : pValue.toFixed(4) },
          { label: '유의수준 0.05 판정', value: pValue < 0.05 ? '귀무가설 기각 (유의함)' : '기각 불가 (유의하지 않음)' },
        ]} />
      </ResultPanel>
    </Box>
  );
}

// 16. 가중평균
function WeightedAvgForm() {
  const [text, setText] = useState('90,3\n85,4\n70,2');
  const result = useMemo(() => {
    const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
    let wSum = 0; let wTotal = 0;
    for (const line of lines) {
      const parts = line.split(',').map(Number);
      const v = parts[0]; const w = parts[1];
      if (!isNaN(v) && !isNaN(w) && w > 0) { wSum += v * w; wTotal += w; }
    }
    return wTotal > 0 ? wSum / wTotal : 0;
  }, [text]);
  return (
    <Box>
      <Labeled label='값,가중치 (한 줄씩)'>
        <textarea className={TEXTAREA_CLASS} rows={6} value={text} onChange={e => setText(e.target.value)} placeholder='90,3' />
      </Labeled>
      <ResultPanel title='가중평균'>
        <ResultRows rows={[{ label: '가중평균', value: result.toFixed(4) }]} />
      </ResultPanel>
    </Box>
  );
}

// 17. 피어슨 상관계수
function CorrelationForm() {
  const [xText, setXText] = useState('1\n2\n3\n4\n5');
  const [yText, setYText] = useState('2\n4\n5\n4\n5');
  const r = useMemo(() => {
    const xs = xText.split('\n').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
    const ys = yText.split('\n').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
    const n = Math.min(xs.length, ys.length);
    if (n < 2) return null;
    const mx = xs.slice(0, n).reduce((a, b) => a + b, 0) / n;
    const my = ys.slice(0, n).reduce((a, b) => a + b, 0) / n;
    let num2 = 0; let dx = 0; let dy = 0;
    for (let i = 0; i < n; i++) {
      num2 += (xs[i] - mx) * (ys[i] - my);
      dx += Math.pow(xs[i] - mx, 2);
      dy += Math.pow(ys[i] - my, 2);
    }
    const denom = Math.sqrt(dx * dy);
    return denom === 0 ? null : num2 / denom;
  }, [xText, yText]);
  return (
    <Box>
      <div className='grid gap-6 sm:grid-cols-2'>
        <Labeled label='X 값 (줄바꿈 구분)'>
          <textarea className={TEXTAREA_CLASS} rows={6} value={xText} onChange={e => setXText(e.target.value)} />
        </Labeled>
        <Labeled label='Y 값 (줄바꿈 구분)'>
          <textarea className={TEXTAREA_CLASS} rows={6} value={yText} onChange={e => setYText(e.target.value)} />
        </Labeled>
      </div>
      <ResultPanel title='피어슨 상관계수'>
        <ResultRows rows={[
          { label: '피어슨 r', value: r !== null ? r.toFixed(4) : '계산 불가 (데이터 부족)' },
          { label: '해석', value: r === null ? '—' : Math.abs(r) > 0.7 ? '강한 상관' : Math.abs(r) > 0.3 ? '보통 상관' : '약한 상관' },
        ]} />
      </ResultPanel>
    </Box>
  );
}

// 18. 키 백분위
function HeightPercentileForm() {
  const [male, setMale] = useState(true);
  const [height, setHeight] = useState(175);
  function phi(x: number): number {
    const p = 0.2316419;
    const b = [0.319381530, -0.356563782, 1.781477937, -1.821255978, 1.330274429];
    const t = 1 / (1 + p * Math.abs(x));
    const pdf = (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * x * x);
    const poly = b.reduce((acc, bk, k) => acc + bk * Math.pow(t, k + 1), 0);
    const q = 1 - pdf * poly;
    return x >= 0 ? q : 1 - q;
  }
  const mu = male ? 174 : 161;
  const sigma = 6;
  const z = (height - mu) / sigma;
  const topPct = (1 - phi(z)) * 100;
  const bottomPct = phi(z) * 100;
  return (
    <Box>
      <div className='flex gap-2 mb-4'>
        {[true, false].map(m => (
          <button key={String(m)} type='button' onClick={() => setMale(m)}
            className={'rounded-full px-4 py-2 text-sm ' + (male === m ? 'bg-neutral-900 text-white' : 'border border-neutral-300')}>
            {m ? '남성' : '여성'}
          </button>
        ))}
      </div>
      <Labeled label='키 (cm)'>
        <input className={INPUT_CLASS} type='number' value={height} onChange={e => setHeight(num(e.target.value))} />
      </Labeled>
      <ResultPanel title='키 백분위'>
        <ResultRows rows={[
          { label: '기준 평균(μ)', value: mu + ' cm' },
          { label: '표준편차(σ)', value: sigma + ' cm' },
          { label: 'Z값', value: z.toFixed(3) },
          { label: '상위 %', value: topPct.toFixed(1) + '%' },
          { label: '하위 %', value: bottomPct.toFixed(1) + '%' },
        ]} />
      </ResultPanel>
    </Box>
  );
}

// 19. 카페인 섭취량
function CaffeineIntakeForm() {
  const [weight, setWeight] = useState(65);
  const maxMg = weight * 4;
  const americanos = maxMg / 150;
  return (
    <Box>
      <Labeled label='체중 (kg)'>
        <input className={INPUT_CLASS} type='number' value={weight} onChange={e => setWeight(num(e.target.value))} />
      </Labeled>
      <ResultPanel title='카페인 섭취량'>
        <ResultRows rows={[
          { label: '일일 최대 카페인 (4mg/kg)', value: maxMg.toFixed(0) + ' mg' },
          { label: '아메리카노 환산 (150mg/잔)', value: americanos.toFixed(1) + ' 잔' },
        ]} />
      </ResultPanel>
    </Box>
  );
}

// 20. 출산급여
function MaternityPayForm() {
  const [monthly, setMonthly] = useState(3_000_000);
  const [companyType, setCompanyType] = useState<"sme" | "large">("sme");

  // 우선지원대상기업(중소기업): 90일 전체 고용보험 지원, 상한 월 200만원
  // 대기업: 전반 60일 사업주 전액 지급(상한 없음), 후반 30일 고용보험 상한 200만원
  const CAP_MONTHLY = 2_000_000;
  const first60 = companyType === "sme"
    ? Math.min(monthly * 2, CAP_MONTHLY * 2)   // 중소기업: 상한 200만×2개월
    : monthly * 2;                               // 대기업: 사업주 전액, 상한 없음
  const last30 = Math.min(monthly, CAP_MONTHLY); // 후반 30일: 항상 상한 200만원
  const total = first60 + last30;
  const employerPays = companyType === "large" ? first60 : 0;
  const insurancePays = companyType === "large" ? last30 : total;

  return (
    <Box>
      <div className='mb-4 flex gap-2 text-sm'>
        {([["sme", "중소기업(우선지원대상)"], ["large", "대기업"]] as const).map(([v, l]) => (
          <button key={v} type='button'
            className={'rounded-full border px-3 py-1 ' + (companyType === v ? 'bg-neutral-900 text-white' : '')}
            onClick={() => setCompanyType(v)}>{l}</button>
        ))}
      </div>
      <Labeled label='통상임금 (월)'>
        <input className={INPUT_CLASS} type='number' value={monthly} onChange={e => setMonthly(num(e.target.value))} />
      </Labeled>
      <ResultPanel title='출산전후휴가 급여 (90일 추정)' highlight={won(total) + '원'}>
        <ResultRows rows={[
          { label: '전반 60일', value: won(first60) + '원' + (companyType === "sme" ? ' (고용보험, 월 200만원 상한)' : ' (사업주 전액)') },
          { label: '후반 30일', value: won(last30) + '원 (고용보험, 월 200만원 상한)' },
          { label: '합계', value: won(total) + '원' },
          ...(companyType === "large" ? [
            { label: '  사업주 지급분', value: won(employerPays) + '원' },
            { label: '  고용보험 지급분', value: won(insurancePays) + '원' },
          ] : []),
        ]} />
        <p className='mt-3 text-xs text-neutral-400'>실제 지급액은 고용노동부 고시 상한액 변경, 사업장 규모 등에 따라 다를 수 있습니다.</p>
      </ResultPanel>
    </Box>
  );
}

// 21. 근로장려금
function EitcPayForm() {
  type FamilyType = 'single' | 'sole' | 'dual';
  const [type, setType] = useState<FamilyType>('single');
  const [income, setIncome] = useState(15_000_000);
  const TYPES: { key: FamilyType; label: string }[] = [
    { key: 'single', label: '단독가구' },
    { key: 'sole', label: '홑벌이' },
    { key: 'dual', label: '맞벌이' },
  ];
  const eitc = useMemo(() => {
    const i = income;
    if (type === 'single') {
      if (i < 9_000_000) return i * (4_000_000 / 9_000_000);
      if (i <= 21_000_000) return 4_000_000;
      if (i < 33_000_000) return 4_000_000 * (33_000_000 - i) / 12_000_000;
      return 0;
    }
    if (type === 'sole') {
      if (i < 9_000_000) return i * (8_500_000 / 9_000_000);
      if (i <= 22_000_000) return 8_500_000;
      if (i < 41_000_000) return 8_500_000 * (41_000_000 - i) / 19_000_000;
      return 0;
    }
    if (i < 10_000_000) return i * (3_000_000 / 10_000_000);
    if (i <= 22_000_000) return 3_000_000;
    if (i < 38_000_000) return 3_000_000 * (38_000_000 - i) / 16_000_000;
    return 0;
  }, [type, income]);
  return (
    <Box>
      <div className='flex flex-wrap gap-2 text-sm mb-4'>
        {TYPES.map(t => (
          <button key={t.key} type='button'
            className={'rounded-full border px-3 py-1 ' + (type === t.key ? 'bg-neutral-900 text-white' : '')}
            onClick={() => setType(t.key)}>{t.label}</button>
        ))}
      </div>
      <Labeled label='총급여 (연간)'>
        <input className={INPUT_CLASS} type='number' value={income} onChange={e => setIncome(num(e.target.value))} />
      </Labeled>
      <ResultPanel title='근로장려금 (추정)'>
        <ResultRows rows={[{ label: '근로장려금', value: won(Math.round(eitc)) + '원' }]} />
      </ResultPanel>
    </Box>
  );
}

// 22. 소비율 / 저축률
function OverspendRatioForm() {
  const [income, setIncome] = useState(4_000_000);
  const [expense, setExpense] = useState(2_800_000);
  const spendRate = income > 0 ? (expense / income) * 100 : 0;
  const saveRate = income > 0 ? ((income - expense) / income) * 100 : 0;
  return (
    <Box>
      <div className='grid gap-6 sm:grid-cols-2'>
        <Labeled label='소득 (월)'><input className={INPUT_CLASS} type='number' value={income} onChange={e => setIncome(num(e.target.value))} /></Labeled>
        <Labeled label='지출 (월)'><input className={INPUT_CLASS} type='number' value={expense} onChange={e => setExpense(num(e.target.value))} /></Labeled>
      </div>
      <ResultPanel title='소비율 / 저축률'>
        <ResultRows rows={[
          { label: '소비율', value: spendRate.toFixed(1) + '%' },
          { label: '저축률', value: saveRate.toFixed(1) + '%' },
          { label: '저축액', value: won(income - expense) + '원' },
        ]} />
      </ResultPanel>
    </Box>
  );
}

// 23. 전세 vs 월세 비교
function JeonseVsMonthlyForm() {
  const [jeonse, setJeonse] = useState(300_000_000);
  const [deposit, setDeposit] = useState(50_000_000);
  const [monthly, setMonthly] = useState(800_000);
  const [rate, setRate] = useState(3.5);
  const jeonseAnnual = jeonse * (rate / 100);
  const monthlyAnnual = deposit * (rate / 100) + monthly * 12;
  const diff = monthlyAnnual - jeonseAnnual;
  return (
    <Box>
      <div className='grid gap-6 sm:grid-cols-2'>
        <Labeled label='전세금 (원)'><input className={INPUT_CLASS} type='number' value={jeonse} onChange={e => setJeonse(num(e.target.value))} /></Labeled>
        <Labeled label='월세 보증금 (원)'><input className={INPUT_CLASS} type='number' value={deposit} onChange={e => setDeposit(num(e.target.value))} /></Labeled>
        <Labeled label='월세 (원/월)'><input className={INPUT_CLASS} type='number' value={monthly} onChange={e => setMonthly(num(e.target.value))} /></Labeled>
        <Labeled label='이자율 (%)'><input className={INPUT_CLASS} type='number' step='0.1' value={rate} onChange={e => setRate(num(e.target.value))} /></Labeled>
      </div>
      <ResultPanel title='전세 vs 월세 비용 비교'>
        <ResultRows rows={[
          { label: '전세 연간 기회비용', value: won(Math.round(jeonseAnnual)) + '원' },
          { label: '월세 연간 비용', value: won(Math.round(monthlyAnnual)) + '원' },
          { label: '차이 (월세-전세)', value: (diff >= 0 ? '+' : '') + won(Math.round(diff)) + '원' },
          { label: '판정', value: diff > 0 ? '전세가 유리' : diff < 0 ? '월세가 유리' : '동일' },
        ]} />
      </ResultPanel>
    </Box>
  );
}

// 24. 정액법 감가상각
function StraightLineDepreciationForm() {
  const [cost, setCost] = useState(10_000_000);
  const [residual, setResidual] = useState(1_000_000);
  const [life, setLife] = useState(5);
  const annual = life > 0 ? (cost - residual) / life : 0;
  const tableRows = useMemo(() => {
    const list: { label: string; value: string }[] = [];
    let book = cost;
    for (let y = 1; y <= Math.min(life, 20); y++) {
      book -= annual;
      list.push({ label: y + '년차 장부가액', value: won(Math.round(book)) + '원' });
    }
    return list;
  }, [cost, residual, life, annual]);
  return (
    <Box>
      <div className='grid gap-6 sm:grid-cols-3'>
        <Labeled label='취득가 (원)'><input className={INPUT_CLASS} type='number' value={cost} onChange={e => setCost(num(e.target.value))} /></Labeled>
        <Labeled label='잔존가치 (원)'><input className={INPUT_CLASS} type='number' value={residual} onChange={e => setResidual(num(e.target.value))} /></Labeled>
        <Labeled label='내용연수 (년)'><input className={INPUT_CLASS} type='number' value={life} onChange={e => setLife(Math.max(1, num(e.target.value)))} /></Labeled>
      </div>
      <ResultPanel title='정액법 감가상각'>
        <ResultRows rows={[
          { label: '연간 감가상각액', value: won(Math.round(annual)) + '원' },
          ...tableRows,
        ]} />
      </ResultPanel>
    </Box>
  );
}

// 25. EBITDA
function EbitdaCalcForm() {
  const [revenue, setRevenue] = useState(1_000_000_000);
  const [opIncome, setOpIncome] = useState(100_000_000);
  const [da, setDa] = useState(30_000_000);
  const [ia, setIa] = useState(10_000_000);
  const ebitda = opIncome + da + ia;
  const margin = revenue > 0 ? (ebitda / revenue) * 100 : 0;
  return (
    <Box>
      <div className='grid gap-6 sm:grid-cols-2'>
        <Labeled label='매출 (원)'><input className={INPUT_CLASS} type='number' value={revenue} onChange={e => setRevenue(num(e.target.value))} /></Labeled>
        <Labeled label='영업이익 (원)'><input className={INPUT_CLASS} type='number' value={opIncome} onChange={e => setOpIncome(num(e.target.value))} /></Labeled>
        <Labeled label='감가상각 (원)'><input className={INPUT_CLASS} type='number' value={da} onChange={e => setDa(num(e.target.value))} /></Labeled>
        <Labeled label='무형자산상각 (원)'><input className={INPUT_CLASS} type='number' value={ia} onChange={e => setIa(num(e.target.value))} /></Labeled>
      </div>
      <ResultPanel title='EBITDA'>
        <ResultRows rows={[
          { label: 'EBITDA', value: won(ebitda) + '원' },
          { label: 'EBITDA 마진', value: margin.toFixed(2) + '%' },
        ]} />
      </ResultPanel>
    </Box>
  );
}

// 26. APR → EAR 복리 환산
function AprCalcForm() {
  const [apr, setApr] = useState(5);
  const [comp, setComp] = useState<12 | 4 | 2>(12);
  const ear = (Math.pow(1 + (apr / 100) / comp, comp) - 1) * 100;
  return (
    <Box>
      <Labeled label='APR (연 %)'>
        <input className={INPUT_CLASS} type='number' step='0.01' value={apr} onChange={e => setApr(num(e.target.value))} />
      </Labeled>
      <div className='flex flex-wrap gap-2 text-sm mt-2 mb-2'>
        {([12, 4, 2] as const).map(n => (
          <button key={n} type='button'
            className={'rounded-full border px-3 py-1 ' + (comp === n ? 'bg-neutral-900 text-white' : '')}
            onClick={() => setComp(n)}>{n === 12 ? '월 복리' : n === 4 ? '분기 복리' : '반기 복리'}</button>
        ))}
      </div>
      <ResultPanel title='EAR (실효연이율)'>
        <ResultRows rows={[
          { label: '복리 횟수 (n)', value: comp + '회/년' },
          { label: 'EAR (실효연이율)', value: ear.toFixed(4) + '%' },
        ]} />
      </ResultPanel>
    </Box>
  );
}

// 27. FIFA 수수료
function FifaFeeForm() {
  const [price, setPrice] = useState(100_000);
  const fee = price * 0.05;
  const net = price * 0.95;
  return (
    <Box>
      <Labeled label='판매 가격 (코인)'>
        <input className={INPUT_CLASS} type='number' value={price} onChange={e => setPrice(num(e.target.value))} />
      </Labeled>
      <ResultPanel title='FIFA 수수료'>
        <ResultRows rows={[
          { label: '수수료 (5%)', value: won(Math.round(fee)) + ' 코인' },
          { label: '실수령', value: won(Math.round(net)) + ' 코인' },
        ]} />
      </ResultPanel>
    </Box>
  );
}

// 28. 룰렛 스피너
function RouletteSpinnerForm() {
  const [items, setItems] = useState('사과\n바나나\n딸기\n포도');
  const [result, setResult] = useState<string | null>(null);
  function spin() {
    const list = items.split('\n').map(l => l.trim()).filter(Boolean);
    if (list.length === 0) return;
    setResult(list[Math.floor(Math.random() * list.length)]);
  }
  return (
    <Box>
      <Labeled label='항목 목록 (줄바꿈 구분)'>
        <textarea className={TEXTAREA_CLASS} rows={6} value={items} onChange={e => setItems(e.target.value)} />
      </Labeled>
      <button type='button' onClick={spin}
        className='mt-2 w-full rounded-xl bg-neutral-900 py-3 text-sm font-semibold text-white hover:bg-neutral-800'>
        돌리기!
      </button>
      {result !== null && (
        <ResultPanel title='선택 결과'>
          <ResultRows rows={[{ label: '선택된 항목', value: result }]} />
        </ResultPanel>
      )}
    </Box>
  );
}

// 29. 원천세 계산기
function WithholdingTaxForm() {
  const [payment, setPayment] = useState(1_000_000);
  // 소득세와 지방소득세를 합계에서 역산해 1원 오차 방지
  const incomeTax = Math.round(payment * 0.03);
  const tax = Math.round(payment * 0.033);
  const localTax = tax - incomeTax; // 합계 - 소득세 = 지방소득세 (정확히 일치)
  const net = payment - tax;
  return (
    <Box>
      <Labeled label='지급액 (원)'>
        <input className={INPUT_CLASS} type='number' value={payment} onChange={e => setPayment(num(e.target.value))} />
      </Labeled>
      <ResultPanel title='원천세 (3.3%)' highlight={won(tax) + '원'}>
        <ResultRows rows={[
          { label: '소득세 (3%)', value: won(incomeTax) + '원' },
          { label: '지방소득세 (0.3%)', value: won(localTax) + '원' },
          { label: '원천세 합계', value: won(tax) + '원' },
          { label: '실수령액', value: won(net) + '원' },
        ]} />
      </ResultPanel>
    </Box>
  );
}

// 30. 자동차세 계산기
function CarTaxForm() {
  const [cc, setCc] = useState(2000);
  const [age, setAge] = useState(0);
  const baseRate = cc <= 1000 ? 80 : cc <= 1600 ? 140 : 200;
  const baseTax = cc * baseRate;
  const reductionYears = Math.min(Math.max(age - 2, 0), 10);
  const reductionPct = Math.min(reductionYears * 5, 50);
  const finalTax = Math.round(baseTax * (1 - reductionPct / 100));
  return (
    <Box>
      <div className='grid gap-6 sm:grid-cols-2'>
        <Labeled label='배기량 (cc)'><input className={INPUT_CLASS} type='number' value={cc} onChange={e => setCc(num(e.target.value))} /></Labeled>
        <Labeled label='차령 (년, 0=신차)'><input className={INPUT_CLASS} type='number' value={age} onChange={e => setAge(Math.max(0, num(e.target.value)))} /></Labeled>
      </div>
      <ResultPanel title='자동차세'>
        <ResultRows rows={[
          { label: '기본세율', value: baseRate + '원/cc' },
          { label: '기준 세액', value: won(baseTax) + '원' },
          { label: '차령 감면율', value: reductionPct + '%' },
          { label: '최종 자동차세', value: won(finalTax) + '원' },
        ]} />
      </ResultPanel>
    </Box>
  );
}
