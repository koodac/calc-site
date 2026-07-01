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
    case "finance-028": return <MortgageCompareGuide />;
    case "finance-029": return <PrepaymentGuide />;
    case "finance-030": return <JeonwolseGuide />;

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

    // ── 직장 (신규) ──
    case "job-029": return <OvertimePayGuide />;
    case "job-030": return <SeveranceTaxGuide />;
    case "job-031": return <ParentalHoursGuide />;
    case "job-032": return <SalaryReverseGuide />;
    case "job-033": return <LocalHealthInsuranceGuide />;

    // ── 금융 (신규) ──
    case "finance-031": return <CapitalGainsTaxGuide />;
    case "finance-032": return <GiftTaxGuide />;
    case "finance-033": return <InheritanceTaxGuide />;
    case "finance-034": return <GlobalIncomeTaxGuide />;
    case "finance-035": return <IsaTaxFreeGuide />;
    case "finance-036": return <AcquisitionTaxGuide />;
    case "finance-037": return <PropertyTaxGuide />;
    case "finance-038": return <JeonseLoanInterestGuide />;
    case "finance-039": return <RentTaxCreditGuide />;
    case "finance-040": return <NationalPensionGuide />;
    case "finance-041": return <VehicleDepreciationGuide />;

    // ── 건강 (신규) ──
    case "health-027": return <MetCaloriesGuide />;
    case "health-028": return <HomaIrGuide />;

    // ── 학교 (신규) ──
    case "school-023": return <CsatGradeGuide />;

    // ── 일상 (신규) ──
    case "daily-014": return <TrafficFineGuide />;

    // ── 개발 (신규) ──
    case "dev-012": return <CronExpressionGuide />;
    case "dev-013": return <JwtDecoderGuide />;

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
      <GuideH2>연봉 실수령 계산기란?</GuideH2>
      <GuideP>
        연봉을 입력하면 국민연금·건강보험·고용보험·근로소득세를 공제한
        <strong> 월 실수령 예상액</strong>을 즉시 확인할 수 있는 도구입니다.
        이직 협상·첫 직장 연봉 비교 시 빠른 참고용으로 활용하세요.
      </GuideP>

      <GuideH2>2026년 공제 항목별 요율</GuideH2>
      <GuideTable
        headers={["공제 항목", "근로자 부담율", "비고"]}
        rows={[
          ["국민연금", "4.5%", "월 기준소득 상한 적용 (2026년 하반기 659만원)"],
          ["건강보험", "3.545%", "장기요양보험 별도 (건보료 × 13.14%)"],
          ["고용보험", "0.9%", "실업급여 기준"],
          ["근로소득세", "간이세액표 적용", "부양가족 수에 따라 변동"],
          ["지방소득세", "근로소득세 × 10%", "별도 납부"],
        ]}
      />

      <GuideH2>실수령 계산 공식</GuideH2>
      <GuideFormulaBox>
        실수령 = 세전월급 − 국민연금 − 건강보험 − 장기요양 − 고용보험 − 소득세 − 지방세
      </GuideFormulaBox>

      <GuideH2>연봉별 실수령 참고표 (부양가족 1명, 2026년)</GuideH2>
      <GuideTable
        headers={["연봉", "세전 월급", "월 공제 합계(추정)", "월 실수령(추정)"]}
        rows={[
          ["3,000만원", "250만원", "약 30만원", "약 220만원"],
          ["4,000만원", "333만원", "약 44만원", "약 289만원"],
          ["5,000만원", "417만원", "약 62만원", "약 355만원"],
          ["6,000만원", "500만원", "약 78만원", "약 422만원"],
          ["8,000만원", "667만원", "약 124만원", "약 543만원"],
          ["1억원", "833만원", "약 182만원", "약 651만원"],
        ]}
      />
      <GuideP>
        위 수치는 참고용 추정값입니다. 비과세 수당(식대 월 20만원 등)이 있으면 실수령이
        늘어납니다. 상여·성과급이 포함된 달은 해당 월 원천징수액이 달라질 수 있습니다.
      </GuideP>

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "급여명세서 금액이랑 왜 다르게 나오나요?",
            a: "회사마다 비과세 수당 구성, 입퇴사 월 정산, 상여 분할 방식이 달라 오차가 생깁니다. 이 계산기는 빠른 참고용이므로 정확한 금액은 인사팀·급여명세서를 확인하세요.",
          },
          {
            q: "식대를 따로 받으면 실수령이 늘어나나요?",
            a: "네, 월 20만원 비과세 식대는 소득세·4대보험 모두 부과되지 않아, 같은 연봉이라도 식대를 분리 지급하면 실수령이 늘어납니다.",
          },
          {
            q: "프리랜서는 이 계산기를 쓰면 안 되나요?",
            a: "프리랜서(사업소득자)는 3.3% 원천징수 구조로 다릅니다. 국민연금·건강보험은 지역가입자로 별도 납부하므로 이 계산기 결과와 큰 차이가 있습니다.",
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
        입사·퇴사일과 최근 3개월 임금 정보를 넣으면 <strong>예상 퇴직금</strong>을 미리 확인할 수 있는 도구입니다.
        근로자퇴직급여보장법에 따라 동일 사업장에서 1년 이상 계속 근로한 경우 퇴직금 지급 의무가 생깁니다.
        계산기 결과는 참고용이며, 정확한 금액은 회사 인사팀 또는 노동청에서 확인하세요.
      </GuideP>

      <GuideH2>퇴직금 계산 공식</GuideH2>
      <GuideFormulaBox>
        1일 평균임금 = 퇴직 전 3개월 임금 총액 ÷ 3개월 총 일수{"\n"}
        퇴직금 = 1일 평균임금 × 30 × (재직일수 ÷ 365)
      </GuideFormulaBox>
      <GuideP>
        예: 월 급여 300만 원, 상여 연 600만 원(3개월분 150만 원), 재직 3년(1,095일){"\n"}
        → 1일 평균임금 = (900+150)만 원 ÷ 92일 ≈ 114,130원{"\n"}
        → 퇴직금 = 114,130 × 30 × (1,095÷365) ≈ <strong>약 1,027만 원</strong>
      </GuideP>

      <GuideH2>평균임금에 포함되는 항목</GuideH2>
      <GuideTable
        headers={["포함 O", "포함 X (일반적)"]}
        rows={[
          ["기본급", "실비 변상적 수당 (식대·교통비 실비)"],
          ["직책수당·직무수당", "결혼·조의·출산 등 경조비"],
          ["상여금 (정기적·일률적 지급분)", "비정기 임시 상여금 (쟁점 가능)"],
          ["연장·야간·휴일수당", "학자금 (실비 성격)"],
          ["연차수당 (미사용 연차 정산분)", "복리후생 목적의 급부"],
        ]}
      />
      <GuideP className="text-neutral-500">※ 어떤 수당이 평균임금에 포함되는지는 판례·취업규칙에 따라 달라질 수 있습니다. 분쟁 시 노무사 상담을 권장합니다.</GuideP>

      <GuideH2>퇴직연금(DC·DB형) vs 퇴직금 직접 지급</GuideH2>
      <GuideTable
        headers={["구분", "DB형 (확정급여형)", "DC형 (확정기여형)", "퇴직금 직접 지급"]}
        rows={[
          ["운용 주체", "회사", "근로자", "회사 (법정 의무)"],
          ["수령액 결정", "최종 3개월 평균임금 기준", "적립금 운용 결과", "법정 공식 동일"],
          ["중간정산", "원칙 금지", "이직 시 IRP 이전", "요건 충족 시 가능"],
          ["특징", "임금 상승률 높을수록 유리", "투자 수익에 따라 더 받을 수도", "소규모 사업장 多"],
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "1년 미만 근무자도 퇴직금을 받나요?",
            a: "원칙적으로 1년 미만 근무 시 퇴직금이 발생하지 않습니다. 단, 계약 기간이 1년 이상이었으나 중간에 퇴직한 경우나, 단기 계약을 반복 갱신하여 실질 재직 기간이 1년 이상인 경우에는 지급 의무가 생길 수 있습니다.",
          },
          {
            q: "계산기 결과와 회사 계산이 다른 이유는 무엇인가요?",
            a: "평균임금에 포함되는 수당의 범위, 상여금 합산 시점, 재직일수 산정 방식이 회사마다 다를 수 있습니다. 또 퇴직연금 DC형은 적립금 기준으로 지급되어 법정 공식과 차이가 날 수 있습니다.",
          },
          {
            q: "퇴직금에도 세금이 붙나요?",
            a: "퇴직소득세가 부과됩니다. 다만, 근속 연수에 따른 공제가 커서 일반 급여보다 세율이 훨씬 낮습니다. IRP(개인형 퇴직연금)에 이체하면 연금 수령 시까지 세금이 이연됩니다.",
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
          {
            q: "연가보상비와 연차수당은 같은 개념인가요?",
            a: "비슷하지만 다릅니다. 연가보상비는 공무원·공공기관에서 미사용 연가를 금전으로 보상하는 제도이고, 연차수당은 민간 근로자의 미사용 연차를 통상임금 기준으로 지급하는 것입니다. 계산 방식과 근거 법령이 다릅니다.",
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
          {
            q: "달성률 대신 다른 지표를 함께 보면 좋은 게 있나요?",
            a: "달성률 외에 '소요 시간 대비 진행률(번다운 차트)', '기간 대비 잔여량' 등을 함께 보면 페이스 파악에 도움이 됩니다. 목표가 크다면 마일스톤별 달성률로 쪼개서 관리하는 것이 동기 유지에 효과적입니다.",
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
          "하한액: 최저임금 × 80% × 8시간 (2026년: 10,320원 × 80% × 8h = 약 66,048원/일)",
          "상한액: 매년 고용노동부 공시 기준 (2026년 현재 하한액 66,048원보다 높음, 고용노동부 공식 발표 확인 필요)",
          "지급 기간: 연령·가입 기간별 120~270일",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "자진 퇴사도 받을 수 있나요?", a: "원칙적으로 불가하지만, 임금 체불·직장 내 괴롭힘·계약 조건 불이행 등 정당한 사유가 있으면 수급 가능할 수 있어요. 고용센터에 문의하세요." },
          { q: "프리랜서·자영업자도 받을 수 있나요?", a: "예술인·노무제공자 고용보험이나 자영업자 고용보험에 가입된 경우 별도 조건으로 가능할 수 있습니다." },
          { q: "실업급여를 받으면서 아르바이트를 해도 되나요?", a: "신고 없이 취업하면 부정수급에 해당합니다. 단기·일용직 근무는 고용센터에 신고하면 해당 일수를 제외하고 지급 기간이 연장될 수 있습니다. 반드시 사전에 고용센터에 확인하세요." },
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
        근로기준법 제60조에 따라 일정 기간 이상 근무한 근로자에게 부여되는 <strong>유급 휴가</strong>입니다.
        정규직·계약직·아르바이트 상관없이 주 15시간 이상, 5인 이상 사업장에서 근무하면 적용됩니다.
        이 계산기는 입사일 기준 예상 연차 일수를 빠르게 확인하는 도구입니다.
      </GuideP>

      <GuideH2>근속 기간별 연차 발생 기준</GuideH2>
      <GuideTable
        headers={["근속 기간", "연차 일수", "비고"]}
        rows={[
          ["1년 미만", "매월 개근 시 1일 (최대 11일)", "입사 첫 해 월차 개념"],
          ["1년 ~ 2년 미만", "15일", "1년 개근 시 발생"],
          ["2년 ~ 3년 미만", "15일", ""],
          ["3년 ~ 4년 미만", "16일", "3년 이상부터 +1일"],
          ["4년 ~ 5년 미만", "16일", ""],
          ["5년 ~ 6년 미만", "17일", ""],
          ["7년 ~ 8년 미만", "18일", ""],
          ["…2년마다 +1일", "최대 25일", "21년 이상 근속 시"],
        ]}
      />
      <GuideP className="text-neutral-500">※ 5인 미만 사업장은 연차 규정 적용 제외. 단, 1년 미만 월차는 5인 미만도 적용 가능한 경우 있음.</GuideP>

      <GuideH2>연차수당 계산</GuideH2>
      <GuideFormulaBox>
        연차수당 = 1일 통상임금 × 미사용 연차 일수{"\n"}
        1일 통상임금 = 월 통상임금 ÷ 월 소정근로일수 (또는 ÷ 209시간 × 8시간)
      </GuideFormulaBox>
      <GuideP>
        예: 월급 300만 원, 미사용 연차 5일 → 1일 통상임금 ≈ 143,540원 → 연차수당 약 <strong>71.7만 원</strong>
      </GuideP>

      <GuideH2>연차 촉진 제도</GuideH2>
      <GuideBulletList
        items={[
          "회사가 법정 절차에 따라 연차 사용을 촉구했으나 근로자가 미사용한 경우, 연차수당 지급 의무 면제 가능",
          "촉진 절차: ① 연차 만료 6개월 전 서면 통보 → ② 10일 이내 사용 시기 지정 요청 → ③ 미지정 시 회사가 사용 시기 지정",
          "절차 없이 그냥 소멸시키면 수당 미지급은 임금 체불에 해당",
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "연차를 못 쓰면 무조건 수당으로 받나요?",
            a: "원칙적으로 미사용 연차는 수당으로 지급됩니다. 단, 회사가 연차 촉진 절차를 적법하게 밟은 경우에는 수당 지급 의무가 없어집니다. 촉진 통보를 받았는지 확인하세요.",
          },
          {
            q: "입사 첫 해에도 연차가 생기나요?",
            a: "네. 1년 미만 근로자도 매월 개근하면 1일씩 최대 11일의 유급휴가가 발생합니다. 1년이 되는 시점에 15일이 별도로 발생하며, 2020년 3월 법 개정 이후 첫 해 사용한 월차는 15일에서 차감되지 않습니다.",
          },
          {
            q: "퇴직 시 남은 연차는 어떻게 되나요?",
            a: "퇴직 시점에 남은 미사용 연차는 퇴직 처리와 함께 연차수당으로 지급해야 합니다. 촉진 절차와 무관하게 퇴직 시에는 잔여 연차 수당을 청구할 수 있습니다.",
          },
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
        근로기준법 제55조에 따라, <strong>1주일 소정 근로일을 개근</strong>한 근로자에게 유급으로 주어지는 하루치 임금입니다.
        주 15시간 이상 근무하면 정규직·계약직·아르바이트 구분 없이 모두 적용되므로,
        편의점·카페 등 시간제 근무자도 조건을 충족하면 반드시 받아야 합니다.
      </GuideP>

      <GuideH2>주휴수당 계산 공식</GuideH2>
      <GuideFormulaBox>
        주휴수당 = (1주 소정 근로시간 ÷ 40) × 8 × 시급{"\n\n"}
        ※ 소정 근로시간이 40시간 이상이면 그냥 8 × 시급으로 계산
      </GuideFormulaBox>

      <GuideH2>근무 유형별 주휴수당 계산 예시</GuideH2>
      <GuideTable
        headers={["주 근무 시간", "시급", "주휴수당 계산", "주휴수당"]}
        rows={[
          ["주 15시간", "10,320원", "(15 ÷ 40) × 8 × 10,320", "30,960원"],
          ["주 20시간", "10,320원", "(20 ÷ 40) × 8 × 10,320", "41,280원"],
          ["주 30시간", "12,000원", "(30 ÷ 40) × 8 × 12,000", "72,000원"],
          ["주 40시간 (풀타임)", "10,320원", "8 × 10,320", "82,560원"],
        ]}
      />
      <GuideP className="text-neutral-500">※ 2026년 최저시급 10,320원 기준. 실제 급여는 계약 조건에 따라 다를 수 있습니다.</GuideP>

      <GuideH2>주휴수당 지급 조건 3가지</GuideH2>
      <GuideBulletList
        items={[
          "① 1주 소정 근로시간 15시간 이상",
          "② 소정 근로일 전일 개근 (결근 없이 출근)",
          "③ 다음 주에도 근로 관계가 유지될 것 (계속 근로 예정)",
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "주 15시간 미만이면 주휴수당이 없나요?",
            a: "맞습니다. 주 15시간 미만 단시간 근로자는 주휴수당 적용 대상이 아닙니다. 사용자가 의도적으로 15시간 미만으로 계약하는 것은 합법이지만, 실제 근무가 15시간 이상이 되면 지급 의무가 생깁니다.",
          },
          {
            q: "월급제 근로자도 주휴수당을 따로 받아야 하나요?",
            a: "월급제 근로자의 월급에는 통상적으로 주휴수당이 포함되어 있습니다. 그러나 계약서에 명시되지 않았다면 분쟁이 생길 수 있으니, 근로계약서에 '주휴수당 포함' 여부를 확인하세요.",
          },
          {
            q: "결근하면 그 주 주휴수당을 못 받나요?",
            a: "소정 근로일을 하루라도 결근(무단결근)하면 그 주의 주휴수당은 발생하지 않습니다. 단, 사용자의 귀책 사유로 쉰 경우나 연차·공휴일은 결근으로 보지 않습니다.",
          },
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
        1인 이상 사업장의 근로자는 원칙적으로 모두 가입 의무가 있으며, 근로자와 사업주가 각각 정해진 요율만큼 부담합니다.
        보험료는 급여에서 자동으로 공제되므로 본인 부담분을 미리 파악해 두는 것이 중요합니다.
      </GuideP>

      <GuideH2>2026년 4대 보험 요율표</GuideH2>
      <GuideTable
        headers={["보험 종류", "근로자 부담", "사업주 부담", "합계"]}
        rows={[
          ["국민연금", "4.5%", "4.5%", "9%"],
          ["건강보험", "3.545%", "3.545%", "7.09%"],
          ["장기요양보험", "건강보험료 × 13.14%", "동일", "건강보험료 × 26.28%"],
          ["고용보험", "0.9%", "0.9%~(규모별 추가)", "-"],
          ["산재보험", "없음 (전액 사업주)", "업종별 상이", "-"],
        ]}
      />
      <GuideP className="text-neutral-500">※ 요율은 매년 변경될 수 있습니다. 정확한 금액은 4대사회보험 정보연계센터(4insure.or.kr)에서 확인하세요.</GuideP>

      <GuideH2>월급별 4대 보험료 참고표 (근로자 부담분)</GuideH2>
      <GuideTable
        headers={["월 급여(세전)", "국민연금", "건강보험", "장기요양", "고용보험", "합계(근로자)"]}
        rows={[
          ["200만 원", "90,000원", "70,900원", "9,316원", "18,000원", "약 188,216원"],
          ["300만 원", "135,000원", "106,350원", "13,974원", "27,000원", "약 282,324원"],
          ["400만 원", "180,000원", "141,800원", "18,633원", "36,000원", "약 376,433원"],
          ["500만 원", "225,000원", "177,250원", "23,291원", "45,000원", "약 470,541원"],
          ["700만 원", "296,550원(상한)", "248,150원", "32,607원", "63,000원", "약 640,307원"],
        ]}
      />
      <GuideP className="text-neutral-500">※ 위 금액은 참고용 추정치이며, 소득월액·보수총액 정산에 따라 실제 공제액과 차이가 있을 수 있습니다.</GuideP>

      <GuideH2>알아두면 유용한 정보</GuideH2>
      <GuideBulletList
        items={[
          "국민연금 상한액: 보수월액 637만원(7월부터 659만원) 초과분은 연금 부과 제외 (2026년 기준)",
          "건강보험료 연말정산: 매년 4월, 전년도 보수총액 기준으로 정산 → 추가 납부 또는 환급 발생",
          "고용보험 사업주 추가 부담: 150인 미만 0.25%, 150~1,000인 미만 0.45%, 1,000인 이상 0.65%",
          "산재보험료는 근로자 부담 없음 — 전액 사업주 납부",
          "고용보험 미가입 사업장 근로자도 산재보험은 자동 적용",
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "월급 외 상여금에도 4대 보험이 붙나요?",
            a: "네. 상여·성과급·각종 수당도 보수총액에 포함되면 건강보험료 연말정산 시 추가 부담이 생길 수 있습니다. 국민연금·고용보험은 월별 보수월액 기준으로 매월 부과됩니다.",
          },
          {
            q: "일용직·아르바이트도 4대 보험 적용 대상인가요?",
            a: "고용보험과 산재보험은 원칙적으로 모든 근로자에게 적용됩니다. 국민연금·건강보험은 1개월 이상, 월 60시간(주 15시간) 이상 근무하면 가입 의무가 생깁니다.",
          },
          {
            q: "퇴직 후 건강보험료가 갑자기 오르는 이유는?",
            a: "재직 중에는 직장가입자로 회사와 보험료를 반반 부담하지만, 퇴직 후 지역가입자로 전환되면 재산·소득 등이 종합 반영되어 보험료가 크게 오를 수 있습니다. 임의계속가입제도(퇴직 후 36개월)를 활용해 직장가입자 자격을 유지하면 더 저렴할 수 있습니다.",
          },
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
          "상한액: 월 210만원 (2026년 기준)",
          "우선지원대상기업: 전 90일 고용보험 지급",
          "대규모 기업: 최초 45일은 사업주 부담, 후 45일 고용보험 지급",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "배우자도 출산휴가를 받을 수 있나요?", a: "네, 배우자 출산휴가는 20일(유급)이며, 최초 10일분은 고용보험에서 지원되고 나머지 10일은 사업주가 부담합니다. 출산일로부터 90일 이내에 사용해야 합니다." },
          { q: "계약직도 받을 수 있나요?", a: "고용보험 피보험자격을 유지하고 있으면 가능합니다. 단, 휴가 종료 후 계약이 만료되면 수급에 영향이 있을 수 있어요." },
          { q: "출산휴가 중 회사가 해고할 수 있나요?", a: "출산전후휴가 기간과 그 후 30일 이내에는 해고가 금지됩니다(근로기준법 23조). 위반 시 5년 이하 징역 또는 5,000만 원 이하 벌금이 부과될 수 있습니다." },
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
        만 8세 이하(초등 2학년 이하) 자녀를 둔 근로자가 육아휴직을 사용할 때
        고용보험에서 지급하는 급여입니다. 부모 각각 최대 1년씩 사용 가능하며,
        <strong>6+6 부모 육아휴직제</strong>를 활용하면 처음 6개월간 급여가 대폭 높아집니다.
      </GuideP>

      <GuideH2>6+6 부모 육아휴직제 vs 일반 육아휴직 비교</GuideH2>
      <GuideTable
        headers={["기간", "6+6 제도 (엄마·아빠 순차)", "일반 육아휴직"]}
        rows={[
          ["1개월", "통상임금 100% (상한 200만원)", "통상임금 80% (상한 250만원)"],
          ["2개월", "통상임금 100% (상한 250만원)", "통상임금 80% (상한 250만원)"],
          ["3개월", "통상임금 100% (상한 300만원)", "통상임금 80% (상한 250만원)"],
          ["4개월", "통상임금 100% (상한 350만원)", "통상임금 80% (상한 200만원)"],
          ["5개월", "통상임금 100% (상한 400만원)", "통상임금 80% (상한 200만원)"],
          ["6개월", "통상임금 100% (상한 450만원)", "통상임금 80% (상한 200만원)"],
          ["7~12개월", "통상임금 80% (상한 160만원)", "통상임금 80% (상한 160만원)"],
        ]}
      />
      <GuideBulletList
        items={[
          "6+6 적용 조건: 같은 자녀에 대해 부모 두 번째 육아휴직을 6개월 내 시작해야 함",
          "육아휴직 급여의 25%는 복직 후 6개월 근속 시 사후지급 (일시 지급 시 제외)",
          "신청: 고용보험 홈페이지(ei.go.kr)에서 휴직 시작일로부터 1개월 후 신청",
          "사업주는 육아휴직을 이유로 해고·불리한 처우 불가 (위반 시 형사 처벌)",
        ]}
      />

      <GuideH2>육아휴직 수급 요건</GuideH2>
      <GuideTable
        headers={["요건", "내용"]}
        rows={[
          ["고용보험 가입 기간", "육아휴직 개시일 전 180일 이상"],
          ["자녀 나이", "만 8세 이하 또는 초등학교 2학년 이하"],
          ["사업장 규모", "5인 미만 사업장도 법적 의무 적용 (2022년 이후)"],
          ["계약직·파견직", "피보험자격 유지 중이면 가능"],
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "육아휴직 중에도 회사에서 급여를 주나요?",
            a: "법적 의무는 없습니다. 일부 대기업은 급여를 보전해 주기도 하지만 대부분은 고용보험 급여만 받습니다. 고용보험 급여 외 회사 지원 여부는 취업규칙을 확인하세요.",
          },
          {
            q: "아빠도 육아휴직을 쓸 수 있나요?",
            a: "네, 부모 모두 각각 최대 1년씩 사용 가능합니다. 6+6 제도를 활용하면 첫 6개월 동안 각각 최대 450만 원까지 받을 수 있어, 부부 합산 최대 900만 원/월까지 가능합니다.",
          },
          {
            q: "육아휴직 후 복직을 거부당하면 어떻게 하나요?",
            a: "육아휴직 후 복직은 법적 권리입니다. 사업주가 복직을 거부하거나 불이익 처우를 하면 고용노동부(1350)에 진정할 수 있으며, 3년 이하 징역 또는 3천만 원 이하 벌금의 형사 처벌 대상입니다.",
          },
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
        <strong>주휴수당 포함 여부</strong>를 선택해 실제 받을 금액에 가깝게 계산할 수 있습니다.
        근로계약서 작성 전 내 알바비가 최저임금 이상인지 꼭 확인하세요.
      </GuideP>

      <GuideH2>알바비 계산 공식</GuideH2>
      <GuideFormulaBox>
        하루 급여 = 시급 × 근무 시간{"\n"}
        주휴수당 = 시급 × (주 근무시간 ÷ 40) × 8  (주 15시간 이상 시){"\n"}
        월 급여 ≈ 시급 × (주 근무시간 + 주휴시간) × 4.345
      </GuideFormulaBox>

      <GuideH2>주 근무시간별 월 예상 급여 참고표 (시급 10,320원 기준)</GuideH2>
      <GuideTable
        headers={["주 근무시간", "주휴수당", "월 예상 급여 (주휴 포함)", "월 최저 기준"]}
        rows={[
          ["주 10시간 (주 15h 미만)", "없음", "약 448,224원", "최저임금 이상"],
          ["주 15시간", "약 30,960원", "약 806,990원", "최저임금 이상"],
          ["주 20시간", "약 41,280원", "약 1,075,987원", "최저임금 이상"],
          ["주 30시간", "약 61,920원", "약 1,613,981원", "최저임금 이상"],
          ["주 40시간 (풀타임)", "약 82,560원", "약 2,156,880원", "월 최저임금 충족"],
        ]}
      />
      <GuideP className="text-neutral-500">※ 2026년 최저시급 10,320원 기준. 실제 급여는 계약 조건에 따라 다를 수 있습니다.</GuideP>

      <GuideH2>아르바이트 근로 권리 핵심 정리</GuideH2>
      <GuideBulletList
        items={[
          "근로계약서 작성 의무: 1일짜리 단기 알바도 서면 계약서 작성 필요 (미작성 시 사업주 벌금)",
          "주 15시간 이상 = 주휴수당 발생, 5인 이상 사업장 = 연장·야간수당 발생",
          "4대 보험: 월 60시간(주 15시간) 이상 근무 시 고용·건강보험 의무 가입",
          "임금체불 신고: 고용노동부 1350 또는 임금체불 진정서 제출",
          "퇴직금: 1년 이상 계속 근무 + 주 15시간 이상이면 발생",
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "주 15시간 미만으로 쪼개 계약하면 주휴수당이 없나요?",
            a: "계약서상 15시간 미만이라도 실제 근무가 15시간 이상이면 주휴수당이 발생합니다. 사용자가 의도적으로 쪼개는 것은 편법이며, 실제 근무 기록을 남겨두면 청구 가능합니다.",
          },
          {
            q: "4대 보험은 알바도 내야 하나요?",
            a: "주 15시간(월 60시간) 이상 근무하면 고용보험·건강보험 가입 의무가 생깁니다. 공제된 만큼 실수령이 줄어들지만, 실업급여·건강보험 혜택을 받을 수 있습니다.",
          },
          {
            q: "시급이 최저임금보다 낮으면 어떻게 하나요?",
            a: "최저임금법 위반입니다. 고용노동부(1350)에 신고하거나, 노동청에 진정서를 제출하면 차액을 받을 수 있습니다. 신고로 인한 불이익 처우는 법으로 금지되어 있습니다.",
          },
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
      <GuideH2>BMI(체질량지수) 계산기란?</GuideH2>
      <GuideP>
        체중(kg)을 신장(m)의 제곱으로 나눈 값으로, 비만 정도를 간편하게 파악하는 지표입니다.
        전 세계에서 널리 사용되며, 한국은 대한비만학회 기준으로 BMI 23 이상을 과체중으로 봅니다.
      </GuideP>
      <GuideFormulaBox>BMI = 체중(kg) ÷ [신장(m)]²{"\n"}예: 키 170cm, 체중 68kg → 68 ÷ 1.70² = 23.5</GuideFormulaBox>

      <GuideH2>한국인 BMI 판정 기준 (대한비만학회)</GuideH2>
      <GuideTable
        headers={["BMI 범위", "판정", "건강 위험도"]}
        rows={[
          ["18.5 미만", "저체중", "영양결핍·면역저하 위험"],
          ["18.5 ~ 22.9", "정상", "낮음"],
          ["23.0 ~ 24.9", "과체중 (비만 전단계)", "대사질환 위험 증가 시작"],
          ["25.0 ~ 29.9", "1단계 비만", "당뇨·고혈압·심혈관 위험"],
          ["30.0 ~ 34.9", "2단계 비만", "높음"],
          ["35.0 이상", "3단계 비만 (고도비만)", "매우 높음, 의료 개입 권고"],
        ]}
      />

      <GuideH2>BMI의 한계와 보완 지표</GuideH2>
      <GuideBulletList
        items={[
          "근육량 많은 운동선수: BMI가 높아도 비만이 아닐 수 있음 → 체지방률로 보완",
          "복부비만: 허리둘레(남 90cm, 여 85cm 초과)로 내장지방 별도 확인",
          "같은 BMI에서 아시아인은 서양인보다 대사질환 위험이 높아 기준이 낮음",
          "마른 비만(정상 체중 비만): BMI 정상이어도 체지방 과다 가능 → 혈액검사 권장",
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "근육이 많으면 BMI가 높게 나오나요?",
            a: "맞습니다. BMI는 체지방과 근육량을 구분하지 못해 근육질 체형에서는 비만으로 과대 평가될 수 있습니다. 보디빌더나 운동선수는 체지방률 측정이 더 정확합니다.",
          },
          {
            q: "어린이·청소년에게도 같은 기준을 쓰나요?",
            a: "아니요, 성장기에는 연령·성별 백분위(BMI-for-age)를 사용합니다. 소아 비만 기준은 또래 대비 BMI 95백분위 이상입니다.",
          },
          {
            q: "BMI를 낮추려면 얼마나 감량해야 하나요?",
            a: "BMI 1 감소 = 체중(kg) × 신장(m)² kg 감소입니다. 예를 들어 키 170cm라면 BMI 1 감소 = 약 2.9kg 감량이 필요합니다. 주 당 0.3~0.5kg 감량이 건강한 속도입니다.",
          },
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
        체중·신장·나이·성별로 계산하며, 현재 가장 정확도가 높은 공식은 <strong>Mifflin-St Jeor(1990)</strong>입니다.
        BMR을 알면 다이어트·벌크업 목표에 맞는 적절한 칼로리 섭취량을 설계할 수 있습니다.
      </GuideP>

      <GuideH2>BMR 계산 공식 (Mifflin-St Jeor)</GuideH2>
      <GuideFormulaBox>
        남성 BMR = 10 × 체중(kg) + 6.25 × 신장(cm) − 5 × 나이 + 5{"\n"}
        여성 BMR = 10 × 체중(kg) + 6.25 × 신장(cm) − 5 × 나이 − 161
      </GuideFormulaBox>
      <GuideP>
        예: 30세 여성, 60kg, 165cm → BMR = 10×60 + 6.25×165 − 5×30 − 161 = <strong>약 1,401 kcal</strong>
      </GuideP>

      <GuideH2>TDEE (하루 총 소비 칼로리) 계산</GuideH2>
      <GuideP>
        <strong>TDEE = BMR × 활동 계수</strong>. 실제 하루에 소비하는 총 칼로리로, 식단 계획의 기준이 됩니다.
      </GuideP>
      <GuideTable
        headers={["활동 수준", "계수", "TDEE 예시 (BMR 1,400기준)"]}
        rows={[
          ["거의 활동 없음 (사무직·누워서 생활)", "× 1.2", "1,680 kcal"],
          ["가벼운 운동 (주 1~3회)", "× 1.375", "1,925 kcal"],
          ["보통 운동 (주 3~5회)", "× 1.55", "2,170 kcal"],
          ["심한 운동 (주 6~7회)", "× 1.725", "2,415 kcal"],
          ["매우 격렬 (하루 2회 이상·육체노동)", "× 1.9", "2,660 kcal"],
        ]}
      />

      <GuideH2>목표별 권장 칼로리 섭취</GuideH2>
      <GuideTable
        headers={["목표", "섭취 칼로리", "예상 결과"]}
        rows={[
          ["체중 감량", "TDEE − 300~500 kcal", "주 0.3~0.5 kg 감량"],
          ["체중 유지", "TDEE와 동일", "현재 체중 유지"],
          ["근육 증가 (클린 벌크)", "TDEE + 200~300 kcal", "주 0.2~0.3 kg 증가"],
          ["급속 감량 (주의)", "TDEE − 500~750 kcal", "근손실 위험, 단기간만"],
        ]}
      />
      <GuideP className="text-neutral-500">※ BMR 이하로 장기간 섭취하면 기초대사량이 낮아지고 근손실이 발생할 수 있습니다.</GuideP>

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "다이어트 시 얼마나 먹어야 하나요?",
            a: "TDEE에서 하루 300~500 kcal 적게 먹는 것이 권장됩니다. 너무 적게 먹으면 근육이 줄고 기초대사량이 떨어져 장기적으로 감량이 더 어려워집니다. BMR 미만 섭취는 건강에 위험할 수 있습니다.",
          },
          {
            q: "근육이 많으면 BMR이 높아지나요?",
            a: "네. 근육 1kg은 하루 약 13 kcal를 소비하고, 지방 1kg은 약 4.5 kcal를 소비합니다. 근육량이 많을수록 기초대사량이 높아져 같은 양을 먹어도 살이 덜 찝니다.",
          },
          {
            q: "나이가 들면 BMR이 줄어드나요?",
            a: "네, 공식에서 보듯 나이가 1살 늘 때마다 BMR이 5 kcal씩 감소합니다. 이를 보완하려면 근력 운동으로 근육량을 유지하는 것이 효과적입니다.",
          },
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
        체중·활동량·기후를 고려해 하루 권장 수분 섭취량을 추정하는 도구입니다.
        수분은 물 외에 음식·음료를 통해서도 섭취되므로 이 수치는 <strong>총 수분 섭취 목표</strong>로 참고하세요.
        탈수는 두통·집중력 저하·변비 등 다양한 증상을 유발하므로 꾸준한 수분 섭취가 중요합니다.
      </GuideP>

      <GuideH2>하루 권장 수분량 계산 공식</GuideH2>
      <GuideFormulaBox>
        기본 권장량(mL) = 체중(kg) × 30~35{"\n"}
        운동 추가분: 운동 30분당 300~500mL 추가{"\n"}
        더운 날씨: 기온 30℃ 이상 시 추가 500mL 이상
      </GuideFormulaBox>

      <GuideH2>체중별 하루 권장 수분량 참고표</GuideH2>
      <GuideTable
        headers={["체중", "최소 권장량 (×30mL)", "적정 권장량 (×33mL)", "활동적 (×35mL)"]}
        rows={[
          ["50kg", "1,500mL (1.5L)", "1,650mL (1.65L)", "1,750mL (1.75L)"],
          ["60kg", "1,800mL (1.8L)", "1,980mL (약 2L)", "2,100mL (2.1L)"],
          ["70kg", "2,100mL (2.1L)", "2,310mL (2.3L)", "2,450mL (2.45L)"],
          ["80kg", "2,400mL (2.4L)", "2,640mL (2.6L)", "2,800mL (2.8L)"],
          ["90kg", "2,700mL (2.7L)", "2,970mL (약 3L)", "3,150mL (3.15L)"],
        ]}
      />

      <GuideH2>수분 섭취 상황별 추가 권장량</GuideH2>
      <GuideTable
        headers={["상황", "추가 권장량", "이유"]}
        rows={[
          ["유산소 운동 30분", "+300~500mL", "땀으로 수분 손실"],
          ["격렬한 운동 1시간 이상", "+500~1,000mL", "전해질 손실 → 스포츠음료 병행"],
          ["기온 30℃ 이상", "+500mL 이상", "발한 증가"],
          ["임신 중", "+300mL", "태아 발달·양수 유지"],
          ["수유 중", "+700mL", "모유 생성"],
          ["설사·구토", "증상에 따라 대폭 추가", "급격한 수분 손실"],
        ]}
      />

      <GuideH2>수분 상태 자가 확인법</GuideH2>
      <GuideBulletList
        items={[
          "소변 색 확인: 맑은 노란색(레몬색) = 적절, 진한 노란색·갈색 = 탈수 신호",
          "피부 탄력 테스트: 손등 피부를 집었다 놓았을 때 즉시 돌아오지 않으면 탈수 가능성",
          "입·입술 건조, 두통, 집중력 저하 = 경미한 탈수 증상",
          "하루 소변 횟수: 6~8회가 정상, 3회 이하라면 물 섭취 부족",
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "하루 8잔(2L)이 정설인가요?",
            a: "과학적으로 정해진 절대 기준은 아닙니다. 개인 체중·활동량·날씨에 따라 적정량이 다릅니다. 소변 색을 확인하는 것이 가장 간단한 수분 상태 지표입니다.",
          },
          {
            q: "커피·차도 수분 섭취에 포함되나요?",
            a: "카페인이 소량이면 수분 섭취로 인정되지만, 카페인 과다 섭취는 이뇨 효과로 수분 손실이 생길 수 있습니다. 커피 1잔당 약 150~200mL를 실질 수분으로 계산하는 것이 보수적 추정입니다.",
          },
          {
            q: "물을 너무 많이 마시면 위험한가요?",
            a: "매우 드물지만 단시간에 과도한 물 섭취(수 리터 이상)는 저나트륨혈증(혈액 내 나트륨 희석)을 유발할 수 있습니다. 일반인은 하루 3~4L 이내에서는 크게 걱정할 필요 없습니다.",
          },
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
        사이클 사이의 가벼운 수면 구간에 기상하면 훨씬 개운하게 하루를 시작할 수 있습니다.
      </GuideP>

      <GuideH2>수면 단계와 역할</GuideH2>
      <GuideTable
        headers={["단계", "이름", "특징", "비율"]}
        rows={[
          ["1단계", "NREM 1 (얕은 수면)", "잠들기 직전, 소리에 민감, 쉽게 깸", "약 5%"],
          ["2단계", "NREM 2 (가벼운 수면)", "체온·심박 감소, 기억 정리 시작", "약 50%"],
          ["3단계", "NREM 3 (깊은 수면)", "성장호르몬 분비, 몸 회복, 깨기 어려움", "약 20%"],
          ["4단계", "REM (꿈 수면)", "뇌 활발, 꿈, 기억 통합, 감정 처리", "약 25%"],
        ]}
      />

      <GuideH2>수면 사이클 기상 시간 참고표 (취침 시각별)</GuideH2>
      <GuideTable
        headers={["취침 시각", "5사이클 (7.5h)", "6사이클 (9h)", "권장 기상 시각"]}
        rows={[
          ["오후 10:00", "오전 5:30", "오전 7:00", "오전 5:30 또는 7:00"],
          ["오후 10:30", "오전 6:00", "오전 7:30", "오전 6:00 또는 7:30"],
          ["오후 11:00", "오전 6:30", "오전 8:00", "오전 6:30 또는 8:00"],
          ["오후 11:30", "오전 7:00", "오전 8:30", "오전 7:00 또는 8:30"],
          ["오전 12:00", "오전 7:30", "오전 9:00", "오전 7:30 또는 9:00"],
        ]}
      />
      <GuideP className="text-neutral-500">※ 잠드는 데 평균 15분이 반영된 계산입니다. 개인 수면 패턴에 따라 다를 수 있습니다.</GuideP>

      <GuideH2>연령별 권장 수면 시간 (미국수면재단 기준)</GuideH2>
      <GuideTable
        headers={["연령", "권장 수면 시간"]}
        rows={[
          ["영아 (4~11개월)", "12~15시간"],
          ["유아 (1~2세)", "11~14시간"],
          ["학령전기 (3~5세)", "10~13시간"],
          ["학령기 (6~13세)", "9~11시간"],
          ["청소년 (14~17세)", "8~10시간"],
          ["성인 (18~64세)", "7~9시간"],
          ["노인 (65세 이상)", "7~8시간"],
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "사이클 중간에 일어나면 왜 피곤한가요?",
            a: "깊은 수면(NREM 3단계) 중에 깨면 수면 관성이 강해 멍하고 피곤한 상태가 됩니다. 90분 사이클이 끝나는 시점(REM 수면 후)에 기상하면 훨씬 개운합니다. 이 계산기는 사이클 끝 시점에 맞춘 기상 시간을 제안합니다.",
          },
          {
            q: "낮잠은 얼마나 자야 좋나요?",
            a: "20~30분(파워냅)이 집중력 회복에 가장 효과적입니다. 30분 이상 자면 깊은 수면에 들어가 오히려 기상 후 피곤할 수 있습니다. 오후 3시 이후 낮잠은 밤 수면에 영향을 줄 수 있으니 주의하세요.",
          },
          {
            q: "주말에 몰아 자면 주중 부족분이 보충되나요?",
            a: "단기적으로는 일부 보충 효과가 있지만, 장기적인 수면 부채는 완전히 해소되지 않습니다. 주말 늦잠은 평일보다 1~2시간 이내로 유지하는 것이 생체리듬 유지에 좋습니다.",
          },
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
          { q: "1RM을 알면 어떻게 훈련에 활용하나요?", a: "1RM의 70~80%는 근비대 훈련(8~12회), 85~95%는 근력 훈련(1~5회), 50~65%는 근지구력 훈련(15회 이상)에 적합합니다. 1RM을 기준으로 세트 무게를 설정하면 체계적인 점진적 과부하가 가능합니다." },
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
          { q: "운동을 시작하면 TDEE가 달라지나요?", a: "네, 근육량 증가와 활동 강도 변화에 따라 TDEE도 달라집니다. 체중이나 운동 강도가 크게 바뀔 때마다 재계산하는 것을 권장합니다. 특히 다이어트 정체기에는 TDEE를 재측정해 칼로리 설정을 조정하는 것이 효과적입니다." },
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
          { q: "배란 테스트기는 언제부터 사용하면 되나요?", a: "예상 배란일 5~7일 전부터 매일 같은 시간에 측정하는 것이 권장됩니다. LH(황체형성호르몬) 급등이 감지되면 24~48시간 내 배란이 예상됩니다. 이 계산기와 병행하면 정확도가 높아집니다." },
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
          { q: "혈중알코올농도(BAC)가 높으면 법적 처벌은?", a: "한국 도로교통법 기준: BAC 0.03% 이상 음주운전(면허정지), 0.08% 이상 면허취소·형사처벌. 0.2% 이상은 가중처벌 대상입니다. 수치는 기준일 뿐, 0.03% 미만도 사고 시 책임을 면하기 어렵습니다." },
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
        대출 원금·금리·기간을 입력해 <strong>월 상환액, 총 이자, 상환 스케줄</strong>을 미리 확인하는 도구입니다.
        은행 상담 전에 여러 조건으로 시뮬레이션하면 최적의 대출 조건을 찾는 데 도움이 됩니다.
      </GuideP>

      <GuideH2>상환 방식 비교</GuideH2>
      <GuideTable
        headers={["상환 방식", "월 납입액", "총 이자", "특징"]}
        rows={[
          ["원리금 균등", "동일 (고정)", "중간", "가장 일반적, 가계 예산 설계 용이"],
          ["원금 균등", "초기 높고 점차 감소", "가장 적음", "초기 부담 크지만 총이자 절감"],
          ["만기 일시 상환", "이자만 납부 (가장 적음)", "가장 많음", "만기에 원금 전액 상환 필요"],
        ]}
      />

      <GuideH2>대출 조건별 월 상환액 참고표 (원리금 균등 기준)</GuideH2>
      <GuideTable
        headers={["대출 원금", "금리", "기간", "월 상환액", "총 이자"]}
        rows={[
          ["1억 원", "연 4%", "10년", "약 1,012,451원", "약 21,494,120원"],
          ["1억 원", "연 4%", "20년", "약 605,980원", "약 45,435,200원"],
          ["2억 원", "연 4.5%", "30년", "약 1,013,370원", "약 164,813,200원"],
          ["3억 원", "연 5%", "30년", "약 1,610,466원", "약 279,767,760원"],
          ["5억 원", "연 4%", "30년", "약 2,387,080원", "약 359,348,800원"],
        ]}
      />
      <GuideP className="text-neutral-500">※ 위 금액은 참고용 추정치입니다. 실제 대출 조건(취급 수수료, 우대 금리 등)에 따라 달라질 수 있습니다.</GuideP>

      <GuideH2>고정금리 vs 변동금리 선택 기준</GuideH2>
      <GuideBulletList
        items={[
          "고정금리: 금리 상승기에 유리. 상환 기간 동안 월 납입액이 변하지 않아 예산 관리 쉬움",
          "변동금리: 금리 하락기에 유리. 초기 금리가 낮은 경우 많지만 오를 위험 있음",
          "혼합형(고정+변동): 초기 3~5년 고정 후 변동 전환. 중도 상환 계획 있을 때 고려",
          "DSR(총부채원리금상환비율): 연소득 대비 연간 원리금 상환액 비율 — 40% 이내 규제 적용",
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "원리금 균등과 원금 균등 중 어떤 게 유리한가요?",
            a: "총이자만 보면 원금 균등이 유리합니다. 같은 조건(1억, 5%, 20년)에서 원금 균등이 약 200~400만 원 이자가 적습니다. 단, 초기 납입액이 높으므로 소득이 충분할 때 선택하세요.",
          },
          {
            q: "중도상환 수수료는 얼마나 되나요?",
            a: "금융기관마다 다르지만 통상 대출잔액의 0.5~2% 수준이며, 가입 후 3년이 지나면 수수료가 면제되는 경우가 많습니다. 중도 상환 계획이 있다면 가입 전 약관을 반드시 확인하세요.",
          },
          {
            q: "금리 1% 차이가 실제로 얼마나 영향이 있나요?",
            a: "대출 1억 원, 30년 기준으로 금리가 1% 오르면 총이자가 약 2,000~2,500만 원 더 늘어납니다. 금리가 작아 보여도 장기 대출에서는 큰 차이를 만들어냅니다.",
          },
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
        이자에 이자가 붙는 <strong>복리(Compound Interest)</strong> 방식으로 투자 원리금을 계산합니다.
        처음에는 단리와 차이가 작아 보이지만, 시간이 길수록 그 차이는 기하급수적으로 커집니다.
        장기 투자·연금·ETF 등 복리가 적용되는 자산의 미래 가치를 미리 확인해보세요.
      </GuideP>

      <GuideH2>복리 계산 공식</GuideH2>
      <GuideFormulaBox>
        원리금 = 원금 × (1 + r ÷ n)^(n × t){"\n"}
        r = 연이율(소수), n = 연간 복리 횟수, t = 기간(년){"\n\n"}
        단리 원리금 = 원금 × (1 + r × t)  ← 비교용
      </GuideFormulaBox>

      <GuideH2>복리 vs 단리 비교 (원금 1,000만 원)</GuideH2>
      <GuideTable
        headers={["기간", "단리 5%", "복리 5% (연)", "복리 7% (연)", "복리 10% (연)"]}
        rows={[
          ["5년", "1,250만원", "1,276만원", "1,403만원", "1,611만원"],
          ["10년", "1,500만원", "1,629만원", "1,967만원", "2,594만원"],
          ["20년", "2,000만원", "2,653만원", "3,870만원", "6,727만원"],
          ["30년", "2,500만원", "4,322만원", "7,612만원", "1억 7,449만원"],
        ]}
      />
      <GuideP className="text-neutral-500">※ 세금·수수료 미반영 순수 복리 계산입니다. 실제 수익률은 투자 상품에 따라 다릅니다.</GuideP>

      <GuideH2>72의 법칙 — 원금이 2배 되는 기간</GuideH2>
      <GuideTable
        headers={["연 수익률", "2배 도달 기간 (72÷수익률)", "4배 도달 기간"]}
        rows={[
          ["3%", "약 24년", "약 48년"],
          ["5%", "약 14.4년", "약 28.8년"],
          ["7%", "약 10.3년", "약 20.6년"],
          ["10%", "약 7.2년", "약 14.4년"],
          ["15%", "약 4.8년", "약 9.6년"],
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "적금은 단리인가요, 복리인가요?",
            a: "국내 정기적금은 대부분 단리입니다. 복리 상품은 상품 설명서에 '복리'라고 명시되어 있습니다. ETF·펀드 재투자는 복리 효과가 있습니다.",
          },
          {
            q: "복리 주기가 짧을수록 유리한가요?",
            a: "네, 연 복리보다 월 복리가 조금 더 유리합니다. 연 6% 연 복리와 월 복리의 실질 수익 차이는 약 0.17%p입니다. 금리가 높을수록 이 차이가 커집니다.",
          },
          {
            q: "인플레이션을 고려한 실질 수익률은 어떻게 계산하나요?",
            a: "실질 수익률 ≈ 명목 수익률 − 인플레이션율. 예를 들어 연 7% 투자에 물가가 3% 오른다면 실질 수익률은 약 4%입니다. 장기 재무 계획에서는 실질 수익률로 계산하는 것이 더 정확합니다.",
          },
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
        여행·해외 쇼핑·송금 전에 미리 환산해보고 환전 계획을 세우세요.
        실시간 환율은 은행 앱이나 네이버에서 확인 후 입력하면 정확하게 계산할 수 있습니다.
      </GuideP>

      <GuideH2>환율 용어 정리</GuideH2>
      <GuideTable
        headers={["용어", "설명", "활용 시점"]}
        rows={[
          ["매매 기준율", "은행이 고시하는 기준 환율 (뉴스에서 보는 환율)", "환율 참고용"],
          ["현찰 살 때", "외화를 현금으로 살 때 적용 (기준율보다 높음)", "해외 여행 환전 시"],
          ["현찰 팔 때", "외화 현금을 원화로 팔 때 적용 (기준율보다 낮음)", "귀국 후 외화 환전"],
          ["전신환 살 때", "송금·외화통장에 적용 (현찰보다 유리)", "해외 송금·외화예금"],
          ["스프레드", "살 때 환율 − 팔 때 환율 (은행 수수료)", "낮을수록 유리"],
        ]}
      />

      <GuideH2>환전 방법별 비교</GuideH2>
      <GuideTable
        headers={["환전 방법", "수수료 수준", "장점", "단점"]}
        rows={[
          ["은행 앱 환전 후 수령", "우대율 70~90%", "낮은 수수료", "사전 신청 필요"],
          ["토스·카카오페이 환전", "우대율 90~100%", "매우 낮은 수수료", "일부 통화 미지원"],
          ["공항 환전소", "우대율 0~30%", "현장 즉시 환전", "수수료 높음"],
          ["시내 사설 환전소", "우대율 50~80%", "달러·엔 유리할 때 있음", "위치 제한"],
          ["해외 현지 ATM 출금", "카드사 수수료 1~3%", "도착 후 즉시 이용", "수수료 별도 부과"],
          ["해외 신용카드 결제", "카드사 환율 적용", "편리함", "환율 확인 어려움"],
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "공항 환전 vs 은행 앱 환전 어느 게 유리한가요?",
            a: "일반적으로 은행 앱(토스·카카오·하나 등) 환전 후 공항 수령이 가장 수수료가 낮습니다. 공항 현장 환전소는 편리하지만 스프레드가 커서 불리합니다. 미리 계획하면 환전 비용을 크게 줄일 수 있습니다.",
          },
          {
            q: "해외 카드 결제 시 환율은 언제 확정되나요?",
            a: "카드사마다 다르지만 보통 결제 승인일이 아닌 매입 처리일(1~3영업일 후)의 환율이 적용됩니다. 결제 당시와 실제 청구 환율이 다를 수 있으니 큰 금액 결제 시 주의하세요.",
          },
          {
            q: "달러로 환전하는 게 유리한가요, 현지 통화로 바로 환전하는 게 유리한가요?",
            a: "미국 달러 → 현지 통화 교차 환전은 두 번 환전 수수료가 발생할 수 있습니다. 유로·엔·위안처럼 직거래 환율이 있는 통화는 원화에서 직접 환전하는 것이 대체로 유리합니다.",
          },
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
        사업자 세금계산서 발행, 견적서 작성, 영수증 확인 등에 활용할 수 있습니다.
        프리랜서·소규모 사업자라면 공급가액 vs 부가세 포함가 개념을 정확히 알아두세요.
      </GuideP>

      <GuideH2>부가세 계산 공식</GuideH2>
      <GuideFormulaBox>
        공급가액(VAT 별도) → 청구액 = 공급가액 × 1.1{"\n"}
        청구액(VAT 포함) → 공급가액 = 청구액 ÷ 1.1{"\n"}
        부가세 = 공급가액 × 0.1
      </GuideFormulaBox>

      <GuideH2>금액별 부가세 계산 예시</GuideH2>
      <GuideTable
        headers={["공급가액 (VAT 별도)", "부가세 (10%)", "청구 총액 (VAT 포함)"]}
        rows={[
          ["100,000원", "10,000원", "110,000원"],
          ["500,000원", "50,000원", "550,000원"],
          ["1,000,000원", "100,000원", "1,100,000원"],
          ["3,000,000원", "300,000원", "3,300,000원"],
          ["10,000,000원", "1,000,000원", "11,000,000원"],
        ]}
      />

      <GuideH2>과세·면세·영세율 구분</GuideH2>
      <GuideTable
        headers={["구분", "부가세율", "해당 품목 예시"]}
        rows={[
          ["과세", "10%", "일반 상품·서비스, 음식점, 소프트웨어, 프리랜서 용역"],
          ["면세", "0% (환급 없음)", "기초 식품류, 의료, 교육, 도서, 금융"],
          ["영세율", "0% (매입세액 환급 가능)", "수출 물품, 국제 용역, 외국 항행 선박"],
        ]}
      />
      <GuideBulletList
        items={[
          "간이과세자 (연 매출 8,000만원 미만): 업종별 부가가치율 적용 → 납부세액이 일반과세자보다 낮음",
          "프리랜서(3.3% 원천징수): 부가세와 별개 — 사업자 등록 없으면 부가세 신고 의무 없음",
          "세금계산서 발행 의무: 과세 사업자는 거래 시 세금계산서 또는 영수증 발행 필수",
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "음식점은 부가세가 있나요?",
            a: "음식점은 과세 사업자로 부가세 10%가 붙습니다. 영수증에 부가세가 별도 표시됩니다. 단, 간이과세자는 실제 납부세액이 다를 수 있어요. 슈퍼마켓의 미가공 식품(채소·고기 등)은 면세입니다.",
          },
          {
            q: "부가세 환급은 언제, 어떻게 받나요?",
            a: "매입세액(구매 시 낸 부가세)이 매출세액(판매 시 받은 부가세)보다 크면 환급 신청이 가능합니다. 일반 과세자는 1월·4월·7월·10월 신고 후 환급, 간이과세자는 1월 연 1회 신고합니다.",
          },
          {
            q: "프리랜서 용역비에도 부가세를 받아야 하나요?",
            a: "사업자 등록을 한 개인사업자라면 부가세를 별도로 청구할 수 있습니다(공급가액 × 10%). 미등록 프리랜서는 3.3% 원천징수만 적용되어 부가세 별도 청구가 불가합니다.",
          },
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
          { q: "생활기록부 세특을 잘 쓰는 팁이 있나요?", a: "교과목과 관련된 활동·독서·탐구 과정과 결과를 구체적 수치와 사례로 서술하세요. 단순 나열보다 '~을 통해 ~를 깨달았다'는 성장 서사가 입시에서 높이 평가됩니다. 글자 수 내에서 핵심 키워드를 먼저 정해 역순으로 채우는 방법이 효과적입니다." },
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
          { q: "편입·대학원 지원 시 GPA 기준은?", a: "편입 최소 GPA는 대학마다 다르지만 보통 2.5~3.0/4.5 이상을 요구합니다. 미국 대학원은 3.0/4.0 이상이 일반적이며, 상위권은 3.5+ 요구. 낮은 GPA는 연구 경험·추천서·SOP로 보완하는 것이 전략입니다." },
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
          { q: "평균을 낼 때 가중치를 주는 방법은?", a: "항목마다 중요도(가중치)가 다를 때는 가중평균을 씁니다. 가중평균 = Σ(값×가중치) ÷ Σ(가중치). 예: 중간고사(40%)·기말고사(60%) → (80×0.4 + 90×0.6) = 86점." },
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
        생년월일을 입력해 <strong>만 나이</strong>·세는 나이·연 나이를 동시에 확인하는 도구입니다.
        2023년 6월부터 한국의 법적·행정적 나이 기준이 <strong>만 나이로 통일</strong>되었습니다.
        이제 주민등록·의료·계약서 등 공식 서류에서는 만 나이를 기준으로 합니다.
      </GuideP>

      <GuideH2>나이 계산 방식 비교</GuideH2>
      <GuideTable
        headers={["구분", "계산 방식", "예시 (1995년 8월생, 현재 2026년 6월)"]}
        rows={[
          ["만 나이 (법적 기준)", "현재 날짜 − 생년월일 (생일 이전이면 −1)", "30세 (생일 전)"],
          ["세는 나이 (한국 전통)", "현재 연도 − 출생 연도 + 1", "32세"],
          ["연 나이 (연도 차이)", "현재 연도 − 출생 연도", "31세"],
        ]}
      />

      <GuideH2>만 나이로 통일 후 달라지는 점</GuideH2>
      <GuideBulletList
        items={[
          "행정·복지·의료 서비스의 나이 기준 → 만 나이 적용",
          "계약서·보험·의료 기록에서 나이 표기 → 만 나이 기준",
          "단, 병역법: 연 나이(징병검사·입영 기준) 유지",
          "청소년보호법: 연 나이(만 19세 미만) 기준 유지",
          "초등학교 입학: 연 나이 기준(해당 연도 만 6세) 유지",
          "국민연금·건강보험 수령 연령: 만 나이 적용",
        ]}
      />

      <GuideH2>만 나이가 중요한 주요 시점</GuideH2>
      <GuideTable
        headers={["기준 나이", "해당 내용"]}
        rows={[
          ["만 18세", "선거권 취득, 운전면허 취득 가능"],
          ["만 19세", "성인 (주류·담배 구매, 청소년 보호법 적용 제외)"],
          ["만 60세", "노인복지 일부 혜택 시작"],
          ["만 65세", "노인장기요양보험 적용, 기초연금 수급 개시"],
          ["만 62~65세", "국민연금 노령연금 수령 개시 (출생연도별 다름)"],
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "생일이 아직 안 지났으면 만 나이가 어떻게 계산되나요?",
            a: "만 나이는 생일이 지나야 1살이 올라갑니다. 예를 들어 1995년 8월생이 2026년 6월이라면 아직 생일이 지나지 않아 만 30세입니다. 8월 생일 이후부터 만 31세가 됩니다.",
          },
          {
            q: "술·담배는 만 나이 19세, 아니면 세는 나이 19세인가요?",
            a: "청소년보호법은 연 나이(해당 연도 − 출생 연도 = 19세)를 기준으로 합니다. 1월 1일에 일괄적으로 한 살이 올라가는 방식이어서, 12월생도 1월 1일부터 성인으로 취급됩니다.",
          },
          {
            q: "만 나이 통일 이후에도 헷갈리는 경우가 있나요?",
            a: "병역법·청소년보호법·초등학교 입학 기준은 기존 연 나이를 유지해 혼란이 있을 수 있습니다. 공식 서류나 제도 이용 시 해당 법령의 나이 기준을 확인하는 것이 안전합니다.",
          },
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
          { q: "법적 기간 계산(소멸시효·계약 만료 등)에 이 계산기를 사용해도 되나요?", a: "이 계산기는 참고용입니다. 법적 기간 계산은 '초일 불산입 원칙'(민법 157조)이나 말일 도래 원칙 등 세부 규정이 적용됩니다. 중요한 법적 기간은 반드시 변호사·법무사에게 확인하세요." },
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
          { q: "복무 기간은 어떻게 되나요?", a: "육군·해병대 18개월, 해군 20개월, 공군 21개월이 기준입니다(2026년 기준, 변경 가능)." },
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
          { q: "연봉 협상에서 인상률을 제시할 때 어떻게 근거를 댈 수 있나요?", a: "물가 상승률(소비자물가지수, CPI), 동종 업계 연봉 조사(잡코리아·크레딧잡 등), 본인 성과 지표(매출 기여·프로젝트 성과)를 구체적인 수치로 제시하면 설득력이 높아집니다." },
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
          { q: "연봉 인상이 없는 해에도 실질 소득이 오를 수 있나요?", a: "세금 공제 한도 조정, 비과세 항목 확대, 4대 보험 요율 변경 등으로 실수령액이 소폭 늘어날 수 있습니다. 또한 성과급·인센티브나 복지 포인트 증가도 총 보상 증가로 볼 수 있습니다." },
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
        은퇴 후 필요한 월 생활비와 예상 은퇴 기간을 입력해 <strong>필요한 총 노후자금</strong>과
        지금부터 매월 얼마씩 저축해야 하는지를 추정하는 도구입니다.
        은퇴 준비는 이를수록 복리 효과로 훨씬 적은 금액으로 목표를 달성할 수 있습니다.
      </GuideP>

      <GuideH2>노후자금 계산 구조</GuideH2>
      <GuideFormulaBox>
        필요 노후자금 = 월 생활비 × 12 × 은퇴 기간(년) × 물가상승 조정계수{"\n"}
        월 저축 필요액 = PMT(이자율, 기간, 목표금액)  ← 연금 현재가치 공식
      </GuideFormulaBox>
      <GuideP className="text-neutral-500">※ 물가상승률 2~3%를 반영하면 실제 필요 금액이 더 커집니다. 보수적으로 계획하세요.</GuideP>

      <GuideH2>월 생활비별 필요 노후자금 참고표 (은퇴 기간 25년, 물가상승 2% 가정)</GuideH2>
      <GuideTable
        headers={["은퇴 후 월 생활비", "단순 합산 (×12×25)", "물가 반영 필요금액 (약)"]}
        rows={[
          ["150만 원", "4억 5,000만원", "약 5.7억원"],
          ["200만 원", "6억원", "약 7.6억원"],
          ["250만 원", "7억 5,000만원", "약 9.5억원"],
          ["300만 원", "9억원", "약 11.4억원"],
          ["400만 원", "12억원", "약 15.2억원"],
        ]}
      />
      <GuideP className="text-neutral-500">※ 국민연금·퇴직연금 수령액을 차감하면 실제 개인 준비 금액이 줄어듭니다.</GuideP>

      <GuideH2>노후 재원 3층 구조</GuideH2>
      <GuideTable
        headers={["층", "재원", "특징"]}
        rows={[
          ["1층", "국민연금", "공적 연금, 강제 가입, 물가 연동, 종신 지급"],
          ["2층", "퇴직연금 (DC·DB·IRP)", "직장 재직 중 적립, 세제 혜택, 수령 시 세금 이연"],
          ["3층", "개인 저축·투자 (연금저축·ETF 등)", "본인 선택, 세액공제 혜택 활용 가능"],
        ]}
      />
      <GuideBulletList
        items={[
          "국민연금 예상 수령액: 국민연금공단 내연금 조회(nps.or.kr)에서 확인",
          "연금저축·IRP 납입 시 연 최대 900만원까지 세액공제 (공제율 13.2~16.5%)",
          "은퇴 전 최소 10년은 집중 저축 기간으로 운영하는 것을 권장",
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "국민연금과 퇴직연금은 노후자금에서 빼야 하나요?",
            a: "네. 국민연금 예상 수령액(nps.or.kr 조회)과 퇴직연금 적립액을 노후자금에서 차감하면 개인이 추가로 준비해야 할 금액이 나옵니다. 두 연금만으로 충분하지 않은 경우가 많아 개인 저축이 반드시 필요합니다.",
          },
          {
            q: "기대 수명을 얼마로 설정해야 하나요?",
            a: "한국 평균 기대 수명은 약 83세(2023년)이지만, 의료기술 발달로 계속 늘어나는 추세입니다. 장수 리스크 대비로 90~95세로 넉넉히 설정하는 것을 권장합니다. 너무 짧게 잡으면 노후 자금이 고갈될 수 있습니다.",
          },
          {
            q: "40대에 시작해도 늦지 않나요?",
            a: "늦을수록 월 저축 필요액이 커지지만 시작하지 않는 것보다 훨씬 낫습니다. 40세에 시작해도 25년간 복리 투자로 상당한 자산을 형성할 수 있습니다. 연금저축·IRP 세액공제를 최대한 활용하면 절세 효과도 큽니다.",
          },
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
          { q: "육아휴직·군복무 기간도 근속에 포함되나요?", a: "육아휴직은 근로기준법상 근속 기간에 포함됩니다. 군복무(현역)는 회사 취업규칙이나 단체협약에 따라 다릅니다. 공무원의 경우 군복무 기간이 호봉 산정에 반영됩니다." },
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
          { q: "탄력 근무제·선택 근무제에서 연장근무 기준은?", a: "탄력 근무제(2주·3개월 단위)는 해당 단위 기간 평균 주 40시간 초과분이 연장근무입니다. 선택 근무제는 정산 기간(1개월)의 실근로시간이 소정근로시간 초과분에 대해 연장수당이 발생합니다." },
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
          { q: "경력 공백기가 있으면 이력서에 어떻게 써야 하나요?", a: "공백기를 숨기려 하지 말고 자기계발·육아·건강 회복 등 사유를 간결히 기재하세요. 그 기간에 취득한 자격증·수강 이력이 있다면 적극적으로 표시합니다. 면접에서 성장 관점으로 설명하는 것이 더 중요합니다." },
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
          "2026년 최저시급은 10,320원입니다.",
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
          { q: "수습 기간에도 최저임금이 적용되나요?", a: "수습 시작 후 3개월 이내에는 최저임금의 90%를 지급할 수 있습니다. 단, 1년 미만 계약직은 90% 감액 적용 불가입니다. 수습 계약서에 이 내용이 명시되어야 합니다." },
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
          { q: "UPH를 높이기 위한 현장 개선 방법은?", a: "작업 동선 단축(레이아웃 최적화), 빈번한 대기 원인 제거(자재 부족·설비 가동중단 등), 표준 작업 절차(SOP) 교육, 짧은 휴식 주기(피로 감소)가 효과적입니다. 무리한 속도 향상보다 낭비(Muda) 제거가 지속 가능한 UPH 향상의 핵심입니다." },
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
          { q: "성과급을 IRP에 넣으면 세금을 줄일 수 있나요?", a: "성과급 자체를 IRP에 바로 넣어 절세하는 방법은 없습니다. 단, IRP에 연간 900만 원(퇴직연금 포함)까지 납입하면 세액공제(13.2~16.5%)를 받을 수 있어 연말정산에서 절세 효과를 얻을 수 있습니다." },
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
        연말정산 전 예상 환급·추가납부 여부를 가늠하거나, 프리랜서·자영업자의 종합소득세 납부 예측에 활용하세요.
      </GuideP>

      <GuideH2>2026년 소득세율 구간</GuideH2>
      <GuideTable
        headers={["과세표준 (연간)", "세율", "누진공제", "지방소득세 포함 실효세율 상한"]}
        rows={[
          ["1,400만 원 이하", "6%", "—", "6.6%"],
          ["1,400만~5,000만 원", "15%", "126만 원", "16.5%"],
          ["5,000만~8,800만 원", "24%", "576만 원", "26.4%"],
          ["8,800만~1.5억 원", "35%", "1,544만 원", "38.5%"],
          ["1.5억~3억 원", "38%", "1,994만 원", "41.8%"],
          ["3억~5억 원", "40%", "2,594만 원", "44.0%"],
          ["5억~10억 원", "42%", "3,594만 원", "46.2%"],
          ["10억 원 초과", "45%", "6,594만 원", "49.5%"],
        ]}
      />
      <GuideP className="text-neutral-500">※ 과세표준 = 총 급여 − 근로소득공제 − 인적공제 − 특별공제 등. 총 급여와 세율이 바로 연결되지 않습니다.</GuideP>

      <GuideH2>연봉별 예상 세부담 참고표 (근로소득자, 부양가족 없음 기준)</GuideH2>
      <GuideTable
        headers={["세전 연봉", "근로소득공제 후 과세표준(약)", "소득세(약)", "지방소득세", "합계 세부담"]}
        rows={[
          ["3,000만 원", "약 1,050만 원", "약 63만 원", "약 6.3만 원", "약 69.3만 원"],
          ["5,000만 원", "약 2,400만 원", "약 234만 원", "약 23.4만 원", "약 257.4만 원"],
          ["7,000만 원", "약 4,050만 원", "약 481만 원", "약 48.1만 원", "약 529.1만 원"],
          ["1억 원", "약 6,700만 원", "약 1,033만 원", "약 103.3만 원", "약 1,136.3만 원"],
          ["1억 5,000만 원", "약 1.14억 원", "약 2,396만 원", "약 239.6만 원", "약 2,636만 원"],
        ]}
      />
      <GuideP className="text-neutral-500">※ 위 수치는 참고용 추정치이며, 실제 세액은 각종 공제 항목에 따라 크게 달라집니다.</GuideP>

      <GuideH2>세금을 줄이는 주요 공제 항목</GuideH2>
      <GuideBulletList
        items={[
          "연금저축·IRP: 연 900만원 한도 세액공제 (공제율 13.2~16.5%)",
          "의료비: 총 급여의 3% 초과분 공제 (한도 없음, 본인·65세 이상·장애인)",
          "교육비: 대학생 자녀 연 900만원, 초중고 연 300만원 한도",
          "주택청약저축: 무주택자 연 240만원 한도 40% 공제",
          "신용카드: 총 급여의 25% 초과 사용분 15~40% 공제",
          "기부금: 법정·지정 기부금 15~30% 세액공제",
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "지방소득세도 따로 내야 하나요?",
            a: "네, 소득세의 10%를 지방소득세로 납부합니다. 예를 들어 소득세 100만원이라면 지방소득세 10만원이 추가되어 총 110만원을 납부합니다.",
          },
          {
            q: "연말정산에서 환급을 많이 받으려면?",
            a: "연금저축·IRP(세액공제), 신용카드(소득공제), 의료비·교육비(세액공제)를 최대한 활용하세요. 특히 연금저축·IRP는 실제 세금이 공제율만큼 줄어드는 직접적인 절세 효과가 있습니다.",
          },
          {
            q: "프리랜서는 소득세를 어떻게 내나요?",
            a: "3.3% 원천징수로 미리 납부하고, 매년 5월에 종합소득세 신고를 통해 정산합니다. 실제 경비(장비·통신비·교통비 등)를 공제하면 환급받는 경우도 많습니다.",
          },
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
        연도별 최저시급을 기준으로 시급·일급·월급 최저임금을 계산하고, 현재 받는 임금이
        법정 최저임금을 충족하는지 확인하는 도구입니다.
        최저임금은 근로자의 생계비·임금 실태·노·사·공익 협의를 통해 매년 결정됩니다.
      </GuideP>

      <GuideH2>연도별 최저시급 변화</GuideH2>
      <GuideTable
        headers={["연도", "최저시급", "전년 대비 인상액", "인상률", "월 최저임금 (209h)"]}
        rows={[
          ["2021년", "8,720원", "+130원", "+1.5%", "1,822,480원"],
          ["2022년", "9,160원", "+440원", "+5.0%", "1,914,440원"],
          ["2023년", "9,620원", "+460원", "+5.0%", "2,010,580원"],
          ["2024년", "9,860원", "+240원", "+2.5%", "2,060,740원"],
          ["2025년", "10,030원", "+170원", "+1.7%", "2,096,270원"],
          ["2026년", "10,320원", "+290원", "+2.9%", "2,156,880원"],
        ]}
      />
      <GuideP className="text-neutral-500">※ 2026년 최저시급 10,320원 (월 2,156,880원, 209시간 기준). 매년 8월 고용노동부 공시.</GuideP>

      <GuideH2>최저임금 적용 기준</GuideH2>
      <GuideTable
        headers={["구분", "내용"]}
        rows={[
          ["시간급", "최저시급 × 근무 시간"],
          ["일급", "최저시급 × 1일 소정 근로시간"],
          ["월급 (주 40h·월 209h)", "최저시급 × 209시간 (주휴수당 포함)"],
          ["적용 대상", "국내 모든 사업장·모든 근로자 (외국인 포함)"],
          ["감액 가능", "수습 3개월 이내·1년 이상 계약·단순 노무직 제외 → 최저임금의 90%"],
        ]}
      />
      <GuideBulletList
        items={[
          "식대·교통비 등 복리후생비는 최저임금 산입 제외 (연 환산 최저임금의 1% 이내는 포함)",
          "상여금: 연 환산 최저임금의 25% 초과분만 산입 가능 (현행 기준)",
          "최저임금에 포함 안 되는 것: 초과근무수당, 연차수당, 비정기 수당",
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "최저임금 위반 시 어떻게 신고하나요?",
            a: "고용노동부 고객상담센터(국번 없이 1350) 또는 가까운 고용노동지청에 진정서를 제출할 수 있습니다. 임금 체불 신고도 동일합니다. 신고에 따른 불이익 처우는 법으로 금지되어 있습니다.",
          },
          {
            q: "수습 기간에 최저임금보다 낮게 받아도 되나요?",
            a: "1년 이상 기간의 근로계약을 체결한 경우 수습 3개월 이내 10% 감액이 가능합니다(최저임금의 90%). 단, 단순 노무 직종(편의점·배달 등)은 감액이 불가합니다.",
          },
          {
            q: "식대·교통비를 포함해서 최저임금 이상이라고 하는데 맞나요?",
            a: "식대·교통비 등 복리후생비는 최저임금 산입 범위에서 제외됩니다. 기본급과 고정 수당만으로 최저임금 이상이어야 합니다. 회사가 복리후생비를 포함해 최저임금을 맞추겠다고 하면 위법일 수 있습니다.",
          },
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
          { q: "연차 촉진 서면 통보를 구두로만 받았는데 유효한가요?", a: "연차 촉진은 서면(문자·이메일도 인정)으로 통보해야 법적 효력이 있습니다. 구두 통보만 있었다면 적법한 촉진으로 인정되지 않아 미사용 연차 수당 청구가 가능합니다." },
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
          { q: "지각·조퇴는 출근으로 인정되나요?", a: "지각·조퇴는 출근은 했으나 소정근로시간을 채우지 못한 것으로, 출근율 계산에서 '출근한 것'으로 봅니다. 단, 취업규칙에 따라 지각 3회를 결근 1회로 처리하는 회사도 있습니다." },
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
          { q: "중소기업 감면 대상인데 회사가 신청을 안 해줬다면?", a: "중소기업 취업자 소득세 감면은 근로자가 직접 세액공제 신청서를 작성해 회사에 제출할 수 있습니다. 미신청으로 과납한 세금은 최대 5년 이내 경정청구로 환급 가능합니다." },
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
          ["배우자 출산휴가", "20일 (유급)", "출산일로부터 90일 이내"],
          ["육아휴직", "최대 1년 (부모 각각)", "만 8세 이하 또는 초등 2학년 이하"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "출산휴가와 육아휴직을 연달아 쓸 수 있나요?", a: "네, 출산전후휴가 종료 직후 육아휴직을 연달아 사용할 수 있습니다. 고용보험 급여도 이어서 신청 가능합니다." },
          { q: "육아휴직 중 회사가 해고할 수 있나요?", a: "육아휴직 기간과 복직 후 30일 이내에는 해고가 금지됩니다(근로기준법 23조)." },
          { q: "출산전후휴가 급여는 전액 고용보험에서 지급되나요?", a: "우선지원대상기업(중소기업)은 90일 전액 고용보험 지원, 대규모 기업은 최초 45일은 사업주 부담, 나머지 45일만 고용보험에서 지원합니다. 지급 상한은 월 210만 원(2026년 기준)입니다." },
        ]}
      />
    </>
  );
}

function EitcGuide() {
  return (
    <>
      <GuideH2>근로장려금(EITC)이란?</GuideH2>
      <GuideP>
        일은 하지만 소득이 적어 생활이 어려운 가구에 국세청이 현금을 지원하는 제도입니다.
        근로장려금(EITC, Earned Income Tax Credit)은 소득·재산·가구 요건을 충족하면 별도의 신청만으로
        최대 수백만 원을 받을 수 있으며, <strong>세금을 낸 적이 없어도 지급</strong>됩니다.
      </GuideP>

      <GuideH2>2026년 수급 요건 및 최대 지급액</GuideH2>
      <GuideTable
        headers={["가구 유형", "소득 요건 (총급여 기준)", "최대 지급액", "해당 가구 예시"]}
        rows={[
          ["단독 가구", "2,200만 원 미만", "165만 원", "배우자·부양자녀·70세 이상 부모 없는 1인"],
          ["홑벌이 가구", "3,200만 원 미만", "285만 원", "배우자 또는 부양자녀·70세 이상 부모 있는 가구"],
          ["맞벌이 가구", "3,800만 원 미만", "330만 원", "배우자 총급여 300만 원 이상인 가구"],
        ]}
      />
      <GuideBulletList
        items={[
          "재산 요건: 가구원 합산 재산 2.4억 원 미만 (1.7억~2.4억 구간은 50% 감액)",
          "총소득에는 근로소득·사업소득·종교인소득 등이 포함됨",
          "소득이 너무 낮아도(지급액이 점진적으로 감소), 너무 높아도 지급 없음 (역U자형 구조)",
        ]}
      />

      <GuideH2>신청 방법 및 지급 일정</GuideH2>
      <GuideTable
        headers={["신청 유형", "신청 기간", "지급 시기", "지급 비율"]}
        rows={[
          ["정기 신청 (연 1회)", "매년 5월 1일~31일", "8~9월 지급", "전액"],
          ["반기 신청 (상반기분)", "매년 9월 1일~15일", "12월 지급", "35% 선지급"],
          ["반기 신청 (하반기분)", "매년 3월 1일~15일", "6월 지급", "35% 선지급 → 9월 정산"],
        ]}
      />
      <GuideBulletList
        items={[
          "홈택스(hometax.go.kr)·손택스 앱·ARS(1544-9944)·주민센터에서 신청 가능",
          "국세청이 대상자에게 안내 문자 발송 → 확인 후 바로 신청 가능",
          "자녀장려금(1인당 최대 100만 원)과 중복 신청 가능",
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "세금을 낸 적이 없어도 받을 수 있나요?",
            a: "네. 근로장려금은 세액 환급이 아닌 복지 성격의 현금 지원입니다. 소득세를 낸 적이 없어도 소득·재산 요건만 충족하면 수급 가능합니다.",
          },
          {
            q: "프리랜서·플랫폼 종사자도 받을 수 있나요?",
            a: "사업소득·기타소득(3.3% 원천징수 프리랜서 포함)으로 신고된 경우도 가구·소득 요건을 충족하면 수급 가능합니다. 단, 소득이 종합소득세로 신고되어야 합니다.",
          },
          {
            q: "재산이 1억 7천만원인 경우 감액되나요?",
            a: "재산이 1.7억~2.4억 원 구간에 해당하면 장려금이 50% 감액됩니다. 2.4억 원 이상이면 수급 자격이 없습니다. 재산에는 부동산·자동차·금융자산 등이 포함됩니다.",
          },
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
          { q: "소득이 없는 달(무급 휴직 등)은 월평균 계산에서 어떻게 처리하나요?", a: "무급 휴직 기간은 보통 월수에서 제외하고 소득 있는 달의 평균으로 계산합니다. 단, 기준 중위소득 비교나 대출 심사에서 활용할 때는 금융기관·기관별로 계산 방식이 다를 수 있으니 확인이 필요합니다." },
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
        한국인 BMI 정상 범위(18.5~22.9)에 해당하는 체중 구간을 참고 기준으로 제시합니다.
        표준 체중은 목표 체중이 아닌 <strong>건강 범위의 기준점</strong>으로 활용하세요.
      </GuideP>

      <GuideH2>표준 체중 계산 공식</GuideH2>
      <GuideFormulaBox>
        표준 체중(남성) ≈ 신장(m)² × 22  (BMI 22 기준){"\n"}
        표준 체중(여성) ≈ 신장(m)² × 21  (BMI 21 기준){"\n\n"}
        건강 체중 범위 = 신장(m)² × 18.5  ~  신장(m)² × 22.9
      </GuideFormulaBox>

      <GuideH2>신장별 표준 체중 및 건강 범위 참고표</GuideH2>
      <GuideTable
        headers={["신장", "표준 체중 (남)", "표준 체중 (여)", "건강 체중 범위 (BMI 18.5~22.9)"]}
        rows={[
          ["155cm", "52.8kg", "50.4kg", "44.4~55.0kg"],
          ["160cm", "56.3kg", "53.8kg", "47.4~58.6kg"],
          ["165cm", "59.9kg", "57.2kg", "50.3~62.3kg"],
          ["170cm", "63.6kg", "60.7kg", "53.5~66.2kg"],
          ["175cm", "67.4kg", "64.3kg", "56.7~70.2kg"],
          ["180cm", "71.3kg", "68.0kg", "59.9~74.2kg"],
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "표준 체중이 꼭 목표 체중이어야 하나요?",
            a: "아닙니다. 표준 체중은 통계 기반 참고값으로 개인의 근육량·골격·체형에 따라 건강 체중은 다를 수 있습니다. 특히 근육량이 많은 경우 표준 체중보다 높아도 대사 지표가 정상일 수 있습니다.",
          },
          {
            q: "표준 체중과 BMI, 어느 것을 더 믿어야 하나요?",
            a: "표준 체중 공식(신장² × 22)은 BMI 22를 기준으로 역산한 것으로 사실상 같은 개념입니다. 둘 다 체지방률을 직접 측정하지 않기 때문에 참고 지표로만 활용하고, 혈액 검사·허리둘레 등과 함께 건강을 평가하세요.",
          },
          {
            q: "체중을 표준으로 만들기 위해 얼마나 감량해야 하나요?",
            a: "현재 체중 − 표준 체중 = 감량 목표. 주 0.3~0.5kg 감량 속도가 근손실 없이 지속 가능한 건강한 속도입니다. 1kg 지방 소모에 약 7,700kcal 적자가 필요합니다.",
          },
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
        단백질은 근육 합성·면역·효소 생성에 필수적인 영양소로,
        섭취가 부족하면 근손실과 회복 지연이 발생합니다.
      </GuideP>

      <GuideH2>목적별 단백질 권장량</GuideH2>
      <GuideTable
        headers={["목적 / 활동 수준", "체중 kg당 권장량", "60kg 기준 하루 목표"]}
        rows={[
          ["일반 성인 (비운동)", "0.8g/kg", "48g"],
          ["가벼운 유산소 운동 (주 3회 이하)", "1.0~1.2g/kg", "60~72g"],
          ["중강도 운동 (주 4~5회)", "1.2~1.6g/kg", "72~96g"],
          ["근력 운동 목적 (유지)", "1.6~1.8g/kg", "96~108g"],
          ["근육 증가 목적 (벌크업)", "1.8~2.2g/kg", "108~132g"],
          ["감량 중 근육 보존", "2.0~2.4g/kg", "120~144g"],
          ["노인 (65세 이상)", "1.0~1.2g/kg", "60~72g"],
        ]}
      />

      <GuideH2>주요 식품별 단백질 함량 참고</GuideH2>
      <GuideTable
        headers={["식품", "1회 제공량", "단백질 함량"]}
        rows={[
          ["닭가슴살 (구이)", "100g", "약 23g"],
          ["달걀", "1개 (약 55g)", "약 7g"],
          ["두부 (순두부)", "100g", "약 5g"],
          ["연어", "100g", "약 22g"],
          ["그릭요거트", "100g", "약 10g"],
          ["프로틴 파우더 (WPC)", "1스쿱 (약 30g)", "약 22~25g"],
          ["콩 (삶은 것)", "100g", "약 9g"],
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "단백질을 너무 많이 먹으면 해롭나요?",
            a: "건강한 신장 기능을 가진 성인에게 하루 2~3g/kg까지는 대체로 안전합니다. 단, 신장 질환이 있는 경우 단백질 제한이 필요하므로 의사와 상담하세요. 과다 섭취분은 지방으로 전환되거나 소변으로 배출됩니다.",
          },
          {
            q: "한 번에 얼마나 먹을 수 있나요?",
            a: "한 번에 흡수되는 단백질 양에 대한 오래된 통념(30g 상한)은 사실이 아닙니다. 다만 한 번에 40~50g 이상 섭취해도 합성 속도는 비슷하므로, 하루 권장량을 3~4끼에 나눠 먹는 것이 근합성 효율에 유리합니다.",
          },
          {
            q: "식사로 부족할 때 프로틴 보충제를 꼭 먹어야 하나요?",
            a: "음식으로 충분히 섭취할 수 있다면 보충제는 불필요합니다. 닭가슴살·달걀·두부 등으로 목표량을 채우기 어려울 때 편의성 차원에서 활용하는 것이 바람직합니다.",
          },
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
        LBM(Lean Body Mass, 제지방량)은 체중에서 체지방량을 뺀 값으로 근육·뼈·장기·수분의 총 질량입니다.
        체성분 분석기 없이도 신장·체중으로 추정할 수 있으며, 다이어트·벌크업 목표 설정과
        단백질 섭취량·BMR 계산의 기준으로 활용됩니다.
      </GuideP>

      <GuideH2>LBM 계산 공식</GuideH2>
      <GuideFormulaBox>
        Boer 공식{"\n"}
        남성 LBM = 0.407 × 체중(kg) + 0.267 × 신장(cm) − 19.2{"\n"}
        여성 LBM = 0.252 × 체중(kg) + 0.473 × 신장(cm) − 48.3{"\n\n"}
        체지방률을 아는 경우 → LBM = 체중 × (1 − 체지방률 ÷ 100)
      </GuideFormulaBox>
      <GuideP>
        예: 남성 75kg, 175cm → LBM = 0.407×75 + 0.267×175 − 19.2 ≈ <strong>57.7kg</strong>
      </GuideP>

      <GuideH2>LBM이 중요한 이유</GuideH2>
      <GuideTable
        headers={["활용 목적", "내용"]}
        rows={[
          ["BMR 계산", "LBM이 높을수록 기초대사량이 높아져 살이 덜 찜"],
          ["단백질 목표 설정", "LBM 기반 1.6~2.2g/kg이 근합성에 최적"],
          ["다이어트 목표 체중", "LBM + 목표 체지방량 = 목표 체중 역산"],
          ["벌크업 진행 추적", "체중 증가가 근육인지 지방인지 구분 가능"],
        ]}
      />

      <GuideH2>성별·체중별 LBM 참고표</GuideH2>
      <GuideTable
        headers={["신장", "체중", "LBM (남성)", "LBM (여성)"]}
        rows={[
          ["165cm", "60kg", "약 50.3kg", "약 45.6kg"],
          ["170cm", "70kg", "약 57.0kg", "약 51.0kg"],
          ["175cm", "80kg", "약 63.8kg", "약 56.6kg"],
          ["180cm", "90kg", "약 70.7kg", "약 62.3kg"],
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "제지방량을 늘리려면 어떻게 해야 하나요?",
            a: "근력 운동(주 3~4회)과 충분한 단백질 섭취(LBM 기준 1.6~2.2g/kg)가 핵심입니다. 칼로리 소폭 초과(+200~300kcal) 상태에서 운동하면 지방 증가를 최소화하면서 LBM을 늘릴 수 있습니다.",
          },
          {
            q: "LBM과 근육량의 차이는 무엇인가요?",
            a: "LBM은 근육·뼈·장기·혈액·수분을 모두 포함한 총 비지방 질량입니다. 순수 골격근량(Skeletal Muscle Mass)은 LBM의 일부분으로, 인바디 같은 체성분 분석기로 별도 측정해야 더 정확하게 알 수 있습니다.",
          },
          {
            q: "다이어트 중 LBM이 줄어들면 문제인가요?",
            a: "네. 다이어트 중 LBM이 감소하면 BMR이 낮아져 더 적게 먹어야 살이 빠지는 악순환이 생깁니다. 단백질 충분 섭취와 근력 운동으로 LBM을 최대한 유지하면서 체지방만 줄이는 것이 이상적인 다이어트입니다.",
          },
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
        한국인 영양소 섭취기준(KDRIs)을 참고합니다. 비타민은 체내에서 합성되지 않거나 소량만 합성되므로
        반드시 식품이나 보충제로 공급해야 합니다.
      </GuideP>
      <GuideH2>주요 비타민 권장 섭취량 참고표</GuideH2>
      <GuideTable
        headers={["비타민", "성인 권장 섭취량 (참고)", "주요 식품", "결핍 시 증상"]}
        rows={[
          ["비타민 A", "남 800μg / 여 650μg", "당근, 간, 달걀", "야맹증, 면역력 저하"],
          ["비타민 C", "100mg", "감귤, 딸기, 브로콜리", "괴혈병, 상처 치유 지연"],
          ["비타민 D", "10μg (400IU)", "연어, 달걀, 햇빛", "골다공증, 면역 저하"],
          ["비타민 B12", "2.4μg", "육류, 어패류, 유제품", "빈혈, 신경 손상"],
          ["비타민 B1 (티아민)", "남 1.2mg / 여 1.1mg", "돼지고기, 현미", "각기병, 피로"],
          ["엽산 (B9)", "400μg (임신 600μg)", "시금치, 콩류", "빈혈, 태아 신경관 결손"],
          ["비타민 E", "12mg α-TE", "아몬드, 해바라기씨", "신경·근육 손상"],
          ["비타민 K", "남 75μg / 여 65μg", "녹색 채소", "혈액 응고 장애"],
        ]}
      />
      <GuideH2>지용성 vs 수용성 비타민</GuideH2>
      <GuideTable
        headers={["구분", "종류", "특징"]}
        rows={[
          ["지용성", "A, D, E, K", "지방과 함께 흡수, 간·지방조직에 저장, 과다 섭취 시 독성 위험"],
          ["수용성", "C, B군 8종", "과잉 섭취분은 소변으로 배출, 매일 섭취 필요"],
        ]}
      />
      <GuideBulletList
        items={[
          "지용성 비타민(A, D, E, K)은 과다 섭취 시 체내 축적으로 독성 위험이 있습니다.",
          "수용성 비타민(C, B군)은 과잉 섭취 시 소변으로 배출되지만 과량은 위장 장애를 유발할 수 있습니다.",
          "임신 중 엽산은 신경관 결손 예방을 위해 임신 전부터 충분히 섭취해야 합니다.",
          "비타민 D는 음식만으로 충분히 섭취하기 어려워 햇빛 노출(하루 15~30분)이 중요합니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "비타민 D가 부족하면 어떤 증상이 나타나나요?", a: "뼈 약화(구루병·골연화증·골다공증), 면역력 저하, 피로감, 우울감이 흔한 증상입니다. 실내 생활이 많은 한국인은 결핍이 흔하므로 햇빛 노출(하루 15~30분)과 식품 섭취에 신경 쓰세요. 혈중 25(OH)D 수치로 확인할 수 있습니다." },
          { q: "지용성 비타민은 과다 섭취해도 되나요?", a: "비타민 A·D·E·K는 지용성이라 과다 섭취 시 체내에 축적됩니다. 특히 비타민 A(간 독성)와 D(고칼슘혈증)는 과다 시 독성이 나타날 수 있으므로 상한 섭취량(UL)을 초과하지 않도록 주의하세요." },
          { q: "종합비타민 하나로 모든 비타민을 충당할 수 있나요?", a: "종합비타민은 일반적인 결핍을 보완하는 데 도움이 되지만, 함량이 낮거나 특정 비타민이 빠져 있을 수 있습니다. 균형 잡힌 식사가 우선이며, 특정 결핍이 의심되면 혈액 검사 후 단일 보충제를 사용하는 것이 효율적입니다." },
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
        이 계산기는 참고용 예측값이며, 실제 키는 개인 유전·환경 요인에 따라 달라집니다.
      </GuideP>
      <GuideH2>예상 키 계산 공식</GuideH2>
      <GuideFormulaBox>
        아들 예상 키 ≈ (아버지 키 + 어머니 키 + 13) ÷ 2{"\n"}
        딸 예상 키 ≈ (아버지 키 + 어머니 키 − 13) ÷ 2{"\n\n"}
        예: 아버지 175cm, 어머니 162cm → 아들 예상 키 = (175 + 162 + 13) ÷ 2 = 175cm
      </GuideFormulaBox>
      <GuideP className="text-neutral-500">※ 실제 키는 예측값 ±10cm 범위 내에서 개인차가 크게 나타납니다.</GuideP>
      <GuideH2>부모 키별 자녀 예상 키 참고표</GuideH2>
      <GuideTable
        headers={["아버지 키", "어머니 키", "아들 예상 키", "딸 예상 키"]}
        rows={[
          ["165cm", "155cm", "166.5cm", "153.5cm"],
          ["170cm", "158cm", "170.5cm", "157.5cm"],
          ["175cm", "162cm", "175cm", "162cm"],
          ["180cm", "165cm", "179cm", "166cm"],
          ["183cm", "168cm", "182cm", "169cm"],
        ]}
      />
      <GuideH2>키 성장에 영향을 주는 요인</GuideH2>
      <GuideTable
        headers={["요인", "기여도 (참고)", "설명"]}
        rows={[
          ["유전", "약 60~80%", "부모 키가 가장 큰 결정 요인"],
          ["영양", "중요", "단백질·칼슘·아연 충분 섭취 필요"],
          ["수면", "중요", "성장 호르몬은 수면 중(특히 깊은 수면) 분비"],
          ["운동", "보조적", "줄넘기·수영·농구 등 성장 자극 운동"],
          ["스트레스", "부정적", "과도한 스트레스는 성장 호르몬 분비 억제"],
        ]}
      />
      <GuideBulletList
        items={[
          "예측 범위는 ±10cm 정도의 개인차가 있습니다.",
          "성장판이 열려 있는 청소년기 영양·수면·운동이 중요합니다.",
          "정확한 성장 예측은 소아청소년과에서 골연령 검사로 확인하세요.",
          "칼슘 권장 섭취량: 청소년 900~1,000mg/일 (우유 2잔 + 채소류).",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "성장판은 몇 살까지 열려 있나요?", a: "여아는 보통 14~16세, 남아는 16~18세까지 성장판이 열려 있습니다. 개인차가 있으며 X선 검사(골연령 측정)로 확인 가능합니다. 성장판이 닫히면 더 이상 키 성장이 일어나지 않습니다." },
          { q: "키 성장에 수면이 정말 영향을 주나요?", a: "네, 성장 호르몬은 수면 중 가장 많이 분비됩니다. 특히 밤 10시~새벽 2시 사이 깊은 수면(Non-REM 3단계) 동안 하루 분비량의 70~80%가 방출됩니다. 청소년기에 충분한 수면(8~10시간)이 성장에 중요합니다." },
          { q: "성장 호르몬 주사가 키를 키우는 데 효과가 있나요?", a: "성장 호르몬 결핍증 진단을 받은 경우에는 효과적입니다. 그러나 정상 수치인 아이에게 투여하면 효과가 제한적이며 부작용 위험이 있어 소아내분비 전문의 진단 없이는 사용하지 않아야 합니다." },
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
        걷기는 관절 부담이 적고 꾸준히 실천하기 쉬운 유산소 운동입니다.
      </GuideP>
      <GuideH2>걸음 수 칼로리 계산 공식</GuideH2>
      <GuideFormulaBox>
        소비 칼로리(kcal) ≈ 걸음 수 × 0.04 × 체중(kg) ÷ 60{"\n\n"}
        예: 체중 70kg, 10,000보 → 10,000 × 0.04 × 70 ÷ 60 ≈ 467kcal
      </GuideFormulaBox>
      <GuideH2>체중별 걸음 수 칼로리 소비 참고표</GuideH2>
      <GuideTable
        headers={["걸음 수", "50kg 소비", "60kg 소비", "70kg 소비", "80kg 소비"]}
        rows={[
          ["5,000보", "약 167kcal", "약 200kcal", "약 233kcal", "약 267kcal"],
          ["7,000보", "약 233kcal", "약 280kcal", "약 327kcal", "약 373kcal"],
          ["10,000보", "약 333kcal", "약 400kcal", "약 467kcal", "약 533kcal"],
          ["12,000보", "약 400kcal", "약 480kcal", "약 560kcal", "약 640kcal"],
          ["15,000보", "약 500kcal", "약 600kcal", "약 700kcal", "약 800kcal"],
        ]}
      />
      <GuideP className="text-neutral-500">※ 걷는 속도·경사·개인 체력에 따라 실제 소비 칼로리는 달라질 수 있습니다.</GuideP>
      <GuideBulletList
        items={[
          "보폭은 키에 따라 다르며, 평균 성인 보폭은 약 75~80cm입니다.",
          "빠른 걸음(6km/h 이상)은 같은 걸음 수에서 더 많은 칼로리를 소비합니다.",
          "걸음 수 측정: 스마트폰 만보계·스마트워치를 활용하세요.",
          "10,000보 ≈ 약 7~8km, 약 300~400kcal (체중 70kg 기준).",
          "경사진 길을 걸으면 평지 대비 20~50% 더 많은 칼로리를 소모합니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "만보(10,000보)는 과학적 근거가 있나요?", a: "1960년대 일본 만보계 마케팅에서 유래했지만, 연구들에서 7,000~8,000보도 건강 효과가 유사하다고 보고됩니다. 최근 하버드 연구에서는 7,500보 이상이면 사망률 감소 효과가 나타난다고 보고했습니다." },
          { q: "걷기와 달리기 칼로리 소비는 얼마나 차이 나나요?", a: "같은 거리 기준으로 달리기와 걷기의 소비 칼로리 차이는 크지 않습니다(10~15% 내외). 시간 기준으로는 달리기가 훨씬 많이 소비합니다. 관절에 부담을 덜 주면서 꾸준히 하려면 걷기가 더 실천하기 쉽습니다." },
          { q: "하루 몇 보를 목표로 해야 건강에 좋은가요?", a: "연구에 따르면 하루 6,000~8,000보만 해도 심혈관 질환·당뇨 위험 감소 효과가 있습니다. 현재 활동량이 적다면 하루 2,000보씩 늘려가는 것이 현실적입니다. 건강한 성인은 10,000보를 목표로 하되, 무리하기보다 꾸준함이 중요합니다." },
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
        습도가 높을수록 땀이 증발하지 못해 체감 온도가 실제 기온보다 훨씬 높아집니다.
      </GuideP>
      <GuideH2>열지수 계산 공식</GuideH2>
      <GuideFormulaBox>
        열지수(HI) = −8.78469 + 1.61139×T + 2.33855×R − 0.14612×T×R − 0.01230×T² − 0.01642×R² + ...{"\n"}
        (T: 기온 °C, R: 상대습도 %){"\n\n"}
        간단 근사: 기온 32°C, 습도 80% → 열지수 ≈ 46°C
      </GuideFormulaBox>
      <GuideH2>열지수 위험 단계</GuideH2>
      <GuideTable
        headers={["열지수 (°C)", "위험 수준", "권고 행동"]}
        rows={[
          ["27 미만", "안전", "정상 활동 가능"],
          ["27 ~ 32°C", "주의", "피로감 발생, 장시간 노출 자제"],
          ["33 ~ 39°C", "경고", "열경련·열탈진 가능, 수분 보충 필수"],
          ["40 ~ 51°C", "위험", "열사병 발생 가능, 야외 활동 자제"],
          ["52°C 이상", "매우 위험", "야외 활동 금지, 즉시 냉방 공간으로"],
        ]}
      />
      <GuideBulletList
        items={[
          "습도가 높을수록 땀 증발이 억제돼 체감 온도가 크게 올라갑니다.",
          "직사광선 아래에서는 열지수보다 실제 체감이 6~8°C 더 높을 수 있습니다.",
          "기상청 체감 온도와 이 계산기 결과는 공식이 다를 수 있습니다.",
          "수분 보충: 폭염 시 30분마다 150~200mL 물을 마시도록 권장합니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "폭염 시 야외 근무자 보호 기준은?", a: "고용노동부 가이드에 따르면 폭염 경보 발령 시 오전 2시간·오후 2시간씩 옥외 작업 중지를 권고합니다. 또한 물·그늘·휴식(물-그늘-휴식) 원칙을 적용하며, 작업자 상호 건강 확인이 중요합니다." },
          { q: "열사병과 열탈진의 차이는?", a: "열탈진은 과도한 땀 분비 후 어지러움·무력감·구토가 나타나는 것으로, 서늘한 곳에서 휴식·수분 보충으로 회복됩니다. 열사병은 체온이 40°C 이상으로 오르며 의식 장애·발작이 올 수 있는 응급 상황으로, 즉시 119에 신고하고 빠르게 체온을 낮춰야 합니다." },
          { q: "에어컨 없이 폭염을 견디는 방법이 있나요?", a: "선풍기와 함께 피부를 물로 적시면 기화열로 체온을 낮출 수 있습니다. 야간에 창문을 열어 환기하고, 낮에는 커튼을 닫아 일사 차단이 효과적입니다. 지역 무더위 쉼터(주민센터·도서관)를 활용하는 것도 방법입니다." },
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
        1897년 빌헬름 플리스가 처음 제안한 이론으로, 각 주기는 탄생일부터 사인 곡선으로 진행됩니다.
      </GuideP>
      <GuideH2>바이오리듬 계산 공식</GuideH2>
      <GuideFormulaBox>
        탄생일로부터 경과 일수(D) 계산{"\n"}
        신체 리듬 = sin(2π × D ÷ 23){"\n"}
        감성 리듬 = sin(2π × D ÷ 28){"\n"}
        지성 리듬 = sin(2π × D ÷ 33){"\n\n"}
        결과값 +1에 가까울수록 해당 능력 최고, −1에 가까울수록 최저
      </GuideFormulaBox>
      <GuideH2>바이오리듬 3주기 참고</GuideH2>
      <GuideTable
        headers={["주기", "기간", "영향 영역", "주의 시점"]}
        rows={[
          ["신체 리듬", "23일", "체력·건강·근력·반응 속도", "0 교차일: 부상·사고 주의"],
          ["감성 리듬", "28일", "감정·직관·창의성·공감 능력", "0 교차일: 감정 기복 주의"],
          ["지성 리듬", "33일", "집중력·분석력·기억력·판단력", "0 교차일: 중요 결정 신중히"],
        ]}
      />
      <GuideBulletList
        items={[
          "각 주기가 +값일 때: 해당 능력이 높은 상태로 봅니다.",
          "0 교차점(임계일): 주기가 전환되는 날로, 컨디션이 불안정할 수 있다고 봅니다.",
          "트리플 하이(세 주기 모두 최고): 이론상 최상 컨디션",
          "트리플 로(세 주기 모두 최저): 이론상 주의가 필요한 날",
          "바이오리듬은 과학적으로 검증된 이론은 아닙니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "바이오리듬이 과학적으로 맞는 이론인가요?", a: "바이오리듬은 과학적 근거가 부족하다는 연구가 많습니다. 1970~80년대 다수의 연구에서 바이오리듬이 사고율·수행 능력과 통계적으로 유의미한 관계가 없다고 결론 내렸습니다. 재미·자기 점검 도구로 참고하는 정도가 적절합니다." },
          { q: "모든 주기가 최고점일 때 어떻게 되나요?", a: "이를 '트리플 하이'라고 부릅니다. 바이오리듬 이론상 최상의 컨디션으로 보지만, 실제 능력·성과와는 별개입니다. 반대로 세 주기 모두 최저점인 '트리플 로'는 특히 주의가 필요한 날로 봅니다." },
          { q: "바이오리듬 임계일(0 교차점)에는 무엇을 주의해야 하나요?", a: "임계일은 주기가 플러스에서 마이너스(또는 반대)로 전환되는 날로, 바이오리듬 이론상 컨디션이 가장 불안정한 날입니다. 신체 임계일에는 과격한 운동·스포츠를 조심하고, 지성 임계일에는 중요한 계약·시험 전 충분한 준비를 하면 좋습니다." },
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
        골격근은 체중의 35~45%(남성 기준)를 차지하며, 기초대사량과 직결됩니다.
      </GuideP>
      <GuideH2>근육량 계산 공식</GuideH2>
      <GuideFormulaBox>
        추정 근육량 ≈ 제지방량(LBM) × 0.55{"\n"}
        (골격근은 LBM의 약 50~55% 구성){"\n\n"}
        LBM 계산(Boer 공식){"\n"}
        남성 LBM = 0.407 × 체중(kg) + 0.267 × 신장(cm) − 19.2{"\n"}
        여성 LBM = 0.252 × 체중(kg) + 0.473 × 신장(cm) − 48.3
      </GuideFormulaBox>
      <GuideH2>성별·체중 대비 근육량 기준표</GuideH2>
      <GuideTable
        headers={["구분", "남성 근육량 (체중 대비)", "여성 근육량 (체중 대비)"]}
        rows={[
          ["낮음", "35% 미만", "28% 미만"],
          ["보통", "35~40%", "28~33%"],
          ["높음", "40~45%", "33~38%"],
          ["매우 높음", "45% 이상", "38% 이상"],
        ]}
      />
      <GuideH2>근육량 증가를 위한 핵심 전략</GuideH2>
      <GuideBulletList
        items={[
          "저항 운동(근력 운동): 주 3~4회, 각 근육군 주 2회 자극",
          "단백질 섭취: LBM 기준 1.6~2.2g/kg/일 (벌크업 목표 시)",
          "칼로리 소폭 초과: +200~300kcal로 지방 증가 최소화",
          "충분한 수면: 8시간 이상, 성장 호르몬 분비 촉진",
          "점진적 과부하: 중량·반복 횟수·세트를 점진적으로 늘리기",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "나이가 들면 근육이 자연적으로 줄어드나요?", a: "네, 30세 이후 근육은 매년 0.5~1%씩 감소합니다(근감소증, Sarcopenia). 60세 이후에는 감소 속도가 빨라져 10년마다 15%씩 줄어들 수 있습니다. 규칙적인 근력 운동(주 2~3회 이상)으로 속도를 크게 늦출 수 있습니다." },
          { q: "인바디 결과와 이 계산기 결과가 다른 이유는?", a: "이 계산기는 신장·체중 기반 공식 추정치입니다. 인바디(생체임피던스)가 더 정확하지만, 측정 시 수분 상태(식사·운동·배변)에 따라 ±2~3kg 오차가 발생합니다. 가장 정확한 방법은 DEXA(이중에너지 X선 흡수법)입니다." },
          { q: "다이어트 중에도 근육량을 유지할 수 있나요?", a: "가능합니다. 단백질 섭취를 충분히 유지하고(LBM 기준 2.0~2.4g/kg), 근력 운동을 병행하면 체지방 감소 중에도 근육 손실을 최소화할 수 있습니다. 극단적인 저칼로리 식단은 근손실을 가속화하므로 주의하세요." },
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
        자연 최대치는 유전·골격 크기·훈련 기간에 따라 개인별로 크게 다릅니다.
      </GuideP>
      <GuideH2>자연 최대 근육량 계산 공식</GuideH2>
      <GuideFormulaBox>
        Berkhan 공식 (남성 기준){"\n"}
        최대 체중(체지방 5~6%) ≈ 신장(cm) − 100{"\n"}
        최대 체중(체지방 10%) ≈ 신장(cm) − 96{"\n\n"}
        예: 신장 175cm → 체지방 5% 기준 최대 75kg, 10% 기준 79kg{"\n"}
        여성은 남성 수치의 약 80~85% 수준으로 추정
      </GuideFormulaBox>
      <GuideH2>신장별 자연 최대 체중 참고표 (남성, 체지방 10% 기준)</GuideH2>
      <GuideTable
        headers={["신장", "자연 최대 체중 (체지방 10%)", "최대 LBM 추정"]}
        rows={[
          ["165cm", "약 69kg", "약 62kg"],
          ["170cm", "약 74kg", "약 67kg"],
          ["175cm", "약 79kg", "약 71kg"],
          ["180cm", "약 84kg", "약 76kg"],
          ["185cm", "약 89kg", "약 80kg"],
        ]}
      />
      <GuideBulletList
        items={[
          "이 공식은 남성 기준이며 여성은 약 80~85% 수준으로 추정합니다.",
          "유전·골격·훈련 기간에 따라 개인차가 매우 큽니다.",
          "자연 최대 근육량 도달에는 보통 4~8년 이상의 꾸준한 훈련이 필요합니다.",
          "초보자: 첫 1~2년에 근육량 증가 속도가 가장 빠릅니다.",
          "중급자: 연간 2~4kg 근육 증가가 현실적인 목표입니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "최대 근육량에 도달하면 더 이상 성장이 안 되나요?", a: "자연 상한에 가까워질수록 성장 속도가 크게 느려집니다. 초보자는 월 1~2kg 근육 증가가 가능하지만, 자연 한계에 근접한 숙련자는 연간 0.5~1kg 증가도 의미 있는 성과입니다. 성장 멈춤보다는 근력·밀도 향상으로 목표를 전환하세요." },
          { q: "최대 근육량 이후 목표는?", a: "근력(1RM 향상)과 체성분 개선(체지방 감소, 근육 밀도 향상)에 집중하는 방향으로 전환할 수 있습니다. 같은 체중에서도 체지방률을 낮추면 더 탄탄하고 선명한 체형을 만들 수 있습니다." },
          { q: "FFMI와 최대 근육량 계산의 차이는 무엇인가요?", a: "Berkhan 공식은 신장 기준 최대 체중을 추정하고, FFMI(지방제외 체질량 지수)는 체지방을 제외한 근육량을 신장으로 보정한 지수입니다. FFMI 25가 자연 최대치로 자주 인용되며, 두 방법 모두 참고 지표로 활용합니다." },
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
          { q: "안정시 심박수는 어떻게 측정하나요?", a: "아침에 일어나자마자 앉은 상태에서 1분 동안 손목·목 맥박을 세거나 스마트워치로 측정합니다. 평균 60~80bpm이 정상 범위입니다. 운동 선수는 40~60bpm으로 낮을 수 있습니다." },
          { q: "심박수가 목표보다 높게 유지되면 어떻게 하나요?", a: "운동 강도를 낮추고 휴식을 취하세요. 고혈압·심장 질환이 있다면 운동 전 의사 상담을 권장합니다. 더위·탈수·카페인도 심박수를 높이므로 체크하세요." },
          { q: "심박수 모니터(스마트워치)와 가슴 밴드, 어느 것이 더 정확한가요?", a: "가슴 밴드(심전도 방식)가 더 정확하며 특히 고강도 운동 중 손목 방식보다 10~15% 오차가 적습니다. 일반 유산소 운동에서는 손목형 스마트워치도 충분히 활용할 수 있습니다." },
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
          { q: "백분위 25라면 성장에 문제가 있는 건가요?", a: "아닙니다. 백분위 3~97 이내면 정상 범위입니다. 키가 유전적으로 작은 집안이라면 낮은 백분위도 자연스러울 수 있습니다. 중요한 것은 현재 백분위보다 시간에 따른 성장 추세(성장 곡선)입니다." },
          { q: "성장 호르몬 치료는 언제 고려하나요?", a: "백분위 3 미만이거나 성장 속도가 현저히 느린 경우 소아내분비 전문의 진단 후 치료 여부를 결정합니다. 성장 호르몬 결핍증·터너증후군 등 특정 질환이 있을 때 보험 적용이 됩니다." },
          { q: "성장 곡선이 갑자기 낮아지면 무엇을 의심해야 하나요?", a: "최근 6개월~1년 사이 백분위가 크게 낮아진 경우(두 등급 이상 하락) 만성 질환·영양 불균형·갑상선 기능 저하·성장 호르몬 결핍 등을 의심할 수 있습니다. 소아청소년과 전문의와 상담하세요." },
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
          { q: "FFMI 25 이상이면 스테로이드를 사용한 건가요?", a: "FFMI 25가 자연 한계로 자주 인용되지만, 유전적으로 뛰어난 운동선수는 자연적으로 초과하는 경우도 있습니다. 단정할 수 없으며 FFMI 25는 하나의 참고 지표일 뿐입니다." },
          { q: "여성의 자연 FFMI 한계는?", a: "여성은 남성보다 낮아 약 18~20이 자연 한계로 알려져 있습니다. 테스토스테론 수치 차이로 인해 남성보다 근육 성장 가능성이 낮습니다." },
          { q: "FFMI를 높이려면 어떻게 해야 하나요?", a: "제지방량(LBM)을 늘리거나 체지방률을 낮추면 FFMI가 올라갑니다. 근력 운동과 충분한 단백질 섭취(LBM 기준 1.6~2.2g/kg)가 핵심이며, 체지방을 과도하게 줄이면 근육 유지가 어려우므로 균형이 중요합니다." },
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
          { q: "CrCl과 eGFR의 차이는?", a: "CrCl은 Cockcroft-Gault 공식, eGFR은 CKD-EPI 또는 MDRD 공식을 사용합니다. 신장 기능 평가에 둘 다 쓰이지만 약물 용량 조절에는 CrCl이 더 많이 사용되고, 만성 신장 질환 분류(CKD 단계)에는 eGFR이 많이 사용됩니다." },
          { q: "신장 기능이 나쁠 때 어떤 약물에 주의해야 하나요?", a: "항생제(겐타마이신·반코마이신 등), NSAIDs(이부프로펜·나프록센), 당뇨약(메트포민), 조영제 등은 신장 기능 저하 시 용량 조절 또는 금기가 될 수 있습니다. 반드시 의사·약사와 상담하세요." },
          { q: "크레아티닌 수치가 높으면 신장이 나쁜 건가요?", a: "혈청 크레아티닌이 높을수록 신장 기능이 저하되었음을 의미할 수 있지만, 근육량이 많은 사람·격렬한 운동 후·육류 섭취 후에도 일시적으로 상승합니다. 단일 수치보다 반복 측정 추세와 eGFR을 함께 확인하는 것이 중요합니다." },
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
          { q: "왜 체중만으로 약물 용량을 정하지 않나요?", a: "체중이 같아도 키에 따라 신체 크기가 다릅니다. 예를 들어 150cm·70kg과 180cm·70kg은 체중은 같지만 BSA가 크게 다릅니다. BSA는 체중과 신장을 모두 반영해 더 정확한 기준을 제공합니다." },
          { q: "소아에도 같은 공식을 쓰나요?", a: "소아는 성인과 체형 비율이 달라 Haycock 공식(BSA = 0.024265 × 신장^0.3964 × 체중^0.5378) 등 소아 전용 공식을 사용하는 경우가 많습니다. 소아청소년과 전문의의 지침을 따르세요." },
          { q: "BSA 계산이 항암 치료에서 특히 중요한 이유는?", a: "항암제(시스플라틴·독소루비신 등)는 치료 효과와 독성의 차이가 매우 좁아(치료 지수가 낮음) 정확한 용량 계산이 필수입니다. BSA 기준 용량으로 계산해 과다 투여에 의한 골수 억제·장기 손상을 예방합니다." },
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
          { q: "카페인 내성이 생기면 어떻게 하나요?", a: "2~4주 카페인을 줄이거나 끊으면 내성이 낮아집니다. 갑자기 끊으면 두통·피로감·집중력 저하 등 금단 증상이 나타날 수 있으니 매일 10~25%씩 서서히 줄이는 방법을 권장합니다." },
          { q: "디카페인 커피에도 카페인이 있나요?", a: "네, 디카페인 커피 한 잔에도 약 2~15mg의 카페인이 남아 있습니다. 카페인에 예민한 분은 하루 섭취량 계산 시 포함하는 것이 좋습니다." },
          { q: "카페인이 수면에 영향을 주지 않으려면 언제까지 마셔야 하나요?", a: "카페인 반감기는 약 5~6시간으로, 오후 3시에 마신 커피의 절반 농도가 밤 9시에도 체내에 남아 있습니다. 취침 6시간 전(보통 오후 2~3시)까지 카페인 섭취를 마치는 것이 수면의 질을 높이는 데 좋습니다." },
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
          { q: "eGFR이 낮으면 바로 투석을 해야 하나요?", a: "eGFR이 G5(15 미만)여도 증상·합병증·체액 저류 여부에 따라 투석 시기가 결정됩니다. eGFR 10~15 미만이 되면 투석 준비를 시작하는 경우가 많습니다. 신장 전문의와 상담해 적절한 치료 시기를 결정하세요." },
          { q: "일시적인 탈수·격렬한 운동도 eGFR에 영향을 주나요?", a: "네, 탈수·격렬한 운동·육류 과다 섭취·조영제 사용 후에 크레아티닌이 상승해 eGFR이 일시적으로 낮게 나올 수 있습니다. 정확한 평가를 위해 충분히 수분을 보충한 안정 상태에서 검사하고, 반복 측정으로 추세를 확인하세요." },
          { q: "eGFR을 높이거나 신장을 보호하는 방법이 있나요?", a: "혈압·혈당·콜레스테롤 조절이 핵심입니다. 충분한 수분 섭취(하루 1.5~2L), 단백질 과다 섭취 자제, NSAIDs 남용 금지, 금연도 도움이 됩니다. 당뇨·고혈압 환자는 신장 보호 효과가 있는 약물(RAAS 억제제, SGLT2 억제제) 사용을 전문의와 상담하세요." },
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
          { q: "콜레스테롤이 높으면 무조건 약을 먹어야 하나요?", a: "위험 인자(당뇨·고혈압·흡연·가족력 등)와 심혈관 질환 유무에 따라 다릅니다. LDL 160 미만이고 위험 인자가 없다면 3~6개월 식이요법·운동으로 개선을 먼저 시도합니다. 위험군이 높거나 이미 심혈관 질환이 있다면 조기에 스타틴 치료를 시작합니다." },
          { q: "달걀을 먹으면 콜레스테롤이 오르나요?", a: "식이 콜레스테롤이 혈중 콜레스테롤에 미치는 영향은 포화지방보다 작습니다. 하루 1~2개의 달걀 섭취는 대부분의 건강한 성인에게 문제없습니다. 혈중 콜레스테롤을 더 많이 올리는 것은 트랜스 지방과 포화지방(버터·삼겹살 등)입니다." },
          { q: "HDL(좋은 콜레스테롤)을 높이는 방법은?", a: "유산소 운동(주 150분 이상)이 가장 효과적으로 HDL을 10~15% 높입니다. 금연, 적당한 음주(과음은 중성지방을 높임), 올리브 오일·견과류·생선 섭취, 정상 체중 유지도 도움이 됩니다. 반면 정제 탄수화물과 트랜스 지방은 HDL을 낮춥니다." },
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
          { q: "동점자가 여러 명일 때 등급은 어떻게 되나요?", a: "수능은 동점자 전원에게 같은 등급을 부여합니다. 내신은 원점수·표준점수·석차 등 학교·교과별 기준이 다를 수 있으며, 동점자 처리 방식은 학교 학업성적관리 규정을 확인하세요." },
          { q: "절대평가 과목도 등급이 있나요?", a: "수능 영어·한국사 등 절대평가 과목은 점수 구간별로 등급이 정해집니다(90점 이상 1등급 등). 상대평가와 달리 동점자 수에 따른 등급 변동이 없습니다." },
          { q: "내신 등급과 수능 등급 계산 방식이 같은가요?", a: "기본 원리는 같지만 적용 방식이 다릅니다. 내신은 과목별 학교 내 전체 응시자를 기준으로 하고, 수능은 전국 응시자를 기준으로 합니다. 내신 등급은 석차 백분율, 수능은 표준점수·백분위를 거쳐 등급이 결정됩니다." },
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
          { q: "분수를 통분할 때 LCM을 왜 사용하나요?", a: "두 분모의 LCM이 최소 공통분모가 되어 계산이 가장 간단해집니다. 예: 1/4 + 1/6 → LCM(4,6)=12 → 3/12 + 2/12 = 5/12." },
          { q: "LCM이 매우 크게 나올 때는?", a: "두 수가 서로소(공약수가 1뿐)이면 LCM = 두 수의 곱이 됩니다. 예: LCM(7, 13) = 91. 반대로 한 수가 다른 수의 배수이면 LCM = 큰 수가 됩니다. 예: LCM(4, 12) = 12." },
          { q: "세 수 이상의 LCM은 어떻게 구하나요?", a: "두 수씩 순서대로 계산합니다. LCM(a, b, c) = LCM(LCM(a, b), c). 예: LCM(4, 6, 10) → LCM(4,6)=12 → LCM(12,10)=60." },
        ]}
      />
    </>
  );
}

function FactorGuide() {
  return (
    <>
      <GuideH2>다항식 인수분해 계산기란?</GuideH2>
      <GuideP>
        이차·삼차 다항식을 입력하면 인수분해(factoring) 결과를 자동으로 표시하는 도구입니다.
        ax²+bx+c 형태의 이차식을 (px+q)(rx+s) 꼴로 분해하거나,
        완전제곱식·차이의 곱 등 공식을 적용한 결과를 확인할 수 있습니다.
      </GuideP>
      <GuideH3>주요 인수분해 공식</GuideH3>
      <GuideTable
        headers={["유형", "공식"]}
        rows={[
          ["합차 공식", "a² − b² = (a+b)(a−b)"],
          ["완전제곱식 (합)", "a² + 2ab + b² = (a+b)²"],
          ["완전제곱식 (차)", "a² − 2ab + b² = (a−b)²"],
          ["이차식 일반형", "ax²+bx+c = a(x−α)(x−β)  (α,β: 근의 공식으로 구함)"],
          ["합의 세제곱", "a³+b³ = (a+b)(a²−ab+b²)"],
          ["차의 세제곱", "a³−b³ = (a−b)(a²+ab+b²)"],
        ]}
      />
      <GuideH3>이차식 인수분해 절차</GuideH3>
      <GuideFormulaBox>
        ax² + bx + c{"\n"}
        판별식 D = b² − 4ac{"\n"}
        근 α, β = (−b ± √D) / 2a{"\n"}
        → a(x − α)(x − β){"\n\n"}
        예: 2x² + 5x + 3{"\n"}
        D = 25 − 24 = 1  →  근 = (−5 ± 1)/4 → α=−1, β=−3/2{"\n"}
        → (x + 1)(2x + 3)
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "계수 a, b, c를 입력하면 판별식·근·인수분해 결과가 표시됩니다.",
          "D > 0: 두 실수 근으로 인수분해 가능",
          "D = 0: 완전제곱식 형태 (α = β)",
          "D < 0: 실수 범위에서 인수분해 불가(복소수 근)",
          "공통인수(GCD)가 있으면 먼저 꺼내면 계산이 쉬워집니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "판별식이 음수면 인수분해가 불가한가요?", a: "실수 계수 범위에서는 불가합니다. 복소수 범위까지 확장하면 (x − α)(x − ᾱ) 형태로 분해할 수 있습니다. 고등학교 수학에서는 실수 범위 인수분해만 다룹니다." },
          { q: "삼차 이상 다항식도 인수분해가 되나요?", a: "네. 삼차식은 먼저 유리근 정리(p/q 후보 대입)로 한 근을 찾은 뒤 조립제법으로 이차식으로 낮춰 인수분해합니다. 4차 이상은 더 복잡해 수치 해법이나 컴퓨터 알고리즘을 사용하는 경우가 많습니다." },
          { q: "공통인수를 먼저 묶는 이유는?", a: "공통인수(GCF)를 먼저 묶으면 남은 다항식의 차수·계수가 낮아져 인수분해가 훨씬 쉬워집니다. 예: 6x² + 12x = 6x(x + 2). 항상 공통인수 확인부터 시작하세요." },
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
          { q: "소수는 무한히 많은가요?", a: "네, 유클리드가 기원전 300년경에 소수가 무한히 많음을 귀류법으로 증명했습니다. 현재 알려진 가장 큰 소수(메르센 소수)는 수천만 자릿수에 달합니다." },
          { q: "소수가 실생활에서 쓰이나요?", a: "RSA, HTTPS 등 인터넷 암호화(공개키 암호화)가 큰 소수 두 개의 곱을 인수분해하기 어렵다는 원리를 이용합니다. 현대 보안 시스템의 근간입니다." },
          { q: "에라토스테네스의 체란 무엇인가요?", a: "n까지의 소수를 효율적으로 찾는 고대 알고리즘입니다. 2부터 시작해 각 소수의 배수를 순서대로 지워나가면 남은 수가 소수입니다. 시간 복잡도 O(n log log n)으로 대량의 소수를 빠르게 구할 수 있습니다." },
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
          { q: "가우스가 이 공식을 어떻게 발견했나요?", a: "가우스는 10살 때 선생님이 낸 1~100 합산 문제를 '(1+100)×50=5,050'으로 순식간에 풀었다는 일화로 유명합니다. 양 끝 수를 짝지으면 모두 101이고, 쌍이 50개이므로 101×50=5,050이라는 통찰입니다." },
          { q: "합이 짝수가 아닌 경우도 있나요?", a: "n이 홀수이면 n(n+1)÷2의 결과는 항상 정수입니다. n × (n+1)에서 둘 중 하나는 반드시 짝수이기 때문입니다. 예: n=5 → 5×6÷2=15 (정수)." },
          { q: "등비수열 합도 비슷한 공식이 있나요?", a: "등비수열 합 Sn = a(rⁿ−1)/(r−1) (r≠1)으로 구합니다. r=1이면 Sn=na입니다. 등차수열은 공차가 일정하고, 등비수열은 공비(비율)가 일정한 수열입니다." },
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
          { q: "가분수와 대분수는 어떻게 변환하나요?", a: "가분수→대분수: 분자를 분모로 나눠 몫과 나머지를 구합니다. 예: 7/3 = 2 + 1/3 = 2⅓. 대분수→가분수: 분모×정수부+분자를 새 분자로 사용합니다. 예: 2⅓ = (3×2+1)/3 = 7/3." },
          { q: "분모가 0인 분수는?", a: "분모가 0인 분수는 정의되지 않습니다. 어떤 수를 0으로 나누는 것은 수학적으로 불가능하며, 계산기에서 오류로 표시됩니다." },
          { q: "분수의 나눗셈에서 역수를 취하는 이유는?", a: "a/b ÷ c/d = a/b × d/c가 성립하는 것은 나눗셈의 정의로부터 유도됩니다. (a/b) ÷ (c/d) × (c/d) = a/b이어야 하므로, 역수를 곱하는 것이 올바릅니다." },
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
          { q: "서로소란 무엇인가요?", a: "두 수의 GCD가 1인 경우를 서로소라고 합니다. 예: 4와 9는 GCD=1이므로 서로소입니다. 서로소인 두 수의 LCM = 두 수의 곱이 됩니다." },
          { q: "GCD와 LCM의 관계는?", a: "GCD(a, b) × LCM(a, b) = a × b 가 항상 성립합니다. 이 관계를 이용하면 GCD를 먼저 구해 LCM을 역산하는 것이 효율적입니다." },
          { q: "유클리드 호제법은 왜 효율적인가요?", a: "직접 약수를 나열하는 방법은 수가 클수록 오래 걸리지만, 유클리드 호제법은 나머지 연산을 반복해 빠르게 수렴합니다. 시간 복잡도가 O(log min(a,b))로 매우 빠릅니다." },
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
          { q: "나머지가 0이면 어떤 의미인가요?", a: "나머지가 0이면 b가 a의 약수라는 의미입니다. 예: 12 mod 4 = 0 → 4는 12의 약수. 소수 판별에서 2부터 √n까지 나머지가 0이 되는 수가 없으면 소수입니다." },
          { q: "나머지 연산이 프로그래밍에서 중요한 이유는?", a: "인덱스 순환(배열 순환 접근), 해시 함수, 암호화 알고리즘에서 핵심적으로 사용됩니다. 예: 배열 길이 n에서 i번째 다음 → (i+1) mod n으로 순환됩니다." },
          { q: "음수를 나머지 연산하면 결과가 다를 수 있나요?", a: "네. −7 mod 3은 수학적으로 2이지만 Python은 2, C/Java는 −1을 반환합니다. 프로그래밍 언어마다 음수 나머지 처리 방식이 달라 주의가 필요합니다." },
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
          { q: "n=r일 때 P(n,n)은?", a: "P(n,n) = n! (n개를 모두 배열하는 경우의 수)입니다. 예: P(3,3)=6. 3명을 한 줄로 세우는 방법이 6가지인 것과 같습니다." },
          { q: "C(n,0)이나 C(n,n)은 왜 1인가요?", a: "0개 또는 전부를 선택하는 방법은 각각 1가지뿐이기 때문입니다. 공식으로도 C(n,0)=n!÷(0!×n!)=1이 됩니다. 0!=1로 정의하므로 계산이 성립합니다." },
          { q: "중복 순열·중복 조합은 일반 순열·조합과 어떻게 다른가요?", a: "중복 순열은 같은 원소를 반복 선택할 수 있는 순열로 nΠr = nʳ입니다. 중복 조합(H)은 같은 원소를 반복 선택하는 조합으로 nHr = C(n+r−1, r)입니다." },
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
          { q: "피보나치 수열이 자연에서 나타나는 예는?", a: "해바라기 씨앗 배열(21-34나선), 솔방울 나선(8-13), 조개 나선, 꽃잎 수(3, 5, 8, 13...)가 피보나치 수에 해당합니다. 이는 성장 효율을 극대화하는 자연의 패킹 전략과 관련됩니다." },
          { q: "큰 항을 빠르게 계산하려면?", a: "비네의 공식 F(n) = [φⁿ − ψⁿ]÷√5 (φ=(1+√5)/2, ψ=(1-√5)/2)으로 직접 계산할 수 있습니다. 행렬 곱셈을 이용한 빠른 지수 알고리즘도 O(log n)으로 효율적입니다." },
          { q: "황금비와 피보나치 수열은 어떤 관계인가요?", a: "연속한 피보나치 수의 비(F(n+1)/F(n))는 n이 커질수록 황금비 φ ≈ 1.6180339...에 수렴합니다. 황금비는 건축·예술·디자인에서 심미적으로 아름다운 비율로 여겨집니다." },
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
          { q: "'오차 범위 ±3%p'는 무슨 의미인가요?", a: "95% 신뢰도에서 ±3%p 오차 범위는 표본 조사 결과가 실제와 3%p 이내 차이가 날 확률이 95%라는 의미입니다. 예: 지지율 40±3%p → 실제 지지율이 37~43% 사이일 가능성이 95%." },
          { q: "신뢰구간이 넓으면 결과를 믿기 어려운가요?", a: "신뢰구간이 넓다는 것은 추정의 정밀도가 낮다는 뜻입니다. 표본 수를 늘리면 구간이 좁아집니다. 표본 수를 4배 늘리면 신뢰구간 폭이 절반으로 줄어듭니다." },
          { q: "95%와 99% 신뢰도 중 어느 것이 더 좋은가요?", a: "99% 신뢰도가 더 확실하지만 구간이 넓어집니다. 의학·임상 연구에서는 99%가 요구되기도 하지만, 일반 여론조사·마케팅 분석에서는 95%를 주로 사용합니다. 목적과 요구되는 정확도에 따라 선택하세요." },
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
          { q: "10분 발표에 원고를 몇 자 써야 하나요?", a: "보통 속도(300자/분) 기준으로 약 3,000자입니다. 여유 있게 2,500~2,800자를 권장합니다. 처음 발표라면 넉넉하게 2,500자 이하로 준비해 시간 초과를 방지하세요." },
          { q: "슬라이드 한 장당 얼마나 말해야 하나요?", a: "TED 발표는 평균 1~2분/슬라이드를 권장합니다. 내용·청중·발표 성격에 따라 조절하세요. 학술 발표는 장당 2~3분, 기업 PT는 1~2분이 일반적입니다." },
          { q: "발표 연습에서 가장 효과적인 방법은?", a: "실제 발표 환경과 유사하게 서서 큰 소리로 전체 시간을 맞춰 연습하는 것이 가장 효과적입니다. 녹화 후 자신의 발표를 보면 빠른 말투·군말·시선 처리 문제를 파악하기 좋습니다." },
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
          { q: "측정 오차를 줄이려면 어떻게 해야 하나요?", a: "동일 조건에서 여러 번 측정해 평균을 사용하고, 도구 보정과 측정 환경을 표준화하는 것이 효과적입니다. 체계적 오차(편향)는 측정 방법·도구 자체의 결함에서 오므로 보정이 필요하고, 무작위 오차는 반복 측정으로 줄일 수 있습니다." },
          { q: "참값을 모를 때는 어떻게 하나요?", a: "참값이 없을 때는 다른 측정 방법의 결과나 공인 표준과 비교하거나, 편차(반복 측정값 간 차이)를 기준으로 정밀도를 평가합니다. 공인 인증 기관의 표준물질이나 레퍼런스 값을 참값 대용으로 사용하기도 합니다." },
          { q: "오차율 5%는 허용 범위인가요?", a: "분야마다 허용 오차 기준이 크게 다릅니다. 공학·제조업은 0.1~1%, 화학 분석은 1~5%, 여론조사·사회과학은 3~5%, 의학 검사는 목적에 따라 다릅니다. 적용 분야의 허용 기준을 반드시 확인하세요." },
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
          { q: "p < 0.05면 결과가 무조건 옳은 건가요?", a: "아닙니다. p-값은 귀무가설이 참일 때 이 결과가 나올 확률입니다. 효과 크기(Effect Size)와 신뢰구간도 함께 고려해야 합니다. 표본이 매우 크면 작은 효과도 p < 0.05가 나올 수 있습니다." },
          { q: "p-값 조작(p-hacking)이란?", a: "분석 방법·변수를 반복 변경해 p < 0.05를 억지로 만드는 행위로, 재현성 위기의 주요 원인입니다. 이를 방지하기 위해 연구 가설과 분석 방법을 사전에 등록(pre-registration)하는 것이 권장됩니다." },
          { q: "p-값 대신 사용할 수 있는 통계 지표가 있나요?", a: "코헨의 d(Cohen's d) 같은 효과 크기(Effect Size), 베이즈 인수(Bayes Factor), 신뢰구간(Confidence Interval)이 p-값의 한계를 보완하는 대안으로 권장됩니다. 최근에는 p-값만으로 유의성을 판단하는 관행에 대한 비판이 커지고 있습니다." },
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
          { q: "GPA 계산에서 P/F 과목은 가중 평균에 포함되나요?", a: "일반적으로 P/F 과목은 GPA 계산에서 제외됩니다. 학교 학칙을 확인하세요. 일부 대학은 Pass 과목을 4.0으로 포함하거나, 아예 GPA에 반영하지 않는 방식을 선택합니다." },
          { q: "가중치를 %로 입력해야 하나요?", a: "가중치는 상대적 비중이므로 학점·점수·비율 등 일관된 단위면 됩니다. 합계가 1이나 100이 아니어도 계산 결과는 동일합니다. 예: 2:3:5 비중으로 나눠도 올바른 가중 평균이 나옵니다." },
          { q: "산술 평균과 가중 평균 중 어떤 것이 더 정확한가요?", a: "항목들의 중요도나 빈도가 같다면 산술 평균이 간단합니다. 중요도가 다르거나 표본 크기가 다를 때는 가중 평균이 더 정확합니다. 예: 학점이 다른 과목의 성적은 가중 평균으로 계산해야 실제 GPA를 정확히 구할 수 있습니다." },
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
          { q: "상관관계가 인과관계를 의미하나요?", a: "아닙니다. 상관관계는 두 변수가 함께 변하는 패턴을 보여줄 뿐, 원인-결과 관계를 증명하지 않습니다. '아이스크림 판매량과 익사 사고 수'처럼 제3변수(더위)가 원인일 수 있습니다. 인과관계 증명에는 무작위 대조 실험이 필요합니다." },
          { q: "r=0이면 두 변수는 완전히 무관한가요?", a: "선형 상관이 없다는 의미입니다. 비선형(포물선 등) 관계는 r=0이어도 강한 관계일 수 있습니다. 예: y = x² 에서 x와 y의 피어슨 r은 0에 가깝지만 완전한 관계입니다." },
          { q: "피어슨 상관계수 외 다른 상관계수도 있나요?", a: "네. 스피어만 상관계수(Spearman's ρ)는 서열 데이터나 정규분포를 따르지 않는 데이터에 사용합니다. 켄달 타우(Kendall's τ)는 표본이 작을 때 더 강건합니다. 피어슨은 연속형 정규분포 데이터에 가장 적합합니다." },
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
          { q: "백분위 99라면 상위 1%인가요?", a: "네, 백분위 99는 99%보다 높다는 뜻이므로 상위 1%에 해당합니다. 단 백분위 계산 방식에 따라 약간의 차이가 있을 수 있으므로 적용 기준을 확인하세요." },
          { q: "수능 백분위와 등급의 차이는?", a: "백분위는 연속적인 상대 순위이고, 등급은 구간으로 구분된 단계입니다. 같은 백분위여도 등급 경계 근처에 있다면 소수점 차이로 등급이 달라질 수 있습니다. 대입 전형에서 두 지표를 함께 확인하는 것이 중요합니다." },
          { q: "IQR(사분위 범위)은 어떻게 활용하나요?", a: "IQR = Q3 − Q1로, 데이터의 중간 50% 범위를 나타냅니다. 이상치 탐지에 많이 쓰이며 Q1 − 1.5×IQR 미만이나 Q3 + 1.5×IQR 초과값을 이상치로 분류합니다. 평균·표준편차보다 이상치에 강건한 산포 지표입니다." },
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
          { q: "0! = 1인 이유는?", a: "빈 집합의 배열 수가 1(배열 방법이 1가지)이라는 개념에서 정의됩니다. C(n,0)=1 등 수식을 일관되게 만들기 위해 필요합니다. n! = n × (n−1)! 점화식에서도 1! = 1×0! = 1×1 = 1이 자연스럽게 성립합니다." },
          { q: "음수의 팩토리얼은 정의되나요?", a: "음의 정수에 대해 팩토리얼은 정의되지 않습니다. 복소수로 확장하는 감마 함수 Γ(n) = (n−1)!를 사용하면 양의 실수·복소수에 대해 팩토리얼을 일반화할 수 있습니다." },
          { q: "팩토리얼이 폭발적으로 커지는 이유는?", a: "n!은 지수 함수보다도 빠르게 증가합니다. 스털링 근사에 따르면 n! ≈ √(2πn) × (n/e)ⁿ으로 추정할 수 있습니다. 20! ≈ 2.4×10¹⁸으로, 컴퓨터 64비트 정수의 최대값을 초과합니다." },
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
          { q: "비율과 비례의 차이는?", a: "비율은 두 수의 관계(a÷b)이고, 비례는 두 비율이 같다는 관계(a:b = c:d)입니다. 정비례는 x가 커질수록 y도 같은 비율로 커지고, 반비례는 x가 커지면 y는 같은 비율로 작아집니다." },
          { q: "요리할 때 레시피를 2배로 늘리면 모든 재료를 2배?", a: "기본적으로 맞습니다. 단, 오븐 온도와 시간은 단순 비례하지 않을 수 있습니다. 소금·간장 등 강한 재료는 2배보다 적게 조절하는 경우도 많으니 맛을 보면서 조정하세요." },
          { q: "황금 비율(1.618:1)이 실생활에서 쓰이나요?", a: "황금 비율은 건축(파르테논 신전), 예술(레오나르도 다 빈치), 로고 디자인, 스마트폰 화면 비율 등 다양하게 활용됩니다. 자연에서도 조개나선·꽃잎 배열에서 발견됩니다." },
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
        매월 일정 금액을 납입하고 만기에 원금과 이자를 함께 받는 <strong>정기적금</strong>의 만기 수령액을 미리 계산하는 도구입니다.
        은행마다 금리가 다르고, 세금·우대 혜택에 따라 실수령 이자가 달라지므로 가입 전 꼭 시뮬레이션해 보세요.
      </GuideP>

      <GuideH2>적금 이자 계산 공식</GuideH2>
      <GuideP>국내 정기적금은 대부분 <strong>단리</strong>로 계산합니다.</GuideP>
      <GuideFormulaBox>
        총 납입원금 = 월 납입액 × 납입 개월 수{"\n"}
        세전 이자 = 월 납입액 × 연이율(%) ÷ 100 × (n+1) ÷ 24{"\n"}
        세후 이자 = 세전 이자 × (1 − 0.154)  ← 이자소득세 14% + 지방소득세 1.4%{"\n"}
        만기 수령액 = 총 납입원금 + 세후 이자
      </GuideFormulaBox>
      <GuideP>
        예시: 월 50만 원, 연 3.5%, 12개월 적금 → 세전 이자 약 113,750원, 세후 약 96,388원, 만기 수령 약 6,096,388원
      </GuideP>

      <GuideH2>월 납입액별 만기 수령액 참고표 (연 3.5%, 12개월)</GuideH2>
      <GuideTable
        headers={["월 납입액", "총 납입원금", "세전 이자", "세후 수령액"]}
        rows={[
          ["10만 원", "120만 원", "약 22,750원", "약 1,219,278원"],
          ["30만 원", "360만 원", "약 68,250원", "약 3,657,833원"],
          ["50만 원", "600만 원", "약 113,750원", "약 6,096,388원"],
          ["100만 원", "1,200만 원", "약 227,500원", "약 12,192,775원"],
          ["300만 원", "3,600만 원", "약 682,500원", "약 36,578,325원"],
        ]}
      />

      <GuideH2>적금 vs 예금 — 실질 금리 차이</GuideH2>
      <GuideP>
        같은 연이율이라도 <strong>예금이 적금보다 실질 수익이 높습니다</strong>.
        적금은 매달 납입하기 때문에 첫 달 납입금만 12개월 전체 이자가 붙고, 마지막 달 납입금은 1개월치 이자만 붙습니다.
        평균적으로 절반 기간만 예치하는 효과이므로 적금의 실질 수익률은 명목 이율의 약 절반 수준입니다.
      </GuideP>
      <GuideTable
        headers={["구분", "이자 계산 방식", "실질 수익률 (연 3.5% 기준)","특징"]}
        rows={[
          ["정기예금", "가입 시 전액 예치 → 만기 수령", "≈ 3.5%", "목돈 운용에 유리"],
          ["정기적금", "매월 납입 → 만기 수령", "≈ 1.75% (절반 수준)", "소액 꾸준히 모을 때"],
          ["자유적금", "납입액 자유 → 만기 수령", "납입 패턴에 따라 다름", "불규칙 수입자"],
        ]}
      />

      <GuideH2>세금우대·비과세 상품 활용</GuideH2>
      <GuideBulletList
        items={[
          "일반 이자소득세: 15.4% (이자소득세 14% + 지방소득세 1.4%)",
          "세금우대 (신협·새마을금고·농협 등 조합): 9.9% (일부 한도 내)",
          "비과세종합저축: 만 65세 이상·장애인 등 대상, 원금 5,000만 원 한도 비과세",
          "청년도약계좌(2023~): 월 최대 70만 원, 정부 기여금 + 비과세 혜택",
          "청년희망적금(종료): 신규 가입 불가, 기존 가입자 유지 가능",
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "적금 이율 3%와 예금 이율 3% 중 어느 게 더 유리한가요?",
            a: "예금이 더 유리합니다. 동일 금액·이율 기준으로 예금의 이자가 적금의 약 2배입니다. 목돈이 있다면 예금, 매월 저축할 금액이 있다면 적금을 선택하세요.",
          },
          {
            q: "중도 해지하면 이자를 못 받나요?",
            a: "약정 이율 대신 훨씬 낮은 '중도 해지 이율'이 적용됩니다. 보통 연 0.1~1% 수준으로 이자가 거의 없다고 봐야 합니다. 비상금은 CMA·파킹통장에 분리 보관하는 것이 좋습니다.",
          },
          {
            q: "자유적금은 이 계산기로 정확히 계산할 수 있나요?",
            a: "자유적금은 납입 시점과 금액이 달마다 달라 정확한 계산이 어렵습니다. 이 계산기는 매월 동일 금액을 납입하는 정기적금 기준이므로, 자유적금은 참고치로만 활용하세요.",
          },
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
          { q: "다주택자 취득세는 얼마인가요?", a: "2주택 이상부터 취득세율이 크게 올라갑니다(최대 12%). 규제 지역·비규제 지역·주택 수에 따라 다르니 지방세법 및 행정안전부 취득세 계산기를 확인하세요." },
          { q: "생애최초 주택 구입 혜택이 있나요?", a: "생애최초 주택 구입자는 취득세 감면(최대 200만 원) 혜택이 있습니다. 주택 가격 12억 원 이하, 소득 요건 등을 확인하세요. 주택담보대출에서도 생애최초 우대 금리가 적용될 수 있습니다." },
          { q: "공인중개사 수수료는 어떻게 계산하나요?", a: "2021년 개정 기준으로 매매 2억~9억 미만 0.4%, 9억 이상 0.9% 이내에서 협의합니다. 전·월세는 별도 요율이 적용됩니다. 최종 수수료는 반드시 협의 후 영수증을 받으세요." },
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
          { q: "월급의 20%를 저축하기 어려운데 어떻게 하나요?", a: "먼저 고정 지출(구독, 할부)을 점검하고 단계적으로 저축률을 올리세요. 월급 받는 날 자동 이체로 먼저 저축하는 방법이 효과적입니다. 처음엔 5~10%부터 시작해 매 분기 1~2%씩 늘려가는 방법을 추천합니다." },
          { q: "주거비 비율이 너무 높아요", a: "주거비가 소득의 30~35%를 초과하면 하우스푸어 위험이 있습니다. 이사·월세 조정 등을 검토하고, 주거급여·청년 전세 대출 등 정부 지원 제도도 확인해 보세요." },
          { q: "식비 절약을 위한 현실적인 방법은?", a: "외식 횟수를 주 2~3회로 줄이고 직접 요리하는 것이 가장 효과적입니다. 마트 영수증 분석으로 충동 구매를 파악하거나, 장을 볼 때 식단 계획을 세우면 식비를 20~30% 줄일 수 있습니다." },
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
          { q: "퍼센트와 퍼센트포인트(%p)의 차이는?", a: "% 변화는 기준 대비 비율 변화이고, %p는 두 % 사이의 단순 차이입니다. 예: 금리 2%→5%는 +3%p 인상이지만 150% 증가입니다. 뉴스에서 혼용되는 경우가 많으니 주의하세요." },
          { q: "20% 인상 후 20% 할인하면 원래 가격이 되나요?", a: "아닙니다. 1.2 × 0.8 = 0.96으로 원래의 96%가 됩니다. 퍼센트는 기준이 달라지므로 상쇄되지 않습니다. 원래대로 돌아오려면 인상 후 약 16.7% 할인이 필요합니다." },
          { q: "할인율과 이익률은 같은 개념인가요?", a: "다릅니다. 할인율은 정가 기준으로 얼마나 낮춰주는지, 이익률(마진율)은 판매가 기준으로 수익이 몇 %인지입니다. 예: 원가 70원에 100원에 팔면 마진율 30%이고, 정가 100원에서 30% 할인하면 70원으로 원가에 팔게 됩니다." },
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
        정가와 할인율(%)로 할인가를 계산하거나, 정가와 판매가로 <strong>실제 할인율을 역산</strong>하는 도구입니다.
        쇼핑 시 여러 할인 조건을 비교하거나 가격 협상 시 활용하세요.
      </GuideP>

      <GuideH2>할인 계산 공식</GuideH2>
      <GuideFormulaBox>
        할인가 = 정가 × (1 − 할인율 ÷ 100){"\n"}
        실제 할인율(%) = (정가 − 판매가) ÷ 정가 × 100{"\n\n"}
        중복 할인 최종가 = 정가 × (1 − r₁÷100) × (1 − r₂÷100){"\n"}
        중복 할인 실질율 = 1 − (1−r₁÷100) × (1−r₂÷100)
      </GuideFormulaBox>

      <GuideH2>중복 할인 계산 예시</GuideH2>
      <GuideTable
        headers={["정가", "1차 할인", "2차 할인", "최종 금액", "실질 할인율"]}
        rows={[
          ["100,000원", "20%", "10%", "72,000원", "28%"],
          ["50,000원", "30%", "15%", "29,750원", "40.5%"],
          ["200,000원", "10%", "5%", "171,000원", "14.5%"],
          ["80,000원", "25%", "20%", "48,000원", "40%"],
        ]}
      />
      <GuideP className="text-neutral-500">
        ※ 중복 할인은 단순 합산이 아닙니다. 20% + 10% = 28% (30%가 아님). 먼저 적용하는 할인이 더 큰 경우 같은 금액 할인이라도 순서에 따라 최종가가 달라집니다.
      </GuideP>

      <GuideH2>할인율별 체감 이득 참고표</GuideH2>
      <GuideTable
        headers={["할인율", "10만원 상품", "30만원 상품", "100만원 상품"]}
        rows={[
          ["5%", "95,000원", "285,000원", "950,000원"],
          ["10%", "90,000원", "270,000원", "900,000원"],
          ["20%", "80,000원", "240,000원", "800,000원"],
          ["30%", "70,000원", "210,000원", "700,000원"],
          ["50%", "50,000원", "150,000원", "500,000원"],
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "카드 캐시백과 할인쿠폰, 어느 게 더 유리한가요?",
            a: "최종 지출액 기준으로 같지만, 현금 흐름이 다릅니다. 할인쿠폰은 즉시 금액이 줄어들고, 캐시백은 결제 후 일정 기간 뒤에 돌아옵니다. 고액 구매라면 즉시 할인 쿠폰이 심리적으로 유리합니다.",
          },
          {
            q: "쿠폰과 세일이 중복 적용될 때 순서가 중요한가요?",
            a: "비율(%) 할인 쿠폰끼리라면 순서가 바뀌어도 최종가는 같습니다. 하지만 금액(원) 할인 쿠폰이 섞이면 순서에 따라 최종가가 달라질 수 있습니다. 일반적으로 비율 할인을 먼저 적용하고 금액 할인을 나중에 적용하는 것이 유리합니다.",
          },
          {
            q: "정가가 올라간 후 할인 표시하는 경우 어떻게 확인하나요?",
            a: "실제 할인율 = (정가 − 판매가) ÷ 정가 × 100 공식으로 직접 계산하거나, 네이버쇼핑·쿠팡의 가격 히스토리를 확인해 정가가 실제 평소 판매가와 같은지 비교해 보세요.",
          },
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
          { q: "전세가가 매매가의 80%에 달하면 어떻게 판단해야 하나요?", a: "전세가율이 높을수록 매매 메리트가 줄어듭니다. 전세가율 80% 이상이면 집주인이 전세 보증금으로 주택을 사는 격이 되어 역전세(집값 하락 시 보증금 미반환) 위험이 크므로 신중하게 검토하세요." },
          { q: "월세 vs 전세는 어떻게 비교하나요?", a: "월세 × 12 ÷ 전세 보증금 = 전월세 전환율로 비교합니다. 전환율이 시중 금리보다 낮으면 전세가 유리하고, 높으면 월세가 유리합니다. 한국은행 기준금리 변동에 따라 유불리가 달라지므로 정기적으로 재평가가 필요합니다." },
          { q: "전세 대출을 받을 때 주의해야 할 점은?", a: "전세 보증금 반환 보증보험(HUG·SGI서울보증)에 반드시 가입하세요. 집주인의 근저당·체납 세금도 확인하고, 보증금이 시세 80% 이하인지 체크하는 것이 중요합니다. 전세 사기 예방을 위해 등기부등본과 전입신고·확정일자를 빠짐없이 처리하세요." },
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
          ["증권거래세 (코스피 매도)", "0.15% (농어촌특별세 포함, 2025년 기준)"],
          ["증권거래세 (코스닥 매도)", "0.15% (2025년 기준)"],
          ["양도소득세", "대주주 해당 시 적용"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "수수료 무료 이벤트라도 세금은 내야 하나요?", a: "네, 증권거래세는 매도 시 자동으로 부과되며 수수료 면제와 관계없이 납부해야 합니다. 0.15%(코스피·코스닥, 2025년 기준)는 정부세로 증권사가 대납 후 청구합니다." },
          { q: "ETF 수수료는 주식과 같나요?", a: "ETF는 매매 수수료 외에 운용 보수(총 비용 비율, TER)가 별도로 연간 차감됩니다. 국내 ETF는 0.03~0.5%, 해외 ETF는 0.03~1% 수준입니다. 장기 투자일수록 운용 보수 차이가 수익에 큰 영향을 미칩니다." },
          { q: "빈번한 매매(데이트레이딩)에서 수수료가 수익에 미치는 영향은?", a: "수수료 0.015% + 세금 0.15%로 매도 시마다 0.165%가 차감됩니다. 하루 10번 거래하면 연간 수백 %의 수수료가 발생합니다. 빈번한 매매는 수수료·세금 부담을 먼저 고려해야 실질 수익을 계산할 수 있습니다." },
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
          { q: "손절을 하면 무조건 손해인가요?", a: "작은 손실을 확정하고 더 큰 손실을 막는 것이 손절의 목적입니다. 장기적으로 계좌를 지키는 리스크 관리 전략이며, 손절 없이 물타기만 하다가 큰 손실이 나는 경우가 더 위험합니다." },
          { q: "손절 후 다시 오르면 어떻게 하나요?", a: "이미 발생한 일은 결과론적 판단입니다. 손절 결정이 당시 정보 기반으로 합리적이었다면 전략을 유지하는 것이 중요합니다. 손절 후 재매수를 고려한다면 이전과 다른 이유(새로운 상승 신호)가 있을 때만 진입하세요." },
          { q: "손절선을 어디에 설정해야 하나요?", a: "일반적으로 매수가 대비 -5~10%가 많이 사용됩니다. 기술적 분석에서는 지지선 아래, 변동성 기반으로는 ATR(평균진폭) × 1.5~2배 아래에 설정합니다. 손절선은 거래 진입 전에 미리 정하고 감정에 흔들리지 않는 것이 핵심입니다." },
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
          { q: "CAGR이 높으면 무조건 좋은 투자인가요?", a: "CAGR은 변동성(위험)을 반영하지 않습니다. CAGR이 같아도 매년 안정적으로 10%를 낸 투자와 +100% → -50%를 반복한 투자는 위험이 매우 다릅니다. 샤프비율 등 위험 조정 수익률도 함께 확인하세요." },
          { q: "CAGR과 단순 평균 수익률의 차이는?", a: "CAGR은 기하 평균(복리 반영), 단순 평균은 산술 평균입니다. 변동이 있을 경우 CAGR이 항상 산술 평균보다 낮습니다. 예: 1년 +100%, 2년 -50%면 최종 원금 유지지만 산술 평균은 25%, CAGR은 0%입니다." },
          { q: "목표 수익을 역산해 필요 CAGR을 구하는 방법은?", a: "필요 CAGR = (목표값 ÷ 초기값)^(1÷n) − 1 공식을 사용합니다. 예: 1,000만 원을 10년 안에 2,000만 원으로 만들려면 CAGR = (2)^(1/10) − 1 ≈ 7.2%가 필요합니다." },
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
          { q: "ROI가 같아도 기간이 다르면 어느 쪽이 유리한가요?", a: "같은 ROI라면 기간이 짧을수록 연환산 수익률이 높아 유리합니다. 연환산 수익률(CAGR)로 비교하세요. 예: ROI 30%를 1년 만에 달성 vs 3년 만에 달성은 완전히 다른 성과입니다." },
          { q: "마케팅 ROI는 어떻게 계산하나요?", a: "마케팅 ROI = (마케팅으로 증가한 매출 − 마케팅 비용) ÷ 마케팅 비용 × 100으로 계산합니다. 마케팅 매출 기여분을 정확히 분리하기 어렵다면 ROAS를 대안 지표로 사용하세요." },
          { q: "ROI와 IRR의 차이는 무엇인가요?", a: "ROI는 단순 수익률(기간 무관), IRR(내부수익률)은 현금 흐름의 시간 가치를 반영한 복리 기반 수익률입니다. 여러 기간에 걸친 투자를 비교할 때는 IRR이 더 정확한 기준을 제공합니다." },
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
          { q: "ROAS가 높으면 무조건 좋은 광고인가요?", a: "ROAS가 높아도 마진이 낮으면 실제 이익이 없을 수 있습니다. 마진을 반영한 ROI(또는 ROAS 손익 분기)와 함께 분석하세요. ROAS 200%가 목표인 업종도 있고 500% 이상이어야 이익인 업종도 있습니다." },
          { q: "목표 ROAS는 어떻게 설정하나요?", a: "업종 평균 마진율에서 역산해 설정합니다. 예: 마진 25% → 손익 분기 ROAS = 400%. 목표 ROAS는 손익 분기 이상으로 설정하고, 브랜드 인지도 광고는 ROAS 외 CPM·도달률로 평가하세요." },
          { q: "ROAS와 CPA 중 어느 지표가 더 중요한가요?", a: "업종·목적에 따라 다릅니다. 이커머스는 ROAS(매출 최적화), 앱 다운로드·리드 수집은 CPA(행동당 비용)가 더 적합합니다. 두 지표를 함께 모니터링해 광고 효율과 수익성을 균형 있게 관리하세요." },
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
          ["매매", "9억 원 이상", "0.9% 이하 협의"],
          ["전세", "1억 미만", "0.5%"],
          ["전세", "1억~3억 미만", "0.4%"],
          ["전세", "3억 원 이상", "0.4% 이하 협의"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "중개 수수료는 협상이 가능한가요?", a: "법정 상한 요율 이하에서 협의가 가능합니다. 특히 고가 거래에서 요율을 낮추는 경우가 많습니다. 수수료를 협의할 때는 계약 전에 미리 서면으로 확인하는 것이 안전합니다." },
          { q: "매수인과 매도인이 각각 따로 내나요?", a: "네, 매수인과 매도인이 각자의 중개인에게 수수료를 지급하는 것이 원칙입니다. 한 중개사가 양쪽을 중개했을 때도 각각에게 요율 상한이 적용됩니다." },
          { q: "직거래를 하면 중개 수수료를 아낄 수 있나요?", a: "가능하지만 계약서 작성·권리 분석·등기 확인 등을 직접 해야 합니다. 법무사 비용이나 분쟁 발생 시 법적 비용이 오히려 더 클 수 있으므로 신중히 판단하세요." },
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
          { q: "법인세 절감을 위해 어떤 방법이 유리한가요?", a: "초기에 비용을 많이 인식하려면 정률법이 유리합니다. 단, 세법상 허용 방법과 내용연수를 먼저 확인하세요. 소규모 사업자는 즉시 전액 비용 처리가 허용되는 소액 자산(500만 원 미만) 기준도 확인하세요." },
          { q: "잔존가치는 어떻게 정하나요?", a: "세법상 잔존가치는 취득가의 5% 또는 0으로 정하는 경우가 많습니다. 국제회계기준(IFRS)은 합리적 추정을 요구하고, 한국채택국제회계기준(K-IFRS)도 동일합니다. 회계·세법 기준을 구분해 적용하세요." },
          { q: "내용연수는 임의로 정할 수 있나요?", a: "세법에서는 자산 종류별 기준 내용연수를 정해두고 있습니다(기계장치 8년, 차량 5년 등). 기준 내용연수의 75~125% 범위에서 신고·선택이 가능합니다. 변경 시에는 세무서에 변경 신고가 필요합니다." },
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
          { q: "EBITDA가 높으면 무조건 좋은 기업인가요?", a: "EBITDA가 높아도 설비 투자(CAPEX)가 크거나 부채가 많으면 실제 현금 창출이 제한될 수 있습니다. 자유현금흐름(FCF = EBITDA − CAPEX − 이자 − 세금)도 함께 봐야 합니다." },
          { q: "EV/EBITDA가 낮을수록 저평가인가요?", a: "업종 평균과 비교해야 합니다. 제조·인프라업은 5~10배, IT·플랫폼은 20~50배도 흔합니다. 같은 업종 내 경쟁사와 비교하는 것이 중요합니다." },
          { q: "EBITDA와 영업현금흐름(OCF)의 차이는?", a: "EBITDA는 D&A만 더한 비현금 비용 조정치이고, OCF는 실제 운전자본 변동(매출채권·재고·매입채무)까지 반영한 현금 기준 수치입니다. 실제 현금 창출력을 보려면 OCF나 FCF가 더 정확합니다." },
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
          { q: "마진율이 높은 업종은?", a: "소프트웨어·제약·럭셔리 브랜드의 영업이익률이 높은 편(20~50%)이고, 유통·식품·항공업은 낮은 편(1~10%)입니다. 애플의 영업이익률은 약 30%, 코카콜라는 약 25% 수준입니다." },
          { q: "마크업과 마진의 차이는?", a: "마진은 매출 기준(이익÷매출), 마크업은 원가 기준(이익÷원가)입니다. 예: 원가 70원에 100원에 팔면 마진 30%, 마크업 42.9%입니다. 가격 책정 시 혼용되므로 어느 기준인지 확인하세요." },
          { q: "영업이익률과 순이익률 중 어느 것이 더 중요한가요?", a: "영업이익률은 본업 수익성을 나타내며 일회성 항목(자산 매각 이익 등)이 제외됩니다. 순이익률은 이자·세금까지 포함한 최종 수익성입니다. 기업의 지속적 영업 능력을 보려면 영업이익률이 더 중요합니다." },
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
          { q: "PER이 음수면 무슨 의미인가요?", a: "순이익이 적자(EPS < 0)이면 PER이 음수가 됩니다. 이 경우 PER 비교는 무의미하며 PSR(주가매출비율)·EV/Sales·EV/EBITDA 등 다른 지표를 사용합니다." },
          { q: "선행 PER과 후행 PER의 차이는?", a: "후행 PER(Trailing PER)은 실제 발표된 12개월 이익 기준, 선행 PER(Forward PER)은 애널리스트 예측 이익 기준입니다. 미래를 반영하는 선행 PER이 투자 판단에 더 많이 쓰입니다." },
          { q: "PER이 낮은데 주가가 오르지 않는 이유는?", a: "PER만으로는 설명이 부족합니다. 업종·성장성·부채·배당·경영진 신뢰도 등 복합 요인이 주가에 영향을 줍니다. 낮은 PER이 지속되는 종목은 저성장·재무 리스크·지배구조 문제가 있는 경우가 많습니다." },
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
          { q: "PBR 1 미만이면 무조건 저평가인가요?", a: "자산의 질(부실 자산 여부)과 수익성을 함께 봐야 합니다. 구조조정이 필요한 기업이나 ROE가 낮은 기업은 낮은 PBR이 정당화될 수 있습니다. PBR < 1이라도 자산 가치가 실제로 장부가치만큼 있는지 확인이 필요합니다." },
          { q: "ROE와 PBR의 관계는?", a: "ROE × PER = PBR의 관계가 성립합니다. ROE가 높은 기업은 자연스럽게 PBR도 높아집니다. 반대로 ROE가 낮은 기업(자기자본을 비효율적으로 사용)은 PBR이 낮게 형성됩니다." },
          { q: "PBR이 높은 IT·플랫폼 기업을 PBR로 평가해도 되나요?", a: "IT·플랫폼 기업은 무형자산(브랜드·특허·데이터)이 장부에 제대로 반영되지 않아 PBR이 자산 기준 평가에 적합하지 않습니다. 이런 기업은 PSR·EV/Revenue·EV/EBITDA 등을 활용하는 것이 더 적합합니다." },
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
          { q: "ROE가 너무 높으면 오히려 위험한가요?", a: "자본이 과도하게 적거나(고부채 활용) 자사주 매입으로 자기자본이 낮아진 경우 ROE가 비정상적으로 높을 수 있습니다. ROA(총자산이익률), 부채비율, 이자보상비율도 함께 확인하세요." },
          { q: "ROE가 꾸준히 15% 이상인 기업은 어떻게 찾나요?", a: "금융정보 사이트(네이버 금융, 증권사 HTS, FnGuide 등)에서 ROE 필터링 기능을 활용할 수 있습니다. 최소 5~10년 연속으로 15% 이상 유지한 기업이 워런 버핏이 선호하는 기준입니다." },
          { q: "ROE와 ROA의 차이는?", a: "ROE는 자기자본 기준, ROA는 총자산(자기자본 + 부채) 기준 수익률입니다. ROE가 ROA보다 훨씬 높다면 부채 레버리지를 많이 사용한다는 의미입니다. 안정적 기업이라면 ROE와 ROA의 차이가 과도하지 않아야 합니다." },
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
          { q: "은행 광고에 'APY 5%'라고 쓰면 실제 월 이자는?", a: "APY 5% = 월 이자율 ≈ 5% ÷ 12 ≈ 0.417% (단리 가정시). 복리 적용 상품이라면 월 이율이 약간 낮습니다. APY = (1 + 월이율)^12 − 1이므로 월이율 = (1+0.05)^(1/12) − 1 ≈ 0.407%입니다." },
          { q: "국내 적금은 APY 개념이 적용되나요?", a: "국내 적금 광고는 대부분 연 이율(단리)을 표기합니다. APY로 환산하면 실제 수익이 약간 다를 수 있습니다. 외국 금융 상품이나 가상자산 스테이킹 수익은 APY로 표기하는 경우가 많으니 비교 시 주의하세요." },
          { q: "APR 대신 APY로 비교해야 하는 이유는?", a: "복리 횟수가 다른 상품을 APR로만 비교하면 실제 수익률이 다를 수 있습니다. 예: APR 12% 월복리와 APR 12.5% 연복리를 비교하면 APY 기준으로는 월복리(APY ≈ 12.68%)가 더 유리합니다." },
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
          { q: "CPM이 낮으면 무조건 좋은 광고인가요?", a: "CPM이 낮아도 타겟 정확도가 낮으면 전환율이 나빠집니다. ROAS(광고 수익률)와 CPA(전환당 비용)로 최종 성과를 평가하세요. 가장 중요한 것은 광고비 대비 실질 매출·이익입니다." },
          { q: "유튜브·인스타그램 평균 CPM은?", a: "플랫폼·타겟·업종에 따라 다르지만 국내 기준 유튜브 약 2,000~10,000원, 인스타그램 약 3,000~15,000원, 카카오·네이버 디스플레이는 1,000~5,000원 수준입니다(참고치, 변동 가능)." },
          { q: "CPM과 CPC 중 어떤 과금 방식이 유리한가요?", a: "브랜드 인지도 캠페인(노출 목표)은 CPM, 직접 반응 캠페인(클릭·구매 목표)은 CPC 또는 CPA가 유리합니다. 클릭률이 낮은 업종에서는 CPM이 CPC보다 저렴할 수 있습니다." },
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
          { q: "신용카드 무이자 할부는 정말 이자가 없나요?", a: "카드사가 이자를 부담하는 프로모션 행사입니다. 가맹점이 수수료 일부를 부담하는 경우도 있습니다. 제품 정가 자체에 이자 비용이 반영된 경우도 있을 수 있으니 현금가와 비교해 보세요." },
          { q: "법정 최고 이자율이 20%라면 그 이상은 불법인가요?", a: "네, 이자제한법에 따라 연 20%를 초과하는 이자 약정은 무효이며 초과 금액은 반환 청구가 가능합니다. 대부업체도 동일하게 20% 상한이 적용됩니다(2021년 7월 이후)." },
          { q: "대출 이자 절감을 위한 현실적인 방법은?", a: "먼저 신용점수를 관리(연체 없음, 카드 사용률 30% 이하 유지)해 우대 금리를 받으세요. 기존 대출은 타행 이동(대환)으로 금리를 낮출 수 있습니다. 정부 지원 대출(서민금융, 사잇돌 대출)도 조건이 된다면 활용하세요." },
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
          { q: "-50% 하락 후 50% 상승하면 원래 수준이 되나요?", a: "아닙니다. 100에서 -50%면 50이 되고, 50에서 +50%면 75입니다. 회복하려면 +100% 상승이 필요합니다. 이것이 주식 투자에서 손실을 막는 것이 이익을 내는 것보다 중요한 이유입니다." },
          { q: "전년 대비 vs 전월 대비 어느 쪽이 더 의미 있나요?", a: "목적에 따라 다릅니다. 계절성이 있는 데이터는 전년 동기 대비가, 단기 추세는 전월 대비가 유용합니다. 예: 12월 소매 판매는 전년 대비로 보아야 크리스마스 시즌 효과를 제거할 수 있습니다." },
          { q: "변화율이 갑자기 크게 보이는 착시 현상은?", a: "기저 효과(Base Effect)입니다. 직전 기간이 비정상적으로 낮거나 높으면 변화율이 과장됩니다. 예: 코로나 기저 효과로 2021년 경제 성장률이 인위적으로 높게 나온 사례가 대표적입니다." },
        ]}
      />
    </>
  );
}

function SubscriptionGuide() {
  return (
    <>
      <GuideH2>청약 가점 계산기란?</GuideH2>
      <GuideP>
        아파트 청약(가점제)에서 당첨 가능성을 좌우하는 가점을 미리 산출하는 도구입니다.
        무주택 기간·부양가족 수·청약통장 가입 기간 세 항목의 합산 점수가 높을수록 당첨 확률이 높아집니다.
        결과는 참고용이며, 실제 청약은 청약홈(apply.lh.or.kr)에서 공식 확인하세요.
      </GuideP>
      <GuideH3>가점 항목 및 배점표</GuideH3>
      <GuideTable
        headers={["항목", "기준", "점수"]}
        rows={[
          ["무주택 기간", "1년 미만", "2점"],
          ["", "1년 이상 ~ 2년 미만", "4점"],
          ["", "2년 이상 ~ 3년 미만", "6점"],
          ["", "…(매 1년 +2점)…", ""],
          ["", "15년 이상", "32점"],
          ["부양가족 수", "0명", "5점"],
          ["", "1명", "10점"],
          ["", "2명", "15점"],
          ["", "3명", "20점"],
          ["", "4명", "25점"],
          ["", "5명", "30점"],
          ["", "6명 이상", "35점"],
          ["청약통장 가입 기간", "6개월 미만", "1점"],
          ["", "6개월~1년 미만", "2점"],
          ["", "1년 이상(매 1년 +1점)", ""],
          ["", "15년 이상", "17점"],
        ]}
      />
      <GuideFormulaBox>
        총 가점 = 무주택 기간 점수 + 부양가족 점수 + 가입 기간 점수{"\n"}
        최대 가점 = 32 + 35 + 17 = 84점{"\n\n"}
        예시: 무주택 5년(12점) + 부양가족 3명(20점) + 가입 10년(11점) = 43점
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "무주택 기간: 세대주 기준, 현재 무주택 상태인 기간만 인정",
          "부양가족: 주민등록 등본 상 세대원(직계존속·비속·배우자) 기준",
          "직계존속은 3년 이상 같은 세대 등록 시 부양가족으로 인정",
          "청약 당첨 후 허위 기재 시 부적격 당첨 처리 및 불이익 발생",
          "가점제 비율은 단지·면적마다 다름 (85㎡ 이하 민영은 통상 40~100%)",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "결혼 전 부모님 세대에서 분리된 경우 무주택 기간은 언제부터인가요?", a: "만 30세 이후 또는 혼인 신고일 중 빠른 날부터 무주택 기간을 인정합니다. 30세 이전 독립 분가는 혼인 전까지 기간을 인정하지 않는 것이 원칙입니다." },
          { q: "청약통장이 2개인 경우 점수를 합산할 수 있나요?", a: "아닙니다. 청약 1건에 1통장만 사용할 수 있으며 가입 기간이 더 긴 통장의 점수만 인정됩니다. 중복 통장은 해지 권고 대상입니다." },
          { q: "가점이 낮을 때 당첨 가능성을 높이는 방법은?", a: "가점제 비율이 낮은 소형(전용 60㎡ 이하) 또는 추첨제 비중이 높은 민간 분양을 공략하거나, 특별공급(생애최초·신혼부부·노부모 부양 등) 자격 해당 여부를 확인하세요. 민간 분양 85㎡ 이하는 추첨제 40~50%가 배정됩니다." },
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
          { q: "분양 공고에서 '84m²'는 몇 평인가요?", a: "84 ÷ 3.3 ≈ 25.5평이지만, 이는 전용면적 기준입니다. 흔히 '33평형'이라 부르는 것은 공급면적(전용+주거공용) 기준입니다. 실제 생활 공간은 전용면적으로 확인하세요." },
          { q: "인테리어 견적 시 어떤 면적을 기준으로 하나요?", a: "전용면적 기준으로 견적을 내는 경우가 일반적입니다. 업체에 전용면적을 정확히 알려주세요. 베란다·발코니 확장 여부도 면적 계산에 영향을 줍니다." },
          { q: "상가·사무실은 평수 계산이 주택과 다른가요?", a: "상가·오피스는 전용면적 외에 공용 면적 부담률(공용면적 ÷ 전용면적)이 추가됩니다. 전용률이 높을수록 실제로 사용하는 공간이 넓습니다. 계약 전 전용면적과 전용률을 반드시 확인하세요." },
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
          { q: "켈빈은 언제 사용하나요?", a: "과학·공학에서 절대 온도가 필요할 때 사용합니다. 열역학 계산, 가스 법칙(PV=nRT), 흑체 복사, 조명 색온도(예: 3,000K = 따뜻한 백색) 등에 사용됩니다." },
          { q: "화씨 100°F는 더운 건가요?", a: "화씨 100°F = 섭씨 약 37.8°C로 한여름 폭염 수준입니다. 사람의 정상 체온(98.6°F = 37°C)보다 약간 높습니다. 미국 기상 예보에서 100°F는 심한 폭염 경보가 발령되는 수준입니다." },
          { q: "오븐 레시피에서 화씨 350°F는 섭씨 몇 도인가요?", a: "350°F = (350−32) × 5÷9 ≈ 177°C입니다. 미국 베이킹 레시피에서 350°F는 가장 자주 등장하는 온도로, 케이크·쿠키 굽기에 적합합니다." },
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
          { q: "TV 55인치는 가로 길이가 55cm인가요?", a: "아닙니다. TV 화면 인치는 대각선 길이입니다. 55인치 TV의 가로는 약 122cm, 세로는 약 69cm입니다(16:9 비율 기준). TV 설치 시 권장 시청 거리는 화면 대각선 길이의 1.5~2배입니다." },
          { q: "신발 사이즈와 인치의 관계는?", a: "미국 신발 사이즈는 발 길이(인치 기준)에서 특정 상수를 더하고 곱하는 별도 공식을 씁니다. 단순 인치 변환과는 다릅니다. 한국 신발 mm 사이즈를 25.4로 나누면 대략적인 발 길이(인치)가 나옵니다." },
          { q: "타이어 규격 '205/55R16'에서 인치는 어디에 있나요?", a: "마지막 숫자 16이 휠 직경(인치)입니다. 205는 타이어 폭(mm), 55는 편평비(%), R은 래디얼 구조를 나타냅니다. 1인치 = 2.54cm이므로 16인치 = 40.64cm입니다." },
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
          { q: "미국 차의 연비가 30mpg이면 한국 기준으로 얼마인가요?", a: "30mpg × 0.4251 ≈ 12.75 km/L입니다. 한국 기준으로 꽤 좋은 연비에 해당합니다. EPA 연비(미국 공인 연비)는 한국 공인 연비보다 다소 낮게 나오는 경향이 있습니다." },
          { q: "미국 갤런과 영국 갤런이 다른가요?", a: "네, 미국 갤런(3.785L)이 영국 갤런(4.546L)보다 약 20% 작습니다. 유류 관련 레시피나 연비 비교 시 반드시 미국식(US gal)인지 영국식(Imperial gal)인지 확인하세요." },
          { q: "수영장에 물을 채우려면 몇 갤런이 필요한가요?", a: "가정용 원형 수영장(직경 4.6m, 깊이 1.2m) 기준 약 20,000리터 = 5,283 US갤런이 필요합니다. 1 US갤런 ≈ 3.785L로 역산할 수 있습니다." },
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
          { q: "건폐율과 용적률의 차이는?", a: "건폐율은 1층 면적 비율(수평 확산 제한), 용적률은 전체 층 면적 합계 비율(수직 확산 제한)입니다. 건폐율이 낮아도 용적률이 높으면 좁은 면적에 고층 건물을 지을 수 있습니다." },
          { q: "주차장·지하 주차장도 건축 면적에 포함되나요?", a: "지하 주차장은 건축 면적에 포함되지 않습니다. 1층 필로티 주차장은 기둥만 있는 개방형이면 건축 면적에서 제외될 수 있습니다. 건물마다 산정 방식이 달라 건축사에게 문의하세요." },
          { q: "건폐율 초과 건축은 어떤 처벌을 받나요?", a: "건폐율을 초과해 건축하면 건축법 위반으로 이행강제금(시정 명령 불이행 시)이 부과되고, 심한 경우 철거 명령을 받을 수 있습니다. 건축 허가 전 반드시 건폐율 한도를 확인하세요." },
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
          { q: "재건축 아파트의 용적률이 중요한 이유는?", a: "용적률이 낮은 단지일수록 재건축 시 더 많은 층수를 올릴 수 있어 사업성이 높습니다. 저층 단지가 재건축 기대감이 큰 이유입니다. 법정 용적률과 현재 용적률의 차이(상향 여력)가 클수록 유리합니다." },
          { q: "지하층은 용적률 산정에 포함되나요?", a: "지하층은 용적률 산정에서 제외됩니다. 지하 주차장이 넓어도 용적률에 영향을 주지 않습니다. 다만 용적률 완화 조건(공공 기여·임대주택 제공)으로 법정 한도 이상을 받을 수 있는 경우도 있습니다." },
          { q: "용적률 300%면 어느 정도 높이의 건물이 가능한가요?", a: "용적률 300%에 건폐율 50%라면 최대 6층(300÷50=6), 건폐율 30%라면 최대 10층까지 가능합니다. 실제 층수는 층고·비용·주차장 규모 등에 따라 달라집니다." },
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
          { q: "먹는 물 질산성 질소 기준 10ppm이란?", a: "물 1L(1kg) 안에 10mg의 질산성 질소가 들어있다는 의미입니다. 이 이상이면 먹는 물로 부적합합니다. 특히 영유아에게는 메트헤모글로빈증 위험이 있어 주의가 필요합니다." },
          { q: "공기 중 CO₂ 농도 400ppm이 위험한가요?", a: "현재 대기 중 CO₂는 약 420ppm으로 지구 온난화 측면에서 우려되지만, 실내 환기 기준은 1,000ppm 이하입니다. 실내가 1,000ppm 초과면 집중력 저하, 2,000ppm 초과면 두통·졸음이 나타날 수 있습니다." },
          { q: "ppb와 ppt는 어떻게 활용되나요?", a: "ppb(10억분의 1)는 초미세먼지(PM2.5) 기준·중금속 오염도 표기에 쓰입니다. ppt(1조분의 1)는 극미량 농도 분석(PFAS·다이옥신 등 영구오염물질)에서 사용됩니다. 값이 작을수록 더 정밀한 검출 기술이 필요합니다." },
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
          { q: "DMS 좌표를 네이버·카카오 지도에서 검색할 수 있나요?", a: "네이버·카카오 지도는 십진수 형식(DD)을 지원합니다. DMS를 DD로 변환 후 검색창에 '위도,경도' 형태로 입력하면 해당 위치를 바로 찾을 수 있습니다." },
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
          { q: "휠체어 접근 가능한 경사도 기준은?", a: "장애물 없는 생활환경을 위한 설계 기준(BF인증)상 경사로는 경사율 8.3%(1/12) 이하, 폭 1.2m 이상을 권장합니다. 공공시설 출입구 경사로 설계 시 참고하세요." },
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
          { q: "울타리·펜스 설치 시 필요한 계산은?", a: "외부 둘레(Perimeter)를 먼저 계산한 뒤, 기둥 간격(보통 1.8~2m)으로 나누면 필요 기둥 수가 나옵니다. 모서리 기둥과 게이트 위치를 별도로 더해야 합니다." },
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
          { q: "360°가 아니라 2π rad인 이유는?", a: "원의 반지름 r인 원에서 반지름 길이와 같은 호의 중심각이 1라디안입니다. 원 전체 호의 길이는 2πr이므로, 한 바퀴 360°= 2π 라디안이 됩니다." },
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
          { q: "이삿짐 부피를 어떻게 대략 계산하나요?", a: "방 1개 기준으로 침대(0.5m³), 옷장(0.9m³), 책상(0.3m³) 등 가구별 대략적인 부피를 합산하면 됩니다. 일반 1인 가구의 총 이삿짐은 보통 3~6m³ 수준입니다." },
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
          { q: "나무가 물에 뜨는 이유는 밀도 때문인가요?", a: "맞습니다. 대부분의 목재 밀도는 0.4~0.9 g/cm³으로 물(1.0 g/cm³)보다 낮아서 뜹니다. 흑단(에보니)처럼 밀도가 1.1 이상인 나무는 물에 가라앉습니다." },
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
          { q: "빛의 속도로 지구를 몇 바퀴 돌 수 있나요?", a: "빛의 속도는 약 299,792 km/s, 지구 둘레는 약 40,075 km입니다. 1초에 약 7.5바퀴를 돌 수 있습니다." },
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
          { q: "스마트폰 사진 한 장은 몇 MB인가요?", a: "일반적인 스마트폰 카메라(12~108MP)의 JPEG 사진은 3~10MB 수준입니다. RAW 파일은 20~50MB까지 커질 수 있습니다. 64GB 저장소에는 JPEG 기준 약 6,000~20,000장 저장 가능합니다." },
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
          { q: "전기차 충전 비용은 어떻게 계산하나요?", a: "배터리 용량(kWh) × 충전 단가(원/kWh) = 충전 비용. 공공 완속 충전기(7kW) 단가는 약 255~310원/kWh, 급속(50kW)은 약 390~430원/kWh입니다(2026년 기준). 완충 시 아이오닉6(77kWh) 기준 약 2만~3만 3천 원 수준입니다." },
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
          { q: "소음성 난청은 몇 dB에서 얼마나 노출되면 생기나요?", a: "고용노동부 기준으로 85dB에 8시간, 88dB에 4시간, 91dB에 2시간 이상 지속 노출 시 청력 손상 위험이 있습니다. 3dB 오를 때마다 허용 시간이 절반으로 줄어드는 '3dB 교환율' 기준을 따릅니다." },
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
          { q: "손가락 한 뼘은 몇 cm인가요?", a: "성인 엄지에서 새끼손가락까지 한 뼘은 약 18~22cm입니다. 옛날 도량형인 '척(尺)'의 기원이기도 합니다. 개인마다 차이가 크므로 정밀한 측정에는 자를 사용하세요." },
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
          { q: "위도 1도 차이는 몇 km인가요?", a: "위도 1° 차이는 약 111km로 거의 일정합니다. 경도는 위도에 따라 다릅니다. 적도에서 경도 1° ≈ 111km이지만, 위도 60°에서는 약 55km로 절반이 됩니다." },
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
          { q: "멀티탭 여러 개를 연결하면 저항이 어떻게 되나요?", a: "멀티탭에 기기를 꽂을수록 병렬 회로가 추가되어 합성 저항이 낮아지고 전류가 증가합니다. 차단기 용량(보통 15~20A)을 초과하면 과부하로 차단기가 트립되니 연결 기기의 총 소비 전력을 확인하세요." },
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
          { q: "LPG 차량과 휘발유 차량 중 어느 것이 연료비가 더 저렴한가요?", a: "LPG 리터당 가격은 휘발유의 약 50~60% 수준이지만, 연비는 약 10~20% 낮습니다. 주행거리가 많을수록 LPG가 경제적이며, 연간 2만km 이상이면 LPG가 유리한 경우가 많습니다." },
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
          ["기타소득 (실효 8.8%)", "법정세율 22% × (1 − 필요경비 60%) = 실효 8.8% (지방소득세 포함)"],
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
          { q: "프리랜서 수입을 여러 번에 나눠 받으면 세금이 줄어드나요?", a: "분할 지급 자체로는 세율이 달라지지 않습니다. 사업소득 3.3%는 지급 건별로 동일하게 적용됩니다. 다만 연간 종합소득세 신고 시 총 수입과 경비를 신고하면 정산을 통해 세금을 줄일 수 있습니다." },
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
          { q: "이력서나 자기소개서 분량 기준은?", a: "기업마다 다르지만 일반적으로 자기소개서 항목당 500~800자, 전체 1,500~3,000자 수준이 많습니다. 공공기관 채용은 기재 칸 한도가 다르므로 공고문에서 직접 확인하세요." },
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
          { q: "음력과 양력 외에 다른 달력 체계도 있나요?", a: "이슬람력(히즈라력)은 순수 태음력으로 윤달이 없어 매년 양력 날짜가 약 11일씩 앞당겨집니다. 유대력은 태음태양력으로 한국의 음력과 유사한 구조를 가집니다." },
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
          { q: "수능 D-Day는 몇 월 며칠부터 세어야 하나요?", a: "수능은 보통 매년 11월 셋째 주 목요일에 시행됩니다. 원서 접수 후 확정 날짜가 발표되면 해당 일을 D-Day로 설정하세요. 남은 일수 외에도 '공부 가능 일수(주말·공휴일 제외)'를 계산해두면 계획 수립에 도움이 됩니다." },
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
        월간 전력 사용량(kWh)을 입력해 한국전력 <strong>누진 요금 체계</strong> 기준으로 예상 전기요금을 계산하는 도구입니다.
        가전제품별 소비전력과 사용 시간을 합산하면 월 사용량을 추정할 수 있습니다.
      </GuideP>

      <GuideH2>주택용 저압 누진 요금 (2026년 기준)</GuideH2>
      <GuideTable
        headers={["사용 구간", "기본요금", "전력량 요금(kWh)"]}
        rows={[
          ["200kWh 이하", "910원", "120.0원"],
          ["201~400kWh", "1,600원", "214.6원"],
          ["400kWh 초과", "7,300원", "307.3원"],
        ]}
      />
      <GuideP>
        <strong>실제 청구 요금</strong> = 기본요금 + 전력량요금 + 기후환경요금(9.0원/kWh) + 연료비조정액 + 부가가치세(10%) + 전력산업기반기금(3.7%)
      </GuideP>
      <GuideP className="text-neutral-500">※ 최신 요금 단가는 한국전력 홈페이지(kepco.co.kr)에서 확인하세요. 요금이 변경될 수 있습니다.</GuideP>

      <GuideH2>주요 가전별 월 전기요금 참고 (하루 사용 시간 기준)</GuideH2>
      <GuideTable
        headers={["가전제품", "소비전력", "하루 사용", "월 사용량", "추가 요금(약)"]}
        rows={[
          ["에어컨 (1.5HP)", "1.2kW", "8시간", "288kWh", "약 62,000~87,000원"],
          ["전기히터", "1.0kW", "5시간", "150kWh", "약 18,000~46,000원"],
          ["냉장고 (400L)", "0.15kW", "24시간", "108kWh", "약 13,000~33,000원"],
          ["세탁기", "0.5kW", "1시간", "15kWh", "약 1,800~4,600원"],
          ["TV (55인치)", "0.12kW", "5시간", "18kWh", "약 2,160~5,520원"],
          ["전기밥솥", "0.3kW", "2시간", "18kWh", "약 2,160~5,520원"],
        ]}
      />
      <GuideP className="text-neutral-500">※ 추가 요금은 현재 사용량이 어느 구간에 있느냐에 따라 크게 달라집니다. 고구간(400kWh 초과)일수록 추가 비용이 큽니다.</GuideP>

      <GuideH2>전기요금 절감 팁</GuideH2>
      <GuideBulletList
        items={[
          "에어컨 설정 온도 1℃ 높이면 약 7% 절감 (26℃ → 28℃)",
          "대기 전력 차단 멀티탭 사용: 가전 1대당 월 1,000~3,000원 절감",
          "냉장고 내용물을 70% 이하로 유지하면 효율 향상",
          "세탁기는 찬물 세탁·대용량으로 모아서 돌리기",
          "에너지 효율 1등급 가전으로 교체 시 장기적으로 큰 절감 가능",
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "에어컨을 하루 8시간 쓰면 전기요금이 얼마 오르나요?",
            a: "1.5HP(1.2kW) 에어컨 기준 월 약 288kWh가 추가됩니다. 현재 사용량이 200kWh 이하라면 추가 요금이 약 6.2만 원이지만, 이미 400kWh를 넘은 상태라면 307원/kWh가 적용되어 약 8.7만 원이 추가됩니다.",
          },
          {
            q: "전기요금이 갑자기 크게 올랐을 때 원인은?",
            a: "누진제 때문에 사용량이 조금만 늘어도 단가가 급격히 올라갈 수 있습니다. 특히 200kWh, 400kWh 경계를 넘으면 단가가 2~2.5배 뛰므로, 이 구간을 넘지 않도록 사용량을 조절하는 것이 효과적입니다.",
          },
          {
            q: "에너지 바우처(취약계층 전기요금 지원)를 받을 수 있나요?",
            a: "기초생활수급자·차상위계층·장애인·65세 이상·임산부가 있는 가구라면 에너지 바우처 신청 자격이 됩니다. 주민센터 또는 복지로(bokjiro.go.kr)에서 신청하세요.",
          },
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
          { q: "영수증이 없을 때 정산은 어떻게 하나요?", a: "대표 결제자가 영수증을 사진으로 찍어 공유하거나, 메신저 그룹채팅에 금액을 올리는 것이 가장 간단합니다. 금액 기억이 불명확할 때는 이 계산기에 인원수와 총액을 입력해 1인당 금액만 먼저 확인하세요." },
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
          { q: "해외여행 시 현금 팁이 없을 때는 어떻게 하나요?", a: "카드 결제 시 서명 화면에 팁 금액을 직접 기입하거나, 영수증에 팁란이 있으면 직접 적으면 됩니다. 일부 레스토랑은 계산서에 서비스 차지(15~18%)가 포함되어 있으므로 먼저 확인하세요." },
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
          { q: "49재 외에 기독교에서 주로 지내는 추모 일정은?", a: "기독교에서는 3일장, 49재 대신 추모 예배를 드리며, 1주기(1주년)·기일 예배를 중요하게 지냅니다. 가톨릭은 연도(連禱) 미사를 7일 내, 30일, 1주기 등에 드리는 경우가 많습니다." },
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
          { q: "공부 타이머를 효율적으로 쓰는 방법은?", a: "50분 집중 + 10분 휴식(울트라디안 리듬)이나 25분 집중 + 5분 휴식(포모도로)을 선택해 보세요. 처음엔 짧게 시작해 자신에게 맞는 사이클을 찾는 게 중요합니다. 기록을 남기면 학습량 파악에 도움이 됩니다." },
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
        자동차세는 매년 6월·12월에 부과되며, 연납(1월 선납) 시 최대 5% 할인됩니다.
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
          "연납 할인: 1월 연납 5%, 3월 3.75%, 6월 2.5%, 9월 1.25% (2026년 기준)",
          "전기차·수소차: 배기량 없음 → 연간 13만 원 정액",
          "영업용 차량은 비영업용보다 낮은 세율 적용",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "차령 공제가 있나요?", a: "차령(차 나이)에 따라 최대 50%까지 세액이 경감됩니다. 3년 이상부터 5%씩 감소해 12년 이상은 최저 세율이 적용됩니다." },
          { q: "자동차세 연납은 언제 신청하나요?", a: "1월 중에 위택스(wetax.go.kr) 또는 해당 지방자치단체에 신청하면 가장 높은 할인율(5%)을 받을 수 있습니다. 할인율은 매년 조정될 수 있으니 위택스에서 확인하세요." },
          { q: "전기차는 자동차세가 얼마인가요?", a: "전기차·수소차는 배기량 기준이 없어 연간 13만 원 정액으로 부과됩니다. 하이브리드 차량은 엔진 배기량 기준으로 산정합니다. 전기차는 취득세 감면(최대 140만 원)·공영주차장 할인 등 추가 혜택도 있습니다." },
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
          { q: "번트도 안타 타수에 포함되나요?", a: "희생 번트는 타수에서 제외됩니다(실패 시 아웃이면 타수 포함). 내야 안타는 타수와 안타 모두에 포함됩니다. 따라서 번트 성공률이 높은 선수는 타수가 줄어 타율에 유리할 수 있습니다." },
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
          { q: "트레드밀 속도와 야외 달리기 페이스는 같은가요?", a: "트레드밀은 경사 0%에서 바람 저항이 없어 야외보다 약 5~10% 쉽습니다. 야외와 같은 운동 강도를 원한다면 경사 1~2% 설정을 권장합니다." },
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
          { q: "5km 기록으로 마라톤 완주 시간을 정확하게 예측할 수 있나요?", a: "단거리 기록에서 장거리를 예측하면 오차가 커집니다. VDOT 공식은 단거리보다 긴 거리에서 더 정확합니다. 마라톤은 10km·하프 기록으로 예측하는 것이 더 신뢰도가 높습니다." },
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
          { q: "선발과 불펜 투수의 ERA 비교는 공정한가요?", a: "선발 투수는 여러 이닝을 던져 누적 피로가 쌓이고, 불펜은 짧게 던져 최고 구속을 유지할 수 있습니다. 역할이 다르므로 ERA를 단순 비교하기보다 역할을 고려한 지표(WHIP, K/9 등)를 함께 보는 것이 좋습니다." },
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
          { q: "스플릿(7-10 핀)을 스페어 처리할 수 있나요?", a: "7-10 스플릿은 프로도 성공률이 0.7% 미만인 거의 불가능한 기술입니다. 리그·아마추어 대회에서는 스플릿을 오픈 프레임으로 처리하는 것이 현실적입니다. 스플릿 기회에는 최소한 한 핀이라도 추가로 쓰러뜨려 오픈 점수를 높이는 전략이 유리합니다." },
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
          { q: "컬링 스톤은 왜 화강암으로 만드나요?", a: "스코틀랜드산 에일사 크레이그 화강암이 주로 사용됩니다. 이 화강암은 기공이 없어 흡수율이 극히 낮고, 영하의 빙상 환경에서도 깨지지 않는 내구성과 일관된 미끄럼 특성을 갖습니다." },
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
      <GuideH3>장병내일준비적금 주요 내용 (2026년 기준, 참고)</GuideH3>
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
          { q: "군적금 만기 수령 후 세금은 없나요?", a: "장병내일준비적금은 비과세 혜택이 적용되어 이자 소득세(15.4%)가 면제됩니다. 전역 후 수령 시 별도 세금 신고 없이 전액 수령 가능합니다." },
        ]}
      />
    </>
  );
}

function AirForceGuide() {
  return (
    <>
      <GuideH2>공군 점수 계산기란?</GuideH2>
      <GuideP>
        공군 병(일반병·전문기술병) 지원 시 서류 전형에서 활용되는 선발 점수를 미리 추정하는 도구입니다.
        학력·자격증·어학·봉사 등 항목별 가점 기준을 입력하면 예상 점수를 확인할 수 있습니다.
        실제 선발 기준은 공군 모집 공고를 반드시 확인하세요.
      </GuideP>
      <GuideH3>일반병 주요 가점 항목 (참고)</GuideH3>
      <GuideTable
        headers={["항목", "세부 기준", "가점"]}
        rows={[
          ["학력", "전문대 재학·졸업 이상", "+2~5점"],
          ["어학", "공인 영어(TOEIC 등) 점수 구간별", "+1~5점"],
          ["IT·컴퓨터 자격증", "기사·산업기사·기능사 등급별", "+1~3점"],
          ["운전면허", "1종 보통 이상", "+1점"],
          ["봉사활동", "100시간 이상", "+1점"],
          ["무도 단수", "2단 이상", "+1점"],
        ]}
      />
      <GuideH3>전문기술병 주요 가점 항목 (참고)</GuideH3>
      <GuideTable
        headers={["항목", "세부 기준", "가점"]}
        rows={[
          ["전공 적합성", "직무 관련 학과 전공", "+2~5점"],
          ["관련 국가 자격증", "직무별 기사·산업기사", "+2~5점"],
          ["어학 자격", "직무 관련 외국어 공인 점수", "+1~3점"],
          ["추가 자격증", "직무 연관 민간 자격증", "+1~2점"],
        ]}
      />
      <GuideBulletList
        items={[
          "가점 기준은 모집 회차마다 변경될 수 있으니 공군 공식 모집 공고 필수 확인",
          "동점자 처리 기준(생년월일·추첨 등)은 공고문을 따름",
          "신체 검사·체력 검정 결과는 별도 합·불 기준 적용",
          "자격증·어학 성적은 유효 기간 내 취득분만 인정",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "같은 자격증이 여러 개여도 중복 가점이 되나요?", a: "공군 선발 기준상 동일 항목 내 가점은 중복 적용되지 않으며 가장 높은 점수 1개만 반영됩니다. 서로 다른 항목(어학/자격증)은 각각 인정됩니다." },
          { q: "전문기술병과 일반병 동시에 지원할 수 있나요?", a: "모집 공고별로 중복 지원 가능 여부가 다릅니다. 일부 회차는 동일 입영일 기준 1지원만 허용되므로 공고문을 반드시 확인하세요." },
          { q: "공군 선발 면접에서 무엇을 준비해야 하나요?", a: "서류 전형 통과 후 신체 검사·체력 검정·면접이 진행됩니다. 면접에서는 지원 동기, 국가관·안보 의식, 복무 후 계획을 주로 물어봅니다. 공군 홈페이지에서 최신 선발 절차를 확인하세요." },
        ]}
      />
    </>
  );
}

function MarineGuide() {
  return (
    <>
      <GuideH2>해병대 기수 계산기란?</GuideH2>
      <GuideP>
        입대일(훈련소 입소일)을 입력하면 해당 해병대 기수(期數)를 자동으로 산출하는 도구입니다.
        해병대는 모든 대원이 기수로 선·후임 관계를 파악하는 고유한 문화가 있습니다.
        대한민국 해병대는 1949년 4월 15일 창설되었으며, 정기 입영 주기에 따라 기수가 부여됩니다.
      </GuideP>
      <GuideH3>기수 계산 원리</GuideH3>
      <GuideFormulaBox>
        해병대 창설일: 1949년 4월 15일 (1기 기준){"\n"}
        연간 입영 횟수: 통상 6회 (격월 입영){"\n"}
        기수 = (입대 연도 − 1949) × 6 + 해당 연도 입영 회차{"\n\n"}
        예: 2026년 4번째 입영 → (2026−1949)×6 + 4 = 77×6+4 = 466기 (근사치)
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "기수는 부대·복무 형태(현역·예비역·보충역)와 무관하게 입영 회차 기준으로 부여",
          "훈련소 입소일이 기수 산정 기준일 (자대 배치일 아님)",
          "기수가 같아도 훈련소 교번(중대·소대번호)은 다를 수 있음",
          "실제 기수 확인은 해병대 전우회 또는 국방부 병무청 증명서 활용",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "해병대 기수는 왜 다른 군종에 없는 특별한 문화인가요?", a: "해병대는 창설 이래 전통적으로 기수를 정체성의 상징으로 여깁니다. 선·후임 간 기수를 통해 유대감과 전우애를 유지하는 문화가 형성되어 있습니다." },
          { q: "계산 결과가 공식 기수와 차이가 있을 수 있나요?", a: "네, 이 도구는 추정 계산기입니다. 입영 일정 변경·추가 기수 설정 등으로 실제 기수와 1~3기 이상 차이날 수 있습니다. 정확한 기수는 훈련 수료 증명서를 확인하세요." },
          { q: "여성도 해병대 지원이 가능한가요?", a: "현재 대한민국 해병대는 여성 부사관·장교로는 입대 가능하지만, 병으로서의 여성 징집은 없습니다. 여성 부사관은 해병대 모집 공고를 통해 지원할 수 있습니다." },
        ]}
      />
    </>
  );
}

function DischargeGuide() {
  return (
    <>
      <GuideH2>전역일 계산기란?</GuideH2>
      <GuideP>
        입대일과 복무 형태를 입력하면 의무 복무 기간을 더해 예상 전역일과 남은 복무 일수를
        자동으로 계산하는 도구입니다. 복무 형태별 법정 기간을 기준으로 하며,
        실제 전역일은 군 행정 처리·휴가 정산 등에 따라 1~2일 달라질 수 있습니다.
      </GuideP>
      <GuideH3>복무 형태별 의무 복무 기간 (2026년 기준)</GuideH3>
      <GuideTable
        headers={["복무 형태", "의무 복무 기간"]}
        rows={[
          ["육군 (현역)", "18개월"],
          ["해병대 (현역)", "18개월"],
          ["해군 (현역)", "20개월"],
          ["공군 (현역)", "21개월"],
          ["사회복무요원", "21개월"],
          ["공중보건의", "36개월"],
          ["공익법무관", "36개월"],
          ["산업기능요원", "23개월"],
          ["전문연구요원", "36개월"],
        ]}
      />
      <GuideFormulaBox>
        전역일 = 입대일 + 복무 기간{"\n"}
        남은 일수 = 전역일 − 오늘{"\n\n"}
        예: 2026-03-04 육군 입대 → 18개월 뒤 = 2027-09-04 전역
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "말일 조정: 전역일이 말일(31일 없는 달)에 해당하면 해당 달 말일로 조정",
          "공휴일·주말 전역: 통상 전날(금요일 등) 전역 처리 (부대별 상이)",
          "복무 단축: 현역 복무 기간은 법 개정으로 변경될 수 있음",
          "입대일 = 훈련소 입소일 기준 (자대 배치일 아님)",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "휴가·외출·외박 기간도 복무 기간에 포함되나요?", a: "네, 정상적인 휴가·외출·외박은 복무 기간에 포함됩니다. 다만 징계로 인한 영창·근신 기간은 복무 기간 산입에서 제외될 수 있습니다." },
          { q: "사회복무요원은 의무 복무 기간이 같은 21개월인데 현역과 다른가요?", a: "기간은 동일하지만 복무 형태가 다릅니다. 사회복무요원은 배정된 공공 기관·시설에서 주 5일(8시간) 근무하며, 주말과 법정 공휴일은 복무 기간에 포함됩니다." },
          { q: "전역일이 공휴일이면 어떻게 되나요?", a: "전역일이 일요일·공휴일인 경우 통상 그 직전 평일(금요일 등)에 전역 처리되는 경우가 많습니다. 다만 부대별 행정 절차에 따라 다를 수 있으므로 본인 소속 부대의 안내를 따르세요." },
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
          { q: "패스키(Passkey)가 비밀번호를 대체할 수 있나요?", a: "패스키는 생체 인증(지문·Face ID)을 기반으로 하는 피싱 불가능한 차세대 인증 방식입니다. 애플·구글·마이크로소프트·삼성이 지원하며, 현재 주요 사이트에서 빠르게 도입 중입니다. 비밀번호 없이 더 안전하게 로그인할 수 있습니다." },
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
          { q: "SHA-256과 SHA-3의 차이는?", a: "SHA-256은 SHA-2 계열(NSA 설계)이고, SHA-3는 완전히 다른 알고리즘(Keccak 기반)으로 설계됐습니다. SHA-2에 취약점이 발견될 경우를 대비한 백업 표준으로 SHA-3가 개발됐습니다. 현재 SHA-256은 여전히 안전합니다." },
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
          "키 길이: 최소 2048비트 권장 (2026년 기준), 4096비트가 더 안전",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "RSA 키는 어디에 저장해야 하나요?", a: "개인키는 절대로 외부에 노출하지 않고, 암호화된 안전한 저장소에 보관하세요. 유출 시 즉시 키를 폐기하고 새 키를 생성하세요." },
          { q: "양자 컴퓨터가 RSA를 깰 수 있나요?", a: "충분히 강력한 양자 컴퓨터(Shor 알고리즘)는 RSA를 깨뜨릴 수 있습니다. 이에 대비해 양자 내성 암호화(PQC) 표준이 개발 중입니다." },
          { q: "RSA 2048비트와 4096비트 중 어떤 걸 써야 하나요?", a: "2048비트는 현재 표준(SSH, SSL/TLS 등)으로 충분히 안전합니다. 4096비트는 장기 보안(10년 이상)이 필요한 고민감 데이터에 적합하지만, 암호화·복호화 속도가 느려집니다. 일반 용도는 2048비트로 충분합니다." },
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
          { q: "비즈네르 암호는 시저 암호보다 안전한가요?", a: "비즈네르 암호는 여러 개의 시저 암호를 키워드에 따라 번갈아 적용합니다. 단순 주파수 분석으로는 해독이 어렵지만, 카시스키 검사법이나 IC(우연 지수) 분석으로 키 길이를 추측할 수 있어 현대 암호로는 여전히 취약합니다." },
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
          { q: "UUID 충돌이 실제로 발생한 사례가 있나요?", a: "버그나 결함 있는 구현에서 동일 UUID가 생성된 사례는 있지만, 제대로 된 v4 UUID 생성기에서 실무적 충돌은 보고된 바 없습니다. 10억 개를 생성해도 충돌 확률이 10⁻¹⁸ 수준으로 무시 가능합니다." },
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
          { q: "API 키를 환경 변수로 관리하는 이유는?", a: "코드에 직접 하드코딩하면 Git 기록에 영구 저장되어 유출 위험이 있습니다. .env 파일에 저장하고 .gitignore에 추가하면 코드 저장소에 포함되지 않습니다. 프로덕션 환경에서는 AWS Secrets Manager·HashiCorp Vault 같은 전문 비밀 관리 서비스를 사용하세요." },
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
          { q: "IPv6로 전환하면 서브넷 계산이 달라지나요?", a: "IPv6는 128비트 주소 체계로, 서브넷 표기는 CIDR과 동일하게 ::1/128처럼 씁니다. 주소 공간이 방대하여 NAT 없이 모든 기기에 공인 주소를 부여할 수 있습니다. 가정용 일반적으로 /64 서브넷이 할당됩니다." },
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
          { q: "Base64로 이미지를 HTML에 직접 삽입할 수 있나요?", a: "네, <img src='data:image/png;base64,{Base64 문자열}' />처럼 사용할 수 있습니다. 이미지가 HTML 파일에 내장되어 별도 HTTP 요청이 줄지만, 파일 크기가 33% 증가하므로 작은 아이콘 이미지에 적합합니다." },
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
          { q: "한국어 도메인(한글 도메인)은 어떻게 작동하나요?", a: "한글 도메인(예: 테스트.한국)은 서버에 전달될 때 퓨니코드(xn--으로 시작)로 변환됩니다. 실제 DNS 쿼리는 ASCII로 처리되며, 브라우저가 자동으로 변환해 줍니다." },
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
          { q: "정규식을 배우기 좋은 방법은?", a: "regex101.com 또는 regexr.com에서 실시간으로 패턴을 테스트하며 배우는 것이 효과적입니다. 한국어 정규식 튜토리얼(점프 투 파이썬 등)도 좋은 출발점입니다. 처음엔 \\d, \\w, ^, $ 등 핵심 패턴만 익혀도 대부분의 실무 작업이 가능합니다." },
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
          { q: "프로그래밍에서 비트 연산을 언제 활용하나요?", a: "비트 AND(&), OR(|), XOR(^), 시프트(<<, >>) 연산은 권한 플래그 관리, 빠른 2의 배수 곱셈(<<1), 색상 HEX 파싱, 암호화 등에 활용됩니다. 예: 0xFF & 0x0F = 0x0F (하위 4비트 추출)." },
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
          { q: "악성 QR 코드 피싱(큐싱)은 어떻게 방어하나요?", a: "QR 코드를 스캔하기 전에 이미지 위 인쇄된 URL 또는 스캔 앱 미리보기로 목적지 주소를 확인하세요. 공공장소에 부착된 QR 코드 위에 스티커를 붙인 악성 코드 사례가 증가하고 있습니다. 공식 앱 다운로드는 앱스토어에서 직접 검색하는 것이 안전합니다." },
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
          { q: "JSON을 데이터베이스에 저장하는 게 좋은가요?", a: "PostgreSQL·MySQL 8.0 이상은 JSON 타입을 지원해 컬럼에 저장하고 쿼리도 가능합니다. 자주 조회하는 필드는 일반 컬럼으로, 유연한 비정형 데이터는 JSON 컬럼으로 저장하는 혼합 방식이 현실적입니다." },
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
          { q: "아마추어 무선(햄 라디오)에서 모스 부호 시험이 있나요?", a: "과거에는 아마추어 무선 자격 취득 시 모스 부호 시험(교신 속도 시험)이 필수였습니다. 한국을 포함한 대부분 국가에서 2003년 ITU 개정 이후 선택으로 바뀌었으며, 현재는 모스 부호 없이도 아마추어 무선 면허를 취득할 수 있습니다." },
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
          { q: "색맹·색약을 고려한 색상 선택 방법은?", a: "적녹색맹이 가장 흔합니다(남성 8%). 빨강과 초록을 함께 쓸 때는 명도·패턴·텍스트로 구분하세요. Coblis, Adobe Color의 색맹 시뮬레이션 도구로 내 디자인이 어떻게 보이는지 미리 확인하세요." },
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
          { q: "소프트 천장(Soft Pity)과 하드 천장(Hard Pity)은 무엇인가요?", a: "소프트 천장은 특정 횟수 이후부터 확률이 점진적으로 높아지는 구조, 하드 천장은 해당 횟수에 확정으로 획득되는 구조입니다. 예: 원신의 경우 74회부터 확률 상승(소프트), 90회에 확정(하드). 이 계산기는 고정 확률 기준으로 계산하므로 소프트·하드 천장을 적용하면 실제 기대 횟수는 더 줄어듭니다." },
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
          { q: "FC 온라인에서 선수 시세는 어떻게 확인하나요?", a: "FC온라인 공식 사이트의 선수 거래소 또는 FCONLINE STUDIO 같은 비공식 시세 조회 사이트를 활용하세요. 시세는 실시간으로 변동하므로 등록 직전에 확인하는 것이 좋습니다." },
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
          { q: "프로 스포츠 팀의 역대 통산 승률은 어디서 확인하나요?", a: "야구는 KBO 공식 사이트, 축구는 K리그 공식 사이트, MLB는 Baseball Reference, NBA는 Basketball Reference에서 팀별 역대 전적과 승률을 무료로 확인할 수 있습니다." },
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
          { q: "로또 1등 당첨금을 세금 제하고 실수령은 얼마인가요?", a: "로또 1등 당첨금은 22% 세금(소득세 20% + 지방소득세 2%)이 원천징수됩니다. 3억 원 초과 당첨금은 33%로 높아집니다. 예: 20억 원 당첨 시 세전 20억 → 세금 6.6억 → 실수령 약 13.4억 원." },
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
          { q: "마우스 폴링 레이트와 DPI의 관계는?", a: "폴링 레이트(125~8000Hz)는 마우스가 PC에 위치를 보고하는 빈도입니다. 높을수록 반응이 빠르지만 CPU 부하도 증가합니다. 일반적으로 1000Hz면 충분하고, DPI와 폴링 레이트는 독립적으로 설정합니다." },
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
          { q: "동전 던지기로 공정한 결정을 내릴 수 있나요?", a: "가위바위보보다 훨씬 공정합니다. 단, 특정인이 동전을 던지고 잡는 경우 손바닥 방향으로 조작 가능성이 있다는 연구도 있습니다. 완벽한 공정성을 위해서는 테이블 위에서 굴리거나 이 시뮬레이터처럼 난수 기반 도구를 사용하세요." },
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
          { q: "카지노에서 룰렛 외에 집의 이점이 낮은 게임은?", a: "블랙잭은 기본 전략을 완벽히 따르면 집의 이점이 0.5% 미만으로 카지노 게임 중 가장 낮습니다. 바카라(플레이어 베팅)는 약 1.24%, 크랩스(패스 라인)는 1.41%입니다. 슬롯머신은 보통 2~10%입니다." },
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
          { q: "울트라와이드(21:9) 모니터에서 FOV는 어떻게 설정하나요?", a: "21:9 비율은 16:9보다 가로가 넓어 동일 수직 FOV라면 수평 FOV가 더 넓어집니다. 이 계산기에 21:9 비율을 입력하면 16:9 기준 수평 FOV와 동등한 값을 확인할 수 있습니다. 보통 21:9에서 103°는 16:9의 90°와 비슷한 체감입니다." },
        ]}
      />
    </>
  );
}

// ════════════════════════════════════════════════
// 금융 — finance-028 ~ finance-030
// ════════════════════════════════════════════════

function MortgageCompareGuide() {
  return (
    <>
      <GuideH2>원리금균등 vs 원금균등 비교란?</GuideH2>
      <GuideP>
        대출 상환 방식에는 크게 두 가지가 있습니다. <strong>원리금균등</strong>은 매월 납입액이 동일하고,
        <strong>원금균등</strong>은 매월 원금은 동일하되 이자가 줄어들어 초기 납입액이 가장 큽니다.
      </GuideP>
      <GuideH3>공식 요약</GuideH3>
      <GuideFormulaBox>
        원리금균등 월납입 = P × r(1+r)^n ÷ ((1+r)^n - 1){"\n"}
        원금균등 첫 달 납입 = P/n + P × r{"\n"}
        (P: 대출원금, r: 월이율, n: 총 상환 개월)
      </GuideFormulaBox>
      <GuideTable
        headers={["구분", "원리금균등", "원금균등"]}
        rows={[
          ["월납입액", "매월 동일", "초기 높고 점점 감소"],
          ["총이자", "상대적으로 많음", "상대적으로 적음"],
          ["초기 부담", "낮음", "높음"],
          ["추천 대상", "소득이 일정한 직장인", "초기 여유자금이 있는 경우"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "어떤 방식이 더 유리한가요?", a: "총 납부 이자는 원금균등이 적습니다. 단, 초기 납입 부담이 크므로 자금 여유가 있을 때 유리합니다." },
          { q: "중도에 상환 방식을 바꿀 수 있나요?", a: "대부분의 금융기관에서는 계약 시 결정한 방식을 중도에 바꾸기 어렵습니다. 대출 신청 전에 신중히 선택하세요." },
          { q: "체증식 상환이란 무엇인가요?", a: "체증식은 초기 납입액이 가장 낮고 시간이 갈수록 점점 증가하는 방식입니다. 소득이 앞으로 늘어날 것으로 예상되는 청년층·신혼부부에게 적합합니다. 총이자는 원리금균등보다 많지만, 초기 부담이 매우 낮습니다." },
        ]}
      />
    </>
  );
}

function PrepaymentGuide() {
  return (
    <>
      <GuideH2>중도상환 시뮬레이터란?</GuideH2>
      <GuideP>
        대출 상환 중 특정 시점에 일부 금액을 미리 갚았을 때 남은 이자와 기간이 얼마나 줄어드는지 계산합니다.
        중도상환수수료가 없는 경우를 기준으로 하며, 실제 금융기관 조건을 확인하세요.
      </GuideP>
      <GuideFormulaBox>
        N개월 후 잔여원금 = 원금 × (1+r)^N - 월납입 × ((1+r)^N - 1) ÷ r{"\n"}
        중도상환 후 잔여원금 = 잔여원금 - 중도상환액{"\n"}
        새 상환기간 = -log(1 - 잔여원금 × r ÷ 월납입) ÷ log(1+r)
      </GuideFormulaBox>
      <GuideBulletList
        items={[
          "중도상환 후 월납입액을 줄이는 방법과 기간을 줄이는 방법 두 가지가 있습니다.",
          "이 계산기는 '기간 단축' 기준으로 이자 절약액을 보여줍니다.",
          "실제 중도상환수수료(보통 1~2%)가 적용되면 절약액이 줄어듭니다.",
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "중도상환수수료란 무엇인가요?", a: "대출을 약정 기간 전에 갚을 때 금융기관이 부과하는 위약금입니다. 보통 잔여원금의 0.5~2% 수준이며, 3년 후에는 면제되는 경우가 많습니다." },
          { q: "여유 자금이 생기면 바로 상환하는 게 유리한가요?", a: "수수료가 없거나 저금리 상품보다 대출 이율이 높다면 조기 상환이 유리합니다. 투자 수익률과 비교해 결정하세요." },
          { q: "중도상환 후 기간 단축과 납입액 감소, 어느 것이 유리한가요?", a: "총 절약 이자는 기간 단축이 더 많습니다. 단, 월 현금 흐름이 중요하다면 납입액 감소 방식이 생활비 여유를 만들어 줍니다. 이 계산기는 기간 단축 기준으로 이자 절약액을 보여주므로, 최대 절약을 원한다면 기간 단축을 선택하세요." },
        ]}
      />
    </>
  );
}

function JeonwolseGuide() {
  return (
    <>
      <GuideH2>전월세 전환율 계산기란?</GuideH2>
      <GuideP>
        전세 보증금을 월세로, 또는 월세를 전세 보증금으로 환산할 때 사용하는 계산기입니다.
        주택임대차보호법상 법정 전환율(연 5%) 기준을 참고로 활용하세요.
      </GuideP>
      <GuideFormulaBox>
        월세 = (전세금 - 보증금) × 전환율 ÷ 12{"\n"}
        전세금 = 보증금 + 월세 × 12 ÷ 전환율
      </GuideFormulaBox>
      <GuideH3>법정 전환율 기준</GuideH3>
      <GuideTable
        headers={["구분", "기준"]}
        rows={[
          ["주택임대차보호법 상한", "기준금리 + 2% (2026년 기준 약 4.5~5%)"],
          ["실거래 시장 전환율", "지역·물건에 따라 다름 (보통 4~7%)"],
        ]}
      />
      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          { q: "법정 전환율을 초과하면 어떻게 되나요?", a: "임차인은 법정 전환율 초과분의 반환을 청구할 수 있습니다. 계약 전 전환율을 꼭 확인하세요." },
          { q: "보증금을 올리고 월세를 낮추는 것도 계산할 수 있나요?", a: "네, 이 계산기에서 '전세 → 월세'와 '월세 → 전세' 두 방향을 모두 계산할 수 있습니다." },
          { q: "전월세 전환 시 임차인에게 유리한 조건은?", a: "법정 전환율(연 5% 이하)보다 낮은 전환율로 협상하거나, 보증금을 최대한 높여 월세를 줄이는 것이 임차인에게 유리합니다. 보증금이 높을수록 전세자금대출이나 보증보험 활용도 고려해 보세요." },
        ]}
      />
    </>
  );
}

// ────────────────────────────────────────────────────────────
// 직장 (신규)
// ────────────────────────────────────────────────────────────

function OvertimePayGuide() {
  return (
    <>
      <GuideH2>야간·연장·휴일 수당 계산기란?</GuideH2>
      <GuideP>
        월급제·시급제 근로자의 연장근무, 야간근무(오후 10시~오전 6시), 휴일근무 수당을
        근로기준법 기준으로 추정하는 도구입니다. 포괄임금제 여부·상여 포함 여부·회사 규정에 따라
        실제 지급액과 다를 수 있으므로 <strong>빠른 참고용</strong>으로 활용하세요.
      </GuideP>

      <GuideH3>통상시급 산출 방법</GuideH3>
      <GuideP>월급제 근로자는 아래 공식으로 통상시급을 먼저 산출합니다.</GuideP>
      <GuideFormulaBox>통상시급 = 월 통상임금 ÷ 209시간 (주 40시간, 월 유급근로 209h 기준)</GuideFormulaBox>

      <GuideH3>수당별 계산 방식</GuideH3>
      <GuideTable
        headers={["구분", "가산율", "근거"]}
        rows={[
          ["연장근무 (1일 8h 초과·주 40h 초과)", "통상시급 × 1.5", "근로기준법 56조"],
          ["야간근무 (22:00~06:00)", "통상시급 × 0.5 (할증분만)", "근로기준법 56조"],
          ["연장+야간 중복", "통상시급 × 2.0", "연장 1.5 + 야간 0.5 합산"],
          ["휴일근무 (8h 이내)", "통상시급 × 1.5", "근로기준법 56조"],
          ["휴일근무 (8h 초과분)", "통상시급 × 2.0", "근로기준법 56조"],
        ]}
      />
      <GuideP>
        5인 미만 사업장은 가산 수당 적용 의무가 없습니다. 포괄임금제 계약이라면
        해당 내용을 근로계약서에서 먼저 확인하세요.
      </GuideP>

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "야간 수당은 근무 시간 전체에 붙나요?",
            a: "오후 10시~오전 6시 구간에 해당하는 시간에만 0.5 할증이 붙습니다. 예: 오후 9시~오전 1시 근무라면 오후 10시~오전 1시(3시간)에만 야간 가산이 적용됩니다.",
          },
          {
            q: "주 52시간이 넘으면 어떻게 되나요?",
            a: "연장근무 한도(주 12시간)를 초과한 부분은 원칙적으로 위법이며, 수당 지급과 별개로 사업주가 제재를 받을 수 있습니다.",
          },
          {
            q: "시급제 아르바이트도 동일하게 적용되나요?",
            a: "5인 이상 사업장이라면 시급제도 동일하게 가산 수당이 적용됩니다. 계약 시급이 통상시급이 됩니다.",
          },
        ]}
      />
    </>
  );
}

function SeveranceTaxGuide() {
  return (
    <>
      <GuideH2>퇴직소득세(IRP) 계산기란?</GuideH2>
      <GuideP>
        퇴직금을 일시금으로 수령할 때 원천징수되는 퇴직소득세를 추정하는 도구입니다.
        근속연수에 따른 공제와 <strong>연분연승법</strong>을 적용하여 일반 근로소득세보다
        크게 낮은 세율이 적용됩니다. IRP(개인형퇴직연금)로 수령하면 연금 개시 전까지
        세금이 이연되어 절세 효과를 볼 수 있습니다.
      </GuideP>

      <GuideH3>퇴직소득세 계산 순서 (연분연승법)</GuideH3>
      <GuideTable
        headers={["단계", "계산 내용"]}
        rows={[
          ["①", "퇴직급여 − 근속연수공제 = 퇴직소득금액"],
          ["②", "퇴직소득금액 ÷ 근속연수 × 12 = 환산급여"],
          ["③", "환산급여 − 환산급여공제 = 환산과세표준"],
          ["④", "환산과세표준 × 누진세율 = 환산산출세액"],
          ["⑤", "환산산출세액 ÷ 12 × 근속연수 = 퇴직소득산출세액"],
          ["⑥", "산출세액 × 10% = 지방소득세 (최종 합산)"],
        ]}
      />

      <GuideH3>근속연수공제 (2026년 기준)</GuideH3>
      <GuideTable
        headers={["근속연수", "공제액"]}
        rows={[
          ["5년 이하", "100만원 × 근속연수"],
          ["5년 초과 ~ 10년 이하", "500만원 + 200만원 × (근속연수 − 5)"],
          ["10년 초과 ~ 20년 이하", "1,500만원 + 250만원 × (근속연수 − 10)"],
          ["20년 초과", "4,000만원 + 300만원 × (근속연수 − 20)"],
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "IRP로 받으면 세금을 아예 안 내도 되나요?",
            a: "IRP로 받으면 퇴직소득세가 이연됩니다. 이후 연금으로 수령 시 연금소득세(3~5%)가 부과되는데, 일시금 퇴직소득세보다 훨씬 낮아 절세가 됩니다.",
          },
          {
            q: "근속연수가 1년 미만이면?",
            a: "퇴직금 자체가 발생하지 않습니다(1년 이상 계속 근로 요건). 다만 회사 규정상 지급하는 경우엔 퇴직소득세가 그대로 적용됩니다.",
          },
          {
            q: "퇴직소득세는 원천징수 후 환급이 되나요?",
            a: "퇴직소득은 분류과세로 종합소득세 신고 대상이 아닙니다. 원천징수된 금액이 최종 세액이며, 별도 환급은 원칙적으로 없습니다.",
          },
        ]}
      />
    </>
  );
}

function ParentalHoursGuide() {
  return (
    <>
      <GuideH2>육아기 근로시간 단축 급여 계산기란?</GuideH2>
      <GuideP>
        만 8세 이하(초등학교 2학년 이하) 자녀를 둔 근로자가 육아를 위해 근로시간을 단축할 때
        받을 수 있는 급여를 추정하는 도구입니다. 고용보험에서 지원하며, 육아휴직 대신 계속 근무하면서
        자녀를 돌볼 수 있는 제도입니다.
      </GuideP>

      <GuideH3>급여 지원 구조</GuideH3>
      <GuideTable
        headers={["단축 시간", "지원 내용"]}
        rows={[
          ["첫 1시간 단축", "통상임금의 100% (상한 200만원/월, 하한 50만원/월)"],
          ["나머지 단축분", "통상임금의 80% (상한 150만원/월, 하한 50만원/월)"],
          ["사용 가능 기간", "최대 24개월 (자녀 1명당)"],
          ["주 근로시간 범위", "주 15~35시간 (주 40시간 미만으로 단축)"],
        ]}
      />
      <GuideP>
        단축한 시간만큼 회사에서 무급 처리하는 부분을 고용보험이 보전해 주는 구조입니다.
        출산 전후 육아휴직을 사용한 기간은 육아기 단축 가능 기간에서 차감됩니다.
      </GuideP>

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "육아기 단축과 육아휴직은 동시에 사용 가능한가요?",
            a: "동시에는 불가능합니다. 육아휴직 미사용 기간을 육아기 단축 기간으로 전환할 수 있으며, 전환하면 2배로 사용 가능합니다(예: 육아휴직 6개월 미사용 → 단축 12개월).",
          },
          {
            q: "회사가 거부하면 어떻게 하나요?",
            a: "사업주는 정당한 사유 없이 육아기 근로시간 단축을 거부할 수 없습니다. 거부 시 고용노동부(국번 없이 1350)에 진정 또는 신고할 수 있습니다.",
          },
          {
            q: "단축 후 연봉은 어떻게 되나요?",
            a: "단축한 시간에 해당하는 임금은 회사에서 지급하지 않지만, 고용보험 급여로 일부 보전됩니다. 4대 보험은 통상 임금 기준으로 계속 적용됩니다.",
          },
        ]}
      />
    </>
  );
}

function SalaryReverseGuide() {
  return (
    <>
      <GuideH2>연봉 역산 계산기란?</GuideH2>
      <GuideP>
        원하는 월 실수령액을 입력하면 그에 해당하는 세전 연봉을 역으로 계산해 주는 도구입니다.
        이직 협상 시 "실수령 300만 원을 받으려면 연봉 얼마를 요구해야 하나?"를 빠르게
        파악할 때 유용합니다. 4대 보험 요율과 간이세액표를 기반으로 추정하며,
        회사별 급여 규정·비과세 항목에 따라 실제와 다를 수 있습니다.
      </GuideP>

      <GuideH3>계산 방식</GuideH3>
      <GuideP>
        세전 연봉 → 월급 → 4대 보험 공제 → 소득세·지방소득세 공제 → 실수령액 흐름을
        이진탐색으로 역산합니다. 단, 비과세(식대 월 20만원 기준), 부양가족 1인(본인만)
        기준으로 계산하므로 실제 조건이 다르면 오차가 발생합니다.
      </GuideP>
      <GuideFormulaBox>
        실수령 ≈ 월급 − 국민연금(4.5%) − 건강보험(3.545%) − 장기요양(건강보험료×13.14%) − 고용보험(0.9%) − 소득세·지방소득세
      </GuideFormulaBox>

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "비과세 항목이 있으면 결과가 달라지나요?",
            a: "네, 식대(월 20만원)·교통비 등 비과세 항목이 있으면 세금이 줄어 실수령이 늘어납니다. 이 계산기는 비과세 20만원 기준으로 추정하며, 실제와 다를 수 있습니다.",
          },
          {
            q: "부양가족이 있으면 달라지나요?",
            a: "부양가족이 많을수록 소득세가 줄어 실수령이 늘어납니다. 이 계산기는 본인 1인 기준이므로 가족이 있으면 실제 수령액이 더 높게 나올 수 있습니다.",
          },
          {
            q: "협상 시 어느 정도 여유를 두어야 하나요?",
            a: "이 계산기는 추정치입니다. 실제 협상에서는 ±50~100만원 여유를 두고 목표 연봉을 제시하는 것이 안전합니다.",
          },
        ]}
      />
    </>
  );
}

function LocalHealthInsuranceGuide() {
  return (
    <>
      <GuideH2>지역가입자 건강보험료 계산기란?</GuideH2>
      <GuideP>
        직장에 다니지 않거나 피부양자 자격을 잃은 경우 납부하는 <strong>지역가입자 건강보험료</strong>를
        추정하는 도구입니다. 소득·재산·자동차를 종합하여 점수를 산정한 뒤 보험료를 계산하는
        구조로, 직장가입자와 산정 방식이 다릅니다.
      </GuideP>

      <GuideH3>보험료 산정 구조 (2026년 기준)</GuideH3>
      <GuideTable
        headers={["항목", "계산 방법"]}
        rows={[
          ["소득보험료", "연간 소득 × 7.09% ÷ 12 (월 보험료)"],
          ["재산보험료", "재산점수 × 208.4원 (재산 공제 후 점수화)"],
          ["자동차보험료", "차량 가액에 따라 점수화 (4,000만원 이상 부과)"],
          ["장기요양보험료", "건강보험료 × 13.14%"],
        ]}
      />
      <GuideP>
        재산 공제는 기본 5,000만원이 적용되며, 재산이 5,000만원 이하라면 재산보험료가 없습니다.
        퇴직 후 지역가입자 전환 시 직장 건강보험료와 비교해 임의계속가입을 선택하는 게
        유리할 수 있으니 건강보험공단(☎ 1577-1000)에 문의하세요.
      </GuideP>

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "퇴직 후 언제 지역가입자로 전환되나요?",
            a: "퇴직 다음 달부터 지역가입자로 전환됩니다. 단, 피부양자 등록 조건(소득·재산 요건)을 충족하면 가족의 직장 건강보험에 피부양자로 등록할 수 있습니다.",
          },
          {
            q: "임의계속가입이란 무엇인가요?",
            a: "퇴직 전 직장가입자 보험료를 최대 3년간 유지할 수 있는 제도입니다. 지역가입자 보험료가 더 높다면 임의계속가입이 유리할 수 있으며, 퇴직 후 2개월 이내에 신청해야 합니다.",
          },
          {
            q: "프리랜서·사업자도 지역가입자인가요?",
            a: "네, 직장에 소속되지 않은 프리랜서·개인사업자는 지역가입자로 분류됩니다. 종합소득세 신고 소득을 기반으로 보험료가 산정됩니다.",
          },
        ]}
      />
    </>
  );
}

// ────────────────────────────────────────────────────────────
// 금융 (신규)
// ────────────────────────────────────────────────────────────

function CapitalGainsTaxGuide() {
  return (
    <>
      <GuideH2>양도소득세 계산기란?</GuideH2>
      <GuideP>
        부동산·주식 등을 팔 때 발생하는 양도차익에 부과되는 세금을 추정하는 도구입니다.
        보유 기간·주택 수·취득 시점 등에 따라 공제율과 세율이 크게 달라지므로,
        이 계산기는 <strong>빠른 방향 파악용</strong>이며 신고 전 반드시 세무사·국세청을 통해 확인하세요.
      </GuideP>

      <GuideH3>양도소득세 계산 순서</GuideH3>
      <GuideTable
        headers={["단계", "내용"]}
        rows={[
          ["①", "양도가액 − 취득가액 − 필요경비 = 양도차익"],
          ["②", "양도차익 − 장기보유특별공제 = 양도소득금액"],
          ["③", "양도소득금액 − 기본공제(250만원) = 과세표준"],
          ["④", "과세표준 × 세율(6~45%) = 산출세액"],
          ["⑤", "산출세액 × 10% = 지방소득세 (합산)"],
        ]}
      />

      <GuideH3>장기보유특별공제율 (1세대 1주택 비거주자 제외)</GuideH3>
      <GuideTable
        headers={["보유 기간", "공제율"]}
        rows={[
          ["3년 이상 ~ 4년 미만", "24%"],
          ["4년 이상 ~ 5년 미만", "32%"],
          ["5년 이상 ~ 6년 미만", "40%"],
          ["6년 이상 ~ 7년 미만", "48%"],
          ["7년 이상 ~ 8년 미만", "56%"],
          ["8년 이상 ~ 9년 미만", "64%"],
          ["9년 이상 ~ 10년 미만", "72%"],
          ["10년 이상", "80%"],
        ]}
      />
      <GuideP>1세대 1주택 비거주자·다주택자·조정대상지역 등은 별도 공제율 및 중과세율이 적용됩니다.</GuideP>

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "1세대 1주택 비과세 조건은?",
            a: "보유 2년 이상(조정대상지역은 거주 2년 이상 추가), 양도가액 12억원 이하인 경우 양도소득세가 비과세됩니다. 12억 초과분은 과세됩니다.",
          },
          {
            q: "취득세 영수증도 필요경비에 포함되나요?",
            a: "네, 취득세·중개수수료·등기비용·인테리어 비용(자본적 지출) 등이 필요경비로 인정됩니다. 관련 서류를 보관해 두세요.",
          },
          {
            q: "양도소득세 신고 기한은?",
            a: "양도일이 속하는 달의 말일부터 2개월 이내에 신고·납부해야 합니다. 예정 신고를 안 하면 가산세가 부과됩니다.",
          },
        ]}
      />
    </>
  );
}

