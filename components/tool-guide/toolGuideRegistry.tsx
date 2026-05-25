import type { ReactNode } from "react";
import {
  GuideBulletList,
  GuideFaq,
  GuideFormulaBox,
  GuideH2,
  GuideH3,
  GuideP,
  GuideTable,
} from "@/components/tool-guide/toolGuideBlocks";
import { getToolBySlug } from "@/lib/tools";

export function getToolGuide(slug: string): ReactNode | null {
  switch (slug) {
    // ── 직장 ──
    case "job-001": return <SalaryGuide />;
    case "job-002": return <SeveranceGuide />;
    case "job-003": return <AnnualLeaveBonusGuide />;
    case "job-004": return <SalaryRaiseGuide />;
    case "job-005": return <SalaryRaisePredictGuide />;
    case "job-006": return <UnemploymentGuide />;
    case "job-007": return <RetirementFundGuide />;
    case "job-008": return <AnnualLeaveGuide />;
    case "job-009": return <WeeklyHolidayGuide />;
    case "job-010": return <AchievementGuide />;
    case "job-011": return <TenureGuide />;
    case "job-012": return <WorkHoursGuide />;
    case "job-013": return <CareerGuide />;
    case "job-014": return <HourlyWageGuide />;
    case "job-015": return <UphGuide />;
    case "job-016": return <BonusTaxGuide />;
    case "job-017": return <IncomeTaxGuide />;
    case "job-018": return <MinWageGuide />;
    case "job-019": return <FourInsuranceGuide />;
    case "job-020": return <AnnualLeavePayGuide />;
    case "job-021": return <AttendanceRateGuide />;
    case "job-022": return <SmeBizTaxGuide />;
    case "job-023": return <MaternityLeaveGuide />;
    case "job-024": return <ParentalLeaveGuide />;
    case "job-025": return <MaternityDatesGuide />;
    case "job-026": return <EitcGuide />;
    case "job-027": return <PartTimeGuide />;
    case "job-028": return <MonthlyAvgIncomeGuide />;

    // ── 건강 ──
    case "health-001": return <BmiGuide />;
    case "health-002": return <BmrGuide />;
    case "health-003": return <IdealWeightGuide />;
    case "health-004": return <ProteinGuide />;
    case "health-005": return <LbmGuide />;
    case "health-006": return <VitaminGuide />;
    case "health-007": return <WaterGuide />;
    case "health-008": return <SleepGuide />;
    case "health-009": return <HeightGuide />;
    case "health-010": return <StepsCalorieGuide />;
    case "health-011": return <HeatIndexGuide />;
    case "health-012": return <OneRmGuide />;
    case "health-013": return <BiorhythmGuide />;
    case "health-014": return <MuscleGuide />;
    case "health-015": return <MaxMuscleGuide />;
    case "health-016": return <HeartRateGuide />;
    case "health-017": return <TdeeGuide />;
    case "health-018": return <HeightPercentileGuide />;
    case "health-019": return <FfmiGuide />;
    case "health-020": return <CrclGuide />;
    case "health-021": return <BsaGuide />;
    case "health-022": return <CaffeineGuide />;
    case "health-023": return <OvulationGuide />;
    case "health-024": return <BacGuide />;
    case "health-025": return <EgfrGuide />;
    case "health-026": return <CholesterolGuide />;

    // ── 학교 ──
    case "school-001": return <NeisGuide />;
    case "school-002": return <RankGuide />;
    case "school-003": return <LcmGuide />;
    case "school-004": return <FactorGuide />;
    case "school-005": return <GpaGuide />;
    case "school-006": return <PrimeGuide />;
    case "school-007": return <GaussGuide />;
    case "school-008": return <FractionGuide />;
    case "school-009": return <GcdGuide />;
    case "school-010": return <AverageGuide />;
    case "school-011": return <RemainderGuide />;
    case "school-012": return <PermutationGuide />;
    case "school-013": return <FibonacciGuide />;
    case "school-014": return <ConfidenceIntervalGuide />;
    case "school-015": return <PresentationTimeGuide />;
    case "school-016": return <ErrorRateGuide />;
    case "school-017": return <PvalueGuide />;
    case "school-018": return <WeightedAvgGuide />;
    case "school-019": return <CorrelationGuide />;
    case "school-020": return <PercentileGuide />;
    case "school-021": return <FactorialGuide />;
    case "school-022": return <ProportionGuide />;

    // ── 금융 ──
    case "finance-001": return <SavingsGuide />;
    case "finance-002": return <HomeGuide />;
    case "finance-003": return <SpendingGuide />;
    case "finance-004": return <PercentCalcGuide />;
    case "finance-005": return <VatGuide />;
    case "finance-006": return <DiscountFinanceGuide />;
    case "finance-007": return <RentVsBuyGuide />;
    case "finance-008": return <CommissionGuide />;
    case "finance-009": return <ExchangeGuide />;
    case "finance-010": return <StopLossGuide />;
    case "finance-011": return <CagrGuide />;
    case "finance-012": return <RoiGuide />;
    case "finance-013": return <RoasGuide />;
    case "finance-014": return <RealEstateFeeGuide />;
    case "finance-015": return <DepreciationGuide />;
    case "finance-016": return <EbitdaGuide />;
    case "finance-017": return <MarginGuide />;
    case "finance-018": return <PerGuide />;
    case "finance-019": return <PbrGuide />;
    case "finance-020": return <RoeGuide />;
    case "finance-021": return <ApyGuide />;
    case "finance-022": return <CpmGuide />;
    case "finance-023": return <AprGuide />;
    case "finance-024": return <ChangeRateGuide />;
    case "finance-025": return <LoanGuide />;
    case "finance-026": return <CompoundInterestGuide />;
    case "finance-027": return <SubscriptionGuide />;

    // ── 단위 ──
    case "unit-001": return <PyeongGuide />;
    case "unit-002": return <TempGuide />;
    case "unit-003": return <InchGuide />;
    case "unit-004": return <GallonGuide />;
    case "unit-005": return <BuildingCoverageGuide />;
    case "unit-006": return <FloorAreaRatioGuide />;
    case "unit-007": return <PpmGuide />;
    case "unit-008": return <DmsGuide />;
    case "unit-009": return <SlopeGuide />;
    case "unit-010": return <PerimeterGuide />;
    case "unit-011": return <RadianGuide />;
    case "unit-012": return <CubicMeterGuide />;
    case "unit-013": return <DensityGuide />;
    case "unit-014": return <SpeedDistanceGuide />;
    case "unit-015": return <DataSizeGuide />;
    case "unit-016": return <WattGuide />;
    case "unit-017": return <DecibelGuide />;
    case "unit-018": return <MeasurementGuide />;
    case "unit-019": return <CoordDistGuide />;
    case "unit-020": return <ParallelResistorGuide />;

    // ── 일상 ──
    case "daily-001": return <GasGuide />;
    case "daily-002": return <WithholdingTaxGuide />;
    case "daily-003": return <CharCountGuide />;
    case "daily-004": return <LunarGuide />;
    case "daily-005": return <DdayGuide />;
    case "daily-006": return <ElectricityGuide />;
    case "daily-007": return <AgeGuide />;
    case "daily-008": return <DutchPayGuide />;
    case "daily-009": return <DateGuide />;
    case "daily-010": return <TipGuide />;
    case "daily-011": return <FortyNineGuide />;
    case "daily-012": return <TimerGuide />;
    case "daily-013": return <CarTaxGuide />;

    // ── 스포츠 ──
    case "sports-001": return <BattingAvgGuide />;
    case "sports-002": return <RunningPaceGuide />;
    case "sports-003": return <VdotGuide />;
    case "sports-004": return <EraGuide />;
    case "sports-005": return <BowlingGuide />;
    case "sports-006": return <CurlingGuide />;

    // ── 군대 ──
    case "military-001": return <MilSavingsGuide />;
    case "military-002": return <AirForceGuide />;
    case "military-003": return <MarineGuide />;
    case "military-004": return <DischargeGuide />;

    // ── 보안 ──
    case "security-001": return <PasswordGuide />;
    case "security-002": return <HashGuide />;
    case "security-003": return <RsaGuide />;
    case "security-004": return <CaesarGuide />;

    // ── 개발 ──
    case "dev-001": return <UuidGuide />;
    case "dev-002": return <ApiKeyGuide />;
    case "dev-003": return <SubnetGuide />;
    case "dev-004": return <Base64Guide />;
    case "dev-005": return <UrlGuide />;
    case "dev-006": return <RegexGuide />;
    case "dev-007": return <BaseConvertGuide />;
    case "dev-008": return <QrGuide />;
    case "dev-009": return <JsonGuide />;
    case "dev-010": return <MorseGuide />;
    case "dev-011": return <ColorGuide />;

    // ── 게임 ──
    case "game-001": return <GachaGuide />;
    case "game-002": return <FifaGuide />;
    case "game-003": return <WinRateGuide />;
    case "game-004": return <LottoGuide />;
    case "game-005": return <EdpiGuide />;
    case "game-006": return <CoinFlipGuide />;
    case "game-007": return <RouletteGuide />;
    case "game-008": return <FovGuide />;

    default:
      return null;
  }
}

/** 연봉(job-001) 외 직장 도구 — 동일 섹션 구조(소개·입력·FAQ)로 통일 */
function GenericJobGuide({ slug }: { slug: string }) {
  const tool = getToolBySlug(slug);
  if (!tool) return null;
  return (
    <>
      <GuideH2>{tool.title}란?</GuideH2>
      <GuideP>
        {tool.description} 이 화면은 입력을 바꾸면 결과가 바로 갱신되는 <strong>참고용 추정</strong> 도구입니다.
        세법·고시·회사 규정·개인 조건에 따라 실제 값과 다를 수 있습니다.
      </GuideP>

      <GuideH3>입력 안내</GuideH3>
      <GuideBulletList
        items={[
          "단위(원, 일, 시간, % 등)를 먼저 확인한 뒤 숫자를 넣으세요.",
          "항목이 많으면 한 번에 넣기보다 칸별로 조정하며 결과 변화를 확인하세요.",
          "급여명세·고용·세무·기관 안내와 비교해 최종 확인하세요.",
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "왜 실제와 다르게 나올 수 있나요?",
            a: "회사 급여 규칙, 입·퇴사 월, 비과세 한도, 고시 변경 등 변수가 많아 이 화면은 감을 잡는 용도입니다.",
          },
          {
            q: "신고·계약·분쟁에 그대로 써도 되나요?",
            a: "아니요. 최종 판단에는 공식 자료와 해당 분야 전문가 확인을 권장합니다.",
          },
        ]}
      />
    </>
  );
}

function SalaryGuide() {
  return (
    <>
      <GuideH2>월 실수령(연봉) 계산기란?</GuideH2>
      <GuideP>
        연봉·비과세·가족 수를 넣으면 <strong>세전 기준</strong>으로 월 실수령을 빠르게 짐작할 수 있게 해 주는
        도구입니다. 이직·첫 직장 협상 전 감을 잡을 때 쓰기 좋고, 급여명세서와 1원 단위로 맞추는 용도는 아닙니다.
      </GuideP>

      <GuideH3>입력 안내</GuideH3>
      <GuideBulletList
        items={[
          "연봉은 세전 합산 연봉(상여·성과급은 회사 방식에 맞게 넣거나 빼서)을 입력하세요.",
          "비과세(식대 등)는 한도·항목이 회사마다 달라 ‘대략’만 반영됩니다.",
          "부양가족(자녀) 칸은 세액을 느슨히 반영하는 용도라, 실제 공제와 다를 수 있습니다.",
        ]}
      />

      <GuideH2>실수령은 어떻게 추정하나요? (참고)</GuideH2>
      <GuideP>고시된 보험 요율·간이세액표 느낌으로 계산하며, 대략 아래 흐름을 따릅니다.</GuideP>
      <GuideFormulaBox>월 기준 임금 − 4대보험(근로자) − 추정 소득세·지방세 ≈ 월 실수령(대략)</GuideFormulaBox>
      <GuideP>
        알바·일용·지역가입, 입·퇴사가 있는 달은 회사와 어긋날 수 있습니다. 확정 세액·원천징수는 회사·홈택스를
        확인하세요.
      </GuideP>

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "연봉만 넣어도 돼요?",
            a: "대략치는 됩니다. 상여, 비과세, 정확한 합산 연봉을 넣을수록 더 가깝습니다.",
          },
          {
            q: "명세서랑 왜 달라요?",
            a: "급여 규정·입퇴사 월·비과세 한도가 회사마다 달라서입니다. 이 화면은 ‘빠른 참고’용입니다.",
          },
          {
            q: "자녀 수 칸은 뭐에 쓰나요?",
            a: "세액 감면을 꽤 느슨히 맞춰 보기 위한 항목이라, 본인·배우자·나이 조건은 실제와 다를 수 있어요.",
          },
        ]}
      />
    </>
  );
}

function SeveranceGuide() {
  return (
    <>
      <GuideH2>퇴직금 계산기란?</GuideH2>
      <GuideP>
        입사·퇴사일과 최근 임금 정보를 넣으면, 같은 사업장 1년 이상 근로를 전제로 한 <strong>예상 퇴직금</strong>을
        보여 주는 도구입니다. 취업규칙·수당 포함 범위에 따라 실제 지급액은 달라질 수 있습니다.
      </GuideP>

      <GuideH3>입력 안내</GuideH3>
      <GuideBulletList
        items={[
          "입사일·퇴사일은 실제 재직 기간으로 넣으세요.",
          "3개월(또는 기관이 정한 기간) 급여 총액, 상여, 연차수당 등은 명세·회사 안내에 맞게 넣으세요.",
          "평균임금에 무엇이 들어가는지는 사업장마다 달라질 수 있어요.",
        ]}
      />

      <GuideH2>퇴직금은 어떻게 잡나요? (참고)</GuideH2>
      <GuideP>흔히 쓰는 형태(참고)는 아래와 비슷합니다. 세부는 근로기준법·판례·회사 규정을 봐야 합니다.</GuideP>
      <GuideFormulaBox>퇴직금 ≈ 1일 평균임금 × 30일 × (재직일수 ÷ 365)</GuideFormulaBox>
      <GuideBulletList
        items={[
          "1일 평균임금은 통상임금에 포함되는 항목을 모아서 산정됩니다(회사/사안별로 쟁점이 될 수 있음).",
          "1년 미만 등은 지급 요건·계산 방식이 달라질 수 있어요.",
        ]}
      />
      <GuideP className="text-neutral-500">
        분쟁·정확한 청구액이 필요하면 인사/노무·노동 상담 창구와 함께 확인하세요.
      </GuideP>

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "퇴직금은 누구나 받나요?",
            a: "같은 사업장에서 1년 이상 계속 근로한 경우에 지급되는 것이 일반적입니다(예외·분쟁은 별도).",
          },
          {
            q: "왜 회사랑 다르게 나오나요?",
            a: "평균임금에 넣는 수당, 상여 합산 시점, 기간 계산, 취업규칙이 달라서일 수 있어요.",
          },
        ]}
      />
    </>
  );
}

function AnnualLeaveBonusGuide() {
  return (
    <>
      <GuideH2>공무원 연가보상비란?</GuideH2>
      <GuideP>
        사용하지 않은 연가에 대해 금전으로 보상하는 제도입니다. 지급 시기·산식·한도는 기관 인사·복무 규정에 따르며,
        이 화면은 빠른 참고용입니다.
      </GuideP>

      <GuideH3>입력 안내</GuideH3>
      <GuideBulletList
        items={[
          "월봉급액은 세전(기본급 기준 등 기관이 정한 바에 맞게)을 넣으세요.",
          "지급 대상 연가일수는 실제 확정일수·기관 지침을 반영하세요.",
          "소수점·반올림은 기관마다 달라 결과가 어긋날 수 있습니다.",
        ]}
      />

      <GuideH2>연가보상비 계산 공식은?</GuideH2>
      <GuideP>많이 인용되는 예시형태입니다. 실제 금액은 소속 기관의 적용 방식을 따릅니다.</GuideP>
      <GuideFormulaBox>1일 연가보상비 = 월 기본급 × 0.86 ÷ 30</GuideFormulaBox>
      <GuideBulletList
        items={[
          "0.86은 통상임금 관련해 알려진 참고 계수입니다.",
          "30은 월을 일수로 나눌 때 쓰는 경우가 많습니다.",
        ]}
      />
      <GuideP>
        예: 월 기본급 300만 원, 미사용 연가 5일이면{" "}
        <span className="font-medium text-neutral-800">3,000,000 × 0.86 ÷ 30 × 5</span> 식으로 개략 볼 수 있습니다.
      </GuideP>

      <GuideH2>연가보상비 지급 시기</GuideH2>
      <GuideP>
        상·하반기 등 특정 달에 정산·지급하는 사례가 흔합니다. 일정·방식은 소속 처의 인사·복무 안내를 보세요.
      </GuideP>

      <GuideH2>연가보상비 과세 여부</GuideH2>
      <GuideP>
        근로소득으로 과세되는 경우가 많고, 지급 시 원천징수된 뒤 실수령이 나가는 식이 일반적입니다. 세부는 세법·지급
        성격에 따라 달라질 수 있어요.
      </GuideP>

      <GuideH2>공무원 연가 일수 (참고)</GuideH2>
      <GuideTable
        headers={["재직 기간", "연가 일수"]}
        rows={[
          ["1개월 ~ 1년 미만", "11일"],
          ["1년 ~ 2년 미만", "12일"],
          ["2년 ~ 3년 미만", "14일"],
          ["3년 ~ 4년 미만", "15일"],
          ["4년 ~ 5년 미만", "17일"],
          ["5년 ~ 6년 미만", "20일"],
          ["6년 이상", "21일"],
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "연가보상비는 비과세인가요?",
            a: "과세·한도·지급 성격에 따라 달라질 수 있어, 확정은 세법·기관 안내·전문 상담이 필요할 수 있어요.",
          },
          {
            q: "연가를 많이 쌓으면 보상이 무한히 늘까요?",
            a: "미사용 일수뿐 아니라 기관별 상한·지급 규정이 있을 수 있어요.",
          },
        ]}
      />
    </>
  );
}

function AchievementGuide() {
  return (
    <>
      <GuideH2>달성률 계산기란?</GuideH2>
      <GuideP>
        목표값 대비 현재값을 백분율(%)로 보여 줍니다. 매출, 공부 시간, 운동 등 숫자 목표를 짧게 점검할 때 쓰기
        좋습니다.
      </GuideP>

      <GuideH3>입력 안내</GuideH3>
      <GuideBulletList
        items={[
          "목표 값은 0보다 큰 수로 넣으세요.",
          "현재 값은 목표와 같은 단위(원, 시간, 횟수 등)로 맞춥니다.",
          "여러 항목을 쓰면 제목(메모)을 구분해 두면 혼동이 적어요.",
        ]}
      />

      <GuideH2>달성률 공식</GuideH2>
      <GuideP>퍼센트로 보려면 아래 식을 쓰면 됩니다.</GuideP>
      <GuideFormulaBox>달성률(%) = (현재 값 ÷ 목표 값) × 100</GuideFormulaBox>

      <GuideH2>활용 예시</GuideH2>
      <GuideBulletList
        items={[
          "KPI·매출·가입자 수 등 목표 대비 진행률",
          "시험·자격 공부의 계획 대비 누적 시간",
          "운동·체중·거리 등 개인 목표",
        ]}
      />

      <GuideH2>달성률 관리 팁</GuideH2>
      <GuideP>
        같은 방식으로 주기만 맞춰 측정하면 추세를 보기 쉽습니다. 목표가 지나치게 높거나 낮지 않은지, 중간 점검 주기는
        적절한지 가끔 조정해 보세요.
      </GuideP>
      <GuideP className="text-neutral-500">법적·공식 평가나 계약 판단에는 쓰지 말고 참고용으로만 쓰세요.</GuideP>

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "달성률이 100%를 넘을 수 있나요?",
            a: "가능해요. 현재 값이 목표를 넘기면 100%보다 커집니다.",
          },
          {
            q: "100%가 안 나오면 잘못인가요?",
            a: "아니요, 아직 목표에 도달하지 않은 상태로 보면 됩니다. 부족한 만큼만 확인하고 일정·목표를 조정하면 돼요.",
          },
        ]}
      />
    </>
  );
}

// ════════════════════════════════════════════════
// 직장 — 추가 개별 가이드
// ════════════════════════════════════════════════

function UnemploymentGuide() {
  return (
    <>
      <GuideH2>실업급여(구직급여)란?</GuideH2>
      <GuideP>
        고용보험에 가입된 근로자가 비자발적으로 이직한 경우, 재취업 활동을 하는 동안 지급되는 급여입니다.
        이 화면은 <strong>간이 자격·금액 추정</strong>용으로, 실제 결정은 고용센터에서 이루어집니다.
      </GuideP>
      <GuideH3>지급 조건 (참고)</GuideH3>
      <GuideBulletList
        items={[
          "이직일 이전 18개월 중 고용보험 피보험 단위 기간 180일 이상",
          "비자발적 이직(권고사직·계약만료·폐업 등) — 자발적 퇴직은 원칙적으로 해당 없음",
          "재취업 의사와 능력이 있고 적극적으로 구직 활동 중",
        ]}
      />
      <GuideH2>구직급여 산정 (참고)</GuideH2>
      <GuideFormulaBox>1일 구직급여 = 이직 전 평균임금 × 60% (하한·상한 적용)</GuideFormulaBox>
      <GuideBulletList
        items={[
          "하한액: 최저임금의 80% × 1일 소정근로시간(8시간 기준)",
          "상한액: 1일 66,000원 (2024년 기준, 변경 가능)",
          "지급 기간: 연령·가입 기간별 120~270일",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "자진 퇴사도 받을 수 있나요?", a: "원칙적으로 불가하지만, 임금 체불·직장 내 괴롭힘·계약 조건 불이행 등 정당한 사유가 있으면 수급 가능할 수 있어요. 고용센터에 문의하세요." },
          { q: "프리랜서·자영업자도 받을 수 있나요?", a: "예술인·노무제공자 고용보험이나 자영업자 고용보험에 가입된 경우 별도 조건으로 가능할 수 있습니다." },
        ]}
      />
    </>
  );
}

function AnnualLeaveGuide() {
  return (
    <>
      <GuideH2>연차 유급휴가란?</GuideH2>
      <GuideP>
        근로기준법에 따라 일정 기간 이상 근무한 근로자에게 부여되는 유급 휴가입니다.
        이 계산기는 입사일 기준 <strong>예상 연차 일수</strong>를 빠르게 확인하는 도구입니다.
      </GuideP>
      <GuideH3>연차 발생 기준 (참고)</GuideH3>
      <GuideTable
        headers={["근속 기간", "연차 일수"]}
        rows={[
          ["1년 미만 (매월 개근)", "1일씩 최대 11일"],
          ["1년 이상 ~ 3년 미만", "15일"],
          ["3년 이상 ~ 5년 미만", "16일"],
          ["5년 이상 ~ 7년 미만", "17일"],
          ["그 이후 2년마다", "+1일 (최대 25일)"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "연차를 안 쓰면 어떻게 되나요?", a: "사용하지 않은 연차는 연차수당으로 보상받는 것이 원칙입니다. 단, 회사가 촉진 절차를 밟은 경우 수당 지급 의무가 면제될 수 있어요." },
          { q: "입사 첫 해에도 연차가 생기나요?", a: "네, 1년 미만 근로자도 매월 개근 시 1일씩 유급휴가가 발생합니다(최대 11일)." },
        ]}
      />
    </>
  );
}

function WeeklyHolidayGuide() {
  return (
    <>
      <GuideH2>주휴수당이란?</GuideH2>
      <GuideP>
        1주일 동안 소정 근로일을 개근한 근로자에게 유급으로 주어지는 하루치 임금입니다.
        주 15시간 이상 근무하면 정규직·아르바이트 구분 없이 적용됩니다.
      </GuideP>
      <GuideFormulaBox>주휴수당 = (1주 소정 근로시간 ÷ 40) × 8 × 시급</GuideFormulaBox>
      <GuideP>
        예: 시급 10,000원, 주 20시간 근무 → (20 ÷ 40) × 8 × 10,000 = <strong>40,000원</strong>
      </GuideP>
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "주 15시간 미만이면 주휴수당 없나요?", a: "네, 주 15시간 미만 단시간 근로자는 주휴수당 적용 대상이 아닙니다." },
          { q: "월급제도 주휴수당이 포함되나요?", a: "통상적으로 월급제 근로자의 월급에는 주휴수당이 포함된 것으로 봅니다." },
        ]}
      />
    </>
  );
}

function FourInsuranceGuide() {
  return (
    <>
      <GuideH2>4대 보험이란?</GuideH2>
      <GuideP>
        국민연금·건강보험·고용보험·산재보험을 통칭하는 사회보험입니다.
        근로자와 사업주가 각각 일정 비율을 부담합니다.
      </GuideP>
      <GuideTable
        headers={["보험", "근로자 요율(참고)", "사업주 요율(참고)"]}
        rows={[
          ["국민연금", "4.5%", "4.5%"],
          ["건강보험", "3.545%", "3.545%"],
          ["장기요양보험", "건강보험료 × 12.95%", "동일"],
          ["고용보험", "0.9%", "0.9% + 규모별 추가"],
          ["산재보험", "없음", "업종별 상이"],
        ]}
      />
      <GuideP className="text-neutral-500">요율은 매년 변경될 수 있으며, 이 계산기는 참고용 추정입니다.</GuideP>
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "월급 외에도 4대 보험이 붙나요?", a: "상여·성과급 등이 보수총액에 포함되면 정산 시 추가 부담이 생길 수 있어요." },
          { q: "일용직도 4대 보험 대상인가요?", a: "고용보험과 산재보험은 원칙적으로 적용되며, 근무 일수에 따라 국민연금·건강보험도 적용될 수 있습니다." },
        ]}
      />
    </>
  );
}

function MaternityLeaveGuide() {
  return (
    <>
      <GuideH2>출산전후휴가 급여란?</GuideH2>
      <GuideP>
        출산 전후 총 90일(다태아 120일) 휴가 중 고용보험에서 지급하는 급여입니다.
        우선지원대상기업은 전 기간, 대규모 기업은 후 45일분을 지급합니다.
      </GuideP>
      <GuideFormulaBox>급여 = 통상임금(월) × 해당 개월수 (상한액 적용)</GuideFormulaBox>
      <GuideBulletList
        items={[
          "상한액: 월 200만원 (2024년 기준, 변경 가능)",
          "우선지원대상기업: 전 90일 고용보험 지급",
          "대규모 기업: 최초 45일은 사업주 부담, 후 45일 고용보험 지급",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "배우자도 출산휴가를 받을 수 있나요?", a: "네, 배우자 출산휴가는 10일(유급)이며 고용보험에서 지원됩니다." },
          { q: "계약직도 받을 수 있나요?", a: "고용보험 피보험자격을 유지하고 있으면 가능합니다. 단, 휴가 종료 후 계약이 만료되면 수급에 영향이 있을 수 있어요." },
        ]}
      />
    </>
  );
}

function ParentalLeaveGuide() {
  return (
    <>
      <GuideH2>육아휴직 급여란?</GuideH2>
      <GuideP>
        만 8세 이하(초등 2학년 이하) 자녀를 둔 근로자가 육아휴직을 사용할 때 고용보험에서 지급하는 급여입니다.
        부모가 순차적으로 사용하는 <strong>6+6 제도</strong>로 초반 급여가 높아졌습니다.
      </GuideP>
      <GuideTable
        headers={["기간", "지급율 (6+6 첫 번째 부모)", "지급율 (일반)"] }
        rows={[
          ["1~3개월", "통상임금 100% (상한 월 250만원)", "통상임금 80% (상한 월 150만원)"],
          ["4~6개월", "통상임금 100% (상한 월 300만원)", "통상임금 50% (상한 월 120만원)"],
          ["7개월~", "통상임금 50% (상한 월 120만원)", "통상임금 50% (상한 월 120만원)"],
        ]}
      />
      <GuideP className="text-neutral-500">6+6 제도는 두 번째 부모가 6개월 내 육아휴직을 개시해야 적용됩니다. 급여 기준은 변경될 수 있어 고용보험 사이트를 확인하세요.</GuideP>
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "육아휴직 중에도 회사에서 급여를 주나요?", a: "법적 의무는 없습니다. 고용보험에서 지급하는 급여가 주 수입원이 됩니다." },
          { q: "아빠도 육아휴직을 쓸 수 있나요?", a: "네, 부모 모두 각각 최대 1년씩 사용할 수 있습니다. 6+6 제도를 활용하면 첫 6개월 급여가 높아집니다." },
        ]}
      />
    </>
  );
}

function PartTimeGuide() {
  return (
    <>
      <GuideH2>알바비 계산기란?</GuideH2>
      <GuideP>
        시급과 근무시간을 입력해 하루·주·월 예상 급여를 빠르게 확인하는 도구입니다.
        주휴수당 포함 여부를 선택해 실제 받을 금액에 가깝게 계산할 수 있습니다.
      </GuideP>
      <GuideH3>주휴수당 포함 시 월급 계산 (참고)</GuideH3>
      <GuideFormulaBox>월급 ≈ 시급 × (주 소정 근로시간 + 주휴시간) × 4.345주</GuideFormulaBox>
      <GuideBulletList
        items={[
          "주휴시간 = 주 소정 근로시간 ÷ 40 × 8 (주 15시간 이상인 경우)",
          "4.345는 한 달 평균 주수",
          "2025년 최저시급: 10,030원",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "주 15시간 미만이면 주휴수당이 없나요?", a: "맞습니다. 주 15시간 이상 근무해야 주휴수당이 발생합니다." },
          { q: "4대 보험은 알바도 내야 하나요?", a: "월 60시간 이상 또는 월 8일 이상 근무하면 고용보험·건강보험 등 의무 가입 대상이 됩니다." },
        ]}
      />
    </>
  );
}

// ════════════════════════════════════════════════
// 건강 — 개별 가이드
// ════════════════════════════════════════════════

function BmiGuide() {
  return (
    <>
      <GuideH2>BMI(체질량지수)란?</GuideH2>
      <GuideP>
        체중(kg)을 신장(m)의 제곱으로 나눈 값으로, 비만 정도를 간편하게 파악하는 지표입니다.
        근육량·나이·성별 차이를 반영하지 않으므로 <strong>참고용</strong>으로 활용하세요.
      </GuideP>
      <GuideFormulaBox>BMI = 체중(kg) ÷ 신장(m)²</GuideFormulaBox>
      <GuideTable
        headers={["BMI", "분류 (WHO/한국 기준 참고)"]}
        rows={[
          ["18.5 미만", "저체중"],
          ["18.5 ~ 22.9", "정상"],
          ["23.0 ~ 24.9", "과체중(비만전단계)"],
          ["25.0 ~ 29.9", "1단계 비만"],
          ["30.0 이상", "2단계 비만 이상"],
        ]}
      />
      <GuideP className="text-neutral-500">아시아인 기준은 서양 기준보다 낮게 적용되는 경우가 많습니다. 정확한 체성분 분석은 의료기관을 이용하세요.</GuideP>
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "근육이 많으면 BMI가 높게 나오나요?", a: "맞습니다. BMI는 체지방과 근육량을 구분하지 못해 근육질 체형에서 과대 평가될 수 있습니다." },
          { q: "어린이·청소년에게도 같은 기준인가요?", a: "아니요, 성장기에는 연령·성별 백분위(BMI-for-age)를 사용합니다." },
        ]}
      />
    </>
  );
}

function BmrGuide() {
  return (
    <>
      <GuideH2>기초대사량(BMR)이란?</GuideH2>
      <GuideP>
        아무것도 하지 않고 누워만 있어도 생명 유지에 필요한 최소 에너지량입니다.
        체중·신장·나이·성별로 계산하며, <strong>Harris-Benedict</strong> 또는 <strong>Mifflin-St Jeor</strong> 공식을 주로 씁니다.
      </GuideP>
      <GuideFormulaBox>
        남성 BMR ≈ 10×체중 + 6.25×신장 − 5×나이 + 5{"\n"}
        여성 BMR ≈ 10×체중 + 6.25×신장 − 5×나이 − 161
      </GuideFormulaBox>
      <GuideH3>활동 계수 (TDEE 계산 시)</GuideH3>
      <GuideTable
        headers={["활동 수준", "계수"]}
        rows={[
          ["거의 활동 없음", "× 1.2"],
          ["가벼운 운동 (주 1~3회)", "× 1.375"],
          ["보통 운동 (주 3~5회)", "× 1.55"],
          ["심한 운동 (주 6~7회)", "× 1.725"],
          ["매우 격렬 (하루 2회 이상)", "× 1.9"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "다이어트 시 얼마나 먹어야 하나요?", a: "TDEE(총 에너지 소비량)에서 하루 300~500kcal를 줄이는 것이 일반적인 감량 전략입니다. BMR 이하로 먹는 것은 건강에 해로울 수 있어요." },
          { q: "근육이 많으면 BMR이 높아지나요?", a: "네, 근육 조직은 지방보다 에너지 소모가 많아 근육량이 많을수록 기초대사량이 높아집니다." },
        ]}
      />
    </>
  );
}

