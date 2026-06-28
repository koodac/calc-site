import type { Metadata } from "next";
import Link from "next/link";
import { SiteAppHeader } from "@/components/layout/SiteAppHeader";
import { SiteFooter } from "@/components/SiteFooter";

const BASE_URL = "https://www.calcmoa.com";

export const metadata: Metadata = {
  title: "서비스 소개 — 계산기 & 툴",
  description:
    "calcmoa.com은 연봉·세금·건강·금융 등 일상에서 자주 필요한 계산기를 한 곳에 모아 무료로 제공합니다. 광고 없이 빠르게 쓸 수 있는 참고용 도구 모음입니다.",
  alternates: { canonical: `${BASE_URL}/about` },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-full flex-col bg-neutral-50">
      <div className="border-b border-neutral-200/80 bg-neutral-50">
        <div className="mx-auto w-full max-w-6xl px-4 pt-5 sm:px-6 sm:pt-6 lg:px-8">
          <SiteAppHeader />
        </div>
      </div>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <article className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-2xl font-bold text-neutral-900">서비스 소개</h1>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600">
            <strong>calcmoa.com</strong>은 연봉 실수령액, 퇴직금, 4대보험, 부동산 세금,
            건강 지수, 금융 계산 등 일상과 직장에서 자주 필요한 계산기를 한 곳에 모아
            무료로 제공하는 참고용 도구 모음 사이트입니다.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600">
            복잡한 회원가입 없이, 앱 설치 없이, 광고 클릭 유도 없이 바로 계산하고 결과를
            확인할 수 있도록 설계했습니다. 현재 200개 이상의 계산기와 금융·세금·건강
            분야 심층 가이드를 제공하고 있습니다.
          </p>

          <h2 className="mt-8 text-lg font-bold text-neutral-800">주요 제공 분야</h2>
          <ul className="mt-3 space-y-1.5 text-sm text-neutral-600">
            <li>💰 <strong>직장·급여</strong> — 연봉 실수령, 퇴직금, 4대보험, 야간·연장수당, 육아휴직 급여</li>
            <li>🏠 <strong>부동산·세금</strong> — 취득세, 재산세, 양도소득세, 증여세, 상속세, 전세대출이자</li>
            <li>💹 <strong>금융·투자</strong> — 대출 상환, ISA, 국민연금, 적립식 복리, CAGR</li>
            <li>🏥 <strong>건강</strong> — BMI, 기초대사량, 칼로리 소모, HOMA-IR</li>
            <li>📚 <strong>학교·교육</strong> — 수능 등급, 학점 계산, 장학금 조건</li>
            <li>⚙️ <strong>개발·일상</strong> — 크론 표현식, JWT 디코더, 단위 변환, 교통범칙금</li>
          </ul>

          <h2 className="mt-8 text-lg font-bold text-neutral-800">면책 사항</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600">
            이 사이트의 모든 계산 결과는 <strong>참고용 추정치</strong>입니다. 법령·고시·
            개인 조건에 따라 실제 금액과 다를 수 있습니다. 세금 신고, 급여 계약,
            의료 진단 등 최종 판단에는 반드시 관련 기관 공식 자료와 전문가 확인을 권장합니다.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600">
            법령 기준은 2026년 기준을 원칙으로 하되, 세율·요율 등은 매년 변경될 수 있으므로
            중요한 계산은 국세청·건강보험공단·국민연금공단 등 공식 기관에서 재확인하세요.
          </p>

          <h2 className="mt-8 text-lg font-bold text-neutral-800">문의</h2>
          <p className="mt-3 text-sm text-neutral-600">
            오류 제보, 계산기 추가 요청 등은 사이트 내 피드백 기능을 이용해 주세요.
            콘텐츠 오류나 수정 제안을 환영합니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-neutral-100 pt-6 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">← 계산기 홈으로</Link>
            <Link href="/guide" className="text-blue-600 hover:underline">📖 가이드 보기</Link>
            <Link href="/privacy" className="text-blue-600 hover:underline">개인정보처리방침</Link>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
