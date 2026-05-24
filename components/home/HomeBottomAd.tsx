import { AdSlot } from "@/components/tool-guide/toolGuideBlocks";
import { CoupangAdDisclaimer } from "@/components/home/HomeAdCopy";

export function HomeBottomAd() {
  return (
    <section className="mt-6 sm:mt-8" aria-label="하단 스폰서·광고 (쿠팡)">
      <AdSlot label="하단 배너 — 쿠팡 파트너스 (스크립트·배너 연동 예정)" />
      <CoupangAdDisclaimer />
    </section>
  );
}
