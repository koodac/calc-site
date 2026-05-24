/**
 * 도구 페이지 우측 광고 레일 (PC·태블릿 md+).
 * 실제 연동 시 각 슬롯 안에 애드센스 광고 단위 코드를 넣으면 됩니다.
 */
function SidebarAdUnit({
  title,
  hint,
  minHeightClass,
}: {
  title: string;
  hint: string;
  minHeightClass: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg border border-dashed border-neutral-200 bg-gradient-to-b from-white to-neutral-50/90 px-2 py-4 text-center shadow-sm ${minHeightClass}`}
    >
      <span className="text-[11px] font-medium text-neutral-600 sm:text-xs">{title}</span>
      <span className="mt-1 max-w-[11rem] text-[10px] leading-snug text-neutral-400">{hint}</span>
    </div>
  );
}

export function ToolSidebarAdRail() {
  return (
    <div className="md:sticky md:top-6" aria-label="스폰서·광고">
      <div className="rounded-2xl border border-neutral-200/90 bg-white p-3 shadow-sm ring-1 ring-black/[0.04] sm:p-4">
        <p className="mb-3 border-b border-neutral-100 pb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-400">
          스폰서
        </p>
        <div className="flex flex-col gap-3">
          <SidebarAdUnit
            title="반응형 광고"
            hint="세로 폭에 맞춰 늘어나는 단위 (예: 애드센스 display)"
            minHeightClass="min-h-[100px] sm:min-h-[110px]"
          />
          <SidebarAdUnit
            title="정사각·멀티플렉스"
            hint="250×250 등 고정형 또는 in-feed"
            minHeightClass="min-h-[200px] sm:min-h-[220px]"
          />
          <SidebarAdUnit
            title="보조 배너"
            hint="텍스트·디스플레이 소형 슬롯"
            minHeightClass="min-h-[72px] sm:min-h-[90px]"
          />
        </div>
      </div>
    </div>
  );
}
