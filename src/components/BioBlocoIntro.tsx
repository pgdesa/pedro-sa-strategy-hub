import pedroBio1 from "@/assets/pedro-bio-1.jpg";
import { useEffect, useRef, useState } from "react";

interface BioBlocoIntroProps {
  className?: string;
}

export const BioBlocoIntro = ({ className = "" }: BioBlocoIntroProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [titleAnimating, setTitleAnimating] = useState(false);

  // Title animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Title animation trigger
      if (scrollY > 100 && !titleAnimating) {
        setTitleAnimating(true);
      } else if (scrollY <= 100 && titleAnimating) {
        setTitleAnimating(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [titleAnimating]);

  return (
    <section 
      className={`min-h-screen w-full overflow-hidden relative ${className}`}
      style={{
        background: 'linear-gradient(135deg, hsl(30, 35%, 92%) 0%, hsl(25, 30%, 88%) 100%)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-20">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 w-full items-center">
          {/* Texto */}
          <div className="col-span-12 lg:col-span-6 space-y-6 z-10 flex flex-col justify-center">
            <div className="space-y-4">
              <p className="text-lg lg:text-xl xl:text-2xl text-stone-600 font-inter font-light">
                Por trás da estratégia,
              </p>
              <h1 
                ref={titleRef}
                id="bio-title"
                className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold text-stone-900 leading-[1.15] transition-all duration-700 ${
                  titleAnimating ? 'title-moving-to-navbar' : ''
                }`}
              >
                um comunicador que acredita em propósito.
              </h1>
            </div>
            
            <div className="space-y-4">
              <p className="text-base lg:text-lg xl:text-xl text-stone-700 leading-relaxed">
                "Sou <span className="font-semibold text-stone-900">Pedro Gabriel A. Sá</span>, publicitário desde 2014, formado pela UniNorte, Martha Falcão e Estácio.
              </p>
              <p className="text-base lg:text-lg xl:text-xl text-stone-700 leading-relaxed">
                Especialista em planejamento estratégico, comunicação e marketing — apaixonado por transformar ideias em resultados reais."
              </p>
            </div>
          </div>

          {/* Foto */}
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center py-8 lg:py-0">
            <div className="relative w-full flex items-center justify-center">
              <img 
                src={pedroBio1}
                alt="Pedro Gabriel - Especialista em comunicação e marketing"
                className="w-full h-auto max-h-[85vh] object-contain"
                style={{
                  filter: 'drop-shadow(0 15px 40px rgba(0, 0, 0, 0.2))'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
