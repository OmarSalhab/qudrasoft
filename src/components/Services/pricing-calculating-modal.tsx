"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	X,
	Calculator,
	Check,
	Globe,
	Smartphone,
	ShoppingCart,
	Database,
} from "lucide-react";
import { useLocale } from "@/context/locale-context";

interface PricingCalculatorModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export function PricingCalculatorModal({
	isOpen,
	onClose,
}: PricingCalculatorModalProps) {
	const { t, dir } = useLocale();
	const [step, setStep] = useState(1);
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
	});
	const [calculatedPrice, setCalculatedPrice] = useState(0);

	const websiteTypes = [
		{
			id: "corporate",
			name: t.pricingCalculator.websiteTypes.corporate,
			price: 500,
			icon: Globe,
		},
		{
			id: "ecommerce",
			name: t.pricingCalculator.websiteTypes.ecommerce,
			price: 800,
			icon: ShoppingCart,
		},
		{
			id: "portfolio",
			name: t.pricingCalculator.websiteTypes.portfolio,
			price: 300,
			icon: Smartphone,
		},
		{
			id: "blog",
			name: t.pricingCalculator.websiteTypes.blog,
			price: 250,
			icon: Database,
		},
	];

	const features = [
		{ id: "cms", name: t.pricingCalculator.featureNames.cms, price: 200 },
		{ id: "seo", name: t.pricingCalculator.featureNames.seo, price: 150 },
		{
			id: "analytics",
			name: t.pricingCalculator.featureNames.analytics,
			price: 100,
		},
		{ id: "social", name: t.pricingCalculator.featureNames.social, price: 80 },
		{
			id: "multilang",
			name: t.pricingCalculator.featureNames.multilang,
			price: 300,
		},
		{
			id: "mobile-app",
			name: t.pricingCalculator.featureNames.mobileApp,
			price: 500,
		},
		{
			id: "payment",
			name: t.pricingCalculator.featureNames.payment,
			price: 250,
		},
		{
			id: "booking",
			name: t.pricingCalculator.featureNames.booking,
			price: 200,
		},
	];

	const designOptions = [
		{
			id: "template",
			name: t.pricingCalculator.designNames.template,
			price: 0,
		},
		{ id: "custom", name: t.pricingCalculator.designNames.custom, price: 300 },
		{
			id: "premium",
			name: t.pricingCalculator.designNames.premium,
			price: 600,
		},
	];

	const calculatePrice = () => {
		let basePrice = 0;
		const selectedType = websiteTypes.find(
			(type) => type.id === formData.websiteType
		);
		if (selectedType) basePrice += selectedType.price;

		const pagesCount = Number.parseInt(formData.pages) || 0;
		basePrice += pagesCount * 50;

		formData.features.forEach((featureId) => {
			const feature = features.find((f) => f.id === featureId);
			if (feature) basePrice += feature.price;
		});

		const selectedDesign = designOptions.find(
			(design) => design.id === formData.design
		);
		if (selectedDesign) basePrice += selectedDesign.price;

		// Timeline multiplier
		if (formData.timeline === "urgent") basePrice *= 1.5;
		else if (formData.timeline === "normal") basePrice *= 1.2;

		setCalculatedPrice(Math.round(basePrice));
	};

	const handleNext = () => {
		if (step === 3) {
			calculatePrice();
		}
		setStep(step + 1);
	};

	const handleFeatureToggle = (featureId: string) => {
		setFormData((prev) => ({
			...prev,
			features: prev.features.includes(featureId)
				? prev.features.filter((id) => id !== featureId)
				: [...prev.features, featureId],
		}));
	};

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
			dir={dir}
		>
			<div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
				{/* Header */}
				<div className="flex items-center justify-between p-6 border-b border-gray-200">
					<div className="flex items-center">
						<Calculator
							className={`w-6 h-6 text-gray-600 ${
								dir === "rtl" ? "ms-3" : "me-3"
							}`}
						/>
						<h2 className="text-lg md:text-2xl font-bold text-gray-800">
							{t.pricingCalculator.modalTitle}
						</h2>
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
						<span className="text-sm text-gray-800">
							{t.pricingCalculator.step} {step} {t.pricingCalculator.of} 4
						</span>
						<span className="text-sm text-gray-800">
							{Math.round((step / 4) * 100)}
							{t.pricingCalculator.percent}
						</span>
					</div>
					<div className="w-full bg-gray-200 rounded-full h-2">
						<div
							className="bg-gray-800 h-2 rounded-full transition-all duration-300"
							style={{ width: `${(step / 4) * 100}%` }}
						></div>
					</div>
				</div>

				<div className="p-6">
					{/* Step 1: Website Type */}
					{step === 1 && (
						<div>
							<h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6">
								{t.pricingCalculator.websiteTypeTitle}
							</h3>
							<div className="grid md:grid-cols-2 gap-4">
								{websiteTypes.map((type) => (
									<button
										key={type.id}
										onClick={() =>
											setFormData((prev) => ({ ...prev, websiteType: type.id }))
										}
										className={`p-6 rounded-2xl border-2 transition-all duration-300 text-${
											dir === "rtl" ? "right" : "left"
										} ${
											formData.websiteType === type.id
												? "border-gray-500 bg-gray-50"
												: "border-gray-200 hover:border-gray-300"
										}`}
									>
										<div className="flex items-center justify-between mb-4">
											<type.icon
												className={`w-6 h-6 md:w-8 md:h-8 ${
													formData.websiteType === type.id
														? "text-gray-700"
														: "text-gray-400"
												}`}
											/>
											<div
												className={`text-${dir === "rtl" ? "right" : "left"}`}
											>
												<h4 className="font-bold text-gray-800 text-md md:text-[16px]">
													{type.name}
												</h4>
												<p className="text-blue-700 font-light text-sm md:text-md">
													{t.pricingCalculator.websiteTypes.from} {type.price}{" "}
													{t.pricingCalculator.websiteTypes.dinar}
												</p>
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
							<h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6">
								{t.pricingCalculator.detailsTitle}
							</h3>

							<div className="mb-6">
								<label className="block text-gray-800 font-semibold mb-2">
									{t.pricingCalculator.pagesLabel}
								</label>
								<Input
									type="number"
									placeholder={t.pricingCalculator.pagesPlaceholder}
									value={formData.pages}
									onChange={(e) =>
										setFormData((prev) => ({ ...prev, pages: e.target.value }))
									}
									className={`text-${dir === "rtl" ? "right" : "left"}`}
								/>
								<p className="text-sm text-gray-600 mt-1">
									{t.pricingCalculator.pagesNote}
								</p>
							</div>

							<div>
								<label className="block text-gray-800 font-semibold mb-4">
									{t.pricingCalculator.featuresLabel}
								</label>
								<div className="grid md:grid-cols-2 gap-3">
									{features.map((feature) => (
										<button
											key={feature.id}
											onClick={() => handleFeatureToggle(feature.id)}
											className={`p-4 rounded-xl border-2 transition-all duration-300 text-${
												dir === "rtl" ? "right" : "left"
											} ${
												formData.features.includes(feature.id)
													? "border-gray-600 bg-gray-50"
													: "border-gray-300 hover:border-gray-400"
											}`}
										>
											<div className="flex items-center justify-between">
												<div
													className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
														formData.features.includes(feature.id)
															? "border-gray-600 bg-gray-600"
															: "border-gray-400"
													}`}
												>
													{formData.features.includes(feature.id) && (
														<Check className="w-3 h-3 text-white" />
													)}
												</div>
												<div
													className={`text-${dir === "rtl" ? "right" : "left"}`}
												>
													<h4 className="font-semibold text-sm md:text-[16px] text-gray-900">
														{feature.name}
													</h4>
													<p className="text-blue-700 text-sm">
														{t.pricingCalculator.featurePrice.replace(
															"{price}",
															feature.price.toString()
														)}
													</p>
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
							<h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6">
								{t.pricingCalculator.designTimelineTitle}
							</h3>

							<div className="mb-6">
								<label className="block text-gray-800 font-semibold mb-4">
									{t.pricingCalculator.designLabel}
								</label>
								<div className="space-y-3">
									{designOptions.map((design) => (
										<button
											key={design.id}
											onClick={() =>
												setFormData((prev) => ({ ...prev, design: design.id }))
											}
											className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-${
												dir === "rtl" ? "right" : "left"
											} ${
												formData.design === design.id
													? "border-gray-600 bg-gray-50"
													: "border-gray-300 hover:border-gray-400"
											}`}
										>
											<div className="flex items-center justify-between">
												<div
													className={`w-5 h-5 rounded-full border-2 ${
														formData.design === design.id
															? "border-gray-600 bg-gray-600"
															: "border-gray-400"
													}`}
												></div>
												<div
													className={`text-${dir === "rtl" ? "right" : "left"}`}
												>
													<h4 className="font-semibold text-gray-900 text-sm md:text-[16px]">
														{design.name}
													</h4>
													<p className="text-blue-700 text-xs md:text-sm">
														{design.price === 0
															? t.pricingCalculator.designFree
															: t.pricingCalculator.designPrice.replace(
																	"{price}",
																	design.price.toString()
															  )}
													</p>
												</div>
											</div>
										</button>
									))}
								</div>
							</div>

							<div>
								<label className="block text-gray-800 font-semibold mb-4">
									{t.pricingCalculator.timelineLabel}
								</label>
								<div className="space-y-3">
									<button
										onClick={() =>
											setFormData((prev) => ({ ...prev, timeline: "normal" }))
										}
										className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-${
											dir === "rtl" ? "right" : "left"
										} ${
											formData.timeline === "normal"
												? "border-gray-600 bg-gray-50"
												: "border-gray-300 hover:border-gray-400"
										}`}
									>
										<div className="flex items-center justify-between">
											<div
												className={`w-5 h-5 rounded-full border-2 ${
													formData.timeline === "normal"
														? "border-gray-600 bg-gray-600"
														: "border-gray-400"
												}`}
											></div>
											<div
												className={`text-${dir === "rtl" ? "right" : "left"}`}
											>
												<h4 className="font-semibold text-gray-900 text-sm md:text-[16px]">
													{t.pricingCalculator.timelineNormal}
												</h4>
												<p className="text-blue-700 text-sm">
													{t.pricingCalculator.timelineNormalNote}
												</p>
											</div>
										</div>
									</button>
									<button
										onClick={() =>
											setFormData((prev) => ({ ...prev, timeline: "urgent" }))
										}
										className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-${
											dir === "rtl" ? "right" : "left"
										} ${
											formData.timeline === "urgent"
												? "border-gray-600 bg-gray-50"
												: "border-gray-300 hover:border-gray-400"
										}`}
									>
										<div className="flex items-center justify-between">
											<div
												className={`w-5 h-5 rounded-full border-2 ${
													formData.timeline === "urgent"
														? "border-gray-600 bg-gray-600"
														: "border-gray-400"
												}`}
											></div>
											<div
												className={`text-${dir === "rtl" ? "right" : "left"}`}
											>
												<h4 className="font-semibold text-gray-900 text-sm md:text-[16px]">
													{t.pricingCalculator.timelineUrgent}
												</h4>
												<p className="text-orange-600 text-sm">
													{t.pricingCalculator.timelineUrgentNote}
												</p>
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
								<div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<Calculator className="w-10 h-10 text-gray-700" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
									{t.pricingCalculator.estimatedPriceTitle}
								</h3>
								<div className="text-3xl md:text-5xl font-bold text-gray-700 mb-4">
									{calculatedPrice} {t.pricingCalculator.websiteTypes.dinar}
								</div>
								<p className="text-gray-700">
									{t.pricingCalculator.estimatedPriceNote}
								</p>
							</div>

							<div className="bg-gray-50 rounded-2xl p-6 mb-6">
								<h4 className="font-bold text-gray-900 mb-4">
									{t.pricingCalculator.summaryTitle}
								</h4>
								<div className="space-y-2 text-sm text-gray-700">
									<p>
										{t.pricingCalculator.summary.websiteType}
										{
											websiteTypes.find((t) => t.id === formData.websiteType)
												?.name
										}
									</p>
									<p>
										{t.pricingCalculator.summary.pages}
										{formData.pages}
									</p>
									<p>
										{t.pricingCalculator.summary.features}
										{formData.features.length}{" "}
										{t.pricingCalculator.featuresLabel}
									</p>
									<p>
										{t.pricingCalculator.summary.design}
										{designOptions.find((d) => d.id === formData.design)?.name}
									</p>
									<p>
										{t.pricingCalculator.summary.timeline}
										{formData.timeline === "urgent"
											? t.pricingCalculator.summaryUrgent
											: t.pricingCalculator.summaryNormal}
									</p>
								</div>
							</div>

							<div className="grid md:grid-cols-2 gap-4 mb-6">
								<Input
									placeholder={t.pricingCalculator.contact.name}
									value={formData.name}
									onChange={(e) =>
										setFormData((prev) => ({ ...prev, name: e.target.value }))
									}
								/>
								<Input
									placeholder={t.pricingCalculator.contact.email}
									type="email"
									value={formData.email}
									onChange={(e) =>
										setFormData((prev) => ({ ...prev, email: e.target.value }))
									}
								/>
								<Input
									placeholder={t.pricingCalculator.contact.phone}
									value={formData.phone}
									onChange={(e) =>
										setFormData((prev) => ({ ...prev, phone: e.target.value }))
									}
								/>
								<Input
									placeholder={t.pricingCalculator.contact.company}
									value={formData.company}
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											company: e.target.value,
										}))
									}
								/>
							</div>
						</div>
					)}

					{/* Navigation Buttons */}
					<div className="flex justify-between items-center mt-8 rtl:gap-2" dir={dir}>
						{step > 1 && (
							<Button
								variant="outline"
								onClick={() => setStep(step - 1)}
								className="px-8"
							>
								{t.pricingCalculator.previous}
							</Button>
						)}

						<div className={dir === "rtl" ? "ms-auto" : "ms-auto"}>
							{step < 4 ? (
								<Button
									onClick={handleNext}
									disabled={
										(step === 1 && !formData.websiteType) ||
										(step === 2 && !formData.pages) ||
										(step === 3 && (!formData.design || !formData.timeline))
									}
									className="px-8 bg-gray-700 hover:bg-gray-800 text-white"
								>
									{t.pricingCalculator.next}
								</Button>
							) : (
								<Button
									onClick={() => {
										// Handle form submission
										console.log(
											"Form submitted:",
											formData,
											"Price:",
											calculatedPrice
										);
										onClose();
									}}
									disabled={
										!formData.name || !formData.email || !formData.phone
									}
									className="px-8 bg-gray-700 hover:bg-gray-800 text-white"
								>
									{t.pricingCalculator.getQuote}
								</Button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
