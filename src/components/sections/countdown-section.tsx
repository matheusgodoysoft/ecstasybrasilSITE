"use client"

import { useState, useEffect } from "react"

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Data de lançamento: 10 de outubro de 2025 às 19:00 (horário de Brasília)
    const launchDate = new Date('2025-10-10T19:00:00-03:00')
    
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
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

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
            <span className="text-sm font-bold text-purple-300 uppercase tracking-widest">LANÇAMENTO IMINENTE</span>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              DIA DO LANÇAMENTO
            </span>
          </h2>
          
          <div className="space-y-3">
            <div className="bg-black/40 rounded-xl px-6 py-4 border border-purple-500/30 inline-block">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Data</div>
                  <div className="text-2xl font-bold text-white">10 OUT</div>
                </div>
                <div className="w-px h-12 bg-purple-500/50"></div>
                <div className="text-center">
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Horário</div>
                  <div className="text-2xl font-bold text-white">19:00</div>
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

        {/* Countdown Timer - Gaming Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-16">
          <div className="bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600/50 rounded-lg p-4 md:p-6 relative overflow-hidden group hover:border-purple-400 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-4xl md:text-6xl font-black text-white mb-2 font-mono relative z-10">
              {String(timeLeft.days).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-semibold relative z-10">
              DIAS
            </div>
          </div>

          <div className="bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600/50 rounded-lg p-4 md:p-6 relative overflow-hidden group hover:border-purple-400 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-4xl md:text-6xl font-black text-white mb-2 font-mono relative z-10">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-semibold relative z-10">
              HORAS
            </div>
          </div>

          <div className="bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600/50 rounded-lg p-4 md:p-6 relative overflow-hidden group hover:border-purple-400 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-4xl md:text-6xl font-black text-white mb-2 font-mono relative z-10">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-semibold relative z-10">
              MIN
            </div>
          </div>

          <div className="bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600/50 rounded-lg p-4 md:p-6 relative overflow-hidden group hover:border-purple-400 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-4xl md:text-6xl font-black text-white mb-2 font-mono relative z-10">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-semibold relative z-10">
              SEG
            </div>
          </div>
        </div>

        {/* Gaming-style Warning Box */}
        <div className="bg-gradient-to-r from-purple-900/20 to-gray-900/30 border border-purple-500/30 rounded-lg p-6 backdrop-blur-sm">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <span className="text-purple-400 font-bold uppercase tracking-wider text-sm">
              EDIÇÃO LIMITADA
            </span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Uma vez esgotado, não haverá data para restock. Prepare-se para a batalha mais intensa da sua vida.
          </p>
        </div>
      </div>
    </section>
  )
}
