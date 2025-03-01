import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState, useEffect, useRef } from "react";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Location {
  title: string;
  address: string;
  phone: string;
  email: string;
  coordinates: [number, number]; // [latitude, longitude]
}

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<L.Map | null>(null);

  const locations: Location[] = [
    {
      title: "Sharjah",
      address: "Industrial Area 10, Sharjah, UAE",
      phone: "+971-6-5396796",
      email: "sharjah@dahla.net",
      coordinates: [25.3192, 55.4209]
    },
    {
      title: "Dubai",
      address: "Dubai Creek, Dubai, UAE",
      phone: "+971-4-2235511",
      email: "dubai@dahla.net",
      coordinates: [25.2048, 55.2708]
    },
    {
      title: "Jebel Ali",
      address: "Jebel Ali Free Zone, Dubai, UAE",
      phone: "+971-4-8835522",
      email: "jebelali@dahla.net",
      coordinates: [24.9857, 55.0658]
    },
    {
      title: "Khartoum",
      address: "Khartoum International Airport Area, Sudan",
      phone: "+249-183-570023",
      email: "khartoum@dahla.net",
      coordinates: [15.5007, 32.5599]
    }
  ];

  useEffect(() => {
    if (!mapRef.current || map) return;

    // Create map instance
    const mapInstance = L.map(mapRef.current).setView([24.9857, 55.0658], 4);

    // Add tile layer (map style)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: ' OpenStreetMap contributors'
    }).addTo(mapInstance);

    // Custom icon for markers
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `<div class="w-6 h-6 rounded-full bg-dahla border-2 border-white shadow-lg flex items-center justify-center">
              <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
            </div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 24],
      popupAnchor: [0, -24]
    });

    // Add markers for each location
    const bounds = L.latLngBounds(locations.map(loc => loc.coordinates));
    
    locations.forEach(location => {
      const marker = L.marker(location.coordinates, { icon: customIcon })
        .addTo(mapInstance)
        .bindPopup(`
          <div class="p-3">
            <h3 class="font-bold text-navy text-lg mb-2">${location.title}</h3>
            <p class="text-gray-600 mb-1">${location.address}</p>
            <p class="text-gray-600 mb-1">${location.phone}</p>
            <a href="mailto:${location.email}" class="text-dahla hover:text-dahla-dark">${location.email}</a>
          </div>
        `, {
          maxWidth: 300,
          className: 'custom-popup'
        });
    });

    // Fit map to show all markers
    mapInstance.fitBounds(bounds, { padding: [50, 50] });

    setMap(mapInstance);

    return () => {
      mapInstance.remove();
    };
  }, []);

  // Add required styles to head
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .custom-marker {
        background: transparent;
        border: none;
      }
      .custom-popup .leaflet-popup-content-wrapper {
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
      .custom-popup .leaflet-popup-tip {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Show success message
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <>
      <Helmet>
        <title>Contact Dahla Group | Logistics Experts in UAE & Sudan</title>
        <meta name="description" content="Get in touch with Dahla Group for premium freight forwarding and logistics services. Call or email us today for a personalized quote!" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24">
          {/* Hero Section */}
          <section className="bg-navy text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h1>
                <div className="w-24 h-1 bg-dahla mx-auto mb-8"></div>
                <p className="text-lg text-white/90 leading-relaxed">
                  Reach out to us for personalized logistics solutions. Our team is ready to assist you with any inquiries about our services.
                </p>
              </div>
            </div>
          </section>
          
          {/* Contact Information */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold text-navy mb-6 relative pb-4">
                    Send us a message
                    <span className="absolute bottom-0 left-0 w-16 h-1 bg-dahla"></span>
                  </h2>
                  
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
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
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
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dahla focus:border-transparent"
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Air Freight">Air Freight</option>
                          <option value="Sea Freight">Sea Freight</option>
                          <option value="Land Transport">Land Transport</option>
                          <option value="Customs Clearance">Customs Clearance</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
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
                        rows={5}
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
                
                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-6 relative pb-4">
                    Our Locations
                    <span className="absolute bottom-0 left-0 w-16 h-1 bg-dahla"></span>
                  </h2>
                  
                  <div className="space-y-8">
                    {locations.map((location, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-navy mb-4">{location.title}</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <MapPin className="h-5 w-5 mr-3 text-dahla shrink-0 mt-0.5" />
                            <span className="text-gray-700">{location.address}</span>
                          </li>
                          <li className="flex items-start">
                            <Phone className="h-5 w-5 mr-3 text-dahla shrink-0 mt-0.5" />
                            <a 
                              href={`tel:${location.phone.replace(/-/g, '')}`} 
                              className="text-gray-700 hover:text-dahla transition-colors"
                            >
                              {location.phone}
                            </a>
                          </li>
                          <li className="flex items-start">
                            <Mail className="h-5 w-5 mr-3 text-dahla shrink-0 mt-0.5" />
                            <a 
                              href={`mailto:${location.email}`} 
                              className="text-gray-700 hover:text-dahla transition-colors"
                            >
                              {location.email}
                            </a>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 mr-3 text-dahla shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-navy">Working Hours</h3>
                        <p className="text-gray-700 mt-1">
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 1:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Map Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div ref={mapRef} className="h-[600px] w-full"></div>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="py-16 bg-navy text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Need immediate assistance?</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Call our customer service hotline for immediate support with your logistics needs.
              </p>
              <a 
                href="tel:+97165396796" 
                className="bg-dahla hover:bg-dahla-dark text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 inline-flex items-center justify-center"
              >
                +971-6-5396796
              </a>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;