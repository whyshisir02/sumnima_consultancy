import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/pages/projects";
import type { Lang } from "@/lib/config";

export function ProjectGrid({ items, lang }: { items: Project[]; lang: Lang }) {
  return (
    <div className="project-grid">
      {items.map((project, index) => (
        <Link
          className="project-card"
          key={project.slug}
          href={`/${lang}/projects/${project.slug}/`}
        >
          <div className="project-card-image">
            <img
              src={project.coverImage}
              alt={project.coverAlt[lang]}
              width={1000}
              height={760}
              loading={index < 2 ? "eager" : "lazy"}
            />
            <span>{project.year}</span>
          </div>
          <div className="project-card-copy">
            <small>{project.category[lang]} · {project.location[lang]}</small>
            <h2>{project.title[lang]}</h2>
            <p>{project.summary[lang]}</p>
            <span className="text-link">
              {lang === "en" ? "Explore project" : "परियोजना हेर्नुहोस्"}
              <ArrowUpRight size={17} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
