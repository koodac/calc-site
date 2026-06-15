import type { Metadata } from "next";
import Link from "next/link";
import { SiteAppHeader } from "@/components/layout/SiteAppHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getAllGuideArticles } from "@/lib/guideArticles";

const BASE_URL = "https://www.calcmoa.com";

export const metadata: Metadata = {
  title: "금융·세금·건강 완전 가이드 — 계산기 & 툴",
  description:
    "연봉 실수령액, 퇴직금, 4대보험, 부동산 세금, 증여·상속세, 종합소득세, ISA 투자까지 — 정확한 계산 공식과 절세 전략을 담은 완전 가이드 모음입니다.",
  alternates: { canonical: `${BASE_URL}/guide` },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: `${BASE_URL}/guide`,
    title: "금융·세금·건강 완전 가이드",
    description:
      "연봉·퇴직금·4대보험·부동산세금·ISA 등 생활 밀착형 재무·세금 가이드 모음",
    siteName: "계산기 & 툴",
  },
};

const CATEGORY_ORDER = ["급여·세금", "부동산·세금", "재무·투자", "건강", "교육"];

const CATEGORY_COLORS: Record<string, string> = {
  "급여·세금": "bg-blue-50 text-blue-700",
  "부동산·세금": "bg-orange-50 text-orange-700",
  "재무·투자": "bg-green-50 text-green-700",
  "건강": "bg-rose-50 text-rose-700",
  "교육": "bg-purple-50 text-purple-700",
};

export default function GuidePage() {
  const articles = getAllGuideArticles();

  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    articles: articles.filter((a) => a.category === cat),
  })).filter((g) => g.articles.length > 0);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "가이드", item: `${BASE_URL}/guide` },
    ],
  };

  return (
    <div className="flex min-h-full flex-col bg-neutral-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="border-b border-neutral-200/80 bg-neutral-50">
        <div className="mx-auto w-full max-w-6xl px-4 pt-5 sm:px-6 sm:pt-6 lg:px-8">
          <SiteAppHeader />
        </div>
      </div>

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            금융·세금·건강 완전 가이드
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-neutral-500 sm:text-base">
            연봉·퇴직금·4대보험·부동산 세금·종합소득세·ISA까지 —{" "}
            <br className="hidden sm:inline" />
            정확한 계산 공식과 절세 전략을 담은 생활 밀착형 가이드 모음
          </p>
        </div>

        {/* Articles by category */}
        <div className="space-y-10">
          {grouped.map(({ category, articles: catArticles }) => (
            <section key={category}>
              <h2 className="mb-4 text-base font-semibold text-neutral-900 sm:text-lg">
                {category}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {catArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/guide/${article.slug}`}
                    className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:border-neutral-300 hover:shadow-md"
                  >
                    <span
                      className={`mb-3 inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${CATEGORY_COLORS[article.category] ?? "bg-neutral-100 text-neutral-600"}`}
                    >
                      {article.category}
                    </span>
                    <h3 className="text-sm font-semibold leading-snug text-neutral-900 group-hover:text-blue-600 sm:text-[15px]">
                      {article.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-neutral-500 sm:text-sm">
                      {article.description}
                    </p>
                    <span className="mt-3 text-xs font-medium text-blue-600">
                      자세히 읽기 →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