function WaterGuide() {
  return (
    <>
      <GuideH2>하루 물 섭취량 계산기란?</GuideH2>
      <GuideP>
        체중·활동량·기후 등을 고려해 하루 권장 수분 섭취량을 추정하는 도구입니다.
        수분은 물 외에 음식·음료를 통해서도 섭취되므로, 이 수치는 <strong>총 수분 섭취 목표</strong>로 참고하세요.
      </GuideP>
      <GuideFormulaBox>기본 권장량 ≈ 체중(kg) × 30~35mL</GuideFormulaBox>
      <GuideBulletList
        items={[
          "운동 시: 추가로 500~1,000mL 이상 보충",
          "더운 날씨: 땀 손실량만큼 추가 섭취",
          "WHO 성인 기준: 하루 최소 1.5~2L 권장",
          "커피·차는 이뇨 효과로 수분 손실에 주의",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "하루 8잔(2L)이 정설인가요?", a: "개인 체중·활동량·날씨에 따라 다릅니다. 소변 색이 연한 노란색이면 적절한 수분 섭취 상태입니다." },
          { q: "너무 많이 마시면 위험한가요?", a: "과다 수분 섭취는 드물지만 저나트륨혈증을 유발할 수 있습니다. 일반적인 경우 큰 문제는 없습니다." },
        ]}
      />
    </>
  );
}

function SleepGuide() {
  return (
    <>
      <GuideH2>수면 사이클 계산기란?</GuideH2>
      <GuideP>
        수면은 약 <strong>90분 단위의 사이클</strong>로 이루어집니다.
        이 계산기는 목표 기상 시간 또는 취침 시간을 기준으로 사이클에 맞는 취침·기상 시간을 제안합니다.
      </GuideP>
      <GuideBulletList
        items={[
          "성인 권장 수면 사이클: 5~6회 (약 7.5~9시간)",
          "잠드는 데 평균 15분 소요 — 계산기에 반영됨",
          "수면 중간에 깨면 사이클이 초기화되어 개운하지 않을 수 있음",
          "REM 수면(꿈)은 사이클 후반부에 길어짐 — 아침에 기억하는 꿈은 대부분 REM 수면",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "사이클 중간에 일어나면 왜 피곤한가요?", a: "깊은 수면(3단계, NREM) 중에 깨면 수면 관성이 강해 잠시 멍한 상태가 됩니다. 가벼운 수면 단계(REM 또는 1단계)에 기상하는 게 이상적이에요." },
          { q: "낮잠은 얼마나 자야 좋나요?", a: "20~30분(파워냅)이 집중력 회복에 효과적이며, 90분 낮잠은 전체 사이클로 깊이 자는 방식입니다." },
        ]}
      />
    </>
  );
}

function OneRmGuide() {
  return (
    <>
      <GuideH2>1RM(1 Rep Max)이란?</GuideH2>
      <GuideP>
        1회 최대 반복 가능 중량으로, 근력 운동의 강도를 설정하는 기준입니다.
        실제로 1회 들어올리는 대신, <strong>여러 번 들어올린 무게와 반복 횟수</strong>로 추정할 수 있습니다.
      </GuideP>
      <GuideFormulaBox>1RM ≈ 중량 × (1 + 반복 횟수 ÷ 30) — Epley 공식</GuideFormulaBox>
      <GuideH3>운동 강도 가이드 (1RM 기준)</GuideH3>
      <GuideTable
        headers={["목적", "권장 중량 (% 1RM)", "권장 횟수"]}
        rows={[
          ["근력 향상", "85~95%", "1~5회"],
          ["근비대 (근육 증가)", "67~85%", "6~12회"],
          ["근지구력", "50~67%", "15회 이상"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "1RM 테스트는 꼭 해야 하나요?", a: "부상 위험이 있으므로 중급자 이상에게 권장됩니다. 추정 공식으로도 충분히 실용적인 수치를 얻을 수 있습니다." },
          { q: "어떤 공식이 가장 정확한가요?", a: "Epley, Brzycki, NSCA 공식 등이 있으며 개인차가 있습니다. 이 계산기는 일반적으로 많이 쓰이는 공식을 사용합니다." },
        ]}
      />
    </>
  );
}

function TdeeGuide() {
  return (
    <>
      <GuideH2>TDEE(총 일일 에너지 소비량)란?</GuideH2>
      <GuideP>
        기초대사량(BMR)에 활동 계수를 곱한 값으로, 하루에 소비하는 총 칼로리입니다.
        체중 유지·감량·증량 식단 계획의 기준점이 됩니다.
      </GuideP>
      <GuideFormulaBox>TDEE = BMR × 활동 계수</GuideFormulaBox>
      <GuideBulletList
        items={[
          "체중 유지: TDEE와 동일하게 섭취",
          "체중 감량: TDEE − 300~500kcal (하루 기준)",
          "체중 증가: TDEE + 300~500kcal",
          "1kg 지방 ≈ 7,700kcal (참고치)",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "TDEE보다 많이 먹으면 무조건 찌나요?", a: "장기적으로 칼로리 잉여가 지속되면 체중이 늘어납니다. 단, 수분·소화 등으로 단기 변동이 있을 수 있어요." },
          { q: "계산 결과가 실제와 많이 다릅니다", a: "공식은 통계 평균 기반이라 개인차가 큽니다. 2~4주간 식사량과 체중 변화를 기록해 개인 TDEE를 보정하는 것이 더 정확합니다." },
        ]}
      />
    </>
  );
}

function OvulationGuide() {
  return (
    <>
      <GuideH2>배란일 계산기란?</GuideH2>
      <GuideP>
        생리 주기를 기반으로 예상 배란일과 가임기를 추정하는 도구입니다.
        일반적으로 다음 생리 예정일 <strong>14일 전</strong>이 배란일로 추정됩니다.
      </GuideP>
      <GuideBulletList
        items={[
          "배란일: 다음 생리 예정일 - 14일 (개인차 있음)",
          "가임기: 배란 전 5일 + 배란 당일 포함 약 6일",
          "정자 생존 기간: 약 3~5일",
          "난자 생존 기간: 약 12~24시간",
        ]}
      />
      <GuideP className="text-neutral-500">
        생리 주기가 불규칙하면 예측 정확도가 낮아질 수 있습니다. 임신 계획이나 피임 목적으로는 산부인과 상담을 권장합니다.
      </GuideP>
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "생리 주기가 불규칙하면 어떻게 하나요?", a: "최근 3~6개월 평균 주기를 사용하거나, 기초체온법·배란 테스트기를 병행하면 더 정확합니다." },
          { q: "배란일에만 임신이 되나요?", a: "배란 전후 5~6일 가임기 동안 임신 가능성이 있습니다. 배란일 당일보다 1~2일 전이 임신율이 높다는 연구도 있습니다." },
        ]}
      />
    </>
  );
}

function BacGuide() {
  return (
    <>
      <GuideH2>혈중알코올농도(BAC) 계산기란?</GuideH2>
      <GuideP>
        음주량·체중·음주 시간으로 혈중알코올농도(BAC, Blood Alcohol Concentration)를 추정하는 도구입니다.
        <strong>참고용 추정치</strong>이며 실제 단속 수치와 다를 수 있습니다.
      </GuideP>
      <GuideTable
        headers={["BAC", "상태 (참고)"]}
        rows={[
          ["0.03% 미만", "면허 정지·취소 기준 이하 (2019년 이후 기준)"],
          ["0.03~0.08%", "면허 정지 (벌금·정지)"],
          ["0.08% 이상", "면허 취소"],
          ["0.10% 이상", "운전 능력 심각한 저하"],
        ]}
      />
      <GuideP className="text-neutral-500">
        음주 후 운전은 절대 하지 마세요. BAC는 개인 특성(간 기능·공복 여부·약물 복용 등)에 따라 크게 달라집니다.
      </GuideP>
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "술을 마시고 몇 시간 후에 운전할 수 있나요?", a: "알코올 분해 속도는 개인차가 크고 공식적으로 보장되지 않습니다. 음주 후에는 충분한 시간이 지나도 측정 결과를 확인하기 전엔 운전하지 마세요." },
          { q: "물을 많이 마시면 빨리 깨나요?", a: "물은 수분 보충에 도움이 되지만 알코올 분해 속도를 높이지는 않습니다. 시간이 유일한 해결책입니다." },
        ]}
      />
    </>
  );
}

// ════════════════════════════════════════════════
// 금융 — 개별 가이드
// ════════════════════════════════════════════════

function LoanGuide() {
  return (
    <>
      <GuideH2>대출 이자 계산기란?</GuideH2>
      <GuideP>
        대출 원금·금리·기간을 입력해 월 상환액과 총 이자를 추정하는 도구입니다.
        원리금 균등 방식이 가장 일반적이며, 은행·상품마다 방식이 다를 수 있습니다.
      </GuideP>
      <GuideTable
        headers={["상환 방식", "특징"]}
        rows={[
          ["원리금 균등", "매달 동일 금액 상환 (이자+원금 혼합), 초기 이자 비중 높음"],
          ["원금 균등", "매달 원금 동일 + 이자 감소, 초기 부담 높으나 총이자 적음"],
          ["만기 일시 상환", "기간 중 이자만 납부, 만기에 원금 전액 상환"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "고정금리 vs 변동금리 어떤 게 유리한가요?", a: "금리 상승기엔 고정금리, 하락기엔 변동금리가 유리할 수 있으나, 미래 금리 예측은 불확실합니다. 본인의 상환 계획과 리스크 감수 수준에 맞게 선택하세요." },
          { q: "중도상환 수수료가 있나요?", a: "대부분의 금융기관은 일정 기간(통상 3년) 내 중도상환 시 수수료를 부과합니다. 상품 약관을 확인하세요." },
        ]}
      />
    </>
  );
}

function CompoundInterestGuide() {
  return (
    <>
      <GuideH2>복리 계산기란?</GuideH2>
      <GuideP>
        이자에 이자가 붙는 <strong>복리(Compound Interest)</strong> 방식으로 투자 수익이나 저축 원리금을 계산합니다.
        시간이 길수록 단리 대비 수익 차이가 크게 벌어집니다.
      </GuideP>
      <GuideFormulaBox>원리금 = 원금 × (1 + r/n)^(n×t)</GuideFormulaBox>
      <GuideP>r = 연이율, n = 연간 복리 횟수, t = 기간(년)</GuideP>
      <GuideBulletList
        items={[
          "72의 법칙: 원금이 2배 되는 기간 ≈ 72 ÷ 연이율(%)",
          "예: 연 6% 복리 → 약 12년 만에 2배",
          "장기 투자일수록 복리 효과가 기하급수적으로 커짐",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "적금은 단리인가요 복리인가요?", a: "국내 정기적금은 대부분 단리입니다. 복리 상품은 상품 설명서에 명시되어 있으므로 확인하세요." },
          { q: "복리 주기가 짧을수록 유리한가요?", a: "복리 횟수가 많을수록(월 > 분기 > 연) 실질 수익이 조금 더 높아집니다. 차이는 금리가 높을수록 커집니다." },
        ]}
      />
    </>
  );
}

function ExchangeGuide() {
  return (
    <>
      <GuideH2>환율 계산기란?</GuideH2>
      <GuideP>
        두 통화 간 환율을 입력해 금액을 빠르게 환산하는 도구입니다.
        실시간 환율을 반영하려면 은행·환전소 고시 환율을 확인하세요.
      </GuideP>
      <GuideBulletList
        items={[
          "매매 기준율: 은행이 고시하는 기준 환율",
          "현찰 살 때 환율: 실제 외화 매입 시 적용 (기준율보다 높음)",
          "현찰 팔 때 환율: 외화 매도 시 적용 (기준율보다 낮음)",
          "환전 우대: 은행 앱·환전소에서 수수료 할인 가능",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "공항 환전 vs 은행 앱 환전 어느 게 유리한가요?", a: "일반적으로 은행 앱이나 사전 환전이 수수료가 낮습니다. 공항은 편의성 대신 환율이 불리한 경우가 많아요." },
          { q: "해외결제 시 환율은 언제 결정되나요?", a: "카드사마다 다르지만, 보통 결제 승인일이 아닌 매입 처리일 환율이 적용됩니다." },
        ]}
      />
    </>
  );
}

function VatGuide() {
  return (
    <>
      <GuideH2>부가가치세(VAT) 계산기란?</GuideH2>
      <GuideP>
        공급가액과 부가세(10%)를 빠르게 분리하거나 합산하는 도구입니다.
        사업자 세금계산서 발행, 영수증 확인 등에 활용할 수 있습니다.
      </GuideP>
      <GuideFormulaBox>
        공급가액 포함가 = 공급가액 × 1.1{"\n"}
        공급가액 = 부가세 포함가 ÷ 1.1{"\n"}
        부가세 = 공급가액 × 0.1
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "한국 부가가치세율: 10% (기본)",
          "면세 품목: 기초 식품, 의료, 교육 등 일부는 부가세 면제",
          "간이과세자: 업종별 부가가치율 적용으로 실제 납부세액 다름",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "음식점은 부가세가 있나요?", a: "음식점은 과세 대상으로 부가세 10%가 붙습니다. 단, 간이과세자는 실제 납부액이 다를 수 있어요." },
          { q: "부가세 환급은 언제 받나요?", a: "매출세액보다 매입세액이 크면 환급 신청이 가능합니다. 일반 사업자는 분기별, 간이과세자는 연 1회 신고합니다." },
        ]}
      />
    </>
  );
}

// ════════════════════════════════════════════════
// 학교 — 개별 가이드
// ════════════════════════════════════════════════

function NeisGuide() {
  return (
    <>
      <GuideH2>NEIS 글자수 계산기란?</GuideH2>
      <GuideP>
        학교생활기록부(생기부) 각 항목의 <strong>허용 글자 수 한도</strong>를 기준으로 작성 분량을 확인하는 도구입니다.
        한글·영문·공백·특수문자 등의 계산 방식이 NEIS와 다를 수 있으므로 최종 확인은 NEIS에서 하세요.
      </GuideP>
      <GuideTable
        headers={["항목", "글자 수 한도 (참고)"]}
        rows={[
          ["자율활동", "500자"],
          ["동아리활동", "500자"],
          ["봉사활동", "특기사항 500자"],
          ["진로활동", "700자"],
          ["교과 세부능력 및 특기사항 (세특)", "500자 (과목별)"],
          ["행동특성 및 종합의견", "500자"],
        ]}
      />
      <GuideP className="text-neutral-500">한도는 학년·학교급·교육부 지침에 따라 변경될 수 있습니다. 담당 교사 또는 NEIS 공지를 확인하세요.</GuideP>
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "공백도 글자 수에 포함되나요?", a: "NEIS는 공백 포함 글자 수로 계산하는 것이 일반적입니다. 이 계산기의 설정을 확인하고 맞춰 사용하세요." },
          { q: "글자 수를 초과하면 저장이 안 되나요?", a: "NEIS에서 한도 초과 시 저장이 거부됩니다. 미리 이 계산기로 맞춰 작성하면 편리합니다." },
        ]}
      />
    </>
  );
}

function GpaGuide() {
  return (
    <>
      <GuideH2>학점(GPA) 계산기란?</GuideH2>
      <GuideP>
        각 과목의 학점(이수 학점)과 성적(점수 또는 등급)을 입력해 <strong>평점 평균(GPA)</strong>을 계산하는 도구입니다.
        취업·편입·장학금 신청 시 많이 활용됩니다.
      </GuideP>
      <GuideFormulaBox>GPA = Σ(과목 학점 × 평점) ÷ 총 이수 학점</GuideFormulaBox>
      <GuideTable
        headers={["등급", "4.5 만점 평점", "4.0 만점 평점"]}
        rows={[
          ["A+ (95점 이상)", "4.5", "4.0"],
          ["A0 (90~94)", "4.0", "3.7"],
          ["B+ (85~89)", "3.5", "3.3"],
          ["B0 (80~84)", "3.0", "3.0"],
          ["C+ (75~79)", "2.5", "2.3"],
          ["C0 (70~74)", "2.0", "2.0"],
          ["D+ (65~69)", "1.5", "1.3"],
          ["D0 (60~64)", "1.0", "1.0"],
          ["F (60 미만)", "0.0", "0.0"],
        ]}
      />
      <GuideP className="text-neutral-500">학교마다 등급 기준과 만점이 다를 수 있습니다. 본인 학교 학사 규정을 확인하세요.</GuideP>
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "4.5 만점과 4.0 만점 중 어느 게 맞나요?", a: "학교마다 다릅니다. 국내 대부분의 대학은 4.5 만점을 사용하지만, 일부는 4.0입니다. 성적 증명서에서 확인하세요." },
          { q: "P/F 과목은 계산에 포함되나요?", a: "P/F(통과/실패) 과목은 보통 GPA 계산에서 제외됩니다. 학교 규정을 확인하세요." },
        ]}
      />
    </>
  );
}

function AverageGuide() {
  return (
    <>
      <GuideH2>평균 계산기란?</GuideH2>
      <GuideP>
        여러 숫자를 입력해 <strong>산술 평균</strong>을 빠르게 계산하는 도구입니다.
        성적 평균, 측정값 평균 등 다양한 상황에서 활용할 수 있습니다.
      </GuideP>
      <GuideFormulaBox>산술 평균 = (모든 값의 합) ÷ (값의 개수)</GuideFormulaBox>
      <GuideH3>다른 종류의 평균</GuideH3>
      <GuideBulletList
        items={[
          "가중 평균: 각 값에 가중치(비중)를 곱해 평균 — 학점 평균, 포트폴리오 수익률 등",
          "기하 평균: n개 값의 n제곱근 — 연평균 성장률(CAGR) 계산에 사용",
          "중앙값(Median): 정렬 후 가운데 값 — 극단값(이상치) 영향 적음",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "이상치가 있을 때 평균을 써도 되나요?", a: "이상치가 크면 평균이 왜곡됩니다. 이 경우 중앙값이나 절사 평균(상하위 일부 제외)이 더 대표성 있습니다." },
          { q: "평균과 중앙값이 크게 다르면?", a: "분포가 한쪽으로 치우쳐 있거나 극단값이 존재한다는 신호입니다. 두 지표를 함께 보면 데이터 특성을 파악하기 좋습니다." },
        ]}
      />
    </>
  );
}

// ════════════════════════════════════════════════
// 일상 — 개별 가이드
// ════════════════════════════════════════════════

function AgeGuide() {
  return (
    <>
      <GuideH2>나이 계산기란?</GuideH2>
      <GuideP>
        생년월일을 입력해 <strong>만 나이</strong>와 세는 나이(한국식)를 동시에 확인하는 도구입니다.
        2023년부터 법적·사회적 나이 기준이 만 나이로 통일되었습니다.
      </GuideP>
      <GuideTable
        headers={["구분", "계산 방식"]}
        rows={[
          ["만 나이", "현재 날짜 − 생년월일 (생일 이전이면 −1)"],
          ["세는 나이", "현재 연도 − 출생 연도 + 1"],
          ["연 나이", "현재 연도 − 출생 연도"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "2023년 이후 법적 나이는 어떻게 되나요?", a: "2023년 6월부터 행정·법적 기준이 만 나이로 통일되었습니다. 단, 병역법·청소년보호법 등 일부는 기존 방식을 유지합니다." },
          { q: "생일이 지나지 않았으면 어떻게 계산하나요?", a: "만 나이는 올해 생일이 아직 안 됐으면 (현재 연도 − 출생 연도 − 1)이 됩니다." },
        ]}
      />
    </>
  );
}

function DateGuide() {
  return (
    <>
      <GuideH2>날짜 계산기란?</GuideH2>
      <GuideP>
        두 날짜 사이의 차이(일수·주·월·년)를 계산하거나, 특정 날짜에서 일수를 더하고 빼는 도구입니다.
        기념일·디데이·계약 기간·만기일 등을 계산할 때 유용합니다.
      </GuideP>
      <GuideBulletList
        items={[
          "D-Day: 목표일까지 남은 날수",
          "경과일: 시작일부터 오늘까지 지난 날수",
          "만료일: 시작일 + n일 후 날짜",
          "영업일 계산은 공휴일이 달라 별도 주의 필요",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "날짜를 포함해서 계산하나요, 제외하나요?", a: "시작일 포함 기준과 제외 기준 결과가 1일 차이납니다. 계약서·법령의 경우 기산일 포함 여부를 반드시 확인하세요." },
          { q: "윤년은 자동으로 반영되나요?", a: "네, 이 계산기는 윤년(2월 29일)을 자동으로 반영합니다." },
        ]}
      />
    </>
  );
}

function DiscountGuide() {
  return (
    <>
      <GuideH2>할인율 계산기란?</GuideH2>
      <GuideP>
        정가와 할인율(%)로 할인가를 계산하거나, 정가와 판매가로 할인율을 역산하는 도구입니다.
        쇼핑·가격 비교 시 빠르게 활용할 수 있습니다.
      </GuideP>
      <GuideFormulaBox>
        할인가 = 정가 × (1 − 할인율 ÷ 100){"\n"}
        할인율(%) = (1 − 판매가 ÷ 정가) × 100
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "중복 할인 적용: 할인 후 가격에 추가 할인율을 적용",
          "예: 20% 할인 후 추가 10% → 최종가 = 정가 × 0.8 × 0.9 (28% 할인 효과)",
          "포인트·쿠폰 혜택은 별도 계산",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "20% 할인과 10%+10% 중복 할인 중 어느 게 더 싼가요?", a: "20% 단순 할인이 더 쌉니다. 10% + 10% 중복 적용은 실질 19% 할인(0.9 × 0.9 = 0.81)이라 정가의 81%를 내게 됩니다." },
          { q: "부가세 포함 가격에서 할인율을 계산해도 되나요?", a: "네, 소비자가 부담하는 최종 가격 기준으로 계산하면 됩니다. 사업자 간 거래는 공급가액 기준을 쓰는 경우도 있습니다." },
        ]}
      />
    </>
  );
}

// ════════════════════════════════════════════════
// 카테고리별 제네릭 가이드
// ════════════════════════════════════════════════

function GenericHealthGuide({ slug }: { slug: string }) {
  const tool = getToolBySlug(slug);
  if (!tool) return null;
  return (
    <>
      <GuideH2>{tool.title}란?</GuideH2>
      <GuideP>
        {tool.description} 이 도구는 입력값을 바꾸면 결과가 즉시 갱신되는 <strong>빠른 참고용</strong> 계산기입니다.
        개인 건강 상태·질환·복용 약물에 따라 실제 수치가 다를 수 있으므로, 의료적 판단은 전문의와 상담하세요.
      </GuideP>
      <GuideH3>입력 안내</GuideH3>
      <GuideBulletList
        items={[
          "체중은 측정 당일 공복 기준이 가장 일정합니다.",
          "신장은 신발을 벗고 벽에 등을 대고 측정한 값을 입력하세요.",
          "나이는 만 나이를 기준으로 합니다.",
          "결과는 통계 기반 추정치로 개인차가 있을 수 있습니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "이 결과를 의료 판단에 사용해도 되나요?", a: "아니요, 이 도구는 참고용 추정치입니다. 건강 이상 증상이 있거나 의료적 결정이 필요한 경우 반드시 전문의와 상담하세요." },
          { q: "결과가 정상 범위를 벗어났어요", a: "단순 계산 결과만으로 건강 문제를 진단할 수 없습니다. 전문 검사와 의사 상담을 통해 정확한 확인이 필요합니다." },
        ]}
      />
    </>
  );
}

function GenericFinanceGuide({ slug }: { slug: string }) {
  const tool = getToolBySlug(slug);
  if (!tool) return null;
  return (
    <>
      <GuideH2>{tool.title}란?</GuideH2>
      <GuideP>
        {tool.description} 이 도구는 입력값 기반의 <strong>참고용 추정</strong> 계산기입니다.
        실제 금융 상품·세금·이율은 금융기관·세법·계약 조건에 따라 다를 수 있습니다.
      </GuideP>
      <GuideH3>입력 안내</GuideH3>
      <GuideBulletList
        items={[
          "금리는 연이율(%) 기준으로 입력하세요.",
          "기간 단위(년/월)를 먼저 확인하고 숫자를 넣으세요.",
          "세금·수수료는 별도 반영이 필요할 수 있습니다.",
          "결과는 참고용이며 실제 계약·납부액과 다를 수 있습니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "실제 금융 계약에 이 결과를 그대로 써도 되나요?", a: "아니요, 실제 금리·수수료·세금은 금융기관마다 다릅니다. 최종 계약 전 해당 금융기관에 정확한 조건을 확인하세요." },
          { q: "세금은 어떻게 반영되나요?", a: "이 계산기는 세전 기준 또는 간이 추정치를 사용합니다. 세후 실수령액은 이자소득세(15.4%) 등을 별도 적용하세요." },
        ]}
      />
    </>
  );
}

function GenericSchoolGuide({ slug }: { slug: string }) {
  const tool = getToolBySlug(slug);
  if (!tool) return null;
  return (
    <>
      <GuideH2>{tool.title}란?</GuideH2>
      <GuideP>
        {tool.description} 수학·통계 계산을 빠르게 처리하는 <strong>학습 보조 도구</strong>입니다.
        시험·과제에서 직접 사용하기보다 개념 이해와 검산에 활용하세요.
      </GuideP>
      <GuideH3>입력 안내</GuideH3>
      <GuideBulletList
        items={[
          "숫자는 정수 또는 소수로 입력 가능합니다.",
          "음수가 필요한 경우 '-' 부호를 앞에 붙이세요.",
          "여러 값을 입력할 때는 콤마나 줄바꿈으로 구분하세요.",
          "계산 과정과 공식을 함께 확인하면 학습에 도움이 됩니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "시험 중에 이 계산기를 써도 되나요?", a: "시험 규정에 따라 다릅니다. 공식 시험에서는 허용된 도구만 사용하세요." },
          { q: "소수점 자리가 길게 나오면 어떻게 하나요?", a: "문제 요구에 따라 반올림·올림·버림 처리를 하면 됩니다. 이 계산기는 가능한 정밀도로 표시합니다." },
        ]}
      />
    </>
  );
}

function GenericUnitGuide({ slug }: { slug: string }) {
  const tool = getToolBySlug(slug);
  if (!tool) return null;
  return (
    <>
      <GuideH2>{tool.title}란?</GuideH2>
      <GuideP>
        {tool.description} 단위 변환을 빠르게 처리하는 도구로, 일상·학업·업무에서 활용할 수 있습니다.
      </GuideP>
      <GuideH3>입력 안내</GuideH3>
      <GuideBulletList
        items={[
          "변환할 값을 숫자로 입력하고 원본 단위를 선택하세요.",
          "소수점 입력이 가능합니다.",
          "결과 단위를 선택해 원하는 단위로 환산하세요.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "변환 값이 소수로 나와요", a: "단위 간 변환 계수에 따라 소수가 나올 수 있습니다. 필요에 따라 반올림해서 사용하세요." },
          { q: "국제 표준 단위는 무엇인가요?", a: "SI(국제단위계)가 국제 표준입니다. 미터(m), 킬로그램(kg), 초(s), 켈빈(K) 등이 기본 단위입니다." },
        ]}
      />
    </>
  );
}

function GenericDailyGuide({ slug }: { slug: string }) {
  const tool = getToolBySlug(slug);
  if (!tool) return null;
  return (
    <>
      <GuideH2>{tool.title}란?</GuideH2>
      <GuideP>
        {tool.description} 일상 생활에서 빠르게 활용할 수 있는 <strong>실용 계산 도구</strong>입니다.
      </GuideP>
      <GuideH3>입력 안내</GuideH3>
      <GuideBulletList
        items={[
          "각 입력 항목의 단위를 확인 후 숫자를 넣으세요.",
          "결과는 참고용 추정치입니다.",
          "더 정확한 결과가 필요하면 전문 기관이나 전문가를 통해 확인하세요.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "결과를 법적 판단에 사용해도 되나요?", a: "아니요, 이 도구는 일상 참고용입니다. 법적·공식 판단에는 관련 기관이나 전문가의 확인이 필요합니다." },
          { q: "결과가 예상과 다르게 나와요", a: "입력값 단위와 조건을 다시 확인해 보세요. 계속 다르다면 해당 분야 전문가에게 상담을 권장합니다." },
        ]}
      />
    </>
  );
}

function GenericMilitaryGuide({ slug }: { slug: string }) {
  const tool = getToolBySlug(slug);
  if (!tool) return null;
  return (
    <>
      <GuideH2>{tool.title}란?</GuideH2>
      <GuideP>
        {tool.description} 군 복무 관련 일정·급여를 빠르게 확인할 수 있는 참고 도구입니다.
      </GuideP>
      <GuideH3>입력 안내</GuideH3>
      <GuideBulletList
        items={[
          "입대일·전역일은 실제 통보서 기준으로 입력하세요.",
          "병과·계급에 따라 복무 기간·급여가 다릅니다.",
          "연도별 병사 봉급은 변경될 수 있습니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "복무 기간은 어떻게 되나요?", a: "육군·해병대 18개월, 해군 20개월, 공군 21개월이 기준입니다(2024년 기준, 변경 가능)." },
          { q: "전역일이 주말·공휴일이면 어떻게 되나요?", a: "일반적으로 직전 평일에 전역 처리되지만, 부대·상황에 따라 다를 수 있습니다. 소속 부대에 문의하세요." },
        ]}
      />
    </>
  );
}

// ════════════════════════════════════════════════
// 직장 — 추가 개별 가이드 (job-004 ~ job-028)
// ════════════════════════════════════════════════

function SalaryRaiseGuide() {
  return (
    <>
      <GuideH2>연봉 인상액 계산기란?</GuideH2>
      <GuideP>
        현재 연봉과 인상률(%)을 입력하면 인상 후 연봉과 인상액을 바로 확인하는 도구입니다.
        이직 협상·연봉 협상 결과를 빠르게 비교할 때 유용합니다.
      </GuideP>
      <GuideH3>입력 안내</GuideH3>
      <GuideBulletList
        items={[
          "현재 연봉은 세전 합산 연봉(상여 포함 여부를 회사 기준에 맞게)을 입력하세요.",
          "인상률은 회사에서 통보받은 퍼센트(%)를 그대로 넣으세요.",
          "인상액으로 역산하려면 '인상액' 칸에 금액을 넣고 인상률을 확인하세요.",
        ]}
      />
      <GuideFormulaBox>
        인상 후 연봉 = 현재 연봉 × (1 + 인상률 ÷ 100){"\n"}
        인상액 = 현재 연봉 × 인상률 ÷ 100
      </GuideFormulaBox>
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "물가상승률보다 낮은 인상은 실질 삭감인가요?", a: "맞습니다. 인상률이 소비자물가지수(CPI) 상승률보다 낮으면 실질 구매력은 감소합니다." },
          { q: "인상은 기본급 기준인가요, 합산 연봉 기준인가요?", a: "회사마다 다릅니다. 기본급에만 적용하는 경우도 있고 합산 연봉에 적용하는 경우도 있으니 인사팀에 확인하세요." },
        ]}
      />
    </>
  );
}

function SalaryRaisePredictGuide() {
  return (
    <>
      <GuideH2>연봉 인상 예측 계산기란?</GuideH2>
      <GuideP>
        현재 연봉과 목표 연봉을 입력해 몇 년 후에 목표에 도달하는지, 또는 매년 몇 % 인상돼야 하는지를
        추정하는 도구입니다. 장기 커리어 플래닝에 활용하세요.
      </GuideP>
      <GuideH3>입력 안내</GuideH3>
      <GuideBulletList
        items={[
          "현재 연봉과 목표 연봉은 세전 기준으로 맞춰 입력하세요.",
          "예상 연간 인상률은 과거 본인 인상률·업계 평균을 참고하세요.",
          "기간(년)을 바꿔가며 인상률 변화를 비교해 보세요.",
        ]}
      />
      <GuideFormulaBox>목표 도달 기간 ≈ log(목표 연봉 ÷ 현재 연봉) ÷ log(1 + r)</GuideFormulaBox>
      <GuideP>r = 연간 인상률(소수)</GuideP>
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "매년 같은 비율로 인상되지 않아도 되나요?", a: "실제로는 매년 다르게 인상됩니다. 이 계산기는 평균 인상률을 가정한 추정치이므로 방향성 파악 용도로 쓰세요." },
          { q: "이직 인상과 내부 인상 중 뭐가 더 빠른가요?", a: "통계적으로 이직 시 연봉 인상폭이 내부 인상보다 크게 나타나는 경우가 많습니다. 두 시나리오를 각각 입력해 비교해 보세요." },
        ]}
      />
    </>
  );
}

