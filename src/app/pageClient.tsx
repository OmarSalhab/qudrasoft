"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Brain, Monitor, Globe } from "lucide-react";
import { useLocale } from "../context/locale-context";
import { motion } from "framer-motion";
import { Hero } from "./components";
import BookingForm from "@/components/BookingForm";
import Contact from "./components/Contact";

export default function HomeClient() {
	const { t, dir } = useLocale();

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section with Video Slider */}
			<Hero />
			{/* Transforming Visions Section */}
			<section className="py-20 bg-secondary md:px-40 p-2">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-4xl font-bold text-primary mb-6">
								{t.home.vision.title}
								<br />
								{t.home.vision.titleSecond}
							</h2>
							<p className="text-gray-600 mb-6 leading-relaxed">
								{t.home.vision.description1}
							</p>
							<p className="text-gray-600 leading-relaxed">
								{t.home.vision.description2}
							</p>
						</div>
						<div className="grid grid-cols-4 gap-4">
							{Array.from({ length: 16 }).map((_, i) => (
								<div
									key={i}
									className="aspect-square rounded-lg overflow-hidden"
								>
									<Image
										src={`/hero-placholder.png`}
										alt={`Team member ${i + 1}`}
										width={100}
										height={100}
										className="w-full h-full object-cover"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Statistics Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4 text-center flex flex-col items-center gap-8">
					<h2 className="text-3xl md:text-5xl font-bold text-primary mb-12">
						{t.home.stats.title}
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div>
							<div className="text-5xl md:text-6xl font-bold text-primary mb-2">
								15K+
							</div>
							<div className="text-gray-600">{t.home.stats.professionals}</div>
						</div>
						<div>
							<div className="text-5xl md:text-6xl font-bold text-primary mb-2">
								50+
							</div>
							<div className="text-gray-600">{t.home.stats.clients}</div>
						</div>
						<div>
							<div className="text-5xl md:text-6xl font-bold text-primary mb-2">
								100+
							</div>
							<div className="text-gray-600">{t.home.stats.projects}</div>
						</div>
					</div>
					<Image src="/map.png" width={900} height={500} alt="Image Globe" />
				</div>
			</section>

			{/* Services Section */}
			<section className="py-20 bg-secondary">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center text-primary mb-16">
						{t.home.services.title}
					</h2>
					<div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
						<Card className="p-6 hover:shadow-lg transition-shadow bg-white">
							<CardContent className="p-0 text-center">
								<Brain className="w-16 h-16 text-primary mb-4 mx-auto" />
								<h3 className="text-xl font-semibold mb-3 text-primary">
									{t.home.services.aiAutomation.title}
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed mb-4">
									{t.home.services.aiAutomation.description}
								</p>
								<Link href="/services/ai-automation">
									<Button
										variant="outline"
										className="text-primary border-primary hover:bg-primary hover:text-white bg-transparent"
									>
										{t.home.services.learnMore}
									</Button>
								</Link>
							</CardContent>
						</Card>

						<Card className="p-6 hover:shadow-lg transition-shadow bg-white">
							<CardContent className="p-0 text-center">
								<Monitor className="w-16 h-16 text-primary mb-4 mx-auto" />
								<h3 className="text-xl font-semibold mb-3 text-primary">
									{t.home.services.eMenu.title}
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed mb-4">
									{t.home.services.eMenu.description}
								</p>
								<Link href="/services/e-menu">
									<Button
										variant="outline"
										className="text-primary border-primary hover:bg-primary hover:text-white bg-transparent"
									>
										{t.home.services.learnMore}
									</Button>
								</Link>
							</CardContent>
						</Card>

						<Card className="p-6 hover:shadow-lg transition-shadow bg-white">
							<CardContent className="p-0 text-center">
								<Globe className="w-16 h-16 text-primary mb-4 mx-auto" />
								<h3 className="text-xl font-semibold mb-3 text-primary">
									{t.home.services.landingWebsite.title}
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed mb-4">
									{t.home.services.landingWebsite.description}
								</p>
								<Link href="/services/landing-website">
									<Button
										variant="outline"
										className="text-primary border-primary hover:bg-primary hover:text-white bg-transparent"
									>
										{t.home.services.learnMore}
									</Button>
								</Link>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<Contact />
		</div>
	);
}
