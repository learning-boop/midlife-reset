import { faqs } from '../data/content'
import FillText from './FillText'
import Disclosure from './Disclosure'

export default function Faq() {
  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <p className="kicker">Frequently Asked Questions</p>
        <FillText>Common questions before you get started</FillText>
        <div className="faq-list">
          {faqs.map(([q, a], i) => (
            <Disclosure
              key={q}
              defaultOpen={i === 0}
              summary={<FillText as="span" className="faq-q">{q}</FillText>}
            >
              <p>{a}</p>
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  )
}
