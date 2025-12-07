import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Work } from "@/data/trabalhos";

interface FichaTecnicaProps {
  work: Work;
  category: { name: string };
}

export const FichaTecnica = ({ work, category }: FichaTecnicaProps) => (
  <div className="p-6 rounded-xl bg-card/30 border border-border/30 space-y-6">
    <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
      Ficha Técnica
    </h2>

    <div className="space-y-4 text-sm">
      {work.client && (
        <div>
          <span className="text-muted-foreground">Cliente</span>
          <p className="text-foreground font-medium">{work.client}</p>
        </div>
      )}
      {work.agency && (
        <div>
          <span className="text-muted-foreground">Agência</span>
          <p className="text-foreground font-medium">{work.agency}</p>
        </div>
      )}
      <div>
        <span className="text-muted-foreground">Categoria</span>
        <p className="text-foreground font-medium">{category.name}</p>
      </div>
      <div>
        <span className="text-muted-foreground">Subcategorias</span>
        <p className="text-foreground font-medium">
          {work.subcategories.join(", ")}
        </p>
      </div>
      {work.location && (
        <div>
          <span className="text-muted-foreground">Local</span>
          <p className="text-foreground font-medium">{work.location}</p>
        </div>
      )}
      {work.year && (
        <div>
          <span className="text-muted-foreground">Ano</span>
          <p className="text-foreground font-medium">{work.year}</p>
        </div>
      )}
      <div>
        <span className="text-muted-foreground">Tags</span>
        <div className="flex flex-wrap gap-1 mt-1">
          {work.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>

    <div className="pt-4 border-t border-border/30">
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
        Sobre este trabalho
      </h3>
      <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-line">
        {work.description}
      </p>
    </div>

    <Button className="w-full mt-4" asChild>
      <Link to="/agendar-diagnostico">
        Quero algo assim no meu projeto
      </Link>
    </Button>
  </div>
);

// Compact version for desktop single-screen layout
export const FichaTecnicaCompact = ({ work, category }: FichaTecnicaProps) => (
  <div className="p-4 rounded-lg bg-card/30 border border-border/30 space-y-3 text-xs">
    <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
      Ficha Técnica
    </h2>

    <div className="space-y-2">
      {work.client && (
        <div>
          <span className="text-muted-foreground">Cliente</span>
          <p className="text-foreground font-medium">{work.client}</p>
        </div>
      )}
      {work.agency && (
        <div>
          <span className="text-muted-foreground">Agência</span>
          <p className="text-foreground font-medium">{work.agency}</p>
        </div>
      )}
      {work.year && (
        <div>
          <span className="text-muted-foreground">Ano</span>
          <p className="text-foreground font-medium">{work.year}</p>
        </div>
      )}
      {work.location && (
        <div>
          <span className="text-muted-foreground">Local</span>
          <p className="text-foreground font-medium">{work.location}</p>
        </div>
      )}
      <div>
        <span className="text-muted-foreground">Tags</span>
        <div className="flex flex-wrap gap-1 mt-1">
          {work.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="outline" className="text-[10px] px-1.5 py-0">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>

    <div className="pt-2 border-t border-border/30">
      <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
        Sobre
      </h3>
      <p className="text-xs text-foreground/90 leading-relaxed whitespace-pre-line">
        {work.description}
      </p>
    </div>

    <Button className="w-full" size="sm" asChild>
      <Link to="/agendar-diagnostico">
        Quero algo assim
      </Link>
    </Button>
  </div>
);
