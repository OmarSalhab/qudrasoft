"use client";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowDown, Play } from "lucide-react";
import { useState } from "react";
import { useLocale } from "../../context/locale-context";

export default function HeroSection() {
	const [isVideoPlaying, setIsVideoPlaying] = useState(false);
	const { t, dir } = useLocale();

	return (
		<div
			className="relative min-h-screen flex ltr:mb-10 items-center justify-center px-6 overflow-hidden"
			dir={dir}
		>
			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
				<div className="absolute bottom-24 left-24 w-22 h-22 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
				<div className="absolute -top-40 -right-60 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
			</div>

			<div className="relative z-10 text-center max-w-6xl mx-auto">
				{/* Badge */}
				<div className="inline-flex items-center ltr:gap-2 ltr:mt-9 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-8 backdrop-blur-sm">
					<Sparkles className="w-4 h-4 ml-2" />
					<span>{t.home.hero.badge}</span>
				</div>

				{/* Main Heading with Gradient Text */}
				<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
					<span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
						{t.home.hero.mainTitle.companyName}
					</span>
					<br />
					<span className="text-white">{t.home.hero.mainTitle.subtitle}</span>
				</h1>

				{/* Subtitle with Typing Animation */}
				<div className="text-xl md:text-3xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
					<p className="mb-4">{t.home.hero.subtitle.main}</p>
					<p className="text-lg text-blue-300">
						{t.home.hero.subtitle.description}
					</p>
				</div>

				{/* Call to Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
					<Button
						size="lg"
						className="bg-gradient-to-r ltr:gap-2 from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
					>
						<Sparkles className="w-6 h-6 ml-3" />
						{t.home.hero.buttons.startProject}
					</Button>

					<Button
						variant="outline"
						size="lg"
						className="bg-transparent border-2 ltr:gap-2 border-gray-400 text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
						onClick={() => setIsVideoPlaying(true)}
					>
						<Play className="w-6 h-6 ml-3" />
						{t.home.hero.buttons.watchWork}
					</Button>
				</div>

				{/* Trust Indicators */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
					<div className="text-center">
						<div className="text-3xl font-bold bg-gradient-to-tl text-transparent bg-clip-text to-red-400 from-blue-400 mb-2">
							{t.home.hero.stats.completedProjects.number}
						</div>
						<div className="text-gray-400">
							{t.home.hero.stats.completedProjects.label}
						</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold bg-gradient-to-tl text-transparent bg-clip-text to-red-400 from-blue-400 mb-2">
							{t.home.hero.stats.satisfiedClients.number}
						</div>
						<div className="text-gray-400">
							{t.home.hero.stats.satisfiedClients.label}
						</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold bg-gradient-to-tl text-transparent bg-clip-text to-red-400 from-blue-400 mb-2">
							{t.home.hero.stats.yearsExperience.number}
						</div>
						<div className="text-gray-400">
							{t.home.hero.stats.yearsExperience.label}
						</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold bg-gradient-to-tl text-transparent bg-clip-text to-red-400 from-blue-400 mb-2">
							{t.home.hero.stats.technicalSupport.number}
						</div>
						<div className="text-gray-400">
							{t.home.hero.stats.technicalSupport.label}
						</div>
					</div>
				</div>

				{/* Scroll Indicator */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
					<ArrowDown className="w-6 h-6 text-gray-400" />
				</div>
			</div>

			{/* Video Modal */}
			{isVideoPlaying && (
				<div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
					<div className="relative max-w-4xl w-full">
						<button
							onClick={() => setIsVideoPlaying(false)}
							className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl"
						>
							✕
						</button>
						<div className="bg-gray-800 rounded-lg p-8 text-center">
							<h3 className="text-white text-xl mb-4">
								{t.home.hero.videoModal.title}
							</h3>
							<p className="text-gray-300">
								{t.home.hero.videoModal.description}
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
