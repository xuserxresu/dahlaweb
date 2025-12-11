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
        title="DAHLA Freight Forwarding – Global Air & Sea Logistics Since 1983"
        description="DAHLA delivers air-freight, sea-freight, charters, and specialized cargo solutions. Award-winning freight forwarding trusted by leading airlines since 1983."
        keywords="freight forwarding company, air freight services, sea freight services, charter cargo flights, cargo handling, oversized cargo transport, heavy machinery shipping, oil equipment shipping, UN relief cargo, Etihad cargo agent, cargo brokerage services, customs clearance services, Ro/Ro cargo shipping, break bulk logistics"
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
