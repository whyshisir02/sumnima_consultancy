import type { Metadata } from "next";
import { Site } from "@/components/site";
import type { Lang } from "@/lib/config";
import { getPageMetadata } from "@/lib/page-metadata";

type Props = { params: Promise<{ lang: Lang }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return getPageMetadata((await params).lang, "gallery");
}

export default async function GalleryPage({ params }: Props) {
  return <Site lang={(await params).lang} page="gallery" />;
}
