import { useEffect, useState } from 'react'
import Img from './Img'

// The montage behind the mid-page band.
//
// Two cuts of the same montage: a landscape one for wide screens and a portrait
// one for phones, each cropped per scene so the subject stays in frame. Width
// and motion preference are tracked separately — a reduced-motion visitor on a
// desktop needs the landscape still, not the phone one.
//
// Mobile autoplay is never guaranteed: Low Power Mode, Data Saver and some
// in-app browsers refuse it and the promise rejects silently. play() is called
// explicitly and the rejection swallowed, and the poster sits beneath the
// video, so a refusal reads as a still image rather than a dead player.
export default function HeroMedia({ video, videoSmall, poster, posterSmall, autoplay = true }) {
  // Measured during the first render, not in an effect: guessing and correcting
  // would fetch the wrong poster before the correction landed.
  const [env, setEnv] = useState(() => ({
    wide: window.matchMedia('(min-width: 1025px)').matches,
    calm: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  }))

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 1025px)')
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)')
    const read = () => setEnv({ wide: wide.matches, calm: calm.matches })
    read()
    wide.addEventListener('change', read)
    calm.addEventListener('change', read)
    return () => {
      wide.removeEventListener('change', read)
      calm.removeEventListener('change', read)
    }
  }, [])

  const isWide = env.wide
  const still = isWide ? poster : (posterSmall || poster)

  if (env.calm) {
    return <Img src={still} alt="" />
  }

  return (
    <video
      key={isWide ? 'wide' : 'small'}
      src={isWide ? video : videoSmall}
      poster={still}
      autoPlay={autoplay}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
      ref={(el) => { if (autoplay) el?.play?.().catch(() => {}) }}
    />
  )
}
