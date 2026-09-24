import type { MetadataRoute } from "next";
import { business } from "@/lib/config";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(business.launchReady ? { allow: "/" } : { disallow: "/" }),
    },
    ...(business.siteUrl ? { sitemap: `${business.siteUrl}/sitemap.xml` } : {}),
  };
}
