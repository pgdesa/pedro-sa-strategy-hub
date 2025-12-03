import { Navbar } from "@/components/Navbar";
import { HeroBlock } from "@/components/HeroBlock";
import { SubHeroBlock } from "@/components/SubHeroBlock";
import { FeaturesBlock } from "@/components/FeaturesBlock";
import { CTABlock } from "@/components/CTABlock";
import { StackedCrossfade } from "@/components/StackedCrossfade";
import { useEffect, useState } from "react";

const Index = () => {
  const [showHomeButton, setShowHomeButton] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Home button scroll handler - outside of StackedCrossfade
  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 90;
      setShowHomeButton(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  return (
    <div className="min-h-screen">
      {/* Fixed Home Button - outside StackedCrossfade */}
      <button
        id="home-button"
        onClick={scrollToTop}
        className={`fixed top-5 left-5 z-[9999] font-poppins font-bold text-foreground hover:text-primary cursor-pointer transition-opacity duration-300 ease-out ${
          showHomeButton 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          fontSize: 'clamp(14px, 2vw, 24px)',
        }}
        aria-label="Voltar ao início"
      >
        PEDRO SÁ
      </button>

      <Navbar />
      <StackedCrossfade 
        sections={[
          <HeroBlock />,
          <SubHeroBlock />,
          <FeaturesBlock />,
          <CTABlock />
        ]} 
      />
    </div>
  );
};

export default Index;
