/**
 * Utilitário para Click-to-Chat do WhatsApp
 * Padrão oficial: https://wa.me/<numero>?text=<mensagem_urlencoded>
 */

// Número do WhatsApp para recebimento de leads (formato internacional, sem + e sem espaços)
const WHATSAPP_PHONE = "5592981863937";

interface LeadFormData {
  nome: string;
  telefone: string;
  email: string;
  projeto?: string;
}

/**
 * Constrói a URL de Click-to-Chat do WhatsApp com mensagem pré-preenchida
 * @param formData - Dados do formulário de lead
 * @returns URL completa para abrir WhatsApp
 */
export function buildWhatsAppLeadLink(formData: LeadFormData): string {
  // Monta a mensagem com título obrigatório na primeira linha
  const mensagem = [
    "Novo lead do Site",
    "",
    `Nome: ${formData.nome.trim()}`,
    `Telefone/WhatsApp: ${formData.telefone.trim()}`,
    `E-mail: ${formData.email.trim()}`,
    `Descrição: ${formData.projeto?.trim() || "(não informado)"}`,
  ].join("\n");

  // URL encode preserva caracteres PT-BR e quebras de linha
  const text = encodeURIComponent(mensagem);

  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
}

/**
 * Abre o WhatsApp com a URL fornecida
 * Tenta window.open primeiro, com fallback para location.href caso bloqueado
 * @param url - URL do WhatsApp (wa.me)
 * @returns true se abriu com sucesso
 */
export function openWhatsApp(url: string): boolean {
  // Tenta abrir em nova aba com segurança
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  
  // Se popup foi bloqueado, usa fallback
  if (!newWindow) {
    window.location.href = url;
  }
  
  return true;
}
