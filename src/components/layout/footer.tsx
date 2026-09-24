import Link from "next/link";
import { Building2, MapPin, ArrowUpRight } from "lucide-react";
import {
  business,
  href,
  whatsappUrl,
  type Lang,
  type Page,
} from "@/lib/config";
import { labels } from "@/content/pages/navigation";
import { services } from "@/content/pages/services";
import { t } from "@/components/shared/site-sections";
export function Brand() {
  return (
    <span className="brand">
      <span className="brand-mark">
        <Building2 size={31} strokeWidth={1.6} />
        <i />
      </span>
      <span>
        <strong>
          PM <em>&</em> Sumnima<span className="brand-dot">.</span>
        </strong>
        <small>ENGINEERING CONSULTANCY</small>
      </span>
    </span>
  );
}
export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Link href={href(lang)}>
            <Brand />
          </Link>
          <p>
            {t(
              lang,
              "Thoughtful design. Practical engineering. A local partner for what comes next.",
              "सोचपूर्ण डिजाइन। व्यावहारिक इन्जिनियरिङ। आगामी यात्राका लागि स्थानीय साझेदार।",
            )}
          </p>
          <span className="footer-location">
            <MapPin size={14} />
            {t(lang, business.address, "धरान–१२, चतरा लाइन")}
          </span>
        </div>
        <div>
          <h3>{t(lang, "Explore", "हेर्नुहोस्")}</h3>
          {(
            ["about", "services", "projects", "gallery", "contact"] as Page[]
          ).map((p) => (
            <Link key={p} href={href(lang, p)}>
              {labels[lang][p]}
            </Link>
          ))}
        </div>
        <div>
          <h3>{t(lang, "Our expertise", "हाम्रा सेवाहरू")}</h3>
          {services.slice(0, 5).map((s) => (
            <Link key={s.id} href={`${href(lang, "services")}#${s.id}`}>
              {s[lang][0]}
            </Link>
          ))}
        </div>
        <div>
          <h3>{t(lang, "Let’s connect", "सम्पर्क गरौँ")}</h3>
          {business.phones.map((p) => (
            <a key={p} href={`tel:+977${p}`}>
              +977 {p}
            </a>
          ))}
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            WhatsApp <ArrowUpRight size={13} />
          </a>
          {business.facebook && (
            <a
              href={business.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook ↗
            </a>
          )}
          {business.tiktok && (
            <a href={business.tiktok} target="_blank" rel="noopener noreferrer">
              TikTok ↗
            </a>
          )}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} PM & Sumnima.{" "}
          {t(lang, "All rights reserved.", "सर्वाधिकार सुरक्षित।")}
        </span>
        <Link href={href(lang, "privacy")}>{labels[lang].privacy}</Link>
        <span>
          {t(lang, "DESIGNED WITH PURPOSE.", "उद्देश्यसहितको डिजाइन।")}
        </span>
      </div>
    </footer>
  );
}
