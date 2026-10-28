import { useEffect, useState } from 'react'
import Img from './Img'

// The hero's background layer. Video is a desktop-only enhancement: on phones
// autoplay is unreliable and it is a needless download on mobile data, and
// under reduced motion it should not play at all. Both of those cases fall back
// to the clip's own poster frame, so the composition is identical either way.
export default function HeroMedia({ video, poster }) {
  const [useVideo, setUseVideo] = useState(false)

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 1025px)')
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)')
    const decide = () => setUseVideo(wide.matches && !calm.matches)
    decide()
    wide.addEventListener('change', decide)
    calm.addEventListener('change', decide)
    return () => {
      wide.removeEventListener('change', decide)
      calm.removeEventListener('change', decide)
    }
  }, [])

  if (!useVideo) {
    return <Img src={poster} alt="" loading="eager" fetchpriority="high" />
  }

  return (
    <video
      src={video}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
    />
  )
}
