'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-start justify-center px-4 pt-20 pb-20 bg-black">
      {/* Background Effects - Floating white orbs */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        {/* Subtle white orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/5 blur-xl animate-pulse"
          style={{
            animation: 'float 8s ease-in-out infinite',
            animationDelay: '0s'
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-white/3 blur-xl animate-pulse"
          style={{
            animation: 'float 10s ease-in-out infinite reverse',
            animationDelay: '2s'
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-20 h-20 rounded-full bg-white/4 blur-xl animate-pulse"
          style={{
            animation: 'float 12s ease-in-out infinite',
            animationDelay: '4s'
          }}
        />
        <div
          className="absolute top-2/3 right-1/3 w-16 h-16 rounded-full bg-white/2 blur-xl animate-pulse"
          style={{
            animation: 'float 9s ease-in-out infinite reverse',
            animationDelay: '1s'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border">
          <span className="text-2xl">🌌</span>
          <span className="text-sm font-medium">Introdução ao Ecstasy Fortnite</span>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            Desbloqueie o Próximo Nível
            <br />
            Performance com Ecstasy
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Ecstasy define um novo padrão para a experiência PVP devido a sua tecnologia de ponta e experiência de usuário incomparável.
                
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <Link 
            href="https://discord.gg/ASPfsdkHGW"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Adquira Ecstasy</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </Link>
        </div>

        {/* Video Section */}
        <div className="pt-8 -mx-4">
          <div className="max-w-none px-8 relative">
            {/* Video container with enhanced styling */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none z-10" />

              <video
                className="w-full h-auto"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/ecstasyvideo.webm" type="video/webm" />
                Seu navegador não suporta o elemento de vídeo.
              </video>

              {/* Bottom fade effect - very subtle */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/95 via-black/60 via-black/30 via-black/15 via-black/5 to-transparent pointer-events-none z-20"></div>
            </div>

            {/* Ambient glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>


      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
