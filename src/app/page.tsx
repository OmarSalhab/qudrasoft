"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { ArrowRight, Brain, Monitor, Globe } from "lucide-react"
import { VideoSlider } from "../components/VideoSlider"
import { useLocale } from "../context/locale-context"

export default function HomePage() {
  const { t, dir } = useLocale()

  return (
    <div className="min-h-screen bg-white rtl:font-arabic ltr:font-english">
      {/* Hero Section with Video Slider */}
      <section className="relative h-[700px] bg-gradient-to-r from-primary to-primary-600 flex items-center">
        <div className="absolute inset-0">
          <VideoSlider />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto lg:mx-64 px-4 relative z-10">
          <div className={`max-w-2xl text-white `}>
            <h1 className="text-5xl font-bold mb-6 leading-tight ">
              {t.home.hero.title}
              <br />
              {t.home.hero.titleSecond}
            </h1>
            <p className="text-xl mb-8 leading-relaxed opacity-90">{t.home.hero.description}</p>
            <Button className="bg-accent hover:bg-accent-600 text-black px-8 py-3 rounded-full font-semibold">
              {t.home.hero.readMore}
              <ArrowRight className={`${dir === "rtl" ? "mr-2 rotate-180" : "ml-2"} w-4 h-4`} />
            </Button>
          </div>
        </div>
      </section>

      {/* Transforming Visions Section */}
      <section className="py-20 bg-secondary md:px-40 p-2">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                {t.home.vision.title}
                <br />
                {t.home.vision.titleSecond}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{t.home.vision.description1}</p>
              <p className="text-gray-600 leading-relaxed">{t.home.vision.description2}</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=100&width=100&query=professional headshot ${i + 1}`}
                    alt={`Team member ${i + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">{t.home.stats.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">15K+</div>
              <div className="text-gray-600">{t.home.stats.professionals}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">{t.home.stats.clients}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">100+</div>
              <div className="text-gray-600">{t.home.stats.projects}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">{t.home.services.title}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-0 text-center">
                <Brain className="w-16 h-16 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.home.services.aiAutomation.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{t.home.services.aiAutomation.description}</p>
                <Link href="/services/ai-automation">
                  <Button
                    variant="outline"
                    className="text-primary border-primary hover:bg-primary hover:text-white bg-transparent"
                  >
                    {t.home.services.learnMore}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-0 text-center">
                <Monitor className="w-16 h-16 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.home.services.eMenu.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{t.home.services.eMenu.description}</p>
                <Link href="/services/e-menu">
                  <Button
                    variant="outline"
                    className="text-primary border-primary hover:bg-primary hover:text-white bg-transparent"
                  >
                    {t.home.services.learnMore}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-0 text-center">
                <Globe className="w-16 h-16 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.home.services.landingWebsite.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {t.home.services.landingWebsite.description}
                </p>
                <Link href="/services/landing-website">
                  <Button
                    variant="outline"
                    className="text-primary border-primary hover:bg-primary hover:text-white bg-transparent"
                  >
                    {t.home.services.learnMore}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">{t.home.contact.title}</h2>
          <p className="text-xl mb-8 opacity-90">{t.home.contact.description}</p>
          <Link href="/contact-us">
            <Button className="bg-accent text-black hover:bg-accent-600 px-8 py-3 rounded-full font-semibold">
              {t.home.contact.getInTouch}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
