"use client";

/**
 * resolveCalculatorKind()에는 있으나 과거 Registry switch에 없어 default(안내만)로 가던 종류들.
 */
import { useMemo, useState } from "react";
import {
  CalculatorShell,
  INPUT_CLASS,
  ResultPanel,
  ResultRows,
} from "@/components/calculators/ToolFormLayout";
import { Labeled, num, won, NumInput } from "@/components/calculators/calcUi";
import {
  MINIMUM_HOURLY_2026,
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
} from "@/lib/calc/job";
import {
  calcBMR,
  calcTDEE,
  calcStandardWeight,
  calcProtein,
  calcWater,
  calcStepsCalories,
  calcHeatIndex,
  calcOneRM,
  calcFFMI,
  calcBSAMosteller,
  calcCreatinineClearance,
  calcEGFR,
  calcFriedewaldLDL,
  calcLeanMass,
  calcHeightPrediction,
  calcSleepCycleTimes,
  calcAlcoholGrams,
  calcBACWidmark,
} from "@/lib/calc/health";
import { calcFractionToDecimal } from "@/lib/calc/school";
import { calcWinRate, calcErrorRate } from "@/lib/calc/sports";
import { calcFortyNineDay } from "@/lib/calc/military";

function Box({ children }: { children: React.ReactNode }) {
  return <CalculatorShell>{children}</CalculatorShell>;
}

const MINIMUM_HOURLY_REFERENCE = MINIMUM_HOURLY_2026;

/** 연가보상 등: (월 급여 / 30) × 일수 간이 */
export function DailyRateMoneyForm() {
  const [monthly, setMonthly] = useState(3_500_000);
  const [days, setDays] = useState(10);
  const daily = monthly / 30;
  const pay = calcDailyRate(monthly, days);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="월 봉급·급여(원)">
          <NumInput className={INPUT_CLASS} value={monthly} onChange={(e) => setMonthly(num(e.target.value))} />
        </Labeled>
        <Labeled label="연가·환산 일수">
          <NumInput className={INPUT_CLASS} value={days} onChange={(e) => setDays(Math.max(0, num(e.target.value)))} />
        </Labeled>
      </div>
      <ResultPanel title="간이 연가보상비(추정)" subtitle="소속·직렬·계급별 세부 규정과 다를 수 있습니다." highlight={`${won(pay)}원`}>
        <ResultRows rows={[{ label: "1일분(월÷30)", value: `${won(Math.round(daily))}원` }]} />
      </ResultPanel>
    </Box>
  );
}

export function AchievementRateForm() {
  const [target, setTarget] = useState(100);
  const [achieved, setAchieved] = useState(80);
  const rate = calcAchievementRate(target, achieved);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="목표값">
          <NumInput className={INPUT_CLASS} value={target} onChange={(e) => setTarget(num(e.target.value))} />
        </Labeled>
        <Labeled label="달성값">
          <NumInput className={INPUT_CLASS} value={achieved} onChange={(e) => setAchieved(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="달성률" highlight={`${rate.toFixed(2)}%`} subtitle="달성값 ÷ 목표값 × 100" />
    </Box>
  );
}

export function SalaryForecastForm() {
  const [current, setCurrent] = useState(48_000_000);
  const [pct, setPct] = useState(3);
  const [years, setYears] = useState(5);
  const future = useMemo(() => calcSalaryForecast(current, pct, years), [current, pct, years]);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="현재 연봉(원)">
          <NumInput className={INPUT_CLASS} value={current} onChange={(e) => setCurrent(num(e.target.value))} />
        </Labeled>
        <Labeled label="연평균 인상률(%)">
          <NumInput step="0.1" className={INPUT_CLASS} value={pct} onChange={(e) => setPct(num(e.target.value))} />
        </Labeled>
        <div className="sm:col-span-2">
          <Labeled label="적용 연수">
            <NumInput className={INPUT_CLASS} value={years} onChange={(e) => setYears(Math.max(0, num(e.target.value)))} />
          </Labeled>
        </div>
      </div>
      <ResultPanel title="예상 연봉" highlight={`${won(future)}원`} subtitle="복리(연속 인상) 가정" />
    </Box>
  );
}

export function TenureDateRangeForm({ variant }: { variant: "tenure" | "leave" }) {
  const [start, setStart] = useState("2018-01-02");
  const [end, setEnd] = useState(() => new Date().toISOString().slice(0, 10));
  const diff = useMemo(() => calcDateDiff(start, end), [start, end]);
  const roughLeave = useMemo(() => calcAnnualLeaveDays(start, end), [start, end]);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="시작일(입사 등)">
          <input type="date" className={INPUT_CLASS} value={start} onChange={(e) => setStart(e.target.value)} />
        </Labeled>
        <Labeled label="종료일(기준일)">
          <input type="date" className={INPUT_CLASS} value={end} onChange={(e) => setEnd(e.target.value)} />
        </Labeled>
      </div>
      <ResultPanel title="기간 계산">
        <ResultRows
          rows={[
            { label: "일수(양 끝 포함)", value: `${diff.days.toLocaleString("ko-KR")}일` },
            { label: "연 환산(÷365)", value: diff.years.toFixed(4) },
            ...(variant === "leave"
              ? [{ label: "연차 참고치(대략)", value: `약 ${roughLeave}일 (법 적용은 별도)` }]
              : []),
          ]}
        />
      </ResultPanel>
    </Box>
  );
}

export function WorkMinutesSimpleForm() {
  const [sh, setSh] = useState(9);
  const [sm, setSm] = useState(0);
  const [eh, setEh] = useState(18);
  const [em, setEm] = useState(0);
  const minutes = useMemo(() => calcWorkMinutes(sh, sm, eh, em), [sh, sm, eh, em]);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="출근(시)">
          <NumInput className={INPUT_CLASS} value={sh} onChange={(e) => setSh(num(e.target.value))} />
        </Labeled>
        <Labeled label="출근(분)">
          <NumInput className={INPUT_CLASS} value={sm} onChange={(e) => setSm(num(e.target.value))} />
        </Labeled>
        <Labeled label="퇴근(시)">
          <NumInput className={INPUT_CLASS} value={eh} onChange={(e) => setEh(num(e.target.value))} />
        </Labeled>
        <Labeled label="퇴근(분)">
          <NumInput className={INPUT_CLASS} value={em} onChange={(e) => setEm(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="근무시간" highlight={`${Math.floor(minutes / 60)}시간 ${minutes % 60}분`} subtitle="휴게·연장·야간은 미반영" />
    </Box>
  );
}

export function MonthlyHourlyForm() {
  const [monthly, setMonthly] = useState(2_500_000);
  const [hours, setHours] = useState(209);
  const hourly = calcMonthlyToHourly(monthly, hours);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="월 급여(원)">
          <NumInput className={INPUT_CLASS} value={monthly} onChange={(e) => setMonthly(num(e.target.value))} />
        </Labeled>
        <Labeled hint="소정근로시간 합(통상 209h 전후)" label="월 소정근로시간(h)">
          <NumInput className={INPUT_CLASS} value={hours} onChange={(e) => setHours(Math.max(1, num(e.target.value)))} />
        </Labeled>
      </div>
      <ResultPanel title="시급 환산" highlight={`${won(hourly)}원`} />
    </Box>
  );
}

