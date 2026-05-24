/**
 * 계산기 상단 히어로 배경 이미지
 *
 * `TOOL_HERO_BACKGROUND`에 경로가 없으면 `ToolHeroBanner`가 카테고리·슬러그 기반
 * **자동 생성 비주얼**(그라데이션·패턴·아이콘)을 씁니다. 여기에만 등록하면 **사진/일러스트**로 덮어씁니다.
 *
 * ## 권장 작업 사이즈 (export)
 * - 가로 **1920px** 고정, 세로 **640~960px** (보통 **720px** 한 가운데 잡으면 무난)
 * - `ToolHeroBanner`는 `background-size: cover` + 약간 확대·블러이므로, 중요한 피사체는 **가운데**에 두세요.
 * - 포맷: **WebP** 권장 (용량 대비 선명도). JPG/PNG도 가능.
 *
 * ## 파일 위치
 * `public/tool-hero/` 아래에 저장합니다. 예: `public/tool-hero/1.연봉계산기.webp`
 *
 * ## 작업용 파일명 (번호.제목) ↔ slug
 * 디자인 단계에서는 `1.연봉 계산기.webp`처럼 **카탈로그에 나오는 순서대로** 번호를 매기면 됩니다.
 * 단, **번호는 카테고리마다 1부터 다시 시작**합니다. (직장=job-001…, 건강=health-001…)
 * 브라우저가 자동으로 제목과 slug를 맞춰 주지 않으므로, 아래 `TOOL_HERO_BACKGROUND`에 **반드시** 연결합니다.
 *
 * ### 직장 카테고리 — TSV 순서와 slug (작업명 예시)
 * | 순번 | slug     | 계산기 제목 (참고) |
 * |-----|----------|-------------------|
 * | 1   | job-001  | 연봉 계산기 |
 * | 2   | job-002  | 퇴직금 계산기 |
 * | 3   | job-003  | 공무원 연가보상비 계산기 |
 * | 4   | job-004  | 연봉 인상율 계산기 |
 * | 5   | job-005  | 연봉 인상율 예측 계산기 |
 * | 6   | job-006  | 간이 실업급여 자격 계산기 |
 * | 7   | job-007  | 은퇴자금 계산기 |
 * | 8   | job-008  | 연차 유급휴가 계산기 |
 * | 9   | job-009  | 주휴수당 계산기 |
 * | 10  | job-010  | 달성률 계산기 |
 * | 11  | job-011  | 근무 년수·기간 계산기 |
 * | 12  | job-012  | 근무시간 계산기 |
 * | 13  | job-013  | 경력 계산기 |
 * | 14  | job-014  | 월급 시급 계산기 |
 * | 15  | job-015  | UPH 계산기 |
 * | 16  | job-016  | 성과급 세금 계산기 |
 * | 17  | job-017  | 근로소득세(갑근세) 계산기 |
 * | 18  | job-018  | 최저임금 계산기 |
 * | 19  | job-019  | 4대 보험 계산기 |
 * | 20  | job-020  | 연차수당 계산기 |
 * | 21  | job-021  | 출근율 계산기 |
 * | 22  | job-022  | 중소기업 취업자 소득세 감면 연령 계산기 |
 * | 23  | job-023  | 출산휴가 급여 계산기 |
 * | 24  | job-024  | 육아휴직 급여 계산기 |
 * | 25  | job-025  | 출산휴가·육아휴직 날짜 계산기 |
 * | 26  | job-026  | 근로장려금 지급액 계산기 |
 * | 27  | job-027  | 알바비 계산기 |
 * | 28  | job-028  | 월평균 합산 소득 계산기 |
 *
 * 파일명에 공백·한글이 있어도 동작은 하지만, 이슈가 있으면 `job-001.webp`처럼 slug만 써도 됩니다.
 *
 * 예시 (연봉만 연결한 경우):
 *   "job-001": "/tool-hero/1.연봉계산기.webp",
 */
export type ToolHeroBackground =
  | { mode: "image"; url: string }
  | { mode: "gradient" };

/** 슬러그별 커스텀 배경. 비어 있으면 그라데이션만 사용합니다. */
export const TOOL_HERO_BACKGROUND: Partial<Record<string, string>> = {
  // 이미지를 `public/tool-hero/`에 넣은 뒤, 아래처럼 slug → public 경로 로 연결하세요.
  // "job-001": "/tool-hero/1.연봉계산기.webp",
  // "job-002": "/tool-hero/2.퇴직금계산기.webp",
};

export function resolveToolHeroBackground(slug: string): ToolHeroBackground {
  const path = TOOL_HERO_BACKGROUND[slug];
  if (path?.trim()) {
    return { mode: "image", url: path };
  }
  return { mode: "gradient" };
}
