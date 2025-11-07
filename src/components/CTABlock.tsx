import { Button } from "@/components/ui/button";
import { User, Briefcase, FileText } from "lucide-react";
import ctaImage from "@/assets/FINALSITE4.jpg";

export const CTABlock = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Multi-layer background with depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-background via-surface-elevated to-background"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95"></div>
      <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-primary/8 rounded-full blur-[150px]"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="relative perspective-container">
          {/* Floating image on the right */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[46%] lg:w-[38%] hidden lg:block animate-fade-in" style={{ transform: 'translateY(-50%) translateZ(110px)', transformStyle: 'preserve-3d' }}>
            <div className="relative">
              {/* Layered glow effects with depth */}
              <div className="absolute -inset-12 bg-gradient-to-tl from-primary/35 via-accent/25 to-transparent rounded-full blur-3xl opacity-70" style={{ transform: 'translateZ(-20px)' }}></div>
              <div className="absolute -inset-8 bg-gradient-to-br from-accent/30 to-primary/25 rounded-full blur-2xl opacity-60" style={{ transform: 'translateZ(-15px)' }}></div>
              
              <img
                src={ctaImage}
                alt="Perfil lateral de Pedro Sá em estúdio, destacando rim-light nas bordas, blazer escuro e postura contemplativa profissional"
                className="relative w-full h-auto object-cover aspect-[3/4] transition-all duration-700 ease-smooth hover:scale-[1.02] float"
                loading="lazy"
                decoding="async"
                style={{ 
                  transform: 'translateZ(90px)',
                  filter: 'drop-shadow(0 35px 80px rgba(0,0,0,0.9)) drop-shadow(0 15px 40px rgba(203, 163, 92, 0.25))'
                }}
              />
              
              {/* Rim light accent simulation with depth */}
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/40 to-transparent opacity-50 rounded-r-full blur-xl" style={{ transform: 'translateZ(95px)' }}></div>
              
              {/* Floating particles */}
              <div className="absolute top-1/4 -left-10 w-28 h-28 bg-primary/25 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s', transform: 'translateZ(-5px)' }}></div>
              <div className="absolute bottom-1/4 -right-8 w-36 h-36 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s', transform: 'translateZ(-5px)' }}></div>
            </div>
          </div>

          {/* Text Content - floating */}
          <div className="relative z-30 max-w-2xl space-y-10 animate-fade-in lg:pr-[46%]" style={{ transform: 'translateZ(65px)', transformStyle: 'preserve-3d' }}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-foreground leading-tight text-glow">
              Quer conhecer mais sobre o meu trabalho?
            </h2>

            <p className="text-base md:text-lg text-foreground-secondary font-inter leading-relaxed">
              Escolha um caminho e continue — a navegação é linear e direta.
            </p>

            {/* CTA Links - floating glass cards */}
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

              <a href="#projetos" className="flex gap-5 items-center group cursor-pointer transition-all duration-500 ease-smooth hover:translate-x-3 glass p-5 rounded-xl border border-glass-border hover:border-primary/40 hover:bg-surface/40" style={{ animationDelay: '0.1s' }}>
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-lg bg-surface/50 border border-glass-border group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <Briefcase className="w-7 h-7 text-primary drop-shadow-glow" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-poppins font-semibold text-foreground text-lg group-hover:text-primary transition-colors">Veja meus projetos</div>
                  <div className="text-sm text-foreground-secondary font-inter">portfólio visual</div>
                </div>
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>

              <a href="#trabalho" className="flex gap-5 items-center group cursor-pointer transition-all duration-500 ease-smooth hover:translate-x-3 glass p-5 rounded-xl border border-glass-border hover:border-primary/40 hover:bg-surface/40" style={{ animationDelay: '0.2s' }}>
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

          {/* Mobile image */}
          <div className="lg:hidden mt-12 animate-fade-in-delay">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-10 bg-gradient-to-tl from-primary/30 via-accent/20 to-transparent rounded-full blur-3xl opacity-60"></div>
              <img
                src={ctaImage}
                alt="Perfil lateral de Pedro Sá em estúdio, destacando rim-light nas bordas, blazer escuro e postura contemplativa profissional"
                className="relative w-full h-auto object-cover aspect-[3/4]"
                loading="lazy"
                decoding="async"
                style={{ filter: 'drop-shadow(0 35px 80px rgba(0,0,0,0.8)) drop-shadow(0 15px 40px rgba(255,168,92,0.2))' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
