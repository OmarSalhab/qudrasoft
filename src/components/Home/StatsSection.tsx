"use client"
import { useEffect } from "react"
import Image from "next/image"
import type { TranslationType } from "../../lib/types"

type StatsSectionProps = {
	t: TranslationType;
	dir: "ltr" | "rtl";
};

export default function StatsSection({ t, dir }: StatsSectionProps) {
  useEffect(() => {
    // This effect is kept for potential future use
    // Currently not using counters but keeping the structure
  }, [])

  return (
    <section className="py-20 bg-slate-800/50 backdrop-blur-sm" dir={dir}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-2xl  md:text-5xl font-bold text-white mb-6">
              {t.home.stats.title.main} <span className="bg-gradient-to-l from-blue-400 via-blue-200 to-red-400 text-transparent bg-clip-text">{t.home.stats.title.highlight}</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              {t.home.stats.description}
            </p>
          </div>

          <Image src="/map.png" width={900} height={500} alt="Image Globe" />
        </div>
      </div>
    </section>
  )
}