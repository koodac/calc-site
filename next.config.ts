import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

  /** Cursor/IDE 내장 미리보기가 옛 HTML·JS를 잡지 않도록 (개발 전용) */
  async headers() {
    if (process.env.NODE_ENV !== "development") return [];
    return [
      {
        source: "/:path*",
        headers: [{ key: "Cache-Control", value: "no-store, no-cache, must-revalidate, max-age=0" }],
      },
    ];
  },
};

export default nextConfig;
