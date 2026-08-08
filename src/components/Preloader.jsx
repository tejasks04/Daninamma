import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import strings from '../i18n/translations'
import './Preloader.css'

/** Page-load moment: the lamp catches, the name settles, the veil lifts. */
export default function Preloader() {
  const { t } = useLang()
  const [state, setState] = useState('in') // in → out → gone

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hold = reduce ? 200 : 1900
    const a = setTimeout(() => setState('out'), hold)
    const b = setTimeout(() => setState('gone'), hold + 800)
    return () => {
      clearTimeout(a)
      clearTimeout(b)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = state === 'gone' ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [state])

  if (state === 'gone') return null

  return (
    <div className={`preloader preloader--${state}`} aria-hidden="true">
      <div className="preloader__lamp">
        <span className="preloader__flame" />
        <svg viewBox="0 0 120 60" className="preloader__diya">
          <path d="M12 20h96c0 18-14 32-48 32S12 38 12 20z" fill="url(#pl-brass)" />
          <rect x="6" y="15" width="108" height="7" rx="3.5" fill="url(#pl-brass)" />
          <defs>
            <linearGradient id="pl-brass" x1="6" y1="15" x2="114" y2="52">
              <stop offset="0" stopColor="#F6DFA8" />
              <stop offset="0.5" stopColor="#C79A45" />
              <stop offset="1" stopColor="#8C6A2E" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="preloader__line">{t(strings.loader.line)}</p>
      <p className="preloader__sub">{t(strings.loader.sub)}</p>
    </div>
  )
}
