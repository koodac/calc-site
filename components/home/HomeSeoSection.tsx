import Link from "next/link";

const CATEGORIES = [
  {
    icon: "💼",
    name: "직장·급여 계산기",
    desc: "연봉 실수령액, 퇴직금, 4대보험료, 주휴수당, 연차수당, 육아휴직 급여, 실업급여 등 직장인이 가장 많이 필요로 하는 급여 관련 계산을 한 곳에서 무료로 처리할 수 있습니다. 2026년 최저임금·4대보험 요율이 반영되어 있습니다.",
    href: "/?mobileTab=home",
  },
  {
    icon: "🏠",
    name: "금융·부동산 계산기",
    desc: "대출 원리금균등·원금균등 상환 비교, 중도상환 절약액, 전월세 전환율, 복리 적금, CAGR, 청약 가점 등 재테크와 부동산 의사결정에 필요한 금융 계산기 30종 이상을 제공합니다.",
    href: "/?mobileTab=home",
  },
  {
    icon: "🏥",
    name: "건강·체력 계산기",
    desc: "BMI, 기초대사량(BMR), TDEE, 체지방률, 단백질 섭취량, 최대 심박수, 배란일, 혈중알코올농도(BAC), 칼로리 소모량 등 건강 관리에 필요한 26종의 계산기를 무료로 제공합니다.",
    href: "/?mobileTab=home",
  },
  {
    icon: "📚",
    name: "학교·수학 계산기",
    desc: "수능 등급 계산, 학점(GPA) 계산, 표준편차, P-value, 순열·조합, 인수분해, 가우스 소거법 등 학생들이 자주 쓰는 22종의 수학·통계 계산기를 제공합니다.",
    href: "/?mobileTab=home",
  },
  {
    icon: "📐",
    name: "단위 변환 계산기",
    desc: "평↔㎡ 면적 변환, 섭씨↔화씨, cm↔인치, 건폐율·용적률, 경사도, 루베 계산, 밀도, 데시벨, 저항 등 공학·생활에서 쓰는 20종의 단위 변환 도구를 제공합니다.",
    href: "/?mobileTab=home",
  },
  {
    icon: "🌙",
    name: "일상 생활 계산기",
    desc: "만 나이, D-Day, 날짜 차이, 음력 변환, 전기요금, 자동차세, 기름값, 더치페이, 49재, 타이머 등 매일 쓰는 13종의 생활 밀착형 도구를 제공합니다.",
    href: "/?mobileTab=home",
  },
  {
    icon: "⚙️",
    name: "개발자 도구",
    desc: "UUID 생성, API Key 생성, Base64 인코더, URL 인코더, JSON 유효성 검사, 정규식 테스터, 진법 변환, QR 코드 생성, 색상 코드 변환 등 개발자용 11종 도구를 무료로 제공합니다.",
    href: "/?mobileTab=home",
  },
  {
    icon: "🎖️",
    name: "군대 계산기",
    desc: "전역일 계산(육군 18개월·해군 20개월·공군 21개월), 군 적금 만기 수령액, 공군 지원 점수, 해병대 기수 계산 등 2026년 기준 군 관련 4종 계산기를 제공합니다.",
    href: "/?mobileTab=home",
  },
  {
    icon: "🔐",
    name: "보안 도구",
    desc: "강력한 비밀번호 생성기, MD5·SHA-256 해시 생성기, RSA 공개키 생성, 카이사르 암호 인코더 등 정보보안 학습과 실무에 활용하는 4종 도구를 무료로 제공합니다.",
    href: "/?mobileTab=home",
  },
  {
    icon: "🎮",
    name: "게임·엔터테인먼트 계산기",
    desc: "가챠 확률 계산, 로또 번호 생성, 게임 승률 분석, 마우스 eDPI 계산, 볼링 점수, EA FC 이적시장 수익 계산, 컬링 점수 등 8종의 게임 도구를 제공합니다.",
    href: "/?mobileTab=home",
  },
  {
    icon: "🏃",
    name: "스포츠 계산기",
    desc: "야구 타율·OPS·ERA 계산, 러닝 페이스 계산, VDOT 훈련 페이스 설정, 볼링 점수, 컬링 경기 집계 등 운동과 스포츠 분석에 활용하는 6종 계산기를 제공합니다.",
    href: "/?mobileTab=home",
  },
];

