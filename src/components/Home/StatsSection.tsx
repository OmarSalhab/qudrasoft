"use client"
import { useEffect, useState } from "react"
import { TrendingUp, Users, Award, Clock } from "lucide-react"
import Image from "next/image"
import { useLocale } from "../../context/locale-context"

export default function StatsSection() {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    awards: 0,
    experience: 0,
  })

  const { t, dir } = useLocale()

  useEffect(() => {
    const targets = { projects: 500, clients: 200, awards: 15, experience: 5 }
    const duration = 2000
    const steps = 60

    const intervals = Object.keys(targets).map((key) => {
      const target = targets[key as keyof typeof targets]
      const increment = target / steps
      let current = 0

      return setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(intervals[Number(key)])
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }))
      }, duration / steps)
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  const stats = [
    {
      icon: TrendingUp,
      value: counters.projects,
      suffix: "+",
      label: t.home.stats.stats[0].label,
      description: t.home.stats.stats[0].description,
      color: t.home.stats.stats[0].color,
    },
    {
      icon: Users,
      value: counters.clients,
      suffix: "+",
      label: t.home.stats.stats[1].label,
      description: t.home.stats.stats[1].description,
      color: t.home.stats.stats[1].color,
    },
    {
      icon: Award,
      value: counters.awards,
      suffix: "+",
      label: t.home.stats.stats[2].label,
      description: t.home.stats.stats[2].description,
      color: t.home.stats.stats[2].color,
    },
    {
      icon: Clock,
      value: counters.experience,
      suffix: "+",
      label: t.home.stats.stats[3].label,
      description: t.home.stats.stats[3].description,
      color: t.home.stats.stats[3].color,
    },
  ]

  return (
    <section className="py-20 bg-slate-800/50 backdrop-blur-sm" dir={dir}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.home.stats.title.main} <span className="bg-gradient-to-l from-blue-400 via-blue-200 to-red-400 text-transparent bg-clip-text">{t.home.stats.title.highlight}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t.home.stats.description}
            </p>
          </div>

          <Image src="/map.png" width={900} height={500} alt="Image Globe" />
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-8 rounded-2xl border border-slate-600/50 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 ${stat.color} bg-current/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>

                  <div className="text-center">
                    <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
                    <div className="text-gray-400 text-sm leading-relaxed">{stat.description}</div>
                  </div>

                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}