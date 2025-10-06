"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CheckoutModal } from "@/components/ui/checkout-modal"

const pricingData = {
  "1week": {
    standard: { price: "R$69.99", period: "semanal" },
    infinity: { price: "R$N/A", period: "semanal" },
    fortnite: { price: "R$N/A", period: "semanal" }
  },
  "1month": {
    standard: { price: "R$99.99", period: "mensal" },
    infinity: { price: "R$499.99", period: "mensal" },
    fortnite: { price: "R$599.99", period: "mensal" }
  },
  "3months": {
    standard: { price: "R$269.99", period: "trimestral" },
    infinity: { price: "R$1.450,99", period: "trimestral" },
    fortnite: { price: "R$1.599,99", period: "trimestral" }
  }
}

const plans = [
  {
    id: "standard",
    name: "FiveM Standard",
    description: "Nosso plano padrão",
    icon: "🎮",
    badge: null,
    highlight: false,
    features: [
      "Acesso ao UI no jogo",
      "Acesso ao UI web",
      "Um HWID change (para configuração inicial apenas)",
      "Publicar configurações ilimitadas",
      "Suporte ilimitado"
    ]
  },
  {
    id: "infinity",
    name: "FiveM Infinity",
    description: "Feito para burlar scans",
    icon: "🚀",
    badge: "Mais Vendido",
    highlight: true,
    features: [
      "Sem .exe download necessário",
      "Carrega no Boot time",
      "Projetado para não deixar rastros",
      "Defina o padrão Infinity para execução sem rastros",
      " 100% Indetectável",
      " Método UEFI"
    ]
  },
  {
    id: "fortnite",
    name: "Fortnite",
    description: "Nosso novo produto Fortnite",
    icon: "⚡",
    badge: "Esgotado",
    highlight: false,
    features: [
      "Exclusivo (20 vendas cada mês)",
      "Projetado para contornar o mais poderoso anti-cheat",
      "Acesso ao UI no jogo",
      "Um HWID change (para configuração inicial apenas)",
      "O produto mais otimizado do mercado"
    ]
  }
]

export function PricingSection() {
  const [selectedPeriod, setSelectedPeriod] = useState("1month")
  const [checkoutModal, setCheckoutModal] = useState<{
    isOpen: boolean
    plan: {
      id: string
      name: string
      price: string
      period: string
    } | null
  }>({
    isOpen: false,
    plan: null
  })

  useEffect(() => {
    setSelectedPeriod("1month")
  }, [])

  const openCheckout = (planId: string, planName: string) => {
    const planData = pricingData[selectedPeriod as keyof typeof pricingData][planId as keyof typeof pricingData["1month"]]
    setCheckoutModal({
      isOpen: true,
      plan: {
        id: planId,
        name: planName,
        price: planData.price,
        period: planData.period
      }
    })
  }

  const closeCheckout = () => {
    setCheckoutModal({
      isOpen: false,
      plan: null
    })
  }

  return (
    <section id="pricing" className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h4 className="text-sm font-semibold text-primary uppercase tracking-wider">
            Preços dos Planos
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold">
            Acessível para todos.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nosso preço é projetado para{" "}
            <strong className="text-foreground">pessoas avançadas</strong>{" "}
            que precisam de mais funcionalidades e mais flexibilidade.
          </p>
        </div>

        {/* Pricing Tabs */}
        <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod} className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="1week">1 semana</TabsTrigger>
            <TabsTrigger value="1month">1 mês</TabsTrigger>
            <TabsTrigger value="3months">3 meses</TabsTrigger>
          </TabsList>

          {Object.keys(pricingData).map((period) => (
            <TabsContent key={period} value={period}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
                {plans.map((plan) => (
                  <Card 
                    key={plan.id} 
                    className={`relative group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 overflow-visible rounded-3xl border-2 transform hover:-translate-y-2 mt-6 ${
                      plan.highlight
                        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900 border-purple-500/50 shadow-lg shadow-purple-500/25' 
                        : 'bg-gradient-to-br from-gray-900 via-black to-gray-900 border-gray-700/50 hover:border-gray-600/50'
                    }`}
                  >
                    {/* Badge */}
                    {plan.badge && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                        <div className={`px-4 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                          plan.id === 'infinity' 
                            ? 'bg-gradient-to-r from-orange-500 to-red-500' 
                            : plan.id === 'fortnite'
                            ? 'bg-gradient-to-r from-red-600 to-red-700'
                            : 'bg-gradient-to-r from-purple-600 to-purple-700'
                        }`}>
                          🔥 {plan.badge}
                        </div>
                      </div>
                    )}

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10' 
                        : 'bg-gradient-to-r from-gray-600/5 via-transparent to-gray-600/5'
                    }`} />

                    <CardHeader className="relative z-10 pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl mb-2">{plan.icon}</div>
                      </div>
                      
                      <CardTitle className="text-2xl lg:text-3xl text-white font-bold leading-tight mb-3">
                        {plan.name}
                      </CardTitle>
                      
                      <CardDescription className="text-base text-gray-300 leading-relaxed">
                        {plan.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-8 relative z-10">
                      {/* Price Section */}
                      <div className="space-y-3">
                        <div className="flex items-baseline space-x-2">
                          <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            {pricingData[period as keyof typeof pricingData][plan.id as keyof typeof pricingData["1month"]].price}
                          </span>
                          <span className="text-gray-400 text-sm">
                            / {pricingData[period as keyof typeof pricingData][plan.id as keyof typeof pricingData["1month"]].period}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            <div className={`w-2 h-2 rounded-full ${
                              plan.id === 'fortnite' 
                                ? 'bg-red-400 animate-pulse' 
                                : plan.id === 'infinity'
                                ? 'bg-orange-400 animate-pulse'
                                : 'bg-green-400 animate-pulse'
                            }`} />
                            <span className={`text-xs font-medium ${
                              plan.id === 'fortnite' 
                                ? 'text-red-400' 
                                : plan.id === 'infinity'
                                ? 'text-orange-400'
                                : 'text-green-400'
                            }`}>
                              {plan.id === 'fortnite' ? 'Esgotado' : plan.id === 'infinity' ? 'Somente 5 keys disponíveis' : 'Disponível'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Subscribe Button */}
                      <Button 
                        onClick={() => plan.id !== 'fortnite' ? openCheckout(plan.id, plan.name) : undefined}
                        className={`w-full text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg ${
                          plan.id === 'fortnite'
                            ? 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 shadow-gray-500/25 cursor-not-allowed opacity-60'
                            : plan.highlight
                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-purple-500/25'
                            : 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 shadow-gray-500/25'
                        }`}
                        size="lg"
                        disabled={plan.id === 'fortnite'}
                      >
                        {plan.id === 'fortnite' ? '❌ Esgotado' : '🛒 Comprar Agora'}
                      </Button>

                      {/* Features List */}
                      <div className="pt-4 border-t border-gray-800">
                        <ul className="space-y-4">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-3 group/item hover:bg-white/5 rounded-lg p-2 transition-colors duration-200">
                              <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-colors duration-200 ${
                                plan.id === 'standard'
                                  ? 'bg-green-500/20 text-green-400 group-hover/item:bg-green-500/30'
                                  : 'bg-purple-500/20 text-purple-400 group-hover/item:bg-purple-500/30'
                              }`}>
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-sm leading-relaxed text-gray-300 group-hover/item:text-white transition-colors duration-200">
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
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutModal.isOpen}
        onClose={closeCheckout}
        plan={checkoutModal.plan}
      />
    </section>
  )
}
