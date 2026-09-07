const FALLBACK = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800"><rect width="100%" height="100%" fill="#C9D3CD"/><text x="50%" y="50%" font-family="sans-serif" font-size="22" fill="#1F3D33" text-anchor="middle">Photo</text></svg>'
)

// Image with a tinted placeholder if the source fails to load.
export default function Img({ src, alt = '', ...rest }) {
  return <img src={src} alt={alt} loading="lazy" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = FALLBACK }} {...rest} />
}
