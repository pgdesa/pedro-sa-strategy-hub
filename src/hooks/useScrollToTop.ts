import { useEffect } from "react";

/**
 * Hook centralizado para scroll ao topo da página quando o componente monta.
 * Usa { top: 0, behavior: 'smooth' } para animação suave.
 * Inclui guard para ambientes sem DOM (SSR/testes).
 */
export const useScrollToTop = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
};
