import { SEO } from "@/lib/seo";
import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from "@/lib/seo-utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Boxes, Construction, Truck, ShieldCheck, Plane } from "lucide-react";

const SpecializedCargoPage = () => {
  const faqs = [
    { question: "Do you manage oversized cargo via both air and sea?", answer: "Yes—air charters and sea break bulk options are available." },
    { question: "Do you transport live animals?", answer: "Yes—DAHLA transports cattle." },
    { question: "Do you handle industrial equipment?", answer: "Yes—oil and heavy machinery shipments are core specialties." }
  ];

  const structuredData = [
    getServiceSchema({
      name: "Specialized Cargo Handling",
      description: "Specialized handling for oversized cargo, oil equipment, heavy machinery, vehicles, and cattle via air and sea with tailored routing and equipment.",
      provider: "DAHLA",
      areaServed: ["United Arab Emirates", "Sudan"],
      serviceType: "Specialized Cargo Handling"
    }),
    getBreadcrumbSchema([
      { name: "Home", url: "https://dahla.net/" },
      { name: "Services", url: "https://dahla.net/services" },
      { name: "Specialized Cargo Handling", url: "https://dahla.net/services/specialized-cargo" }
    ]),
    getFAQSchema(faqs)
  ];

  return (
    <>
      <SEO
        title="Specialized Cargo Handling – DAHLA"
        description="DAHLA specializes in oversized cargo, oil equipment, heavy machinery, and cattle transport via air and sea."
        canonical="/services/specialized-cargo"
        structuredData={structuredData}
      />

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <section className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-dark text-white py-20">
            <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/sharfi/sharfi__Container_truck_under_blue_sky_during_daytime_--ar_169__20e22bfd-272c-488a-b961-c78421ff55c5.png?updatedAt=1740665227840')] bg-cover bg-center opacity-10"></div>
            <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
              <p className="text-sm uppercase tracking-wide text-white/70 mb-4">Specialized Cargo Handling</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Expert Solutions for Heavy, Oversized & High-Value Cargo</h1>
              <p className="text-white/85 text-lg leading-relaxed">
                DAHLA is recognized for its ability to manage complex, non-standard, and sensitive shipments across both air and sea modes.
              </p>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { icon: <Boxes className="h-6 w-6" />, title: "Non-Standard Loads", text: "Oversized cargo and irregular dimensions managed end-to-end." },
                  { icon: <Construction className="h-6 w-6" />, title: "Industrial Strength", text: "Oil equipment, heavy machinery, and engineered lifts." },
                  { icon: <Truck className="h-6 w-6" />, title: "Ro/Ro & Break Bulk", text: "Rolling cargo and break bulk options with secure lashing." },
                  { icon: <ShieldCheck className="h-6 w-6" />, title: "Risk Managed", text: "Precise documentation, routing, and load management." },
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
                  <h2 className="text-2xl font-bold text-navy mb-4">We Specialize In</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                    <ul className="space-y-3">
                      <li>Oil Equipment</li>
                      <li>Oversized Cargo</li>
                    </ul>
                    <ul className="space-y-3">
                      <li>Vehicles & Heavy Machinery</li>
                      <li>Cattle Transport</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-navy text-white rounded-2xl p-8 shadow-lg flex flex-col justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-white/70">Why Our Expertise Matters</p>
                    <p className="text-white/85 mt-3">
                      Special handling, precise documentation, customized routing, advanced equipment, and reliable load management—delivered with 40+ years of proven success.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-white/90">
                    <ShieldCheck className="h-6 w-6 text-dahla" />
                    <span>Mitigated risk for high-value and sensitive cargo</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">Suitable Transport Modes</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-gray-700 shadow-sm">
                    <p className="font-semibold text-navy mb-1">Air Charter</p>
                    <p className="text-sm">IL-76, L1011, AN124, B747, B707</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-gray-700 shadow-sm">
                    <p className="font-semibold text-navy mb-1">Sea Break Bulk</p>
                    <p className="text-sm">Engineered stowage for oversized cargo</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-gray-700 shadow-sm">
                    <p className="font-semibold text-navy mb-1">Ro/Ro</p>
                    <p className="text-sm">Rolling cargo for vehicles and machinery</p>
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
                  <p className="text-sm uppercase tracking-wide text-white/70">Complex cargo, simplified</p>
                  <h3 className="text-2xl font-semibold">Deploy DAHLA for specialized cargo handling</h3>
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

export default SpecializedCargoPage;

