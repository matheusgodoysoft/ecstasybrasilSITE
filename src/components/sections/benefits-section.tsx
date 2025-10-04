import Link from "next/link"

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "Domine Qualquer Partida",
    description: "Transforme sua experiência de jogo e alcance o topo dos rankings com vantagens estratégicas que fazem a diferença.",
    benefit: "Você nunca mais perderá uma partida importante",
    stats: "95% de taxa de vitória"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      </svg>
    ),
    title: "Jogue com Total Tranquilidade",
    description: "Nossa tecnologia invisível garante que você possa focar no que importa: vencer. Sem preocupações, sem riscos.",
    benefit: "Sua conta permanece 100% segura",
    stats: "Zero banimentos em 1 ano"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: "Performance Instantânea",
    description: "Ative em segundos e sinta a diferença imediatamente. Sem configurações complexas, sem perda de tempo.",
    benefit: "Setup completo em menos de 5 minutos",
    stats: "Ativo em 30 segundos"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20a3 3 0 01-3-3v-2a3 3 0 013-3m3-3a3 3 0 116 0m-3 0a3 3 0 01-3 3m0 0h6"/>
      </svg>
    ),
    title: "Comunidade Exclusiva",
    description: "Faça parte de uma elite de jogadores que compartilham estratégias, dicas e conquistas em nossa comunidade privada.",
    benefit: "Acesso a estratégias secretas e suporte VIP",
    stats: "300+ membros ativos"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: "Reconhecimento Garantido",
    description: "Destaque-se da multidão e ganhe o respeito que merece. Torne-se o jogador que todos admiram e temem.",
    benefit: "Você se torna uma lenda no seu servidor",
    stats: "Reputação premium"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "Economize Tempo Precioso",
    description: "Pare de desperdiçar horas em partidas frustrantes. Maximize seus resultados e aproveite cada minuto jogando.",
    benefit: "Mais vitórias em menos tempo",
    stats: "3x mais eficiente"
  }
]

export function BenefitsSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/5 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '2s'}} />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-600/20 border border-green-500/50 backdrop-blur-sm">
            <span className="text-sm font-medium text-green-300 uppercase tracking-widest">💎 Benefícios</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Como o Ecstasy
            </span>
            <br />
            <span className="text-white">
              Transforma Sua Vida
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Descubra como milhares de jogadores estão revolucionando sua experiência de jogo e 
            <span className="text-white font-semibold"> alcançando resultados extraordinários</span>
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative">
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-white/10 backdrop-blur-sm group-hover:from-white/8 group-hover:to-white/[0.03] transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card Content */}
              <div className="relative p-8 space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>

                {/* Title and Description */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-green-200 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Main Benefit */}
                <div className="p-4 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg border border-green-500/30">
                  <p className="text-white font-semibold text-sm">
                    ✨ {benefit.benefit}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Resultado</span>
                  <span className="text-sm font-bold text-green-400">{benefit.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <div className="p-8 bg-gradient-to-r from-green-600/10 via-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-2xl border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Pronto para <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Transformar</span> Seu Jogo?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Junte-se a mais de 300 jogadores que já descobriram o poder do Ecstasy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://ecstasy.zip/authenticate/login" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 text-lg min-h-[3rem] touch-manipulation">
                  🎮 Começar Agora
                </button>
              </Link>
              <Link href="https://discord.gg/ASPfsdkHGW" target="_blank" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 text-lg min-h-[3rem] touch-manipulation">
                  💬 Ver Depoimentos
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}