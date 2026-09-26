import type { Lang } from "@/lib/config";

export type GalleryImage = {
  id: string;
  title: Record<Lang, string>;
  category: Record<Lang, string>;
  location: Record<Lang, string>;
  image: string;
  alt: Record<Lang, string>;
  projectSlug?: string;
};

// Gallery is an image-first collection. Entries can link back to a case study,
// but images are maintained independently from the Projects list.
export const galleryImages: GalleryImage[] = [
  {
    id: "family-home-exterior",
    title: { en: "Garden-facing exterior", ne: "बगैँचातर्फको बाहिरी दृश्य" },
    category: { en: "Residential", ne: "आवासीय" },
    location: { en: "Dharan, Sunsari", ne: "धरान, सुनसरी" },
    // TODO: replace this temporary Unsplash URL with /images/gallery/family-home-exterior.webp
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    alt: {
      en: "Contemporary house facade beside a green garden",
      ne: "हरियो बगैँचासँगै रहेको आधुनिक घरको अगाडिको भाग",
    },
    projectSlug: "family-home-dharan",
  },
  {
    id: "family-home-living-room",
    title: { en: "Light-filled living room", ne: "प्राकृतिक प्रकाशले भरिएको बैठक कोठा" },
    category: { en: "Interior", ne: "आन्तरिक" },
    location: { en: "Dharan, Sunsari", ne: "धरान, सुनसरी" },
    // TODO: replace this temporary Unsplash URL with /images/gallery/family-home-living-room.webp
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    alt: {
      en: "Bright living room with a neutral sofa and garden view",
      ne: "सादा रङको सोफा र बगैँचाको दृश्य भएको उज्यालो बैठक कोठा",
    },
    projectSlug: "family-home-dharan",
  },
  {
    id: "cafe-seating",
    title: { en: "A welcoming seating corner", ne: "आत्मीय बस्ने कुना" },
    category: { en: "Interior", ne: "आन्तरिक" },
    location: { en: "Dharan, Sunsari", ne: "धरान, सुनसरी" },
    // TODO: replace this temporary Unsplash URL with /images/gallery/cafe-seating.webp
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    alt: {
      en: "Comfortable café seating with warm wood and soft lighting",
      ne: "न्यानो काठ र मधुर प्रकाश भएको आरामदायी क्याफे बसाइ",
    },
    projectSlug: "calm-cafe-interior",
  },
  {
    id: "cafe-materials",
    title: { en: "Natural tones and materials", ne: "प्राकृतिक रङ र सामग्री" },
    category: { en: "Interior", ne: "आन्तरिक" },
    location: { en: "Dharan, Sunsari", ne: "धरान, सुनसरी" },
    // TODO: replace this temporary Unsplash URL with /images/gallery/cafe-materials.webp
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    alt: {
      en: "Interior detail with natural materials and warm neutral colors",
      ne: "प्राकृतिक सामग्री र न्यानो सादा रङ भएको आन्तरिक विवरण",
    },
    projectSlug: "calm-cafe-interior",
  },
  {
    id: "contemporary-interior-study",
    title: { en: "A contemporary interior study", ne: "आधुनिक आन्तरिक डिजाइनको नमुना" },
    category: { en: "Interior", ne: "आन्तरिक" },
    location: { en: "Design inspiration", ne: "डिजाइन प्रेरणा" },
    // TODO: replace this temporary Unsplash URL with /images/gallery/interior-study.webp
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    alt: {
      en: "Modern interior with a dining space and natural finishes",
      ne: "भोजन क्षेत्र र प्राकृतिक फिनिस भएको आधुनिक आन्तरिक सजावट",
    },
  },
];
