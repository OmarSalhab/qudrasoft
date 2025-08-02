import type { Locale } from "./i18n" // Assuming Locale is defined in a types file

export const translations = {
  en: {
    // Navigation
    nav: {
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
      hero: {
        title: "Artificial Intelligence &",
        titleSecond: "Machine Learning",
        description:
          "Explore a spectrum of digital services, transcending boundaries with cutting-edge technology. From AI-driven insights to seamless user experiences, we craft solutions that redefine possibilities.",
        readMore: "Read More",
      },
      vision: {
        title: "Transforming Visions into",
        titleSecond: "Reality, Together",
        description1:
          "Founded in 2008, E-Solutions has spent over 15 years building a global network of talented professionals who are passionate about technology and innovation. Our diverse team brings together expertise from various domains to deliver comprehensive solutions.",
        description2:
          "At E-Solutions, we believe that collaboration drives success. As a truly global organization, we work closely with our clients to understand their unique challenges and develop tailored solutions that drive growth and efficiency.",
      },
      stats: {
        title: "E-Solutions at a Glance",
        professionals: "Professionals Served",
        clients: "Successful Clients",
        projects: "Specialized Projects Managed from End to End",
      },
      services: {
        title: "Our Services",
        aiAutomation: {
          title: "AI Automation",
          description:
            "Intelligent automation solutions that streamline processes and enhance productivity through advanced AI technologies.",
        },
        eMenu: {
          title: "E-Menu Solutions",
          description:
            "Digital menu solutions for restaurants and hospitality businesses with QR code integration and real-time updates.",
        },
        landingWebsite: {
          title: "Landing Website",
          description:
            "Professional landing pages and websites designed to convert visitors into customers with modern design and optimization.",
        },
        learnMore: "Learn More",
      },
      contact: {
        title: "Contact Us",
        description: "Engineering Innovation, Powering Intelligent, Secure, and Scalable Digital Futures",
        getInTouch: "Get in Touch",
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
            description: "Automate repetitive tasks and workflows to increase efficiency and reduce human error.",
          },
          predictiveAnalytics: {
            title: "Predictive Analytics",
            description: "Leverage AI to predict trends and make data-driven decisions for your business.",
          },
          intelligentSecurity: {
            title: "Intelligent Security",
            description: "AI-powered security systems that adapt and learn to protect your business assets.",
          },
        },
        cta: {
          title: "Ready to Automate Your Business?",
          description: "Let's discuss how AI automation can transform your operations.",
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
            description: "Contactless menu access through QR codes for enhanced safety and convenience.",
          },
          mobileOptimized: {
            title: "Mobile Optimized",
            description: "Responsive design that works perfectly on all mobile devices and tablets.",
          },
          analytics: {
            title: "Analytics Dashboard",
            description: "Track customer preferences and menu performance with detailed analytics.",
          },
        },
        cta: {
          title: "Transform Your Restaurant Experience",
          description: "Join hundreds of restaurants already using our digital menu solutions.",
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
            description: "Lightning-fast loading times and optimized performance for better user experience.",
          },
          seo: {
            title: "SEO Optimized",
            description: "Built with SEO best practices to help your website rank higher in search results.",
          },
          responsive: {
            title: "Responsive Design",
            description: "Mobile-first design approach ensuring perfect display on all devices and screen sizes.",
          },
        },
        cta: {
          title: "Ready to Launch Your Website?",
          description: "Let's create a stunning website that drives results for your business.",
          button: "Start Your Project",
        },
      },
    },

    // FAQ
    faq: {
      title: "Frequently Asked Questions",
      description: "Find answers to common questions about our services and solutions.",
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
      description: "Stay updated with the latest trends in technology, AI, and digital innovation.",
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
          excerpt: "How QR code menus and digital solutions are changing the hospitality industry post-pandemic.",
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

    // Contact
    contact: {
      title: "Contact Us",
      description:
        "Get in touch with our team to discuss your project and discover how we can help transform your business.",
      form: {
        title: "Get In Touch",
        name: "Name",
        namePlaceholder: "Your full name",
        email: "Email",
        emailPlaceholder: "your.email@example.com",
        message: "Message",
        messagePlaceholder: "Tell us about your project...",
        send: "Send Message",
      },
    },

    // Footer
    footer: {
      description: "Transforming businesses through innovative technology solutions and digital excellence.",
      services: "Services",
      company: "Company",
      connect: "Connect",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
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
      hero: {
        title: "الذكاء الاصطناعي و",
        titleSecond: "التعلم الآلي",
        description:
          "استكشف مجموعة واسعة من الخدمات الرقمية، متجاوزة الحدود بالتكنولوجيا المتطورة. من الرؤى المدفوعة بالذكاء الاصطناعي إلى تجارب المستخدم السلسة، نحن نصنع حلولاً تعيد تعريف الإمكانيات.",
        readMore: "اقرأ المزيد",
      },
      vision: {
        title: "تحويل الرؤى إلى",
        titleSecond: "واقع، معاً",
        description1:
          "تأسست إي-سوليوشنز في عام 2008، وقد أمضت أكثر من 15 عاماً في بناء شبكة عالمية من المهنيين الموهوبين المتحمسين للتكنولوجيا والابتكار. يجمع فريقنا المتنوع الخبرات من مختلف المجالات لتقديم حلول شاملة.",
        description2:
          "في إي-سوليوشنز، نؤمن أن التعاون يقود النجاح. كمنظمة عالمية حقيقية، نعمل بشكل وثيق مع عملائنا لفهم تحدياتهم الفريدة وتطوير حلول مخصصة تدفع النمو والكفاءة.",
      },
      stats: {
        title: "إي-سوليوشنز في لمحة",
        professionals: "محترف تم خدمتهم",
        clients: "عميل ناجح",
        projects: "مشروع متخصص تم إدارته من البداية للنهاية",
      },
      services: {
        title: "خدماتنا",
        aiAutomation: {
          title: "أتمتة الذكاء الاصطناعي",
          description: "حلول أتمتة ذكية تبسط العمليات وتعزز الإنتاجية من خلال تقنيات الذكاء الاصطناعي المتقدمة.",
        },
        eMenu: {
          title: "حلول القائمة الإلكترونية",
          description: "حلول القوائم الرقمية للمطاعم وشركات الضيافة مع تكامل رمز الاستجابة السريعة والتحديثات الفورية.",
        },
        landingWebsite: {
          title: "موقع الهبوط",
          description: "صفحات هبوط ومواقع ويب احترافية مصممة لتحويل الزوار إلى عملاء بتصميم حديث وتحسين.",
        },
        learnMore: "اعرف المزيد",
      },
      contact: {
        title: "اتصل بنا",
        description: "هندسة الابتكار، تشغيل مستقبل رقمي ذكي وآمن وقابل للتطوير",
        getInTouch: "تواصل معنا",
      },
    },

    // Services
    services: {
      title: "خدماتنا",
      description: "نقدم حلول تكنولوجية متطورة مصممة لتحويل عملك ودفع الابتكار.",
      aiAutomation: {
        title: "حلول أتمتة الذكاء الاصطناعي",
        description:
          "حول عمليات عملك بالأتمتة الذكية المدعومة بالذكاء الاصطناعي المتطور. بسط العمليات، قلل التكاليف، واكتشف مستويات جديدة من الإنتاجية.",
        features: {
          title: "الميزات الرئيسية",
          processAutomation: {
            title: "أتمتة العمليات",
            description: "أتمت المهام المتكررة وسير العمل لزيادة الكفاءة وتقليل الأخطاء البشرية.",
          },
          predictiveAnalytics: {
            title: "التحليلات التنبؤية",
            description: "استفد من الذكاء الاصطناعي للتنبؤ بالاتجاهات واتخاذ قرارات مدفوعة بالبيانات لعملك.",
          },
          intelligentSecurity: {
            title: "الأمان الذكي",
            description: "أنظمة أمان مدعومة بالذكاء الاصطناعي تتكيف وتتعلم لحماية أصول عملك.",
          },
        },
        cta: {
          title: "مستعد لأتمتة عملك؟",
          description: "دعنا نناقش كيف يمكن لأتمتة الذكاء الاصطناعي تحويل عملياتك.",
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
            description: "وصول للقائمة بدون لمس من خلال رموز الاستجابة السريعة للأمان والراحة المحسنة.",
          },
          mobileOptimized: {
            title: "محسن للجوال",
            description: "تصميم متجاوب يعمل بشكل مثالي على جميع الأجهزة المحمولة والأجهزة اللوحية.",
          },
          analytics: {
            title: "لوحة التحليلات",
            description: "تتبع تفضيلات العملاء وأداء القائمة مع تحليلات مفصلة.",
          },
        },
        cta: {
          title: "حول تجربة مطعمك",
          description: "انضم لمئات المطاعم التي تستخدم بالفعل حلول القوائم الرقمية لدينا.",
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
            description: "أوقات تحميل سريعة البرق وأداء محسن لتجربة مستخدم أفضل.",
          },
          seo: {
            title: "محسن لمحركات البحث",
            description: "مبني بأفضل ممارسات تحسين محركات البحث لمساعدة موقعك على ترتيب أعلى في نتائج البحث.",
          },
          responsive: {
            title: "تصميم متجاوب",
            description: "نهج تصميم يركز على الجوال أولاً يضمن عرض مثالي على جميع الأجهزة وأحجام الشاشات.",
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
          answer: "بالطبع! حلولنا مصممة للتكامل بسلاسة مع أنظمتك وسير عملك الموجود. نقوم بتحليل شامل لضمان التوافق.",
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
      description: "ابق محدثاً مع أحدث الاتجاهات في التكنولوجيا والذكاء الاصطناعي والابتكار الرقمي.",
      readMore: "اقرأ المزيد",
      articles: [
        {
          title: "مستقبل أتمتة الذكاء الاصطناعي في الأعمال",
          excerpt: "اكتشف كيف يثور الذكاء الاصطناعي في عمليات الأعمال وما يعنيه لمستقبل العمل.",
          date: "15 ديسمبر 2024",
          category: "الذكاء الاصطناعي والتكنولوجيا",
        },
        {
          title: "ثورة القائمة الرقمية: تحويل تجربة المطعم",
          excerpt: "كيف تغير قوائم رمز الاستجابة السريعة والحلول الرقمية صناعة الضيافة بعد الجائحة.",
          date: "10 ديسمبر 2024",
          category: "الحلول الرقمية",
        },
        {
          title: "تحسين صفحة الهبوط: تحويل الزوار إلى عملاء",
          excerpt: "الاستراتيجيات الأساسية وأفضل الممارسات لإنشاء صفحات هبوط عالية التحويل تدفع نمو الأعمال.",
          date: "5 ديسمبر 2024",
          category: "تطوير الويب",
        },
      ],
    },

    // Contact
    contact: {
      title: "اتصل بنا",
      description: "تواصل مع فريقنا لمناقشة مشروعك واكتشف كيف يمكننا مساعدتك في تحويل عملك.",
      form: {
        title: "تواصل معنا",
        name: "الاسم",
        namePlaceholder: "اسمك الكامل",
        email: "البريد الإلكتروني",
        emailPlaceholder: "your.email@example.com",
        message: "الرسالة",
        messagePlaceholder: "أخبرنا عن مشروعك...",
        send: "إرسال الرسالة",
      },
    },

    // Footer
    footer: {
      description: "تحويل الأعمال من خلال حلول التكنولوجيا المبتكرة والتميز الرقمي.",
      services: "الخدمات",
      company: "الشركة",
      connect: "تواصل",
      rights: "جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
    },

    // Common
    common: {
      loading: "جاري التحميل...",
      comingSoon: "قريباً",
      stayTuned: "نحن نعمل على هذا القسم. ترقبوا!",
    },
  },
}

export function getTranslation(locale: Locale) {
  return translations[locale] || translations.en
}
