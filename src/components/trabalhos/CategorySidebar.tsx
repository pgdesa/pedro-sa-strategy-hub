import { Link } from "react-router-dom";
import { SearchInput } from "./SearchInput";
import { categories, type WorkCategory } from "@/data/trabalhos";

interface CategorySidebarProps {
  activeCategory?: WorkCategory;
  searchValue: string;
  onSearchChange: (value: string) => void;
  compact?: boolean;
}

export const CategorySidebar = ({
  activeCategory,
  searchValue,
  onSearchChange,
  compact,
}: CategorySidebarProps) => (
  <aside className={compact ? "" : "lg:sticky lg:top-24"}>
    <SearchInput
      value={searchValue}
      onChange={onSearchChange}
      placeholder="Buscar nesta categoria"
      className="mb-6"
    />
    <nav className="space-y-2" aria-label="Categorias de trabalhos">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          to={`/trabalhos/${cat.slug}`}
          className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
            activeCategory === cat.slug
              ? "bg-primary/10 text-primary border-l-2 border-primary"
              : "text-muted-foreground hover:text-foreground hover:bg-card/50"
          }`}
          aria-current={activeCategory === cat.slug ? "page" : undefined}
        >
          {cat.name}
        </Link>
      ))}
    </nav>
  </aside>
);
