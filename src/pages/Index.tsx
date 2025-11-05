import { Navbar } from "@/components/Navbar";
import { HeroBlock } from "@/components/HeroBlock";
import { ValueBlock } from "@/components/ValueBlock";
import { FeaturesBlock } from "@/components/FeaturesBlock";
import { CTABlock } from "@/components/CTABlock";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add JSON-LD structured data for SEO
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Pedro Sá",
      "jobTitle": "Estrategista em Comunicação, Marketing e Negócios",
      "description": "Estrategista em comunicação, marketing e negócios. Planejamento, posicionamento e execução para marcas, governos e pessoas.",
      "url": window.location.origin,
      "sameAs": [
        // Add social media URLs here when available
      ]
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
      <Navbar />
      <main>
        <HeroBlock />
        <ValueBlock />
        <FeaturesBlock />
        <CTABlock />
      </main>
    </div>
  );
};

export default Index;
