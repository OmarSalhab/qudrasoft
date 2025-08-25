import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale, locales } from './lib/i18n'

export function middleware(request: NextRequest) {
  // Get the pathname from the request
  const pathname = request.nextUrl.pathname
  

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  if (pathnameHasLocale) return

  // Get the locale from the cookie, default to defaultLocale
  const locale = request.cookies.get('locale')?.value || defaultLocale

  // Redirect to the locale-specific path
  const newUrl = new URL(`/${locale}${pathname}`, request.url)
  return NextResponse.redirect(newUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
}
