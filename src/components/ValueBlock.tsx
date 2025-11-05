import { Button } from "@/components/ui/button";
import { Target, MessageSquare, TrendingUp } from "lucide-react";
import valueImage from "@/assets/FINALSITE2.jpg";

export const ValueBlock = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-secondary px-6 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground leading-tight">
              Sua marca precisa de direção, não de adivinhação.
            </h2>

            <p className="text-lg font-inter text-muted-foreground leading-relaxed">
              Desde 2014 planejo, crio e executo estratégias de comunicação que aumentam o valor 
              percebido da sua empresa e fortalecem a relação com seu público.
              <br /><br />
              Estratégia, criatividade e resultado — na mesma direção.
            </p>

            {/* Value Bullets */}
            <div className="space-y-6 pt-4">
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-foreground mb-1">Direção clara</h3>
                  <p className="text-sm text-muted-foreground font-inter">Diagnóstico + plano de ação</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-foreground mb-1">Mensagem coerente</h3>
                  <p className="text-sm text-muted-foreground font-inter">Posicionamento, narrativa, reputação</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-primary transition-colors">
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
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all font-poppins font-semibold"
              >
                Ver estudos de caso
              </Button>
              <p className="text-xs text-muted-foreground mt-3 font-inter">
                Casos em comunicação pública, marketing digital e campanhas 360º.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in-delay order-first lg:order-last">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={valueImage}
                alt="Close do rosto de Pedro Sá olhando diretamente para a câmera, óculos modernos, fundo escuro minimalista transmitindo seriedade e profissionalismo"
                className="relative w-full h-auto rounded-2xl shadow-elevation object-cover aspect-[3/4]"
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
