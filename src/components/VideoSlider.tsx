"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
	{
		id: 1,
		src: "/Al-ML-Data-Analyst-1.mp4",
		title: "AI Automation in Action",
		description: "See how our AI solutions transform business processes",
	},
	{
		id: 2,
		src: "/Al-ML-Data-Analyst-2-1.mp4",
		title: "Digital Menu Revolution",
		description: "Experience the future of restaurant ordering",
	},
	{
		id: 3,
		src: "/E-solutioninc.com_-1.mp4",
		title: "Modern Web Development",
		description: "Crafting beautiful, high-performance websites",
	},
];

export function VideoSlider() {
	const [currentVideo, setCurrentVideo] = useState(0);
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		// Auto-advance videos every 5 seconds
		const interval = setInterval(() => {
			setCurrentVideo((prev) => (prev + 1) % videos.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		// Reset and play video when current video changes
		if (videoRef.current) {
			videoRef.current.currentTime = 0;
			videoRef.current.load();
			videoRef.current.play().catch((error) => {
				console.log("Autoplay prevented:", error);
			});
		}
	}, [currentVideo]);

	const nextVideo = () => {
		setCurrentVideo((prev) => (prev + 1) % videos.length);
	};

	const prevVideo = () => {
		setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
	};

	const handleVideoEnded = () => {
		// Auto-advance to next video when current video ends
		setCurrentVideo((prev) => (prev + 1) % videos.length);
	};

	const handleVideoLoaded = () => {
		
	};

	const handleVideoError = (error: unknown) => {
		console.error("Video error:", error);
	};

	return (
		<div className="relative w-full h-full overflow-hidden rounded-lg">
			{/* Video Display */}
			<div className="relative w-full h-full">
				<video
					ref={videoRef}
					width={1200}
					height={600}
					src={videos[currentVideo].src}
					className="w-full h-full object-fill"
					onEnded={handleVideoEnded}
					onLoadedData={handleVideoLoaded}
					onError={handleVideoError}
					loop={false}
					muted
					preload="auto"
					controls={false}
					playsInline
					autoPlay
				/>

				{/* Video Info */}
				<div className="absolute bottom-4 left-4 right-4 text-white">
					<h3 className="text-xl font-semibold mb-1">
						{videos[currentVideo].title}
					</h3>
					<p className="text-sm opacity-90">
						{videos[currentVideo].description}
					</p>
				</div>
			</div>

			{/* Navigation Arrows */}
			<button
				onClick={prevVideo}
				className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2 hover:bg-white/40 transition-colors z-30"
			>
				<ChevronLeft className="w-6 h-6 text-white" />
			</button>

			<button
				onClick={nextVideo}
				className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2 hover:bg-white/40 transition-colors z-30"
			>
				<ChevronRight className="w-6 h-6 text-white" />
			</button>

			{/* Dots Indicator */}
			<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
				{videos.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentVideo(index)}
						className={`w-3 h-3 rounded-full transition-colors ${
							index === currentVideo ? "bg-white" : "bg-white/50"
						}`}
					/>
				))}
			</div>
		</div>
	);
}