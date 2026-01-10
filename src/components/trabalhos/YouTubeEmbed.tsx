import { useState } from "react";
import { Play } from "lucide-react";

interface YouTubeEmbedProps {
  url: string;
  title: string;
}

/**
 * Extrai o ID do vídeo de uma URL do YouTube
 */
function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/,
    /^([a-zA-Z0-9_-]{11})$/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  return null;
}

/**
 * Componente de embed do YouTube com lazy loading
 * Mostra uma thumbnail com botão de play e carrega o iframe apenas quando clicado
 */
// Placeholder local para fallback final
const PLACEHOLDER_THUMBNAIL = "/placeholder.svg";

export const YouTubeEmbed = ({ url, title }: YouTubeEmbedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [thumbnailError, setThumbnailError] = useState(0);
  const videoId = getYouTubeVideoId(url);

  if (!videoId) {
    console.warn("URL do YouTube inválida:", url);
    // Retorna placeholder em vez de null para não quebrar layout
    return (
      <div className="relative rounded-xl overflow-hidden bg-muted aspect-video w-full flex items-center justify-center">
        <span className="text-muted-foreground text-sm">Vídeo indisponível</span>
      </div>
    );
  }

  // Array de fallbacks de thumbnail
  const thumbnailFallbacks = [
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/default.jpg`,
    PLACEHOLDER_THUMBNAIL
  ];

  const currentThumbnail = thumbnailFallbacks[Math.min(thumbnailError, thumbnailFallbacks.length - 1)];
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;

  if (isLoaded) {
    return (
      <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setIsLoaded(true)}
      className="relative rounded-xl overflow-hidden bg-muted aspect-video w-full group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      aria-label={`Reproduzir vídeo: ${title}`}
    >
      <img
        src={currentThumbnail}
        alt={`Thumbnail do vídeo: ${title}`}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        decoding="async"
        onError={() => {
          // Tenta próximo fallback
          if (thumbnailError < thumbnailFallbacks.length - 1) {
            setThumbnailError(prev => prev + 1);
          }
        }}
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity group-hover:bg-black/50">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
          <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" aria-hidden="true" />
        </div>
      </div>
      <span className="sr-only">Clique para reproduzir o vídeo</span>
    </button>
  );
};