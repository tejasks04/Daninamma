import { useEffect, useRef } from 'react'

/**
 * Scroll-reveal shell. Each instance watches itself, so nodes that mount
 * later — a re-filtered gallery, a swapped language — still animate in.
 */
export default function Reveal({
  children,
  delay = 0,
  variant = '',
  as: Tag = 'div',
  className = '',
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      el.classList.add('is-in')
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in')
          io.disconnect()
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -6% 0px' }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${variant ? `reveal--${variant}` : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
