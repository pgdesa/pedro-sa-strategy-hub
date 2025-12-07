import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => (
  <nav 
    className="flex items-center gap-2 text-sm text-muted-foreground mb-4"
    aria-label="Você está em"
  >
    {items.map((item, index) => (
      <span key={index} className="flex items-center gap-2">
        {index > 0 && <span className="text-border" aria-hidden="true">/</span>}
        {item.href ? (
          <Link
            to={item.href}
            className="hover:text-primary transition-colors"
          >
            {item.label}
          </Link>
        ) : (
          <span className="text-foreground" aria-current="page">{item.label}</span>
        )}
      </span>
    ))}
  </nav>
);
