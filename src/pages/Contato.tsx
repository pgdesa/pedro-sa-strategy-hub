import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Mail, Linkedin, Instagram, Facebook, MessageCircle } from "lucide-react";
import pedroContato from "@/assets/pedro-contato.png";

const contactItems = [
  {
    icon: Mail,
    title: "E-mail",
    subtitle: "contato@pedro.sa.com",
    href: "mailto:contato@pedro.sa.com",
    external: false,
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    subtitle: "Pedro Gabriel de Sá",
    href: "https://www.linkedin.com/in/pedrogabrieldesa",
    external: true,
  },
  {
    icon: Instagram,
    title: "Instagram",
    subtitle: "@pgdesa",
    href: "https://www.instagram.com/pgdesa",
    external: true,
  },
  {
    icon: Facebook,
    title: "Facebook",
    subtitle: "Pg de Sá",
    href: "https://www.facebook.com/pgdesa",
    external: true,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    subtitle: "(92) 98186-3937",
    href: "https://wa.me/5592981863937",
    external: true,
  },
];

const Contato = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-16 px-6 lg:px-12">
        <div className="container mx-auto h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[calc(100vh-10rem)]">
            
            {/* Coluna Esquerda - Foto */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={pedroContato}
                  alt="Pedro Gabriel de Sá - Estrategista em Comunicação"
                  className="w-full max-w-sm lg:max-w-md h-auto object-contain rounded-lg shadow-2xl"
                />
                {/* Subtle glow effect behind image */}
                <div className="absolute inset-0 -z-10 bg-primary/10 blur-3xl rounded-full scale-75" />
              </div>
            </div>

            {/* Coluna Direita - Contatos */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Header */}
              <div className="mb-8 lg:mb-12">
                <h1 className="font-poppins text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
                  Vamos falar sobre o seu projeto?
                </h1>
                <p className="font-inter text-muted-foreground text-base lg:text-lg">
                  Escolha o canal que for melhor para você e me envie uma mensagem.
                </p>
              </div>

              {/* Contact List */}
              <div className="flex flex-col gap-4">
                {contactItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 p-4 lg:p-5 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/60 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon 
                        className="w-5 h-5 lg:w-6 lg:h-6 text-primary" 
                        aria-hidden="true"
                      />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col">
                      <span className="font-poppins font-semibold text-foreground text-base lg:text-lg group-hover:text-primary transition-colors">
                        {item.title}
                      </span>
                      <span className="font-inter text-muted-foreground text-sm lg:text-base group-hover:text-foreground/80 transition-colors">
                        {item.subtitle}
                      </span>
                    </div>

                    {/* Arrow indicator */}
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg 
                        className="w-5 h-5 text-primary" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contato;
