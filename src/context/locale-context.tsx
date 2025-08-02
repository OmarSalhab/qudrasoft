"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Locale } from "../lib/i18n"
import { getTranslation } from "../lib/translations"

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: ReturnType<typeof getTranslation>
  dir: "ltr" | "rtl"
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ar")

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale
    if (savedLocale && ["en", "ar"].includes(savedLocale)) {
      setLocale(savedLocale)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("locale", locale)
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = locale

    document.body.className = document.body.className.replace(/font-(english|arabic)/g, '')
    document.body.classList.add(locale === "ar" ? "font-arabic" : "font-english")
  }, [locale])

  const t = getTranslation(locale)
  const dir = locale === "ar" ? "rtl" : "ltr"

  return <LocaleContext.Provider value={{ locale, setLocale, t, dir }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
