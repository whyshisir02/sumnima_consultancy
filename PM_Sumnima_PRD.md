# PM & Sumnima Engineering Consultancy Website — Product Requirements Document

**Document Version:** 1.0  
**Project Type:** Static, multi-page corporate website  
**Primary Languages:** English + Nepali  
**Business:** PM & Sumnima Engineering Consultancy  
**Location shown in source poster:** Dharan-12, Chatara Line  
**Status:** Production-ready draft based on the supplied poster and client brief  
**Companion Design Spec:** `DESIGN.md`

---

## 1. Product Overview

PM & Sumnima Engineering Consultancy requires a modern, trustworthy, responsive corporate website that presents its engineering, construction, valuation, surveying, interior, and real-estate-related services.

The website should convert the company’s current poster/social-media presence into a professional digital presence that can:

- explain services clearly;
- showcase projects and design work;
- establish trust with prospective clients;
- make phone and WhatsApp contact easy;
- provide office location and social links;
- support both Nepali and English;
- work smoothly on mobile, tablet, and desktop;
- remain simple and inexpensive to host and maintain.

The first release should be a **static multi-page website** with no customer login, admin dashboard, or custom backend unless explicitly requested later.

---

## 2. Source-of-Truth Business Information

The following details are taken from the supplied company poster and should be treated as the current source of truth until the client confirms updated information.

### Company Name
**PM & Sumnima Engineering Consultancy**

### Location
**Dharan-12, Chatara Line**

### Phone Numbers
- `9815991816`
- `9843349239`

### Social Presence Mentioned
- Facebook: `PMSUM ENG. CON.`
- TikTok: `PM & SUMNIMA ENG. CON.`

> Exact profile URLs must be collected before production launch.

### Poster Slogans
The poster includes Nepali promotional lines about fulfilling dreams and building a better future.

> Exact official wording and whether these slogans should appear on the website must be confirmed by the client.

---

## 3. Services Identified From the Poster

The poster indicates the company provides the following services:

1. House/building related complete work
2. Property valuation
3. Detailed estimate and costing
4. Interior designing
5. Field survey
6. House construction
7. Layout work
8. Real estate work

### Recommended Website Service Labels

For clearer professional presentation, use the following labels unless the client provides official wording:

1. **Building Design & Planning**
2. **Property Valuation**
3. **Detailed Estimate & Costing**
4. **Interior Design**
5. **Field Survey**
6. **Construction & Site Layout**
7. **Real Estate Consultancy**

> Final service names and descriptions require client approval.

---

## 4. Product Goals

### 4.1 Primary Goal
Generate qualified enquiries from people looking for engineering, design, valuation, construction, surveying, interior, or real-estate-related services.

### 4.2 Secondary Goals
- establish a professional online presence;
- communicate services clearly;
- showcase completed or ongoing work;
- improve local search visibility;
- make contact effortless;
- strengthen brand trust;
- provide a shareable destination for social media traffic.

---

## 5. Non-Goals for Version 1

The following are out of scope unless later approved as a new phase:

- customer authentication;
- online payment;
- CRM;
- client dashboard;
- quotation management dashboard;
- project tracking portal;
- real-estate listing management portal;
- booking system;
- job application portal;
- e-commerce;
- full CMS;
- customer accounts;
- engineering calculators;
- live chat platform;
- multilingual admin system.

---

## 6. Target Users

### Persona A — Homeowner Planning Construction
Typical needs:
- house design;
- cost estimate;
- construction support;
- valuation;
- survey;
- layout.

Main questions:
- What services do you provide?
- Can you design my house?
- Can you estimate the project cost?
- Can you handle construction?
- How do I contact you quickly?

### Persona B — Property Owner
Typical needs:
- valuation;
- survey;
- land/property consultation;
- layout;
- real-estate-related technical support.

### Persona C — Commercial Client
Typical needs:
- planning;
- costing;
- construction coordination;
- interior work;
- consultancy.

### Persona D — Local Mobile User
Typical behavior:
- finds the company through Facebook, TikTok, referral, or local search;
- visits using a mobile phone;
- quickly scans services and project images;
- taps Call or WhatsApp;
- wants location/directions quickly.

This persona should heavily influence mobile UX decisions.

---

## 7. Core User Journeys

### Journey 1 — Service Enquiry
`Home → Services → Service Detail → Call / WhatsApp / Contact`

