import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Faça o Download",
      description: "Baixe o Ecstasy de forma segura através do nosso dashboard exclusivo.",
      icon: "⬇️",
      color: "from-blue-500 to-purple-500"
    },
    {
      step: "02", 
      title: "Configure Facilmente",
      description: "Nossa interface intuitiva permite configuração em poucos cliques.",
      icon: "⚙️",
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "Domine o PvP",
      description: "Experimente performance incomparável e leve seu jogo ao próximo nível.",
      icon: "🏆",
      color: "from-pink-500 to-red-500"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-500/50 mb-6">
            <span className="text-lg">✨</span>
            <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
              Processo Simples
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Como <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Funciona?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Começar com o Ecstasy é mais fácil do que você imagina. Siga estes 3 passos simples e transforme sua experiência de jogo.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="relative group"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent z-0" />
              )}
              
              {/* Step Card */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Step Number */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-lg mb-6`}>
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para começar?
            </h3>
            <p className="text-muted-foreground mb-6">
              Junte-se a milhares de jogadores que já transformaram sua experiência PvP.
            </p>
            <Link href="https://ecstasy.zip/authenticate/login">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Acessar Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}