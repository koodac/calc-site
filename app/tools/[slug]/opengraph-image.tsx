import { ImageResponse } from "next/og";
import { getToolBySlug } from "@/lib/tools";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ slug: string }> };

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  const title = tool?.title ?? "계산기 & 툴";
  const description = tool?.description ?? "빠르고 정확한 온라인 계산기";
  const icon = tool?.icon ?? "🧮";

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
        <div style={{ fontSize: 80, marginBottom: 28 }}>{icon}</div>
        <div
          style={{
            fontSize: 54,
            fontWeight: 700,
            color: "#0f172a",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 20,
            maxWidth: 900,
          }}
        >
          {title}
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
          {description}
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
