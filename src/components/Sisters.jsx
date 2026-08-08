import Reveal from './Reveal'
import StripeBand from './StripeBand'
import { sisters } from '../data/jatre'
import { useLang } from '../i18n/LanguageContext'
import strings from '../i18n/translations'
import './Sisters.css'

export default function Sisters() {
  const { t } = useLang()
  const s = strings.sisters

  return (
    <>
      <StripeBand />
      <section className="band band--light sisters" id="sisters">
        <div className="shell">
          <div className="head-block sisters__head">
            <Reveal>
              <p className="eyebrow">{t(s.eyebrow)}</p>
              <h2 className="sect-title">{t(s.title)}</h2>
              <p className="sect-lede">{t(s.lede)}</p>
            </Reveal>
          </div>

          <div className="sisters__grid">
            {sisters.map((sis, i) => (
              <Reveal className="niche" key={sis.id} delay={i * 130} variant="scale">
                <div className="niche__inner">
                  <span className="niche__lamp" aria-hidden="true" />
                  <h3 className="niche__name">{t(sis.name)}</h3>
                  <p className="niche__role">{t(sis.role)}</p>
                  <p className="niche__body">{t(sis.body)}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="sisters__note">{t(s.note)}</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
