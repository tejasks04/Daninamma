import { useEffect, useMemo, useState } from 'react'
import Logo from './Logo'
import { useLang } from '../i18n/LanguageContext'
import strings from '../i18n/translations'
import useScrollSpy from '../hooks/useScrollSpy'
import './Navbar.css'

const links = [
  { id: 'about', key: 'about' },
  { id: 'story', key: 'story' },
  { id: 'jatre', key: 'jatre' },
  { id: 'gallery', key: 'gallery' },
  { id: 'video', key: 'video' },
  { id: 'visit', key: 'visit' },
]

export default function Navbar() {
  const { t, lang, toggle } = useLang()
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const ids = useMemo(() => links.map((l) => l.id), [])
  const active = useScrollSpy(ids)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 72)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`nav ${solid ? 'nav--solid' : ''}`}>
      <div className="nav__inner shell">
        <a className="nav__brand" href="#top" onClick={() => setOpen(false)}>
          <Logo size={40} />
          <span className="nav__brand-text">
            <span className="nav__brand-kn">{t(strings.hero.title)}</span>
            <span className="nav__brand-sub">{t(strings.hero.place).split(' · ')[0]}</span>
          </span>
        </a>

        <nav className="nav__links" aria-label={t(strings.nav.menu)}>
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav__link ${active === l.id ? 'is-active' : ''}`}
            >
              {t(strings.nav[l.key])}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            className="lang-toggle"
            onClick={toggle}
            aria-label={t(strings.nav.langLabel)}
            title={t(strings.nav.langLabel)}
          >
            <span className={`lang-toggle__opt ${lang === 'kn' ? 'is-on' : ''}`}>ಕ</span>
            <span className="lang-toggle__div" />
            <span className={`lang-toggle__opt ${lang === 'en' ? 'is-on' : ''}`}>A</span>
          </button>

          <button
            className={`nav__burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t(strings.nav.close) : t(strings.nav.menu)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`nav__sheet ${open ? 'is-open' : ''}`}>
        <nav className="nav__sheet-links">
          {links.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              style={{ '--i': i }}
              className={active === l.id ? 'is-active' : ''}
            >
              {t(strings.nav[l.key])}
            </a>
          ))}
        </nav>
        <p className="nav__sheet-foot">{t(strings.hero.place)}</p>
      </div>
    </header>
  )
}
