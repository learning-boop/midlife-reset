import { social } from '../data/content'

// The two marks, drawn rather than fetched: an icon font or a CDN sprite would
// be a network request and a licence for two shapes. Both are stroked in
// currentColor at the same weight as each other, so they sit in the footer's
// pale green and on the light ground of Dr Sarika's page without a second set.
const ICONS = {
  ig: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.1" cy="6.9" r="1.15" fill="currentColor" stroke="none" />
    </>
  ),
  in: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v1.5" />
      <rect x="2" y="9" width="4" height="12" rx="1" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
}

// The link carries the name; the drawing is decoration on top of it, so it is
// hidden from a screen reader rather than read out twice.
export default function SocialLinks({ className = '' }) {
  return (
    <div className={`social ${className}`.trim()}>
      {social.map(([name, mark, href]) => (
        <a key={name} href={href} aria-label={name} target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
               strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            {ICONS[mark]}
          </svg>
        </a>
      ))}
    </div>
  )
}
