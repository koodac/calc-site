export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-neutral-200 bg-white/80 px-4 py-8 text-center text-xs text-neutral-400">
      <p className="font-medium text-neutral-500">
        © {new Date().getFullYear()} 계산기 &amp; 툴 — 빠른 참고용 계산 서비스
      </p>
      <p className="mt-2 leading-relaxed">
        모든 계산 결과는 참고용 추정이며, 법령·고시·개인 조건에 따라 실제와 다를 수 있습니다.
        <br className="hidden sm:inline" />
        계약·신고·진단 등 최종 판단에는 관련 기관 공식 자료와 전문가 확인을 권장합니다.
      </p>
    </footer>
  );
}
