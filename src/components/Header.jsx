import { useState } from 'react'
import Logo from './Logo'
import { nav, site } from '../data/content'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <div className="wrap nav">
        <Logo />
        <nav className="nav-links">
          {nav.map((n) => (
            <a key={n.label} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-plum" href={site.bookingUrl}>Book a discovery call</a>
        <button className="burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </div>
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {nav.map((n) => <a key={n.label} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>)}
        <a className="btn btn-plum" style={{ marginTop: 16, width: '100%' }} href={site.bookingUrl}>Book a discovery call</a>
      </div>
    </header>
  )
}
