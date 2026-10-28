import { useEffect, useState } from 'react'
import Img from './Img'

// The hero's right-hand column. Video is a desktop-only enhancement: on phones
// autoplay is unreliable and the clip is a 1MB download on mobile data, and
// under reduced motion it should not play at all. In both of those cases the
// photograph of Dr Sarika stays — she is the reason people trust the page, so
// she is the fallback rather than a frame of woodland.
export default function HeroMedia({ photo, alt, video, poster }) {
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
    return <Img src={photo} alt={alt} loading="eager" fetchpriority="high" />
  }

  return (
    <video
      className="hero-video"
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
