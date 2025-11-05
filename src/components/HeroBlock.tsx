import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/FINALSITE1.jpg";

export const HeroBlock = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background layers with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background"></div>
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="relative">
          {/* Floating image with parallax - positioned absolutely for depth */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] lg:w-[38%] animate-fade-in-delay parallax-subtle hidden lg:block">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-full blur-3xl opacity-60"></div>
              {/* Image with removed background effect */}
              <img
                src={heroImage}
                alt="Retrato profissional de Pedro Sá em estúdio, blazer escuro com fundo neutro, braços cruzados e expressão confiante"
                className="relative w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
                decoding="async"
                style={{ 
                  filter: 'drop-shadow(0 25px 60px rgba(0,0,0,0.6)) drop-shadow(0 10px 30px rgba(203,163,92,0.25))',
                  clipPath: 'none'
                }}
              />
              {/* Floating accent elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Text Content - floating over scene */}
          <div className="relative z-20 max-w-3xl space-y-8 animate-fade-in lg:pr-[42%]">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-foreground tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                PEDRO SÁ
              </h1>
              <p className="text-xl md:text-2xl font-poppins font-semibold text-muted-foreground drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
                Estrategista em Comunicação, Marketing e Negócios.
              </p>
            </div>

            <p className="text-base md:text-lg font-inter text-muted-foreground leading-relaxed max-w-2xl">
              Mais do que comunicar, é preciso gerar conexão. Com planejamento estratégico e marketing 
              ajudo negócios, governos e pessoas a se posicionarem com autenticidade e impacto.
              <br /><br />
              Cada projeto é uma história contada com propósito e estratégia.
            </p>

            {/* Authority Chips - floating text */}
            <div className="flex flex-wrap gap-6 pt-2 text-sm font-inter text-muted-foreground/80">
              <span className="relative hover:text-primary transition-colors">Desde 2014</span>
              <span className="text-muted-foreground/40">•</span>
              <span className="relative hover:text-primary transition-colors">Comunicação pública e privada</span>
              <span className="text-muted-foreground/40">•</span>
              <span className="relative hover:text-primary transition-colors">Projetos no TO/AM e Brasil</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <div className="flex flex-col gap-2">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-gold font-poppins font-semibold"
                >
                  Agendar diagnóstico
                </Button>
                <span className="text-xs text-muted-foreground font-inter pl-1">
                  Retorno em até 24h úteis.
                </span>
              </div>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border/60 hover:bg-card/50 hover:border-primary transition-all font-poppins font-semibold"
              >
                Ver Bio
              </Button>
            </div>
          </div>

          {/* Mobile image - stacked below */}
          <div className="lg:hidden mt-12 animate-fade-in-delay">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-full blur-3xl opacity-60"></div>
              <img
                src={heroImage}
                alt="Retrato profissional de Pedro Sá em estúdio, blazer escuro com fundo neutro, braços cruzados e expressão confiante"
                className="relative w-full h-auto object-cover aspect-[3/4]"
                loading="eager"
                decoding="async"
                style={{ filter: 'drop-shadow(0 25px 60px rgba(0,0,0,0.6)) drop-shadow(0 10px 30px rgba(203,163,92,0.25))' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
