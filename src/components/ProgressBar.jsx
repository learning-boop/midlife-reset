import { useEffect, useRef } from 'react'

// How much of a very long page is left. Scales a single element rather than
// animating width, so it stays on the compositor.
export default function ProgressBar() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let frame = 0
    const read = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      el.style.transform = `scaleX(${p})`
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(read) }
    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="progress" aria-hidden="true">
      <span ref={ref} />
    </div>
  )
}
