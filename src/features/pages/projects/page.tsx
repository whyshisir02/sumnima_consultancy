import type { Lang } from "@/lib/config";
import { PortfolioContent } from "@/components/shared/portfolio-content";

export function ProjectsPage({ lang }: { lang: Lang }) {
  return <PortfolioContent lang={lang} gallery={false} />;
}
