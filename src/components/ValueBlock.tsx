import { Button } from "@/components/ui/button";
import { Target, MessageSquare, TrendingUp } from "lucide-react";
import valueImage from "@/assets/FINALSITE2.jpg";

const values = [
  { icon: Target, title: "Direção clara", description: "Diagnóstico + plano de ação" },
  { icon: MessageSquare, title: "Mensagem coerente", description: "Posicionamento, narrativa, reputação" },
  { icon: TrendingUp, title: "Execução mensurável", description: "Metas, aprendizados, escala" },
];

export const ValueBlock = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Background gradient shift */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-background to-surface-elevated pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10 perspective-container">
        <div className="relative">
          {/* Floating image - desktop */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[42%] lg:w-[38%] hidden lg:block animate-fade-in">
            <div className="relative">
              {/* Rim light effect */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/15 via-transparent to-accent/10 rounded-full blur-3xl"></div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
              
              <img
                src={valueImage}
                alt="Retrato close de Pedro Sá em estúdio, expressão focada e profissional"
                className="relative w-full h-auto object-contain drop-shadow-premium float hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="relative z-20 max-w-2xl space-y-8 lg:pr-[42%] animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-foreground tracking-tight text-glow">
              Sua marca precisa de direção, não de adivinhação.
            </h2>

            <p className="text-base md:text-lg font-inter text-foreground-secondary leading-relaxed">
              Desde 2014 planejo, crio e executo estratégias de comunicação que aumentam o valor percebido da sua empresa e fortalecem a relação com seu público.
              <br /><br />
              <span className="text-foreground font-semibold">Estratégia, criatividade e resultado — na mesma direção.</span>
            </p>

            {/* Value bullets */}
            <div className="space-y-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                    <div className="mt-1 p-2 rounded-lg glass">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-poppins font-semibold text-foreground mb-1">
                        {value.title}
                      </h3>
                      <p className="text-sm text-foreground-secondary">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <Button 
                variant="outline"
                size="lg"
                className="glass hover:scale-105 hover:border-primary transition-all font-poppins font-semibold"
              >
                Ver estudos de caso
              </Button>
            </div>
          </div>

          {/* Mobile image */}
          <div className="lg:hidden mt-12 animate-fade-in-delay">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/15 via-transparent to-accent/10 rounded-full blur-3xl"></div>
              <img
                src={valueImage}
                alt="Retrato close de Pedro Sá em estúdio, expressão focada e profissional"
                className="relative w-full h-auto object-contain drop-shadow-premium aspect-[3/4]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