export function UnitsPerHourForm() {
  const [units, setUnits] = useState(120);
  const [h, setH] = useState(8);
  const uph = calcUPH(units, h);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="처리량·생산량">
          <NumInput className={INPUT_CLASS} value={units} onChange={(e) => setUnits(num(e.target.value))} />
        </Labeled>
        <Labeled label="투입 시간(h)">
          <NumInput className={INPUT_CLASS} value={h} onChange={(e) => setH(Math.max(0, num(e.target.value)))} />
        </Labeled>
      </div>
      <ResultPanel title="UPH" highlight={uph.toFixed(2)} />
    </Box>
  );
}

export function MinimumWageForm() {
  const [hourly, setHourly] = useState(10_320);
  const ok = hourly >= MINIMUM_HOURLY_REFERENCE;
  return (
    <Box>
      <Labeled label="시급(원)">
        <NumInput className={INPUT_CLASS} value={hourly} onChange={(e) => setHourly(num(e.target.value))} />
      </Labeled>
      <ResultPanel
        title="최저임금 대비"
        subtitle={`참고 시급 하한 ${won(MINIMUM_HOURLY_REFERENCE)}원·고시 기준 확인 필요`}
        highlight={ok ? "기준 시급 이상(참고)" : "기준 미만 가능(확인 필요)"}
      />
    </Box>
  );
}

export function WeeklyHolidaySimpleForm() {
  const [wage, setWage] = useState(12_000);
  const [wh, setWh] = useState(40);
  const bonus = calcWeeklyHolidayPay(wage, wh);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="시급(원)">
          <NumInput className={INPUT_CLASS} value={wage} onChange={(e) => setWage(num(e.target.value))} />
        </Labeled>
        <Labeled label="주 소정근로(h)">
          <NumInput className={INPUT_CLASS} value={wh} onChange={(e) => setWh(Math.max(1, num(e.target.value)))} />
        </Labeled>
      </div>
      <ResultPanel title="주휴수당(대략)" highlight={`${won(bonus)}원`} subtitle="1일 8시간 기준 가정 · 주15h 미만 지급 없음 · 7일 개근·유급 요건 등 별도" />
    </Box>
  );
}

export function UnusedAnnualPayForm() {
  const [daily, setDaily] = useState(120_000);
  const [unused, setUnused] = useState(5);
  const pay = calcUnusedAnnualPay(daily, unused);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="1일 통상임금(원)">
          <NumInput className={INPUT_CLASS} value={daily} onChange={(e) => setDaily(num(e.target.value))} />
        </Labeled>
        <Labeled label="미사용 연차 일수">
          <NumInput className={INPUT_CLASS} value={unused} onChange={(e) => setUnused(Math.max(0, num(e.target.value)))} />
        </Labeled>
      </div>
      <ResultPanel title="연차수당(추정)" highlight={`${won(pay)}원`} />
    </Box>
  );
}

export function AttendanceRateForm() {
  const [ok, setOk] = useState(20);
  const [total, setTotal] = useState(22);
  const rate = calcAttendanceRate(ok, total);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="실근무·출근 일수">
          <NumInput className={INPUT_CLASS} value={ok} onChange={(e) => setOk(num(e.target.value))} />
        </Labeled>
        <Labeled label="전체 근무일·대상 일수">
          <NumInput className={INPUT_CLASS} value={total} onChange={(e) => setTotal(Math.max(1, num(e.target.value)))} />
        </Labeled>
      </div>
      <ResultPanel title="출근율" highlight={`${rate.toFixed(2)}%`} />
    </Box>
  );
}

export function PartTimeWeeklyPayForm() {
  const [wage, setWage] = useState(10_320);
  const [h, setH] = useState(20);
  const [weeks, setWeeks] = useState(4);
  const pay = calcPartTimePay(wage, h, weeks);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="시급(원)">
          <NumInput className={INPUT_CLASS} value={wage} onChange={(e) => setWage(num(e.target.value))} />
        </Labeled>
        <Labeled label="주 근무시간">
          <NumInput className={INPUT_CLASS} value={h} onChange={(e) => setH(num(e.target.value))} />
        </Labeled>
        <div className="sm:col-span-2">
          <Labeled label="주 수">
            <NumInput className={INPUT_CLASS} value={weeks} onChange={(e) => setWeeks(Math.max(1, num(e.target.value)))} />
          </Labeled>
        </div>
      </div>
      <ResultPanel title="예상 급여" highlight={`${won(pay)}원`} subtitle="주휴·연장 미포함" />
    </Box>
  );
}

export function StandardWeightForm() {
  const [h, setH] = useState(170);
  const [male, setMale] = useState(true);
  const ideal = calcStandardWeight(h, male);
  return (
    <Box>
      <div className="flex gap-2">
        <button type="button" className={`rounded-full px-4 py-2 text-sm ${male ? "bg-neutral-900 text-white" : "border"}`} onClick={() => setMale(true)}>남</button>
        <button type="button" className={`rounded-full px-4 py-2 text-sm ${!male ? "bg-neutral-900 text-white" : "border"}`} onClick={() => setMale(false)}>여</button>
      </div>
      <Labeled label="키(cm)">
        <NumInput className={INPUT_CLASS} value={h} onChange={(e) => setH(num(e.target.value))} />
      </Labeled>
      <ResultPanel title="표준체중(브로카 참고)" highlight={`${ideal.toFixed(1)} kg`} />
    </Box>
  );
}

export function ProteinIntakeForm() {
  const [w, setW] = useState(70);
  const g = calcProtein(w);
  return (
    <Box>
      <Labeled label="체중(kg)">
        <NumInput className={INPUT_CLASS} value={w} onChange={(e) => setW(num(e.target.value))} />
      </Labeled>
      <ResultPanel title="단백질(참고, g/일)" highlight={`${g.toFixed(0)} g`} subtitle="운동 강도에 따라 증가 권장" />
    </Box>
  );
}

export function WaterIntakeForm() {
  const [w, setW] = useState(70);
  const ml = calcWater(w);
  return (
    <Box>
      <Labeled label="체중(kg)">
        <NumInput className={INPUT_CLASS} value={w} onChange={(e) => setW(num(e.target.value))} />
      </Labeled>
      <ResultPanel title="물(참고, ml/일)" highlight={`${ml.toLocaleString("ko-KR")} ml`} />
    </Box>
  );
}