### Journey 2 — Trust Validation
`Home → Projects → About → Contact`

### Journey 3 — Office Visit
`Home → Contact → Map / Directions → Call`

### Journey 4 — Nepali-Language Visitor
`Home → नेपाली → Nepali Content → Services → Contact`

### Journey 5 — Social Media Visitor
`Facebook/TikTok → Website → Project/Service → WhatsApp`

---

## 8. Information Architecture

### Recommended Sitemap

```text
Home
About Us
Services
    Building Design & Planning
    Property Valuation
    Detailed Estimate & Costing
    Interior Design
    Field Survey
    Construction & Site Layout
    Real Estate Consultancy
Projects
Gallery
Contact
Language Switcher
    English
    नेपाली
```

### Recommended Version 1 Page Count

**6 pages × 2 languages**

```text
Home
About
Services
Projects
Gallery
Contact
```

### Recommended URL Structure

```text
/en/
    index.html
    about.html
    services.html
    projects.html
    gallery.html
    contact.html

/ne/
    index.html
    about.html
    services.html
    projects.html
    gallery.html
    contact.html
```

This structure is preferred for SEO, maintainability, and clear bilingual routing.

---

## 9. Global Navigation Requirements

### Desktop Navigation

```text
Logo | Home | About | Services | Projects | Gallery | Contact | EN / नेपाली | Primary CTA
```

### Mobile Navigation
- hamburger menu;
- visible language switcher;
- touch-friendly navigation;
- persistent or easily accessible Call/WhatsApp CTA.

### Primary CTA
Recommended:
- **Request Consultation**
or
- **Call Now**

> Final CTA wording requires client approval.

---

## 10. Homepage Requirements

### 10.1 Header
Must include:
- logo or temporary wordmark;
- primary navigation;
- language switcher;
- primary CTA;
- mobile menu.

### 10.2 Hero Section
Purpose: explain the business clearly within the first screen.

Recommended structure:

**Headline**
> Engineering, Design & Construction Solutions in Dharan

**Supporting Text**
> Professional solutions for building design, valuation, costing, surveying, interiors, construction, and real-estate-related services.

**Primary CTA**
> Request Consultation

**Secondary CTA**
> View Our Projects

**Hero Visual**
- preferred: real client project;
- fallback: high-quality architectural image;
- stock image only if client has no usable project imagery.

### 10.3 Services Overview
Display 6–7 service cards.

Each card:
- icon;
- title;
- 1–2 sentence summary;
- Learn More link.

### 10.4 About Preview
Include:
- short company introduction;
- location;
- concise trust statement;
- link to About page.

Do not use unsupported claims such as:
- “10+ years experience”
- “500+ projects”
- “No. 1 engineering company”

unless the client provides verifiable information.

### 10.5 Featured Projects
Show 3–6 featured projects if assets exist.

Each project card may contain:
- image;
- project title;
- category;
- location;
- View Project / View Gallery link.

### 10.6 Why Choose Us
Only use factual and supportable benefits, e.g.:
- multiple engineering-related services under one company;
- local consultation availability;
- design + costing + construction support.

Avoid unverifiable superiority claims.

### 10.7 Process Section
Recommended process:

```text
Consultation → Site/Requirement Review → Design/Estimate → Approval → Execution/Support
```

Final process must match actual company workflow.

### 10.8 Contact CTA
Strong end-of-page CTA:
> Planning your next project? Talk to our team.

Buttons:
- Call Now
- WhatsApp
- Contact Us

---

## 11. Services Page Requirements

Each service should include:

- service title;
- short introduction;
- typical scope/deliverables;
- image or icon;
- CTA.

### Example Service Structure

#### Property Valuation
- short description;
- what the service covers;
- when a client may need it;
- contact CTA.

#### Detailed Estimate & Costing
- quantity/cost planning overview;
- supported project types;
- CTA.

> Technical service descriptions must be approved by the client before publication.

---

## 12. Projects Page Requirements

Purpose: build trust using real work.

### Project Card Fields
- project image;
- project title;
- project type;
- location;
- service category;
- optional year/status;
- View Project button.

### Optional Project Detail Page
May include:
- project overview;
- project images;
- scope of work;
- category;
- location;
- completion status;
- client-approved notes.

For the first static release, detail pages are optional.

---

## 13. Gallery Page Requirements

### Features
- responsive masonry/grid layout;
- image lightbox;
- keyboard accessible close/next/previous;
- lazy loading;
- optional category filters.

