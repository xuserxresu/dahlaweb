import { SEO } from "@/lib/seo";
import { getOrganizationSchema, getBreadcrumbSchema } from "@/lib/seo-utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useEffect, useRef, useState } from "react";

const AboutPage = () => {
  const milestones = [
    { year: "Awards", title: "Top Cargo Agent Honors", description: "Recognitions from Emirates SkyCargo, Etihad Cargo, and EgyptAir Cargo." },
    { year: "Achievement", title: "Outstanding Achievement Award", description: "Awarded by Sharjah International Airport for performance and reliability." },
    { year: "Humanitarian", title: "UN Relief Flights", description: "Operated multiple UN relief flights across Africa alongside global support organizations." },
    { year: "Specialization", title: "Complex Cargo Expertise", description: "Handling oil equipment, oversized shipments, vehicles, heavy machinery, and cattle." },
    { year: "Partnerships", title: "Airline Partnerships", description: "Handling Agent of Etihad Airways, authorized online cargo agent for Etihad Airways (Khartoum, UAE), and GSA of Das Air in Sudan." },
  ];

  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const handleScroll = () => {
      const pageTop = window.scrollY;
      const pageBottom = pageTop + window.innerHeight;
      const pageMiddle = pageTop + (window.innerHeight / 2);

      sectionsRef.current.forEach((section, index) => {
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (pageMiddle >= sectionTop && pageMiddle <= sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial active section

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const organizationSchema = getOrganizationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://dahla.net/" },
    { name: "About Us", url: "https://dahla.net/about" }
  ]);

  return (
    <>
      <SEO
        title="About DAHLA – International Freight Forwarding Since 1983"
        description="Learn about DAHLA’s 40+ years of experience in global freight forwarding, award-winning airline partnerships, and specialized air and sea-freight services."
        keywords="freight forwarding company, air freight services, sea freight services, charter cargo flights, specialized cargo shipping, Etihad cargo agent, customs clearance services, oversized cargo transport, heavy machinery shipping, oil equipment shipping, UN relief cargo, Ro/Ro cargo shipping, break bulk logistics"
        canonical="/about"
        structuredData={[organizationSchema, breadcrumbSchema]}
      />
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-16">
          {/* Hero Section */}
          <section className="bg-navy text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">About DAHLA</h1>
                <div className="w-24 h-1 bg-dahla mx-auto mb-8"></div>
                <p className="text-lg text-white/90 leading-relaxed">
                  DAHLA has been a trusted name in international freight forwarding since 1983. From our early beginnings to today’s award-winning logistics provider, we operate with reliability, customization, and customer satisfaction at the core of every shipment.
                </p>
              </div>
            </div>
          </section>
          
          {/* About Section */}
          <section 
            ref={el => sectionsRef.current[0] = el} 
            className="py-20"
          >
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-3xl font-bold text-navy mb-6 relative pb-4">
                    About DAHLA
                    <span className="absolute bottom-0 left-0 w-16 h-1 bg-dahla"></span>
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    DAHLA has been a trusted name in international freight forwarding since 1983. From its early beginnings to its position today as an award-winning logistics provider, the company has always operated with a commitment to reliability, customization, and customer satisfaction.
                  </p>
                  
                  <p className="text-gray-600 mb-6">
                    Over the years, DAHLA has earned recognition from major global airlines and continues to uphold the principles that shaped its success. These values guide every shipment, every communication, and every partnership—serving clients as part of an extended family and enabling employees to thrive in a collaborative and supportive environment.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-dahla mb-1">40+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-dahla mb-1">5</div>
                      <div className="text-sm text-gray-600">Offices</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-dahla mb-1">100+</div>
                      <div className="text-sm text-gray-600">Employees</div>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 md:order-2 relative">
                  <img 
                    src="https://ik.imagekit.io/sharfi/sharfi__cargo_ship_on_sea_under_blue_sky_during_daytime_--ar_16_f5651326-e2db-4583-b7dd-fb403fd87ce5.png?updatedAt=1740664459434" 
                    alt="Dahla Group cargo ship and logistics operations at sea - Freight forwarding services since 1983" 
                    className="rounded-lg shadow-xl w-full h-auto"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-dahla text-white p-4 rounded-lg shadow-lg max-w-[140px]">
                    <div className="text-2xl font-bold">Since</div>
                    <div className="text-4xl font-bold">1983</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Mission & Vision */}
          <section 
            ref={el => sectionsRef.current[1] = el} 
            className="py-20 bg-gray-50"
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy mb-4">Our Mission & Vision</h2>
                <div className="w-24 h-1 bg-dahla mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  At Dahla Group, we are driven by a clear purpose and ambitious goals that guide our operations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <div className="bg-dahla/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-dahla" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4">Our Mission</h3>
                  <p className="text-gray-600">
                    Becoming the most trusted name in the industry, delivering customized quality services for our clients because we are an extended family and a home of the happiest employees.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <div className="bg-dahla/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-dahla" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4">Our Vision</h3>
                  <p className="text-gray-600">
                    To become the leading name in international freight forwarding with the happiest staff and clientele.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Company Timeline */}
          <section 
            ref={el => sectionsRef.current[2] = el} 
            className="py-20"
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy mb-4">Industry Recognition & Humanitarian Expertise</h2>
                <div className="w-24 h-1 bg-dahla mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Awards, humanitarian missions, and specialized operations highlight DAHLA’s commitment to performance, reliability, and meaningful impact.
                </p>
              </div>
              
              <div className="relative max-w-4xl mx-auto">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-0.5"></div>
                
                {/* Timeline Items */}
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8 md:ml-auto md:mr-0' : 'md:pl-8 md:ml-0 md:mr-auto'} md:w-1/2 ml-6 md:ml-0`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-0 md:left-auto md:right-0 top-0 w-4 h-4 rounded-full bg-dahla transform -translate-x-1/2 md:-translate-x-2 -translate-y-1/2"></div>
                    
                    {/* Timeline Content */}
                    <div 
                      className={`bg-white p-6 rounded-lg shadow-md ${
                        index % 2 === 0 ? 'md:text-right' : ''
                      }`}
                    >
                      <div className="inline-block bg-dahla text-white px-3 py-1 text-sm font-semibold rounded mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-bold text-navy mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Partnerships & Commitment */}
          <section 
            ref={el => sectionsRef.current[3] = el} 
            className="py-20 bg-gray-50"
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy mb-4">Our Airline Partnerships</h2>
                <div className="w-24 h-1 bg-dahla mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Longstanding collaborations that reflect our credibility, compliance, and alignment with international aviation standards.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-xl font-bold text-navy mb-4">Key Roles</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>Handling Agent of Etihad Airways</li>
                    <li>Authorized online cargo agent of Etihad Airways for Khartoum in the UAE</li>
                    <li>GSA of Das Air in Sudan</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-xl font-bold text-navy mb-4">Our Commitment</h3>
                  <p className="text-gray-600 mb-3">
                    With a legacy spanning more than 40 years, DAHLA continues to deliver freight forwarding solutions rooted in trust, consistency, and service excellence.
                  </p>
                  <p className="text-gray-600">
                    Every project, large or small, receives the attention of a dedicated team committed to delivering results.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="py-20 bg-navy text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Logistics?</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Partner with Dahla Group for reliable, efficient, and customized logistics solutions that drive your business forward.
              </p>
              <a 
                href="/contact" 
                className="bg-dahla hover:bg-dahla-dark text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 inline-flex items-center justify-center"
              >
                Contact Us Today
              </a>
            </div>
          </section>
        </main>
        
        <Footer />
        
        {/* Page navigation dots */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="flex flex-col space-y-4">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === index ? 'bg-dahla scale-125' : 'bg-gray-300'
                }`}
                onClick={() => {
                  if (sectionsRef.current[index]) {
                    window.scrollTo({
                      top: sectionsRef.current[index]!.offsetTop - 100,
                      behavior: 'smooth'
                    });
                  }
                }}
                aria-label={`Scroll to section ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
