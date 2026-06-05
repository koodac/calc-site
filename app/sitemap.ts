import type { MetadataRoute } from "next";
import { TOOLS } from "@/lib/tools";

const BASE_URL = "https://www.calcmoa.com";

// High-traffic tools get boosted priority
const HIGH_PRIORITY_SLUGS = new Set([
  "job-001", "job-002", "job-008", "job-009", "job-019",
  "job-026", "job-029", "job-030", "job-032",
  "health-001", "health-002",
  "finance-001", "finance-006", "finance-025",
  "finance-031", "finance-032", "finance-036", "finance-037", "finance-040",
  "daily-006", "daily-007", "daily-014",
  "school-023",
]);

const LAST_MODIFIED = new Date("2026-06-05");

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages: MetadataRoute.Sitemap = TOOLS.map((tool) => ({
    url: `${BASE_URL}/tools/${tool.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: HIGH_PRIORITY_SLUGS.has(tool.slug) ? 0.9 : 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...toolPages,
  ];
}
