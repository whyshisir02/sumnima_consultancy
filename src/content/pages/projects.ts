import type { Lang } from "@/lib/config";
export type PortfolioItem = {
  id: string;
  title: Record<Lang, string>;
  category: Record<Lang, string>;
  location: Record<Lang, string>;
  image: string;
  alt: Record<Lang, string>;
};
// Add only client-approved projects and locally optimised images here.
export const portfolio: PortfolioItem[] = [];
