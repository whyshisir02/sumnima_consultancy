# PM & Sumnima Engineering Consultancy

A responsive bilingual Next.js website based on `PM_Sumnima_PRD.md` and `PM_Sumnima_DESIGN.md`. English and Nepali Home, About, Services, Projects, Gallery, Contact and Privacy pages are statically exported.

## Local development

Requires Node.js 20.9 or later. On Windows PowerShell, use `npm.cmd` if execution policy blocks `npm`.

```sh
npm install
npm run dev
```

Open http://localhost:3000/en/ (Nepali: `/ne/`).

```sh
npm run typecheck
npm run build
npm test
```

Build output is `out/`, ready for static hosting. Run `npm start` to preview the exported website locally. Build before running tests: the test suite uses the exported site and installed Chrome; update `playwright.config.ts` if using another browser. The included preview server is for local review, not public production hosting.

## Replace business details

Copy `.env.example` to `.env.local` and fill public settings. Rebuild after changes.

- WhatsApp defaults to the owner-confirmed **+977 9843349239**.
- Both poster phone numbers and the Dharan-12, Chatara Line address are included.
- Email and social links stay hidden until configured, avoiding dead or misleading destinations.
- The map action currently searches the stated area. Set `NEXT_PUBLIC_MAP_URL` to the exact office link.
- Replace the temporary wordmark in `src/components/layout/footer.tsx` and favicon in `public/icon.svg`.
- Editable page data lives in `src/content/pages/`; the service copy is in `services.ts` and approved project entries are in `projects.ts`.
- Page components live in `src/features/pages/`. The shared header, footer, page sections and gallery display live in `src/components/`.
- Add real, approved portfolio items to `portfolio`; projects and gallery automatically display images and enable category filtering, keyboard navigation and a native modal lightbox. Use optimised images under `public/images/` with bilingual titles, categories, locations and alternative text.

## Enquiries

Without a form endpoint, the validated form prepares a WhatsApp message and offers a link to open it. The user must press Send in WhatsApp. It never reports an unsent message as delivered. No backend is required.

For direct submission, set `NEXT_PUBLIC_FORM_ENDPOINT` to an HTTPS Formspree endpoint and configure provider-side spam protection and delivery. The form supports required fields, email and phone validation, a honeypot, loading, success and failure states, and a 15-second timeout. Test actual delivery before launch. Public environment variables must never contain secrets.

## Launch review

The website is a local review build, not a deployed business website. Review English service copy, mission/vision, workflow and all Nepali translations with the owner. Do not add invented credentials, staff, testimonials or project counts. The portfolio intentionally shows the prescribed empty state until real content is supplied.

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain without a trailing slash. This enables absolute canonical URLs, alternate language links, sitemap entries and Open Graph image URLs. Set `NEXT_PUBLIC_LAUNCH_READY=true` only after content review; previews default to noindex and disallow crawling. Use access control at the hosting level if the preview must be private: robots settings are not access control.

Deploy `out/` to a static host with HTTPS. Use `out/404.html` for unknown paths. Review phone/WhatsApp, office pin, social links, metadata, images, translation and form delivery on the final domain. No analytics are installed; add only after choosing a provider and updating the privacy copy.

## Temporary imagery

Stock photographs are architectural inspiration, not company projects. Downloaded as local WebP assets (about 125 KB each), with explicit inspiration labels and alt text:

- Architecture: https://images.unsplash.com/photo-1600596542815-ffad4c1539a9
- Interior: https://images.unsplash.com/photo-1600210492486-724fe5c67fb0

Replace with owner-approved real photography before final branding handoff. Inter and Noto Sans Devanagari are self-hosted through Fontsource, with system fallbacks.

Static routing follows the [Next.js static export documentation](https://nextjs.org/docs/app/guides/static-exports).
