# AGENTS.md

This document describes the architecture and conventions for the DryStone Construction website. Read this before making changes.

## Project Overview

Marketing website for DryStone Construction. Displays residential construction, project management and five specialist services with image-led design, and a contact/quote request form. No database, no authentication.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
public/images/          # All company photos (logo, service images, hero)
src/
├── components/
│   ├── Header.tsx      # Sticky nav with transparent-on-home behaviour
│   └── Footer.tsx      # Footer with service links and contact
├── data/
│   └── services.ts     # Single source of truth for all service data
├── routes/
│   ├── __root.tsx      # Root layout: wraps Header + Footer around all pages
│   ├── index.tsx       # Homepage: Hero, Services grid, About, Why Us, CTA
│   ├── contact.tsx     # Contact page with quote form (client-side validation)
│   └── services/
│       └── $serviceId.tsx  # Dynamic service detail page (loads from services.ts)
└── styles.css          # Global styles: Tailwind + fonts + component classes
```

## Key Conventions

### Adding or Editing Services
All service data lives in `src/data/services.ts`. Each service has an `id` (URL slug), name, description, features list, and images. Optional `imageExamples` entries provide descriptive alt text, captions and source credits for representative photography; `exampleNote` explains its context. The `$serviceId.tsx` route dynamically renders any service. To add a service: add an entry to `services.ts` and place the image in `public/images/`.

### Routing
TanStack Router with file-based routing. `routeTree.gen.ts` is auto-generated — never edit manually. Use `createFileRoute('/path')` at the top of each route file.

### Styling Approach
- Tailwind utility classes for layout and spacing.
- CSS custom properties in `styles.css` for brand colours: `--forest`, `--amber`, `--stone-light`.
- Named CSS classes for reusable patterns: `btn-primary`, `btn-outline`, `section-label`, `nav-link`, `form-input`, `service-card`.
- Font: Michroma, a geometric approximation of the DryStone logo lettering, used for all page text. Self-hosted in `public/fonts/` with its licence and declared in `styles.css`. The original logo font has not been verified; avoid introducing additional type families.

### Colour Palette
- `--forest` `#1a4d2e` — primary green (brand)
- `--forest-dark` `#0f2e1a` — dark green (header, hero overlays)
- `--amber` `#e67e22` — warm orange accent (CTAs, highlights)
- Stone `#f5f2ed` — warm off-white (section backgrounds)

### Header Behaviour
The header is transparent on the homepage and becomes solid dark after scrolling 60px. On all other pages it is always solid. See `Header.tsx` — uses `useRouterState` path check combined with a scroll listener.

### Contact Form
Uses local React state for validation and submits URL-encoded enquiries to Netlify Forms at `/__forms.html`. The static registration file in `public/__forms.html` must contain every submitted field. Service-page quote links pass the service ID to preselect the form. Success is shown only after an accepted HTTP response; failures preserve the form. The Netlify Forms activation marker is required on deployment. Live receipt must be verified after deployment.

## Non-Obvious Decisions

- The homepage services gallery uses a 12-column editorial grid with 7+5, 4+4+4 and 5+7 arrangements. It collapses to a single column on phones.
- The homepage hero has manual slide controls. Service heroes use full-width photography and straight section transitions. Project management has a dedicated five-stage process in `ProjectJourney.tsx`.
- All company images were moved from `.netlify/assets/` to `public/images/` during initial setup.

### Search metadata
`src/lib/seo.ts` defines page metadata, canonical URLs and truthful organisation, service and breadcrumb structured data. Regenerate `public/sitemap.xml` with `node --experimental-strip-types scripts/generate-sitemap.mjs` when services change. Do not invent addresses, ratings or ranking guarantees. See `docs/seo-and-leads.md` for verification and measurement steps.
