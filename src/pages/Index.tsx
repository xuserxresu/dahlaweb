
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import PartnersSection from "@/components/home/PartnersSection";
import ContactSection from "@/components/home/ContactSection";
import StatsSection from "@/components/home/StatsSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Expert Logistics & Freight Forwarding Services | Dahla Group</title>
        <meta name="description" content="Discover top-tier air, sea, and land freight forwarding solutions with Dahla Group. Trusted logistics services in UAE and Sudan since 1983. Contact us today!" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <FeaturesSection />
          <StatsSection />
          <TestimonialSection />
          <PartnersSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
