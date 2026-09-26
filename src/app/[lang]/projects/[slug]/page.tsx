import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/pages/projects";
import type { Lang } from "@/lib/config";
import { ProjectDetailPage } from "@/features/pages/projects/detail-page";

type Props = { params: Promise<{ lang: Lang; slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title[lang]} | PM & Sumnima`,
    description: project.summary[lang],
  };
}

export default async function ProjectRoute({ params }: Props) {
  const { lang, slug } = await params;
  if (lang !== "en" && lang !== "ne") notFound();
  const project = getProject(slug);
  if (!project) notFound();
  return <ProjectDetailPage project={project} lang={lang} />;
}
