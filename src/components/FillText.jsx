import { useEffect, useRef, useState } from 'react'

// Scroll-scrubbed word fill: the heading starts muted and each word takes the
// ink colour as the block travels up the viewport, in reading order.
//
// Progressive enhancement — words render at full contrast by default and only
// become scrubbable once this has attached, so the heading stays readable if JS
// never runs, and `prefers-reduced-motion` opts out entirely.

// One scroll listener and one rAF for every heading on the page. All the
// getBoundingClientRect reads happen together, then all the style writes, so
// adding headings never costs more than one layout pass per frame. Twelve
// separate listeners interleaving read/write would force twelve reflows.
const live = new Set()
let frame = 0
let listening = false

function flush() {
  frame = 0
  const vh = window.innerHeight
  const start = vh * 0.85
  const end = vh * 0.4
  // read phase
  const work = []
  for (const el of live) {
    const r = el.getBoundingClientRect()
    work.push([el, (start - r.top) / (start - end + r.height * 0.5)])
  }
  // write phase
  for (const [el, p] of work) {
    el.style.setProperty('--p', String(p < 0 ? 0 : p > 1 ? 1 : p))
  }
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(flush)
}

function join(el) {
  live.add(el)
  if (!listening) {
    listening = true
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
  }
  schedule()
}

function leave(el) {
  live.delete(el)
  if (!live.size && listening) {
    listening = false
    window.removeEventListener('scroll', schedule)
    window.removeEventListener('resize', schedule)
    if (frame) { cancelAnimationFrame(frame); frame = 0 }
  }
}

export default function FillText({ children, as: Tag = 'h2', className = '', ...rest }) {
  const ref = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setReady(true)

    // Only track headings that are near the viewport — a heading 10,000px down
    // does not need its rect measured on every frame.
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? join(el) : leave(el)),
      { rootMargin: '150% 0px 150% 0px' }
    )
    io.observe(el)
    return () => { io.disconnect(); leave(el) }
  }, [children])

  const words = String(children).split(' ')

  return (
    <Tag
      ref={ref}
      className={`fill-text${ready ? ' is-ready' : ''}${className ? ' ' + className : ''}`}
      style={{ '--n': words.length }}
      {...rest}
    >
      {words.map((w, i) => (
        <span className="fw" style={{ '--i': i }} key={`${w}-${i}`}>
          {w}{i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  )
}