export function SleepCycleForm() {
  const [bedH, setBedH] = useState(23);
  const cycles = calcSleepCycleTimes(bedH, 0);
  return (
    <Box>
      <Labeled label="잠자리에 드는 시각(시, 0–23)">
        <NumInput className={INPUT_CLASS} value={bedH} onChange={(e) => setBedH(Math.min(23, Math.max(0, num(e.target.value))))} />
      </Labeled>
      <ResultPanel title="90분 주기 기상(참고)">
        <ul className="mt-4 list-inside space-y-1 text-sm text-neutral-700">
          {cycles.map(({ cycles: n, hour, minute }) => (
            <li key={n}>
              {n}주기 후 약 {hour}시 {String(minute).padStart(2, "0")}분 경
            </li>
          ))}
        </ul>
      </ResultPanel>
    </Box>
  );
}

export function StepsCaloriesForm() {
  const [steps, setSteps] = useState(8000);
  const [w, setW] = useState(70);
  const kcal = calcStepsCalories(steps, w);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="걸음 수">
          <NumInput className={INPUT_CLASS} value={steps} onChange={(e) => setSteps(num(e.target.value))} />
        </Labeled>
        <Labeled label="체중(kg)">
          <NumInput className={INPUT_CLASS} value={w} onChange={(e) => setW(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="소모 칼로리(추정)" highlight={`${kcal.toFixed(0)} kcal`} />
    </Box>
  );
}

export function HeatIndexForm() {
  const [t, setT] = useState(32);
  const [rh, setRh] = useState(70);

  const result = useMemo(() => {
    const { discomfortIndex: di, heatIndexC: hi } = calcHeatIndex(t, rh);
    const diLabel = di < 68 ? "쾌적" : di < 75 ? "보통" : di < 80 ? "약간 불쾌" : "매우 불쾌";
    return { di, diLabel, hi };
  }, [t, rh]);

  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="기온(°C)">
          <NumInput className={INPUT_CLASS} value={t} onChange={(e) => setT(num(e.target.value))} />
        </Labeled>
        <Labeled label="상대습도(%)">
          <NumInput className={INPUT_CLASS} value={rh} onChange={(e) => setRh(Math.min(100, Math.max(0, num(e.target.value))))} />
        </Labeled>
      </div>
      <ResultPanel
        title="체감온도·불쾌지수"
        highlight={`불쾌지수 ${result.di.toFixed(1)}`}
        subtitle={result.diLabel}
      >
        <ResultRows rows={[
          { label: "불쾌지수 (Thom)", value: `${result.di.toFixed(1)} — ${result.diLabel}` },
          ...(result.hi !== null
            ? [{ label: "Heat Index (Rothfusz)", value: `${result.hi.toFixed(1)}°C` }]
            : [{ label: "Heat Index", value: "27°C·습도 40% 이상일 때 표시" }]
          ),
        ]} />
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="bg-neutral-100">
              {["불쾌지수","판정"].map(h => <th key={h} className="border border-neutral-200 px-2 py-1.5 font-medium">{h}</th>)}
            </tr></thead>
            <tbody>
              {[["68 미만","쾌적"],["68~74","보통"],["75~79","약간 불쾌"],["80 이상","매우 불쾌"]].map(([r,l]) => (
                <tr key={r}><td className="border border-neutral-200 px-2 py-1.5 text-center">{r}</td><td className="border border-neutral-200 px-2 py-1.5 text-center">{l}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </ResultPanel>
    </Box>
  );
}

export function OneRmForm() {
  const [w, setW] = useState(80);
  const [r, setR] = useState(5);
  const one = calcOneRM(w, r);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="들어 올린 무게(kg)">
          <NumInput className={INPUT_CLASS} value={w} onChange={(e) => setW(num(e.target.value))} />
        </Labeled>
        <Labeled label="반복 횟수">
          <NumInput className={INPUT_CLASS} value={r} onChange={(e) => setR(Math.max(1, num(e.target.value)))} />
        </Labeled>
      </div>
      <ResultPanel title="1RM(Epley 추정)" highlight={`${one.toFixed(1)} kg`} />
    </Box>
  );
}

export function BiorhythmForm() {
  const [birth, setBirth] = useState("1995-06-15");
  const phase = useMemo(() => {
    const b = new Date(`${birth}T00:00:00`);
    const days = Math.floor((Date.now() - b.getTime()) / 86400000);
    return {
      p: Math.sin((2 * Math.PI * days) / 23),
      e: Math.sin((2 * Math.PI * days) / 28),
      i: Math.sin((2 * Math.PI * days) / 33),
    };
  }, [birth]);
  return (
    <Box>
      <Labeled label="생년월일">
        <input type="date" className={INPUT_CLASS} value={birth} onChange={(e) => setBirth(e.target.value)} />
      </Labeled>
      <ResultPanel title="바이오 리듬(정규화 −1~1)">
        <ResultRows
          rows={[
            { label: "신체", value: phase.p.toFixed(3) },
            { label: "감성", value: phase.e.toFixed(3) },
            { label: "지적", value: phase.i.toFixed(3) },
          ]}
        />
      </ResultPanel>
    </Box>
  );
}

export function HeartRateReserveForm() {
  const [age, setAge] = useState(30);
  const [rest, setRest] = useState(60);
  const max = 220 - age;
  const reserve = max - rest;
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="나이">
          <NumInput className={INPUT_CLASS} value={age} onChange={(e) => setAge(num(e.target.value))} />
        </Labeled>
        <Labeled label="안정 시 심박">
          <NumInput className={INPUT_CLASS} value={rest} onChange={(e) => setRest(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="HRR" subtitle={`예측 최대 심박(220−나이) ${max}bpm`} highlight={`${reserve} bpm`} />
    </Box>
  );
}

export function TdeeForm() {
  const [w, setW] = useState(70);
  const [h, setH] = useState(175);
  const [age, setAge] = useState(30);
  const [male, setMale] = useState(true);
  const [act, setAct] = useState(1.55);
  const bmr = useMemo(() => calcBMR(male, age, w, h), [male, age, w, h]);
  const tdee = calcTDEE(bmr, act);
  return (
    <Box>
      <div className="flex gap-2">
        <button type="button" className={`rounded-full px-4 py-2 text-sm ${male ? "bg-neutral-900 text-white" : "border"}`} onClick={() => setMale(true)}>남</button>
        <button type="button" className={`rounded-full px-4 py-2 text-sm ${!male ? "bg-neutral-900 text-white" : "border"}`} onClick={() => setMale(false)}>여</button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="체중(kg)">
          <NumInput className={INPUT_CLASS} value={w} onChange={(e) => setW(num(e.target.value))} />
        </Labeled>
        <Labeled label="키(cm)">
          <NumInput className={INPUT_CLASS} value={h} onChange={(e) => setH(num(e.target.value))} />
        </Labeled>
        <Labeled label="나이">
          <NumInput className={INPUT_CLASS} value={age} onChange={(e) => setAge(num(e.target.value))} />
        </Labeled>
        <Labeled hint="보통 1.2~1.9" label="활동 계수">
          <NumInput step="0.05" className={INPUT_CLASS} value={act} onChange={(e) => setAct(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="TDEE(추정)" highlight={`${Math.round(tdee)} kcal/일`} />
    </Box>
  );
}

export function FfmiForm() {
  const [h, setH] = useState(175);
  const [w, setW] = useState(75);
  const [bf, setBf] = useState(15);
  const ffmi = calcFFMI(w, h, bf);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="키(cm)">
          <NumInput className={INPUT_CLASS} value={h} onChange={(e) => setH(num(e.target.value))} />
        </Labeled>
        <Labeled label="체중(kg)">
          <NumInput className={INPUT_CLASS} value={w} onChange={(e) => setW(num(e.target.value))} />
        </Labeled>
        <Labeled label="체지방률(%)">
          <NumInput className={INPUT_CLASS} value={bf} onChange={(e) => setBf(Math.min(60, Math.max(0, num(e.target.value))))} />
        </Labeled>
      </div>
      <ResultPanel title="FFMI" highlight={ffmi.toFixed(2)} />
    </Box>
  );
}

export function BsaForm() {
  const [h, setH] = useState(175);
  const [w, setW] = useState(70);
  const bsa = calcBSAMosteller(w, h);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="키(cm)">
          <NumInput className={INPUT_CLASS} value={h} onChange={(e) => setH(num(e.target.value))} />
        </Labeled>
        <Labeled label="체중(kg)">
          <NumInput className={INPUT_CLASS} value={w} onChange={(e) => setW(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="BSA(Mosteller)" highlight={`${bsa.toFixed(2)} ㎡`} />
    </Box>
  );
}

export function CreatinineClearanceForm() {
  const [age, setAge] = useState(50);
  const [w, setW] = useState(70);
  const [cr, setCr] = useState(1);
  const [female, setFemale] = useState(false);
  const crCl = calcCreatinineClearance(cr, age, w, !female);
  return (
    <Box>
      <div className="flex gap-2">
        <button type="button" className={`rounded-full px-4 py-2 text-sm ${!female ? "bg-neutral-900 text-white" : "border"}`} onClick={() => setFemale(false)}>남</button>
        <button type="button" className={`rounded-full px-4 py-2 text-sm ${female ? "bg-neutral-900 text-white" : "border"}`} onClick={() => setFemale(true)}>여</button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="나이">
          <NumInput className={INPUT_CLASS} value={age} onChange={(e) => setAge(num(e.target.value))} />
        </Labeled>
        <Labeled label="체중(kg)">
          <NumInput className={INPUT_CLASS} value={w} onChange={(e) => setW(num(e.target.value))} />
        </Labeled>
        <Labeled label="크레아티닌(mg/dL)">
          <NumInput step="0.01" className={INPUT_CLASS} value={cr} onChange={(e) => setCr(Math.max(0.01, num(e.target.value)))} />
        </Labeled>
      </div>
      <ResultPanel title="CrCl(C-G, ml/min)" highlight={crCl.toFixed(1)} subtitle="임상 판단·신기능 평가는 의료진 상담" />
    </Box>
  );
}

export function OvulationForm() {
  const [cycle, setCycle] = useState(28);
  const [last, setLast] = useState(() => new Date().toISOString().slice(0, 10));
  const ov = useMemo(() => {
    const d = new Date(`${last}T00:00:00`);
    d.setDate(d.getDate() + cycle - 14);
    return d.toISOString().slice(0, 10);
  }, [cycle, last]);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="주기(일)">
          <NumInput className={INPUT_CLASS} value={cycle} onChange={(e) => setCycle(Math.max(20, num(e.target.value)))} />
        </Labeled>
        <Labeled label="최근 월경 시작일">
          <input type="date" className={INPUT_CLASS} value={last} onChange={(e) => setLast(e.target.value)} />
        </Labeled>
      </div>
      <ResultPanel title="추정 배란일(참고)" highlight={ov} />
    </Box>
  );
}

export function EgfrForm() {
  const [cr, setCr] = useState(1);
  const [age, setAge] = useState(45);
  const [female, setFemale] = useState(false);
  const egfr = calcEGFR(cr, age, !female);
  return (
    <Box>
      <div className="flex gap-2">
        <button type="button" className={`rounded-full px-4 py-2 text-sm ${!female ? "bg-neutral-900 text-white" : "border"}`} onClick={() => setFemale(false)}>남</button>
        <button type="button" className={`rounded-full px-4 py-2 text-sm ${female ? "bg-neutral-900 text-white" : "border"}`} onClick={() => setFemale(true)}>여</button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="혈청 크레아티닌(mg/dL)">
          <NumInput step="0.01" className={INPUT_CLASS} value={cr} onChange={(e) => setCr(Math.max(0.01, num(e.target.value)))} />
        </Labeled>
        <Labeled label="나이">
          <NumInput className={INPUT_CLASS} value={age} onChange={(e) => setAge(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="eGFR(CKD-EPI 1변수 근사)" highlight={`${egfr.toFixed(1)}`} subtitle="체중·인종 미반영 단순화" />
    </Box>
  );
}

export function FriedewaldLdlForm() {
  const [tc, setTc] = useState(200);
  const [hdl, setHdl] = useState(50);
  const [tg, setTg] = useState(150);
  const ldl = calcFriedewaldLDL(tc, hdl, tg);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="총콜레스테롤(mg/dL)">
          <NumInput className={INPUT_CLASS} value={tc} onChange={(e) => setTc(num(e.target.value))} />
        </Labeled>
        <Labeled label="HDL(mg/dL)">
          <NumInput className={INPUT_CLASS} value={hdl} onChange={(e) => setHdl(num(e.target.value))} />
        </Labeled>
        <div className="sm:col-span-2">
          <Labeled label="중성지방(mg/dL)">
            <NumInput className={INPUT_CLASS} value={tg} onChange={(e) => setTg(num(e.target.value))} />
          </Labeled>
        </div>
      </div>
      <ResultPanel title="LDL(Friedewald)" highlight={`${Math.round(ldl)} mg/dL`} subtitle="TG·400 초과 시 부적합" />
    </Box>
  );
}

export function BacWidmarkForm() {
  const [w, setW] = useState(70);
  const [drinks, setDrinks] = useState(2);
  const [ml, setMl] = useState(50);
  const ethanol = calcAlcoholGrams(ml, 16) * drinks;
  const bac = calcBACWidmark(ethanol, w, true, 0);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="체중(kg)">
          <NumInput className={INPUT_CLASS} value={w} onChange={(e) => setW(num(e.target.value))} />
        </Labeled>
        <Labeled label="잔 수">
          <NumInput className={INPUT_CLASS} value={drinks} onChange={(e) => setDrinks(Math.max(0, num(e.target.value)))} />
        </Labeled>
        <div className="sm:col-span-2">
          <Labeled label="1잔 기준 음료량(ml, 소주 50ml 등 · 도수 16% 기준)">
            <NumInput className={INPUT_CLASS} value={ml} onChange={(e) => setMl(Math.max(1, num(e.target.value)))} />
          </Labeled>
        </div>
      </div>
      <ResultPanel title="혈중알코올(많이 단순화)" highlight={`${bac.toFixed(3)}%`} subtitle="Widmark류 추정·흡수·대사·시간 미반영, 참고용" />
    </Box>
  );
}

export function FractionDecimalForm() {
  const [nume, setNume] = useState(3);
  const [den, setDen] = useState(8);
  const dec = den === 0 ? 0 : calcFractionToDecimal(nume, den);
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="분자">
          <NumInput className={INPUT_CLASS} value={nume} onChange={(e) => setNume(num(e.target.value))} />
        </Labeled>
        <Labeled label="분모">
          <NumInput className={INPUT_CLASS} value={den} onChange={(e) => setDen(Math.max(1, num(e.target.value)))} />
        </Labeled>
      </div>
      <ResultPanel title="소수" highlight={String(dec)} />
    </Box>
  );
}

/** 키 성장 예측 계산기 — 중간 부모 키 공식(Tanner) */
export function HeightPredictionForm() {
  const [fatherH, setFatherH] = useState(175);
  const [motherH, setMotherH] = useState(162);

  const sonH = calcHeightPrediction(fatherH, motherH, true).predicted;
  const daughterH = calcHeightPrediction(fatherH, motherH, false).predicted;

  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="아버지 키(cm)">
          <NumInput className={INPUT_CLASS} value={fatherH} onChange={(e) => setFatherH(num(e.target.value))} />
        </Labeled>
        <Labeled label="어머니 키(cm)">
          <NumInput className={INPUT_CLASS} value={motherH} onChange={(e) => setMotherH(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="예상 키(중간 부모 키 공식, 참고)" subtitle="유전 외 영양·운동·수면 등 환경 요인에 따라 ±10cm 이상 차이 가능">
        <ResultRows rows={[
          { label: "아들 예상 키", value: `약 ${sonH.toFixed(1)} cm` },
          { label: "딸 예상 키", value: `약 ${daughterH.toFixed(1)} cm` },
        ]} />
      </ResultPanel>
    </Box>
  );
}

/** 오차율 계산기 — |측정값 - 이론값| / 이론값 × 100 */
export function ErrorRateForm() {
  const [theoretical, setTheoretical] = useState(100);
  const [measured, setMeasured] = useState(97);

  const absError = Math.abs(measured - theoretical);
  const errorRate = calcErrorRate(absError, Math.abs(theoretical));
  const sign = measured >= theoretical ? "+" : "-";

  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="이론값(참값)">
          <NumInput className={INPUT_CLASS} value={theoretical} onChange={(e) => setTheoretical(num(e.target.value))} />
        </Labeled>
        <Labeled label="측정값(실험값)">
          <NumInput className={INPUT_CLASS} value={measured} onChange={(e) => setMeasured(num(e.target.value))} />
        </Labeled>
      </div>
      <ResultPanel title="오차율" highlight={`${errorRate.toFixed(4)} %`} subtitle="|측정값 − 이론값| ÷ |이론값| × 100">
        <ResultRows rows={[
          { label: "절대 오차", value: `${sign}${absError}` },
          { label: "오차율", value: `${errorRate.toFixed(4)} %` },
        ]} />
      </ResultPanel>
    </Box>
  );
}

/** 49재 계산기 — 기일로부터 49일째 날짜 */
export function FortyNineForm() {
  const [deathDate, setDeathDate] = useState(() => new Date().toISOString().slice(0, 10));

  const result = useMemo(() => {
    const date49 = calcFortyNineDay(deathDate);
    const target = new Date(`${date49}T00:00:00`);
    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
    return { date49, day49: weekdays[target.getDay()] };
  }, [deathDate]);

  return (
    <Box>
      <Labeled label="기일(사망일)">
        <input type="date" className={INPUT_CLASS} value={deathDate} onChange={(e) => setDeathDate(e.target.value)} />
      </Labeled>
      <ResultPanel title="49재 날짜" highlight={`${result.date49} (${result.day49})`} subtitle="기일을 1일로 계산 — 지역·종파에 따라 다를 수 있습니다" />
    </Box>
  );
}

/** 제지방·골격근량 추정 계산기 — 체중·체지방률 기반 */
export function LeanMassForm() {
  const [h, setH] = useState(175);
  const [w, setW] = useState(75);
  const [bf, setBf] = useState(18);

  const lean = calcLeanMass(w, bf);
  const fat = w - lean;
  const ffmi = calcFFMI(w, h, bf);
  const smm = lean * 0.55;

  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="키(cm)">
          <NumInput className={INPUT_CLASS} value={h} onChange={(e) => setH(num(e.target.value))} />
        </Labeled>
        <Labeled label="체중(kg)">
          <NumInput className={INPUT_CLASS} value={w} onChange={(e) => setW(num(e.target.value))} />
        </Labeled>
        <div className="sm:col-span-2">
          <Labeled label="체지방률(%)">
            <NumInput step="0.1" className={INPUT_CLASS} value={bf} onChange={(e) => setBf(Math.min(60, Math.max(0, num(e.target.value))))} />
          </Labeled>
        </div>
      </div>
      <ResultPanel title="체성분 추정" highlight={`제지방 ${lean.toFixed(1)} kg`} subtitle="체지방률 측정 방법에 따라 오차 발생 · 정확한 측정은 인바디 권장">
        <ResultRows rows={[
          { label: "제지방량(LBM)", value: `${lean.toFixed(1)} kg` },
          { label: "체지방량", value: `${fat.toFixed(1)} kg` },
          { label: "골격근량 추정(LBM × 0.55)", value: `약 ${smm.toFixed(1)} kg` },
          { label: "FFMI", value: ffmi.toFixed(2) },
        ]} />
      </ResultPanel>
    </Box>
  );
}

/** 은퇴자금 계산기 — 목표 노후자금·적립 기간·수익률 기반 */
export function RetirementFundForm() {
  const [currentAge, setCurrentAge] = useState(35);
  const [retireAge, setRetireAge] = useState(60);
  const [currentSaving, setCurrentSaving] = useState(10_000_000);
  const [monthly, setMonthly] = useState(500_000);
  const [rate, setRate] = useState(5);

  const result = useMemo(() => {
    const years = Math.max(0, retireAge - currentAge);
    const months = years * 12;
    const r = rate / 100 / 12; // 월 수익률

    // 현재 저축액 미래 가치
    const fvCurrent = currentSaving * Math.pow(1 + r, months);
    // 월 적립 미래 가치
    const fvMonthly = r === 0 ? monthly * months : monthly * ((Math.pow(1 + r, months) - 1) / r);
    const total = fvCurrent + fvMonthly;

    return { years, total, fvCurrent, fvMonthly };
  }, [currentAge, retireAge, currentSaving, monthly, rate]);

  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="현재 나이">
          <NumInput className={INPUT_CLASS} value={currentAge} onChange={(e) => setCurrentAge(Math.max(1, num(e.target.value)))} />
        </Labeled>
        <Labeled label="은퇴 목표 나이">
          <NumInput className={INPUT_CLASS} value={retireAge} onChange={(e) => setRetireAge(Math.max(currentAge + 1, num(e.target.value)))} />
        </Labeled>
        <Labeled label="현재 저축액(원)">
          <NumInput className={INPUT_CLASS} value={currentSaving} onChange={(e) => setCurrentSaving(Math.max(0, num(e.target.value)))} />
        </Labeled>
        <Labeled label="월 저축 예정액(원)">
          <NumInput className={INPUT_CLASS} value={monthly} onChange={(e) => setMonthly(Math.max(0, num(e.target.value)))} />
        </Labeled>
        <div className="sm:col-span-2">
          <Labeled label="연 기대 수익률(%)">
            <NumInput step="0.1" className={INPUT_CLASS} value={rate} onChange={(e) => setRate(Math.max(0, num(e.target.value)))} />
          </Labeled>
        </div>
      </div>
      <ResultPanel title="은퇴 시 예상 자금(추정)" highlight={`${won(result.total)}원`} subtitle="세금·인플레이션 미반영 · 실제 운용 성과는 다를 수 있음">
        <ResultRows rows={[
          { label: "적립 기간", value: `${result.years}년 (${result.years * 12}개월)` },
          { label: "현재 저축 미래 가치", value: `${won(result.fvCurrent)}원` },
          { label: "월 적립 미래 가치", value: `${won(result.fvMonthly)}원` },
          { label: "은퇴 시 예상 합계", value: `${won(result.total)}원` },
        ]} />
      </ResultPanel>
    </Box>
  );
}

/** 일일 비타민 섭취량 계산기 — 성별·나이별 권장 섭취 참고값 */
export function VitaminIntakeForm() {
  const [age, setAge] = useState(30);
  const [male, setMale] = useState(true);

  // 한국인 영양소 섭취기준(보건복지부) 주요 비타민 권장량 참고값
  const getValues = (a: number, m: boolean) => {
    const child = a < 9;
    const teen = a >= 9 && a < 19;
    const senior = a >= 65;
    return [
      { name: "비타민 A (μgRAE/일)", value: child ? 300 : teen ? (m ? 700 : 600) : m ? (senior ? 700 : 800) : (senior ? 600 : 650) },
      { name: "비타민 D (μg/일)", value: child ? 5 : a < 65 ? 10 : 15 },
      { name: "비타민 C (mg/일)", value: child ? 40 : teen ? 90 : 100 },
      { name: "비타민 B1 티아민 (mg/일)", value: child ? 0.5 : teen ? (m ? 1.1 : 1.0) : m ? 1.2 : 1.1 },
      { name: "비타민 B2 리보플라빈 (mg/일)", value: child ? 0.6 : teen ? (m ? 1.5 : 1.2) : m ? 1.5 : 1.2 },
      { name: "비타민 B6 (mg/일)", value: child ? 0.7 : teen ? (m ? 1.5 : 1.4) : m ? 1.5 : 1.4 },
      { name: "비타민 B12 (μg/일)", value: child ? 1.5 : teen ? 2.4 : 2.4 },
      { name: "엽산 (μgDFE/일)", value: child ? 200 : teen ? 400 : 400 },
      { name: "비타민 E (mg α-TE/일)", value: child ? 6 : teen ? (m ? 11 : 10) : m ? 12 : 12 },
      { name: "비타민 K (μg/일)", value: child ? 45 : teen ? (m ? 80 : 65) : m ? 75 : 65 },
    ];
  };

  const rows = getValues(age, male);

  return (
    <Box>
      <div className="flex gap-2">
        <button type="button" className={`rounded-full px-4 py-2 text-sm ${male ? "bg-neutral-900 text-white" : "border"}`} onClick={() => setMale(true)}>남</button>
        <button type="button" className={`rounded-full px-4 py-2 text-sm ${!male ? "bg-neutral-900 text-white" : "border"}`} onClick={() => setMale(false)}>여</button>
      </div>
      <Labeled label="나이" hint="만 9세 미만은 참고 정확도가 낮습니다">
        <NumInput className={INPUT_CLASS} value={age} onChange={(e) => setAge(Math.max(1, Math.min(99, num(e.target.value))))} />
      </Labeled>
      <ResultPanel title="일일 비타민 권장 섭취량(참고)" subtitle="한국인 영양소 섭취기준(보건복지부) 기반 · 만 9세 미만은 단순화 적용 · 질환·임신·수유 시 별도 확인">
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="bg-neutral-100">
              {["비타민", "권장량(참고)"].map((h) => <th key={h} className="border border-neutral-200 px-2 py-1.5 font-medium text-left">{h}</th>)}
            </tr></thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.name} className="even:bg-neutral-50">
                  <td className="border border-neutral-200 px-2 py-1.5">{r.name}</td>
                  <td className="border border-neutral-200 px-2 py-1.5 text-right font-medium">{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ResultPanel>
    </Box>
  );
}

/** 최대 근육 체중 계산기 — Berkhan 공식 기반 자연적 한계 추정 */
export function MaxMuscleMassForm() {
  const [h, setH] = useState(175);
  const [bf, setBf] = useState(10);
  const [male, setMale] = useState(true);

  // Martin Berkhan 공식: 남성 최대 LBM ≈ 신장(cm) - 100, 여성 ≈ × 0.85 보정
  const maxLbm = male ? h - 100 : (h - 100) * 0.85;
  const maxWeight = bf >= 100 ? 0 : Math.round((maxLbm / (1 - bf / 100)) * 10) / 10;

  return (
    <Box>
      <div className="flex gap-2">
        <button type="button" className={`rounded-full px-4 py-2 text-sm ${male ? "bg-neutral-900 text-white" : "border"}`} onClick={() => setMale(true)}>남</button>
        <button type="button" className={`rounded-full px-4 py-2 text-sm ${!male ? "bg-neutral-900 text-white" : "border"}`} onClick={() => setMale(false)}>여</button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="신장(cm)">
          <NumInput className={INPUT_CLASS} value={h} onChange={(e) => setH(Math.max(140, Math.min(220, num(e.target.value))))} />
        </Labeled>
        <Labeled label="목표 체지방률(%)">
          <NumInput step="0.5" className={INPUT_CLASS} value={bf} onChange={(e) => setBf(Math.max(3, Math.min(40, num(e.target.value))))} />
        </Labeled>
      </div>
      <ResultPanel title="최대 근육 체중(Berkhan 공식, 추정)" highlight={`${maxWeight} kg`} subtitle="무보조(내추럴) 상한 참고치 · 개인차 매우 큼 · 여성은 보정계수 0.85 적용">
        <ResultRows rows={[
          { label: "최대 제지방량(LBM) 추정", value: `${maxLbm.toFixed(1)} kg` },
          { label: "목표 체지방률", value: `${bf}%` },
          { label: "해당 체지방률 기준 체중", value: `${maxWeight} kg` },
        ]} />
      </ResultPanel>
    </Box>
  );
}

/** 판매 수수료 계산기 — 판매가 × 수수료율 = 수수료·실수령액 */
export function SalesCommissionForm() {
  const [price, setPrice] = useState(100_000);
  const [rate, setRate] = useState(10.8);
  const commission = Math.round(price * rate / 100);
  const net = price - commission;
  const PRESETS = [
    { label: "쿠팡 로켓그로스", rate: 10.8 },
    { label: "스마트스토어 기본", rate: 5.85 },
    { label: "G마켓/옥션", rate: 12 },
    { label: "11번가", rate: 11 },
  ];
  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="판매가격(원)">
          <NumInput className={INPUT_CLASS} value={price} onChange={(e) => setPrice(num(e.target.value))} />
        </Labeled>
        <Labeled label="수수료율(%)">
          <NumInput step="0.01" className={INPUT_CLASS} value={rate} onChange={(e) => setRate(Math.max(0, Math.min(100, num(e.target.value))))} />
        </Labeled>
      </div>
      <div>
        <p className="mb-2 text-xs text-neutral-500">플랫폼별 참고 요율 (실제와 다를 수 있음)</p>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button key={p.label} type="button"
              className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-800 hover:bg-neutral-100"
              onClick={() => setRate(p.rate)}>
              {p.label} {p.rate}%
            </button>
          ))}
        </div>
      </div>
      <ResultPanel title="수수료 계산" highlight={`실수령 ${won(net)}원`}>
        <ResultRows rows={[
          { label: "판매가격", value: `${won(price)}원` },
          { label: `수수료 (${rate}%)`, value: `${won(commission)}원` },
          { label: "실수령액", value: `${won(net)}원` },
        ]} />
      </ResultPanel>
    </Box>
  );
}

