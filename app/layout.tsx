import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const BASE_URL = "https://calc-site-eight.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "계산기 & 툴 — 연봉·건강·금융 계산기 모음",
    template: "%s — 계산기 & 툴",
  },
  description:
    "연봉 실수령액, 4대 보험, 퇴직금, BMI, 대출 상환, 환율 등 자주 쓰는 계산기를 모아둔 빠른 참고용 도구 모음입니다.",
  keywords: ["계산기", "연봉계산기", "4대보험", "퇴직금", "BMI", "대출계산기", "실수령액"],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: BASE_URL,
    siteName: "계산기 & 툴",
    title: "계산기 & 툴 — 연봉·건강·금융 계산기 모음",
    description:
      "연봉 실수령액, 4대 보험, 퇴직금, BMI, 대출 상환, 환율 등 자주 쓰는 계산기를 모아둔 빠른 참고용 도구 모음입니다.",
  },
  twitter: {
    card: "summary",
    title: "계산기 & 툴 — 연봉·건강·금융 계산기 모음",
    description:
      "연봉 실수령액, 4대 보험, 퇴직금, BMI, 대출 상환, 환율 등 자주 쓰는 계산기를 모아둔 빠른 참고용 도구 모음입니다.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "7Gv8RcMjU1WalrINUIh7Q8vLSj6MepUUroIvB3GTFkM",
    other: {
      "naver-site-verification": ["34cd3d683e39c85a20b2f9f1902eeb144785547a"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full antialiased`}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5752557189528627"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${notoSansKr.className} min-h-full flex flex-col bg-neutral-50 font-sans text-neutral-900`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-PTMM9Z3LFE" />
    </html>
  );
}
