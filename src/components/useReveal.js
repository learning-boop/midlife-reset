import { useEffect } from 'react'

// One observer for every [data-reveal] on the page: adds .is-in as each element
// first comes into view, so images and cards rise and fade in on scroll.
// Elements start visible in CSS and are only hidden once this has attached, so
// nothing disappears if JS fails.
export default function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    document.documentElement.classList.add('reveal-ready')

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    )

    const els = document.querySelectorAll('[data-reveal]')
    els.forEach((el, i) => {
      // stagger siblings so grids cascade rather than landing all at once
      el.style.setProperty('--d', `${(i % 4) * 70}ms`)
      io.observe(el)
    })

    // Failsafe: nothing may stay hidden because a reveal did not fire. Anything
    // already past the top of the viewport is shown outright — content being
    // invisible is always worse than missing its animation.
    const sweep = () => {
      for (const el of els) {
        if (el.classList.contains('is-in')) continue
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('is-in')
          io.unobserve(el)
        }
      }
    }
    const timer = setInterval(sweep, 1000)

    return () => { io.disconnect(); clearInterval(timer) }
  }, [])
}
