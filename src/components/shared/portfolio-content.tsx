import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { href, type Lang } from "@/lib/config";
import { projects } from "@/content/pages/projects";
import { galleryImages } from "@/content/pages/gallery";
import { EmptyPortfolio, t } from "@/components/shared/site-sections";
import { GalleryGrid } from "@/components/interactive";
import { ProjectGrid } from "@/components/shared/project-grid";

export function PortfolioContent({
  lang,
  gallery,
}: {
  lang: Lang;
  gallery: boolean;
}) {
  return (
    <section className="section container portfolio-section">
      {gallery ? (
        galleryImages.length ? (
          <GalleryGrid items={galleryImages} lang={lang} />
        ) : <EmptyPortfolio lang={lang} gallery />
      ) : projects.length ? <ProjectGrid items={projects} lang={lang} /> : <EmptyPortfolio lang={lang} />}
      <div className="portfolio-help">
        <h2>
          {t(
            lang,
            "Your idea could be the next beginning.",
            "तपाईंको विचार अर्को सुरुवात हुन सक्छ।",
          )}
        </h2>
        <p>
          {t(
            lang,
            "A home, an interior, a site, or a property decision. Tell us what you are considering.",
            "घर, आन्तरिक डिजाइन, निर्माण स्थल वा सम्पत्तिको निर्णय। तपाईंको योजनाबारे बताउनुहोस्।",
          )}
        </p>
        <Link href={href(lang, "services")} className="text-link">
          {t(lang, "Find the right service", "आवश्यक सेवा खोज्नुहोस्")}
          <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}
