import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

// One app, one HTML file. The router decides what renders at each address, so
// index.html is the only entry and Vite's default input is right.
//
// The catch with that is the server: ask it for /fees directly — by typing the
// address, refreshing, or following a link from elsewhere — and it looks for a
// file of that name, finds none and returns 404. The app never gets to run.
// Every static host needs telling to serve index.html for unknown paths
// instead. public/_redirects does it on Netlify and Cloudflare Pages; the
// plugin below writes a copy of index.html as 404.html, which is how GitHub
// Pages and several others are told the same thing. Vite's own dev and preview
// servers already do it, so this only matters once the site is deployed.
// It copies the built file rather than emitting one during the bundle: Vite
// writes index.html after generateBundle has run, so there is nothing to copy
// until the build closes.
function spaFallback() {
  let outDir = ''
  return {
    name: 'spa-fallback-404',
    apply: 'build',
    configResolved(config) { outDir = resolve(config.root, config.build.outDir) },
    closeBundle() {
      const page = resolve(outDir, 'index.html')
      if (existsSync(page)) copyFileSync(page, resolve(outDir, '404.html'))
    },
  }
}

export default defineConfig({
  plugins: [react(), spaFallback()],
})
