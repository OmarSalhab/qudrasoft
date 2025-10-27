export function getOrganizationSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Solvenear",
    alternateName: locale === "ar" ? "سولڤنير" : "Solvenear Inc",
    url: "https://www.solvenear.com",
    logo: "https://www.solvenear.com/favicon.ico",
    description:
      locale === "ar"
        ? "شركة سولڤنير الرائدة في تطوير المواقع الإلكترونية، حلول QR الذكية، والأتمتة"
        : "Solvenear is a leading technology company specializing in web development, smart QR solutions, and automation",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      addressCountry: "JO",
      addressLocality: "Amman",
      addressRegion: "Amman",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "31.9454",
      longitude: "35.9284",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      areaServed: ["JO", "AE", "SA", "EG"],
      availableLanguage: ["Arabic", "English"],
    },
    sameAs: [
      
      "https://web.facebook.com/profile.php?id=61579696023245",
      "https://www.linkedin.com/company/solvenear",
      "https://www.instagram.com/solvenear_solution",
    ],
  };
}

export function getWebsiteSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Solvenear",
    alternateName: locale === "ar" ? "سولڤنير" : "Solvenear Inc",
    url: "https://www.solvenear.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.solvenear.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getServiceSchema(locale: string, serviceType: "web" | "qr") {
  const services = {
    web: {
      ar: {
        name: "تطوير المواقع الإلكترونية",
        description:
          "خدمات تطوير وتصميم المواقع الإلكترونية الاحترافية. مواقع متجاوبة، سريعة، وآمنة",
        url: "https://www.solvenear.com/ar/services/website-development",
      },
      en: {
        name: "Website Development",
        description:
          "Professional website development and design services. Responsive, fast, and secure websites",
        url: "https://www.solvenear.com/en/services/website-development",
      },
    },
    qr: {
      ar: {
        name: "حلول QR الذكية",
        description:
          "حلول QR متطورة للمطاعم والفنادق. قوائم طعام رقمية، نظام طلبات ذكي، عروض ديناميكية",
        url: "https://www.solvenear.com/ar/services/qr-solutions",
      },
      en: {
        name: "Smart QR Solutions",
        description:
          "Advanced QR solutions for restaurants and hotels. Digital menus, smart ordering system, dynamic offers",
        url: "https://www.solvenear.com/en/services/qr-solutions",
      },
    },
  };

  const service = services[serviceType][locale as "ar" | "en"];

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: {
      "@type": "Organization",
      name: "Solvenear",
    },
    description: service.description,
    url: service.url,
    areaServed: {
      "@type": "Country",
      name: "Jordan",
    },
  };
}

export function getBreadcrumbSchema(locale: string, items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://www.solvenear.com${item.url}`,
    })),
  };
}

export function getFAQSchema(locale: string, faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
