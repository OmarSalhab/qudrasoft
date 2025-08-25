import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ChatWidget from "../../components/ChatWidget";
import { getTranslation } from "../../lib/translations";
import { getDirection } from "../../lib/i18n";
import type { Locale } from "../../lib/i18n";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const arabic = Noto_Sans_Arabic({
	subsets: ["arabic"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-arabic",
});

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Solvenear Inc - Technology Solutions & Digital Innovation",
		description:
			"Engineering Innovation, Powering Intelligent, Secure, and Scalable Digital Futures",
		alternates: {
			languages: {
				en: "/en",
				ar: "/ar",
			},
		},
	};
}

export async function generateStaticParams() {
	return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: Locale }>;
}) {
	const { locale } = await params;

	const t = getTranslation(locale);
	const dir = getDirection(locale);

	return (
		<html lang={locale} dir={dir}>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body
				className={`${inter.variable} ${arabic.variable} ${
					locale === "ar" ? "font-arabic" : "font-english"
				}`}
			>
				<Navigation locale={locale} t={t} dir={dir} />
				<main>{children}</main>
				<Footer t={t} dir={dir} locale={locale} />
				<ChatWidget />
				<Analytics />
			</body>
		</html>
	);
}
