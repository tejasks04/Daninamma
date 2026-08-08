import Reveal from './Reveal'
import jatre from '../data/jatre'
import { useLang } from '../i18n/LanguageContext'
import strings from '../i18n/translations'
import './Jatre.css'

export default function Jatre() {
  const { t } = useLang()
  const s = strings.jatre

  return (
    <section className="band band--dark jatre" id="jatre">
      <div className="shell">
        <div className="head-block">
          <Reveal>
            <p className="eyebrow">{t(s.eyebrow)}</p>
            <h2 className="sect-title">{t(s.title)}</h2>
            <p className="sect-lede">{t(s.lede)}</p>
          </Reveal>
        </div>

        <div className="jatre__days">
          {jatre.map((block, i) => (
            <Reveal className="day" key={block.id} delay={i * 80}>
              <div className="day__label">
                <span className="day__tag">{t(block.day)}</span>
              </div>
              <div className="day__content">
                <h3 className="day__title">{t(block.title)}</h3>
                <ul className="day__items">
                  {block.items.map((item, j) => (
                    <li key={j}>{t(item)}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="chain" delay={100}>
          <div className="chain__art" aria-hidden="true">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} style={{ '--i': i }} />
            ))}
          </div>
          <h3 className="chain__title">{t(s.beliefTitle)}</h3>
          <p className="chain__text">{t(s.belief)}</p>
        </Reveal>
      </div>
    </section>
  )
}
