import { privacy, cancellation as c } from '../data/content'

// A legal notice rather than a sales page: one column, no photographs, no
// reveal animation on the body text. Someone reading this wants to find a
// clause, so the headings do the work and nothing moves while they read.
//
// Square brackets in the copy are facts the clinic has to supply. They are
// shown as written, and picked out, so an unfinished notice cannot be mistaken
// for a finished one.
function Paragraph({ text }) {
  const parts = text.split(/(\[[^\]]+\])/g)
  return (
    <p>
      {parts.map((part, i) =>
        part.startsWith('[') && part.endsWith(']')
          ? <mark key={i} className="todo">{part}</mark>
          : part
      )}
    </p>
  )
}

export default function Privacy() {
  return (
    <section className="legal" id="privacy">
      <div className="wrap">
        <div className="narrow-head">
          <p className="kicker">{privacy.kicker}</p>
          <h1>{privacy.title}</h1>
          <p className="lede">{privacy.intro}</p>
          <Paragraph text={privacy.updated} />
        </div>
        <div className="legal-body">
          {privacy.sections.map(([heading, paragraphs]) => (
            <section key={heading}>
              <h2>{heading}</h2>
              {paragraphs.map((t) => <Paragraph key={t} text={t} />)}
            </section>
          ))}

          {/* The cancellation policy, read from the same copy the fees page
              shows, so the terms cannot drift apart between the two. It is
              open here rather than folded away: the fees page hides it behind
              a summary so the page does not end on a wall of policy, but a
              page that is nothing but policy has no reason to. */}
          <section id="cancellation-policy">
            <h2>{c.title}</h2>
            <p>{c.intro}</p>
            <dl className="cancel-list">
              {c.items.map(([t, b]) => (
                <div key={t}>
                  <dt>{t}</dt>
                  <dd>{b}</dd>
                </div>
              ))}
            </dl>
            <p className="note-line">{c.outro}</p>
          </section>
        </div>
      </div>
    </section>
  )
}
