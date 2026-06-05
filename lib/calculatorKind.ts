import type { ToolItem } from "@/lib/tools";
import { SLUG_KIND_FALLBACK } from "@/lib/slugKindFallback";

/**
 * UI/로직 단위로 묶은 계산기 종류. 같은 종류를 여러 도구 제목이 공유할 수 있습니다.
 */
export type CalculatorKind =
  | "salary"
  | "severancePay"
  | "dailyRateMoney"
  | "salaryRaisePercent"
  | "salaryForecast"
  | "annualLeaveDays"
  | "weeklyHolidayPay"
  | "achievementRate"
  | "dateDiffDetailed"
  | "workMinutes"
  | "monthlyToHourly"
  | "unitsPerHour"
  | "minimumWage"
  | "fourInsuranceWorker"
  | "unusedAnnualPay"
  | "attendanceRate"
  | "partTimeWeeklyPay"
  | "listAverage"
  | "bmi"
  | "bmr"
  | "standardWeight"
  | "proteinIntake"
  | "waterIntake"
  | "sleepCycle"
  | "stepsCalories"
  | "heatIndex"
  | "oneRm"
  | "biorhythm"
  | "heartRateReserve"
  | "tdee"
  | "ffmi"
  | "bsa"
  | "creatinineClearance"
  | "egfr"
  | "friedewaldLdl"
  | "ovulation"
  | "bacWidmark"
  | "neisCounter"
  | "charCount"
  | "lcm"
  | "gcd"
  | "fractionDecimal"
  | "average"
  | "modulo"
  | "permutation"
  | "fibonacci"
  | "factorial"
  | "percentChange"
  | "vat"
  | "discount"
  | "currency"
  | "cagr"
  | "roi"
  | "roas"
  | "mortgageEqualPayment"
  | "compoundSavings"
  | "margin"
  | "ratioPER"
  | "ratioPBR"
  | "ratioROE"
  | "apyEffective"
  | "cpm"
  | "breakevenRecovery"
  | "pyeongM2"
  | "temperature"
  | "inchCm"
  | "byteUnit"
  | "parallelResistor"
  | "speedDistanceTime"
  | "haversineKm"
  | "fuelCost"
  | "dday"
  | "electricityEstimate"
  | "ageInternational"
  | "dutchPay"
  | "tip"
  | "battingSlash"
  | "runningPace"
  | "eraBaseball"
  | "randomPassword"
  | "caesarCipher"
  | "uuid"
  | "randomApiKey"
  | "subnetMask"
  | "base64"
  | "urlEncode"
  | "radixConvert"
  | "jsonLint"
  | "morseCode"
  | "colorHexRgb"
  | "gachaChance"
  | "lotto645"
  | "edpi"
  | "coinFlip"
  | "fovHorizontal"
  | "referenceStub"
  | "rsaStub"
  | "hashStub"
  | "regexTester"
  | "bowlingPinSum"
  | "curlingEndSum"
  | "vdotEstimate"
  | "airForceWeightedScore"
  | "marineClassEstimate"
  | "dischargeDateEstimate"
  | "ppmConcentration"
  | "perimeter"
  | "densityCalc"
  | "polynomialFactor"
  | "gaussianElimination"
  | "incomeTaxMonthly"
  | "bonusTax"
  | "unemploymentBenefit"
  | "parentalLeavePay"
  | "subscriptionScore"
  | "qrCodeGen"
  | "lunarCalendar"
  | "onlineTimer"
  | "mortgageCompare"
  | "prepaymentCalc"
  | "jeonwolse"
  | "gallonLiter"
  | "buildingCoverage"
  | "floorAreaRatio"
  | "dmsConvert"
  | "slopeAngle"
  | "radianConvert"
  | "cubicMeter"
  | "wattCalc"
  | "decibelCalc"
  | "unitConvert"
  | "schoolRank"
  | "gpaCalc"
  | "confidenceInterval"
  | "speechTime"
  | "pValueZ"
  | "weightedAvg"
  | "correlation"
  | "heightPercentile"
  | "caffeineIntake"
  | "maternityPay"
  | "eitcPay"
  | "overspendRatio"
  | "jeonseVsMonthly"
  | "straightLineDepreciation"
  | "ebitdaCalc"
  | "aprCalc"
  | "fifaFee"
  | "rouletteSpinner"
  | "withholdingTax"
  | "carTax"
  // 신규 추가 (2026.06)
  | "overtimePay"
  | "severanceTax"
  | "parentalHoursReduction"
  | "salaryReverse"
  | "localHealthInsurance"
  | "capitalGainsTax"
  | "giftTax"
  | "inheritanceTax"
  | "globalIncomeTax"
  | "isaTaxFree"
  | "acquisitionTax"
  | "propertyTax"
  | "jeonseLoanInterest"
  | "rentTaxCredit"
  | "nationalPensionEstimate"
  | "vehicleDepreciation"
  | "metCalories"
  | "homaIr"
  | "csatGrade"
  | "trafficFine"
  | "cronExpression"
  | "jwtDecoder";

