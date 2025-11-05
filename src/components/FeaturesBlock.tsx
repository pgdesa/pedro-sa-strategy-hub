import { Card, CardContent } from "@/components/ui/card";
import { Target, Megaphone, BarChart3 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
    <section className="min-h-screen flex items-center justify-center bg-card px-6 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
            Onde eu ajudo mais rápido
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 animate-fade-in-delay">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-surface border-border hover:border-primary transition-all duration-300 hover:shadow-gold group"
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm font-inter text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <a 
                  href={feature.link}
                  className="inline-flex items-center text-sm font-inter font-medium text-primary hover:text-accent transition-colors"
                >
                  ver mais →
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
                className="flex-shrink-0 w-[85vw] snap-center bg-surface border-border"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-inter text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <a 
                    href={feature.link}
                    className="inline-flex items-center text-sm font-inter font-medium text-primary hover:text-accent transition-colors"
                  >
                    ver mais →
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
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'bg-primary w-8' 
                    : 'bg-border'
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
