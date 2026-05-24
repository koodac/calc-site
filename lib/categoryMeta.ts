import type { ToolCategory } from "@/lib/tools";

export const CATEGORY_EMOJI: Record<Exclude<ToolCategory, "전체">, string> = {
  직장: "📂",
  건강: "🏥",
  학교: "📚",
  금융: "💰",
  단위: "📐",
  일상: "🏠",
  스포츠: "⚾",
  군대: "🪖",
  보안: "🔒",
  개발: "💻",
  게임: "🎮",
};
