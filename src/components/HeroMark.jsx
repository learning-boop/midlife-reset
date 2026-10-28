import LogoMark from './LogoMark'

// The hero's right-hand panel built from the clinic's own identity rather than
// bought footage: the logo mark at large scale, cropped by the panel edge so it
// reads as a graphic device and not an oversized logo. Nothing to licence,
// nothing that can be off-brand, and no stranger standing in for the practice.
export default function HeroMark() {
  return (
    <div className="hero-mark" aria-hidden="true">
      <LogoMark size="100%" />
    </div>
  )
}
