import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { getCategoryBySlug, type Work } from "@/data/trabalhos";

interface WorkCardProps {
  work: Work;
  showCategory?: boolean;
}

export const WorkCard = ({ work, showCategory }: WorkCardProps) => (
  <Link
    to={`/trabalhos/${work.category}/${work.slug}`}
    className="group block p-3 rounded-lg bg-card/30 border border-border/30 hover:border-primary/30 hover:bg-card/50 transition-all duration-200"
  >
    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
      {work.title}
    </h3>
    <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
      {work.summary}
    </p>
    <div className="flex flex-wrap gap-1">
      {showCategory && (
        <Badge variant="outline" className="text-[10px] bg-primary/10 text-primary border-primary/30 px-1.5 py-0">
          {getCategoryBySlug(work.category)?.name}
        </Badge>
      )}
      {work.subcategories.slice(0, 2).map((sub) => (
        <Badge key={sub} variant="secondary" className="text-[10px] px-1.5 py-0">
          {sub}
        </Badge>
      ))}
      {work.client && (
        <Badge variant="outline" className="text-[10px] px-1.5 py-0">
          {work.client}
        </Badge>
      )}
    </div>
  </Link>
);
