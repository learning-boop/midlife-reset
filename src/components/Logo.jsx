import LogoMark from './LogoMark'
import SiteLink from './SiteLink'
import { site } from '../data/content'

// The wordmark sets "Reset" apart from the words around it — the serif the
// brand's own lockup is drawn in, with the middle word in italic and the
// accent colour. The three parts are plain spans, so the link's accessible
// name is still the clinic's name read straight through.
export default function Logo({ href = '/#top' }) {
  const [first, mark, last] = site.nameParts
  return (
    <SiteLink className="logo" href={href}>
      <span className="logo-mark"><LogoMark /></span>
      <span className="logo-text">
        {first} <span className="logo-accent">{mark}</span> {last}
      </span>
    </SiteLink>
  )
}

