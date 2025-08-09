"use client";

import { MessageCircle } from "lucide-react";


export default function ChatWidget() {
	return (
		<div className="fixed bottom-6 left-6 z-50">
			<button
				className="rounded-full flex items-center justify-center w-14 h-12 md:w-18 md:h-16 animate-bounce bg-blue-600 hover:bg-blue-700 shadow-lg"
				onClick={() => {
					// Handle chat widget click
					console.log("Chat widget clicked");
				}}
			>
				<MessageCircle className="w-5 h-5 text-white" />
			</button>
		</div>
	);
}
