import { useLang } from '../i18n/LanguageContext'
import strings from '../i18n/translations'
import './PhotoFrame.css'

/**
 * A photo in a brass frame. With no `src` it stays a dignified placeholder
 * rather than a broken image — the site reads complete before the album
 * is filled in.
 */
export default function PhotoFrame({ src, alt = '', caption, ratio = '4 / 5', garland = false }) {
  const { t } = useLang()

  return (
    <figure className="frame" style={{ '--ratio': ratio }}>
      <div className="frame__plate">
        {garland && <span className="frame__garland" aria-hidden="true" />}
        {src ? (
          <img className="frame__img" src={src} alt={alt} loading="lazy" />
        ) : (
          <div className="frame__empty">
            <svg viewBox="0 0 80 96" className="frame__empty-art" aria-hidden="true">
              <path d="M12 94V44c0-15.5 12.5-28 28-28s28 12.5 28 28v50" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.55" />
              <path d="M40 40c3.6 6.4 8.6 8.4 8.6 14.2a8.6 8.6 0 0 1-17.2 0C31.4 48.4 36.4 46.4 40 40z" fill="currentColor" opacity="0.5" />
              <path d="M24 74h32l-3 8H27z" fill="currentColor" opacity="0.35" />
              <path d="M21 71h38v3H21z" fill="currentColor" opacity="0.35" />
            </svg>
            <span className="frame__empty-text">{t(strings.gallery.placeholder)}</span>
          </div>
        )}
      </div>
      {caption && <figcaption className="frame__cap">{t(caption)}</figcaption>}
    </figure>
  )
}
