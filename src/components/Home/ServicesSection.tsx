"use client";

import { Button } from "@/components/ui/button"
import { Globe, Smartphone, ShoppingCart, Database, Cloud, Shield } from "lucide-react"
import Link from "next/link"
import { useLocale } from "../../context/locale-context"

export default function Services() {
  const { t, dir } = useLocale()

  const services = [
    {
      icon: Globe,
      title: t.home.services.services[0].title,
      description: t.home.services.services[0].description,
      features: t.home.services.services[0].features,
      price: t.home.services.services[0].price,
      link: t.home.services.services[0].link,
      gradient: t.home.services.services[0].gradient,
      bgGradient: t.home.services.services[0].bgGradient,
    },
    {
      icon: Smartphone,
      title: t.home.services.services[1].title,
      description: t.home.services.services[1].description,
      features: t.home.services.services[1].features,
      price: t.home.services.services[1].price,
      link: t.home.services.services[1].link,
      gradient: t.home.services.services[1].gradient,
      bgGradient: t.home.services.services[1].bgGradient,
    },
    {
      icon: ShoppingCart,
      title: t.home.services.services[2].title,
      description: t.home.services.services[2].description,
      features: t.home.services.services[2].features,
      price: t.home.services.services[2].price,
      link: t.home.services.services[2].link,
      gradient: t.home.services.services[2].gradient,
      bgGradient: t.home.services.services[2].bgGradient,
    },
    {
      icon: Database,
      title: t.home.services.services[3].title,
      description: t.home.services.services[3].description,
      features: t.home.services.services[3].features,
      price: t.home.services.services[3].price,
      link: t.home.services.services[3].link,
      gradient: t.home.services.services[3].gradient,
      bgGradient: t.home.services.services[3].bgGradient,
    },
    {
      icon: Cloud,
      title: t.home.services.services[4].title,
      description: t.home.services.services[4].description,
      features: t.home.services.services[4].features,
      price: t.home.services.services[4].price,
      link: t.home.services.services[4].link,
      gradient: t.home.services.services[4].gradient,
      bgGradient: t.home.services.services[4].bgGradient,
    },
    {
      icon: Shield,
      title: t.home.services.services[5].title,
      description: t.home.services.services[5].description,
      features: t.home.services.services[5].features,
      price: t.home.services.services[5].price,
      link: t.home.services.services[5].link,
      gradient: t.home.services.services[5].gradient,
      bgGradient: t.home.services.services[5].bgGradient,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800" dir={dir}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">{t.home.services.title.main}</span>{" "}
              {t.home.services.title.highlight}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t.home.services.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm p-8 rounded-3xl border border-slate-600/50 hover:border-slate-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl`}
              >
                {/* Animated Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">{service.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-2 h-2 bg-blue-400 rounded-full ml-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                    >
                      {service.price}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <Link href={service.link}>
                    <Button
                      className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg hover:shadow-current/25 text-white font-semibold py-3 rounded-xl transition-all duration-300`}
                    >
                      {t.home.services.buttons.requestService}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View All Services Button */}
          <div className="text-center mt-16">
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary text-blue-400 hover:bg-blue-500 hover:text-white px-12 py-4 text-lg rounded-full transition-all duration-300"
              >
                {t.home.services.buttons.viewAllServices}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}