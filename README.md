# StrategEASE — Website Redesign (React)

A full rebuild of www.strategeaseinc.com per the 2026 repositioning brief, built in React with React Router. Fully responsive (mobile, tablet, desktop).

## Run locally

```bash
npm install
npm run dev
```

Open the printed localhost URL. For a production build:

```bash
npm run build
npm run preview
```

`npm run build` outputs static files to `dist/` — deployable to any static host (Vercel, Netlify, S3 + CloudFront, etc.) or served behind a Node/Express server.

## What's included

- **Pages**: Home, Who We Are, What We Do (Services), Proven Impact, Contact — matching the brief's proposed sitemap (Section 5). Bootcamp is intentionally omitted per the brief's unpublish decision (Section 12.8); add it back as a route when the P2 productized offering is ready.
- **Signature visual**: a native SVG rebuild of the StrategEASE OS five-phase diagram (`src/components/StrategEaseOS.jsx`) — no dependency on the original PNG, fully responsive, with descriptive `aria-label` alt text.
- **Proven Impact band**: the three dollar-figure results (`src/components/ProvenImpact.jsx`), reused on Home and the dedicated Proven Impact page.
- **Signature Tools**: the five trademarked tools with proper `™` superscript markup (`src/components/SignatureTools.jsx`).
- **Contact / Briefing form**: client-side validated, with a thank-you confirmation state (`src/pages/Contact.jsx`). You'll need to wire the `handleSubmit` function to a real email/CRM endpoint — currently it only validates and shows a confirmation locally.
- **Design tokens**: all color/type/spacing values centralized in `src/index.css` as CSS custom properties.
- **Copy**: pulled directly from the brief's paste-ready copy blocks (Sections 7–10).

## Before launch — items the brief flags as needing sign-off

1. **Client naming approval** (Brief §A.2): "United Way of the Mid-South" is named directly in `ProvenImpact.jsx` and `ProvenImpactPage.jsx`. If not yet approved, swap to the fallback: "Proven Impact: Community Impact Organization."
2. **Trademark registration status** (Brief §A.3): tools use `™` (unregistered mark). Don't switch to `®` unless registration is confirmed.
3. **Logo files**: header/footer currently render a placeholder NC monogram built in SVG (`src/components/Logo.jsx`). Swap in the real logo once received.
4. **Analytics**: add GA4 and fire a conversion event on briefing-form submit (Brief §12.6).
5. **Form backend**: connect the Contact form to a real submission endpoint with spam protection.
6. **Contact details**: verify address/phone/email are current (Brief §15).

## Tech stack

- React 19 + Vite
- React Router v6
- No external UI library — custom components hand-styled to match the brief's black-and-gold systems aesthetic
- Fonts: Fraunces (display) + Inter (body), via Google Fonts

## Accessibility

Built toward WCAG 2.1 AA per Brief §12.5: semantic headings, labeled form fields with inline errors, visible focus states, `aria-label` on the OS diagram, keyboard-navigable nav and mobile menu, `prefers-reduced-motion` respected.
