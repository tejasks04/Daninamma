/**
 * Story markers. Each glyph is the object that carries that moment of the
 * account — the cart she arrived on, the mound they lifted, the mould they
 * cast, the pot that rose from the well. Line art, 24×24, currentColor.
 */
const paths = {
  shrine: (
    <>
      <path d="M4 21h16M6 21v-9l6-5 6 5v9" />
      <path d="M10 21v-5h4v5" />
    </>
  ),
  cart: (
    <>
      <circle cx="8" cy="18" r="2.4" />
      <circle cx="17" cy="18" r="2.4" />
      <path d="M3 6h4l2 9h9l2-6H8" />
      <path d="M13 9v-3M11 7.5h4" />
    </>
  ),
  turmeric: (
    <>
      <path d="M4 19c1.6-4.6 4.4-7 8-7s6.4 2.4 8 7z" />
      <path d="M12 12V7M9.5 8.5 12 6l2.5 2.5" />
    </>
  ),
  hill: (
    <>
      <path d="M2 19l6-9 4 5 3-4 7 8z" />
      <path d="M12 6.5V3M10 4.6 12 2.6l2 2" />
    </>
  ),
  cow: (
    <>
      <path d="M4 9c0-2 1.5-3 3-3l1.5 2h7L17 6c1.5 0 3 1 3 3v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
      <path d="M10 12.5h.01M14 12.5h.01" />
    </>
  ),
  serpent: (
    <>
      <path d="M3 20h18" />
      <path d="M6 20c0-4 2.5-6 6-6s6 2 6 6" />
      <path d="M9 14V9a3 3 0 0 1 6 0v5" />
      <path d="M12 9V5" />
    </>
  ),
  mirror: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M12 14.5V21M9 21h6" />
    </>
  ),
  temple: (
    <>
      <path d="M3 21h18M5 21V11l7-6 7 6v10" />
      <path d="M10 21v-6h4v6" />
      <path d="M12 5V2" />
    </>
  ),
  mould: (
    <>
      <path d="M5 8h14l-1.5 12h-11z" />
      <path d="M7 8V5.5A2.5 2.5 0 0 1 9.5 3h5A2.5 2.5 0 0 1 17 5.5V8" />
      <path d="M9.5 13h5" />
    </>
  ),
  pot: (
    <>
      <path d="M7 9h10c0 6-1.5 11-5 11S7 15 7 9z" />
      <path d="M5.5 9h13" />
      <path d="M10 6.5c0-1.5 4-1.5 4 0" />
    </>
  ),
  hands: (
    <>
      <path d="M3 14l4-4 3 3 4-4 3 3 4-4" />
      <path d="M3 19l4-4 3 3 4-4 3 3 4-4" />
    </>
  ),
  lamp: (
    <>
      <path d="M12 3c2 3.4 4.5 4.5 4.5 7.4a4.5 4.5 0 0 1-9 0C7.5 7.5 10 6.4 12 3z" />
      <path d="M5 17h14l-1.6 4H6.6z" />
      <path d="M3.5 15.5h17" />
    </>
  ),
}

export default function Glyph({ name, size = 22, strokeWidth = 1.4 }) {
  const shape = paths[name] ?? paths.lamp
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {shape}
    </svg>
  )
}
