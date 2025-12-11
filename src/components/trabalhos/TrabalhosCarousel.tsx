import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Work, getCategoryBySlug } from "@/data/trabalhos";

interface TrabalhosCarouselProps {
  works: Work[];
}

export const TrabalhosCarousel = ({ works }: TrabalhosCarouselProps) => {
  // Randomize initial slide on mount
  const randomInitialIndex = useMemo(() => {
    return Math.floor(Math.random() * works.length);
  }, [works.length]);

  const [currentIndex, setCurrentIndex] = useState(randomInitialIndex);

  // Reset to random index when works change
  useEffect(() => {
    setCurrentIndex(Math.floor(Math.random() * works.length));
  }, [works.length]);

  const currentWork = works[currentIndex];
  const category = getCategoryBySlug(currentWork?.category);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? works.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === works.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!currentWork || !category) return null;

  // Truncate description to ~150 chars
  const truncatedDescription =
    currentWork.summary.length > 150
      ? currentWork.summary.slice(0, 150).trim() + "…"
      : currentWork.summary;

  return (
    <div className="flex flex-col h-full max-h-full">
      {/* Image Container */}
      <div className="relative flex-1 min-h-0 max-h-[calc(100vh-220px)] rounded-xl overflow-hidden bg-card/30 border border-border/30">
        {currentWork.coverImage && (
          <img
            src={currentWork.coverImage}
            alt={`Capa: ${currentWork.title}`}
            className="w-full h-full object-cover object-center"
          />
        )}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-background hover:border-primary/50 transition-all duration-200"
          aria-label="Trabalho anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-background hover:border-primary/50 transition-all duration-200"
          aria-label="Próximo trabalho"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Gradient Overlay for Content */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background/95 via-background/60 to-transparent pointer-events-none" />

        {/* Content Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 lg:p-4">
          {/* Tags/Metadata */}
          <div className="flex flex-wrap gap-1 mb-1.5">
            <Badge
              variant="outline"
              className="text-[10px] bg-primary/20 text-primary border-primary/40"
            >
              {category.name}
            </Badge>
            {currentWork.year && (
              <Badge variant="secondary" className="text-[10px]">
                {currentWork.year}
              </Badge>
            )}
            {currentWork.client && (
              <Badge variant="secondary" className="text-[10px]">
                {currentWork.client}
              </Badge>
            )}
          </div>

          {/* Title */}
          <h3 className="font-poppins text-base lg:text-lg font-bold text-foreground mb-1 line-clamp-2">
            {currentWork.title}
          </h3>

          {/* Description Preview */}
          <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
            {truncatedDescription}
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="sm"
            className="gap-1.5 h-7 text-xs"
          >
            <Link to={`/trabalhos/${currentWork.category}/${currentWork.slug}`}>
              Ver detalhes
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-1 mt-2">
        {works.slice(0, 10).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-primary w-3"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Ir para trabalho ${index + 1}`}
          />
        ))}
        {works.length > 10 && (
          <span className="text-[10px] text-muted-foreground ml-1">
            +{works.length - 10}
          </span>
        )}
      </div>
    </div>
  );
};
