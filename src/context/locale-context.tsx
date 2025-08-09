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
const LocaleContext = createContext<LocaleContextType|undefined>(undefined)

export function LocaleProvider({ children }: { children: ReactNode }) {
  // **هنا** نقرأ localStorage في الinitializer!
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === 'undefined') return 'ar'
    const saved = localStorage.getItem('locale') as Locale
    return saved === 'en' ? 'en' : 'ar'
  })

  useEffect(() => {
    // تحديث التخزين و html/body فقط عندما تتغير فعليًا
    localStorage.setItem('locale', locale)
    document.documentElement.lang = locale
    document.documentElement.dir  = locale === 'ar' ? 'rtl' : 'ltr'
    document.body.classList.remove('font-arabic','font-english')
    document.body.classList.add(locale === 'ar' ? 'font-arabic' : 'font-english')
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
