import { useEffect, useRef } from 'react'
import HeroMedia from './HeroMedia'
import { hero } from '../data/content'

// The montage, moved out of the hero and run full-bleed across the middle of the
// page, where the decorative photographic band used to sit.
//
// Mid-page it only plays while it is on screen. Left to autoplay it would run
// unseen for the whole of the page above it, which costs a phone both data and
// battery for nothing.
//
// Autoplay is handed over rather than merely countered: pausing an autoplaying
// element does not hold, because the browser starts it again as soon as enough
// data arrives, which is after both the mount and the observer's first call.
// So HeroMedia's autoplay is off here and this observer owns playback outright
// — including the explicit play(), which is what makes it start on a phone.
//
// Owning playback means answering for it. With autoplay off, nothing in the
// platform restarts the clip, and the browser pauses media of its own accord —
// power saving, a backgrounded tab, a throttled frame. Once paused it would
// stay paused and the band would sit on a frozen frame. So a pause that arrives
// while the band is on screen is taken to be the browser's and undone; a pause
// while it is away is this component's own, and left alone.
export default function VideoBand() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let visible = false

    const play = () => el.querySelector('video')?.play?.().catch(() => {})
    const resume = () => { if (visible) play() }

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      if (visible) play()
      else el.querySelector('video')?.pause?.()
      // generous, so playback is already running by the time the band arrives
    }, { rootMargin: '40% 0px' })
    io.observe(el)

    // capture phase: 'pause' is fired at the video and does not bubble
    el.addEventListener('pause', resume, true)
    return () => {
      io.disconnect()
      el.removeEventListener('pause', resume, true)
    }
  }, [])

  return (
    <div className="videoband" ref={ref}>
      {/* The landscape cut at every width. The portrait cut was framed for a
          full-screen phone hero; in a band 375px wide and 200px tall it crops
          to a face with the top of the head cut off, while the landscape cut
          matches the band's own shape. */}
      <HeroMedia
        autoplay={false}
        video={hero.video}
        videoSmall={hero.video}
        poster={hero.videoPoster}
        posterSmall={hero.videoPoster}
      />
    </div>
  )
}
