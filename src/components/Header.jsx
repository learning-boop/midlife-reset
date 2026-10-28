import { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import { nav, site } from '../data/content'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const last = useRef(0)

  // Retreats on the way down and comes straight back on the way up. Never
  // hides while the menu is open, or near the top where it belongs on screen.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    const read = () => {
      frame = 0
      const y = window.scrollY
      const down = y > last.current
      if (y < 140) setHidden(false)
      else if (Math.abs(y - last.current) > 6) setHidden(down)
      last.current = y
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(read) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); if (frame) cancelAnimationFrame(frame) }
  }, [])

  useEffect(() => { if (open) setHidden(false) }, [open])

  return (
    <header className={hidden && !open ? 'is-tucked' : ''}>
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
