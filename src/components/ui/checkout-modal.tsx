"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X, CreditCard, User, Mail, Lock, ShoppingCart, Copy, CheckCircle } from "lucide-react"

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  plan: {
    id: string
    name: string
    price: string
    period: string
  } | null
}

export function CheckoutModal({ isOpen, onClose, plan }: CheckoutModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    paymentMethod: "pix"
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [showCryptoWallets, setShowCryptoWallets] = useState(false)
  const [copiedWallet, setCopiedWallet] = useState<string | null>(null)

  if (!isOpen || !plan) return null

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const copyToClipboard = async (text: string, walletType: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedWallet(walletType)
      setTimeout(() => setCopiedWallet(null), 2000)
    } catch (err) {
      console.error('Erro ao copiar:', err)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    try {
      // Enviar dados para nossa API que enviará para o Discord
      const response = await fetch('/api/discord-webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          paymentMethod: formData.paymentMethod,
          plan: plan
        })
      })

      if (!response.ok) {
        console.error('Erro ao enviar dados para Discord')
      }

      // Simular processamento adicional
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Se for criptomoeda, mostrar carteiras ao invés de redirecionar
      if (formData.paymentMethod === 'crypto') {
        setShowCryptoWallets(true)
      } else {
        // Redirecionar para livepix.gg/ecstasybrasil apenas para PIX
        window.open("https://livepix.gg/ecstasybrasil", "_blank")
        onClose()
      }
      
    } catch (error) {
      console.error('Erro no checkout:', error)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <Card className="relative w-full max-w-md bg-gradient-to-br from-gray-900 via-black to-gray-900 border-purple-500/50 shadow-2xl shadow-purple-500/25 rounded-3xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <CardHeader className="pb-4">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl text-white font-bold">
                Finalizar Compra
              </CardTitle>
              <CardDescription className="text-gray-300">
                Complete os dados para continuar
              </CardDescription>
            </div>
          </div>

          {/* Plan Summary */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/30">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                <p className="text-sm text-gray-300">Plano {plan.period}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">{plan.price}</p>
                <p className="text-sm text-gray-400">/ {plan.period}</p>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {!showCryptoWallets ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Nome Completo</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Seu nome completo"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="seu@email.com"
              />
            </div>

            {/* Método de Pagamento */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white flex items-center space-x-2">
                <CreditCard className="w-4 h-4" />
                <span>Método de Pagamento</span>
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              >
                <option value="pix" className="bg-gray-900">PIX</option>
                <option value="crypto" className="bg-gray-900">Criptomoeda</option>
              </select>
            </div>

            {/* Security Notice */}
            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
              <div className="flex items-start space-x-3">
                <Lock className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-green-400">Pagamento Seguro</p>
                  <p className="text-xs text-green-300/80">
                    Seus dados são protegidos com criptografia SSL de 256 bits
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isProcessing || !formData.name || !formData.email}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isProcessing ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Processando...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5" />
                  <span>Finalizar Compra - {plan.price}</span>
                </div>
              )}
            </Button>

            {/* Discord Ticket Warning for PIX */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-red-600/10 to-orange-600/10 border border-red-500/30">
              <h4 className="text-red-300 font-semibold mb-2 flex items-center space-x-2">
                <span>⚠️</span>
                <span>IMPORTANTE - Após o Pagamento</span>
              </h4>
              <div className="text-gray-300 text-sm space-y-2">
                <p className="font-medium">Depois de realizar o pagamento, você DEVE:</p>
                <ul className="space-y-1 ml-4">
                  <li>• <strong>Abrir um ticket no Discord</strong></li>
                  <li>• <strong>Enviar o comprovante de pagamento</strong></li>
                  <li>• <strong>Informar o nome:</strong> {formData.name}</li>
                  <li>• <strong>Informar o email:</strong> {formData.email}</li>
                </ul>
                <p className="text-red-300 font-medium mt-2">
                  ⚠️ Sem o ticket com comprovante, seu acesso não será liberado!
                </p>
              </div>
            </div>
          </form>
          ) : (
            /* Crypto Wallets Section */
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">Carteiras de Criptomoeda</h3>
                <p className="text-gray-300 text-sm">Escolha uma das carteiras abaixo para realizar o pagamento</p>
              </div>

              {/* Bitcoin Wallet */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-600/10 to-yellow-600/10 border border-orange-500/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">₿</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Bitcoin (BTC)</h4>
                      <p className="text-gray-400 text-xs">Rede Bitcoin</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => copyToClipboard("bc1p4qqdhlx6lak5nszjkttpv8h2ldnn5xu8q3sggu3f2f79a3l0f3gsyl3667", "BTC")}
                    className="bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 border border-orange-500/50"
                    size="sm"
                  >
                    {copiedWallet === "BTC" ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                  <p className="text-gray-300 text-xs font-mono break-all">
                    bc1p4qqdhlx6lak5nszjkttpv8h2ldnn5xu8q3sggu3f2f79a3l0f3gsyl3667
                  </p>
                </div>
              </div>

              {/* Litecoin Wallet */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-gray-600/10 to-blue-600/10 border border-gray-500/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">Ł</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Litecoin (LTC)</h4>
                      <p className="text-gray-400 text-xs">Rede Litecoin</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => copyToClipboard("ltc1qr9lj680c2zk0n5ucdseay09rvc0ruurnjskqye", "LTC")}
                    className="bg-gray-500/20 hover:bg-gray-500/30 text-gray-300 border border-gray-500/50"
                    size="sm"
                  >
                    {copiedWallet === "LTC" ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                  <p className="text-gray-300 text-xs font-mono break-all">
                    ltc1qr9lj680c2zk0n5ucdseay09rvc0ruurnjskqye
                  </p>
                </div>
              </div>

              {/* Instructions */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/30">
                <h4 className="text-white font-semibold mb-2">Instruções de Pagamento</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Envie o valor exato de <strong>{plan.price}</strong></li>
                  <li>• Clique no botão de copiar para copiar o endereço</li>
                  <li>• Após o pagamento, aguarde a confirmação</li>
                  <li>• O acesso será liberado em até 24 horas</li>
                </ul>
              </div>

              {/* Discord Ticket Warning */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-red-600/10 to-orange-600/10 border border-red-500/30">
                <h4 className="text-red-300 font-semibold mb-2 flex items-center space-x-2">
                  <span>⚠️</span>
                  <span>IMPORTANTE - Após o Pagamento</span>
                </h4>
                <div className="text-gray-300 text-sm space-y-2">
                  <p className="font-medium">Depois de realizar o pagamento, você DEVE:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• <strong>Abrir um ticket no Discord</strong></li>
                    <li>• <strong>Enviar o comprovante de pagamento</strong></li>
                    <li>• <strong>Informar o nome:</strong> {formData.name}</li>
                    <li>• <strong>Informar o email:</strong> {formData.email}</li>
                  </ul>
                  <p className="text-red-300 font-medium mt-2">
                    ⚠️ Sem o ticket com comprovante, seu acesso não será liberado!
                  </p>
                </div>
              </div>

              {/* Back Button */}
              <Button
                onClick={() => setShowCryptoWallets(false)}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 rounded-xl transition-all duration-300"
              >
                Voltar ao Formulário
              </Button>
            </div>
          )}

          {/* Footer */}
          <div className="text-center pt-4 border-t border-white/10">
            <p className="text-xs text-gray-400">
              Ao continuar, você concorda com nossos{" "}
              <a href="#" className="text-purple-400 hover:text-purple-300">
                Termos de Serviço
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}