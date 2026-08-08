import Logo from './Logo'
import Reveal from './Reveal'
import { useLang } from '../i18n/LanguageContext'
import strings from '../i18n/translations'
import './Footer.css'

const links = ['about', 'story', 'sisters', 'jatre', 'gallery', 'video', 'visit']

/** ← put your portfolio link here */
const PORTFOLIO_URL = 'https://portfolio-olive-nu-39.vercel.app/'

export default function Footer() {
  const { t } = useLang()
  const f = strings.footer
  const year = new Date().getFullYear()

  return (
    <footer className="foot">
      <div className="foot__flames" aria-hidden="true">
        {Array.from({ length: 7 }).map((_, i) => (
          <span key={i} style={{ '--i': i }} />
        ))}
      </div>

      <div className="shell foot__grid">
        <Reveal className="foot__brand">
          <Logo size={54} />
          <p className="foot__blessing">{t(f.blessing)}</p>
          <p className="foot__line">{t(f.line)}</p>
        </Reveal>

        <Reveal className="foot__col" delay={90}>
          <h4>{t(f.nav)}</h4>
          <nav className="foot__links">
            {links.map((k) => (
              <a key={k} href={`#${k}`}>
                {t(strings.nav[k])}
              </a>
            ))}
          </nav>
        </Reveal>

        <Reveal className="foot__col" delay={160}>
          <h4>{t(f.creditsLabel)}</h4>
          <p className="foot__credits">{t(f.credits)}</p>
          <p className="foot__disclaimer">{t(f.disclaimer)}</p>
        </Reveal>
      </div>

      <div className="shell foot__base">
        <span>© {year} SDM · {t(f.rights)}</span>

        <a className="foot__designer" href={PORTFOLIO_URL} target="_blank" rel="noreferrer">
          <span className="foot__designer-label">{t(f.designedBy)}</span> <strong>{t(f.designerName)}</strong>
          
        </a>

        <a className="foot__top" href="#top">{t(f.top)} ↑</a>
      </div>
    </footer>
  )
}
