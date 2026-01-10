import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Instagram, Facebook, MessageCircle, FileText, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import pedroContato from "@/assets/pedro-contato.png";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { getCanonicalUrl } from "@/utils/seo";

const contactItems = [
  {
    icon: Mail,
    title: "E-mail",
    subtitle: "p.gabrieldesa@gmail.com",
    href: "mailto:p.gabrieldesa@gmail.com",
    external: false,
    ariaLabel: "Enviar e-mail para Pedro Gabriel de Sá",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    subtitle: "Pedro Gabriel de Sá",
    href: "https://www.linkedin.com/in/pedrogabrieldesa",
    external: true,
    ariaLabel: "Abrir perfil de Pedro Gabriel de Sá no LinkedIn",
  },
  {
    icon: Instagram,
    title: "Instagram",
    subtitle: "@pgdesa",
    href: "https://www.instagram.com/pgdesa",
    external: true,
    ariaLabel: "Abrir perfil de Pedro Gabriel de Sá no Instagram",
  },
  {
    icon: Facebook,
    title: "Facebook",
    subtitle: "Pg de Sá",
    href: "https://www.facebook.com/pgdesa",
    external: true,
    ariaLabel: "Abrir perfil de Pedro Gabriel de Sá no Facebook",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    subtitle: "(92) 98186-3937",
    href: "https://wa.me/5592981863937",
    external: true,
    ariaLabel: "Abrir WhatsApp de Pedro Gabriel de Sá",
  },
];

const Contato = () => {
  useScrollToTop();

  return (
    <>
      <Helmet>
        <title>Fale Comigo – Pedro Sá | Entre em Contato</title>
        <meta name="description" content="Entre em contato com Pedro Sá para falar sobre seu projeto de comunicação, marketing ou estratégia de negócios." />
        <link rel="canonical" href={getCanonicalUrl("/contato")} />
        <meta property="og:title" content="Fale Comigo – Pedro Sá" />
        <meta property="og:description" content="Entre em contato para falar sobre seu projeto de comunicação, marketing ou estratégia." />
        <meta property="og:url" content={getCanonicalUrl("/contato")} />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
      
      <main className="min-h-screen lg:h-screen pt-28 pb-8 lg:pt-24 lg:pb-0 px-6 lg:px-12 lg:overflow-hidden">
        <div className="container mx-auto h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center lg:h-[calc(100vh-6rem)]">
            
            {/* Coluna Esquerda - Foto */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={pedroContato}
                  alt="Pedro Gabriel de Sá - Estrategista em Comunicação"
                  className="w-full max-w-2xl lg:max-w-3xl h-auto max-h-[80vh] object-contain"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 -z-10 bg-primary/10 blur-3xl rounded-full scale-75 will-change-transform" aria-hidden="true" />
              </div>
            </div>

            {/* Coluna Direita - Contatos */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="mb-5">
                <h1 className="font-poppins text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-2">
                  Vamos falar sobre o seu projeto?
                </h1>
                <p className="font-inter text-muted-foreground text-sm lg:text-base">
                  Escolha o canal que for melhor para você e me envie uma mensagem.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 mb-5">
                {contactItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    aria-label={item.ariaLabel}
                    className="group flex items-center gap-2.5 p-2 lg:p-2.5 rounded-md border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/60 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-4 h-4 text-primary" aria-hidden="true" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-poppins font-semibold text-foreground text-xs group-hover:text-primary transition-colors">{item.title}</span>
                      <span className="font-inter text-muted-foreground text-[11px] group-hover:text-foreground/80 transition-colors">{item.subtitle}</span>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" size="lg" className="flex-1 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all font-poppins font-semibold" asChild>
                  <Link to="/curriculo"><FileText className="w-4 h-4 mr-2" />Currículo</Link>
                </Button>
                <Button size="lg" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all font-poppins font-semibold shadow-gold" asChild>
                  <Link to="/agendar-diagnostico"><Calendar className="w-4 h-4 mr-2" />Agendar Diagnóstico</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
    </>
  );
};

export default Contato;
