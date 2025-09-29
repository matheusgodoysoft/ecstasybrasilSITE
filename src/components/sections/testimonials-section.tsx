'use client'

import { useState, useEffect } from "react"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "XXXXX",
      role: "Streamer & Content Creator",
      content: "Ecstasy mudou completamente minha experiência no Fortnite. A performance é incomparável e a interface é super intuitiva. Recomendo 100%!",
      rating: 5,
      avatar: "🎮"
    },
    {
      id: 2,
      name: "XXXXX",
      role: "Pro Player",
      content: "Uso Ecstasy há meses e posso dizer que é o melhor do mercado. Zero detecções, performance perfeita e suporte incrível.",
      rating: 5,
      avatar: "🏆"
    },
    {
      id: 3,
      name: "XXXXX",
      role: "Twitch Streamer",
      content: "A qualidade do Ecstasy é impressionante. já passei por diversos servidores e competições e nada de detecções",
      rating: 5,
      avatar: "📺"
    },
    {
      id: 4,
      name: "XXXXX",
      role: "Esports Player",
      content: "Testei vários ch3ats, mas nenhum chega perto do Ecstasy. A tecnologia por trás é realmente de outro nível.",
      rating: 5,
      avatar: "⚡"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-green-500/50 mb-6">
            <span className="text-lg">💬</span>
            <span className="text-sm font-semibold text-green-300 uppercase tracking-wider">
              Depoimentos
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Amado</span> por jogadores <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">no mundo todo</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos usuários estão dizendo sobre sua experiência com o Ecstasy.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative mb-12">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
                &ldquo;{testimonials[currentTestimonial].content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="text-4xl">{testimonials[currentTestimonial].avatar}</div>
                <div className="text-left">
                  <div className="font-semibold text-white text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-purple-500 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl">
            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
            <p className="text-muted-foreground text-sm">Avaliação Média</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-green-500/30 rounded-xl">
            <div className="text-3xl font-bold text-white mb-2">300++</div>
            <p className="text-muted-foreground text-sm">Usuários Satisfeitos</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl">
            <div className="text-3xl font-bold text-white mb-2">99%</div>
            <p className="text-muted-foreground text-sm">Taxa de Satisfação</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-orange-500/30 rounded-xl">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <p className="text-muted-foreground text-sm">Suporte Disponível</p>
          </div>
        </div>
      </div>
    </section>
  )
}