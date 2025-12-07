import { NavLink as RouterNavLink, NavLinkProps, useNavigate } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

/**
 * NavLink customizado que permite:
 * - Ctrl+Click, Cmd+Click, Shift+Click e botão do meio abrirem em nova aba
 * - Clique simples (esquerdo sem modificadores) faz navegação SPA
 */
const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, onClick, ...props }, ref) => {
    const navigate = useNavigate();
    
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Permite comportamento padrão para cliques modificados
      // (Ctrl, Cmd, Shift, botão do meio)
      if (
        e.metaKey || // Cmd (macOS)
        e.ctrlKey || // Ctrl (Windows/Linux)
        e.shiftKey || // Shift
        e.button !== 0 // Não é botão esquerdo
      ) {
        // Deixa o navegador abrir em nova aba normalmente
        if (onClick) {
          onClick(e as any);
        }
        return;
      }
      
      // Clique simples: navegação SPA
      e.preventDefault();
      navigate(to as string);
      
      if (onClick) {
        onClick(e as any);
      }
    };
    
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        onClick={handleClick}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
