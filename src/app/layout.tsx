import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/noto-sans-devanagari";
import "./globals.css";
export const metadata: Metadata = {
  title: "PM & Sumnima Engineering Consultancy",
  description: "Engineering, design and construction consultation in Dharan.",
  icons: { icon: "/icon.svg" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
