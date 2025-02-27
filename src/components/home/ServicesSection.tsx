
import { useState } from 'react';
import { Truck, Ship, Plane, FileCheck, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-lg p-6 card-shadow group transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 transition-all duration-300 ${isHovered ? 'bg-dahla text-white' : 'bg-gray-100 text-dahla'}`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-3 text-navy">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-dahla hover:text-dahla-dark font-medium text-sm transition-colors"
      >
        Read More
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-4 w-4 ml-1 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Ship className="h-8 w-8" />,
      title: "Supply Chain Solutions",
      description: "End-to-end visibility and management of your entire supply chain with our integrated solutions.",
      link: "/services#supply-chain"
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Air & Sea Transportation",
      description: "Global air and sea freight services with competitive rates and reliable schedules.",
      link: "/services#air-sea"
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Customs Logistics",
      description: "Expert customs clearance services to ensure smooth and compliant international trade.",
      link: "/services#customs"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-navy mb-4">Why traders choose us</h2>
          <div className="w-24 h-1 bg-dahla mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive logistics solutions are designed to streamline your operations and drive growth for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              link={service.link} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