function GiftTaxGuide() {
  return (
    <>
      <GuideH2>증여세 계산기란?</GuideH2>
      <GuideP>
        재산을 무상으로 받을 때 수증자(받는 사람)에게 부과되는 세금을 추정하는 도구입니다.
        증여자와의 관계에 따라 공제 금액이 다르며, 10년 단위로 합산해 누진세율을 적용합니다.
      </GuideP>

      <GuideH3>증여재산 공제 한도 (10년 합산)</GuideH3>
      <GuideTable
        headers={["증여자 관계", "공제 한도"]}
        rows={[
          ["배우자", "6억원"],
          ["직계존속 (부모·조부모)", "5천만원 (미성년자 2천만원)"],
          ["직계비속 (자녀·손자녀)", "5천만원"],
          ["기타 친족 (형제자매 등)", "1천만원"],
        ]}
      />

      <GuideH3>증여세율 (과세표준 기준)</GuideH3>
      <GuideTable
        headers={["과세표준", "세율", "누진공제액"]}
        rows={[
          ["1억원 이하", "10%", "−"],
          ["1억원 초과 ~ 5억원 이하", "20%", "1,000만원"],
          ["5억원 초과 ~ 10억원 이하", "30%", "6,000만원"],
          ["10억원 초과 ~ 30억원 이하", "40%", "1억 6,000만원"],
          ["30억원 초과", "50%", "4억 6,000만원"],
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "10년마다 공제가 리셋되나요?",
            a: "네, 동일 증여자로부터 10년 이내에 받은 금액을 합산합니다. 10년이 지나면 다시 공제 한도가 리셋됩니다.",
          },
          {
            q: "부모가 자녀 명의로 아파트를 사주면 증여세가 붙나요?",
            a: "네, 자금 출처가 부모라면 증여로 봅니다. 자녀 소득·나이에 비해 과도한 재산 취득은 국세청 자금 출처 조사 대상이 됩니다.",
          },
          {
            q: "증여세 신고 기한은?",
            a: "증여받은 날이 속하는 달의 말일부터 3개월 이내에 신고·납부해야 합니다. 기한 내 신고 시 3% 세액공제 혜택이 있습니다.",
          },
        ]}
      />
    </>
  );
}

