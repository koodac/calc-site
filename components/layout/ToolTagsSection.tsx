import { getToolKeywords } from "@/lib/toolKeywords";

type Props = {
  slug: string;
  title: string;
};

/** 계산기 페이지 하단 — SEO 키워드 태그 표시 */
export function ToolTagsSection({ slug, title }: Props) {
  const tags = getToolKeywords(slug);

  return (
    <section className="mt-6 pt-5 border-t border-neutral-100" aria-label="관련 키워드">
      <p className="text-xs font-medium text-neutral-400 mb-2.5">관련 키워드</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-500 hover:bg-neutral-100 transition-colors"
          >
            #{tag}
          </span>
        ))}
        <span className="inline-block rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-500">
          #{title.replace(/\s+/g, "")}
        </span>
      </div>
    </section>
  );
}
