"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Globe, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { setCookie } from "cookies-next";
import type { Locale } from "../lib/i18n";
import type { TranslationType } from "../lib/types";

type NavigationProps = {
	locale: Locale;
	t: TranslationType;
	dir: "ltr" | "rtl";
};

export default function Navigation({ locale, t, dir }: NavigationProps) {
	const [isServicesOpen, setIsServicesOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
	const pathname = usePathname();
	const router = useRouter();
	

	const services = [
		// { name: t.services.aiAutomation.title, href: "/services/ai-automation" },
		{ name: t.services.eMenu.title, href: `/${locale}/services/qr-solutions` },
		{
			name: t.services.landingWebsite.title,
			href: `/${locale}/services/website-development`,
		},
	];

	const isActive = (path: string) => {
		if (path === "/services") {
			return pathname.includes("/services");
		}
		return pathname === path;
	};

	const switchLocale = (newLocale: Locale) => {
		setCookie("locale", newLocale, { path: "/" });
		// Remove current locale from pathname and add new one
		const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, "");
		router.push(`/${newLocale}${pathWithoutLocale}`);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
		setIsMobileServicesOpen(false);
	};

	return (
		<>
			<header className="bg-secondary fixed text-gray-700 h-16 md:h-20 w-full z-50 rtl:text-[18px] font-medium">
				<div className="container mx-auto px-6">
					<div className="flex items-center justify-between h-15 md:h-20">
						<Link href={`/${locale}`} className="flex items-center gap-2">
							<Image
								width={160}
								height={40}
								alt="Logo"
								src="/solvenear.png"
								className="w-30 h-13 md:w-34 md:h-16"
							/>
						</Link>

						<nav className="hidden lg:flex items-center gap-8">
							<Link
								href={`/${locale}`}
								className={`hover:text-primary transition-colors ${
									isActive(`/${locale}`)
										? "to-red-500 from-blue-500 bg-clip-text text-transparent bg-gradient-to-tl "
										: ""
								}`}
							>
								{t.nav.home}
							</Link>

							<div
								className="relative"
								onMouseEnter={() => setIsServicesOpen(true)}
								onMouseLeave={() => setIsServicesOpen(false)}
							>
								<button
									className={`flex items-center justify-center gap-1  hover:text-primary transition-colors ${
										isActive("/services")
											? "to-red-500 from-blue-500 bg-clip-text text-transparent bg-gradient-to-tl"
											: ""
									}`}
								>
									<span>{t.nav.services}</span>
									<svg
										className={`w-4 h-4 transition-transform duration-200 text-gray-800 ${
											isServicesOpen ? "rotate-180 " : ""
										}`}
										fill="black"
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
								href={`/${locale}/about`}
								className={`hover:text-primary transition-colors ${
									isActive(`/${locale}/about`)
										? "to-red-500 from-blue-500 bg-clip-text text-transparent bg-gradient-to-tl "
										: ""
								}`}
							>
								{t.nav.aboutUs}
							</Link>
							<Link
								href={`/${locale}/faq`}
								className={`hover:text-primary transition-colors ${
									isActive(`/${locale}/faq`)
										? "to-red-500 from-blue-500 bg-clip-text text-transparent bg-gradient-to-tl "
										: ""
								}`}
							>
								{t.nav.faq}
							</Link>
							<Link
								href={`/${locale}/contact`}
								className={`hover:text-primary transition-colors ${
									isActive(`/${locale}/contact`)
										? "to-red-500 from-blue-500 bg-clip-text text-transparent bg-gradient-to-tl "
										: ""
								}`}
							>
								{t.nav.contactUs}
							</Link>
							<Link
								href={`/${locale}/blog`}
								prefetch={false}
								className={`hover:text-primary transition-colors ${
									isActive(`/${locale}/blog`)
										? "to-red-500 from-blue-500 bg-clip-text text-transparent bg-gradient-to-tl "
										: ""
								}`}
							>
								{t.nav.blog}
							</Link>

							{/* Language Switcher */}
							<button
								className="text-md border p-2 cursor-pointer hover:text-primary"
								onClick={() => switchLocale(locale === "en" ? "ar" : "en")}
							>
								{t.nav.languageSwitch}
							</button>
						</nav>

						<button
							className="lg:hidden"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						>
							{isMobileMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>
				</div>
			</header>
			<div className="h-[4rem]"></div>

			{/* Mobile dropdown menu */}
			<div
				className={`fixed mt-16 inset-0 bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden ${
					isMobileMenuOpen
						? "opacity-100 visible"
						: "opacity-0 invisible pointer-events-none"
				}`}
			>
				<div
					className={`absolute top-0 ${
						dir === "rtl" ? "left-0" : "right-0"
					} h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
						isMobileMenuOpen
							? "translate-x-0"
							: dir === "rtl"
							? "-translate-x-full"
							: "translate-x-full"
					}`}
					onClick={(e) => e.stopPropagation()}
				>
					{/* Mobile Menu Content */}
					<div className="p-6 space-y-4">
						{/* Home Link */}
						<Link
							href={`/${locale}`}
							onClick={closeMobileMenu}
							className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
								isActive(`/${locale}`)
									? "bg-gradient-to-r from-blue-500 to-red-500 text-white shadow-lg"
									: "hover:bg-gray-50 hover:text-primary"
							}`}
						>
							{t.nav.home}
						</Link>

						{/* Services Section */}
						<div className="space-y-2">
							<button
								onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
								className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-200 ${
									isActive("/services")
										? "bg-gradient-to-r from-blue-500 to-red-500 text-white shadow-lg"
										: "hover:bg-gray-50 hover:text-primary"
								}`}
							>
								<span>{t.nav.services}</span>
								{isMobileServicesOpen ? (
									<ChevronUp className="w-5 h-5" />
								) : (
									<ChevronDown className="w-5 h-5" />
								)}
							</button>

							{/* Services Dropdown */}
							<div
								className={`overflow-hidden transition-all duration-300 ${
									isMobileServicesOpen
										? "max-h-96 opacity-100"
										: "max-h-0 opacity-0"
								}`}
							>
								<div className="pl-4 space-y-2">
									{services.map((service) => (
										<Link
											key={service.name}
											href={service.href}
											onClick={closeMobileMenu}
											className="block py-2 px-4 rounded-lg text-gray-600 hover:text-primary hover:bg-gray-50 transition-all duration-200"
										>
											{service.name}
										</Link>
									))}
								</div>
							</div>
						</div>

						{/* About Us Link */}
						<Link
							href={`/${locale}/about`}
							prefetch={false}
							onClick={closeMobileMenu}
							className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
								isActive(`/${locale}/about`)
									? "bg-gradient-to-r from-blue-500 to-red-500 text-white shadow-lg"
									: "hover:bg-gray-50 hover:text-primary"
							}`}
						>
							{t.nav.aboutUs}
						</Link>

						{/* FAQ Link */}
						<Link
							href={`/${locale}/faq`}
							prefetch={false}
							onClick={closeMobileMenu}
							className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
								isActive(`/${locale}/faq`)
									? "bg-gradient-to-r from-blue-500 to-red-500 text-white shadow-lg"
									: "hover:bg-gray-50 hover:text-primary"
							}`}
						>
							{t.nav.faq}
						</Link>

						{/* Contact Us Link */}
						<Link
							href={`/${locale}/contact`}
							onClick={closeMobileMenu}
							className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
								isActive(`/${locale}/contact`)
									? "bg-gradient-to-r from-blue-500 to-red-500 text-white shadow-lg"
									: "hover:bg-gray-50 hover:text-primary"
							}`}
						>
							{t.nav.contactUs}
						</Link>

						{/* Blog Link */}
						<Link
							href={`/${locale}/blog`}
							prefetch={false}
							onClick={closeMobileMenu}
							className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
								isActive(`/${locale}/blog`)
									? "bg-gradient-to-r from-blue-500 to-red-500 text-white shadow-lg"
									: "hover:bg-gray-50 hover:text-primary"
							}`}
						>
							{t.nav.blog}
						</Link>

						{/* Language Switcher */}
						<div className="pt-4 border-t border-gray-200">
							<button
								onClick={() => {
									switchLocale(locale === "en" ? "ar" : "en");
									closeMobileMenu();
								}}
								className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-200 font-medium"
							>
								<Globe className="w-4 h-4" />
								{t.nav.languageSwitch}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
