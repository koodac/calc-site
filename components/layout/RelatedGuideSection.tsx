import Link from "next/link";
import { getGuidesByToolSlug } from "@/lib/guideArticles";

type Props = { slug: string };

export function RelatedGuideSection({ slug }: Props) {
  const guides = getGuidesByToolSlug(slug);
  if (guides.length === 0) return null;

  return (
    <div className="mt-6 rounded-lg border border-emerald-100 bg-emerald-50 px-4 py-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-emerald-700">
        📖 함께 읽으면 좋은 가이드
      </p>
      <ul className="space-y-1.5">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link
              href={`/guide/${guide.slug}`}
              className="block text-sm text-emerald-800 hover:underline"
            >
              → {guide.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