function RetirementFundGuide() {
  return (
    <>
      <GuideH2>노후자금 계산기란?</GuideH2>
      <GuideP>
        은퇴 후 필요한 월 생활비와 예상 은퇴 기간을 입력해 필요한 총 노후자금과 현재부터 매월 얼마씩
        저축해야 하는지를 추정하는 도구입니다.
      </GuideP>
      <GuideH3>입력 안내</GuideH3>
      <GuideBulletList
        items={[
          "월 생활비는 은퇴 후 필요한 현재 가치 기준 금액을 넣으세요.",
          "예상 은퇴 나이와 기대 수명을 현실적으로 설정하세요.",
          "기대 수익률은 투자 성향에 따라 보수적(3~4%)·중립(5~6%)·적극적(7~8%)으로 나눠볼 수 있습니다.",
          "물가상승률(2~3%)을 반영할수록 더 현실적인 목표액이 나옵니다.",
        ]}
      />
      <GuideFormulaBox>필요 노후자금 ≈ 월 생활비 × 12 × 은퇴 기간(년) × 물가 조정 계수</GuideFormulaBox>
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "국민연금·퇴직연금은 별도로 빼야 하나요?", a: "네, 국민연금 예상 수령액과 퇴직연금 적립액을 노후자금에서 차감하면 순수하게 개인이 준비해야 할 금액이 나옵니다." },
          { q: "기대 수명을 얼마로 잡아야 하나요?", a: "한국 평균 기대 수명은 약 83세(2023년 기준)이지만 개인 건강 상태에 따라 다릅니다. 장수 리스크 대비로 90~95세로 넉넉히 잡는 것을 권장합니다." },
        ]}
      />
    </>
  );
}

function TenureGuide() {
  return (
    <>
      <GuideH2>근속 기간 계산기란?</GuideH2>
      <GuideP>
        입사일을 기준으로 오늘까지의 정확한 근속 기간(년·월·일)을 계산하는 도구입니다.
        연차 산정·퇴직금 계산·경력 증명서 작성 시 빠르게 확인할 수 있습니다.
      </GuideP>
      <GuideH3>입력 안내</GuideH3>
      <GuideBulletList
        items={[
          "입사일은 실제 첫 출근일(근로계약서 기준)을 넣으세요.",
          "퇴사 예정일을 넣으면 퇴사 시점의 근속 기간을 미리 확인할 수 있습니다.",
          "휴직 기간이 있다면 별도로 차감해서 확인하세요 (이 계산기는 연속 재직 기준).",
        ]}
      />
      <GuideH2>근속 기간별 주요 변화</GuideH2>
      <GuideTable
        headers={["근속", "주요 변화"]}
        rows={[
          ["1년 이상", "연차 15일 발생, 퇴직금 지급 요건 충족"],
          ["3년 이상", "연차 16일"],
          ["5년 이상", "연차 17일"],
          ["10년 이상", "연차 19일"],
          ["20년 이상", "연차 최대 25일"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "육아휴직 기간도 근속에 포함되나요?", a: "육아휴직은 근속 기간에 포함됩니다. 단, 무급 휴직(개인 사유)은 회사 규정에 따라 다를 수 있습니다." },
          { q: "동일 회사 재입사 시 이전 근속도 합산되나요?", a: "원칙적으로 별개로 봅니다. 단, 재입사 합의 계약 또는 취업규칙에 따라 통산할 수 있으니 인사팀에 확인하세요." },
        ]}
      />
    </>
  );
}

function WorkHoursGuide() {
  return (
    <>
      <GuideH2>근무 시간 계산기란?</GuideH2>
      <GuideP>
        출근·퇴근 시간을 입력해 실제 근무 시간(휴게 시간 제외)과 주간 누적 시간을 계산하는 도구입니다.
        연장·야간·휴일 근무 시간도 구분해 수당 계산 기준을 잡을 수 있습니다.
      </GuideP>
      <GuideH3>입력 안내</GuideH3>
      <GuideBulletList
        items={[
          "출퇴근 시각은 실제 근무 시작·종료 시각을 입력하세요.",
          "휴게 시간(점심 등)은 법정 기준(4시간 근무 시 30분, 8시간 시 1시간 이상)을 빼고 계산합니다.",
          "22시~06시는 야간 근무로, 법정 공휴일·일요일은 휴일 근무로 구분됩니다.",
          "주 52시간(기본 40시간 + 연장 12시간) 초과 여부를 확인하세요.",
        ]}
      />
      <GuideTable
        headers={["근무 유형", "수당 배율"]}
        rows={[
          ["기본 근무 (주 40시간 이내)", "통상임금 × 1.0"],
          ["연장 근무", "통상임금 × 1.5"],
          ["야간 근무 (22~06시)", "통상임금 × 0.5 추가"],
          ["휴일 근무 (8시간 이내)", "통상임금 × 1.5"],
          ["휴일 연장 (8시간 초과)", "통상임금 × 2.0"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "포괄임금제면 연장수당이 없나요?", a: "포괄임금제라도 초과 근무가 과도하면 추가 청구가 가능한 경우가 있습니다. 노무사 상담을 권장합니다." },
          { q: "재택근무도 근무 시간 계산이 같나요?", a: "네, 재택근무도 동일하게 근로기준법이 적용됩니다. 시작·종료 시각을 기록해 두는 것이 좋습니다." },
        ]}
      />
    </>
  );
}

function CareerGuide() {
  return (
    <>
      <GuideH2>경력 기간 계산기란?</GuideH2>
      <GuideP>
        여러 직장의 입사·퇴사일을 입력해 총 경력 기간(년·월)을 자동으로 합산하는 도구입니다.
        이력서·경력증명서 작성 시 경력 기간을 정확하게 기재할 때 활용하세요.
      </GuideP>
      <GuideH3>입력 안내</GuideH3>
      <GuideBulletList
        items={[
          "각 직장의 입사일과 퇴사일을 정확히 입력하세요.",
          "재직 중인 직장은 퇴사일에 오늘 날짜를 넣으세요.",
          "겹치는 기간(겸직)이 있으면 중복 계산에 주의하세요.",
          "인턴·계약직도 포함 여부를 선택할 수 있습니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "경력 기간을 '몇 년 이상'으로 올림해도 되나요?", a: "이력서 기재 시에는 정확한 기간을 쓰는 것이 원칙입니다. '3년 차'처럼 표현하는 경우 입사 연도 기준으로 작성하면 됩니다." },
          { q: "프리랜서 기간은 경력으로 인정되나요?", a: "직종·업무 내용에 따라 다릅니다. 사업자 등록·계약서·포트폴리오 등 증빙을 준비하면 인정받기 쉬워집니다." },
        ]}
      />
    </>
  );
}

function HourlyWageGuide() {
  return (
    <>
      <GuideH2>시급 계산기란?</GuideH2>
      <GuideP>
        월급이나 연봉에서 시급을 역산하거나, 시급에서 주·월 예상 급여를 계산하는 도구입니다.
        프리랜서 단가 산정·아르바이트 비교 시 활용하세요.
      </GuideP>
      <GuideH3>입력 안내</GuideH3>
      <GuideBulletList
        items={[
          "월급에서 시급 계산 시: 월 소정 근로시간(통상 209시간)으로 나눕니다.",
          "연봉에서 시급 계산 시: 연봉 ÷ 12 ÷ 209 (월 소정 근로시간 기준).",
          "주휴수당 포함 월 소정 근로시간은 주 40시간 기준 209시간입니다.",
          "2025년 최저시급은 10,030원입니다.",
        ]}
      />
      <GuideFormulaBox>
        시급(월급 기준) = 월급 ÷ 월 소정 근로시간{"\n"}
        월 소정 근로시간 = (주 소정 근로시간 + 주휴시간) × 4.345
      </GuideFormulaBox>
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "왜 월급 ÷ 209시간인가요?", a: "주 40시간 + 주휴 8시간 = 48시간/주 × 4.345주 ≈ 209시간입니다. 주 40시간 미만이면 해당 근로시간으로 계산해야 합니다." },
          { q: "내 시급이 최저시급보다 낮게 나오면 어떻게 하나요?", a: "최저임금법 위반일 수 있습니다. 고용노동부 신고 또는 노무사 상담을 권장합니다." },
        ]}
      />
    </>
  );
}

function UphGuide() {
  return (
    <>
      <GuideH2>UPH(시간당 생산량) 계산기란?</GuideH2>
      <GuideP>
        UPH(Units Per Hour)는 1시간 동안 처리한 작업량을 나타내는 생산성 지표입니다.
        물류·제조·콜센터 등 반복 작업의 효율을 측정하고 목표를 설정할 때 사용합니다.
      </GuideP>
      <GuideH3>입력 안내</GuideH3>
      <GuideBulletList
        items={[
          "총 처리 건수와 근무 시간(순수 작업 시간, 휴게 제외)을 입력하세요.",
          "작업 유형(피킹·패킹·분류 등)마다 UPH 기준이 다릅니다.",
          "목표 UPH를 설정하면 목표 달성에 필요한 시간을 역산할 수 있습니다.",
        ]}
      />
      <GuideFormulaBox>UPH = 총 처리량 ÷ 근무 시간(시)</GuideFormulaBox>
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "UPH가 낮으면 무조건 불이익인가요?", a: "UPH는 참고 지표입니다. 품질 불량·오류율과 함께 봐야 합니다. 속도만 높이다 오류가 늘면 오히려 생산성이 떨어집니다." },
          { q: "UPH 목표는 어떻게 정하나요?", a: "업종별 표준 UPH(쿠팡·물류 등 회사 공개 기준)를 참고하거나, 숙련 직원 평균값을 기준으로 설정하는 것이 일반적입니다." },
        ]}
      />
    </>
  );
}

function BonusTaxGuide() {
  return (
    <>
      <GuideH2>상여금 세금 계산기란?</GuideH2>
      <GuideP>
        상여금(보너스)에 부과되는 원천징수 소득세를 추정하는 도구입니다.
        상여금은 월급과 합산해 간이세액을 적용하거나 별도 세율로 원천징수될 수 있습니다.
      </GuideP>
      <GuideH3>상여금 원천징수 방식 (참고)</GuideH3>
      <GuideBulletList
        items={[
          "방법1: (월 급여 + 상여금) 기준으로 간이세액표 적용",
          "방법2: 상여금을 12로 나눠 월 급여에 더한 뒤 세액 12배 적용",
          "상여금 지급 월의 급여명세서와 원천징수 방식을 인사팀에 확인하세요.",
          "연말정산 시 실제 납부 세액으로 최종 정산됩니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "상여금이 클수록 세금이 크게 올라가나요?", a: "상여금이 크면 해당 월 소득이 높아져 높은 세율 구간이 적용될 수 있습니다. 연말정산에서 최종 정산되므로 실제 세부담은 연간 기준으로 계산됩니다." },
          { q: "상여금에도 4대 보험이 붙나요?", a: "상여금은 보수총액에 포함되어 4대 보험 정산 시 반영됩니다. 지급 월에 따라 일시적으로 공제액이 늘어날 수 있습니다." },
        ]}
      />
    </>
  );
}

function IncomeTaxGuide() {
  return (
    <>
      <GuideH2>소득세 계산기란?</GuideH2>
      <GuideP>
        연 소득과 기본공제 항목을 입력해 종합소득세 또는 근로소득세 예상액을 추정하는 도구입니다.
        연말정산 전 예상 환급·추가납부 여부를 가늠할 때 활용하세요.
      </GuideP>
      <GuideH3>2024년 소득세율 구간 (참고)</GuideH3>
      <GuideTable
        headers={["과세표준 (연)", "세율", "누진공제"]}
        rows={[
          ["1,400만 원 이하", "6%", "—"],
          ["1,400만~5,000만 원", "15%", "126만 원"],
          ["5,000만~8,800만 원", "24%", "576만 원"],
          ["8,800만~1.5억 원", "35%", "1,544만 원"],
          ["1.5억~3억 원", "38%", "1,994만 원"],
          ["3억~5억 원", "40%", "2,594만 원"],
          ["5억~10억 원", "42%", "3,594만 원"],
          ["10억 원 초과", "45%", "6,594만 원"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "지방소득세도 따로 내야 하나요?", a: "네, 소득세의 10%를 지방소득세로 납부합니다. 이 계산기 결과에 10%를 더하면 총 납부 세액이 됩니다." },
          { q: "근로소득공제는 자동으로 반영되나요?", a: "이 계산기는 근로소득공제를 반영해 추정합니다. 실제 공제 항목(의료비·교육비·기부금 등)은 별도 입력하세요." },
        ]}
      />
    </>
  );
}

function MinWageGuide() {
  return (
    <>
      <GuideH2>최저임금 계산기란?</GuideH2>
      <GuideP>
        연도별 최저시급을 기준으로 시급·일급·월급 최저임금을 계산하고, 현재 받는 임금이 법정 최저임금을
        충족하는지 확인하는 도구입니다.
      </GuideP>
      <GuideH3>연도별 최저시급 (참고)</GuideH3>
      <GuideTable
        headers={["연도", "최저시급"]}
        rows={[
          ["2023년", "9,620원"],
          ["2024년", "9,860원"],
          ["2025년", "10,030원"],
        ]}
      />
      <GuideBulletList
        items={[
          "월 최저임금(주 40시간·월 209시간 기준): 2025년 기준 약 2,096,270원",
          "주휴수당 포함 시간급으로 비교해야 하므로 실수령 시급을 확인하세요.",
          "수습 기간(3개월 이내)의 경우 10% 감액이 가능한 경우도 있습니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "최저임금 위반 신고는 어디에 하나요?", a: "고용노동부 고객상담센터(국번 없이 1350) 또는 가까운 노동지청에 신고할 수 있습니다." },
          { q: "수습 기간에 최저임금보다 낮게 받아도 되나요?", a: "1년 이상 계약인 경우 수습 3개월은 최저임금의 90%까지 지급 가능합니다. 단, 단순 노무 직종은 감액 불가입니다." },
        ]}
      />
    </>
  );
}

function AnnualLeavePayGuide() {
  return (
    <>
      <GuideH2>연차수당 계산기란?</GuideH2>
      <GuideP>
        사용하지 않은 연차 일수와 통상임금을 기준으로 연차수당을 추정하는 도구입니다.
        연차 촉진 제도 미적용·퇴직 시 미사용 연차에 대해 수당이 지급됩니다.
      </GuideP>
      <GuideH3>입력 안내</GuideH3>
      <GuideBulletList
        items={[
          "통상임금: 기본급 + 고정수당(식대, 직무수당 등)을 포함한 금액",
          "미사용 연차 일수: 당해 연도 부여 일수에서 사용한 일수를 뺀 값",
          "일급 통상임금 = 월 통상임금 ÷ 209 × 8 (1일 소정 근로시간 기준)",
        ]}
      />
      <GuideFormulaBox>연차수당 = 1일 통상임금 × 미사용 연차 일수</GuideFormulaBox>
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "연차 촉진을 받았는데도 수당을 청구할 수 있나요?", a: "회사가 적법한 연차 촉진 절차(2회 서면 통보)를 밟았다면 수당 지급 의무가 면제됩니다. 절차 미준수 시 청구 가능합니다." },
          { q: "퇴직 시 연차수당은 언제 받나요?", a: "퇴직 후 14일 이내에 지급하는 것이 원칙입니다. 지급이 늦어지면 이자(연 20%)도 청구할 수 있습니다." },
        ]}
      />
    </>
  );
}

function AttendanceRateGuide() {
  return (
    <>
      <GuideH2>출근율 계산기란?</GuideH2>
      <GuideP>
        소정 근무일 대비 실제 출근일 비율을 계산하는 도구입니다.
        연차 발생 요건(80% 이상 출근) 충족 여부나 근태 관리에 활용할 수 있습니다.
      </GuideP>
      <GuideFormulaBox>출근율(%) = (실제 출근일 ÷ 소정 근무일) × 100</GuideFormulaBox>
      <GuideBulletList
        items={[
          "소정 근무일: 근로계약서상 근무일 (공휴일·휴일 제외)",
          "출근으로 인정: 연차·병가·출산휴가·육아휴직 등 법정 유급 휴가",
          "결근으로 처리: 무단 결근, 지각·조퇴 누적(회사 규정에 따라 다름)",
          "80% 미만 출근 시 해당 연도 연차가 발생하지 않을 수 있습니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "병가도 출근으로 인정되나요?", a: "유급 병가는 출근으로 인정됩니다. 무급 병가는 회사 취업규칙에 따라 다를 수 있습니다." },
          { q: "출근율 80%가 연차에 미치는 영향은?", a: "연간 출근율이 80% 이상이면 다음 연도 연차 15일(1년 이상)이 발생합니다. 미만이면 발생하지 않습니다." },
        ]}
      />
    </>
  );
}

function SmeBizTaxGuide() {
  return (
    <>
      <GuideH2>중소기업 취업자 소득세 감면 계산기란?</GuideH2>
      <GuideP>
        중소기업에 취업한 청년(15~34세)·경력단절여성·장애인·60세 이상이 받는 소득세 감면 혜택을 추정하는
        도구입니다. 조세특례제한법에 따라 최대 5년간 소득세 일부 또는 전부를 감면받을 수 있습니다.
      </GuideP>
      <GuideH3>감면 내용 (참고)</GuideH3>
      <GuideTable
        headers={["대상", "감면율", "한도 (연)"]}
        rows={[
          ["청년 (15~34세)", "90%", "200만 원"],
          ["경력단절여성", "70%", "200만 원"],
          ["60세 이상 / 장애인", "70%", "200만 원"],
        ]}
      />
      <GuideBulletList
        items={[
          "감면 기간: 취업일부터 최대 5년 (청년은 3년, 재취업 시 추가 2년)",
          "중소기업 여부: 매출·업종·자산 기준으로 국세청·중소벤처기업부 기준 확인 필요",
          "신청 방법: 근로자가 회사에 감면 신청서 제출 → 회사가 원천징수 시 적용",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "이직해도 감면이 계속되나요?", a: "중소기업으로 이직 시 남은 감면 기간이 이어집니다. 단, 대기업·중견기업으로 이직하면 중단됩니다." },
          { q: "감면 신청을 안 했으면 환급이 되나요?", a: "연말정산 시 소득공제 또는 세액공제로 환급 신청이 가능합니다. 회사 인사팀 또는 국세청 홈택스에서 확인하세요." },
        ]}
      />
    </>
  );
}

function MaternityDatesGuide() {
  return (
    <>
      <GuideH2>출산·육아 날짜 계산기란?</GuideH2>
      <GuideP>
        예정일 또는 출산일을 기준으로 출산전후휴가 시작·종료일, 육아휴직 사용 가능 기간,
        아이의 만 나이별 주요 일정을 자동으로 계산하는 도구입니다.
      </GuideP>
      <GuideH3>입력 안내</GuideH3>
      <GuideBulletList
        items={[
          "출산 예정일 또는 실제 출산일을 입력하세요.",
          "출산전후휴가는 출산일 기준 90일(다태아 120일) 이내에 사용해야 합니다.",
          "육아휴직 사용 기간: 자녀 만 8세 또는 초등 2학년 이하, 최대 1년(부모 각각).",
        ]}
      />
      <GuideTable
        headers={["제도", "기간", "비고"]}
        rows={[
          ["출산전후휴가", "90일 (다태아 120일)", "출산 후 45일 이상 사용 의무"],
          ["배우자 출산휴가", "10일 (유급)", "출산일로부터 90일 이내"],
          ["육아휴직", "최대 1년 (부모 각각)", "만 8세 이하 또는 초등 2학년 이하"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "출산휴가와 육아휴직을 연달아 쓸 수 있나요?", a: "네, 출산전후휴가 종료 직후 육아휴직을 연달아 사용할 수 있습니다. 고용보험 급여도 이어서 신청 가능합니다." },
          { q: "육아휴직 중 회사가 해고할 수 있나요?", a: "육아휴직 기간과 복직 후 30일 이내에는 해고가 금지됩니다(근로기준법 23조)." },
        ]}
      />
    </>
  );
}

function EitcGuide() {
  return (
    <>
      <GuideH2>근로장려금(EITC) 계산기란?</GuideH2>
      <GuideP>
        저소득 근로자·사업자 가구에 지급하는 근로장려금(Earned Income Tax Credit) 예상 수급액을
        추정하는 도구입니다. 소득·재산·가구 요건을 충족하면 최대 수백만 원을 받을 수 있습니다.
      </GuideP>
      <GuideH3>2024년 수급 요건 (참고)</GuideH3>
      <GuideTable
        headers={["가구 유형", "총소득 기준", "최대 지급액"]}
        rows={[
          ["단독 가구", "2,200만 원 미만", "165만 원"],
          ["홑벌이 가구", "3,200만 원 미만", "285만 원"],
          ["맞벌이 가구", "3,800만 원 미만", "330만 원"],
        ]}
      />
      <GuideBulletList
        items={[
          "재산 요건: 가구원 합산 재산 2.4억 원 미만 (초과 시 50% 감액)",
          "신청 기간: 정기 신청(8월), 반기 신청(3월·9월)",
          "자녀장려금과 중복 신청 가능",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "자동 신청이 가능한가요?", a: "국세청이 자동 신청 대상자에게 안내 문자를 보내기도 합니다. 홈택스·ARS(1544-9944)에서 직접 신청할 수도 있습니다." },
          { q: "프리랜서·플랫폼 종사자도 받을 수 있나요?", a: "사업소득·기타소득으로 신고된 경우도 가구·소득 요건을 충족하면 수급 가능합니다." },
        ]}
      />
    </>
  );
}

function MonthlyAvgIncomeGuide() {
  return (
    <>
      <GuideH2>월평균 소득 계산기란?</GuideH2>
      <GuideP>
        연봉·불규칙 수입 또는 여러 달의 급여를 입력해 월평균 소득을 계산하는 도구입니다.
        건강보험·국민연금 보험료 산정, 대출 심사, 각종 지원금 신청 시 기준 소득 확인에 활용하세요.
      </GuideP>
      <GuideH3>입력 안내</GuideH3>
      <GuideBulletList
        items={[
          "연봉 방식: 연봉 ÷ 12",
          "월별 입력 방식: 최근 n개월 합산 ÷ n",
          "비과세(식대·교통비 등)를 포함할지 여부를 확인하세요 (건강보험은 비과세 제외).",
          "건강보험 월평균 보수: 전년도 보수총액 ÷ 근무 개월수로 결정됩니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "월평균 소득이 기준 중위소득보다 높으면 불이익이 있나요?", a: "기준 중위소득 초과 시 각종 복지급여·지원금 수급에서 제외될 수 있습니다. 해당 사업 안내를 확인하세요." },
          { q: "상여·성과급도 월평균에 포함되나요?", a: "건강보험·연금은 보수총액(상여 포함) 기준으로 정산됩니다. 대출 심사는 금융기관별 기준이 다릅니다." },
        ]}
      />
    </>
  );
}

// ════════════════════════════════════════════════
// 건강 — 추가 개별 가이드 (health-003 ~ health-026)
// ════════════════════════════════════════════════

function IdealWeightGuide() {
  return (
    <>
      <GuideH2>표준 체중 계산기란?</GuideH2>
      <GuideP>
        신장을 기준으로 건강한 체중 범위(표준 체중)를 추정하는 도구입니다.
        BMI 정상 범위(18.5~22.9)에 해당하는 체중 구간을 참고 기준으로 제시합니다.
      </GuideP>
      <GuideFormulaBox>
        표준 체중(남성) ≈ 신장(m)² × 22{"\n"}
        표준 체중(여성) ≈ 신장(m)² × 21
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "이 공식은 아시아 성인 기준 BMI 적정 범위를 역산한 값입니다.",
          "근육량·골격·나이에 따라 개인 적정 체중은 다를 수 있습니다.",
          "청소년·노인·임산부는 별도 기준을 적용하세요.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "표준 체중이 꼭 목표 체중이어야 하나요?", a: "아닙니다. 표준 체중은 통계 기반 참고값입니다. 근육량이 높은 경우 표준 체중보다 높아도 건강할 수 있습니다." },
          { q: "여성이 남성보다 기준이 낮은 이유는?", a: "같은 신장에서 여성은 남성보다 평균 근육량이 적어 건강 체중이 다소 낮게 설정됩니다." },
        ]}
      />
    </>
  );
}

function ProteinGuide() {
  return (
    <>
      <GuideH2>단백질 섭취량 계산기란?</GuideH2>
      <GuideP>
        체중·운동량·목적(근육 증가·유지·감량)에 따른 하루 권장 단백질 섭취량을 계산하는 도구입니다.
        단백질은 근육 합성, 면역, 효소 생성에 필수적인 영양소입니다.
      </GuideP>
      <GuideTable
        headers={["목적 / 활동 수준", "단백질 권장량 (체중 kg당)"]}
        rows={[
          ["일반 성인 (비운동)", "0.8g"],
          ["가벼운 유산소 운동", "1.0~1.2g"],
          ["근력 운동 (유지)", "1.4~1.6g"],
          ["근육 증가 목적", "1.6~2.2g"],
          ["감량 중 근육 유지", "2.0~2.4g"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "단백질을 너무 많이 먹으면 해롭나요?", a: "건강한 신장 기능을 가진 사람에게 고단백 식단은 대체로 안전합니다. 단, 신장 질환이 있으면 섭취량을 조절하고 의사와 상담하세요." },
          { q: "식사로 섭취하는 것과 보충제(프로틴)의 차이는?", a: "영양 흡수율은 비슷합니다. 식사로 충분하지 않을 때 보충제를 활용하는 것이 일반적입니다." },
        ]}
      />
    </>
  );
}

function LbmGuide() {
  return (
    <>
      <GuideH2>제지방량(LBM) 계산기란?</GuideH2>
      <GuideP>
        LBM(Lean Body Mass, 제지방량)은 체중에서 체지방을 뺀 값으로 근육·뼈·장기·수분의 총 질량입니다.
        다이어트 목표 설정과 근육량 기반 영양 계산에 활용합니다.
      </GuideP>
      <GuideFormulaBox>
        LBM(Boer 공식){"\n"}
        남성: 0.407 × 체중(kg) + 0.267 × 신장(cm) − 19.2{"\n"}
        여성: 0.252 × 체중(kg) + 0.473 × 신장(cm) − 48.3
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "체성분 분석기가 없어도 공식으로 추정 가능합니다.",
          "체지방률을 알면 LBM = 체중 × (1 − 체지방률)로 더 정확하게 계산됩니다.",
          "LBM이 높을수록 기초대사량(BMR)도 높아집니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "제지방량은 늘릴 수 있나요?", a: "근력 운동과 충분한 단백질 섭취로 근육량을 늘리면 LBM이 증가합니다. 칼로리 섭취량을 적절히 유지하는 것이 중요합니다." },
          { q: "LBM과 근육량의 차이는?", a: "LBM은 근육·뼈·장기·수분을 모두 포함합니다. 순수 근육량(Skeletal Muscle Mass)은 LBM의 일부로, 체성분 측정기로 더 정확히 알 수 있습니다." },
        ]}
      />
    </>
  );
}

function VitaminGuide() {
  return (
    <>
      <GuideH2>비타민 권장량 계산기란?</GuideH2>
      <GuideP>
        나이·성별·특수 상황(임신·수유 등)을 기준으로 주요 비타민의 하루 권장 섭취량을 안내하는 도구입니다.
        한국인 영양소 섭취기준(KDRIs)을 참고합니다.
      </GuideP>
      <GuideTable
        headers={["비타민", "성인 권장 섭취량 (참고)", "주요 식품"]}
        rows={[
          ["비타민 A", "남 800μg / 여 650μg", "당근, 간, 달걀"],
          ["비타민 C", "100mg", "감귤, 딸기, 브로콜리"],
          ["비타민 D", "10μg (400IU)", "연어, 달걀, 햇빛"],
          ["비타민 B12", "2.4μg", "육류, 어패류, 유제품"],
          ["엽산", "400μg (임신 600μg)", "시금치, 콩류"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "비타민 D가 부족하면 어떤 증상이 나타나나요?", a: "뼈 약화, 면역력 저하, 피로감이 흔한 증상입니다. 실내 생활이 많은 한국인은 결핍이 흔하므로 햇빛 노출과 식품 섭취에 신경 쓰세요." },
          { q: "지용성 비타민은 과다 섭취해도 되나요?", a: "비타민 A·D·E·K는 지용성이라 과다 섭취 시 체내에 축적됩니다. 특히 비타민 A와 D는 과다 시 독성이 나타날 수 있습니다." },
        ]}
      />
    </>
  );
}

function HeightGuide() {
  return (
    <>
      <GuideH2>예상 키 계산기란?</GuideH2>
      <GuideP>
        부모의 키를 기반으로 자녀의 예상 성인 키를 추정하는 도구입니다.
        Mid-Parental Height(부모 키 평균) 공식을 사용하며, 영양·운동·수면 등 후천적 요인도 크게 영향을 줍니다.
      </GuideP>
      <GuideFormulaBox>
        아들 예상 키 ≈ (아버지 키 + 어머니 키 + 13) ÷ 2{"\n"}
        딸 예상 키 ≈ (아버지 키 + 어머니 키 − 13) ÷ 2
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "예측 범위는 ±10cm 정도의 개인차가 있습니다.",
          "성장판이 열려 있는 청소년기 영양·수면·운동이 중요합니다.",
          "정확한 성장 예측은 소아청소년과에서 골연령 검사로 확인하세요.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "성장판은 몇 살까지 열려 있나요?", a: "여아는 보통 14~16세, 남아는 16~18세까지 성장판이 열려 있습니다. 개인차가 있으며 X선 검사로 확인 가능합니다." },
          { q: "키 성장에 수면이 정말 영향을 주나요?", a: "성장 호르몬은 수면 중 가장 많이 분비됩니다. 특히 밤 10시~새벽 2시 사이 숙면이 중요합니다." },
        ]}
      />
    </>
  );
}

function StepsCalorieGuide() {
  return (
    <>
      <GuideH2>걸음 수 칼로리 계산기란?</GuideH2>
      <GuideP>
        하루 걷기 걸음 수와 체중을 기반으로 소비 칼로리를 추정하는 도구입니다.
        만보(10,000보)가 목표가 되는 이유와 걷기 운동의 효과를 함께 확인하세요.
      </GuideP>
      <GuideFormulaBox>소비 칼로리(kcal) ≈ 걸음 수 × 0.04 × 체중(kg) ÷ 60</GuideFormulaBox>
      <GuideBulletList
        items={[
          "보폭은 키에 따라 다르며, 평균 성인 보폭은 약 75~80cm입니다.",
          "빠른 걸음(6km/h 이상)은 같은 걸음 수에서 더 많은 칼로리를 소비합니다.",
          "걸음 수 측정: 스마트폰 만보계·스마트워치를 활용하세요.",
          "10,000보 ≈ 약 7~8km, 약 300~400kcal (체중 70kg 기준).",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "만보(10,000보)는 과학적 근거가 있나요?", a: "1960년대 일본 만보계 마케팅에서 유래했지만, 연구들에서 7,000~8,000보도 건강 효과가 유사하다고 보고됩니다." },
          { q: "걷기와 달리기 칼로리 소비는 얼마나 차이 나나요?", a: "같은 거리 기준으로 달리기와 걷기의 소비 칼로리 차이는 크지 않습니다. 시간 기준으로는 달리기가 훨씬 많이 소비합니다." },
        ]}
      />
    </>
  );
}

function HeatIndexGuide() {
  return (
    <>
      <GuideH2>체감 온도(열지수) 계산기란?</GuideH2>
      <GuideP>
        기온과 상대습도를 결합해 인체가 실제로 느끼는 더위(열지수, Heat Index)를 계산하는 도구입니다.
        폭염 경보 기준·야외 활동 안전 여부 판단에 활용하세요.
      </GuideP>
      <GuideTable
        headers={["열지수 (°C)", "위험 수준"]}
        rows={[
          ["27 ~ 32°C", "주의: 피로감, 장시간 노출 시 열경련 가능"],
          ["33 ~ 39°C", "경고: 열경련·열탈진 가능성 높음"],
          ["40 ~ 51°C", "위험: 열사병 발생 가능, 야외 활동 자제"],
          ["52°C 이상", "매우 위험: 야외 활동 금지"],
        ]}
      />
      <GuideBulletList
        items={[
          "습도가 높을수록 땀 증발이 억제돼 체감 온도가 크게 올라갑니다.",
          "직사광선 아래에서는 열지수보다 실제 체감이 6~8°C 더 높을 수 있습니다.",
          "기상청 체감 온도와 이 계산기 결과는 공식이 다를 수 있습니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "폭염 시 야외 근무자 보호 기준은?", a: "고용노동부 가이드에 따르면 폭염 경보 발령 시 오전 2시간·오후 2시간씩 옥외 작업 중지를 권고합니다." },
          { q: "열사병과 열탈진의 차이는?", a: "열탈진은 과도한 땀 분비 후 어지러움·무력감이 나타나는 것이고, 열사병은 체온이 40°C 이상으로 오르며 의식 장애가 올 수 있는 응급 상황입니다." },
        ]}
      />
    </>
  );
}

