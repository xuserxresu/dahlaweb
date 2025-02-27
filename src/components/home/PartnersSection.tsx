
import { useEffect, useRef, useState } from 'react';

const partners = [
  {
    name: "Company 1",
    logo: "https://ik.imagekit.io/sharfi/Logo%20S%20Letter(traced).png?updatedAt=1739121550481"
  },
  {
    name: "Company 2",
    logo: "https://ik.imagekit.io/sharfi/sharfi_grey.png?updatedAt=1739120343098"
  },
  {
    name: "Company 3",
    logo: "https://via.placeholder.com/120x60?text=Partner+3"
  },
  {
    name: "Company 4",
    logo: "https://via.placeholder.com/120x60?text=Partner+4"
  },
  {
    name: "Company 5",
    logo: "https://via.placeholder.com/120x60?text=Partner+5"
  }
];

const PartnersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
        threshold: 0.1,
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
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-navy mb-4">Our partners</h2>
          <div className="w-16 h-1 bg-dahla mx-auto"></div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} - Partner of Dahla Group`} 
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