/** 중소기업 취업자 소득세 감면 연령 계산기 — 취업일 기준 만 나이 + 병역 차감 */
export function SmeTaxAgeForm() {
  const [birth, setBirth] = useState("1996-01-01");
  const [hireDate, setHireDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [militaryMonths, setMilitaryMonths] = useState(0);

  const result = useMemo(() => {
    const b = new Date(`${birth}T00:00:00`);
    const h = new Date(`${hireDate}T00:00:00`);
    if (h < b) return null;

    // 취업일 기준 만 나이
    let age = h.getFullYear() - b.getFullYear();
    const hasBirthday =
      h.getMonth() > b.getMonth() ||
      (h.getMonth() === b.getMonth() && h.getDate() >= b.getDate());
    if (!hasBirthday) age -= 1;

    // 병역 차감 (최대 6년 = 72개월)
    const deductMonths = Math.min(militaryMonths, 72);
    const deductYears = deductMonths / 12;
    const adjustedAge = age - deductYears;

    // 청년 요건: 만 15세 이상 34세 이하 (차감 후)
    const isYouth = adjustedAge >= 15 && adjustedAge <= 34;

    return { age, adjustedAge: Math.floor(adjustedAge * 10) / 10, isYouth };
  }, [birth, hireDate, militaryMonths]);

  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-2">
        <Labeled label="생년월일">
          <input type="date" className={INPUT_CLASS} value={birth} onChange={(e) => setBirth(e.target.value)} />
        </Labeled>
        <Labeled label="취업일">
          <input type="date" className={INPUT_CLASS} value={hireDate} onChange={(e) => setHireDate(e.target.value)} />
        </Labeled>
        <div className="sm:col-span-2">
          <Labeled label="병역 복무 기간(개월, 없으면 0)" hint="최대 72개월(6년) 차감">
            <NumInput className={INPUT_CLASS} value={militaryMonths} onChange={(e) => setMilitaryMonths(Math.max(0, Math.min(72, num(e.target.value))))} />
          </Labeled>
        </div>
      </div>
      {result ? (
        <ResultPanel
          title="감면 연령 계산"
          highlight={result.isYouth ? "청년 요건 해당(참고)" : "청년 요건 미해당(참고)"}
          subtitle="장애인·60세 이상·경력단절여성 요건은 별도 — 세무사 확인 권장"
        >
          <ResultRows rows={[
            { label: "취업일 기준 만 나이", value: `만 ${result.age}세` },
            { label: `병역 차감 후 나이 (${militaryMonths}개월 차감)`, value: `만 ${result.adjustedAge}세` },
            { label: "청년 해당 여부 (15~34세)", value: result.isYouth ? "해당" : "미해당" },
          ]} />
        </ResultPanel>
      ) : (
        <ResultPanel title="입력 오류" highlight="취업일이 생년월일보다 이후여야 합니다" />
      )}
    </Box>
  );
}

