import type { Lang } from "@/lib/config";
import { PortfolioContent } from "@/components/shared/portfolio-content";

export function GalleryPage({ lang }: { lang: Lang }) {
  return <PortfolioContent lang={lang} gallery />;
}
