import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  /** X-Powered-By 헤더 제거 (보안·성능) */
  poweredByHeader: false,

  /** gzip/brotli 압축 활성화 */
  compress: true,

  /** React 엄격 모드 */
  reactStrictMode: true,

  /**
   * 모바일(같은 Wi-Fi)에서 `http://192.168.0.3:3000`로 접속 시
   * 개발 리소스(HMR/클라이언트 번들) 차단을 막기 위한 허용 목록.
   */
  allowedDevOrigins: [
    "192.168.0.3",
    "172.30.1.91",
    "172.30.1.91:3000",
    "localhost:3000",
    "127.0.0.1:3000",
  ],

  async redirects() {
    return [
      // 구 URL → 현재 URL 영구 리다이렉트 (301)
      { source: "/d-day-calc", destination: "/tools/daily-005", permanent: true },
    ];
  },

  async headers() {
    if (process.env.NODE_ENV === "development") {
      return [
        {
          source: "/:path*",
          headers: [
            { key: "Cache-Control", value: "no-store, no-cache, must-revalidate, max-age=0" },
          ],
        },
      ];
    }

    return [
      // 모든 페이지 — 보안 헤더
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      // 정적 파일 — 1년 캐시 (Next.js가 파일명에 해시 포함)
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // 폰트 캐시
      {
        source: "/fonts/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // 이미지 캐시
      {
        source: "/_next/image/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
      // ads.txt — 반드시 text/plain 으로 서빙 (nosniff 헤더와 충돌 방지)
      {
        source: "/ads.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=86400" },
        ],
      },
    ];
  },

  /** 이미지 최적화 설정 */
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
  },
};

export default nextConfig;
