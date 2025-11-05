import { Button } from "@/components/ui/button";
import { User, Briefcase, FileText } from "lucide-react";
import ctaImage from "@/assets/FINALSITE4.jpg";

export const CTABlock = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Multi-layer background with depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-background via-card to-background"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90"></div>
      <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-primary/5 rounded-full blur-[150px]"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="relative">
          {/* Floating image on the right */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[44%] lg:w-[36%] animate-fade-in-delay parallax-subtle hidden lg:block">
            <div className="relative">
              {/* Layered glow effects */}
              <div className="absolute -inset-10 bg-gradient-to-tl from-primary/30 via-accent/20 to-transparent rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -inset-6 bg-gradient-to-br from-accent/25 to-primary/20 rounded-full blur-2xl opacity-50"></div>
              
              <img
                src={ctaImage}
                alt="Perfil lateral de Pedro Sá em estúdio, destacando rim-light nas bordas, blazer escuro e postura contemplativa profissional"
                className="relative w-full h-auto object-cover aspect-[3/4] transition-transform duration-700 hover:scale-105"
                loading="lazy"
                decoding="async"
                style={{ 
                  filter: 'drop-shadow(0 35px 80px rgba(0,0,0,0.8)) drop-shadow(0 15px 40px rgba(255,168,92,0.2))',
                  clipPath: 'none'
                }}
              />
              
              {/* Rim light accent simulation */}
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/30 to-transparent opacity-40 rounded-r-full blur-xl"></div>
              
              {/* Floating particles */}
              <div className="absolute top-1/4 -left-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }}></div>
              <div className="absolute bottom-1/4 -right-6 w-32 h-32 bg-accent/15 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
            </div>
          </div>

          {/* Text Content - floating */}
          <div className="relative z-20 max-w-2xl space-y-8 animate-fade-in lg:pr-[40%]">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
              Quer conhecer mais sobre o meu trabalho?
            </h2>

            <p className="text-base text-muted-foreground font-inter">
              Escolha um caminho e continue — a navegação é linear e direta.
            </p>

            {/* CTA Buttons - floating */}
            <div className="space-y-5 pt-6">
              <div className="flex gap-4 items-center group cursor-pointer transition-all duration-300 hover:translate-x-3">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <User className="w-7 h-7 text-primary drop-shadow-[0_0_10px_rgba(203,163,92,0.5)]" />
                </div>
                <div className="text-left">
                  <div className="font-poppins font-semibold text-foreground text-lg">Quem sou eu</div>
                  <div className="text-sm text-muted-foreground font-inter">minha trajetória e visão</div>
                </div>
              </div>

              <div className="flex gap-4 items-center group cursor-pointer transition-all duration-300 hover:translate-x-3">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Briefcase className="w-7 h-7 text-primary drop-shadow-[0_0_10px_rgba(203,163,92,0.5)]" />
                </div>
                <div className="text-left">
                  <div className="font-poppins font-semibold text-foreground text-lg">Veja meus projetos</div>
                  <div className="text-sm text-muted-foreground font-inter">portfólio visual</div>
                </div>
              </div>

              <div className="flex gap-4 items-center group cursor-pointer transition-all duration-300 hover:translate-x-3">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText className="w-7 h-7 text-primary drop-shadow-[0_0_10px_rgba(203,163,92,0.5)]" />
                </div>
                <div className="text-left">
                  <div className="font-poppins font-semibold text-foreground text-lg">Conheça meu trabalho</div>
                  <div className="text-sm text-muted-foreground font-inter">resultados em ação</div>
                </div>
              </div>
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
