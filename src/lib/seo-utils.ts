// Utility functions for generating SEO structured data schemas

// Organization Schema
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dahla Group",
  url: "https://dahla.net",
  logo: "https://ik.imagekit.io/sharfi/Dahla-logo-white.png?updatedAt=1740666544459",
  description: "Leading logistics and freight forwarding company providing air freight, sea freight, land transport, and customs clearance services in UAE and Sudan since 1983.",
  foundingDate: "1983",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AE",
    addressLocality: "Sharjah",
    addressRegion: "Sharjah"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971-6-5396796",
    contactType: "Customer Service",
    areaServed: ["AE", "SD"],
    availableLanguage: ["English", "Arabic"]
  },
  sameAs: [
    "https://www.facebook.com/dahlagroup",
    "https://www.linkedin.com/company/dahlagroup",
    "https://twitter.com/dahlagroup"
  ],
  areaServed: [
    {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    {
      "@type": "Country",
      name: "Sudan"
    }
  ]
});

// Local Business Schema
export const getLocalBusinessSchema = (location: {
  name: string;
  address: string;
  phone: string;
  email: string;
  coordinates: [number, number];
}) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: `Dahla Group - ${location.name}`,
  image: "https://ik.imagekit.io/sharfi/Dahla-logo-white.png?updatedAt=1740666544459",
  "@id": `https://dahla.net/contact#${location.name.toLowerCase().replace(/\s+/g, '-')}`,
  url: "https://dahla.net",
  telephone: location.phone,
  email: location.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: location.address,
    addressLocality: location.name,
    addressCountry: location.name.includes("UAE") || location.name.includes("Dubai") || location.name.includes("Sharjah") ? "AE" : "SD"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: location.coordinates[0],
    longitude: location.coordinates[1]
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00"
  },
  priceRange: "$$",
  servesCuisine: undefined
});

// Service Schema
export const getServiceSchema = (service: {
  name: string;
  description: string;
  provider: string;
  areaServed: string[];
  serviceType: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.name,
  description: service.description,
  provider: {
    "@type": "Organization",
    name: service.provider,
    url: "https://dahla.net"
  },
  areaServed: service.areaServed.map(area => ({
    "@type": "Country",
    name: area
  })),
  serviceType: service.serviceType,
  category: "Logistics and Freight Forwarding"
});

// Breadcrumb Schema
export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

// Website Schema
export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dahla Group",
  url: "https://dahla.net",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://dahla.net/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

// FAQ Schema
export const getFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});

