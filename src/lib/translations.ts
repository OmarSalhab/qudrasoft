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
						contact: "info@QudraSoft.com",
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
				badge: "Leading software development company since 2020",
				mainTitle: {
					companyName: "QudraSoft Company",
					subtitle: "for Software Development",
				},
				subtitle: {
					main: "From the heart of Amman to the Arab world, quality and innovation in software and website development",
					description:
						"We transform your ideas into advanced digital solutions that help you succeed in the digital age",
				},
				buttons: {
					startProject: "Start Your Project Now",
					watchWork: "Watch Our Work",
				},
				stats: {
					completedProjects: {
						number: "500+",
						label: "Completed Projects",
					},
					satisfiedClients: {
						number: "200+",
						label: "Satisfied Clients",
					},
					yearsExperience: {
						number: "5+",
						label: "Years Experience",
					},
					technicalSupport: {
						number: "24/7",
						label: "Technical Support",
					},
				},
				videoModal: {
					title: "Introductory Video of Our Work",
					description: "Video will be added soon",
				},
			},
			stats: {
				title: {
					main: "Numbers that speak of our",
					highlight: "success",
				},
				description:
					"We are proud of what we have achieved and our clients' trust over the past years",
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
						link: "/services/websites",
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
						link: "/services/apps",
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
						link: "/services/ecommerce",
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
						link: "/services/database",
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
						link: "/services/cloud",
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
						link: "/services/security",
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
					highlight: "QudraSoft",
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
						stats: "More than 50 technical experts",
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
						"Join more than 200 satisfied clients and discover the difference with us",
					buttons: {
						getConsultation: "Get Free Consultation",
						browseWork: "Browse Our Work",
					},
				},
			},

			testimonials: {
				title: {
					main: "What do our",
					highlight: "clients",
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
						text: "I worked with QudraSoft on developing our company's website, and the result exceeded all my expectations. A very professional team committed to deadlines. The website became 300% faster and sales increased by 150%.",
						project: "E-commerce Website",
						results: [
							"150% Sales Increase",
							"300% Speed Improvement",
							"Excellent User Experience",
						],
					},
					{
						name: "Fatima Al-Ali",
						position: "Marketing Director",
						company: "Innovation Business Group",
						image: "/manager-2.jpeg",
						rating: 5,
						text: "QudraSoft developed a customer management application for us and the work was very professional. The team quickly understood our needs and provided innovative solutions. The application is easy to use and greatly improved the sales team's efficiency.",
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
						text: "We chose QudraSoft to develop our e-learning platform, and it was an amazing experience. The team is creative and understanding of modern education requirements. The platform now serves more than 10,000 students with high efficiency.",
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
						text: "The hospital management system developed by QudraSoft completely changed how we work. Operations became more organized and faster, and patient experience improved significantly. The support team is always available and very cooperative.",
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
						text: "We collaborated with QudraSoft on developing the mobile banking app, and the result was exceptional. The app is secure, fast, and easy to use. Active users increased by 200% in just 6 months.",
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
						number: "200+",
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
				title: "E-Menu Solutions",
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
				title: "Landing Website Development",
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
				},
				{
					title: "Digital Menu Revolution: Transforming Restaurant Experience",
					excerpt:
						"How QR code menus and digital solutions are changing the hospitality industry post-pandemic.",
					date: "December 10, 2024",
					category: "Digital Solutions",
				},
				{
					title: "Landing Page Optimization: Converting Visitors to Customers",
					excerpt:
						"Essential strategies and best practices for creating high-converting landing pages that drive business growth.",
					date: "December 5, 2024",
					category: "Web Development",
				},
			],
		},

		reachout: {
			title: "Contact Us",
			subtitle:
				"We are here to help you achieve your digital goals. Contact us today to discuss your project",
			phone: { phone: "+966 50 123 4567", title: "Call Us" },
			email: { email: "info@company.com", title: "Email Us" },
			location: { location: "Amman, Jordan", title: "Our Location" },
			website: { website: "www.company.com", title: "Our Website" },
			whyChooseUs: "Why Choose Us?",
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
		},

		// Footer
		footer: {
			followUs: "Follow Us",
			contactUs: "Contact Us",
			quickLinks: "Quick Links",
			aboutUs: "QudraSoft",
			phone: "+962 77 939 3847",
			email: "info@QudraSoft.com",
			website: "www.QudraSoft.com",
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
			copyright: "© 2024 QudraSoft. All rights reserved",
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
						contact: "info@QudraSoft.com",
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
				badge: "شركة رائدة في تطوير البرمجيات منذ 2020",
				mainTitle: {
					companyName: "شركة قدرةسوفت",
					subtitle: "لتطوير البرمجيات",
				},
				subtitle: {
					main: "من قلب عمان إلى الوطن العربي، الجودة والمشاركة في صناعة البرمجيات والمواقع الإلكترونية",
					description:
						"نحول أفكارك إلى حلول رقمية متطورة تساعدك على النجاح في العصر الرقمي",
				},
				buttons: {
					startProject: "ابدأ مشروعك الآن",
					watchWork: "شاهد أعمالنا",
				},
				stats: {
					completedProjects: {
						number: "500+",
						label: "مشروع مكتمل",
					},
					satisfiedClients: {
						number: "200+",
						label: "عميل راضي",
					},
					yearsExperience: {
						number: "5+",
						label: "سنوات خبرة",
					},
					technicalSupport: {
						number: "24/7",
						label: "دعم فني",
					},
				},
				videoModal: {
					title: "فيديو تعريفي بأعمالنا",
					description: "سيتم إضافة الفيديو قريباً",
				},
			},
			stats: {
				title: {
					main: "أرقام تتحدث عن",
					highlight: "نجاحنا",
				},
				description:
					"نفتخر بما حققناه من إنجازات وثقة عملائنا على مدار السنوات الماضية",
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
						link: "/services/websites",
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
						link: "/services/ecommerce",
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
						link: "/services/database",
						gradient: "from-orange-500 to-red-500",
						bgGradient: "from-orange-500/10 to-red-500/10",
					},
					{
						title: "الحلول السحابية",
						description:
							"نقل أعمالك إلى السحابة مع ضمان الأمان والموثوقية والوصول من أي مكان",
						features: ["نشر سحابي", "نسخ احتياطية", "مقياس مرن", "أمان متقدم"],
						price: "من 199 دينار شهرياً",
						link: "/services/cloud",
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
						link: "/services/security",
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
					highlight: "قدرةسوفت",
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
						stats: "أكثر من 50 خبير تقني",
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
					description: "انضم إلى أكثر من 200 عميل راضي واكتشف الفرق معنا",
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
						text: "تعاملت مع قدرةسوفت في تطوير موقع شركتنا الإلكتروني، والنتيجة فاقت كل توقعاتي. فريق محترف جداً وملتزم بالمواعيد. الموقع أصبح أسرع بـ 300% وزادت المبيعات بنسبة 150%.",
						project: "موقع التجارة الإلكترونية",
						results: [
							"زيادة المبيعات 150%",
							"تحسن السرعة 300%",
							"تجربة مستخدم ممتازة",
						],
					},
					{
						name: "فاطمة العلي",
						position: "مديرة التسويق",
						company: "مجموعة الابتكار التجارية",
						image: "/manager-2.jpeg",
						rating: 5,
						text: "قدرةسوفت طوروا لنا تطبيق إدارة العملاء وكان العمل احترافي جداً. الفريق فهم احتياجاتنا بسرعة وقدم حلول مبتكرة. التطبيق سهل الاستخدام وحسن من كفاءة فريق المبيعات بشكل كبير.",
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
						text: "اختارنا قدرةسوفت لتطوير منصة التعليم الإلكتروني الخاصة بنا، وكانت تجربة رائعة. الفريق مبدع ومتفهم لمتطلبات التعليم الحديث. المنصة تخدم الآن أكثر من 10,000 طالب بكفاءة عالية.",
						project: "منصة التعليم الإلكتروني",
						results: ["10,000+ طالب نشط", "معدل إكمال 90%", "تقييم 4.8/5"],
					},
					{
						name: "سارة الزهراني",
						position: "مديرة العمليات",
						company: "مستشفى الرعاية المتقدمة",
						image: "/manger-4.jpeg",
						rating: 5,
						text: "نظام إدارة المستشفى الذي طورته قدرةسوفت غير طريقة عملنا تماماً. أصبحت العمليات أكثر تنظيماً وسرعة، وتحسنت تجربة المرضى بشكل ملحوظ. فريق الدعم متاح دائماً ومتعاون جداً.",
						project: "نظام إدارة المستشفى",
						results: ["تحسن الخدمة 70%", "تقليل الأخطاء 85%", "رضا المرضى 92%"],
					},
					{
						name: "محمد الأحمد",
						position: "مدير تقنية المعلومات",
						company: "البنك الرقمي المتطور",
						image: "/manager-5.jpeg",
						rating: 5,
						text: "تعاونا مع قدرةسوفت في تطوير تطبيق البنك المحمول، والنتيجة كانت استثنائية. التطبيق آمن وسريع وسهل الاستخدام. عدد المستخدمين النشطين زاد بنسبة 200% خلال 6 أشهر فقط.",
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
						number: "200+",
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
				title: "حلول القائمة الإلكترونية",
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
				title: "تطوير موقع الهبوط",
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

		// FAQ
		faq: {
			title: "الأسئلة الشائعة",
			description: "اعثر على إجابات للأسئلة الشائعة حول خدماتنا وحلولنا.",
			questions: [
				{
					question: "ما هي الخدمات التي تقدمها إي-سوليوشنز؟",
					answer:
						"نحن متخصصون في أتمتة الذكاء الاصطناعي، وحلول القائمة الإلكترونية للمطاعم، وتطوير مواقع الهبوط. يقدم فريقنا حلولاً شاملة مخصصة لاحتياجات عملك.",
				},
				{
					question: "كم من الوقت يستغرق إكمال المشروع؟",
					answer:
						"تختلف الجداول الزمنية للمشاريع حسب التعقيد والنطاق. مشاريع أتمتة الذكاء الاصطناعي تستغرق عادة 4-8 أسابيع، حلول القائمة الإلكترونية 2-4 أسابيع، ومواقع الهبوط 1-3 أسابيع.",
				},
				{
					question: "هل تقدمون الدعم والصيانة المستمرة؟",
					answer:
						"نعم، نقدم حزم دعم وصيانة شاملة لجميع حلولنا. يشمل ذلك التحديثات المنتظمة، إصلاح الأخطاء، والدعم التقني.",
				},
				{
					question: "هل يمكنكم التكامل مع الأنظمة الموجودة؟",
					answer:
						"بالطبع! حلولنا مصممة للتكامل بسلاسة مع أنظمتك وسير عملك الموجود. نقوم بتحليل شامل لضمان التوافق.",
				},
				{
					question: "ما هي تكلفة خدماتكم؟",
					answer:
						"تختلف الأسعار حسب متطلبات المشروع والتعقيد. نقدم عروض أسعار مفصلة بعد فهم احتياجاتك المحددة. اتصل بنا للحصول على استشارة مجانية.",
				},
			],
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
				},
				{
					title: "ثورة القائمة الرقمية: تحويل تجربة المطعم",
					excerpt:
						"كيف تغير قوائم رمز الاستجابة السريعة والحلول الرقمية صناعة الضيافة بعد الجائحة.",
					date: "10 ديسمبر 2024",
					category: "الحلول الرقمية",
				},
				{
					title: "تحسين صفحة الهبوط: تحويل الزوار إلى عملاء",
					excerpt:
						"الاستراتيجيات الأساسية وأفضل الممارسات لإنشاء صفحات هبوط عالية التحويل تدفع نمو الأعمال.",
					date: "5 ديسمبر 2024",
					category: "تطوير الويب",
				},
			],
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
		},

		// Footer
		footer: {
			followUs: "تابعنا",
			contactUs: "تواصل معنا",
			quickLinks: "روابط سريعة",
			aboutUs: "قدرةسوفت",
			phone: "+962 77 939 3847",
			email: "info@QudraSoft.com",
			website: "www.QudraSoft.com",
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
			copyright: "© 2024 قدرةسوفت. جميع الحقوق محفوظة",
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
