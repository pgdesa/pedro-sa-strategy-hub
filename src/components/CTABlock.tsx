import { Button } from "@/components/ui/button";
import { User, Briefcase, FileText } from "lucide-react";
import ctaImage from "@/assets/FINALSITE4.jpg";

export const CTABlock = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-6 py-20 relative overflow-hidden">
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground leading-tight">
              Quer conhecer mais sobre o meu trabalho?
            </h2>

            <p className="text-base text-muted-foreground font-inter">
              Escolha um caminho e continue — a navegação é linear e direta.
            </p>

            {/* CTA Buttons */}
            <div className="space-y-4 pt-4">
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto justify-start gap-4 h-auto py-4 px-6 border-border hover:border-primary hover:bg-card transition-all group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-poppins font-semibold text-foreground">Quem sou eu</div>
                  <div className="text-xs text-muted-foreground font-inter">minha trajetória e visão</div>
                </div>
              </Button>

              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto justify-start gap-4 h-auto py-4 px-6 border-border hover:border-primary hover:bg-card transition-all group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-poppins font-semibold text-foreground">Veja meus projetos</div>
                  <div className="text-xs text-muted-foreground font-inter">portfólio visual</div>
                </div>
              </Button>

              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto justify-start gap-4 h-auto py-4 px-6 border-border hover:border-primary hover:bg-card transition-all group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-poppins font-semibold text-foreground">Conheça meu trabalho</div>
                  <div className="text-xs text-muted-foreground font-inter">resultados em ação</div>
                </div>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in-delay order-first lg:order-last">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={ctaImage}
                alt="Perfil lateral de Pedro Sá em estúdio, destacando rim-light nas bordas, blazer escuro e postura contemplativa profissional"
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
