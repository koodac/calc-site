import { CoupangBanner } from "@/components/ads/CoupangBanner";
import { CoupangAdDisclaimer } from "@/components/home/HomeAdCopy";

export function HomeTopAd() {
  return (
    <section className="mb-6" aria-label="상단 스폰서·광고 (쿠팡)">
      <CoupangBanner />
      <CoupangAdDisclaimer />
    </section>
  );
}
