import { Button } from "@/components/ui/button";
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
} from "lucide-react";
import { getTranslation } from "../../../../lib/translations";
import { getDirection } from "../../../../lib/i18n";
import type { Locale } from "../../../../lib/i18n";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
	const { locale } = await params;

	const metadata = {
		ar: {
			title: "حلول QR الذكية | قوائم طعام رقمية ونظام طلبات - سولڤنير",
			description:
				"حلول QR متطورة للمطاعم والفنادق. قوائم طعام رقمية، نظام طلبات ذكي، عروض ديناميكية. وفر 60% من التكاليف وزد مبيعاتك 70%. باقات تبدأ من 199 دينار. QR Menu، QR Ordering، QR Offers.",
			keywords:
				"حلول QR, قائمة طعام رقمية, نظام طلبات, QR Menu, QR Code, مطاعم, فنادق, قوائم إلكترونية, نظام طلبات ذكي, عروض رقمية, أتمتة مطاعم, تطبيق طلبات, منيو رقمي, QR Solutions Jordan",
		},
		en: {
			title: "Smart QR Solutions | Digital Menus & Ordering System - Solvenear",
			description:
				"Advanced QR solutions for restaurants and hotels. Digital menus, smart ordering system, dynamic offers. Save 60% on costs and increase sales by 70%. Packages from 199 JOD. QR Menu, QR Ordering, QR Offers.",
			keywords:
				"QR solutions, digital menu, ordering system, QR Menu, QR Code, restaurants, hotels, electronic menus, smart ordering system, digital offers, restaurant automation, ordering app, digital menu, QR Solutions Jordan",
		},
	};

	const current = metadata[locale];

	return {
		title: current.title,
		description: current.description,
		keywords: current.keywords,
		alternates: {
			canonical: `/${locale}/services/qr-solutions`,
			languages: {
				en: "/en/services/qr-solutions",
				ar: "/ar/services/qr-solutions",
			},
		},
		openGraph: {
			title: current.title,
			description: current.description,
			url: `https://www.solvenear.com/${locale}/services/qr-solutions`,
			type: "website",
			images: [
				{
					url: "https://www.solvenear.com/favicon.ico",
					width: 512,
					height: 512,
					alt: "Solvenear QR Solutions",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: current.title,
			description: current.description,
		},
	};
}

export default async function QRSolutionsPage({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}) {
	const { locale } = await params;
	const t = getTranslation(locale);
	const dir = getDirection(locale);

	const solutions = t.qrSolution.solutions.items.map((item, idx) => ({
		icon: [QrCode, Smartphone, Eye][idx],
		...item,
		color: [
			"from-orange-500 to-red-500",
			"from-blue-500 to-cyan-500",
			"from-purple-500 to-pink-500",
		][idx],
		bgColor: [
			"from-orange-500/10 to-red-500/10",
			"from-blue-500/10 to-cyan-500/10",
			"from-purple-500/10 to-pink-500/10",
		][idx],
	}));

	const features = t.qrSolution.features.items.map((item, idx) => ({
		icon: [Zap, DollarSign, TrendingUp, Bell, Settings, BarChart3][idx],
		...item,
	}));

	const pricingFeatures = t.qrSolution.hero.savings.items;
	const stats = t.qrSolution.stats;
	const additionalServices: {
		title: string;
		description: string;
		price: string;
	}[] = t.qrSolution.additionalServices || [];

	const testimonials: {
		name: string;
		company: string;
		text: string;
		savings: string;
		rating: number;
	}[] = t.qrSolution.testimonials.items;

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
			{/* Hero Section */}
			<div className="container mx-auto px-6 py-16" dir={dir}>
				<div className="max-w-7xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Left Side - Pricing */}
						<div className="bg-blue-600/30 order-2 backdrop-blur-sm rounded-3xl p-10 border border-blue-500/20 shadow-2xl">
							<div className="text-center mb-10">
								<div className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-none">
									199
								</div>
								<div className="text-xl text-blue-100 mb-6">
									{t.qrSolution.hero.statsTitle}
								</div>
								<div className="text-blue-200 text-lg mb-10 leading-relaxed">
									{t.qrSolution.hero.statsDescription}
								</div>
							</div>
							{/* Pricing Features */}
							<div className="gap-4 mb-10 grid md:grid-cols-2">
								{pricingFeatures.map((feature: string, index: number) => (
									<div key={index} className="flex items-center text-white">
										<div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center me-4 flex-shrink-0">
											<Check className="w-4 h-4 text-white" />
										</div>
										<span className="text-md">{feature}</span>
									</div>
								))}
							</div>
							{/* CTA Button */}
							<div className="relative">
								<Link href={dir === "ltr" ? "/en/contact" : "/ar/contact"}>
									<Button className="w-full bg-white/90 hover:bg-white text-blue-700 text-lg py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
										<QrCode className="w-6 h-6 me-3" />
										{t.qrSolution.hero.cta.startSaving}
									</Button>
								</Link>
							</div>
						</div>
						{/* Right Side - Service Description */}
						<div
							className={`order-1 text-center ${
								dir === "rtl" ? "lg:text-right" : "lg:text-left"
							}`}
						>
							<div className="flex justify-center lg:justify-end mb-8">
								<div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
									<QrCode className="w-12 h-12 text-white" />
								</div>
							</div>
							<h1 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight">
								{t.qrSolution.hero.title}
							</h1>
							<p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
								{t.qrSolution.hero.description}
							</p>
							<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
								<h3 className="text-lg md:text-xl font-bold text-white mb-4">
									{t.qrSolution.hero.savings.title}
								</h3>
								<div className="grid md:grid-cols-2 gap-4 text-blue-100">
									{t.qrSolution.hero.savings.items.map(
										(item: string, idx: number) => (
											<div key={idx} className="text-sm md:text-md">
												• {item}
											</div>
										)
									)}
								</div>
							</div>
							<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
								{/* <Button
									size="lg"
									className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
								>
									{t.qrSolution.hero.cta.startSaving}
								</Button> */}
								<Link href={dir === "ltr" ? "/en/contact" : "/ar/contact"}>
									<Button
										variant="outline"
										size="lg"
										className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
									>
										{t.qrSolution.hero.cta.viewDemo}
									</Button>
								</Link>
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
								<div key={index} className="text-center ">
									<div className="text-3xl md:text-4xl font-bold text-white mb-2 justify-center items-center flex flex-col md:block">
										{stat.number}
									</div>
									<div className="text-blue-200">{stat.label}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Solutions Section */}
			<div className="bg-gray-50 py-20">
				<div className="container mx-auto px-6" dir={dir}>
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
								{t.qrSolution.solutions.title}
							</h2>
							<p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
								{t.qrSolution.solutions.description}
							</p>
						</div>

						<div className="space-y-16">
							{solutions.map((solution, index) => {
								// Determine if we should mirror the layout for this row
								const isMirrored =
									dir === "rtl" ? index % 2 === 1 : index % 2 === 0;
								// For icon margin
								const iconMargin = dir === "rtl" ? "me-4" : "ms-4";
								// For grid col-start
								const contentColStart = isMirrored ? "lg:col-start-2" : "";
								const visualColStart = isMirrored ? "lg:col-start-1" : "";

								return (
									<div
										key={index}
										className={`grid lg:grid-cols-2 gap-12 items-center ${
											isMirrored ? "lg:grid-flow-col-dense" : ""
										}`}
									>
										{/* Content */}
										<div className={contentColStart}>
											<div
												className={`flex items-center mb-6 ${
													dir === "rtl" ? "" : "flex-row-reverse"
												}`}
											>
												<div
													className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center ${iconMargin}`}
												>
													<solution.icon className="w-8 h-8 text-white" />
												</div>
												<h3 className="text-2xl md:text-3xl font-bold text-gray-800">
													{solution.title}
												</h3>
											</div>

											<p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
												{solution.description}
											</p>

											{/* Features */}
											<div className="mb-8">
												<h4
													className={`${
														dir === "rtl" ? "text-right" : "text-left"
													} text-xl font-bold text-gray-800 mb-4`}
												>
													{t.qrSolution.solutions.items[0].featuresTitle}
												</h4>
												<div className="grid md:grid-cols-2 gap-3">
													{solution.features.map((feature, featureIndex) => (
														<div
															key={featureIndex}
															className={`flex items-center ${
																dir === "rtl" ? "text-right" : "text-left"
															}`}
														>
															<Check
																className={`w-5 h-5 text-blue-500 ${
																	dir === "rtl" ? "me-2" : "me-2"
																} flex-shrink-0`}
															/>
															<span className="text-gray-700 text-md md:text-lg">
																{feature}
															</span>
														</div>
													))}
												</div>
											</div>

											{/* Benefits */}
											<div className="mb-8">
												<h4 className="text-xl font-bold text-gray-800 mb-4">
													{t.qrSolution.solutions.items[0].benefitsTitle}
												</h4>
												<div className="grid md:grid-cols-2 gap-3">
													{solution.benefits.map((benefit, benefitIndex) => (
														<div
															key={benefitIndex}
															className="flex items-center"
														>
															<DollarSign
																className={`w-5 h-5 text-blue-500 ${
																	dir === "rtl" ? "me-2" : "me-2"
																} flex-shrink-0`}
															/>
															<span className="text-gray-700 font-semibold text-md md:text-lg">
																{benefit}
															</span>
														</div>
													))}
												</div>
											</div>

											<div className="flex items-center justify-between">
												<div
													className={`text-[22px] md:text-3xl font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}
												>
													{solution.price}
												</div>
												<Link
													href={dir === "ltr" ? "/en/contact" : "/ar/contact"}
												>
													<Button
														className={`bg-gradient-to-r ${solution.color} text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300`}
													>
														{solution.cta}
													</Button>
												</Link>
											</div>
										</div>

										{/* Visual */}
										<div className={visualColStart}>
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
														<p className="text-gray-600 font-semibold">
															{t.qrSolution.solutions.items[0].scanCode}
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div className="bg-white py-20">
				<div className="container mx-auto px-6" dir={dir}>
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-6">
								{t.qrSolution.features.title}
							</h2>
							<p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
								{t.qrSolution.features.description}
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
							{features.map((feature, index) => (
								<div
									key={index}
									className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:transform hover:scale-105"
								>
									<div className="flex items-center justify-center w-17 h-17 md:w-20 md:h-20 bg-blue-600 rounded-2xl mb-8 mx-auto group-hover:bg-blue-700 transition-colors duration-300">
										<feature.icon className="w-7 h-7 md:w-10 md:h-10 text-white" />
									</div>
									<h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-4 leading-tight">
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
				<div className="container mx-auto px-6" dir={dir}>
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
								{t.qrSolution.additionalServicesInfo.title}
							</h2>
							<p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto">
								{t.qrSolution.additionalServicesInfo.description}
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							{additionalServices.map((service, index) => (
								<div
									key={index}
									className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
								>
									<h3 className="text-white font-bold text-lg md:text-xl mb-4 group-hover:text-blue-200 transition-colors">
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

			{/* Testimonials */}
			<div className="bg-white py-20">
				<div className="container mx-auto px-6" dir={dir}>
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
								{t.qrSolution.testimonials.title}
							</h2>
							<p className="text-lg md:text-xl text-gray-600">
								{t.qrSolution.testimonials.description}
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8">
							{testimonials.map((testimonial, index) => (
								<div
									key={index}
									className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
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
									<div className="border-t pt-4">
										<h4 className="font-bold text-gray-800 text-sm md:text-lg">
											{testimonial.name}
										</h4>
										<p className="text-gray-600 text-sm mb-3">
											{testimonial.company}
										</p>
										<div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs md:text-sm font-semibold inline-block">
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
				<div className="container mx-auto px-6" dir={dir}>
					<div className="max-w-5xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
							{t.qrSolution.cta.title}
						</h2>
						<p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
							{t.qrSolution.cta.description}
						</p>

						<div className="bg-blue-600/20 rounded-2xl p-8 mb-10">
							<h3 className="text-xl md:text-2xl font-bold text-white mb-4">
								{t.qrSolution.cta.guarantee.title}
							</h3>
							<div className="grid md:grid-cols-2 gap-4 text-blue-200">
								{t.qrSolution.cta.guarantee.items.map((item, idx) => (
									<div key={idx}>{item}</div>
								))}
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-6 justify-center">
							<Link href={dir === "ltr" ? "/en/contact" : "/ar/contact"}>
								<Button
									size="lg"
									className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-md sm:text-lg font-semibold rounded-full shadow-lg"
								>
									{t.qrSolution.cta.buttons.startSaving}
								</Button>
							</Link>
							<Link href={dir === "ltr" ? "/en/contact" : "/ar/contact"}>
								<Button
									variant="outline"
									size="lg"
									className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 px-10 py-4 text-md sm:text-lg font-semibold rounded-full bg-transparent"
								>
									{t.qrSolution.cta.buttons.bookConsultation}
								</Button>
							</Link>
						</div>

						<p className="text-gray-400 mt-6">{t.qrSolution.cta.note}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
