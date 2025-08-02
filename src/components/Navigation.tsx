"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { useLocale } from "../context/locale-context";
import Image from "next/image";

export default function Navigation() {
	const [isServicesOpen, setIsServicesOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const pathname = usePathname();
	const { locale, setLocale, t, dir } = useLocale();

	const services = [
		{ name: t.services.aiAutomation.title, href: "/services/ai-automation" },
		{ name: t.services.eMenu.title, href: "/services/e-menu" },
		{
			name: t.services.landingWebsite.title,
			href: "/services/landing-website",
		},
	];

	const isActive = (path: string) => {
		if (path === "/services") {
			return pathname.startsWith("/services");
		}
		return pathname === path;
	};

	const toggleLanguage = () => {
		setLocale(locale === "en" ? "ar" : "en");
	};

	return (
		<>
			<header className="bg-secondary text-gray-950 relative z-50 rtl:text-xl rtl:font-arabic ltr:font-english ">
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between h-20">
						<Link
							href="/"
							className="flex items-center space-x-2 rtl:space-x-reverse"
						>
							<Image width={180} height={70} alt="Logo" src="/logo.png"/>
						</Link>

						<nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
							<div
								className="relative"
								onMouseEnter={() => setIsServicesOpen(true)}
								onMouseLeave={() => setIsServicesOpen(false)}
							>
								<button
									className={`flex items-center space-x-1 rtl:space-x-reverse hover:text-accent transition-colors ${
										isActive("/services") ? "text-accent" : ""
									}`}
								>
									<span>{t.nav.services}</span>
									<svg
										className={`w-4 h-4 transition-transform duration-200 ${
											isServicesOpen ? "rotate-180" : ""
										}`}
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>

								{/* Services Dropdown Panel */}
								<div
									className={`absolute top-full ${
										dir === "rtl" ? "right-0" : "left-0"
									} mt-2 w-96 bg-secondary rounded-lg shadow-xl border transition-all duration-300 ${
										isServicesOpen
											? "opacity-100 translate-y-0 visible"
											: "opacity-0 -translate-y-2 invisible"
									}`}
								>
									<div className="p-6">
										<h3 className="text-primary font-semibold text-lg mb-4">
											{t.nav.services}
										</h3>
										<div className="grid grid-cols-1 gap-3">
											{services.map((service) => (
												<Link
													key={service.name}
													href={service.href}
													className="text-gray-700 hover:text-primary hover:bg-secondary px-3 py-2 rounded-md transition-colors text-sm"
												>
													{service.name}
												</Link>
											))}
										</div>
									</div>
								</div>
							</div>

							<Link
								href="/faq"
								className={`hover:text-accent transition-colors ${
									isActive("/faq") ? "text-accent" : ""
								}`}
							>
								{t.nav.faq}
							</Link>
							<Link
								href="/career"
								className={`hover:text-accent transition-colors ${
									isActive("/career") ? "text-accent" : ""
								}`}
							>
								{t.nav.careers}
							</Link>
							<Link
								href="/about"
								className={`hover:text-accent transition-colors ${
									isActive("/about") ? "text-accent" : ""
								}`}
							>
								{t.nav.aboutUs}
							</Link>
							<Link
								href="/blog"
								className={`hover:text-accent transition-colors ${
									isActive("/blog") ? "text-accent" : ""
								}`}
							>
								{t.nav.blog}
							</Link>
							<Link
								href="/contact"
								className={`hover:text-accent transition-colors ${
									isActive("/contact") ? "text-accent" : ""
								}`}
							>
								{t.nav.contactUs}
							</Link>

							{/* Language Switcher */}

							<button
								className="text-sm border p-2 rtl:mx-7 cursor-pointer hover:text-accent"
								onClick={toggleLanguage}
							>
								{t.nav.languageSwitch}
							</button>
						</nav>

						<button
							className="lg:hidden"
							onClick={() => setIsMobileMenuOpen(true)}
						>
							<Menu className="w-6 h-6" />
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Sidebar Overlay */}
			<div
				className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 lg:hidden ${
					isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
				}`}
				onClick={() => setIsMobileMenuOpen(false)}
			>
				{/* Mobile Sidebar */}
				<div
					className={`fixed ${
						dir === "rtl" ? "right-0" : "left-0"
					} top-0 h-full w-80 bg-primary text-white transform transition-transform duration-300 ease-in-out ${
						isMobileMenuOpen
							? "translate-x-0"
							: dir === "rtl"
							? "translate-x-full"
							: "-translate-x-full"
					}`}
					onClick={(e) => e.stopPropagation()}
				>
					<div className="p-6">
						{/* Header */}
						<div className="flex items-center justify-between mb-8">
							<div></div>
							<button
								onClick={() => setIsMobileMenuOpen(false)}
								className="p-2 hover:bg-primary-600 rounded-lg transition-colors"
							>
								<X className="w-6 h-6" />
							</button>
						</div>

						{/* Mobile Navigation */}
						<nav className="space-y-4">
							<div>
								<div className="text-lg font-medium mb-3">{t.nav.services}</div>
								<div className={`${dir === "rtl" ? "pr-4" : "pl-4"} space-y-2`}>
									{services.map((service) => (
										<Link
											key={service.name}
											href={service.href}
											className="block text-blue-200 hover:text-white transition-colors py-1"
											onClick={() => setIsMobileMenuOpen(false)}
										>
											{service.name}
										</Link>
									))}
								</div>
							</div>

							<Link
								href="/faq"
								className="block text-lg font-medium hover:text-accent transition-colors py-2"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{t.nav.faq}
							</Link>
							<Link
								href="/career"
								className="block text-lg font-medium hover:text-accent transition-colors py-2"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{t.nav.careers}
							</Link>
							<Link
								href="/about"
								className="block text-lg font-medium hover:text-accent transition-colors py-2"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{t.nav.aboutUs}
							</Link>
							<Link
								href="/blog"
								className="block text-lg font-medium hover:text-accent transition-colors py-2"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{t.nav.blog}
							</Link>
							<Link
								href="/contact"
								className="block text-lg font-medium hover:text-accent transition-colors py-2"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{t.nav.contactUs}
							</Link>

							{/* Language Switcher */}
							<button
								onClick={toggleLanguage}
								className="flex items-center space-x-2 rtl:space-x-2 hover:text-accent transition-colors py-2 text-lg font-medium"
							>
								<Globe className="w-5 h-5" />
								<span>{t.nav.languageSwitch}</span>
							</button>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
}
