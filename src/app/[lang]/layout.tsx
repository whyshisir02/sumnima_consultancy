import { notFound } from "next/navigation";
import type { Lang } from "@/lib/config";

export function generateStaticParams() {
  return (["en", "ne"] as Lang[]).map((lang) => ({ lang }));
}

export default async function LanguageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "en" && lang !== "ne") notFound();
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
