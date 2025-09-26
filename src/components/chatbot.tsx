"use client"

import { useState } from "react"
import { X, MessageCircle, Send } from "lucide-react"
import Image from "next/image"

interface FAQ {
  id: number
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "O Ecstasy é detectável?",
    answer: "Não, nosso sistema é 100% indetectável!!"
  },
  {
    id: 2,
    question: "Qual é a opção mais segura de usar?",
    answer: "Para o cenário competitivo com telagens manuais e outros scanners, recomendamos o uso do Infinity, onde ele é iniciado juntamente com o sistema, tornando-se irrastreável."
  },
  {
    id: 3,
    question: "Qual é mais utilizado para competitivo?",
    answer: "Nosso sistema Infinity se destaca no competitivo.. ja contamos com vários campeões no cenário Brasileiro! rs"
  },
  {
    id: 4,
    question: "Onde posso conseguir suporte?",
    answer: "Entre no nosso Discord, estaremos prontos para te atender!"
  }
]

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! 👋 Sou o assistente virtual do Ecstasy. Como posso ajudá-lo hoje?",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null)

  const handleFAQClick = (faq: FAQ) => {
    // Adiciona a pergunta do usuário
    const userMessage: Message = {
      id: messages.length + 1,
      text: faq.question,
      isUser: true,
      timestamp: new Date()
    }

    // Adiciona a resposta do bot
    const botMessage: Message = {
      id: messages.length + 2,
      text: faq.answer,
      isUser: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage, botMessage])
    setSelectedFAQ(null)
  }

  const resetChat = () => {
    setMessages([
      {
        id: 1,
        text: "Olá! 👋 Sou o assistente virtual do Ecstasy. Como posso ajudá-lo hoje?",
        isUser: false,
        timestamp: new Date()
      }
    ])
    setSelectedFAQ(null)
  }

  return (
    <>
      {/* Botão flutuante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
        >
          <div className="w-6 h-6 relative">
            <Image
              src="/logo_animated_icon.gif"
              alt="Ecstasy Logo"
              width={24}
              height={24}
              className="object-contain"
              unoptimized
            />
          </div>
        </button>
      )}

      {/* Janela do chatbot */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-gray-900 border border-gray-700 rounded-lg shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 relative">
                <Image
                  src="/logo_animated_icon.gif"
                  alt="Ecstasy Logo"
                  width={32}
                  height={32}
                  className="object-contain rounded-full"
                  unoptimized
                />
              </div>
              <div>
                <h3 className="text-white font-semibold">Assistente Ecstasy</h3>
                <p className="text-purple-100 text-xs">Online agora</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Área de mensagens */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-800">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-gray-700 text-gray-100'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Área de perguntas frequentes */}
          <div className="border-t border-gray-700 p-4 bg-gray-900">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-white text-sm font-semibold">Perguntas Frequentes:</h4>
              <button
                onClick={resetChat}
                className="text-xs text-purple-400 hover:text-purple-300 transition-colors"
              >
                Limpar chat
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
              {faqs.map((faq) => (
                <button
                  key={faq.id}
                  onClick={() => handleFAQClick(faq)}
                  className="text-left p-2 bg-gray-800 hover:bg-gray-700 rounded text-xs text-gray-300 hover:text-white transition-all duration-200 border border-gray-600 hover:border-purple-500"
                >
                  {faq.question}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}