function InheritanceTaxGuide() {
  return (
    <>
      <GuideH2>상속세 계산기란?</GuideH2>
      <GuideP>
        사망으로 인해 피상속인(망인)의 재산을 물려받을 때 납부하는 세금을 추정하는 도구입니다.
        각종 공제를 적용한 후 남은 과세표준에 누진세율을 적용합니다.
        상속세는 구조가 복잡하므로 이 계산기는 방향 파악용이며, 실제 신고는 세무사 상담을 권장합니다.
      </GuideP>

      <GuideH3>주요 공제 항목</GuideH3>
      <GuideTable
        headers={["공제 항목", "공제액"]}
        rows={[
          ["기초공제", "2억원"],
          ["배우자 공제", "최소 5억원 ~ 최대 30억원 (배우자 실제 상속분 이내)"],
          ["일괄공제", "5억원 (기초공제+인적공제 합계보다 클 경우 선택)"],
          ["금융재산 공제", "금융재산의 20% (최대 2억원)"],
          ["동거주택 공제", "주택가액의 100% (최대 6억원, 10년 이상 동거 요건)"],
        ]}
      />

      <GuideH3>상속세율 (과세표준 기준)</GuideH3>
      <GuideTable
        headers={["과세표준", "세율", "누진공제액"]}
        rows={[
          ["1억원 이하", "10%", "−"],
          ["1억원 초과 ~ 5억원 이하", "20%", "1,000만원"],
          ["5억원 초과 ~ 10억원 이하", "30%", "6,000만원"],
          ["10억원 초과 ~ 30억원 이하", "40%", "1억 6,000만원"],
          ["30억원 초과", "50%", "4억 6,000만원"],
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "배우자가 있으면 상속세를 안 내도 되나요?",
            a: "배우자 공제(최소 5억원)와 일괄공제(5억원)를 합치면 최소 10억원 공제가 됩니다. 상속 재산이 10억원 이하면 상속세가 없는 경우가 많습니다.",
          },
          {
            q: "상속 포기를 하면 세금도 없어지나요?",
            a: "상속 포기 시 해당 상속인은 채무와 재산 모두 포기합니다. 다음 순위 상속인에게 넘어가며, 포기한 상속인의 상속세 의무도 없어집니다.",
          },
          {
            q: "상속세 신고 기한은?",
            a: "피상속인 사망일이 속하는 달의 말일부터 6개월 이내에 신고·납부해야 합니다(해외 거주자는 9개월).",
          },
        ]}
      />
    </>
  );
}

