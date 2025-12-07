import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  title: string;
}

export const ImageCarousel = ({ images, title }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const goToPrevious = () => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images.length) return null;

  return (
    <div 
      className="relative rounded-xl overflow-hidden bg-card/30 border border-border/30"
      role="region"
      aria-roledescription="carrossel de imagens"
      aria-label={`Galeria de imagens: ${title}`}
    >
      <div className="aspect-video relative bg-black/20">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-card/50">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" aria-label="Carregando imagem" />
          </div>
        )}
        <img
          src={images[currentIndex]}
          alt={`${title} - Imagem ${currentIndex + 1} de ${images.length}`}
          className={`w-full h-full object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
          loading={currentIndex === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2" role="tablist">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsLoading(true);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-foreground/30"
                }`}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
