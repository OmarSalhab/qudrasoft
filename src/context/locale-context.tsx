'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Locale } from '../lib/i18n'
import { getTranslation } from '../lib/translations'

interface LocaleContextType {
  locale: Locale
  setLocale: (l: Locale) => void
  t: ReturnType<typeof getTranslation>
  dir: 'ltr' | 'rtl'
}
const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: ReactNode
  initialLocale: Locale
}) {
  // Initialize deterministically from server-provided value
  const [locale, setLocale] = useState<Locale>(initialLocale)

  useEffect(() => {
    // Persist and reflect changes on the client
    try {
      localStorage.setItem('locale', locale)
    } catch {}
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale
      document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
      document.body.classList.remove('font-arabic', 'font-english')
      document.body.classList.add(locale === 'ar' ? 'font-arabic' : 'font-english')
    }
    // Keep SSR in sync on future navigations
    if (typeof document !== 'undefined') {
      document.cookie = `locale=${locale}; path=/; max-age=31536000`
    }
  }, [locale])

  const t = getTranslation(locale)
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be inside LocaleProvider')
  return ctx
}
