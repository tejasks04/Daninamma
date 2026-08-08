import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'dhaninamma:lang'
const LanguageContext = createContext(null)

function readStored() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'kn' || saved === 'en') return saved
  } catch {
    /* storage blocked — fall back to default */
  }
  return 'kn'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStored)

  useEffect(() => {
    document.documentElement.lang = lang
    document.body.dataset.lang = lang
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const toggle = useCallback(() => setLang((l) => (l === 'kn' ? 'en' : 'kn')), [])

  /** t(node) -> picks the string for the active language */
  const t = useCallback(
    (node) => {
      if (node == null) return ''
      if (typeof node === 'string') return node
      return node[lang] ?? node.en ?? node.kn ?? ''
    },
    [lang]
  )

  const value = useMemo(() => ({ lang, setLang, toggle, t, isKn: lang === 'kn' }), [lang, toggle, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>')
  return ctx
}
