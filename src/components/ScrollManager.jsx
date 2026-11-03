import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

// A browser resets the scroll position when it loads a page, and restores it
// when you go back. A router does neither, so without this you arrive at a new
// page already halfway down it, and going back loses your place.
//
// Three cases, in order:
//
// Back or forward. The position is restored from where that entry was last
// left. Scroll restoration is switched to manual so the browser does not also
// have an opinion about it.
//
// A hash. Go to that element. Doing it once is not enough: the page has only
// just mounted, its images have no height yet, the document is shorter than
// the offset being asked for, and the scroll clamps near the top — so it keeps
// correcting until the element settles, and gives up rather than fighting a
// page that never stops moving.
//
// Anything else. Start at the top.
//
// Every scroll here is "instant", never "auto". The stylesheet sets
// scroll-behavior: smooth, which is right for an anchor on the page you are
// already reading but wrong on arrival, and "auto" means defer to the CSS —
// the smooth setting being avoided. Left smooth, a correction every 60ms would
// restart the animation each time and never arrive.
const SETTLE_TRIES = 12
const SETTLE_GAP = 60

// Keyed by history entry, so two visits to the same page are told apart.
const positions = new Map()

const jump = (top) => window.scrollTo({ top, left: 0, behavior: 'instant' })

export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    if (window.history.scrollRestoration) window.history.scrollRestoration = 'manual'
  }, [])

  // Record where this entry was left. The cleanup runs as the entry changes,
  // which is exactly the moment worth remembering.
  useEffect(() => () => { positions.set(key, window.scrollY) }, [key])

  useEffect(() => {
    if (navigationType === 'POP') {
      const seen = positions.get(key)
      if (seen !== undefined) {
        jump(seen)
        return
      }
    }

    if (!hash) {
      jump(0)
      return
    }

    const id = decodeURIComponent(hash.slice(1))
    let timer = 0
    let tries = 0

    const settle = () => {
      const el = document.getElementById(id)
      if (!el) {
        if (tries === 0) jump(0)
        if (++tries < SETTLE_TRIES) timer = setTimeout(settle, SETTLE_GAP)
        return
      }
      el.scrollIntoView({ block: 'start', behavior: 'instant' })
      // scroll-padding-top holds it clear of the header, so "arrived" is a
      // small positive offset rather than exactly zero
      const top = el.getBoundingClientRect().top
      if (top > -2 && top < 120) return
      if (++tries < SETTLE_TRIES) timer = setTimeout(settle, SETTLE_GAP)
    }

    settle()
    return () => clearTimeout(timer)
  }, [pathname, hash, key, navigationType])

  return null
}