/** 출산휴가·육아휴직 날짜 계산기 */
export function MaternityScheduleForm() {
  const [dueDate, setDueDate] = useState(() => {
    const d = new Date();
    d.setMonth(d.getMonth() + 2);
    return d.toISOString().slice(0, 10);
  });
  const [twins, setTwins] = useState(false);

  const result = useMemo(() => {
    const due = new Date(`${dueDate}T00:00:00`);
    const totalDays = twins ? 120 : 90;

    // 출산전 최대 45일(다태아 60일) 사용 가능 → 출산일(due) 기준
    const preDays = twins ? 60 : 45;
    const postDays = totalDays - preDays;

    // 출산전후휴가 시작일 = 출산예정일 - preDays
    const start = new Date(due);
    start.setDate(start.getDate() - preDays);

    // 종료일 = 시작일 + totalDays - 1
    const end = new Date(start);
    end.setDate(end.getDate() + totalDays - 1);

    // 육아휴직: 출산 후 18개월 이내 자녀 1인당 최대 1년 (부모 합산 최대 2년)
    const parentalStart = new Date(due);
    parentalStart.setDate(parentalStart.getDate() + 1);
    const parentalEnd = new Date(due);
    parentalEnd.setFullYear(parentalEnd.getFullYear() + 1);
    parentalEnd.setDate(parentalEnd.getDate() - 1);

    const fmt = (d: Date) => d.toISOString().slice(0, 10);
    return { start: fmt(start), end: fmt(end), totalDays, preDays, postDays, parentalStart: fmt(parentalStart), parentalEnd: fmt(parentalEnd) };
  }, [dueDate, twins]);

  return (
    <Box>
      <div className="flex gap-2">
        <button type="button" className={`rounded-full px-4 py-2 text-sm ${!twins ? "bg-neutral-900 text-white" : "border"}`} onClick={() => setTwins(false)}>단태아</button>
        <button type="button" className={`rounded-full px-4 py-2 text-sm ${twins ? "bg-neutral-900 text-white" : "border"}`} onClick={() => setTwins(true)}>다태아(쌍둥이 등)</button>
      </div>
      <Labeled label="출산 예정일">
        <input type="date" className={INPUT_CLASS} value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      </Labeled>
      <ResultPanel title="출산휴가·육아휴직 일정(추정)" subtitle="실제 시작일은 근로자 신청 기준 · 육아휴직은 자녀 만 18개월까지 사용 가능 · 고용보험 수급 조건 별도 확인">
        <ResultRows rows={[
          { label: "출산전후휴가 시작(예정)", value: result.start },
          { label: "출산전후휴가 종료(예정)", value: result.end },
          { label: "총 휴가 일수", value: `${result.totalDays}일 (출산 전 최대 ${result.preDays}일 + 후 ${result.postDays}일)` },
          { label: "육아휴직 가능 시작", value: result.parentalStart },
          { label: "출산 후 1년 시점(참고)", value: result.parentalEnd },
        ]} />
      </ResultPanel>
    </Box>
  );
}

