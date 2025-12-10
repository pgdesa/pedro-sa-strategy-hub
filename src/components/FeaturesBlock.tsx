import { Card, CardContent } from "@/components/ui/card";
import { Target, Megaphone, BarChart3 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import featuresImage from "@/assets/FINALSITE3.png";
import { useParallax } from "@/hooks/useParallax";

const features = [
  {
    icon: Target,
    title: "Planejamento Estratégico",
    description: "Para marcas que sabem onde querem chegar, mas ainda não têm o caminho desenhado.",
    link: "/trabalhos/atendimento-publicitario"
  },
  {
    icon: Megaphone,
    title: "Comunicação Pública e Política",
    description: "Para mandatos, instituições e campanhas que precisam comunicar com consistência e credibilidade.",
    link: "/trabalhos/comunicacao-estrategica"
  },
  {
    icon: BarChart3,
    title: "Marketing Digital e Offline",
    description: "Para integrar ponto físico, campanhas e presença digital sem ruído.",
    link: "/trabalhos"
  }
];

export const FeaturesBlock = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { sectionRef, elementRef: imageRef } = useParallax({ intensity: 45 });

  // Mobile carousel scroll detection
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cards = container.children;
      if (!cards.length) return;
      
      const firstCard = cards[0] as HTMLElement;
      const cardWidth = firstCard.offsetWidth;
      const gap = 24;
      const scrollLeft = container.scrollLeft;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setCurrentIndex(Math.min(newIndex, features.length - 1));
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20"
      id="features"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background pointer-events-none" aria-hidden="true" />
      
      {/* Subtle background portrait */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
        <img
          ref={imageRef}
          src={featuresImage}
          srcSet={`${featuresImage} 1x, ${featuresImage} 2x`}
          alt=""
          width={600}
          height={800}
          className="w-1/2 max-w-md h-auto object-contain opacity-[0.06]"
          style={{ 
            maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 65%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 65%)',
            filter: 'drop-shadow(0 0 20px hsl(var(--primary) / 0.15))'
          }}
          loading="lazy"
          decoding="async"
        />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          
          {/* TEXTO + CARDS - coluna fixa */}
          <div className="col-span-12 space-y-12 lg:space-y-16">
            
            {/* Título centralizado */}
            <div data-text className="text-center animate-fade-in px-4 sm:px-6 md:px-8 lg:px-0">
              <h2 className="font-poppins font-bold text-foreground text-glow text-2xl sm:text-3xl lg:text-4xl leading-tight">
                Onde eu ajudo mais rápido
              </h2>
            </div>

            {/* Desktop Grid - 3 cards */}
            <div data-photo className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 animate-fade-in-delay">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="glass border-glass-border hover:border-primary/40 transition-all duration-500 ease-smooth hover:scale-[1.03] group"
                  style={{ 
                    animationDelay: `${index * 0.15}s`
                  }}
                >
                  <CardContent className="p-6 lg:p-8 space-y-4 lg:space-y-5">
                    <div className="w-14 h-14 rounded-xl bg-surface/50 border border-glass-border/40 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                      <feature.icon className="w-7 h-7 text-primary drop-shadow-glow" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-poppins font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm font-inter text-foreground-secondary leading-relaxed">
                      {feature.description}
                    </p>
                    <Link 
                      to={feature.link}
                      className="inline-flex items-center text-sm font-inter font-medium text-primary hover:text-accent transition-colors gap-1"
                    >
                      ver mais <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden">
              <div 
                ref={scrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-hide px-4 -mx-4"
                style={{ WebkitOverflowScrolling: 'touch' }}
                role="region"
                aria-label="Carrossel de serviços"
              >
                {features.map((feature, index) => (
                  <Card 
                    key={index} 
                    className="flex-shrink-0 w-[80vw] max-w-[320px] snap-center glass border-glass-border"
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="w-14 h-14 rounded-xl bg-surface/50 border border-glass-border/40 flex items-center justify-center">
                        <feature.icon className="w-7 h-7 text-primary drop-shadow-glow" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-poppins font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-sm font-inter text-foreground-secondary leading-relaxed">
                        {feature.description}
                      </p>
                      <Link 
                        to={feature.link}
                        className="inline-flex items-center text-sm font-inter font-medium text-primary hover:text-accent transition-colors gap-1"
                      >
                        ver mais <span aria-hidden="true">→</span>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-4" role="tablist">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const container = scrollRef.current;
                      if (!container) return;
                      const cards = container.children;
                      if (!cards.length) return;
                      const firstCard = cards[0] as HTMLElement;
                      const cardWidth = firstCard.offsetWidth;
                      const gap = 24;
                      container.scrollTo({
                        left: index * (cardWidth + gap),
                        behavior: 'smooth'
                      });
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index 
                        ? 'bg-primary w-8 shadow-glow' 
                        : 'bg-glass-border w-2'
                    }`}
                    role="tab"
                    aria-selected={currentIndex === index}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
