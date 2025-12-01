import pedroBio1 from "@/assets/pedro-bio-1.jpg";

interface BioBlocoIntroProps {
  className?: string;
}

export const BioBlocoIntro = ({ className = "" }: BioBlocoIntroProps) => {
  return (
    <section 
      className={`h-screen w-full overflow-hidden relative ${className}`}
      style={{
        background: 'linear-gradient(135deg, hsl(30, 35%, 92%) 0%, hsl(25, 30%, 88%) 100%)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full py-12 lg:py-16">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 h-full items-center">
          {/* Texto */}
          <div className="col-span-12 lg:col-span-5 space-y-6 lg:space-y-8 z-10">
            <div className="space-y-3 lg:space-y-4">
              <p className="text-lg sm:text-xl lg:text-2xl text-stone-600 font-inter font-light">
                Por trás da estratégia,
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold text-stone-900 leading-[1.1]">
                um comunicador que acredita em propósito.
              </h1>
            </div>
            
            <div className="space-y-5 lg:space-y-6">
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-stone-700 leading-relaxed">
                "Sou <span className="font-semibold text-stone-900">Pedro Gabriel A. Sá</span>, publicitário desde 2014, formado pela UniNorte, Martha Falcão e Estácio.
              </p>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-stone-700 leading-relaxed">
                Especialista em planejamento estratégico, comunicação e marketing — e apaixonado por transformar ideias em resultados reais."
              </p>
            </div>
          </div>

          {/* Foto */}
          <div className="col-span-12 lg:col-span-7 flex items-center justify-center lg:justify-end h-full">
            <div className="relative w-full h-full max-h-[85vh] flex items-center justify-center">
              <img 
                src={pedroBio1}
                alt="Pedro Gabriel - Especialista em comunicação e marketing"
                className="w-full h-full max-h-[85vh] object-contain"
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
