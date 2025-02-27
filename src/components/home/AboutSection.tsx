
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
              alt="Dahla Group logistics operations" 
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
              About us
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-dahla"></span>
            </h2>
            
            <p className="text-gray-600 mb-6">
              Dahla Group is a trusted logistics provider established in 1983, offering top-tier air, sea, and land freight services in UAE and Sudan. With over 40 years of experience, we provide reliable and efficient logistics solutions tailored to meet our clients' specific needs.
            </p>
            
            <p className="text-gray-600 mb-6">
              Our team of experts possesses deep industry knowledge and a commitment to excellence in every operation. At Dahla Group, we combine innovative technologies with proven logistics methodologies to optimize your supply chain and drive your business forward.
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
            
            <Link
              to="/about"
              className="btn-primary flex items-center"
            >
              Read More
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
