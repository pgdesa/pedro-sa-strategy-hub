import { useEffect, useRef, useState, RefObject } from "react";

interface UseParallaxOptions {
  /** Intensidade do parallax em pixels (default: 50) */
  intensity?: number;
  /** Só ativa quando a seção está visível (default: true) */
  onlyWhenVisible?: boolean;
}

interface UseParallaxReturn {
  /** Ref para a seção container */
  sectionRef: RefObject<HTMLElement>;
  /** Ref para o elemento que terá parallax */
  elementRef: RefObject<HTMLImageElement>;
  /** Se a seção está visível no viewport */
  isVisible: boolean;
}

/**
 * Hook reutilizável para efeito de parallax em scroll.
 * Respeita prefers-reduced-motion automaticamente.
 * Inclui guards para ambientes sem DOM (SSR/testes).
 */
export const useParallax = (options: UseParallaxOptions = {}): UseParallaxReturn => {
  const { intensity = 50, onlyWhenVisible = true } = options;
  
  const sectionRef = useRef<HTMLElement>(null);
  const elementRef = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detecta preferência de redução de movimento
  useEffect(() => {
    // Guard para SSR/testes
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Intersection Observer para detectar visibilidade
  useEffect(() => {
    // Guard para SSR/testes
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      return;
    }

    if (!onlyWhenVisible) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [onlyWhenVisible]);

  // Efeito de parallax no scroll
  useEffect(() => {
    // Guard para SSR/testes
    if (typeof window === "undefined") {
      return;
    }

    // Não aplica parallax se:
    // - Usuário preferir redução de movimento
    // - Seção não estiver visível (quando onlyWhenVisible = true)
    // - Refs não estiverem disponíveis
    if (prefersReducedMotion || !isVisible || !elementRef.current || !sectionRef.current) {
      return;
    }

    const handleScroll = () => {
      if (!elementRef.current || !sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = 1 - (rect.top + rect.height) / (window.innerHeight + rect.height);
      const parallaxY = scrollProgress * intensity;
      
      elementRef.current.style.transform = `translateY(${parallaxY}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Aplica estado inicial
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion, isVisible, intensity]);

  return { sectionRef, elementRef, isVisible };
};
