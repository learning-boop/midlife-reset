import { site } from '../data/content'

// Every "book" button goes to the clinic's Google appointment page, which is
// another site. It opens in a new tab so the reader does not lose the page they
// were on, and rel="noopener" stops the opened page reaching back through
// window.opener. Centralised here so the booking address lives in one place.
export default function BookLink({ className = 'btn btn-plum', children, ...rest }) {
  return (
    <a
      className={className || undefined}
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  )
}

