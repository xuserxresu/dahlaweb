import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Scroll to top utility
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Smooth scroll utility function
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle hash navigation after page load
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location.pathname, location.hash]);

  // Navigation items
  const navItems = [
    { title: 'Navigation', links: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Air-Freight Services', path: '/services/air-freight' },
      { name: 'Sea-Freight Services', path: '/services/sea-freight' },
      { name: 'Airline Activities', path: '/services/airline-activities' },
      { name: 'Specialized Cargo Handling', path: '/services/specialized-cargo' },
      { name: 'Logistics Support Services', path: '/services/logistics-support' },
      { name: 'Contact Us', path: '/contact' },
    ]},
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">
                <span className="text-dahla">Dahla</span> Group
              </h2>
              <p className="text-gray-300 text-sm">
                Trusted logistics services in UAE and Sudan since 1983
              </p>
            </div>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-dahla shrink-0 mt-0.5" />
                <a href="mailto:sales@dahla.net" className="hover:text-dahla transition-colors">
                  sales@dahla.net
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-dahla shrink-0 mt-0.5" />
                <a href="tel:+97165396796" className="hover:text-dahla transition-colors">
                  +971-6-5396796
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-dahla shrink-0 mt-0.5" />
                <span>
                  Sharjah, Dubai, Jebel Ali, UAE<br />
                  Khartoum, Sudan
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-dahla shrink-0 mt-0.5" />
                <span>
                  Mon-Fri: 8:00 AM - 6:00 PM<br />
                  Sat: 9:00 AM - 1:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Navigation and Services Links */}
          {navItems.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-lg mb-4 relative pb-2">
                {group.title}
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-dahla"></span>
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      onClick={(e) => {
                        e.preventDefault();
                        if (link.path.includes('#')) {
                          const [path, hash] = link.path.split('#');
                          if (location.pathname === path) {
                            scrollToSection(hash);
                          } else {
                            navigate(link.path);
                          }
                        } else {
                          navigate(link.path);
                          scrollToTop();
                        }
                      }}
                      className="text-gray-300 hover:text-dahla transition-colors text-sm inline-block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Media Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 relative pb-2">
              Connect With Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-dahla"></span>
            </h3>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/dahlagroup/" className="text-gray-300 hover:text-dahla transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/dahla-group/" className="text-gray-300 hover:text-dahla transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/dahlagroup/" className="text-gray-300 hover:text-dahla transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            {currentYear} Dahla Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;