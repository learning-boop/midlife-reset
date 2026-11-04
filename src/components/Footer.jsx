import Logo from './Logo'
import { footer, site } from '../data/content'
import BookLink from './BookLink'
import SiteLink from './SiteLink'
import SocialLinks from './SocialLinks'
import CredsStrip from './CredsStrip'

export default function Footer() {
  return (
    <>
      {/* a light band of accreditation marks immediately above the dark
          footer, on every page because the footer is */}
      <CredsStrip />
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
            <SocialLinks />
            <span>© {new Date().getFullYear()} {site.name} · Dr Sarika Gorantyal</span>
          </div>
        </div>
      </footer>
    </>
  )
}
