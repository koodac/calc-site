import type { CSSProperties } from "react";
import type { ToolItem } from "@/lib/tools";

/** FNV-1a — 슬러그마다 안정적인 난수 느낌의 값 */
function fnv1a(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** 카테고리 기본 색각(도) — 같은 카테고리는 비슷한 톤, 슬러그로 미세 변주 */
const CAT_HUE: Record<ToolItem["category"], number> = {
  직장: 218,
  건강: 162,
  학교: 268,
  금융: 42,
  단위: 202,
  일상: 32,
  스포츠: 16,
  군대: 98,
  보안: 286,
  개발: 192,
  게임: 312,
};

export type ToolHeroArt = {
  baseGradient: string;
  orbA: CSSProperties;
  orbB: CSSProperties;
  gridOpacity: number;
  iconOpacity: number;
  iconRotateDeg: number;
};

export function getToolHeroArt(tool: ToolItem): ToolHeroArt {
  const h = fnv1a(tool.slug);
  const base = CAT_HUE[tool.category];
  const drift = (h % 34) - 17;
  const h1 = (base + drift + 360) % 360;
  const h2 = (h1 + 14 + ((h >>> 7) % 22)) % 360;
  const h3 = (h1 - 10 - ((h >>> 15) % 18) + 360) % 360;

  /* 명도 너무 낮으면 + 위쪽 어두운 오버레이까지 겹쳐 ‘그냥 검정’처럼 보임 */
  const baseGradient = `linear-gradient(145deg, hsl(${h1} 42% 30%) 0%, hsl(${h2} 38% 22%) 45%, hsl(${h3} 45% 16%) 100%)`;

  const x1 = 62 + (h % 28);
  const y1 = 8 + ((h >>> 4) % 42);
  const x2 = 8 + ((h >>> 9) % 38);
  const y2 = 55 + ((h >>> 13) % 35);
  const s1 = 260 + (h % 140);
  const s2 = 200 + ((h >>> 5) % 110);

  const orbA: CSSProperties = {
    left: `${x1}%`,
    top: `${y1}%`,
    width: s1,
    height: s1,
    transform: "translate(-50%, -50%)",
    background: `radial-gradient(circle, hsl(${h2} 55% 58% / 0.45) 0%, transparent 68%)`,
  };

  const orbB: CSSProperties = {
    left: `${x2}%`,
    top: `${y2}%`,
    width: s2,
    height: s2,
    transform: "translate(-50%, -50%)",
    background: `radial-gradient(circle, hsl(${h3} 50% 52% / 0.35) 0%, transparent 62%)`,
  };

  const gridOpacity = 0.06 + (h % 8) / 400;
  const iconOpacity = 0.18 + (h % 6) / 200;
  const iconRotateDeg = -8 + (h % 17);

  return { baseGradient, orbA, orbB, gridOpacity, iconOpacity, iconRotateDeg };
}
