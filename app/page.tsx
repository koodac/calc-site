import { CatalogSection } from "@/components/CatalogSection";
import { SiteFooter } from "@/components/SiteFooter";

const BASE_URL = "https://calc-site-eight.vercel.app";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "계산기 & 툴",
  description:
    "연봉 실수령액, 4대 보험, 퇴직금, BMI, 대출 상환, 환율 등 자주 쓰는 계산기를 모아둔 빠른 참고용 도구 모음입니다.",
  url: BASE_URL,
  inLanguage: "ko-KR",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "계산기 & 툴",
  url: BASE_URL,
  description: "연봉·건강·금융·학교 관련 계산기를 무료로 제공하는 도구 모음 사이트",
};

type HomePageProps = {
  searchParams?: Promise<{ mobileTab?: string }>;
};

export default async function Home({ searchParams }: HomePageProps) {
  const params = searchParams ? await searchParams : undefined;
  const tab = params?.mobileTab;
  const initialMobileTab =
    tab === "favorites" || tab === "menu" || tab === "home" ? tab : "home";

  return (
    <div className="flex min-h-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-24 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8">
        <CatalogSection initialMobileTab={initialMobileTab} />
      </main>
      <SiteFooter />
    </div>
  );
}
