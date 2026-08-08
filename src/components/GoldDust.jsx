import { useEffect, useRef } from 'react'

/**
 * Ambient turmeric dust drifting up through lamplight — the air of a
 * sanctum at aarti time. Canvas so it stays cheap; hero only.
 */
export default function GoldDust({ count = 46 }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    let w = 0
    let h = 0
    let raf = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const motes = []

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const seed = () => {
      motes.length = 0
      const n = window.innerWidth < 640 ? Math.round(count * 0.55) : count
      for (let i = 0; i < n; i += 1) {
        motes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.5 + Math.random() * 1.7,
          vy: 0.09 + Math.random() * 0.28,
          drift: (Math.random() - 0.5) * 0.22,
          a: 0.12 + Math.random() * 0.5,
          phase: Math.random() * Math.PI * 2,
        })
      }
    }

    let t = 0
    const draw = () => {
      t += 0.012
      ctx.clearRect(0, 0, w, h)
      for (const m of motes) {
        m.y -= m.vy
        m.x += m.drift + Math.sin(t + m.phase) * 0.16
        if (m.y < -8) {
          m.y = h + 8
          m.x = Math.random() * w
        }
        if (m.x < -8) m.x = w + 8
        if (m.x > w + 8) m.x = -8

        const twinkle = 0.65 + 0.35 * Math.sin(t * 2.2 + m.phase)
        ctx.beginPath()
        ctx.fillStyle = `rgba(239, 200, 115, ${m.a * twinkle})`
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    seed()
    draw()

    const onResize = () => {
      resize()
      seed()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [count])

  return <canvas ref={ref} className="gold-dust" aria-hidden="true" />
}
