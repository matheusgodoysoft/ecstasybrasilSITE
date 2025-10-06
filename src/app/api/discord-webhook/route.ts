import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validar se os dados necessários estão presentes
    if (!body.name || !body.email || !body.plan) {
      return NextResponse.json(
        { error: 'Dados obrigatórios não fornecidos' },
        { status: 400 }
      )
    }

    // URL do webhook do Discord (deve ser configurada nas variáveis de ambiente)
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL

    if (!discordWebhookUrl) {
      console.error('DISCORD_WEBHOOK_URL não configurada')
      return NextResponse.json(
        { error: 'Configuração do Discord não encontrada' },
        { status: 500 }
      )
    }

    // Criar embed para o Discord
    const embed = {
      title: "⏳ Pagamento Pendente",
      color: 0xF59E0B, // Cor amarela/laranja para indicar pendência
      fields: [
        {
          name: "👤 Cliente",
          value: body.name,
          inline: true
        },
        {
          name: "📧 Email",
          value: body.email,
          inline: true
        },
        {
          name: "📦 Plano",
          value: `${body.plan.name} - ${body.plan.period}`,
          inline: true
        },
        {
          name: "💰 Valor",
          value: body.plan.price,
          inline: true
        },
        {
          name: "💳 Método de Pagamento",
          value: body.paymentMethod,
          inline: true
        },
        {
          name: "🕒 Data/Hora",
          value: new Date().toLocaleString('pt-BR', {
            timeZone: 'America/Sao_Paulo'
          }),
          inline: true
        },
        {
          name: "📋 Status",
          value: "⏳ **Aguardando Confirmação**",
          inline: false
        }
      ],
      footer: {
        text: "Sistema de Checkout Ecstasy • Hoje às " + new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
      },
      timestamp: new Date().toISOString()
    }

    // Criar botões de ação
    const actionRow = {
      type: 1, // ACTION_ROW
      components: [
        {
          type: 2, // BUTTON
          style: 3, // SUCCESS (verde)
          label: "✅ Confirmar Pagamento",
          custom_id: `confirm_payment_${Date.now()}_${body.email}`,
        },
        {
          type: 2, // BUTTON
          style: 4, // DANGER (vermelho)
          label: "❌ Rejeitar Pagamento",
          custom_id: `reject_payment_${Date.now()}_${body.email}`,
        }
      ]
    }

    // Enviar para o Discord
    const discordResponse = await fetch(discordWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [embed],
        components: [actionRow]
      })
    })

    if (!discordResponse.ok) {
      console.error('Erro ao enviar para Discord:', discordResponse.statusText)
      return NextResponse.json(
        { error: 'Erro ao enviar notificação' },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Dados enviados para Discord com sucesso' 
    })

  } catch (error) {
    console.error('Erro na API:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}