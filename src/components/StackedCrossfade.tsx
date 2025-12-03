import { useEffect, useRef, useState } from "react";

interface StackedCrossfadeProps {
  sections: React.ReactNode[];
}

export const StackedCrossfade = ({ sections }: StackedCrossfadeProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isSmallViewport, setIsSmallViewport] = useState(false);

  // Detect mobile / tablet to desativar o efeito "fixo" em telas menores
  useEffect(() => {
    const updateViewport = () => {
      // Mantém o efeito completo apenas em telas grandes (desktop)
      setIsSmallViewport(window.innerWidth < 1024);
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (isSmallViewport) return;

    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const wrapperHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      const scrollStart = -rect.top;
      const scrollRange = wrapperHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrollStart / scrollRange));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSmallViewport]);

  // Em mobile / tablet: renderiza os blocos em sequência normal
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

  // Desktop: stacked crossfade com altura suficiente para scroll
  const sectionCount = sections.length;
  const sectionProgress = scrollProgress * (sectionCount - 1);
  const currentSectionIndex = Math.floor(sectionProgress);
  const transitionProgress = sectionProgress - currentSectionIndex;

  return (
    <div 
      ref={wrapperRef}
      className="relative"
      style={{ height: `${sectionCount * 150}vh` }}
    >
      <div className="sticky top-0 w-full min-h-screen">
        {sections.map((section, index) => {
          const isActive = index === currentSectionIndex;
          const isNext = index === currentSectionIndex + 1;
          
          let opacity = 0;
          let blur = 2;
          
          if (isActive) {
            opacity = Math.max(0, 1 - (transitionProgress * 1.5));
            blur = transitionProgress * 3;
          } else if (isNext) {
            opacity = Math.min(1, transitionProgress * 1.5);
            blur = (1 - transitionProgress) * 3;
          }

          if (prefersReducedMotion) {
            blur = 0;
          }

          return (
            <div
              key={index}
              className="absolute top-0 left-0 right-0 bottom-0"
              style={{
                opacity,
                filter: `blur(${blur}px)`,
                transition: prefersReducedMotion 
                  ? "opacity 0.2s ease-out" 
                  : "none",
                pointerEvents: isActive || isNext ? "auto" : "none",
              }}
            >
              <div className="w-full h-full overflow-auto">
                {section}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
