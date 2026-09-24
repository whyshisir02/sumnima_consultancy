import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { href, type Lang } from "@/lib/config";
import { services } from "@/content/pages/services";
import { icons, t } from "@/components/shared/site-sections";

export function ServiceDetails({ lang }: { lang: Lang }) {
  return (
    <section className="section container service-details">
      <aside className="service-index">
        <span className="number-label">
          {t(lang, "OUR EXPERTISE", "हाम्रो विशेषज्ञता")}
        </span>
        {services.map((s, i) => (
          <a href={`#${s.id}`} key={s.id}>
            <small>0{i + 1}</small>
            {s[lang][0]}
          </a>
        ))}
      </aside>
      <div>
        {services.map((s, i) => {
          const Icon = icons[s.icon as keyof typeof icons];
          return (
            <article className="service-detail" id={s.id} key={s.id}>
              <div className="service-detail-icon">
                <Icon size={32} />
                <span>0{i + 1}</span>
              </div>
              <h2>{s[lang][0]}</h2>
              <p>{s[lang][2]}</p>
              <ul className="check-list">
                {s[lang][3].split("|").map((x) => (
                  <li key={x}>
                    <Check size={17} />
                    {x}
                  </li>
                ))}
              </ul>
              <Link className="text-link" href={href(lang, "contact")}>
                {t(
                  lang,
                  "Discuss your requirements",
                  "आफ्नो आवश्यकताबारे कुरा गर्नुहोस्",
                )}
                <ArrowUpRight size={17} />
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
