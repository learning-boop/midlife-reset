# Kaya Reset Clinic

React 18 + Vite 5, React Router 6, plain CSS (no Tailwind).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serves dist/ at http://localhost:4173
```

## How it is put together

A single-page app: one `index.html`, and the router decides what renders at
each address. Navigating between pages never reloads.

| Address | Renders | Source |
|---|---|---|
| `/` | home | `src/App.jsx` |
| `/about` | Dr Sarika | `src/AboutPage.jsx` |
| `/menopause` | menopause care | `src/MenopausePage.jsx` |
| `/metabolic` | metabolic health | `src/MetabolicPage.jsx` |
| `/longevity` | longevity care | `src/LongevityPage.jsx` |
| `/fees` | fees | `src/FeesPage.jsx` |

`src/routes.jsx` holds that table along with each page's `<title>` and meta
description, which `usePageMeta` applies as the route mounts. The old
`/*.html` addresses redirect to their replacements, and any other path falls
back to the home page.

Two components do the work the browser used to do for free, and both are
commented with why: `ScrollManager` handles where a page starts and restores
your place on Back, and `SiteLink` sends site paths through the router while
leaving external links, email addresses and same-page anchors as plain
anchors.

## Deploying

Every address other than `/` has to be served `index.html`, or a refresh on
`/fees` returns 404 before the app can run. Two forms of that ship with the
build:

- `public/_redirects` — Netlify, Cloudflare Pages.
- `dist/404.html`, a copy of `index.html` written by a small plugin in
  `vite.config.js` — GitHub Pages and others that use a 404 page as the
  fallback.

Apache wants a `.htaccess` rewrite and nginx a `try_files $uri /index.html`;
neither is in the repo. `npm run dev` and `npm run preview` already do it.

## Editing

- All copy lives in `src/data/content.js`. Edit text there, not in components.
- `site.domain`, `site.email` and `site.whatsapp` in `content.js` are still
  placeholders, and the footer address is from the previous branding.
- Photograph provenance and crop ratios are recorded in
  `public/images/README.md`. Service-card photographs are 1.786:1.
- The mailing form in `src/components/Mailing.jsx` has a TODO for the list
  provider.

## Known trade-off

A crawler that does not run JavaScript sees only `index.html` — one title and
one description for the whole site. Google executes scripts and will index the
pages; others may not. Prerendering or SSR is the answer if that matters.
