import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import pedroAgendar from '@/assets/pedro-agendar.jpg';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { GA_EVENT_DIAGNOSTICO } from '@/config/env';
import { getCanonicalUrl } from '@/utils/seo';
import { buildWhatsAppLeadLink, openWhatsApp } from '@/utils/whatsapp';

const AgendarDiagnostico = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    projeto: ''
  });

  // Centralizado: scroll ao topo
  useScrollToTop();

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 11) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 11)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'telefone') {
      setFormData(prev => ({ ...prev, [name]: formatPhone(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Sanitize input to remove potentially dangerous characters
  const sanitize = (str: string) => str.replace(/[<>"']/g, '').trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Sanitize inputs
    const sanitizedData = {
      nome: sanitize(formData.nome),
      telefone: sanitize(formData.telefone),
      email: sanitize(formData.email),
      projeto: sanitize(formData.projeto)
    };
    
    // Validação de campos obrigatórios
    if (!sanitizedData.nome || !sanitizedData.telefone || !sanitizedData.email) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Input length limits
    if (sanitizedData.nome.length > 100 || sanitizedData.email.length > 100 || sanitizedData.projeto.length > 1000) {
      toast({
        title: "Limite excedido",
        description: "Por favor, reduza o tamanho do texto.",
        variant: "destructive"
      });
      return;
    }

    if (!validateEmail(sanitizedData.email)) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Constrói URL do WhatsApp com mensagem pré-preenchida (usando dados sanitizados)
      const waUrl = buildWhatsAppLeadLink(sanitizedData);
      
      // Abre WhatsApp (app ou web)
      openWhatsApp(waUrl);

      // Analytics event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', GA_EVENT_DIAGNOSTICO, {
          event_category: 'form',
          event_label: 'agendar_diagnostico_whatsapp'
        });
      }

      // Marca como enviado e mostra feedback
      setIsSubmitted(true);
      toast({
        title: "WhatsApp aberto!",
        description: "Complete o envio da mensagem no WhatsApp.",
      });
    } catch {
      // Log only in development
      if (import.meta.env.DEV) {
        // eslint-disable-next-line no-console
        console.error('Erro ao abrir WhatsApp');
      }
      toast({
        title: "Erro ao abrir WhatsApp",
        description: "Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Agendar Diagnóstico Estratégico | Pedro Sá – Comunicação, Marketing e Negócios</title>
        <meta 
          name="description" 
          content="Agende um diagnóstico estratégico com Pedro Sá para analisar a comunicação e o marketing do seu negócio ou projeto público. Preencha o formulário e receba retorno em até 24h úteis." 
        />
        <link rel="canonical" href={getCanonicalUrl("/agendar-diagnostico")} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        
        <main 
          id="agendar-diagnostico" 
          className="min-h-screen pt-28 lg:pt-32 pb-12 lg:pb-0 lg:h-screen lg:overflow-hidden"
        >
          <div className="container mx-auto px-4 h-full">
            <div className="max-w-[1200px] mx-auto h-full flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
              
              {/* Coluna Esquerda - Foto + Texto */}
              <div className="lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* Título mobile - aparece primeiro no mobile */}
                <h1 className="lg:hidden text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-6 leading-tight">
                  Agende um diagnóstico estratégico para o seu projeto
                </h1>

                {/* Foto */}
                <div className="relative mb-6 lg:mb-8">
                  <img
                    src={pedroAgendar}
                    alt="Pedro Gabriel de Sá - Estrategista em Comunicação"
                    className="w-full max-w-xs lg:max-w-sm h-auto max-h-[40vh] lg:max-h-[50vh] object-contain"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 -z-10 bg-primary/10 blur-3xl rounded-full scale-75 will-change-transform" aria-hidden="true" />
                </div>

                {/* Título desktop */}
                <h1 className="hidden lg:block text-2xl xl:text-3xl font-poppins font-bold text-foreground mb-4 leading-tight">
                  Agende um diagnóstico estratégico para o seu projeto
                </h1>

                {/* Subtítulo */}
                <p className="text-sm lg:text-base text-foreground/80 font-inter leading-relaxed mb-4">
                  Preencha seus dados, conte um pouco sobre o seu cenário e eu – junto com a equipe – faço uma pré-análise para entender seus desafios de comunicação, marketing e negócios. Em seguida, entramos em contato para propor os próximos passos.
                </p>

                {/* Texto de confiança */}
                <p className="text-xs lg:text-sm text-foreground/60 font-inter italic">
                  Atendimento personalizado para negócios em desenvolvimento ou em fase de reposicionamento, no setor público ou privado.
                </p>
              </div>

              {/* Coluna Direita - Formulário */}
              <div className="lg:w-[55%]">
                <div className="bg-card/40 border border-border/30 rounded-xl p-5 lg:p-6 shadow-lg">
                  {!isSubmitted ? (
                    <>
                      <h2 className="text-lg lg:text-xl font-poppins font-semibold text-foreground mb-6">
                        Deixe seus contatos e fale sobre o seu projeto
                      </h2>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Nome */}
                        <div className="space-y-2">
                          <Label htmlFor="nome" className="text-sm font-medium text-foreground/90">
                            Nome completo <span className="text-primary">*</span>
                          </Label>
                          <Input
                            id="nome"
                            name="nome"
                            type="text"
                            placeholder="Como devemos te chamar?"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                            className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all"
                          />
                        </div>

                        {/* Telefone */}
                        <div className="space-y-2">
                          <Label htmlFor="telefone" className="text-sm font-medium text-foreground/90">
                            Telefone / WhatsApp <span className="text-primary">*</span>
                          </Label>
                          <Input
                            id="telefone"
                            name="telefone"
                            type="tel"
                            placeholder="(DDD) + número para contato"
                            value={formData.telefone}
                            onChange={handleChange}
                            required
                            maxLength={16}
                            className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all"
                          />
                        </div>

                        {/* E-mail */}
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium text-foreground/90">
                            E-mail <span className="text-primary">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Seu melhor e-mail de retorno"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all"
                          />
                        </div>

                        {/* Projeto */}
                        <div className="space-y-2">
                          <Label htmlFor="projeto" className="text-sm font-medium text-foreground/90">
                            Fale rapidamente sobre o seu projeto ou necessidade
                          </Label>
                          <Textarea
                            id="projeto"
                            name="projeto"
                            placeholder="Ex.: reposicionamento de marca, lançamento de campanha, consultoria em comunicação pública…"
                            value={formData.projeto}
                            onChange={handleChange}
                            rows={4}
                            className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all resize-none"
                          />
                        </div>

                        {/* Botão */}
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] transition-all font-poppins font-semibold shadow-gold py-6"
                        >
                          {isSubmitting ? 'Enviando...' : 'Enviar diagnóstico'}
                        </Button>

                        {/* Texto de apoio */}
                        <div className="text-center space-y-1 pt-2">
                          <p className="text-xs text-foreground/60 font-inter">
                            Retorno em até 24h úteis.
                          </p>
                          <p className="text-xs text-foreground/50 font-inter">
                            Suas informações serão usadas apenas para esse contato.
                          </p>
                        </div>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-poppins font-semibold text-foreground mb-4">
                        Obrigado!
                      </h3>
                      <p className="text-foreground/80 font-inter leading-relaxed">
                        Sua solicitação de diagnóstico foi enviada. Em breve entraremos em contato pelo WhatsApp ou e-mail informados.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AgendarDiagnostico;
