# Travel Beyond — Luxury Travel Agency Website

A premium, animated, frontend-only React + Vite site built for Travel Beyond.
No backend, no database — all content lives in `src/data/*.js`.

## Tech Stack

- React 18 + Vite
- React Router DOM (routing, incl. `/packages/:id`)
- Tailwind CSS (light luxury theme — sand / gold / beige)
- Framer Motion (scroll reveals, page transitions, micro-interactions)
- React Three Fiber + drei (hero 3D particles & wireframe globe)
- Swiper (testimonials carousel)
- Lenis (buttery smooth scrolling)
- React Icons

## Getting Started

This project was built without network access in the build sandbox, so
dependencies are **not** pre-installed. On your own machine, run:

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Structure

```
src/
  assets/       logo, etc.
  components/   reusable UI: cards, reveal wrappers, loader, nav banner
  components/scene/  Three.js / R3F pieces (particles, globe, canvas)
  data/         packages.js, gallery.js — all site copy & package info
  hooks/        useLenis, useScrollToTop
  layouts/      Navbar, Footer
  pages/        Home, About, Packages, PackageDetails, Gallery, Contact, NotFound
  sections/     Hero, Stats, WhyChooseUs, Destinations, Services, Testimonials, CTA, etc.
  styles/       Tailwind entry + small custom utility classes
```

## Content

All package details (Bali, Delhi, Kerala, Malaysia, Punjab, Rajasthan,
Singapore, Thailand, Varanasi), company info, contact details and business
hours were extracted from the client's existing site screenshots and rewritten
into `src/data/packages.js`. Photography is placeholder (Unsplash) — swap in
licensed photography before launch by replacing the URLs in that file and in
`src/data/gallery.js`.

## Notes

- The logo (`src/assets/logo.png`) is used in the navbar, footer, and loading
  screen. Also copied to `public/favicon.png` as a favicon placeholder —
  replace with a proper multi-size favicon before launch.
- Colors, type and layout follow the brief: light theme, sand/gold/beige
  palette, rounded corners, soft shadows, glassmorphism accents.
- Reduced-motion users still get a fully usable site — animations are
  progressive enhancement, not required for content access.
