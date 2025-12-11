import { SEO } from "@/lib/seo";
import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from "@/lib/seo-utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Ship, Anchor, ShieldCheck, Waves, Compass } from "lucide-react";

const SeaFreightPage = () => {
  const faqs = [
    { question: "Do you handle refrigerated cargo?", answer: "Yes—reefer load services are available for temperature-controlled shipments." },
    { question: "Can you support heavy or oversized cargo?", answer: "Yes—heavy lifts and break bulk services are core offerings for complex cargo." },
    { question: "Do you offer Ro/Ro services?", answer: "Yes—for vehicles and wheeled machinery." }
  ];

  const structuredData = [
    getServiceSchema({
      name: "Sea-Freight Services",
      description: "Flexible and cost-effective sea logistics including LCL, FCL, reefer, heavy lift, Ro/Ro, transit load, and break bulk solutions for complex cargo.",
      provider: "DAHLA",
      areaServed: ["United Arab Emirates", "Sudan"],
      serviceType: "Sea Freight"
    }),
    getBreadcrumbSchema([
      { name: "Home", url: "https://dahla.net/" },
      { name: "Services", url: "https://dahla.net/services" },
      { name: "Sea-Freight Services", url: "https://dahla.net/services/sea-freight" }
    ]),
    getFAQSchema(faqs)
  ];

  return (
    <>
      <SEO
        title="Sea-Freight Services – DAHLA"
        description="DAHLA provides LCL, FCL, reefer, heavy lift, Ro/Ro, and break bulk sea-freight solutions for complex global cargo."
        canonical="/services/sea-freight"
        structuredData={structuredData}
      />

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <section className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-dark text-white py-20">
            <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/sharfi/sharfi__vessel_operations_in_ports_--ar_169_--v_6.1_f9c51205-0271-4744-b359-207710b62653_3.png?updatedAt=1740465354810')] bg-cover bg-center opacity-15"></div>
            <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
              <p className="text-sm uppercase tracking-wide text-white/70 mb-4">Sea-Freight Services</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Flexible, Cost-Effective & Scalable Ocean Solutions</h1>
              <p className="text-white/85 text-lg leading-relaxed">
                DAHLA provides dependable sea-freight options for cargo of all sizes—from small LCL loads to complex oversized shipments.
              </p>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { icon: <Ship className="h-6 w-6" />, title: "Global Routes", text: "Reliable sailings with flexible routing and multi-port options." },
                  { icon: <Anchor className="h-6 w-6" />, title: "Heavy & Oversized", text: "Heavy lifts, break bulk, Ro/Ro for vehicles and machinery." },
                  { icon: <Waves className="h-6 w-6" />, title: "Cold Chain", text: "Reefer loads for temperature-controlled cargo." },
                  { icon: <ShieldCheck className="h-6 w-6" />, title: "Secure Handling", text: "Safe coordination from port to destination with documentation support." },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-xl p-4 shadow-sm flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-dahla/10 text-dahla flex items-center justify-center">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-navy">{item.title}</p>
                      <p className="text-gray-700 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl p-8 shadow-md">
                  <h2 className="text-2xl font-bold text-navy mb-4">Our Sea-Freight Services</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                    <ul className="space-y-3">
                      <li>LCL & FCL Shipments</li>
                      <li>Transit Load</li>
                      <li>Reefer Loads (temperature-controlled cargo)</li>
                      <li>Heavy Lifts</li>
                    </ul>
                    <ul className="space-y-3">
                      <li>Group Services</li>
                      <li>Full Container Loads</li>
                      <li>Ro/Ro Services (vehicles & machinery)</li>
                      <li>Break Bulk Services</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-navy text-white rounded-2xl p-8 shadow-lg flex flex-col justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-white/70">Specialized Cargo</p>
                    <h3 className="text-2xl font-semibold mb-4">Built for Complex Loads</h3>
                    <p className="text-white/85">Oil equipment, oversized industrial loads, vehicles, heavy machinery, and cattle.</p>
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-white/90">
                    <Compass className="h-6 w-6 text-dahla" />
                    <span>Route planning across major trade lanes</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">Why Choose DAHLA for Sea Freight?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Experience with complex cargo",
                    "Full coordination from port to destination",
                    "Flexible routing and multi-port options",
                    "Safe and secure handling"
                  ].map((item) => (
                    <div key={item} className="flex items-start text-gray-700">
                      <span className="mt-1 mr-3 inline-block h-2 w-2 rounded-full bg-dahla"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">FAQ</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="bg-gray-50 border border-gray-100 rounded-lg p-4">
                      <p className="font-semibold text-navy">{faq.question}</p>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-navy to-navy-dark text-white rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-lg">
                <div>
                  <p className="text-sm uppercase tracking-wide text-white/70">Plan your next sailing</p>
                  <h3 className="text-2xl font-semibold">Move your cargo with DAHLA’s sea-freight specialists</h3>
                </div>
                <a
                  href="/contact"
                  className="bg-dahla hover:bg-dahla-dark text-white font-semibold py-3 px-6 rounded-md transition-colors shadow"
                >
                  Contact DAHLA
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SeaFreightPage;

