import { StackedCrossfade } from "@/components/StackedCrossfade";
import { BioBlocoIntro } from "@/components/BioBlocoIntro";
import { BioBlocoTrajetoria } from "@/components/BioBlocoTrajetoria";
import { BioBlocoFilosofia } from "@/components/BioBlocoFilosofia";
import { BioBlocoTimeline } from "@/components/BioBlocoTimeline";
import { Navbar } from "@/components/Navbar";
import { useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";

const Bio = () => {
  // Memoize sections to prevent unnecessary re-renders
  const sections = useMemo(() => [
    <BioBlocoIntro key="intro" />,
    <BioBlocoTrajetoria key="trajetoria" />,
    <BioBlocoFilosofia key="filosofia" />,
    <BioBlocoTimeline key="timeline" />
  ], []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Bio – Pedro Sá | Estrategista em Comunicação e Marketing</title>
        <meta name="description" content="Conheça a trajetória de Pedro Sá: estrategista em comunicação, marketing e negócios com experiência em projetos públicos e privados desde 2014." />
        <link rel="canonical" href="/bio" />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <StackedCrossfade sections={sections} />
      </div>
    </>
  );
};

export default Bio;
