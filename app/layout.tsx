import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "계산기 & 툴 — 연봉·건강·금융 계산기 모음",
  description:
    "연봉 실수령액, 4대 보험, 퇴직금, BMI, 대출 상환, 환율 등 자주 쓰는 계산기를 모아둔 빠른 참고용 도구 모음입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full antialiased`}>
      <body
        className={`${notoSansKr.className} min-h-full flex flex-col bg-neutral-50 font-sans text-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}
