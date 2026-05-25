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
  const bmi = w / (h / 100) ** 2;
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="체중(kg)">
          <input type="number" className={INPUT_CLASS} value={w} onChange={(e) => setW(num(e.target.value))} />
        </Labeled>
        <Labeled label="키(cm)">
          <input type="number" className={INPUT_CLASS} value={h} onChange={(e) => setH(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과" highlight={`BMI ${bmi.toFixed(2)}`} />
    </Box>
  );
}

function BmrForm() {
  const [male, setMale] = useState(true);
  const [age, setAge] = useState(30);
  const [w, setW] = useState(70);
  const [h, setH] = useState(175);
  const bmr = useMemo(() => {
    if (male) return 10 * w + 6.25 * h - 5 * age + 5;
    return 10 * w + 6.25 * h - 5 * age - 161;
  }, [male, age, w, h]);
  return (
    <Box>
      <div className="flex gap-2">
        <button type="button" className={`rounded-full px-4 py-2 text-sm ${male ? "bg-neutral-900 text-white" : "border"}`} onClick={() => setMale(true)}>남</button>
        <button type="button" className={`rounded-full px-4 py-2 text-sm ${!male ? "bg-neutral-900 text-white" : "border"}`} onClick={() => setMale(false)}>여</button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="나이">
          <input type="number" className={INPUT_CLASS} value={age} onChange={(e) => setAge(num(e.target.value))} />
        </Labeled>
        <Labeled label="체중(kg)">
          <input type="number" className={INPUT_CLASS} value={w} onChange={(e) => setW(num(e.target.value))} />
        </Labeled>
        <Labeled label="키(cm)">
          <input type="number" className={INPUT_CLASS} value={h} onChange={(e) => setH(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel
        title="계산 결과"
        subtitle="Mifflin–St Jeor 공식 기준 추정입니다."
        highlight={`약 ${Math.round(bmr)} kcal/일`}
      />
    </Box>
  );
}

function PercentForm() {
  const [a, setA] = useState(100);
  const [b, setB] = useState(130);
  const pct = a === 0 ? 0 : ((b - a) / a) * 100;
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="기준값">
          <input type="number" className={INPUT_CLASS} value={a} onChange={(e) => setA(num(e.target.value))} />
        </Labeled>
        <Labeled label="변경값">
          <input type="number" className={INPUT_CLASS} value={b} onChange={(e) => setB(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과" highlight={`증감률 ${pct.toFixed(2)}%`} />
    </Box>
  );
}

function SalaryRaiseForm() {
  const [before, setBefore] = useState(48_000_000);
  const [after, setAfter] = useState(51_000_000);
  const pct = before === 0 ? 0 : ((after - before) / before) * 100;
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="기존 연봉(원)">
          <input type="number" className={INPUT_CLASS} value={before} onChange={(e) => setBefore(num(e.target.value))} />
        </Labeled>
        <Labeled label="인상 후 연봉(원)">
          <input type="number" className={INPUT_CLASS} value={after} onChange={(e) => setAfter(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과" highlight={`인상률 ${pct.toFixed(2)}%`} />
    </Box>
  );
}

function VatForm() {
  const [supply, setSupply] = useState(1_000_000);
  const vat = Math.round(supply * 0.1);
  return (
    <Box>
      <Labeled label="공급가액(원)">
        <input type="number" className={INPUT_CLASS} value={supply} onChange={(e) => setSupply(num(e.target.value))} />
      </Labeled>
      <ResultPanel title="부가세 · 합계">
        <ResultRows
          rows={[
            { label: "부가세(10%)", value: `${won(vat)}원` },
            { label: "합계금액", value: `${won(supply + vat)}원` },
          ]}
        />
      </ResultPanel>
    </Box>
  );
}

function DiscountForm() {
  const [price, setPrice] = useState(100000);
  const [rate, setRate] = useState(10);
  const sale = Math.round(price * (1 - rate / 100));
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="정가">
          <input type="number" className={INPUT_CLASS} value={price} onChange={(e) => setPrice(num(e.target.value))} />
        </Labeled>
        <Labeled label="할인율(%)">
          <input type="number" className={INPUT_CLASS} value={rate} onChange={(e) => setRate(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과" highlight={`판매가 ${won(sale)}원`} />
    </Box>
  );
}

function CurrencyForm() {
  const [krw, setKrw] = useState(100000);
  const [rate, setRate] = useState(1400);
  const usd = krw / rate;
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="원화(원)">
          <input type="number" className={INPUT_CLASS} value={krw} onChange={(e) => setKrw(num(e.target.value))} />
        </Labeled>
        <Labeled label="환율(원/USD)">
          <input type="number" className={INPUT_CLASS} value={rate} onChange={(e) => setRate(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과" highlight={`대략 USD ${usd.toFixed(2)}`} />
    </Box>
  );
}

function CagrForm() {
  const [s, setS] = useState(100);
  const [e, setE] = useState(150);
  const [y, setY] = useState(3);
  const cagr = s <= 0 || e <= 0 || y <= 0 ? 0 : (Math.pow(e / s, 1 / y) - 1) * 100;
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="초기값">
          <input type="number" className={INPUT_CLASS} value={s} onChange={(e) => setS(num(e.target.value))} />
        </Labeled>
        <Labeled label="최종값">
          <input type="number" className={INPUT_CLASS} value={e} onChange={(e) => setE(num(e.target.value))} />
        </Labeled>
        <div className="sm:col-span-2">
          <Labeled label="기간(년)">
            <input type="number" className={INPUT_CLASS} value={y} onChange={(e) => setY(num(e.target.value))} />
          </Labeled>
        </div>
      </div>
      <ResultPanel title="계산 결과" highlight={`CAGR ${cagr.toFixed(2)}%`} />
    </Box>
  );
}

function RoiForm() {
  const [inv, setInv] = useState(1000000);
  const [gain, setGain] = useState(150000);
  const roi = inv === 0 ? 0 : (gain / inv) * 100;
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="투입">
          <input type="number" className={INPUT_CLASS} value={inv} onChange={(e) => setInv(num(e.target.value))} />
        </Labeled>
        <Labeled label="이익(또는 회수–투입)">
          <input type="number" className={INPUT_CLASS} value={gain} onChange={(e) => setGain(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과" highlight={`ROI ${roi.toFixed(2)}%`} />
    </Box>
  );
}

function RoasForm() {
  const [rev, setRev] = useState(10_000_000);
  const [ad, setAd] = useState(2_000_000);
  const roas = ad === 0 ? 0 : rev / ad;
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="매출(원)">
          <input type="number" className={INPUT_CLASS} value={rev} onChange={(e) => setRev(num(e.target.value))} />
        </Labeled>
        <Labeled label="광고비(원)">
          <input type="number" className={INPUT_CLASS} value={ad} onChange={(e) => setAd(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과" highlight={`ROAS ${roas.toFixed(2)}배`} />
    </Box>
  );
}

function MortgageForm() {
  const [p, setP] = useState(200_000_000);
  const [annual, setAnnual] = useState(4.5);
  const [months, setMonths] = useState(360);
  const r = annual / 100 / 12;
  const pay = r === 0 ? p / months : (p * r) / (1 - Math.pow(1 + r, -months));
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="대출원금(원)">
          <input type="number" className={INPUT_CLASS} value={p} onChange={(e) => setP(num(e.target.value))} />
        </Labeled>
        <Labeled label="연이율(%)">
          <input type="number" className={INPUT_CLASS} value={annual} onChange={(e) => setAnnual(num(e.target.value))} />
        </Labeled>
        <div className="sm:col-span-2">
          <Labeled label="개월 수">
            <input type="number" className={INPUT_CLASS} value={months} onChange={(e) => setMonths(Math.max(1, Math.floor(num(e.target.value))))} />
          </Labeled>
        </div>
      </div>
      <ResultPanel title="월 상환액" subtitle="원리금 균등 상환 기준" highlight={`약 ${won(pay)}원`} />
    </Box>
  );
}

function SavingsForm() {
  const [pmt, setPmt] = useState(500000);
  const [annual, setAnnual] = useState(4);
  const [months, setMonths] = useState(36);
  const r = annual / 100 / 12;
  let fv = 0;
  for (let i = 0; i < months; i++) fv = (fv + pmt) * (1 + r);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="월 납입(원)">
          <input type="number" className={INPUT_CLASS} value={pmt} onChange={(e) => setPmt(num(e.target.value))} />
        </Labeled>
        <Labeled label="연이율(%)">
          <input type="number" className={INPUT_CLASS} value={annual} onChange={(e) => setAnnual(num(e.target.value))} />
        </Labeled>
        <div className="sm:col-span-2">
          <Labeled label="개월">
            <input type="number" className={INPUT_CLASS} value={months} onChange={(e) => setMonths(Math.max(1, Math.floor(num(e.target.value))))} />
          </Labeled>
        </div>
      </div>
      <ResultPanel title="만기 예상액" subtitle="월말 복리 적용" highlight={`약 ${won(fv)}원`} />
    </Box>
  );
}

function MarginForm() {
  const [cost, setCost] = useState(7000);
  const [price, setPrice] = useState(10000);
  const margin = price === 0 ? 0 : ((price - cost) / price) * 100;
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="원가">
          <input type="number" className={INPUT_CLASS} value={cost} onChange={(e) => setCost(num(e.target.value))} />
        </Labeled>
        <Labeled label="판매가">
          <input type="number" className={INPUT_CLASS} value={price} onChange={(e) => setPrice(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과" highlight={`마진율 ${margin.toFixed(2)}%`} />
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
  const apy = (Math.pow(1 + nominal / 100 / n, n) - 1) * 100;
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="명목 연이율(%)">
          <input type="number" className={INPUT_CLASS} value={nominal} onChange={(e) => setNominal(num(e.target.value))} />
        </Labeled>
        <Labeled label="복리 주기(연 n회)">
          <input type="number" className={INPUT_CLASS} value={n} onChange={(e) => setN(Math.max(1, Math.floor(num(e.target.value))))} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과" subtitle="유효 연율(APY)" highlight={`약 ${apy.toFixed(3)}%`} />
    </Box>
  );
}

function CpmForm() {
  const [cost, setCost] = useState(500000);
  const [imp, setImp] = useState(1000000);
  const cpm = imp === 0 ? 0 : (cost / imp) * 1000;
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="광고비(원)">
          <input type="number" className={INPUT_CLASS} value={cost} onChange={(e) => setCost(num(e.target.value))} />
        </Labeled>
        <Labeled label="노출 수">
          <input type="number" className={INPUT_CLASS} value={imp} onChange={(e) => setImp(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과" highlight={`CPM ${won(cpm)}원`} />
    </Box>
  );
}

function BreakevenForm() {
  const [loss, setLoss] = useState(20);
  const rec = loss >= 100 ? Infinity : 100 / (100 - loss) - 1;
  return (
    <Box>
      <Labeled label="손실률(%)">
        <input type="number" className={INPUT_CLASS} value={loss} onChange={(e) => setLoss(num(e.target.value))} />
      </Labeled>
      <ResultPanel
        title="계산 결과"
        subtitle="본전 복구에 필요한 수익률(참고)"
        highlight={Number.isFinite(rec) ? `약 ${(rec * 100).toFixed(2)}%` : "∞"}
      />
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
  const [a, setA] = useState(12);
  const [b, setB] = useState(18);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="a">
          <input type="number" className={INPUT_CLASS} value={a} onChange={(e) => setA(num(e.target.value))} />
        </Labeled>
        <Labeled label="b">
          <input type="number" className={INPUT_CLASS} value={b} onChange={(e) => setB(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과" highlight={`LCM ${lcmTwo(a, b)}`} />
    </Box>
  );
}

function GcdForm() {
  const [a, setA] = useState(48);
  const [b, setB] = useState(18);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="a">
          <input type="number" className={INPUT_CLASS} value={a} onChange={(e) => setA(num(e.target.value))} />
        </Labeled>
        <Labeled label="b">
          <input type="number" className={INPUT_CLASS} value={b} onChange={(e) => setB(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과" highlight={`GCD ${gcdTwo(a, b)}`} />
    </Box>
  );
}

function AvgForm() {
  const [text, setText] = useState("1, 2, 3, 4");
  const avg = useMemo(() => {
    const xs = text
      .split(/[\s,]+/)
      .map((s) => Number(s.trim()))
      .filter((n) => Number.isFinite(n));
    if (!xs.length) return 0;
    return xs.reduce((a, b) => a + b, 0) / xs.length;
  }, [text]);
  return (
    <Box>
      <Labeled label="숫자(쉼표 또는 공백 구분)">
        <textarea className={TEXTAREA_CLASS} rows={3} value={text} onChange={(e) => setText(e.target.value)} />
      </Labeled>
      <ResultPanel title="계산 결과" highlight={`평균 ${avg}`} />
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
  const [n, setN] = useState(10);
  const v = useMemo(() => {
    let a = 0,
      b = 1;
    const t = Math.max(0, Math.min(80, Math.floor(n)));
    for (let i = 0; i < t; i++) [a, b] = [b, a + b];
    return a;
  }, [n]);
  return (
    <Box>
      <Labeled label="n (0부터)">
        <input type="number" className={INPUT_CLASS} value={n} onChange={(e) => setN(num(e.target.value))} />
      </Labeled>
      <ResultPanel title="계산 결과" highlight={`F(n) = ${v}`} />
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
  const [pyeong, setPyeong] = useState(32);
  const m2 = pyeong * 3.305785;
  return (
    <Box>
      <Labeled label="평">
        <input type="number" className={INPUT_CLASS} value={pyeong} onChange={(e) => setPyeong(num(e.target.value))} />
      </Labeled>
      <ResultPanel title="계산 결과" highlight={`㎡ 약 ${m2.toFixed(2)}`} />
    </Box>
  );
}

function TempForm() {
  const [c, setC] = useState(25);
  const f = (c * 9) / 5 + 32;
  const k = c + 273.15;
  return (
    <Box>
      <Labeled label="섭씨(°C)">
        <input type="number" className={INPUT_CLASS} value={c} onChange={(e) => setC(num(e.target.value))} />
      </Labeled>
      <ResultPanel title="변환 결과">
        <ResultRows
          rows={[
            { label: "화씨(°F)", value: f.toFixed(2) },
            { label: "켈빈(K)", value: k.toFixed(2) },
          ]}
        />
      </ResultPanel>
    </Box>
  );
}

function InchCmForm() {
  const [inch, setInch] = useState(10);
  const cm = inch * 2.54;
  return (
    <Box>
      <Labeled label="inch">
        <input type="number" className={INPUT_CLASS} value={inch} onChange={(e) => setInch(num(e.target.value))} />
      </Labeled>
      <ResultPanel title="계산 결과" highlight={`cm ${cm.toFixed(3)}`} />
    </Box>
  );
}

function ByteForm() {
  const [bytes, setBytes] = useState(1536);
  const kb = bytes / 1024;
  const mb = kb / 1024;
  return (
    <Box>
      <Labeled label="바이트">
        <input type="number" className={INPUT_CLASS} value={bytes} onChange={(e) => setBytes(num(e.target.value))} />
      </Labeled>
      <ResultPanel title="계산 결과">
        <ResultRows
          rows={[
            { label: "KiB", value: kb.toFixed(3) },
            { label: "MiB", value: mb.toFixed(6) },
          ]}
        />
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
  const [mode, setMode] = useState<"st" | "sd" | "dt">("st");
  const [v, setV] = useState(10);
  const [t, setT] = useState(2);
  const [d, setD] = useState(20);
  const speed = d / t;
  const time = d / v;
  const dist = v * t;
  return (
    <Box>
      <div className="flex gap-2 text-sm">
        <button type="button" className={`rounded-full border px-3 py-1 ${mode === "st" ? "bg-neutral-900 text-white" : ""}`} onClick={() => setMode("st")}>속도</button>
        <button type="button" className={`rounded-full border px-3 py-1 ${mode === "sd" ? "bg-neutral-900 text-white" : ""}`} onClick={() => setMode("sd")}>시간</button>
        <button type="button" className={`rounded-full border px-3 py-1 ${mode === "dt" ? "bg-neutral-900 text-white" : ""}`} onClick={() => setMode("dt")}>거리</button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="속도(km/h)">
          <input type="number" className={INPUT_CLASS} value={v} onChange={(e) => setV(num(e.target.value))} />
        </Labeled>
        <Labeled label="시간(h)">
          <input type="number" className={INPUT_CLASS} value={t} onChange={(e) => setT(num(e.target.value))} />
        </Labeled>
        <div className="sm:col-span-2">
          <Labeled label="거리(km)">
            <input type="number" className={INPUT_CLASS} value={d} onChange={(e) => setD(num(e.target.value))} />
          </Labeled>
        </div>
      </div>
      <ResultPanel
        title="계산 결과"
        highlight={
          mode === "st"
            ? `속도 ${speed.toFixed(3)} km/h`
            : mode === "sd"
              ? `시간 ${time.toFixed(3)} h`
              : `거리 ${dist.toFixed(3)} km`
        }
      />
    </Box>
  );
}

function DdayForm() {
  const [end, setEnd] = useState(() => new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10));
  const days = useMemo(() => {
    const e = new Date(end + "T00:00:00");
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const diff = Math.round((e.getTime() - now.getTime()) / 86400000);
    return diff;
  }, [end]);
  return (
    <Box>
      <Labeled label="목표일">
        <input type="date" className={INPUT_CLASS} value={end} onChange={(e) => setEnd(e.target.value)} />
      </Labeled>
      <ResultPanel title="계산 결과" highlight={`D-${days}`} />
    </Box>
  );
}

function AgeForm() {
  const [birth, setBirth] = useState("1996-01-15");
  const [ref, setRef] = useState(() => new Date().toISOString().slice(0, 10));
  const age = useMemo(() => {
    const b = new Date(birth + "T00:00:00");
    const r = new Date(ref + "T00:00:00");
    let y = r.getFullYear() - b.getFullYear();
    const m = r.getMonth() - b.getMonth();
    if (m < 0 || (m === 0 && r.getDate() < b.getDate())) y--;
    return y;
  }, [birth, ref]);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="생년월일">
          <input type="date" className={INPUT_CLASS} value={birth} onChange={(e) => setBirth(e.target.value)} />
        </Labeled>
        <Labeled label="기준일">
          <input type="date" className={INPUT_CLASS} value={ref} onChange={(e) => setRef(e.target.value)} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과" highlight={`만 나이 ${age}세`} />
    </Box>
  );
}

function DutchForm() {
  const [total, setTotal] = useState(120000);
  const [people, setPeople] = useState(4);
  const per = people <= 0 ? 0 : total / people;
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="총액(원)">
          <input type="number" className={INPUT_CLASS} value={total} onChange={(e) => setTotal(num(e.target.value))} />
        </Labeled>
        <Labeled label="인원">
          <input type="number" className={INPUT_CLASS} value={people} onChange={(e) => setPeople(Math.max(1, Math.floor(num(e.target.value))))} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과" highlight={`1인당 약 ${won(per)}원`} />
    </Box>
  );
}

function TipForm() {
  const [bill, setBill] = useState(80000);
  const [pct, setPct] = useState(10);
  const [n, setN] = useState(3);
  const tip = bill * (pct / 100);
  const total = bill + tip;
  const per = n <= 0 ? 0 : total / n;
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="식사비">
          <input type="number" className={INPUT_CLASS} value={bill} onChange={(e) => setBill(num(e.target.value))} />
        </Labeled>
        <Labeled label="팁(%)">
          <input type="number" className={INPUT_CLASS} value={pct} onChange={(e) => setPct(num(e.target.value))} />
        </Labeled>
        <div className="sm:col-span-2">
          <Labeled label="인원">
            <input type="number" className={INPUT_CLASS} value={n} onChange={(e) => setN(Math.max(1, Math.floor(num(e.target.value))))} />
          </Labeled>
        </div>
      </div>
      <ResultPanel title="계산 결과">
        <ResultRows
          rows={[
            { label: "합계", value: `${won(total)}원` },
            { label: "1인 부담", value: `${won(per)}원` },
          ]}
        />
      </ResultPanel>
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
  const [l, setL] = useState(40);
  const [price, setPrice] = useState(1700);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="주유량(L)">
          <input type="number" className={INPUT_CLASS} value={l} onChange={(e) => setL(num(e.target.value))} />
        </Labeled>
        <Labeled label="리터당(원)">
          <input type="number" className={INPUT_CLASS} value={price} onChange={(e) => setPrice(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="예상 금액" highlight={`${won(l * price)}원`} />
    </Box>
  );
}

function ElecForm() {
  const [kwh, setKwh] = useState(300);
  const [unit, setUnit] = useState(120);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="월 사용량(kWh)">
          <input type="number" className={INPUT_CLASS} value={kwh} onChange={(e) => setKwh(num(e.target.value))} />
        </Labeled>
        <Labeled label="단가(원/kWh, 참고값)">
          <input type="number" className={INPUT_CLASS} value={unit} onChange={(e) => setUnit(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel
        title="예상 요금"
        subtitle="2026년 요금·누진 구간은 한전 고지와 다를 수 있습니다. 단가는 직접 조정해 주세요."
        highlight={`대략 ${won(kwh * unit)}원`}
      />
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

function SubnetForm() {
  const [ip, setIp] = useState("192.168.1.10");
  const [cidr, setCidr] = useState(24);
  const info = useMemo(() => {
    const host = ipToInt(ip);
    if (host === null) return null;
    const mask = cidr === 0 ? 0 : (~0 << (32 - cidr)) >>> 0;
    const network = host & mask;
    const broadcast = network | (~mask >>> 0);
    return { network, broadcast, mask };
  }, [ip, cidr]);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="IPv4">
          <input className={`${INPUT_CLASS} font-mono text-sm`} value={ip} onChange={(e) => setIp(e.target.value)} />
        </Labeled>
        <Labeled label="/CIDR">
          <input type="number" className={INPUT_CLASS} value={cidr} onChange={(e) => setCidr(Math.min(32, Math.max(0, Math.floor(num(e.target.value)))))} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과">
        <p className="mt-4 font-mono text-xs">{info ? `네트워크 주소 정수: ${info.network}` : "IPv4 형식 오류"}</p>
      </ResultPanel>
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
  const avg = ab > 0 ? h / ab : 0;
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="안타 H">
          <input type="number" className={INPUT_CLASS} value={h} onChange={(e) => setH(num(e.target.value))} />
        </Labeled>
        <Labeled label="타수 AB">
          <input type="number" className={INPUT_CLASS} value={ab} onChange={(e) => setAb(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="계산 결과" highlight={`타율 ${avg.toFixed(3)}`} />
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
  const info = useMemo(() => {
    if (!d) return null;
    const dt = new Date(`${d}T12:00:00`);
    if (Number.isNaN(dt.getTime())) return null;
    return { dt, year: dt.getFullYear(), month: dt.getMonth() + 1, day: dt.getDate() };
  }, [d]);
  const refFrom1949 = info && info.year > 1949 ? info.year - 1949 : null;
  return (
    <Box>
      <Labeled label="입대일">
        <input type="date" className={INPUT_CLASS} value={d} onChange={(e) => setD(e.target.value)} />
      </Labeled>
      <ResultPanel title="일정 요약" highlight={info ? `${info.year}년 ${info.month}월 ${info.day}일` : "—"}>
        <ResultRows
          rows={[
            {
              label: "연도 기준 참고번호 (입대연도 − 1949)",
              value: refFrom1949 != null ? String(refFrom1949) : "—",
            },
            {
              label: "안내",
              value: "공식 ‘기수’ 산정은 입영·편성 통지에 따릅니다.",
            },
          ]}
        />
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

type BFrame = { r1: number; r2: number };

function BowlingPinSumForm() {
  const [frames, setFrames] = useState<BFrame[]>(() => Array.from({ length: 10 }, () => ({ r1: 0, r2: 0 })));
  const naivePins = useMemo(() => {
    let s = 0;
    for (const f of frames) {
      const a = Math.min(10, Math.max(0, Math.round(f.r1)));
      if (a >= 10) s += 10;
      else {
        const b = Math.min(10 - a, Math.max(0, Math.round(f.r2)));
        s += a + b;
      }
    }
    return s;
  }, [frames]);
  return (
    <Box>
      <p className="text-sm text-neutral-600">
        각 프레임 1·2구 낙구만 합산합니다. 스트라이크·스페어 가점 규칙은 적용하지 않습니다.
      </p>
      <div className="space-y-3">
        {frames.map((f, i) => (
          <div key={i} className="grid grid-cols-[auto_1fr_1fr] items-end gap-2 sm:grid-cols-[4rem_1fr_1fr]">
            <span className="pb-2 text-xs text-neutral-500">{i + 1}F</span>
            <Labeled label="1구">
              <input
                type="number"
                className={INPUT_CLASS}
                value={f.r1}
                min={0}
                max={10}
                onChange={(e) => {
                  const v = Math.min(10, Math.max(0, Math.round(num(e.target.value))));
                  const next = [...frames];
                  const r2 = v >= 10 ? 0 : next[i].r2;
                  next[i] = { r1: v, r2: r2 };
                  setFrames(next);
                }}
              />
            </Labeled>
            <Labeled label="2구">
              <input
                type="number"
                className={INPUT_CLASS}
                value={f.r2}
                min={0}
                max={10}
                disabled={f.r1 >= 10}
                onChange={(e) => {
                  const v = Math.min(10, Math.max(0, Math.round(num(e.target.value))));
                  const next = [...frames];
                  next[i] = { ...next[i], r2: f.r1 >= 10 ? 0 : v };
                  setFrames(next);
                }}
              />
            </Labeled>
          </div>
        ))}
      </div>
      <ResultPanel title="순 낙구 합(참고)" highlight={`${naivePins}핀`} />
    </Box>
  );
}

function CurlingEndSumForm() {
  const [ends, setEnds] = useState(() => Array.from({ length: 8 }, () => 0));
  const total = ends.reduce((a, b) => a + b, 0);
  return (
    <Box>
      <p className="text-sm text-neutral-600">엔드별 득점을 합산합니다 (한 팀 기준).</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {ends.map((v, i) => (
          <Labeled key={i} label={`엔드 ${i + 1}`}>
            <input
              type="number"
              className={INPUT_CLASS}
              value={v}
              onChange={(e) => {
                const next = [...ends];
                next[i] = Math.max(0, Math.floor(num(e.target.value)));
                setEnds(next);
              }}
            />
          </Labeled>
        ))}
      </div>
      <ResultPanel title="득점 합계" highlight={`${total}점`} />
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

  const CAPS_66 = [200, 250, 300, 350, 400, 450].map((v) => v * 10_000);

  const results = useMemo(() => {
    if (mode === "std") {
      const monthly = Math.min(STD_CAP, Math.max(STD_FLOOR, Math.round(wage * STD_RATE)));
      return Array.from({ length: 12 }, (_, i) => ({ month: i + 1, pay: monthly }));
    }
    // 6+6: 최초 6개월 100% (상한 200~450만), 이후 80% 상한 150만
    return Array.from({ length: 12 }, (_, i) => {
      if (i < 6) {
        const cap = CAPS_66[i];
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
