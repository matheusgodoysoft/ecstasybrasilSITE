"use client"

import { useState, useEffect } from "react"

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isCountdownFinished, setIsCountdownFinished] = useState(false)

  useEffect(() => {
    // Data de lançamento: 06 de outubro de 2025 às 20:00 (horário de Brasília)
  const launchDate = new Date('2025-10-06T20:00:00-03:00')
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = launchDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        if (!isCountdownFinished) {
          setIsCountdownFinished(true)
        }
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [isCountdownFinished])

  return (
    <section className="py-12 px-4 relative overflow-hidden">
      {/* Gaming Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative">
        {/* Header */}
        <div className="mb-16 space-y-6">
          <div className="inline-flex items-center space-x-3 bg-purple-600/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-purple-500/50">
            <span className="text-xl">⚡</span>
            <span className="text-sm font-bold text-purple-300 uppercase tracking-widest">
              {isCountdownFinished ? "VENDAS LIBERADAS" : "LANÇAMENTO IMINENTE"}
            </span>
            <div className={`w-2 h-2 rounded-full animate-pulse ${
              isCountdownFinished ? 'bg-green-500' : 'bg-purple-500'
            }`}></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              isCountdownFinished 
                ? 'from-green-400 to-blue-400 animate-pulse' 
                : 'from-purple-400 to-blue-400'
            }`}>
              {isCountdownFinished ? "DISPONÍVEL AGORA!" : "DIA DO LANÇAMENTO"}
            </span>
          </h2>
          
          <div className="space-y-3">
            <div className="bg-black/40 rounded-xl px-6 py-4 border border-purple-500/30 inline-block">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Data</div>
                  <div className="text-2xl font-bold text-white">06 OUT</div>
                </div>
                <div className="w-px h-12 bg-purple-500/50"></div>
                <div className="text-center">
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Horário</div>
                  <div className="text-2xl font-bold text-white">20:00</div>
                </div>
                <div className="w-px h-12 bg-purple-500/50"></div>
                <div className="text-center">
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Fuso</div>
                  <div className="text-2xl font-bold text-purple-400">BRT</div>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-300">
              Apenas <span className="text-purple-400 font-black text-xl">100 VAGAS</span> disponíveis
            </p>
            <p className="text-sm text-gray-500 uppercase tracking-wider">
              Quem chegar primeiro, leva
            </p>
          </div>
        </div>

        {/* Professional Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-16">
          <div className={`bg-gradient-to-b from-gray-900 to-black border-2 rounded-xl p-4 md:p-6 relative overflow-hidden group transition-all duration-500 ${
            isCountdownFinished 
              ? 'border-green-400/60 bg-gradient-to-b from-green-900/10 to-black shadow-lg shadow-green-500/20' 
              : 'border-gray-600/40 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/10'
          }`}>
            <div className={`absolute inset-0 transition-all duration-500 ${
              isCountdownFinished 
                ? 'bg-gradient-to-r from-green-600/10 to-transparent opacity-100' 
                : 'bg-gradient-to-r from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100'
            }`}></div>
            {/* Subtle glow effect */}
            <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${
              isCountdownFinished 
                ? 'shadow-inner shadow-green-500/10' 
                : 'shadow-inner shadow-purple-500/5 group-hover:shadow-purple-500/10'
            }`}></div>
            <div className="text-4xl md:text-6xl font-black text-white mb-2 font-mono relative z-10 transition-all duration-300">
              {String(timeLeft.days).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-semibold relative z-10">
              DIAS
            </div>
          </div>

          <div className={`bg-gradient-to-b from-gray-900 to-black border-2 rounded-xl p-4 md:p-6 relative overflow-hidden group transition-all duration-500 ${
            isCountdownFinished 
              ? 'border-green-400/60 bg-gradient-to-b from-green-900/10 to-black shadow-lg shadow-green-500/20' 
              : 'border-gray-600/40 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/10'
          }`}>
            <div className={`absolute inset-0 transition-all duration-500 ${
              isCountdownFinished 
                ? 'bg-gradient-to-r from-green-600/10 to-transparent opacity-100' 
                : 'bg-gradient-to-r from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100'
            }`}></div>
            <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${
              isCountdownFinished 
                ? 'shadow-inner shadow-green-500/10' 
                : 'shadow-inner shadow-purple-500/5 group-hover:shadow-purple-500/10'
            }`}></div>
            <div className="text-4xl md:text-6xl font-black text-white mb-2 font-mono relative z-10 transition-all duration-300">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-semibold relative z-10">
              HORAS
            </div>
          </div>

          <div className={`bg-gradient-to-b from-gray-900 to-black border-2 rounded-xl p-4 md:p-6 relative overflow-hidden group transition-all duration-500 ${
            isCountdownFinished 
              ? 'border-green-400/60 bg-gradient-to-b from-green-900/10 to-black shadow-lg shadow-green-500/20' 
              : 'border-gray-600/40 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/10'
          }`}>
            <div className={`absolute inset-0 transition-all duration-500 ${
              isCountdownFinished 
                ? 'bg-gradient-to-r from-green-600/10 to-transparent opacity-100' 
                : 'bg-gradient-to-r from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100'
            }`}></div>
            <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${
              isCountdownFinished 
                ? 'shadow-inner shadow-green-500/10' 
                : 'shadow-inner shadow-purple-500/5 group-hover:shadow-purple-500/10'
            }`}></div>
            <div className="text-4xl md:text-6xl font-black text-white mb-2 font-mono relative z-10 transition-all duration-300">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-semibold relative z-10">
              MIN
            </div>
          </div>

          <div className={`bg-gradient-to-b from-gray-900 to-black border-2 rounded-xl p-4 md:p-6 relative overflow-hidden group transition-all duration-500 ${
            isCountdownFinished 
              ? 'border-green-400/60 bg-gradient-to-b from-green-900/10 to-black shadow-lg shadow-green-500/20' 
              : 'border-gray-600/40 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/10'
          }`}>
            <div className={`absolute inset-0 transition-all duration-500 ${
              isCountdownFinished 
                ? 'bg-gradient-to-r from-green-600/10 to-transparent opacity-100' 
                : 'bg-gradient-to-r from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100'
            }`}></div>
            <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${
              isCountdownFinished 
                ? 'shadow-inner shadow-green-500/10' 
                : 'shadow-inner shadow-purple-500/5 group-hover:shadow-purple-500/10'
            }`}></div>
            <div className="text-4xl md:text-6xl font-black text-white mb-2 font-mono relative z-10 transition-all duration-300">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-semibold relative z-10">
              SEG
            </div>
          </div>
        </div>

        {/* Professional Warning Box */}
        <div className={`rounded-xl p-6 backdrop-blur-sm transition-all duration-700 relative overflow-hidden ${
          isCountdownFinished 
            ? 'bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-400/40 shadow-lg shadow-green-500/10' 
            : 'bg-gradient-to-r from-purple-900/15 to-gray-900/25 border border-purple-400/30 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/10'
        }`}>
          {/* Subtle background glow */}
          <div className={`absolute inset-0 transition-all duration-700 ${
            isCountdownFinished 
              ? 'bg-gradient-to-br from-green-600/5 to-transparent opacity-100' 
              : 'bg-gradient-to-br from-purple-600/3 to-transparent opacity-0 hover:opacity-100'
          }`}></div>
          
          <div className="flex items-center justify-center space-x-3 mb-4 relative z-10">
            <svg className={`w-6 h-6 transition-all duration-500 ${
              isCountdownFinished ? 'text-green-400 drop-shadow-sm' : 'text-purple-400'
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <span className={`font-bold uppercase tracking-wider text-sm transition-all duration-500 ${
              isCountdownFinished ? 'text-green-400 drop-shadow-sm' : 'text-purple-400'
            }`}>
              {isCountdownFinished ? "VENDAS ABERTAS" : "EDIÇÃO LIMITADA"}
            </span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed relative z-10 transition-all duration-300">
            {isCountdownFinished 
              ? "🎉 As vendas estão oficialmente abertas! Apenas 100 vagas disponíveis. Garante já a sua antes que esgotem!" 
              : "Uma vez esgotado, não haverá data para restock. Prepare-se para a batalha mais intensa da sua vida."
            }
          </p>
        </div>
      </div>
    </section>
  )
}
