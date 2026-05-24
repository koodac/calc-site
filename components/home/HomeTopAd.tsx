import { AdSlot } from "@/components/tool-guide/toolGuideBlocks";
import { CoupangAdDisclaimer } from "@/components/home/HomeAdCopy";

export function HomeTopAd() {
  return (
    <section className="mb-6" aria-label="상단 스폰서·광고 (쿠팡)">
      <AdSlot label="상단 배너 — 쿠팡 파트너스 (스크립트·배너 연동 예정)" />
      <CoupangAdDisclaimer />
    </section>
  );
}
