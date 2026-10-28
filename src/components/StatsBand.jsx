import { useEffect, useRef, useState } from 'react'
import { stats } from '../data/content'

// Counts up once, when the figure first comes into view. Any non-digit part of
// the value ("%", "+") is kept and only the number is animated.
function Figure({ value }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(value)
  const target = parseInt(String(value).replace(/\D/g, ''), 10)
  const suffix = String(value).replace(/[\d]/g, '')

  useEffect(() => {
    const el = ref.current
    if (!el || !Number.isFinite(target)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    setShown('0' + suffix)
    let raf = 0
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const dur = 1100
      const tick = (now) => {
        const k = Math.min(1, (now - t0) / dur)
        const eased = 1 - Math.pow(1 - k, 3)
        setShown(Math.round(target * eased) + suffix)
        if (k < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.5 })

    io.observe(el)
    return () => { io.disconnect(); if (raf) cancelAnimationFrame(raf) }
  }, [target, suffix])

  return <div className="big" ref={ref}>{shown}</div>
}

export default function StatsBand() {
  return (
    <section className="band">
      <div className="wrap">
        <div className="band-stats">
          {stats.items.map(([big, text]) => (
            <div className="stat" key={big} data-reveal>
              <Figure value={big} />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
