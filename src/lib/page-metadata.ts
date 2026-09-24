import type { Metadata } from "next";
import { business, href, type Lang, type Page } from "@/lib/config";
import { descriptions } from "@/content/pages/metadata";
import { labels } from "@/content/pages/navigation";

export function getPageMetadata(lang: Lang, page: Page): Metadata {
  const title = `${labels[lang][page]} | PM & Sumnima — ${lang === "en" ? "Engineering in Dharan" : "धरानमा इन्जिनियरिङ"}`;
  const siteUrl = business.siteUrl.replace(/\/$/, "");
  const canonical = siteUrl ? `${siteUrl}${href(lang, page)}` : undefined;

  return {
    title,
    description: descriptions[lang][page],
    robots: { index: business.launchReady, follow: business.launchReady },
    alternates: siteUrl
      ? {
          canonical,
          languages: {
            en: `${siteUrl}${href("en", page)}`,
            ne: `${siteUrl}${href("ne", page)}`,
          },
        }
      : undefined,
    openGraph: {
      title,
      description: descriptions[lang][page],
      url: canonical,
      type: "website",
      locale: lang === "en" ? "en_US" : "ne_NP",
      siteName: business.name,
      ...(siteUrl
        ? {
            images: [
              {
                url: `${siteUrl}/images/architecture.webp`,
                width: 900,
                height: 1100,
              },
            ],
          }
        : {}),
    },
  };
}
