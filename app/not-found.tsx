import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "페이지를 찾을 수 없습니다",
  description: "요청하신 페이지가 존재하지 않습니다.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
        <p className="text-6xl font-bold text-neutral-200">404</p>
        <h1 className="mt-4 text-xl font-semibold text-neutral-800">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="mt-2 text-sm text-neutral-500">
          주소가 잘못됐거나 삭제된 페이지입니다.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
        >
          홈으로 돌아가기
        </Link>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            { href: "/tools/job-001", label: "연봉 실수령액" },
            { href: "/tools/health-001", label: "BMI 계산기" },
            { href: "/tools/finance-003", label: "대출 계산기" },
            { href: "/tools/job-003", label: "4대보험 계산기" },
            { href: "/tools/job-002", label: "퇴직금 계산기" },
            { href: "/tools/health-002", label: "칼로리 계산기" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50"
            >
              {label}
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
