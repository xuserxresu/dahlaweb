import { SEO } from "@/lib/seo";
import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from "@/lib/seo-utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Plane, Award, ShieldCheck, Clock3, Globe2 } from "lucide-react";

const AirFreightPage = () => {
  const faqs = [
    { question: "What types of cargo do you handle via air?", answer: "Oil equipment, oversized cargo, vehicles, heavy machinery, cattle, and general freight." },
    { question: "Do you offer chartered flights?", answer: "Yes—full aircraft charter services are available using trusted models like IL-76, L1011, AN124, B747, and B707." },
    { question: "Do you manage customs clearance?", answer: "Yes, through our customs brokerage services for documentation and clearance." }
  ];

  const structuredData = [
    getServiceSchema({
      name: "Air-Freight Services",
      description: "Comprehensive air-freight solutions including charters, consolidation, customs brokerage, transshipment, and cross-port services with award-winning airline partnerships.",
      provider: "DAHLA",
      areaServed: ["United Arab Emirates", "Sudan"],
      serviceType: "Air Freight"
    }),
    getBreadcrumbSchema([
      { name: "Home", url: "https://dahla.net/" },
      { name: "Services", url: "https://dahla.net/services" },
      { name: "Air-Freight Services", url: "https://dahla.net/services/air-freight" }
    ]),
    getFAQSchema(faqs)
  ];

  return (
    <>
      <SEO
        title="Air-Freight Services – DAHLA"
        description="Explore DAHLA’s specialized air-freight services including charters, consolidation, customs brokerage, and UN relief operations."
        canonical="/services/air-freight"
        structuredData={structuredData}
      />

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <section className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-dark text-white py-20">
            <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/sharfi/sharfi__cargo_ship_on_sea_under_blue_sky_during_daytime_--ar_16_3bf98d8f-6076-43ef-8350-81941fd4d3fb.png?updatedAt=1740664468780')] bg-cover bg-center opacity-15"></div>
            <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
              <p className="text-sm uppercase tracking-wide text-white/70 mb-4">Air-Freight Services</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Fast, Reliable & Award-Winning Air Cargo Solutions</h1>
              <p className="text-white/85 text-lg leading-relaxed">
                DAHLA delivers comprehensive air-freight services designed for speed, precision, and reliability. With more than 40 years of experience and strong airline partnerships, we support commercial, industrial, and humanitarian cargo movements across global destinations.
              </p>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { icon: <Award className="h-6 w-6" />, title: "Top Cargo Agent", text: "Recognized by Emirates SkyCargo, Etihad Cargo, and EgyptAir Cargo." },
                  { icon: <Plane className="h-6 w-6" />, title: "Charter Fleet", text: "IL-76, L1011, AN124, B747, B707 for oversized and urgent cargo." },
                  { icon: <ShieldCheck className="h-6 w-6" />, title: "Compliance Ready", text: "Customs brokerage and transshipment with precise documentation." },
                  { icon: <Clock3 className="h-6 w-6" />, title: "Time-Critical", text: "UN relief flights and priority handling for sensitive cargo." },
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
                  <h2 className="text-2xl font-bold text-navy mb-4">Our Air-Freight Services</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                    <div className="space-y-3">
                      <p><strong>Air Charters:</strong> Full aircraft charter solutions using trusted models like IL-76, L1011, AN124, B747, and B707—ideal for oversized, heavy, or urgent cargo.</p>
                      <p><strong>Consolidation:</strong> Efficient consolidation services ensuring cost-effective and optimized transport.</p>
                      <p><strong>Customs Brokerage:</strong> End-to-end support with documentation and clearance.</p>
                    </div>
                    <div className="space-y-3">
                      <p><strong>Transshipment:</strong> Seamless movement between multiple airports or carriers.</p>
                      <p><strong>Cross-Port Services:</strong> Flexible routing through regional and international hubs.</p>
                      <p><strong>Humanitarian Ops:</strong> Rapid response capability for relief missions across Africa.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-navy text-white rounded-2xl p-8 shadow-lg flex flex-col justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-white/70">Who We Serve</p>
                    <h3 className="text-2xl font-semibold mb-4">Industrial & Specialized Cargo</h3>
                    <p className="text-white/85">Industrial cargo, oversized loads, heavy machinery, vehicles, oil equipment, and cattle & live shipments.</p>
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-white/90">
                    <Globe2 className="h-6 w-6 text-dahla" />
                    <span>Global reach with priority handling</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-navy mb-3">Industry Recognition</h3>
                  <p className="text-gray-700">DAHLA has been honored as a Top Cargo Agent by Emirates SkyCargo, Etihad Cargo, and EgyptAir Cargo.</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-navy mb-3">Humanitarian Operations</h3>
                  <p className="text-gray-700">We have operated multiple UN relief flights across Africa, handling critical supplies under urgent timelines.</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">Why Choose DAHLA?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "40+ years of air logistics expertise",
                    "Trusted aircraft partners",
                    "Strong airline relationships",
                    "Precision, speed, and reliability"
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
                  <p className="text-sm uppercase tracking-wide text-white/70">Ready to ship?</p>
                  <h3 className="text-2xl font-semibold">Move your cargo with DAHLA’s air-freight team</h3>
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

export default AirFreightPage;