export function resolveCalculatorKind(tool: ToolItem): CalculatorKind {
  const { slug, title: T } = tool;

  if (slug === "job-001") return "salary";
  /** 카탈로그 2번째 직장 도구 — 제목 매칭 실패·인코딩 이슈에도 고정 분기 */
  if (slug === "job-002") return "severancePay";

  const slugFallback = SLUG_KIND_FALLBACK[slug];
  if (slugFallback) return slugFallback;

  if (T.includes("연봉 인상율 예측")) return "salaryForecast";
  if (T.includes("연봉 인상율")) return "salaryRaisePercent";
  if (T.includes("연차 유급") || T.includes("연차 일수")) return "annualLeaveDays";
  if (T.includes("주휴수당")) return "weeklyHolidayPay";
  if (T.includes("달성률")) return "achievementRate";
  if (T.includes("근무 년수") || T.includes("경력 계산기") || T.includes("입사일")) return "dateDiffDetailed";
  if (T.includes("근무시간 계산기")) return "workMinutes";
  if (T.includes("월급 시급")) return "monthlyToHourly";
  if (T.includes("UPH")) return "unitsPerHour";
  if (T.includes("최저임금")) return "minimumWage";
  if (T.includes("4대 보험")) return "fourInsuranceWorker";
  if (T.includes("연차수당")) return "unusedAnnualPay";
  if (T.includes("출근율")) return "attendanceRate";
  if (T.includes("알바비")) return "partTimeWeeklyPay";
  if (T.includes("월평균 합산")) return "listAverage";
  if (T.includes("퇴직금 IRP") || T.includes("퇴직소득세")) return "severanceTax";
  if (T.includes("퇴직금")) return "severancePay";
  if (T.includes("연가보상")) return "dailyRateMoney";
  if (T.includes("야간") && T.includes("연장") && T.includes("수당")) return "overtimePay";
  if (T.includes("육아기 근로시간 단축")) return "parentalHoursReduction";
  if (T.includes("연봉 역산")) return "salaryReverse";
  if (T.includes("지역가입자")) return "localHealthInsurance";

  if (T.includes("BMI")) return "bmi";
  if (T.includes("BMR") || T.includes("기초대사량")) return "bmr";
  if (T.includes("표준 체중")) return "standardWeight";
  if (T.includes("단백질")) return "proteinIntake";
  if (T.includes("물 섭취")) return "waterIntake";
  if (T.includes("수면 사이클")) return "sleepCycle";
  if (T.includes("걸음 수")) return "stepsCalories";
  if (T.includes("체감 온도")) return "heatIndex";
  if (T.includes("1RM")) return "oneRm";
  if (T.includes("바이오 리듬")) return "biorhythm";
  if (T.includes("심박수")) return "heartRateReserve";
  if (T.includes("TDEE")) return "tdee";
  if (T.includes("FFMI")) return "ffmi";
  if (T.includes("CrCl")) return "creatinineClearance";
  if (T.includes("BSA")) return "bsa";
  if (T.includes("배란일")) return "ovulation";
  if (T.includes("eGFR")) return "egfr";
  if (T.includes("MET") && T.includes("칼로리")) return "metCalories";
  if (T.includes("HOMA-IR") || T.includes("인슐린 저항성")) return "homaIr";
  if (T.includes("콜레스테롤")) return "friedewaldLdl";
  if (T.includes("혈중알코올") || T.includes("BAC")) return "bacWidmark";

  if (T.includes("NEIS")) return "neisCounter";
  if (T.includes("글자수")) return "charCount";
  if (T.includes("최소 공배수")) return "lcm";
  if (T.includes("최대 공약수")) return "gcd";
  if (T.includes("분수") && T.includes("소수")) return "fractionDecimal";
  if (T.includes("평균 계산기")) return "average";
  if (T.includes("나머지 계산기")) return "modulo";
  if (T.includes("경우의 수") || T.includes("순열")) return "permutation";
  if (T.includes("피보나치")) return "fibonacci";
  if (T.includes("팩토리얼")) return "factorial";

  if (T.includes("수능 등급")) return "csatGrade";
  if (T.includes("퍼센트 계산기") || T.includes("증감율") || T.includes("오차율")) return "percentChange";
  if (T.includes("부가세")) return "vat";
  if (T.includes("할인 계산기")) return "discount";
  if (T.includes("환율")) return "currency";
  if (T.includes("CAGR")) return "cagr";
  if (T.includes("ROI") || T.includes("수익률")) return "roi";
  if (T.includes("ROAS")) return "roas";
  if (T.includes("원리금 균등")) return "mortgageEqualPayment";
  if (T.includes("적립식 복리") || T.includes("적금 이자")) return "compoundSavings";
  if (T.includes("마진")) return "margin";
  if (T.includes("PER")) return "ratioPER";
  if (T.includes("PBR")) return "ratioPBR";
  if (T.includes("ROE")) return "ratioROE";
  if (T.includes("APY")) return "apyEffective";
  if (T.includes("CPM")) return "cpm";
  if (T.includes("손절 복구")) return "breakevenRecovery";

  if (T.includes("평수") || T.includes("㎡")) return "pyeongM2";
  if (T.includes("온도 계산기")) return "temperature";
  if (T.includes("인치")) return "inchCm";
  if (T.includes("용량 계산기") || T.includes("Byte")) return "byteUnit";
  if (T.includes("병렬 저항")) return "parallelResistor";
  if (T.includes("속도") && T.includes("거리")) return "speedDistanceTime";
  if (T.includes("좌표 거리") || T.includes("Haversine")) return "haversineKm";

  if (T.includes("기름값")) return "fuelCost";
  if (T.includes("글자수 계산기") && !T.includes("NEIS")) return "charCount";
  if (T.includes("D-day")) return "dday";
  if (T.includes("전기요금")) return "electricityEstimate";
  if (T.includes("만나이")) return "ageInternational";
  if (T.includes("더치 페이")) return "dutchPay";
  if (T.includes("팁 계산기")) return "tip";

  if (T.includes("타율 계산기")) return "battingSlash";
  if (T.includes("러닝 페이스")) return "runningPace";
  if (T.includes("ERA")) return "eraBaseball";

  if (T.includes("무작위 비밀번호")) return "randomPassword";
  if (T.includes("카이사르")) return "caesarCipher";
  if (T.includes("RSA")) return "rsaStub";
  if (T.includes("해시 생성")) return "hashStub";

  if (T.includes("UUID")) return "uuid";
  if (T.includes("API Key")) return "randomApiKey";
  if (T.includes("서브넷") || T.includes("CIDR")) return "subnetMask";
  if (T.includes("Base64")) return "base64";
  if (T.includes("URL 인코더")) return "urlEncode";
  if (T.includes("진법")) return "radixConvert";
  if (T.includes("JSON 유효성")) return "jsonLint";
  if (T.includes("모스부호")) return "morseCode";
  if ((T.includes("색상") && T.includes("HEX")) || T.includes("WCAG") || T.includes("RGB 대비"))
    return "colorHexRgb";
  if (T.includes("색상 도구")) return "colorHexRgb";
  if (T.includes("정규")) return "regexTester";

  if (T.includes("가챠 확률") || T.includes("독립시행")) return "gachaChance";
  if (T.includes("로또 번호")) return "lotto645";
  if (T.includes("eDPI")) return "edpi";
  if (T.includes("동전 던지기")) return "coinFlip";
  if (T.includes("배율") && T.includes("FOV")) return "fovHorizontal";
  if (T.includes("볼링 점수")) return "bowlingPinSum";
  if (T.includes("컬링 점수")) return "curlingEndSum";
  if (T.includes("VDOT")) return "vdotEstimate";
  if (T.includes("공군 점수")) return "airForceWeightedScore";
  if (T.includes("해병대 기수")) return "marineClassEstimate";
  if (T.includes("전역일")) return "dischargeDateEstimate";
  if (T.includes("군 적금")) return "compoundSavings";

  if (T.includes("원리금균등 vs")) return "mortgageCompare";
  if (T.includes("중도상환 시뮬")) return "prepaymentCalc";
  if (T.includes("전월세 전환율")) return "jeonwolse";
  if (T.includes("양도소득세")) return "capitalGainsTax";
  if (T.includes("증여세")) return "giftTax";
  if (T.includes("상속세")) return "inheritanceTax";
  if (T.includes("종합소득세")) return "globalIncomeTax";
  if (T.includes("ISA 비과세")) return "isaTaxFree";
  if (T.includes("취득세")) return "acquisitionTax";
  if (T.includes("재산세")) return "propertyTax";
  if (T.includes("전세대출 이자")) return "jeonseLoanInterest";
  if (T.includes("월세 세액공제")) return "rentTaxCredit";
  if (T.includes("국민연금 예상")) return "nationalPensionEstimate";
  if (T.includes("자동차 감가상각")) return "vehicleDepreciation";
  if (T.includes("교통범칙금")) return "trafficFine";
  if (T.includes("크론 표현식")) return "cronExpression";
  if (T.includes("JWT 디코더") || T.includes("JWT")) return "jwtDecoder";

  return "referenceStub";
}