function BiorhythmGuide() {
  return (
    <>
      <GuideH2>바이오리듬 계산기란?</GuideH2>
      <GuideP>
        생년월일을 기준으로 신체(23일)·감성(28일)·지성(33일) 주기가 현재 어느 위상인지 보여주는
        도구입니다. 과학적 근거보다는 자기 관리 참고용 도구로 가볍게 활용하세요.
      </GuideP>
      <GuideTable
        headers={["주기", "기간", "영향"]}
        rows={[
          ["신체 리듬", "23일", "체력·건강·근력"],
          ["감성 리듬", "28일", "감정·직관·창의성"],
          ["지성 리듬", "33일", "집중력·분석력·기억력"],
        ]}
      />
      <GuideBulletList
        items={[
          "각 주기가 +값일 때: 해당 능력이 높은 상태로 봅니다.",
          "0 교차점(임계일): 주기가 전환되는 날로, 컨디션이 불안정할 수 있다고 봅니다.",
          "바이오리듬은 과학적으로 검증된 이론은 아닙니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "바이오리듬이 과학적으로 맞는 이론인가요?", a: "바이오리듬은 과학적 근거가 부족하다는 연구가 많습니다. 재미·자기 점검 도구로 참고하는 정도가 적절합니다." },
          { q: "모든 주기가 최고점일 때 어떻게 되나요?", a: "이를 '트리플 하이'라고 부릅니다. 바이오리듬 이론상 최상의 컨디션으로 보지만, 실제 능력과는 별개입니다." },
        ]}
      />
    </>
  );
}

function MuscleGuide() {
  return (
    <>
      <GuideH2>근육량 계산기란?</GuideH2>
      <GuideP>
        체중·체지방률·신장을 이용해 추정 근육량(Skeletal Muscle Mass)을 계산하는 도구입니다.
        근력 운동 효과 추적과 영양 계획 수립에 활용하세요.
      </GuideP>
      <GuideFormulaBox>
        추정 근육량 ≈ 제지방량(LBM) × 0.55{"\n"}
        (골격근은 LBM의 약 50~55% 구성)
      </GuideFormulaBox>
      <GuideTable
        headers={["구분", "남성 근육량 (체중 대비)", "여성 근육량 (체중 대비)"]}
        rows={[
          ["낮음", "35% 미만", "28% 미만"],
          ["보통", "35~40%", "28~33%"],
          ["높음", "40~45%", "33~38%"],
          ["매우 높음", "45% 이상", "38% 이상"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "나이가 들면 근육이 자연적으로 줄어드나요?", a: "네, 30세 이후 근육은 매년 0.5~1%씩 감소합니다(근감소증). 규칙적인 근력 운동으로 속도를 늦출 수 있습니다." },
          { q: "인바디 결과와 이 계산기 결과가 다른 이유는?", a: "이 계산기는 공식 기반 추정치입니다. 인바디(생체임피던스)가 더 정확하지만 측정 조건(수분 상태 등)에 따라 오차가 있습니다." },
        ]}
      />
    </>
  );
}

function MaxMuscleGuide() {
  return (
    <>
      <GuideH2>최대 근육량 계산기란?</GuideH2>
      <GuideP>
        신장을 기준으로 자연적(스테로이드 없이) 훈련으로 도달 가능한 최대 근육량을 추정하는 도구입니다.
        Martin Berkhan의 공식을 활용해 장기 목표 설정에 참고하세요.
      </GuideP>
      <GuideFormulaBox>
        최대 체중(체지방 5~6%) ≈ 신장(cm) − 100{"\n"}
        최대 체중(체지방 10%) ≈ 신장(cm) − 96
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "이 공식은 남성 기준이며 여성은 약 80~85% 수준으로 추정합니다.",
          "유전·골격·훈련 기간에 따라 개인차가 매우 큽니다.",
          "자연 최대 근육량 도달에는 보통 4~8년 이상의 꾸준한 훈련이 필요합니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "최대 근육량에 도달하면 더 이상 성장이 안 되나요?", a: "자연 상한에 가까워질수록 성장 속도가 느려집니다. 초보자는 월 1~2kg 근육 증가가 가능하지만 숙련자는 훨씬 느립니다." },
          { q: "최대 근육량 이후 목표는?", a: "근력(1RM 향상)과 체성분 개선(체지방 감소, 근육 밀도 향상)에 집중하는 방향으로 전환할 수 있습니다." },
        ]}
      />
    </>
  );
}

function HeartRateGuide() {
  return (
    <>
      <GuideH2>목표 심박수 계산기란?</GuideH2>
      <GuideP>
        나이와 안정시 심박수를 이용해 운동 강도별 목표 심박수 구간을 계산하는 도구입니다.
        유산소 운동 효과(지방 연소·심폐 강화)를 극대화하려면 해당 구간을 유지하세요.
      </GuideP>
      <GuideFormulaBox>
        최대 심박수(HRmax) ≈ 220 − 나이{"\n"}
        목표 심박수(Karvonen) = (HRmax − 안정시 심박수) × 강도% + 안정시 심박수
      </GuideFormulaBox>
      <GuideTable
        headers={["운동 강도", "목표 심박수 (HRmax %)", "효과"]}
        rows={[
          ["50~60%", "매우 가벼운 운동", "회복, 준비운동"],
          ["60~70%", "지방 연소 구간", "체중 관리, 기초 체력"],
          ["70~80%", "유산소 구간", "심폐 기능 향상"],
          ["80~90%", "무산소 역치 구간", "스피드·근지구력"],
          ["90% 이상", "최대 운동 구간", "최고 성능, 단시간"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "안정시 심박수는 어떻게 측정하나요?", a: "아침에 일어나자마자 앉은 상태에서 1분 동안 손목·목 맥박을 세거나 스마트워치로 측정합니다. 평균 60~80bpm이 정상 범위입니다." },
          { q: "심박수가 목표보다 높게 유지되면 어떻게 하나요?", a: "운동 강도를 낮추고 휴식을 취하세요. 고혈압·심장 질환이 있다면 운동 전 의사 상담을 권장합니다." },
        ]}
      />
    </>
  );
}

function HeightPercentileGuide() {
  return (
    <>
      <GuideH2>키 백분위 계산기란?</GuideH2>
      <GuideP>
        아이의 나이·성별·키를 입력해 동일 연령 집단 중 몇 번째 백분위에 해당하는지 확인하는 도구입니다.
        소아청소년과의 성장 곡선(질병관리청 기준)을 참고합니다.
      </GuideP>
      <GuideTable
        headers={["백분위", "의미"]}
        rows={[
          ["97 이상", "상위 3% 이상 (매우 큰 편)"],
          ["85~97", "평균보다 큰 편"],
          ["15~85", "정상 범위"],
          ["3~15", "평균보다 작은 편"],
          ["3 미만", "하위 3% 이하 (성장 전문의 상담 권장)"],
        ]}
      />
      <GuideBulletList
        items={[
          "키는 신발 벗고 벽에 등을 대고 정수리 기준으로 측정하세요.",
          "단일 측정보다 6개월~1년 간격으로 추세를 확인하는 것이 중요합니다.",
          "백분위가 갑자기 크게 변하면 소아청소년과 전문의 상담을 권장합니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "백분위 25라면 성장에 문제가 있는 건가요?", a: "아닙니다. 백분위 3~97 이내면 정상 범위입니다. 키가 유전적으로 작은 집안이라면 낮은 백분위도 자연스러울 수 있습니다." },
          { q: "성장 호르몬 치료는 언제 고려하나요?", a: "백분위 3 미만이거나 성장 속도가 현저히 느린 경우 소아내분비 전문의 진단 후 치료 여부를 결정합니다." },
        ]}
      />
    </>
  );
}

function FfmiGuide() {
  return (
    <>
      <GuideH2>FFMI(지방제외 체질량 지수) 계산기란?</GuideH2>
      <GuideP>
        FFMI(Fat Free Mass Index)는 체지방을 제외한 근육·뼈·장기의 질량을 신장으로 보정한 지수입니다.
        자연 근육량의 한계를 평가하거나 보디빌딩 진행도를 추적하는 데 사용합니다.
      </GuideP>
      <GuideFormulaBox>
        FFMI = 제지방량(kg) ÷ 신장(m)²{"\n"}
        보정 FFMI = FFMI + 6.1 × (1.8 − 신장(m))
      </GuideFormulaBox>
      <GuideTable
        headers={["FFMI (남성)", "평가"]}
        rows={[
          ["17 이하", "평균 이하"],
          ["17~20", "평균"],
          ["20~22", "근육질"],
          ["22~25", "매우 근육질 (자연 달성 가능)"],
          ["25 이상", "자연 최대치 초과 의심"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "FFMI 25 이상이면 스테로이드를 사용한 건가요?", a: "FFMI 25가 자연 한계로 자주 인용되지만, 유전적으로 뛰어난 운동선수는 자연적으로 초과하는 경우도 있습니다. 단정할 수 없습니다." },
          { q: "여성의 자연 FFMI 한계는?", a: "여성은 남성보다 낮아 약 20~21이 자연 한계로 알려져 있습니다. 여성 기준 표를 별도로 참고하세요." },
        ]}
      />
    </>
  );
}

function CrclGuide() {
  return (
    <>
      <GuideH2>크레아티닌 청소율(CrCl) 계산기란?</GuideH2>
      <GuideP>
        Cockcroft-Gault 공식을 이용해 신장 기능(사구체 여과율 추정)을 계산하는 도구입니다.
        약물 용량 조절, 신장 질환 모니터링에 의료진이 참고하는 지표입니다.
      </GuideP>
      <GuideFormulaBox>
        CrCl(mL/min) = [(140 − 나이) × 체중(kg)] ÷ [72 × 혈청 크레아티닌(mg/dL)]{"\n"}
        (여성은 × 0.85 적용)
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "정상 CrCl: 남성 97~137 mL/min, 여성 88~128 mL/min",
          "60 mL/min 미만: 만성 신장 질환(CKD) 의심",
          "혈청 크레아티닌 검사 결과(최근 것)를 입력하세요.",
          "이 계산기는 참고용이며, 임상 판단은 전문의에게 맡기세요.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "CrCl과 eGFR의 차이는?", a: "CrCl은 Cockcroft-Gault 공식, eGFR은 CKD-EPI 또는 MDRD 공식을 사용합니다. 신장 기능 평가에 둘 다 쓰이지만 약물 용량 조절에는 CrCl이 더 많이 사용됩니다." },
          { q: "신장 기능이 나쁠 때 어떤 약물에 주의해야 하나요?", a: "항생제(겐타마이신 등), NSAIDs(아스피린·이부프로펜), 당뇨약(메트포민) 등은 신장 기능 저하 시 용량 조절 또는 금기가 될 수 있습니다. 반드시 의사·약사와 상담하세요." },
        ]}
      />
    </>
  );
}

function BsaGuide() {
  return (
    <>
      <GuideH2>체표면적(BSA) 계산기란?</GuideH2>
      <GuideP>
        체중과 신장을 이용해 신체 표면적(Body Surface Area, m²)을 추정하는 도구입니다.
        항암제 등 일부 약물의 정확한 용량 계산과 심폐 기능 평가에 활용됩니다.
      </GuideP>
      <GuideFormulaBox>
        BSA(Mosteller 공식) = √[신장(cm) × 체중(kg) ÷ 3600]{"\n"}
        BSA(DuBois 공식) = 0.007184 × 신장(cm)^0.725 × 체중(kg)^0.425
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "성인 평균 체표면적: 약 1.7~1.9 m²",
          "항암 화학요법 용량: mg/m² 단위로 체표면적 기준 계산",
          "Mosteller 공식이 계산이 간단해 임상에서 널리 사용됩니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "왜 체중만으로 약물 용량을 정하지 않나요?", a: "체중이 같아도 키에 따라 신체 크기가 다릅니다. BSA는 체중과 신장을 모두 반영해 더 정확한 기준을 제공합니다." },
          { q: "소아에도 같은 공식을 쓰나요?", a: "소아는 성인과 체형 비율이 달라 소아 전용 공식(Haycock 등)을 사용하는 경우가 많습니다. 소아과 전문의의 지침을 따르세요." },
        ]}
      />
    </>
  );
}

function CaffeineGuide() {
  return (
    <>
      <GuideH2>카페인 섭취량 계산기란?</GuideH2>
      <GuideP>
        커피·차·에너지 드링크 등을 통한 일일 카페인 섭취량을 계산하고 권장 한도 초과 여부를 확인하는 도구입니다.
      </GuideP>
      <GuideTable
        headers={["음료", "카페인 함량 (참고)"]}
        rows={[
          ["아메리카노 (350mL)", "약 125~150mg"],
          ["에스프레소 (30mL)", "약 63mg"],
          ["녹차 (250mL)", "약 25~50mg"],
          ["에너지 드링크 (250mL)", "약 80mg"],
          ["콜라 (355mL)", "약 35mg"],
        ]}
      />
      <GuideBulletList
        items={[
          "성인 일일 권장 한도: 400mg 이하 (식품의약품안전처 기준)",
          "임산부: 300mg 이하 권장, 가능하면 200mg 이하",
          "청소년(만 19세 미만): 체중(kg) × 2.5mg 이하",
          "카페인 반감기: 약 5~6시간 (오후 3시 이후 섭취 자제 권장)",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "카페인 내성이 생기면 어떻게 하나요?", a: "2~4주 카페인을 줄이거나 끊으면 내성이 낮아집니다. 두통·피로감 등 금단 증상이 나타날 수 있으니 서서히 줄이세요." },
          { q: "디카페인 커피에도 카페인이 있나요?", a: "네, 디카페인 커피 한 잔에도 약 2~15mg의 카페인이 남아 있습니다." },
        ]}
      />
    </>
  );
}

function EgfrGuide() {
  return (
    <>
      <GuideH2>eGFR(추정 사구체 여과율) 계산기란?</GuideH2>
      <GuideP>
        혈청 크레아티닌·나이·성별로 신장 기능을 추정하는 eGFR(estimated Glomerular Filtration Rate)을
        CKD-EPI 공식으로 계산합니다. 만성 신장 질환(CKD) 단계 분류에 사용됩니다.
      </GuideP>
      <GuideTable
        headers={["eGFR 범위", "CKD 단계", "의미"]}
        rows={[
          ["90 이상", "G1", "정상 또는 높음 (단백뇨 있으면 CKD 가능)"],
          ["60~89", "G2", "경미하게 감소"],
          ["45~59", "G3a", "경도~중등도 감소"],
          ["30~44", "G3b", "중등도~중증 감소"],
          ["15~29", "G4", "중증 감소"],
          ["15 미만", "G5", "신부전 (투석·이식 필요)"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "eGFR이 낮으면 바로 투석을 해야 하나요?", a: "eGFR이 G5(15 미만)여도 증상·합병증에 따라 투석 시기가 결정됩니다. 신장 전문의와 상담해 적절한 치료 시기를 결정하세요." },
          { q: "일시적인 탈수·격렬한 운동도 eGFR에 영향을 주나요?", a: "네, 단기간 신장 기능에 영향을 줄 수 있습니다. 정확한 평가를 위해 충분히 수분을 보충한 후 검사하세요." },
        ]}
      />
    </>
  );
}

function CholesterolGuide() {
  return (
    <>
      <GuideH2>콜레스테롤 계산기란?</GuideH2>
      <GuideP>
        총 콜레스테롤, LDL, HDL, 중성지방 수치를 입력해 심혈관 질환 위험 지표를 확인하는 도구입니다.
        콜레스테롤 수치만으로 질환을 진단할 수 없으며, 전문의의 종합 판단이 필요합니다.
      </GuideP>
      <GuideTable
        headers={["항목", "정상 목표 (참고)"]}
        rows={[
          ["총 콜레스테롤", "200 mg/dL 미만"],
          ["LDL 콜레스테롤 (나쁜 콜레스테롤)", "100 mg/dL 미만 (고위험군 70 미만)"],
          ["HDL 콜레스테롤 (좋은 콜레스테롤)", "남 40 / 여 50 mg/dL 이상"],
          ["중성지방 (TG)", "150 mg/dL 미만"],
        ]}
      />
      <GuideFormulaBox>LDL = 총 콜레스테롤 − HDL − (중성지방 ÷ 5) — Friedewald 공식</GuideFormulaBox>
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "콜레스테롤이 높으면 무조건 약을 먹어야 하나요?", a: "위험 인자(당뇨·고혈압·흡연 등)와 심혈관 질환 유무에 따라 다릅니다. 식이요법·운동으로 개선 후 약물 치료를 결정하는 경우가 많습니다." },
          { q: "달걀을 먹으면 콜레스테롤이 오르나요?", a: "식이 콜레스테롤이 혈중 콜레스테롤에 미치는 영향은 포화지방보다 작습니다. 하루 1~2개의 달걀 섭취는 대부분의 건강한 성인에게 문제없습니다." },
        ]}
      />
    </>
  );
}

// ════════════════════════════════════════════════
// 학교 — 추가 개별 가이드 (school-002 ~ school-022)
// ════════════════════════════════════════════════

function RankGuide() {
  return (
    <>
      <GuideH2>석차 등급 계산기란?</GuideH2>
      <GuideP>
        전체 인원과 내 점수·등수를 입력해 석차 백분율과 9등급 석차 등급을 계산하는 도구입니다.
        대학 입시(수능·내신) 등급 산정 기준을 빠르게 확인할 때 유용합니다.
      </GuideP>
      <GuideTable
        headers={["등급", "누적 비율 (상위 %)"]}
        rows={[
          ["1등급", "4% 이내"],
          ["2등급", "4~11%"],
          ["3등급", "11~23%"],
          ["4등급", "23~40%"],
          ["5등급", "40~60%"],
          ["6등급", "60~77%"],
          ["7등급", "77~89%"],
          ["8등급", "89~96%"],
          ["9등급", "96% 초과"],
        ]}
      />
      <GuideFormulaBox>석차 백분율(%) = 석차 ÷ 전체 인원 × 100</GuideFormulaBox>
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "동점자가 여러 명일 때 등급은 어떻게 되나요?", a: "수능은 동점자 전원에게 같은 등급을 부여합니다. 내신은 원점수·표준점수·석차 등 학교·교과별 기준이 다를 수 있습니다." },
          { q: "절대평가 과목도 등급이 있나요?", a: "수능 영어·한국사 등 절대평가 과목은 점수 구간별로 등급이 정해집니다(90점 이상 1등급 등)." },
        ]}
      />
    </>
  );
}

function LcmGuide() {
  return (
    <>
      <GuideH2>최소공배수(LCM) 계산기란?</GuideH2>
      <GuideP>
        두 개 이상의 자연수의 공통 배수 중 가장 작은 수(최소공배수)를 계산하는 도구입니다.
        분수의 통분, 주기가 다른 사건의 동시 발생 시점 계산 등에 활용됩니다.
      </GuideP>
      <GuideFormulaBox>LCM(a, b) = a × b ÷ GCD(a, b)</GuideFormulaBox>
      <GuideBulletList
        items={[
          "GCD(최대공약수)를 먼저 구한 뒤 역산하는 것이 효율적입니다.",
          "예: LCM(12, 18) = 12 × 18 ÷ GCD(12,18) = 216 ÷ 6 = 36",
          "세 수 이상의 LCM: 두 수씩 순서대로 계산합니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "분수를 통분할 때 LCM을 왜 사용하나요?", a: "두 분모의 LCM이 최소 공통분모가 되어 계산이 가장 간단해집니다." },
          { q: "LCM이 매우 크게 나올 때는?", a: "두 수가 서로소(공약수가 1뿐)이면 LCM = 두 수의 곱이 됩니다. 예: LCM(7, 13) = 91." },
        ]}
      />
    </>
  );
}

function FactorGuide() {
  return (
    <>
      <GuideH2>소인수분해 계산기란?</GuideH2>
      <GuideP>
        자연수를 소수의 곱으로 분해하는 소인수분해를 자동으로 계산하는 도구입니다.
        약수·최대공약수·최소공배수 계산의 기초가 됩니다.
      </GuideP>
      <GuideBulletList
        items={[
          "소수: 1과 자기 자신만으로 나누어지는 수 (2, 3, 5, 7, 11, 13 ...)",
          "소인수분해: 2부터 시작해 나누어지면 몫을 계속 나누는 방식",
          "예: 360 = 2³ × 3² × 5",
          "1은 소수가 아니므로 소인수분해에 포함되지 않습니다.",
        ]}
      />
      <GuideFormulaBox>360 = 2 × 180 = 2 × 2 × 90 = 2² × 45 = 2² × 3² × 5 = 2³ × 3² × 5</GuideFormulaBox>
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "소인수분해는 왜 유일한가요?", a: "산술의 기본 정리(Fundamental Theorem of Arithmetic)에 따르면 1보다 큰 모든 자연수는 소수의 곱으로 유일하게 표현됩니다." },
          { q: "매우 큰 수도 소인수분해가 되나요?", a: "이론적으로는 가능하지만 매우 큰 수의 소인수분해는 계산이 오래 걸립니다. 이 어려움이 RSA 암호화의 수학적 기반입니다." },
        ]}
      />
    </>
  );
}

function PrimeGuide() {
  return (
    <>
      <GuideH2>소수 판별 계산기란?</GuideH2>
      <GuideP>
        입력한 수가 소수인지 아닌지(합성수인지)를 판별하고, 범위 내 소수 목록을 생성하는 도구입니다.
        정보·수론 학습과 암호학 기초에 활용됩니다.
      </GuideP>
      <GuideBulletList
        items={[
          "소수: 1과 자기 자신만으로 나눌 수 있는 수 (2, 3, 5, 7, 11, ...)",
          "1은 소수가 아닙니다.",
          "2는 유일한 짝수 소수입니다.",
          "소수 판별 방법: √n 이하의 소수로만 나눠보면 됩니다.",
        ]}
      />
      <GuideFormulaBox>n이 소수인지 확인: 2부터 √n까지 나누어지지 않으면 소수</GuideFormulaBox>
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "소수는 무한히 많은가요?", a: "네, 유클리드가 기원전에 소수가 무한히 많음을 증명했습니다. 현재 알려진 가장 큰 소수는 수백만 자릿수입니다." },
          { q: "소수가 실생활에서 쓰이나요?", a: "RSA, HTTPS 등 인터넷 암호화(공개키 암호화)가 큰 소수 두 개의 곱을 분해하기 어렵다는 원리를 이용합니다." },
        ]}
      />
    </>
  );
}

function GaussGuide() {
  return (
    <>
      <GuideH2>가우스 합산(등차수열 합) 계산기란?</GuideH2>
      <GuideP>
        1부터 n까지 또는 등차수열의 합을 가우스 공식으로 빠르게 계산하는 도구입니다.
        중학교 수학의 등차수열 합 공식을 직접 확인하고 검산하는 데 활용하세요.
      </GuideP>
      <GuideFormulaBox>
        1~n 합 = n(n+1) ÷ 2{"\n"}
        등차수열 합 = n × (첫째항 + 끝항) ÷ 2
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "예: 1+2+3+...+100 = 100 × 101 ÷ 2 = 5,050",
          "항의 개수 n = (끝항 − 첫째항) ÷ 공차 + 1",
          "등차수열: 일정한 값(공차)을 더해 나가는 수열",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "가우스가 이 공식을 어떻게 발견했나요?", a: "가우스는 10살 때 선생님이 낸 1~100 합산 문제를 '(1+100)×50=5,050'으로 순식간에 풀었다는 일화로 유명합니다." },
          { q: "합이 짝수가 아닌 경우도 있나요?", a: "n이 홀수이면 n(n+1)÷2의 결과는 항상 정수입니다. n × (n+1)에서 둘 중 하나는 반드시 짝수이기 때문입니다." },
        ]}
      />
    </>
  );
}

function FractionGuide() {
  return (
    <>
      <GuideH2>분수 계산기란?</GuideH2>
      <GuideP>
        분수의 덧셈·뺄셈·곱셈·나눗셈을 기약분수 형태로 계산하는 도구입니다.
        통분, 약분 과정을 자동으로 처리해 복잡한 분수 계산을 빠르게 처리할 수 있습니다.
      </GuideP>
      <GuideTable
        headers={["연산", "방법"]}
        rows={[
          ["덧셈·뺄셈", "분모를 통분(LCM 사용)한 뒤 분자 계산"],
          ["곱셈", "분자끼리 곱, 분모끼리 곱"],
          ["나눗셈", "나누는 분수를 역수(분자↔분모)로 바꿔 곱"],
          ["약분", "분자·분모의 GCD로 나눠 기약분수로"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "가분수와 대분수는 어떻게 변환하나요?", a: "가분수→대분수: 분자를 분모로 나눠 몫과 나머지를 구합니다. 대분수→가분수: 분모×정수부+분자를 새 분자로 사용합니다." },
          { q: "분모가 0인 분수는?", a: "분모가 0인 분수는 정의되지 않습니다(수학적으로 무한대 또는 불정형)." },
        ]}
      />
    </>
  );
}

function GcdGuide() {
  return (
    <>
      <GuideH2>최대공약수(GCD) 계산기란?</GuideH2>
      <GuideP>
        두 개 이상의 자연수 중 공통 약수 중 가장 큰 수(최대공약수)를 계산하는 도구입니다.
        분수 약분, 비율 단순화, LCM 계산의 기초가 됩니다.
      </GuideP>
      <GuideFormulaBox>
        유클리드 호제법: GCD(a, b) = GCD(b, a mod b){"\n"}
        a mod b = 0이 되면 b가 GCD
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "예: GCD(48, 18): 48÷18=2 나머지 12 → GCD(18,12) → 18÷12=1 나머지 6 → GCD(12,6)=6",
          "세 수 이상의 GCD: GCD(a,b,c) = GCD(GCD(a,b), c)",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "서로소란 무엇인가요?", a: "두 수의 GCD가 1인 경우를 서로소라고 합니다. 예: 4와 9는 GCD=1이므로 서로소입니다." },
          { q: "GCD와 LCM의 관계는?", a: "GCD(a, b) × LCM(a, b) = a × b 가 항상 성립합니다." },
        ]}
      />
    </>
  );
}

function RemainderGuide() {
  return (
    <>
      <GuideH2>나머지 계산기란?</GuideH2>
      <GuideP>
        두 수를 나눌 때 나오는 몫과 나머지를 계산하는 도구입니다.
        모듈러 연산(나머지 연산)은 암호학·컴퓨터 과학·날짜 계산 등에서 널리 사용됩니다.
      </GuideP>
      <GuideFormulaBox>
        a ÷ b = 몫 q, 나머지 r{"\n"}
        a = b × q + r (0 ≤ r &lt; b)
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "모듈러 연산(mod): a mod b = r",
          "홀수 판별: a mod 2 = 1 이면 홀수",
          "날짜 계산: 요일 순환, 주기 계산에 활용",
          "음수 나머지: 프로그래밍 언어마다 결과가 다를 수 있으니 주의",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "나머지가 0이면 어떤 의미인가요?", a: "나머지가 0이면 b가 a의 약수라는 의미입니다. 예: 12 mod 4 = 0 → 4는 12의 약수." },
          { q: "나머지 연산이 프로그래밍에서 중요한 이유는?", a: "인덱스 순환(배열 순환 접근), 해시 함수, 암호화 알고리즘에서 핵심적으로 사용됩니다." },
        ]}
      />
    </>
  );
}

function PermutationGuide() {
  return (
    <>
      <GuideH2>순열·조합 계산기란?</GuideH2>
      <GuideP>
        n개에서 r개를 선택하는 순열(P)과 조합(C)을 계산하는 도구입니다.
        경우의 수, 확률 계산, 통계 기초에 필수적인 개념입니다.
      </GuideP>
      <GuideFormulaBox>
        순열 P(n,r) = n! ÷ (n-r)!{"\n"}
        조합 C(n,r) = n! ÷ [r! × (n-r)!]
      </GuideFormulaBox>
      <GuideTable
        headers={["구분", "순열 (P)", "조합 (C)"]}
        rows={[
          ["순서 고려", "O (순서가 다르면 다른 경우)", "X (순서 무관)"],
          ["예시", "3명 중 1등·2등 선발", "3명 중 2명 선택"],
          ["결과", "P(3,2)=6", "C(3,2)=3"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "n=r일 때 P(n,n)은?", a: "P(n,n) = n! (n개를 모두 배열하는 경우의 수)입니다. 예: P(3,3)=6." },
          { q: "C(n,0)이나 C(n,n)은 왜 1인가요?", a: "0개 또는 전부를 선택하는 방법은 각각 1가지뿐이기 때문입니다. 공식으로도 C(n,0)=n!÷(0!×n!)=1이 됩니다." },
        ]}
      />
    </>
  );
}

function FibonacciGuide() {
  return (
    <>
      <GuideH2>피보나치 수열 계산기란?</GuideH2>
      <GuideP>
        피보나치 수열의 n번째 항을 계산하거나 수열 목록을 생성하는 도구입니다.
        자연·예술·금융 차트 분석 등 다양한 분야에서 등장하는 수열입니다.
      </GuideP>
      <GuideFormulaBox>F(n) = F(n-1) + F(n-2), F(0)=0, F(1)=1</GuideFormulaBox>
      <GuideBulletList
        items={[
          "처음 10항: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34",
          "황금비(φ ≈ 1.618): 연속한 두 항의 비가 황금비에 수렴합니다.",
          "주식·기술 분석에서 피보나치 되돌림(38.2%, 61.8% 등)으로 활용됩니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "피보나치 수열이 자연에서 나타나는 예는?", a: "해바라기 씨앗 배열, 솔방울 나선, 조개 나선, 꽃잎 수 등이 피보나치 수에 해당합니다." },
          { q: "큰 항을 빠르게 계산하려면?", a: "비네의 공식 F(n) = [φⁿ − ψⁿ]÷√5 (φ=(1+√5)/2, ψ=(1-√5)/2)으로 직접 계산할 수 있습니다." },
        ]}
      />
    </>
  );
}

function ConfidenceIntervalGuide() {
  return (
    <>
      <GuideH2>신뢰구간 계산기란?</GuideH2>
      <GuideP>
        표본 평균·표준편차·표본 크기를 이용해 모집단 평균의 신뢰구간을 추정하는 도구입니다.
        여론조사·실험 결과 해석에 자주 등장하는 통계 개념입니다.
      </GuideP>
      <GuideFormulaBox>
        신뢰구간 = x̄ ± z × (s ÷ √n){"\n"}
        z 값: 95% 신뢰도 ≈ 1.96, 99% ≈ 2.576
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "x̄: 표본 평균, s: 표본 표준편차, n: 표본 크기",
          "신뢰도 95%: 100번 표본 추출 시 약 95번은 구간 안에 모수가 포함됩니다.",
          "표본 크기가 클수록 신뢰구간이 좁아집니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "'오차 범위 ±3%p'는 무슨 의미인가요?", a: "95% 신뢰도에서 ±3%p 오차 범위는 표본 조사 결과가 실제와 3%p 이내 차이가 날 확률이 95%라는 의미입니다." },
          { q: "신뢰구간이 넓으면 결과를 믿기 어려운가요?", a: "신뢰구간이 넓다는 것은 추정의 정밀도가 낮다는 뜻입니다. 표본 수를 늘리면 구간이 좁아집니다." },
        ]}
      />
    </>
  );
}

function PresentationTimeGuide() {
  return (
    <>
      <GuideH2>발표 시간 계산기란?</GuideH2>
      <GuideP>
        원고 글자 수 또는 페이지 수와 평균 말하기 속도를 입력해 발표 예상 시간을 계산하는 도구입니다.
        PPT 발표, 스피치, 강의 시간 조절에 활용하세요.
      </GuideP>
      <GuideTable
        headers={["말하기 속도", "분당 글자 수 (한국어 기준)"]}
        rows={[
          ["느린 속도 (또렷하게)", "약 200~250자/분"],
          ["보통 속도", "약 250~350자/분"],
          ["빠른 속도 (숙달된 발표)", "약 350~450자/분"],
        ]}
      />
      <GuideBulletList
        items={[
          "원고 없는 발표는 실제 소요 시간이 늘어날 수 있습니다.",
          "Q&A·전환 시간은 별도로 추가하세요.",
          "미리 녹음 또는 타이머로 실제 시간을 측정하는 것이 가장 정확합니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "10분 발표에 원고를 몇 자 써야 하나요?", a: "보통 속도(300자/분) 기준으로 약 3,000자입니다. 여유 있게 2,500~2,800자를 권장합니다." },
          { q: "슬라이드 한 장당 얼마나 말해야 하나요?", a: "TED 발표는 평균 1~2분/슬라이드를 권장합니다. 내용과 청중에 따라 조절하세요." },
        ]}
      />
    </>
  );
}

