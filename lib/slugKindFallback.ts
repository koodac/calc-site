import type { CalculatorKind } from "@/lib/calculatorKind";

/**
 * 제목 매칭이 빠진 카탈로그 항목을 기존 계산기 종류에 연결합니다.
 * (법·세무 정확도보다 ‘입력·결과 화면이 뜨는 것’을 우선 — 도구별 문구는 각 폼 주의사항 참고)
 */
export const SLUG_KIND_FALLBACK: Partial<Record<string, CalculatorKind>> = {
  // 직장
  "job-006": "percentChange",
  "job-007": "compoundSavings",
  "job-016": "discount",
  "job-017": "vat",
  "job-022": "ageInternational",
  "job-023": "unusedAnnualPay",
  "job-024": "unusedAnnualPay",
  "job-025": "dateDiffDetailed",
  "job-026": "currency",
  // 건강
  "health-005": "ffmi",
  "health-006": "proteinIntake",
  "health-009": "standardWeight",
  "health-014": "ffmi",
  "health-015": "oneRm",
  "health-018": "bmi",
  "health-022": "tdee",
  // 학교
  "school-002": "average",
  "school-004": "gcd",
  "school-005": "average",
  "school-006": "modulo",
  "school-007": "average",
  "school-014": "average",
  "school-015": "charCount",
  "school-016": "percentChange",
  "school-017": "average",
  "school-019": "average",
  "school-022": "percentChange",
  // 금융
  "finance-002": "compoundSavings",
  "finance-003": "roi",
  "finance-007": "mortgageEqualPayment",
  "finance-008": "discount",
  "finance-014": "margin",
  "finance-015": "cagr",
  "finance-016": "roi",
  "finance-023": "apyEffective",
  "finance-027": "percentChange",
  // 단위
  "unit-004": "inchCm",
  "unit-005": "pyeongM2",
  "unit-006": "pyeongM2",
  "unit-007": "byteUnit",
  "unit-008": "radixConvert",
  "unit-009": "inchCm",
  "unit-010": "parallelResistor",
  "unit-011": "radixConvert",
  "unit-012": "pyeongM2",
  "unit-013": "byteUnit",
  "unit-016": "electricityEstimate",
  "unit-017": "electricityEstimate",
  "unit-018": "inchCm",
  // 일상
  "daily-002": "vat",
  "daily-004": "dday",
  "daily-009": "dday",
  "daily-011": "dday",
  "daily-012": "dday",
  "daily-013": "fuelCost",
  // 개발
  "dev-008": "randomPassword",
  "dev-011": "colorHexRgb",
  // 게임
  "game-002": "roas",
  "game-003": "percentChange",
  "game-007": "lotto645",
  // 군대 (제목 매칭·카테고리 단독 분기 제거 후 슬러그로 고정)
  "military-001": "compoundSavings",
  "military-002": "airForceWeightedScore",
  "military-003": "marineClassEstimate",
  "military-004": "dischargeDateEstimate",
  // 스포츠
  "sports-003": "vdotEstimate",
  "sports-005": "bowlingPinSum",
  "sports-006": "curlingEndSum",
};
