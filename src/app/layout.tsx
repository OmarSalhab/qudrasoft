import type React from "react"
import type { Metadata } from "next"
import { Inter, Cairo } from "next/font/google"
import "./globals.css"
import  Navigation  from "../components/Navigation"
import  Footer  from "../components/Footer"
import { LocaleProvider } from "../context/locale-context"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" })

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
    <html lang="en">
      <body className={`${inter.variable} ${cairo.variable}`}>
        <LocaleProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  )
}
