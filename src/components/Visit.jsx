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
      </section>
    </>
  )
}
