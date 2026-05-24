import { CoupangBanner } from "@/components/ads/CoupangBanner";
import { CoupangAdDisclaimer } from "@/components/home/HomeAdCopy";

export function HomeBottomAd() {
  return (
    <section className="mt-6 sm:mt-8" aria-label="하단 스폰서·광고 (쿠팡)">
      <CoupangBanner />
      <CoupangAdDisclaimer />
    </section>
  );
}
