import { SEO } from "@/lib/seo";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/seo-utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState, useEffect, useRef } from "react";
import { Plane, Ship, Truck, Package, FileCheck, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceType {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const ServicesPage = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  
  // Service data
  const services: ServiceType[] = [
    {
      id: "air-freight",
      icon: <Plane className="h-8 w-8" />,
      title: "Air Freight",
      description: "Our air freight services offer speed and reliability for time-sensitive shipments. We provide comprehensive solutions for both regular scheduled and charter flights, with competitive rates and expert handling of your cargo.",
      features: [
        "Door-to-door air freight",
        "Express air freight for urgent shipments",
        "Consolidation services",
        "Dangerous goods handling",
        "Temperature-controlled shipments"
      ],
      image: "https://ik.imagekit.io/sharfi/AirFreight1.jpg?updatedAt=1740665550667"
    },
    {
      id: "sea-freight",
      icon: <Ship className="h-8 w-8" />,
      title: "Sea Freight",
      description: "Our sea freight services provide cost-effective solutions for larger shipments. We offer FCL (Full Container Load) and LCL (Less than Container Load) options, with worldwide coverage and regular sailing schedules.",
      features: [
        "FCL and LCL services",
        "Project cargo handling",
        "Breakbulk shipping",
        "Roll-on/Roll-off (RoRo) services",
        "Port-to-port and door-to-door options"
      ],
      image: "https://ik.imagekit.io/sharfi/SeaFreight.jpg?updatedAt=1740665298905"
    },
    {
      id: "land-transport",
      icon: <Truck className="h-8 w-8" />,
      title: "Land Transport",
      description: "Our land transport services cover the UAE, Sudan, and neighboring countries. We provide reliable road freight solutions with tracked shipments and flexible scheduling to meet your logistics needs.",
      features: [
        "FTL (Full Truck Load) services",
        "LTL (Less than Truck Load) options",
        "Cross-border transportation",
        "Specialized equipment for oversized cargo",
        "GPS tracking systems"
      ],
      image: "https://ik.imagekit.io/sharfi/sharfi__Container_truck_under_blue_sky_during_daytime_--ar_169__20e22bfd-272c-488a-b961-c78421ff55c5.png?updatedAt=1740665227840"
    },
    {
      id: "charter-flights",
      icon: <Plane className="h-8 w-8" />,
      title: "Charter Flights",
      description: "When regular scheduled services don't meet your needs, our charter flight solutions provide dedicated aircraft for your time-critical or oversized shipments. We handle all aspects of the operation from end to end.",
      features: [
        "Full and part-charter options",
        "Aircraft selection consulting",
        "Ground handling arrangements",
        "Customs clearance coordination",
        "Specialized cargo handling"
      ],
      image: "https://ik.imagekit.io/sharfi/AirFreight.jpg?updatedAt=1740665654587"
    },
    {
      id: "customs-clearance",
      icon: <FileCheck className="h-8 w-8" />,
      title: "Customs Clearance",
      description: "Our customs clearance services ensure smooth and compliant import/export procedures. Our experienced team handles documentation, classification, and regulatory compliance to prevent delays and penalties.",
      features: [
        "Import and export customs clearance",
        "Documentation preparation",
        "Tariff classification",
        "Customs valuation",
        "Regulatory compliance consulting"
      ],
      image: "https://ik.imagekit.io/sharfi/Customs.jpg?updatedAt=1740665976465"
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-service-id');
            if (id) {
              setVisibleCards((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const cards = document.querySelectorAll('[data-service-id]');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  // Scroll to services section when hash is present
  useEffect(() => {
    if (servicesRef.current && window.location.hash) {
      const id = window.location.hash.substring(1);
      const serviceExists = services.some(service => service.id === id);
      
      if (serviceExists) {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  }, []);

  // Generate structured data for all services
  const servicesSchema = services.map(service => getServiceSchema({
    name: service.title,
    description: service.description,
    provider: "Dahla Group",
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
        title="Freight Forwarding & Logistics Services | Air Freight, Sea Freight, Land Transport UAE & Sudan"
        description="Explore Dahla Group's comprehensive logistics services: air freight, sea freight, land transport, charter flights, and customs clearance. Reliable freight forwarding solutions in UAE and Sudan with competitive rates for FCL, LCL, express shipping, and cargo services."
        keywords="air freight UAE, sea freight Dubai, land freight Sudan, logistics services UAE, freight forwarding Dubai, FCL shipping, LCL shipping, customs clearance UAE, freight forwarder Dubai, cargo services UAE, shipping company Dubai, international freight forwarding, express air freight, sea freight forwarding, land transport UAE, charter flights, project cargo, breakbulk shipping, RoRo services, freight logistics UAE, logistics solutions, cargo transport, freight services Dubai"
        canonical="/services"
        structuredData={[...servicesSchema, breadcrumbSchema]}
      />
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-16">
          {/* Hero Section */}
          <section className="bg-navy text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Logistics & Freight Forwarding Services</h1>
                <div className="w-24 h-1 bg-dahla mx-auto mb-8"></div>
                <p className="text-lg text-white/90 leading-relaxed">
                  Dahla Group offers comprehensive freight forwarding and logistics solutions tailored to your specific needs.
                  From air and sea freight to land transport and customs clearance, we handle every aspect of your shipment.
                </p>
              </div>
            </div>
          </section>
          
          {/* Services Grid */}
          <section ref={servicesRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Services</h2>
                <div className="w-24 h-1 bg-dahla mx-auto mb-4"></div>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Comprehensive logistics solutions tailored to your needs
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    id={service.id}
                    data-service-id={service.id}
                    className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-dahla/20 ${
                      visibleCards.has(service.id)
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={`Dahla Group ${service.title} - Professional ${service.title.toLowerCase()} services in UAE and Sudan | Freight forwarding and logistics`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent"></div>
                      
                      {/* Icon Badge */}
                      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg group-hover:bg-dahla group-hover:text-white transition-colors duration-300">
                        <div className="text-dahla group-hover:text-white transition-colors duration-300">
                          {service.icon}
                        </div>
                      </div>

                      {/* Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <p className="text-gray-600 mb-6 leading-relaxed text-base">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-navy uppercase tracking-wide mb-4">
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors"
                            >
                              <div className="flex-shrink-0 mt-0.5">
                                <Check className="h-5 w-5 text-dahla" />
                              </div>
                              <span className="ml-3 text-sm leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <Link
                        to="/contact"
                        className="inline-flex items-center text-dahla font-semibold group-hover:text-dahla-dark transition-colors duration-300 hover:gap-2"
                      >
                        Get a Quote
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
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
