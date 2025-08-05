"use client"
import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "أحمد محمد",
      position: "مدير عام",
      company: "شركة التقنيات المتقدمة",
      image: "/manager-1.jpeg",
      rating: 5,
      text: "تعاملت مع جوبايثون في تطوير موقع شركتنا الإلكتروني، والنتيجة فاقت كل توقعاتي. فريق محترف جداً وملتزم بالمواعيد. الموقع أصبح أسرع بـ 300% وزادت المبيعات بنسبة 150%.",
      project: "موقع التجارة الإلكترونية",
      results: ["زيادة المبيعات 150%", "تحسن السرعة 300%", "تجربة مستخدم ممتازة"],
    },
    {
      name: "فاطمة العلي",
      position: "مديرة التسويق",
      company: "مجموعة الابتكار التجارية",
      image: "/manager-2.jpeg",
      rating: 5,
      text: "جوبايثون طوروا لنا تطبيق إدارة العملاء وكان العمل احترافي جداً. الفريق فهم احتياجاتنا بسرعة وقدم حلول مبتكرة. التطبيق سهل الاستخدام وحسن من كفاءة فريق المبيعات بشكل كبير.",
      project: "تطبيق إدارة العملاء",
      results: ["تحسن الكفاءة 80%", "توفير الوقت 60%", "رضا الموظفين 95%"],
    },
    {
      name: "خالد السعدي",
      position: "مؤسس ومدير تنفيذي",
      company: "منصة التعليم الذكي",
      image: "/manager-3jpeg.jpeg",
      rating: 5,
      text: "اختارنا جوبايثون لتطوير منصة التعليم الإلكتروني الخاصة بنا، وكانت تجربة رائعة. الفريق مبدع ومتفهم لمتطلبات التعليم الحديث. المنصة تخدم الآن أكثر من 10,000 طالب بكفاءة عالية.",
      project: "منصة التعليم الإلكتروني",
      results: ["10,000+ طالب نشط", "معدل إكمال 90%", "تقييم 4.8/5"],
    },
    {
      name: "سارة الزهراني",
      position: "مديرة العمليات",
      company: "مستشفى الرعاية المتقدمة",
      image: "/manger-4.jpeg",
      rating: 5,
      text: "نظام إدارة المستشفى الذي طورته جوبايثون غير طريقة عملنا تماماً. أصبحت العمليات أكثر تنظيماً وسرعة، وتحسنت تجربة المرضى بشكل ملحوظ. فريق الدعم متاح دائماً ومتعاون جداً.",
      project: "نظام إدارة المستشفى",
      results: ["تحسن الخدمة 70%", "تقليل الأخطاء 85%", "رضا المرضى 92%"],
    },
    {
      name: "محمد الأحمد",
      position: "مدير تقنية المعلومات",
      company: "البنك الرقمي المتطور",
      image: "/manager-5.jpeg",
      rating: 5,
      text: "تعاونا مع جوبايثون في تطوير تطبيق البنك المحمول، والنتيجة كانت استثنائية. التطبيق آمن وسريع وسهل الاستخدام. عدد المستخدمين النشطين زاد بنسبة 200% خلال 6 أشهر فقط.",
      project: "تطبيق البنك المحمول",
      results: ["زيادة المستخدمين 200%", "أمان 100%", "تقييم 4.9/5"],
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-slate-800/30" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ماذا يقول <span className="bg-gradient-to-l from-blue-400 via-blue-200 to-red-400 text-transparent bg-clip-text">عملاؤنا</span>؟
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              آراء وتجارب عملائنا الكرام الذين وثقوا بنا وحققوا نجاحات استثنائية
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Main Testimonial */}
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-3xl p-8 md:p-12 border border-slate-600/50 relative overflow-hidden">
              {/* Background Quote */}
              <div className="absolute top-8 left-8 opacity-10">
                <Quote className="w-24 h-24 text-blue-400" />
              </div>

              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed text-center mb-8 max-w-4xl mx-auto">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Results */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {testimonials[currentTestimonial].results.map((result, index) => (
                    <div key={index} className="bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2">
                      <span className="text-blue-300 font-semibold text-sm">{result}</span>
                    </div>
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full ml-4 border-2 border-red-400"
                  />
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-white mb-1">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-blue-400 font-semibold">{testimonials[currentTestimonial].position}</p>
                    <p className="text-gray-400 text-sm">{testimonials[currentTestimonial].company}</p>
                    <p className="text-gray-500 text-xs mt-1">{testimonials[currentTestimonial].project}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-700/80 hover:bg-slate-600/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-700/80 hover:bg-slate-600/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-blue-500 w-8" : "bg-slate-600 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-tl text-transparent bg-clip-text to-red-400 from-blue-400 mb-2">98%</div>
              <div className="text-gray-400">معدل رضا العملاء</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-tl text-transparent bg-clip-text to-red-400 from-blue-400 mb-2">200+</div>
              <div className="text-gray-400">عميل راضي</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-tl text-transparent bg-clip-text to-red-400 from-blue-400 mb-2">4.9/5</div>
              <div className="text-gray-400">متوسط التقييم</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-tl text-transparent bg-clip-text to-red-400 from-blue-400 mb-2">95%</div>
              <div className="text-gray-400">معدل التجديد</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
