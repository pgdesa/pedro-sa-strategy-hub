import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense, memo } from "react";

// Critical pages loaded eagerly
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load for non-critical routes
const Bio = lazy(() => import("./pages/Bio"));
const Trabalhos = lazy(() => import("./pages/Trabalhos"));
const Contato = lazy(() => import("./pages/Contato"));
const AgendarDiagnostico = lazy(() => import("./pages/AgendarDiagnostico"));
const Curriculo = lazy(() => import("./pages/Curriculo"));

// Loading fallback simples - memoized to prevent re-renders
const PageLoader = memo(() => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
));
PageLoader.displayName = "PageLoader";

// Suspense wrapper for lazy routes
const LazyRoute = memo(({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<PageLoader />}>{children}</Suspense>
));
LazyRoute.displayName = "LazyRoute";

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bio" element={<LazyRoute><Bio /></LazyRoute>} />
          <Route path="/trabalhos" element={<LazyRoute><Trabalhos /></LazyRoute>} />
          <Route path="/trabalhos/:categorySlug" element={<LazyRoute><Trabalhos /></LazyRoute>} />
          <Route path="/trabalhos/:categorySlug/:workSlug" element={<LazyRoute><Trabalhos /></LazyRoute>} />
          <Route path="/contato" element={<LazyRoute><Contato /></LazyRoute>} />
          <Route path="/curriculo" element={<LazyRoute><Curriculo /></LazyRoute>} />
          <Route path="/agendar-diagnostico" element={<LazyRoute><AgendarDiagnostico /></LazyRoute>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;
