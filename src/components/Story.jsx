import Glyph from './icons/Glyphs'
import Reveal from './Reveal'
import story from '../data/story'
import { useLang } from '../i18n/LanguageContext'
import strings from '../i18n/translations'
import './Story.css'

export default function Story() {
  const { t } = useLang()
  const s = strings.story

  return (
    <section className="band band--dark-2 story" id="story">
      <div className="shell">
        <div className="head-block story__head">
          <Reveal>
            <p className="eyebrow">{t(s.eyebrow)}</p>
            <h2 className="sect-title">{t(s.title)}</h2>
            <p className="sect-lede">{t(s.lede)}</p>
          </Reveal>
        </div>

        <article className="story__prose">
          {story.map((block, i) => {
            if (block.type === 'ornament') {
              return (
                <Reveal className="story__ornament" key={`orn-${i}`} aria-hidden="true">
                  <span className="story__ornament-rule" />
                  <span className="story__ornament-mark">
                    <Glyph name={block.glyph} size={20} />
                  </span>
                  <span className="story__ornament-rule" />
                </Reveal>
              )
            }

            if (block.type === 'quote') {
              return (
                <Reveal as="blockquote" className="story__quote" key={`q-${i}`}>
                  <p>{t(block)}</p>
                </Reveal>
              )
            }

            if (block.type === 'close') {
              return (
                <Reveal as="p" className="story__close" key={`c-${i}`}>
                  {t(block)}
                </Reveal>
              )
            }

            return (
              <Reveal
                as="p"
                className={block.type === 'lead' ? 'story__p story__p--lead' : 'story__p'}
                key={`p-${i}`}
              >
                {t(block)}
              </Reveal>
            )
          })}
        </article>
      </div>
    </section>
  )
}
