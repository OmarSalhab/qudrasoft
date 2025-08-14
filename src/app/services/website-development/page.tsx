"use client";

import { Button } from "@/components/ui/button";
import {
	Globe,
	Check,
	Calculator,
	Star,
	Users,
	Clock,
	Shield,
	Zap,
	HeartHandshake,
} from "lucide-react";
import { useState } from "react";
import { PricingCalculatorModal } from "../../../components/Services/pricing-calculating-modal";
import { useLocale } from "@/context/locale-context";

export default function WebsiteServicesPage() {
	const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
	const { t, dir } = useLocale();
	const features = [
		{
			icon: Globe,
			title: t.websiteDevelopment.features.list[0].title,
			description: t.websiteDevelopment.features.list[0].description,
		},
		{
			icon: Zap,
			title: t.websiteDevelopment.features.list[1].title,
			description: t.websiteDevelopment.features.list[1].description,
		},
		{
			icon: Clock,
			title: t.websiteDevelopment.features.list[2].title,
			description: t.websiteDevelopment.features.list[2].description,
		},
		{
			icon: Users,
			title: t.websiteDevelopment.features.list[3].title,
			description: t.websiteDevelopment.features.list[3].description,
		},
		{
			icon: Shield,
			title: t.websiteDevelopment.features.list[4].title,
			description: t.websiteDevelopment.features.list[4].description,
		},
		{
			icon: HeartHandshake,
			title: t.websiteDevelopment.features.list[5].title,
			description: t.websiteDevelopment.features.list[5].description,
		},
	];

	const pricingFeatures = [
		t.websiteDevelopment.features.list[0].title,
		t.websiteDevelopment.features.list[1].title,
		t.websiteDevelopment.features.list[2].title,
		t.websiteDevelopment.features.list[3].title,
		t.websiteDevelopment.features.list[4].title,
		t.websiteDevelopment.features.list[5].title,
	];

	const additionalServices = [
		{
			title: t.websiteDevelopment.additionalServices.list[0].title,
			description: t.websiteDevelopment.additionalServices.list[0].description,
			price: t.websiteDevelopment.additionalServices.list[0].price,
		},
		{
			title: t.websiteDevelopment.additionalServices.list[1].title,
			description: t.websiteDevelopment.additionalServices.list[1].description,
			price: t.websiteDevelopment.additionalServices.list[1].price,
		},
		{
			title: t.websiteDevelopment.additionalServices.list[2].title,
			description: t.websiteDevelopment.additionalServices.list[2].description,
			price: t.websiteDevelopment.additionalServices.list[2].price,
		},
		{
			title: t.websiteDevelopment.additionalServices.list[3].title,
			description: t.websiteDevelopment.additionalServices.list[3].description,
			price: t.websiteDevelopment.additionalServices.list[3].price,
		},
	];

	const testimonials = [
		{
			name: t.websiteDevelopment.testimonials.list[0].name,
			company: t.websiteDevelopment.testimonials.list[0].company,
			text: t.websiteDevelopment.testimonials.list[0].text,
      rating: 5,
		},
		{
			name: t.websiteDevelopment.testimonials.list[1].name,
			company: t.websiteDevelopment.testimonials.list[1].company,
			text: t.websiteDevelopment.testimonials.list[1].text,
      rating: 5,
		},
		{
			name: t.websiteDevelopment.testimonials.list[2].name,
			company: t.websiteDevelopment.testimonials.list[2].company,
			text: t.websiteDevelopment.testimonials.list[2].text,
      rating: 5,
		},
	];

	// const packages = [
	//   {
	//     name: "الباقة الأساسية",
	//     price: "299",
	//     description: "مثالية للشركات الناشئة",
	//     features: ["تصميم متجاوب", "5 صفحات", "نموذج اتصال", "تحسين SEO أساسي", "استضافة سنة مجاناً"],
	//   },
	//   {
	//     name: "الباقة المتقدمة",
	//     price: "599",
	//     description: "الأنسب للشركات المتوسطة",
	//     features: [
	//       "كل ما في الباقة الأساسية",
	//       "10 صفحات",
	//       "مدونة",
	//       "تحليلات Google",
	//       "تكامل وسائل التواصل",
	//       "دعم فني 6 أشهر",
	//     ],
	//     popular: true,
	//   },
	//   {
	//     name: "الباقة الاحترافية",
	//     price: "999",
	//     description: "للشركات الكبيرة والمؤسسات",
	//     features: [
	//       "كل ما في الباقة المتقدمة",
	//       "صفحات غير محدودة",
	//       "متجر إلكتروني بسيط",
	//       "تحسين SEO متقدم",
	//       "تدريب على الاستخدام",
	//       "دعم فني سنة كاملة",
	//     ],
	//   },
	// ]

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
			{/* Hero Section */}
			<div className={`container mx-auto  py-16`} dir={dir}>
				<div className="max-w-7xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 items-center">

						{/* Left Side - Pricing */}
						<div className="bg-blue-600/30 order-2 backdrop-blur-sm rounded-3xl p-3 m-1 sm:p-5 border border-blue-500/20 shadow-2xl ">
							<div className="text-center mb-10">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-4 ">
									{t.websiteDevelopment.pricing.price}
								</div>
								<div className="text-2xl sm:text-3xl font-bold text-white mb-4 ">
									{t.websiteDevelopment.pricing.title}
								</div>
								<div className="text-lg sm:text-xl text-blue-100 mb-6">
									{t.websiteDevelopment.pricing.description}
								</div>
								<div className="text-blue-200 text-sm sm:text-md mb-10 ">
									{t.websiteDevelopment.pricing.features.join(", ")}
								</div>
							</div>

							{/* Pricing Features */}
							<div className="gap-3 sm:gap-5 mb-10 grid sm:grid-cols-2">
								{pricingFeatures.map((feature, index) => (
									<div key={index} className="flex w-full items-center text-white">
										<div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center me-4 flex-shrink-0">
											<Check className="w-4 h-4 text-white" />
										</div>
										<span className="text-xs sm:text-sm">{feature}</span>
									</div>
								))}
							</div>

							{/* Price Calculator */}
							<div className="relative ">
								<Button
									onClick={() => setIsCalculatorOpen(true)}
									className="w-full bg-white/90 hover:bg-white text-blue-700 text-md sm:text-lg py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
								>
									<Calculator className="w-6 h-6 me-3" />
									{t.websiteDevelopment.pricing.cta}
								</Button>
							</div>
						</div>

						{/* Right Side - Service Description */}
						<div
							className={`text-center order-1 ${dir === "rtl" ? "lg:text-right" : "lg:text-left"
								
							}`}
						>
							<div className="inline-flex justify-center lg:justify-end mb-8">
								<div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
									<Globe className="w-12 h-12 text-white" />
								</div>
							</div>

							<h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-8 ">
								{t.websiteDevelopment.hero.title}
							</h1>

							<p className="text-xl sm:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
								{t.websiteDevelopment.hero.description}
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
								{/* <Button
									size="lg"
									className="bg-white text-blue-700 hover:bg-gray-100 px-4 sm:px-8 py-4 text-md sm:text-lg font-semibold rounded-full shadow-lg"
								>
									{t.websiteDevelopment.hero.cta.startProject}
								</Button> */}
								{/* <Button
									variant="outline"
									size="lg"
									className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
								>
									{t.websiteDevelopment.hero.cta.viewWork}
								</Button> */}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div className="bg-gray-50 py-20">
				<div className="container mx-auto px-6" dir= {dir}>
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
								{t.websiteDevelopment.features.title}
							</h2>
							<p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
								{t.websiteDevelopment.features.description}
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
									<h3 className="text-lx md:text-2xl font-bold text-gray-800 text-center mb-4 leading-tight">
										{feature.title}
									</h3>
									<p className="text-gray-600 text-center leading-relaxed text-md md:text-lg">
										{feature.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Packages Section */}
			{/* <div className="bg-white py-20">
        <div className="container mx-auto px-6" dir="rtl">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-800 mb-6">
                <span className="text-blue-600">باقاتنا</span> المميزة
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto">اختر الباقة التي تناسب احتياجاتك وميزانيتك</p>
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

			{/* Additional Services Section */}
			<div className="bg-gradient-to-br from-gray-900 via-primary to-gray-900 py-20">
				<div className="container mx-auto px-6" dir={dir}>
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
								{t.websiteDevelopment.additionalServices.title}
							</h2>
							<p className="text-blue-100 text-xl max-w-3xl mx-auto">
								{t.websiteDevelopment.additionalServices.description}
							</p>
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
									<p className="text-blue-100 mb-6 leading-relaxed">
										{service.description}
									</p>
									<div className="text-white font-semibold text-lg">
										{service.price}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Testimonials Section */}
			<div className="bg-gray-50 py-20">
				<div className="container mx-auto px-6" dir={dir}>
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
								{t.websiteDevelopment.testimonials.title}
							</h2>
						</div>

						<div className="grid md:grid-cols-3 gap-8">
							{testimonials.map((testimonial, index) => (
								<div
									key={index}
									className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
								>
									<div className="flex mb-4">
										{[...Array(testimonial.rating)].map((_, i) => (
											<Star
												key={i}
												className="w-5 h-5 text-yellow-400 fill-current"
											/>
										))}
									</div>
									<p className="text-gray-700 mb-6 leading-relaxed">
										{testimonial.text}
									</p>
									<div>
										<h4 className="font-bold text-gray-800">
											{testimonial.name}
										</h4>
										<p className="text-gray-600 text-sm">
											{testimonial.company}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="bg-gray-900 py-20">
				<div className="container mx-auto px-6" dir={dir}>
					<div className="max-w-5xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
							{t.websiteDevelopment.cta.title}
						</h2>
						<p className="text-gray-300 text-xl mb-10 leading-relaxed">
							{t.websiteDevelopment.cta.description}
						</p>
						<div className="flex flex-col sm:flex-row gap-6 justify-center">
							<Button
								size="lg"
								className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-semibold rounded-full"
							>
								{t.websiteDevelopment.cta.buttons.getQuote}
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 px-10 py-4 text-lg font-semibold rounded-full bg-transparent"
							>
								{t.websiteDevelopment.cta.buttons.contactUs}
							</Button>
						</div>
					</div>
				</div>
			</div>

			<PricingCalculatorModal
				isOpen={isCalculatorOpen}
				onClose={() => setIsCalculatorOpen(false)}
			/>
		</div>
	);
}