/** 승률 계산기 — 전적 입력 · 목표 승률 달성 추가 승수 계산 */
export function WinRateForm() {
  const [wins, setWins] = useState(30);
  const [draws, setDraws] = useState(5);
  const [losses, setLosses] = useState(15);
  const [target, setTarget] = useState(60);

  const total = wins + draws + losses;
  const currentRate = total === 0 ? 0 : (wins / total) * 100;
  const noGames = total === 0;

  // 목표 승률 달성에 필요한 추가 승수 (무·패 없이 승만 추가 가정)
  // (wins + x) / (total + x) >= target/100
  // wins + x >= target/100 * (total + x)
  // x(1 - target/100) >= target/100 * total - wins
  const t = target / 100;
  const needed = t >= 1 ? Infinity : Math.ceil((t * total - wins) / (1 - t));
  const neededText = noGames ? "경기 없음" : needed <= 0 ? "이미 달성" : needed === Infinity ? "달성 불가(100% 불가)" : `${needed}승 추가`;

  return (
    <Box>
      <div className="grid gap-6 sm:grid-cols-3">
        <Labeled label="승">
          <NumInput className={INPUT_CLASS} value={wins} onChange={(e) => setWins(Math.max(0, num(e.target.value)))} />
        </Labeled>
        <Labeled label="무">
          <NumInput className={INPUT_CLASS} value={draws} onChange={(e) => setDraws(Math.max(0, num(e.target.value)))} />
        </Labeled>
        <Labeled label="패">
          <NumInput className={INPUT_CLASS} value={losses} onChange={(e) => setLosses(Math.max(0, num(e.target.value)))} />
        </Labeled>
      </div>
      <Labeled label="목표 승률(%)">
        <NumInput step="0.1" className={INPUT_CLASS} value={target} onChange={(e) => setTarget(Math.max(0, Math.min(100, num(e.target.value))))} />
      </Labeled>
      <ResultPanel title="승률" highlight={`${currentRate.toFixed(2)}%`}>
        <ResultRows rows={[
          { label: "총 경기", value: `${total}경기` },
          { label: "승·무·패", value: `${wins} / ${draws} / ${losses}` },
          { label: "현재 승률", value: `${currentRate.toFixed(2)}%` },
          { label: `목표 ${target}% 달성`, value: neededText },
        ]} />
      </ResultPanel>
    </Box>
  );
}

