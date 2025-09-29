export function PartnersSection() {
  const partners = [
    { name: "Discord", logo: "🎮" },
    { name: "Streamers", logo: "📺" },
    { name: "Pro Players", logo: "🏆" },
    { name: "Gaming Communities", logo: "👥" },
    { name: "Content Creators", logo: "🎬" },
    { name: "Esports Teams", logo: "⚡" }
  ]

  return (
    <section className="py-16 px-4 bg-black/50 backdrop-blur-sm border-y border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">
            Confiado por milhares de jogadores
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Usado por <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Pro Players</span> e <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Streamers</span>
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="text-3xl">{partner.logo}</div>
              <span className="text-sm text-muted-foreground font-medium">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              300+
            </div>
            <p className="text-muted-foreground">Usuários Ativos</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              99.9%
            </div>
            <p className="text-muted-foreground">Uptime</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              24/7
            </div>
            <p className="text-muted-foreground">Suporte</p>
          </div>
        </div>
      </div>
    </section>
  )
}