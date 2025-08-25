import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { getTranslation } from "../../../lib/translations";
import { getDirection } from "../../../lib/i18n";
import type { Locale } from "../../../lib/i18n";

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	const t = getTranslation(locale);
	const dir = getDirection(locale);
	const isLtr = dir === "ltr";

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
			<div className="container mx-auto px-6 py-16" dir={dir}>
				<div className="max-w-6xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
						{t.contact.page.title}
					</h1>
					<p className="text-lg md:text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
						{t.contact.page.description}
					</p>

					<div className="grid lg:grid-cols-2 gap-12">
						{/* Contact Form */}
						<div className="bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm">
							<h2 className="text-2xl font-semibold text-white mb-6">
								{t.contact.page.form.title}
							</h2>
							<form className="space-y-6">
								<div className="grid md:grid-cols-2 gap-4">
									<div>
										<label className="block text-gray-300 mb-2">
											{t.contact.page.form.firstName.label}
										</label>
										<Input
											placeholder={t.contact.page.form.firstName.placeholder}
											className="bg-slate-700 border-slate-600 text-white"
										/>
									</div>
									<div>
										<label className="block text-gray-300 mb-2">
											{t.contact.page.form.lastName.label}
										</label>
										<Input
											placeholder={t.contact.page.form.lastName.placeholder}
											className="bg-slate-700 border-slate-600 text-white"
										/>
									</div>
								</div>
								<div>
									<label className="block text-gray-300 mb-2">
										{t.contact.page.form.email.label}
									</label>
									<Input
										type="email"
										placeholder={t.contact.page.form.email.placeholder}
										className="bg-slate-700 border-slate-600 text-white"
									/>
								</div>
								<div>
									<label className="block text-gray-300 mb-2">
										{t.contact.page.form.phone.label}
									</label>
									<Input
										placeholder={t.contact.page.form.phone.placeholder}
										className="bg-slate-700 border-slate-600 text-white"
									/>
								</div>
								<div>
									<label className="block text-gray-300 mb-2">
										{t.contact.page.form.subject.label}
									</label>
									<Input
										placeholder={t.contact.page.form.subject.placeholder}
										className="bg-slate-700 border-slate-600 text-white"
									/>
								</div>
								<div>
									<label className="block text-gray-300 mb-2">
										{t.contact.page.form.message.label}
									</label>
									<Textarea
										placeholder={t.contact.page.form.message.placeholder}
										rows={5}
										className="bg-slate-700 border-slate-600 text-white"
									/>
								</div>
								<Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
									{t.contact.page.form.submit}
								</Button>
							</form>
						</div>

						{/* Contact Information */}
						<div className="space-y-8">
							<div className="bg-gradient-to-tl to-primary via-primary/25 from-secondary/10 p-8 rounded-lg backdrop-blur-sm">
								<h2 className="text-2xl font-semibold text-white mb-6">
									{t.contact.page.info.title}
								</h2>
								<div className="space-y-6">
									<div className="flex items-center">
										<div
											className={`w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center ${
												isLtr ? "mr-4" : "ml-4"
											}`}
										>
											<Mail className="w-6 h-6 text-red-400" />
										</div>
										<div>
											<h3 className="text-white font-semibold">
												{t.contact.page.info.email.label}
											</h3>
											<p className="text-gray-300">
												{t.contact.page.info.email.value}
											</p>
										</div>
									</div>

									<div className="flex items-center">
										<div
											className={`w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center ${
												isLtr ? "mr-4" : "ml-4"
											}`}
										>
											<Phone className="w-6 h-6 text-red-400" />
										</div>
										<div>
											<h3 className="text-white font-semibold">
												{t.contact.page.info.phone.label}
											</h3>
											<p className="text-gray-300">
												{t.contact.page.info.phone.value}
											</p>
										</div>
									</div>

									<div className="flex items-center">
										<div
											className={`w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center ${
												isLtr ? "mr-4" : "ml-4"
											}`}
										>
											<MapPin className="w-6 h-6 text-red-400" />
										</div>
										<div>
											<h3 className="text-white font-semibold">
												{t.contact.page.info.address.label}
											</h3>
											<p className="text-gray-300">
												{t.contact.page.info.address.value}
											</p>
										</div>
									</div>

									<div className="flex items-center">
										<div
											className={`w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center ${
												isLtr ? "mr-4" : "ml-4"
											}`}
										>
											<Clock className="w-6 h-6 text-red-400" />
										</div>
										<div>
											<h3 className="text-white font-semibold">
												{t.contact.page.info.hours.label}
											</h3>
											<p className="text-gray-300">
												{t.contact.page.info.hours.value}
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm">
								<h3 className="text-xl font-semibold text-white mb-4">
									{t.contact.page.reasons.title}
								</h3>
								<ul className="space-y-3 text-gray-300">
									{t.contact.page.reasons.items.map(
										(item: string, idx: number) => (
											<li key={idx} className="flex items-center">
												<div
													className={`w-2 h-2 ${
														idx % 2 === 0 ? "bg-blue-500" : "bg-red-500"
													} rounded-full ${isLtr ? "mr-3" : "ml-3"}`}
												></div>
												{item}
											</li>
										)
									)}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
