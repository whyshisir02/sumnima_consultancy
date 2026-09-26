import type { Lang } from "@/lib/config";

export type Project = {
  slug: string;
  title: Record<Lang, string>;
  category: Record<Lang, string>;
  location: Record<Lang, string>;
  year: string;
  coverImage: string;
  coverAlt: Record<Lang, string>;
  summary: Record<Lang, string>;
  brief: Record<Lang, string>;
  approach: Record<Lang, string>;
  services: Record<Lang, string[]>;
};

// Preview-only examples. Replace all copy and Unsplash URLs with verified,
// client-approved project information before publishing the site.
export const projects: Project[] = [
  {
    slug: "family-home-dharan",
    title: { en: "A Family Home in Dharan", ne: "धरानको पारिवारिक घर" },
    category: { en: "Residential Design", ne: "आवासीय डिजाइन" },
    location: { en: "Dharan, Sunsari", ne: "धरान, सुनसरी" },
    year: "2025",
    // TODO: replace the temporary Unsplash URL with /images/projects/family-home-cover.webp
    coverImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    coverAlt: {
      en: "Modern two-storey home surrounded by a landscaped garden",
      ne: "बगैँचाले घेरिएको आधुनिक दुईतले घर",
    },
    summary: {
      en: "A preview case study showing how a family home could be introduced, documented and explored through a project detail page.",
      ne: "परियोजनाको विवरण पृष्ठमा पारिवारिक घरलाई कसरी प्रस्तुत गर्न सकिन्छ भन्ने देखाउने नमुना विवरण।",
    },
    brief: {
      en: "This sample brief describes a family looking for a comfortable home with shared living space, private bedrooms and a strong connection to outdoor light. It is placeholder copy, not a completed PM & Sumnima project.",
      ne: "यो नमुना विवरणमा साझा बस्ने ठाउँ, निजी शयनकक्ष र प्राकृतिक प्रकाश भएको घर चाहने परिवारको कल्पना गरिएको छ। यो प्लेसहोल्डर सामग्री हो, PM & Sumnima को वास्तविक सम्पन्न परियोजना होइन।",
    },
    approach: {
      en: "The example design story organizes the home around a bright shared living area, then uses a restrained material palette and garden-facing openings to make the rooms feel calm and connected.",
      ne: "यस नमुना डिजाइन कथामा घरको साझा बस्ने क्षेत्रलाई उज्यालो राखिएको छ। संयमित सामग्री र बगैँचातर्फ खुल्ने झ्यालले कोठाहरूलाई शान्त र जोडिएको अनुभूति दिन्छन्।",
    },
    services: {
      en: ["Architectural concept", "Space planning", "Interior coordination"],
      ne: ["वास्तुकला अवधारणा", "स्थान योजना", "आन्तरिक समन्वय"],
    },
  },
  {
    slug: "calm-cafe-interior",
    title: { en: "A Calm Café Interior", ne: "शान्त क्याफे आन्तरिक डिजाइन" },
    category: { en: "Interior Design", ne: "आन्तरिक डिजाइन" },
    location: { en: "Dharan, Sunsari", ne: "धरान, सुनसरी" },
    year: "2025",
    // TODO: replace the temporary Unsplash URL with /images/projects/cafe-cover.webp
    coverImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    coverAlt: {
      en: "Warm, modern café interior with a welcoming lounge area",
      ne: "आत्मीय बस्ने ठाउँसहितको न्यानो आधुनिक क्याफे",
    },
    summary: {
      en: "A preview case study for an intimate café concept, with space for customer seating, a service counter and a clear circulation path.",
      ne: "ग्राहक बस्ने ठाउँ, सेवा काउन्टर र सहज आवागमन मार्ग भएको सानो क्याफेको नमुना परियोजना विवरण।",
    },
    brief: {
      en: "This fictional café brief asks for a relaxed, memorable setting that works for both short visits and longer conversations. The project details and location are examples only.",
      ne: "यो काल्पनिक क्याफे विवरणले छोटो भेटघाट र लामो कुराकानी दुवैका लागि सहज र सम्झनलायक वातावरणको कल्पना गर्छ। परियोजनाका विवरण र स्थान नमुना मात्र हुन्।",
    },
    approach: {
      en: "The sample concept uses a warm neutral palette, layered lighting and a simple seating plan to make the entrance, counter and guest area easy to understand.",
      ne: "यस नमुना अवधारणामा प्रवेशद्वार, काउन्टर र बस्ने क्षेत्र बुझ्न सजिलो बनाउन न्यानो रङ, तहगत प्रकाश र सरल बसाइ योजना प्रयोग गरिएको छ।",
    },
    services: {
      en: ["Interior concept", "Space planning", "Lighting coordination"],
      ne: ["आन्तरिक अवधारणा", "स्थान योजना", "प्रकाश समन्वय"],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
