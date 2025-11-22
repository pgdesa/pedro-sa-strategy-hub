import { useEffect, useRef, useState } from "react";

interface StackedCrossfadeProps {
  sections: React.ReactNode[];
}

export const StackedCrossfade = ({ sections }: StackedCrossfadeProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const wrapperHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress (0 = top of wrapper at top of viewport, 1 = bottom of wrapper at bottom of viewport)
      const scrollStart = -rect.top;
      const scrollRange = wrapperHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrollStart / scrollRange));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate which section is active and transition progress
  const sectionCount = sections.length;
  const sectionProgress = scrollProgress * (sectionCount - 1);
  const currentSectionIndex = Math.floor(sectionProgress);
  const transitionProgress = sectionProgress - currentSectionIndex;

  return (
    <div 
      ref={wrapperRef}
      className="relative"
      style={{ height: `${sectionCount * 250}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-x-hidden overflow-y-auto">
        {sections.map((section, index) => {
          const isActive = index === currentSectionIndex;
          const isNext = index === currentSectionIndex + 1;
          
          let opacity = 0;
          let blur = 2;
          let translateY = 0;
          let scale = 1;
          
          if (isActive) {
            // Fade out suave do bloco atual
            opacity = Math.max(0, 1 - (transitionProgress * 1.5));
            blur = transitionProgress * 3;
            translateY = 0;
            scale = 1;
          } else if (isNext) {
            // Fade in suave do próximo bloco começando cedo
            opacity = Math.min(1, transitionProgress * 1.5);
            blur = (1 - transitionProgress) * 3;
            translateY = 0;
            scale = 1;
          }

          // Reduced motion: faster fades only
          if (prefersReducedMotion) {
            blur = 0;
            translateY = 0;
            scale = 1;
          }

          return (
            <div
              key={index}
              className="absolute inset-0"
              style={{
                opacity,
                filter: `blur(${blur}px)`,
                transform: `translateY(${translateY}px) scale(${scale})`,
                transition: prefersReducedMotion 
                  ? "opacity 0.2s ease-out" 
                  : "none",
                pointerEvents: isActive || isNext ? "auto" : "none",
              }}
            >
              <div
                className="h-full w-full"
                style={{
                  // Apply additional animations to text and photo elements
                  ["--text-letter-spacing" as string]: isActive 
                    ? `${transitionProgress * 0.06}em` 
                    : isNext 
                    ? `${(1 - transitionProgress) * 0.06}em` 
                    : "0em",
                }}
              >
                {section}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
