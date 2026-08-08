import { useEffect, useMemo, useState } from 'react'
import Reveal from './Reveal'
import StripeBand from './StripeBand'
import gallery, { categories } from '../data/gallery'
import { useLang } from '../i18n/LanguageContext'
import strings from '../i18n/translations'
import './Gallery.css'

export default function Gallery() {
  const { t } = useLang()
  const s = strings.gallery
  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState(-1)

  const shown = useMemo(
    () => (filter === 'all' ? gallery : gallery.filter((g) => g.cat === filter)),
    [filter]
  )

  const step = (dir) => setOpen((i) => (i + dir + shown.length) % shown.length)

  useEffect(() => {
    if (open < 0) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(-1)
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, shown.length])

  const active = open >= 0 ? shown[open] : null

  return (
    <>
      <StripeBand />
      <section className="band band--light gallery" id="gallery">
        <div className="shell">
          <div className="head-block gallery__head">
            <Reveal>
              <p className="eyebrow">{t(s.eyebrow)}</p>
              <h2 className="sect-title">{t(s.title)}</h2>
              <p className="sect-lede">{t(s.lede)}</p>
            </Reveal>

            <Reveal delay={120} className="gallery__filters">
              <button
                className={`chip ${filter === 'all' ? 'is-on' : ''}`}
                onClick={() => {
                  setFilter('all')
                  setOpen(-1)
                }}
              >
                {t(s.all)}
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  className={`chip ${filter === c.id ? 'is-on' : ''}`}
                  onClick={() => {
                    setFilter(c.id)
                    setOpen(-1)
                  }}
                >
                  {t(c.label)}
                </button>
              ))}
            </Reveal>
          </div>

          <div className="gallery__grid">
            {shown.map((item, i) => (
              <Reveal
                key={item.id}
                delay={(i % 4) * 90}
                variant="scale"
                className={`tile ${item.wide ? 'tile--wide' : ''} ${item.tall ? 'tile--tall' : ''}`}
              >
                <button className="tile__btn" onClick={() => setOpen(i)}>
                  {item.src ? (
                    <img className="tile__img" src={item.src} alt={t(item.caption)} loading="lazy" />
                  ) : (
                    <span className="tile__empty">
                      <svg viewBox="0 0 48 48" aria-hidden="true">
                        <path
                          d="M8 40V22c0-8.8 7.2-16 16-16s16 7.2 16 16v18"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          fill="none"
                        />
                        <path
                          d="M24 18c2.4 4.2 5.6 5.6 5.6 9.4a5.6 5.6 0 0 1-11.2 0c0-3.8 3.2-5.2 5.6-9.4z"
                          fill="currentColor"
                          opacity="0.55"
                        />
                      </svg>
                      <span>{t(s.placeholder)}</span>
                    </span>
                  )}
                  <span className="tile__veil" />
                  {/* <span className="tile__cap">{t(item.caption)}</span> */}
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <p className="gallery__hint">{t(s.hint)}</p>
          </Reveal>
        </div>
      </section>

      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(-1)}>
          <button className="lightbox__close" aria-label={t(s.closeView)} onClick={() => setOpen(-1)}>
            ✕
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            aria-label={t(s.prev)}
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
          >
            ‹
          </button>
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            {active.src ? (
              <img src={active.src} alt={t(active.caption)} />
            ) : (
              <div className="lightbox__empty">{t(s.placeholder)}</div>
            )}
            {/* <figcaption>{t(active.caption)}</figcaption> */}
          </figure>
          <button
            className="lightbox__nav lightbox__nav--next"
            aria-label={t(s.next)}
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}
