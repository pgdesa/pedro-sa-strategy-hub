import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "h-16 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "h-20 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo - Hidden initially, appears on scroll */}
        <NavLink 
          to="/" 
          className={`text-xl md:text-2xl font-poppins font-bold tracking-wide text-foreground hover:text-primary transition-all duration-500 ${
            scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          PEDRO SÁ
        </NavLink>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/bio"
            className="text-sm font-inter font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Bio
          </NavLink>
          <NavLink
            to="/projetos"
            className="text-sm font-inter font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Projetos
          </NavLink>
          <NavLink
            to="/casos"
            className="text-sm font-inter font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Casos
          </NavLink>
          <NavLink
            to="/contato"
            className="text-sm font-inter font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contato
          </NavLink>
          <Button 
            variant="default" 
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-gold"
          >
            Agendar diagnóstico
          </Button>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden">
          <Button 
            variant="default" 
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Agendar
          </Button>
        </div>
      </div>
    </nav>
  );
};
