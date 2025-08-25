"use client";
import { useMemo, useState } from "react";
import {
	ChevronDown,
	Search,
	MessageCircle,
	Phone,
	Mail,
	HelpCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../../components/ui/accordion";
import type { TranslationType } from "../../lib/types";

interface FAQ {
	id: string;
	question: string;
	answer: string;
	category: string;
	popular: boolean;
}

type FAQSectionProps = {
	t: TranslationType;
	dir: "ltr" | "rtl";
};

export function FAQSection({ t, dir }: FAQSectionProps) {
	const isLtr = dir === "ltr";

	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("all");

	const faqs = t.about.faq.faqs as FAQ[];

	const categories = useMemo(() => {
		const ids = [
			"all",
			"development",
			"pricing",
			"support",
			"technical",
			"security",
			"payment",
			"marketing",
			"management",
		];
		return ids.map((id) => ({
			id,
			name: (t.about.faq.categories as Record<string, string>)[id] ?? id,
			count:
				id === "all"
					? faqs.length
					: faqs.filter((f) => f.category === id).length,
		}));
	}, [faqs, t.about.faq.categories]);

	const filteredFAQs = faqs.filter((faq) => {
		const matchesSearch =
			faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
			faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCategory =
			selectedCategory === "all" || faq.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	const popularFAQs = faqs.filter((faq) => faq.popular);

	return (
		<section className="bg-gradient-to-br from-gray-50 to-white" dir={dir}>
			<div className=" bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
				<div className="container mx-auto px-4 text-center">
					<div className="max-w-6xl mx-auto">
						{/* Header */}
						<div className="text-center mb-16">
							<div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
								<HelpCircle className="w-8 h-8 text-blue-600" />
							</div>
							<h2 className="text-3xl md:text-5xl font-bold text-white-800 mb-6">
								{t.about.faq.title.main}{" "}
								<span className="bg-gradient-to-tl text-transparent bg-clip-text to-red-400 from-blue-400">
									{t.about.faq.title.highlight}
								</span>
							</h2>
							<p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
								{t.about.faq.description}
							</p>
						</div>
					</div>
				</div>
				<div className="container mx-auto px-6">
					{/* Search and Filter */}
					<div className="mb-12">
						<div className="max-w-2xl mx-auto mb-8">
							<div className="relative">
								<Search
									className={`absolute ${
										isLtr ? "left-4" : "right-4"
									} top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400`}
								/>
								<Input
									type="text"
									placeholder={t.about.faq.searchPlaceholder}
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className={`${
										isLtr ? "pl-12" : "pr-12"
									} py-4 text-sm md:text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 transition-colors`}
								/>
							</div>
						</div>

						{/* Category Filter */}
						<div className="flex flex-wrap justify-center gap-3">
							{categories.map((category) => (
								<button
									key={category.id}
									onClick={() => setSelectedCategory(category.id)}
									className={`px-2 py-1 md:px-6 md:py-3 rounded-full font-semibold transition-all duration-300 ${
										selectedCategory === category.id
											? "bg-gradient-to-tl  to-red-400 from-blue-400 text-white shadow-lg transform scale-105"
											: "bg-white text-gray-500 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
									}`}
								>
									{category.name}
									<span
										className={`${isLtr ? "ml-2" : "mr-2"} text-sm opacity-75`}
									>
										({category.count})
									</span>
								</button>
							))}
						</div>
					</div>

					{/* Popular FAQs */}
					{selectedCategory === "all" && searchTerm === "" && (
						<div className="mb-12">
							<h3 className="text-lg md:2xl font-bold text-white mb-6 text-center">
								{t.about.faq.labels.popular}
							</h3>
							<div className="grid md:grid-cols-2 gap-6">
								{popularFAQs.slice(0, 4).map((faq) => (
									<div
										key={faq.id}
										className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300"
									>
										<h4 className="font-bold text-gray-800 mb-3 text-sm md:text-lg">
											{faq.question}
										</h4>
										<p className="text-gray-500 text-xs md:text-sm line-clamp-3">
											{faq.answer}
										</p>
										<div className="mt-4">
											<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white">
												{t.about.faq.labels.popular}
											</span>
										</div>
									</div>
								))}
							</div>
						</div>
					)}

					{/* FAQ Accordion */}
					<div className="max-w-4xl mx-auto">
						{filteredFAQs.length > 0 ? (
							<Accordion type="single" collapsible className="space-y-4">
								{filteredFAQs.map((faq) => (
									<AccordionItem
										key={faq.id}
										value={faq.id}
										className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
									>
										<AccordionTrigger className="px-8 py-6 text-right hover:no-underline group">
											<div className="flex items-center justify-between w-full">
												<div className="flex items-center">
													<h3 className="text-sm md:text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
														{faq.question}
													</h3>
													{faq.popular && (
														<span
															className={`bg-blue-100 hidden md:block text-blue-600 px-3 py-1 rounded-full text-xs font-semibold ${
																isLtr ? "ml-3" : "mr-3"
															}`}
														>
															{t.about.faq.labels.popular}
														</span>
													)}
												</div>
												<ChevronDown className="w-5 h-5 text-blue-600 transition-transform duration-300 group-data-[state=open]:rotate-180" />
											</div>
										</AccordionTrigger>
										<AccordionContent className="px-8 pb-6">
											<div className="pt-4 border-t border-gray-100">
												<p className="text-gray-600 leading-relaxed text-sm md:text-lg">
													{faq.answer}
												</p>
												<div className="mt-6 flex items-center justify-between">
													<div className="flex items-center gap-4">
														<span className="text-xs md:text-sm text-gray-500">
															{t.about.faq.labels.helpfulQuestion}
														</span>
														<div className="flex gap-2">
															<button className="text-blue-600 hover:text-blue-700 text-xs md:text-sm font-semibold">
																{t.about.faq.labels.yes}
															</button>
															<button className="text-gray-400 hover:text-gray-600 text-xs md:text-sm font-semibold">
																{t.about.faq.labels.no}
															</button>
														</div>
													</div>
													<span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
														{(t.about.faq.categories as Record<string, string>)[
															faq.category
														] || faq.category}
													</span>
												</div>
											</div>
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						) : (
							<div className="text-center py-12">
								<div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
									<Search className="w-12 h-12 text-gray-400" />
								</div>
								<h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
									{t.about.faq.empty.title}
								</h3>
								<p className="text-gray-600 mb-6">
									{t.about.faq.empty.description}
								</p>
								<Button
									onClick={() => {
										setSearchTerm("");
										setSelectedCategory("all");
									}}
									className="bg-blue-600 hover:bg-blue-700 text-white"
								>
									{t.about.faq.empty.reset}
								</Button>
							</div>
						)}
					</div>

					{/* Contact CTA */}
					<div className="mt-16 bg-gradient-to-tl to-primary via-primary/25 from-secondary/10 rounded-3xl p-8 text-center text-white">
						<h3 className="text-xl md:text-2xl font-bold mb-4">
							{t.about.faq.contactCta.title}
						</h3>
						<p className="text-blue-100 mb-8 text-sm md:text-lg">
							{t.about.faq.contactCta.description}
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold"
							>
								<MessageCircle
									className={`w-5 h-5 ${isLtr ? "mr-2" : "ml-2"}`}
								/>
								{t.about.faq.contactCta.chat}
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold bg-transparent"
							>
								<Phone className={`w-5 h-5 ${isLtr ? "mr-2" : "ml-2"}`} />
								{t.about.faq.contactCta.call}
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold bg-transparent"
							>
								<Mail className={`w-5 h-5 ${isLtr ? "mr-2" : "ml-2"}`} />
								{t.about.faq.contactCta.email}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