### Possible Categories
- Building Design
- Construction
- Interior
- Survey
- Completed Projects

Do not add filters if the client does not have enough categorized images.

---

## 14. About Page Requirements

Recommended sections:
- company introduction;
- mission;
- vision;
- what the company does;
- team/leadership if supplied;
- qualifications/licenses if supplied;
- CTA.

The client must provide or approve:
- founding year;
- team details;
- registration information;
- licenses;
- professional affiliations;
- verified experience claims.

---

## 15. Team Section

Optional in v1.

If included, each profile should support:
- full name;
- photo;
- role;
- qualification;
- license/registration;
- experience;
- short bio.

Never fabricate names, credentials, or professional registrations.

---

## 16. Contact Page Requirements

Must support:
- company name;
- office location;
- phone numbers;
- WhatsApp;
- email;
- Facebook;
- TikTok;
- Google Map/directions;
- enquiry form.

### Current Known Contact Data
- Dharan-12, Chatara Line
- 9815991816
- 9843349239

### Still Required
- email;
- exact map location;
- WhatsApp number;
- social URLs;
- business hours.

---

## 17. Contact Form Requirements

Recommended fields:
- Full Name
- Phone Number
- Email
- Service Interested In
- Message

Optional:
- Preferred Contact Method

### Validation
- required-field validation;
- valid email format;
- sensible phone validation;
- anti-spam;
- clear success state;
- clear failure state.

### Static-Site Form Handling Options
- Formspree
- Netlify Forms
- EmailJS
- Serverless endpoint
- Custom backend later

Final selection depends on hosting and client requirements.

---

## 18. Phone & WhatsApp Integration

### Phone Links

```text
tel:+9779815991816
tel:+9779843349239
```

### WhatsApp
A floating WhatsApp button should appear on:
- Home
- Services
- Projects
- Contact

Recommended pre-filled message:

> Hello, I would like to know more about your engineering services.

> Final WhatsApp destination number must be confirmed.

---

## 19. Google Maps Integration

Contact page should include either:
- embedded Google Map;
- directions button;
- or both.

The exact office pin must be confirmed by the client before launch.

---

## 20. Bilingual Requirements

### Languages
- English
- Nepali

### Language Switcher
Visible in the site header:

```text
EN | नेपाली
```

### Requirements
- equivalent pages in both languages;
- preserve selected language while navigating;
- Nepali text must use Unicode;
- layout must tolerate longer Nepali strings;
- translations should be human-reviewed;
- do not publish unreviewed machine translations.

---

## 21. Design Requirements

Detailed UI/UX and visual design specifications are maintained in `DESIGN.md`.

Core direction:
- modern engineering/architecture style;
- premium but practical;
- clean white space;
- deep blue primary brand color;
- red accent;
- strong architectural imagery;
- responsive design;
- mobile-first interaction.

---

## 22. Accessibility Requirements

Target reasonable alignment with **WCAG 2.1 AA**.

Requirements:
- adequate text/background contrast;
- semantic heading hierarchy;
- keyboard navigability;
- visible focus states;
- form labels;
- alt text for meaningful images;
- accessible lightbox controls;
- no critical information communicated only by color;
- readable content at browser zoom.

---

## 23. SEO Requirements

Every public page should include:
- unique `<title>`;
- unique meta description;
- canonical URL;
- Open Graph metadata;
- semantic headings;
- meaningful image alt text;
- clean URLs;
- internal linking.

### Potential Local Search Topics
- engineering consultancy in Dharan
- house design in Dharan
- property valuation Dharan
- building estimate Dharan
- construction company Dharan
- field survey Dharan

Final keyword strategy should be reviewed before publication.

---

## 24. Local SEO Requirements

Recommended:
- Google Business Profile link;
- consistent business NAP (Name, Address, Phone);
- map/directions;
- LocalBusiness/ProfessionalService structured data;
- social profile links;
- local service/location copy.

---

## 25. Structured Data

Recommended schema types:
- `LocalBusiness`
- `ProfessionalService`
- `Organization`
- `BreadcrumbList`

Use only accurate, client-confirmed information.

---

## 26. Performance Requirements

### Targets
Aim for Lighthouse scores:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

These are targets, not contractual guarantees on every device/network.

