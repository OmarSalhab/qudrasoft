

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6 py-16" dir="rtl">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">تواصل معنا</h1>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            نحن هنا لمساعدتك. تواصل معنا اليوم ودعنا نحول أفكارك إلى واقع رقمي
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-white mb-6">أرسل لنا رسالة</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">الاسم الأول</label>
                    <Input placeholder="أدخل اسمك الأول" className="bg-slate-700 border-slate-600 text-white" />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">الاسم الأخير</label>
                    <Input placeholder="أدخل اسمك الأخير" className="bg-slate-700 border-slate-600 text-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">البريد الإلكتروني</label>
                  <Input
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">رقم الهاتف</label>
                  <Input placeholder="أدخل رقم هاتفك" className="bg-slate-700 border-slate-600 text-white" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">الموضوع</label>
                  <Input placeholder="موضوع الرسالة" className="bg-slate-700 border-slate-600 text-white" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">الرسالة</label>
                  <Textarea
                    placeholder="اكتب رسالتك هنا..."
                    rows={5}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">إرسال الرسالة</Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-white mb-6">معلومات التواصل</h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center ml-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">البريد الإلكتروني</h3>
                      <p className="text-gray-300">info@qudrasoft.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center ml-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">رقم الهاتف</h3>
                      <p className="text-gray-300">+962 7 9999 9999</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center ml-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">العنوان</h3>
                      <p className="text-gray-300">عمان، الأردن</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center ml-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">ساعات العمل</h3>
                      <p className="text-gray-300">الأحد - الخميس: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">لماذا تختار قدرةسوفت ؟</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
                    خبرة واسعة في تطوير البرمجيات
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
                    فريق محترف ومتخصص
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
                    دعم فني متواصل
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
                    أسعار تنافسية
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
