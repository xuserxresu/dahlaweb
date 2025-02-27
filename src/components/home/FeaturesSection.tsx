
import { useState, useEffect, useRef } from 'react';
import { Truck, Ship, Plane } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  index: number;
  isVisible: boolean;
}

const FeatureCard = ({ icon, title, description, color, index, isVisible }: FeatureCardProps) => {  
  return (
    <div 
      className={`relative p-6 rounded-md overflow-hidden card-shadow transition-all duration-700 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        backgroundColor: color
      }}
    >
      <div className="relative z-10">
        <div className="mb-4 text-white">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
        <p className="text-white/90 text-sm">{description}</p>
      </div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
    </div>
  );
};

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Quality management system",
      description: "Our ISO-certified quality management ensures consistent, reliable service for every shipment.",
      color: "#0f2b46" // navy
    },
    {
      icon: <Ship className="h-8 w-8" />,
      title: "E-commerce logistics solutions",
      description: "Specialized services for e-commerce businesses, from warehouse to last-mile delivery.",
      color: "#f47920" // dahla orange
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Quality management system",
      description: "Integrated technology to track and manage your shipments with real-time visibility.",
      color: "#0f2b46" // navy
    },
  ];

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
    <section 
      ref={sectionRef}
      className="py-20 bg-cover bg-center relative"
      style={{ 
        backgroundImage: 'url("https://ik.imagekit.io/sharfi/sharfi__world_map_for_shipping_routes_--ar_169_--v_6.1_835624be-ca14-4126-aa10-3c9bb7902eab_1.png?updatedAt=1740664483984")',
      }}
    >
      <div className="absolute inset-0 bg-navy/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Logistics & International Freight
          </h2>
          <div className="w-24 h-1 bg-dahla mx-auto mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Our comprehensive logistics solutions ensure your cargo reaches its destination safely, on time, and at competitive rates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
