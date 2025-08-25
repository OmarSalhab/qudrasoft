"use client";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import { TranslationType } from "@/lib/types";

type PriceProps = {
	t: TranslationType;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
};
export default function PriceCalculatorClient({ t, onClick }: PriceProps) {
	return (
		<Button onClick={onClick} className="bg-white hover:bg-white/70">
			<Calculator className="w-6 h-6 mr-2 " />
			{t.websiteDevelopment.pricing.cta}
		</Button>
	);
}
