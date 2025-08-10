"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Calculator, Check, Globe, Smartphone, ShoppingCart, Database } from "lucide-react"

interface PricingCalculatorModalProps {
  isOpen: boolean
  onClose: () => void
}

export function PricingCalculatorModal({ isOpen, onClose }: PricingCalculatorModalProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    websiteType: "",
    pages: "",
    features: [] as string[],
    design: "",
    timeline: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    company: "",
  })
  const [calculatedPrice, setCalculatedPrice] = useState(0)

  const websiteTypes = [
    { id: "corporate", name: "موقع شركة", price: 500, icon: Globe },
    { id: "ecommerce", name: "متجر إلكتروني", price: 800, icon: ShoppingCart },
    { id: "portfolio", name: "معرض أعمال", price: 300, icon: Smartphone },
    { id: "blog", name: "مدونة", price: 250, icon: Database },
  ]

  const features = [
    { id: "cms", name: "نظام إدارة المحتوى", price: 200 },
    { id: "seo", name: "تحسين محركات البحث", price: 150 },
    { id: "analytics", name: "تحليلات وإحصائيات", price: 100 },
    { id: "social", name: "تكامل وسائل التواصل", price: 80 },
    { id: "multilang", name: "متعدد اللغات", price: 300 },
    { id: "mobile-app", name: "تطبيق محمول", price: 500 },
    { id: "payment", name: "بوابة دفع", price: 250 },
    { id: "booking", name: "نظام حجز", price: 200 },
  ]

  const designOptions = [
    { id: "template", name: "تصميم من قالب", price: 0 },
    { id: "custom", name: "تصميم مخصص", price: 300 },
    { id: "premium", name: "تصميم متميز", price: 600 },
  ]

  const calculatePrice = () => {
    let basePrice = 0
    const selectedType = websiteTypes.find((type) => type.id === formData.websiteType)
    if (selectedType) basePrice += selectedType.price

    const pagesCount = Number.parseInt(formData.pages) || 0
    basePrice += pagesCount * 50

    formData.features.forEach((featureId) => {
      const feature = features.find((f) => f.id === featureId)
      if (feature) basePrice += feature.price
    })

    const selectedDesign = designOptions.find((design) => design.id === formData.design)
    if (selectedDesign) basePrice += selectedDesign.price

    // Timeline multiplier
    if (formData.timeline === "urgent") basePrice *= 1.5
    else if (formData.timeline === "normal") basePrice *= 1.2

    setCalculatedPrice(Math.round(basePrice))
  }

  const handleNext = () => {
    if (step === 3) {
      calculatePrice()
    }
    setStep(step + 1)
  }

  const handleFeatureToggle = (featureId: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter((id) => id !== featureId)
        : [...prev.features, featureId],
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" dir="rtl">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center">
            <Calculator className="w-6 h-6 text-blue-600 ml-3" />
            <h2 className="text-2xl font-bold text-gray-800">حاسبة أسعار المواقع</h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">الخطوة {step} من 4</span>
            <span className="text-sm text-gray-600">{Math.round((step / 4) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="p-6">
          {/* Step 1: Website Type */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">ما نوع الموقع الذي تريده؟</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {websiteTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setFormData((prev) => ({ ...prev, websiteType: type.id }))}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 text-right ${
                      formData.websiteType === type.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <type.icon
                        className={`w-8 h-8 ${formData.websiteType === type.id ? "text-blue-600" : "text-gray-400"}`}
                      />
                      <div className="text-right">
                        <h4 className="font-bold text-gray-800">{type.name}</h4>
                        <p className="text-blue-600 font-semibold">من {type.price} دينار</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Pages and Features */}
          {step === 2 && (
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">تفاصيل الموقع</h3>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">عدد الصفحات المطلوبة</label>
                <Input
                  type="number"
                  placeholder="مثال: 5"
                  value={formData.pages}
                  onChange={(e) => setFormData((prev) => ({ ...prev, pages: e.target.value }))}
                  className="text-right"
                />
                <p className="text-sm text-gray-500 mt-1">50 دينار لكل صفحة إضافية</p>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-4">الميزات المطلوبة</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {features.map((feature) => (
                    <button
                      key={feature.id}
                      onClick={() => handleFeatureToggle(feature.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 text-right ${
                        formData.features.includes(feature.id)
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            formData.features.includes(feature.id) ? "border-blue-500 bg-blue-500" : "border-gray-300"
                          }`}
                        >
                          {formData.features.includes(feature.id) && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <div className="text-right">
                          <h4 className="font-semibold text-gray-800">{feature.name}</h4>
                          <p className="text-blue-600 text-sm">+{feature.price} دينار</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Design and Timeline */}
          {step === 3 && (
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">التصميم والجدول الزمني</h3>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-4">نوع التصميم</label>
                <div className="space-y-3">
                  {designOptions.map((design) => (
                    <button
                      key={design.id}
                      onClick={() => setFormData((prev) => ({ ...prev, design: design.id }))}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-right ${
                        formData.design === design.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-5 h-5 rounded-full border-2 ${
                            formData.design === design.id ? "border-blue-500 bg-blue-500" : "border-gray-300"
                          }`}
                        ></div>
                        <div className="text-right">
                          <h4 className="font-semibold text-gray-800">{design.name}</h4>
                          <p className="text-blue-600 text-sm">
                            {design.price === 0 ? "مجاناً" : `+${design.price} دينار`}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-4">الجدول الزمني</label>
                <div className="space-y-3">
                  <button
                    onClick={() => setFormData((prev) => ({ ...prev, timeline: "normal" }))}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-right ${
                      formData.timeline === "normal"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-5 h-5 rounded-full border-2 ${
                          formData.timeline === "normal" ? "border-blue-500 bg-blue-500" : "border-gray-300"
                        }`}
                      ></div>
                      <div className="text-right">
                        <h4 className="font-semibold text-gray-800">عادي (2-4 أسابيع)</h4>
                        <p className="text-blue-600 text-sm">+20% من السعر الأساسي</p>
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={() => setFormData((prev) => ({ ...prev, timeline: "urgent" }))}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-right ${
                      formData.timeline === "urgent"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-5 h-5 rounded-full border-2 ${
                          formData.timeline === "urgent" ? "border-blue-500 bg-blue-500" : "border-gray-300"
                        }`}
                      ></div>
                      <div className="text-right">
                        <h4 className="font-semibold text-gray-800">عاجل (1-2 أسبوع)</h4>
                        <p className="text-orange-600 text-sm">+50% من السعر الأساسي</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Contact Info and Results */}
          {step === 4 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">السعر المقدر لموقعك</h3>
                <div className="text-5xl font-bold text-blue-600 mb-4">{calculatedPrice} دينار</div>
                <p className="text-gray-600">هذا السعر تقديري وقد يختلف حسب المتطلبات النهائية</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <h4 className="font-bold text-gray-800 mb-4">ملخص طلبك:</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• نوع الموقع: {websiteTypes.find((t) => t.id === formData.websiteType)?.name}</p>
                  <p>• عدد الصفحات: {formData.pages}</p>
                  <p>• الميزات: {formData.features.length} ميزة</p>
                  <p>• التصميم: {designOptions.find((d) => d.id === formData.design)?.name}</p>
                  <p>• الجدول الزمني: {formData.timeline === "urgent" ? "عاجل" : "عادي"}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Input
                  placeholder="الاسم الكامل"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                />
                <Input
                  placeholder="البريد الإلكتروني"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                />
                <Input
                  placeholder="رقم الهاتف"
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                />
                <Input
                  placeholder="اسم الشركة (اختياري)"
                  value={formData.company}
                  onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep(step - 1)} className="px-8">
                السابق
              </Button>
            )}

            <div className="mr-auto">
              {step < 4 ? (
                <Button
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !formData.websiteType) ||
                    (step === 2 && !formData.pages) ||
                    (step === 3 && (!formData.design || !formData.timeline))
                  }
                  className="px-8 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  التالي
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    // Handle form submission
                    console.log("Form submitted:", formData, "Price:", calculatedPrice)
                    onClose()
                  }}
                  disabled={!formData.name || !formData.email || !formData.phone}
                  className="px-8 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  احصل على عرض السعر
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
