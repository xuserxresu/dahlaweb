import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if current page is home page
  const isHomePage = location.pathname === '/';

  // Set initial scroll state based on current page
  useEffect(() => {
    // If not on home page, always show scrolled navbar
    if (!isHomePage) {
      setIsScrolled(true);
    } else {
      // On home page, check scroll position
      handleScroll();
    }
  }, [location.pathname, isHomePage]);

  // Handle scroll event to change navbar styling
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else if (isHomePage) {
      // Only un-scroll the navbar on the home page
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 shadow-md backdrop-blur-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center"
          aria-label="Dahla Group - Home"
        >
          {isScrolled ? (
            // Red logo for white background
            <div className="h-10 relative">
              <img 
                src="https://ik.imagekit.io/sharfi/Dahla-logo-white.png?updatedAt=1740666544459" 
                alt="Dahla Group Logo" 
                className="h-full"
                style={{ 
                  filter: 'brightness(0) saturate(100%) invert(15%) sepia(95%) saturate(3164%) hue-rotate(345deg) brightness(95%) contrast(96%)' 
                }}
              />
            </div>
          ) : (
            // White logo for transparent background
            <img 
              src="https://ik.imagekit.io/sharfi/Dahla-logo-white.png?updatedAt=1740666544459" 
              alt="Dahla Group Logo" 
              className="h-10"
            />
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-medium text-sm transition-colors hover:text-dahla ${
                location.pathname === item.path 
                  ? 'text-dahla font-semibold' 
                  : isScrolled ? 'text-navy' : 'text-navy/90'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-dahla hover:bg-dahla-dark text-white">
            Get A Quote
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? 
            <X className="h-6 w-6" /> : 
            <Menu className="h-6 w-6" />
          }
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium text-sm py-2 transition-colors ${
                  location.pathname === item.path 
                    ? 'text-dahla font-semibold' 
                    : 'text-navy'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-dahla hover:bg-dahla-dark text-white w-full">
              Get A Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

// Navigation items
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact Us', path: '/contact' },
];

export default Navbar;