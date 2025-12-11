
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div 
            className={`relative rounded-lg overflow-hidden transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <img 
              src="https://ik.imagekit.io/sharfi/sharfi__vessel_operations_in_ports_--ar_169_--v_6.1_f9c51205-0271-4744-b359-207710b62653_3.png?updatedAt=1740465354810" 
              alt="Dahla Group vessel operations and port logistics - Sea freight and cargo handling services in UAE" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent mix-blend-multiply"></div>
          </div>
          
          {/* Content */}
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6 relative pb-4">
              Global Freight Forwarding Excellence Since 1983
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-dahla"></span>
            </h2>
            
            <p className="text-gray-600 mb-6">
              For more than four decades, DAHLA has built a reputation as a dependable name in international freight forwarding. Founded in 1983, the company delivers a complete range of air and sea logistics solutions designed for reliability, customization, and industry-leading service quality. With a clear mission and vision centered on trust, teamwork, and client satisfaction, DAHLA operates as an extended family—serving partners with consistency and care.
            </p>
            
            <p className="text-gray-600 mb-6">
              Our expertise spans across complex and high-value cargo. From oil equipment and oversized loads to vehicles, heavy machinery, and cattle, DAHLA manages shipments others may find challenging. This deep specialization has earned the company multiple distinctions, including Top Cargo Agent recognition from Emirates SkyCargo, Etihad Cargo, and EgyptAir Cargo, as well as an Outstanding Achievement Award from Sharjah International Airport.
            </p>

            <p className="text-gray-600 mb-6">
              DAHLA has also supported humanitarian operations, operating multiple UN relief flights across Africa alongside similar global organizations. These missions reflect our commitment not only to commercial excellence but also to meaningful impact.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-dahla" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-700">40+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-dahla" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-700">Global Network</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-dahla" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-700">Tailored Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-dahla" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-700">Customer Satisfaction</span>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <p className="text-gray-700 font-semibold">Air-Freight Solutions</p>
              <p className="text-gray-600">Charters, consolidation, customs brokerage, transshipment, and cross-port services.</p>
              <p className="text-gray-700 font-semibold">Sea-Freight Solutions</p>
              <p className="text-gray-600">LCL and FCL shipments, heavy lifts, reefer loads, break bulk, Ro/Ro cargo, group services, and full container loads.</p>
              <p className="text-gray-600">
                We further support partners with cargo insurance, warehousing, documentation, customs clearance, fueling assistance, obtaining aviation permissions, and complete forwarding and clearing services.
              </p>
            </div>

            <Link
              to="/contact"
              className="btn-primary flex items-center"
            >
              Move Your Cargo with DAHLA
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
