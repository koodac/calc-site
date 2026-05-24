"use client";

import Link from "next/link";
import type { ToolItem } from "@/lib/tools";

export function ReferenceStub({
  tool,
  title = "간이 참고용",
}: {
  tool: ToolItem;
  title?: string;
}) {
  return (
    <div className="space-y-4 rounded-xl border border-amber-100 bg-amber-50/60 p-5 text-sm leading-relaxed text-amber-950">
      <p className="font-medium">{title}</p>
      <p>
        「{tool.title}」은(는) 세법·고시·개인별 조건에 따라 결과가 크게 달라질 수 있습니다. 이 사이트는{" "}
        <strong>교육·UI·간이 추정</strong>용이며, 계약·신고·진단 등 최종 판단에 사용하지 마세요.
      </p>
      <p className="text-amber-900/90">
        국세·4대보험·의료 수치는 시행령·고시·기관 공지에 따르며, 이 화면은 본 서비스 내에서만 요약
        계산을 제공합니다.
      </p>
      <p>
        <Link
          href="/"
          className="font-medium text-amber-950 underline underline-offset-2 hover:text-amber-800"
        >
          ← 계산기 목록으로
        </Link>
      </p>
    </div>
  );
}
