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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-12 gap-4 lg:gap-8 h-full items-center">
          {/* Texto */}
          <div className="col-span-12 lg:col-span-5 space-y-4 lg:space-y-6 z-10">
            <div className="space-y-2">
              <p className="text-base sm:text-lg lg:text-xl text-stone-600 font-inter">
                Por trás da estratégia,
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold text-stone-900 leading-tight">
                um comunicador que acredita em propósito.
              </h1>
            </div>
            
            <div className="space-y-4 max-w-2xl">
              <p className="text-base sm:text-lg lg:text-xl text-stone-700 leading-relaxed">
                "Sou <span className="font-semibold text-stone-900">Pedro Gabriel A. Sá</span>, publicitário desde 2014, formado pela UniNorte, Martha Falcão e Estácio.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-stone-700 leading-relaxed">
                Especialista em planejamento estratégico, comunicação e marketing — e apaixonado por transformar ideias em resultados reais."
              </p>
            </div>
          </div>

          {/* Foto */}
          <div className="col-span-12 lg:col-span-7 flex items-center justify-center lg:justify-end h-full py-8 lg:py-12">
            <div className="w-full h-full max-h-[90vh] flex items-center justify-center">
              <img 
                src="/placeholder.svg"
                alt="Pedro Gabriel em ambiente criativo"
                className="w-full h-full max-h-[90vh] object-contain"
                style={{
                  filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.15))'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
