import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isBioPage = location.pathname === "/bio";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 90);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show logo always on non-home pages, or when scrolled on home page
  const showLogo = !isHomePage || scrolled;

  // Dynamic text color: white when scrolled (dark navbar), otherwise dark on Bio, light on Home
  const navTextColor = scrolled 
    ? "text-white" 
    : (isBioPage ? "text-stone-900" : "text-foreground");

  const navHoverColor = "hover:text-primary";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        scrolled
          ? "h-16 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "h-20 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo - PEDRO SÁ */}
        <Link 
          to="/"
          onClick={scrollToTop}
          className={`font-poppins font-bold ${navTextColor} ${navHoverColor} cursor-pointer transition-all duration-300 ${
            showLogo 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
          style={{
            fontSize: 'clamp(14px, 2vw, 20px)',
          }}
        >
          PEDRO SÁ
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/bio"
            className={`text-sm font-inter font-medium ${navTextColor} ${navHoverColor} transition-colors`}
          >
            Bio
          </NavLink>
          <NavLink
            to="/trabalhos"
            className={`text-sm font-inter font-medium ${navTextColor} ${navHoverColor} transition-colors`}
          >
            Trabalhos
          </NavLink>
          <NavLink
            to="/contato"
            className={`text-sm font-inter font-medium ${navTextColor} ${navHoverColor} transition-colors`}
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