function GlobalIncomeTaxGuide() {
  return (
    <>
      <GuideH2>종합소득세 계산기란?</GuideH2>
      <GuideP>
        근로소득 외에 사업소득·이자소득·배당소득·연금소득·기타소득이 있는 경우
        이를 합산하여 신고하는 <strong>종합소득세</strong>를 추정하는 도구입니다.
        매년 5월 종합소득세 신고 기간에 전년도 소득을 합산하여 신고합니다.
        프리랜서(3.3% 원천징수), 부업 소득자, 임대소득자 등이 주요 대상입니다.
      </GuideP>

      <GuideH3>종합소득세율 (2026년 기준)</GuideH3>
      <GuideTable
        headers={["과세표준", "세율", "누진공제액"]}
        rows={[
          ["1,400만원 이하", "6%", "−"],
          ["1,400만원 초과 ~ 5,000만원 이하", "15%", "126만원"],
          ["5,000만원 초과 ~ 8,800만원 이하", "24%", "576만원"],
          ["8,800만원 초과 ~ 1.5억원 이하", "35%", "1,544만원"],
          ["1.5억원 초과 ~ 3억원 이하", "38%", "1,994만원"],
          ["3억원 초과 ~ 5억원 이하", "40%", "2,594만원"],
          ["5억원 초과 ~ 10억원 이하", "42%", "3,594만원"],
          ["10억원 초과", "45%", "6,594만원"],
        ]}
      />
      <GuideP>지방소득세는 산출 소득세의 10%가 별도로 부과됩니다.</GuideP>

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "프리랜서는 무조건 종합소득세 신고를 해야 하나요?",
            a: "3.3% 원천징수된 사업소득(프리랜서)이 있으면 5월에 종합소득세를 신고해야 합니다. 필요 경비를 인정받으면 환급이 발생하는 경우도 많습니다.",
          },
          {
            q: "근로소득만 있는 직장인도 신고해야 하나요?",
            a: "연말정산으로 마무리된 근로소득만 있다면 별도 신고 불필요합니다. 단, 부업·임대·이자 등 다른 소득이 있으면 합산 신고해야 합니다.",
          },
          {
            q: "소득공제와 세액공제의 차이는?",
            a: "소득공제는 과세표준을 줄여 세율을 낮추는 방식이고, 세액공제는 계산된 세액에서 직접 차감합니다. 고소득자일수록 소득공제, 저소득자일수록 세액공제가 유리한 경향이 있습니다.",
          },
        ]}
      />
    </>
  );
}

