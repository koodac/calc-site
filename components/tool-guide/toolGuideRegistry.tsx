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
    case "job-006": return <UnemploymentGuide />;
    case "job-008": return <AnnualLeaveGuide />;
    case "job-009": return <WeeklyHolidayGuide />;
    case "job-010": return <AchievementGuide />;
    case "job-019": return <FourInsuranceGuide />;
    case "job-023": return <MaternityLeaveGuide />;
    case "job-024": return <ParentalLeaveGuide />;
    case "job-027": return <PartTimeGuide />;

    // ── 건강 ──
    case "health-001": return <BmiGuide />;
    case "health-002": return <BmrGuide />;
    case "health-007": return <WaterGuide />;
    case "health-008": return <SleepGuide />;
    case "health-012": return <OneRmGuide />;
    case "health-017": return <TdeeGuide />;
    case "health-023": return <OvulationGuide />;
    case "health-024": return <BacGuide />;

    // ── 금융 ──
    case "finance-001": return <LoanGuide />;
    case "finance-002": return <CompoundInterestGuide />;
    case "finance-003": return <ExchangeGuide />;
    case "finance-007": return <VatGuide />;

    // ── 학교 ──
    case "school-001": return <NeisGuide />;
    case "school-005": return <GpaGuide />;
    case "school-010": return <AverageGuide />;

    // ── 일상 ──
    case "daily-001": return <AgeGuide />;
    case "daily-002": return <DateGuide />;
    case "daily-007": return <DiscountGuide />;

    default:
      if (slug.startsWith("job-")) return <GenericJobGuide slug={slug} />;
      if (slug.startsWith("health-")) return <GenericHealthGuide slug={slug} />;
      if (slug.startsWith("finance-")) return <GenericFinanceGuide slug={slug} />;
      if (slug.startsWith("school-")) return <GenericSchoolGuide slug={slug} />;
      if (slug.startsWith("unit-")) return <GenericUnitGuide slug={slug} />;
      if (slug.startsWith("daily-")) return <GenericDailyGuide slug={slug} />;
      if (slug.startsWith("military-")) return <GenericMilitaryGuide slug={slug} />;
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
