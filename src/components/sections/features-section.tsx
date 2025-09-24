import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
      </svg>
    ),
    title: "Web UI",
    description: "Controle Ecstasy do seu pc ou celular!",
    images: Array.from({ length: 25 }, (_, i) => `/feature-icons/icon-${i + 1}.png`)
  },
  {
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Zero Traços",
    description: "Projetado para não deixar rastros.",
    images: Array.from({ length: 12 }, (_, i) => `/trace-icons/trace-${i + 1}.png`)
  },
  {
    icon: (
      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Carrega no Boot Time",
    description: "Executa antes do Windows.",
    images: []
  },
  {
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Sem Executável Necessário",
    description: "Não é necessário baixar um executável.",
    images: []
  }
]

export function FeaturesSection() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h4 className="text-sm font-semibold text-primary uppercase tracking-wider">
            Introducing
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Ecstasy Infinity
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Nossa Revolução{" "}
            <strong className="text-foreground">Boot-Time (UEFI)</strong>{" "}
            version.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {feature.description}
                </CardDescription>
                
                <Link 
                  href="https://discord.gg/ASPfsdkHGW"
                  className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors group/link"
                >
                  <span>Saiba mais</span>
                  <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Infinity Demo Video */}
        <div className="flex justify-center py-1">
          <div className="w-full max-w-none px-41">
            <video
              className="w-full h-auto rounded-2xl shadow-2xl"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/infinity_feat_1.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
