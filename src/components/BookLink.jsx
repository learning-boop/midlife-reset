import { site } from '../data/content'

// Every "book" button leaves for another site: the discovery call to Dr
// Sarika's Google appointment page, which is the default, and a paid
// appointment to helfy when the caller passes that address. Either opens in a
// new tab so the reader does not lose the page they were on, with
// rel="noopener" so the opened page cannot reach back through window.opener.
// Centralised here so both addresses live in one place.
export default function BookLink({ href = site.bookingUrl, className = 'btn btn-plum', children, ...rest }) {
  return (
    <a
      className={className || undefined}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  )
}

