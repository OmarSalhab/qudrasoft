import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { useLocale } from "@/context/locale-context";

type ContactItem = {
	icon: typeof Phone;
	text: string;
	title: string;
	color: string;
};

export default function Contact() {
	const { t, dir } = useLocale();

	const contactItems: ContactItem[] = [
		{
			icon: Phone,
			text: t.reachout.phone.phone,
			title: t.reachout.phone.title,
			color: "bg-green-600",
		},
		{
			icon: Mail,
			text: t.reachout.email.email,
			title: t.reachout.email.title,
			color: "bg-blue-600",
		},
		{
			icon: MapPin,
			text: t.reachout.location.location,
			title: t.reachout.location.title,
			color: "bg-red-600",
		},
		{
			icon: Globe,
			text: t.reachout.website.website,
			title: t.reachout.website.title,
			color: "bg-purple-600",
		},
	];

	return (
		<section
			className={`py-16 px-4 bg-gradient-to-tl to-primary via-primary/25 from-secondary/10 ${
				dir === "rtl" ? "rtl" : "ltr"
			}`}
		>
			<div className="container mx-auto max-w-7xl">
				<div className="text-center mb-12">
					<h2 className="ltr:text-2xl rtl:text-3xl md:text-5xl font-bold mb-6 text-foreground">
						{dir === "rtl" ? (
							<>
								<span>
									تواصل <span className="text-primary">معنا </span>
								</span>
							</>
						) : (
							<>
								<span>
									Contact<span className="text-primary"> Us</span>{" "}
								</span>
							</>
						)}
					</h2>
					<p className="text-gray-700 text-lg max-w-3xl mx-auto">
						{t.reachout.subtitle}
					</p>
				</div>

				<div className="grid text-white grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
					{/* Contact Information Cards */}
					<div
						className={`lg:space-y-11 space-y-6 ${
							dir === "rtl" ? "xl:order-2" : "xl:order-1"
						}`}
					>
						{contactItems.map((item: ContactItem, index: number) => (
							<Card
								key={index}
								className="bg-primary/45 border-primary/20"
							>
								<CardContent className="p-6">
									<div
										className={`flex items-center gap-4 ${
											dir === "rtl" ? "" : "justify-start"
										}`}
									>
										<div className={`p-5 rounded-xl ${item.color}`}>
											<item.icon className="w-7 h-7 text-white" />
										</div>
										<div className="">
											<div>{item.title}</div>
											<span className="text-foreground font-medium text-lg">
												{item.text}
											</span>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					{/* Why Choose Us Card */}
					<Card
						className={` bg-primary/45 text-white border-secondary  ${
							dir === "rtl" ? "xl:order-2" : "xl:order-1"
						}`}
					>
						<CardContent className="p-8">
							<h3 className="text-2xl font-bold mb-6 text-center">
								{t.reachout.whyChooseUs}
							</h3>
							<div
								className={`space-y-6 mb-8 ${
									dir === "rtl" ? "text-right" : "text-left"
								}`}
							>
								{t.reachout.reasons.map((reason, index) => {
									const IconComponent = reason.icon;
									return (
										<div
											key={index}
											className={`flex items-start gap-4 ${
												dir === "rtl" ? "" : "flex-row"
											}`}
										>
											<div className="flex-shrink-0 flex p-2 bg-secondary items-center justify-center w-12 h-12 border">
												<IconComponent className="w-7 h-7 text-primary" />
											</div>
											<div
												className={`flex-1 ${
													dir === "rtl" ? "text-right" : "text-left"
												}`}
											>
												<h4 className="font-semibold text-white mb-1">
													{reason.title}
												</h4>
												<p className="text-white/90 text-sm leading-relaxed">
													{reason.description}
												</p>
											</div>
										</div>
									);
								})}
							</div>
							<div className="text-center">
								<Button
									size="lg"
									className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-3 rounded-3xl"
								>
									{t.reachout.startProject}
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
