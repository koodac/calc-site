"use client";

import { useMemo, useState, type ReactNode } from "react";
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
