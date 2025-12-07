import { User, Briefcase, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import ctaImage from "@/assets/FINALSITE4.jpg";
import { useParallax } from "@/hooks/useParallax";

export const CTABlock = () => {
  const { sectionRef, elementRef: imageRef } = useParallax({ intensity: 55 });

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-start lg:items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
      id="cta"
    >
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-background via-surface-elevated to-background" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-primary/6 rounded-full blur-[150px]" aria-hidden="true" />
      
      <div className="container mx-auto max-w-7xl relative z-10 w-full">
        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* TEXTO - coluna compacta */}
          <div data-text className="col-span-12 lg:col-span-6 xl:col-span-6 space-y-2 lg:space-y-3 animate-fade-in order-2 lg:order-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-0">
            <h2 className="font-poppins font-bold text-foreground leading-tight text-glow text-xl sm:text-2xl lg:text-2xl xl:text-3xl">
              Escolha por onde começar — trajetória, projetos ou resultados em ação.
            </h2>

            <p className="text-xs sm:text-sm lg:text-sm text-foreground-secondary font-inter leading-relaxed">
              Quer conhecer mais do meu trabalho?
            </p>

            {/* CTA Links - glass cards - ultra compact */}
            <div className="space-y-1.5 pt-1">
              <Link to="/bio" className="flex gap-2.5 items-center group cursor-pointer transition-all duration-500 ease-smooth hover:translate-x-1.5 glass p-2.5 rounded-md border border-glass-border hover:border-primary/40 hover:bg-surface/40">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded bg-surface/50 border border-glass-border group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:scale-105 transition-all duration-300">
                  <User className="w-3.5 h-3.5 text-primary drop-shadow-glow" aria-hidden="true" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-poppins font-semibold text-foreground text-xs group-hover:text-primary transition-colors">Quem sou eu</div>
                  <div className="text-[10px] text-foreground-secondary font-inter leading-tight">minha trajetória e visão</div>
                </div>
                <span className="text-primary text-xs opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">→</span>
              </Link>

              <Link to="/trabalhos" className="flex gap-2.5 items-center group cursor-pointer transition-all duration-500 ease-smooth hover:translate-x-1.5 glass p-2.5 rounded-md border border-glass-border hover:border-primary/40 hover:bg-surface/40">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded bg-surface/50 border border-glass-border group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:scale-105 transition-all duration-300">
                  <Briefcase className="w-3.5 h-3.5 text-primary drop-shadow-glow" aria-hidden="true" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-poppins font-semibold text-foreground text-xs group-hover:text-primary transition-colors">Veja meus projetos</div>
                  <div className="text-[10px] text-foreground-secondary font-inter leading-tight">portfólio visual</div>
                </div>
                <span className="text-primary text-xs opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">→</span>
              </Link>

              <Link to="/trabalhos" className="flex gap-2.5 items-center group cursor-pointer transition-all duration-500 ease-smooth hover:translate-x-1.5 glass p-2.5 rounded-md border border-glass-border hover:border-primary/40 hover:bg-surface/40">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded bg-surface/50 border border-glass-border group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:scale-105 transition-all duration-300">
                  <FileText className="w-3.5 h-3.5 text-primary drop-shadow-glow" aria-hidden="true" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-poppins font-semibold text-foreground text-xs group-hover:text-primary transition-colors">Conheça meu trabalho</div>
                  <div className="text-[10px] text-foreground-secondary font-inter leading-tight">resultados em ação</div>
                </div>
                <span className="text-primary text-xs opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* IMAGEM - coluna expandida */}
          <div data-photo className="col-span-12 lg:col-span-6 xl:col-span-6 animate-fade-in-delay order-1 lg:order-2 flex items-center justify-center">
            <div className="relative perspective-container w-full">
              {/* Layered glow effects */}
              <div className="absolute -inset-12 bg-gradient-to-tl from-primary/25 via-accent/15 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none" aria-hidden="true" />
              <div className="absolute -inset-8 bg-gradient-to-br from-accent/20 to-primary/15 rounded-full blur-2xl opacity-60 pointer-events-none" aria-hidden="true" />
              
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
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/30 to-transparent opacity-50 rounded-r-full blur-xl pointer-events-none" aria-hidden="true" />
              
              {/* Floating particles */}
              <div className="absolute top-1/4 -left-10 w-28 h-28 bg-primary/20 rounded-full blur-2xl animate-pulse pointer-events-none" style={{ animationDuration: '4s' }} aria-hidden="true" />
              <div className="absolute bottom-1/4 -right-8 w-36 h-36 bg-accent/15 rounded-full blur-2xl animate-pulse pointer-events-none" style={{ animationDuration: '5s', animationDelay: '2s' }} aria-hidden="true" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
