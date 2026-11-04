import { useEffect, useRef } from 'react'

const DURATION = 420
const EASING = 'cubic-bezier(.22,.61,.36,1)'

// A <details> that opens and closes at a measured pace, used by the FAQ list
// and by the cancellation policy.
//
// The panel itself cannot be animated: in current Chrome ::details-content
// refuses both a height transition and a keyframe animation, and animating the
// panel's children does not replay because the closed panel's
// content-visibility:hidden preserves the finished animation.
//
// So <details> stays — with its semantics, its keyboard behaviour, its exposure
// to assistive technology and find-in-page reaching closed content, none of
// which survives a disclosure hand-rolled from a button and a div — and the
// element's own height is animated instead, which is an ordinary animatable
// box. The panel is opened before the expand and closed after the collapse, so
// the content is laid out for the whole of the animation.
export default function Disclosure({ summary, defaultOpen = false, className, children }) {
  const el = useRef(null)
  const anim = useRef(null)

  // Opening is driven from outside as well as by a click — arriving at the
  // cancellation policy's own address is a request to read it. React's own
  // open prop is not enough on its own here, so the attribute is set on the
  // element, and only ever to open: closing one the reader has opened because
  // a prop says so would be rude.
  useEffect(() => {
    if (defaultOpen && el.current) el.current.open = true
  }, [defaultOpen])

  const toggle = (e) => {
    const d = el.current
    if (!d) return
    // let the browser do its own instant toggle
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    e.preventDefault()

    const closing = d.open
    // read the rendered height first: mid-flight it is the animated value, so
    // reversing a half-open panel carries on from where it actually is
    const from = d.getBoundingClientRect().height
    anim.current?.cancel()

    if (!closing) d.open = true
    const to = closing
      // borders lie outside clientHeight, so add them back onto the summary
      ? d.querySelector('summary').offsetHeight + (d.offsetHeight - d.clientHeight)
      : d.offsetHeight

    d.style.overflow = 'hidden'
    const run = d.animate(
      { height: [`${from}px`, `${to}px`] },
      { duration: DURATION, easing: EASING, fill: 'both' }
    )
    anim.current = run
    const clear = () => {
      d.style.overflow = ''
      if (anim.current === run) anim.current = null
    }
    run.onfinish = () => {
      // close first, so the height the fill is holding is already the right one
      if (closing) d.open = false
      run.cancel()
      clear()
    }
    run.oncancel = clear
  }

  return (
    <details ref={el} open={defaultOpen} className={className}>
      <summary onClick={toggle}>
        {summary}
        <span className="ic">+</span>
      </summary>
      {children}
    </details>
  )
}
