import {
	HeroS,
	Stats,
	Services,
	WhyUs,
	Testimonial,
	CTA,
} from "../components/Home";

export async function generateStaticParams() {
	return [];
}

export default function HomeClient() {
	return (
		<div className="min-h-screen bg-gray-900">
			<HeroS />
			<Services />
			<WhyUs />
			<Stats />
			<Testimonial />
			<CTA />
		</div>
	);
}