/** 부동산 중개 수수료(복비) 계산기 — 2021년 개정 법정 상한 기준 */
export function RealEstateBrokerageFeeForm() {
  const [type, setType] = useState<"sale" | "jeonse" | "monthly">("sale");
  const [amount, setAmount] = useState(300_000_000);
  const [deposit, setDeposit] = useState(10_000_000);
  const [monthly, setMonthly] = useState(500_000);

  const result = useMemo(() => {
    // 거래 기준 금액 계산
    let base = amount;
    if (type === "monthly") {
      // 환산보증금 = 보증금 + (월세 × 100)
      base = deposit + monthly * 100;
    } else if (type === "jeonse") {
      base = amount;
    }

    // 상한 요율·한도 결정
    let maxRate: number;
    let limit: number | null;

    if (type === "sale") {
      if (base < 50_000_000) { maxRate = 0.006; limit = 250_000; }
      else if (base < 200_000_000) { maxRate = 0.005; limit = 800_000; }
      else if (base < 900_000_000) { maxRate = 0.004; limit = null; }
      else if (base < 1_200_000_000) { maxRate = 0.005; limit = null; }
      else if (base < 1_500_000_000) { maxRate = 0.006; limit = null; }
      else { maxRate = 0.007; limit = null; }
    } else {
      // 전세 / 월세(환산)
      if (base < 50_000_000) { maxRate = 0.005; limit = 200_000; }
      else if (base < 100_000_000) { maxRate = 0.004; limit = 300_000; }
      else if (base < 300_000_000) { maxRate = 0.003; limit = null; }
      else if (base < 600_000_000) { maxRate = 0.004; limit = null; }
      else { maxRate = 0.005; limit = null; }
    }

    const raw = Math.round(base * maxRate);
    const maxFee = limit !== null ? Math.min(raw, limit) : raw;

    return { base, maxRate, maxFee, limit };
  }, [type, amount, deposit, monthly]);

  return (
    <Box>
      <div className="flex gap-2">
        {([["sale","매매"],["jeonse","전세"],["monthly","월세"]] as [typeof type, string][]).map(([v, l]) => (
          <button key={v} type="button"
            className={`rounded-full px-4 py-2 text-sm ${type === v ? "bg-neutral-900 text-white" : "border"}`}
            onClick={() => setType(v)}>{l}</button>
        ))}
      </div>
      {type === "monthly" ? (
        <div className="grid gap-6 sm:grid-cols-2">
          <Labeled label="보증금(원)">
            <NumInput className={INPUT_CLASS} value={deposit} onChange={(e) => setDeposit(num(e.target.value))} />
          </Labeled>
          <Labeled label="월세(원)">
            <NumInput className={INPUT_CLASS} value={monthly} onChange={(e) => setMonthly(num(e.target.value))} />
          </Labeled>
        </div>
      ) : (
        <Labeled label={type === "sale" ? "매매가(원)" : "전세금(원)"}>
          <NumInput className={INPUT_CLASS} value={amount} onChange={(e) => setAmount(num(e.target.value))} />
        </Labeled>
      )}
      <ResultPanel title="중개수수료 상한(법정 기준)" highlight={`최대 ${won(result.maxFee)}원`} subtitle="실제 수수료는 상한 이하에서 협의 가능 · 시·도 조례 확인 필요">
        <ResultRows rows={[
          ...(type === "monthly" ? [{ label: "환산 거래금액", value: `${won(result.base)}원` }] : []),
          { label: "적용 상한요율", value: `${(result.maxRate * 100).toFixed(1)}%` },
          ...(result.limit !== null ? [{ label: "한도액 적용", value: `${won(result.limit)}원` }] : []),
          { label: "최대 중개수수료", value: `${won(result.maxFee)}원` },
        ]} />
      </ResultPanel>
    </Box>
  );
}
