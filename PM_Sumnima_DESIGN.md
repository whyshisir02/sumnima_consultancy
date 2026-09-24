# PM & Sumnima Engineering Consultancy Website — UI/UX Design Specification

**Document Version:** 1.0  
**Related PRD:** `PRD.md`  
**Design Goal:** Modern, trustworthy engineering/architecture website with strong mobile usability and bilingual support.

---

## 1. Design Direction

The supplied poster uses bold blue, red, white, building imagery, and dense promotional information.

The website should **preserve brand recognition without copying the poster’s dense visual style**.

### Desired Visual Character
- modern;
- professional;
- architectural;
- technical;
- premium but approachable;
- local and trustworthy;
- visually clean.

### Avoid
- poster-like overcrowding;
- too many bright colors;
- excessive gradients;
- heavy shadows;
- blinking/animated banners;
- clip-art styling;
- low-quality stock imagery;
- text baked into images;
- excessive card borders.

---

## 2. Brand Strategy

### Primary Brand Color
Deep engineering blue.

Suggested starting value:
```css
--color-primary: #123A8C;
```

### Accent Color
Construction/action red.

Suggested starting value:
```css
--color-accent: #E52521;
```

### Neutral Colors

```css
--color-text: #1B1F24;
--color-text-muted: #5E6673;
--color-bg: #FFFFFF;
--color-bg-soft: #F6F8FB;
--color-border: #E5E9F0;
--color-dark: #0F1720;
```

> Final colors should be visually checked against the official logo when provided.

---

## 3. Typography

### English
Preferred:
- **Inter**
- fallback: `system-ui, -apple-system, Segoe UI, sans-serif`

Alternative:
- Manrope
- Poppins

### Nepali
Preferred:
- **Noto Sans Devanagari**

### Type Scale

```text
Display / Hero H1: 48–64px desktop / 36–44px mobile
H1: 44–52px
H2: 34–40px
H3: 24–28px
Body Large: 18–20px
Body: 16px
Small: 14px
Caption: 12–13px
```

### Line Height
- headings: 1.1–1.25
- body: 1.55–1.7

Nepali body copy may require slightly more line height.

---

## 4. Layout System

### Max Content Width
```css
max-width: 1200px;
```

### Horizontal Padding
```text
Mobile: 20px
Tablet: 32px
Desktop: 48px
```

### Section Spacing
```text
Desktop: 88–120px
Tablet: 72–88px
Mobile: 56–72px
```

### Grid
Use a 12-column desktop grid where appropriate.

Common layouts:
- 2-column: 6/6
- services: 3 or 4 columns
- project grid: 3 columns desktop, 2 tablet, 1 mobile

---

## 5. Header / Navbar

### Desktop
Height: approximately 76–84px.

Structure:

```text
[Logo]  Home  About  Services  Projects  Gallery  Contact   EN | नेपाली   [Consultation]
```

### Behavior
- sticky header after scroll;
- subtle background change on scroll;
- no oversized shadow;
- active nav item clearly visible;
- CTA uses accent or primary color.

### Mobile
Structure:

```text
[Logo]                  [EN/ने] [☰]
```

Expanded menu:
- Home
- About
- Services
- Projects
- Gallery
- Contact
- Primary CTA

Menu should open as:
- slide-down panel;
or
- full-screen drawer.

---

## 6. Homepage Wireframe

```text
┌─────────────────────────────────────────────────────┐
│ LOGO         NAVIGATION        EN/ने     CTA       │
├─────────────────────────────────────────────────────┤
│                                                     │
│  HERO TEXT                    HERO IMAGE            │
│  Engineering, Design &        Building / Project    │
│  Construction Solutions       image                 │
│                                                     │
│  Short supporting text                              │
│  [Request Consultation] [View Projects]             │
│                                                     │
├─────────────────────────────────────────────────────┤
│ TRUST / SERVICE SUMMARY STRIP                       │
│ Design | Valuation | Costing | Survey | Construction│
├─────────────────────────────────────────────────────┤
│ OUR SERVICES                                        │
│ [Card] [Card] [Card]                                │
│ [Card] [Card] [Card]                                │
├─────────────────────────────────────────────────────┤
│ ABOUT PREVIEW                                       │
│ Image / drawing          Text + CTA                 │
├─────────────────────────────────────────────────────┤
│ FEATURED PROJECTS                                   │
│ [Project] [Project] [Project]                       │
├─────────────────────────────────────────────────────┤
│ WHY CHOOSE / VALUE                                  │
│ 3–4 factual trust points                            │
├─────────────────────────────────────────────────────┤
│ OUR PROCESS                                         │
│ 01 → 02 → 03 → 04                                   │
├─────────────────────────────────────────────────────┤
│ CTA BANNER                                          │
│ Planning your project? Talk to us.                  │
│ [Call] [WhatsApp]                                   │
├─────────────────────────────────────────────────────┤
│ CONTACT PREVIEW + MAP                               │
├─────────────────────────────────────────────────────┤
│ FOOTER                                              │
└─────────────────────────────────────────────────────┘
```

