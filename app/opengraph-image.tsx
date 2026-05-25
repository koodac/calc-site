import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "계산기 & 툴 — 연봉·건강·금융 계산기 모음";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 40%, #f0fdf4 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            marginBottom: 24,
          }}
        >
          🧮
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#0f172a",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 20,
          }}
        >
          계산기 & 툴
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#475569",
            textAlign: "center",
            lineHeight: 1.5,
            maxWidth: 800,
          }}
        >
          연봉·4대보험·퇴직금·BMI·대출·환율 등 자주 쓰는 계산기 170개+
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 22,
            color: "#0ea5e9",
            fontWeight: 600,
          }}
        >
          calcmoa.com
        </div>
      </div>
    ),
    { ...size }
  );
}
