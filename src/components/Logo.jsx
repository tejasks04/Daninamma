/**
 * SDM mark — a brass devotional seal.
 * A temple niche (arch) holding a lit lamp, with the letters set below.
 * Scales with `size`; colour follows currentColor for the strokes.
 */
export default function Logo({ size = 44, withWordmark = false, className = '' }) {
  return (
    <span className={`logo ${className}`} aria-hidden="true">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo__seal"
      >
        <defs>
          <linearGradient id="sdmBrass" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#F6DFA8" />
            <stop offset="0.5" stopColor="#E0B45F" />
            <stop offset="0.52" stopColor="#C79A45" />
            <stop offset="1" stopColor="#8C6A2E" />
          </linearGradient>
          <radialGradient id="sdmFlame" cx="0.5" cy="0.62" r="0.6">
            <stop offset="0" stopColor="#FFF3D0" />
            <stop offset="0.55" stopColor="#F0B93F" />
            <stop offset="1" stopColor="#A5162A" />
          </radialGradient>
        </defs>

        {/* outer seal */}
        <circle cx="32" cy="32" r="30" stroke="url(#sdmBrass)" strokeWidth="1.6" />
        <circle cx="32" cy="32" r="26.5" stroke="url(#sdmBrass)" strokeWidth="0.7" opacity="0.75" />

        {/* niche arch */}
        <path
          d="M20 44V29a12 12 0 0 1 24 0v15"
          stroke="url(#sdmBrass)"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        {/* flame */}
        <path
          d="M32 18.5c2.6 4.6 6 6.1 6 10.2a6 6 0 0 1-12 0c0-4.1 3.4-5.6 6-10.2z"
          fill="url(#sdmFlame)"
        />

        {/* lamp */}
        <path d="M23.5 40.5h17l-2.4 5.2H25.9z" fill="url(#sdmBrass)" />
        <rect x="21.5" y="38.4" width="21" height="2.4" rx="1.2" fill="url(#sdmBrass)" />

        {/* letters */}
        <text
          x="32"
          y="56.4"
          textAnchor="middle"
          fontFamily="Eczar, Georgia, serif"
          fontSize="9.4"
          fontWeight="700"
          letterSpacing="1.6"
          fill="url(#sdmBrass)"
        >
          SDM
        </text>
      </svg>

      {withWordmark && (
        <span className="logo__word">
          <span className="logo__word-kn">ಶ್ರೀ ಧನಿನಮ್ಮ ದೇವಿ</span>
          <span className="logo__word-en">Kengal Kempohalli</span>
        </span>
      )}
    </span>
  )
}
