
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
}

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const testimonials: Testimonial[] = [
    {
      content: "Dahla Group has transformed our supply chain operations with their reliable freight forwarding services. Their team's dedication and expertise have made international shipping seamless for our company.",
      author: "Ahmed Hassan",
      position: "Operations Director",
      company: "International Trading Co."
    },
    {
      content: "We've been working with Dahla Group for over 5 years, and their consistent quality and attention to detail is outstanding. Their customs clearance expertise has saved us both time and money.",
      author: "Sarah Johnson",
      position: "Supply Chain Manager",
      company: "Global Retail Solutions"
    },
    {
      content: "As a manufacturer exporting to multiple countries, we need a logistics partner we can trust. Dahla Group delivers that trust with every shipment, providing transparent communication throughout the process.",
      author: "Mohammed Al-Faisal",
      position: "CEO",
      company: "Innovative Manufacturing LLC"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-navy text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-dahla/20 rounded-full -ml-12 -mt-12"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-dahla/20 rounded-full -mr-16 -mb-16"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What they say about us</h2>
          <div className="w-24 h-1 bg-dahla mx-auto"></div>
        </div>
        
        <div 
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative p-8 md:p-12 bg-navy-light rounded-lg">
            <Quote className="absolute text-dahla/20 h-24 w-24 -top-6 -left-6 transform -rotate-12" />
            
            <div className="relative">
              <div className="mb-6 text-lg italic leading-relaxed">
                "{testimonials[currentIndex].content}"
              </div>
              <div>
                <p className="font-semibold text-dahla">{testimonials[currentIndex].author}</p>
                <p className="text-sm text-gray-300">{testimonials[currentIndex].position}, {testimonials[currentIndex].company}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-navy-light hover:bg-dahla transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-dahla w-6' : 'bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-navy-light hover:bg-dahla transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
