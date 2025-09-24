"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const pricingData = {
  "1week": {
    standard: { price: "R$69.99", period: "semanal" },
    infinity: { price: "R$N/A", period: "semanal" },
    fortnite: { price: "R$N/A", period: "semanal" }
  },
  "1month": {
    standard: { price: "R$99.99", period: "mensal" },
    infinity: { price: "R$349.99", period: "mensal" },
    fortnite: { price: "R$599.99", period: "mensal" }
  },
  "3months": {
    standard: { price: "R$269.99", period: "trimestral" },
    infinity: { price: "R$999.99", period: "trimestral" },
    fortnite: { price: "R$1599.99", period: "trimestral" }
  }
}

const plans = [
  {
    id: "standard",
    name: "FiveM Standard",
    description: "Nosso plano padrão",
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
    features: [
      "Sem .exe download necessário",
      "Carrega no Boot time",
      "Projetado para não deixar rastros",
      "Defina o padrão Infinity para execução sem rastros"
    ]
  },
  {
    id: "fortnite",
    name: "Fortnite",
    description: "Nosso novo produto Fortnite",
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

  useEffect(() => {
    setSelectedPeriod("1month")
  }, [])

  return (
    <section className="py-12 px-4">
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {plans.map((plan) => (
                  <Card 
                    key={plan.id} 
                    className={`relative group hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-2xl ${
                      plan.id === 'infinity' || plan.id === 'fortnite'
                        ? 'bg-black border-2' 
                        : 'border-border/50 bg-black'
                    }`}
                    style={
                      plan.id === 'infinity' || plan.id === 'fortnite'
                        ? {
                            borderImage: plan.id === 'infinity' 
                              ? 'linear-gradient(45deg, #8b5cf6, #3b82f6, #8b5cf6) 1'
                              : 'linear-gradient(45deg, #a855f7, #9333ea, #a855f7) 1'
                          }
                        : undefined
                    }
                  >

                    <CardHeader>
                      <CardTitle className="text-2xl text-white">
                        {plan.name}
                      </CardTitle>
                      <CardDescription className="text-base text-gray-400">
                        {plan.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Price */}
                      <div className="space-y-1">
                        <div className="flex items-baseline space-x-1">
                          <span className="text-3xl font-bold text-white">
                            {pricingData[period as keyof typeof pricingData][plan.id as keyof typeof pricingData["1month"]].price}
                          </span>
                          <span className="text-gray-400">
                            / {pricingData[period as keyof typeof pricingData][plan.id as keyof typeof pricingData["1month"]].period}
                          </span>
                        </div>
                      </div>

                      {/* Subscribe Button */}
                      <Button 
                        className="w-full bg-white hover:bg-gray-100 text-black"
                        size="lg"
                      >
                        Subscribe
                      </Button>

                      {/* Features List */}
                      <div className="pt-4 border-t border-gray-800">
                        <ul className="space-y-3">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                                plan.id === 'standard'
                                  ? 'bg-green-500/20 text-green-400'
                                  : 'bg-blue-500/20 text-blue-400'
                              }`}>
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-sm leading-relaxed text-gray-300">
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
    </section>
  )
}
