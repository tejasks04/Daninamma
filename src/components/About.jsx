import PhotoFrame from './PhotoFrame'
import Reveal from './Reveal'
import { useLang } from '../i18n/LanguageContext'
import strings from '../i18n/translations'
import './About.css'

export default function About() {
  const { t } = useLang()
  const s = strings.about

  return (
    <section className="band band--dark about" id="about">
      <div className="shell about__grid">
        <div className="about__media">
          <Reveal variant="scale">
            {/* swap src for '/images/moola-devaru.jpg' once you have the photo */}
            <PhotoFrame src={'/images/moola-devaru.jpeg'} ratio="4 / 5" caption={s.caption} garland alt={t(s.caption)} />
          </Reveal>
        </div>

        <div className="about__text">
          <Reveal>
            <p className="eyebrow">{t(s.eyebrow)}</p>
            <h2 className="sect-title">{t(s.title)}</h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="about__p">{t(s.p1)}</p>
          </Reveal>
          <Reveal delay={200}>
            <p className="about__p">{t(s.p2)}</p>
          </Reveal>

          <Reveal delay={280}>
            <blockquote className="about__quote">
              <p>{t(s.pull)}</p>
              <cite>{t(s.pullSrc)}</cite>
            </blockquote>
          </Reveal>

          <Reveal delay={340}>
            <p className="about__p about__p--muted">{t(s.p3)}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