function IsaTaxFreeGuide() {
  return (
    <>
      <GuideH2>ISA 비과세 한도 계산기란?</GuideH2>
      <GuideP>
        개인종합자산관리계좌(ISA)의 수익에 대한 비과세 혜택과 세금을 추정하는 도구입니다.
        ISA 계좌에서 발생한 이자·배당 등 수익이 비과세 한도 이내면 세금이 없고,
        초과분은 9.9%(지방세 포함) 저율 분리과세가 적용됩니다.
      </GuideP>

      <GuideH3>ISA 비과세 한도 (유형별)</GuideH3>
      <GuideTable
        headers={["계좌 유형", "비과세 한도", "대상"]}
        rows={[
          ["일반형", "200만원/년", "만 19세 이상 거주자"],
          ["서민형", "400만원/년", "총급여 5,000만원 이하 또는 종합소득 3,800만원 이하"],
          ["농어민형", "400만원/년", "농어업인"],
          ["초과분 과세", "9.9% 분리과세", "비과세 한도 초과 수익"],
        ]}
      />
      <GuideP>
        ISA 의무 가입 기간은 3년(서민형·농어민형 포함)이며, 만기 전 해지하면 일반 과세가 적용됩니다.
        연간 납입 한도는 2,000만원(총 1억원)입니다.
      </GuideP>

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "ISA 만기 후 연금계좌로 전환하면 추가 혜택이 있나요?",
            a: "네, ISA 만기 자금을 연금계좌로 전환하면 전환 금액의 10%(최대 300만원)를 세액공제 받을 수 있습니다. 연금 절세 전략으로 매우 효과적입니다.",
          },
          {
            q: "ISA 계좌에서 주식 투자도 할 수 있나요?",
            a: "중개형 ISA는 국내 상장 주식·펀드·ETF 투자가 가능합니다. 단, 국내 주식 매매차익은 원래도 비과세라 ISA의 이점은 배당소득 등에서 더 크게 나타납니다.",
          },
          {
            q: "비과세 한도를 초과하면 어떻게 과세되나요?",
            a: "비과세 한도 초과분은 9.9%(소득세 9% + 지방세 0.9%)로 분리과세됩니다. 일반 금융소득 이자세율(15.4%)보다 낮아 여전히 절세 효과가 있습니다.",
          },
        ]}
      />
    </>
  );
}

