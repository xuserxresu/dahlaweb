import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Navigation items
  const navItems = [
    { title: 'Navigation', links: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Contact Us', path: '/contact' },
    ]},
    { title: 'Our Services', links: [
      { name: 'Air Freight', path: '/services#air-freight' },
      { name: 'Sea Freight', path: '/services#sea-freight' },
      { name: 'Land Transport', path: '/services#land-transport' },
      { name: 'Customs Clearance', path: '/services#customs-clearance' },
      { name: 'Charter Flights', path: '/services#charter-flights' },
    ]},
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                      className="text-gray-300 hover:text-dahla transition-colors text-sm inline-block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-semibold text-lg mb-4 relative pb-2">
              Get in Touch
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-dahla"></span>
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter to receive updates and offers.
            </p>
            <form className="flex mb-4">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-navy-light text-white px-3 py-2 rounded-l-md flex-grow text-sm border border-gray-700 focus:outline-none focus:border-dahla"
                aria-label="Email for newsletter"
              />
              <button 
                type="submit" 
                className="bg-dahla hover:bg-dahla-dark px-4 py-2 rounded-r-md text-white text-sm font-medium transition-colors"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-dahla transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-dahla transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-dahla transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-dahla transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            © {currentYear} Dahla Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
