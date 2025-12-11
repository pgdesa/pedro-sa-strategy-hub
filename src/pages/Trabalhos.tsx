import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { getCanonicalUrl } from "@/utils/seo";
import {
  Breadcrumb,
  SearchInput,
  CategorySidebar,
  WorkCard,
  ImageCarousel,
  FichaTecnica,
  FichaTecnicaCompact,
  YouTubeEmbed,
  TrabalhosCarousel,
} from "@/components/trabalhos";
import {
  trabalhos,
  categories,
  filterWorks,
  getWorksByCategory,
  getWorkBySlug,
  getCategoryBySlug,
  type WorkCategory,
} from "@/data/trabalhos";

// ==========================================
// VIEW 1: ALL CATEGORIES (LANDING)
// ==========================================
const TrabalhosLanding = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchResults = useMemo(
    () => (searchTerm ? filterWorks(trabalhos, searchTerm) : []),
    [searchTerm]
  );

  useScrollToTop();

  return (
    <>
      <Helmet>
        <title>Trabalhos – Pedro Sá | Portfólio de Comunicação e Marketing</title>
        <meta name="description" content="Conheça os projetos de comunicação, marketing e estratégia de Pedro Sá. Cases de atendimento publicitário, comunicação estratégica, gestão de projetos e marketing digital." />
        <link rel="canonical" href={getCanonicalUrl("/trabalhos")} />
      </Helmet>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />

        {/* Mobile/Tablet Layout */}
        <main className="lg:hidden pt-28 pb-20 px-6 flex-1">
          <div className="max-w-6xl mx-auto">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Trabalhos" }]} />

            <header className="mb-6">
              <h1 className="font-poppins text-3xl font-bold text-foreground mb-2">
                Trabalhos
              </h1>
              <p className="text-base text-muted-foreground">
                Projetos organizados por categorias para você encontrar o que mais se aproxima do seu desafio.
              </p>
            </header>

            {/* Carousel - Mobile */}
            <div className="mb-8 h-[400px]">
              <TrabalhosCarousel works={trabalhos} />
            </div>

            {/* Search - Mobile */}
            <div className="mb-6">
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Busca rápida
              </h2>
              <SearchInput value={searchTerm} onChange={setSearchTerm} className="mb-4" />
              {searchTerm && (
                <div className="space-y-3">
                  {searchResults.length > 0 ? (
                    searchResults.map((work) => <WorkCard key={work.id} work={work} showCategory />)
                  ) : (
                    <p className="text-muted-foreground text-center py-8">Nenhum trabalho encontrado para esta busca.</p>
                  )}
                </div>
              )}
            </div>

            {/* Categories - Mobile */}
            <div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Categorias</h2>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <Link key={cat.slug} to={`/trabalhos/${cat.slug}`} className="group flex items-center justify-between p-4 rounded-xl bg-card/30 border border-border/30 hover:border-primary/30 hover:bg-card/50 transition-all duration-200">
                    <div>
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">{cat.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{cat.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Desktop Layout - 2 Columns: Carousel Left, Categories Right */}
        <main className="hidden lg:flex flex-col flex-1 pt-16 px-6 pb-3 h-screen overflow-hidden">
          <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col overflow-hidden">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Trabalhos" }]} />
            
            <header className="mb-2">
              <h1 className="font-poppins text-2xl font-bold text-foreground mb-0.5">Trabalhos</h1>
              <p className="text-xs text-muted-foreground">Projetos organizados por categorias para você encontrar o que mais se aproxima do seu desafio.</p>
            </header>

            {/* Main Grid: Carousel (Left) + Categories (Right) */}
            <div className="grid grid-cols-2 gap-6 flex-1 min-h-0">
              {/* Left Column: Carousel */}
              <div className="flex flex-col min-h-0">
                <TrabalhosCarousel works={trabalhos} />
              </div>

              {/* Right Column: Search + Categories */}
              <div className="flex flex-col overflow-hidden">
                {/* Search */}
                <div className="mb-3">
                  <h2 className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1.5">Busca rápida</h2>
                  <SearchInput value={searchTerm} onChange={setSearchTerm} />
                  {searchTerm && (
                    <div className="mt-2 space-y-1.5 max-h-[150px] overflow-y-auto">
                      {searchResults.length > 0 ? (
                        searchResults.slice(0, 4).map((work) => <WorkCard key={work.id} work={work} showCategory />)
                      ) : (
                        <p className="text-muted-foreground text-center py-3 text-xs">Nenhum trabalho encontrado.</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Categories */}
                <div className="flex-1 flex flex-col min-h-0">
                  <h2 className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1.5">Categorias</h2>
                  <div className="flex flex-col gap-1.5 flex-1">
                    {categories.map((cat) => (
                      <Link
                        key={cat.slug}
                        to={`/trabalhos/${cat.slug}`}
                        className="group flex items-center justify-between p-2.5 rounded-lg bg-card/30 border border-border/30 hover:border-primary/30 hover:bg-card/50 transition-all duration-200 hover:scale-[1.01]"
                      >
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">{cat.name}</h3>
                          <p className="text-[10px] text-muted-foreground mt-0.5 line-clamp-1">{cat.description}</p>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                      </Link>
                    ))}
                  </div>
                </div>
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
const CategoryView = ({ categorySlug }: { categorySlug: WorkCategory }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const category = getCategoryBySlug(categorySlug);
  const categoryWorks = useMemo(() => getWorksByCategory(categorySlug), [categorySlug]);
  const filteredWorks = useMemo(() => filterWorks(categoryWorks, searchTerm), [categoryWorks, searchTerm]);

  if (!category) return <div className="min-h-screen bg-background flex items-center justify-center"><p className="text-muted-foreground">Categoria não encontrada.</p></div>;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="lg:hidden pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Trabalhos", href: "/trabalhos" }, { label: category.name }]} />
          <header className="mb-6"><h1 className="font-poppins text-2xl font-bold text-foreground mb-2">{category.name}</h1><p className="text-sm text-muted-foreground">{category.description}</p></header>
          <div className="mb-6"><SearchInput value={searchTerm} onChange={setSearchTerm} placeholder="Buscar nesta categoria" /></div>
          <div className="mb-6"><h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Categorias</h2><div className="flex flex-wrap gap-2">{categories.map((cat) => <Link key={cat.slug} to={`/trabalhos/${cat.slug}`} className={`px-3 py-1.5 rounded-full text-sm transition-colors ${categorySlug === cat.slug ? "bg-primary/20 text-primary border border-primary/30" : "bg-card/50 text-muted-foreground hover:text-foreground border border-border/30"}`}>{cat.name}</Link>)}</div></div>
          <div className="space-y-3">{filteredWorks.length > 0 ? filteredWorks.map((work) => <WorkCard key={work.id} work={work} />) : <p className="text-muted-foreground text-center py-8 text-sm">Nenhum trabalho encontrado para esta busca.</p>}</div>
        </div>
      </main>
      <main className="hidden lg:flex flex-col h-screen pt-16 pb-4 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col overflow-hidden">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Trabalhos", href: "/trabalhos" }, { label: category.name }]} />
          <div className="grid grid-cols-[240px_1fr] gap-8 flex-1 overflow-hidden">
            <CategorySidebar activeCategory={categorySlug} searchValue={searchTerm} onSearchChange={setSearchTerm} />
            <div className="flex flex-col overflow-hidden">
              <header className="mb-3 flex-shrink-0"><h1 className="font-poppins text-xl font-bold text-foreground mb-1">{category.name}</h1><p className="text-xs text-muted-foreground">{category.description}</p></header>
              <div className="space-y-2 overflow-y-auto flex-1 pr-2">{filteredWorks.length > 0 ? filteredWorks.map((work) => <WorkCard key={work.id} work={work} />) : <p className="text-muted-foreground text-center py-8 text-sm">Nenhum trabalho encontrado para esta busca.</p>}</div>
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
const WorkDetail = ({ categorySlug, workSlug }: { categorySlug: WorkCategory; workSlug: string }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const work = getWorkBySlug(categorySlug, workSlug);
  const category = getCategoryBySlug(categorySlug);

  if (!work || !category) return <div className="min-h-screen bg-background flex items-center justify-center"><p className="text-muted-foreground">Trabalho não encontrado.</p></div>;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="lg:hidden pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Trabalhos", href: "/trabalhos" }, { label: category.name, href: `/trabalhos/${categorySlug}` }, { label: work.title }]} />
          <header className="mb-4"><h1 className="font-poppins text-xl font-bold text-foreground mb-2">{work.title}</h1><div className="flex flex-wrap gap-1.5"><Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">{category.name}</Badge>{work.subcategories.map((sub) => <Badge key={sub} variant="secondary" className="text-xs">{sub}</Badge>)}</div></header>
          {work.gallery?.length > 0 && <div className="mb-4"><ImageCarousel images={work.gallery} title={work.title} /></div>}
          {work.youtubeVideo && <div className="mb-6"><YouTubeEmbed url={work.youtubeVideo} title={`Vídeo: ${work.title}`} /></div>}
          <FichaTecnica work={work} category={category} />
        </div>
      </main>
      <main className="hidden lg:flex flex-col h-screen pt-16 pb-4 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col overflow-hidden">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Trabalhos", href: "/trabalhos" }, { label: category.name, href: `/trabalhos/${categorySlug}` }, { label: work.title }]} />
          <div className="grid grid-cols-[200px_1fr] gap-6 flex-1 overflow-hidden">
            <CategorySidebar activeCategory={categorySlug} searchValue={searchTerm} onSearchChange={setSearchTerm} compact />
            <div className="grid grid-cols-[1fr_280px] gap-6 overflow-hidden">
              <div className="flex flex-col overflow-hidden">
                <header className="mb-3 flex-shrink-0"><h1 className="font-poppins text-xl font-bold text-foreground mb-1">{work.title}</h1><div className="flex flex-wrap gap-1.5"><Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">{category.name}</Badge>{work.subcategories.map((sub) => <Badge key={sub} variant="secondary" className="text-xs">{sub}</Badge>)}</div></header>
                <div className="flex-1 min-h-0 space-y-4 overflow-y-auto">
                  {work.gallery?.length > 0 && <ImageCarousel images={work.gallery} title={work.title} />}
                  {work.youtubeVideo && <YouTubeEmbed url={work.youtubeVideo} title={`Vídeo: ${work.title}`} />}
                </div>
              </div>
              <div className="overflow-y-auto pr-2"><FichaTecnicaCompact work={work} category={category} /></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// ==========================================
// MAIN COMPONENT (ROUTER)
// ==========================================
export default function Trabalhos() {
  const { categorySlug, workSlug } = useParams<{ categorySlug?: string; workSlug?: string }>();
  if (categorySlug && workSlug) return <WorkDetail categorySlug={categorySlug as WorkCategory} workSlug={workSlug} />;
  if (categorySlug) return <CategoryView categorySlug={categorySlug as WorkCategory} />;
  return <TrabalhosLanding />;
}
