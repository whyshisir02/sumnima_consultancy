import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { business, href, type Lang, type Page } from "@/lib/config";
import { labels } from "@/content/pages/navigation";
import { Navigation } from "@/components/interactive";
import { Brand } from "@/components/layout/footer";
import { t } from "@/components/shared/site-sections";

export function SiteHeader({
  lang,
  page,
  languageHref,
}: {
  lang: Lang;
  page: Page;
  languageHref?: string;
}) {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>
            <MapPin size={13} />
            {t(lang, business.address, "धरान–१२, चतरा लाइन")}
          </span>
          <span>
            {t(
              lang,
              "Your vision. Our engineering.",
              "तपाईंको सोच। हाम्रो इन्जिनियरिङ।",
            )}
          </span>
          <a href="tel:+9779815991816">
            <Phone size={12} /> +977 9815991816
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link href={href(lang)} aria-label={business.name}>
            <Brand />
          </Link>
          <nav
            className="desktop-nav"
            aria-label={t(lang, "Main navigation", "मुख्य नेभिगेसन")}
          >
            {(
              [
                "home",
                "about",
                "services",
                "projects",
                "gallery",
                "contact",
              ] as Page[]
            ).map((item) => (
              <Link
                href={href(lang, item)}
                key={item}
                aria-current={item === page ? "page" : undefined}
              >
                {labels[lang][item]}
              </Link>
            ))}
          </nav>
          <Navigation lang={lang} page={page} languageHref={languageHref} />
        </div>
      </header>
    </>
  );
}
