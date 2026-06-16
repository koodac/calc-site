import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteAppHeader } from "@/components/layout/SiteAppHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  GuideH2,
  GuideH3,
  GuideP,
  GuideFormulaBox,
  GuideBulletList,
  GuideTable,
  GuideFaq,
  AdSlot,
} from "@/components/tool-guide/toolGuideBlocks";
import {
  getAllGuideSlugs,
  getGuideArticle,
  type GuideSection,
} from "@/lib/guideArticles";
import { getToolBySlug } from "@/lib/tools";

const BASE_URL = "https://www.calcmoa.com";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getGuideArticle(slug);
  if (!article) return { title: "가이드를 찾을 수 없습니다" };

  const url = `${BASE_URL}/guide/${slug}`;
  return {
    title: `${article.title} — 계산기 & 툴`,
    description: article.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      locale: "ko_KR",
      url,
      title: article.title,
      description: article.description,
      siteName: "계산기 & 툴",
      publishedTime: article.publishedAt,
    },
  };
}

function renderSection(section: GuideSection, idx: number) {
  switch (section.type) {
    case "h2":
      return <GuideH2 key={idx}>{section.text}</GuideH2>;
    case "h3":
      return <GuideH3 key={idx}>{section.text}</GuideH3>;
    case "p":
      return <GuideP key={idx}>{section.text}</GuideP>;
    case "formula":
      return <GuideFormulaBox key={idx}>{section.text}</GuideFormulaBox>;
    case "bullets":
      return <GuideBulletList key={idx} items={section.items} />;
    case "table":
      return <GuideTable key={idx} headers={section.headers} rows={section.rows} />;
    case "faq":
      return (
        <div key={idx}>
          <GuideH2>자주 묻는 질문</GuideH2>
          <GuideFaq items={section.items} />
        </div>
      );
    case "ad":
      return <AdSlot key={idx} />;
    default:
      return null;
  }
}

export default async function GuideArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getGuideArticle(slug);
  if (!article) notFound();

  const faqSection = article.sections.find((s) => s.type === "faq");
  const faqItems = faqSection && faqSection.type === "faq" ? faqSection.items : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "가이드", item: `${BASE_URL}/guide` },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${BASE_URL}/guide/${slug}`,
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${BASE_URL}/guide/${slug}`,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    inLanguage: "ko-KR",
    publisher: {
      "@type": "Organization",
      name: "계산기 & 툴",
      url: BASE_URL,
    },
  };

  const faqJsonLd = faqItems
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      }
    : null;

  return (
    <div className="flex min-h-full flex-col bg-neutral-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <div className="border-b border-neutral-200/80 bg-neutral-50">
        <div className="mx-auto w-full max-w-6xl px-4 pt-5 sm:px-6 sm:pt-6 lg:px-8">
          <SiteAppHeader />
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="mx-auto w-full max-w-4xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-1.5 text-xs text-neutral-400">
          <Link href="/" className="hover:text-neutral-600">홈</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-neutral-600">가이드</Link>
          <span>/</span>
          <span className="text-neutral-600">{article.category}</span>
        </nav>
      </div>

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <article className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">
          {/* Header */}
          <header className="mb-6 border-b border-neutral-100 pb-5">
            <span className="mb-2 inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
              {article.category}
            </span>
            <h1 className="mt-2 text-xl font-bold leading-snug tracking-tight text-neutral-900 sm:text-2xl">
              {article.title}
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
              {article.description}
            </p>
            <p className="mt-3 text-xs text-neutral-400">
              최종 업데이트: {article.publishedAt.replace(/-/g, ". ")}
            </p>
          </header>

          {/* Content */}
          <div>
            {article.sections.map((section, idx) => renderSection(section, idx))}
          </div>

          {/* Related tool links */}
          {(() => {
            const slugs = article.relatedToolSlugs ?? (article.relatedToolSlug ? [article.relatedToolSlug] : []);
            if (slugs.length === 0) return null;
            const tools = slugs.map((s) => ({ slug: s, tool: getToolBySlug(s) })).filter((t) => t.tool);
            if (tools.length === 0) return null;
            return (
              <div className="mt-8 rounded-lg border border-blue-100 bg-blue-50 px-4 py-4">
                <p className="mb-2 text-sm font-medium text-blue-800">
                  🧮 이 가이드와 함께 사용하면 좋은 계산기
                </p>
                <ul className="space-y-1">
                  {tools.map(({ slug: toolSlug, tool }) => (
                    <li key={toolSlug}>
                      <Link
                        href={`/tools/${toolSlug}`}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        {tool!.icon} {tool!.title} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })()}
        </article>

        {/* Back to guide list */}
        <div className="mt-6 text-center">
          <Link
            href="/guide"
            className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-800 hover:underline"
          >
            ← 가이드 목록으로 돌아가기
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
