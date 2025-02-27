
import { useState, useEffect, useRef } from 'react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  index: number;
  isVisible: boolean;
}

const StatItem = ({ icon, value, label, index, isVisible }: StatItemProps) => {
  return (
    <div 
      className={`flex items-center space-x-4 transition-all duration-700 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="bg-white/10 rounded-full p-3">
        {icon}
      </div>
      <div>
        <div className="text-xl font-bold text-white">{value}</div>
        <div className="text-sm text-white/80">{label}</div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dahla" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>,
      value: "10K+",
      label: "Happy Customers"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dahla" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>,
      value: "100%",
      label: "Timely Delivery"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dahla" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>,
      value: "50+",
      label: "Worldwide Offices"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dahla" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>,
      value: "40+",
      label: "Years Experience"
    }
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
    <section ref={sectionRef} className="py-16 bg-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Your cargo is safe with us</h2>
          <div className="w-16 h-1 bg-dahla mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem 
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
