
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useEffect, useRef, useState } from "react";

const AboutPage = () => {
  const milestones = [
    { year: "1983", title: "Founded in Sudan", description: "Dahla Group was established in Khartoum, Sudan." },
    { year: "1995", title: "UAE Expansion", description: "Opened first office in Sharjah, UAE." },
    { year: "2002", title: "Dubai Office", description: "Expanded operations to Dubai." },
    { year: "2010", title: "ISO Certification", description: "Received ISO 9001 certification for quality management." },
    { year: "2018", title: "Digital Transformation", description: "Implemented advanced tracking and logistics management systems." },
    { year: "2023", title: "40th Anniversary", description: "Celebrated 40 years of logistics excellence." },
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

  return (
    <>
      <Helmet>
        <title>About Dahla Group | Leading Logistics Provider Since 1983</title>
        <meta name="description" content="Learn about Dahla Group, a trusted logistics company offering air, sea, and land freight services in UAE and Sudan for over 40 years." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24">
          {/* Hero Section */}
          <section className="bg-navy text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h1>
                <div className="w-24 h-1 bg-dahla mx-auto mb-8"></div>
                <p className="text-lg text-white/90 leading-relaxed">
                  For over four decades, Dahla Group has been a trusted name in logistics and freight forwarding, 
                  providing exceptional service to businesses across the Middle East and Africa.
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
                    Our Story
                    <span className="absolute bottom-0 left-0 w-16 h-1 bg-dahla"></span>
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    Dahla Group was established in 1983 in Khartoum, Sudan, with a vision to provide reliable and efficient logistics solutions to businesses in East Africa. Over the years, we expanded our operations to the United Arab Emirates, opening offices in Sharjah, Dubai, and Jebel Ali.
                  </p>
                  
                  <p className="text-gray-600 mb-6">
                    Today, we are a comprehensive logistics provider with a global network, serving customers across multiple industries. Our commitment to quality, reliability, and customer satisfaction has remained unchanged throughout our journey.
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
                    alt="Dahla Group team meeting" 
                    className="rounded-lg shadow-xl w-full h-auto"
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
                    To deliver reliable, efficient, and cost-effective logistics solutions that help our clients optimize their supply chains and achieve their business objectives. We strive to exceed expectations through innovation, integrity, and a deep understanding of our customers' needs.
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
                    To be the leading logistics provider in the Middle East and Africa, recognized for our commitment to excellence, technological innovation, and sustainable practices. We aim to build lasting partnerships with our clients, contributing to their growth and success while making a positive impact on the communities we serve.
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
                <h2 className="text-3xl font-bold text-navy mb-4">Our Journey</h2>
                <div className="w-24 h-1 bg-dahla mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Explore the key milestones that have shaped Dahla Group's evolution over four decades.
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
          
          {/* Team Section */}
          <section 
            ref={el => sectionsRef.current[3] = el} 
            className="py-20 bg-gray-50"
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy mb-4">Our Leadership Team</h2>
                <div className="w-24 h-1 bg-dahla mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Meet the experienced professionals who lead Dahla Group with vision and integrity.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="h-64 bg-gray-200">
                      {/* Team member photo placeholder */}
                      <div className="w-full h-full flex items-center justify-center bg-navy/5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-navy mb-1">Executive Name</h3>
                      <p className="text-dahla font-medium mb-4">Position Title</p>
                      <p className="text-gray-600 text-sm mb-4">
                        Brief description of the executive's background, experience, and role within Dahla Group.
                      </p>
                      <div className="flex space-x-3">
                        <a href="#" className="text-gray-400 hover:text-dahla transition-colors">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                          </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-dahla transition-colors">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                          </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-dahla transition-colors">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
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
