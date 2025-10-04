"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full h-[3.5rem] flex items-center px-4 md:px-6 bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 relative">
              <Image
                src="/logo_animated_icon.gif"
                alt="Ecstasy Logo"
                width={32}
                height={32}
                className="object-contain"
                unoptimized
              />
            </div>
            <Link 
              href="/" 
              className="text-primary text-md font-semibold hover:opacity-80 transition-opacity"
            >
              Ecstasy v1.8.2
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/tos" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link 
              href="https://ecstasy.zip/authenticate/login"
              className="h-9 rounded-md bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 transition-colors px-4 py-2 text-sm font-medium"
            >
              Dashboard
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-8 w-8 flex items-center justify-center text-white hover:text-primary transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-[3.5rem] left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-white/10 md:hidden">
          <nav className="flex flex-col p-4 space-y-4">
            <Link 
              href="/tos" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Terms of Service
            </Link>
            <Link 
              href="https://ecstasy.zip/authenticate/login"
              className="inline-flex items-center justify-center h-9 rounded-md bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 transition-colors px-4 py-2 text-sm font-medium w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