function AcquisitionTaxGuide() {
  return (
    <>
      <GuideH2>취득세 계산기란?</GuideH2>
      <GuideP>
        부동산(주택·토지·건물)·차량 등을 취득할 때 납부하는 지방세인 취득세를 추정하는 도구입니다.
        주택의 경우 취득가액·주택 수·면적에 따라 세율이 달라지며,
        농어촌특별세와 지방교육세가 추가됩니다.
      </GuideP>

      <GuideH3>주택 취득세율 (1세대 기준, 2026년)</GuideH3>
      <GuideTable
        headers={["구분", "1주택", "2주택", "3주택 이상"]}
        rows={[
          ["비조정대상지역 (6억 이하)", "1%", "1%", "8%"],
          ["비조정대상지역 (6~9억)", "1~3%", "1~3%", "8%"],
          ["비조정대상지역 (9억 초과)", "3%", "3%", "8%"],
          ["조정대상지역", "1~3%", "8%", "12%"],
        ]}
      />
      <GuideP>
        조정대상지역 2주택은 8%, 3주택 이상은 12% 중과세율이 적용됩니다.
        비조정대상지역 3주택 이상은 8%입니다(2026년 기준).
        농어촌특별세(취득세의 10%)와 지방교육세(취득세의 20%)가 함께 부과됩니다.
      </GuideP>

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "생애최초 주택 구입 시 감면이 있나요?",
            a: "생애최초 주택 구입자는 취득세 200만원 한도 내에서 감면 혜택이 있습니다(2026년 기준). 소득·주택가액 요건을 충족해야 합니다.",
          },
          {
            q: "취득세는 언제 납부해야 하나요?",
            a: "취득일(잔금 지급일 또는 등기일 중 빠른 날)부터 60일 이내에 신고·납부해야 합니다. 기한 초과 시 가산세가 부과됩니다.",
          },
          {
            q: "상속·증여로 받은 부동산도 취득세가 붙나요?",
            a: "네, 상속·증여도 취득으로 보아 취득세가 부과됩니다. 상속은 2.8%, 증여는 3.5%(조정지역 무상취득 12%)가 적용됩니다.",
          },
        ]}
      />
    </>
  );
}

