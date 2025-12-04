import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Bio from "./pages/Bio";
import Trabalhos from "./pages/Trabalhos";
import Contato from "./pages/Contato";
import AgendarDiagnostico from "./pages/AgendarDiagnostico";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/trabalhos" element={<Trabalhos />} />
            <Route path="/trabalhos/:categorySlug" element={<Trabalhos />} />
            <Route path="/trabalhos/:categorySlug/:workSlug" element={<Trabalhos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/agendar-diagnostico" element={<AgendarDiagnostico />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
