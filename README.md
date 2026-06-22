# Portfolio — Bui Duc Phat

Personal portfolio site. Dark/tech theme, single page.
**Stack:** React + Vite + Tailwind v4 + framer-motion + lucide-react.

## Run locally

```bash
cd portfolio
npm install        # first time only
npm run dev        # → http://localhost:5173
```

> Node was installed via `nvm` (v24). A fresh terminal should already have `node`/`npm`
> on PATH. If not: `nvm use --lts`.

## Edit content

All text/projects/experience live in **`src/data/content.js`** — edit there, no need to
touch components.

## Swap the portrait photo

Replace **`public/portrait.png`** with the new image (keep the same filename). A roughly
4:5 (portrait) crop looks best. No code change needed.

## Deploy (later)

- **Vercel:** import the repo → framework auto-detected (Vite) → deploy.
- **GitHub Pages:** set `base: '/portfolio/'` in `vite.config.js`, run `npm run build`,
  publish `dist/`.

## Structure

```
src/
├── App.jsx                 # composes the page
├── data/content.js         # ← all content lives here
└── components/
    ├── Background.jsx       # ambient gradient + grid
    ├── Nav.jsx  Hero.jsx
    ├── Work.jsx             # featured project + cards
    ├── About.jsx  Skills.jsx  Experience.jsx  Contact.jsx
    ├── Section.jsx          # section heading wrapper
    └── Reveal.jsx           # scroll-reveal animation
public/
├── portrait.png            # ← swap this
└── projects/               # SupplyPulse screenshots
```
