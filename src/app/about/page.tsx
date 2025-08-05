export default function AboutPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
			<div className="container mx-auto px-6 py-16" dir="rtl">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
						من نحن
					</h1>
					<div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
						<p className="text-lg text-gray-300 leading-relaxed mb-6">
							شركة قدرةسوفت هي شركة رائدة في مجال تطوير البرمجيات والحلول
							التقنية، تأسست بهدف تقديم خدمات عالية الجودة في البرمجة وتطوير
							المواقع الإلكترونية والتطبيقات.
						</p>
						<p className="text-lg text-gray-300 leading-relaxed mb-6">
							نحن نؤمن بأن التكنولوجيا يجب أن تكون في خدمة الإنسان، ولذلك نسعى
							دائماً لتطوير حلول مبتكرة تلبي احتياجات عملائنا وتساعدهم على تحقيق
							أهدافهم.
						</p>
						<div className="grid md:grid-cols-2 gap-8 mt-12">
							<div className="bg-slate-700/50 p-6 rounded-lg">
								<h3 className="text-xl font-semibold text-blue-400 mb-4">
									رؤيتنا
								</h3>
								<p className="text-gray-300">
									أن نكون الشركة الرائدة في تطوير البرمجيات في المنطقة العربية،
									ونساهم في التحول الرقمي للمؤسسات والشركات.
								</p>
							</div>
							<div className="bg-slate-700/50 p-6 rounded-lg">
								<h3 className="text-xl font-semibold text-blue-400 mb-4">
									مهمتنا
								</h3>
								<p className="text-gray-300">
									تقديم حلول برمجية مبتكرة وعالية الجودة تساعد عملائنا على النمو
									والازدهار في العصر الرقمي.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
