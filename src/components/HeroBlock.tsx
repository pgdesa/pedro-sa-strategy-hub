import { Button } from "@/components/ui/button";
import heroImage from "@/assets/FINALSITE1.png";

export const HeroBlock = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="relative perspective-container">
          {/* Floating image - desktop */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[48%] lg:w-[42%] hidden lg:block animate-fade-in" style={{ transform: 'translateY(-50%) translateZ(120px)', transformStyle: 'preserve-3d' }}>
            <div className="relative">
              {/* Glow orbs with depth */}
              <div className="absolute -inset-16 bg-gradient-to-br from-primary/25 via-accent/15 to-transparent rounded-full blur-3xl opacity-60" style={{ transform: 'translateZ(-20px)' }}></div>
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ transform: 'translateZ(-10px)' }}></div>
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', transform: 'translateZ(-10px)' }}></div>
              
              <img
                src={heroImage}
                alt="Retrato profissional de Pedro Sá em estúdio, blazer escuro com fundo neutro, braços cruzados e expressão confiante"
                className="relative w-full h-auto object-contain drop-shadow-premium float hover:scale-[1.02] transition-all duration-700 ease-smooth"
                style={{ transform: 'translateZ(80px)', filter: 'drop-shadow(0 25px 50px rgba(203, 163, 92, 0.25))' }}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="relative z-30 max-w-2xl space-y-8 lg:pr-[48%] animate-fade-in" style={{ transform: 'translateZ(60px)', transformStyle: 'preserve-3d' }}>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-foreground tracking-tight text-glow">
                PEDRO SÁ
              </h1>
              <p className="text-xl md:text-2xl font-poppins font-semibold text-foreground-secondary">
                Estrategista em Comunicação, Marketing e Negócios.
              </p>
            </div>

            <p className="text-base md:text-lg font-inter text-foreground-secondary leading-relaxed max-w-2xl">
              Mais do que comunicar, é preciso gerar conexão. Com planejamento estratégico e marketing 
              ajudo negócios, governos e pessoas a se posicionarem com autenticidade e impacto.
              <br /><br />
              Cada projeto é uma história contada com propósito e estratégia.
            </p>

            {/* Authority Chips */}
            <div className="flex flex-wrap gap-6 pt-2 text-sm font-inter text-foreground-muted">
              <span className="relative hover:text-primary transition-colors cursor-default float">
                Desde 2014
              </span>
              <span className="text-foreground-muted/40">•</span>
              <span className="relative hover:text-primary transition-colors cursor-default float" style={{ animationDelay: '0.5s' }}>
                Comunicação pública e privada
              </span>
              <span className="text-foreground-muted/40">•</span>
              <span className="relative hover:text-primary transition-colors cursor-default float" style={{ animationDelay: '1s' }}>
                Projetos no TO/AM e Brasil
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <div className="flex flex-col gap-2">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all font-poppins font-semibold"
                  style={{ boxShadow: 'var(--shadow-glow)' }}
                >
                  Agendar diagnóstico
                </Button>
                <span className="text-xs text-foreground-muted font-inter pl-1">
                  Retorno em até 24h úteis.
                </span>
              </div>
              <Button 
                variant="outline" 
                size="lg"
                className="glass hover:scale-105 transition-all font-poppins font-semibold"
              >
                Ver Bio
              </Button>
            </div>
          </div>

          {/* Mobile image */}
          <div className="lg:hidden mt-12 animate-fade-in-delay">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl opacity-50"></div>
              <img
                src={heroImage}
                alt="Retrato profissional de Pedro Sá em estúdio, blazer escuro com fundo neutro, braços cruzados e expressão confiante"
                className="relative w-full h-auto object-contain drop-shadow-premium aspect-[3/4]"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
