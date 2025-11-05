import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/FINALSITE1.jpg";

export const HeroBlock = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-card px-6 pt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text Content - 60% */}
          <div className="lg:col-span-3 space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-foreground tracking-tight">
                PEDRO SÁ
              </h1>
              <p className="text-xl md:text-2xl font-poppins font-semibold text-muted-foreground">
                Estrategista em Comunicação, Marketing e Negócios.
              </p>
            </div>

            <p className="text-base md:text-lg font-inter text-muted-foreground leading-relaxed max-w-2xl">
              Mais do que comunicar, é preciso gerar conexão. Com planejamento estratégico e marketing 
              ajudo negócios, governos e pessoas a se posicionarem com autenticidade e impacto.
              <br /><br />
              Cada projeto é uma história contada com propósito e estratégia.
            </p>

            {/* Authority Chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-inter bg-card border border-border">
                Desde 2014
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-inter bg-card border border-border">
                Comunicação pública e privada
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-inter bg-card border border-border">
                Projetos no TO/AM e Brasil
              </Badge>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
                className="border-border hover:bg-card hover:border-primary transition-all font-poppins font-semibold"
              >
                Ver Bio
              </Button>
            </div>
          </div>

          {/* Image - 40% */}
          <div className="lg:col-span-2 animate-fade-in-delay">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={heroImage}
                alt="Retrato profissional de Pedro Sá em estúdio, blazer escuro com fundo neutro, braços cruzados e expressão confiante"
                className="relative w-full h-auto rounded-2xl shadow-elevation object-cover aspect-[3/4]"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
