"use client";

import Link from "next/link";
import {
	MessageCircle,
	Linkedin,
	Instagram,
	Facebook,
	Heart,
} from "lucide-react";
import type { Locale } from "../lib/i18n";
import type { TranslationType } from "../lib/types";

type FooterProps = {
	t: TranslationType ;
	dir: "ltr" | "rtl";
	locale: Locale;
};

export default function Footer({ t, dir, locale }: FooterProps) {
	return (
		<footer className="bg-slate-900 text-white" dir={dir}>
			<div
				className={`container mx-auto px-4 py-12 ${
					dir === "rtl" ? "rtl" : "ltr"
				}`}
			>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Social Media Section */}
					<div
						className={`${
							dir === "rtl" ? "text-center" : "text-center"
						} items-center flex flex-col`}
					>
						<h3 className="text-lg font-semibold mb-6 text-secondary">
							{t.footer.followUs}
						</h3>
						<div className="flex gap-3">
							<Link
								href="https://wa.me/+962780544989"
								className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
							>
								<MessageCircle className="w-6 h-6 text-white" />
							</Link>
							<Link
								href="https://www.linkedin.com/company/solvenear"
								className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
							>
								<Linkedin className="w-6 h-6 text-white" />
							</Link>
							<Link
								href="https://www.linkedin.com/company/solvenear"
								className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
							>
								<Instagram className="w-6 h-6 text-white" />
							</Link>
							<Link
								href="https://web.facebook.com/profile.php?id=61579696023245"
								className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
							>
								<Facebook className="w-6 h-6 text-white" />
							</Link>
						</div>
					</div>

					{/* Contact Section */}
					<div className={`${dir === "rtl" ? "text-center" : "text-center"}`}>
						<h3 className="text-lg font-semibold mb-6 text-secondary">
							{t.footer.contactUs}
						</h3>
						<div className="space-y-3">
							<p className="text-gray-300">{t.footer.phone}</p>
							<p className="text-gray-300">{t.footer.email}</p>
							<p className="text-gray-300">{t.footer.website}</p>
						</div>
					</div>

					{/* Quick Links Section */}
					<div className={`${dir === "rtl" ? "text-center" : "text-center"}`}>
						<h3 className="text-lg font-semibold mb-6 text-secondary">
							{t.footer.quickLinks}
						</h3>
						<div className="space-y-3">
							<Link href={`/${locale}/services/website-development`}>
								<p className="text-gray-300 hover:text-primary cursor-pointer transition-colors">
									{t.footer.createWebsites}
								</p>
							</Link>
							<Link href={`/${locale}/services/qr-solutions`}>
								<p className="text-gray-300 hover:text-primary cursor-pointer transition-colors">
									{t.footer.createQr}
								</p>
							</Link>
							<div className="mt-6">
								<p className="text-gray-400 text-sm">{t.footer.whoWeAre}</p>
								<p className="text-gray-400 text-sm mt-1">
									{t.footer.contactUsFooter}
								</p>
							</div>
						</div>
					</div>

					{/* About Us Section */}
					<div className={`${dir === "rtl" ? "text-center" : "text-center"}`}>
						<h3 className="text-lg font-semibold mb-6 text-secondary">
							{t.footer.aboutUs}
						</h3>
						<p className="text-gray-300 leading-relaxed text-sm">
							{t.footer.aboutUsText}
						</p>
					</div>
				</div>

				{/* Bottom Section */}
				<div
					className={`border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center ${
						dir === "rtl" ? "text-center" : "text-center"
					}`}
				>
					<div className="text-gray-400 text-sm mb-4 md:mb-0">
						{t.footer.copyright}
					</div>
					<div className="flex items-center gap-2 text-gray-400 text-sm">
						<span>{t.footer.madeInJordan}</span>
						<Heart className="w-4 h-4 text-red-500 fill-current" />
					</div>
				</div>
			</div>
		</footer>
	);
}
