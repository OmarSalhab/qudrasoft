"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Tag } from "lucide-react"
import { useLocale } from "../../context/locale-context"

export default function BlogPage() {
  const { t } = useLocale()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t.blog.title}</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">{t.blog.description}</p>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.blog.articles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src={`/placeholder.svg?height=200&width=400&query=blog article ${index + 1}`}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Tag className="w-4 h-4" />
                      <span>{article.category}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-primary mb-3 text-lg leading-tight">{article.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <Button
                    variant="outline"
                    className="text-primary border-primary hover:bg-primary hover:text-white bg-transparent"
                  >
                    {t.blog.readMore}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
