"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    id: "why-ecstasy",
    question: "Por que devo usar Ecstasy?",
    answer: "Ecstasy fornece desempenho e confiabilidade incomparável para jogos PVP. Nossa tecnologia de ponta garante que você tenha a vantagem competitiva que precisa enquanto mantém a completa segurança e discreção."
  },
  {
    id: "safety",
    question: "É seguro usar Ecstasy?",
    answer: "Sim, Ecstasy é projetado com segurança como nossa prioridade. Nossos sistemas de proteção avançados e execução sem rastreamento garantem que sua conta permaneça segura enquanto você usa nossos serviços."
  },
  {
    id: "os-support",
    question: "Quais sistemas operacionais você suporta?",
    answer: "Ecstasy suporta Windows 10 e Windows 11. Nossa versão UEFI funciona no nível do boot, fornecendo a máxima compatibilidade e desempenho em todos os sistemas suportados."
  },
  {
    id: "stream-proof",
    question: "O Ecstasy é stream-proof?",
    answer: "Sim, Ecstasy é projetado para ser completamente indetectável em streams e gravações. Nosso sistema de sobreposição garante que sua criação de conteúdo permaneça profissional e limpa."
  },
  {
    id: "trial",
    question: "Posso testar Ecstasy antes de comprar?",
    answer: "Oferecemos documentação completa e suporte para ajudar você a entender nossas funcionalidades. Junte-se à nossa comunidade no Discord para saber mais sobre as capacidades do Ecstasy dos usuários existentes."
  },
  {
    id: "payment",
    question: "Quais métodos de pagamento você aceita?",
    answer: "Aceitamos cartões de crédito majoritários, PayPal e vários pagamentos em criptomoedas. Todas as transações são processadas de forma segura através de nosso sistema de pagamento criptografado."
  },
  {
    id: "support",
    question: "O que acontece se eu encontrar problemas?",
    answer: "Nosso time de suporte está disponível 24/7 através do Discord. Oferecemos suporte ilimitado com todos os planos de assinatura e geralmente respondemos dentro de minutos durante as horas de pico."
  },
  {
    id: "features",
    question: "Posso sugerir novas funcionalidades?",
    answer: "Sim! Nós ativamente escutamos a opinião da nossa comunidade. Junte-se ao nosso servidor no Discord para enviar solicitações de funcionalidades e participar de discussões sobre atualizações e melhorias futuras."
  }
]

export function FaqSection() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">FAQ</h2>
          <h4 className="text-lg text-muted-foreground">
            Frequently Asked Questions
          </h4>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id}
              className="border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              <AccordionTrigger 
                value={faq.id}
                className="text-left hover:no-underline hover:text-primary transition-colors"
              >
                <h2 className="text-lg font-semibold">{faq.question}</h2>
              </AccordionTrigger>
              <AccordionContent value={faq.id}>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Additional Help */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-2">Surgiu alguma dúvida?</h3>
          <p className="text-muted-foreground mb-4">
            Junte-se à nossa comunidade no Discord para suporte instantâneo e atualizações.
          </p>
          <a
            href="https://discord.gg/ASPfsdkHGW"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span>Join Discord</span>
          </a>
        </div>
      </div>
    </section>
  )
}
