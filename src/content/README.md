# Where to edit website content

Use this folder for page data and published business content. Components in `src/components/` control how that content looks and behaves.

## Page data

- `pages/navigation.ts` — English and Nepali navigation labels.
- `pages/metadata.ts` — search-result descriptions for each page.
- `pages/services.ts` — service titles, summaries, detail copy and bullet points in English and Nepali.
- `pages/projects.ts` — the project portfolio used by Projects, Gallery and the homepage.

Each page has its own Next.js route in `src/app/[lang]/` and its own content component under `src/features/pages/`. For example, edit `src/features/pages/about/page.tsx` for the About page layout. Shared header, footer and page sections are in `src/components/`. `src/components/site.tsx` assembles each page inside the shared site frame. The interactive navigation, enquiry form and gallery lightbox are in `src/components/interactive.tsx`.

## Add a project or gallery item

1. Put client-approved, web-optimised images in `public/images/projects/`.
2. Open `pages/projects.ts` and add one object to the `portfolio` array.
3. Fill in every English and Nepali title, category, location and descriptive image alt text. Keep the `id` unique and use a leading slash for the image path.
4. Add additional images from the same project as additional objects if they should appear separately in the Gallery.

Example:

```ts
{
  id: "sample-home-exterior",
  title: { en: "Sample home exterior", ne: "नमूना घरको बाहिरी भाग" },
  category: { en: "Building Design", ne: "भवन डिजाइन" },
  location: { en: "Dharan", ne: "धरान" },
  image: "/images/projects/sample-home.webp",
  alt: {
    en: "Front exterior of a two-storey home in Dharan",
    ne: "धरानस्थित दुई तले घरको अगाडिको दृश्य",
  },
}
```

The Projects page and Gallery read from the same portfolio list. The homepage automatically features its first three items. Keep this array empty until approved project information and real images are available; the site then shows the portfolio coming-soon state.
