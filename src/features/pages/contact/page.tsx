import { ArrowUpRight, Phone, MapPin, Mail } from "lucide-react";
import { business, href, whatsappUrl, type Lang } from "@/lib/config";
import { ContactForm } from "@/components/interactive";
import { Eyebrow, t } from "@/components/shared/site-sections";

export function Contact({ lang }: { lang: Lang }) {
  return (
    <>
      <section className="section container contact-grid">
        <div className="contact-information">
          <Eyebrow>
            {t(lang, "START WITH A CONVERSATION", "संवादबाट सुरु गरौँ")}
          </Eyebrow>
          <h2>
            {t(lang, "Let’s bring your", "तपाईंका विचारलाई")}
            <br />
            {t(lang, "ideas to life.", "साकार पारौँ।")}
          </h2>
          <p>
            {t(
              lang,
              "Whether you have a detailed plan or just a first idea, we’re here to discuss your next step.",
              "विस्तृत योजना होस् वा प्रारम्भिक विचार, अर्को कदमबारे छलफल गर्न हामी तयार छौँ।",
            )}
          </p>
          <div className="contact-detail">
            <Phone />
            <div>
              <small>{t(lang, "CALL US", "फोन गर्नुहोस्")}</small>
              {business.phones.map((p) => (
                <a key={p} href={`tel:+977${p}`}>
                  +977 {p}
                </a>
              ))}
            </div>
          </div>
          <div className="contact-detail">
            <MapPin />
            <div>
              <small>{t(lang, "VISIT OUR OFFICE", "हाम्रो कार्यालय")}</small>
              <strong>{t(lang, business.address, "धरान–१२, चतरा लाइन")}</strong>
              <p>
                {t(
                  lang,
                  "Please call ahead to arrange your visit.",
                  "भेटका लागि पहिले फोन गर्नुहोस्।",
                )}
              </p>
            </div>
          </div>
          {business.email && (
            <div className="contact-detail">
              <Mail />
              <div>
                <small>{t(lang, "EMAIL", "इमेल")}</small>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </div>
            </div>
          )}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="button secondary"
          >
            {t(lang, "Chat on WhatsApp", "व्हाट्सएपमा कुरा गर्नुहोस्")}
            <ArrowUpRight size={18} />
          </a>
        </div>
        <ContactForm lang={lang} />
      </section>
      <section className="container map-section">
        <div className="map-art" aria-hidden="true">
          <div className="map-road road-one" />
          <div className="map-road road-two" />
          <div className="map-road road-three" />
          <span className="map-label">DHARAN</span>
          <span className="map-marker">
            <MapPin size={30} />
          </span>
        </div>
        <div>
          <Eyebrow>{t(lang, "FIND US IN DHARAN", "हामी धरानमा छौँ")}</Eyebrow>
          <h2>{t(lang, "Come say hello.", "भेट्न आउनुहोस्।")}</h2>
          <p>
            {t(
              lang,
              "Dharan-12, Chatara Line, Nepal",
              "धरान–१२, चतरा लाइन, नेपाल",
            )}
          </p>
          <a
            className="text-link"
            href={
              business.map ||
              "https://www.google.com/maps/search/?api=1&query=Chatara+Line+Dharan+12+Nepal"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(
              lang,
              business.map
                ? "Get directions"
                : "Explore the area on Google Maps",
              business.map
                ? "बाटो हेर्नुहोस्"
                : "गुगल म्यापमा क्षेत्र हेर्नुहोस्",
            )}
            <ArrowUpRight size={17} />
          </a>
          <small className="map-disclaimer">
            {t(
              lang,
              "Area illustration. Call us for the exact office location.",
              "क्षेत्रको चित्रण। कार्यालयको ठ्याक्कै स्थानका लागि फोन गर्नुहोस्।",
            )}
          </small>
        </div>
      </section>
    </>
  );
}
