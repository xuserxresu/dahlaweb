import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState, useRef, useEffect } from "react";
import { Plane, Ship, Truck, Package, FileCheck } from "lucide-react";
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
  const [activeService, setActiveService] = useState<string>("air-freight");
  const servicesRef = useRef<HTMLDivElement>(null);
  
  // Service data
  const services: ServiceType[] = [
    {
      id: "air-freight",
      icon: <Plane className="h-6 w-6" />,
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
      icon: <Ship className="h-6 w-6" />,
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
      icon: <Truck className="h-6 w-6" />,
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
      icon: <Plane className="h-6 w-6" />,
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
      icon: <FileCheck className="h-6 w-6" />,
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

  // Find active service
  const currentService = services.find(service => service.id === activeService) || services[0];

  // Scroll to services section when changing active service
  useEffect(() => {
    if (servicesRef.current && window.location.hash) {
      const id = window.location.hash.substring(1);
      const serviceExists = services.some(service => service.id === id);
      
      if (serviceExists) {
        setActiveService(id);
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Freight Forwarding & Logistics Services | Dahla Group</title>
        <meta name="description" content="Explore Dahla Group's air freight, sea freight, land transport, and customs clearance services. Reliable logistics solutions in UAE and Sudan." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24">
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
          
          {/* Services Navigation */}
          <section className="py-10 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                      activeService === service.id
                        ? 'bg-dahla text-white shadow-md'
                        : 'bg-white text-navy hover:bg-gray-100 border border-gray-200'
                    }`}
                    onClick={() => setActiveService(service.id)}
                  >
                    <span className="mr-2">{service.icon}</span>
                    {service.title}
                  </button>
                ))}
              </div>
            </div>
          </section>
          
          {/* Services Details */}
          <section ref={servicesRef} id={currentService.id} className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-navy mb-6 relative pb-4">
                    {currentService.title}
                    <span className="absolute bottom-0 left-0 w-16 h-1 bg-dahla"></span>
                  </h2>
                  
                  <p className="text-gray-600 mb-8">
                    {currentService.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-navy mb-4">Key Features:</h3>
                    <ul className="space-y-3">
                      {currentService.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-dahla mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="bg-dahla hover:bg-dahla-dark text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center"
                  >
                    Get a Quote
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
                
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={currentService.image} 
                    alt={`Dahla Group ${currentService.title} services`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Other Services */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy mb-4">Explore Our Other Services</h2>
                <div className="w-24 h-1 bg-dahla mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Dahla Group provides a comprehensive range of logistics solutions to meet all your freight forwarding needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services
                  .filter(service => service.id !== activeService)
                  .slice(0, 3)
                  .map((service, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="h-48 overflow-hidden relative">
                        <img 
                          src={service.image} 
                          alt={`Dahla Group ${service.title}`}
                          className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-xl font-bold">{service.title}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {service.description}
                        </p>
                        <button 
                          onClick={() => setActiveService(service.id)} 
                          className="text-dahla hover:text-dahla-dark font-medium text-sm inline-flex items-center transition-colors"
                        >
                          Learn More
                          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="py-16 bg-navy text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to optimize your logistics?</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Contact our team today to discuss your specific freight forwarding requirements and get a customized quote.
              </p>
              <Link 
                to="/contact" 
                className="bg-dahla hover:bg-dahla-dark text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 inline-flex items-center justify-center"
              >
                Contact Us Today
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
