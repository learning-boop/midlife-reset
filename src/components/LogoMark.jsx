// Brand mark: two concentric rings around a vertical pair of petals —
// sage above, terracotta below — with a dark seed at the top.
// Ring and seed colours come from CSS custom properties so the mark can
// invert on the dark green footer without a second copy of the artwork.
export default function LogoMark({ size = 38, ...rest }) {
  return (
    <svg
      className="mark" width={size} height={size} viewBox="0 0 100 100"
      role="img" aria-hidden="true" focusable="false" {...rest}
    >
      <circle cx="50" cy="50" r="47" fill="none" stroke="var(--mark-ring-outer)" strokeWidth="1.8" />
      <circle cx="50" cy="50" r="33.3" fill="none" stroke="var(--mark-ring-inner)" strokeWidth="1.8" />
      <path d="M50 21.8C61.5 28.1 61.5 50.6 50 56.9 38.5 50.6 38.5 28.1 50 21.8Z" fill="var(--sage)" />
      <path d="M50 56.9C61.5 63.2 61.5 85.1 50 91.4 38.5 85.1 38.5 63.2 50 56.9Z" fill="var(--terracotta)" />
      <circle cx="50" cy="17.6" r="2.8" fill="var(--mark-dot)" />
    </svg>
  )
}
