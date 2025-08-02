import type React from "react"
import type { Metadata } from "next"
import { Inter, Cairo,Tajawal } from "next/font/google"
import "./globals.css"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import { LocaleProvider } from "../context/locale-context"

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  weight:["700"],
  display: 'swap'
})

const tajawal = Tajawal({ 
  subsets: ["arabic"], 
  weight:["700"],
  variable: "--font-tajawal",
  display: 'swap'
})

export const metadata: Metadata = {
  title: "QudraSoft Inc - Technology Solutions & Digital Innovation",
  description: "Engineering Innovation, Powering Intelligent, Secure, and Scalable Digital Futures",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.variable} ${tajawal.variable} font-english`}>
        <LocaleProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  )
}