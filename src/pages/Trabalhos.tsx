import { useState, useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import {
  trabalhos,
  categories,
  filterWorks,
  getWorksByCategory,
  getWorkBySlug,
  getCategoryBySlug,
  type WorkCategory,
  type Work,
} from "@/data/trabalhos";

// ==========================================
// BREADCRUMB COMPONENT
// ==========================================
interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => (
  <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
    {items.map((item, index) => (
      <span key={index} className="flex items-center gap-2">
        {index > 0 && <span className="text-border">/</span>}
        {item.href ? (
          <Link
            to={item.href}
            className="hover:text-primary transition-colors"
          >
            {item.label}
          </Link>
        ) : (
          <span className="text-foreground">{item.label}</span>
        )}
      </span>
    ))}
  </nav>
);

// ==========================================
// SEARCH INPUT COMPONENT
// ==========================================
interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchInput = ({ value, onChange, placeholder, className }: SearchInputProps) => (
  <div className={`relative ${className}`}>
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
    <Input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder || "Buscar trabalho, cliente ou palavra-chave"}
      className="pl-10 bg-card/50 border-border/50 focus:border-primary/50 transition-colors"
    />
  </div>
);

// ==========================================
// CATEGORY SIDEBAR COMPONENT
// ==========================================
interface CategorySidebarProps {
  activeCategory?: WorkCategory;
  searchValue: string;
  onSearchChange: (value: string) => void;
  compact?: boolean;
}

