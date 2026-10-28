import { useEffect, useState } from 'react'
import Img from './Img'

// The hero's background layer.
//
// Plays on every screen size, serving a lighter 640px encode to phones so the
// full 1MB file is only fetched where the extra pixels are visible. Reduced
// motion still gets the poster frame, which is a frame of the clip itself, so
// the composition is the same either way.
//
// Mobile autoplay is never guaranteed — Low Power Mode, Data Saver and some
// in-app browsers refuse it, and the promise rejects silently. We call play()
// explicitly and let it fail: the poster stays visible underneath, so a
// refusal looks like a still image rather than a broken player.
export default function HeroMedia({ video, videoSmall, poster }) {
  const [mode, setMode] = useState(null) // null until measured, then 'wide' | 'small' | 'still'

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 1025px)')
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)')
    const decide = () => setMode(calm.matches ? 'still' : wide.matches ? 'wide' : 'small')
    decide()
    wide.addEventListener('change', decide)
    calm.addEventListener('change', decide)
    return () => {
      wide.removeEventListener('change', decide)
      calm.removeEventListener('change', decide)
    }
  }, [])

  // First paint, before the match is known: the poster, so nothing flashes empty.
  if (mode === null || mode === 'still') {
    return <Img src={poster} alt="" loading="eager" fetchpriority="high" />
  }

  return (
    <video
      key={mode}
      src={mode === 'wide' ? video : videoSmall}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
      ref={(el) => { el?.play?.().catch(() => {}) }}
    />
  )
}
