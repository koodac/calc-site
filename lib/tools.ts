import { TOOL_CATALOG_TSV } from "@/lib/tool-catalog-source";

export type ToolCategory =
  | "전체"
  | "직장"
  | "건강"
  | "학교"
  | "금융"
  | "단위"
  | "일상"
  | "스포츠"
  | "군대"
  | "보안"
  | "개발"
  | "게임";

export type ToolItem = {
  slug: string;
  category: Exclude<ToolCategory, "전체">;
  title: string;
  description: string;
  icon: string;
};

const CAT_SLUG_PREFIX: Record<Exclude<ToolCategory, "전체">, string> = {
  직장: "job",
  건강: "health",
  학교: "school",
  금융: "finance",
  단위: "unit",
  일상: "daily",
  스포츠: "sports",
  군대: "military",
  보안: "security",
  개발: "dev",
  게임: "game",
};

function parseCatalog(): ToolItem[] {
  const counts: Partial<Record<Exclude<ToolCategory, "전체">, number>> = {};
  return TOOL_CATALOG_TSV.split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split("|");
      const category = parts[0]?.trim() as Exclude<ToolCategory, "전체">;
      const icon = parts[1]?.trim() ?? "📎";
      const title = parts[2]?.trim() ?? "";
      const description = parts.slice(3).join("|").trim();
      counts[category] = (counts[category] ?? 0) + 1;
      const slug = `${CAT_SLUG_PREFIX[category]}-${String(counts[category]).padStart(3, "0")}`;
      return { slug, category, icon, title, description };
    });
}

export const CATEGORIES: ToolCategory[] = [
  "전체",
  "직장",
  "건강",
  "학교",
  "금융",
  "단위",
  "일상",
  "스포츠",
  "군대",
  "보안",
  "개발",
  "게임",
];

/** 홈 카테고리 탭(전체 제외) */
export const NAV_CATEGORIES: Exclude<ToolCategory, "전체">[] = CATEGORIES.filter(
  (c): c is Exclude<ToolCategory, "전체"> => c !== "전체",
);

export const TOOLS: ToolItem[] = parseCatalog();

const slugIndex = new Map(TOOLS.map((t) => [t.slug, t] as const));

export function getToolBySlug(slug: string): ToolItem | undefined {
  return slugIndex.get(slug);
}

export function getAllSlugs(): string[] {
  return TOOLS.map((t) => t.slug);
}

export function getToolsByCategory(category: ToolCategory): ToolItem[] {
  if (category === "전체") return TOOLS;
  return TOOLS.filter((t) => t.category === category);
}

export function filterTools(query: string, category: ToolCategory): ToolItem[] {
  const base = getToolsByCategory(category);
  const q = query.trim().toLowerCase();
  if (!q) return base;
  return base.filter(
    (t) =>
      t.title.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.slug.toLowerCase().includes(q),
  );
}

export function getRelatedTools(currentSlug: string, limit = 4): ToolItem[] {
  const current = getToolBySlug(currentSlug);
  if (!current) return [];
  return TOOLS.filter((t) => t.category === current.category && t.slug !== currentSlug).slice(0, limit);
}

/**
 * FNV-1a — 서버/클라이언트에서 동일한 정수(부호 없는 32비트)로 변환(하이드레이션 대응).
 */
function hashStringToUint32(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/**
 * `Math.random()` 셔플은 SSR과 브라우저 DOM이 달라져 React 하이드레이션 오류가 납니다.
 * 현재 slug 기준으로만 골라 순서를 고정합니다(같은 페이지에서는 항상 동일).
 */
export function getRandomTools(currentSlug: string, limit = 4): ToolItem[] {
  const pool = TOOLS.filter((t) => t.slug !== currentSlug);
  if (pool.length <= limit) return pool;

  const withScore = pool.map((t) => ({
    t,
    score: hashStringToUint32(`${currentSlug}\0${t.slug}`),
  }));
  withScore.sort((a, b) => (a.score === b.score ? a.t.slug.localeCompare(b.t.slug) : a.score - b.score));
  return withScore.slice(0, limit).map((x) => x.t);
}

/**
 * 브라우저에서만 호출하는 랜덤 셔플.
 * SSR 출력과 달라질 수 있으므로 클라이언트 useEffect 안에서만 사용하세요.
 */
export function pickRandomToolsClient(currentSlug: string, limit = 4): ToolItem[] {
  const pool = TOOLS.filter((t) => t.slug !== currentSlug);
  if (pool.length <= limit) return pool;
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, limit);
}

