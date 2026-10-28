import { useEffect, useRef, useState } from 'react'

// The five cardiometabolic mechanisms. Above 1024px the block pins and the
// mechanisms advance one at a time, driven by how far the reader has scrolled
// through a runway as tall as five part-screens. Below that it renders as the
// plain list it always was: a short viewport has no room to pin anything, and
// freezing the page on a phone reads as a fault rather than a device.
//
// The plain list is also what ships in the markup, so the content is present
// whether or not the pinned view ever activates.
export default function Mechanisms({ title, intro, items }) {
  const [pinned, setPinned] = useState(false)
  const [active, setActive] = useState(0)
  const runway = useRef(null)
  const railRefs = useRef([])

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 1025px)')
    const set = () => setPinned(wide.matches)
    set()
    wide.addEventListener('change', set)
    return () => wide.removeEventListener('change', set)
  }, [])

  useEffect(() => {
    if (!pinned) return
    const el = runway.current
    if (!el) return
    let frame = 0
    const update = () => {
      frame = 0
      const r = el.getBoundingClientRect()
      const total = r.height - window.innerHeight
      if (total <= 0) return
      const p = Math.min(1, Math.max(0, -r.top / total))
      // nudge the boundary past the midpoint of each step so the first and last
      // mechanisms get a full share rather than a sliver
      setActive(Math.min(items.length - 1, Math.floor(p * items.length)))
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [pinned, items.length])

  const jump = (i) => {
    setActive(i)
    const el = runway.current
    if (!el) return
    const total = el.offsetHeight - window.innerHeight
    const top = el.offsetTop + (total * (i + 0.5)) / items.length
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <div className={`mech${pinned ? ' is-pinned' : ''}`}>
      <h3>{title}</h3>
      <p className="lede">{intro}</p>

      {pinned && (
        <div className="mech-runway" ref={runway}>
          <div className="mech-stage">
            <div className="mech-rail" role="tablist" aria-label="Mechanisms">
              {items.map(([term], i) => (
                <button
                  key={term}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  tabIndex={i === active ? 0 : -1}
                  ref={(n) => { railRefs.current[i] = n }}
                  className={i === active ? 'on' : ''}
                  onClick={() => jump(i)}
                >
                  {term}
                </button>
              ))}
            </div>
            <div className="mech-slides">
              {items.map(([term, body], i) => (
                <div className={`mech-slide${i === active ? ' on' : ''}`} key={term} aria-hidden={i !== active}>
                  <div className="n">{String(i + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</div>
                  <h4>{term}</h4>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <ol className="mech-list">
        {items.map(([term, body]) => (
          <li key={term}>
            <h4>{term}</h4>
            <p>{body}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