---

## 7. Hero Section Design

### Layout
Desktop:
- 50–55% text;
- 45–50% image.

Mobile:
- text first;
- image below.

### Hero Content
Recommended eyebrow:
> PM & Sumnima Engineering Consultancy

Headline:
> Engineering, Design & Construction Solutions in Dharan

Supporting text:
> Building design, valuation, costing, surveying, interior design, construction and real-estate-related consultancy.

### CTA Hierarchy
Primary:
- solid primary or accent button.

Secondary:
- outline/ghost button.

### Hero Image Style
Preferred:
- real completed building/project;
- high-resolution architectural render;
- no poster screenshots;
- no text inside image.

Optional subtle overlay:
- architectural grid/line motif;
- low-opacity blueprint geometry.

---

## 8. Services Section Design

### Section Header
- eyebrow label;
- H2;
- short supporting copy.

### Service Card
Each card:
- 48px icon;
- title;
- short description;
- arrow/link.

Card behavior:
- subtle elevation on hover;
- slight icon translation;
- no dramatic scaling.

### Desktop
3-column grid.

### Mobile
1-column or 2-column depending on available width.

---

## 9. Project Cards

### Card Structure
```text
[Project Image]
Project Title
Category / Location
[View Project →]
```

### Image Ratio
Recommended:
- 4:3
or
- 3:2

### Hover
- image zoom 1.02–1.04 max;
- overlay with project category;
- keep motion subtle.

---

## 10. Gallery

### Layout
Recommended:
- masonry-like responsive grid;
or
- uniform 3-column grid.

### Interaction
Click opens lightbox with:
- image;
- next/previous;
- close button;
- keyboard controls;
- optional project caption.

### Mobile
- 2 columns where practical;
- 1 column for larger images.

---

## 11. About Page Layout

```text
Hero / Page Title
↓
Company Introduction
↓
Mission + Vision
↓
What We Do
↓
Team / Credentials (if supplied)
↓
CTA
```

Use real office/team/project imagery if available.

---

## 12. Services Page Layout

Option A — Single-page services:
```text
Page intro
Service 1
Service 2
Service 3
...
CTA
```

Option B — Service cards + individual pages.

For v1, a single well-structured Services page is preferred unless SEO/content depth justifies separate pages.

---

## 13. Contact Page Layout

Desktop 2-column layout:

```text
LEFT
Contact information
Phone
WhatsApp
Email
Address
Business hours
Social links

RIGHT
Contact form
```

Below:
- embedded map / directions block.

Mobile:
- contact info first;
- form second;
- map third.

---

## 14. Buttons

### Primary Button
- height: 48–52px;
- horizontal padding: 20–28px;
- medium/semibold weight;
- 8–10px radius.

### Secondary Button
- outline using primary color;
- white background.

### CTA Labels
Prefer action-focused text:
- Request Consultation
- Call Now
- WhatsApp Us
- View Projects
- Learn More

Avoid vague labels:
- Submit
- Click Here
- More

---

## 15. Border Radius

Use restrained radii:

```text
Buttons: 8–10px
Cards: 12–16px
Large media blocks: 16–20px
```

Do not use overly rounded "bubble" UI.

---

## 16. Shadows

Use only subtle shadows:

```css
box-shadow: 0 8px 24px rgba(15, 23, 32, 0.08);
```

Avoid dark, heavy shadows.

---

## 17. Iconography

Preferred:
- Lucide
- Heroicons
- Phosphor

Style:
- outline icons;
- consistent stroke weight;
- no mixed icon families.

Suggested service icons:
- Building Design → Building / Ruler
- Valuation → Calculator / FileCheck
- Estimate → ClipboardList
- Interior → Sofa / Panels
- Survey → Map / Crosshair
- Construction → HardHat
- Real Estate → Home / Landmark

---

## 18. Imagery Direction

Preferred image hierarchy:
1. real client projects;
2. architectural renders;
3. site/construction photos;
4. team/office photos;
5. stock images only as fallback.

### Image Treatment
- natural color;
- high clarity;
- no excessive filters;
- consistent aspect ratios;
- optional subtle blue overlay only for text legibility.

---

## 19. Mobile UX Requirements

Critical because many local users will likely arrive on mobile.

### Must Have
- fast loading;
- large tap targets;
- visible phone/WhatsApp actions;
- readable Nepali;
- no horizontal scrolling;
- simple navigation;
- compressed images.

### Sticky Mobile Contact Bar
Optional but recommended:

```text
[Call]   [WhatsApp]
```

