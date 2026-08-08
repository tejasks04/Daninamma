import { useState } from 'react'
import Reveal from './Reveal'
import videos from '../data/videos'
import { useLang } from '../i18n/LanguageContext'
import strings from '../i18n/translations'
import './VideoSection.css'

function VideoCard({ item, feature = false }) {
  const { t } = useLang()
  const s = strings.video
  const [playing, setPlaying] = useState(false)
  const hasMedia = Boolean(item.youtubeId || item.file)

  return (
    <div className={`vid ${feature ? 'vid--feature' : ''}`}>
      <div className="vid__screen" style={item.poster ? { backgroundImage: `url(${item.poster})` } : undefined}>
        {playing && item.youtubeId && (
          <iframe
            className="vid__player"
            src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
            title={t(item.title)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

        {playing && !item.youtubeId && item.file && (
          <video className="vid__player" src={item.file} controls autoPlay playsInline />
        )}

        {!playing && (
          <button
            className="vid__play"
            onClick={() => hasMedia && setPlaying(true)}
            aria-label={hasMedia ? t(s.play) : t(s.placeholder)}
            disabled={!hasMedia}
          >
            <span className="vid__play-ring">
              <span className="vid__play-tri" />
            </span>
            <span className="vid__play-text">{hasMedia ? t(s.play) : t(s.placeholder)}</span>
          </button>
        )}
      </div>
      <div className="vid__meta">
        <h3 className="vid__title">{t(item.title)}</h3>
        <p className="vid__note">{t(item.note)}</p>
      </div>
    </div>
  )
}

export default function VideoSection() {
  const { t } = useLang()
  const s = strings.video
  const feature = videos.find((v) => v.feature) ?? videos[0]
  const rest = videos.filter((v) => v !== feature)

  return (
    <section className="band band--dark video" id="video">
      <div className="shell">
        <div className="head-block">
          <Reveal>
            <p className="eyebrow">{t(s.eyebrow)}</p>
            <h2 className="sect-title">{t(s.title)}</h2>
            <p className="sect-lede">{t(s.lede)}</p>
          </Reveal>
        </div>

        <Reveal variant="scale">
          <VideoCard item={feature} feature />
        </Reveal>

        <div className="video__row">
          {rest.map((v, i) => (
            <Reveal key={v.id} delay={i * 130}>
              <VideoCard item={v} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="video__hint">{t(s.hint)}</p>
        </Reveal>
      </div>
    </section>
  )
}
