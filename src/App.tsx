import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import Bio from "./pages/Bio";
import Trabalhos from "./pages/Trabalhos";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

// Lazy load para rotas menos acessadas
const AgendarDiagnostico = lazy(() => import("./pages/AgendarDiagnostico"));
const Curriculo = lazy(() => import("./pages/Curriculo"));

// Loading fallback simples
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/trabalhos" element={<Trabalhos />} />
          <Route path="/trabalhos/:categorySlug" element={<Trabalhos />} />
          <Route path="/trabalhos/:categorySlug/:workSlug" element={<Trabalhos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/curriculo" element={<Suspense fallback={<PageLoader />}><Curriculo /></Suspense>} />
          <Route path="/agendar-diagnostico" element={<Suspense fallback={<PageLoader />}><AgendarDiagnostico /></Suspense>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;
