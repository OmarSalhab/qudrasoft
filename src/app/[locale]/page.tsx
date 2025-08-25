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
