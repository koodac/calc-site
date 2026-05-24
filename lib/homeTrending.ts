/** 홈·도구 상단 순위 UI용 (실제 검색량 아님 — 추후 로그 연동 가능) */
export type TrendDirection = "up" | "down" | "flat";

export type HomeTrendingEntry = {
  rank: number;
  slug: string;
  trend: TrendDirection;
  /** up/down 일 때만 표시, flat 이면 무시 */
  delta: number;
};

export const HOME_TRENDING_TOP10: HomeTrendingEntry[] = [
  { rank: 1, slug: "finance-024", trend: "up", delta: 17 },
  { rank: 2, slug: "job-004", trend: "up", delta: 23 },
  { rank: 3, slug: "unit-001", trend: "up", delta: 5 },
  { rank: 4, slug: "job-001", trend: "up", delta: 12 },
  { rank: 5, slug: "job-015", trend: "down", delta: 1 },
  { rank: 6, slug: "health-001", trend: "up", delta: 8 },
  { rank: 7, slug: "daily-006", trend: "flat", delta: 0 },
  { rank: 8, slug: "finance-010", trend: "down", delta: 3 },
  { rank: 9, slug: "school-005", trend: "up", delta: 4 },
  { rank: 10, slug: "dev-007", trend: "up", delta: 2 },
];
