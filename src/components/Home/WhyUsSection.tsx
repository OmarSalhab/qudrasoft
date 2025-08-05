import { CheckCircle, Star, Users, Zap, Shield, HeartHandshake } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Star,
      title: "جودة استثنائية",
      description: "نلتزم بأعلى معايير الجودة في كل مشروع نعمل عليه، مع اهتمام بالتفاصيل الدقيقة",
      stats: "99.8% معدل رضا العملاء",
    },
    {
      icon: Zap,
      title: "سرعة في التنفيذ",
      description: "فريق عمل محترف يضمن تسليم المشاريع في الوقت المحدد دون التنازل عن الجودة",
      stats: "متوسط 30% أسرع من المنافسين",
    },
    {
      icon: Users,
      title: "فريق خبير",
      description: "مطورون ومصممون ذوو خبرة واسعة في أحدث التقنيات والأدوات المتطورة",
      stats: "أكثر من 50 خبير تقني",
    },
    {
      icon: Shield,
      title: "أمان وموثوقية",
      description: "نطبق أعلى معايير الأمان لحماية بياناتك ومعلوماتك الحساسة",
      stats: "100% حماية البيانات",
    },
    {
      icon: HeartHandshake,
      title: "دعم مستمر",
      description: "دعم فني متواصل 24/7 لضمان استمرارية عمل مشاريعك بأفضل أداء",
      stats: "دعم على مدار الساعة",
    },
    {
      icon: CheckCircle,
      title: "أسعار تنافسية",
      description: "نقدم أفضل قيمة مقابل المال مع باقات مرنة تناسب جميع الميزانيات",
      stats: "توفير يصل إلى 40%",
    },
  ]

  return (
    <section className="py-20 bg-slate-800/30" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              لماذا تختار <span className="from-blue-400 text-transparent bg-clip-text via-blue-300 to-red-400 bg-gradient-to-l">قدرةسوفت</span>؟
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              نحن لسنا مجرد شركة تطوير برمجيات، بل شريكك الاستراتيجي في رحلة التحول الرقمي
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-8 rounded-3xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {reason.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">{reason.description}</p>

                  {/* Stats */}
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                    <div className="text-blue-400 font-semibold text-center">{reason.stats}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/10 border border-blue-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">جاهز لبدء مشروعك التالي؟</h3>
              <p className="text-gray-300 text-lg mb-6">انضم إلى أكثر من 200 عميل راضي واكتشف الفرق معنا</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  احصل على استشارة مجانية
                </button>
                <button className="border-2 border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300">
                  تصفح أعمالنا
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
