import { SITE_DOMAIN } from "@/config/env";

/**
 * Retorna a URL canônica absoluta para uma rota.
 * Usa window.location.origin quando disponível, senão usa fallback do domínio configurado.
 */
export const getCanonicalUrl = (path: string): string => {
  if (typeof window !== "undefined" && window.location?.origin) {
    return `${window.location.origin}${path}`;
  }
  return `${SITE_DOMAIN}${path}`;
};

/**
 * Extrai o ID de vídeo do YouTube de uma URL
 */
export const getYouTubeVideoId = (url: string): string | null => {
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
};

/**
 * Retorna a URL da thumbnail do YouTube.
 * Tenta maxresdefault, com fallback para hqdefault.
 */
export const getYouTubeThumbnail = (videoUrl: string, quality: "maxres" | "hq" = "maxres"): string | null => {
  const videoId = getYouTubeVideoId(videoUrl);
  if (!videoId) return null;
  
  const qualityMap = {
    maxres: "maxresdefault",
    hq: "hqdefault"
  };
  
  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`;
};
