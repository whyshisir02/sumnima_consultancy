export const business = {
  name: "PM & Sumnima Engineering Consultancy",
  phones: ["9815991816", "9843349239"],
  address: "Dharan-12, Chatara Line",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9779843349239",
  email: process.env.NEXT_PUBLIC_EMAIL || "",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
  tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || "",
  map: process.env.NEXT_PUBLIC_MAP_URL || "",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "",
  launchReady: process.env.NEXT_PUBLIC_LAUNCH_READY === "true",
};
export type Lang = "en" | "ne";
export const pages = [
  "home",
  "about",
  "services",
  "projects",
  "gallery",
  "contact",
  "privacy",
] as const;
export type Page = (typeof pages)[number];
export const href = (lang: Lang, page: string = "home") =>
  `/${lang}/${page === "home" ? "" : `${page}/`}`;
export const whatsappUrl = (
  message = "Hello, I would like to know more about your engineering services.",
) =>
  `https://wa.me/${business.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
