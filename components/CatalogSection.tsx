"use client";

import { useEffect, useMemo, useState } from "react";
import { CategoryNav } from "@/components/CategoryNav";
import { MobileBottomNav } from "@/components/home/MobileBottomNav";
import { FAVORITES_UPDATED_EVENT, readFavoriteSlugs } from "@/lib/favorites";
import { NAV_CATEGORIES, type ToolItem, getToolBySlug, getToolsByCategory, filterTools } from "@/lib/tools";
import { SearchBar } from "@/components/SearchBar";
import { CatalogToolGrid } from "@/components/home/CatalogToolGrid";
import { SiteAppHeader } from "@/components/layout/SiteAppHeader";
import { HomeTopAd } from "@/components/home/HomeTopAd";

type CatalogSectionProps = {
  initialMobileTab?: "home" | "favorites" | "menu";
};

export function CatalogSection({ initialMobileTab = "home" }: CatalogSectionProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof NAV_CATEGORIES)[number]>("직장");
  const [mobileTab, setMobileTab] = useState<"home" | "favorites" | "menu">(initialMobileTab);
  const [favoriteSlugs, setFavoriteSlugs] = useState<string[]>([]);

  const q = query.trim();
  const isSearchMode = q !== "";

  useEffect(() => {
    const syncFavorites = () => setFavoriteSlugs(readFavoriteSlugs());
    syncFavorites();
    window.addEventListener(FAVORITES_UPDATED_EVENT, syncFavorites);
    window.addEventListener("storage", syncFavorites);
    return () => {
      window.removeEventListener(FAVORITES_UPDATED_EVENT, syncFavorites);
      window.removeEventListener("storage", syncFavorites);
    };
  }, []);

  const visibleTools = useMemo(() => {
    if (isSearchMode) return filterTools(query, "전체");
    return getToolsByCategory(category);
  }, [category, isSearchMode, query]);

  const favoriteTools = useMemo(
    () =>
      favoriteSlugs
        .map((slug) => getToolBySlug(slug))
        .filter((tool): tool is ToolItem => tool !== undefined),
    [favoriteSlugs],
  );

  const showFavorites = mobileTab === "favorites";
  const showMenu = mobileTab === "menu";

  return (
    <>
      <SiteAppHeader />
      {!showFavorites ? (
        <>
          <SearchBar value={query} onChange={setQuery} />
          <HomeTopAd />
          <CategoryNav categories={NAV_CATEGORIES} active={category} onSelect={setCategory} />
          {!isSearchMode && (
            <p className="mb-4 text-sm font-semibold text-neutral-700">{category} 계산기</p>
          )}
          <section aria-label="도구 목록">
            <CatalogToolGrid tools={visibleTools} />
          </section>
        </>
      ) : (
        <section aria-label="즐겨찾기 목록" className="pb-2">
          <p className="mb-4 text-sm font-semibold text-neutral-700">즐겨찾기</p>
          <CatalogToolGrid tools={favoriteTools} emptyMessage="아직 즐겨찾기한 계산기가 없습니다." />
        </section>
      )}

      {showMenu ? (
        <div
          className="fixed inset-0 z-40 bg-black/25 md:hidden"
          role="presentation"
          onClick={() => setMobileTab("home")}
        >
          <div
            className="absolute bottom-16 left-0 right-0 rounded-t-2xl border-t border-neutral-200 bg-white p-4"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="카테고리 메뉴"
          >
            <p className="mb-3 text-sm font-semibold text-neutral-800">카테고리</p>
            <div className="grid grid-cols-3 gap-2">
              {NAV_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setCategory(cat);
                    setMobileTab("home");
                  }}
                  className={`focus-ring rounded-lg border px-3 py-2 text-sm ${
                    category === cat
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : "border-neutral-200 bg-white text-neutral-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <MobileBottomNav active={mobileTab} onChange={setMobileTab} />
    </>
  );
}
