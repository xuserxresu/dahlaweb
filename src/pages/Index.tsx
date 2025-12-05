import { SEO } from "@/lib/seo";
import { getOrganizationSchema, getWebsiteSchema, getBreadcrumbSchema } from "@/lib/seo-utils";
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
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://dahla.net/" }
  ]);

  return (
    <>
      <SEO
        title="Expert Logistics & Freight Forwarding Services | Air Freight, Sea Freight, Land Transport UAE & Sudan"
        description="Dahla Group: Leading logistics and freight forwarding company offering air freight, sea freight, land transport, and customs clearance services in UAE and Sudan since 1983. Get competitive rates for FCL, LCL, express shipping, and cargo services."
        keywords="air freight UAE, sea freight Dubai, land freight Sudan, logistics company UAE, freight forwarding Dubai, cargo services UAE, FCL shipping, LCL shipping, customs clearance UAE, freight forwarder Dubai, logistics services UAE, shipping company Dubai, international freight forwarding, cargo transport UAE, freight logistics, express air freight, sea freight forwarding, land transport UAE, freight forwarding services, logistics solutions UAE"
        canonical="/"
        structuredData={[organizationSchema, websiteSchema, breadcrumbSchema]}
      />
      
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
