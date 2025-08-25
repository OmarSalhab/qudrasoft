import ProcessSection from "@/components/About/ProcessSection";
import WhoWe from "@/components/About/WhoWeSection";
import { getTranslation } from "../../../lib/translations";
import { getDirection } from "../../../lib/i18n";
import type { Locale } from "../../../lib/i18n";

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	const t = getTranslation(locale);
	const dir = getDirection(locale);
	

	return (
		<>
			<WhoWe t={t} dir={dir} />
			<ProcessSection t={t} dir={dir} />
		</>
	);
}
