import { useEffect, useState } from 'react'

// Cycles through `words`, typing and erasing each one.
export default function useTypewriter(words, { typeMs = 65, eraseMs = 35, holdMs = 1800 } = {}) {
  const [text, setText] = useState('')
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setText(words[0]); return }
    let i = 0, n = 0, dir = 1, timer
    const tick = () => {
      const word = words[i]
      n += dir
      setText(word.slice(0, n))
      let delay = dir > 0 ? typeMs : eraseMs
      if (dir > 0 && n >= word.length) { dir = -1; delay = holdMs }
      else if (dir < 0 && n <= 0) { dir = 1; i = (i + 1) % words.length }
      timer = setTimeout(tick, delay)
    }
    timer = setTimeout(tick, typeMs)
    return () => clearTimeout(timer)
  }, [words, typeMs, eraseMs, holdMs])
  return text
}
