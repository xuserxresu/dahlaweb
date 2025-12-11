import { SEO } from "@/lib/seo";
import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from "@/lib/seo-utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Check, Plane, Ship, PlaneTakeoff, Boxes, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const servicePages = [
    {
      id: "air-freight",
      title: "Air-Freight Services",
      header: "Comprehensive Air-Freight Solutions for Global Cargo Movement",
      intro: "DAHLA provides a complete range of air-freight services tailored for speed, precision, and cargo reliability. With more than four decades of experience and recognized partnerships with major airlines, our air-freight operations support both commercial and humanitarian missions with efficiency and care.",
      servicesOffered: [
        "Air Charters – Full aircraft chartering for specialized or urgent shipments",
        "Consolidation – Optimized cargo consolidation for cost-effective air transport",
        "Customs Brokerage – Complete assistance with customs documentation and clearance",
        "Transshipment – Seamless multi-airport or multi-carrier cargo movement",
        "Cross-Port Services – Flexible routing across regional gateways"
      ],
      recognition: "DAHLA has received Top Cargo Agent awards from Emirates SkyCargo, Etihad Cargo, and EgyptAir Cargo, demonstrating excellence in air-cargo operations.",
      humanitarian: "DAHLA has successfully operated multiple UN relief flights within Africa, showcasing experience in time-critical and sensitive cargo handling.",
      aircraft: ["IL-76", "L1011", "AN124", "B747", "B707"],
      benefits: [
        "Faster transit times",
        "High-priority handling",
        "Specialized cargo support",
        "Strong airline partnerships",
        "End-to-end cargo visibility"
      ],
      faqs: [
        { q: "What types of cargo do you handle via air?", a: "Oil equipment, oversized cargo, vehicles, heavy machinery, cattle, and general freight." },
        { q: "Do you offer chartered flights?", a: "Yes—full aircraft charter services are available." },
        { q: "Do you manage customs clearance?", a: "Yes, through our customs brokerage services." }
      ],
      metaTitle: "Air-Freight Services – DAHLA",
      metaDescription: "Explore DAHLA’s specialized air-freight services including charters, consolidation, customs brokerage, and UN relief operations."
    },
    {
      id: "sea-freight",
      title: "Sea-Freight Services",
      header: "Reliable Sea-Freight Solutions for Global Cargo Transport",
      intro: "DAHLA provides flexible and cost-effective sea-freight options for commercial and specialized cargo. With extensive experience managing complex shipments, our team ensures smooth coordination across major trade lanes.",
      servicesOffered: [
        "LCL and FCL shipments",
        "Transit load",
        "Reefer loads",
        "Heavy lifts",
        "Group cargo services",
        "Full container loads",
        "Ro/Ro services",
        "Break bulk services"
      ],
      recognition: "",
      humanitarian: "",
      aircraft: [],
      benefits: [
        "Ideal for large and heavy shipments",
        "Reliable scheduling and routing",
        "Expert handling of complex and non-standard cargo",
        "Smooth coordination from port to final destination"
      ],
      faqs: [
        { q: "Do you handle refrigerated cargo?", a: "Yes—reefer load services are available." },
        { q: "Can you support heavy or oversized cargo?", a: "Yes—heavy lifts and break bulk services are part of our core offering." },
        { q: "Do you offer Ro/Ro services?", a: "Yes—for vehicles and wheeled machinery." }
      ],
      metaTitle: "Sea-Freight Services – DAHLA",
      metaDescription: "DAHLA provides LCL, FCL, reefer, heavy lift, Ro/Ro, and break bulk sea-freight solutions for complex global cargo."
    },
    {
      id: "airline-activities",
      title: "Airline Activities",
      header: "End-to-End Airline Support and Aviation Services",
      intro: "DAHLA delivers a comprehensive suite of airline activity services designed to support carriers, cargo operators, and aviation partners.",
      servicesOffered: [
        "Chartering",
        "Brokering in air-freighting",
        "In-landing / handling",
        "Fueling coordination",
        "Obtaining aviation permissions",
        "All aviation services",
        "Forwarding & clearing"
      ],
      recognition: "",
      humanitarian: "",
      aircraft: [],
      benefits: [],
      faqs: [
        { q: "Do you assist with airline permissions?", a: "Yes, we secure required aviation permits." },
        { q: "Do you provide ground handling?", a: "Yes—complete in-landing and handling services." },
        { q: "Do you coordinate fueling?", a: "Yes—fueling support is included." }
      ],
      metaTitle: "Airline Activities – DAHLA",
      metaDescription: "DAHLA offers chartering, brokering, ground handling, permissions, fueling, and more for global aviation partners."
    },
    {
      id: "specialized-cargo",
      title: "Specialized Cargo Handling",
      header: "Expert Handling for Oil Equipment, Heavy Machinery & Oversized Loads",
      intro: "DAHLA’s decades of experience make it a trusted partner for high-complexity cargo.",
      servicesOffered: [
        "Oil equipment",
        "Oversized cargo",
        "Vehicles and heavy machinery",
        "Cattle"
      ],
      recognition: "",
      humanitarian: "",
      aircraft: [],
      benefits: [
        "More than 40 years of established expertise",
        "Strong airline partnerships",
        "Operations across both air and sea routes",
        "Proven humanitarian cargo capability"
      ],
      faqs: [
        { q: "Do you manage oversized cargo via both air and sea?", a: "Yes—air charters and sea break bulk options are available." },
        { q: "Do you transport live animals?", a: "Yes—DAHLA transports cattle." },
        { q: "Do you handle industrial equipment?", a: "Yes—oil and heavy machinery shipments are core specialties." }
      ],
      metaTitle: "Specialized Cargo Handling – DAHLA",
      metaDescription: "DAHLA specializes in oversized cargo, oil equipment, heavy machinery, and cattle transport via air and sea."
    },
    {
      id: "logistics-support",
      title: "Logistics Support Services",
      header: "Supporting Services for Seamless Cargo Movement",
      intro: "DAHLA strengthens the cargo journey with essential support services.",
      servicesOffered: [
        "Cargo insurance",
        "Warehousing",
        "Brokerage: customs clearance, documentation, delivery"
      ],
      recognition: "",
      humanitarian: "",
      aircraft: [],
      benefits: [],
      faqs: [
        { q: "Do you provide customs clearance?", a: "Yes—full customs brokerage is available." },
        { q: "Do you offer insurance?", a: "Yes—cargo insurance is part of our service suite." },
        { q: "Is warehousing available?", a: "Yes—DAHLA offers secure warehousing options." }
      ],
      metaTitle: "Logistics Support Services – DAHLA",
      metaDescription: "DAHLA provides warehousing, cargo insurance, and customs documentation solutions for smooth international freight."
    }
  ];

  const overviewCards = [
    {
      id: "air-freight",
      icon: <Plane className="h-8 w-8" />,
      title: "Air-Freight Services",
      blurb: "Fast, reliable, and flexible air-cargo transportation—backed by Top Cargo Agent awards from Emirates SkyCargo, Etihad Cargo, and EgyptAir Cargo.",
      includes: ["Air charters", "Consolidation", "Customs brokerage", "Transshipment", "Cross-port services"],
    },
    {
      id: "sea-freight",
      icon: <Ship className="h-8 w-8" />,
      title: "Sea-Freight Services",
      blurb: "Cost-effective and dependable sea logistics for shipments of all sizes, including oversized and complex cargo.",
      includes: ["LCL & FCL shipments", "Transit load", "Reefer loads", "Heavy lifts", "Ro/Ro and break bulk services"],
    },
    {
      id: "airline-activities",
      icon: <PlaneTakeoff className="h-8 w-8" />,
      title: "Airline Activities",
      blurb: "Complete operational support for airlines and cargo carriers, including handling, brokering, and aviation services.",
      includes: ["Chartering", "Brokering", "In-landing/handling", "Fueling", "Permissions", "Forwarding & clearing"],
    },
    {
      id: "specialized-cargo",
      icon: <Boxes className="h-8 w-8" />,
      title: "Specialized Cargo Handling",
      blurb: "Expert handling for complex, heavy, or sensitive shipments with proven multimodal options.",
      includes: ["Oil equipment", "Oversized cargo", "Vehicles & heavy machinery", "Cattle"],
    },
    {
      id: "logistics-support",
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Logistics Support Services",
      blurb: "End-to-end operational support to keep cargo moving smoothly and compliantly.",
      includes: ["Cargo insurance", "Warehousing", "Brokerage: customs, documentation, delivery"],
    },
  ];

  const faqSchema = getFAQSchema(
    servicePages.flatMap(service => service.faqs.map(faq => ({ question: faq.q, answer: faq.a })))
  );

  const servicesSchema = servicePages.map(service => getServiceSchema({
    name: service.title,
    description: service.metaDescription,
    provider: "DAHLA",
    areaServed: ["United Arab Emirates", "Sudan"],
    serviceType: service.title
  }));

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://dahla.net/" },
    { name: "Services", url: "https://dahla.net/services" }
  ]);

  return (
    <>
      <SEO
        title="DAHLA Freight Services – Air, Sea, Airline Activities & Specialized Cargo"
        description="DAHLA delivers air-freight, sea-freight, airline activities, specialized cargo handling, and logistics support services backed by 40+ years of expertise."
        keywords="air freight services, sea freight services, charter cargo flights, cargo handling, oversized cargo transport, heavy machinery shipping, oil equipment shipping, UN relief cargo, Etihad cargo agent, cargo brokerage services, customs clearance services, Ro/Ro cargo shipping, break bulk logistics, specialized cargo shipping, FCL and LCL freight"
        canonical="/services"
        structuredData={[...servicesSchema, faqSchema, breadcrumbSchema]}
      />
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-16">
          {/* Hero Section */}
          <section className="bg-navy text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                <div className="w-24 h-1 bg-dahla mx-auto mb-8"></div>
                <p className="text-lg text-white/90 leading-relaxed">
                  Complete Freight Forwarding & Logistics Solutions Since 1983. DAHLA provides a full spectrum of international freight forwarding services across air, sea, aviation support, specialized cargo handling, and logistics operations.
                </p>
                <p className="text-white/80 mt-4">
                  Below is an overview of all the services we offer. Each category has its own dedicated section for more details.
                </p>
              </div>
            </div>
          </section>
          
          {/* Overview cards */}
          <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl text-center mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Complete Freight Forwarding & Logistics Solutions</h2>
                <p className="text-gray-700">More than four decades of expertise and strong airline partnerships delivering reliable, secure, and customized solutions worldwide.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {overviewCards.map((card) => (
                  <div key={card.id} className="group bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-dahla/10 text-dahla flex items-center justify-center group-hover:bg-dahla group-hover:text-white transition-colors duration-300">
                        {card.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-2">{card.title}</h3>
                    <p className="text-gray-700 mb-4">{card.blurb}</p>
                    <div className="space-y-2 mb-6">
                      {card.includes.map((item) => (
                        <div key={item} className="flex items-start text-gray-700">
                          <Check className="h-4 w-4 text-dahla mt-0.5" />
                          <span className="ml-2 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link to={`/services/${card.id}`} className="mt-auto inline-flex items-center text-dahla font-semibold hover:text-dahla-dark transition-colors">
                      Learn more
                      <svg className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          
          {/* Call to Action */}
          <section className="py-20 bg-gradient-to-br from-navy to-navy-dark text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Logistics?</h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Contact our team today to discuss your specific freight forwarding requirements and get a customized quote tailored to your needs.
              </p>
              <Link 
                to="/contact" 
                className="bg-dahla hover:bg-dahla-dark text-white font-semibold py-4 px-10 rounded-md transition-all duration-300 inline-flex items-center text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Us Today
                <svg className="ml-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
