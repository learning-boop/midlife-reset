import { faqs, notice } from '../data/content'

export default function Faq() {
  return (
    <section className="faq" style={{ background: '#fff' }} id="faq">
      <div className="wrap">
        <h2>Frequently asked questions</h2>
        <div className="faq-list">
          {faqs.map(([q, a], i) => (
            <details key={q} open={i === 0}>
              <summary>{q}<span className="ic">+</span></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
        <div className="notice" style={{ marginTop: 48 }}>
          <h3>{notice.title}</h3>
          {notice.lines.map((l) => <p key={l}>{l}</p>)}
        </div>
      </div>
    </section>
  )
}
