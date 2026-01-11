import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook centralizado para scroll ao topo da página quando a rota muda.
 * Usa { top: 0, behavior: 'smooth' } para animação suave.
 * Inclui guard para ambientes sem DOM (SSR/testes).
 * Evita scroll desnecessário se já estiver no topo.
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Only scroll if pathname actually changed
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      
      // Only scroll if not already at top
      if (window.scrollY > 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [pathname]);
};
