"use client";

export const FAVORITES_KEY = "favorite-tool-slugs";
export const FAVORITES_UPDATED_EVENT = "favorites-updated";

function toUniqueStrings(values: unknown): string[] {
  if (!Array.isArray(values)) return [];
  return [...new Set(values.filter((v): v is string => typeof v === "string"))];
}

export function readFavoriteSlugs(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(FAVORITES_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return toUniqueStrings(parsed);
  } catch {
    return [];
  }
}

export function isFavoriteSlug(slug: string): boolean {
  return readFavoriteSlugs().includes(slug);
}

export function writeFavoriteSlugs(nextSlugs: string[]): void {
  if (typeof window === "undefined") return;
  const normalized = toUniqueStrings(nextSlugs);
  window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(normalized));
  window.dispatchEvent(new Event(FAVORITES_UPDATED_EVENT));
}

export function toggleFavoriteSlug(slug: string): boolean {
  const favorites = readFavoriteSlugs();
  const isFavorite = favorites.includes(slug);
  const next = isFavorite ? favorites.filter((s) => s !== slug) : [...favorites, slug];
  writeFavoriteSlugs(next);
  return !isFavorite;
}
