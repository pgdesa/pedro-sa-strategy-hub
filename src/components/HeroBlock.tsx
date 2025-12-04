import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/FINALSITE1.png";

export const HeroBlock = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showTitleShifted, setShowTitleShifted] = useState(false);

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

  // Scroll handler for title animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = 90;
      setShowTitleShifted(scrollY > triggerPoint);

      // Image parallax
      if (imageRef.current && sectionRef.current && isVisible) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = 1 - (rect.top + rect.height) / (window.innerHeight + rect.height);
        const parallaxY = scrollProgress * 40;
        imageRef.current.style.transform = `translateY(${parallaxY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <>

      <section 
        ref={sectionRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20"
        id="hero"
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10 w-full">
          {/* Grid layout: 12 columns */}
          <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* TEXTO - coluna reduzida para dar mais espaço à foto */}
            <div data-text className="col-span-12 lg:col-span-6 xl:col-span-6 space-y-3 sm:space-y-4 lg:space-y-6 animate-fade-in order-2 lg:order-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-0">
              <div className="space-y-4">
                {/* Hero Title with animation */}
                <div id="hero-title-wrapper" className="hidden lg:block">
                  <h1 
                    id="hero-title"
                    className={`font-poppins font-bold text-foreground tracking-tight text-glow text-4xl sm:text-5xl lg:text-5xl xl:text-6xl leading-tight hero-title-animated ${
                      showTitleShifted ? 'shifted' : ''
                    }`}
                  >
                    PEDRO SÁ
                  </h1>
                </div>
                <p className="text-base sm:text-lg lg:text-lg xl:text-xl font-poppins font-semibold text-foreground-secondary">
                  Estratégia de comunicação, marketing e negócios para dar direção clara à sua marca.
                </p>
              </div>

              <p className="text-sm sm:text-base lg:text-base xl:text-lg text-foreground-secondary leading-relaxed">
                Posicionamento mais claro, reputação fortalecida e campanhas com métricas que realmente importam.
              </p>

              {/* Chips de autoridade */}
              <div className="flex flex-wrap gap-3 lg:gap-5 pt-2 text-xs sm:text-sm font-inter text-foreground-muted">
                <span className="relative hover:text-primary transition-colors cursor-default float whitespace-nowrap">
                  Desde 2014
                </span>
                <span className="text-foreground-muted/40 hidden sm:inline">•</span>
                <span className="relative hover:text-primary transition-colors cursor-default float whitespace-nowrap" style={{ animationDelay: '0.5s' }}>
                  Comunicação pública e privada
                </span>
                <span className="text-foreground-muted/40 hidden sm:inline">•</span>
                <span className="relative hover:text-primary transition-colors cursor-default float whitespace-nowrap" style={{ animationDelay: '1s' }}>
                  Projetos no TO/AM e Brasil
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <div className="flex flex-col gap-2">
                  <Button 
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all font-poppins font-semibold shadow-gold"
                    asChild
                  >
                    <Link to="/agendar-diagnostico">Agendar diagnóstico</Link>
                  </Button>
                  <span className="text-xs text-foreground-muted font-inter pl-1">
                    Retorno em até 24h úteis.
                  </span>
                </div>
                <Link to="/bio">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="glass hover:scale-105 hover:border-primary/40 transition-all font-poppins font-semibold w-full sm:w-auto"
                  >
                    Ver Bio
                  </Button>
                </Link>
              </div>
            </div>

            {/* IMAGEM - coluna expandida para maior destaque */}
            <div data-photo className="col-span-12 lg:col-span-6 xl:col-span-6 animate-fade-in-delay order-1 lg:order-2 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-0 relative">
              <div className="relative perspective-container w-full">
                {/* Glow orbs */}
                <div className="absolute -inset-16 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-primary/15 rounded-full blur-3xl animate-pulse pointer-events-none" />
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
                
                <img
                  ref={imageRef}
                  src={heroImage}
                  alt="Retrato profissional de Pedro Sá em estúdio, blazer escuro com fundo neutro, braços cruzados e expressão confiante"
                  width={800}
                  height={1067}
                  className="relative max-h-[85vh] w-full h-auto object-contain drop-shadow-premium transition-transform duration-700 ease-smooth hover:scale-[1.02]"
                  style={{
                    filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5)) drop-shadow(0 0 40px hsl(var(--primary) / 0.3))'
                  }}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  srcSet={`${heroImage} 1x, ${heroImage} 2x`}
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
              
              {/* Mobile title overlay - positioned at bottom left */}
              <div 
                className={`lg:hidden absolute bottom-8 left-4 transition-all duration-500 ${
                  showTitleShifted ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}
              >
                <h1 className="font-poppins font-bold text-foreground text-2xl sm:text-3xl tracking-tight text-glow">
                  PEDRO SÁ
                </h1>
                <p className="font-poppins font-medium text-foreground-secondary text-sm sm:text-base tracking-wide mt-1">
                  Estratégia e comunicação
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};