function PropertyTaxGuide() {
  return (
    <>
      <GuideH2>재산세 계산기란?</GuideH2>
      <GuideP>
        주택·토지·건물을 보유하는 동안 매년 납부하는 지방세인 재산세를 추정하는 도구입니다.
        공시가격을 기준으로 공정시장가액비율을 적용한 과세표준에 세율을 곱해 산출하며,
        주택은 7월과 9월에 절반씩 나눠 납부합니다.
      </GuideP>

      <GuideH3>주택 재산세 계산 구조</GuideH3>
      <GuideTable
        headers={["항목", "내용"]}
        rows={[
          ["과세표준", "공시가격 × 공정시장가액비율 (주택 60%)"],
          ["세율", "0.1%(과표 6천만 이하) ~ 0.4%(과표 3억 초과)"],
          ["도시지역분", "과세표준 × 0.14% (도시계획구역 해당 시)"],
          ["지방교육세", "재산세액 × 20%"],
          ["납부 시기", "7월·9월 각 50%"],
        ]}
      />

      <GuideH3>재산세율 (주택 기준)</GuideH3>
      <GuideTable
        headers={["과세표준", "세율"]}
        rows={[
          ["6,000만원 이하", "0.1%"],
          ["6,000만원 초과 ~ 1.5억원 이하", "6만원 + 초과분의 0.15%"],
          ["1.5억원 초과 ~ 3억원 이하", "19.5만원 + 초과분의 0.25%"],
          ["3억원 초과", "57만원 + 초과분의 0.4%"],
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "재산세와 종합부동산세는 다른 세금인가요?",
            a: "네, 재산세는 지방세로 모든 부동산에 부과되고, 종합부동산세(종부세)는 국세로 주택 공시가격 합산이 일정 기준(1세대 1주택 12억원) 초과 시 추가로 부과됩니다.",
          },
          {
            q: "세액 상한제(세부담 상한)란?",
            a: "전년도 재산세 대비 당해년도 재산세가 일정 비율(주택 5~50%) 이상 오르지 않도록 제한하는 제도입니다. 공시가격이 크게 올라도 세금 급증을 방지합니다.",
          },
          {
            q: "공시가격은 어디서 확인하나요?",
            a: "국토교통부 부동산 공시가격 알리미(www.realtyprice.kr) 또는 해당 지방자치단체에서 확인할 수 있습니다.",
          },
        ]}
      />
    </>
  );
}

