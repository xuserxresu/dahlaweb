import { SEO } from "@/lib/seo";
import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from "@/lib/seo-utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PlaneTakeoff, ShieldCheck, Fuel, FileCheck, Workflow } from "lucide-react";

const AirlineActivitiesPage = () => {
  const faqs = [
    { question: "Do you assist with airline permissions?", answer: "Yes, we secure required aviation permits." },
    { question: "Do you provide ground handling?", answer: "Yes—complete in-landing and handling services." },
    { question: "Do you coordinate fueling?", answer: "Yes—fueling support is included." }
  ];

  const structuredData = [
    getServiceSchema({
      name: "Airline Activities",
      description: "Chartering, brokering, ground handling, fueling coordination, permissions, and forwarding/clearing services for airlines and cargo operators.",
      provider: "DAHLA",
      areaServed: ["United Arab Emirates", "Sudan"],
      serviceType: "Airline Activities"
    }),
    getBreadcrumbSchema([
      { name: "Home", url: "https://dahla.net/" },
      { name: "Services", url: "https://dahla.net/services" },
      { name: "Airline Activities", url: "https://dahla.net/services/airline-activities" }
    ]),
    getFAQSchema(faqs)
  ];

  return (
    <>
      <SEO
        title="Airline Activities – DAHLA"
        description="DAHLA offers chartering, brokering, ground handling, permissions, fueling, and more for global aviation partners."
        canonical="/services/airline-activities"
        structuredData={structuredData}
      />

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <section className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-dark text-white py-20">
            <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/sharfi/sharfi__world_map_for_shipping_routes_--ar_169_--v_6.1_835624be-ca14-4126-aa10-3c9bb7902eab_1.png?updatedAt=1740664483984')] bg-cover bg-center opacity-10"></div>
            <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
              <p className="text-sm uppercase tracking-wide text-white/70 mb-4">Airline Activities</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Complete Aviation, Handling & Operations Support</h1>
              <p className="text-white/85 text-lg leading-relaxed">
                DAHLA provides essential services for airlines and cargo operators, ensuring smooth and compliant operations on the ground and in the air.
              </p>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { icon: <PlaneTakeoff className="h-6 w-6" />, title: "Charter & Broker", text: "Chartering and brokering for cargo carriers and special missions." },
                  { icon: <Fuel className="h-6 w-6" />, title: "Fueling & Ground", text: "Fueling coordination plus in-landing and handling services." },
                  { icon: <FileCheck className="h-6 w-6" />, title: "Permissions", text: "Obtaining required aviation permissions and clearances." },
                  { icon: <ShieldCheck className="h-6 w-6" />, title: "Compliance", text: "Forwarding, clearing, and regulatory alignment for every movement." },
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
                  <h2 className="text-2xl font-bold text-navy mb-4">Our Airline Activity Services</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                    <ul className="space-y-3">
                      <li>Chartering</li>
                      <li>Brokering in Air-Freighting</li>
                      <li>In-Landing / Handling</li>
                      <li>Fueling Coordination</li>
                    </ul>
                    <ul className="space-y-3">
                      <li>Obtaining Required Permissions</li>
                      <li>All Aviation Support Services</li>
                      <li>Forwarding & Clearing</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-navy text-white rounded-2xl p-8 shadow-lg flex flex-col justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-white/70">Industry Roles</p>
                    <h3 className="text-2xl font-semibold mb-4">Trusted Airline Partner</h3>
                    <ul className="space-y-2 text-white/85">
                      <li>Handling Agent of Etihad Airways</li>
                      <li>Authorized Online Cargo Agent of Etihad Airways for Khartoum, UAE</li>
                      <li>GSA of Das Air in Sudan</li>
                    </ul>
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-white/90">
                    <Workflow className="h-6 w-6 text-dahla" />
                    <span>High-volume, time-sensitive operational expertise</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">Why Airlines Trust DAHLA</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "More than 40 years of operational expertise",
                    "Strong compliance and regulatory capabilities",
                    "Experienced in high-volume, time-sensitive operations",
                    "End-to-end support across ground and air"
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
                  <p className="text-sm uppercase tracking-wide text-white/70">Aviation support</p>
                  <h3 className="text-2xl font-semibold">Partner with DAHLA for compliant, on-time airline operations</h3>
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

export default AirlineActivitiesPage;

