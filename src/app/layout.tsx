import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { cookies } from "next/headers";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { LocaleProvider } from "../context/locale-context";
import ChatWidget from "../components/ChatWidget";
import type { Locale } from "../lib/i18n";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const arabic = Noto_Sans_Arabic({
	subsets: ["arabic"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-arabic",
});

export const metadata: Metadata = {
	title: "Solvenear Inc - Technology Solutions & Digital Innovation",
	description:
		"Engineering Innovation, Powering Intelligent, Secure, and Scalable Digital Futures",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// Read locale cookie on the server to produce stable HTML
	const cookieStore = await cookies();

	const cookieLocale = (cookieStore.get("locale")?.value as Locale) || "ar";
	const lang = cookieLocale;
	const dir = cookieLocale === "ar" ? "rtl" : "ltr";

	return (
		<html lang={lang} dir={dir}>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body
				className={`${inter.variable} ${arabic.variable} ${
					lang === "ar" ? "font-arabic" : "font-english"
				}`}
			>
				<LocaleProvider initialLocale={cookieLocale}>
					<Navigation />
					<main>
						{children} <Analytics />
					</main>
					<Footer />
				</LocaleProvider>
				<ChatWidget />
			</body>
		</html>
	);
}
