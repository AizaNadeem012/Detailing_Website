import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Location from "./pages/Location";
import ServicePage from "@/pages/ServicePage";
import ListingEdit from "./pages/ListingEdit";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MobileCarValetingStockport from "./pages/MobileCarValetingStockport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Toasters inside BrowserRouter if they use Router hooks */}
      <BrowserRouter>
        <Toaster />
        <Sonner />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/location" element={<Location />} />
          <Route path="/listings/add" element={<ListingEdit />} />
          <Route path="/mobile-car-valeting-stockport" element={<MobileCarValetingStockport />} />
          <Route path="/listings/edit/:id" element={<ListingEdit />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