function ErrorRateGuide() {
  return (
    <>
      <GuideH2>오차율 계산기란?</GuideH2>
      <GuideP>
        실제 값(참값)과 측정값의 차이 비율을 계산하는 도구입니다.
        실험 결과 검증, 제조 품질 관리, 예측 모델 평가에 활용됩니다.
      </GuideP>
      <GuideFormulaBox>
        절대 오차 = |측정값 − 참값|{"\n"}
        상대 오차(%) = |측정값 − 참값| ÷ 참값 × 100
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "오차율이 낮을수록 정확한 측정입니다.",
          "허용 오차: 분야마다 다름 (제조업 ±0.1%, 설문 ±3%, 과학 실험 ±1% 등)",
          "체계적 오차(편향)와 무작위 오차(우연)를 구분해 원인을 파악하세요.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "측정 오차를 줄이려면 어떻게 해야 하나요?", a: "동일 조건에서 여러 번 측정해 평균을 사용하고, 도구 보정과 측정 환경을 표준화하는 것이 효과적입니다." },
          { q: "참값을 모를 때는 어떻게 하나요?", a: "참값이 없을 때는 다른 측정 방법의 결과나 공인 표준과 비교하거나, 편차(반복 측정값 간 차이)를 기준으로 정밀도를 평가합니다." },
        ]}
      />
    </>
  );
}

function PvalueGuide() {
  return (
    <>
      <GuideH2>p-값 계산기란?</GuideH2>
      <GuideP>
        가설 검정에서 관찰된 결과가 귀무가설 하에서 나타날 확률(p-value)을 계산하는 도구입니다.
        t-검정·카이제곱·z-검정 등 통계 분석에서 유의성을 판단하는 기준입니다.
      </GuideP>
      <GuideTable
        headers={["p-값", "통계적 유의성 (α=0.05 기준)"]}
        rows={[
          ["p < 0.001", "매우 강한 유의성 (***)"],
          ["0.001 ≤ p < 0.01", "강한 유의성 (**)"],
          ["0.01 ≤ p < 0.05", "유의성 있음 (*)"],
          ["p ≥ 0.05", "유의성 없음 (귀무가설 기각 불가)"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "p < 0.05면 결과가 무조건 옳은 건가요?", a: "아닙니다. p-값은 귀무가설이 참일 때 이 결과가 나올 확률입니다. 효과 크기(Effect Size)와 신뢰구간도 함께 고려해야 합니다." },
          { q: "p-값 조작(p-hacking)이란?", a: "분석 방법·변수를 반복 변경해 p < 0.05를 억지로 만드는 행위로, 재현성 위기의 주요 원인입니다." },
        ]}
      />
    </>
  );
}

function WeightedAvgGuide() {
  return (
    <>
      <GuideH2>가중 평균 계산기란?</GuideH2>
      <GuideP>
        각 항목에 다른 비중(가중치)을 부여해 평균을 계산하는 도구입니다.
        학점 GPA, 포트폴리오 수익률, 종합 점수 계산 등에 사용됩니다.
      </GuideP>
      <GuideFormulaBox>가중 평균 = Σ(값 × 가중치) ÷ Σ(가중치)</GuideFormulaBox>
      <GuideBulletList
        items={[
          "예: 국어 90점(3학점) + 수학 80점(2학점) → (90×3 + 80×2) ÷ 5 = 86점",
          "가중치가 모두 같으면 산술 평균과 동일합니다.",
          "가중치는 비율이므로 합산이 1 또는 100%일 필요는 없습니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "GPA 계산에서 P/F 과목은 가중 평균에 포함되나요?", a: "일반적으로 P/F 과목은 GPA 계산에서 제외됩니다. 학교 학칙을 확인하세요." },
          { q: "가중치를 %로 입력해야 하나요?", a: "가중치는 상대적 비중이므로 학점·점수·비율 등 일관된 단위면 됩니다." },
        ]}
      />
    </>
  );
}

function CorrelationGuide() {
  return (
    <>
      <GuideH2>상관계수 계산기란?</GuideH2>
      <GuideP>
        두 변수 사이의 선형 관계 강도를 피어슨 상관계수(r)로 계산하는 도구입니다.
        -1에서 1 사이 값으로 데이터 간 관계 방향과 강도를 파악할 수 있습니다.
      </GuideP>
      <GuideTable
        headers={["상관계수 r", "해석"]}
        rows={[
          ["0.9 ~ 1.0", "매우 강한 양의 상관"],
          ["0.7 ~ 0.9", "강한 양의 상관"],
          ["0.4 ~ 0.7", "중간 양의 상관"],
          ["0.2 ~ 0.4", "약한 양의 상관"],
          ["0 ~ 0.2", "거의 없음"],
          ["음수", "음의 상관 (방향 반대)"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "상관관계가 인과관계를 의미하나요?", a: "아닙니다. 상관관계는 두 변수가 함께 변하는 패턴을 보여줄 뿐, 원인-결과 관계를 증명하지 않습니다. '아이스크림 판매량과 익사 사고 수'처럼 제3변수(더위)가 원인일 수 있습니다." },
          { q: "r=0이면 두 변수는 완전히 무관한가요?", a: "선형 상관이 없다는 의미입니다. 비선형(포물선 등) 관계는 r=0이어도 강한 관계일 수 있습니다." },
        ]}
      />
    </>
  );
}

function PercentileGuide() {
  return (
    <>
      <GuideH2>백분위 계산기란?</GuideH2>
      <GuideP>
        데이터 집합에서 특정 값이 전체의 몇 번째 백분위에 해당하는지 계산하는 도구입니다.
        성적·키·임금·시험 점수의 상대적 위치를 확인할 때 사용합니다.
      </GuideP>
      <GuideFormulaBox>백분위 = (해당 값보다 낮은 데이터 수 ÷ 전체 데이터 수) × 100</GuideFormulaBox>
      <GuideBulletList
        items={[
          "50번째 백분위 = 중앙값(median)",
          "75번째 백분위 = 제3사분위수(Q3)",
          "IQR(사분위 범위) = Q3 − Q1: 이상치 탐지에 사용",
          "수능 백분위: 나보다 점수가 낮은 비율(%) — 표준점수와 다릅니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "백분위 99라면 상위 1%인가요?", a: "네, 백분위 99는 99%보다 높다는 뜻이므로 상위 1%에 해당합니다." },
          { q: "수능 백분위와 등급의 차이는?", a: "백분위는 연속적인 상대 순위이고, 등급은 구간으로 구분된 단계입니다. 같은 백분위여도 경계에 따라 등급이 달라질 수 있습니다." },
        ]}
      />
    </>
  );
}

function FactorialGuide() {
  return (
    <>
      <GuideH2>팩토리얼 계산기란?</GuideH2>
      <GuideP>
        자연수 n의 팩토리얼(n!)을 계산하는 도구입니다.
        순열·조합·확률·테일러 급수 등 수학의 여러 분야에서 기본이 되는 연산입니다.
      </GuideP>
      <GuideFormulaBox>
        n! = n × (n−1) × (n−2) × ... × 2 × 1{"\n"}
        0! = 1 (정의)
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "예: 5! = 5×4×3×2×1 = 120",
          "12! = 479,001,600 (10자리)",
          "20! = 약 2.43 × 10¹⁸ (매우 빠르게 커짐)",
          "컴퓨터 프로그래밍에서 재귀 함수의 대표적인 예",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "0! = 1인 이유는?", a: "빈 집합의 배열 수가 1(배열 방법이 1가지)이라는 개념에서 정의됩니다. C(n,0)=1 등 수식을 일관되게 만들기 위해 필요합니다." },
          { q: "음수의 팩토리얼은 정의되나요?", a: "음의 정수에 대해 팩토리얼은 정의되지 않습니다. 복소수로 확장하는 감마 함수(Γ)를 사용하면 비정수에 대해 일반화할 수 있습니다." },
        ]}
      />
    </>
  );
}

function ProportionGuide() {
  return (
    <>
      <GuideH2>비례식 계산기란?</GuideH2>
      <GuideP>
        비례식(a:b = c:d)에서 모르는 한 값을 구하거나 비율로 전체를 나누는 계산을 하는 도구입니다.
        요리 재료 비율 조정, 지도 축척, 혼합 비율 계산 등 실생활에서 자주 쓰입니다.
      </GuideP>
      <GuideFormulaBox>
        a:b = c:d → a×d = b×c (외항의 곱 = 내항의 곱){"\n"}
        미지수 x 구하기: x = b×c ÷ a
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "예: 2:3 = 4:x → x = 3×4÷2 = 6",
          "비율로 나누기: 전체 100을 2:3으로 나누면 40과 60",
          "지도 축척: 지도상 1cm = 실제 n km",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "비율과 비례의 차이는?", a: "비율은 두 수의 관계(a÷b)이고, 비례는 두 비율이 같다는 관계(a:b = c:d)입니다." },
          { q: "요리할 때 레시피를 2배로 늘리면 모든 재료를 2배?", a: "기본적으로 맞습니다. 단, 오븐 온도와 시간은 단순 비례하지 않을 수 있습니다." },
        ]}
      />
    </>
  );
}

// ════════════════════════════════════════════════
// 금융 — 추가 개별 가이드 (finance-001 ~ finance-027)
// ════════════════════════════════════════════════

function SavingsGuide() {
  return (
    <>
      <GuideH2>적금 계산기란?</GuideH2>
      <GuideP>
        매월 납입액·이율·기간을 입력해 만기 시 원리금 합계를 계산하는 도구입니다.
        국내 정기적금은 대부분 단리 적용이므로 이 계산기의 기본 방식을 확인하세요.
      </GuideP>
      <GuideFormulaBox>
        만기 원리금(단리) ≈ 월 납입액 × n개월 × (1 + 연이율 × (n+1) ÷ 24){"\n"}
        세후 이자 = 이자 × (1 − 0.154) — 이자소득세 15.4%
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "이율은 세전 연이율(%)로 입력하세요.",
          "세금우대 적금(조합·신협 등)은 세율이 낮으니 상품 안내를 확인하세요.",
          "자유적금은 납입액이 달마다 다를 수 있어 실제 이자와 차이가 날 수 있습니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "적금 이율과 예금 이율 중 어느 게 더 유리한가요?", a: "같은 이율이라면 예금이 더 유리합니다. 적금은 매달 납입하므로 실질 수익률이 이율의 절반 수준입니다." },
          { q: "중도 해지하면 이자를 못 받나요?", a: "중도 해지 시 약정 이율보다 훨씬 낮은 중도 해지 이율이 적용됩니다. 상품별로 다르니 약관을 확인하세요." },
        ]}
      />
    </>
  );
}

function HomeGuide() {
  return (
    <>
      <GuideH2>주택 구입 비용 계산기란?</GuideH2>
      <GuideP>
        집값·취득세·중개 수수료 등을 합산해 실제 필요한 총 구입 비용을 추정하는 도구입니다.
        이사 비용, 인테리어 예산까지 포함해 자금 계획을 세울 때 활용하세요.
      </GuideP>
      <GuideH3>주요 부대 비용 (참고)</GuideH3>
      <GuideTable
        headers={["항목", "비용"]}
        rows={[
          ["취득세", "1~3% (주택가격·면적·보유 주택 수에 따라 다름)"],
          ["공인중개사 수수료", "거래가액별 0.4~0.9% 이내"],
          ["등기 비용", "등록면허세 + 법무사 비용 (0.1~0.4% 수준)"],
          ["이사·인테리어", "개인에 따라 다름"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "다주택자 취득세는 얼마인가요?", a: "2주택 이상부터 취득세율이 크게 올라갑니다(최대 12%). 규제 지역·비규제 지역·주택 수에 따라 다르니 지방세법을 확인하세요." },
          { q: "생애최초 주택 구입 혜택이 있나요?", a: "생애최초 주택 구입자는 취득세 감면(최대 200만 원) 혜택이 있습니다. 가격·소득 요건을 확인하세요." },
        ]}
      />
    </>
  );
}

function SpendingGuide() {
  return (
    <>
      <GuideH2>지출 분석 계산기란?</GuideH2>
      <GuideP>
        월 소득과 항목별 지출을 입력해 저축률, 항목별 지출 비율, 과소비 여부를 분석하는 도구입니다.
        50/30/20 법칙 등 예산 기준과 비교해 재정 건전성을 점검하세요.
      </GuideP>
      <GuideTable
        headers={["예산 법칙", "필수 지출", "욕구 지출", "저축·부채 상환"]}
        rows={[
          ["50/30/20 법칙", "50%", "30%", "20%"],
          ["절약형 목표", "50%", "20%", "30%"],
        ]}
      />
      <GuideBulletList
        items={[
          "필수 지출: 주거·식비·교통·공과금",
          "욕구 지출: 외식·여가·쇼핑·구독",
          "저축률 = (소득 − 지출) ÷ 소득 × 100",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "월급의 20%를 저축하기 어려운데 어떻게 하나요?", a: "먼저 고정 지출(구독, 할부)을 점검하고 단계적으로 저축률을 올리세요. 월급 받는 날 자동 이체로 먼저 저축하는 방법이 효과적입니다." },
          { q: "주거비 비율이 너무 높아요", a: "주거비가 소득의 30~35%를 초과하면 하우스푸어 위험이 있습니다. 이사·월세 조정 등을 검토해 보세요." },
        ]}
      />
    </>
  );
}

function PercentCalcGuide() {
  return (
    <>
      <GuideH2>퍼센트 계산기란?</GuideH2>
      <GuideP>
        A는 B의 몇 %인지, B의 n%는 얼마인지, 변화율은 몇 %인지 등 다양한 퍼센트 계산을 한 번에 처리하는 도구입니다.
      </GuideP>
      <GuideTable
        headers={["계산 유형", "공식"]}
        rows={[
          ["A는 B의 몇 %?", "A ÷ B × 100"],
          ["B의 n%는?", "B × n ÷ 100"],
          ["A에서 B로 변화율", "(B − A) ÷ A × 100"],
          ["할인 후 가격", "원가 × (1 − 할인율 ÷ 100)"],
          ["세금 포함 가격", "원가 × (1 + 세율 ÷ 100)"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "퍼센트와 퍼센트포인트(%p)의 차이는?", a: "% 변화는 기준 대비 비율 변화이고, %p는 두 % 사이의 단순 차이입니다. 예: 50%→55%는 +5%p이지만, +10% 증가입니다." },
          { q: "20% 인상 후 20% 할인하면 원래 가격이 되나요?", a: "아닙니다. 1.2 × 0.8 = 0.96으로 원래의 96%가 됩니다. 퍼센트는 기준이 달라지므로 상쇄되지 않습니다." },
        ]}
      />
    </>
  );
}

function DiscountFinanceGuide() {
  return (
    <>
      <GuideH2>할인 계산기란?</GuideH2>
      <GuideP>
        정가와 할인율(%)로 할인가를 계산하거나, 정가와 판매가로 실제 할인율을 역산하는 도구입니다.
        중복 할인·시즌 세일 가격 비교에도 활용하세요.
      </GuideP>
      <GuideFormulaBox>
        할인가 = 정가 × (1 − 할인율 ÷ 100){"\n"}
        할인율(%) = (1 − 판매가 ÷ 정가) × 100{"\n"}
        중복 할인: 최종 = 정가 × (1 − r₁) × (1 − r₂)
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "예: 정가 50,000원에 20% 할인 → 40,000원",
          "중복 할인: 20% + 10% ≠ 30% 할인 → 실질 28% (정가의 72%)",
          "쿠폰 순서: 할인율 쿠폰을 먼저 적용할지 금액 쿠폰을 먼저 적용할지에 따라 최종가가 다릅니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "카드 캐시백과 할인은 어떻게 다른가요?", a: "할인은 즉시 금액이 줄어들고, 캐시백은 결제 후 별도 금액이 환급됩니다. 최종 지출 관점에서는 같지만 현금 흐름이 다릅니다." },
          { q: "할인율 50%와 반값 쿠폰은 같은가요?", a: "같습니다. 다만 반값 쿠폰에 최소 구매액·제외 상품 조건이 있을 수 있으니 약관을 확인하세요." },
        ]}
      />
    </>
  );
}

function RentVsBuyGuide() {
  return (
    <>
      <GuideH2>전세 vs 매매 비교 계산기란?</GuideH2>
      <GuideP>
        전세 보증금과 매매가를 비교해 전세 거주와 매매 구입 중 어느 쪽이 재정적으로 유리한지를
        추정하는 도구입니다. 기회 비용과 예상 집값 상승률까지 고려해 분석합니다.
      </GuideP>
      <GuideH3>비교 항목</GuideH3>
      <GuideBulletList
        items={[
          "전세 비용: 전세 보증금의 기회 비용(금리 적용) + 월세 전환 시 비용",
          "매매 비용: 대출 이자 + 취득세 + 재산세 + 유지 관리비",
          "자가 이점: 집값 상승 시 자산 증가, 전세 이점: 기회 비용 투자 가능",
          "전세가율(전세가 ÷ 매매가): 70% 이상이면 매매 메리트 감소",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "전세가가 매매가의 80%에 달하면 어떻게 판단해야 하나요?", a: "전세가율이 높을수록 매매 메리트가 줄어듭니다. 집값 하락 시 역전세 위험도 있으므로 신중하게 검토하세요." },
          { q: "월세 vs 전세는 어떻게 비교하나요?", a: "월세 × 12 ÷ 전세 보증금 = 전월세 전환율로 비교합니다. 전환율이 은행 금리보다 낮으면 전세가 유리합니다." },
        ]}
      />
    </>
  );
}

function CommissionGuide() {
  return (
    <>
      <GuideH2>주식 수수료 계산기란?</GuideH2>
      <GuideP>
        주식 매수·매도 시 발생하는 증권사 수수료와 증권거래세를 계산해 실제 수익을 추정하는 도구입니다.
        수수료 부담을 감안한 손익 분기점 확인에 활용하세요.
      </GuideP>
      <GuideTable
        headers={["항목", "기준"]}
        rows={[
          ["증권사 수수료", "0.01~0.5% (증권사·상품별 상이)"],
          ["증권거래세 (코스피 매도)", "0.18% (2024년 기준)"],
          ["증권거래세 (코스닥 매도)", "0.18% (2024년 기준)"],
          ["양도소득세", "대주주 해당 시 적용"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "수수료 무료 이벤트라도 세금은 내야 하나요?", a: "네, 증권거래세는 매도 시 자동으로 부과되며 수수료 면제와 관계없이 납부해야 합니다." },
          { q: "ETF 수수료는 주식과 같나요?", a: "ETF는 매매 수수료 외에 운용 보수(총 비용 비율, TER)가 별도로 연간 차감됩니다. 0.1~0.5% 수준이 일반적입니다." },
        ]}
      />
    </>
  );
}

function StopLossGuide() {
  return (
    <>
      <GuideH2>손절매 계산기란?</GuideH2>
      <GuideP>
        매수 단가와 목표 손절률을 입력해 손절 가격과 예상 손실 금액을 계산하는 도구입니다.
        리스크 관리 전략의 핵심인 손절선 설정에 활용하세요.
      </GuideP>
      <GuideFormulaBox>
        손절가 = 매수가 × (1 − 손절률 ÷ 100){"\n"}
        예상 손실액 = 보유 수량 × (매수가 − 손절가)
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "일반적인 손절 기준: -5~10% (개인 리스크 허용 범위에 따라 다름)",
          "손절가는 감정이 아닌 논리로 미리 설정하세요.",
          "손익비(Risk/Reward Ratio): 손절 폭 대비 목표 수익 폭의 비율",
          "2:1 이상의 손익비(손절 1에 목표 2)를 권장합니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "손절을 하면 무조건 손해인가요?", a: "작은 손실을 확정하고 더 큰 손실을 막는 것이 손절의 목적입니다. 장기적으로 계좌를 지키는 리스크 관리 전략입니다." },
          { q: "손절 후 다시 오르면 어떻게 하나요?", a: "이미 발생한 일은 결과론적 판단입니다. 손절 결정이 당시 정보 기반으로 합리적이었다면 전략을 유지하는 것이 중요합니다." },
        ]}
      />
    </>
  );
}

function CagrGuide() {
  return (
    <>
      <GuideH2>CAGR(연평균 성장률) 계산기란?</GuideH2>
      <GuideP>
        시작값·종료값·기간(년)을 입력해 연평균 복합 성장률(Compound Annual Growth Rate)을 계산하는 도구입니다.
        투자 수익률·기업 매출 성장률 비교에 사용합니다.
      </GuideP>
      <GuideFormulaBox>CAGR = (종료값 ÷ 시작값)^(1 ÷ n) − 1</GuideFormulaBox>
      <GuideBulletList
        items={[
          "예: 1,000만 원 → 5년 후 1,500만 원: CAGR = (1.5)^(1/5) − 1 ≈ 8.4%",
          "단순 수익률(50%)와 다른 점: 매년 복리로 성장했을 때의 평균 속도",
          "S&P 500 장기 CAGR: 약 10~11% (배당 포함, 1926~현재)",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "CAGR이 높으면 무조건 좋은 투자인가요?", a: "CAGR은 변동성(위험)을 반영하지 않습니다. 샤프비율 등 위험 조정 수익률도 함께 확인하세요." },
          { q: "CAGR과 단순 평균 수익률의 차이는?", a: "CAGR은 기하 평균(복리 반영), 단순 평균은 산술 평균입니다. 변동이 있을 경우 CAGR이 항상 산술 평균보다 낮습니다." },
        ]}
      />
    </>
  );
}

function RoiGuide() {
  return (
    <>
      <GuideH2>ROI(투자 수익률) 계산기란?</GuideH2>
      <GuideP>
        투자 금액 대비 순이익의 비율을 계산하는 ROI(Return on Investment)를 구하는 도구입니다.
        마케팅 효과, 장비 도입, 부동산 투자 등 다양한 투자 결정에 활용합니다.
      </GuideP>
      <GuideFormulaBox>ROI(%) = (순이익 ÷ 투자 비용) × 100</GuideFormulaBox>
      <GuideBulletList
        items={[
          "순이익 = 투자 수익 − 투자 비용",
          "예: 1,000만 원 투자 → 1,300만 원 회수: ROI = 30%",
          "기간을 고려하려면 CAGR 또는 IRR을 함께 계산하세요.",
          "기회 비용(다른 투자와의 비교)도 ROI 해석에 포함하세요.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "ROI가 같아도 기간이 다르면 어느 쪽이 유리한가요?", a: "같은 ROI라면 기간이 짧을수록 연환산 수익률이 높아 유리합니다. 연환산 수익률(CAGR)로 비교하세요." },
          { q: "마케팅 ROI는 어떻게 계산하나요?", a: "마케팅 ROI = (마케팅으로 증가한 매출 − 마케팅 비용) ÷ 마케팅 비용 × 100으로 계산합니다." },
        ]}
      />
    </>
  );
}

function RoasGuide() {
  return (
    <>
      <GuideH2>ROAS(광고 수익률) 계산기란?</GuideH2>
      <GuideP>
        광고비 대비 발생한 매출 비율을 계산하는 ROAS(Return On Ad Spend)를 구하는 도구입니다.
        온라인 광고(구글·메타·카카오 등) 성과 측정에 필수적인 지표입니다.
      </GuideP>
      <GuideFormulaBox>
        ROAS(%) = 광고로 발생한 매출 ÷ 광고 비용 × 100{"\n"}
        손익 분기 ROAS = 1 ÷ 영업이익률
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "ROAS 200% = 광고비 1원당 매출 2원 발생",
          "손익 분기 ROAS: 마진율 20%이면 ROAS 500% 이상이어야 이익",
          "ROAS vs ROI: ROAS는 매출 기준, ROI는 이익 기준",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "ROAS가 높으면 무조건 좋은 광고인가요?", a: "ROAS가 높아도 마진이 낮으면 실제 이익이 없을 수 있습니다. 마진을 반영한 ROI(또는 ROAS 손익 분기)와 함께 분석하세요." },
          { q: "목표 ROAS는 어떻게 설정하나요?", a: "업종 평균 마진율에서 역산해 설정합니다. 예: 마진 25% → 손익 분기 ROAS = 400%. 목표 ROAS는 이 이상으로 설정하세요." },
        ]}
      />
    </>
  );
}

function RealEstateFeeGuide() {
  return (
    <>
      <GuideH2>부동산 중개 수수료 계산기란?</GuideH2>
      <GuideP>
        매매·전세·월세 거래 금액을 기준으로 법정 한도 이내 중개 수수료를 계산하는 도구입니다.
        공인중개사 보수 기준은 시·도 조례로 정해지며, 2021년 기준으로 개정된 요율이 적용됩니다.
      </GuideP>
      <GuideTable
        headers={["거래 유형", "거래 금액", "요율 상한"]}
        rows={[
          ["매매", "5천만 원 미만", "0.6%"],
          ["매매", "5천만~2억 미만", "0.5%"],
          ["매매", "2억~9억 미만", "0.4%"],
          ["매매", "9억 원 이상", "0.5% 이하 협의"],
          ["전세", "1억 미만", "0.5%"],
          ["전세", "1억~3억 미만", "0.4%"],
          ["전세", "3억 원 이상", "0.4% 이하 협의"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "중개 수수료는 협상이 가능한가요?", a: "법정 상한 요율 이하에서 협의가 가능합니다. 특히 고가 거래에서 요율을 낮추는 경우가 많습니다." },
          { q: "매수인과 매도인이 각각 따로 내나요?", a: "네, 매수인과 매도인이 각자의 중개인에게 수수료를 지급하는 것이 원칙입니다. 단, 한 중개사가 양쪽을 중개했을 때도 각각에게 받습니다." },
        ]}
      />
    </>
  );
}

function DepreciationGuide() {
  return (
    <>
      <GuideH2>감가상각 계산기란?</GuideH2>
      <GuideP>
        자산의 취득 원가와 내용 연수를 기반으로 연간 감가상각비를 계산하는 도구입니다.
        정액법·정률법을 선택해 세무·회계 목적의 비용 처리에 활용하세요.
      </GuideP>
      <GuideTable
        headers={["방법", "공식", "특징"]}
        rows={[
          ["정액법", "(취득가 − 잔존가치) ÷ 내용연수", "매년 동일 금액 상각"],
          ["정률법", "장부가액 × 상각률", "초기 금액 크고 후기 감소"],
          ["생산량비례법", "단위당 감가 × 생산량", "사용량 기반 상각"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "법인세 절감을 위해 어떤 방법이 유리한가요?", a: "초기에 비용을 많이 인식하려면 정률법이 유리합니다. 단, 세법상 허용 방법과 내용연수를 먼저 확인하세요." },
          { q: "잔존가치는 어떻게 정하나요?", a: "세법상 잔존가치는 취득가의 5% 또는 0으로 정하는 경우가 많습니다. 회계·세법 기준을 구분해 적용하세요." },
        ]}
      />
    </>
  );
}

function EbitdaGuide() {
  return (
    <>
      <GuideH2>EBITDA 계산기란?</GuideH2>
      <GuideP>
        영업이익에 이자·세금·감가상각비를 더해 기업의 순수 영업 현금 창출 능력을 나타내는
        EBITDA(세전·이자전·감가전 이익)를 계산하는 도구입니다.
      </GuideP>
      <GuideFormulaBox>
        EBITDA = 영업이익 + 감가상각비(D&A){"\n"}
        또는 EBITDA = 순이익 + 이자 + 세금 + 감가상각
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "자본 구조·세율이 다른 기업 간 비교에 적합합니다.",
          "EV/EBITDA: 기업 가치 평가 배수로 자주 사용",
          "제조·인프라 등 자본 집약적 업종에서 특히 중요합니다.",
          "EBITDA는 현금 흐름을 과대 표현할 수 있다는 비판도 있습니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "EBITDA가 높으면 무조건 좋은 기업인가요?", a: "EBITDA가 높아도 설비 투자(CAPEX)가 크거나 부채가 많으면 실제 현금 창출이 제한될 수 있습니다. 자유현금흐름(FCF)도 함께 봐야 합니다." },
          { q: "EV/EBITDA가 낮을수록 저평가인가요?", a: "업종 평균과 비교해야 합니다. 일반적으로 10배 이하를 저평가로 보는 경우가 많지만, 성장주는 더 높은 배수가 정상입니다." },
        ]}
      />
    </>
  );
}

function MarginGuide() {
  return (
    <>
      <GuideH2>마진율 계산기란?</GuideH2>
      <GuideP>
        매출액 대비 이익 비율(매출총이익률·영업이익률·순이익률)을 계산하는 도구입니다.
        제품 가격 책정, 수익성 분석, 경쟁사 비교에 활용하세요.
      </GuideP>
      <GuideTable
        headers={["지표", "공식", "의미"]}
        rows={[
          ["매출총이익률", "(매출 − 원가) ÷ 매출 × 100", "직접 생산 수익성"],
          ["영업이익률", "영업이익 ÷ 매출 × 100", "본업 수익성"],
          ["순이익률", "순이익 ÷ 매출 × 100", "최종 수익성"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "마진율이 높은 업종은?", a: "소프트웨어·제약·럭셔리 브랜드가 높은 편(20~50%)이고, 유통·식품은 낮은 편(1~10%)입니다." },
          { q: "마크업과 마진의 차이는?", a: "마진은 매출 기준(이익÷매출), 마크업은 원가 기준(이익÷원가)입니다. 같은 이익이어도 수치가 다릅니다." },
        ]}
      />
    </>
  );
}

function PerGuide() {
  return (
    <>
      <GuideH2>PER(주가수익비율) 계산기란?</GuideH2>
      <GuideP>
        주가를 주당 순이익(EPS)으로 나눈 PER(Price-to-Earnings Ratio)을 계산해 주식 고평가·저평가 여부를
        가늠하는 도구입니다.
      </GuideP>
      <GuideFormulaBox>
        PER = 주가 ÷ EPS(주당 순이익){"\n"}
        EPS = 순이익 ÷ 발행 주식 수
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "PER 10이하: 일반적으로 저평가 (업종 평균 대비)",
          "성장주는 PER 30~100도 정상일 수 있음",
          "코스피 평균 PER: 약 10~14배 (시점에 따라 다름)",
          "PER만으로 투자 결정 금지 — 다른 지표와 종합 분석 필수",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "PER이 음수면 무슨 의미인가요?", a: "순이익이 적자(EPS < 0)이면 PER이 음수가 됩니다. 이 경우 PER 비교는 무의미하며 다른 지표(PSR, EV/Sales 등)를 사용합니다." },
          { q: "선행 PER과 후행 PER의 차이는?", a: "후행 PER은 실제 발표된 이익 기준, 선행 PER은 애널리스트 예측 이익 기준입니다. 미래를 반영하는 선행 PER이 더 중요하게 쓰입니다." },
        ]}
      />
    </>
  );
}

function PbrGuide() {
  return (
    <>
      <GuideH2>PBR(주가순자산비율) 계산기란?</GuideH2>
      <GuideP>
        주가를 주당 순자산(BPS)으로 나눈 PBR(Price-to-Book Ratio)을 계산하는 도구입니다.
        자산 대비 주가 수준을 평가해 금융·제조업 등 자산 중심 업종 분석에 많이 사용합니다.
      </GuideP>
      <GuideFormulaBox>
        PBR = 주가 ÷ BPS(주당 순자산){"\n"}
        BPS = 자기자본 ÷ 발행 주식 수
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "PBR 1.0: 주가 = 장부가치 (자산 대비 적정 수준)",
          "PBR < 1.0: 자산보다 싸게 거래됨 (청산 가치 이하)",
          "성장주·플랫폼 기업은 PBR 10 이상도 흔함",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "PBR 1 미만이면 무조건 저평가인가요?", a: "자산의 질(부실 자산 여부)과 수익성을 함께 봐야 합니다. 구조조정이 필요한 기업은 낮은 PBR에도 오래 머물 수 있습니다." },
          { q: "ROE와 PBR의 관계는?", a: "ROE × PER = PBR의 관계가 성립합니다. ROE가 높은 기업은 자연스럽게 PBR도 높아집니다." },
        ]}
      />
    </>
  );
}

