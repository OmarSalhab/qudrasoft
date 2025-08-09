"use client";
import type { LucideIcon } from "lucide-react";
import {
	MessageSquare,
	Lightbulb,
	Code,
	Rocket,
	CheckCircle,
	Users,
} from "lucide-react";
import { useLocale } from "../../context/locale-context";

export default function ProcessSection() {
	const { t, dir } = useLocale();

	type ProcessStep = {
		title: string;
		description: string;
		details: string[];
		duration: string;
	};

	const icons: LucideIcon[] = [
		MessageSquare,
		Lightbulb,
		Code,
		CheckCircle,
		Rocket,
		Users,
	];
	const rawSteps = t.about.process.steps as ProcessStep[];
	const steps: Array<ProcessStep & { icon: LucideIcon }> = rawSteps.map(
		(step, i: number) => ({
			icon: icons[i] ?? MessageSquare,
			...step,
		})
	);

	const isLtr = dir === "ltr";

	return (
		<section
			className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
			dir={dir}
		>
			<div className="container mx-auto px-6">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
							<span className="from-blue-400 text-transparent bg-clip-text via-blue-300 to-red-400 bg-gradient-to-l">
								{t.about.process.title.main}
							</span>{" "}
							{t.about.process.title.highlight}
						</h2>
						<p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
							{t.about.process.description}
						</p>
					</div>

					<div className="relative">
						{/* Timeline Line */}
						<div
							className={`absolute ${
								isLtr ? "left-4" : "right-4"
							} top-0 bottom-0 w-1 bg-gradient-to-b  to-red-400 from-blue-400 hidden lg:block`}
						></div>

						<div className={`space-y-12 ${isLtr ? "lg:ml-20" : "lg:ms-20"}`}>
							{steps.map((step, index: number) => {
								const ContentSideMargin =
									index % 2 === 0
										? isLtr
											? "lg:ml-24"
											: "lg:mr-24"
										: isLtr
										? "lg:mr-24"
										: "lg:ml-24";

								const RowDirection =
									index % 2 === 0
										? isLtr
											? "lg:flex-row"
											: "lg:flex-row-reverse"
										: isLtr
										? "lg:flex-row-reverse"
										: "lg:flex-row";

								const NodeSide = isLtr ? "lg:-left-4" : "lg:-right-4";

								const PillMargin = isLtr ? "mr-4" : "ml-4";

								return (
									<div
										key={index}
										className={`flex flex-col items-start gap-6 ${RowDirection}`}
									>
										{/* Timeline Node */}
										<div className={`relative lg:absolute ${NodeSide} z-10`}>
											<div className="w-16 h-16 bg-gradient-to-t  to-red-400 from-blue-400  rounded-full flex items-center justify-center shadow-lg">
												<step.icon className="w-8 h-8 text-white" />
											</div>
											<div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
												{step.duration}
											</div>
										</div>

										{/* Content Card */}
										<div className={`flex-1 ${ContentSideMargin}`}>
											<div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-8 rounded-3xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105">
												<div className="flex items-center mb-4">
													<div
														className={`bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold ${PillMargin}`}
													>
														{t.about.process.stageLabel} {index + 1}
													</div>
												</div>

												<h3 className="text-2xl font-bold text-white mb-4">
													{step.title}
												</h3>
												<p className="text-gray-300 text-lg leading-relaxed mb-6">
													{step.description}
												</p>

												<div className="grid md:grid-cols-2 gap-3">
													{step.details.map(
														(detail: string, detailIndex: number) => (
															<div
																key={detailIndex}
																className="flex items-center text-gray-400"
															>
																<div
																	className={`w-2 h-2 bg-blue-400 rounded-full ${
																		isLtr ? "mr-3" : "ml-3"
																	}`}
																></div>
																<span>{detail}</span>
															</div>
														)
													)}
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					{/* Bottom CTA */}
					<div className="text-center mt-16">
						<div className="bg-gradient-to-r from-blue-500/10 to-blue-500/10 border border-blue-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
							<h3 className="text-3xl font-bold text-white mb-4">
								{t.about.process.cta.title}
							</h3>
							<p className="text-gray-300 text-lg mb-6">
								{t.about.process.cta.description}
							</p>
							<button className="bg-gradient-to-tl  to-red-400 from-blue-400  text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300">
								{t.about.process.cta.button}
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
