"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLocale } from "../../context/locale-context"

export default function FAQPage() {
  const { t } = useLocale()
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t.faq.title}</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">{t.faq.description}</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {t.faq.questions.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full px-6 py-4 text-left bg-secondary hover:bg-gray-100 transition-colors flex items-center justify-between"
                  >
                    <span className="font-semibold text-primary">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform ${
                        openQuestion === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`px-6 transition-all duration-300 ${
                      openQuestion === index ? "py-4 max-h-96" : "py-0 max-h-0"
                    } overflow-hidden`}
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
