import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

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

  const locations = [
    {
      title: "Sharjah",
      address: "Industrial Area 10, Sharjah, UAE",
      phone: "+971-6-5396796",
      email: "sharjah@dahla.net"
    },
    {
      title: "Dubai",
      address: "Dubai Creek, Dubai, UAE",
      phone: "+971-4-2235511",
      email: "dubai@dahla.net"
    },
    {
      title: "Jebel Ali",
      address: "Jebel Ali Free Zone, Dubai, UAE",
      phone: "+971-4-8835522",
      email: "jebelali@dahla.net"
    },
    {
      title: "Khartoum",
      address: "Khartoum International Airport Area, Sudan",
      phone: "+249-183-570023",
      email: "khartoum@dahla.net"
    }
  ];

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
              <div className="bg-gray-200 rounded-lg overflow-hidden h-96 relative">
                {/* This would typically contain an interactive map */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-dahla mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-navy mb-2">Interactive Map</h3>
                    <p className="text-gray-600">
                      Map would be embedded here in a production environment
                    </p>
                  </div>
                </div>
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