import { SEO } from "@/lib/seo";
import { getLocalBusinessSchema, getBreadcrumbSchema } from "@/lib/seo-utils";
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
    origin: '',
    destination: '',
    cargoType: '',
    dimensions: '',
    weight: '',
    inboundDate: '',
    outboundDate: ''
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
      origin: '',
      destination: '',
      cargoType: '',
      dimensions: '',
      weight: '',
      inboundDate: '',
      outboundDate: ''
    });
    
    // Show success message
    alert('Thank you for your quote request. We will get back to you shortly with a customized quote!');
  };

  // Generate structured data for all locations
  const locationsSchema = locations.map(location => getLocalBusinessSchema({
    name: location.title,
    address: location.address,
    phone: location.phone,
    email: location.email,
    coordinates: location.coordinates
  }));

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://dahla.net/" },
    { name: "Contact Us", url: "https://dahla.net/contact" }
  ]);

  return (
    <>
      <SEO
        title="Request a Quote | Contact Dahla Group Logistics | Air Freight, Sea Freight, Land Transport"
        description="Request a customized quote for your freight forwarding and logistics needs. Contact Dahla Group offices in Sharjah, Dubai, Jebel Ali, and Khartoum. Fill out our easy-to-use quote request form with origin, destination, cargo details, and dates. Get competitive rates for air freight, sea freight, and land transport."
        keywords="contact Dahla Group, logistics quote UAE, freight forwarding quote, contact freight forwarder Dubai, logistics company contact, request quote, Dahla Group contact, logistics services quote, air freight quote, sea freight quote, land transport quote, freight forwarding contact, shipping quote UAE, cargo quote Dubai, logistics consultation UAE"
        canonical="/contact"
        structuredData={[...locationsSchema, breadcrumbSchema]}
      />
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-16">
          {/* Hero Section */}
          <section className="bg-navy text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Request a Quote</h1>
                <div className="w-24 h-1 bg-dahla mx-auto mb-8"></div>
                <p className="text-lg text-white/90 leading-relaxed">
                  Get a customized quote for your logistics needs. Fill out the form below with your shipment details and our team will provide you with a competitive quote.
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
                    Request a Quote
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
                    
                    <div className="mb-6">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dahla focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-1">
                          Origin *
                        </label>
                        <input
                          type="text"
                          id="origin"
                          name="origin"
                          value={formData.origin}
                          onChange={handleChange}
                          required
                          placeholder="City, Country"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dahla focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                          Destination *
                        </label>
                        <input
                          type="text"
                          id="destination"
                          name="destination"
                          value={formData.destination}
                          onChange={handleChange}
                          required
                          placeholder="City, Country"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dahla focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="cargoType" className="block text-sm font-medium text-gray-700 mb-1">
                        Cargo Type *
                      </label>
                      <select
                        id="cargoType"
                        name="cargoType"
                        value={formData.cargoType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dahla focus:border-transparent"
                      >
                        <option value="">Select cargo type</option>
                        <option value="General Cargo">General Cargo</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Machinery">Machinery</option>
                        <option value="Textiles">Textiles</option>
                        <option value="Food & Beverages">Food & Beverages</option>
                        <option value="Chemicals">Chemicals</option>
                        <option value="Vehicles">Vehicles</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Medical Supplies">Medical Supplies</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="dimensions" className="block text-sm font-medium text-gray-700 mb-1">
                          Dimensions *
                        </label>
                        <input
                          type="text"
                          id="dimensions"
                          name="dimensions"
                          value={formData.dimensions}
                          onChange={handleChange}
                          required
                          placeholder="L x W x H (cm)"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dahla focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                          Weight *
                        </label>
                        <input
                          type="text"
                          id="weight"
                          name="weight"
                          value={formData.weight}
                          onChange={handleChange}
                          required
                          placeholder="kg"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dahla focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="outboundDate" className="block text-sm font-medium text-gray-700 mb-1">
                          Outbound Date *
                        </label>
                        <input
                          type="date"
                          id="outboundDate"
                          name="outboundDate"
                          value={formData.outboundDate}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dahla focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="inboundDate" className="block text-sm font-medium text-gray-700 mb-1">
                          Inbound Date *
                        </label>
                        <input
                          type="date"
                          id="inboundDate"
                          name="inboundDate"
                          value={formData.inboundDate}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dahla focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="btn-primary w-full"
                    >
                      Request Quote
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