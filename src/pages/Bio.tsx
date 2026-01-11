import { StackedCrossfade } from "@/components/StackedCrossfade";
import { BioBlocoIntro } from "@/components/BioBlocoIntro";
import { BioBlocoTrajetoria } from "@/components/BioBlocoTrajetoria";
import { BioBlocoFilosofia } from "@/components/BioBlocoFilosofia";
import { BioBlocoTimeline } from "@/components/BioBlocoTimeline";
import { Navbar } from "@/components/Navbar";
import { useMemo, memo } from "react";
import { Helmet } from "react-helmet-async";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { getCanonicalUrl } from "@/utils/seo";

const Bio = memo(() => {
  // Centralizado: scroll ao topo
  useScrollToTop();

  // Memoize sections to prevent unnecessary re-renders
  const sections = useMemo(() => [
    <BioBlocoIntro key="intro" />,
    <BioBlocoTrajetoria key="trajetoria" />,
    <BioBlocoFilosofia key="filosofia" />,
    <BioBlocoTimeline key="timeline" />
  ], []);

  return (
    <>
      <Helmet>
        <title>Bio – Pedro Sá | Estrategista em Comunicação e Marketing</title>
        <meta name="description" content="Conheça a trajetória de Pedro Sá: estrategista em comunicação, marketing e negócios com experiência em projetos públicos e privados desde 2014." />
        <link rel="canonical" href={getCanonicalUrl("/bio")} />
        <meta property="og:title" content="Bio – Pedro Sá | Estrategista em Comunicação e Marketing" />
        <meta property="og:description" content="Conheça a trajetória de Pedro Sá: estrategista em comunicação, marketing e negócios." />
        <meta property="og:url" content={getCanonicalUrl("/bio")} />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <StackedCrossfade sections={sections} />
      </div>
    </>
  );
});

Bio.displayName = "Bio";

export default Bio;
