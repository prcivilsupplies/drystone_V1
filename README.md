# DryStone Construction

Website for DryStone Construction — a premium construction company based in Sydney, NSW, specialising in aluminium windows, Hebel/AAC/concrete flooring, wall cladding, and professional rendering across some parts of nsW.

## Tech Stack

- **Framework**: TanStack Start (React 19 + TanStack Router v1)
- **Build**: Vite 7
- **Styling**: Tailwind CSS 4 + custom CSS (Barlow Condensed font, forest green + amber palette)
- **Language**: TypeScript 5.7 (strict mode)
- **Deployment**: Netlify

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:3000` (or `http://localhost:8888` via Netlify CLI).

## Building for Production

```bash
npm run build
```

Output goes to `dist/client/`.

## Project Structure

```
src/
├── components/       # Header, Footer
├── data/services.ts  # Service catalog (4 services)
├── routes/
│   ├── __root.tsx          # Root layout
│   ├── index.tsx            # Homepage
│   ├── contact.tsx          # Contact / quote form
│   └── services/$serviceId.tsx  # Dynamic service detail pages
└── styles.css               # Global styles + Tailwind
public/images/               # Company photos and logo assets
```

## Services

1. **Aluminium Windows** — `/services/aluminium-windows`
2. **Concrete Flooring** — `/services/flooring`
3. **Wall Cladding** — `/services/wall-cladding`
4. **Professional Rendering** — `/services/rendering`
