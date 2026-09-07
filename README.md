# The Midlife Reset — React home page

Vite + React 18, plain CSS (no Tailwind). Layout modelled on menopausecare.co.uk.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

- All copy lives in `src/data/content.js` — edit text there, not in components.
- Replace `site.bookingUrl`, `site.email`, `site.whatsapp` in `content.js`.
- Images are Unsplash placeholders; swap the `image` / card URLs when client photography arrives.
- Mailing form in `src/components/Mailing.jsx` has a TODO for the list provider.
