import type React from "react"
import type { Metadata } from "next"
import { Cairo,Tajawal,Inter, Noto_Sans_Arabic } from "next/font/google"
import "./globals.css"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import { LocaleProvider } from "../context/locale-context"
import ChatWidget from "../components/ChatWidget"
// const inter = Inter({ 
//   subsets: ["latin"], 
//   variable: "--font-inter",
//   weight:["700"],
//   display: 'swap'
// })


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const arabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-arabic',
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
      <body className={`${inter.variable} ${arabic.variable} font-english`}>
        <LocaleProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LocaleProvider>
          <ChatWidget/>
      </body>
    </html>
  )
}