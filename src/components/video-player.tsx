'use client'

import { useEffect, useRef, useState } from 'react'

interface VideoPlayerProps {
  src: string
  className?: string
}

export default function VideoPlayer({ src, className = '' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoaded(true)
      setHasError(false)
    }

    const handleError = () => {
      setHasError(true)
      setIsLoaded(false)
    }

    const handleCanPlay = () => {
      video.play().catch(() => {
        // Autoplay failed, that's okay
      })
    }

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('error', handleError)
    video.addEventListener('canplay', handleCanPlay)

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('error', handleError)
      video.removeEventListener('canplay', handleCanPlay)
    }
  }, [])

  if (hasError) {
    return (
      <div className={`${className} bg-gray-900 rounded-2xl flex items-center justify-center min-h-[400px]`}>
        <div className="text-center text-white">
          <p className="text-lg mb-2">Vídeo temporariamente indisponível</p>
          <p className="text-sm opacity-70">Carregando conteúdo...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{ opacity: isLoaded ? 1 : 0.5 }}
      >
        <source src={src} type="video/webm" />
        <source src="/infinity_feat_1.webm" type="video/webm" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-900 rounded-2xl flex items-center justify-center">
          <div className="text-center text-white">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
            <p className="text-sm">Carregando vídeo...</p>
          </div>
        </div>
      )}
    </div>
  )
}