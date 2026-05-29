import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "계산기 & 툴 서비스의 개인정보처리방침입니다.",
  alternates: { canonical: "https://www.calcmoa.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-12">
        <Link href="/" className="text-sm text-blue-600 hover:underline">
          ← 홈으로
        </Link>

        <h1 className="mt-6 text-2xl font-bold text-neutral-900">개인정보처리방침</h1>
        <p className="mt-1 text-sm text-neutral-500">최종 수정일: 2026년 5월 29일</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-neutral-700">

          <section>
            <h2 className="mb-2 text-base font-semibold text-neutral-900">1. 총칙</h2>
            <p>
              계산기 &amp; 툴 (이하 "본 사이트", https://www.calcmoa.com)은 이용자의 개인정보를
              중요하게 생각하며, 「개인정보 보호법」 등 관련 법령을 준수합니다.
              본 방침은 본 사이트가 어떤 정보를 수집하고 어떻게 사용하는지 안내합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-neutral-900">2. 수집하는 개인정보</h2>
            <p>본 사이트는 회원가입이 없으며 별도의 개인정보를 직접 수집하지 않습니다.</p>
            <p className="mt-2">
              단, 아래 제3자 서비스를 통해 자동으로 수집될 수 있습니다.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Google Analytics — 방문자 수, 페이지뷰, 접속 국가 등 통계 정보 (익명)</li>
              <li>Google AdSense — 광고 게재를 위한 쿠키 및 관심사 기반 데이터</li>
              <li>쿠팡 파트너스 — 광고 클릭 및 구매 추적 (쿠팡 개인정보처리방침 적용)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-neutral-900">3. 쿠키 사용</h2>
            <p>
              본 사이트는 Google Analytics 및 Google AdSense의 작동을 위해 쿠키를 사용합니다.
              브라우저 설정에서 쿠키를 거부할 수 있으나, 일부 기능이 제한될 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-neutral-900">4. 계산기 입력값</h2>
            <p>
              계산기에 입력하는 모든 값(연봉, 나이, 체중 등)은 브라우저 내에서만 처리되며
              서버로 전송되거나 저장되지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-neutral-900">5. 제3자 서비스</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Google 개인정보처리방침:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  policies.google.com/privacy
                </a>
              </li>
              <li>
                쿠팡 개인정보처리방침:{" "}
                <a
                  href="https://www.coupang.com/np/member/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  coupang.com/np/member/privacy
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-neutral-900">6. 개인정보 보호책임자</h2>
            <p>
              본 방침과 관련한 문의는 사이트 내 피드백 기능을 이용해 주세요.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-neutral-900">7. 방침 변경</h2>
            <p>
              본 방침은 법령 또는 서비스 변경에 따라 수정될 수 있으며,
              변경 시 이 페이지에 공지합니다.
            </p>
          </section>

        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
