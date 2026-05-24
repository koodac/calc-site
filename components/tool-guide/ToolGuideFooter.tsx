"use client";

import { getToolGuide } from "@/components/tool-guide/toolGuideRegistry";
import { GuideBulletList, GuideH2, GuideP } from "@/components/tool-guide/toolGuideBlocks";
import { AdSlot } from "@/components/tool-guide/toolGuideBlocks";

type Props = {
  slug: string;
};

/**
 * 도움말·FAQ. 모바일/PC 모두 하단에서 바로 보이도록 항상 펼친 상태로 렌더링합니다.
 */
export function ToolGuideFooter({ slug }: Props) {
  const registeredGuide = getToolGuide(slug);
  const guide = registeredGuide ?? <GenericGuide />;

  return (
    <section className="mt-8 border-t border-neutral-200 pt-6 sm:mt-10 sm:pt-8">
      <div className="rounded-xl border border-neutral-200/80 bg-neutral-50 px-4 py-6 sm:px-6 lg:px-6 lg:py-8">
        {guide}
        <AdSlot label="추가 하단 배너 — 구글 애드센스 (광고 단위·스크립트 연동 예정)" />
      </div>
    </section>
  );
}

function GenericGuide() {
  return (
    <>
      <GuideH2>이 계산기란?</GuideH2>
      <GuideP>
        입력값을 넣으면 결과가 즉시 갱신되는 빠른 추정용 도구입니다. 먼저 기본값으로 계산한 뒤 실제 수치에 맞춰
        하나씩 조정하면 결과 변화를 쉽게 확인할 수 있습니다.
      </GuideP>

      <GuideH2>입력 안내</GuideH2>
      <GuideBulletList
        items={[
          "입력 단위(원, %, 일수, 개수)를 먼저 확인하세요.",
          "조건이 많은 계산기는 값을 한 번에 넣기보다 항목별로 순서대로 입력하세요.",
          "결과는 참고용 추정치이므로 실제 고지/명세와 비교해 최종 확인하세요.",
          "여러 시나리오를 비교할 때는 값 하나씩 바꿔 반복 계산하면 차이를 보기 쉽습니다.",
        ]}
      />
    </>
  );
}
