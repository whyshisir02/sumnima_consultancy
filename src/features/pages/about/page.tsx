import { type Lang } from "@/lib/config";
import { AboutPreview, Process, t } from "@/components/shared/site-sections";

export function About({ lang }: { lang: Lang }) {
  return (
    <>
      <AboutPreview lang={lang} />
      <section className="section container mission-grid">
        <div>
          <span className="number-label">
            01 / {t(lang, "OUR MISSION", "हाम्रो उद्देश्य")}
          </span>
          <h2>
            {t(
              lang,
              "Make your next step clearer.",
              "तपाईंको अर्को कदम स्पष्ट बनाउने।",
            )}
          </h2>
          <p>
            {t(
              lang,
              "Our purpose is to help property owners and people planning a building understand their options and connect the design, costing and construction stages of their project.",
              "सम्पत्ति धनी र भवन योजना बनाउने व्यक्तिहरूलाई विकल्प बुझ्न र डिजाइन, लागत तथा निर्माणका चरणहरू जोड्न सहयोग गर्नु हाम्रो उद्देश्य हो।",
            )}
          </p>
        </div>
        <div>
          <span className="number-label">
            02 / {t(lang, "OUR VISION", "हाम्रो सोच")}
          </span>
          <h2>
            {t(
              lang,
              "Thoughtful spaces for everyday life.",
              "दैनिक जीवनका लागि सोचपूर्ण स्थान।",
            )}
          </h2>
          <p>
            {t(
              lang,
              "We believe considered planning and open conversations are the starting point for spaces that respond to the people who use them.",
              "सोचपूर्ण योजना र खुला संवाद नै प्रयोगकर्ताको आवश्यकताअनुसारको स्थान बनाउने सुरुवात हो भन्ने हाम्रो विश्वास छ।",
            )}
          </p>
        </div>
      </section>
      <Process lang={lang} />
    </>
  );
}
