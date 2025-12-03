import { Target, MessageSquare, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import valueImage from "@/assets/FINALSITE2.png";

const pillars = [
  { 
    icon: Target, 
    title: "Direção clara", 
    description: "Transformo objetivos em um plano estratégico que guia todas as decisões." 
  },
  { 
    icon: MessageSquare, 
    title: "Mensagem coerente", 
    description: "Estruturo narrativas que conectam propósito, público e posicionamento." 
  },
  { 
    icon: TrendingUp, 
    title: "Execução mensurável", 
    description: "Da estratégia à campanha, tudo com indicadores para avaliar e ajustar." 
  },
];

export const SubHeroBlock = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showMobileTitle, setShowMobileTitle] = useState(true);

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

  // Track scroll for mobile title fade
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Hide mobile title after scrolling past first section
      setShowMobileTitle(scrollY < window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
      id="sub-hero"
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
              Atendo negócios em desenvolvimento, marcas públicas, instituições e profissionais que precisam transformar objetivos soltos em estratégia, clareza e ação.
            </p>

            {/* Três pilares */}
            <div className="space-y-2 pt-1">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div key={index} className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                    <div className="mt-0.5 p-1.5 rounded-md glass border border-glass-border/30">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-poppins font-semibold text-foreground mb-0.5">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-foreground-secondary">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* IMAGEM - coluna expandida */}
          <div data-photo className="col-span-12 lg:col-span-6 xl:col-span-6 animate-fade-in-delay order-1 lg:order-2 flex items-center justify-center relative">
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
            
            {/* Mobile subtitle overlay - appears at bottom of image */}
            <div 
              className={`lg:hidden absolute bottom-8 left-0 right-0 text-center transition-all duration-500 ${
                showMobileTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="font-poppins font-semibold text-foreground text-lg sm:text-xl tracking-wide">
                Estratégia e Comunicação
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
