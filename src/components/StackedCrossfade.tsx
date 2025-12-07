import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import React from "react";

interface StackedCrossfadeProps {
  sections: React.ReactNode[];
}

const StackedCrossfadeComponent = ({ sections }: StackedCrossfadeProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isSmallViewport, setIsSmallViewport] = useState(false);
  const rafRef = useRef<number | null>(null);

  // Viewport detection
  useEffect(() => {
    const updateViewport = () => {
      setIsSmallViewport(window.innerWidth < 1024);
    };

    updateViewport();
    window.addEventListener("resize", updateViewport, { passive: true });
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  // Reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Optimized scroll handler with RAF
  const handleScroll = useCallback(() => {
    if (!wrapperRef.current) return;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      if (!wrapperRef.current) return;
      
      const rect = wrapperRef.current.getBoundingClientRect();
      const wrapperHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      const scrollStart = -rect.top;
      const scrollRange = wrapperHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrollStart / scrollRange));
      
      setScrollProgress(progress);
    });
  }, []);

  useEffect(() => {
    if (isSmallViewport) return;

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isSmallViewport, handleScroll]);

  // Memoized calculations
  const sectionCount = sections.length;
  
  const { currentSectionIndex, transitionProgress } = useMemo(() => {
    const sectionProgress = scrollProgress * (sectionCount - 1);
    return {
      currentSectionIndex: Math.floor(sectionProgress),
      transitionProgress: sectionProgress - Math.floor(sectionProgress)
    };
  }, [scrollProgress, sectionCount]);

  const wrapperHeight = useMemo(() => `${sectionCount * 100}vh`, [sectionCount]);

  // Mobile/tablet: sequência normal sem efeito
  if (isSmallViewport) {
    return (
      <div className="flex flex-col w-full">
        {sections.map((section, index) => (
          <div key={index} className="w-full">
            {section}
          </div>
        ))}
      </div>
    );
  }

  // Desktop: stacked crossfade
  return (
    <div 
      ref={wrapperRef}
      className="relative"
      style={{ height: wrapperHeight }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {sections.map((section, index) => {
          const isActive = index === currentSectionIndex;
          const isNext = index === currentSectionIndex + 1;
          
          let opacity = 0;
          let blur = 0;
          
          if (isActive) {
            opacity = Math.max(0, 1 - (transitionProgress * 1.2));
            blur = transitionProgress * 2;
          } else if (isNext) {
            opacity = Math.min(1, transitionProgress * 1.2);
            blur = (1 - transitionProgress) * 2;
          }

          if (prefersReducedMotion) {
            blur = 0;
          }

          // Skip invisible sections
          const isVisible = opacity > 0 || isActive || isNext;
          if (!isVisible) {
            return null;
          }

          // Acessibilidade: seções não ativas ficam ocultas para leitores de tela
          const isHiddenFromA11y = !isActive && !isNext;

          return (
            <div
              key={index}
              className="absolute inset-0 flex items-center justify-center will-change-[opacity,filter]"
              style={{
                opacity,
                filter: blur > 0 ? `blur(${blur}px)` : 'none',
                transition: prefersReducedMotion ? "opacity 0.2s ease-out" : "none",
                pointerEvents: isActive || isNext ? "auto" : "none",
              }}
              aria-hidden={isHiddenFromA11y}
            >
              {section}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const StackedCrossfade = React.memo(StackedCrossfadeComponent);
