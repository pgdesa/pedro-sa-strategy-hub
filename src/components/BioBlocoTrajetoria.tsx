interface BioBlocoTrajetoriaProps {
  className?: string;
}

export const BioBlocoTrajetoria = ({ className = "" }: BioBlocoTrajetoriaProps) => {
  return (
    <section 
      className={`h-screen w-full overflow-hidden relative ${className}`}
      style={{
        background: 'linear-gradient(135deg, hsl(0, 0%, 96%) 0%, hsl(0, 0%, 92%) 100%)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-12 gap-4 lg:gap-8 h-full items-center">
          {/* Foto */}
          <div className="col-span-12 lg:col-span-7 flex items-center justify-center lg:justify-start h-full py-8 lg:py-12">
            <div className="w-full h-full max-h-[90vh] flex items-center justify-center">
              <img 
                src="/placeholder.svg"
                alt="Pedro Gabriel - Retrato profissional"
                className="w-auto h-full max-h-[90vh] object-contain"
                style={{
                  filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.12))'
                }}
              />
            </div>
          </div>

          {/* Texto */}
          <div className="col-span-12 lg:col-span-5 space-y-4 lg:space-y-6 z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold text-stone-900 leading-tight">
              Trajetória Profissional
            </h2>
            
            <div className="space-y-4 max-w-2xl">
              <p className="text-base sm:text-lg lg:text-xl text-stone-700 leading-relaxed">
                "Ao longo da minha carreira, atuei em comunicação pública, campanhas políticas e estratégias empresariais, sempre unindo visão criativa e gestão eficiente.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-stone-700 leading-relaxed">
                Lidero equipes multidisciplinares, coordenando projetos e desenvolvo planos de marketing que conectam propósito, estratégia e execução."
              </p>
            </div>

            {/* Linhas sutis decorativas */}
            <div className="flex gap-2 mt-8">
              <div className="w-16 h-1 bg-stone-400 rounded-full"></div>
              <div className="w-8 h-1 bg-stone-300 rounded-full"></div>
              <div className="w-4 h-1 bg-stone-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
