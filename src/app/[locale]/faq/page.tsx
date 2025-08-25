import { FAQSection } from "@/components/Faq/FaqSection";
import { getTranslation } from "../../../lib/translations";
import { getDirection } from "../../../lib/i18n";
import type { Locale } from "../../../lib/i18n";

export default async function FAQPage({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	const t = getTranslation(locale);
	const dir = getDirection(locale);

	return <FAQSection t={t} dir={dir} />;
}
