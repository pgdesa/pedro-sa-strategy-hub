import { StackedCrossfade } from "@/components/StackedCrossfade";
import { BioBlocoIntro } from "@/components/BioBlocoIntro";
import { BioBlocoTrajetoria } from "@/components/BioBlocoTrajetoria";
import { BioBlocoFilosofia } from "@/components/BioBlocoFilosofia";
import { BioBlocoTimeline } from "@/components/BioBlocoTimeline";
import { Navbar } from "@/components/Navbar";

const Bio = () => {
  const sections = [
    <BioBlocoIntro key="intro" />,
    <BioBlocoTrajetoria key="trajetoria" />,
    <BioBlocoFilosofia key="filosofia" />,
    <BioBlocoTimeline key="timeline" />
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <StackedCrossfade sections={sections} />
    </div>
  );
};

export default Bio;
