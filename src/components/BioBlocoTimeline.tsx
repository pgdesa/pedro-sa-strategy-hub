import { Button } from "./ui/button";

interface BioBlocoTimelineProps {
  className?: string;
}

const timelineItems = [
  {
    year: "2014",
    title: "Graduação em Publicidade e Propaganda",
    description: "UniNorte, Martha Falcão, Estácio"
  },
  {
    year: "2016–2019",
    title: "Atuação em agências",
    description: "Coordenação de equipes criativas"
  },
  {
    year: "2020–2024",
    title: "Comunicação Pública",
    description: "Foco em campanhas políticas e marketing institucional"
  },
  {
    year: "2025",
    title: "Expansão Estratégica",
    description: "Consultoria estratégica, branding e posicionamento"
  }
];

export const BioBlocoTimeline = ({ className = "" }: BioBlocoTimelineProps) => {
  return (
    <section 
      className={`h-screen w-full overflow-hidden relative ${className}`}
      style={{
        background: 'linear-gradient(135deg, hsl(45, 25%, 94%) 0%, hsl(40, 20%, 90%) 100%)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full max-w-5xl mx-auto space-y-8 lg:space-y-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold text-stone-900 leading-tight text-center">
            Linha do Tempo
          </h2>
          
          {/* Timeline */}
          <div className="relative">
            {/* Linha central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-stone-300 hidden lg:block"></div>
            
            {/* Items */}
            <div className="space-y-8 lg:space-y-12">
              {timelineItems.map((item, index) => (
                <div 
                  key={index}
                  className="relative flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8"
                  style={{
                    animation: `fade-in 0.6s ease-out ${index * 0.2}s both`
                  }}
                >
                  {/* Ano (lado esquerdo no desktop) */}
                  <div className="lg:w-1/2 lg:text-right lg:pr-8">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-stone-800">
                      {item.year}
                    </p>
                  </div>

                  {/* Ponto central */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-stone-600 rounded-full border-4 border-stone-100 hidden lg:block z-10"></div>

                  {/* Conteúdo (lado direito no desktop) */}
                  <div className="lg:w-1/2 lg:pl-8">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-poppins font-semibold text-stone-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-lg text-stone-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6 pt-8">
            <p className="text-lg sm:text-xl lg:text-2xl text-stone-700 font-medium">
              "Veja como essa trajetória se traduz em resultados."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-stone-800 hover:bg-stone-700 text-stone-50 font-semibold px-8 py-6 text-lg"
              >
                Ir para Portfólio Visual
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-stone-700 text-stone-800 hover:bg-stone-100 font-semibold px-8 py-6 text-lg"
              >
                Estudos de Caso
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
