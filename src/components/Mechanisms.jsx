// The five cardiometabolic mechanisms, as a plain list.
//
// These used to pin above 1024px and advance one at a time, which reserved a
// scroll runway of five part-screens — 2,070px of a 14,732px page, the single
// largest contributor to its length. The list below is what phones always got,
// and it carries the same five mechanisms in the same order.
export default function Mechanisms({ title, intro, items }) {
  return (
    <div className="mech">
      <h3>{title}</h3>
      <p className="lede">{intro}</p>
      <ol className="mech-list">
        {items.map(([term, body]) => (
          <li key={term}>
            <h4>{term}</h4>
            <p>{body}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
