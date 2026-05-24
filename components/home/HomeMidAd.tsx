import { CoupangBanner } from "@/components/ads/CoupangBanner";

/** 목록 중간 — 쿠팡 파트너스 배너 */
export function HomeMidAd() {
  return (
    <section className="my-6 sm:my-8" aria-label="중단 광고 (쿠팡 파트너스)">
      <CoupangBanner />
    </section>
  );
}