const CategorySidebar = ({
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
    <nav className="space-y-2">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          to={`/trabalhos/${cat.slug}`}
          className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
            activeCategory === cat.slug
              ? "bg-primary/10 text-primary border-l-2 border-primary"
              : "text-muted-foreground hover:text-foreground hover:bg-card/50"
          }`}
        >
          {cat.name}
        </Link>
      ))}
    </nav>
  </aside>
);

// ==========================================
// WORK CARD COMPONENT
// ==========================================
interface WorkCardProps {
  work: Work;
  showCategory?: boolean;
}

const WorkCard = ({ work, showCategory }: WorkCardProps) => (
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

// ==========================================
// IMAGE CAROUSEL COMPONENT
// ==========================================
interface ImageCarouselProps {
  images: string[];
  title: string;
}

const ImageCarousel = ({ images, title }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const goToPrevious = () => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images.length) return null;

  return (
    <div className="relative rounded-xl overflow-hidden bg-card/30 border border-border/30">
      <div className="aspect-video relative bg-black/20">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-card/50">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <img
          src={images[currentIndex]}
          alt={`${title} - Imagem ${currentIndex + 1}`}
          className={`w-full h-full object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
          loading={currentIndex === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-foreground/30"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// ==========================================
// VIEW 1: ALL CATEGORIES (LANDING)
// ==========================================
const TrabalhosLanding = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchResults = useMemo(
    () => (searchTerm ? filterWorks(trabalhos, searchTerm) : []),
    [searchTerm]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Trabalhos – Pedro Sá | Portfólio de Comunicação e Marketing</title>
        <meta name="description" content="Conheça os projetos de comunicação, marketing e estratégia de Pedro Sá. Cases de atendimento publicitário, comunicação estratégica, gestão de projetos e marketing digital." />
        <link rel="canonical" href="/trabalhos" />
      </Helmet>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
      {/* Mobile/Tablet Layout */}
      <main className="lg:hidden pt-28 pb-20 px-6 flex-1">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Trabalhos" }]} />

          <header className="mb-8">
            <h1 className="font-poppins text-4xl font-bold text-foreground mb-4">
              Trabalhos
            </h1>
            <p className="text-lg text-muted-foreground">
              Projetos organizados por categorias para você encontrar o que mais se aproxima do seu desafio.
            </p>
          </header>

          <div className="space-y-8">
            {/* Search First on Mobile */}
            <div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                Busca rápida
              </h2>
              <SearchInput
                value={searchTerm}
                onChange={setSearchTerm}
                className="mb-4"
              />
              {searchTerm && (
                <div className="space-y-3">
                  {searchResults.length > 0 ? (
                    searchResults.map((work) => (
                      <WorkCard key={work.id} work={work} showCategory />
                    ))
                  ) : (
                    <p className="text-muted-foreground text-center py-8">
                      Nenhum trabalho encontrado para esta busca.
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Categories */}
            <div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                Categorias
              </h2>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    to={`/trabalhos/${cat.slug}`}
                    className="group flex items-center justify-between p-5 rounded-xl bg-card/30 border border-border/30 hover:border-primary/30 hover:bg-card/50 transition-all duration-200"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {cat.description}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Desktop Layout - Full viewport, no scroll */}
      <main className="hidden lg:flex flex-col flex-1 pt-16 px-8 pb-4 h-[calc(100vh-0px)] overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex-1 grid grid-cols-2 grid-rows-[auto_1fr] gap-x-12 gap-y-4">
          {/* Quadro 1: Header (top-left) */}
          <div className="col-start-1 row-start-1">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Trabalhos" }]} />
            <h1 className="font-poppins text-4xl font-bold text-foreground mb-1">
              Trabalhos
            </h1>
            <p className="text-base text-muted-foreground">
              Projetos organizados por categorias para você encontrar o que mais se aproxima do seu desafio.
            </p>
          </div>

          {/* Quadro 3: Search (top-right) */}
          <div className="col-start-2 row-start-1 flex flex-col justify-start overflow-y-auto max-h-full pt-6">
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Busca rápida
            </h2>
            <SearchInput
              value={searchTerm}
              onChange={setSearchTerm}
              className="mb-2"
            />
            {searchTerm && (
              <div className="space-y-2 overflow-y-auto flex-1">
                {searchResults.length > 0 ? (
                  searchResults.map((work) => (
                    <WorkCard key={work.id} work={work} showCategory />
                  ))
                ) : (
                  <p className="text-muted-foreground text-center py-4 text-sm">
                    Nenhum trabalho encontrado.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Quadro 2: Categories (bottom-left, spans both columns) */}
          <div className="col-span-2 row-start-2 flex flex-col">
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Categorias
            </h2>
            <div className="grid grid-cols-2 gap-3 flex-1">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/trabalhos/${cat.slug}`}
                  className="group flex items-center justify-between p-3 rounded-lg bg-card/30 border border-border/30 hover:border-primary/30 hover:bg-card/50 transition-all duration-200 hover:scale-[1.01]"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                      {cat.description}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>
      </div>
    </>
  );
};

// ==========================================
// VIEW 2: CATEGORY LIST
// ==========================================
interface CategoryViewProps {
  categorySlug: WorkCategory;
}

const CategoryView = ({ categorySlug }: CategoryViewProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const category = getCategoryBySlug(categorySlug);
  const categoryWorks = useMemo(
    () => getWorksByCategory(categorySlug),
    [categorySlug]
  );
  const filteredWorks = useMemo(
    () => filterWorks(categoryWorks, searchTerm),
    [categoryWorks, searchTerm]
  );

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Categoria não encontrada.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Mobile/Tablet Layout - Normal scroll */}
      <main className="lg:hidden pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Trabalhos", href: "/trabalhos" },
              { label: category.name },
            ]}
          />

          <header className="mb-6">
            <h1 className="font-poppins text-2xl font-bold text-foreground mb-2">
              {category.name}
            </h1>
            <p className="text-sm text-muted-foreground">
              {category.description}
            </p>
          </header>

          {/* Search */}
          <div className="mb-6">
            <SearchInput
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Buscar nesta categoria"
            />
          </div>

          {/* Categories Navigation */}
          <div className="mb-6">
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              Categorias
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/trabalhos/${cat.slug}`}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                    categorySlug === cat.slug
                      ? "bg-primary/20 text-primary border border-primary/30"
                      : "bg-card/50 text-muted-foreground hover:text-foreground border border-border/30"
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Work List */}
          <div className="space-y-3">
            {filteredWorks.length > 0 ? (
              filteredWorks.map((work) => (
                <WorkCard key={work.id} work={work} />
              ))
            ) : (
              <p className="text-muted-foreground text-center py-8 text-sm">
                Nenhum trabalho encontrado para esta busca.
              </p>
            )}
          </div>
        </div>
      </main>

      {/* Desktop Layout - Full viewport, no page scroll */}
      <main className="hidden lg:flex flex-col h-screen pt-16 pb-4 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col overflow-hidden">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Trabalhos", href: "/trabalhos" },
              { label: category.name },
            ]}
          />

          <div className="grid grid-cols-[240px_1fr] gap-8 flex-1 overflow-hidden">
            {/* Sidebar */}
            <CategorySidebar
              activeCategory={categorySlug}
              searchValue={searchTerm}
              onSearchChange={setSearchTerm}
            />

            {/* Main Content */}
            <div className="flex flex-col overflow-hidden">
              <header className="mb-3 flex-shrink-0">
                <h1 className="font-poppins text-xl font-bold text-foreground mb-1">
                  {category.name}
                </h1>
                <p className="text-xs text-muted-foreground">
                  {category.description}
                </p>
              </header>

              <div className="space-y-2 overflow-y-auto flex-1 pr-2">
                {filteredWorks.length > 0 ? (
                  filteredWorks.map((work) => (
                    <WorkCard key={work.id} work={work} />
                  ))
                ) : (
                  <p className="text-muted-foreground text-center py-8 text-sm">
                    Nenhum trabalho encontrado para esta busca.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// ==========================================
// VIEW 3: WORK DETAIL
// ==========================================
interface WorkDetailProps {
  categorySlug: WorkCategory;
  workSlug: string;
}

const WorkDetail = ({ categorySlug, workSlug }: WorkDetailProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const work = getWorkBySlug(categorySlug, workSlug);
  const category = getCategoryBySlug(categorySlug);

  if (!work || !category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Trabalho não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Mobile/Tablet Layout - Normal scroll */}
      <main className="lg:hidden pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Trabalhos", href: "/trabalhos" },
              { label: category.name, href: `/trabalhos/${categorySlug}` },
              { label: work.title },
            ]}
          />

          <header className="mb-4">
            <h1 className="font-poppins text-xl font-bold text-foreground mb-2">
              {work.title}
            </h1>
            <div className="flex flex-wrap gap-1.5">
              <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
                {category.name}
              </Badge>
              {work.subcategories.map((sub) => (
                <Badge key={sub} variant="secondary" className="text-xs">
                  {sub}
                </Badge>
              ))}
            </div>
          </header>

          {work.gallery && work.gallery.length > 0 && (
            <div className="mb-6">
              <ImageCarousel images={work.gallery} title={work.title} />
            </div>
          )}

          <FichaTecnica work={work} category={category} />
        </div>
      </main>

      {/* Desktop Layout - Full viewport, no page scroll */}
      <main className="hidden lg:flex flex-col h-screen pt-16 pb-4 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col overflow-hidden">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Trabalhos", href: "/trabalhos" },
              { label: category.name, href: `/trabalhos/${categorySlug}` },
              { label: work.title },
            ]}
          />

          <div className="grid grid-cols-[200px_1fr] gap-6 flex-1 overflow-hidden">
            {/* Sidebar */}
            <CategorySidebar
              activeCategory={categorySlug}
              searchValue={searchTerm}
              onSearchChange={setSearchTerm}
              compact
            />

            {/* Main Content */}
            <div className="grid grid-cols-[1fr_280px] gap-6 overflow-hidden">
              {/* Left: Title + Carousel */}
              <div className="flex flex-col overflow-hidden">
                <header className="mb-3 flex-shrink-0">
                  <h1 className="font-poppins text-xl font-bold text-foreground mb-1">
                    {work.title}
                  </h1>
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
                      {category.name}
                    </Badge>
                    {work.subcategories.map((sub) => (
                      <Badge key={sub} variant="secondary" className="text-xs">
                        {sub}
                      </Badge>
                    ))}
                  </div>
                </header>

                {work.gallery && work.gallery.length > 0 && (
                  <div className="flex-1 min-h-0">
                    <ImageCarousel images={work.gallery} title={work.title} />
                  </div>
                )}
              </div>

              {/* Right: Ficha Técnica */}
              <div className="overflow-y-auto pr-2">
                <FichaTecnicaCompact work={work} category={category} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// ==========================================
// FICHA TÉCNICA COMPONENT
// ==========================================
interface FichaTecnicaProps {
  work: Work;
  category: { name: string };
}

const FichaTecnica = ({ work, category }: FichaTecnicaProps) => (
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
const FichaTecnicaCompact = ({ work, category }: FichaTecnicaProps) => (
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

// ==========================================
// MAIN COMPONENT (ROUTER)
// ==========================================
export default function Trabalhos() {
  const { categorySlug, workSlug } = useParams<{
    categorySlug?: string;
    workSlug?: string;
  }>();

  // View 3: Work Detail
  if (categorySlug && workSlug) {
    return (
      <WorkDetail
        categorySlug={categorySlug as WorkCategory}
        workSlug={workSlug}
      />
    );
  }

  // View 2: Category List
  if (categorySlug) {
    return <CategoryView categorySlug={categorySlug as WorkCategory} />;
  }

  // View 1: Landing
  return <TrabalhosLanding />;
}
