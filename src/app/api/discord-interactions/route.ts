import { NextRequest, NextResponse } from 'next/server'
import { verifyKey } from 'discord-interactions'

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('x-signature-ed25519')
    const timestamp = request.headers.get('x-signature-timestamp')

    // Verificar se é uma interação válida do Discord
    // Nota: Para produção, você precisará configurar a PUBLIC_KEY do seu bot Discord
    // const isValidRequest = verifyKey(body, signature!, timestamp!, process.env.DISCORD_PUBLIC_KEY!)
    
    // Por enquanto, vamos pular a verificação para desenvolvimento
    const interaction = JSON.parse(body)

    // Responder ao ping do Discord
    if (interaction.type === 1) {
      return NextResponse.json({ type: 1 })
    }

    // Processar interações de botões
    if (interaction.type === 3) { // MESSAGE_COMPONENT
      const customId = interaction.data.custom_id
      const user = interaction.member?.user || interaction.user

      if (customId.startsWith('confirm_payment_')) {
        // Extrair email do custom_id
        const email = customId.split('_').slice(2).join('_')
        
        // Atualizar a mensagem original
        const updatedEmbed = {
          ...interaction.message.embeds[0],
          color: 0x22C55E, // Verde
          fields: [
            ...interaction.message.embeds[0].fields.slice(0, -1), // Todos os campos exceto o último (Status)
            {
              name: "📋 Status",
              value: `✅ **Pagamento Confirmado**\n👤 Confirmado por: ${user.username}`,
              inline: false
            }
          ]
        }

        return NextResponse.json({
          type: 7, // UPDATE_MESSAGE
          data: {
            embeds: [updatedEmbed],
            components: [] // Remove os botões
          }
        })
      }

      if (customId.startsWith('reject_payment_')) {
        // Extrair email do custom_id
        const email = customId.split('_').slice(2).join('_')
        
        // Atualizar a mensagem original
        const updatedEmbed = {
          ...interaction.message.embeds[0],
          color: 0xEF4444, // Vermelho
          fields: [
            ...interaction.message.embeds[0].fields.slice(0, -1), // Todos os campos exceto o último (Status)
            {
              name: "📋 Status",
              value: `❌ **Pagamento Rejeitado**\n👤 Rejeitado por: ${user.username}`,
              inline: false
            }
          ]
        }

        return NextResponse.json({
          type: 7, // UPDATE_MESSAGE
          data: {
            embeds: [updatedEmbed],
            components: [] // Remove os botões
          }
        })
      }
    }

    return NextResponse.json({ error: 'Interação não reconhecida' }, { status: 400 })

  } catch (error) {
    console.error('Erro ao processar interação do Discord:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}