const FAQS = [
  {
    q: "calcmoa.com 계산 결과를 믿어도 되나요?",
    a: "모든 계산기는 2026년 현행 법령·고시·요율을 기준으로 개발되었으며, 공식 수식을 직접 구현합니다. 다만 법령 변경이나 개인 사정에 따라 실제 결과와 차이가 생길 수 있으므로, 중요한 결정(세금 신고, 계약 등)에는 관련 기관이나 전문가를 통해 재확인하시기 바랍니다.",
  },
  {
    q: "입력한 개인 정보는 저장되나요?",
    a: "아니요. calcmoa.com의 모든 계산은 브라우저 내에서만 처리됩니다. 연봉, 나이, 체중 등 어떤 입력값도 서버로 전송되거나 저장되지 않습니다. 회원가입도 필요 없습니다.",
  },
  {
    q: "4대보험 요율은 2026년 기준인가요?",
    a: "네. 국민연금 4.75%(상한 637만원, 7월~659만원), 건강보험 3.595%, 장기요양보험 건강보험료×13.14%, 고용보험 0.9%로 2026년 기준 요율이 적용됩니다. 연도별 요율 변경에 맞춰 업데이트됩니다.",
  },
  {
    q: "계산기가 모바일에서도 잘 되나요?",
    a: "네, 모든 계산기는 모바일 우선으로 설계되어 스마트폰·태블릿에서도 편리하게 사용할 수 있습니다. 앱 설치 없이 브라우저에서 바로 접속하면 됩니다.",
  },
  {
    q: "원하는 계산기를 찾기 어려울 때는 어떻게 하나요?",
    a: "상단 검색창에 키워드(예: '연봉', 'BMI', '퇴직금')를 입력하면 관련 계산기를 즉시 찾을 수 있습니다. 카테고리 탭으로 분야별 탐색도 가능합니다.",
  },
  {
    q: "계산기 추가 요청이나 오류 신고는 어디서 하나요?",
    a: "각 계산기 페이지 하단에 있는 피드백 버튼을 이용해 주세요. 오류 제보, 계산기 추가 요청, 수식 개선 의견 모두 환영합니다.",
  },
];

const GUIDE_LINKS = [
  { title: "2026년 연봉 실수령액 완전 가이드", href: "/guide/salary-guide" },
  { title: "퇴직금 계산 완전 가이드", href: "/guide/severance-guide" },
  { title: "4대보험 가입·계산 완전 가이드", href: "/guide/four-insurance-guide" },
  { title: "부동산 취득세 완전 가이드", href: "/guide/real-estate-acquisition-tax-guide" },
  { title: "대출 금리·이자 완전 가이드", href: "/guide/loan-interest-guide" },
  { title: "BMI·체중 관리 완전 가이드", href: "/guide/bmi-obesity-guide" },
  { title: "2026년 최저임금 완전 가이드", href: "/guide/minimum-wage-guide" },
  { title: "종합소득세 세율·절세 전략 가이드", href: "/guide/income-tax-bracket-guide" },
  { title: "복리 투자·72법칙 가이드", href: "/guide/compound-interest-guide" },
  { title: "프리랜서 3.3% 세금 완전 가이드", href: "/guide/freelance-tax-guide" },
];

export function HomeSeoSection() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-12 pt-2 sm:px-6 lg:px-8">
      {/* 사이트 소개 */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-xl font-bold text-neutral-900 sm:text-2xl">
          calcmoa — 자주 쓰는 계산기 200개+ 무료 모음
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          <strong>calcmoa.com</strong>은 연봉 실수령액, 퇴직금, 4대보험, BMI, 대출 상환, 청약 가점,
          전기요금, 만 나이 등 일상과 직장에서 자주 필요한 계산기를 한 곳에 모아둔 무료 도구
          모음입니다. 회원가입 없이, 앱 설치 없이, 광고 클릭 유도 없이 브라우저에서 바로 계산할 수
          있습니다.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          직장인이 자주 쓰는 급여·세금 계산기부터 건강 관리 도구, 금융·투자 분석기, 학생용 수학·통계
          계산기, 개발자 유틸리티까지 총 11개 카테고리 200종 이상의 계산기를 제공합니다. 2026년
          최저임금·4대보험 요율·간이세액표 등 최신 법령 기준을 반영합니다.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          단순 계산 결과뿐 아니라, 각 계산기 하단에는 계산 공식·주의사항·절세 팁이 담긴 상세 가이드도
          함께 제공합니다. 계산기와 가이드를 함께 활용하면 숫자의 의미를 더 깊이 이해할 수 있습니다.
        </p>
      </div>

      {/* 카테고리별 소개 */}
      <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mb-5 text-lg font-bold text-neutral-900">카테고리별 계산기 안내</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className="rounded-lg border border-neutral-100 bg-neutral-50 p-4">
              <p className="mb-1 text-sm font-semibold text-neutral-800">
                {cat.icon} {cat.name}
              </p>
              <p className="text-xs leading-relaxed text-neutral-600">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mb-5 text-lg font-bold text-neutral-900">자주 묻는 질문</h2>
        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div key={faq.q}>
              <p className="text-sm font-semibold text-neutral-800">Q. {faq.q}</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">A. {faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 추천 가이드 */}
      <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mb-4 text-lg font-bold text-neutral-900">📖 심층 가이드 모음</h2>
        <p className="mb-4 text-sm leading-relaxed text-neutral-600">
          계산기 결과만으로는 부족할 때, 계산 원리와 절세 전략을 설명한 심층 가이드를 함께
          확인하세요.
        </p>
        <ul className="space-y-2">
          {GUIDE_LINKS.map((g) => (
            <li key={g.href}>
              <Link href={g.href} className="text-sm text-blue-600 hover:underline">
                → {g.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/guide"
          className="mt-4 inline-block text-sm font-medium text-blue-700 hover:underline"
        >
          전체 가이드 보기 →
        </Link>
      </div>
    </section>
  );
}
