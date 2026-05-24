"use client";

const BANNER_HTML = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;overflow:hidden;background:transparent;">
<script src="https://ads-partners.coupang.com/g.js"></script>
<script>
  new PartnersCoupang.G({
    id: 991611,
    template: "carousel",
    trackingCode: "AF7721557",
    width: "680",
    height: "140",
    tsource: ""
  });
</script>
</body>
</html>`;

/** 쿠팡 파트너스 다이나믹 배너 — iframe 격리로 위치 정확히 고정 */
export function CoupangBanner() {
  return (
    <iframe
      srcDoc={BANNER_HTML}
      width="100%"
      height="140"
      style={{ border: "none", display: "block", maxWidth: 680, margin: "0 auto" }}
      title="쿠팡 파트너스 광고"
      aria-label="쿠팡 파트너스 광고"
      scrolling="no"
    />
  );
}
