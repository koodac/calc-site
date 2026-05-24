import { AdSlot } from "@/components/tool-guide/toolGuideBlocks";

/** 목록 중간 — 구글 애드센스용 슬롯 */
export function HomeMidAd() {
  return (
    <section className="my-6 sm:my-8" aria-label="중단 광고 (구글 애드센스)">
      <AdSlot label="중단 배너 — 구글 애드센스 (광고 단위·스크립트 연동 예정)" />
    </section>
  );
}
