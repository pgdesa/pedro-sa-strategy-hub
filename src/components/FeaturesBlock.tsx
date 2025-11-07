import { Card, CardContent } from "@/components/ui/card";
import { Target, Megaphone, BarChart3 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import featuresImage from "@/assets/FINALSITE3.png";

const features = [
  {
    icon: Target,
    title: "Planejamento Estratégico",
    description: "Direção clara para negócios, marcas e campanhas.",
    link: "#planejamento"
  },
  {
    icon: Megaphone,
    title: "Comunicação Pública e Política",
    description: "Gestão de imagem, discurso e credibilidade institucional.",
    link: "#comunicacao"
  },
  {
    icon: BarChart3,
    title: "Marketing Digital e Offline",
    description: "Integração entre o impacto do real e o poder do digital.",
    link: "#marketing"
  }
];

export const FeaturesBlock = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Background gradient shift */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background pointer-events-none"></div>
      
      {/* Subtle background portrait for depth */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full max-w-4xl">
          <img
            src={featuresImage}
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-auto object-contain opacity-[0.08]"
            style={{ 
              maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)'
            }}
            aria-hidden="true"
            loading="lazy"
          />
        </div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in perspective-container" style={{ transform: 'translateZ(40px)', transformStyle: 'preserve-3d' }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-foreground mb-4 text-glow">
            Onde eu ajudo mais rápido
          </h2>
        </div>

        {/* Desktop Grid - floating cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 animate-fade-in-delay perspective-container">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass border-glass-border hover:border-primary/40 transition-all duration-500 ease-smooth hover:scale-[1.03] group float"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                transform: `translateZ(${30 + index * 10}px)`,
                transformStyle: 'preserve-3d'
              }}
            >
              <CardContent className="p-8 space-y-5">
                <div className="w-14 h-14 rounded-xl bg-surface/50 border border-glass-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary drop-shadow-glow" />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm font-inter text-foreground-secondary leading-relaxed">
                  {feature.description}
                </p>
                <a 
                  href={feature.link}
                  className="inline-flex items-center text-sm font-inter font-medium text-primary hover:text-accent transition-colors gap-1"
                >
                  ver mais <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="flex-shrink-0 w-[85vw] snap-center glass border-glass-border"
              >
                <CardContent className="p-8 space-y-5">
                  <div className="w-14 h-14 rounded-xl bg-surface/50 border border-glass-border flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-primary drop-shadow-glow" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-inter text-foreground-secondary leading-relaxed">
                    {feature.description}
                  </p>
                  <a 
                    href={feature.link}
                    className="inline-flex items-center text-sm font-inter font-medium text-primary hover:text-accent transition-colors gap-1"
                  >
                    ver mais <span>→</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  scrollRef.current?.scrollTo({
                    left: index * scrollRef.current.offsetWidth,
                    behavior: 'smooth'
                  });
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-primary w-8 shadow-glow' 
                    : 'bg-glass-border w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
