"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const dmaProducts = [
  {
    id: "dma-basic",
    name: "DMA + FUSER + FIRMWARE BASIC",
    description: "Pacote completo com hardware e firmware básico.",
    price: "R$3.099,00",
    originalPrice: "R$3.599,00",
    discount: "14% OFF",
    icon: "🔧",
    features: [
      "Hardware DMA completo",
      "FUSER incluído",
      "FIRMWARE BASIC",
      "🎁 1 mês de key",
      "Suporte técnico 12h",
      "Instalação guiada",
      "Manual em português"
    ],
    highlight: false,
    popular: false
  },
  {
    id: "firmware-pro",
    name: "FIRMWARE PRO 1:1",
    description: "Firmware premium com suporte personalizado e performance máxima",
    price: "R$799,99",
    originalPrice: "R$999,99",
    discount: "20% OFF",
    icon: "⚡",
    features: [
      "Firmware PRO exclusivo",
      "Suporte 1:1 personalizado",
      "Atualizações prioritárias",
      "Configuração otimizada",
      "Suporte 24/7",
      "Garantia vitalícia",
      "Acesso beta features"
    ],
    highlight: true,
    popular: true
  }
]

export function DmaSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-purple-900/5 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-blue-600/5" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-500/30 mb-4">
            <span className="text-2xl">🚀</span>
            <span className="text-sm font-bold text-purple-200 uppercase tracking-widest">
              Produtos DMA
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Hardware{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Profissional
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Equipamentos de <strong className="text-white">alta qualidade</strong> para profissionais sérios que buscam{" "}
            <span className="text-purple-400 font-semibold">performance</span> e{" "}
            <span className="text-blue-400 font-semibold">confiabilidade</span> máxima.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8">
          {dmaProducts.map((product) => (
            <Card 
              key={product.id} 
              className={`relative group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 overflow-visible rounded-3xl border-2 transform hover:-translate-y-2 mt-6 ${
                product.highlight
                  ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900 border-purple-500/50 shadow-lg shadow-purple-500/25' 
                  : 'bg-gradient-to-br from-gray-900 via-black to-gray-900 border-gray-700/50 hover:border-gray-600/50'
              }`}
            >
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-4 py-1 text-xs uppercase tracking-wider shadow-lg rounded-full">
                    🔥 Mais Popular
                  </div>
                </div>
              )}

              {/* Discount Badge */}
              {product.discount && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10">
                  {product.discount}
                </div>
              )}

              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                product.highlight 
                  ? 'bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10' 
                  : 'bg-gradient-to-r from-gray-600/5 via-transparent to-gray-600/5'
              }`} />

              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl mb-2">{product.icon}</div>
                </div>
                
                <CardTitle className="text-2xl lg:text-3xl text-white font-bold leading-tight mb-3">
                  {product.name}
                </CardTitle>
                
                <CardDescription className="text-base text-gray-300 leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-8 relative z-10">
                {/* Price Section */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-baseline space-x-2">
                    <span className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">Pagamento único</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-xs text-green-400 font-medium">Disponível</span>
                    </div>
                  </div>
                </div>

                {/* Buy Button */}
                <Link href="https://discord.gg/ASPfsdkHGW" target="_blank">
                  <Button 
                    className={`w-full font-bold text-lg py-7 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg ${
                      product.highlight
                        ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white shadow-purple-500/50'
                        : 'bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white text-black shadow-gray-500/20'
                    }`}
                    size="lg"
                  >
                    <span className="flex items-center space-x-2">
                      <span>💬</span>
                      <span>{product.highlight ? 'Comprar no Discord' : 'Comprar no Discord'}</span>
                    </span>
                  </Button>
                </Link>

                {/* Features List */}
                <div className="pt-6 border-t border-gray-700/50">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                    Incluído no pacote
                  </h4>
                  <ul className="space-y-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3 group">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300 ${
                          product.highlight
                            ? 'bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/30 group-hover:scale-110'
                            : 'bg-green-500/20 text-green-400 group-hover:bg-green-500/30 group-hover:scale-110'
                        }`}>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm leading-relaxed text-gray-200 group-hover:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-full px-8 py-4 border border-purple-500/30 mb-8 shadow-lg">
            <span className="text-2xl">🔒</span>
            <span className="text-sm font-bold text-purple-200 uppercase tracking-widest">
              Produtos Exclusivos
            </span>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Nossos produtos DMA são desenvolvidos com a <strong className="text-white">mais alta tecnologia</strong> e passam por{" "}
              <span className="text-purple-400 font-semibold">rigorosos testes de qualidade</span>. 
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-gradient-to-b from-gray-900/50 to-black/50 border border-gray-700/30">
                <span className="text-3xl">🛡️</span>
                <h4 className="text-white font-semibold">Garantia Total</h4>
                <p className="text-sm text-gray-400 text-center">Suporte completo e garantia para todos os produtos</p>
              </div>
              
              <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-gradient-to-b from-gray-900/50 to-black/50 border border-gray-700/30">
                <span className="text-3xl">⚡</span>
                <h4 className="text-white font-semibold">Entrega Rápida</h4>
                <p className="text-sm text-gray-400 text-center">Acesso imediato após confirmação do pagamento</p>
              </div>
              
              <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-gradient-to-b from-gray-900/50 to-black/50 border border-gray-700/30">
                <span className="text-3xl">🎯</span>
                <h4 className="text-white font-semibold">Suporte 24/7</h4>
                <p className="text-sm text-gray-400 text-center">Equipe especializada sempre disponível</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}