function RoeGuide() {
  return (
    <>
      <GuideH2>ROE(자기자본이익률) 계산기란?</GuideH2>
      <GuideP>
        자기자본 대비 순이익 비율을 나타내는 ROE(Return on Equity)를 계산하는 도구입니다.
        주주 자본을 얼마나 효율적으로 활용해 이익을 창출하는지 측정합니다.
      </GuideP>
      <GuideFormulaBox>ROE(%) = 순이익 ÷ 자기자본 × 100</GuideFormulaBox>
      <GuideTable
        headers={["ROE 수준", "평가 (참고)"]}
        rows={[
          ["15% 이상", "우수 (버핏 선호 기준: 15% 이상 지속)"],
          ["10~15%", "양호"],
          ["5~10%", "보통"],
          ["5% 미만", "낮음"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "ROE가 너무 높으면 오히려 위험한가요?", a: "자본이 과도하게 적거나(부채 활용) 자사주 매입으로 자기자본이 낮아진 경우 ROE가 비정상적으로 높을 수 있습니다. ROA, 부채비율도 함께 확인하세요." },
          { q: "ROE가 꾸준히 15% 이상인 기업은 어떻게 찾나요?", a: "금융정보 사이트(네이버 금융, 증권사 HTS)에서 ROE 필터링 기능을 활용할 수 있습니다." },
        ]}
      />
    </>
  );
}

function ApyGuide() {
  return (
    <>
      <GuideH2>APY(연간 실효 수익률) 계산기란?</GuideH2>
      <GuideP>
        명목 이율(APR)과 복리 횟수를 바탕으로 실제 연간 수익률(APY, Annual Percentage Yield)을
        계산하는 도구입니다. 적금·예금 상품 비교 시 실제 수익을 정확히 파악할 수 있습니다.
      </GuideP>
      <GuideFormulaBox>APY = (1 + APR ÷ n)^n − 1</GuideFormulaBox>
      <GuideBulletList
        items={[
          "n: 연간 복리 횟수 (월 복리=12, 분기=4, 연=1)",
          "예: APR 12%, 월 복리 → APY = (1 + 0.12/12)^12 − 1 ≈ 12.68%",
          "복리 횟수가 많을수록 APY가 높아집니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "은행 광고에 'APY 5%'라고 쓰면 실제 월 이자는?", a: "APY 5% = 월 이자율 ≈ 5% ÷ 12 ≈ 0.417% (단리 가정시). 복리 적용 상품이라면 월 이율이 약간 낮습니다." },
          { q: "국내 적금은 APY 개념이 적용되나요?", a: "국내 적금 광고는 대부분 연 이율(단리)을 표기합니다. APY로 환산하면 실제 수익이 약간 다를 수 있습니다." },
        ]}
      />
    </>
  );
}

function CpmGuide() {
  return (
    <>
      <GuideH2>CPM(노출당 비용) 계산기란?</GuideH2>
      <GuideP>
        광고 1,000회 노출당 비용(CPM, Cost Per Mille)과 총 광고비·노출수·예산 간 관계를 계산하는 도구입니다.
        디지털 광고 예산 기획과 성과 분석에 활용하세요.
      </GuideP>
      <GuideFormulaBox>
        CPM = (총 광고비 ÷ 노출 수) × 1,000{"\n"}
        총 광고비 = CPM × 노출 수 ÷ 1,000
      </GuideFormulaBox>
      <GuideTable
        headers={["지표", "공식"]}
        rows={[
          ["CPM", "비용 ÷ 노출 × 1,000"],
          ["CPC (클릭당 비용)", "비용 ÷ 클릭 수"],
          ["CPA (행동당 비용)", "비용 ÷ 전환 수"],
          ["CTR (클릭률)", "클릭 ÷ 노출 × 100%"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "CPM이 낮으면 무조건 좋은 광고인가요?", a: "CPM이 낮아도 타겟 정확도가 낮으면 전환율이 나빠집니다. ROAS(광고 수익률)로 최종 성과를 평가하세요." },
          { q: "유튜브·인스타그램 평균 CPM은?", a: "플랫폼·타겟·업종에 따라 다르지만 국내 기준 유튜브 약 2,000~10,000원, 인스타그램 약 3,000~15,000원 수준입니다(참고치)." },
        ]}
      />
    </>
  );
}

function AprGuide() {
  return (
    <>
      <GuideH2>APR(연간 이율) 계산기란?</GuideH2>
      <GuideP>
        대출·신용카드의 명목 이율(APR, Annual Percentage Rate)과 실효 이율(APY)을 계산하고 비교하는 도구입니다.
        금융 상품 선택 전 실제 이자 부담을 파악하는 데 활용하세요.
      </GuideP>
      <GuideFormulaBox>
        월 이자율 = APR ÷ 12{"\n"}
        APY = (1 + APR ÷ 12)^12 − 1
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "신용카드 할부 이자: APR 14~20% (카드사별 상이)",
          "카카오페이·토스 대출 APR: 최대 20% (법정 최고 이자율 20%)",
          "APR이 같아도 복리 횟수에 따라 실제 이자(APY)가 다릅니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "신용카드 무이자 할부는 정말 이자가 없나요?", a: "카드사가 이자를 부담하는 행사입니다. 가맹점이 일부 비용을 부담하는 경우도 있습니다. 제품 정가 자체에 이자 비용이 반영된 경우도 있을 수 있습니다." },
          { q: "법정 최고 이자율이 20%라면 그 이상은 불법인가요?", a: "네, 이자제한법에 따라 연 20%를 초과하는 이자 약정은 무효이며 초과 금액은 반환 청구가 가능합니다." },
        ]}
      />
    </>
  );
}

function ChangeRateGuide() {
  return (
    <>
      <GuideH2>변화율 계산기란?</GuideH2>
      <GuideP>
        이전 값과 현재 값을 입력해 증가율·감소율·변화폭을 계산하는 도구입니다.
        주가·매출·인구·물가 등 다양한 데이터의 시계열 변화 분석에 활용하세요.
      </GuideP>
      <GuideFormulaBox>
        변화율(%) = (현재값 − 이전값) ÷ 이전값 × 100{"\n"}
        절대 변화량 = 현재값 − 이전값
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "양수: 증가, 음수: 감소",
          "기준 시점이 달라지면 변화율도 달라집니다.",
          "연간 변화율 vs 전월 대비 변화율을 명확히 구분하세요.",
          "물가상승률(CPI)은 전년 동기 대비 변화율로 표기됩니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "-50% 하락 후 50% 상승하면 원래 수준이 되나요?", a: "아닙니다. 100에서 -50%면 50이 되고, 50에서 +50%면 75입니다. 회복하려면 +100% 상승이 필요합니다." },
          { q: "전년 대비 vs 전월 대비 어느 쪽이 더 의미 있나요?", a: "목적에 따라 다릅니다. 계절성이 있는 데이터는 전년 동기 대비가, 단기 추세는 전월 대비가 유용합니다." },
        ]}
      />
    </>
  );
}

function SubscriptionGuide() {
  return (
    <>
      <GuideH2>구독료 총 비용 계산기란?</GuideH2>
      <GuideP>
        넷플릭스·스포티파이·클라우드 등 구독 서비스의 월 요금을 입력해 연간·5년·10년 총 비용과
        구독 지출 비중을 파악하는 도구입니다.
      </GuideP>
      <GuideBulletList
        items={[
          "구독 서비스를 모두 목록화해 필요 여부를 재점검하세요.",
          "연간 결제 vs 월간 결제: 연간 결제가 보통 15~30% 저렴합니다.",
          "공유 플랜(가족·팀) 활용 시 1인당 비용이 크게 줄어듭니다.",
          "구독 총합이 월 소득의 5% 초과 시 점검이 필요합니다.",
        ]}
      />
      <GuideFormulaBox>연간 비용 = Σ(월 구독료 × 12)</GuideFormulaBox>
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "구독 서비스 중복 사용을 어떻게 파악하나요?", a: "카드 명세서·계좌 내역에서 정기 결제 항목을 검색하거나, 구독 관리 앱(Subtrack 등)을 활용하면 편리합니다." },
          { q: "구독료가 자동 인상됐을 때 바로 알 수 있나요?", a: "서비스 정책상 인상 전 이메일로 공지하는 것이 원칙입니다. 결제 내역을 정기적으로 확인하는 습관이 좋습니다." },
        ]}
      />
    </>
  );
}

// ════════════════════════════════════════════════
// 단위 — 개별 가이드 (unit-001 ~ unit-020)
// ════════════════════════════════════════════════

function PyeongGuide() {
  return (
    <>
      <GuideH2>평수 계산기란?</GuideH2>
      <GuideP>
        부동산 면적 단위인 평(坪)과 제곱미터(m²)를 상호 변환하는 도구입니다.
        아파트 분양 공고·등기부등본은 m² 기준이므로, 평 단위와 혼용 시 혼동에 주의하세요.
      </GuideP>
      <GuideFormulaBox>
        1평 = 3.30579 m²{"\n"}
        m² → 평: ÷ 3.30579{"\n"}
        평 → m²: × 3.30579
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "실용 근사치: 1평 ≈ 3.3m² (빠른 계산용)",
          "전용면적 vs 공급면적: 분양 공고에서 반드시 구분 확인",
          "공급면적 = 전용면적 + 주거 공용면적",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "분양 공고에서 '84m²'는 몇 평인가요?", a: "84 ÷ 3.3 ≈ 25.5평이지만, 이는 전용면적 기준입니다. 흔히 '33평형'이라 부르는 것은 공급면적 기준입니다." },
          { q: "인테리어 견적 시 어떤 면적을 기준으로 하나요?", a: "전용면적 기준으로 견적을 내는 경우가 일반적입니다. 업체에 전용면적을 정확히 알려주세요." },
        ]}
      />
    </>
  );
}

function TempGuide() {
  return (
    <>
      <GuideH2>온도 변환 계산기란?</GuideH2>
      <GuideP>
        섭씨(°C)·화씨(°F)·켈빈(K) 세 가지 온도 단위를 상호 변환하는 도구입니다.
        해외 여행, 요리 레시피(오븐 온도), 과학 실험에서 자주 필요합니다.
      </GuideP>
      <GuideFormulaBox>
        °C → °F: (°C × 9/5) + 32{"\n"}
        °F → °C: (°F − 32) × 5/9{"\n"}
        °C → K: °C + 273.15
      </GuideFormulaBox>
      <GuideTable
        headers={["기준점", "°C", "°F", "K"]}
        rows={[
          ["물 어는점", "0°C", "32°F", "273.15K"],
          ["체온 (평균)", "37°C", "98.6°F", "310.15K"],
          ["물 끓는점", "100°C", "212°F", "373.15K"],
          ["절대영도", "−273.15°C", "−459.67°F", "0K"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "켈빈은 언제 사용하나요?", a: "과학·공학에서 절대 온도가 필요할 때 사용합니다. 열역학 계산, 가스 법칙(PV=nRT), 흑체 복사 등에 사용됩니다." },
          { q: "화씨 100°F는 더운 건가요?", a: "화씨 100°F = 섭씨 약 37.8°C로 한여름 폭염 수준입니다. 사람의 정상 체온(98.6°F = 37°C)보다 약간 높습니다." },
        ]}
      />
    </>
  );
}

function InchGuide() {
  return (
    <>
      <GuideH2>인치 변환 계산기란?</GuideH2>
      <GuideP>
        인치(inch)와 센티미터(cm)·밀리미터(mm)를 상호 변환하는 도구입니다.
        TV·모니터 화면 크기, 타이어 규격, 나사·볼트 규격 확인에 자주 쓰입니다.
      </GuideP>
      <GuideFormulaBox>
        1인치 = 2.54cm{"\n"}
        cm → 인치: ÷ 2.54{"\n"}
        인치 → cm: × 2.54
      </GuideFormulaBox>
      <GuideTable
        headers={["인치", "센티미터", "주요 활용"]}
        rows={[
          ["13인치", "33cm", "노트북 화면"],
          ["27인치", "68.6cm", "모니터"],
          ["55인치", "139.7cm", "TV"],
          ["6인치", "15.2cm", "스마트폰 화면"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "TV 55인치는 가로 길이가 55cm인가요?", a: "아닙니다. TV 화면 인치는 대각선 길이입니다. 55인치 TV의 가로는 약 122cm, 세로는 약 69cm입니다(16:9 비율 기준)." },
          { q: "신발 사이즈와 인치의 관계는?", a: "미국 신발 사이즈는 발 길이(인치 기준)에서 특정 상수를 더하고 곱하는 별도 공식을 씁니다. 단순 인치 변환과는 다릅니다." },
        ]}
      />
    </>
  );
}

function GallonGuide() {
  return (
    <>
      <GuideH2>갤런 변환 계산기란?</GuideH2>
      <GuideP>
        갤런(gallon)과 리터(L)를 상호 변환하는 도구입니다.
        미국 연비(mpg), 연료 구매, 요리 레시피(미국식) 등에서 갤런 단위가 자주 등장합니다.
      </GuideP>
      <GuideFormulaBox>
        1 미국 갤런(US gal) = 3.78541 L{"\n"}
        1 영국 갤런(UK gal) = 4.54609 L
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "미국식 연비 환산: mpg(마일/갤런) → km/L = mpg × 0.4251",
          "미국 연료 단위: 갤런, 한국·유럽: 리터",
          "갤런 외 쿼트(qt=1/4 갤런), 파인트(pt=1/2 쿼트)도 미국 요리에 등장",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "미국 차의 연비가 30mpg이면 한국 기준으로 얼마인가요?", a: "30mpg × 0.4251 ≈ 12.75 km/L입니다. 한국 기준으로 꽤 좋은 연비에 해당합니다." },
          { q: "미국 갤런과 영국 갤런이 다른가요?", a: "네, 미국 갤런(3.785L)이 영국 갤런(4.546L)보다 약 20% 작습니다. 미국식 표기를 확인하세요." },
        ]}
      />
    </>
  );
}

function BuildingCoverageGuide() {
  return (
    <>
      <GuideH2>건폐율 계산기란?</GuideH2>
      <GuideP>
        대지 면적 대비 건축물 1층 바닥 면적(건축 면적)의 비율인 건폐율을 계산하는 도구입니다.
        건폐율 한도는 용도 지역마다 다르며, 건축 허가 전 필수 확인 사항입니다.
      </GuideP>
      <GuideFormulaBox>건폐율(%) = 건축 면적 ÷ 대지 면적 × 100</GuideFormulaBox>
      <GuideTable
        headers={["용도 지역", "건폐율 상한 (참고)"]}
        rows={[
          ["제1종 전용주거지역", "50%"],
          ["제1종 일반주거지역", "60%"],
          ["상업지역", "80~90%"],
          ["공업지역", "70%"],
          ["녹지지역", "20%"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "건폐율과 용적률의 차이는?", a: "건폐율은 1층 면적 비율(수평 확산 제한), 용적률은 전체 층 면적 합계 비율(수직 확산 제한)입니다." },
          { q: "주차장·지하 주차장도 건축 면적에 포함되나요?", a: "지하 주차장은 건축 면적에 포함되지 않습니다. 1층 주차장은 벽·기둥 유무에 따라 다르게 산정될 수 있습니다." },
        ]}
      />
    </>
  );
}

function FloorAreaRatioGuide() {
  return (
    <>
      <GuideH2>용적률 계산기란?</GuideH2>
      <GuideP>
        대지 면적 대비 지상층 연면적(각 층 바닥 면적의 합계) 비율인 용적률을 계산하는 도구입니다.
        용적률이 높을수록 더 높은 건물을 지을 수 있어 땅의 개발 가치와 밀접한 관계가 있습니다.
      </GuideP>
      <GuideFormulaBox>용적률(%) = 지상층 연면적 ÷ 대지 면적 × 100</GuideFormulaBox>
      <GuideTable
        headers={["용도 지역", "용적률 상한 (참고)"]}
        rows={[
          ["제1종 전용주거지역", "50~100%"],
          ["제1종 일반주거지역", "100~200%"],
          ["준주거지역", "200~500%"],
          ["일반상업지역", "200~1,300%"],
          ["공업지역", "150~350%"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "재건축 아파트의 용적률이 중요한 이유는?", a: "용적률이 낮은 단지일수록 재건축 시 더 많은 층수를 올릴 수 있어 사업성이 높습니다. 저층 단지가 재건축 기대감이 큰 이유입니다." },
          { q: "지하층은 용적률 산정에 포함되나요?", a: "지하층은 용적률 산정에서 제외됩니다. 지하 주차장이 넓어도 용적률에 영향을 주지 않습니다." },
        ]}
      />
    </>
  );
}

function PpmGuide() {
  return (
    <>
      <GuideH2>PPM 변환 계산기란?</GuideH2>
      <GuideP>
        백만분의 일 단위(PPM, Parts Per Million)와 mg/L, μg/mL, % 등 농도 단위를 상호 변환하는 도구입니다.
        수질·대기질·식품 첨가물 농도 표기에서 자주 쓰입니다.
      </GuideP>
      <GuideFormulaBox>
        1 ppm = 1 mg/kg = 1 mg/L (물 기준){"\n"}
        1 ppm = 0.0001%{"\n"}
        1 ppb = 0.001 ppm
      </GuideFormulaBox>
      <GuideTable
        headers={["단위", "의미", "예시"]}
        rows={[
          ["ppm", "백만분의 1", "먹는물 수질 기준"],
          ["ppb", "10억분의 1", "초미세먼지 기준"],
          ["ppt", "1조분의 1", "환경 오염물질 극미량"],
          ["%", "백분의 1", "일반 농도"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "먹는 물 질산성 질소 기준 10ppm이란?", a: "물 1L(1kg) 안에 10mg의 질산성 질소가 들어있다는 의미입니다. 이 이상이면 먹는 물로 부적합합니다." },
          { q: "공기 중 CO₂ 농도 400ppm이 위험한가요?", a: "현재 대기 중 CO₂는 약 420ppm으로 지구 온난화 측면에서 우려되지만, 실내 환기 기준은 1,000ppm 이하입니다." },
        ]}
      />
    </>
  );
}

function DmsGuide() {
  return (
    <>
      <GuideH2>도분초(DMS) 변환 계산기란?</GuideH2>
      <GuideP>
        위도·경도를 도분초(DMS, Degrees Minutes Seconds) 형식과 십진수 형식(Decimal Degrees)으로
        상호 변환하는 도구입니다. GPS·지도·항법 시스템에서 자주 필요합니다.
      </GuideP>
      <GuideFormulaBox>
        DD(십진수) = 도 + 분/60 + 초/3600{"\n"}
        예: 37°30′15″ = 37 + 30/60 + 15/3600 = 37.5042°
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "서울 위도: 37°33′52″ N = 37.564°N",
          "구글 지도는 십진수 형식을 기본으로 사용",
          "항공·해상은 DMS 형식을 주로 사용",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "구글 지도에서 좌표를 어떻게 확인하나요?", a: "지도를 우클릭하거나 특정 위치를 길게 누르면 십진수 좌표가 표시됩니다." },
          { q: "경도 -180°~180°의 의미는?", a: "0°은 영국 그리니치 기준선, 동쪽으로 갈수록 +, 서쪽으로 갈수록 -입니다. 한국은 약 126~129°E입니다." },
        ]}
      />
    </>
  );
}

function SlopeGuide() {
  return (
    <>
      <GuideH2>경사도 계산기란?</GuideH2>
      <GuideP>
        수평 거리와 수직 높이로 경사각(°)·경사율(%)·경사비를 계산하는 도구입니다.
        도로 설계, 지붕 경사, 트레일 코스 설계 등에 활용됩니다.
      </GuideP>
      <GuideFormulaBox>
        경사율(%) = 수직 높이 ÷ 수평 거리 × 100{"\n"}
        경사각(°) = atan(수직 ÷ 수평) × (180 ÷ π)
      </GuideFormulaBox>
      <GuideTable
        headers={["경사율 (%)", "경사각 (°)", "예시"]}
        rows={[
          ["5%", "약 2.9°", "고속도로 최대 경사"],
          ["8~10%", "약 4.6~5.7°", "일반 도로 최대"],
          ["30%", "약 16.7°", "가파른 등산로"],
          ["45%", "약 24°", "급경사 등산로"],
          ["100%", "45°", "45도 경사"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "지붕 경사(피치)는 어떻게 표현하나요?", a: "지붕 피치는 보통 '4/12' 형식으로, 수평 12에 수직 4만큼 올라간다는 뜻입니다. 이는 약 18.4° 또는 33% 경사율입니다." },
          { q: "경사율 100%는 45°가 맞나요?", a: "맞습니다. 수직=수평이면 tan(θ)=1이므로 θ=45°입니다. 경사율 100%는 수직 절벽이 아닙니다." },
        ]}
      />
    </>
  );
}

function PerimeterGuide() {
  return (
    <>
      <GuideH2>도형 둘레·면적 계산기란?</GuideH2>
      <GuideP>
        사각형·원·삼각형 등 기본 도형의 둘레와 면적을 계산하는 도구입니다.
        인테리어 자재 계산, 조경, 공사 견적에 활용하세요.
      </GuideP>
      <GuideTable
        headers={["도형", "둘레", "면적"]}
        rows={[
          ["정사각형", "4 × 변", "변²"],
          ["직사각형", "2(가로+세로)", "가로 × 세로"],
          ["원", "2πr", "πr²"],
          ["삼각형", "a+b+c", "밑변×높이÷2"],
          ["평행사변형", "2(a+b)", "밑변×높이"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "벽지 계산 시 어떤 면적을 사용해야 하나요?", a: "벽면 면적(벽 높이×둘레)에서 창문·문 면적을 빼면 됩니다. 여유분 10~15%를 추가로 구매하세요." },
          { q: "타일 개수는 어떻게 계산하나요?", a: "바닥 면적 ÷ 타일 1장 면적 = 필요 수량. 여기에 파손·커팅 손실 10% 추가를 권장합니다." },
        ]}
      />
    </>
  );
}

function RadianGuide() {
  return (
    <>
      <GuideH2>각도·라디안 변환 계산기란?</GuideH2>
      <GuideP>
        각도(°)와 라디안(rad)을 상호 변환하는 도구입니다.
        삼각함수, 물리 계산, 프로그래밍(sin/cos 함수는 라디안 입력)에서 필요합니다.
      </GuideP>
      <GuideFormulaBox>
        라디안 = 각도 × π ÷ 180{"\n"}
        각도 = 라디안 × 180 ÷ π
      </GuideFormulaBox>
      <GuideTable
        headers={["각도", "라디안", "삼각값"]}
        rows={[
          ["0°", "0", "sin=0, cos=1"],
          ["30°", "π/6 ≈ 0.524", "sin=0.5, cos=0.866"],
          ["45°", "π/4 ≈ 0.785", "sin=cos=0.707"],
          ["90°", "π/2 ≈ 1.571", "sin=1, cos=0"],
          ["180°", "π ≈ 3.1416", "sin=0, cos=-1"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "프로그래밍에서 sin(90)이 1이 안 나오는 이유는?", a: "대부분의 프로그래밍 언어(Python, JavaScript 등)의 삼각함수는 라디안 입력을 받습니다. Math.sin(90)은 sin(90 rad)으로 계산되어 1이 아닙니다. Math.sin(π/2) = 1입니다." },
          { q: "라디안은 왜 쓰나요?", a: "수학적으로 자연스러운 각도 단위입니다. 미적분에서 sin(x) 미분이 cos(x)가 되려면 x가 라디안이어야 합니다." },
        ]}
      />
    </>
  );
}

function CubicMeterGuide() {
  return (
    <>
      <GuideH2>부피 변환 계산기란?</GuideH2>
      <GuideP>
        세제곱미터(m³), 리터(L), 밀리리터(mL), 세제곱센티미터(cm³) 등 부피 단위를 상호 변환하는 도구입니다.
        이사 짐 부피, 물탱크 용량, 공조 설비 용량 계산에 활용하세요.
      </GuideP>
      <GuideFormulaBox>
        1 m³ = 1,000 L{"\n"}
        1 L = 1,000 mL = 1,000 cm³{"\n"}
        1 m³ = 1,000,000 cm³
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "이사 짐 부피: 5t 트럭 ≈ 20~25m³, 1t 트럭 ≈ 4~6m³",
          "수영장 부피: 50m × 25m × 2m = 2,500m³ = 2,500,000L",
          "음료 용량: 페트병 1.5L = 1,500mL = 1,500cm³",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "냉방기 표준 냉방 면적은 부피로 어떻게 환산하나요?", a: "냉방 면적(m²) × 천장 높이(m) = 냉방 부피(m³). 보통 천장 높이 2.4m 기준으로 에어컨 용량을 선택합니다." },
          { q: "1cc(시시)와 1mL는 같은가요?", a: "맞습니다. 1cc = 1cm³ = 1mL입니다. 의약품·주사기에서 cc가 자주 쓰입니다." },
        ]}
      />
    </>
  );
}

function DensityGuide() {
  return (
    <>
      <GuideH2>밀도 계산기란?</GuideH2>
      <GuideP>
        질량과 부피를 입력해 밀도를 계산하거나, 밀도와 부피·질량을 역산하는 도구입니다.
        재료 선택, 물질 식별, 부력 계산에 활용됩니다.
      </GuideP>
      <GuideFormulaBox>밀도(ρ) = 질량(m) ÷ 부피(V)</GuideFormulaBox>
      <GuideTable
        headers={["물질", "밀도 (g/cm³)"]}
        rows={[
          ["물 (4°C)", "1.000"],
          ["얼음", "0.917"],
          ["알루미늄", "2.70"],
          ["철", "7.87"],
          ["금", "19.32"],
          ["공기 (20°C)", "0.00120"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "얼음이 물에 뜨는 이유는?", a: "얼음(0.917 g/cm³)이 물(1.0 g/cm³)보다 밀도가 낮기 때문입니다. 밀도가 낮은 물질은 높은 물질 위에 뜹니다." },
          { q: "밀도로 진짜 금을 구별할 수 있나요?", a: "금의 밀도는 19.32 g/cm³으로 매우 독특합니다. 물에 넣어 부피를 재고 무게를 달아 밀도를 계산해 확인할 수 있습니다." },
        ]}
      />
    </>
  );
}

function SpeedDistanceGuide() {
  return (
    <>
      <GuideH2>속도·거리·시간 계산기란?</GuideH2>
      <GuideP>
        속도·거리·시간 중 두 값을 입력해 나머지 한 값을 계산하는 도구입니다.
        자동차 여행 시간 예측, 운동 페이스 계산, 물리 문제 풀이에 활용하세요.
      </GuideP>
      <GuideFormulaBox>
        거리 = 속도 × 시간{"\n"}
        속도 = 거리 ÷ 시간{"\n"}
        시간 = 거리 ÷ 속도
      </GuideFormulaBox>
      <GuideTable
        headers={["이동 수단", "평균 속도 (참고)"]}
        rows={[
          ["걷기", "약 5 km/h"],
          ["자전거", "약 15~20 km/h"],
          ["자동차 (고속도로)", "약 100 km/h"],
          ["KTX", "약 250~300 km/h"],
          ["비행기 (국내선)", "약 800 km/h"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "서울에서 부산(약 400km)을 자동차로 몇 시간?", a: "고속도로 평균 속도 100km/h 기준 약 4시간이지만, 휴게소 정차·교통 정체를 감안하면 4.5~5.5시간이 현실적입니다." },
          { q: "속도 단위 km/h와 m/s는 어떻게 변환하나요?", a: "km/h ÷ 3.6 = m/s. 예: 100 km/h = 약 27.8 m/s." },
        ]}
      />
    </>
  );
}

function DataSizeGuide() {
  return (
    <>
      <GuideH2>데이터 크기 변환 계산기란?</GuideH2>
      <GuideP>
        바이트(B)·킬로바이트(KB)·메가바이트(MB)·기가바이트(GB)·테라바이트(TB) 간 데이터 크기를 변환하는 도구입니다.
        파일 크기, 저장 공간, 인터넷 속도 단위 비교에 활용하세요.
      </GuideP>
      <GuideTable
        headers={["단위", "크기 (1024진법)"]}
        rows={[
          ["1 KB", "1,024 B"],
          ["1 MB", "1,024 KB = 1,048,576 B"],
          ["1 GB", "1,024 MB"],
          ["1 TB", "1,024 GB"],
        ]}
      />
      <GuideBulletList
        items={[
          "1024 vs 1000: 컴퓨터는 1024진법, 저장장치 제조사는 1000진법 사용 → 표시 용량 차이 발생",
          "인터넷 속도: Mbps(메가비트/초) ÷ 8 = MB/s(초당 다운로드 크기)",
          "예: 100Mbps → 초당 약 12.5MB 다운로드",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "1TB HDD를 사면 왜 실제 용량이 931GB로 나오나요?", a: "제조사는 1TB = 1,000GB(10진법)으로 표기하고, OS는 1TB = 1,024GB(2진법)으로 계산하기 때문에 차이가 발생합니다." },
          { q: "인터넷 속도 1Gbps는 1GB/s인가요?", a: "아닙니다. 1Gbps(기가비트/초) ÷ 8 = 125MB/s(메가바이트/초)입니다. 비트와 바이트의 차이입니다." },
        ]}
      />
    </>
  );
}

function WattGuide() {
  return (
    <>
      <GuideH2>전력 변환 계산기란?</GuideH2>
      <GuideP>
        와트(W)·킬로와트(kW)·마력(HP)·BTU/h 간 전력 단위를 변환하는 도구입니다.
        가전 소비 전력, 에어컨·보일러 용량, 자동차 출력 비교에 활용하세요.
      </GuideP>
      <GuideFormulaBox>
        1 kW = 1,000 W{"\n"}
        1 HP(마력) ≈ 745.7 W{"\n"}
        1 kW ≈ 3,412 BTU/h
      </GuideFormulaBox>
      <GuideTable
        headers={["가전", "소비 전력 (참고)"]}
        rows={[
          ["LED 전구", "5~10W"],
          ["노트북", "45~90W"],
          ["에어컨 (1HP)", "약 750~900W"],
          ["전기차 충전기 (완속)", "7kW"],
          ["헤어드라이어", "1,200~2,000W"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "에어컨 냉방 능력 1RT는 얼마인가요?", a: "1RT(냉동톤) ≈ 3,517W(3.517kW). 소형 에어컨은 보통 2~3kW, 대형은 5kW 이상입니다." },
          { q: "월 전기료는 어떻게 계산하나요?", a: "소비 전력(kW) × 사용 시간(h) = kWh. 한국 전기료는 kWh당 약 100~200원(누진세 적용, 사용량에 따라 다름)." },
        ]}
      />
    </>
  );
}

function DecibelGuide() {
  return (
    <>
      <GuideH2>데시벨(dB) 변환 계산기란?</GuideH2>
      <GuideP>
        소리 크기(음압 레벨, dB SPL)와 음향 파워·강도(dBW) 간 변환 및 두 소리의 합성 데시벨을
        계산하는 도구입니다.
      </GuideP>
      <GuideTable
        headers={["dB", "소리 크기 (참고)"]}
        rows={[
          ["0 dB", "청력 한계"],
          ["30 dB", "조용한 도서관"],
          ["60 dB", "일반 대화"],
          ["85 dB", "장기 노출 청력 손상 시작"],
          ["100 dB", "전동 공구, 콘서트"],
          ["120 dB", "비행기 이착륙"],
          ["140 dB", "총소리 — 즉시 손상"],
        ]}
      />
      <GuideFormulaBox>dB 합성: L = 10 × log₁₀(10^(L1/10) + 10^(L2/10))</GuideFormulaBox>
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "같은 60dB 소리 두 개를 합치면 120dB인가요?", a: "아닙니다. 60dB + 60dB ≈ 63dB입니다. 데시벨은 로그 스케일이라 단순 덧셈이 되지 않습니다." },
          { q: "이어폰 사용 시 안전한 볼륨 기준은?", a: "WHO 권장 기준: 최대 볼륨의 60% 이하로, 하루 60분 이내 사용. 85dB 이상을 장시간 지속하면 청력 손상 위험이 있습니다." },
        ]}
      />
    </>
  );
}

function MeasurementGuide() {
  return (
    <>
      <GuideH2>길이 단위 변환 계산기란?</GuideH2>
      <GuideP>
        밀리미터(mm)·센티미터(cm)·미터(m)·킬로미터(km)·인치·피트·야드·마일 등 주요 길이 단위를
        상호 변환하는 도구입니다.
      </GuideP>
      <GuideTable
        headers={["미터법", "야드파운드법", "환산"]}
        rows={[
          ["1 m", "3.281 ft (피트)", ""],
          ["1 km", "0.6214 mile (마일)", ""],
          ["1 cm", "0.3937 inch (인치)", ""],
          ["1 mile", "1.609 km", ""],
          ["1 foot", "30.48 cm", ""],
          ["1 yard", "91.44 cm", ""],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "마라톤 거리 42.195km는 왜 그런 숫자인가요?", a: "1908년 런던 올림픽 때 왕실 관람대에서 결승선까지의 거리(42.195km = 26마일 385야드)를 공식화한 데서 유래합니다." },
          { q: "1마일과 1해리의 차이는?", a: "육상 마일(statute mile) = 1.609km, 해상 마일(nautical mile) = 1.852km입니다. 항공·해상 분야에서는 해리를 사용합니다." },
        ]}
      />
    </>
  );
}

