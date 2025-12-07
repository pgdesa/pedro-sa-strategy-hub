import { useEffect } from "react";

/**
 * Hook centralizado para scroll ao topo da página quando o componente monta.
 * Usa { top: 0, behavior: 'instant' } para evitar "piscadas" visuais.
 */
export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);
};
