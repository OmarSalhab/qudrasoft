"use client";
import {
	CheckCircle,
	Star,
	Users,
	Zap,
	Shield,
	HeartHandshake,
} from "lucide-react";
import { useLocale } from "../../context/locale-context";

export default function WhyChooseUs() {
	const { t, dir } = useLocale();

	const reasons = [
		{
			icon: Star,
			title: t.home.whyUs.reasons[0].title,
			description: t.home.whyUs.reasons[0].description,
			stats: t.home.whyUs.reasons[0].stats,
		},
		{
			icon: Zap,
			title: t.home.whyUs.reasons[1].title,
			description: t.home.whyUs.reasons[1].description,
			stats: t.home.whyUs.reasons[1].stats,
		},
		{
			icon: Users,
			title: t.home.whyUs.reasons[2].title,
			description: t.home.whyUs.reasons[2].description,
			stats: t.home.whyUs.reasons[2].stats,
		},
		{
			icon: Shield,
			title: t.home.whyUs.reasons[3].title,
			description: t.home.whyUs.reasons[3].description,
			stats: t.home.whyUs.reasons[3].stats,
		},
		{
			icon: HeartHandshake,
			title: t.home.whyUs.reasons[4].title,
			description: t.home.whyUs.reasons[4].description,
			stats: t.home.whyUs.reasons[4].stats,
		},
		{
			icon: CheckCircle,
			title: t.home.whyUs.reasons[5].title,
			description: t.home.whyUs.reasons[5].description,
			stats: t.home.whyUs.reasons[5].stats,
		},
	];

	return (
		<section className="py-20 bg-slate-800/30" dir={dir}>
			<div className="container mx-auto px-6">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-2xl  md:text-6xl gap-1 items-center justify-center font-bold text-white mb-6">
							{t.home.whyUs.title.main}{" "}
							<span className="from-blue-400 text-transparent bg-clip-text via-blue-300 to-red-400 bg-gradient-to-l">
								{t.home.whyUs.title.highlight}
							</span>
							<span className={`transform inline-flex ${dir === 'ltr' ? 'scale-x-[-1]' : 'scale-x-[1]'}`}>؟</span>
						</h2>
						<p className="text-md md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
							{t.home.whyUs.description}
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
									<h3 className="text-lg  md:text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
										{reason.title}
									</h3>

									<p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-lg">
										{reason.description}
									</p>

									{/* Stats */}
									<div className="bg-blue-500/10 border text-sm border-blue-500/20 rounded-xl p-4">
										<div className="text-blue-400 font-semibold text-center">
											{reason.stats}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Bottom CTA */}
					<div className="text-center mt-16">
						<div className="bg-gradient-to-r from-blue-500/10 to-blue-500/10 border border-blue-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
							<h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
								{t.home.whyUs.cta.title}
							</h3>
							<p className="text-gray-300 text-lg mb-6">
								{t.home.whyUs.cta.description}
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
									{t.home.whyUs.cta.buttons.getConsultation}
								</button>
								<button className="border-2 border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300">
									{t.home.whyUs.cta.buttons.browseWork}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
