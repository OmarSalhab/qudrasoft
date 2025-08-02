export type Locale = "en" | "ar"

export const defaultLocale: Locale = "ar"
export const locales: Locale[] = ["en", "ar"]

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr"
}
