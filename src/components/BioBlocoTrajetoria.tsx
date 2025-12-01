import pedroBio2 from "@/assets/pedro-bio-2.jpg";

interface BioBlocoTrajetoriaProps {
  className?: string;
}

export const BioBlocoTrajetoria = ({ className = "" }: BioBlocoTrajetoriaProps) => {
  return (
    <section 
      className={`min-h-screen w-full overflow-hidden relative ${className}`}
      style={{
        background: 'linear-gradient(135deg, hsl(0, 0%, 96%) 0%, hsl(0, 0%, 92%) 100%)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-20">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 w-full items-center">
          {/* Foto */}
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center py-8 lg:py-0 order-2 lg:order-1">
            <div className="relative w-full flex items-center justify-center">
              <img 
                src={pedroBio2}
                alt="Pedro Gabriel - Profissional de comunicação estratégica"
                className="w-full h-auto max-h-[85vh] object-contain"
                style={{
                  filter: 'drop-shadow(0 15px 40px rgba(0, 0, 0, 0.15))'
                }}
              />
            </div>
          </div>

          {/* Texto */}
          <div className="col-span-12 lg:col-span-6 space-y-6 z-10 order-1 lg:order-2 flex flex-col justify-center px-4 lg:px-6 xl:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold text-stone-900 leading-[1.15]">
              Trajetória Profissional
            </h2>
            
            <div className="space-y-4">
              <p className="text-base lg:text-lg xl:text-xl text-stone-700 leading-relaxed">
                "Ao longo da minha carreira, atuei em comunicação pública, campanhas políticas e estratégias empresariais, sempre unindo visão criativa e gestão eficiente.
              </p>
              <p className="text-base lg:text-lg text-stone-700 leading-relaxed">
                Lidero equipes multidisciplinares e desenvolvo planos de marketing que conectam propósito, estratégia e execução."
              </p>
            </div>

            {/* Linhas sutis decorativas */}
            <div className="flex gap-3 pt-4">
              <div className="w-20 h-1 bg-stone-400 rounded-full"></div>
              <div className="w-10 h-1 bg-stone-300 rounded-full"></div>
              <div className="w-5 h-1 bg-stone-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
