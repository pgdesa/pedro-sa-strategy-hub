import { Navbar } from "@/components/Navbar";
import { HeroBlock } from "@/components/HeroBlock";
import { SubHeroBlock } from "@/components/SubHeroBlock";
import { FeaturesBlock } from "@/components/FeaturesBlock";
import { CTABlock } from "@/components/CTABlock";
import { StackedCrossfade } from "@/components/StackedCrossfade";
import { useEffect, useMemo } from "react";

const Index = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Add JSON-LD structured data for SEO
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Pedro Sá",
      "jobTitle": "Estrategista em Comunicação, Marketing e Negócios",
      "description": "Estrategista em comunicação, marketing e negócios. Planejamento, posicionamento e execução para marcas, governos e pessoas.",
      "url": window.location.origin,
      "sameAs": []
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Memoize sections to prevent unnecessary re-renders
  const sections = useMemo(() => [
    <HeroBlock key="hero" />,
    <SubHeroBlock key="subhero" />,
    <FeaturesBlock key="features" />,
    <CTABlock key="cta" />
  ], []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <StackedCrossfade sections={sections} />
    </div>
  );
};

export default Index;
