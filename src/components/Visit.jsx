import Reveal from './Reveal'
import StripeBand from './StripeBand'
import Glyph from './icons/Glyphs'
import { useLang } from '../i18n/LanguageContext'
import strings from '../i18n/translations'
import './Visit.css'

/** Sri Dhaninamma Devasthana, Kengal Kempohalli */
const TEMPLE = { lat: 13.2061302, lng: 77.2618139 }
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${TEMPLE.lat},${TEMPLE.lng}`

export default function Visit() {
const { t, lang } = useLang()
  const s = strings.visit
  const mapEmbed = `https://www.google.com/maps?q=${TEMPLE.lat},${TEMPLE.lng}&z=16&hl=${lang}&output=embed`
  const rows = [
    { glyph: 'temple', label: s.addressLabel, value: s.address },
  ]

  return (
    <>
      <StripeBand flip />
      <section className="band band--light visit" id="visit">
        <div className="shell visit__grid">
          <div>
            <Reveal>
              <p className="eyebrow">{t(s.eyebrow)}</p>
              <h2 className="sect-title">{t(s.title)}</h2>
            </Reveal>

            <dl className="visit__list">
              {rows.map((r, i) => (
                <Reveal as="div" className="visit__row" key={r.label.en} delay={i * 90}>
                  <span className="visit__glyph" aria-hidden="true">
                    <Glyph name={r.glyph} size={18} />
                  </span>
                  <div>
                    <dt>{t(r.label)}</dt>
                    <dd>{t(r.value)}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>

            <Reveal delay={280}>
              <a
                className="btn btn--solid visit__cta"
                 href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
              >
                {t(s.mapCta)}
              </a>
            </Reveal>
          </div>

         <Reveal variant="scale" className="visit__map">
            <div className="visit__map-inner">
              <iframe
                className="visit__map-frame"
                src={mapEmbed}
                title={t(s.title)}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>

        <div className="shell visit__extra">
          {/* ---- pooja timings ---- */}
          <Reveal className="panel">
            <h3 className="panel__title">{t(s.poojaLabel)}</h3>
            <ul className="timings">
              {s.poojaTimes.map((row) => (
                <li className={`timings__row ${row.special ? 'is-special' : ''}`} key={row.when.en}>
                  <div className="timings__what">
                    <span className="timings__when">{t(row.when)}</span>
                    <span className="timings__name">{t(row.what)}</span>
                  </div>
                  <span className="timings__time">{t(row.time)}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* ---- archakas, tap to call ---- */}
          <Reveal className="panel" delay={120}>
            <h3 className="panel__title">{t(s.contactLabel)}</h3>
            <p className="panel__note">{t(s.contactNote)}</p>
            <div className="calls">
              {s.archakas.map((a) => (
                <a className="call" href={`tel:${a.phone}`} key={a.name.en}>
                  <span className="call__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3z" />
                    </svg>
                  </span>
                  <span className="call__body">
                    <span className="call__name">{t(a.name)}</span>
                    <span className="call__role">{t(a.role)}</span>
                    <span className="call__num">{a.display}</span>
                  </span>
                  <span className="call__hint">{t(s.callHint)}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
