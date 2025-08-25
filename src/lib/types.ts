export type TranslationType = {
	nav: {
		home: string;
		services: string;
		faq: string;
		careers: string;
		aboutUs: string;
		blog: string;
		contactUs: string;
		languageSwitch: string;
	};

	home: {
		cta: {
			title: string;
			description: string;
			contactOptions: {
				call: {
					title: string;
					description: string;
					contact: string;
				};
				email: {
					title: string;
					description: string;
					contact: string;
				};
				chat: {
					title: string;
					description: string;
					contact: string;
				};
				appointment: {
					title: string;
					description: string;
					contact: string;
				};
			};
			buttons: {
				getQuote: string;
				browseWork: string;
			};
			trustIndicators: {
				freeConsultation: string;
				qualityGuarantee: string;
				continuousSupport: string;
				competitivePricing: string;
			};
		};
		hero: {
			badge: string;
			mainTitle: {
				companyName: string;
				subtitle: string;
			};
			subtitle: {
				main: string;
				description: string;
			};
			buttons: {
				startProject: string;
				watchWork: string;
			};
			stats: {
				completedProjects: {
					number: string;
					label: string;
				};
				satisfiedClients: {
					number: string;
					label: string;
				};
				yearsExperience: {
					number: string;
					label: string;
				};
				technicalSupport: {
					number: string;
					label: string;
				};
			};
			videoModal: {
				title: string;
				description: string;
			};
		};
		stats: {
			title: {
				main: string;
				highlight: string;
			};
			description: string;
			stats: Array<{
				label: string;
				description: string;
				color: string;
			}>;
		};
		services: {
			title: {
				main: string;
				highlight: string;
			};
			description: string;
			services: Array<{
				title: string;
				description: string;
				features: string[];
				price: string;
				link: string;
				gradient: string;
				bgGradient: string;
			}>;
			buttons: {
				requestService: string;
				viewAllServices: string;
			};
		};
		whyUs: {
			title: {
				main: string;
				highlight: string;
			};
			description: string;
			reasons: Array<{
				title: string;
				description: string;
				stats: string;
			}>;
			cta: {
				title: string;
				description: string;
				buttons: {
					getConsultation: string;
					browseWork: string;
				};
			};
		};
		testimonials: {
			title: {
				main: string;
				highlight: string;
			};
			description: string;
			testimonials: Array<{
				name: string;
				position: string;
				company: string;
				image: string;
				rating: number;
				text: string;
				project: string;
				results: string[];
			}>;
			stats: {
				satisfactionRate: {
					number: string;
					label: string;
				};
				satisfiedClients: {
					number: string;
					label: string;
				};
				averageRating: {
					number: string;
					label: string;
				};
				renewalRate: {
					number: string;
					label: string;
				};
			};
		};
	};

	websiteDevelopment: {
		hero: {
			title: string;
			description: string;
			cta: {
				startProject: string;
				viewWork: string;
			};
		};
		features: {
			title: string;
			description: string;
			list: Array<{
				title: string;
				description: string;
			}>;
		};
		pricing: {
			price: number;
			title: string;
			description: string;
			features: string[];
			cta: string;
		};
		additionalServices: {
			title: string;
			description: string;
			list: Array<{
				title: string;
				description: string;
				price: string;
			}>;
		};
		testimonials: {
			title: string;
			list: Array<{
				name: string;
				company: string;
				text: string;
			}>;
		};
		cta: {
			title: string;
			description: string;
			buttons: {
				getQuote: string;
				contactUs: string;
			};
		};
	};

	pricingCalculator: {
		modalTitle: string;
		close: string;
		step: string;
		of: string;
		percent: string;
		websiteTypeTitle: string;
		websiteTypes: {
			corporate: string;
			ecommerce: string;
			portfolio: string;
			blog: string;
			from: string;
			dinar: string;
		};
		next: string;
		previous: string;
		detailsTitle: string;
		pagesLabel: string;
		pagesPlaceholder: string;
		pagesNote: string;
		featuresLabel: string;
		featureNames: {
			cms: string;
			seo: string;
			analytics: string;
			social: string;
			multilang: string;
			mobileApp: string;
			payment: string;
			booking: string;
		};
		featurePrice: string;
		designTimelineTitle: string;
		designLabel: string;
		designNames: {
			template: string;
			custom: string;
			premium: string;
		};
		designFree: string;
		designPrice: string;
		timelineLabel: string;
		timelineNormal: string;
		timelineNormalNote: string;
		timelineUrgent: string;
		timelineUrgentNote: string;
		estimatedPriceTitle: string;
		estimatedPriceNote: string;
		summaryTitle: string;
		summary: {
			websiteType: string;
			pages: string;
			features: string;
			design: string;
			timeline: string;
		};
		summaryUrgent: string;
		summaryNormal: string;
		contact: {
			name: string;
			email: string;
			phone: string;
			company: string;
		};
		getQuote: string;
	};

	qrSolution: {
		hero: {
			title: string;
			description: string;
			cta: {
				startSaving: string;
				viewDemo: string;
			};
			statsTitle: string;
			statsDescription: string;
			savings: {
				title: string;
				items: string[];
			};
		};
		stats: Array<{
			number: string;
			label: string;
		}>;
		solutions: {
			title: string;
			description: string;
			items: Array<{
				title: string;
				description: string;
				featuresTitle: string;
				features: string[];
				benefitsTitle?: string;
				benefits?: string[];
				price?: string;
				cta?: string;
				scanCode?: string;
			}>;
		};
		features: {
			title: string;
			description: string;
			items: Array<{
				title: string;
				description: string;
			}>;
		};
		testimonials: {
			title: string;
			description: string;
			items: Array<{
				name: string;
				company: string;
				text: string;
				savings?: string;
				rating: number;
			}>;
		};
		additionalServicesInfo: {
			title: string;
			description: string;
		};
		additionalServices: Array<{
			title: string;
			description: string;
			price: string;
		}>;
		cta: {
			title: string;
			description: string;
			guarantee: {
				title: string;
				items: string[];
			};
			buttons: {
				startSaving: string;
				bookConsultation: string;
			};
			note: string;
		};
	};

	services: {
		title: string;
		description: string;
		aiAutomation: {
			title: string;
			description: string;
			features: {
				title: string;
				processAutomation: {
					title: string;
					description: string;
				};
				predictiveAnalytics: {
					title: string;
					description: string;
				};
				intelligentSecurity: {
					title: string;
					description: string;
				};
			};
			cta: {
				title: string;
				description: string;
				button: string;
			};
		};
		eMenu: {
			title: string;
			description: string;
			features: {
				title: string;
				qrCode: {
					title: string;
					description: string;
				};
				mobileOptimized: {
					title: string;
					description: string;
				};
				analytics: {
					title: string;
					description: string;
				};
			};
			cta: {
				title: string;
				description: string;
				button: string;
			};
		};
		landingWebsite: {
			title: string;
			description: string;
			features: {
				title: string;
				performance: {
					title: string;
					description: string;
				};
				seo: {
					title: string;
					description: string;
				};
				responsive: {
					title: string;
					description: string;
				};
			};
			cta: {
				title: string;
				description: string;
				button: string;
			};
		};
	};

	// faq: {
	// 	title: string;
	// 	description: string;
	// 	questions: Array<{
	// 		question: string;
	// 		answer: string;
	// 	}>;
	// };

	blog: {
		title: string;
		description: string;
		readMore: string;
		articles: Array<{
			title: string;
			excerpt: string;
			date: string; // keep as string (e.g. "December 15, 2024")
			category: string;
			image: string; // path or url
		}>;
	};

	about: {
		whoWe: {
			title: string;
			intro: {
				p1: string;
				p2: string;
			};
			cards: {
				vision: {
					title: string;
					description: string;
				};
				mission: {
					title: string;
					description: string;
				};
			};
		};
		process: {
			title: {
				main: string;
				highlight: string;
			};
			description: string;
			stageLabel: string;
			steps: Array<{
				title: string;
				description: string;
				details: string[];
				duration: string;
			}>;
			cta: {
				title: string;
				description: string;
				button: string;
			};
		};
		faq: {
			title: {
				main: string;
				highlight: string;
			};
			description: string;
			searchPlaceholder: string;
			labels: {
				popular: string;
				helpfulQuestion: string;
				yes: string;
				no: string;
			};
			categories: {
				all: string;
				development: string;
				pricing: string;
				support: string;
				technical: string;
				security: string;
				payment: string;
				marketing: string;
				management: string;
			};
			empty: {
				title: string;
				description: string;
				reset: string;
			};
			contactCta: {
				title: string;
				description: string;
				chat: string;
				call: string;
				email: string;
			};
			faqs: Array<{
				id: string;
				question: string;
				answer: string;
				category: string;
				popular: boolean;
			}>;
		};
	};

	reachout: {
		title: string;
		subtitle: string;
		phone: {
			phone: string;
			title: string;
		};
		email: {
			email: string;
			title: string;
		};
		location: {
			location: string;
			title: string;
		};
		website: {
			website: string;
			title: string;
		};
		whyChooseUs: string;
		reasons: Array<{
			title: string;
			description: string;
		}>;
		startProject: string;
	};

	contact: {
		title: string;
		description: string;
		form: {
			title: string;
			name: string;
			namePlaceholder: string;
			companyName: string;
			companyNamePlaceholder: string;
			mobile: string;
			mobilePlaceholder: string;
			country: string;
			countryPlaceholder: string;
			email: string;
			emailPlaceholder: string;
			gdprTitle: string;
			gdprText: string;
			send: string;
		};
		page: {
			title: string;
			description: string;
			form: {
				title: string;
				firstName: {
					label: string;
					placeholder: string;
				};
				lastName: {
					label: string;
					placeholder: string;
				};
				email: {
					label: string;
					placeholder: string;
				};
				phone: {
					label: string;
					placeholder: string;
				};
				subject: {
					label: string;
					placeholder: string;
				};
				message: {
					label: string;
					placeholder: string;
				};
				submit: string;
			};
			info: {
				title: string;
				email: {
					label: string;
					value: string;
				};
				phone: {
					label: string;
					value: string;
				};
				address: {
					label: string;
					value: string;
				};
				hours: {
					label: string;
					value: string;
				};
			};
			reasons: {
				title: string;
				items: string[];
			};
		};
	};

	footer: {
		followUs: string;
		contactUs: string;
		quickLinks: string;
		aboutUs: string;
		phone: string;
		email: string;
		website: string;
		services: string;
		createWebsites: string;
		createQr: string;
		mobileApps: string;
		cloudSolutions: string;
		etoProgram: string;
		schoolProgram: string;
		aboutUsText: string;
		whoWeAre: string;
		contactUsFooter: string;
		copyright: string;
		madeInJordan: string;
		slogan: string;
	};

	common: {
		loading: string;
		comingSoon: string;
		stayTuned: string;
	};
};
