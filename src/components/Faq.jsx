import { useRef } from 'react'
import { faqs, notice } from '../data/content'
import FillText from './FillText'

const DURATION = 420
const EASING = 'cubic-bezier(.22,.61,.36,1)'

// The panel itself cannot be animated: in current Chrome ::details-content
// refuses both a height transition and a keyframe animation, and animating the
// panel's children does not replay because the closed panel's
// content-visibility:hidden preserves the finished animation.
//
// So <details> stays — with its semantics, its keyboard behaviour, its exposure
// to assistive technology and find-in-page reaching closed answers, none of
// which survives a disclosure hand-rolled from a button and a div — and the
// element's own height is animated instead, which is an ordinary animatable
// box. The panel is opened before the expand and closed after the collapse, so
// the answer is laid out for the whole of the animation.
function Item({ q, a, defaultOpen }) {
  const el = useRef(null)
  const anim = useRef(null)

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
    <details ref={el} open={defaultOpen}>
      <summary onClick={toggle}>
        <FillText as="span" className="faq-q">{q}</FillText>
        <span className="ic">+</span>
      </summary>
      <p>{a}</p>
    </details>
  )
}

export default function Faq() {
  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <p className="kicker">Frequently Asked Questions</p>
        <FillText>Common questions before you get started</FillText>
        <div className="faq-list">
          {faqs.map(([q, a], i) => (
            <Item key={q} q={q} a={a} defaultOpen={i === 0} />
          ))}
        </div>
        <div className="notice">
          <h3>{notice.title}</h3>
          {notice.lines.map((l) => <p key={l}>{l}</p>)}
        </div>
      </div>
    </section>
  )
}
