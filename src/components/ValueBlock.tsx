import { Button } from "@/components/ui/button";
import { Target, MessageSquare, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import valueImage from "@/assets/FINALSITE2.png";

const values = [
  { icon: Target, title: "Direção clara", description: "Diagnóstico + plano de ação" },
  { icon: MessageSquare, title: "Mensagem coerente", description: "Posicionamento, narrativa, reputação" },
  { icon: TrendingUp, title: "Execução mensurável", description: "Metas, aprendizados, escala" },
];

export const ValueBlock = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Parallax effect
  useEffect(() => {
    if (!isVisible || !imageRef.current) return;

    const handleScroll = () => {
      if (!imageRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = 1 - (rect.top + rect.height) / (window.innerHeight + rect.height);
      const parallaxY = scrollProgress * 50;
      imageRef.current.style.transform = `translateY(${parallaxY}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-start lg:items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
      id="valor"
    >
      {/* Background gradient shift */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-background to-surface-elevated pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10 w-full">
        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* TEXTO - coluna reduzida */}
          <div data-text className="col-span-12 lg:col-span-6 xl:col-span-6 space-y-3 sm:space-y-4 lg:space-y-5 animate-fade-in order-2 lg:order-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-0">
            <h2 className="font-poppins font-bold text-foreground tracking-tight text-glow text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight">
              Sua marca precisa de direção, não de adivinhação.
            </h2>

            <p className="text-sm sm:text-base lg:text-base xl:text-lg text-foreground-secondary leading-relaxed">
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
                    <div className="mt-1 p-2 rounded-lg glass border border-glass-border/30">
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
                className="glass hover:scale-105 hover:border-primary/40 transition-all font-poppins font-semibold"
              >
                Ver estudos de caso
              </Button>
            </div>
          </div>

          {/* IMAGEM - coluna expandida */}
          <div data-photo className="col-span-12 lg:col-span-6 xl:col-span-6 animate-fade-in-delay order-1 lg:order-2 flex items-center justify-center">
            <div className="relative perspective-container w-full">
              {/* Rim light effect */}
              <div className="absolute -inset-12 bg-gradient-to-br from-primary/15 via-transparent to-accent/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-0 right-0 w-56 h-56 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              
              <img
                ref={imageRef}
                src={valueImage}
                alt="Retrato close de Pedro Sá em estúdio, expressão focada e profissional"
                width={800}
                height={1067}
                className="relative max-h-[85vh] w-full h-auto object-contain drop-shadow-glow transition-transform duration-700 ease-smooth hover:scale-[1.02]"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6)) drop-shadow(0 0 30px hsl(var(--primary) / 0.25))'
                }}
                loading="lazy"
                decoding="async"
                srcSet={`${valueImage} 1x, ${valueImage} 2x`}
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