function CoordDistGuide() {
  return (
    <>
      <GuideH2>좌표 거리 계산기란?</GuideH2>
      <GuideP>
        두 지점의 위도·경도(또는 2D 좌표)를 입력해 직선 거리를 계산하는 도구입니다.
        하버사인(Haversine) 공식으로 지구 곡률을 반영한 실제 거리를 계산합니다.
      </GuideP>
      <GuideFormulaBox>
        Haversine: d = 2R × arcsin(√[sin²(Δφ/2) + cos φ₁·cos φ₂·sin²(Δλ/2)]){"\n"}
        R = 지구 반지름 ≈ 6,371 km
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "서울(37.57°N, 126.98°E) ↔ 부산(35.18°N, 129.08°E): 약 325km",
          "서울 ↔ 뉴욕: 약 11,000km",
          "위도 1° ≈ 111km, 경도 1°는 위도에 따라 다름",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "직선 거리와 도로 거리는 왜 다른가요?", a: "직선 거리는 지구 표면의 최단 경로, 도로 거리는 실제 도로를 따라가는 거리입니다. 도시 내부에서도 도로 거리가 직선의 1.2~1.5배 이상인 경우가 흔합니다." },
          { q: "좌표 거리 계산에 구글 지도 API를 써도 되나요?", a: "구글 지도 API(Distance Matrix API)는 실시간 도로 거리·시간을 제공합니다. 단순 직선 거리는 이 계산기로 충분합니다." },
        ]}
      />
    </>
  );
}

function ParallelResistorGuide() {
  return (
    <>
      <GuideH2>병렬 저항 계산기란?</GuideH2>
      <GuideP>
        두 개 이상의 저항이 병렬로 연결됐을 때 합성 저항값을 계산하는 도구입니다.
        전자 회로 설계, 전기 공사, 물리 학습에 활용하세요.
      </GuideP>
      <GuideFormulaBox>
        병렬 저항: 1/R = 1/R₁ + 1/R₂ + 1/R₃ + ...{"\n"}
        두 저항: R = R₁×R₂ ÷ (R₁+R₂)
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "병렬 연결의 합성 저항은 항상 각 저항 중 가장 작은 값보다 작습니다.",
          "직렬 연결: R = R₁ + R₂ + ...",
          "같은 저항 n개 병렬: R/n",
          "가정용 콘센트는 모두 병렬 연결입니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "병렬 연결 시 전압이 같은 이유는?", a: "병렬 연결된 소자 양단에는 동일한 전압이 걸립니다. 전류만 각 소자로 나뉩니다(옴의 법칙)." },
          { q: "가정집 전기 회로는 직렬인가 병렬인가?", a: "가정용 콘센트·조명은 병렬 연결입니다. 덕분에 한 전구가 나가도 다른 기기가 꺼지지 않습니다." },
        ]}
      />
    </>
  );
}

// ════════════════════════════════════════════════
// 일상 — 추가 개별 가이드 (daily-001 ~ daily-013)
// ════════════════════════════════════════════════

function GasGuide() {
  return (
    <>
      <GuideH2>주유비 계산기란?</GuideH2>
      <GuideP>
        주행 거리, 연비, 유가를 입력해 예상 주유비를 계산하는 도구입니다.
        장거리 여행 비용 예측, 차량 유지비 관리에 활용하세요.
      </GuideP>
      <GuideFormulaBox>
        필요 연료(L) = 주행 거리(km) ÷ 연비(km/L){"\n"}
        주유비(원) = 필요 연료 × 유가(원/L)
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "공인 연비 vs 실제 연비: 공인 연비의 70~85% 수준이 실제 주행에 가깝습니다.",
          "유가 확인: 한국석유공사 오피넷(www.opinet.co.kr)에서 실시간 확인 가능",
          "고속도로 연비는 시내 대비 10~30% 높게 나옵니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "하이패스 유류세 환급은 어떻게 받나요?", a: "화물차·택시·장애인 차량 등 일부 대상에게 유류세 환급 제도가 있습니다. 국토부·한국도로공사 사이트에서 신청 대상을 확인하세요." },
          { q: "에너지 효율이 가장 높은 주행 방식은?", a: "정속 주행(급가속·급감속 자제), 타이어 공기압 유지, 에어컨 적절히 사용, 불필요한 공회전 삼가는 것이 효과적입니다." },
        ]}
      />
    </>
  );
}

function WithholdingTaxGuide() {
  return (
    <>
      <GuideH2>원천징수 계산기란?</GuideH2>
      <GuideP>
        프리랜서·강사료·원고료 등 사업소득·기타소득에 적용되는 원천징수세를 계산하는 도구입니다.
        지급자가 원천징수 후 지급하는 세액을 미리 확인할 수 있습니다.
      </GuideP>
      <GuideTable
        headers={["소득 유형", "원천징수율"]}
        rows={[
          ["사업소득 (3.3%)", "소득세 3% + 지방소득세 0.3% = 3.3%"],
          ["기타소득 (8.8%)", "소득세 8% + 지방소득세 0.8% = 8.8%"],
          ["이자소득", "15.4%"],
          ["배당소득", "15.4%"],
        ]}
      />
      <GuideFormulaBox>
        실수령액 = 지급액 × (1 − 원천징수율){"\n"}
        예: 100만 원 강사료 → 실수령 967,000원 (3.3% 징수)
      </GuideFormulaBox>
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "3.3%로 징수당하면 세금 처리가 끝나는 건가요?", a: "아닙니다. 사업소득으로 신고 시 연말 종합소득세 신고에서 정산됩니다. 필요 경비를 인정받으면 환급을 받을 수 있습니다." },
          { q: "기타소득 필요 경비 공제율은?", a: "기타소득은 지급 금액의 60%를 필요 경비로 인정하는 경우가 많아, 실질 과세 소득은 40%에 해당합니다." },
        ]}
      />
    </>
  );
}

function CharCountGuide() {
  return (
    <>
      <GuideH2>글자수 계산기란?</GuideH2>
      <GuideP>
        텍스트를 입력하면 한글·영문·공백 포함/제외 글자 수, 단어 수, 줄 수를 실시간으로 계산하는 도구입니다.
        SNS 게시물, 이력서, 논문, 생기부 작성 시 한도 관리에 활용하세요.
      </GuideP>
      <GuideTable
        headers={["플랫폼", "글자 수 제한 (참고)"]}
        rows={[
          ["트위터(X)", "140자 (2바이트 문자 기준)"],
          ["인스타그램", "2,200자"],
          ["카카오톡 상태", "60자"],
          ["이메일 제목", "약 50~60자 권장"],
          ["NEIS 생기부 세특", "500자 이내"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "공백도 글자 수에 포함되나요?", a: "플랫폼·규정마다 다릅니다. 이 계산기는 공백 포함/제외 모드를 각각 제공하니 필요에 맞게 선택하세요." },
          { q: "한글 1자 = 영문 1자인가요?", a: "글자 수 카운트 기준으로는 같습니다. 다만 바이트 크기는 한글이 UTF-8 기준 3바이트, 영문이 1바이트로 다릅니다." },
        ]}
      />
    </>
  );
}

function LunarGuide() {
  return (
    <>
      <GuideH2>음력 변환 계산기란?</GuideH2>
      <GuideP>
        양력(그레고리력)과 음력 날짜를 상호 변환하는 도구입니다.
        명절·제사·생일(음력)·사주 등 한국의 전통 행사에서 음력이 자주 사용됩니다.
      </GuideP>
      <GuideBulletList
        items={[
          "음력은 달의 주기(약 29.53일)를 기준으로 하는 태음력입니다.",
          "음력과 양력의 차이로 인해 매년 음력 명절 양력 날짜가 달라집니다.",
          "윤달: 약 2~3년마다 한 달을 추가해 태양력과 맞춥니다.",
          "음력 1월 1일 = 설날(양력 1월 말~2월 초), 음력 8월 15일 = 추석",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "음력 생일과 양력 생일 중 뭐가 맞나요?", a: "어느 쪽이 '맞다'는 없습니다. 법적 생년월일은 출생신고 기준(양력)이며, 음력 생일은 가족·문화적 관습으로 챙기는 경우가 많습니다." },
          { q: "윤달이 있는 해에 음력 생일은 어떻게 되나요?", a: "윤달에 해당하는 생일은 해당 연도에만 두 번 맞이하는 경우가 생길 수 있습니다. 일반적으로 '진달'(정규달)을 기준으로 챙깁니다." },
        ]}
      />
    </>
  );
}

function DdayGuide() {
  return (
    <>
      <GuideH2>D-Day 계산기란?</GuideH2>
      <GuideP>
        목표일까지 남은 날수(D-Day)와 경과 날수를 계산하는 도구입니다.
        수능·시험·결혼기념일·계약 만료일·전역일 등 중요한 날짜를 카운트다운할 때 활용하세요.
      </GuideP>
      <GuideBulletList
        items={[
          "D-Day 당일 = D-0 또는 D-Day로 표기",
          "D+n: 특정일로부터 n일 경과",
          "D-n: 특정일까지 n일 남음",
          "영업일 계산이 필요하면 공휴일·주말을 별도로 차감하세요.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "시험 날 기준으로 D-Day를 설정해야 하나요, 전날인가요?", a: "관례적으로 시험·이벤트 당일을 D-Day로 설정합니다. 그 전날은 D-1, 다음날은 D+1입니다." },
          { q: "결혼 100일이나 200일은 어떻게 계산하나요?", a: "결혼 당일을 1일로 계산하는 경우(한국 전통)와 0일로 계산하는 경우가 있습니다. 계산 기준을 맞춰 사용하세요." },
        ]}
      />
    </>
  );
}

function ElectricityGuide() {
  return (
    <>
      <GuideH2>전기요금 계산기란?</GuideH2>
      <GuideP>
        월간 전력 사용량(kWh)을 입력해 한국전력 누진세 요금 체계 기준으로 예상 전기요금을 계산하는 도구입니다.
      </GuideP>
      <GuideH3>주택용 저압 누진 요금 (2024년 기준, 참고)</GuideH3>
      <GuideTable
        headers={["사용 구간", "기본요금", "단가 (kWh)"]}
        rows={[
          ["200kWh 이하", "910원", "120원"],
          ["201~400kWh", "1,600원", "214.6원"],
          ["400kWh 초과", "7,300원", "307.3원"],
        ]}
      />
      <GuideBulletList
        items={[
          "실제 요금: 기본요금 + 전력량요금 + 기후환경요금 + 부가가치세(10%) + 전력산업기반기금(3.7%)",
          "여름·겨울 냉난방 사용 시 400kWh 초과 구간 주의",
          "최신 요금은 한국전력 홈페이지(kepco.co.kr)에서 확인하세요.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "에어컨을 하루 8시간 쓰면 전기요금이 얼마 오르나요?", a: "1.5HP(1.2kW) 에어컨 기준: 1.2kW × 8시간 = 9.6kWh/일. 한 달이면 약 288kWh 추가로, 요금 구간에 따라 3~9만 원 수준이 됩니다." },
          { q: "전기요금이 갑자기 올랐을 때 원인은?", a: "누진제로 인해 사용량이 조금 늘어도 단가가 크게 올라갈 수 있습니다. 에어컨·전기온수기·전기히터 등 고소비 가전 사용량을 확인하세요." },
        ]}
      />
    </>
  );
}

function DutchPayGuide() {
  return (
    <>
      <GuideH2>더치페이 계산기란?</GuideH2>
      <GuideP>
        총 금액을 인원수로 나눠 1인당 부담액을 계산하거나, 각자 다르게 먹은 금액에 따라 맞춤 정산을
        처리하는 도구입니다. 모임 정산을 빠르게 처리할 수 있습니다.
      </GuideP>
      <GuideBulletList
        items={[
          "균등 분배: 총액 ÷ 인원 (1인당 동일)",
          "항목별 정산: 각자 주문한 금액 + 공통 비용/n",
          "반올림 처리: 원 단위 나머지는 한 명이 더 내는 방식으로 처리",
          "팁 포함 정산도 함께 계산 가능",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "가장 공정한 정산 방법은?", a: "각자 주문 금액에 비례 정산이 가장 공정하지만, 메뉴 단가 차이가 크지 않다면 균등 분배가 편리합니다." },
          { q: "카카오페이·토스 정산 기능과 어떻게 다른가요?", a: "앱 정산은 계좌 이체까지 연결되어 편리합니다. 이 계산기는 금액 계산에 특화된 도구로, 앱 전송 전 금액을 먼저 확인하는 데 유용합니다." },
        ]}
      />
    </>
  );
}

function TipGuide() {
  return (
    <>
      <GuideH2>팁 계산기란?</GuideH2>
      <GuideP>
        음식 금액과 팁 비율(%)을 입력해 팁 금액과 총 결제 금액을 계산하는 도구입니다.
        미국·유럽 여행 시 레스토랑 팁 계산에 필수적으로 활용하세요.
      </GuideP>
      <GuideTable
        headers={["국가/상황", "팁 관습 (참고)"]}
        rows={[
          ["미국 레스토랑", "15~20% (서비스에 따라)"],
          ["미국 바·카페", "10~15% 또는 없음"],
          ["영국", "10~12.5% (선택)"],
          ["프랑스", "10% 정도 (선택)"],
          ["일본·한국", "팁 문화 없음"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "팁을 안 주면 안 되나요?", a: "미국에서 팁은 사실상 서비스 종사자의 임금 보충 수단이므로, 서비스가 정상적이라면 15% 이상을 관례로 기대합니다. 서비스가 매우 나쁠 경우 줄이는 것은 의사 표현으로 인정됩니다." },
          { q: "세금 전 금액으로 팁을 계산하나요, 세금 후 금액으로?", a: "미국에서 팁은 세금 제외 음식 금액(pre-tax)을 기준으로 계산하는 것이 일반적이지만, 세금 포함 금액을 기준으로 해도 됩니다." },
        ]}
      />
    </>
  );
}

function FortyNineGuide() {
  return (
    <>
      <GuideH2>49재 날짜 계산기란?</GuideH2>
      <GuideP>
        불교 의식에서 사망일 이후 7일 단위로 치르는 7번의 재(齋) 날짜와 49일째 날을 계산하는 도구입니다.
        기독교의 100일 추모, 제삿날 계산도 함께 활용할 수 있습니다.
      </GuideP>
      <GuideTable
        headers={["재", "사망일로부터"]}
        rows={[
          ["초재(初齋)", "7일째"],
          ["이재(二齋)", "14일째"],
          ["삼재(三齋)", "21일째"],
          ["사재(四齋)", "28일째"],
          ["오재(五齋)", "35일째"],
          ["육재(六齋)", "42일째"],
          ["칠재(七齋, 49재)", "49일째"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "49재는 사망 당일을 1일로 세나요, 다음 날을 1일로 세나요?", a: "전통적으로 사망 당일을 1일로 계산하는 경우가 많습니다. 지역·종파·가족 관습에 따라 다를 수 있으니 확인하세요." },
          { q: "100일 탈상은 어떻게 계산하나요?", a: "사망일로부터 100일째 날을 탈상일로 보며, 사망 당일 포함 여부는 계산기에서 선택 가능합니다." },
        ]}
      />
    </>
  );
}

function TimerGuide() {
  return (
    <>
      <GuideH2>타이머·스톱워치 계산기란?</GuideH2>
      <GuideP>
        카운트다운 타이머와 스톱워치 기능을 제공하는 도구입니다.
        공부·운동·요리·발표 연습 등 시간 관리가 필요한 모든 상황에 활용하세요.
      </GuideP>
      <GuideBulletList
        items={[
          "포모도로 기법: 25분 집중 + 5분 휴식 반복으로 생산성 향상",
          "인터벌 트레이닝: 운동 30초 + 휴식 10초 반복 설정",
          "발표 시간 체크: 미리 원고를 읽으며 실제 발표 시간 측정",
          "요리 타이머: 여러 음식의 조리 시간을 동시에 관리",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "포모도로 기법이 정말 효과적인가요?", a: "짧은 집중과 휴식을 반복하는 방식은 주의력 유지에 도움이 된다는 연구들이 있습니다. 개인 집중 패턴에 따라 25분이 짧거나 길 수 있어, 시간을 조정해 맞춰보세요." },
          { q: "화면을 꺼도 타이머가 작동하나요?", a: "모바일 브라우저에서는 화면이 꺼지면 타이머 정확도가 떨어질 수 있습니다. 중요한 타이밍에는 기기 내장 타이머 앱을 병행 사용하세요." },
        ]}
      />
    </>
  );
}

function CarTaxGuide() {
  return (
    <>
      <GuideH2>자동차세 계산기란?</GuideH2>
      <GuideP>
        차종·배기량을 입력해 연간 자동차세 예상액을 계산하는 도구입니다.
        자동차세는 매년 6월·12월에 부과되며, 연납(1월 선납) 시 최대 9.15% 할인됩니다.
      </GuideP>
      <GuideH3>승용차 자동차세 기준 (참고)</GuideH3>
      <GuideTable
        headers={["배기량", "세율 (cc당)"]}
        rows={[
          ["1,000cc 이하", "80원/cc"],
          ["1,001~1,600cc", "140원/cc"],
          ["1,601cc 이상", "200원/cc"],
        ]}
      />
      <GuideBulletList
        items={[
          "연납 할인: 1월 연납 9.15%, 3월 7.5%, 6월 5%, 9월 2.5%",
          "전기차·수소차: 배기량 없음 → 연간 13만 원 정액",
          "영업용 차량은 비영업용보다 낮은 세율 적용",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "차령 공제가 있나요?", a: "차령(차 나이)에 따라 최대 50%까지 세액이 경감됩니다. 3년 이상부터 5%씩 감소해 12년 이상은 최저 세율이 적용됩니다." },
          { q: "자동차세 연납은 언제 신청하나요?", a: "1월 중에 위택스(wetax.go.kr) 또는 해당 지방자치단체에 신청하면 가장 높은 할인율(9.15%)을 받을 수 있습니다." },
        ]}
      />
    </>
  );
}

// ════════════════════════════════════════════════
// 스포츠 — 개별 가이드 (sports-001 ~ sports-006)
// ════════════════════════════════════════════════

function BattingAvgGuide() {
  return (
    <>
      <GuideH2>타율(BA) 계산기란?</GuideH2>
      <GuideP>
        야구에서 타자의 안타 비율을 나타내는 타율(Batting Average)을 계산하는 도구입니다.
        안타 수를 타수로 나눈 값으로, 타자 능력을 평가하는 기본 지표입니다.
      </GuideP>
      <GuideFormulaBox>타율(BA) = 안타 수 ÷ 타수</GuideFormulaBox>
      <GuideTable
        headers={["타율", "평가 (KBO·MLB 기준)"]}
        rows={[
          [".300 이상", "우수 (3할 타자)"],
          [".270~.299", "평균 이상"],
          [".250~.269", "평균"],
          [".250 미만", "평균 이하"],
        ]}
      />
      <GuideBulletList
        items={[
          "타수: 타석에서 볼넷·사구·희생타·방해 출루 등은 제외",
          "현대 야구에서는 타율보다 출루율(OBP)·장타율(SLG)을 중시하는 추세",
          "OPS = OBP + SLG: 종합적인 타자 능력 지표",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "4타수 4안타면 타율이 1.000인가요?", a: "그 경기만 기준으로는 맞습니다. 시즌 타율은 전체 타수와 안타를 누적해 계산합니다." },
          { q: "타율이 높은 것이 무조건 좋은 타자인가요?", a: "타율은 안타 비율만 보므로 홈런·볼넷을 반영하지 않습니다. OPS나 wRC+, WAR 등 종합 지표가 더 정확한 평가 기준입니다." },
        ]}
      />
    </>
  );
}

function RunningPaceGuide() {
  return (
    <>
      <GuideH2>러닝 페이스 계산기란?</GuideH2>
      <GuideP>
        달리기 거리와 시간을 입력해 분/km 또는 분/마일 페이스를 계산하거나,
        목표 페이스로 특정 거리를 완주할 때 걸리는 시간을 예측하는 도구입니다.
      </GuideP>
      <GuideFormulaBox>
        페이스(분/km) = 총 시간(분) ÷ 거리(km){"\n"}
        완주 예상 시간 = 페이스 × 거리
      </GuideFormulaBox>
      <GuideTable
        headers={["페이스 (분/km)", "5km 완주 시간", "10km 완주 시간", "하프 마라톤"]}
        rows={[
          ["4:00", "20:00", "40:00", "1:24:15"],
          ["5:00", "25:00", "50:00", "1:45:20"],
          ["6:00", "30:00", "1:00:00", "2:06:25"],
          ["7:00", "35:00", "1:10:00", "2:27:30"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "서브-4 (마라톤 4시간 완주)를 위한 페이스는?", a: "42.195km ÷ 240분 ≈ 5분 41초/km입니다. 실제로는 초반 페이스 여유를 두고 후반에 유지하는 전략이 중요합니다." },
          { q: "달리기 초보자의 적정 페이스는?", a: "대화를 할 수 있는 속도(편안한 대화 페이스)가 적정합니다. 보통 6:30~8:00 min/km 수준에서 시작해 점진적으로 단축하세요." },
        ]}
      />
    </>
  );
}

function VdotGuide() {
  return (
    <>
      <GuideH2>VDOT 계산기란?</GuideH2>
      <GuideP>
        Jack Daniels의 달리기 공식을 기반으로 현재 기록에서 VDOT(최대 산소 섭취량 추정치)을 계산하고,
        다양한 목표 거리의 예상 기록과 훈련 페이스를 제안하는 도구입니다.
      </GuideP>
      <GuideTable
        headers={["VDOT", "마라톤 예상 기록 (참고)"]}
        rows={[
          ["40", "약 4:29:30"],
          ["45", "약 3:49:45"],
          ["50", "약 3:17:29"],
          ["55", "약 2:52:14"],
          ["60", "약 2:32:35"],
        ]}
      />
      <GuideBulletList
        items={[
          "Easy 페이스(회복 달리기): VDOT 기반 E존 페이스",
          "템포 페이스(젖산 역치): T존 페이스",
          "인터벌 페이스: I존 페이스",
          "반복 훈련: R존 페이스",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "VDOT이 실제 VO2max와 다른 이유는?", a: "VDOT은 레이스 기록으로 추정한 실용적 지표로, 실제 VO2max 검사(마스크 착용 최대 운동 테스트)보다 접근하기 쉽습니다." },
          { q: "VDOT이 올라가면 훈련 페이스를 바꿔야 하나요?", a: "네, 기록이 향상되면 VDOT을 재계산해 훈련 페이스를 갱신해야 효과적인 훈련이 됩니다." },
        ]}
      />
    </>
  );
}

function EraGuide() {
  return (
    <>
      <GuideH2>평균자책점(ERA) 계산기란?</GuideH2>
      <GuideP>
        야구 투수의 9이닝당 자책점 평균인 평균자책점(ERA, Earned Run Average)을 계산하는 도구입니다.
        투수의 수비 무관 실점 능력을 평가하는 핵심 지표입니다.
      </GuideP>
      <GuideFormulaBox>ERA = (자책점 × 9) ÷ 투구 이닝 수</GuideFormulaBox>
      <GuideTable
        headers={["ERA", "평가 (KBO·MLB 기준)"]}
        rows={[
          ["2.00 미만", "에이스급 (매우 우수)"],
          ["2.00~3.50", "우수"],
          ["3.50~4.50", "평균"],
          ["4.50~5.50", "평균 이하"],
          ["5.50 이상", "기용 재고 수준"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "자책점과 실점의 차이는?", a: "실점은 투수가 허용한 모든 점수, 자책점은 실책 없이 투수 본인의 책임으로 발생한 점수입니다. ERA는 자책점만 사용합니다." },
          { q: "ERA만으로 투수 능력을 평가하기 어려운 이유는?", a: "구장 효과, 수비력, 운(BABIP)에 영향을 받습니다. FIP(수비 무관 평균자책점)가 더 정확한 투수 능력 지표로 사용됩니다." },
        ]}
      />
    </>
  );
}

function BowlingGuide() {
  return (
    <>
      <GuideH2>볼링 점수 계산기란?</GuideH2>
      <GuideP>
        10프레임 볼링 경기의 핀 수를 입력해 자동으로 점수를 계산하는 도구입니다.
        스트라이크·스페어의 보너스 점수 계산을 자동으로 처리합니다.
      </GuideP>
      <GuideTable
        headers={["결과", "점수 규칙"]}
        rows={[
          ["스트라이크 (X)", "10 + 다음 두 투구 합산 보너스"],
          ["스페어 (/)", "10 + 다음 한 투구 보너스"],
          ["오픈 프레임", "두 투구 합산만 점수"],
          ["10프레임 스트라이크", "추가 2구 허용"],
          ["10프레임 스페어", "추가 1구 허용"],
          ["퍼펙트 게임", "12연속 스트라이크 = 300점"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "모든 프레임 스페어면 최고 몇 점인가요?", a: "1구에 모두 1개씩 맞히고 스페어 처리 시 최대 190점입니다. 처음 1구에 더 많이 맞힐수록 점수가 올라갑니다." },
          { q: "볼링 에이버리지는 어떻게 계산하나요?", a: "에이버리지 = 총 점수 ÷ 게임 수. 주기적으로 업데이트하며 핸디캡 계산에도 사용됩니다." },
        ]}
      />
    </>
  );
}

function CurlingGuide() {
  return (
    <>
      <GuideH2>컬링 점수 계산기란?</GuideH2>
      <GuideP>
        컬링 엔드(end)별 득점을 입력해 경기 총점을 기록하고 승리 조건을 확인하는 도구입니다.
        컬링의 독특한 득점 방식인 '하우스 내 가장 가까운 돌' 기준을 이해하는 데도 도움이 됩니다.
      </GuideP>
      <GuideBulletList
        items={[
          "득점: 엔드 종료 시 하우스 중앙에 가장 가까운 돌을 가진 팀이 득점",
          "점수: 상대방 가장 가까운 돌보다 더 가까운 자기 팀 돌의 수만큼 득점",
          "표준 경기: 10엔드 (올림픽·세계선수권 기준)",
          "블랭크 엔드: 어느 팀도 득점하지 못한 엔드 (해머 전략)",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "해머(마지막 투구권)를 가진 팀이 유리한가요?", a: "해머는 전략적으로 매우 유리합니다. 블랭크 엔드로 해머를 유지하거나, 대량 득점을 노리는 전략이 중요합니다." },
          { q: "컬링에서 스위핑은 왜 하나요?", a: "스위핑으로 얼음을 마찰열로 녹여 돌의 속도와 방향을 조절합니다. 돌이 더 멀리 가거나 덜 휘도록 조절할 수 있습니다." },
        ]}
      />
    </>
  );
}

// ════════════════════════════════════════════════
// 군대 — 개별 가이드 (military-001 ~ military-004)
// ════════════════════════════════════════════════

function MilSavingsGuide() {
  return (
    <>
      <GuideH2>군적금 계산기란?</GuideH2>
      <GuideP>
        장병내일준비적금(군적금)의 월 납입액과 정부 지원 이자 혜택을 반영해 전역 시 받을 수 있는
        예상 금액을 계산하는 도구입니다.
      </GuideP>
      <GuideH3>장병내일준비적금 주요 내용 (2024년 기준, 참고)</GuideH3>
      <GuideBulletList
        items={[
          "가입 자격: 현역·사회복무 병사 (군 복무 중)",
          "납입 한도: 월 최대 55만 원",
          "금리: 기본 금리 5% + 정부 기여금 (납입액에 따라)",
          "비과세: 이자 소득세 면제",
          "정부 매칭 지원금: 납입액 1원당 추가 지원 (자세한 사항은 병무청·금융기관 확인)",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "군적금은 어느 은행에서 가입하나요?", a: "NH농협, 신한, 우리, 하나, 국민, IBK기업은행 등에서 가입 가능합니다. 금리·혜택이 조금씩 다르니 비교 후 선택하세요." },
          { q: "전역 전에 해지하면 불이익이 있나요?", a: "중도 해지 시 정부 지원 이자 혜택이 전부 또는 일부 소멸될 수 있습니다. 만기(전역 시) 해지를 권장합니다." },
        ]}
      />
    </>
  );
}

function AirForceGuide() {
  return (
    <>
      <GuideH2>공군 전역일 계산기란?</GuideH2>
      <GuideP>
        입대일을 기준으로 공군 의무 복무 기간(21개월)을 적용해 예상 전역일과 남은 날수를
        계산하는 도구입니다.
      </GuideP>
      <GuideH3>군별 의무 복무 기간 (2024년 기준)</GuideH3>
      <GuideTable
        headers={["군종", "복무 기간"]}
        rows={[
          ["육군·해병대", "18개월"],
          ["해군", "20개월"],
          ["공군", "21개월"],
          ["사회복무요원", "21개월"],
          ["공중보건의·공익법무관", "36개월"],
        ]}
      />
      <GuideBulletList
        items={[
          "전역일은 입대일 + 복무 기간으로 계산됩니다 (말일·공휴일 조정 있음).",
          "조기 전역·복무 기간 단축 정책은 법령에 따라 변경될 수 있습니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "전역일이 일요일이면 어떻게 되나요?", a: "전역일이 주말·공휴일인 경우 통상 전날(금요일 등)에 전역 처리됩니다. 부대별로 다를 수 있으니 소속 부대에 확인하세요." },
          { q: "공군 복무 중 휴가는 얼마나 받나요?", a: "연가 21일 기준으로 부대 사정에 따라 다르며, 포상 휴가·외출·외박이 추가됩니다. 자세한 내용은 소속 부대 규정을 확인하세요." },
        ]}
      />
    </>
  );
}

function MarineGuide() {
  return (
    <>
      <GuideH2>해병대 전역일 계산기란?</GuideH2>
      <GuideP>
        해병대 입대일을 기준으로 의무 복무 기간(18개월)을 적용해 예상 전역일과 남은 날수를
        계산하는 도구입니다.
      </GuideP>
      <GuideBulletList
        items={[
          "해병대 의무 복무: 18개월 (육군과 동일)",
          "해병대 지원 입대 → 육군과 달리 특수 훈련 과정 포함",
          "교육 훈련 기간(훈련소)도 복무 기간에 포함됩니다.",
          "전역일은 실제 입대일 기준으로 계산됩니다 (훈련소 입소일).",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "해병대 훈련소는 얼마나 걸리나요?", a: "해병대 훈련소 교육 기간은 약 7~8주(기본 군사훈련 + 해병대 특성화 교육)입니다. 이 기간도 전체 복무 기간에 포함됩니다." },
          { q: "해병대는 육군에 비해 복무가 어렵나요?", a: "훈련 강도는 개인 경험에 따라 다릅니다. 해병대만의 부대 문화와 특수 임무(상륙작전 등)가 있어 다른 군과 다른 경험을 합니다." },
        ]}
      />
    </>
  );
}

function DischargeGuide() {
  return (
    <>
      <GuideH2>전역 후 경과일 계산기란?</GuideH2>
      <GuideP>
        전역일을 기준으로 현재까지 경과한 날수와 예비군 훈련 대상 기간을 확인하는 도구입니다.
        전역 후 취업·복학·경력 계산에도 활용할 수 있습니다.
      </GuideP>
      <GuideTable
        headers={["경과 기간", "예비군 상태 (참고)"]}
        rows={[
          ["전역 후 1~6년", "동원 예비군 (전방 부대 배치 훈련)"],
          ["전역 후 7~8년", "지역 예비군 (지역 단위 훈련)"],
          ["전역 후 8년 이후", "예비군 훈련 면제"],
        ]}
      />
      <GuideBulletList
        items={[
          "예비군 훈련 일정은 거주지 예비군 중대에서 통보",
          "훈련 불참 시 과태료 부과 가능",
          "해외 체류·질병 등 정당한 사유로 연기 신청 가능",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "예비군 훈련은 꼭 참가해야 하나요?", a: "예비군 훈련은 병역법상 의무입니다. 정당한 사유 없이 불참 시 과태료(최대 200만 원)가 부과될 수 있습니다." },
          { q: "전역 후 복학하면 예비군 훈련을 어떻게 받나요?", a: "대학 복학 시 학교 예비군 중대를 통해 훈련받으며, 학기 중 훈련 일정 조정이 가능합니다." },
        ]}
      />
    </>
  );
}

// ════════════════════════════════════════════════
// 보안 — 개별 가이드 (security-001 ~ security-004)
// ════════════════════════════════════════════════

