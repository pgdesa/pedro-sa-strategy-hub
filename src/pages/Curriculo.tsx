import { memo } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Linkedin, Instagram, Briefcase, GraduationCap, Award, Wrench } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { getCanonicalUrl } from "@/utils/seo";
import { Link } from "react-router-dom";

const experiencias = [
  {
    empresa: "Digital Comunicação",
    cargo: "Atendimento ao cliente",
    local: "Manaus-AM / Palmas-TO, Brasil",
    periodo: "Fev 2021 - Jan 2026",
    atividades: [
      "Prospecção e desenvolvimento comercial, com abordagem consultiva.",
      "Negociação e condução de propostas, alinhando escopo, prazos e expectativas.",
      "Interface com times internos para garantir qualidade de entrega e satisfação do cliente.",
      "Gestão de demandas e relacionamento com clientes, organizando prioridades e prazos.",
      "Tradução de objetivos em briefing acionável, acompanhando execução ponta a ponta.",
      "Alinhamento de comunicação entre stakeholders para garantir consistência e previsibilidade."
    ]
  },
  {
    empresa: "Consultoria própria",
    cargo: "Consultor em Marketing e Publicidade",
    local: "Manaus-AM, Brasil",
    periodo: "Dez 2016 - Dez 2020",
    atividades: [
      "Consultoria em marketing e publicidade, com foco em estratégia, posicionamento e execução.",
      "Social media: definição de linha editorial, conteúdo e rotinas de publicação.",
      "Planejamento e operação de tráfego pago (Meta Ads e Google Ads) orientado a objetivos."
    ]
  },
  {
    empresa: "Vanguarda Comunicação",
    cargo: "Atendimento ao cliente",
    local: "Manaus-AM, Brasil",
    periodo: "Set 2018 - Set 2019",
    atividades: [
      "Atendimento e gestão de contas: alinhamento de briefing, escopo e calendário de entregas.",
      "Organização de rotinas de aprovação e acompanhamento de produção/veiculação."
    ]
  },
  {
    empresa: "Invent Live Marketing",
    cargo: "Produtor / Atendimento",
    local: "Manaus-AM, Brasil",
    periodo: "Jan 2016 - Dez 2017",
    atividades: [
      "Relacionamento e negociações com fornecedores e clientes para viabilizar entregas.",
      "Coordenação operacional de demandas, garantindo prazos e alinhamento com briefing."
    ]
  },
  {
    empresa: "Agência Varanda",
    cargo: "Atendimento ao cliente",
    local: "Manaus-AM, Brasil",
    periodo: "Ago 2014 - Nov 2015",
    atividades: [
      "Atendimento e suporte à gestão de contas, com foco em organização, prazos e alinhamento de expectativas."
    ]
  }
];

const competencias = [
  "Estratégia de comunicação, posicionamento e mensagem",
  "Planejamento e execução de marketing (digital e offline)",
  "Relacionamento com cliente, atendimento, briefing e gestão de entregas",
  "Vendas consultivas, negociação e desenvolvimento de negócios",
  "Tráfego pago (Meta Ads e Google Ads) e otimização orientada a objetivos",
  "Automação e produtividade (n8n) e criação com IA (ChatGPT, Lovable, Leonardo.ai)"
];

const ferramentas = [
  "Tráfego pago: Meta Ads, Google Ads",
  "IA: ChatGPT, Lovable, Leonardo.ai",
  "Automação: n8n"
];