function JeonseLoanInterestGuide() {
  return (
    <>
      <GuideH2>전세대출 이자 계산기란?</GuideH2>
      <GuideP>
        전세보증금 마련을 위해 받은 대출의 월 이자 부담을 추정하는 도구입니다.
        전세대출은 만기 일시상환(이자만 납부)이 일반적이어서, 원금 없이 이자만 계산하면 됩니다.
        대출 기간 동안 매월 동일한 이자가 발생합니다.
      </GuideP>

      <GuideH3>월 이자 계산 공식</GuideH3>
      <GuideFormulaBox>
        월 이자 = 대출원금 × 연이율 ÷ 12{"\n"}
        연 총 이자 = 대출원금 × 연이율{"\n"}
        전세 기간 총 이자 = 연 이자 × 전세 기간(년)
      </GuideFormulaBox>

      <GuideH3>주요 전세대출 종류 (2026년 기준)</GuideH3>
      <GuideTable
        headers={["대출 상품", "금리 수준", "대상"]}
        rows={[
          ["버팀목 전세자금대출", "연 1~2.7% (우대 시)", "무주택 세대주, 소득 요건"],
          ["청년 전세대출 (HUG·HF)", "연 1.5~2.7%", "만 19~34세 청년"],
          ["시중은행 전세대출", "연 3~5%대", "소득·담보 조건에 따라"],
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "전세대출은 원금을 갚아야 하나요?",
            a: "전세대출은 만기 일시상환 방식이 대부분으로, 전세 기간 동안 이자만 납부하고 만기(이사 나갈 때)에 원금을 한 번에 상환합니다.",
          },
          {
            q: "전세대출도 연말정산 공제가 되나요?",
            a: "주택임차차입금 원리금 상환액으로 연 300만원 한도에서 40% 소득공제가 가능합니다. 무주택 세대주이며 국민주택규모(85㎡) 이하 주택이어야 합니다.",
          },
          {
            q: "전세대출 한도는 어떻게 결정되나요?",
            a: "보증금의 80% 이내(HUG·HF 보증 기준)로, 소득·신용도·주택가액에 따라 달라집니다. 보증 기관에 따라 한도 산정 방식이 다릅니다.",
          },
        ]}
      />
    </>
  );
}

function RentTaxCreditGuide() {
  return (
    <>
      <GuideH2>월세 세액공제 계산기란?</GuideH2>
      <GuideP>
        무주택 세대주가 월세를 지출한 경우 연말정산에서 월세액의 일정 비율을 세액에서
        직접 차감받을 수 있는 <strong>월세 세액공제</strong>를 추정하는 도구입니다.
        최근 공제율이 인상되어 절세 효과가 커졌습니다.
      </GuideP>

      <GuideH3>월세 세액공제 조건 및 공제율 (2026년 기준)</GuideH3>
      <GuideTable
        headers={["소득 기준", "공제율", "연간 한도"]}
        rows={[
          ["총급여 5,500만원 이하 (종합소득 4,500만원 이하)", "17%", "연 월세 합계의 17%, 최대 127.5만원"],
          ["총급여 7,000만원 이하 (종합소득 6,000만원 이하)", "15%", "연 월세 합계의 15%, 최대 112.5만원"],
          ["총급여 7,000만원 초과", "해당 없음", "공제 대상 아님"],
        ]}
      />
      <GuideP>
        적용 대상 주택: 국민주택규모(85㎡) 이하 또는 기준시가 4억원 이하 주택.
        계약자(임차인) 본인이 세대주이며 무주택이어야 합니다.
        월세 납부 증빙(계좌이체 내역·현금영수증)을 보관하세요.
      </GuideP>

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "집주인이 현금영수증 발급을 거부하면?",
            a: "임차인이 직접 국세청 홈택스에서 월세 현금영수증을 신청할 수 있습니다. 집주인 동의 없이도 신청 가능합니다.",
          },
          {
            q: "전세도 세액공제 받을 수 있나요?",
            a: "전세는 월세 세액공제 대상이 아닙니다. 대신 전세 대출 원리금 상환액은 소득공제(연 300만원 한도, 40%) 적용이 가능합니다.",
          },
          {
            q: "세대주가 아닌 세대원도 받을 수 있나요?",
            a: "세대주가 주거 관련 공제를 받지 않는 경우, 세대원도 월세 세액공제 신청이 가능합니다. 단, 중복 수령은 불가능합니다.",
          },
        ]}
      />
    </>
  );
}

function NationalPensionGuide() {
  return (
    <>
      <GuideH2>국민연금 예상 수령액 계산기란?</GuideH2>
      <GuideP>
        국민연금 가입 기간과 소득을 바탕으로 노령연금 예상 수령액을 추정하는 도구입니다.
        국민연금공단의 공식 추정식(소득재분배 공식)을 기반으로 하며, 실제 수령액은
        물가 조정·추가 납입·가입 이력에 따라 달라질 수 있습니다.
      </GuideP>

      <GuideH3>노령연금 산출 공식 (기본연금액)</GuideH3>
      <GuideFormulaBox>
        기본연금액 = 1.2 × (A + B) × (1 + 0.05n/12){"\n"}
        A = 전체 가입자 평균 소득(매년 보건복지부 고시, 최근 기준 약 2,989,764원){"\n"}
        B = 가입자 본인 가입 기간 평균 소득{"\n"}
        n = 20년(240개월) 초과 가입 개월 수
      </GuideFormulaBox>
      <GuideP>
        기본 가입 기간은 20년(240개월) 기준이며, 초과 가입 시 5%/년 가산됩니다.
        수령 개시 연령은 출생연도에 따라 62~65세이며, 조기 수령(최대 5년 앞당김) 시
        수령액이 연 6%씩 감액됩니다.
      </GuideP>

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "보험료를 많이 낼수록 수령액이 늘어나나요?",
            a: "네, 하지만 소득재분배 구조로 인해 저소득 가입자가 납부 대비 수령액 비율이 더 높습니다. 고소득자는 납부 대비 수익률이 상대적으로 낮습니다.",
          },
          {
            q: "수령 시기를 늦추면 얼마나 더 받나요?",
            a: "수령 개시를 1년 늦출 때마다 7.2%(월 0.6%)씩 가산됩니다. 최대 5년 연기 시 36% 증가한 연금을 평생 수령할 수 있습니다.",
          },
          {
            q: "국민연금을 못 받는 경우도 있나요?",
            a: "최소 10년(120개월) 이상 가입해야 노령연금을 받을 수 있습니다. 미달 시 반환일시금으로 지급되며, 60~65세 이후엔 이자도 없이 반환됩니다.",
          },
        ]}
      />
    </>
  );
}

function VehicleDepreciationGuide() {
  return (
    <>
      <GuideH2>자동차 감가상각 계산기란?</GuideH2>
      <GuideP>
        자동차의 연식이 경과함에 따라 자산 가치가 줄어드는 감가상각을 추정하는 도구입니다.
        중고차 시세 파악, 업무용 차량의 세무 처리, 리스·렌탈 계약 비교 등에 활용할 수 있습니다.
        실제 중고차 가격은 차종·주행거리·사고 이력에 따라 크게 달라집니다.
      </GuideP>

      <GuideH3>감가상각 방식</GuideH3>
      <GuideTable
        headers={["방식", "공식", "특징"]}
        rows={[
          ["정액법", "연간 감가액 = (취득가 − 잔존가) ÷ 내용연수", "매년 동일 금액 감가, 세무 처리 일반적"],
          ["정률법", "장부가 = 전년 장부가 × (1 − 상각률)", "초기 감가 크고 후기 감소, 실제 시세와 유사"],
          ["시장 평균 (경험칙)", "구매 즉시 10~15%, 이후 연 10~15% 감가", "브랜드·차종별 편차 큼"],
        ]}
      />
      <GuideP>
        국세청 세무 처리 기준 자동차 내용연수는 일반적으로 5년이며,
        잔존가액은 취득가의 0%로 봅니다. 업무용 차량 비용 처리는
        운행일지 작성·연 1,500만원 한도 등 요건이 있습니다.
      </GuideP>

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "감가상각 후 실제 중고차 시세와 많이 다른가요?",
            a: "정액법·정률법은 세무 계산 기준이며, 실제 중고차 시세는 차종 인기도·수급·사고 이력에 따라 크게 다릅니다. 실거래가는 중고차 플랫폼에서 확인하세요.",
          },
          {
            q: "전기차는 감가상각이 더 빠른가요?",
            a: "배터리 성능 저하 이슈로 초기 감가가 내연기관보다 빠른 편이었으나, 최근 배터리 내구성 향상과 수요 증가로 편차가 줄고 있습니다.",
          },
          {
            q: "업무용 차량 처리 시 주의할 점은?",
            a: "업무용 승용차는 1대당 연 1,500만원까지 비용 처리 가능하며, 초과분은 이월됩니다. 운행일지를 반드시 작성해야 전액 인정받을 수 있습니다.",
          },
        ]}
      />
    </>
  );
}

// ────────────────────────────────────────────────────────────
// 건강 (신규)
// ────────────────────────────────────────────────────────────

function MetCaloriesGuide() {
  return (
    <>
      <GuideH2>MET 운동 칼로리 계산기란?</GuideH2>
      <GuideP>
        운동 강도를 나타내는 <strong>MET(Metabolic Equivalent of Task)</strong> 값과
        체중, 운동 시간을 이용해 소모 칼로리를 추정하는 도구입니다.
        MET 1은 안정 시 대사량(약 1 kcal/kg/h)을 기준으로 하며,
        운동 강도가 높을수록 MET 값이 커집니다.
      </GuideP>

      <GuideH3>칼로리 소모 공식</GuideH3>
      <GuideFormulaBox>
        소모 칼로리(kcal) = MET × 체중(kg) × 운동 시간(h)
      </GuideFormulaBox>

      <GuideH3>주요 활동별 MET 값</GuideH3>
      <GuideTable
        headers={["활동", "MET"]}
        rows={[
          ["걷기 (4km/h)", "3.0"],
          ["빠르게 걷기 (6km/h)", "4.5"],
          ["조깅 (8km/h)", "8.0"],
          ["달리기 (10km/h)", "10.0"],
          ["자전거 (16~19km/h)", "8.0"],
          ["수영 (보통 강도)", "6.0"],
          ["줄넘기", "10.0"],
          ["웨이트 트레이닝", "5.0"],
          ["요가", "3.0"],
          ["등산", "5.3~8.0"],
        ]}
      />
      <GuideP>
        MET 값은 같은 활동이라도 강도·개인 체력에 따라 다르며, 이 계산기는
        평균 MET 기준의 추정치입니다. 실제 소모 칼로리는 ±20% 오차가 있을 수 있습니다.
      </GuideP>

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "체중이 많을수록 칼로리 소모가 더 많은 이유는?",
            a: "같은 활동을 해도 체중이 많으면 이동시키는 질량이 커서 더 많은 에너지가 필요합니다. MET 공식에 체중이 직접 포함되는 이유입니다.",
          },
          {
            q: "MET 3 이하 활동은 운동이 아닌가요?",
            a: "MET 3 미만은 저강도 신체활동으로 분류됩니다. 운동 효과는 작지만, 장시간 누적하면 총 칼로리 소모에 기여합니다. 좌식 생활 감소에도 효과적입니다.",
          },
          {
            q: "심박수 기반 칼로리와 차이가 나는 이유는?",
            a: "심박수 기반 계산은 개인 심폐 능력을 반영해 더 정확하지만, MET 방식은 평균값 기반이라 개인 편차가 있습니다. 웨어러블 기기는 두 방식을 혼합 사용합니다.",
          },
        ]}
      />
    </>
  );
}

function HomaIrGuide() {
  return (
    <>
      <GuideH2>HOMA-IR 인슐린 저항성 계산기란?</GuideH2>
      <GuideP>
        공복 혈당과 공복 인슐린 수치로 인슐린 저항성을 평가하는
        <strong> HOMA-IR(Homeostatic Model Assessment of Insulin Resistance)</strong> 지수를
        계산하는 도구입니다. 당뇨 전단계·대사증후군 스크리닝에 활용되며,
        수치가 높을수록 인슐린 저항성이 강함을 의미합니다.
      </GuideP>

      <GuideH3>HOMA-IR 계산 공식</GuideH3>
      <GuideFormulaBox>
        HOMA-IR = 공복 혈당(mg/dL) × 공복 인슐린(μIU/mL) ÷ 405
      </GuideFormulaBox>

      <GuideH3>HOMA-IR 해석 기준</GuideH3>
      <GuideTable
        headers={["수치", "해석"]}
        rows={[
          ["1.0 이하", "정상 (인슐린 감수성 양호)"],
          ["1.0 ~ 1.9", "경계 (생활 습관 개선 권고)"],
          ["2.0 ~ 2.9", "인슐린 저항성 의심"],
          ["3.0 이상", "인슐린 저항성 높음 (의료진 상담 권고)"],
        ]}
      />
      <GuideP>
        정상 기준은 연구·기관마다 다소 다르며, 2.5 또는 3.0을 이상 기준으로 보는 경우도 있습니다.
        검사 전 8~12시간 공복이 필수이며, 이 계산기는 스크리닝 참고용입니다.
        정확한 진단은 의료진과 상담하세요.
      </GuideP>

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "인슐린 저항성이 높으면 어떤 문제가 생기나요?",
            a: "인슐린 저항성이 높으면 혈당 조절이 어려워져 제2형 당뇨병, 복부비만, 고혈압, 이상지질혈증(대사증후군)으로 이어질 수 있습니다.",
          },
          {
            q: "HOMA-IR을 낮추려면 어떻게 해야 하나요?",
            a: "체중 감량(특히 복부 지방 감소), 규칙적인 유산소·근력 운동, 정제 탄수화물·당류 줄이기, 수면 개선이 효과적입니다.",
          },
          {
            q: "공복 혈당이 정상인데 HOMA-IR이 높을 수 있나요?",
            a: "네, 인슐린 저항성 초기에는 인슐린이 과도하게 분비되어 혈당은 정상 범위를 유지하지만 HOMA-IR이 높아질 수 있습니다. 이 단계에서 생활 습관을 개선하는 것이 중요합니다.",
          },
        ]}
      />
    </>
  );
}

// ────────────────────────────────────────────────────────────
// 학교 (신규)
// ────────────────────────────────────────────────────────────

function CsatGradeGuide() {
  return (
    <>
      <GuideH2>수능 등급 계산기란?</GuideH2>
      <GuideP>
        대학수학능력시험(수능)의 영역별 원점수·표준점수로 등급을 추정하는 도구입니다.
        수능 등급은 응시자 전체의 표준점수 분포를 기반으로 상위 비율에 따라 1~9등급으로 나뉘며,
        매년 실제 등급컷이 달라집니다.
      </GuideP>

      <GuideH3>수능 등급 구분 기준 (표준점수 기준 누적 비율)</GuideH3>
      <GuideTable
        headers={["등급", "누적 비율 (상위)", "비율 폭"]}
        rows={[
          ["1등급", "상위 4%", "4%"],
          ["2등급", "상위 11%", "7%"],
          ["3등급", "상위 23%", "12%"],
          ["4등급", "상위 40%", "17%"],
          ["5등급", "상위 60%", "20%"],
          ["6등급", "상위 77%", "17%"],
          ["7등급", "상위 89%", "12%"],
          ["8등급", "상위 96%", "7%"],
          ["9등급", "96% 초과", "4%"],
        ]}
      />
      <GuideP>
        표준점수는 원점수를 응시 집단의 평균·표준편차로 변환한 값으로,
        영역별 난이도를 보정합니다. 국어·수학은 표준점수, 영어·한국사는 절대평가(등급만 제공)입니다.
      </GuideP>

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "같은 표준점수인데 등급이 다를 수 있나요?",
            a: "네, 등급 경계선에 같은 점수를 받은 응시자가 많으면 하위 등급으로 밀릴 수 있습니다. 예를 들어 4% 경계에 많은 학생이 몰리면 그 점수가 2등급이 될 수 있습니다.",
          },
          {
            q: "탐구 영역은 어떻게 계산하나요?",
            a: "탐구는 선택 과목별로 응시자 수와 분포가 다르므로 변환표준점수를 사용합니다. 과목 선택에 따라 유불리가 발생할 수 있어, 한국교육과정평가원 발표를 확인하세요.",
          },
          {
            q: "영어 1등급 기준은?",
            a: "영어는 절대평가로 원점수 90점 이상이 1등급입니다. 응시자 비율과 무관하게 점수 기준으로만 등급이 결정됩니다.",
          },
        ]}
      />
    </>
  );
}

// ────────────────────────────────────────────────────────────
// 일상 (신규)
// ────────────────────────────────────────────────────────────

function TrafficFineGuide() {
  return (
    <>
      <GuideH2>교통범칙금 계산기란?</GuideH2>
      <GuideP>
        속도위반·신호위반·주정차 위반 등 도로교통법 위반 시 부과되는
        <strong> 범칙금·과태료</strong>를 조회하는 도구입니다.
        범칙금은 경찰에게 현장 단속 시 부과되고, 과태료는 무인 단속 카메라 등 비현장 단속 시
        차량 소유자에게 부과됩니다.
      </GuideP>

      <GuideH3>속도위반 범칙금·과태료 (승용차 기준, 2026년)</GuideH3>
      <GuideTable
        headers={["위반 속도", "범칙금", "과태료"]}
        rows={[
          ["20km/h 이하 초과", "3만원", "4만원"],
          ["20km/h 초과 ~ 40km/h 이하", "6만원", "7만원"],
          ["40km/h 초과 ~ 60km/h 이하", "9만원", "10만원"],
          ["60km/h 초과", "12만원", "13만원"],
          ["어린이보호구역 20km/h 이하 초과", "6만원", "7만원"],
          ["어린이보호구역 60km/h 초과", "16만원", "17만원"],
        ]}
      />

      <GuideH3>주요 위반 범칙금 (승용차 기준)</GuideH3>
      <GuideTable
        headers={["위반 유형", "범칙금"]}
        rows={[
          ["신호·지시 위반", "6만원"],
          ["중앙선 침범", "6만원"],
          ["안전벨트 미착용 (운전자)", "3만원"],
          ["휴대폰 사용 (운전 중)", "6만원"],
          ["음주운전 (0.03~0.08%)", "벌금 및 면허 정지"],
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "범칙금과 과태료의 차이는?",
            a: "범칙금은 현장 경찰관이 부과하며 운전자에게 귀속됩니다(납부 시 벌점 없음 선택 가능). 과태료는 무인 단속 시 차량 소유자에게 부과되며 벌점이 없습니다.",
          },
          {
            q: "과태료를 빨리 내면 할인이 되나요?",
            a: "과태료 고지 후 20일 이내에 납부하면 20% 감경(조기납부 감경)이 적용됩니다. 단, 가중 처벌 대상(스쿨존 등)은 감경이 없는 경우도 있습니다.",
          },
          {
            q: "벌점이 쌓이면 어떻게 되나요?",
            a: "1년간 벌점 40점 이상 시 면허정지(40점당 정지 기간 증가), 누산 121점 이상 시 면허취소가 됩니다. 착한운전 마일리지 제도로 벌점을 상쇄할 수 있습니다.",
          },
        ]}
      />
    </>
  );
}

// ────────────────────────────────────────────────────────────
// 개발 (신규)
// ────────────────────────────────────────────────────────────

function CronExpressionGuide() {
  return (
    <>
      <GuideH2>크론 표현식 계산기란?</GuideH2>
      <GuideP>
        리눅스 cron, AWS EventBridge, GitHub Actions 등에서 사용하는
        <strong> 크론(Cron) 표현식</strong>을 분석하고 다음 실행 시각을 보여주는 도구입니다.
        크론 표현식은 반복 작업 스케줄을 5~6개 필드로 표현하는 형식입니다.
      </GuideP>

      <GuideH3>크론 표현식 필드 구조 (표준 5필드)</GuideH3>
      <GuideTable
        headers={["필드", "범위", "설명"]}
        rows={[
          ["분 (Minute)", "0–59", "실행할 분"],
          ["시 (Hour)", "0–23", "실행할 시"],
          ["일 (Day of Month)", "1–31", "실행할 날짜"],
          ["월 (Month)", "1–12", "실행할 월 (또는 JAN–DEC)"],
          ["요일 (Day of Week)", "0–7", "실행할 요일 (0·7 = 일요일, 1 = 월요일)"],
        ]}
      />

      <GuideH3>특수 문자 의미</GuideH3>
      <GuideTable
        headers={["특수 문자", "의미", "예시"]}
        rows={[
          ["*", "모든 값", "* = 매분/매시간/매일"],
          [",", "목록 (다중 선택)", "1,3,5 = 1·3·5분"],
          ["-", "범위", "9-17 = 9시~17시"],
          ["/", "간격", "*/5 = 5분마다"],
          ["?", "임의 (일·요일에만)", "일 또는 요일 중 하나만 지정할 때"],
        ]}
      />

      <GuideH3>자주 쓰는 크론 표현식 예시</GuideH3>
      <GuideTable
        headers={["표현식", "실행 시기"]}
        rows={[
          ["0 * * * *", "매시 정각"],
          ["*/5 * * * *", "5분마다"],
          ["0 9 * * 1-5", "평일 오전 9시"],
          ["0 0 * * 0", "매주 일요일 자정"],
          ["0 0 1 * *", "매월 1일 자정"],
          ["0 2 * * *", "매일 새벽 2시"],
        ]}
      />

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "AWS EventBridge 크론과 표준 크론이 다른가요?",
            a: "네, AWS EventBridge는 6필드 형식(분 시 일 월 요일 년)을 사용하며, 요일 필드가 0~7 대신 SUN–SAT 형식을 권장합니다. 일·요일 중 하나는 반드시 ?로 지정해야 합니다.",
          },
          {
            q: "초 단위 실행이 가능한가요?",
            a: "표준 cron은 최소 단위가 1분입니다. 초 단위 실행이 필요하면 cron 내에서 sleep 명령을 반복하거나, Kubernetes CronJob·Quartz Scheduler처럼 초 필드를 지원하는 도구를 사용하세요.",
          },
          {
            q: "서버 시간대(타임존)가 크론 실행에 영향을 주나요?",
            a: "네, cron은 서버의 로컬 시간 기준으로 실행됩니다. UTC 서버라면 한국 시간(KST = UTC+9)을 고려해 시간 필드를 −9시간으로 조정해야 합니다.",
          },
        ]}
      />
    </>
  );
}

function JwtDecoderGuide() {
  return (
    <>
      <GuideH2>JWT 디코더란?</GuideH2>
      <GuideP>
        <strong>JWT(JSON Web Token)</strong>를 Base64url 디코딩하여 Header·Payload·Signature의
        내용을 확인하는 도구입니다. API 개발·디버깅 시 토큰에 담긴 클레임(데이터)을
        빠르게 확인할 수 있습니다. 이 도구는 서명 검증은 하지 않으며 디코딩만 수행합니다.
      </GuideP>

      <GuideH3>JWT 구조</GuideH3>
      <GuideFormulaBox>
        JWT = Header.Payload.Signature{"\n"}
        각 부분은 점(.)으로 구분되며 Base64url 인코딩됩니다.
      </GuideFormulaBox>
      <GuideTable
        headers={["부분", "내용", "예시 필드"]}
        rows={[
          ["Header", "토큰 유형·서명 알고리즘", "{ alg: 'HS256', typ: 'JWT' }"],
          ["Payload", "클레임(데이터)", "{ sub: '1234', name: '홍길동', iat: 1516239022 }"],
          ["Signature", "서명 값 (검증용)", "HMACSHA256(base64url(header)+'.'+base64url(payload), secret)"],
        ]}
      />

      <GuideH3>주요 표준 클레임 (Registered Claims)</GuideH3>
      <GuideTable
        headers={["클레임", "의미"]}
        rows={[
          ["iss (Issuer)", "발급자"],
          ["sub (Subject)", "주체(사용자 ID 등)"],
          ["aud (Audience)", "수신 대상"],
          ["exp (Expiration)", "만료 시각 (Unix timestamp)"],
          ["iat (Issued At)", "발급 시각 (Unix timestamp)"],
          ["nbf (Not Before)", "이 시각 이전엔 유효하지 않음"],
        ]}
      />
      <GuideP>
        ⚠️ 이 디코더는 서명을 검증하지 않습니다. 민감한 토큰을 외부 온라인 디코더에
        입력하지 마세요. 이 도구는 브라우저 내에서만 처리하며 서버로 전송하지 않습니다.
      </GuideP>

      <GuideH2>자주 묻는 질문 (FAQ)</GuideH2>
      <GuideFaq
        items={[
          {
            q: "JWT는 암호화되어 있나요?",
            a: "일반 JWT(JWS)는 서명만 되어 있고 암호화되어 있지 않습니다. Payload는 Base64url 인코딩만 된 상태라 누구나 디코딩해 내용을 볼 수 있습니다. 민감한 정보는 Payload에 담지 마세요.",
          },
          {
            q: "exp 클레임의 Unix timestamp는 어떻게 읽나요?",
            a: "Unix timestamp는 1970년 1월 1일 00:00:00 UTC 기준 경과 초 수입니다. 이 도구는 자동으로 사람이 읽을 수 있는 날짜·시간으로 변환해 표시합니다.",
          },
          {
            q: "서명 검증도 할 수 있나요?",
            a: "서명 검증은 비밀키(secret)나 공개키가 필요합니다. 이 디코더는 보안상 비밀키를 입력받지 않으며, 검증은 jwt.io 또는 서버 측 코드에서 수행하세요.",
          },
        ]}
      />
    </>
  );
}
