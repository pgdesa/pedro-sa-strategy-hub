import { Navbar } from "@/components/Navbar";
import { HeroBlock } from "@/components/HeroBlock";
import { SubHeroBlock } from "@/components/SubHeroBlock";
import { FeaturesBlock } from "@/components/FeaturesBlock";
import { CTABlock } from "@/components/CTABlock";
import { StackedCrossfade } from "@/components/StackedCrossfade";
import { useEffect, useMemo, memo } from "react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Helmet } from "react-helmet-async";
import { getCanonicalUrl } from "@/utils/seo";

const Index = memo(() => {
  // Centralizado: scroll ao topo
  useScrollToTop();

  useEffect(() => {
    // Guard for SSR
    if (typeof window === "undefined" || typeof document === "undefined") return;

    // Add JSON-LD structured data for SEO
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Pedro Sá",
      "jobTitle": "Estrategista em Comunicação, Marketing e Negócios",
      "description": "Estrategista em comunicação, marketing e negócios. Planejamento, posicionamento e execução para marcas, governos e pessoas.",
      "url": window.location.origin,
      "sameAs": [
        "https://www.linkedin.com/in/pedrogabrieldesa",
        "https://www.instagram.com/pgdesa",
        "https://www.facebook.com/pgdesa"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
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
    <>
      <Helmet>
        <title>Pedro Sá – Estrategista em Comunicação, Marketing e Negócios</title>
        <meta name="description" content="Estratégia de comunicação, marketing e negócios para dar direção clara à sua marca. Posicionamento, reputação fortalecida e campanhas com métricas que importam." />
        <link rel="canonical" href={getCanonicalUrl("/")} />
        <meta property="og:title" content="Pedro Sá – Estrategista em Comunicação, Marketing e Negócios" />
        <meta property="og:description" content="Estratégia de comunicação, marketing e negócios para dar direção clara à sua marca." />
        <meta property="og:url" content={getCanonicalUrl("/")} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <StackedCrossfade sections={sections} />
      </div>
    </>
  );
});

Index.displayName = "Index";

export default Index;
