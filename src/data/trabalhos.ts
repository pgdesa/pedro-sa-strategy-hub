// ==========================================
// MODELO DE DADOS DOS TRABALHOS
// ==========================================
// Para adicionar novos trabalhos, copie um objeto existente e edite os campos.
// Cada trabalho deve ter um slug único dentro da sua categoria.

// ==========================================
// IMPORTS DAS IMAGENS
// ==========================================
// Carreata de Natal Coca-Cola 2014
// Para trocar as imagens, substitua os arquivos na pasta src/assets mantendo os nomes
import carreataCocover from '@/assets/carreata-coca-cola-cover.jpg';
import carreata1 from '@/assets/carreata-coca-cola-1.jpg';
import carreata2 from '@/assets/carreata-coca-cola-2.jpg';
import carreata3 from '@/assets/carreata-coca-cola-3.jpg';
import carreata4 from '@/assets/carreata-coca-cola-4.jpg';
import carreata5 from '@/assets/carreata-coca-cola-5.jpg';
import carreata6 from '@/assets/carreata-coca-cola-6.jpg';
import carreata7 from '@/assets/carreata-coca-cola-7.jpg';
import carreata8 from '@/assets/carreata-coca-cola-8.jpg';

// Dr. Marcus Grangeiro - Campanha Política 2022
// Para trocar as imagens, substitua os arquivos na pasta src/assets mantendo os nomes
import grangeiroCover from '@/assets/grangeiro-cover.png';
import grangeiro1 from '@/assets/grangeiro-1.png';
import grangeiro2 from '@/assets/grangeiro-2.png';
import grangeiro3 from '@/assets/grangeiro-3.png';
import grangeiro4 from '@/assets/grangeiro-4.png';
import grangeiro5 from '@/assets/grangeiro-5.png';
import grangeiro6 from '@/assets/grangeiro-6.png';
import grangeiro7 from '@/assets/grangeiro-7.png';
import grangeiro8 from '@/assets/grangeiro-8.png';
import grangeiro9 from '@/assets/grangeiro-9.png';

export type WorkCategory =
  | "atendimento-publicitario" 
  | "comunicacao-estrategica" 
  | "gestao-de-projetos" 
  | "marketing-digital";

export interface Work {
  id: string;
  slug: string;
  title: string;
  client?: string;
  agency?: string;
  year?: string;
  location?: string;
  summary: string;
  description: string;
  category: WorkCategory;
  // Categorias adicionais onde o trabalho também deve aparecer
  additionalCategories?: WorkCategory[];
  subcategories: string[];
  tags: string[];
  coverImage?: string;
  gallery?: string[];
}

export interface CategoryInfo {
  slug: WorkCategory;
  name: string;
  description: string;
}

// ==========================================
// CATEGORIAS
// ==========================================
export const categories: CategoryInfo[] = [
  {
    slug: "atendimento-publicitario",
    name: "Atendimento Publicitário",
    description: "Gestão de contas e relacionamento com clientes em campanhas publicitárias de grande impacto."
  },
  {
    slug: "comunicacao-estrategica",
    name: "Comunicação Estratégica",
    description: "Posicionamento de marca, identidade visual e estratégias de comunicação integrada."
  },
  {
    slug: "gestao-de-projetos",
    name: "Gestão de Projetos",
    description: "Coordenação e execução de projetos complexos com múltiplas equipes e stakeholders."
  },
  {
    slug: "marketing-digital",
    name: "Marketing Digital",
    description: "Estratégias digitais, redes sociais, tráfego pago e presença online."
  }
];

// ==========================================
// TRABALHOS
// ==========================================
// Adicione novos trabalhos abaixo, seguindo o formato dos exemplos.

