import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/content/pages/projects";
import { galleryImages } from "@/content/pages/gallery";
import type { Lang } from "@/lib/config";
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingContact } from "@/components/interactive";
import { ContactBanner } from "@/components/shared/site-sections";

export function ProjectDetailPage({ project, lang }: { project: Project; lang: Lang }) {
  const photos = galleryImages.filter((image) => image.projectSlug === project.slug);

  return (
    <>
      <a className="skip-link" href="#main">{lang === "en" ? "Skip to content" : "मुख्य सामग्रीमा जानुहोस्"}</a>
      <SiteHeader
        lang={lang}
        page="projects"
        languageHref={`/${lang === "en" ? "ne" : "en"}/projects/${project.slug}/`}
      />
      <main id="main" className="project-detail container">
        <Link className="text-link project-back" href={`/${lang}/projects/`}>
          <ArrowLeft size={17} /> {lang === "en" ? "All projects" : "सबै परियोजनाहरू"}
        </Link>
        <div className="project-detail-heading">
          <div>
            <span className="eyebrow"><span />{project.category[lang]}</span>
            <h1>{project.title[lang]}</h1>
            <p>{project.summary[lang]}</p>
          </div>
          <div className="project-meta">
            <span><MapPin size={17} />{project.location[lang]}</span>
            <span>{lang === "en" ? "Concept preview" : "अवधारणा पूर्वावलोकन"} · {project.year}</span>
          </div>
        </div>
        <figure className="project-cover">
          <img src={project.coverImage} alt={project.coverAlt[lang]} width={1600} height={1000} />
          <figcaption>{project.coverAlt[lang]}</figcaption>
        </figure>
        <div className="project-detail-columns">
          <div className="project-story">
            <section>
              <span className="number-label">01 / {lang === "en" ? "THE BRIEF" : "परियोजनाको आवश्यकता"}</span>
              <h2>{lang === "en" ? "The brief" : "परियोजनाको आवश्यकता"}</h2>
              <p>{project.brief[lang]}</p>
            </section>
            <section>
              <span className="number-label">02 / {lang === "en" ? "THE APPROACH" : "डिजाइनको दृष्टिकोण"}</span>
              <h2>{lang === "en" ? "The approach" : "डिजाइनको दृष्टिकोण"}</h2>
              <p>{project.approach[lang]}</p>
            </section>
          </div>
          <aside className="project-services">
            <span className="number-label">03 / {lang === "en" ? "SCOPE" : "सेवाको दायरा"}</span>
            <h2>{lang === "en" ? "Services shown" : "देखाइएका सेवाहरू"}</h2>
            <ul>{project.services[lang].map((service) => <li key={service}>{service}</li>)}</ul>
          </aside>
        </div>
        {photos.length > 0 && (
          <section className="project-gallery">
            <div className="section-heading">
              <div>
                <span className="eyebrow"><span />{lang === "en" ? "PROJECT GALLERY" : "परियोजनाका तस्बिरहरू"}</span>
                <h2>{lang === "en" ? "More views." : "थप दृश्यहरू।"}</h2>
              </div>
              <Link href={`/${lang}/gallery/`} className="text-link">
                {lang === "en" ? "Browse all gallery images" : "सबै ग्यालरी तस्बिर हेर्नुहोस्"}<ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="project-photo-grid">
              {photos.map((photo) => (
                <figure key={photo.id}>
                  <img src={photo.image} alt={photo.alt[lang]} width={1000} height={760} loading="lazy" />
                  <figcaption>{photo.title[lang]}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
        <ContactBanner lang={lang} />
      </main>
      <Footer lang={lang} />
      <FloatingContact lang={lang} />
    </>
  );
}
