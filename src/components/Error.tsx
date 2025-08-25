import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function Error({ dir }: { dir: "rtl" | "ltr" }) {
	return (
		<div
			className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
			dir={dir}
		>
			<div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 md:p-16 flex flex-col items-center max-w-lg w-full">
				<div className="flex items-center justify-center mb-8">
					<div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
						<Sparkles className="w-10 h-10 text-white" />
					</div>
				</div>
				<h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
					404
				</h1>
				<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
					{dir === "rtl" ? "الصفحة غير موجودة" : "Page Not Found"}
				</h2>
				<p className="text-gray-200 text-lg mb-8 text-center">
					{dir === "rtl"
						? "عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها."
						: "Sorry, the page you are looking for does not exist or has been moved."}
				</p>
				<Link href="/" className="w-full flex justify-center">
					<Button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
						{dir === "rtl" ? "العودة إلى الرئيسية" : "Back to Home"}
					</Button>
				</Link>
			</div>
		</div>
	);
}
