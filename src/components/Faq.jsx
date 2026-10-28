import { faqs, notice } from '../data/content'
import FillText from './FillText'

export default function Faq() {
  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <p className="kicker">Frequently Asked Questions</p>
        <FillText>Common questions before you get started</FillText>
        <div className="faq-list">
          {faqs.map(([q, a], i) => (
            <details key={q} open={i === 0}>
              <summary>
                <FillText as="span" className="faq-q">{q}</FillText>
                <span className="ic">+</span>
              </summary>
              <p>{a}</p>
            </details>
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
