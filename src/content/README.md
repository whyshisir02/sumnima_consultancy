# Where to edit website content

Keep page copy and published business content in this folder. Components in `src/components/` control presentation.

## Projects and gallery

- `pages/projects.ts` contains project case studies. Every project gets a detail page at `/en/projects/<slug>/` and `/ne/projects/<slug>/`.
- `pages/gallery.ts` contains individual gallery photos and captions. Each photo can optionally link back to a project using `projectSlug`.

### Add a project

1. Put approved, optimized project photos in `public/images/projects/`.
2. Add an object to the `projects` array in `pages/projects.ts`.
3. Set a unique URL-safe `slug` and fill in the title, category, location, cover image, summary, brief, approach and services in both languages.
4. Add gallery entries with the same `projectSlug` for any other approved images from the project. The detail page will show them automatically.

Use `/images/projects/your-photo.webp` as the path in the content file; omit `public` from the URL.

### Add a gallery photo

1. Put the approved, optimized photo in `public/images/gallery/`.
2. Add an object to the `galleryImages` array in `pages/gallery.ts`, including a unique `id`, title, category, location, image path and descriptive alt text in both languages.
3. Set `projectSlug` if the image belongs to a project; leave it out if it is a general photo.

The current portfolio text and Unsplash photos are fictional preview examples. Replace them with accurate, approved content when it is ready to publish.

## Other page content

- `pages/navigation.ts` — English and Nepali navigation labels.
- `pages/metadata.ts` — search-result descriptions.
- `pages/services.ts` — service copy in English and Nepali.

Each route is under `src/app/[lang]/`, with page layouts under `src/features/pages/`. Shared site layout and page sections live in `src/components/`.
