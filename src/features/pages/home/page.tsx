import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Building2,
  House,
  MoveUpRight,
  DraftingCompass,
} from "lucide-react";
import { href, type Lang } from "@/lib/config";
import { portfolio } from "@/content/pages/projects";
import { services } from "@/content/pages/services";
import { GalleryGrid } from "@/components/interactive";
import {
  AboutPreview,
  EmptyPortfolio,
  Eyebrow,
  Process,
  icons,
  t,
} from "@/components/shared/site-sections";

export function Home({ lang }: { lang: Lang }) {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow>
              {t(
                lang,
                "ROOTED IN DHARAN. BUILT AROUND YOU.",
                "धरानमा आधारित। तपाईंको आवश्यकतामा केन्द्रित।",
              )}
            </Eyebrow>
            <h1>
              {t(lang, "Good spaces start with", "राम्रो स्थानको सुरुवात")}
              <br />
              <span>{t(lang, "great planning.", "उत्कृष्ट योजनाबाट।")}</span>
            </h1>
            <p className="hero-description">
              {t(
                lang,
                "Engineering, design & construction solutions that bring your vision to life. From the first sketch to the final structure, let’s build something meaningful.",
                "तपाईंको सोचलाई साकार पार्ने इन्जिनियरिङ, डिजाइन र निर्माण समाधान। पहिलो रेखाचित्रदेखि अन्तिम संरचनासम्म, अर्थपूर्ण निर्माणको यात्रा सँगै गरौँ।",
              )}
            </p>
            <div className="hero-buttons">
              <Link href={href(lang, "contact")} className="button">
                {t(lang, "Request a consultation", "परामर्श अनुरोध गर्नुहोस्")}
                <ArrowUpRight size={18} />
              </Link>
              <Link href={href(lang, "projects")} className="button secondary">
                {t(lang, "Explore our work", "हाम्रो काम हेर्नुहोस्")}
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="hero-footnote">
              <span className="small-icon">
                <DraftingCompass size={21} />
              </span>
              <p>
                {t(lang, "One team. Every stage.", "एउटै टोली। हरेक चरण।")}
                <small>
                  {t(lang, "Design · Plan · Build", "डिजाइन · योजना · निर्माण")}
                </small>
              </p>
              <div className="hero-coordinate">
                DHARAN, NEPAL<span>26.81° N / 87.28° E</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="image-corner" />
            <img
              src="/images/architecture.webp"
              alt={t(
                lang,
                "Architectural inspiration: a modern white residence with glass balconies and a pool",
                "वास्तुकला प्रेरणा: सिसाको बार्दली र पोखरीसहितको आधुनिक सेतो आवास",
              )}
              width={900}
              height={1100}
              fetchPriority="high"
            />
            <div className="image-tag">
              <span className="live-dot" />
              {t(lang, "THOUGHTFULLY DESIGNED", "सोचपूर्ण डिजाइन")}
            </div>
            <div className="image-caption">
              <span>
                01 / {t(lang, "ARCHITECTURAL INSPIRATION", "वास्तुकला प्रेरणा")}
              </span>
              <MoveUpRight size={27} />
            </div>
            <div className="floating-note">
              <span>
                <Building2 size={25} />
              </span>
              <div>
                <strong>
                  {t(lang, "Built on your vision.", "तपाईंको सोचमा आधारित।")}
                </strong>
                <small>
                  {t(lang, "Grounded in engineering.", "इन्जिनियरिङको आधारमा।")}
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bottom container">
          <span>01 — {t(lang, "THE FOUNDATION", "आधार")}</span>
          <span>{t(lang, "SCROLL TO DISCOVER", "थप हेर्नुहोस्")} ↓</span>
        </div>
      </section>
      <div className="service-strip">
        <div className="container">
          {[
            t(lang, "Design", "डिजाइन"),
            t(lang, "Valuation", "मूल्याङ्कन"),
            t(lang, "Costing", "लागत"),
            t(lang, "Survey", "सर्वेक्षण"),
            t(lang, "Construction", "निर्माण"),
          ].map((s) => (
            <span key={s}>
              <span className="strip-cross">+</span>
              {s}
            </span>
          ))}
        </div>
      </div>
      <section className="section container">
        <div className="section-heading">
          <div>
            <Eyebrow>{t(lang, "WHAT WE DO", "हाम्रा सेवाहरू")}</Eyebrow>
            <h2>
              {t(lang, "Expertise for every", "तपाईंको यात्राका")}
              <br />
              {t(lang, "step of your journey.", "हरेक चरणमा विशेषज्ञता।")}
            </h2>
          </div>
          <div>
            <p>
              {t(
                lang,
                "From understanding your land to creating your space, find the right support under one roof.",
                "जग्गा बुझ्नेदेखि आफ्नो स्थान बनाउनसम्म, आवश्यक सहयोग एकै ठाउँमा पाउनुहोस्।",
              )}
            </p>
            <Link className="text-link" href={href(lang, "services")}>
              {t(lang, "Explore all services", "सबै सेवाहरू हेर्नुहोस्")}
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
        <div className="services-grid">
          {services.slice(0, 6).map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} lang={lang} />
          ))}
          <Link
            className="estate-link"
            href={`${href(lang, "services")}#real-estate`}
          >
            <House size={21} />
            <span>
              {t(
                lang,
                "Looking for property guidance?",
                "सम्पत्तिसम्बन्धी मार्गदर्शन चाहिएको छ?",
              )}{" "}
              <strong>{services[6][lang][0]}</strong>
            </span>
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
      <AboutPreview lang={lang} />
      <section className="section container">
        <div className="section-heading">
          <div>
            <Eyebrow>{t(lang, "OUR WORK", "हाम्रो काम")}</Eyebrow>
            <h2>{t(lang, "Ideas made tangible.", "विचारले पाएको आकार।")}</h2>
          </div>
          <Link href={href(lang, "projects")} className="text-link">
            {t(lang, "View project portfolio", "परियोजनाहरू हेर्नुहोस्")}
            <ArrowUpRight size={17} />
          </Link>
        </div>
        {portfolio.length ? (
          <GalleryGrid items={portfolio.slice(0, 3)} lang={lang} />
        ) : (
          <EmptyPortfolio lang={lang} />
        )}
      </section>
      <Process lang={lang} />
      <section className="contact-preview container">
        <div>
          <MapPin size={25} />
          <div>
            <h3>
              {t(
                lang,
                "Local roots. A personal approach.",
                "स्थानीय आधार। व्यक्तिगत परामर्श।",
              )}
            </h3>
            <p>
              {t(
                lang,
                "Visit us at Dharan-12, Chatara Line, to discuss your next project.",
                "तपाईंको आगामी परियोजनाबारे छलफल गर्न धरान–१२, चतरा लाइनमा आउनुहोस्।",
              )}
            </p>
          </div>
        </div>
        <Link href={href(lang, "contact")} className="text-link">
          {t(lang, "Find our office", "हाम्रो कार्यालय")}
          <ArrowUpRight size={18} />
        </Link>
      </section>
    </>
  );
}

export function ServiceCard({
  service: s,
  index,
  lang,
}: {
  service: (typeof services)[number];
  index: number;
  lang: Lang;
}) {
  const Icon = icons[s.icon as keyof typeof icons];
  return (
    <Link className="service-card" href={`${href(lang, "services")}#${s.id}`}>
      <div className="service-card-top">
        <Icon size={29} strokeWidth={1.5} />
        <span>0{index + 1}</span>
      </div>
      <h3>{s[lang][0]}</h3>
      <p>{s[lang][1]}</p>
      <span className="card-arrow">
        <ArrowUpRight size={20} />
      </span>
    </Link>
  );
}
