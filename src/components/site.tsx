import { type Lang, type Page } from "@/lib/config";
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingContact } from "@/components/interactive";
import { ContactBanner, PageIntro } from "@/components/shared/site-sections";
import { Home } from "@/features/pages/home/page";
import { About } from "@/features/pages/about/page";
import { ServiceDetails } from "@/features/pages/services/page";
import { ProjectsPage } from "@/features/pages/projects/page";
import { GalleryPage } from "@/features/pages/gallery/page";
import { Contact } from "@/features/pages/contact/page";
import { Privacy } from "@/features/pages/privacy/page";
export function Site({ lang, page }: { lang: Lang; page: Page }) {
  return (
    <>
      <a className="skip-link" href="#main">
        {lang === "en" ? "Skip to content" : "मुख्य सामग्रीमा जानुहोस्"}
      </a>
      <SiteHeader lang={lang} page={page} />
      <main id="main">
        {page === "home" ? (
          <Home lang={lang} />
        ) : (
          <>
            <PageIntro lang={lang} page={page} />
            {page === "about" ? (
              <About lang={lang} />
            ) : page === "services" ? (
              <ServiceDetails lang={lang} />
            ) : page === "projects" ? (
              <ProjectsPage lang={lang} />
            ) : page === "gallery" ? (
              <GalleryPage lang={lang} />
            ) : page === "contact" ? (
              <Contact lang={lang} />
            ) : (
              <Privacy lang={lang} />
            )}
          </>
        )}
        {page !== "contact" && page !== "privacy" && (
          <ContactBanner lang={lang} />
        )}
      </main>
      <Footer lang={lang} />
      <FloatingContact lang={lang} />
    </>
  );
}
