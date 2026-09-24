import { business, type Lang } from "@/lib/config";
import { services } from "@/content/pages/services";
import { t } from "@/components/shared/site-sections";

export function Privacy({ lang }: { lang: Lang }) {
  return (
    <section className="section container prose">
      <h2>{t(lang, "Your enquiry information", "तपाईंको अनुरोधको जानकारी")}</h2>
      <p>
        {t(
          lang,
          "The enquiry form asks for your name, phone number, optional email, service and message so our team can respond to your request. Please do not include sensitive documents or financial information.",
          "तपाईंको अनुरोधको जवाफ दिन फारममा नाम, फोन नम्बर, वैकल्पिक इमेल, सेवा र सन्देश मागिन्छ। संवेदनशील कागजात वा वित्तीय जानकारी समावेश नगर्नुहोस्।",
        )}
      </p>
      <h2>{t(lang, "How messages are sent", "सन्देश कसरी पठाइन्छ")}</h2>
      <p>
        {business.formEndpoint
          ? t(
              lang,
              "Enquiries are submitted to our configured form provider for delivery to the team.",
              "अनुरोधहरू हाम्रो फारम सेवा प्रदायकमार्फत टोलीसम्म पठाइन्छन्।",
            )
          : t(
              lang,
              "The form prepares a WhatsApp message. Nothing is sent until you open WhatsApp and choose to send it. WhatsApp handles the message according to its own privacy policy.",
              "फारमले व्हाट्सएप सन्देश तयार गर्छ। तपाईंले व्हाट्सएप खोलेर पठाएपछि मात्र सन्देश पठाइन्छ। व्हाट्सएपको आफ्नै गोपनीयता नीति लागू हुन्छ।",
            )}
      </p>
      <h2>
        {t(lang, "External links and analytics", "बाह्य लिङ्क र विश्लेषण")}
      </h2>
      <p>
        {t(
          lang,
          "This website does not use advertising cookies or analytics trackers. Links to WhatsApp, Google Maps and social platforms open external services with their own privacy policies. Hosting providers may process standard access logs.",
          "यस वेबसाइटमा विज्ञापन कुकी वा विश्लेषण ट्र्याकर प्रयोग गरिएको छैन। व्हाट्सएप, गुगल म्याप र सामाजिक सञ्जालका लिङ्कमा सम्बन्धित सेवाको गोपनीयता नीति लागू हुन्छ। होस्टिङ प्रदायकले सामान्य पहुँच अभिलेख प्रशोधन गर्न सक्छन्।",
        )}
      </p>
      <h2>
        {t(
          lang,
          "Questions or correction requests",
          "प्रश्न वा सच्याउने अनुरोध",
        )}
      </h2>
      <p>
        {t(
          lang,
          "Call +977 9843349239 to ask about information you have shared with us.",
          "हामीसँग साझा गरिएको जानकारीबारे सोध्न +977 9843349239 मा फोन गर्नुहोस्।",
        )}
      </p>
    </section>
  );
}
