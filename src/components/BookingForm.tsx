// "use client";

// import type React from "react";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// // import { useLocale } from "../context/locale-context";

// export default function BookingForm() {
// 	// const { t, dir } = useLocale();
// 	const [formData, setFormData] = useState({
// 		name: "",
// 		companyName: "",
// 		mobile: "",
// 		country: "",
// 		email: "",
// 		gdprConsent: false,
// 	});

// 	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		const { name, value, type, checked } = e.target;
// 		setFormData((prev) => ({
// 			...prev,
// 			[name]: type === "checkbox" ? checked : value,
// 		}));
// 	};

// 	const handleSubmit = (e: React.FormEvent) => {
// 		e.preventDefault();
// 		// Handle form submission here
// 		console.log("Form submitted:", formData);
// 	};

// 	return (
// 		<section className="py-20 bg-gray-50">
// 			<div className="container mx-auto px-4">
// 				<div className="max-w-4xl mx-auto">
// 					<div className={`mb-8 ${dir === "rtl" ? "text-right" : "text-left"}`}>
// 						<h2 className="text-3xl font-bold text-primary mb-4">
// 							{t.contact.title}
// 						</h2>
// 						<p className="text-gray-600 text-lg">{t.contact.description}</p>
// 					</div>

// 					<form onSubmit={handleSubmit} className="space-y-6">
// 						{/* First Row - Name and Company Name */}
// 						<div className="grid md:grid-cols-2 gap-6">
// 							<div className="relative">
// 								<input
// 									type="text"
// 									name="name"
// 									value={formData.name}
// 									onChange={handleInputChange}
// 									className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-700 ${
// 										dir === "rtl" ? "text-right" : "text-left"
// 									}`}
// 									placeholder={`${t.contact.form.name} ${t.contact.form.namePlaceholder}`}
// 									required
// 								/>
// 							</div>
// 							<div className="relative">
// 								<input
// 									type="text"
// 									name="companyName"
// 									value={formData.companyName}
// 									onChange={handleInputChange}
// 									className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-700 ${
// 										dir === "rtl" ? "text-right" : "text-left"
// 									}`}
// 									placeholder={`${t.contact.form.companyName} ${t.contact.form.companyNamePlaceholder}`}
// 									required
// 								/>
// 							</div>
// 						</div>

// 						{/* Second Row - Mobile and Country */}
// 						<div className="grid md:grid-cols-2 gap-6">
// 							<div className="relative">
// 								<input
// 									type="tel"
// 									name="mobile"
// 									value={formData.mobile}
// 									onChange={handleInputChange}
// 									className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-700 ${
// 										dir === "rtl" ? "text-right" : "text-left"
// 									}`}
// 									placeholder={`${t.contact.form.mobile} ${t.contact.form.mobilePlaceholder}`}
// 									required
// 								/>
// 							</div>
// 							<div className="relative">
// 								<input
// 									type="text"
// 									name="country"
// 									value={formData.country}
// 									onChange={handleInputChange}
// 									className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-700 ${
// 										dir === "rtl" ? "text-right" : "text-left"
// 									}`}
// 									placeholder={`${t.contact.form.country} ${t.contact.form.countryPlaceholder}`}
// 									required
// 								/>
// 							</div>
// 						</div>

// 						{/* Third Row - Email (Full Width) */}
// 						<div className="relative">
// 							<input
// 								type="email"
// 								name="email"
// 								value={formData.email}
// 								onChange={handleInputChange}
// 								className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-700 ${
// 									dir === "rtl" ? "text-right" : "text-left"
// 								}`}
// 								placeholder={`${t.contact.form.email} ${t.contact.form.emailPlaceholder}`}
// 								required
// 							/>
// 						</div>

// 						{/* GDPR Agreement */}
// 						<div className="space-y-4">
// 							<h3
// 								className={`font-semibold text-gray-900 ${
// 									dir === "rtl" ? "text-right" : "text-left"
// 								}`}
// 							>
// 								{t.contact.form.gdprTitle}
// 							</h3>
// 							<div
// 								className={`flex items-start space-x-3 ${
// 									dir === "rtl" ? "space-x-reverse" : ""
// 								}`}
// 							>
// 								<input
// 									type="checkbox"
// 									name="gdprConsent"
// 									checked={formData.gdprConsent}
// 									onChange={handleInputChange}
// 									className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2"
// 									required
// 								/>
// 								<label
// 									className={`text-gray-700 text-sm leading-relaxed ${
// 										dir === "rtl" ? "text-right" : "text-left"
// 									}`}
// 								>
// 									{t.contact.form.gdprText}
// 								</label>
// 							</div>
// 						</div>

// 						{/* Submit Button */}
// 						<div className={`${dir === "rtl" ? "text-right" : "text-left"}`}>
// 							<Button
// 								type="submit"
// 								className="bg-primary hover:bg-primary-700 text-white px-8 py-3 rounded-md font-semibold min-w-[120px]"
// 								disabled={!formData.gdprConsent}
// 							>
// 								{t.contact.form.send}
// 							</Button>
// 						</div>
// 					</form>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }
