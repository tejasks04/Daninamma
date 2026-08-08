import GoldDust from './GoldDust'
import { useLang } from '../i18n/LanguageContext'
import strings from '../i18n/translations'
import './Hero.css'

/**
 * The hero is the darshan itself: a stone niche drawn in gold hairlines,
 * her name inside it, and a lamp burning at the threshold.
 */
export default function Hero() {
  const { t } = useLang()

  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <GoldDust />

      {/* the niche */}
      <svg className="hero__arch" viewBox="0 0 620 700" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="archLine" x1="310" y1="20" x2="310" y2="700" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#EFC873" stopOpacity="0.85" />
            <stop offset="0.55" stopColor="#EFC873" stopOpacity="0.3" />
            <stop offset="1" stopColor="#EFC873" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M70 700V300C70 173 177 70 310 70s240 103 240 230v400"
          stroke="url(#archLine)"
          strokeWidth="1.6"
          className="hero__arch-path"
        />
        <path
          d="M104 700V304C104 194 196 106 310 106s206 88 206 198v396"
          stroke="url(#archLine)"
          strokeWidth="0.8"
          strokeDasharray="3 7"
          className="hero__arch-path hero__arch-path--inner"
        />
       
      </svg>

      <div className="hero__content shell">
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-rule" />
          {t(strings.hero.eyebrow)}
        </p>

        <h1 className="hero__title">{t(strings.hero.title)}</h1>
        <p className="hero__alt">{t(strings.hero.titleAlt)}</p>
        <p className="hero__tagline">{t(strings.hero.tagline)}</p>

        <div className="hero__lamp" aria-hidden="true">
          <span className="hero__flame" />
          <svg viewBox="0 0 140 56" className="hero__diya">
            <defs>
              <linearGradient id="heroBrass" x1="8" y1="12" x2="132" y2="50">
                <stop offset="0" stopColor="#F6DFA8" />
                <stop offset="0.48" stopColor="#C79A45" />
                <stop offset="1" stopColor="#7E5F29" />
              </linearGradient>
            </defs>
            <path d="M16 18h108c0 17-16 30-54 30S16 35 16 18z" fill="url(#heroBrass)" />
            <rect x="8" y="12" width="124" height="7" rx="3.5" fill="url(#heroBrass)" />
          </svg>
          <span className="hero__lamp-pool" />
        </div>

        <p className="hero__place">{t(strings.hero.place)}</p>
        <p className="hero__blessing">{t(strings.hero.blessing)}</p>

        <div className="hero__cta">
          <a className="btn btn--solid" href="#story">
            {t(strings.hero.ctaStory)}
          </a>
          <a className="btn btn--ghost" href="#jatre">
            {t(strings.hero.ctaJatre)}
          </a>
        </div>
      </div>

      <a className="hero__scroll" href="#about" aria-label={t(strings.hero.scroll)}>
        <span className="hero__scroll-label">{t(strings.hero.scroll)}</span>
        <span className="hero__scroll-line" />
      </a>
    </section>
  )
}
