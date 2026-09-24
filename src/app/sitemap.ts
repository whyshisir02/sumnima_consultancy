import type { MetadataRoute } from "next";
import { business, pages, href, type Lang } from "@/lib/config";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!business.siteUrl) return [];
  return (["en", "ne"] as Lang[]).flatMap((lang) =>
    pages.map((page) => ({
      url: `${business.siteUrl}${href(lang, page)}`,
      alternates: {
        languages: {
          en: `${business.siteUrl}${href("en", page)}`,
          ne: `${business.siteUrl}${href("ne", page)}`,
        },
      },
    })),
  );
}