const Curriculo = memo(() => {
  useScrollToTop();

  return (
    <>
      <Helmet>
        <title>Currículo – Pedro Gabriel Sá | Estrategista em Comunicação e Marketing</title>
        <meta name="description" content="Currículo profissional de Pedro Gabriel Sá. Publicitário com mais de 10 anos de experiência em comunicação, marketing, estratégia e atendimento ao cliente." />
        <link rel="canonical" href={getCanonicalUrl("/curriculo")} />
        <meta property="og:title" content="Currículo – Pedro Gabriel Sá" />
        <meta property="og:description" content="Publicitário com mais de 10 anos de experiência em comunicação, marketing, estratégia e atendimento ao cliente." />
        <meta property="og:url" content={getCanonicalUrl("/curriculo")} />
        <meta property="og:type" content="profile" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-10 text-center">
              <h1 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                Pedro Gabriel Alencar de Sá
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Publicitário | Estrategista em Comunicação e Marketing
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-6">
                <a href="mailto:p.gabrieldesa@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>p.gabrieldesa@gmail.com</span>
                </a>
                <a href="https://wa.me/5592981863937" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>(92) 98186-3937</span>
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>Palmas - TO</span>
                </span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <a href="https://www.linkedin.com/in/pedrogabrieldesa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                  <span>/pedrogabrieldesa</span>
                </a>
                <a href="https://www.instagram.com/pgdesa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-4 h-4" />
                  <span>@pgdesa</span>
                </a>
              </div>

              {/* Download Button */}
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all font-poppins font-semibold shadow-gold"
                asChild
              >
                <a href="/curriculo-pedro-gabriel-sa.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Baixar currículo (PDF)
                </a>
              </Button>
            </header>

            {/* Sobre Mim */}
            <section className="mb-10">
              <h2 className="font-poppins text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Sobre Mim
              </h2>
              <div className="bg-card/30 border border-border/30 rounded-xl p-6">
                <p className="text-foreground-secondary leading-relaxed">
                  Publicitário com mais de 10 anos de experiência, atuando na interseção entre posicionamento, planejamento, execução e relacionamento com clientes. Histórico em agência, consultoria e área comercial, com foco em transformar objetivos em estratégias claras e entregas consistentes (digital e offline).
                </p>
              </div>
            </section>

            {/* Competências-chave */}
            <section className="mb-10">
              <h2 className="font-poppins text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Competências-chave
              </h2>
              <div className="bg-card/30 border border-border/30 rounded-xl p-6">
                <ul className="space-y-2">
                  {competencias.map((comp, i) => (
                    <li key={i} className="text-foreground-secondary flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Experiência */}
            <section className="mb-10">
              <h2 className="font-poppins text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Experiência
              </h2>
              <div className="space-y-4">
                {experiencias.map((exp, i) => (
                  <div key={i} className="bg-card/30 border border-border/30 rounded-xl p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-3">
                      <div>
                        <h3 className="font-poppins font-semibold text-foreground">{exp.empresa}</h3>
                        <p className="text-primary text-sm">{exp.cargo}</p>
                      </div>
                      <div className="text-sm text-muted-foreground text-left sm:text-right">
                        <p>{exp.periodo}</p>
                        <p>{exp.local}</p>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.atividades.map((ativ, j) => (
                        <li key={j} className="text-foreground-secondary text-sm flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{ativ}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Graduação */}
            <section className="mb-10">
              <h2 className="font-poppins text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Graduação
              </h2>
              <div className="bg-card/30 border border-border/30 rounded-xl p-6">
                <h3 className="font-poppins font-semibold text-foreground">Comunicação Social - Publicidade e Propaganda</h3>
                <p className="text-muted-foreground text-sm">UniNorte, Martha Falcão, Estácio</p>
              </div>
            </section>

            {/* Ferramentas */}
            <section className="mb-10">
              <h2 className="font-poppins text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-primary" />
                Ferramentas
              </h2>
              <div className="bg-card/30 border border-border/30 rounded-xl p-6">
                <ul className="space-y-2">
                  {ferramentas.map((tool, i) => (
                    <li key={i} className="text-foreground-secondary flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center pt-6 border-t border-border/30">
              <p className="text-muted-foreground mb-4">Interessado em saber mais?</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" asChild>
                  <Link to="/contato">Fale Comigo</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/trabalhos">Ver Portfólio</Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
});

Curriculo.displayName = "Curriculo";

export default Curriculo;
