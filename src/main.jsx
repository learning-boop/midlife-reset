import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { routes } from './routes'
import ScrollManager from './components/ScrollManager'
import usePageMeta from './components/usePageMeta'
import './index.css'

// Each route's title and description are set by a wrapper rather than inside
// the page components, so a page stays a page and knows nothing about where it
// sits in the site.
function Page({ title, description, children }) {
  usePageMeta(title, description)
  return children
}

// The old addresses ended in .html, one real file per page. They are still in
// the wild — in search results, in anything already linked or bookmarked — so
// each one sends the reader to the page that replaced it instead of failing.
const legacy = [
  ['/index.html', '/'],
  ['/about.html', '/about'],
  ['/menopause.html', '/menopause'],
  ['/metabolic.html', '/metabolic'],
  ['/longevity.html', '/longevity'],
  ['/fees.html', '/fees'],
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        {routes.map((r) => (
          <Route
            key={r.path}
            path={r.path}
            element={<Page title={r.title} description={r.description}>{r.element}</Page>}
          />
        ))}
        {legacy.map(([from, to]) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
        {/* anything else is not a page of this site: show the home page rather
            than a blank screen, and put the reader at an address that exists */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
