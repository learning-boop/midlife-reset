import Logo from './Logo'
import { footer, site } from '../data/content'

export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="fgrid">
          <div>
            <h3>Do you have a question?</h3>
            <p>{footer.tagline}</p>
            <div className="fcontact">
              <a href={site.email}>Email us</a>
              <a href={site.bookingUrl}>Book a discovery call</a>
            </div>
            <p className="fdomain">{site.domain}</p>
          </div>
          {footer.columns.map(([heading, links]) => (
            <div key={heading}>
              <h4>{heading}</h4>
              <ul>{links.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="fbottom">
          <Logo />
          <div className="social">
            <a href="#" aria-label="Instagram">ig</a><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="Facebook">fb</a>
          </div>
          <span>© {new Date().getFullYear()} {site.name} · Dr Sarika Gorantyal</span>
        </div>
      </div>
    </footer>
  )
}
