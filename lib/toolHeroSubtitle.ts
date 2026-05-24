import type { ToolItem } from "@/lib/tools";

/** 슬러그별 히어로 부제 (카탈로그 설명보다 한 단계 구체적으로) */
const HERO_COPY_OVERRIDE: Partial<Record<string, string>> = {
  "job-001":
    "공제액을 제외한 월 예상 실수령액을 계산해 주는 연봉 계산기입니다. 4대 보험·간이세액 등은 참고용 추정입니다.",
};

const JOB_SUBTITLE_SUFFIX =
  "고시·세법·회사 규정에 따라 실제와 다를 수 있으며, 이 페이지는 빠른 참고용입니다.";

/**
 * `ToolHeroBanner` 부제: 연봉(job-001)은 커스텀 문구, 직장 나머지는 설명 + 공통 안내, 그 외는 카탈로그 설명.
 */
export function resolveToolHeroSubtitle(tool: ToolItem): string {
  const custom = HERO_COPY_OVERRIDE[tool.slug];
  if (custom) return custom;
  if (tool.category === "직장") {
    return `${tool.description} ${JOB_SUBTITLE_SUFFIX}`;
  }
  return tool.description;
}
