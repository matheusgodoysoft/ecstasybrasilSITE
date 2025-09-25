"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

export function InfinityDemoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Auto-play failed, which is expected in some browsers
      })
    }
  }, [])

  return (
    <section className="py-20">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[60vh]">
          {/* Left Side - Video with overlay text */}
          <div className="relative bg-black">
            <video
              ref={videoRef}
              className="w-full h-full object-cover scale-170"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/infinity_feat_1.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            
            {/* Text overlay in corner */}
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - No Executable Content */}
                 <div className="relative bg-black flex items-center justify-center">
                   <div className="text-center">
                     {/* Download icon */}
                     <div className="w-24 h-24 mx-auto mb-4">
                       <Image
                         src="/download-icon.svg"
                         alt="Download Icon"
                         width={96}
                         height={96}
                         className="object-contain"
                       />
                     </div>

                     {/* X mark */}
                     <div className="w-16 h-16 mx-auto mb-6 bg-red-600/20 rounded-full flex items-center justify-center">
                       <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                       </svg>
                     </div>
                   </div>
            
            {/* Text overlay in corner */}
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-gray-500 to-gray-700 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">No Executable Needed</h3>
              </div>
              <p className="text-xs text-gray-300 ml-11">No .exe download needed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
