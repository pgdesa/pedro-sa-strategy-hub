import pedroBio3 from "@/assets/pedro-bio-3.jpg";

interface BioBlocoFilosofiaProps {
  className?: string;
}

export const BioBlocoFilosofia = ({ className = "" }: BioBlocoFilosofiaProps) => {
  return (
    <section 
      className={`h-screen w-full overflow-hidden relative ${className}`}
      style={{
        background: 'linear-gradient(135deg, hsl(200, 40%, 35%) 0%, hsl(195, 35%, 30%) 100%)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full py-12 lg:py-16">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 h-full items-center">
          {/* Texto */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center space-y-8 lg:space-y-10 z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold text-stone-50 leading-[1.1]">
              Filosofia de Trabalho
            </h2>
            
            <div className="space-y-6 lg:space-y-8">
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-stone-100 leading-relaxed">
                "Acredito que comunicação é mais do que estética — <em className="text-stone-200 font-light">é estratégia, empatia e direção.</em>
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-stone-100 leading-relaxed">
                Cada projeto é uma oportunidade de gerar impacto real, inspirar decisões e conectar pessoas a propósitos.
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-stone-50 leading-relaxed font-semibold">
                Meu trabalho é unir propósito e resultado."
              </p>
            </div>

            {/* Elemento decorativo */}
            <div className="flex gap-3 pt-4">
              <div className="w-20 h-1 bg-stone-300 rounded-full"></div>
              <div className="w-12 h-1 bg-stone-400 rounded-full"></div>
              <div className="w-20 h-1 bg-stone-300 rounded-full"></div>
            </div>
          </div>

          {/* Foto */}
          <div className="col-span-12 lg:col-span-5 flex items-center justify-center h-full">
            <div className="relative w-full h-full max-h-[75vh] flex items-center justify-center">
              <img 
                src={pedroBio3}
                alt="Pedro Gabriel - Filosofia de trabalho em comunicação"
                className="w-full h-full max-h-[75vh] object-contain"
                style={{
                  filter: 'drop-shadow(0 15px 40px rgba(0, 0, 0, 0.3))'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
