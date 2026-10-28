import FillText from './FillText'

// Shared layout for the two explainer sections (Menopause, Longevity): a pair of
// contrasting definition cards, then the words people actually use themselves.
export default function Explainer({ data, id, tone = '' }) {
  return (
    <section className={`explainer ${tone}`} id={id}>
      <div className="wrap">
        <div className="explainer-head">
          <p className="kicker">{data.kicker}</p>
          <FillText>{data.title}</FillText>
        </div>

        <div className="defs">
          {data.cards.map(([term, body], i) => (
            <div className="def" key={term} data-reveal>
              <span className="def-n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{term}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>

        <p className="quotes-intro">{data.quotesIntro}</p>
        <ul className="quotes">
          {data.quotes.map((q) => (
            <li key={q} data-reveal>
              <blockquote>{q}</blockquote>
            </li>
          ))}
        </ul>

        {data.outro && <p className="explainer-outro">{data.outro}</p>}
      </div>
    </section>
  )
}