export const trabalhos: Work[] = [
  // ----------------------------------------
  // ATENDIMENTO PUBLICITÁRIO
  // ----------------------------------------
  {
    id: "ap-001",
    slug: "campanha-institucional-banco-xyz",
    title: "Campanha Institucional Banco XYZ",
    client: "Banco XYZ",
    agency: "Agência Criativa",
    year: "2023",
    location: "São Paulo, SP",
    summary: "Gestão completa da conta para campanha institucional de reposicionamento de marca com alcance nacional.",
    description: "Liderança do atendimento em projeto de grande escala envolvendo múltiplas entregas: filme publicitário, peças digitais, OOH e ativações em pontos de venda. Coordenação entre cliente, equipe criativa e produtoras, garantindo alinhamento estratégico e cumprimento de prazos rigorosos. O projeto resultou em aumento de 23% no reconhecimento de marca segundo pesquisa pós-campanha.",
    category: "atendimento-publicitario",
    subcategories: ["Campanha Institucional", "Rebranding"],
    tags: ["banco", "institucional", "TV", "digital", "OOH"],
    coverImage: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "ap-002",
    slug: "lancamento-produto-tech-alpha",
    title: "Lançamento Produto Tech Alpha",
    client: "Tech Alpha",
    agency: "Agência Digital Plus",
    year: "2022",
    location: "Rio de Janeiro, RJ",
    summary: "Atendimento dedicado para lançamento de produto tecnológico com estratégia 360°.",
    description: "Condução do relacionamento com cliente durante todo o ciclo de lançamento de novo produto no mercado brasileiro. Gestão de timeline com mais de 50 entregas, desde conceituação criativa até execução de evento de lançamento. Interface direta com C-level do cliente e coordenação de 4 fornecedores especializados.",
    category: "atendimento-publicitario",
    subcategories: ["Lançamento de Produto", "Tecnologia"],
    tags: ["tecnologia", "lançamento", "evento", "360"],
    coverImage: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "carreata-natal-coca-cola-2014",
    slug: "carreata-natal-coca-cola-2014-manaus",
    title: "Carreata de Natal Coca-Cola 2014 – Manaus (AM)",
    client: "Grupo Simões (Coca-Cola)",
    agency: "Varanda Comunicação",
    year: "2014",
    location: "Manaus, AM",
    summary: "Planejamento e coordenação completa da Carreata de Natal Coca-Cola 2014 em Manaus. Gestão de elenco, operação, rotas e parceiros para 7 dias de ação em 7 circuitos diferentes, garantindo segurança, experiência de marca e alinhamento com todas as normas da Coca-Cola.",
    description: `A Carreata de Natal Coca-Cola é um dos projetos de brand experience mais tradicionais da marca. Em 2014, em Manaus, assumi a gestão de todo o projeto para o Grupo Simões (Coca-Cola) e Varanda Comunicação.

Meu papel foi estruturar e conduzir o planejamento de ponta a ponta: orçamento, contratação e coordenação de 15 personagens, 4 motoristas e 10 profissionais de apoio; definição de figurinos, caracterização dos caminhões e adequação do roteiro às normas rígidas de segurança e comportamento da marca.

Em menos de dois meses, organizei 7 dias de carreata por 7 rotas diferentes, alinhando logística com órgãos públicos de segurança e trânsito, além de shoppings, empresas privadas e espaços abertos que receberam o projeto.

O resultado foi uma campanha de grande visibilidade regional, com experiência imersiva de Natal, presença marcante da marca nas ruas e público engajado em cada parada — um marco no início da minha trajetória como publicitário e gestor de projetos de comunicação.`,
    category: "atendimento-publicitario",
    // Também aparece em Gestão de Projetos
    additionalCategories: ["gestao-de-projetos"],
    subcategories: ["Evento de Marca", "Ativação de Natal", "Caravana Iluminada"],
    tags: [
      "gestão de projetos",
      "atendimento publicitário",
      "comunicação estratégica",
      "planejamento de campanha",
      "eventos de marca",
      "experiência de marca",
      "Coca-Cola",
      "Natal",
      "Manaus"
    ],
    // Imagem de capa: selfie com caminhão iluminado ao fundo
    coverImage: carreataCocover,
    // Galeria: fotos da equipe, personagens, mascotes e peças oficiais
    gallery: [
      carreata1,  // Foto grupo completo com mascotes
      carreata2,  // Foto grupo frente ao caminhão Coca-Cola
      carreata3,  // Selfie equipe no caminhão
      carreata4,  // Selfie com Papai Noel no caminhão
      carreata5,  // Selfie com equipe bastidores
      carreata6,  // Foto com urso Coca-Cola
      carreata7,  // Arte oficial Caravana Iluminada
      carreata8   // Arte oficial com roteiro Manaus
    ]
  },

  // ----------------------------------------
  // COMUNICAÇÃO ESTRATÉGICA
  // ----------------------------------------
  {
    id: "ce-001",
    slug: "identidade-visual-startup-fintech",
    title: "Identidade Visual Startup Fintech",
    client: "FinPay",
    year: "2023",
    location: "São Paulo, SP",
    summary: "Desenvolvimento completo de identidade visual para fintech em fase de crescimento acelerado.",
    description: "Projeto de branding completo incluindo naming refinement, sistema de identidade visual, tom de voz e guidelines de aplicação. A nova identidade posicionou a marca como inovadora e confiável, contribuindo para rodada de investimento série A bem-sucedida. Entregáveis incluíram manual de marca, templates e sistema de design para produto digital.",
    category: "comunicacao-estrategica",
    subcategories: ["Identidade Visual"],
    tags: ["branding", "fintech", "startup", "identidade visual", "design system"],
    coverImage: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "ce-002",
    slug: "posicionamento-politico-campanha-2022",
    title: "Posicionamento Político - Campanha 2022",
    client: "Candidato Municipal",
    year: "2022",
    location: "Interior de São Paulo",
    summary: "Estratégia de comunicação e posicionamento para campanha eleitoral municipal.",
    description: "Desenvolvimento de plataforma de comunicação para candidatura a cargo executivo municipal. Trabalho incluiu pesquisa de percepção, definição de pilares de mensagem, identidade visual de campanha e estratégia de conteúdo para redes sociais. Campanha atingiu 78% de reconhecimento do eleitorado-alvo.",
    category: "comunicacao-estrategica",
    subcategories: ["Posicionamento Político"],
    tags: ["política", "eleições", "comunicação", "estratégia"],
    coverImage: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "posicionamento-dr-grangeiro-2022",
    slug: "posicionamento-lancamento-politico-dr-grangeiro-2022",
    title: "Posicionamento e lançamento político – Dr. Marcus Grangeiro (2022)",
    client: "Dr. Marcus Grangeiro – pré-candidato a deputado estadual",
    agency: "Digital Comunicação",
    year: "2022",
    location: "Manaus, AM",
    summary: "Posicionamento e lançamento político do cardiologista Dr. Marcus Grangeiro como pré-candidato a deputado estadual. Rebranding completo, narrativa 'Seu amigo do coração' e campanha integrada on e offline para humanizar o político e conectar cuidado em saúde com serviço público.",
    description: `Em 2022, nas eleições estaduais do Amazonas, o desafio foi tirar o cardiologista Dr. Marcus Grangeiro do consultório e apresentá-lo ao eleitor como 'o amigo do coração'.

A partir dessa ideia-força, conduzimos um rebranding completo: construção da persona política, definição do território de marca, slogan, paleta de cores, ícones de coração e linguagem visual jovem, leve e otimista.

Reescrevemos o discurso de campanha, alinhando fala, presença em eventos e posicionamento nas redes sociais para conectar duas frentes: a autoridade médica e o cuidado humano com as pessoas. Toda a comunicação — peças digitais, materiais de palco, conteúdo para Instagram e materiais impressos — foi pensada para gerar identificação emocional e facilitar o reconhecimento do número do candidato.

Mesmo sem a eleição, a campanha gerou alto engajamento digital, aumentou o conhecimento de nome na base eleitoral e criou um alicerce consistente para futuras candidaturas.`,
    category: "comunicacao-estrategica",
    subcategories: ["Posicionamento Político", "Lançamento", "Rebranding"],
    tags: [
      "política",
      "lançamento de campanha",
      "rebranding",
      "comunicação estratégica",
      "posicionamento",
      "branding político",
      "redes sociais",
      "narrativa de campanha",
      "identidade visual",
      "Grangeiro",
      "70.000",
      "amigo do coração",
      "cardiologista",
      "deputado estadual",
      "Manaus"
    ],
    // Imagem de capa: card com candidato "Serviço e Cuidado"
    coverImage: grangeiroCover,
    // Galeria: artes de campanha, cards para redes sociais, mockups de palco
    gallery: [
      grangeiro1,  // Arte "O Amazonas quer o amigo do coração"
      grangeiro2,  // Card amarelo "Paz no coração" com número 70.000
      grangeiro3,  // Card azul "Amigo" com memoji
      grangeiro4,  // Card amarelo "O amigo do seu coração" com memoji
      grangeiro5,  // Card azul "Visita Câmara dos Deputados"
      grangeiro6,  // Mockup bandeirinhas de campanha
      grangeiro7,  // Mockup grade de posts Instagram
      grangeiro8,  // Card vermelho "Firmeza - Mandato de amor pelo povo"
      grangeiro9   // Mockup palco de eventos com identidade visual
    ]
  },
  {
    id: "ce-003",
    slug: "lancamento-marca-cosmeticos",
    title: "Lançamento Marca de Cosméticos",
    client: "Beleza Natura",
    year: "2023",
    location: "São Paulo, SP",
    summary: "Estratégia de lançamento para nova linha de cosméticos sustentáveis no mercado brasileiro.",
    description: "Planejamento estratégico completo para entrada no mercado de uma nova marca de cosméticos com posicionamento sustentável. Definição de público-alvo, proposta de valor, arquitetura de mensagens e plano de go-to-market. O lançamento superou em 40% as metas de vendas do primeiro trimestre.",
    category: "comunicacao-estrategica",
    subcategories: ["Lançamento", "Produtos"],
    tags: ["cosméticos", "sustentabilidade", "lançamento", "marca"],
    coverImage: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },

  // ----------------------------------------
  // GESTÃO DE PROJETOS
  // ----------------------------------------
  {
    id: "gp-001",
    slug: "implementacao-crm-enterprise",
    title: "Implementação CRM Enterprise",
    client: "Grupo Industrial ABC",
    year: "2023",
    location: "São Paulo, SP",
    summary: "Gestão de projeto de implementação de CRM para grupo industrial com 5 unidades de negócio.",
    description: "Liderança de projeto de transformação digital envolvendo implementação de Salesforce para 500+ usuários em 5 unidades de negócio. Coordenação de equipe de 12 pessoas entre consultores, desenvolvedores e analistas de negócio. Metodologia ágil com sprints quinzenais e entregas incrementais ao longo de 8 meses.",
    category: "gestao-de-projetos",
    subcategories: ["Transformação Digital", "CRM"],
    tags: ["CRM", "Salesforce", "enterprise", "digital"],
    coverImage: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "gp-002",
    slug: "evento-corporativo-anual",
    title: "Evento Corporativo Anual",
    client: "Multinacional Varejo",
    agency: "Produtora Eventos",
    year: "2022",
    location: "São Paulo, SP",
    summary: "Gestão completa de convenção anual de vendas para 2.000 participantes.",
    description: "Coordenação de projeto de evento corporativo de grande escala, desde briefing inicial até execução e pós-evento. Gestão de orçamento de R$ 3M, coordenação de 15 fornecedores e timeline de 6 meses de planejamento. Evento híbrido com transmissão ao vivo para equipes remotas em 12 estados.",
    category: "gestao-de-projetos",
    subcategories: ["Eventos", "Convenção"],
    tags: ["evento", "convenção", "vendas", "híbrido"],
    coverImage: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },

  // ----------------------------------------
  // MARKETING DIGITAL
  // ----------------------------------------
  {
    id: "md-001",
    slug: "posicionamento-digital-ecommerce",
    title: "Posicionamento Digital E-commerce",
    client: "Loja Virtual Fashion",
    year: "2023",
    location: "Brasil",
    summary: "Estratégia de posicionamento digital completa para e-commerce de moda com foco em crescimento orgânico.",
    description: "Desenvolvimento de estratégia digital integrada incluindo SEO, conteúdo e presença em redes sociais. Criação de calendário editorial, otimização de mais de 500 páginas de produto e implementação de blog com estratégia de conteúdo. Resultado: crescimento de 180% em tráfego orgânico em 6 meses.",
    category: "marketing-digital",
    subcategories: ["Posicionamento Digital"],
    tags: ["SEO", "e-commerce", "moda", "conteúdo", "orgânico"],
    coverImage: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "md-002",
    slug: "gestao-redes-sociais-restaurante",
    title: "Gestão Redes Sociais - Restaurante",
    client: "Restaurante Gourmet SP",
    year: "2023",
    location: "São Paulo, SP",
    summary: "Gestão completa de redes sociais para restaurante fine dining com foco em Instagram e TikTok.",
    description: "Estratégia de conteúdo e gestão de comunidade para restaurante de alta gastronomia. Produção de conteúdo visual, gestão de influenciadores e campanhas de engajamento. Crescimento de 15K para 85K seguidores no Instagram em 12 meses, com taxa de engajamento média de 4.2%.",
    category: "marketing-digital",
    subcategories: ["Redes Sociais"],
    tags: ["Instagram", "TikTok", "gastronomia", "influenciadores", "conteúdo"],
    coverImage: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "md-003",
    slug: "campanha-trafego-pago-saas",
    title: "Campanha Tráfego Pago SaaS",
    client: "Software B2B",
    year: "2022",
    location: "Brasil",
    summary: "Estratégia de aquisição via tráfego pago para software B2B com foco em geração de leads qualificados.",
    description: "Planejamento e execução de campanhas de performance em Google Ads e LinkedIn Ads para software B2B. Estruturação de funil de conversão, criação de landing pages otimizadas e implementação de tracking avançado. Redução de 45% no CAC e aumento de 3x no volume de MQLs em 4 meses.",
    category: "marketing-digital",
    subcategories: ["Tráfego Pago"],
    tags: ["Google Ads", "LinkedIn", "B2B", "SaaS", "performance", "leads"],
    coverImage: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg"]
  }
];

