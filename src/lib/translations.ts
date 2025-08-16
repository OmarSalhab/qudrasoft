import type { Locale } from "./i18n"; // Assuming Locale is defined in a types file
import { Clock, Users, Lightbulb, Headphones, DollarSign } from "lucide-react";
export const translations = {
	en: {
		// Navigation
		nav: {
			home: "HOME",
			services: "SERVICES",
			faq: "FAQ",
			careers: "CAREERS",
			aboutUs: "ABOUT US",
			blog: "BLOG",
			contactUs: "CONTACT US",
			languageSwitch: "العربية",
		},

		// Home Page
		home: {
			cta: {
				title: "Ready to Start Your Project?",
				description:
					"Don't hesitate to contact us today and get a free consultation for your technical project",
				contactOptions: {
					call: {
						title: "Call Us",
						description: "Talk directly with our experts",
						contact: "+962 7 9999 9999",
					},
					email: {
						title: "Email Us",
						description: "Send us your project details",
						contact: "info@solvenear.com",
					},
					chat: {
						title: "Live Chat",
						description: "Instant communication with our team",
						contact: "Available 24/7",
					},
					appointment: {
						title: "Book Appointment",
						description: "Free 30-minute consultation",
						contact: "Free",
					},
				},
				buttons: {
					getQuote: "Get Free Quote",
					browseWork: "Browse Our Work",
				},
				trustIndicators: {
					freeConsultation: "Free Consultation",
					qualityGuarantee: "Quality Guarantee",
					continuousSupport: "Continuous Support",
					competitivePricing: "Competitive Pricing",
				},
			},
			hero: {
				badge: "Helping businesses grow and save since 2023",
				mainTitle: {
					companyName: "Solvenear",
					subtitle: "Empowering Business Growth",
				},
				subtitle: {
					main: "We help you to moor the stability and control over your business",
					description:
						"By this we will help to treasure the two most important elements for your business: money & time",
				},
				buttons: {
					startProject: "Start Your Journey",
					watchWork: "See Our Impact",
				},
				stats: {
					completedProjects: {
						number: "30+",
						label: "Projects Delivered",
					},
					satisfiedClients: {
						number: "45+",
						label: "Happy Clients",
					},
					yearsExperience: {
						number: "2+",
						label: "Years of Expertise",
					},
					technicalSupport: {
						number: "24/7",
						label: "Support Available",
					},
				},
				videoModal: {
					title: "Discover Our Work",
					description: "Explore how we make a difference.",
				},
			},
			stats: {
				title: {
					main: "Global Reach, ",
					highlight: "Trusted Worldwide",
				},
				description:
					"We proudly serve clients from every corner of the globe, delivering innovative solutions and building lasting partnerships across continents.",
				stats: [
					{
						label: "Completed Projects",
						description: "Diverse projects in various fields",
						color: "text-green-400",
					},
					{
						label: "Satisfied Clients",
						description: "Clients from all over the Arab world",
						color: "text-blue-400",
					},
					{
						label: "Awards & Recognition",
						description: "Local and regional recognitions",
						color: "text-yellow-400",
					},
					{
						label: "Years Experience",
						description: "Accumulated experience in development",
						color: "text-purple-400",
					},
				],
			},

			services: {
				title: {
					main: "Our Distinguished",
					highlight: "Services",
				},
				description:
					"We provide a comprehensive range of advanced technical solutions to help our clients succeed and excel in the digital world",
				services: [
					{
						title: "Website Development",
						description:
							"Professional responsive websites for all devices using the latest technologies and global standards",
						features: [
							"Responsive Design",
							"High Speed",
							"SEO Optimized",
							"Advanced Security",
						],
						price: "From 299 JD",
						link: "/contact",
						gradient: "from-blue-500 to-cyan-500",
						bgGradient: "from-blue-500/10 to-cyan-500/10",
					},
					{
						title: "Mobile App Development",
						description:
							"iOS and Android apps with modern technologies, user-friendly interfaces, and excellent performance",
						features: [
							"iOS & Android",
							"Attractive Interfaces",
							"Fast Performance",
							"Continuous Updates",
						],
						price: "From 599 JD",
						link: "/contact",
						gradient: "from-green-500 to-emerald-500",
						bgGradient: "from-green-500/10 to-emerald-500/10",
					},
					{
						title: "E-commerce",
						description:
							"Integrated e-commerce stores with payment systems, shipping, inventory management, and detailed reports",
						features: [
							"Secure Payment System",
							"Inventory Management",
							"Detailed Reports",
							"Multi-Currency Support",
						],
						price: "From 799 JD",
						link: "/contact",
						gradient: "from-purple-500 to-pink-500",
						bgGradient: "from-purple-500/10 to-pink-500/10",
					},
					{
						title: "Database Management Systems",
						description:
							"Advanced data management solutions with guaranteed security, speed, and high reliability",
						features: [
							"High Security",
							"Backup Systems",
							"Optimized Performance",
							"Continuous Monitoring",
						],
						price: "From 399 JD",
						link: "/contact",
						gradient: "from-orange-500 to-red-500",
						bgGradient: "from-orange-500/10 to-red-500/10",
					},
					{
						title: "Cloud Solutions",
						description:
							"Move your business to the cloud with guaranteed security, reliability, and access from anywhere",
						features: [
							"Cloud Deployment",
							"Backup Systems",
							"Flexible Scaling",
							"Advanced Security",
						],
						price: "From 199 JD monthly",
						link: "/contact",
						gradient: "from-indigo-500 to-blue-500",
						bgGradient: "from-indigo-500/10 to-blue-500/10",
					},
					{
						title: "Cybersecurity",
						description:
							"Comprehensive protection for your systems and information from cyber threats and electronic attacks",
						features: [
							"Continuous Monitoring",
							"Advanced Protection",
							"Security Reports",
							"Rapid Response",
						],
						price: "From 299 JD monthly",
						link: "/contact",
						gradient: "from-red-500 to-pink-500",
						bgGradient: "from-red-500/10 to-pink-500/10",
					},
				],
				buttons: {
					requestService: "Request Service Now",
					viewAllServices: "View All Services",
				},
			},

			whyUs: {
				title: {
					main: "Why Choose",
					highlight: "solvenear ",
				},
				description:
					"We are not just a software development company, but your strategic partner in the digital transformation journey",
				reasons: [
					{
						title: "Exceptional Quality",
						description:
							"We are committed to the highest quality standards in every project we work on, with attention to fine details",
						stats: "99.8% Customer Satisfaction Rate",
					},
					{
						title: "Fast Execution",
						description:
							"Professional team ensures project delivery on time without compromising quality",
						stats: "30% faster than competitors on average",
					},
					{
						title: "Expert Team",
						description:
							"Developers and designers with extensive experience in the latest technologies and advanced tools",
						stats: "More than 10 technical experts",
					},
					{
						title: "Security & Reliability",
						description:
							"We apply the highest security standards to protect your data and sensitive information",
						stats: "100% Data Protection",
					},
					{
						title: "Continuous Support",
						description:
							"24/7 continuous technical support to ensure your projects continue to operate at optimal performance",
						stats: "Round-the-clock support",
					},
					{
						title: "Competitive Pricing",
						description:
							"We offer the best value for money with flexible packages that suit all budgets",
						stats: "Savings up to 40%",
					},
				],
				cta: {
					title: "Ready to Start Your Next Project?",
					description:
						"Join more than 45 satisfied clients and discover the difference with us",
					buttons: {
						getConsultation: "Get Free Consultation",
						browseWork: "Browse Our Work",
					},
				},
			},

			testimonials: {
				title: {
					main: "What do our",
					highlight: "clients say ",
				},
				description:
					"Opinions and experiences of our valued clients who trusted us and achieved exceptional successes",
				testimonials: [
					{
						name: "Ahmed Mohammed",
						position: "General Manager",
						company: "Advanced Technologies Company",
						image: "/manager-1.jpeg",
						rating: 5,
						text: "I worked with solvenear on developing our company's website, and the result exceeded all my expectations. A very professional team committed to deadlines. The website became 300% faster and sales increased by 150%.",
						project: "E-commerce Website",
						results: [
							"150% Sales Increase",
							"300% Speed Improvement",
							"Excellent User Experience",
						],
					},
					{
						name: "abdullah Al-Ali",
						position: "Marketing Director",
						company: "Innovation Business Group",
						image: "/manager-2.jpeg",
						rating: 5,
						text: "solvenear developed a customer management application for us and the work was very professional. The team quickly understood our needs and provided innovative solutions. The application is easy to use and greatly improved the sales team's efficiency.",
						project: "Customer Management App",
						results: [
							"80% Efficiency Improvement",
							"60% Time Savings",
							"95% Employee Satisfaction",
						],
					},
					{
						name: "Khalid Al-Saadi",
						position: "Founder & CEO",
						company: "Smart Education Platform",
						image: "/manager-3jpeg.jpeg",
						rating: 5,
						text: "We chose solvenear to develop our e-learning platform, and it was an amazing experience. The team is creative and understanding of modern education requirements. The platform now serves more than 10,000 students with high efficiency.",
						project: "E-learning Platform",
						results: [
							"10,000+ Active Students",
							"90% Completion Rate",
							"4.8/5 Rating",
						],
					},
					{
						name: "Sarah Al-Zahrani",
						position: "Operations Director",
						company: "Advanced Care Hospital",
						image: "/manger-4.jpeg",
						rating: 5,
						text: "The hospital management system developed by solvenear completely changed how we work. Operations became more organized and faster, and patient experience improved significantly. The support team is always available and very cooperative.",
						project: "Hospital Management System",
						results: [
							"70% Service Improvement",
							"85% Error Reduction",
							"92% Patient Satisfaction",
						],
					},
					{
						name: "Mohammed Al-Ahmad",
						position: "IT Director",
						company: "Digital Progressive Bank",
						image: "/manager-5.jpeg",
						rating: 5,
						text: "We collaborated with solvenear on developing the mobile banking app, and the result was exceptional. The app is secure, fast, and easy to use. Active users increased by 200% in just 6 months.",
						project: "Mobile Banking App",
						results: ["200% User Increase", "100% Security", "4.9/5 Rating"],
					},
				],
				stats: {
					satisfactionRate: {
						number: "98%",
						label: "Customer Satisfaction Rate",
					},
					satisfiedClients: {
						number: "45+",
						label: "Satisfied Clients",
					},
					averageRating: {
						number: "4.9/5",
						label: "Average Rating",
					},
					renewalRate: {
						number: "95%",
						label: "Renewal Rate",
					},
				},
			},
		},
		websiteDevelopment: {
			hero: {
				title: "Website Development",
				description:
					"Design and develop professional websites responsive to all devices",
				cta: {
					startProject: "Start Your Project Now",
					viewWork: "View Work",
				},
			},
			features: {
				title: "Our Service Features",
				description:
					"We provide you with a professional website that meets all your needs and achieves your business goals",
				list: [
					{
						title: "Responsive Design for All Devices",
						description:
							"Your website will work perfectly on phones, tablets, and computers",
					},
					{
						title: "Search Engine Optimization (SEO)",
						description:
							"Comprehensive SEO optimization to ensure your website appears in top results",
					},
					{
						title: "High Loading Speed",
						description:
							"Performance optimization to ensure fast loading and excellent user experience",
					},
					{
						title: "User-Friendly Dashboard",
						description:
							"Easily manage your website content through an intuitive dashboard",
					},
					{
						title: "SSL Security Certificate",
						description:
							"Complete protection for your website and visitor data with a free SSL certificate",
					},
					{
						title: "Continuous Technical Support",
						description:
							"A specialized support team available 24/7 to assist you anytime",
					},
				],
			},
			pricing: {
				price: 50,
				title: "Dinars Yearly",
				description: "Includes hosting, consultation, and design",
				features: [
					"Responsive Design for All Devices",
					"Search Engine Optimization (SEO)",
					"High Loading Speed",
					"User-Friendly Dashboard",
					"SSL Security Certificate",
					"Continuous Technical Support",
				],
				cta: "Calculate Your Website Price",
			},
			additionalServices: {
				title: "Additional Services",
				description:
					"Advanced services to develop and enhance your website's performance",
				list: [
					{
						title: "Logo Design",
						description: "Professional logo design for your brand",
						price: "From 50 Dinars",
					},
					{
						title: "Content Writing",
						description: "Professional and SEO-optimized content writing",
						price: "From 100 Dinars",
					},
					{
						title: "Digital Marketing",
						description: "Social media marketing services",
						price: "From 200 Dinars Monthly",
					},
					{
						title: "Monthly Maintenance",
						description:
							"Regular maintenance and security updates for the website",
						price: "From 30 Dinars Monthly",
					},
				],
			},
			testimonials: {
				title: "What Our Clients Say?",
				list: [
					{
						name: "Ahmed Mohammed",
						company: "Advanced Technologies Company",
						text: "Great website and excellent service, our sales increased by 150%",
					},
					{
						name: "Fatima Al Ali",
						company: "Innovation Group",
						text: "Professional team and committed to deadlines, the result exceeded my expectations",
					},
					{
						name: "Walid Al Saadi",
						company: "Smart Education Platform",
						text: "Modern design and fast loading, our clients are very impressed",
					},
				],
			},
			cta: {
				title: "Ready to Start Your Project?",
				description:
					"Contact us today and get a free consultation for your website",
				buttons: {
					getQuote: "Get a Quote",
					contactUs: "Contact Us",
				},
			},
		},
		pricingCalculator: {
			modalTitle: "Website Pricing Calculator",
			close: "Close",
			step: "Step",
			of: "of",
			percent: "%",
			websiteTypeTitle: "What type of website do you want?",
			websiteTypes: {
				corporate: "Corporate Website",
				ecommerce: "E-commerce Store",
				portfolio: "Portfolio",
				blog: "Blog",
				from: "From",
				dinar: "Dinar",
			},
			next: "Next",
			previous: "Previous",
			detailsTitle: "Website Details",
			pagesLabel: "Number of required pages",
			pagesPlaceholder: "Example: 5",
			pagesNote: "50 Dinars for each additional page",
			featuresLabel: "Required Features",
			featureNames: {
				cms: "Content Management System",
				seo: "Search Engine Optimization",
				analytics: "Analytics & Statistics",
				social: "Social Media Integration",
				multilang: "Multi-language",
				mobileApp: "Mobile App",
				payment: "Payment Gateway",
				booking: "Booking System",
			},
			featurePrice: "+{price} Dinar",
			designTimelineTitle: "Design and Timeline",
			designLabel: "Design Type",
			designNames: {
				template: "Template Design",
				custom: "Custom Design",
				premium: "Premium Design",
			},
			designFree: "Free",
			designPrice: "+{price} Dinar",
			timelineLabel: "Timeline",
			timelineNormal: "Normal (2-4 weeks)",
			timelineNormalNote: "+20% of base price",
			timelineUrgent: "Urgent (1-2 weeks)",
			timelineUrgentNote: "+50% of base price",
			estimatedPriceTitle: "Estimated Price for Your Website",
			estimatedPriceNote:
				"This is an estimated price and may vary based on final requirements",
			summaryTitle: "Your Request Summary:",
			summary: {
				websiteType: "• Website type: ",
				pages: "• Number of pages: ",
				features: "• Features: ",
				design: "• Design: ",
				timeline: "• Timeline: ",
			},
			summaryUrgent: "Urgent",
			summaryNormal: "Normal",
			contact: {
				name: "Full Name",
				email: "Email",
				phone: "Phone Number",
				company: "Company Name (optional)",
			},
			getQuote: "Get a Quote",
		},
		qrSolution: {
			hero: {
				title: "Smart QR Solutions",
				description:
					"A technological revolution that transforms your business and saves thousands of dinars annually",
				cta: {
					startSaving: "Start Saving Now",
					viewDemo: "View Demo",
				},
				statsTitle: "Dinars for the complete solution",
				statsDescription:
					"Save thousands of dinars annually and gain more customers",
				savings: {
					title: "💰 Guaranteed Savings:",
					items: [
						"High-quality QR codes",
						"Responsive design for all devices",
						"Advanced dashboard",
						"Instant notifications",
						"Analytics and reports",
						"Continuous technical support",
					],
				},
			},
			stats: [
				{ number: "50K+", label: "Scans per month" },
				{ number: "85%", label: "Increase in average sales" },
				{ number: "60%", label: "Cost savings" },
				{ number: "99.9%", label: "System uptime" },
			],
			solutions: {
				title: "Our Three Advanced Solutions",
				description:
					"Three smart solutions that transform your business into a digital experience and save you thousands of dinars",
				items: [
					{
						title: "QR Menu - Smart Menu",
						description:
							"An interactive digital menu displayed when scanning the code, with rating and waiter call features",
						featuresTitle: "✨ Features:",
						features: [
							"Interactive and attractive menus",
							"Multiple designs (modern, classic, custom)",
							"Customer rating system",
							"Direct waiter call button",
							"Instant updates for prices and offers",
							"Multi-language support",
						],
						benefitsTitle: "💰 Financial Benefits:",
						benefits: [
							"Save on menu printing costs",
							"Instant menu updates",
							"Enhanced customer experience",
							"Reduced waiting time",
						],
						price: "From 199 Dinars",
						cta: "Order Now",
						scanCode: "Scan To See The System",
					},
					{
						title: "QR Ordering - Smart Ordering System",
						description:
							"A comprehensive ordering system for hotels and restaurants that saves thousands of dinars annually in operating costs",
						featuresTitle: "✨ Features:",
						features: [
							"Direct orders from rooms and tables",
							"Advanced management dashboard",
							"Instant order notifications",
							"Real-time order tracking",
							"Integration with payment systems",
							"Detailed sales reports",
						],
						benefitsTitle: "💰 Financial Benefits:",
						benefits: [
							"Save 60% on employee costs",
							"Increase sales by 40%",
							"Reduce human errors",
							"24/7 customer service without staff",
						],
						price: "From 599 Dinars",
						cta: "Order Now",
					},
					{
						title: "QR Offers - Smart Offers",
						description:
							"A dynamic offers system with a countdown timer that boosts sales and creates urgency among customers",
						featuresTitle: "✨ Features:",
						features: [
							"Offers with an exciting countdown timer",
							"Comprehensive management dashboard",
							"Easily add and remove offers",
							"Full design customization",
							"Detailed offer statistics",
							"Automatic customer notifications",
						],
						benefitsTitle: "💰 Financial Benefits:",
						benefits: [
							"Increase sales by 70%",
							"Attract new customers",
							"Encourage quick purchases",
							"Build a loyal customer base",
						],
						price: "From 299 Dinars",
						cta: "Order Now",
					},
				],
			},
			features: {
				title: "Why Choose QR Solutions from Solvenear?",
				description:
					"Advanced technology that transforms your business and saves you money, time, and effort",
				items: [
					{
						title: "Advanced QR Technology",
						description:
							"High-quality QR codes that work with all smartphones at lightning speed",
					},
					{
						title: "Huge Financial Savings",
						description:
							"Save thousands of dinars annually on operating, employee, and printing costs",
					},
					{
						title: "Increase Sales",
						description:
							"Guaranteed sales increase of up to 70% within the first month",
					},
					{
						title: "Instant Notifications",
						description:
							"Receive instant notifications for all orders and customer interactions",
					},
					{
						title: "Full Control",
						description:
							"Advanced dashboard to manage all aspects of your QR system",
					},
					{
						title: "Smart Analytics",
						description:
							"Detailed reports and accurate statistics to help you make better decisions",
					},
				],
			},
			testimonials: {
				title: "Real Success Stories",
				description:
					"See how QR solutions transformed our clients' businesses and saved them thousands of dinars",
				items: [
					{
						name: "Ahmed Al-Khalidi",
						company: "Al-Asala Restaurant",
						text: "The QR Menu system saved us 3000 Dinars annually on printing costs, and customers love the new experience!",
						savings: "Saved 3000 Dinars annually",
						rating: 5,
					},
					{
						name: "Fatima Al-Ali",
						company: "Hospitality Hotel",
						text: "The QR Ordering system changed our hotel! We saved 8 employees and increased sales by 45% in just two months",
						savings: "Saved 8 employees + 45% increase",
						rating: 5,
					},
					{
						name: "Mohammed Massad",
						company: "5Stars Cafe",
						text: "QR Offers increased our sales by 80% in one month! Customers are excited about the countdown offers",
						savings: "80% sales increase",
						rating: 5,
					},
				],
			},
			additionalServicesInfo: {
				title: "Additional Services",
				description: "Comprehensive services to develop your QR system",
			},
			additionalServices: [
				{
					title: "Custom QR Code Design",
					description: "QR codes designed with your brand and custom colors",
					price: "From 50 Dinars",
				},
				{
					title: "POS System Integration",
					description: "Integrate the QR system with your existing POS systems",
					price: "From 200 Dinars",
				},
				{
					title: "Custom Mobile App",
					description: "A mobile app dedicated to your brand",
					price: "From 800 Dinars",
				},
				{
					title: "QR Digital Marketing",
					description:
						"Marketing campaigns to introduce customers to the QR system",
					price: "From 300 Dinars monthly",
				},
			],
			cta: {
				title: "Ready to Save Thousands of Dinars?",
				description:
					"Start your digital transformation journey today and save your business thousands of dinars annually with smart QR solutions",
				guarantee: {
					title: "🎯 Results Guarantee:",
					items: [
						"✅ Guaranteed cost savings within 30 days",
						"✅ Increased sales or your money back",
						"✅ Free technical support for 6 months",
						"✅ Free team training",
					],
				},
				buttons: {
					startSaving: "Start Saving Now - Free",
					bookConsultation: "Book a Free Consultation",
				},
				note: "💡 Free 30-minute consultation to assess your needs",
			},
		},
		// Services
		services: {
			title: "Our Services",
			description:
				"We offer cutting-edge technology solutions designed to transform your business and drive innovation.",
			aiAutomation: {
				title: "AI Automation Solutions",
				description:
					"Transform your business processes with intelligent automation powered by cutting-edge artificial intelligence. Streamline operations, reduce costs, and unlock new levels of productivity.",
				features: {
					title: "Key Features",
					processAutomation: {
						title: "Process Automation",
						description:
							"Automate repetitive tasks and workflows to increase efficiency and reduce human error.",
					},
					predictiveAnalytics: {
						title: "Predictive Analytics",
						description:
							"Leverage AI to predict trends and make data-driven decisions for your business.",
					},
					intelligentSecurity: {
						title: "Intelligent Security",
						description:
							"AI-powered security systems that adapt and learn to protect your business assets.",
					},
				},
				cta: {
					title: "Ready to Automate Your Business?",
					description:
						"Let's discuss how AI automation can transform your operations.",
					button: "Get Started Today",
				},
			},
			eMenu: {
				title: "QR Solutions",
				description:
					"Revolutionary digital menu solutions for restaurants and hospitality businesses. Enhance customer experience with QR code integration and real-time menu updates.",
				features: {
					title: "Features",
					qrCode: {
						title: "QR Code Integration",
						description:
							"Contactless menu access through QR codes for enhanced safety and convenience.",
					},
					mobileOptimized: {
						title: "Mobile Optimized",
						description:
							"Responsive design that works perfectly on all mobile devices and tablets.",
					},
					analytics: {
						title: "Analytics Dashboard",
						description:
							"Track customer preferences and menu performance with detailed analytics.",
					},
				},
				cta: {
					title: "Transform Your Restaurant Experience",
					description:
						"Join hundreds of restaurants already using our digital menu solutions.",
					button: "Request Demo",
				},
			},
			landingWebsite: {
				title: "Web Development",
				description:
					"Professional landing pages and websites designed to convert visitors into customers. Modern design, SEO optimization, and performance-focused development.",
				features: {
					title: "What We Offer",
					performance: {
						title: "High Performance",
						description:
							"Lightning-fast loading times and optimized performance for better user experience.",
					},
					seo: {
						title: "SEO Optimized",
						description:
							"Built with SEO best practices to help your website rank higher in search results.",
					},
					responsive: {
						title: "Responsive Design",
						description:
							"Mobile-first design approach ensuring perfect display on all devices and screen sizes.",
					},
				},
				cta: {
					title: "Ready to Launch Your Website?",
					description:
						"Let's create a stunning website that drives results for your business.",
					button: "Start Your Project",
				},
			},
		},

		// FAQ
		faq: {
			title: "Frequently Asked Questions",
			description:
				"Find answers to common questions about our services and solutions.",
			questions: [
				{
					question: "What services does E-Solutions offer?",
					answer:
						"We specialize in AI Automation, E-Menu Solutions for restaurants, and Landing Website development. Our team provides end-to-end solutions tailored to your business needs.",
				},
				{
					question: "How long does it take to complete a project?",
					answer:
						"Project timelines vary depending on complexity and scope. AI Automation projects typically take 4-8 weeks, E-Menu solutions 2-4 weeks, and Landing Websites 1-3 weeks.",
				},
				{
					question: "Do you provide ongoing support and maintenance?",
					answer:
						"Yes, we offer comprehensive support and maintenance packages for all our solutions. This includes regular updates, bug fixes, and technical support.",
				},
				{
					question: "Can you integrate with existing systems?",
					answer:
						"Our solutions are designed to integrate seamlessly with your existing systems and workflows. We conduct thorough analysis to ensure compatibility.",
				},
				{
					question: "What is the cost of your services?",
					answer:
						"Pricing varies based on project requirements and complexity. We provide detailed quotes after understanding your specific needs. Contact us for a free consultation.",
				},
			],
		},

		// Blog
		blog: {
			title: "Latest Insights",
			description:
				"Stay updated with the latest trends in technology, AI, and digital innovation.",
			readMore: "Read More",
			articles: [
				{
					title: "The Future of AI Automation in Business",
					excerpt:
						"Discover how artificial intelligence is revolutionizing business processes and what it means for the future of work.",
					date: "December 15, 2024",
					category: "AI & Technology",
					image: "/AIAutomationTheFutureOfWork.jpg",
				},
				{
					title: "Digital Menu Revolution: Transforming Restaurant Experience",
					excerpt:
						"How QR code menus and digital solutions are changing the hospitality industry post-pandemic.",
					date: "December 10, 2024",
					category: "Digital Solutions",
					image: "/detail_main_m_253.webp",
				},
				{
					title: "Landing Page Optimization: Converting Visitors to Customers",
					excerpt:
						"Essential strategies and best practices for creating high-converting landing pages that drive business growth.",
					date: "December 5, 2024",
					category: "Web Development",
					image:
						"/Landing-Page-Optimization-Strategy-For-Better-Conversions-smaller.webp",
				},
			],
		},

		// About
		about: {
			whoWe: {
				title: "Who We Are",
				intro: {
					p1: "solvenear is a leading company in software development and technology solutions, founded to provide high‑quality services in programming and the development of websites and applications.",
					p2: "We believe that technology should be in the service of people; therefore, we always strive to develop innovative solutions that meet our clients' needs and help them achieve their goals.",
				},
				cards: {
					vision: {
						title: "Our Vision",
						description:
							"To be the leading software development company in the Arab region, contributing to the digital transformation of institutions and businesses.",
					},
					mission: {
						title: "Our Mission",
						description:
							"To deliver innovative, high‑quality software solutions that help our clients grow and thrive in the digital era.",
					},
				},
			},
			process: {
				title: { main: "Our", highlight: "Process" },
				description:
					"We follow a thorough, scientific methodology to ensure your project succeeds from start to finish.",
				stageLabel: "Stage",
				steps: [
					{
						title: "Consultation & Planning",
						description:
							"We start by understanding your needs and goals through detailed consultation sessions to define a clear plan of action.",
						details: [
							"Requirements analysis",
							"Market research",
							"Strategy definition",
							"Budget and timeline planning",
						],
						duration: "1-2 weeks",
					},
					{
						title: "Design & Prototyping",
						description:
							"We design user interfaces and interactive prototypes to ensure an optimal user experience.",
						details: [
							"UI design",
							"Prototypes",
							"UX testing",
							"Review and iteration",
						],
						duration: "2-3 weeks",
					},
					{
						title: "Development & Engineering",
						description:
							"Our specialized team turns designs into high‑quality code using the latest technologies.",
						details: [
							"Frontend development",
							"Backend development",
							"Database integration",
							"Continuous testing",
						],
						duration: "4-8 weeks",
					},
					{
						title: "Testing & Quality Assurance",
						description:
							"Comprehensive testing to ensure top performance and error‑free delivery.",
						details: [
							"Functional testing",
							"Performance testing",
							"Security testing",
							"User testing",
						],
						duration: "1-2 weeks",
					},
					{
						title: "Deployment & Launch",
						description:
							"Deploying the project to the right infrastructure with stability and high performance.",
						details: [
							"Server setup",
							"Application deployment",
							"Post‑launch testing",
							"Usage training",
						],
						duration: "3-5 days",
					},
					{
						title: "Support & Maintenance",
						description:
							"Ongoing support and regular maintenance to keep your project performing at its best.",
						details: [
							"24/7 technical support",
							"Security updates",
							"Performance improvements",
							"New feature delivery",
						],
						duration: "Ongoing",
					},
				],
				cta: {
					title: "Ready to start your journey with us?",
					description: "Let us turn your idea into a standout digital reality.",
					button: "Start your project now",
				},
			},
			faq: {
				title: { main: "Frequently", highlight: "Asked Questions" },
				description:
					"Comprehensive answers to the most common questions about our services and development process.",
				searchPlaceholder: "Search FAQs...",
				labels: {
					popular: "Popular",
					helpfulQuestion: "Was this answer helpful?",
					yes: "Yes",
					no: "No",
				},
				categories: {
					all: "All Questions",
					development: "Development",
					pricing: "Pricing",
					support: "Support",
					technical: "Technical",
					security: "Security",
					payment: "Payment",
					marketing: "Marketing",
					management: "Management",
				},
				empty: {
					title: "No results found",
					description:
						"Try searching with different keywords or browse other categories",
					reset: "Reset Search",
				},
				contactCta: {
					title: "Didn't find an answer to your question?",
					description:
						"Our support team is available 24/7 to answer all your inquiries",
					chat: "Live Chat",
					call: "Call Us",
					email: "Email Us",
				},
				faqs: [
					{
						id: "1",
						question: "How long does it take to develop a website?",
						answer:
							"Development time depends on project complexity, number of pages, and required features. A simple website usually takes 2–3 weeks, while complex sites may need 6–8 weeks. We provide a detailed timeline after reviewing your requirements.",
						category: "development",
						popular: true,
					},
					{
						id: "2",
						question: "Do you provide hosting and domain services?",
						answer:
							"Yes, we offer hosting and domain services as part of our packages. We provide high‑quality hosting with 99.9% uptime and free SSL certificates. We also help you choose and register the right domain for your business.",
						category: "support",
						popular: true,
					},
					{
						id: "3",
						question: "Can I edit my website content myself?",
						answer:
							"Absolutely! All our websites come with an easy‑to‑use admin panel that lets you edit content, add new pages, upload images, and manage products (for e‑commerce). We also provide free training on how to use the admin panel.",
						category: "technical",
						popular: true,
					},
					{
						id: "4",
						question: "What is the cost of developing an online store?",
						answer:
							"Online store pricing starts from 799 JOD for a basic store and goes up to 2999 JOD for advanced stores. The price includes design, development, payment gateway integration, inventory management, and technical support. Use our price calculator for an accurate estimate.",
						category: "pricing",
						popular: true,
					},
					{
						id: "5",
						question: "Do you support local payment gateways?",
						answer:
							"Yes, we support all local and international payment gateways such as Visa, MasterCard, PayPal, and local gateways in Jordan and across the Arab region. We ensure the highest security standards with PCI DSS compliance.",
						category: "payment",
						popular: false,
					},
					{
						id: "6",
						question: "Do you offer maintenance and technical support?",
						answer:
							"Yes, we provide comprehensive 24/7 technical support including regular maintenance, security updates, backups, and performance monitoring. We offer various maintenance packages starting from 30 JOD per month depending on your site size and needs.",
						category: "support",
						popular: false,
					},
					{
						id: "7",
						question: "Are the websites mobile‑friendly?",
						answer:
							"All our websites are built with responsive design to work perfectly on all devices (phones, tablets, desktops). We test across devices and browsers to ensure an excellent user experience.",
						category: "technical",
						popular: true,
					},
					{
						id: "8",
						question: "How do you ensure website security?",
						answer:
							"We apply top cybersecurity standards including SSL certificates, data encryption, DDoS protection, regular security updates, and continuous threat monitoring. We also perform daily backups to keep your data safe.",
						category: "security",
						popular: false,
					},
					{
						id: "9",
						question: "Do you offer digital marketing services?",
						answer:
							"Yes, we provide full digital marketing services including SEO, Google Ads, Facebook and Instagram Ads, social media management, and email marketing. Our specialized team helps you reach your target audience.",
						category: "marketing",
						popular: false,
					},
					{
						id: "10",
						question: "What payment methods are available?",
						answer:
							"We accept several methods: bank transfer, cash, credit cards, and PayPal. Payments can be split by project milestones: 50% at start, 30% at initial delivery, and 20% at final delivery.",
						category: "payment",
						popular: false,
					},
					{
						id: "11",
						question: "Do you provide a warranty on your services?",
						answer:
							"Yes, we provide a comprehensive 6‑month warranty on all our services covering bug fixes, free updates, and full technical support. We also guarantee your satisfaction or your money back.",
						category: "support",
						popular: false,
					},
					{
						id: "12",
						question: "How can I track my project's progress?",
						answer:
							"We provide a dedicated dashboard to track your project's progress in real time, with regular updates via email and WhatsApp. We also hold periodic meetings to review progress and collect your feedback.",
						category: "management",
						popular: false,
					},
				],
			},
		},

		reachout: {
			title: "Contact Us",
			subtitle:
				"We are here to help you achieve your digital goals. Contact us today to discuss your project",
			phone: { phone: "+966 50 123 4567", title: "Call Us" },
			email: { email: "info@company.com", title: "Email Us" },
			location: { location: "Amman, Jordan", title: "Our Location" },
			website: { website: "www.company.com", title: "Our Website" },
			whyChooseUs: "Why Choose Us ?",
			reasons: [
				{
					title: "Long Experience",
					description: "More than 10 years of experience",
					icon: Clock,
				},
				{
					title: "Professional Team",
					description: "Specialized and professional team",
					icon: Users,
				},
				{
					title: "Innovative Solutions",
					description: "Innovative and advanced solutions",
					icon: Lightbulb,
				},
				{
					title: "Continuous Support",
					description: "24/7 technical support",
					icon: Headphones,
				},
				{
					title: "Competitive Prices",
					description: "Competitive and suitable prices",
					icon: DollarSign,
				},
			],
			startProject: "Start Your Project With Us",
		},

		// Contact
		contact: {
			title: "Contact Us",
			description:
				"Please fill out the required fields below. We will respond within one business day.",
			form: {
				title: "Get In Touch",
				name: "Name",
				namePlaceholder: "الاسم",
				companyName: "Company Name",
				companyNamePlaceholder: "اسم الشركة",
				mobile: "Mobile",
				mobilePlaceholder: "رقم الهاتف",
				country: "Country",
				countryPlaceholder: "الدولة",
				email: "Email",
				emailPlaceholder: "بريدك الإلكتروني",
				gdprTitle: "GDPR Agreement",
				gdprText:
					"I consent to having this website store my submitted information so they can respond to my inquiry.",
				send: "Send",
			},
			page: {
				title: "Contact Us",
				description:
					"We’re here to help. Reach out today and let’s turn your ideas into a digital reality.",
				form: {
					title: "Send Us a Message",
					firstName: {
						label: "First Name",
						placeholder: "Enter your first name",
					},
					lastName: { label: "Last Name", placeholder: "Enter your last name" },
					email: { label: "Email", placeholder: "Enter your email address" },
					phone: {
						label: "Phone Number",
						placeholder: "Enter your phone number",
					},
					subject: { label: "Subject", placeholder: "Message subject" },
					message: {
						label: "Message",
						placeholder: "Write your message here...",
					},
					submit: "Send Message",
				},
				info: {
					title: "Contact Information",
					email: { label: "Email", value: "info@solvenear.com" },
					phone: { label: "Phone", value: "+962 7 9999 9999" },
					address: { label: "Address", value: "Amman, Jordan" },
					hours: { label: "Working Hours", value: "Sun - Thu: 9:00 - 18:00" },
				},
				reasons: {
					title: "Why choose solvenear ?",
					items: [
						"Extensive experience in software development",
						"Professional and specialized team",
						"Continuous technical support",
						"Competitive pricing",
					],
				},
			},
		},

		// Footer
		footer: {
			followUs: "Follow Us",
			contactUs: "Contact Us",
			quickLinks: "Quick Links",
			aboutUs: "solvenear",
			phone: "+962 77 939 3847",
			email: "info@solvenear.com",
			website: "www.solvenear.com",
			services: "Our Services",
			createWebsites: "Website Development",
			createStores: "E-commerce Development",
			mobileApps: "Mobile Applications",
			cloudSolutions: "Cloud Solutions",
			etoProgram: "Eto Pro® Electronic Power Program",
			schoolProgram:
				"Tasdeed® Integrated Accounting Program for Private Schools",
			aboutUsText:
				"A leading company in software development and advanced technical solutions from the heart of Amman to the Arab world",
			whoWeAre: "Who We Are",
			contactUsFooter: "Contact Us",
			copyright: "© 2024 solvenear. All rights reserved",
			madeInJordan: "Made in Amman, Jordan",
			slogan:
				"From the heart of Amman to the Arab world, quality and innovation in software and website development",
		},

		// Common
		common: {
			loading: "Loading...",
			comingSoon: "Coming Soon",
			stayTuned: "We're working on this section. Stay tuned!",
		},
	},

	ar: {
		// Navigation
		nav: {
			home: "الرئيسية",
			services: "الخدمات",
			faq: "الأسئلة الشائعة",
			careers: "الوظائف",
			aboutUs: "من نحن",
			blog: "المدونة",
			contactUs: "اتصل بنا",
			languageSwitch: "English",
		},

		// Home Page
		home: {
			cta: {
				title: "جاهز لبدء مشروعك؟",
				description:
					"لا تتردد في التواصل معنا اليوم واحصل على استشارة مجانية لمشروعك التقني",
				contactOptions: {
					call: {
						title: "اتصل بنا",
						description: "تحدث مع خبرائنا مباشرة",
						contact: "+962 7 9999 9999",
					},
					email: {
						title: "راسلنا",
						description: "أرسل لنا تفاصيل مشروعك",
						contact: "info@solvenear.com",
					},
					chat: {
						title: "دردشة مباشرة",
						description: "تواصل فوري مع فريقنا",
						contact: "متاح 24/7",
					},
					appointment: {
						title: "احجز موعد",
						description: "استشارة مجانية 30 دقيقة",
						contact: "مجاناً",
					},
				},
				buttons: {
					getQuote: "احصل على عرض سعر مجاني",
					browseWork: "تصفح أعمالنا",
				},
				trustIndicators: {
					freeConsultation: "استشارة مجانية",
					qualityGuarantee: "ضمان الجودة",
					continuousSupport: "دعم مستمر",
					competitivePricing: "أسعار تنافسية",
				},
			},
			hero: {
				badge: "مساعدة الشركات على النمو والتوفير منذ 2023",
				mainTitle: {
					companyName: "سولڤنير",
					subtitle: "تمكين نمو الأعمال",
				},
				subtitle: {
					main: "نساعدك على ترسيخ الاستقرار والتحكم في عملك.",
					description:
						"بذلك سنساعدك على الحفاظ على أهم عنصرين في عملك: المال والوقت.",
				},
				buttons: {
					startProject: "ابدأ رحلتك",
					watchWork: "شاهد تأثيرنا",
				},
				stats: {
					completedProjects: {
						number: "30+",
						label: "مشاريع مكتملة",
					},
					satisfiedClients: {
						number: "45+",
						label: "عملاء سعداء",
					},
					yearsExperience: {
						number: "2+",
						label: "سنوات من الخبرة",
					},
					technicalSupport: {
						number: "24/7",
						label: "دعم متوفر",
					},
				},
				videoModal: {
					title: "اكتشف أعمالنا",
					description: "استكشف كيف نصنع الفرق.",
				},
			},
			stats: {
				title: {
					main: "انتشار عالمي، ",
					highlight: "ثقة حول العالم",
				},
				description:
					"نفخر بخدمة عملائنا من جميع أنحاء العالم، ونقدم حلولاً مبتكرة ونبني شراكات دائمة عبر القارات.",
				stats: [
					{
						label: "مشروع مكتمل",
						description: "مشاريع متنوعة في مختلف المجالات",
						color: "text-green-400",
					},
					{
						label: "عميل راضي",
						description: "عملاء من جميع أنحاء الوطن العربي",
						color: "text-blue-400",
					},
					{
						label: "جائزة وتقدير",
						description: "تقديرات محلية وإقليمية",
						color: "text-yellow-400",
					},
					{
						label: "سنوات خبرة",
						description: "خبرة متراكمة في التطوير",
						color: "text-purple-400",
					},
				],
			},

			services: {
				title: {
					main: "خدماتنا",
					highlight: "المتميزة",
				},
				description:
					"نقدم مجموعة شاملة من الحلول التقنية المتطورة لمساعدة عملائنا على النجاح والتميز في العالم الرقمي",
				services: [
					{
						title: "تطوير المواقع الإلكترونية",
						description:
							"مواقع احترافية متجاوبة مع جميع الأجهزة باستخدام أحدث التقنيات والمعايير العالمية",
						features: ["تصميم متجاوب", "سرعة عالية", "SEO محسن", "أمان متقدم"],
						price: "من 299 دينار",
						link: "/contact",
						gradient: "from-blue-500 to-cyan-500",
						bgGradient: "from-blue-500/10 to-cyan-500/10",
					},
					{
						title: "تطوير التطبيقات المحمولة",
						description:
							"تطبيقات iOS و Android بتقنيات حديثة وواجهات سهلة الاستخدام وأداء متميز",
						features: [
							"iOS & Android",
							"واجهات جذابة",
							"أداء سريع",
							"تحديثات مستمرة",
						],
						price: "من 599 دينار",
						link: "/services/apps",
						gradient: "from-green-500 to-emerald-500",
						bgGradient: "from-green-500/10 to-emerald-500/10",
					},
					{
						title: "التجارة الإلكترونية",
						description:
							"متاجر إلكترونية متكاملة مع أنظمة الدفع والشحن وإدارة المخزون والتقارير التفصيلية",
						features: [
							"نظام دفع آمن",
							"إدارة مخزون",
							"تقارير مفصلة",
							"دعم متعدد العملات",
						],
						price: "من 799 دينار",
						link: "/contact",
						gradient: "from-purple-500 to-pink-500",
						bgGradient: "from-purple-500/10 to-pink-500/10",
					},
					{
						title: "أنظمة إدارة قواعد البيانات",
						description:
							"حلول متقدمة لإدارة البيانات مع ضمان الأمان والسرعة والموثوقية العالية",
						features: [
							"أمان عالي",
							"نسخ احتياطية",
							"أداء محسن",
							"مراقبة مستمرة",
						],
						price: "من 399 دينار",
						link: "/contact",
						gradient: "from-orange-500 to-red-500",
						bgGradient: "from-orange-500/10 to-red-500/10",
					},
					{
						title: "الحلول السحابية",
						description:
							"نقل أعمالك إلى السحابة مع ضمان الأمان والموثوقية والوصول من أي مكان",
						features: ["نشر سحابي", "نسخ احتياطية", "مقياس مرن", "أمان متقدم"],
						price: "من 199 دينار شهرياً",
						link: "/contact",
						gradient: "from-indigo-500 to-blue-500",
						bgGradient: "from-indigo-500/10 to-blue-500/10",
					},
					{
						title: "الأمن السيبراني",
						description:
							"حماية شاملة لأنظمتك ومعلوماتك من التهديدات السيبرانية والهجمات الإلكترونية",
						features: [
							"مراقبة مستمرة",
							"حماية متقدمة",
							"تقارير أمنية",
							"استجابة سريعة",
						],
						price: "من 299 دينار شهرياً",
						link: "/contact",
						gradient: "from-red-500 to-pink-500",
						bgGradient: "from-red-500/10 to-pink-500/10",
					},
				],
				buttons: {
					requestService: "اطلب الخدمة الآن",
					viewAllServices: "عرض جميع الخدمات",
				},
			},

			whyUs: {
				title: {
					main: "لماذا تختار",
					highlight: "سولڤنير",
				},
				description:
					"نحن لسنا مجرد شركة تطوير برمجيات، بل شريكك الاستراتيجي في رحلة التحول الرقمي",
				reasons: [
					{
						title: "جودة استثنائية",
						description:
							"نلتزم بأعلى معايير الجودة في كل مشروع نعمل عليه، مع اهتمام بالتفاصيل الدقيقة",
						stats: "99.8% معدل رضا العملاء",
					},
					{
						title: "سرعة في التنفيذ",
						description:
							"فريق عمل محترف يضمن تسليم المشاريع في الوقت المحدد دون التنازل عن الجودة",
						stats: "متوسط 30% أسرع من المنافسين",
					},
					{
						title: "فريق خبير",
						description:
							"مطورون ومصممون ذوو خبرة واسعة في أحدث التقنيات والأدوات المتطورة",
						stats: "أكثر من 10 خبير تقني",
					},
					{
						title: "أمان وموثوقية",
						description:
							"نطبق أعلى معايير الأمان لحماية بياناتك ومعلوماتك الحساسة",
						stats: "100% حماية البيانات",
					},
					{
						title: "دعم مستمر",
						description:
							"دعم فني متواصل 24/7 لضمان استمرارية عمل مشاريعك بأفضل أداء",
						stats: "دعم على مدار الساعة",
					},
					{
						title: "أسعار تنافسية",
						description:
							"نقدم أفضل قيمة مقابل المال مع باقات مرنة تناسب جميع الميزانيات",
						stats: "توفير يصل إلى 40%",
					},
				],
				cta: {
					title: "جاهز لبدء مشروعك التالي؟",
					description: "انضم إلى أكثر من 45 عميل راضي واكتشف الفرق معنا",
					buttons: {
						getConsultation: "احصل على استشارة مجانية",
						browseWork: "تصفح أعمالنا",
					},
				},
			},

			testimonials: {
				title: {
					main: "ماذا يقول",
					highlight: "عملاؤنا",
				},
				description:
					"آراء وتجارب عملائنا الكرام الذين وثقوا بنا وحققوا نجاحات استثنائية",
				testimonials: [
					{
						name: "أحمد محمد",
						position: "مدير عام",
						company: "شركة التقنيات المتقدمة",
						image: "/manager-1.jpeg",
						rating: 5,
						text: "تعاملت مع سولڤنير في تطوير موقع شركتنا الإلكتروني، والنتيجة فاقت كل توقعاتي. فريق محترف جداً وملتزم بالمواعيد. الموقع أصبح أسرع بـ 300% وزادت المبيعات بنسبة 150%.",
						project: "موقع التجارة الإلكترونية",
						results: [
							"زيادة المبيعات 150%",
							"تحسن السرعة 300%",
							"تجربة مستخدم ممتازة",
						],
					},
					{
						name: "عبدالله العلي",
						position: "مدير التسويق",
						company: "مجموعة الابتكار التجارية",
						image: "/manager-2.jpeg",
						rating: 5,
						text: "سولڤنير طوروا لنا تطبيق إدارة العملاء وكان العمل احترافي جداً. الفريق فهم احتياجاتنا بسرعة وقدم حلول مبتكرة. التطبيق سهل الاستخدام وحسن من كفاءة فريق المبيعات بشكل كبير.",
						project: "تطبيق إدارة العملاء",
						results: [
							"تحسن الكفاءة 80%",
							"توفير الوقت 60%",
							"رضا الموظفين 95%",
						],
					},
					{
						name: "خالد السعدي",
						position: "مؤسس ومدير تنفيذي",
						company: "منصة التعليم الذكي",
						image: "/manager-3jpeg.jpeg",
						rating: 5,
						text: "اختارنا سولڤنير لتطوير منصة التعليم الإلكتروني الخاصة بنا، وكانت تجربة رائعة. الفريق مبدع ومتفهم لمتطلبات التعليم الحديث. المنصة تخدم الآن أكثر من 10,000 طالب بكفاءة عالية.",
						project: "منصة التعليم الإلكتروني",
						results: ["10,000+ طالب نشط", "معدل إكمال 90%", "تقييم 4.8/5"],
					},
					{
						name: "سارة الزهراني",
						position: "مديرة العمليات",
						company: "مستشفى الرعاية المتقدمة",
						image: "/manger-4.jpeg",
						rating: 5,
						text: "نظام إدارة المستشفى الذي طورته سولڤنير غير طريقة عملنا تماماً. أصبحت العمليات أكثر تنظيماً وسرعة، وتحسنت تجربة المرضى بشكل ملحوظ. فريق الدعم متاح دائماً ومتعاون جداً.",
						project: "نظام إدارة المستشفى",
						results: ["تحسن الخدمة 70%", "تقليل الأخطاء 85%", "رضا المرضى 92%"],
					},
					{
						name: "محمد الأحمد",
						position: "مدير تقنية المعلومات",
						company: "البنك الرقمي المتطور",
						image: "/manager-5.jpeg",
						rating: 5,
						text: "تعاونا مع سولڤنير في تطوير تطبيق البنك المحمول، والنتيجة كانت استثنائية. التطبيق آمن وسريع وسهل الاستخدام. عدد المستخدمين النشطين زاد بنسبة 200% خلال 6 أشهر فقط.",
						project: "تطبيق البنك المحمول",
						results: ["زيادة المستخدمين 200%", "أمان 100%", "تقييم 4.9/5"],
					},
				],
				stats: {
					satisfactionRate: {
						number: "98%",
						label: "معدل رضا العملاء",
					},
					satisfiedClients: {
						number: "45+",
						label: "عميل راضي",
					},
					averageRating: {
						number: "4.9/5",
						label: "متوسط التقييم",
					},
					renewalRate: {
						number: "95%",
						label: "معدل التجديد",
					},
				},
			},
		},
		websiteDevelopment: {
			hero: {
				title: "إنشاء المواقع الإلكترونية",
				description: "تصميم وتطوير مواقع احترافية متجاوبة مع جميع الأجهزة",
				cta: {
					startProject: "ابدأ مشروعك الآن",
					viewWork: "عرض الأعمال",
				},
			},
			features: {
				title: "مميزات خدمتنا",
				description:
					"نقدم لك موقعاً إلكترونياً احترافياً يلبي جميع احتياجاتك ويحقق أهدافك التجارية",
				list: [
					{
						title: "تصميم متجاوب مع جميع الأجهزة",
						description:
							"موقعك سيعمل بشكل مثالي على الهواتف والأجهزة اللوحية وأجهزة الكمبيوتر",
					},
					{
						title: "تحسين محركات البحث (SEO)",
						description:
							"تحسين شامل لمحركات البحث لضمان ظهور موقعك في النتائج الأولى",
					},
					{
						title: "سرعة تحميل عالية",
						description: "تحسين الأداء لضمان تحميل سريع وتجربة مستخدم ممتازة",
					},
					{
						title: "لوحة تحكم سهلة الاستخدام",
						description: "إدارة محتوى موقعك بسهولة من خلال لوحة تحكم بديهية",
					},
					{
						title: "شهادة أمان SSL",
						description: "حماية كاملة لموقعك وبيانات زوارك مع شهادة SSL مجانية",
					},
					{
						title: "دعم فني مستمر",
						description: "فريق دعم متخصص متاح 24/7 لمساعدتك في أي وقت",
					},
				],
			},
			pricing: {
				price: 50,
				title: "دينار سنويا",
				description: "يشمل الاستضافة والاستشارة والتصميم",
				features: [
					"تصميم متجاوب مع جميع الأجهزة",
					"تحسين محركات البحث (SEO)",
					"سرعة تحميل عالية",
					"لوحة تحكم سهلة الاستخدام",
					"شهادة أمان SSL",
					"دعم فني مستمر",
				],
				cta: "احسب سعر موقعك",
			},
			additionalServices: {
				title: "خدمات إضافية",
				description: "خدمات متقدمة لتطوير موقعك الإلكتروني وتحسين أدائه",
				list: [
					{
						title: "تصميم شعار",
						description: "تصميم شعار احترافي لعلامتك التجارية",
						price: "من 50 دينار",
					},
					{
						title: "كتابة المحتوى",
						description: "كتابة محتوى احترافي ومحسن لمحركات البحث",
						price: "من 100 دينار",
					},
					{
						title: "التسويق الرقمي",
						description: "خدمات التسويق عبر وسائل التواصل الاجتماعي",
						price: "من 200 دينار شهرياً",
					},
					{
						title: "الصيانة الشهرية",
						description: "صيانة دورية وتحديثات أمنية للموقع",
						price: "من 30 دينار شهرياً",
					},
				],
			},
			testimonials: {
				title: "ماذا يقول عملاؤنا؟",
				list: [
					{
						name: "أحمد محمد",
						company: "شركة التقنيات المتقدمة",
						text: "موقع رائع وخدمة ممتازة، زادت مبيعاتنا بنسبة 150%",
					},
					{
						name: "فاطمة العلي",
						company: "مجموعة الابتكار التجارية",
						text: "فريق محترف وملتزم بالمواعيد، النتيجة فاقت توقعاتي",
					},
					{
						name: "وليد السعدي",
						company: "منصة التعليم الذكي",
						text: "تصميم عصري وسرعة في التحميل، عملاؤنا معجبون جداً",
					},
				],
			},
			cta: {
				title: "جاهز لبدء مشروعك؟",
				description:
					"تواصل معنا اليوم واحصل على استشارة مجانية لموقعك الإلكتروني",
				buttons: {
					getQuote: "احصل على عرض سعر",
					contactUs: "تواصل معنا",
				},
			},
		},
		pricingCalculator: {
			modalTitle: "حاسبة أسعار المواقع",
			close: "إغلاق",
			step: "الخطوة",
			of: "من",
			percent: "%",
			websiteTypeTitle: "ما نوع الموقع الذي تريده؟",
			websiteTypes: {
				corporate: "موقع شركة",
				ecommerce: "متجر إلكتروني",
				portfolio: "معرض أعمال",
				blog: "مدونة",
				from: "من",
				dinar: "دينار",
			},
			next: "التالي",
			previous: "السابق",
			detailsTitle: "تفاصيل الموقع",
			pagesLabel: "عدد الصفحات المطلوبة",
			pagesPlaceholder: "مثال: 5",
			pagesNote: "50 دينار لكل صفحة إضافية",
			featuresLabel: "الميزات المطلوبة",
			featureNames: {
				cms: "نظام إدارة المحتوى",
				seo: "تحسين محركات البحث",
				analytics: "تحليلات وإحصائيات",
				social: "تكامل وسائل التواصل",
				multilang: "متعدد اللغات",
				mobileApp: "تطبيق محمول",
				payment: "بوابة دفع",
				booking: "نظام حجز",
			},
			featurePrice: "+{price} دينار",
			designTimelineTitle: "التصميم والجدول الزمني",
			designLabel: "نوع التصميم",
			designNames: {
				template: "تصميم من قالب",
				custom: "تصميم مخصص",
				premium: "تصميم متميز",
			},
			designFree: "مجاناً",
			designPrice: "+{price} دينار",
			timelineLabel: "الجدول الزمني",
			timelineNormal: "عادي (2-4 أسابيع)",
			timelineNormalNote: "+20% من السعر الأساسي",
			timelineUrgent: "عاجل (1-2 أسبوع)",
			timelineUrgentNote: "+50% من السعر الأساسي",
			estimatedPriceTitle: "السعر المقدر لموقعك",
			estimatedPriceNote: "هذا السعر تقديري وقد يختلف حسب المتطلبات النهائية",
			summaryTitle: "ملخص طلبك:",
			summary: {
				websiteType: "• نوع الموقع: ",
				pages: "• عدد الصفحات: ",
				features: "• الميزات: ",
				design: "• التصميم: ",
				timeline: "• الجدول الزمني: ",
			},
			summaryUrgent: "عاجل",
			summaryNormal: "عادي",
			contact: {
				name: "الاسم الكامل",
				email: "البريد الإلكتروني",
				phone: "رقم الهاتف",
				company: "اسم الشركة (اختياري)",
			},
			getQuote: "احصل على عرض السعر",
		},
		qrSolution: {
			hero: {
				title: "حلول QR الذكية",
				description: "ثورة تقنية تحول عملك وتوفر آلاف الدنانير سنوياً",
				cta: {
					startSaving: "ابدأ التوفير الآن",
					viewDemo: "شاهد العرض التوضيحي",
				},
				savings: {
					title: "💰 توفير مضمون:",
					items: [
						"أكواد QR عالية الجودة",
						"تصميم متجاوب مع جميع الأجهزة",
						"لوحة تحكم متقدمة",
						"إشعارات فورية",
						"تحليلات وتقارير",
						"دعم فني مستمر",
					],
				},
				statsTitle: "دينار للحل الكامل",
				statsDescription: "وفر آلاف الدنانير سنوياً واكسب عملاء أكثر",
			},
			stats: [
				{ number: "50K+", label: "عملية مسح شهرياً" },
				{ number: "85%", label: "زيادة متوسط المبيعات" },
				{ number: "60%", label: "توفير في التكاليف" },
				{ number: "99.9%", label: "وقت تشغيل النظام" },
			],
			solutions: {
				title: "حلولنا الثلاثة المتطورة",
				description:
					"ثلاثة حلول ذكية تحول عملك إلى تجربة رقمية متطورة وتوفر عليك آلاف الدنانير",
				items: [
					{
						title: "QR Menu - قائمة الطعام الذكية",
						description:
							"قائمة طعام رقمية تفاعلية تُعرض عند مسح الكود، مع إمكانية التقييم واستدعاء النادل",
						featuresTitle: "✨ المميزات:",
						features: [
							"قوائم طعام تفاعلية وجذابة",
							"تصاميم متعددة (عصري، كلاسيكي، مخصص)",
							"نظام تقييمات العملاء",
							"زر استدعاء النادل المباشر",
							"تحديث فوري للأسعار والعروض",
							"دعم متعدد اللغات",
						],
						benefitsTitle: "💰 الفوائد المالية:",
						benefits: [
							"توفير تكاليف طباعة القوائم",
							"تحديث فوري للقائمة",
							"تجربة عملاء متطورة",
							"تقليل وقت الانتظار",
						],
						price: "من 199 دينار",
						cta: "اطلب الآن",
						scanCode: "أمسح الكود لتجربه النظام",
					},
					{
						title: "QR Ordering - نظام الطلبات الذكي",
						description:
							"نظام طلبات متكامل للفنادق والمطاعم يوفر آلاف الدنانير سنوياً من تكاليف التشغيل",
						featuresTitle: "✨ المميزات:",
						features: [
							"طلبات مباشرة من الغرف والطاولات",
							"لوحة تحكم متقدمة للإدارة",
							"إشعارات فورية للطلبات",
							"تتبع حالة الطلب في الوقت الفعلي",
							"تكامل مع أنظمة الدفع",
							"تقارير مبيعات تفصيلية",
						],
						benefitsTitle: "💰 الفوائد المالية:",
						benefits: [
							"توفير 60% من تكاليف الموظفين",
							"زيادة المبيعات بنسبة 40%",
							"تقليل الأخطاء البشرية",
							"خدمة عملاء 24/7 بدون موظفين",
						],
						price: "من 599 دينار",
						cta: "اطلب الآن",
					},
					{
						title: "QR Offers - العروض الذكية",
						description:
							"نظام عروض ديناميكي مع عداد تنازلي يزيد المبيعات ويخلق إحساساً بالإلحاح لدى العملاء",
						featuresTitle: "✨ المميزات:",
						features: [
							"عروض مع عداد تنازلي مثير",
							"لوحة تحكم شاملة للإدارة",
							"إضافة وحذف العروض بسهولة",
							"تخصيص كامل للتصميم",
							"إحصائيات مفصلة للعروض",
							"إشعارات تلقائية للعملاء",
						],
						benefitsTitle: "💰 الفوائد المالية:",
						benefits: [
							"زيادة المبيعات بنسبة 70%",
							"جذب عملاء جدد",
							"تحفيز الشراء السريع",
							"بناء قاعدة عملاء مخلصين",
						],
						price: "من 299 دينار",
						cta: "اطلب الآن",
					},
				],
			},
			features: {
				title: "لماذا تختار حلول QR من سولڤنير؟",
				description: "تقنية متطورة تحول عملك وتوفر عليك المال والوقت والجهد",
				items: [
					{
						title: "تقنية QR متطورة",
						description:
							"أكواد QR عالية الجودة تعمل مع جميع الهواتف الذكية بسرعة فائقة",
					},
					{
						title: "توفير مالي هائل",
						description:
							"وفر آلاف الدنانير سنوياً من تكاليف التشغيل والموظفين والطباعة",
					},
					{
						title: "زيادة المبيعات",
						description:
							"زيادة مؤكدة في المبيعات بنسبة تصل إلى 70% خلال الشهر الأول",
					},
					{
						title: "إشعارات فورية",
						description:
							"تلقي إشعارات فورية لجميع الطلبات والتفاعلات مع عملائك",
					},
					{
						title: "تحكم كامل",
						description: "لوحة تحكم متقدمة لإدارة جميع جوانب نظام QR الخاص بك",
					},
					{
						title: "تحليلات ذكية",
						description:
							"تقارير مفصلة وإحصائيات دقيقة لمساعدتك في اتخاذ قرارات أفضل",
					},
				],
			},
			testimonials: {
				title: "قصص نجاح حقيقية",
				description:
					"شاهد كيف غيرت حلول QR أعمال عملائنا ووفرت عليهم آلاف الدنانير",
				items: [
					{
						name: "أحمد الخالدي",
						company: "مطعم الأصالة",
						text: "نظام QR Menu وفر علينا 3000 دينار سنوياً من تكاليف الطباعة، والعملاء يحبون التجربة الجديدة!",
						savings: "توفير 3000 دينار سنوياً",
						rating: 5,
					},
					{
						name: "فاطمة العلي",
						company: "فندق الضيافة",
						text: "نظام QR Ordering غير حياة فندقنا! وفرنا 8 موظفين وزادت مبيعاتنا 45% في شهرين فقط",
						savings: "توفير 8 موظفين + زيادة 45%",
						rating: 5,
					},
					{
						name: "محمد مساد",
						company: "كافيه 5ستارز",
						text: "QR Offers زاد مبيعاتنا 80% خلال شهر واحد! العملاء متحمسون للعروض مع العداد التنازلي",
						savings: "زيادة المبيعات 80%",
						rating: 5,
					},
				],
			},
			additionalServicesInfo: {
				title: "خدمات إضافية",
				description: "خدمات متكاملة لتطوير نظام QR الخاص بك",
			},
			additionalServices: [
				{
					title: "تصميم أكواد QR مخصصة",
					description: "أكواد QR بتصميم علامتك التجارية وألوانك الخاصة",
					price: "من 50 دينار",
				},
				{
					title: "تكامل مع أنظمة POS",
					description: "ربط نظام QR مع أنظمة نقاط البيع الحالية",
					price: "من 200 دينار",
				},
				{
					title: "تطبيق محمول مخصص",
					description: "تطبيق محمول خاص بعلامتك التجارية",
					price: "من 800 دينار",
				},
				{
					title: "التسويق الرقمي للـ QR",
					description: "حملات تسويقية لتعريف العملاء بنظام QR",
					price: "من 300 دينار شهرياً",
				},
			],
			cta: {
				title: "جاهز لتوفير آلاف الدنانير؟",
				description:
					"ابدأ رحلة التحول الرقمي اليوم ووفر على عملك آلاف الدنانير سنوياً مع حلول QR الذكية",
				guarantee: {
					title: "🎯 ضمان النتائج:",
					items: [
						"✅ توفير مضمون في التكاليف خلال 30 يوم",
						"✅ زيادة المبيعات أو نعيد أموالك",
						"✅ دعم فني مجاني لمدة 6 أشهر",
						"✅ تدريب مجاني لفريق العمل",
					],
				},
				buttons: {
					startSaving: "ابدأ التوفير الآن - مجاناً",
					bookConsultation: "احجز استشارة مجانية",
				},
				note: "💡 استشارة مجانية لمدة 30 دقيقة لتقييم احتياجاتك",
			},
		},
		// Services
		services: {
			title: "خدماتنا",
			description:
				"نقدم حلول تكنولوجية متطورة مصممة لتحويل عملك ودفع الابتكار.",
			aiAutomation: {
				title: "حلول أتمتة الذكاء الاصطناعي",
				description:
					"حول عمليات عملك بالأتمتة الذكية المدعومة بالذكاء الاصطناعي المتطور. بسط العمليات، قلل التكاليف، واكتشف مستويات جديدة من الإنتاجية.",
				features: {
					title: "الميزات الرئيسية",
					processAutomation: {
						title: "أتمتة العمليات",
						description:
							"أتمت المهام المتكررة وسير العمل لزيادة الكفاءة وتقليل الأخطاء البشرية.",
					},
					predictiveAnalytics: {
						title: "التحليلات التنبؤية",
						description:
							"استفد من الذكاء الاصطناعي للتنبؤ بالاتجاهات واتخاذ قرارات مدفوعة بالبيانات لعملك.",
					},
					intelligentSecurity: {
						title: "الأمان الذكي",
						description:
							"أنظمة أمان مدعومة بالذكاء الاصطناعي تتكيف وتتعلم لحماية أصول عملك.",
					},
				},
				cta: {
					title: "مستعد لأتمتة عملك؟",
					description:
						"دعنا نناقش كيف يمكن لأتمتة الذكاء الاصطناعي تحويل عملياتك.",
					button: "ابدأ اليوم",
				},
			},
			eMenu: {
				title: "حلول الQR",
				description:
					"حلول قوائم رقمية ثورية للمطاعم وشركات الضيافة. عزز تجربة العملاء مع تكامل رمز الاستجابة السريعة وتحديثات القائمة الفورية.",
				features: {
					title: "الميزات",
					qrCode: {
						title: "تكامل رمز الاستجابة السريعة",
						description:
							"وصول للقائمة بدون لمس من خلال رموز الاستجابة السريعة للأمان والراحة المحسنة.",
					},
					mobileOptimized: {
						title: "محسن للجوال",
						description:
							"تصميم متجاوب يعمل بشكل مثالي على جميع الأجهزة المحمولة والأجهزة اللوحية.",
					},
					analytics: {
						title: "لوحة التحليلات",
						description: "تتبع تفضيلات العملاء وأداء القائمة مع تحليلات مفصلة.",
					},
				},
				cta: {
					title: "حول تجربة مطعمك",
					description:
						"انضم لمئات المطاعم التي تستخدم بالفعل حلول القوائم الرقمية لدينا.",
					button: "اطلب عرض توضيحي",
				},
			},

			landingWebsite: {
				title: "تطوير المواقع الالكترونية",
				description:
					"صفحات هبوط ومواقع ويب احترافية مصممة لتحويل الزوار إلى عملاء. تصميم حديث، تحسين محركات البحث، وتطوير يركز على الأداء.",
				features: {
					title: "ما نقدمه",
					performance: {
						title: "أداء عالي",
						description:
							"أوقات تحميل سريعة البرق وأداء محسن لتجربة مستخدم أفضل.",
					},
					seo: {
						title: "محسن لمحركات البحث",
						description:
							"مبني بأفضل ممارسات تحسين محركات البحث لمساعدة موقعك على ترتيب أعلى في نتائج البحث.",
					},
					responsive: {
						title: "تصميم متجاوب",
						description:
							"نهج تصميم يركز على الجوال أولاً يضمن عرض مثالي على جميع الأجهزة وأحجام الشاشات.",
					},
				},
				cta: {
					title: "مستعد لإطلاق موقعك؟",
					description: "دعنا ننشئ موقع ويب مذهل يحقق نتائج لعملك.",
					button: "ابدأ مشروعك",
				},
			},
		},

		// Blog
		blog: {
			title: "أحدث الرؤى",
			description:
				"ابق محدثاً مع أحدث الاتجاهات في التكنولوجيا والذكاء الاصطناعي والابتكار الرقمي.",
			readMore: "اقرأ المزيد",
			articles: [
				{
					title: "مستقبل أتمتة الذكاء الاصطناعي في الأعمال",
					excerpt:
						"اكتشف كيف يثور الذكاء الاصطناعي في عمليات الأعمال وما يعنيه لمستقبل العمل.",
					date: "15 ديسمبر 2024",
					category: "الذكاء الاصطناعي والتكنولوجيا",
					image: "/AIAutomationTheFutureOfWork.jpg",
				},
				{
					title: "ثورة القائمة الرقمية: تحويل تجربة المطعم",
					excerpt:
						"كيف تغير قوائم رمز الاستجابة السريعة والحلول الرقمية صناعة الضيافة بعد الجائحة.",
					date: "10 ديسمبر 2024",
					category: "الحلول الرقمية",
					image: "/detail_main_m_253.webp",
				},
				{
					title: "تحسين صفحة الهبوط: تحويل الزوار إلى عملاء",
					excerpt:
						"الاستراتيجيات الأساسية وأفضل الممارسات لإنشاء صفحات هبوط عالية التحويل تدفع نمو الأعمال.",
					date: "5 ديسمبر 2024",
					category: "تطوير الويب",
					image:
						"/Landing-Page-Optimization-Strategy-For-Better-Conversions-smaller.webp",
				},
			],
		},

		// About
		about: {
			whoWe: {
				title: "من نحن",
				intro: {
					p1: "شركة سولڤنير هي شركة رائدة في مجال تطوير البرمجيات والحلول التقنية، تأسست بهدف تقديم خدمات عالية الجودة في البرمجة وتطوير المواقع الإلكترونية والتطبيقات.",
					p2: "نحن نؤمن بأن التكنولوجيا يجب أن تكون في خدمة الإنسان، ولذلك نسعى دائماً لتطوير حلول مبتكرة تلبي احتياجات عملائنا وتساعدهم على تحقيق أهدافهم.",
				},
				cards: {
					vision: {
						title: "رؤيتنا",
						description:
							"أن نكون الشركة الرائدة في تطوير البرمجيات في المنطقة العربية، ونساهم في التحول الرقمي للمؤسسات والشركات.",
					},
					mission: {
						title: "مهمتنا",
						description:
							"تقديم حلول برمجية مبتكرة وعالية الجودة تساعد عملائنا على النمو والازدهار في العصر الرقمي.",
					},
				},
			},
			process: {
				title: { main: "منهجية", highlight: "عملنا" },
				description:
					"نتبع منهجية علمية مدروسة لضمان نجاح مشروعك من البداية حتى النهاية",
				stageLabel: "المرحلة",
				steps: [
					{
						title: "الاستشارة والتخطيط",
						description:
							"نبدأ بفهم احتياجاتك وأهدافك من خلال جلسات استشارية مفصلة لوضع خطة عمل واضحة",
						details: [
							"تحليل المتطلبات",
							"دراسة السوق",
							"وضع الاستراتيجية",
							"تحديد الميزانية والجدول الزمني",
						],
						duration: "1-2 أسبوع",
					},
					{
						title: "التصميم والنماذج الأولية",
						description:
							"نصمم واجهات المستخدم ونماذج أولية تفاعلية لضمان تجربة مستخدم مثالية",
						details: [
							"تصميم واجهات المستخدم",
							"النماذج الأولية",
							"اختبار تجربة المستخدم",
							"المراجعة والتعديل",
						],
						duration: "2-3 أسابيع",
					},
					{
						title: "التطوير والبرمجة",
						description:
							"فريقنا المتخصص يحول التصاميم إلى كود عالي الجودة باستخدام أحدث التقنيات",
						details: [
							"البرمجة الأمامية",
							"البرمجة الخلفية",
							"تكامل قواعد البيانات",
							"اختبارات مستمرة",
						],
						duration: "4-8 أسابيع",
					},
					{
						title: "الاختبار وضمان الجودة",
						description:
							"اختبارات شاملة لضمان عمل المشروع بأفضل أداء وخلوه من الأخطاء",
						details: [
							"اختبارات الوظائف",
							"اختبارات الأداء",
							"اختبارات الأمان",
							"اختبارات المستخدم",
						],
						duration: "1-2 أسبوع",
					},
					{
						title: "النشر والإطلاق",
						description:
							"نشر المشروع على الخوادم المناسبة مع ضمان الاستقرار والأداء العالي",
						details: [
							"إعداد الخوادم",
							"نشر التطبيق",
							"اختبارات ما بعد النشر",
							"التدريب على الاستخدام",
						],
						duration: "3-5 أيام",
					},
					{
						title: "الدعم والصيانة",
						description:
							"دعم مستمر وصيانة دورية لضمان استمرارية عمل مشروعك بأفضل حال",
						details: [
							"دعم فني 24/7",
							"تحديثات أمنية",
							"تحسينات الأداء",
							"إضافة ميزات جديدة",
						],
						duration: "مستمر",
					},
				],
				cta: {
					title: "مستعد لبدء رحلتك معنا؟",
					description: "دعنا نحول فكرتك إلى واقع رقمي متميز",
					button: "ابدأ مشروعك الآن",
				},
			},
			faq: {
				title: { main: "الأسئلة", highlight: "الشائعة" },
				description:
					"إجابات شاملة على أكثر الأسئلة شيوعاً حول خدماتنا وعملية التطوير",
				searchPlaceholder: "ابحث في الأسئلة الشائعة...",
				labels: {
					popular: "شائع",
					helpfulQuestion: "هل كانت هذه الإجابة مفيدة؟",
					yes: "نعم",
					no: "لا",
				},
				categories: {
					all: "جميع الأسئلة",
					development: "التطوير",
					pricing: "الأسعار",
					support: "الدعم الفني",
					technical: "التقنيات",
					security: "الأمان",
					payment: "الدفع",
					marketing: "التسويق",
					management: "الإدارة",
				},
				empty: {
					title: "لم نجد أي نتائج",
					description: "جرب البحث بكلمات مختلفة أو تصفح الفئات المختلفة",
					reset: "إعادة تعيين البحث",
				},
				contactCta: {
					title: "لم تجد إجابة لسؤالك؟",
					description: "فريق الدعم الفني متاح 24/7 للإجابة على جميع استفساراتك",
					chat: "دردشة مباشرة",
					call: "اتصل بنا",
					email: "راسلنا",
				},
				faqs: [
					{
						id: "1",
						question: "كم يستغرق تطوير الموقع الإلكتروني؟",
						answer:
							"يعتمد وقت التطوير على تعقيد المشروع وعدد الصفحات والميزات المطلوبة. عادة ما يستغرق الموقع البسيط من 2-3 أسابيع، بينما المواقع المعقدة قد تحتاج من 6-8 أسابيع. نقدم جدولاً زمنياً مفصلاً بعد دراسة متطلباتك.",
						category: "development",
						popular: true,
					},
					{
						id: "2",
						question: "هل تقدمون خدمة الاستضافة والدومين؟",
						answer:
							"نعم، نقدم خدمات الاستضافة والدومين كجزء من باقاتنا. نوفر استضافة عالية الجودة مع ضمان وقت تشغيل 99.9% وشهادات SSL مجانية. كما نساعدك في اختيار واحجز الدومين المناسب لعملك.",
						category: "support",
						popular: true,
					},
					{
						id: "3",
						question: "هل يمكنني تعديل محتوى الموقع بنفسي؟",
						answer:
							"بالطبع! جميع مواقعنا تأتي مع لوحة تحكم سهلة الاستخدام تمكنك من تعديل المحتوى، إضافة صفحات جديدة، رفع الصور، وإدارة المنتجات (في حالة المتاجر الإلكترونية). كما نقدم تدريباً مجانياً على استخدام لوحة التحكم.",
						category: "technical",
						popular: true,
					},
					{
						id: "4",
						question: "ما هي تكلفة تطوير متجر إلكتروني؟",
						answer:
							"تبدأ أسعار المتاجر الإلكترونية من 799 دينار للمتجر البسيط وتصل إلى 2999 دينار للمتاجر المتقدمة. السعر يشمل التصميم، البرمجة، تكامل بوابات الدفع، نظام إدارة المخزون، والدعم الفني. يمكنك استخدام حاسبة الأسعار للحصول على تقدير دقيق.",
						category: "pricing",
						popular: true,
					},
					{
						id: "5",
						question: "هل تدعمون بوابات الدفع المحلية؟",
						answer:
							"نعم، ندعم جميع بوابات الدفع المحلية والعالمية مثل فيزا، ماستركارد، PayPal، وبوابات الدفع المحلية في الأردن والدول العربية. نضمن أعلى معايير الأمان في معالجة المدفوعات مع شهادات PCI DSS.",
						category: "payment",
						popular: false,
					},
					{
						id: "6",
						question: "هل تقدمون خدمة الصيانة والدعم الفني؟",
						answer:
							"نعم، نقدم خدمة دعم فني شاملة 24/7 تشمل الصيانة الدورية، التحديثات الأمنية، النسخ الاحتياطية، ومراقبة الأداء. لدينا باقات صيانة مختلفة تبدأ من 30 دينار شهرياً حسب حجم ومتطلبات موقعك.",
						category: "support",
						popular: false,
					},
					{
						id: "7",
						question: "هل المواقع متوافقة مع الهواتف المحمولة؟",
						answer:
							"جميع مواقعنا مصممة بتقنية Responsive Design لتعمل بشكل مثالي على جميع الأجهزة (هواتف، أجهزة لوحية، أجهزة كمبيوتر). نختبر المواقع على مختلف الأجهزة والمتصفحات لضمان تجربة مستخدم ممتازة.",
						category: "technical",
						popular: true,
					},
					{
						id: "8",
						question: "كيف تضمنون أمان الموقع؟",
						answer:
							"نطبق أعلى معايير الأمان السيبراني بما في ذلك شهادات SSL، تشفير البيانات، حماية من هجمات DDoS، تحديثات أمنية دورية، ومراقبة مستمرة للتهديدات. كما نقوم بعمل نسخ احتياطية يومية لضمان سلامة بياناتك.",
						category: "security",
						popular: false,
					},
					{
						id: "9",
						question: "هل تقدمون خدمات التسويق الرقمي؟",
						answer:
							"نعم، نقدم خدمات تسويق رقمي شاملة تشمل تحسين محركات البحث (SEO)، إعلانات جوجل، إعلانات فيسبوك وإنستغرام، إدارة وسائل التواصل الاجتماعي، والتسويق عبر البريد الإلكتروني. فريقنا المتخصص يساعدك في الوصول لجمهورك المستهدف.",
						category: "marketing",
						popular: false,
					},
					{
						id: "10",
						question: "ما هي طرق الدفع المتاحة؟",
						answer:
							"نقبل الدفع بعدة طرق: التحويل البنكي، الدفع النقدي، بطاقات الائتمان، وPayPal. يمكن الدفع على دفعات حسب مراحل المشروع: 50% عند البدء، 30% عند التسليم الأولي، و20% عند التسليم النهائي.",
						category: "payment",
						popular: false,
					},
					{
						id: "11",
						question: "هل تقدمون ضمان على الخدمات؟",
						answer:
							"نعم، نقدم ضمان شامل لمدة 6 أشهر على جميع خدماتنا يشمل إصلاح أي أخطاء برمجية، تحديثات مجانية، ودعم فني كامل. كما نضمن رضاك التام عن النتيجة النهائية أو نعيد لك أموالك.",
						category: "support",
						popular: false,
					},
					{
						id: "12",
						question: "كيف يمكنني تتبع تقدم مشروعي؟",
						answer:
							"نوفر لك لوحة تحكم خاصة لتتبع تقدم مشروعك في الوقت الفعلي، مع تحديثات دورية عبر البريد الإلكتروني والواتساب. كما نقوم بعقد اجتماعات دورية لمراجعة التقدم والحصول على ملاحظاتك.",
						category: "management",
						popular: false,
					},
				],
			},
		},

		reachout: {
			title: "تواصل معنا",
			subtitle:
				"نحن هنا لمساعدتك في تحقيق أهدافك الرقمية. تواصل معنا اليوم لمناقشة مشروعك",
			phone: { phone: "+966 50 123 4567", title: "اتصل بنا" },
			email: { email: "info@company.com", title: "راسلنا" },
			location: { location: "عمان,الاردن", title: "عنواننا" },
			website: { website: "www.company.com", title: "موقعنا" },
			whyChooseUs: "لماذا تختارنا؟",
			reasons: [
				{
					title: "خبرة طويلة",
					description: "خبرة أكثر من 10 سنوات في المجال",
					icon: Clock,
				},
				{
					title: "فريق محترف",
					description: "فريق متخصص ومحترف",
					icon: Users,
				},
				{
					title: "حلول مبتكرة",
					description: "حلول مبتكرة ومتطورة",
					icon: Lightbulb,
				},
				{
					title: "دعم مستمر",
					description: "دعم فني على مدار الساعة",
					icon: Headphones,
				},
				{
					title: "أسعار تنافسية",
					description: "أسعار تنافسية ومناسبة",
					icon: DollarSign,
				},
			],
			startProject: "ابدأ مشروعك معنا",
		},
		// Contact
		contact: {
			title: "اطلب عرض توضيحي",
			description:
				"يرجى تعبئة الحقول المطلوبة أدناه. سنقوم بالرد في غضور يوم عمل واحد.",
			form: {
				title: "تواصل معنا",
				name: " الاسم",
				namePlaceholder: "",
				companyName: "اسم الشركة",
				companyNamePlaceholder: "",
				mobile: "رقم الهاتف",
				mobilePlaceholder: "",
				country: "الدولة",
				countryPlaceholder: "",
				email: "بريدك الإلكتروني",
				emailPlaceholder: "",
				gdprTitle: "اتفاقية GDPR",
				gdprText:
					"أوافق على حفظ الموقع للمعلومات التي تم تسجيلها ليتم الرد على جميع الاستفسارات المطلوبة.",
				send: "إرسال",
			},
			page: {
				title: "تواصل معنا",
				description:
					"نحن هنا لمساعدتك. تواصل معنا اليوم ودعنا نحول أفكارك إلى واقع رقمي",
				form: {
					title: "أرسل لنا رسالة",
					firstName: { label: "الاسم الأول", placeholder: "أدخل اسمك الأول" },
					lastName: { label: "الاسم الأخير", placeholder: "أدخل اسمك الأخير" },
					email: {
						label: "البريد الإلكتروني",
						placeholder: "أدخل بريدك الإلكتروني",
					},
					phone: { label: "رقم الهاتف", placeholder: "أدخل رقم هاتفك" },
					subject: { label: "الموضوع", placeholder: "موضوع الرسالة" },
					message: { label: "الرسالة", placeholder: "اكتب رسالتك هنا..." },
					submit: "إرسال الرسالة",
				},
				info: {
					title: "معلومات التواصل",
					email: { label: "البريد الإلكتروني", value: "info@solvenear.com" },
					phone: { label: "رقم الهاتف", value: "+962 7 9999 9999" },
					address: { label: "العنوان", value: "عمان، الأردن" },
					hours: {
						label: "ساعات العمل",
						value: "الأحد - الخميس: 9:00 - 18:00",
					},
				},
				reasons: {
					title: "لماذا تختار سولڤنير ؟",
					items: [
						"خبرة واسعة في تطوير البرمجيات",
						"فريق محترف ومتخصص",
						"دعم فني متواصل",
						"أسعار تنافسية",
					],
				},
			},
		},

		// Footer
		footer: {
			followUs: "تابعنا",
			contactUs: "تواصل معنا",
			quickLinks: "روابط سريعة",
			aboutUs: "سولڤنير",
			phone: "+962 77 939 3847",
			email: "info@solvenear.com",
			website: "www.solvenear.com",
			services: "خدماتنا",
			createWebsites: "إنشاء المواقع الإلكترونية",
			createStores: "إنشاء المتاجر الإلكترونية",
			mobileApps: "تطبيقات الهواتف الذكية",
			cloudSolutions: "الحلول السحابية",
			etoProgram: "برنامج إيتــو برو® للقوة الإلكترونية",
			schoolProgram: "تسديــد® برنامج محاسبة متكامل للمدارس الخاصة",
			aboutUsText:
				"شركة رائدة في تطوير البرمجيات والحلول التقنية المتقدمة من قلب عمان إلى الوطن العربي",
			whoWeAre: "من نحن",
			contactUsFooter: "تواصل معنا",
			copyright: "© 2024 سولڤنير. جميع الحقوق محفوظة",
			madeInJordan: "صنع في عمان، الأردن",
			slogan:
				"من قلب عمان إلى الوطن العربي، الجودة والابتكار في صناعة البرمجيات والمواقع الإلكترونية",
		},

		// Common
		common: {
			loading: "جاري التحميل...",
			comingSoon: "قريباً",
			stayTuned: "نحن نعمل على هذا القسم. ترقبوا!",
		},
	},
};

export function getTranslation(locale: Locale) {
	return translations[locale] || translations.en;
}
