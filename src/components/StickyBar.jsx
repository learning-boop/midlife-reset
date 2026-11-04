import { useEffect, useState } from 'react'
import { site } from '../data/content'
import BookLink from './BookLink'

// Slides up once the hero has scrolled out of view.
export default function StickyBar({ watchRef }) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const el = watchRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setShow(!e.isIntersecting), { threshold: 0 })
    io.observe(el)
    return () => io.disconnect()
  }, [watchRef])
  return (
    <div className={`sticky${show ? ' show' : ''}`}>
      <div className="wrap">
        <div className="t">
          Feel like <i>yourself</i> again, guided by a doctor who&rsquo;s been there.
          <small>Doctor-led virtual and face-to-face consultations</small>
        </div>
        <div className="r">
          <BookLink href={site.appointmentUrl} className="btn btn-ghost">Virtual consultation</BookLink>
          <BookLink>Discovery call</BookLink>
          {/* another site, so it opens in its own tab with noopener, like the
              booking links either side of it */}
          <a className="wa" href={site.whatsapp} target="_blank" rel="noopener noreferrer"
             aria-label={`WhatsApp ${site.whatsappLabel}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 0 1-13.4 7.8L3 21l1.2-4.6A9 9 0 1 1 21 12z" /></svg>
          </a>
        </div>
      </div>
    </div>
  )
}
