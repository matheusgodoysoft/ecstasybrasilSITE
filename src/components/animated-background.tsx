"use client"

import { useEffect, useRef } from 'react'

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle system
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    }> = []

    const colors = [
      'rgba(34, 197, 94, 0.1)',   // green-500
      'rgba(20, 184, 166, 0.1)',  // teal-500
      'rgba(59, 130, 246, 0.1)',  // blue-500
      'rgba(124, 58, 237, 0.1)',  // violet-600
      'rgba(249, 115, 22, 0.1)',  // orange-500
      'rgba(225, 29, 72, 0.1)',   // rose-600
    ]

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.1 + 0.05,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1

        // Update opacity (breathing effect)
        particle.opacity += (Math.random() - 0.5) * 0.01
        particle.opacity = Math.max(0.02, Math.min(0.1, particle.opacity))

        // Draw particle
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        // Draw connections to nearby particles
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.save()
            ctx.globalAlpha = (1 - distance / 100) * 0.1
            ctx.strokeStyle = particle.color
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <>
      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      
      {/* Black to transparent gradient overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1] bg-gradient-to-b from-black from-0% via-black/95 via-30% via-black/80 via-60% to-black/20 to-100%" />
      
      {/* Gradient orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Green-Teal-Emerald orb */}
        <div 
          className="absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-green-500 via-teal-500 to-emerald-600 opacity-10 blur-[50px] animate-pulse"
          style={{
            animation: 'float 6s ease-in-out infinite',
            animationDelay: '0s'
          }}
        />
        
        {/* Orange-Rose-Violet orb */}
        <div 
          className="absolute left-1/3 top-1/3 h-1/3 w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600 opacity-8 blur-[40px] animate-pulse"
          style={{
            animation: 'float 8s ease-in-out infinite reverse',
            animationDelay: '2s'
          }}
        />
        
        {/* Yellow-Orange orb */}
        <div 
          className="absolute right-1/3 top-2/3 h-1/4 w-1/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 opacity-6 blur-[35px] animate-pulse"
          style={{
            animation: 'float 7s ease-in-out infinite',
            animationDelay: '4s'
          }}
        />
        
        {/* Cyan-Blue-Indigo orb */}
        <div 
          className="absolute right-1/4 top-1/4 h-1/3 w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-8 blur-[45px] animate-pulse"
          style={{
            animation: 'float 9s ease-in-out infinite reverse',
            animationDelay: '1s'
          }}
        />
        
        {/* Additional smaller orbs for more depth */}
        <div 
          className="absolute left-1/4 bottom-1/4 h-1/5 w-1/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-5 blur-[30px] animate-pulse"
          style={{
            animation: 'float 5s ease-in-out infinite',
            animationDelay: '3s'
          }}
        />
      </div>
    </>
  )
}
