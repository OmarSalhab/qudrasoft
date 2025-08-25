"use client";

import { TranslationType } from "@/lib/types";
import { Check, Globe } from "lucide-react";
import PriceCalculatorClient from "./calculaterCard";
import { PricingCalculatorModal } from "./pricing-calculating-modal";
import { useState } from "react";

type HeroProps = {
	t: TranslationType;
	dir: "ltr" | "rtl";
};

const Hero = ({ t, dir }: HeroProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const onClick = () => {
		setIsOpen(true);
	};

	const pricingFeatures = [
		t.websiteDevelopment.features.list[0].title,
		t.websiteDevelopment.features.list[1].title,
		t.websiteDevelopment.features.list[2].title,
		t.websiteDevelopment.features.list[3].title,
		t.websiteDevelopment.features.list[4].title,
		t.websiteDevelopment.features.list[5].title,
	];

	return (
		<>
			<div className={`container mx-auto  py-16`} dir={dir}>
				<div className="max-w-7xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Left Side - Pricing */}
						<div className="bg-blue-600/30 order-2 sm:flex sm:flex-col sm:justify-center sm:items-center backdrop-blur-sm rounded-3xl p-3 m-1 sm:p-5 border border-blue-500/20 shadow-2xl ">
							<div className="text-center mb-10">
								<div className="text-4xl sm:text-5xl font-bold text-white mb-4 ">
									{t.websiteDevelopment.pricing.price}
								</div>
								<div className="text-2xl sm:text-3xl font-bold text-white mb-4 ">
									{t.websiteDevelopment.pricing.title}
								</div>
								<div className="text-lg sm:text-xl text-blue-100 mb-6 ">
									{t.websiteDevelopment.pricing.description}
								</div>
								<div className="text-blue-200 text-sm sm:text-md mb-10 sm:mb-2">
									{t.websiteDevelopment.pricing.features.join(", ")}
								</div>
							</div>

							{/* Pricing Features */}
							<div className="gap-3 sm:gap-5 mb-10 grid sm:grid-cols-2">
								{pricingFeatures.map((feature, index) => (
									<div
										key={index}
										className="flex w-full items-center text-white"
									>
										<div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center me-4 flex-shrink-0">
											<Check className="w-4 h-4 text-white" />
										</div>
										<span className="text-xs sm:text-sm">{feature}</span>
									</div>
								))}
							</div>

							{/* Price Calculator */}
							<div className="relative">
								<PriceCalculatorClient t={t} onClick={onClick} />
							</div>
						</div>

						{/* Right Side - Service Description */}
						<div
							className={`text-center order-1 ${
								dir === "rtl" ? "lg:text-right" : "lg:text-left"
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
			<PricingCalculatorModal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				t={t}
				dir={dir}
			/>
		</>
	);
};

export default Hero;
