import { Button } from "@/components/ui/button";
import { Target, MessageSquare, TrendingUp } from "lucide-react";
import valueImage from "@/assets/FINALSITE2.jpg";

export const ValueBlock = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Background with depth */}
      <div className="absolute inset-0 bg-gradient-to-bl from-secondary via-background to-card"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="relative">
          {/* Floating image on the left with depth */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[42%] lg:w-[35%] animate-fade-in parallax-subtle hidden lg:block">
            <div className="relative">
              {/* Multi-layer glow */}
              <div className="absolute -inset-12 bg-gradient-to-tr from-accent/25 via-primary/15 to-transparent rounded-full blur-3xl opacity-70"></div>
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl"></div>
              
              <img
                src={valueImage}
                alt="Close do rosto de Pedro Sá olhando diretamente para a câmera, óculos modernos, fundo escuro minimalista transmitindo seriedade e profissionalismo"
                className="relative w-full h-auto object-cover aspect-[3/4] transition-transform duration-700 hover:scale-105"
                loading="lazy"
                decoding="async"
                style={{ 
                  filter: 'drop-shadow(0 30px 70px rgba(0,0,0,0.7)) drop-shadow(0 10px 30px rgba(203,163,92,0.2))',
                  clipPath: 'ellipse(90% 95% at 50% 50%)'
                }}
              />
              
              {/* Floating accent orbs */}
              <div className="absolute -top-8 left-1/4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '3s' }}></div>
              <div className="absolute -bottom-10 right-1/4 w-28 h-28 bg-primary/15 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1.5s' }}></div>
            </div>
          </div>

          {/* Text Content - floating on the right */}
          <div className="relative z-20 lg:pl-[40%] space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
              Sua marca precisa de direção, não de adivinhação.
            </h2>

            <p className="text-lg font-inter text-muted-foreground leading-relaxed backdrop-blur-sm bg-card/40 p-6 rounded-2xl border border-border/50 shadow-elevation">
              Desde 2014 planejo, crio e executo estratégias de comunicação que aumentam o valor 
              percebido da sua empresa e fortalecem a relação com seu público.
              <br /><br />
              Estratégia, criatividade e resultado — na mesma direção.
            </p>

            {/* Value Bullets - floating cards */}
            <div className="space-y-4 pt-4">
              <div className="flex gap-4 items-start group backdrop-blur-md bg-card/60 p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-all shadow-lg hover:shadow-gold hover:scale-[1.02] duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-foreground mb-1">Direção clara</h3>
                  <p className="text-sm text-muted-foreground font-inter">Diagnóstico + plano de ação</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group backdrop-blur-md bg-card/60 p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-all shadow-lg hover:shadow-gold hover:scale-[1.02] duration-300" style={{ transitionDelay: '50ms' }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-foreground mb-1">Mensagem coerente</h3>
                  <p className="text-sm text-muted-foreground font-inter">Posicionamento, narrativa, reputação</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group backdrop-blur-md bg-card/60 p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-all shadow-lg hover:shadow-gold hover:scale-[1.02] duration-300" style={{ transitionDelay: '100ms' }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-foreground mb-1">Execução mensurável</h3>
                  <p className="text-sm text-muted-foreground font-inter">Metas, aprendizados, escala</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all font-poppins font-semibold shadow-lg backdrop-blur-sm"
              >
                Ver estudos de caso
              </Button>
              <p className="text-xs text-muted-foreground mt-3 font-inter">
                Casos em comunicação pública, marketing digital e campanhas 360º.
              </p>
            </div>
          </div>

          {/* Mobile image */}
          <div className="lg:hidden mt-12 animate-fade-in-delay">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-8 bg-gradient-to-tr from-accent/25 via-primary/15 to-transparent rounded-full blur-3xl opacity-70"></div>
              <img
                src={valueImage}
                alt="Close do rosto de Pedro Sá olhando diretamente para a câmera, óculos modernos, fundo escuro minimalista transmitindo seriedade e profissionalismo"
                className="relative w-full h-auto rounded-2xl shadow-elevation object-cover aspect-[3/4]"
                loading="lazy"
                decoding="async"
                style={{ filter: 'drop-shadow(0 30px 70px rgba(0,0,0,0.7))' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
