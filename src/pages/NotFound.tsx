import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <h1 className="mb-4 text-6xl font-poppins font-bold text-primary">404</h1>
        <p className="mb-2 text-2xl font-poppins font-semibold text-foreground">Página não encontrada</p>
        <p className="mb-8 text-muted-foreground">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Button 
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all font-poppins font-semibold shadow-gold"
          asChild
        >
          <Link to="/">
            <Home className="w-4 h-4 mr-2" />
            Voltar para a Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