### Requirements
- responsive images;
- WebP/AVIF where practical;
- lazy loading;
- minimal JavaScript;
- compressed CSS/JS;
- no unnecessary heavy libraries;
- optimized fonts;
- no autoplay video in hero unless explicitly approved.

---

## 27. Image Requirements

Preferred:
- real project photography;
- real completed work;
- real design renders supplied by client.

Technical:
- responsive image sizes;
- lazy loading;
- descriptive alt text;
- optimized WebP/AVIF;
- avoid serving original multi-megabyte phone photos directly.

---

## 28. Browser Support

Support current versions of:
- Chrome
- Safari
- Edge
- Firefox
- Android browsers
- iOS Safari

Internet Explorer support is not required.

---

## 29. Technical Architecture

### Recommended v1 Stack
Simple static implementation:

```text
HTML5
CSS3
JavaScript
```

Optional developer tooling:
- Vite
- Tailwind CSS

Alternative:
- Astro

React/Next.js is not required unless future functionality justifies it.

---

## 30. Recommended File Structure

```text
src/
    assets/
        images/
        icons/
        fonts/
    css/
        main.css
        components.css
        responsive.css
    js/
        main.js
        gallery.js
        i18n.js
    en/
        index.html
        about.html
        services.html
        projects.html
        gallery.html
        contact.html
    ne/
        index.html
        about.html
        services.html
        projects.html
        gallery.html
        contact.html
```

---

## 31. Hosting Requirements

Suitable static hosting options:
- Cloudflare Pages
- Netlify
- Vercel
- GitHub Pages
- traditional cPanel hosting

Final provider depends on:
- existing client hosting;
- preferred deployment workflow;
- form-handling choice;
- domain setup.

---

## 32. Domain

Domain is **TBD**.

Possible naming patterns:
- `pmsumnima.com`
- `pmsumnimaengineering.com`
- `pmsumnima.com.np`

Availability must be checked before any recommendation is finalized.

---

## 33. Security Requirements

Even for a static site:
- HTTPS required;
- no private keys or secrets committed to source;
- secure form endpoint;
- anti-spam controls;
- safe external link handling;
- Content Security Policy where practical;
- dependency updates if third-party packages are used.

---

## 34. Analytics

Recommended:
- Google Analytics 4
- Google Search Console

Optional:
- Meta Pixel if the business actively runs Meta ads.

Suggested events:
- phone click;
- WhatsApp click;
- contact form submission;
- map/directions click;
- language switch;
- project/gallery engagement.

---

## 35. Content Requirements

The client must provide or approve:

- company description;
- official logo;
- exact office address;
- official email;
- WhatsApp number;
- social profile URLs;
- service descriptions;
- project names/details;
- project images;
- team information;
- registration/license information if displayed;
- opening hours;
- official slogan;
- Nepali translations or translation approval.

---

## 36. Content Rules

Do **not** publish invented:
- project counts;
- years of experience;
- customer counts;
- awards;
- testimonials;
- certifications;
- licenses;
- pricing;
- staff qualifications;
- performance claims.

Use clearly marked placeholders during development until the client confirms content.

---

## 37. Client Confirmation Checklist

The following must be resolved before final production launch:

1. Official logo
2. Business email
3. Domain
4. Hosting provider
5. Exact Google Maps location
6. Which phone number is WhatsApp-enabled
7. Facebook URL
8. TikTok URL
9. Company founding year
10. Registration details
11. Team information
12. Engineer license details
13. Approved service descriptions
14. Project portfolio
15. Number of projects to feature
16. Testimonials, if any
17. Opening hours
18. Final primary CTA
19. Official slogan
20. Translation responsibility
21. Separate service pages or one services page
22. Separate Gallery and Projects or combined
23. Maintenance responsibility
24. Delivery deadline
25. Budget
26. Revision limit
27. Analytics approval
28. Cookie/privacy notice requirement

---

## 38. Privacy & Legal

If analytics or a contact form is used, include:
- privacy notice/page or short privacy section;
- basic statement on how enquiry data is used;
- no unnecessary data collection;
- analytics consent behavior if legally/contractually required.

If the company has legal registration text or mandatory disclosures, the client must provide them.

---

## 39. Acceptance Criteria

The release is accepted when:

