
import { useState, useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formData);
    // Would typically send this data to a server
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    
    // Show success message
    alert('Thank you for your message. We will get back to you soon!');
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
      className="py-20 bg-gray-50 relative"
      style={{
        backgroundImage: 'url("https://ik.imagekit.io/sharfi/sharfi__Project_Cargo_--ar_169_--v_6.1_80eedffb-26d7-4b8d-b729-4563a5e05bae_2.png?updatedAt=1740664451284")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-navy/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Request a call back</h2>
          <div className="w-24 h-1 bg-dahla mx-auto mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Fill out the form below, and our team will contact you shortly to discuss your logistics needs.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div 
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Form */}
              <div className="p-8 md:col-span-3">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dahla focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dahla focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dahla focus:border-transparent"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dahla focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* Map placeholder */}
              <div className="bg-gray-100 p-6 flex items-center justify-center relative md:col-span-2">
                <div className="absolute inset-0 bg-navy opacity-90"></div>
                <div className="relative z-10 text-center">
                  <MapPin className="h-12 w-12 text-dahla mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Our Locations</h3>
                  <p className="text-white/90 mb-4 text-sm">
                    UAE: Sharjah, Dubai, Jebel Ali<br />
                    Sudan: Khartoum
                  </p>
                  <p className="text-white/90 text-sm">
                    <strong>Email:</strong> sales@dahla.net<br />
                    <strong>Phone:</strong> +971-6-5396796
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
