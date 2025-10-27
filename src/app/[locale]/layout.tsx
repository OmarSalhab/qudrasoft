import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ChatWidget from "../../components/ChatWidget";
import { getTranslation } from "../../lib/translations";
import { getDirection } from "../../lib/i18n";
import type { Locale } from "../../lib/i18n";
import { getOrganizationSchema, getWebsiteSchema } from "../../lib/schema";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const arabic = Noto_Sans_Arabic({
	subsets: ["arabic"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-arabic",
});

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
	const { locale } = await params;
	
	const metadata = {
		ar: {
			title: "سولڤنير - حلول تقنية مبتكرة | تطوير مواقع وأنظمة QR ذكية",
			description: "شركة سولڤنير الرائدة في تطوير المواقع الإلكترونية، حلول QR الذكية، والأتمتة. نقدم خدمات تقنية متطورة للشركات في الأردن والشرق الأوسط. تصميم مواقع احترافية، أنظمة طلبات ذكية، وحلول رقمية متكاملة.",
			keywords: "تطوير مواقع, تصميم مواقع, حلول QR, قوائم طعام رقمية, نظام طلبات, تطوير تطبيقات, شركة برمجيات الأردن, حلول تقنية, أتمتة الأعمال, متاجر إلكترونية, تصميم ويب احترافي, SEO, تسويق رقمي",
		},
		en: {
			title: "Solvenear - Innovative Technology Solutions | Web Development & Smart QR Systems",
			description: "Solvenear is a leading technology company specializing in web development, smart QR solutions, and automation. We deliver cutting-edge digital services for businesses in Jordan and the Middle East. Professional website design, smart ordering systems, and comprehensive digital solutions.",
			keywords: "web development, website design, QR solutions, digital menus, ordering system, app development, Jordan software company, technology solutions, business automation, e-commerce, professional web design, SEO, digital marketing",
		},
	};

	const current = metadata[locale];

	return {
		title: {
			default: current.title,
			template: locale === "ar" ? "%s | سولڤنير" : "%s | Solvenear",
		},
		description: current.description,
		keywords: current.keywords,
		authors: [{ name: "Solvenear Inc" }],
		creator: "Solvenear Inc",
		publisher: "Solvenear Inc",
		metadataBase: new URL("https://www.solvenear.com"),
		alternates: {
			canonical: `/${locale}`,
			languages: {
				en: "/en",
				ar: "/ar",
				"x-default": "/ar",
			},
		},
		openGraph: {
			type: "website",
			locale: locale === "ar" ? "ar_AR" : "en_US",
			url: `https://www.solvenear.com/${locale}`,
			title: current.title,
			description: current.description,
			siteName: "Solvenear",
			images: [
				{
					url: "https://www.solvenear.com/favicon.ico",
					width: 512,
					height: 512,
					alt: "Solvenear Logo",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: current.title,
			description: current.description,
			images: ["https://www.solvenear.com/favicon.ico"],
			creator: "@solvenear",
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		icons: {
			icon: "/favicon.ico",
			apple: "/favicon.ico",
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

	const organizationSchema = getOrganizationSchema(locale);
	const websiteSchema = getWebsiteSchema(locale);

	return (
		<html lang={locale} dir={dir}>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content={locale === "ar" ? "Arabic" : "English"} />
				<meta name="geo.region" content="JO" />
				<meta name="geo.placename" content="Amman" />
				<meta name="geo.position" content="31.9454;35.9284" />
				<meta name="ICBM" content="31.9454, 35.9284" />
				<link rel="canonical" href={`https://www.solvenear.com/${locale}`} />
				<link rel="alternate" hrefLang="en" href="https://www.solvenear.com/en" />
				<link rel="alternate" hrefLang="ar" href="https://www.solvenear.com/ar" />
				<link rel="alternate" hrefLang="x-default" href="https://www.solvenear.com/ar" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
				/>
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
