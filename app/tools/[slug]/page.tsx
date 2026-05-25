import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DevPreviewBar } from "@/components/DevPreviewBar";
import { CalculatorRouter } from "@/components/calculators/CalculatorRouter";
import { ToolGuideFooter } from "@/components/tool-guide/ToolGuideFooter";
import { SiteAppHeader } from "@/components/layout/SiteAppHeader";
import { RelatedToolsSection } from "@/components/layout/RelatedToolsSection";
import { ToolEngagementSection } from "@/components/layout/ToolEngagementSection";
import { ToolHeroBanner } from "@/components/layout/ToolHeroBanner";
import { ToolMobileBottomNav } from "@/components/layout/ToolMobileBottomNav";
import { ToolSidebarAdRail } from "@/components/layout/ToolSidebarAdRail";
import { ToolTagsSection } from "@/components/layout/ToolTagsSection";
import { resolveCalculatorKind } from "@/lib/calculatorKind";
import { getAllSlugs, getToolBySlug } from "@/lib/tools";
import { getToolKeywords } from "@/lib/toolKeywords";

const BASE_URL = "https://www.calcmoa.com";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) {
    return { title: "도구를 찾을 수 없습니다" };
  }
  const title = `${tool.title} — 계산기 & 툴`;
  const url = `${BASE_URL}/tools/${slug}`;
  const keywords = getToolKeywords(slug);
  return {
    title,
    description: tool.description,
    keywords,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url,
      title,
      description: tool.description,
      siteName: "계산기 & 툴",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: tool.description,
    },
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const kind = resolveCalculatorKind(tool);
  const keywords = getToolKeywords(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.title,
    description: tool.description,
    url: `${BASE_URL}/tools/${slug}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    inLanguage: "ko-KR",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
    },
    keywords: keywords.join(", "),
    provider: {
      "@type": "Organization",
      name: "계산기 & 툴",
      url: BASE_URL,
    },
  };

  return (
    <div className="flex min-h-full flex-col bg-neutral-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="border-b border-neutral-200/80 bg-neutral-50">
        <div className="mx-auto w-full max-w-6xl px-4 pt-5 sm:px-6 sm:pt-6 lg:px-8">
          <SiteAppHeader />
        </div>
      </div>

      <ToolHeroBanner tool={tool} />

      <div className="mx-auto w-full max-w-6xl flex-1 px-3 pb-24 pt-5 sm:px-6 sm:py-8 md:grid md:grid-cols-[minmax(0,1fr)_200px] md:gap-8 md:py-9 md:pb-9 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-10 lg:px-8 lg:py-10">
        <article className="mx-auto min-w-0 w-full max-w-3xl rounded-xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-6 md:mx-0 md:max-w-none md:p-7 lg:p-8">
          <DevPreviewBar slug={slug} kind={kind} />

          <div className="mt-5 sm:mt-7 md:mt-8">
            <CalculatorRouter tool={tool} />
          </div>

          <ToolEngagementSection tool={tool} />
          <ToolGuideFooter slug={slug} />
          <ToolTagsSection slug={slug} title={tool.title} />
          <RelatedToolsSection current={tool} />
        </article>

        <aside className="mt-6 hidden w-full min-w-0 md:mt-0 md:block md:max-w-[200px] lg:max-w-[280px]">
          <ToolSidebarAdRail />
        </aside>
      </div>
      <ToolMobileBottomNav />
    </div>
  );
}
