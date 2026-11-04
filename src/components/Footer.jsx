import Logo from './Logo'
import { footer, site, social } from '../data/content'
import BookLink from './BookLink'
import SiteLink from './SiteLink'

export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="fgrid">
          <div>
            <h3>Do you have a question?</h3>
            <p>{footer.tagline}</p>
            {/* Both the address and the domain are shown only once they are
                real. An address nobody reads is worse than none: the reader
                writes, nothing bounces visibly, and they are left waiting. The
                booking link is the way in until then. */}
            <div className="fcontact">
              {site.email && <a href={`mailto:${site.email}`}>Email us</a>}
              <BookLink className="">Book a discovery call</BookLink>
            </div>
            {site.domain && <p className="fdomain">{site.domain}</p>}
          </div>
          {footer.columns.map(([heading, links]) => (
            <div key={heading}>
              <h4>{heading}</h4>
              <ul>{links.map(([label, href]) => <li key={label}><SiteLink href={href}>{label}</SiteLink></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="fbottom">
          <Logo />
          {/* Each opens in its own tab, with noopener so the page being left
              cannot be reached by the one arriving. The two-letter label is
              the visible mark; the accessible name is the full one. */}
          <div className="social">
            {social.map(([name, mark, href]) => (
              <a key={name} href={href} aria-label={name} target="_blank" rel="noopener noreferrer">{mark}</a>
            ))}
          </div>
          <span>© {new Date().getFullYear()} {site.name} · Dr Sarika Gorantyal</span>
        </div>
      </div>
    </footer>
  )
}
