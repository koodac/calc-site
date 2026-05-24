import type { CalculatorKind } from "@/lib/calculatorKind";

/** Cursor 등 내장 브라우저에서 번들 갱신·매핑 여부를 눈으로 확인용 (production 에서는 렌더 안 함) */
export function DevPreviewBar({ slug, kind }: { slug: string; kind: CalculatorKind }) {
  if (process.env.NODE_ENV !== "development") return null;

  const ok = kind !== "referenceStub";

  return (
    <div
      className={`mt-4 rounded-lg border px-3 py-2 text-xs leading-relaxed ${
        ok ? "border-emerald-200 bg-emerald-50 text-emerald-950" : "border-amber-200 bg-amber-50 text-amber-950"
      }`}
    >
      <span className="font-medium">[개발 미리보기]</span>{" "}
      <code className="rounded bg-white/60 px-1 font-mono">{slug}</code> →{" "}
      <code className="rounded bg-white/60 px-1 font-mono">{kind}</code>
      {ok ? (
        <span className="ml-1 text-emerald-800">· 입력 폼이 떠야 정상입니다. 옛 화면이면 강력 새로고침 하세요.</span>
      ) : (
        <span className="ml-1 text-amber-900">· 아직 매핑 없음(노란 안내만). 리포트해 주세요.</span>
      )}
    </div>
  );
}
