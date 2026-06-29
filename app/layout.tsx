import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const BASE_URL = "https://www.calcmoa.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "계산기 & 툴 — 연봉·건강·금융 계산기 모음",
    template: "%s — 계산기 & 툴",
  },
  description:
    "연봉 실수령액, 4대 보험, 퇴직금, BMI, 대출 상환, 환율 등 자주 쓰는 계산기를 모아둔 빠른 참고용 도구 모음입니다. 194개 이상의 무료 계산기를 제공합니다.",
  keywords: [
    "계산기", "연봉계산기", "4대보험", "퇴직금계산기", "BMI계산기",
    "대출계산기", "실수령액", "부가세계산기", "환율계산기", "무료계산기",
  ],
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: BASE_URL,
    siteName: "계산기 & 툴",
    title: "계산기 & 툴 — 연봉·건강·금융 계산기 모음",
    description:
      "연봉 실수령액, 4대 보험, 퇴직금, BMI, 대출 상환, 환율 등 자주 쓰는 계산기를 모아둔 빠른 참고용 도구 모음입니다. 194개 이상의 무료 계산기를 제공합니다.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "계산기 & 툴" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "계산기 & 툴 — 연봉·건강·금융 계산기 모음",
    description:
      "연봉 실수령액, 4대 보험, 퇴직금, BMI, 대출 상환, 환율 등 자주 쓰는 계산기를 모아둔 빠른 참고용 도구 모음입니다.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  verification: {
    google: "emF0Bv4MbCgpISUxvOYHVuRknybxOkREg7YYpWvnAZA",
    other: {
      "naver-site-verification": ["7a3828bf44d5a8ee01ccbcdb9d94b7e7c825670d"],
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
