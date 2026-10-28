import { useEffect, useRef, useState } from 'react'
import { journey } from '../data/content'
import FillText from './FillText'

// The line fills and the markers light as the reader moves through the
// section, so a section about a journey actually advances. Progress is read
// from the track's own position rather than the window, and only while it is
// on screen.
export default function Journey() {
  const track = useRef(null)
  const [reached, setReached] = useState(-1)

  useEffect(() => {
    const el = track.current
    if (!el) return
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (calm) { setReached(journey.steps.length - 1); return }

    let frame = 0
    let live = false
    const update = () => {
      frame = 0
      const r = el.getBoundingClientRect()
      // 0 as the track reaches three-quarters up the viewport, 1 near the top
      const p = (window.innerHeight * 0.78 - r.top) / (window.innerHeight * 0.44)
      const clamped = Math.min(1, Math.max(0, p))
      el.style.setProperty('--p', clamped.toFixed(3))
      setReached(Math.floor(clamped * journey.steps.length) - 1)
    }
    const onScroll = () => { if (live && !frame) frame = requestAnimationFrame(update) }
    const io = new IntersectionObserver(([e]) => {
      live = e.isIntersecting
      if (live) update()
    }, { rootMargin: '30% 0px' })
    io.observe(el)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="journey" id="journey">
      <div className="wrap">
        <p className="kicker">{journey.kicker}</p>
        <FillText>{journey.title}</FillText>
        <ol className="track5" ref={track}>
          <span className="track-line" aria-hidden="true"><i /></span>
          {journey.steps.map(([title, body], i) => (
            <li className={`stop${i <= reached ? ' on' : ''}`} key={title}>
              <span className="marker" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
