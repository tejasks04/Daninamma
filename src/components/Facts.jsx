import { useLang } from '../i18n/LanguageContext'
import strings from '../i18n/translations'
import Reveal from './Reveal'
import './Facts.css'

/** A limewash ledger strip: the four things a visitor needs at a glance. */
export default function Facts() {
  const { t } = useLang()

  return (
    <section className="facts">
      <div className="facts__grid shell">
        {strings.facts.map((f, i) => (
          <Reveal className="facts__cell" key={f.label.en} delay={i * 90}>
            <span className="facts__label">{t(f.label)}</span>
            <span className="facts__value">{t(f.value)}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
