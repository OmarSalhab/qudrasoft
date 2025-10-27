import {
	HeroS,
	Stats,
	Services,
	WhyUs,
	Testimonial,
	CTA,
} from "../../components/Home";
import { getTranslation } from "../../lib/translations";
import { getDirection } from "../../lib/i18n";
import type { Locale } from "../../lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
	const { locale } = await params;

	const metadata = {
		ar: {
			title: "سولڤنير - شركة حلول تقنية مبتكرة في الأردن | تطوير مواقع وأنظمة ذكية",
			description:
				"سولڤنير - شركة رائدة في تطوير المواقع الإلكترونية وحلول QR الذكية في الأردن. نقدم تصميم مواقع احترافية، قوائم طعام رقمية، أنظمة طلبات ذكية، وحلول أتمتة متكاملة. خبرة عالمية، خدمات محلية، أسعار تنافسية.",
			keywords:
				"سولڤنير, شركة برمجيات الأردن, تطوير مواقع, تصميم مواقع, حلول QR, قوائم رقمية, نظام طلبات, أتمتة, حلول تقنية, تطوير تطبيقات, شركة تقنية عمان, برمجة, تصميم ويب, SEO الأردن",
		},
		en: {
			title: "Solvenear - Innovative Technology Solutions in Jordan | Web Development & Smart Systems",
			description:
				"Solvenear - Leading web development and smart QR solutions company in Jordan. We offer professional website design, digital menus, smart ordering systems, and comprehensive automation solutions. Global expertise, local service, competitive pricing.",
			keywords:
				"Solvenear, Jordan software company, web development, website design, QR solutions, digital menus, ordering system, automation, technology solutions, app development, Amman tech company, programming, web design, SEO Jordan",
		},
	};

	const current = metadata[locale];

	return {
		title: current.title,
		description: current.description,
		keywords: current.keywords,
		alternates: {
			canonical: `/${locale}`,
			languages: {
				en: "/en",
				ar: "/ar",
			},
		},
		openGraph: {
			title: current.title,
			description: current.description,
			url: `https://www.solvenear.com/${locale}`,
			type: "website",
			images: [
				{
					url: "https://www.solvenear.com/favicon.ico",
					width: 512,
					height: 512,
					alt: "Solvenear",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: current.title,
			description: current.description,
		},
	};
}

export default async function HomePage({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}) {
	const { locale } = await params;

	const t = getTranslation(locale);
	const dir = getDirection(locale);

	return (
		<div className="min-h-screen bg-gray-900">
			<HeroS t={t} dir={dir} />
			<Services t={t} dir={dir} />
			<WhyUs t={t} dir={dir} />
			<Stats t={t} dir={dir} />
			<Testimonial t={t} dir={dir} />
			<CTA t={t} dir={dir} />
		</div>
	);
}
