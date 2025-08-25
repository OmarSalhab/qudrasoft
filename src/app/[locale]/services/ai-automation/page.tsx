import { getTranslation } from "../../../../lib/translations";
import { getDirection } from "../../../../lib/i18n";
import type { Locale } from "../../../../lib/i18n";

export default async function AiAutomationPage({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	const t = getTranslation(locale);
	const dir = getDirection(locale);

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white" dir={dir}>
			<div className="container mx-auto px-6 py-16">
				<div className="max-w-6xl mx-auto text-center">
					<h1 className="text-4xl md:text-5xl font-bold mb-6">
						{t.services?.aiAutomation?.title || "AI Automation"}
					</h1>
					<p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
						{t.services?.aiAutomation?.description || "Transform your business with intelligent automation solutions."}
					</p>
					<div className="mt-12 p-8 bg-slate-800/50 rounded-lg">
						<p className="text-gray-300">
							{t.services?.aiAutomation?.features.title || "This section is coming soon. Please check back later."}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
  