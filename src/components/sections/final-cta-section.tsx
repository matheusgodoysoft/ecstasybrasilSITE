import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FinalCtaSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-purple-900/20 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/30 to-blue-600/30 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-500/50 mb-8">
          <span className="text-xl">🚀</span>
          <span className="text-sm font-bold text-purple-200 uppercase tracking-widest">
            Transforme Seu Jogo Agora
          </span>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Pronto para <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Dominar</span> o PvP?
        </h2>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Junte-se a milhares de jogadores que já transformaram sua experiência de jogo com o Ecstasy. 
          <span className="text-white font-semibold"> Sua jornada para o próximo nível começa agora.</span>
        </p>

        {/* Benefits List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-green-400 text-xl">✅</div>
            <span className="text-white font-medium">Setup em 5 minutos</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-green-400 text-xl">✅</div>
            <span className="text-white font-medium">Suporte 24/7</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-green-400 text-xl">✅</div>
            <span className="text-white font-medium">Zero detecções</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link href="https://ecstasy.zip/authenticate/login">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 text-lg"
            >
              🎮 Acessar Dashboard
            </Button>
          </Link>
          
          <Link href="https://discord.gg/ASPfsdkHGW" target="_blank">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 text-lg"
            >
              💬 Comunidade Discord
            </Button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>300+ usuários ativos</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span>99.9% uptime</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span>Atualizações constantes</span>
          </div>
        </div>

        {/* Urgency Element */}
        <div className="mt-12 p-6 bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm border border-red-500/30 rounded-xl max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <span className="text-red-400 text-lg">⚠️</span>
            <span className="text-red-300 font-semibold uppercase tracking-wider text-sm">
              Oferta Limitada
            </span>
          </div>
          <p className="text-white font-medium">
            Apenas <span className="text-red-300 font-bold">100 vendas por mês</span> para manter a exclusividade e segurança.
          </p>
        </div>
      </div>
    </section>
  )
}