// ==========================================
// FUNÇÕES UTILITÁRIAS
// ==========================================

/**
 * Filtra trabalhos por termo de busca
 * Busca em: title, client, agency, tags, subcategories
 */
export function filterWorks(works: Work[], searchTerm: string): Work[] {
  if (!searchTerm.trim()) return works;
  
  const normalizedTerm = searchTerm.toLowerCase().trim();
  
  return works.filter(work => {
    const searchableFields = [
      work.title,
      work.client || "",
      work.agency || "",
      ...work.tags,
      ...work.subcategories
    ].map(field => field.toLowerCase());
    
    return searchableFields.some(field => field.includes(normalizedTerm));
  });
}

/**
 * Retorna trabalhos de uma categoria específica
 * Inclui trabalhos que têm a categoria como principal ou adicional
 */
export function getWorksByCategory(category: WorkCategory): Work[] {
  return trabalhos.filter(work => 
    work.category === category || 
    (work.additionalCategories && work.additionalCategories.includes(category))
  );
}

/**
 * Retorna um trabalho específico pelo slug
 * Busca em categoria principal e categorias adicionais
 */
export function getWorkBySlug(categorySlug: WorkCategory, workSlug: string): Work | undefined {
  return trabalhos.find(
    work => work.slug === workSlug && 
    (work.category === categorySlug || 
     (work.additionalCategories && work.additionalCategories.includes(categorySlug)))
  );
}

/**
 * Retorna informações de uma categoria pelo slug
 */
export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
  return categories.find(cat => cat.slug === slug);
}
