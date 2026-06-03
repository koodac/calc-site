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

function Box({ children }: { children: React.ReactNode }) {
  return <CalculatorShell>{children}</CalculatorShell>;
}

/** 2026년 적용 시간당 최저임금 10,320원 — 고용노동부 고시 */
const MINIMUM_HOURLY_REFERENCE = 10_320;

/** 연가보상 등: (월 급여 / 30) × 일수 간이 */
export function DailyRateMoneyForm() {
  const [monthly, setMonthly] = useState(3_500_000);
  const [days, setDays] = useState(10);
  const daily = monthly / 30;
  const pay = Math.round(daily * days);
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
  const rate = target === 0 ? 0 : (achieved / target) * 100;
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
  const future = useMemo(() => current * Math.pow(1 + pct / 100, years), [current, pct, years]);
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
  const diff = useMemo(() => {
    const a = new Date(`${start}T00:00:00`);
    const b = new Date(`${end}T00:00:00`);
    if (b < a) return { days: 0, years: 0 };
    const days = Math.floor((b.getTime() - a.getTime()) / 86400000) + 1;
    const years = days / 365;
    return { days, years };
  }, [start, end]);
  const roughLeave = (() => {
    const fullYears = Math.floor(diff.years);
    if (diff.days <= 0) return 0;
    if (fullYears < 1) {
      // 1년 미만: 매월 1일 (최대 11일) — 달력 기준 완성 월 수 계산
      const a = new Date(`${start}T00:00:00`);
      const b = new Date(`${end}T00:00:00`);
      const rawMonths = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth());
      const fullMonths = b.getDate() >= a.getDate() ? rawMonths : rawMonths - 1;
      return Math.min(11, Math.max(0, fullMonths));
    }
    // 1년 이상: 15일 기본 + 2년마다 1일 가산 (최대 25일)
    return Math.min(25, 15 + Math.floor((fullYears - 1) / 2));
  })();
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
  const minutes = useMemo(() => {
    const start = sh * 60 + sm;
    let end = eh * 60 + em;
    // 퇴근이 출근보다 이르면 다음날로 처리 (야간근무)
    if (end < start) end += 24 * 60;
    return end - start;
  }, [sh, sm, eh, em]);
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
  const hourly = hours <= 0 ? 0 : monthly / hours;
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
  const uph = h <= 0 ? 0 : units / h;
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
  // 주 15h 미만은 주휴수당 없음, 40h 초과도 8h 상한 적용
  const bonus = wh < 15 ? 0 : wage * 8 * (Math.min(wh, 40) / 40);
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
  const pay = Math.round(daily * unused);
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
  const rate = total <= 0 ? 0 : (ok / total) * 100;
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
  const pay = wage * h * weeks;
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
  const ideal = male ? (h - 100) * 0.9 : (h - 100) * 0.85;
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
  const g = w * 1.2;
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
  const ml = Math.round(w * 35);
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
  const cycles = [1, 2, 3, 4, 5, 6];
  return (
    <Box>
      <Labeled label="잠자리에 드는 시각(시, 0–23)">
        <NumInput className={INPUT_CLASS} value={bedH} onChange={(e) => setBedH(Math.min(23, Math.max(0, num(e.target.value))))} />
      </Labeled>
      <ResultPanel title="90분 주기 기상(참고)">
        <ul className="mt-4 list-inside space-y-1 text-sm text-neutral-700">
          {cycles.map((n) => {
            const wake = bedH + n * 1.5;
            const h = Math.floor(wake) % 24;
            const m = (wake % 1) * 60;
            return (
              <li key={n}>
                {n}주기 후 약 {h}시 {m.toFixed(0)}분 경
              </li>
            );
          })}
        </ul>
      </ResultPanel>
    </Box>
  );
}

export function StepsCaloriesForm() {
  const [steps, setSteps] = useState(8000);
  const [w, setW] = useState(70);
  const kcal = steps * 0.0004 * w;
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
  /** 매우 단순한 불쾌지수 근사(교육용) */
  const hi = useMemo(() => t + 0.05 * Math.max(0, rh - 40), [t, rh]);
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
      <ResultPanel title="체감(근사)" highlight={`${hi.toFixed(1)}°C`} />
    </Box>
  );
}

export function OneRmForm() {
  const [w, setW] = useState(80);
  const [r, setR] = useState(5);
  const one = w * (1 + r / 30);
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
  const bmr = useMemo(() => {
    if (male) return 10 * w + 6.25 * h - 5 * age + 5;
    return 10 * w + 6.25 * h - 5 * age - 161;
  }, [w, h, age, male]);
  const tdee = bmr * act;
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
  const m = h / 100;
  const lean = w * (1 - bf / 100);
  const ffmi = lean / (m * m);
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
  const bsa = Math.sqrt((h * w) / 3600);
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
  const crCl = ((140 - age) * w) / (72 * cr) * (female ? 0.85 : 1);
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
  const k = female ? 0.7 : 0.9;
  const alpha = female ? -0.329 : -0.411;
  const minRatio = Math.min(cr / k, 1);
  const maxRatio = Math.max(cr / k, 1);
  const egfr =
    141 * Math.min(minRatio, 1) ** alpha * maxRatio ** -1.209 * 0.993 ** age * (female ? 1.018 : 1);
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
  const ldl = tc - hdl - tg / 5;
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
  // 에탄올 그램 = 잔수 × 음료량(ml) × 도수(16%) × 에탄올 밀도(0.789 g/ml)
  const ethanol = drinks * ml * 0.16 * 0.789;
  const r = 0.68;
  const bac = ethanol / (w * 1000 * r) * 100;
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
  const dec = den === 0 ? 0 : nume / den;
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
