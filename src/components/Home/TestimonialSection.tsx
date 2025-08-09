"use client";
import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale } from "../../context/locale-context";
import Image from "next/image";

export default function TestimonialsSection() {
	const [currentTestimonial, setCurrentTestimonial] = useState(0);
	const { t, dir } = useLocale();

	const testimonials = t.home.testimonials.testimonials;

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [testimonials.length]);

	const nextTestimonial = () => {
		setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setCurrentTestimonial(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length
		);
	};

	return (
		<section className="py-20 bg-slate-800/30" dir={dir}>
			<div className="container mx-auto px-6">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-2xl  justify-center items-center gap-1 md:text-6xl font-bold text-white mb-6">
							{t.home.testimonials.title.main}{" "}
							<span className="bg-gradient-to-l from-blue-400 via-blue-200 to-red-400 text-transparent bg-clip-text">
								{t.home.testimonials.title.highlight}
							</span>
							<span
								className={`transform inline-flex ${
									dir === "ltr" ? "scale-x-[-1]" : "scale-x-[1]"
								}`}
							>
								؟
							</span>
						</h2>
						<p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
							{t.home.testimonials.description}
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
									{[...Array(testimonials[currentTestimonial].rating)].map(
										(_, i) => (
											<Star
												key={i}
												className="w-4 h-4 md:w-6 md:h-6 text-yellow-400 fill-current"
											/>
										)
									)}
								</div>

								{/* Testimonial Text */}
								<blockquote className="text-md  md:text-2xl text-gray-200 leading-relaxed text-center mb-8 max-w-4xl mx-auto">
									&ldquo;{testimonials[currentTestimonial].text}&rdquo;
								</blockquote>

								{/* Results */}
								<div className="flex flex-wrap justify-center gap-4 mb-8">
									{testimonials[currentTestimonial].results.map(
										(result, index) => (
											<div
												key={index}
												className="bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2"
											>
												<span className="text-blue-300 font-semibold text-[10px] md:text-sm">
													{result}
												</span>
											</div>
										)
									)}
								</div>

								{/* Client Info */}
								<div className="flex gap-0.5 items-center justify-center">
									<Image
										width={100}
										height={100}
										src={
											testimonials[currentTestimonial].image ||
											"/placeholder.svg"
										}
										alt={testimonials[currentTestimonial].name}
										className="w-16 h-16 rounded-full ml-4 border-2 border-red-400"
									/>
									<div className="text-center">
										<h4 className="text-md md:text-xl font-bold text-white mb-1">
											{testimonials[currentTestimonial].name}
										</h4>
										<p className="text-blue-400 text-sm md:text-md font-semibold">
											{testimonials[currentTestimonial].position}
										</p>
										<p className="text-gray-400 text-xs md:text-sm">
											{testimonials[currentTestimonial].company}
										</p>
										<p className="text-gray-500 text-xs mt-1">
											{testimonials[currentTestimonial].project}
										</p>
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
										index === currentTestimonial
											? "bg-blue-500 w-8"
											: "bg-slate-600 hover:bg-slate-500"
									}`}
								/>
							))}
						</div>
					</div>

					{/* Stats Section */}
					<div className="grid md:grid-cols-4 gap-8 mt-16">
						<div className="text-center">
							<div className="text-2xl md:text-3xl font-bold bg-gradient-to-tl text-transparent bg-clip-text to-red-400 from-blue-400 mb-2">
								{t.home.testimonials.stats.satisfactionRate.number}
							</div>
							<div className="text-gray-400">
								{t.home.testimonials.stats.satisfactionRate.label}
							</div>
						</div>
						<div className="text-center">
							<div className="text-2xl md:text-3xl font-bold bg-gradient-to-tl text-transparent bg-clip-text to-red-400 from-blue-400 mb-2">
								{t.home.testimonials.stats.satisfiedClients.number}
							</div>
							<div className="text-gray-400">
								{t.home.testimonials.stats.satisfiedClients.label}
							</div>
						</div>
						<div className="text-center">
							<div className="text-2xl md:text-3xl font-bold bg-gradient-to-tl text-transparent bg-clip-text to-red-400 from-blue-400 mb-2">
								{t.home.testimonials.stats.averageRating.number}
							</div>
							<div className="text-gray-400">
								{t.home.testimonials.stats.averageRating.label}
							</div>
						</div>
						<div className="text-center">
							<div className="text-2xl md:text-3xl font-bold bg-gradient-to-tl text-transparent bg-clip-text to-red-400 from-blue-400 mb-2">
								{t.home.testimonials.stats.renewalRate.number}
							</div>
							<div className="text-gray-400">
								{t.home.testimonials.stats.renewalRate.label}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
