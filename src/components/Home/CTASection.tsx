"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, Calendar } from "lucide-react";
import { useLocale } from "../../context/locale-context";

export default function CTASection() {
	const { t, dir } = useLocale();
	
	return (
		<section
			className="py-20 bg-gradient-to-br from-gray-900 via-primary to-gray-900 relative overflow-hidden"
			dir={dir}
		>
			{/* Background Elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
				<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
			</div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-6xl mx-auto text-center">
					<h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
						{t.home.cta.title}
					</h2>
					<p className="text-xl md:text-2xl text-red-100 mb-12 max-w-4xl mx-auto leading-relaxed">
						{t.home.cta.description}
					</p>

					{/* Contact Options */}
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
						<div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
							<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
								<Phone className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-white font-semibold mb-2">{t.home.cta.contactOptions.call.title}</h3>
							<p className="text-red-100 text-sm mb-3">
								{t.home.cta.contactOptions.call.description}
							</p>
							<p className="text-white font-semibold">{t.home.cta.contactOptions.call.contact}</p>
						</div>

						<div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
							<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
								<Mail className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-white font-semibold mb-2">{t.home.cta.contactOptions.email.title}</h3>
							<p className="text-red-100 text-sm mb-3">
								{t.home.cta.contactOptions.email.description}
							</p>
							<p className="text-white font-semibold">{t.home.cta.contactOptions.email.contact}</p>
						</div>

						<div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
							<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
								<MessageCircle className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-white font-semibold mb-2">{t.home.cta.contactOptions.chat.title}</h3>
							<p className="text-red-100 text-sm mb-3">{t.home.cta.contactOptions.chat.description}</p>
							<p className="text-white font-semibold">{t.home.cta.contactOptions.chat.contact}</p>
						</div>

						<div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
							<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
								<Calendar className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-white font-semibold mb-2">{t.home.cta.contactOptions.appointment.title}</h3>
							<p className="text-red-100 text-sm mb-3">
								{t.home.cta.contactOptions.appointment.description}
							</p>
							<p className="text-white font-semibold">{t.home.cta.contactOptions.appointment.contact}</p>
						</div>
					</div>

					{/* Main CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
						<Button
							size="lg"
							className="bg-white hover:bg-gray-100 px-12 py-4 text-lg font-extrabold rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
						>
							<div className="bg-clip-text text-transparent bg-gradient-to-l from-primary via-red-400 to-primary">
								{t.home.cta.buttons.getQuote}
							</div>
						</Button>
						<Button
							variant="outline"
							size="lg"
							className="border-2 border-white text-white hover:bg-white hover:text-primary px-12 py-4 text-lg font-bold rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-105 bg-transparent"
						>
							{t.home.cta.buttons.browseWork}
						</Button>
					</div>

					{/* Trust Indicators */}
					<div className="flex flex-wrap justify-center items-center gap-8 text-green-100">
						<div className="flex items-center">
							<div className="w-2 h-2 bg-blue-300 rounded-full ml-2"></div>
							<span>{t.home.cta.trustIndicators.freeConsultation}</span>
						</div>
						<div className="flex items-center">
							<div className="w-2 h-2 bg-red-300 rounded-full ml-2"></div>
							<span>{t.home.cta.trustIndicators.qualityGuarantee}</span>
						</div>
						<div className="flex items-center">
							<div className="w-2 h-2 bg-blue-300 rounded-full ml-2"></div>
							<span>{t.home.cta.trustIndicators.continuousSupport}</span>
						</div>
						<div className="flex items-center">
							<div className="w-2 h-2 bg-red-300 rounded-full ml-2"></div>
							<span>{t.home.cta.trustIndicators.competitivePricing}</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}