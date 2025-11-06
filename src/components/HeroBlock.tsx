import { Button } from "@/components/ui/button";
import heroImage from "@/assets/FINALSITE1.svg";

export const HeroBlock = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10 perspective-container">
        <div className="relative">
          {/* Floating image - desktop */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] lg:w-[40%] hidden lg:block animate-fade-in">
            <div className="relative">
              {/* Glow orbs */}
              <div className="absolute -inset-12 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/15 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <img
                src={heroImage}
                alt="Retrato profissional de Pedro Sá em estúdio, blazer escuro com fundo neutro, braços cruzados e expressão confiante"
                className="relative w-full h-auto object-contain drop-shadow-premium float hover:scale-105 transition-transform duration-700"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="relative z-20 max-w-3xl space-y-8 lg:pr-[45%] animate-fade-in">
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
