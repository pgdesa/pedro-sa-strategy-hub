import { StackedCrossfade } from "@/components/StackedCrossfade";
import { BioBlocoIntro } from "@/components/BioBlocoIntro";
import { BioBlocoTrajetoria } from "@/components/BioBlocoTrajetoria";
import { BioBlocoFilosofia } from "@/components/BioBlocoFilosofia";
import { BioBlocoTimeline } from "@/components/BioBlocoTimeline";
import { Navbar } from "@/components/Navbar";
import { useEffect } from "react";

const Bio = () => {
  const sections = [
    <BioBlocoIntro key="intro" />,
    <BioBlocoTrajetoria key="trajetoria" />,
    <BioBlocoFilosofia key="filosofia" />,
    <BioBlocoTimeline key="timeline" />
  ];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <StackedCrossfade sections={sections} />
    </div>
  );
};

export default Bio;