Use only if it does not obstruct content.

---

## 20. Language Switcher UX

### Desktop
Use:
```text
EN | नेपाली
```

### Mobile
Keep visible in header or mobile menu.

### Behavior
Switch to the equivalent page in the other language.

Example:
```text
/en/services.html ↔ /ne/services.html
```

Do not redirect users to the home page when switching languages from an internal page.

---

## 21. Motion / Animation

Use light motion only.

Recommended:
- fade-up sections;
- 150–300ms button/card transitions;
- subtle image reveal;
- sticky header transition.

Avoid:
- parallax-heavy effects;
- scroll-jacking;
- large bouncing text;
- animation on every element;
- autoplay carousel in the hero.

Respect:
```css
@media (prefers-reduced-motion: reduce)
```

---

## 22. Footer Design

### Desktop
4-column layout:

```text
Company
Quick Links
Services
Contact / Social
```

### Footer Bottom
- copyright;
- privacy link;
- language links.

### Background
Dark navy/charcoal.

---

## 23. Component Inventory

Reusable components:

- Header
- Mobile Navigation
- Language Switcher
- Hero
- Section Heading
- Service Card
- Project Card
- Gallery Item
- Testimonial Card (only if real testimonials exist)
- Team Card
- Process Step
- CTA Banner
- Contact Info Block
- Contact Form
- Map Block
- Breadcrumb
- Footer
- Floating WhatsApp Button
- Lightbox

---

## 24. Design Tokens

Example:

```css
:root {
  --color-primary: #123A8C;
  --color-accent: #E52521;

  --color-text: #1B1F24;
  --color-text-muted: #5E6673;
  --color-bg: #FFFFFF;
  --color-bg-soft: #F6F8FB;
  --color-border: #E5E9F0;
  --color-dark: #0F1720;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;

  --container: 1200px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
}
```

---

## 25. Responsive Breakpoints

Recommended:

```css
/* Mobile first */
@media (min-width: 640px) {}
@media (min-width: 768px) {}
@media (min-width: 1024px) {}
@media (min-width: 1280px) {}
```

Practical design categories:

```text
Mobile: < 768px
Tablet: 768–1023px
Desktop: ≥ 1024px
```

---

## 26. Accessibility Design Requirements

- minimum readable body size: 16px;
- contrast ratio consistent with WCAG AA;
- no text solely communicated through color;
- visible keyboard focus ring;
- buttons must have clear text labels;
- menu must be keyboard operable;
- forms must use real labels;
- errors must include text;
- lightbox must trap focus appropriately;
- all meaningful images need alt text.

---

## 27. Empty / Missing Content States

Because client content may arrive gradually:

### No Projects Yet
Display:
> Project portfolio will be added soon.

Do not use fake projects.

### No Testimonials
Hide the section entirely.

### Missing Team Data
Do not show team cards with placeholders in production.

### Missing Email
Do not display a fake email.

---

## 28. Homepage Design Priority

Priority order:

1. Clear company identity
2. Clear services
3. Strong contact CTA
4. Real project imagery
5. Trust/credibility
6. Location
7. Secondary content

The user should understand:
- who the company is;
- what they do;
- where they are;
- how to contact them

within one or two screenfuls.

---

## 29. Suggested Desktop Homepage Composition

```text
Header
Hero
Services strip
Services grid
About preview
Featured projects
Why choose / capabilities
Process
CTA band
Contact/map preview
Footer
```

---

## 30. Suggested Mobile Homepage Composition

```text
Header
Hero text
Hero image
Primary CTA buttons
Services
Featured projects
About preview
Process
CTA
Contact
Map
Footer
```

---

## 31. Figma / Design Handoff Requirements

If designed in Figma, final handoff should include:

- Desktop frames
- Mobile frames
- Component library
- Color styles
- Type styles
- Button variants
- Form states
- Navbar states
- Hover/focus states
- Empty states
- English + Nepali examples
- spacing tokens
- image aspect-ratio notes

Suggested frame widths:
- Desktop: 1440px
- Tablet: 1024px
- Mobile: 390px

---

## 32. Design Acceptance Criteria

Design is ready for implementation when:

- homepage desktop approved;
- homepage mobile approved;
- service page structure approved;
- projects/gallery structure approved;
- contact page approved;
- English typography approved;
- Nepali typography tested;
- colors approved;
- CTA hierarchy approved;
- components are reusable;
- no unresolved major content-layout dependency remains.

---

## 33. Recommended Visual Outcome

The final site should feel like:

> **A professional engineering consultancy website, not a digital version of an advertising poster.**

The poster should inform:
- color direction;
- company identity;
- service list;
- contact information.

The website should improve:
- readability;
- hierarchy;
- trust;
- mobile usability;
- professionalism;
- conversion.
