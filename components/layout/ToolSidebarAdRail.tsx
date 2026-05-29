import { GoogleAdSense } from "@/components/ads/GoogleAdSense";
import { ADS_CONFIG } from "@/lib/adsConfig";

export function ToolSidebarAdRail() {
  return (
    <div className="flex flex-col gap-4 md:sticky md:top-6" aria-label="스폰서·광고">
      <GoogleAdSense
        slotId={ADS_CONFIG.SIDEBAR_TALL}
        format="vertical"
        style={{ minHeight: 600, width: "100%" }}
      />
      <GoogleAdSense
        slotId={ADS_CONFIG.SIDEBAR_SQUARE}
        format="rectangle"
        style={{ minHeight: 250, width: "100%" }}
      />
    </div>
  );
}
