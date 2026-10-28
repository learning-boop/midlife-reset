import { about } from '../data/content'

// Dr Sarika's real accreditations on a slow ticker. The reference template ran
// client logos here; a clinic of one has none, but it has five genuine
// credentials, which do the same trust work and are true.
//
// The list is rendered twice inside the track and the animation travels exactly
// -50%, so the second copy lands where the first began and the loop is seamless.
// aria-hidden on the duplicate keeps a screen reader from reading it twice.
export default function CredsStrip() {
  const items = about.creds.map((c) => c.replace(/^Currently completing:\s*/, ''))

  const row = (hidden) => (
    <span aria-hidden={hidden || undefined}>
      {items.map((c) => <b key={c}>{c}</b>)}
    </span>
  )

  return (
    <div className="creds-strip">
      <div className="creds-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
