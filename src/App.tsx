import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import AirFreightPage from "./pages/services/AirFreightPage";
import SeaFreightPage from "./pages/services/SeaFreightPage";
import AirlineActivitiesPage from "./pages/services/AirlineActivitiesPage";
import SpecializedCargoPage from "./pages/services/SpecializedCargoPage";
import LogisticsSupportPage from "./pages/services/LogisticsSupportPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/air-freight" element={<AirFreightPage />} />
          <Route path="/services/sea-freight" element={<SeaFreightPage />} />
          <Route path="/services/airline-activities" element={<AirlineActivitiesPage />} />
          <Route path="/services/specialized-cargo" element={<SpecializedCargoPage />} />
          <Route path="/services/logistics-support" element={<LogisticsSupportPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton phoneNumber="+971501234567" /> {/* Replace with your actual WhatsApp number */}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
