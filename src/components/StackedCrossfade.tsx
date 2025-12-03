import { useEffect, useRef, useState } from "react";

interface StackedCrossfadeProps {
  sections: React.ReactNode[];
}

export const StackedCrossfade = ({ sections }: StackedCrossfadeProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isSmallViewport, setIsSmallViewport] = useState(false);

  useEffect(() => {
    const updateViewport = () => {
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
  const sectionCount = sections.length;
  const sectionProgress = scrollProgress * (sectionCount - 1);
  const currentSectionIndex = Math.floor(sectionProgress);
  const transitionProgress = sectionProgress - currentSectionIndex;

  return (
    <div 
      ref={wrapperRef}
      className="relative"
      style={{ height: `${sectionCount * 100}vh` }}
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

          return (
            <div
              key={index}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                opacity,
                filter: blur > 0 ? `blur(${blur}px)` : 'none',
                transition: prefersReducedMotion ? "opacity 0.2s ease-out" : "none",
                pointerEvents: isActive || isNext ? "auto" : "none",
              }}
            >
              {section}
            </div>
          );
        })}
      </div>
    </div>
  );
};
