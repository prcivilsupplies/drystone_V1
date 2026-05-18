# AGENTS.md

This document describes the architecture and conventions for the DryStone Construction website. Read this before making changes.

## Project Overview

Marketing website for DryStone Construction (Muswellbrook NSW). Displays four core services with image-led design, and a contact/quote request form. No database, no authentication.

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
All service data lives in `src/data/services.ts`. Each service has an `id` (URL slug), name, description, features list, and images. The `$serviceId.tsx` route dynamically renders any service. To add a service: add an entry to `services.ts` and place the image in `public/images/`.

### Routing
TanStack Router with file-based routing. `routeTree.gen.ts` is auto-generated — never edit manually. Use `createFileRoute('/path')` at the top of each route file.

### Styling Approach
- Tailwind utility classes for layout and spacing.
- CSS custom properties in `styles.css` for brand colours: `--forest`, `--amber`, `--stone-light`.
- Named CSS classes for reusable patterns: `btn-primary`, `btn-outline`, `section-label`, `nav-link`, `form-input`, `service-card`.
- Font: Barlow Condensed (headings) + Barlow (body), loaded from Google Fonts in `styles.css`.

### Colour Palette
- `--forest` `#1a4d2e` — primary green (brand)
- `--forest-dark` `#0f2e1a` — dark green (header, hero overlays)
- `--amber` `#e67e22` — warm orange accent (CTAs, highlights)
- Stone `#f5f2ed` — warm off-white (section backgrounds)

### Header Behaviour
The header is transparent on the homepage and becomes solid dark after scrolling 60px. On all other pages it is always solid. See `Header.tsx` — uses `useRouterState` path check combined with a scroll listener.

### Contact Form
Uses local React state for validation and a simulated submission. To wire up real submissions, use Netlify Forms (see `.agents/skills/netlify-forms-tanstack/SKILL.md`).

## Non-Obvious Decisions

- The services grid on the homepage uses an asymmetric 7+5 column CSS grid rather than equal cards — editorial/magazine aesthetic.
- The hero section uses a CSS `clip-path` polygon wedge at the bottom for a diagonal transition into the white section below.
- All company images were moved from `.netlify/assets/` to `public/images/` during initial setup.
