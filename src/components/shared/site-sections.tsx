import Link from "next/link";
import React from "react";
import {
  ArrowUpRight,
  Building2,
  Calculator,
  ClipboardList,
  Sofa,
  ScanLine,
  HardHat,
  House,
  Phone,
  Check,
  Images,
  DraftingCompass,
} from "lucide-react";
import { href, type Lang, type Page } from "@/lib/config";
import { descriptions } from "@/content/pages/metadata";
import { labels } from "@/content/pages/navigation";
export const icons = {
  building: Building2,
  calculator: Calculator,
  clipboard: ClipboardList,
  sofa: Sofa,
  survey: ScanLine,
  helmet: HardHat,
  home: House,
};
export const t = (lang: Lang, en: string, ne: string) =>
  lang === "en" ? en : ne;
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <span />
      {children}
    </div>
  );
}

export function AboutPreview({ lang }: { lang: Lang }) {
  return (
    <section className="about-section">
      <div className="container about-grid">
        <div className="about-image">
          <img
            src="/images/interior.webp"
            alt={t(
              lang,
              "Interior inspiration with natural light and considered materials",
              "प्राकृतिक प्रकाश र सामग्रीसहितको आन्तरिक डिजाइन प्रेरणा",
            )}
            width={900}
            height={900}
            loading="lazy"
          />
          <span>
            {t(lang, "SPACE. LIGHT. POSSIBILITY.", "स्थान। प्रकाश। सम्भावना।")}
          </span>
        </div>
        <div className="about-copy">
          <Eyebrow>{t(lang, "PM & SUMNIMA", "पीएम एण्ड सुम्निमा")}</Eyebrow>
          <h2>
            {t(lang, "Your local partner.", "तपाईंको स्थानीय साझेदार।")}
            <br />
            {t(lang, "Your bigger picture.", "तपाईंको बृहत् सोच।")}
          </h2>
          <p>
            {t(
              lang,
              "Every project begins with a conversation. Based in Dharan, PM & Sumnima Engineering Consultancy brings design, planning and construction-related services together to help you move forward with clarity.",
              "हरेक परियोजना संवादबाट सुरु हुन्छ। धरानस्थित पीएम एण्ड सुम्निमा इन्जिनियरिङ कन्सल्टेन्सीले स्पष्टतासाथ अघि बढ्न डिजाइन, योजना र निर्माणसम्बन्धी सेवाहरू एकै ठाउँमा उपलब्ध गराउँछ।",
            )}
          </p>
          <ul className="check-list">
            {[
              t(
                lang,
                "Connected services, from design to construction",
                "डिजाइनदेखि निर्माणसम्म सम्बन्धित सेवाहरू",
              ),
              t(lang, "Local consultation in Dharan", "धरानमा स्थानीय परामर्श"),
              t(
                lang,
                "Support shaped around your requirements",
                "तपाईंको आवश्यकताअनुसार सहयोग",
              ),
            ].map((s) => (
              <li key={s}>
                <Check size={17} />
                {s}
              </li>
            ))}
          </ul>
          <Link href={href(lang, "about")} className="text-link">
            {t(lang, "Get to know us", "हाम्रो बारेमा जान्नुहोस्")}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Process({ lang }: { lang: Lang }) {
  const steps =
    lang === "en"
      ? [
          ["Let’s talk", "Share your ideas, needs and priorities."],
          ["Understand the site", "Review the site and project requirements."],
          ["Shape the plan", "Discuss designs, scope and estimates."],
          ["Agree the direction", "Review the proposal before proceeding."],
          ["Build together", "Coordinate the agreed execution and support."],
        ]
      : [
          ["कुरा गरौँ", "आफ्ना विचार, आवश्यकता र प्राथमिकता बताउनुहोस्।"],
          ["स्थल बुझौँ", "स्थल र परियोजनाका आवश्यकता समीक्षा गरौँ।"],
          ["योजना बनाऔँ", "डिजाइन, कार्यक्षेत्र र लागत छलफल गरौँ।"],
          ["दिशा तय गरौँ", "अघि बढ्नुअघि प्रस्ताव समीक्षा गरौँ।"],
          ["सँगै बनाऔँ", "सहमत कार्यान्वयन र सहयोग समन्वय गरौँ।"],
        ];
  return (
    <section className="process-section">
      <div className="container">
        <Eyebrow>{t(lang, "THE WAY FORWARD", "अगाडिको यात्रा")}</Eyebrow>
        <div className="section-heading">
          <h2>
            {t(
              lang,
              "A clear path from idea to reality.",
              "विचारदेखि वास्तविकतासम्मको स्पष्ट बाटो।",
            )}
          </h2>
          <p>
            {t(
              lang,
              "A starting point for our conversation. We’ll agree the exact scope and process with you.",
              "हाम्रो संवादको सुरुवात। कार्यक्षेत्र र प्रक्रिया तपाईंसँगको सहमतिमा तय गरिन्छ।",
            )}
          </p>
        </div>
        <div className="process-grid">
          {steps.map(([title, desc], i) => (
            <div className="process-step" key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PageIntro({ lang, page }: { lang: Lang; page: Page }) {
  return (
    <section className="page-intro">
      <div className="container">
        <div className="breadcrumb">
          <Link href={href(lang)}>{labels[lang].home}</Link>
          <span>/</span>
          {labels[lang][page]}
        </div>
        <Eyebrow>
          {t(
            lang,
            "PM & SUMNIMA ENGINEERING CONSULTANCY",
            "पीएम एण्ड सुम्निमा इन्जिनियरिङ कन्सल्टेन्सी",
          )}
        </Eyebrow>
        <h1>
          {labels[lang][page]}
          <span className="red-dot">.</span>
        </h1>
        <p>{descriptions[lang][page]}</p>
      </div>
      <span className="intro-grid" aria-hidden="true" />
    </section>
  );
}

export function EmptyPortfolio({
  lang,
  gallery = false,
}: {
  lang: Lang;
  gallery?: boolean;
}) {
  return (
    <div className="empty-portfolio">
      <span className="empty-icon">
        {gallery ? (
          <Images size={35} strokeWidth={1.3} />
        ) : (
          <DraftingCompass size={38} strokeWidth={1.3} />
        )}
      </span>
      <div>
        <span className="number-label">
          {t(lang, "A SPACE FOR OUR WORK", "हाम्रो कामका लागि स्थान")}
        </span>
        <h3>
          {t(
            lang,
            gallery
              ? "Our gallery is taking shape."
              : "Good work deserves a proper introduction.",
            gallery
              ? "हाम्रो ग्यालरी तयार हुँदैछ।"
              : "राम्रो कामको राम्रो परिचय।",
          )}
        </h3>
        <p>
          {t(
            lang,
            "Project portfolio will be added soon. In the meantime, talk to us about your ideas and the support you need.",
            "परियोजनाहरू चाँडै थपिनेछन्। यसबीच आफ्ना विचार र आवश्यक सहयोगबारे हामीसँग कुरा गर्नुहोस्।",
          )}
        </p>
      </div>
      <Link className="button secondary" href={href(lang, "contact")}>
        {t(lang, "Start a conversation", "संवाद सुरु गर्नुहोस्")}
        <ArrowUpRight size={17} />
      </Link>
    </div>
  );
}

export function ContactBanner({ lang }: { lang: Lang }) {
  return (
    <section className="cta-section">
      <div className="container">
        <div>
          <Eyebrow>
            {t(
              lang,
              "LET’S BUILD SOMETHING MEANINGFUL",
              "अर्थपूर्ण निर्माण सँगै गरौँ",
            )}
          </Eyebrow>
          <h2>
            {t(lang, "Your next chapter starts", "तपाईंको अर्को अध्याय")}
            <br />
            {t(lang, "with a conversation.", "संवादबाट सुरु हुन्छ।")}
          </h2>
        </div>
        <div className="cta-actions">
          <Link href={href(lang, "contact")} className="button white">
            {t(lang, "Let’s discuss your project", "परियोजनाबारे छलफल गरौँ")}
            <ArrowUpRight size={19} />
          </Link>
          <a href="tel:+9779843349239">
            <Phone size={15} /> +977 9843349239
          </a>
        </div>
      </div>
    </section>
  );
}
