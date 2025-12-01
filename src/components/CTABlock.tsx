import { User, Briefcase, FileText } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ctaImage from "@/assets/FINALSITE4.jpg";

export const CTABlock = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
  }, []);

  // Parallax effect
  useEffect(() => {
    if (!isVisible || !imageRef.current) return;

    const handleScroll = () => {
      if (!imageRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = 1 - (rect.top + rect.height) / (window.innerHeight + rect.height);
      const parallaxY = scrollProgress * 55;
      imageRef.current.style.transform = `translateY(${parallaxY}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-start lg:items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
      id="cta"
    >
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-background via-surface-elevated to-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95" />
      <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-primary/6 rounded-full blur-[150px]" />
      
      <div className="container mx-auto max-w-7xl relative z-10 w-full">
        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* TEXTO - coluna reduzida */}
          <div data-text className="col-span-12 lg:col-span-6 xl:col-span-6 space-y-3 sm:space-y-4 lg:space-y-5 animate-fade-in order-2 lg:order-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-0">
            <h2 className="font-poppins font-bold text-foreground leading-tight text-glow text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
              Quer conhecer mais sobre o meu trabalho?
            </h2>

            <p className="text-sm sm:text-base lg:text-base xl:text-lg text-foreground-secondary font-inter leading-relaxed">
              Escolha um caminho e continue — a navegação é linear e direta.
            </p>

            {/* CTA Links - glass cards */}
            <div className="space-y-4 pt-4">
              <a href="#bio" className="flex gap-5 items-center group cursor-pointer transition-all duration-500 ease-smooth hover:translate-x-3 glass p-5 rounded-xl border border-glass-border hover:border-primary/40 hover:bg-surface/40">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-lg bg-surface/50 border border-glass-border group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <User className="w-7 h-7 text-primary drop-shadow-glow" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-poppins font-semibold text-foreground text-lg group-hover:text-primary transition-colors">Quem sou eu</div>
                  <div className="text-sm text-foreground-secondary font-inter">minha trajetória e visão</div>
                </div>
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>

              <a href="#projetos" className="flex gap-5 items-center group cursor-pointer transition-all duration-500 ease-smooth hover:translate-x-3 glass p-5 rounded-xl border border-glass-border hover:border-primary/40 hover:bg-surface/40">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-lg bg-surface/50 border border-glass-border group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <Briefcase className="w-7 h-7 text-primary drop-shadow-glow" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-poppins font-semibold text-foreground text-lg group-hover:text-primary transition-colors">Veja meus projetos</div>
                  <div className="text-sm text-foreground-secondary font-inter">portfólio visual</div>
                </div>
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>

              <a href="#trabalho" className="flex gap-5 items-center group cursor-pointer transition-all duration-500 ease-smooth hover:translate-x-3 glass p-5 rounded-xl border border-glass-border hover:border-primary/40 hover:bg-surface/40">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-lg bg-surface/50 border border-glass-border group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <FileText className="w-7 h-7 text-primary drop-shadow-glow" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-poppins font-semibold text-foreground text-lg group-hover:text-primary transition-colors">Conheça meu trabalho</div>
                  <div className="text-sm text-foreground-secondary font-inter">resultados em ação</div>
                </div>
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            </div>
          </div>

          {/* IMAGEM - coluna expandida */}
          <div data-photo className="col-span-12 lg:col-span-6 xl:col-span-6 animate-fade-in-delay order-1 lg:order-2 flex items-center justify-center">
            <div className="relative perspective-container w-full">
              {/* Layered glow effects */}
              <div className="absolute -inset-12 bg-gradient-to-tl from-primary/25 via-accent/15 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none" />
              <div className="absolute -inset-8 bg-gradient-to-br from-accent/20 to-primary/15 rounded-full blur-2xl opacity-60 pointer-events-none" />
              
              <img
                 ref={imageRef}
                 src={ctaImage}
                 alt="Perfil lateral de Pedro Sá em estúdio, destacando rim-light nas bordas, blazer escuro e postura contemplativa profissional"
                 width={800}
                 height={1067}
                 className="relative max-h-[85vh] w-full h-auto object-contain transition-all duration-700 ease-smooth hover:scale-[1.02] drop-shadow-premium-lg"
                 loading="lazy"
                 decoding="async"
                 srcSet={`${ctaImage} 1x, ${ctaImage} 2x`}
                 sizes="(max-width: 1024px) 100vw, 66vw"
               />
              
              {/* Rim light accent simulation */}
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/30 to-transparent opacity-50 rounded-r-full blur-xl pointer-events-none" />
              
              {/* Floating particles */}
              <div className="absolute top-1/4 -left-10 w-28 h-28 bg-primary/20 rounded-full blur-2xl animate-pulse pointer-events-none" style={{ animationDuration: '4s' }} />
              <div className="absolute bottom-1/4 -right-8 w-36 h-36 bg-accent/15 rounded-full blur-2xl animate-pulse pointer-events-none" style={{ animationDuration: '5s', animationDelay: '2s' }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
