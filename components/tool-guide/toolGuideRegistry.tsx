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
    case "job-001":
      return <SalaryGuide />;
    case "job-002":
      return <SeveranceGuide />;
    case "job-003":
      return <AnnualLeaveBonusGuide />;
    case "job-010":
      return <AchievementGuide />;
    default:
      if (slug.startsWith("job-")) {
        return <GenericJobGuide slug={slug} />;
      }
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