- all agreed pages exist;
- all agreed English pages are complete;
- all agreed Nepali pages are complete;
- language switching works correctly;
- navigation works on all target devices;
- mobile layout is usable;
- services are presented correctly;
- projects/gallery render correctly;
- phone links work;
- WhatsApp link works;
- map/directions work;
- contact form sends successfully;
- social links are correct;
- images are optimized;
- SEO metadata is present;
- structured data is valid where used;
- HTTPS is enabled;
- there are no broken internal links;
- there are no blocking console errors;
- accessibility basics are met;
- client-approved content is in production;
- client has completed final review.

---

## 40. QA Checklist

### Devices / Browsers
- [ ] Desktop tested
- [ ] Tablet tested
- [ ] Android tested
- [ ] iPhone tested
- [ ] Chrome tested
- [ ] Edge tested
- [ ] Safari tested
- [ ] Firefox tested

### Content
- [ ] English content approved
- [ ] Nepali content approved
- [ ] Contact details verified
- [ ] Social links verified
- [ ] Project details verified
- [ ] No placeholder text remains

### Functional
- [ ] Phone links tested
- [ ] WhatsApp tested
- [ ] Contact form tested
- [ ] Map tested
- [ ] Language switch tested
- [ ] Gallery lightbox tested
- [ ] Mobile navigation tested

### Technical
- [ ] Images optimized
- [ ] Favicon added
- [ ] Open Graph image added
- [ ] Meta tags present
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] 404 page created
- [ ] Lighthouse audit completed
- [ ] Console checked
- [ ] Broken links checked
- [ ] Structured data validated

---

## 41. Launch Checklist

- [ ] Final client approval received
- [ ] Production domain connected
- [ ] DNS configured
- [ ] HTTPS enabled
- [ ] Final content deployed
- [ ] Final images deployed
- [ ] Contact form delivery tested
- [ ] Google Analytics configured
- [ ] Search Console configured
- [ ] Sitemap submitted
- [ ] robots.txt checked
- [ ] Open Graph preview checked
- [ ] Social links checked
- [ ] Mobile CTA checked
- [ ] Source repository backed up
- [ ] Client ownership/access documented

---

## 42. Maintenance Options

### Option A — No Monthly Maintenance
Changes requested and billed individually.

### Option B — Monthly Maintenance
May include:
- project additions;
- image changes;
- text changes;
- minor bug fixes;
- backups;
- dependency/security updates if tooling is used.

Commercial pricing should be documented separately from this PRD.

---

## 43. Future Phase Possibilities

Possible Version 2+ features:
- CMS;
- admin dashboard;
- project management;
- real-estate listings;
- cost estimator/calculator;
- online quotation requests;
- booking;
- downloadable company profile;
- blog/news;
- careers;
- lead CRM;
- customer portal.

---

## 44. Recommended Project Timeline

| Phase | Estimated Time |
|---|---:|
| Requirements + content collection | 1–2 days |
| Sitemap + wireframes | 1–2 days |
| UI design | 2–4 days |
| Front-end implementation | 3–5 days |
| Nepali implementation | 1–2 days |
| Content population | 1–2 days |
| QA/testing | 1–2 days |
| Client revisions | 1–3 days |
| Deployment | 0.5–1 day |

**Estimated total:** 10–18 working days, assuming timely client feedback and content delivery.

---

## 45. Recommended Delivery Order

```text
1. Requirements freeze
2. Client content collection
3. Sitemap
4. Low-fidelity wireframes
5. Design system
6. Homepage UI
7. Internal page UI
8. Responsive implementation
9. English pages
10. Nepali pages
11. Projects/gallery
12. Contact integrations
13. SEO + analytics
14. QA
15. Client review
16. Production launch
```

---

## 46. Definition of Ready for Development

Development should begin only when the following minimum items are available:

- approved sitemap;
- approved design direction;
- client logo or permission to use temporary wordmark;
- confirmed phone numbers;
- confirmed primary CTA;
- confirmation on English + Nepali scope;
- minimum service list;
- minimum 3–6 usable project/gallery images or approval to launch without projects;
- hosting/deployment approach.

---

## 47. Final Recommended V1 Scope

**Pages**
- Home
- About
- Services
- Projects
- Gallery
- Contact

**Languages**
- English
- Nepali

**Core Features**
- responsive navigation;
- bilingual switching;
- services presentation;
- project/gallery showcase;
- phone CTA;
- WhatsApp CTA;
- Google Maps;
- Facebook/TikTok links;
- contact form;
- SEO;
- analytics;
- optimized images;
- accessibility baseline;
- lightweight animations.

This scope provides a professional production-ready website without overengineering the first release.
