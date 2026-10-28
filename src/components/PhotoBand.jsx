import { useEffect, useRef } from 'react'
import Img from './Img'

// A full-bleed photographic breather between two heavy text sections. Purely
// atmospheric, so the image is decorative and carries an empty alt — it also
// must not read as a patient portrait, which a described photo would imply.
//
// The image is 124% of the frame's height and travels within it as the band
// crosses the viewport, so it drifts against the page. One custom property is
// written per frame and CSS does the transform, which keeps it on the
// compositor rather than triggering layout.
export default function PhotoBand({ src, position = '50% 50%' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const img = el.querySelector('img')
    let frame = 0
    let live = false

    const update = () => {
      frame = 0
      const r = el.getBoundingClientRect()
      // -1 just below the viewport, 1 just above it
      const p = (r.top + r.height / 2 - window.innerHeight / 2) / (window.innerHeight / 2 + r.height / 2)
      const travel = r.height * 0.24
      img.style.setProperty('--py', `${(-p * travel * 0.5 - travel / 2).toFixed(1)}px`)
    }
    const onScroll = () => { if (live && !frame) frame = requestAnimationFrame(update) }

    // only track it while it is near the screen
    const io = new IntersectionObserver(([e]) => {
      live = e.isIntersecting
      if (live) update()
    }, { rootMargin: '40% 0px' })
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
    <div className="photoband" ref={ref} data-reveal>
      <Img src={src} alt="" style={{ objectPosition: position }} />
    </div>
  )
}
