"use client"

import { Button } from "@/components/ui/button"
import {
  QrCode,
  Check,
  Star,
  Zap,
  Smartphone,
  TrendingUp,
  DollarSign,
  Bell,
  Eye,
  Settings,
  BarChart3,
} from "lucide-react"
import { useState } from "react"


export default function QRSolutionsPage() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)

  const solutions = [
    {
      icon: QrCode,
      title: "QR Menu - قائمة الطعام الذكية",
      description: "قائمة طعام رقمية تفاعلية تُعرض عند مسح الكود، مع إمكانية التقييم واستدعاء النادل",
      features: [
        "قوائم طعام تفاعلية وجذابة",
        "تصاميم متعددة (عصري، كلاسيكي، مخصص)",
        "نظام تقييمات العملاء",
        "زر استدعاء النادل المباشر",
        "تحديث فوري للأسعار والعروض",
        "دعم متعدد اللغات",
      ],
      benefits: ["توفير تكاليف طباعة القوائم", "تحديث فوري للقائمة", "تجربة عملاء متطورة", "تقليل وقت الانتظار"],
      price: "من 199 دينار",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
    },
    {
      icon: Smartphone,
      title: "QR Ordering - نظام الطلبات الذكي",
      description: "نظام طلبات متكامل للفنادق والمطاعم يوفر آلاف الدنانير سنوياً من تكاليف التشغيل",
      features: [
        "طلبات مباشرة من الغرف والطاولات",
        "لوحة تحكم متقدمة للإدارة",
        "إشعارات فورية للطلبات",
        "تتبع حالة الطلب في الوقت الفعلي",
        "تكامل مع أنظمة الدفع",
        "تقارير مبيعات تفصيلية",
      ],
      benefits: [
        "توفير 60% من تكاليف الموظفين",
        "زيادة المبيعات بنسبة 40%",
        "تقليل الأخطاء البشرية",
        "خدمة عملاء 24/7 بدون موظفين",
      ],
      price: "من 599 دينار",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: Eye,
      title: "QR Offers - العروض الذكية",
      description: "نظام عروض ديناميكي مع عداد تنازلي يزيد المبيعات ويخلق إحساساً بالإلحاح لدى العملاء",
      features: [
        "عروض مع عداد تنازلي مثير",
        "لوحة تحكم شاملة للإدارة",
        "إضافة وحذف العروض بسهولة",
        "تخصيص كامل للتصميم",
        "إحصائيات مفصلة للعروض",
        "إشعارات تلقائية للعملاء",
      ],
      benefits: ["زيادة المبيعات بنسبة 70%", "جذب عملاء جدد", "تحفيز الشراء السريع", "بناء قاعدة عملاء مخلصين"],
      price: "من 299 دينار",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
    },
  ]

  const features = [
    {
      icon: Zap,
      title: "تقنية QR متطورة",
      description: "أكواد QR عالية الجودة تعمل مع جميع الهواتف الذكية بسرعة فائقة",
    },
    {
      icon: DollarSign,
      title: "توفير مالي هائل",
      description: "وفر آلاف الدنانير سنوياً من تكاليف التشغيل والموظفين والطباعة",
    },
    {
      icon: TrendingUp,
      title: "زيادة المبيعات",
      description: "زيادة مؤكدة في المبيعات بنسبة تصل إلى 70% خلال الشهر الأول",
    },
    {
      icon: Bell,
      title: "إشعارات فورية",
      description: "تلقي إشعارات فورية لجميع الطلبات والتفاعلات مع عملائك",
    },
    {
      icon: Settings,
      title: "تحكم كامل",
      description: "لوحة تحكم متقدمة لإدارة جميع جوانب نظام QR الخاص بك",
    },
    {
      icon: BarChart3,
      title: "تحليلات ذكية",
      description: "تقارير مفصلة وإحصائيات دقيقة لمساعدتك في اتخاذ قرارات أفضل",
    },
  ]

  const pricingFeatures = [
    "أكواد QR عالية الجودة",
    "تصميم متجاوب مع جميع الأجهزة",
    "لوحة تحكم متقدمة",
    "إشعارات فورية",
    "تحليلات وتقارير",
    "دعم فني مستمر",
  ]

  const packages = [
    {
      name: "باقة البداية",
      price: "199",
      description: "مثالية للمطاعم الصغيرة",
      features: ["QR Menu أساسي", "تصميم واحد", "حتى 50 صنف", "تحديثات أساسية", "دعم فني 3 أشهر"],
      popular: false,
    },
    {
      name: "باقة الأعمال",
      price: "599",
      description: "الأنسب للفنادق والمطاعم المتوسطة",
      features: [
        "جميع حلول QR",
        "تصاميم متعددة",
        "منتجات غير محدودة",
        "نظام طلبات كامل",
        "تحليلات متقدمة",
        "دعم فني 6 أشهر",
        "تدريب مجاني",
      ],
      popular: true,
    },
    {
      name: "باقة المؤسسات",
      price: "999",
      description: "للسلاسل الكبيرة والمؤسسات",
      features: [
        "حلول QR مخصصة بالكامل",
        "تكامل مع الأنظمة الحالية",
        "فروع متعددة",
        "تحليلات ذكية بالذكاء الاصطناعي",
        "دعم فني سنة كاملة",
        "استشارات مجانية",
        "تطوير ميزات خاصة",
      ],
      popular: false,
    },
  ]

  const testimonials = [
    {
      name: "أحمد الخالدي",
      company: "مطعم الأصالة",
      text: "نظام QR Menu وفر علينا 3000 دينار سنوياً من تكاليف الطباعة، والعملاء يحبون التجربة الجديدة!",
      rating: 5,
      savings: "توفير 3000 دينار سنوياً",
    },
    {
      name: "فاطمة العلي",
      company: "فندق الضيافة",
      text: "نظام QR Ordering غير حياة فندقنا! وفرنا 8 موظفين وزادت مبيعاتنا 45% في شهرين فقط",
      rating: 5,
      savings: "توفير 8 موظفين + زيادة 45%",
    },
    {
      name: "محمد مساد",
      company: "كافيه 5ستارز",
      text: "QR Offers زاد مبيعاتنا 80% خلال شهر واحد! العملاء متحمسون للعروض مع العداد التنازلي",
      rating: 5,
      savings: "زيادة المبيعات 80%",
    },
  ]

  const stats = [
    { number: "500K+", label: "عملية مسح شهرياً" },
    { number: "85%", label: "زيادة متوسط المبيعات" },
    { number: "60%", label: "توفير في التكاليف" },
    { number: "99.9%", label: "وقت تشغيل النظام" },
  ]

  const additionalServices = [
    {
      title: "تصميم أكواد QR مخصصة",
      description: "أكواد QR بتصميم علامتك التجارية وألوانك الخاصة",
      price: "من 50 دينار",
    },
    {
      title: "تكامل مع أنظمة POS",
      description: "ربط نظام QR مع أنظمة نقاط البيع الحالية",
      price: "من 200 دينار",
    },
    {
      title: "تطبيق محمول مخصص",
      description: "تطبيق محمول خاص بعلامتك التجارية",
      price: "من 800 دينار",
    },
    {
      title: "التسويق الرقمي للـ QR",
      description: "حملات تسويقية لتعريف العملاء بنظام QR",
      price: "من 300 دينار شهرياً",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16" dir="rtl">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Pricing */}
            <div className="bg-blue-600/30 backdrop-blur-sm rounded-3xl p-10 border border-blue-500/20 shadow-2xl">
              <div className="text-center mb-10">
                <div className="text-9xl font-bold text-white mb-4 leading-none">199</div>
                <div className="text-2xl text-blue-100 mb-6">دينار للحل الكامل</div>
                <div className="text-blue-200 text-xl mb-10 leading-relaxed">
                  وفر آلاف الدنانير سنوياً واكسب عملاء أكثر
                </div>
              </div>

              {/* Pricing Features */}
              <div className="space-y-5 mb-10">
                {pricingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center text-white">
                    <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="relative">
                <Button className="w-full bg-white/90 hover:bg-white text-blue-700 text-lg py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                  <QrCode className="w-6 h-6 ml-3" />
                  احصل على نظام QR الآن
                </Button>
              </div>
            </div>

            {/* Right Side - Service Description */}
            <div className="text-center lg:text-right">
              <div className="flex justify-center lg:justify-end mb-8">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                  <QrCode className="w-12 h-12 text-white" />
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">حلول QR الذكية</h1>

              <p className="text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                ثورة تقنية تحول عملك وتوفر آلاف الدنانير سنوياً
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">💰 توفير مضمون:</h3>
                <div className="grid grid-cols-2 gap-4 text-blue-100">
                  <div>• 60% من تكاليف الموظفين</div>
                  <div>• 100% من تكاليف الطباعة</div>
                  <div>• 40% من وقت الخدمة</div>
                  <div>• 70% زيادة في المبيعات</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
                >
                  ابدأ التوفير الآن
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
                >
                  شاهد العرض التوضيحي
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white/10 backdrop-blur-sm py-16">
        <div className="container mx-auto px-6" dir="rtl">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6" dir="rtl">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-800 mb-6">
                <span className="text-orange-600">حلولنا</span> الثلاثة المتطورة
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                ثلاثة حلول ذكية تحول عملك إلى تجربة رقمية متطورة وتوفر عليك آلاف الدنانير
              </p>
            </div>

            <div className="space-y-16">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center ml-4`}
                      >
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-800">{solution.title}</h3>
                    </div>

                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">{solution.description}</p>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">✨ المميزات:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {solution.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <Check className="w-5 h-5 text-green-500 ml-2 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">💰 الفوائد المالية:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center">
                            <DollarSign className="w-5 h-5 text-green-500 ml-2 flex-shrink-0" />
                            <span className="text-gray-700 font-semibold">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div
                        className={`text-3xl font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}
                      >
                        {solution.price}
                      </div>
                      <Button
                        className={`bg-gradient-to-r ${solution.color} text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300`}
                      >
                        اطلب الآن
                      </Button>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <div
                      className={`bg-gradient-to-br ${solution.bgColor} rounded-3xl p-12 border border-gray-200 shadow-xl`}
                    >
                      <div className="text-center">
                        <div
                          className={`w-32 h-32 bg-gradient-to-r ${solution.color} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl`}
                        >
                          <solution.icon className="w-16 h-16 text-white" />
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                          <div className="w-24 h-24 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <QrCode className="w-12 h-12 text-gray-600" />
                          </div>
                          <p className="text-gray-600 font-semibold">امسح الكود لتجربة النظام</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6" dir="rtl">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-800 mb-6">
                لماذا تختار <span className="text-blue-600">حلول QR</span> من سولڤنير؟
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                تقنية متطورة تحول عملك وتوفر عليك المال والوقت والجهد
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-center w-20 h-20 bg-blue-600 rounded-2xl mb-8 mx-auto group-hover:bg-blue-700 transition-colors duration-300">
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 text-center mb-4 leading-tight">{feature.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed text-lg">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      {/* <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6" dir="rtl">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-800 mb-6">
                <span className="text-blue-600">باقاتنا</span> المميزة
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto">اختر الباقة التي تناسب حجم عملك ومتطلباتك</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-3xl shadow-xl border-2 p-8 transition-all duration-300 hover:transform hover:scale-105 ${
                    pkg.popular ? "border-blue-500 shadow-blue-500/20" : "border-gray-200 hover:border-blue-300"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        الأكثر شعبية
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                    <div className="text-5xl font-bold text-blue-600 mb-2">
                      {pkg.price}
                      <span className="text-lg text-gray-500"> دينار</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-blue-500 ml-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-4 text-lg font-semibold rounded-2xl transition-all duration-300 ${
                      pkg.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-100 hover:bg-blue-600 text-gray-800 hover:text-white"
                    }`}
                  >
                    اختر هذه الباقة
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* Additional Services */}
      <div className="bg-gradient-to-br from-gray-900 via-primary to-gray-900 py-20">
        <div className="container mx-auto px-6" dir="rtl">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">خدمات إضافية</h2>
              <p className="text-blue-100 text-xl max-w-3xl mx-auto">خدمات متكاملة لتطوير نظام QR الخاص بك</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <h3 className="text-white font-bold text-xl mb-4 group-hover:text-blue-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">{service.description}</p>
                  <div className="text-white font-semibold text-lg">{service.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6" dir="rtl">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                قصص <span className="text-blue-600">نجاح</span> حقيقية
              </h2>
              <p className="text-xl text-gray-600">شاهد كيف غيرت حلول QR أعمال عملائنا ووفرت عليهم آلاف الدنانير</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>
                  <div className="border-t pt-4">
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm mb-3">{testimonial.company}</p>
                    <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold inline-block">
                      💰 {testimonial.savings}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

     

      {/* CTA Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-6" dir="rtl">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">جاهز لتوفير آلاف الدنانير؟</h2>
            <p className="text-gray-300 text-xl mb-10 leading-relaxed">
              ابدأ رحلة التحول الرقمي اليوم ووفر على عملك آلاف الدنانير سنوياً مع حلول QR الذكية
            </p>

            <div className="bg-blue-600/20 rounded-2xl p-8 mb-10">
              <h3 className="text-2xl font-bold text-white mb-4">🎯 ضمان النتائج:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-blue-200">
                <div>✅ توفير مضمون في التكاليف خلال 30 يوم</div>
                <div>✅ زيادة المبيعات أو نعيد أموالك</div>
                <div>✅ دعم فني مجاني لمدة 6 أشهر</div>
                <div>✅ تدريب مجاني لفريق العمل</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg"
              >
                ابدأ التوفير الآن - مجاناً
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 px-10 py-4 text-lg font-semibold rounded-full bg-transparent"
              >
                احجز استشارة مجانية
              </Button>
            </div>

            <p className="text-gray-400 mt-6">💡 استشارة مجانية لمدة 30 دقيقة لتقييم احتياجاتك</p>
          </div>
        </div>
      </div>

      
    </div>
  )
}
