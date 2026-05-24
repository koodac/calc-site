"use client";

import { useEffect, useState } from "react";
import type { ToolItem } from "@/lib/tools";
import { AdSlot } from "@/components/tool-guide/toolGuideBlocks";
import { CoupangAdDisclaimer } from "@/components/home/HomeAdCopy";
import { FAVORITES_UPDATED_EVENT, isFavoriteSlug, toggleFavoriteSlug } from "@/lib/favorites";

type Props = {
  tool: ToolItem;
};

export function ToolEngagementSection({ tool }: Props) {
  const [shareOpen, setShareOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const sync = () => setIsFavorite(isFavoriteSlug(tool.slug));
    sync();
    window.addEventListener(FAVORITES_UPDATED_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(FAVORITES_UPDATED_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, [tool.slug]);

  async function onShare() {
    if (typeof window === "undefined") return;
    const url = window.location.href;
    try {
      if (navigator.share && /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
        await navigator.share({ title: tool.title, url });
        return;
      }
      setShareOpen(true);
    } catch {
      // no-op
    }
  }

  function onToggleFavorite() {
    setIsFavorite(toggleFavoriteSlug(tool.slug));
  }

  return (
    <>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2 border-t border-neutral-200 pt-4 sm:gap-3">
        <button
          type="button"
          onClick={onShare}
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-800 shadow-sm hover:bg-neutral-50"
        >
          <span aria-hidden>🔗</span>
          공유하기
        </button>
        <button
          type="button"
          onClick={onToggleFavorite}
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-800 shadow-sm hover:bg-neutral-50"
        >
          <span aria-hidden>{isFavorite ? "★" : "☆"}</span>
          {isFavorite ? "즐겨찾기 해제" : "즐겨찾기"}
        </button>
      </div>

      <section className="mt-2" aria-label="계산기 하단 광고">
        <AdSlot label="하단 배너 — 구글 애드센스 (광고 단위·스크립트 연동 예정)" />
        <AdSlot label="하단 배너 — 쿠팡 파트너스 (스크립트·배너 연동 예정)" />
        <CoupangAdDisclaimer />
      </section>

      <ShareModal open={shareOpen} onClose={() => setShareOpen(false)} title={tool.title} />
    </>
  );
}

function ShareModal({
  open,
  onClose,
  title,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
}) {
  if (!open || typeof window === "undefined") return null;
  const url = window.location.href;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      alert("링크를 복사했습니다.");
    } catch {
      // no-op
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4" role="presentation" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="공유하기"
        className="w-full max-w-md rounded-xl bg-white p-4 shadow-2xl sm:p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between">
          <p className="text-lg font-semibold text-neutral-900">공유하기</p>
          <button type="button" onClick={onClose} className="focus-ring rounded-md px-2 py-1 text-neutral-500 hover:bg-neutral-100" aria-label="닫기">
            ✕
          </button>
        </div>

        <div className="mb-4 flex items-center justify-center gap-2">
          <a href={`https://story.kakao.com/share?url=${encodedUrl}`} target="_blank" rel="noreferrer" className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#fee500] text-sm font-bold" aria-label="카카오톡 공유">K</a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noreferrer" className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1877f2] text-white" aria-label="페이스북 공유">f</a>
          <a href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`} target="_blank" rel="noreferrer" className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-black text-white" aria-label="X 공유">X</a>
          <a href={`https://social-plugins.line.me/lineit/share?url=${encodedUrl}`} target="_blank" rel="noreferrer" className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#06c755] text-white" aria-label="라인 공유">L</a>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noreferrer" className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0a66c2] text-white" aria-label="링크드인 공유">in</a>
        </div>

        <div className="flex overflow-hidden rounded-lg border border-neutral-200">
          <div className="inline-flex items-center border-r border-neutral-200 px-3 text-sm text-neutral-500">🔗</div>
          <input value={url} readOnly className="h-10 flex-1 bg-white px-3 text-sm text-neutral-700 outline-none" aria-label="공유 링크" />
          <button type="button" onClick={copyLink} className="focus-ring bg-blue-600 px-3 text-sm font-medium text-white hover:bg-blue-700">
            복사
          </button>
        </div>

        <div className="mt-4 flex justify-end">
          <button type="button" onClick={onClose} className="focus-ring rounded-md border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50">
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
