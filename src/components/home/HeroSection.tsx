import { ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[600px] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://ik.imagekit.io/sharfi/sharfi__cargo_ship_on_sea_under_blue_sky_during_daytime_--ar_16_3bf98d8f-6076-43ef-8350-81941fd4d3fb.png?updatedAt=1740664468780")', 
            opacity: 0.65
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full w-full container mx-auto px-4 sm:px-6 flex flex-col justify-center">
        <div className="max-w-3xl w-full opacity-0 transition-all duration-700 ease-out transform translate-y-8" 
          style={{ 
            opacity: isLoaded ? 1 : 0, 
            transform: isLoaded ? 'translateY(0)' : 'translateY(2rem)'
          }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
            <span className="block">CONNECT YOUR</span>
            <span className="block">BUSINESS TO A WORLD</span>
            <span className="block">OF POSSIBILITIES</span>
          </h1>
          
          <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl">
            Experience world-class air, sea, and land freight forwarding services with Dahla Group. 
            Your trusted logistics partner in UAE and Sudan for over four decades, delivering excellence since 1983.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="btn-primary inline-flex items-center justify-center"
            >
              Get A Quote
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link
              to="/services" 
              className="btn-secondary inline-flex items-center justify-center"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse hidden md:flex opacity-0"
        style={{ opacity: isLoaded ? 0.8 : 0 }}
      >
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <div className="w-5 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
