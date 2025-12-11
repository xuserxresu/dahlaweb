import { SEO } from "@/lib/seo";
import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from "@/lib/seo-utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Warehouse, ShieldCheck, FileCheck, Truck } from "lucide-react";

const LogisticsSupportPage = () => {
  const faqs = [
    { question: "Do you provide customs clearance?", answer: "Yes—full customs brokerage is available." },
    { question: "Do you offer insurance?", answer: "Yes—cargo insurance is part of our service suite." },
    { question: "Is warehousing available?", answer: "Yes—DAHLA offers secure warehousing options." }
  ];

  const structuredData = [
    getServiceSchema({
      name: "Logistics Support Services",
      description: "Warehousing, cargo insurance, and customs documentation solutions to support seamless international freight.",
      provider: "DAHLA",
      areaServed: ["United Arab Emirates", "Sudan"],
      serviceType: "Logistics Support Services"
    }),
    getBreadcrumbSchema([
      { name: "Home", url: "https://dahla.net/" },
      { name: "Services", url: "https://dahla.net/services" },
      { name: "Logistics Support Services", url: "https://dahla.net/services/logistics-support" }
    ]),
    getFAQSchema(faqs)
  ];

  return (
    <>
      <SEO
        title="Logistics Support Services – DAHLA"
        description="DAHLA provides warehousing, cargo insurance, and customs documentation solutions for smooth international freight."
        canonical="/services/logistics-support"
        structuredData={structuredData}
      />

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <section className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-dark text-white py-20">
            <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/sharfi/Customs.jpg?updatedAt=1740665976465')] bg-cover bg-center opacity-10"></div>
            <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
              <p className="text-sm uppercase tracking-wide text-white/70 mb-4">Logistics Support Services</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">End-to-End Solutions for Smooth Cargo Movement</h1>
              <p className="text-white/85 text-lg leading-relaxed">
                Beyond transportation, DAHLA offers essential logistics services to complete the cargo lifecycle.
              </p>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { icon: <ShieldCheck className="h-6 w-6" />, title: "Cargo Insurance", text: "Protection for shipments with compliant coverage options." },
                  { icon: <Warehouse className="h-6 w-6" />, title: "Secure Warehousing", text: "Safe, organized storage to keep cargo ready and protected." },
                  { icon: <FileCheck className="h-6 w-6" />, title: "Documentation", text: "Customs clearance, paperwork, and delivery documentation handled." },
                  { icon: <Truck className="h-6 w-6" />, title: "Last-Mile Ready", text: "Brokerage and delivery coordination to complete the journey." },
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
                  <h2 className="text-2xl font-bold text-navy mb-4">Our Logistics Support Includes</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                    <ul className="space-y-3">
                      <li>Cargo Insurance</li>
                      <li>Warehousing</li>
                    </ul>
                    <ul className="space-y-3">
                      <li>Brokerage: customs clearance</li>
                      <li>Documentation and delivery coordination</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-navy text-white rounded-2xl p-8 shadow-lg flex flex-col justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-white/70">Why We Stand Out</p>
                    <ul className="space-y-2 mt-3 text-white/85">
                      <li>Reliable documentation support</li>
                      <li>Customs expertise</li>
                      <li>Secure storage</li>
                      <li>Seamless last-mile coordination</li>
                    </ul>
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-white/90">
                    <ShieldCheck className="h-6 w-6 text-dahla" />
                    <span>Confidence from origin to delivery</span>
                  </div>
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
                  <p className="text-sm uppercase tracking-wide text-white/70">Support at every step</p>
                  <h3 className="text-2xl font-semibold">Strengthen your logistics with DAHLA</h3>
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

export default LogisticsSupportPage;

