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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col items-center justify-center h-full text-center max-w-4xl mx-auto space-y-8 lg:space-y-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold text-stone-50 leading-tight">
            Filosofia de Trabalho
          </h2>
          
          <div className="space-y-6 lg:space-y-8">
            <p className="text-xl sm:text-2xl lg:text-3xl text-stone-100 leading-relaxed">
              "Acredito que comunicação é mais do que estética — <em className="text-stone-200 font-light">é estratégia, empatia e direção.</em>
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl text-stone-100 leading-relaxed">
              Cada projeto é uma oportunidade de gerar impacto real, inspirar decisões e conectar pessoas a propósitos.
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl text-stone-50 leading-relaxed font-semibold">
              Meu trabalho é unir propósito e resultado."
            </p>
          </div>

          {/* Elemento decorativo */}
          <div className="flex gap-3 mt-8">
            <div className="w-20 h-1 bg-stone-300 rounded-full"></div>
            <div className="w-12 h-1 bg-stone-400 rounded-full"></div>
            <div className="w-20 h-1 bg-stone-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
