"use client"

import Link from "next/link"
import { useLocale } from "../context/locale-context"

export default function Footer() {
  const { t, dir } = useLocale()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className={`flex items-center space-x-2 ${dir === "rtl" ? "space-x-reverse" : ""} mb-4`}>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">E</span>
              </div>
              <span className="font-semibold text-lg">E-Solutions</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{t.footer.description}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.services}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services/ai-automation" className="hover:text-white transition-colors">
                  {t.services.aiAutomation.title}
                </Link>
              </li>
              <li>
                <Link href="/services/e-menu" className="hover:text-white transition-colors">
                  {t.services.eMenu.title}
                </Link>
              </li>
              <li>
                <Link href="/services/landing-website" className="hover:text-white transition-colors">
                  {t.services.landingWebsite.title}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.company}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors">
                  {t.nav.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  {t.nav.careers}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition-colors">
                  {t.nav.contactUs}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.connect}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; 2024 E-Solutions Inc. {t.footer.rights} | {t.footer.privacy} | {t.footer.terms}
          </p>
        </div>
      </div>
    </footer>
  )
}