function PasswordGuide() {
  return (
    <>
      <GuideH2>비밀번호 생성기란?</GuideH2>
      <GuideP>
        대·소문자·숫자·특수문자를 조합한 무작위 강력 비밀번호를 생성하는 도구입니다.
        사이트마다 다른 고유한 비밀번호를 사용해 계정 보안을 강화하세요.
      </GuideP>
      <GuideTable
        headers={["비밀번호 길이", "강도", "무차별 대입 시간 (참고)"]}
        rows={[
          ["8자 (숫자+소문자)", "약함", "약 2시간~수일"],
          ["12자 (혼합)", "보통", "수백 년"],
          ["16자 (모든 문자)", "강함", "수천억 년"],
          ["20자 이상 (모든 문자)", "매우 강함", "사실상 불가"],
        ]}
      />
      <GuideBulletList
        items={[
          "비밀번호 재사용 금지: 한 사이트 유출 시 다른 사이트도 위험해집니다.",
          "비밀번호 관리자(LastPass, Bitwarden 등) 활용을 권장합니다.",
          "2단계 인증(2FA)과 함께 사용하면 보안이 크게 강화됩니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "복잡한 비밀번호를 기억하기 어려운데 어떻게 하나요?", a: "비밀번호 관리자(Password Manager)를 사용하면 강력한 비밀번호를 기억 부담 없이 사용할 수 있습니다. 마스터 비밀번호 하나만 기억하면 됩니다." },
          { q: "내 비밀번호가 유출됐는지 확인할 수 있나요?", a: "Have I Been Pwned(haveibeenpwned.com)에서 이메일 또는 비밀번호 유출 여부를 확인할 수 있습니다." },
        ]}
      />
    </>
  );
}

function HashGuide() {
  return (
    <>
      <GuideH2>해시 생성기란?</GuideH2>
      <GuideP>
        입력 텍스트를 MD5·SHA-1·SHA-256·SHA-512 등 해시 알고리즘으로 변환하는 도구입니다.
        파일 무결성 확인, 비밀번호 저장, 디지털 서명의 기초 원리를 이해하는 데 활용하세요.
      </GuideP>
      <GuideTable
        headers={["알고리즘", "출력 길이", "보안 수준"]}
        rows={[
          ["MD5", "128비트 (32자 hex)", "보안 취약 — 무결성 확인 전용"],
          ["SHA-1", "160비트 (40자)", "보안 취약 — 사용 지양"],
          ["SHA-256", "256비트 (64자)", "현재 표준 (안전)"],
          ["SHA-512", "512비트 (128자)", "매우 안전"],
          ["bcrypt", "가변 (라운드 조절)", "비밀번호 저장 전용"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "해시는 복호화할 수 있나요?", a: "단방향 함수라 원칙적으로 복호화가 불가능합니다. 하지만 레인보우 테이블(사전 계산 해시 목록)을 이용한 역추적은 가능하므로 비밀번호에는 솔트(salt)를 추가해야 합니다." },
          { q: "파일 다운로드 시 MD5 체크섬은 왜 확인하나요?", a: "다운로드 중 파일이 손상됐거나 악성 코드가 삽입됐는지 확인하기 위해서입니다. 공식 MD5 값과 다르면 파일을 신뢰하지 마세요." },
        ]}
      />
    </>
  );
}

function RsaGuide() {
  return (
    <>
      <GuideH2>RSA 키 생성기란?</GuideH2>
      <GuideP>
        RSA 공개키 암호화의 원리를 체험하고, 간단한 RSA 키 쌍(공개키·개인키)을 생성하는 도구입니다.
        실제 보안 통신에는 전문 라이브러리를 사용하고, 이 도구는 학습 목적으로 활용하세요.
      </GuideP>
      <GuideBulletList
        items={[
          "RSA 원리: 두 소수의 곱은 쉽게 만들지만, 결과를 분해(소인수분해)하기는 매우 어렵다.",
          "공개키: 암호화에 사용 (누구나 알아도 됨)",
          "개인키: 복호화에 사용 (절대 공개 금지)",
          "키 길이: 최소 2048비트 권장 (2024년 기준), 4096비트가 더 안전",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "RSA 키는 어디에 저장해야 하나요?", a: "개인키는 절대로 외부에 노출하지 않고, 암호화된 안전한 저장소에 보관하세요. 유출 시 즉시 키를 폐기하고 새 키를 생성하세요." },
          { q: "양자 컴퓨터가 RSA를 깰 수 있나요?", a: "충분히 강력한 양자 컴퓨터(Shor 알고리즘)는 RSA를 깨뜨릴 수 있습니다. 이에 대비해 양자 내성 암호화(PQC) 표준이 개발 중입니다." },
        ]}
      />
    </>
  );
}

function CaesarGuide() {
  return (
    <>
      <GuideH2>시저 암호 계산기란?</GuideH2>
      <GuideP>
        알파벳을 일정한 수만큼 이동시키는 고전 암호화 방식인 시저 암호(Caesar Cipher)를 암호화·복호화하는 도구입니다.
        암호학의 기초 개념을 이해하는 데 활용하세요.
      </GuideP>
      <GuideFormulaBox>
        암호화: C = (P + shift) mod 26{"\n"}
        복호화: P = (C − shift + 26) mod 26
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "shift=3: A→D, B→E, ... Z→C (줄리어스 시저가 사용한 값)",
          "ROT13: shift=13으로 암호화와 복호화가 동일",
          "25가지 키만 있어 현대에는 전혀 안전하지 않음 (전수 조사 가능)",
          "주파수 분석으로도 쉽게 해독 가능",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "시저 암호는 실제로 사용되나요?", a: "현대 보안에는 전혀 사용되지 않습니다. 역사적·교육적 의미가 있으며, 게임 퍼즐이나 어린이 암호 놀이에 사용됩니다." },
          { q: "ROT13이 온라인에서 쓰이는 경우가 있나요?", a: "유닉스·포럼 등에서 스포일러·음란물 텍스트를 가릴 때 사용됐습니다. 암호화 목적이 아닌 '가리기' 용도입니다." },
        ]}
      />
    </>
  );
}

// ════════════════════════════════════════════════
// 개발 — 개별 가이드 (dev-001 ~ dev-011)
// ════════════════════════════════════════════════

function UuidGuide() {
  return (
    <>
      <GuideH2>UUID 생성기란?</GuideH2>
      <GuideP>
        범용 고유 식별자(UUID, Universally Unique Identifier)를 생성하는 도구입니다.
        데이터베이스 레코드 ID, API 요청 추적, 파일 이름 고유화에 활용됩니다.
      </GuideP>
      <GuideBulletList
        items={[
          "UUID v4: 128비트 무작위 값, 형식: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
          "충돌 확률: 10억 개 생성 시 중복 확률 ≈ 10⁻²⁷ (사실상 없음)",
          "UUID v1: 타임스탬프 + MAC 주소 기반 (프라이버시 주의)",
          "UUID v7: 정렬 가능한 최신 표준 (2023~)",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "UUID를 DB 기본 키로 써도 되나요?", a: "UUID v4는 무작위성으로 B-tree 인덱스 성능을 저하시킬 수 있습니다. 정렬 가능한 UUID v7 또는 ULID 사용을 고려하세요." },
          { q: "UUID와 GUID의 차이는?", a: "사실상 같습니다. GUID는 Microsoft에서 사용하는 용어이고, UUID는 오픈 표준(RFC 4122) 용어입니다." },
        ]}
      />
    </>
  );
}

function ApiKeyGuide() {
  return (
    <>
      <GuideH2>API 키 생성기란?</GuideH2>
      <GuideP>
        무작위 고강도 API 키나 비밀 토큰을 생성하는 도구입니다.
        웹 서비스 인증, 환경 변수용 비밀키 생성에 활용하세요.
      </GuideP>
      <GuideBulletList
        items={[
          "권장 길이: 32~64바이트 (256~512비트) 이상",
          "Hex 형식: 0-9, a-f 문자만 사용 (URL-safe)",
          "Base64 형식: 0-9, a-z, A-Z, +, / 사용",
          "URL-safe Base64: +, /를 -, _로 대체",
          "절대로 코드에 하드코딩하지 마세요 — .env 파일 또는 시크릿 관리 서비스 사용",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "API 키를 GitHub에 올리면 어떻게 되나요?", a: "실시간으로 봇이 스캔해 악의적으로 사용될 수 있습니다. 유출 즉시 해당 키를 폐기하고 새 키를 발급하세요. GitHub Secret Scanning이 자동 탐지하기도 합니다." },
          { q: "API 키와 JWT 토큰의 차이는?", a: "API 키는 단순한 문자열 자격증명이고, JWT는 페이로드(사용자 정보 등)를 포함한 서명된 토큰입니다. JWT는 상태 비저장(stateless) 인증에 적합합니다." },
        ]}
      />
    </>
  );
}

function SubnetGuide() {
  return (
    <>
      <GuideH2>서브넷 계산기란?</GuideH2>
      <GuideP>
        IP 주소와 서브넷 마스크(CIDR 표기)를 입력해 네트워크 주소·브로드캐스트 주소·호스트 범위·
        사용 가능한 IP 수를 계산하는 도구입니다.
      </GuideP>
      <GuideTable
        headers={["CIDR", "서브넷 마스크", "가용 호스트 수"]}
        rows={[
          ["/24", "255.255.255.0", "254개"],
          ["/25", "255.255.255.128", "126개"],
          ["/26", "255.255.255.192", "62개"],
          ["/28", "255.255.255.240", "14개"],
          ["/30", "255.255.255.252", "2개"],
        ]}
      />
      <GuideBulletList
        items={[
          "네트워크 주소: 첫 번째 주소 (사용 불가)",
          "브로드캐스트 주소: 마지막 주소 (사용 불가)",
          "가용 IP = 2^(32-CIDR) − 2",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "/24 서브넷에 255개 호스트를 연결할 수 없는 이유는?", a: "네트워크 주소(x.x.x.0)와 브로드캐스트(x.x.x.255) 2개를 제외하면 254개만 사용 가능합니다." },
          { q: "192.168.0.0/16과 10.0.0.0/8은 왜 사설 IP인가요?", a: "RFC 1918에서 사설 네트워크용으로 예약된 주소 범위입니다. 인터넷에서 직접 라우팅되지 않고 NAT를 통해 공인 IP로 변환됩니다." },
        ]}
      />
    </>
  );
}

function Base64Guide() {
  return (
    <>
      <GuideH2>Base64 인코더/디코더란?</GuideH2>
      <GuideP>
        이진 데이터나 텍스트를 Base64 형식으로 인코딩하거나 디코딩하는 도구입니다.
        이메일 첨부, JWT 토큰, 이미지 데이터 URL, API 인증 헤더에서 자주 사용됩니다.
      </GuideP>
      <GuideBulletList
        items={[
          "Base64 문자셋: A-Z (26), a-z (26), 0-9 (10), +, / = 64자",
          "3바이트(24비트) → 4개의 Base64 문자로 변환",
          "크기 오버헤드: 원본보다 약 33% 커짐",
          "URL-safe Base64: +→-, /→_ 치환 (JWT 등에서 사용)",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "Base64가 암호화인가요?", a: "아닙니다. Base64는 인코딩(표현 방식 변환)이지 암호화가 아닙니다. 쉽게 디코딩되므로 보안 목적으로는 사용할 수 없습니다." },
          { q: "JWT 페이로드를 Base64 디코딩하면 내용을 볼 수 있나요?", a: "네, JWT 헤더와 페이로드는 Base64URL로 인코딩되어 있어 디코딩하면 내용을 볼 수 있습니다. 민감한 정보는 JWT 페이로드에 넣지 마세요." },
        ]}
      />
    </>
  );
}

function UrlGuide() {
  return (
    <>
      <GuideH2>URL 인코더/디코더란?</GuideH2>
      <GuideP>
        URL에서 허용되지 않는 특수문자를 퍼센트 인코딩(%XX 형식)으로 변환하거나 원래 문자로 복원하는 도구입니다.
        한국어 URL, 쿼리 파라미터, API 요청 처리에 필수적입니다.
      </GuideP>
      <GuideBulletList
        items={[
          "한글 '안녕' → %EC%95%88%EB%85%95 (UTF-8 기준)",
          "공백 → %20 (또는 + 기호, form 인코딩 시)",
          "URL 인코딩 필요 문자: 공백·한글·특수문자(<, >, #, % 등)",
          "encodeURIComponent() vs encodeURI(): 전자는 : / ? # 등도 인코딩",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "URL에 한글이 들어가면 안 되나요?", a: "모던 브라우저는 퓨니코드·UTF-8 처리를 지원하지만, 서버·API 통신 시 퍼센트 인코딩을 명시적으로 사용하는 것이 안전합니다." },
          { q: "+와 %20의 차이는?", a: "+는 HTML 폼(application/x-www-form-urlencoded) 방식의 공백 인코딩이고, %20은 RFC 3986 URL 표준의 공백 인코딩입니다." },
        ]}
      />
    </>
  );
}

function RegexGuide() {
  return (
    <>
      <GuideH2>정규식 테스터란?</GuideH2>
      <GuideP>
        정규식(Regular Expression) 패턴을 입력해 대상 텍스트에서 매칭 결과를 실시간으로 확인하는 도구입니다.
        문자열 검색·검증·추출·치환 작업에 활용하세요.
      </GuideP>
      <GuideTable
        headers={["패턴", "의미", "예시"]}
        rows={[
          [".", "임의의 한 문자", "a.c → abc, aXc"],
          ["*", "0회 이상 반복", "ab* → a, ab, abb"],
          ["+", "1회 이상 반복", "ab+ → ab, abb"],
          ["?", "0 또는 1회", "colou?r → color, colour"],
          ["\\d", "숫자 [0-9]", "\\d{3} → 123"],
          ["\\w", "단어 문자 [a-zA-Z0-9_]", ""],
          ["^", "문자열 시작", "^Hello → Hello로 시작"],
          ["$", "문자열 끝", "world$ → world로 끝"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "이메일 주소를 정규식으로 완벽하게 검증할 수 있나요?", a: "완벽한 이메일 정규식은 매우 복잡합니다. 실용적으로는 /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/ 수준을 많이 사용하고, 실제 발송 여부로 검증합니다." },
          { q: "정규식 플래그(g, i, m)는 무엇인가요?", a: "g: 전체 검색(global), i: 대소문자 무시(insensitive), m: 멀티라인 모드(multiline). 예: /pattern/gi" },
        ]}
      />
    </>
  );
}

function BaseConvertGuide() {
  return (
    <>
      <GuideH2>진법 변환 계산기란?</GuideH2>
      <GuideP>
        2진수(Binary)·8진수(Octal)·10진수(Decimal)·16진수(Hexadecimal)를 상호 변환하는 도구입니다.
        컴퓨터 과학·프로그래밍·디지털 회로 설계에서 필수적입니다.
      </GuideP>
      <GuideTable
        headers={["10진수", "2진수", "8진수", "16진수"]}
        rows={[
          ["10", "1010", "12", "A"],
          ["15", "1111", "17", "F"],
          ["16", "10000", "20", "10"],
          ["255", "11111111", "377", "FF"],
          ["256", "100000000", "400", "100"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "색상 코드 #FF5733은 어떤 의미인가요?", a: "16진수 색상 코드입니다. FF=255(Red), 57=87(Green), 33=51(Blue). RGB(255, 87, 51)인 주황색입니다." },
          { q: "2진수를 왜 컴퓨터가 사용하나요?", a: "전기 신호가 '있음(1)/없음(0)' 두 상태만 안정적으로 구별할 수 있기 때문입니다. 이 단순함이 컴퓨터 신뢰성의 기초입니다." },
        ]}
      />
    </>
  );
}

function QrGuide() {
  return (
    <>
      <GuideH2>QR 코드 생성기란?</GuideH2>
      <GuideP>
        텍스트·URL·연락처 등을 QR 코드 이미지로 변환하는 도구입니다.
        명함·포스터·결제·Wi-Fi 공유 등 다양한 용도로 활용하세요.
      </GuideP>
      <GuideBulletList
        items={[
          "QR 코드 버전: 1~40 (버전이 높을수록 더 많은 데이터 저장 가능)",
          "오류 수정 수준: L(7%), M(15%), Q(25%), H(30%) — H를 쓰면 30%까지 훼손돼도 읽힘",
          "URL 단축: 긴 URL은 QR 코드가 복잡해지므로 단축 URL 사용 권장",
          "Wi-Fi QR: WIFI:S:<SSID>;T:<WPA>;P:<password>;;",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "QR 코드 중간에 로고를 넣어도 읽히나요?", a: "오류 수정 수준 H를 사용하면 30%까지 가려져도 정상 인식됩니다. 로고가 QR 코드의 30% 이내라면 대부분 정상 작동합니다." },
          { q: "QR 코드에 개인정보를 넣어도 안전한가요?", a: "QR 코드는 암호화되지 않아 누구나 스캔하면 내용을 볼 수 있습니다. 개인정보는 QR 코드에 직접 포함하지 마세요." },
        ]}
      />
    </>
  );
}

function JsonGuide() {
  return (
    <>
      <GuideH2>JSON 포매터/검증기란?</GuideH2>
      <GuideP>
        JSON 문자열의 문법 오류를 검증하고, 가독성 있는 들여쓰기 형식으로 변환하는 도구입니다.
        API 응답 분석, 설정 파일 편집, 데이터 디버깅에 활용하세요.
      </GuideP>
      <GuideBulletList
        items={[
          "JSON 규칙: 키는 반드시 쌍따옴표(\"), 마지막 항목에 쉼표 불가",
          "지원 타입: string, number, boolean, null, object, array",
          "주석 불가: JSON은 표준상 주석을 지원하지 않음 (JSONC는 예외)",
          "인코딩: 반드시 UTF-8 사용 권장",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "JSON과 JavaScript 객체 리터럴의 차이는?", a: "JSON은 키가 반드시 쌍따옴표여야 하고, 함수·undefined를 포함할 수 없습니다. JS 객체는 따옴표 없는 키, 함수 등이 허용됩니다." },
          { q: "JSON에 주석을 달고 싶은데 어떻게 하나요?", a: "표준 JSON은 주석을 지원하지 않습니다. 설정 파일에는 JSONC(JSON with Comments) 또는 YAML을 사용하거나, '// comment' 역할의 별도 키를 추가하는 방법이 있습니다." },
        ]}
      />
    </>
  );
}

function MorseGuide() {
  return (
    <>
      <GuideH2>모스 부호 변환기란?</GuideH2>
      <GuideP>
        텍스트를 모스 부호(·−)로 변환하거나 모스 부호를 텍스트로 복원하는 도구입니다.
        통신 역사 학습, 아마추어 무선, 암호 놀이에 활용하세요.
      </GuideP>
      <GuideTable
        headers={["문자", "모스 부호", "문자", "모스 부호"]}
        rows={[
          ["A", "·−", "B", "−···"],
          ["E", "·", "T", "−"],
          ["S", "···", "O", "−−−"],
          ["SOS", "···−−−···", "(긴급 신호)", ""],
        ]}
      />
      <GuideBulletList
        items={[
          "점(·): 짧은 신호, 선(−): 긴 신호 (3배 길이)",
          "글자 간격: 짧은 공백 (선 1개 길이), 단어 간격: 긴 공백 (7배)",
          "국제 모스 부호(ITU)와 미국 모스 부호는 일부 기호가 다릅니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "SOS가 모스 부호인 이유는?", a: "···−−−···는 구분이 명확하고 리듬이 단순해 긴박한 상황에서 전송하기 쉽습니다. 'Save Our Ship'의 약자라는 설은 후대에 붙여진 것입니다." },
          { q: "모스 부호를 배우는 데 얼마나 걸리나요?", a: "알파벳 26자 기준으로 기본 인식에는 몇 주, 실용 수준(분당 20 단어)에는 수개월의 꾸준한 연습이 필요합니다." },
        ]}
      />
    </>
  );
}

function ColorGuide() {
  return (
    <>
      <GuideH2>색상 코드 변환기란?</GuideH2>
      <GuideP>
        HEX·RGB·HSL·HSV·CMYK 등 다양한 색상 코드 형식을 상호 변환하는 도구입니다.
        웹 디자인·UI 개발·그래픽 작업에서 자주 필요한 색상 단위를 한 번에 처리하세요.
      </GuideP>
      <GuideTable
        headers={["형식", "예시", "주요 사용처"]}
        rows={[
          ["HEX", "#FF5733", "HTML, CSS"],
          ["RGB", "rgb(255,87,51)", "CSS, JavaScript"],
          ["HSL", "hsl(11°,100%,60%)", "CSS, 색상 조정"],
          ["HSV", "hsv(11°,80%,100%)", "그래픽 소프트웨어"],
          ["CMYK", "C:0 M:66 Y:80 K:0", "인쇄"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "웹에서 투명도는 어떻게 표현하나요?", a: "RGBA rgba(255,87,51,0.5)로 알파값(0=완전투명, 1=불투명)을 추가하거나, HEX 8자리 #FF573380으로 표현합니다." },
          { q: "HSL이 디자인에서 유리한 이유는?", a: "HSL은 색상(Hue)·채도(Saturation)·명도(Lightness)를 직관적으로 조절할 수 있어 색상 팔레트 생성, 어두운/밝은 버전 만들기에 편리합니다." },
        ]}
      />
    </>
  );
}

// ════════════════════════════════════════════════
// 게임 — 개별 가이드 (game-001 ~ game-008)
// ════════════════════════════════════════════════

function GachaGuide() {
  return (
    <>
      <GuideH2>가챠 확률 계산기란?</GuideH2>
      <GuideP>
        모바일 게임의 가챠(뽑기) 확률과 원하는 아이템을 획득하기까지 예상 시도 횟수·비용을 계산하는 도구입니다.
        과금 전 기대 비용을 현실적으로 파악하는 데 활용하세요.
      </GuideP>
      <GuideFormulaBox>
        n번 시도 후 최소 1회 획득 확률 = 1 − (1−p)^n{"\n"}
        기대 시도 횟수 = 1 ÷ p
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "예: 확률 1%(0.01) → 평균 100회 시도 필요",
          "50% 확률로 1회 이상 획득하려면 약 69회 시도 필요 (1%일 때)",
          "천장(보장 횟수): 상한 시도 시 확정 획득하는 시스템",
          "컴파운드 확률: 여러 아이템을 동시에 노릴 때 비용이 급증합니다",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "이미 100번 뽑았는데 천장이 200이면 확률이 올라가나요?", a: "천장 시스템이 없다면 매 시도는 독립 사건으로 확률이 올라가지 않습니다. 이전 시도는 미래 확률에 영향을 주지 않습니다." },
          { q: "가챠 과금 중독 예방법은?", a: "월 예산을 미리 정하고 초과하지 않도록 설정하세요. 이 계산기로 기대 비용을 확인한 뒤 구매를 결정하는 것을 권장합니다." },
        ]}
      />
    </>
  );
}

function FifaGuide() {
  return (
    <>
      <GuideH2>피파 수수료 계산기란?</GuideH2>
      <GuideP>
        FC 온라인·FC 모바일 등 FIFA 계열 게임의 이적 시장(옥션)에서 선수를 판매할 때 공제되는
        <strong> 5% 수수료를 제외한 실제 수령 BP(코인)</strong>를 계산하는 도구입니다.
        판매 가격을 입력하면 수수료와 실수령액을 즉시 확인할 수 있습니다.
      </GuideP>
      <GuideFormulaBox>
        수수료 = 판매가 × 5%{"\n"}
        실수령 BP = 판매가 × 95%{"\n"}
        예: 10,000BP에 판매 → 수수료 500BP → 실수령 9,500BP
      </GuideFormulaBox>
      <GuideH3>입력 안내</GuideH3>
      <GuideBulletList
        items={[
          "판매 희망가(등록가)를 BP(코인) 단위로 입력하세요.",
          "원하는 실수령액이 정해진 경우: 역산 기능으로 필요한 등록가를 계산할 수 있습니다.",
          "여러 선수를 동시에 올릴 때는 선수별로 각각 입력해 총 수령액을 합산하세요.",
          "100 단위 절삭 등 게임 내 등록 단위 제한을 적용한 뒤 입력하세요.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "왜 판매 금액의 95%만 받나요?", a: "FC 온라인·EA FC 계열 게임은 이적 시장 거래 금액의 5%를 수수료로 공제합니다. 이는 게임 내 BP 인플레이션 억제를 위한 시스템입니다." },
          { q: "목표 수령액이 있을 때 등록가는 어떻게 계산하나요?", a: "목표 수령액 ÷ 0.95 = 필요 등록가입니다. 예: 9,500BP를 받으려면 10,000BP로 등록해야 합니다." },
        ]}
      />
    </>
  );
}

function WinRateGuide() {
  return (
    <>
      <GuideH2>승률 계산기란?</GuideH2>
      <GuideP>
        전적(승·무·패)을 입력해 승률·무승부율·패배율을 계산하는 도구입니다.
        게임·스포츠 시즌 성과 분석, 팀 전력 비교에 활용하세요.
      </GuideP>
      <GuideFormulaBox>
        승률(%) = 승 ÷ 총 경기 수 × 100{"\n"}
        (무승부 포함 시) 승점율 = (승×3 + 무×1) ÷ (총 경기 × 3) × 100
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "e스포츠: 무승부 없는 경우 단순 승률 사용",
          "축구 리그: 3점제(승3·무1·패0) 승점율로 순위 결정",
          "세트 승률(테니스·배구 등): 전체 세트 대비 세트 승수로 계산",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "리그 오브 레전드 골드 이상의 평균 승률은?", a: "솔로 랭크에서 플레이어 레벨과 상관없이 장기적으로 50% 수렴하도록 매치메이킹이 설계됩니다. 지속적인 55%+ 승률이 실력 우위의 신호입니다." },
          { q: "적은 경기 수의 높은 승률은 믿을 수 있나요?", a: "소표본에서는 편차가 크므로 신뢰성이 낮습니다. 통계적으로 유의미하려면 최소 30~50 경기 이상이 필요합니다." },
        ]}
      />
    </>
  );
}

function LottoGuide() {
  return (
    <>
      <GuideH2>로또 확률 계산기란?</GuideH2>
      <GuideP>
        로또 1등 당첨 확률과 n장 구매 시 당첨 기대 확률을 계산하는 도구입니다.
        각 등수별 확률을 확인해 현실적인 기대치를 가질 수 있습니다.
      </GuideP>
      <GuideTable
        headers={["등수", "조건", "확률"]}
        rows={[
          ["1등", "6개 번호 일치", "1 / 8,145,060"],
          ["2등", "5개 + 보너스 번호", "1 / 1,357,510"],
          ["3등", "5개 번호 일치", "1 / 35,724"],
          ["4등", "4개 번호 일치", "1 / 733"],
          ["5등", "3개 번호 일치", "1 / 45"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "매주 로또를 사면 언제 1등이 되나요?", a: "1등 확률 1/8,145,060 → 매주 1장 구매 시 평균 약 15만 6,000년이 걸립니다. 확률을 현실적으로 받아들이는 것이 중요합니다." },
          { q: "번호를 특정 패턴으로 선택하면 유리한가요?", a: "로또 번호 추첨은 독립 사건으로, 어떤 번호나 패턴이 다른 것보다 당첨 확률이 높지 않습니다. 다만 많이 선택하는 번호(1~10 등)는 당첨 시 배당이 적을 수 있습니다." },
        ]}
      />
    </>
  );
}

function EdpiGuide() {
  return (
    <>
      <GuideH2>eDPI 계산기란?</GuideH2>
      <GuideP>
        마우스 DPI와 게임 내 감도(sensitivity)를 곱해 실효 감도(eDPI, effective DPI)를 계산하는 도구입니다.
        다른 DPI·감도 세팅과 동일한 eDPI로 맞추면 체감 감도가 같아집니다.
      </GuideP>
      <GuideFormulaBox>eDPI = 마우스 DPI × 게임 내 감도</GuideFormulaBox>
      <GuideTable
        headers={["게임", "프로 평균 eDPI (참고)"]}
        rows={[
          ["CS2 (카운터스트라이크)", "약 800~1,000"],
          ["VALORANT", "약 250~400"],
          ["오버워치 2", "약 3,000~6,000"],
          ["에이펙스 레전드", "약 1,200~1,800"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "낮은 DPI vs 높은 감도, 어느 것이 더 정확한가요?", a: "eDPI가 같다면 이론적으로 정확도 차이는 없습니다. 다만 마우스 센서 특성상 낮은 DPI에서 PosSyncing 오류가 생길 수 있어 400~800 DPI를 많이 사용합니다." },
          { q: "감도를 낮추면 무조건 에임이 좋아지나요?", a: "낮은 감도는 미세 조정에 유리하지만 빠른 회전이 어렵습니다. 대부분의 FPS 교육에서는 eDPI 400~600 범위를 시작점으로 권장합니다." },
        ]}
      />
    </>
  );
}

function CoinFlipGuide() {
  return (
    <>
      <GuideH2>동전 던지기 시뮬레이터란?</GuideH2>
      <GuideP>
        공정한 동전을 가상으로 던져 앞면·뒷면 결과를 시뮬레이션하고,
        여러 번 반복해 확률 수렴을 확인하는 도구입니다.
      </GuideP>
      <GuideBulletList
        items={[
          "1회 앞면 확률: 50%, 뒷면: 50%",
          "n번 던져 k번 앞면이 나올 확률: C(n,k) × (0.5)^n",
          "대수의 법칙: 시행 횟수가 많아질수록 비율이 50%에 수렴",
          "도박사의 오류: 앞면이 연속 나왔다고 다음에 뒷면 확률이 높아지지 않음",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "10번 연속 앞면이 나왔는데 다음은 뒷면이어야 하지 않나요?", a: "아닙니다. 이것이 도박사의 오류입니다. 매 시도는 독립 사건으로 항상 50:50입니다. 과거 결과는 미래에 영향을 주지 않습니다." },
          { q: "실제 동전은 50:50이 아닐 수 있나요?", a: "물리적 동전은 동전 두께·무게 중심에 따라 아주 약간 치우칠 수 있습니다. 실험 결과 앞면이 약 51% 확률이라는 연구도 있습니다." },
        ]}
      />
    </>
  );
}

function RouletteGuide() {
  return (
    <>
      <GuideH2>룰렛 확률 계산기란?</GuideH2>
      <GuideP>
        유럽식·미국식 룰렛의 베팅 유형별 당첨 확률과 기대 수익(RTP)을 계산하는 도구입니다.
        카지노 게임의 수학적 구조를 이해하는 데 활용하세요.
      </GuideP>
      <GuideTable
        headers={["룰렛 유형", "0 개수", "집의 이점"]}
        rows={[
          ["유럽식 (French)", "0 한 개", "2.7%"],
          ["미국식", "0, 00 두 개", "5.26%"],
        ]}
      />
      <GuideTable
        headers={["베팅 유형", "배당", "당첨 확률 (유럽식)"]}
        rows={[
          ["스트레이트 (단일 숫자)", "35:1", "2.70%"],
          ["컬럼/더즌", "2:1", "32.43%"],
          ["레드/블랙, 홀/짝", "1:1", "48.65%"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "마팅게일 전략(질 때마다 베팅 2배)은 효과적인가요?", a: "이론적으로 무한 자금이 있으면 언젠가 이기지만, 현실에서는 베팅 한도와 자금 부족으로 파산 위험이 있습니다. 수학적으로 기대값은 여전히 음수입니다." },
          { q: "어느 베팅이 가장 유리한가요?", a: "기대값 관점에서 모든 베팅은 동일하게 불리합니다(집의 이점 적용). 가장 오래 게임을 즐기려면 낮은 배당(레드/블랙 등) 베팅이 분산이 작아 자금이 오래 유지됩니다." },
        ]}
      />
    </>
  );
}

function FovGuide() {
  return (
    <>
      <GuideH2>FOV(시야각) 계산기란?</GuideH2>
      <GuideP>
        FPS 게임의 수평·수직 시야각(Field of View)을 화면 비율과 함께 변환하는 도구입니다.
        다양한 해상도·비율 간 실제 체감 FOV를 맞추는 데 활용하세요.
      </GuideP>
      <GuideFormulaBox>
        수직 FOV = 2 × atan(tan(수평FOV/2) × (높이/너비)){"\n"}
        예: 수평 90°, 16:9 → 수직 ≈ 59°
      </GuideFormulaBox>
      <GuideTable
        headers={["수평 FOV", "16:9 수직 FOV", "체감"]}
        rows={[
          ["70°", "약 43°", "좁음 (조준 정밀도 유리)"],
          ["90°", "약 59°", "표준"],
          ["103°", "약 70°", "와이드 (주변 시야 유리)"],
          ["110°", "약 77°", "매우 넓음"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "FOV가 높을수록 유리한가요?", a: "FOV가 높으면 주변 시야가 넓어지지만 적이 작아 보여 조준이 어려워집니다. 보통 90~103° 사이에서 개인 취향으로 설정합니다." },
          { q: "게임마다 FOV 기준이 다른가요?", a: "일부 게임은 수평 FOV, 일부는 수직 FOV, 일부는 대각선 FOV를 설정값으로 사용합니다. 이 계산기로 각 기준 간 변환이 가능합니다." },
        ]}
      />
    </>
  );
}
