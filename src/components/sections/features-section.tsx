import Link from "next/link"

const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1v-8zm2 2v4h4v-4H5zm10 0a1 1 0 100 2 1 1 0 000-2zm-2 1a1 1 0 112 0 1 1 0 01-2 0zm4-1a1 1 0 100 2 1 1 0 000-2zm-2 1a1 1 0 112 0 1 1 0 01-2 0z"/>
      </svg>
    ),
    title: "Web UI",
    description: "Controle Ecstasy do seu pc ou celular!",
    images: Array.from({ length: 25 }, (_, i) => `/feature-icons/icon-${i + 1}.png`)
  },
  {
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.12.23-2.18.65-3.15L12 15.5l7.35-6.65c.42.97.65 2.03.65 3.15 0 4.41-3.59 8-8 8z"/>
        <circle cx="12" cy="8" r="2" opacity="0.5"/>
      </svg>
    ),
    title: "Zero Traços",
    description: "Projetado para não deixar rastros.",
    images: Array.from({ length: 12 }, (_, i) => `/trace-icons/trace-${i + 1}.png`)
  },
  {
    icon: (
      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v-.07zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        <path d="M12 6a1 1 0 100-2 1 1 0 000 2z" opacity="0.7"/>
      </svg>
    ),
    title: "Carrega no Boot Time",
    description: "Executa antes do Windows.",
    images: []
  },
  {
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        <path d="M12 6v11.77l-2.18 1.15.41-2.42L7 13.27l2.45-.36L12 6z" opacity="0.6"/>
      </svg>
    ),
    title: "Sem Executável Necessário",
    description: "Não é necessário baixar um executável.",
    images: []
  }
]

export function FeaturesSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '2s'}} />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20 space-y-4 sm:space-y-6 px-4 sm:px-0">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-xs font-medium text-white/80 uppercase tracking-widest">✨ Introducing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-300 bg-clip-text text-transparent">
              Ecstasy Infinity
            </span>
          </h2>
          <div className="max-w-2xl mx-auto space-y-2">
            <p className="text-lg sm:text-xl text-gray-300">
              Nossa Revolução <span className="font-bold text-white">Boot-Time (UEFI)</span> version.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed px-4 sm:px-0">
              Tecnologia de ponta que redefine os padrões de performance e segurança no ecossistema PvP
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Card Background with hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-white/10 backdrop-blur-sm group-hover:from-white/8 group-hover:to-white/[0.03] transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card Content */}
              <div className="relative p-8 space-y-6">
                {/* Icon and Title */}
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Learn More Link */}
                <div className="pt-2">
                  <Link
                    href="https://discord.gg/ASPfsdkHGW"
                    className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors group/link"
                  >
                    <span className="border-b border-gray-400/50 group-hover/link:border-white/50 transition-colors">Saiba mais</span>
                    <svg className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </div>
          ))}
        </div>

        {/* Infinity Demo Video */}
        <div className="relative">
          <div className="relative max-w-6xl mx-auto">
            {/* Video container with enhanced styling */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none z-10" />

              <video
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/infinity_feat_1.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Ambient glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
