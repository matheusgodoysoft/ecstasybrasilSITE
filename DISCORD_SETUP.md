# Configuração do Bot Discord para Botões Interativos

## Pré-requisitos

Para que os botões de confirmação/rejeição funcionem, você precisa configurar um Bot Discord. Siga os passos abaixo:

## 1. Criar um Bot Discord

1. Acesse o [Discord Developer Portal](https://discord.com/developers/applications)
2. Clique em "New Application"
3. Dê um nome para sua aplicação (ex: "Ecstasy Checkout Bot")
4. Vá para a aba "Bot" no menu lateral
5. Clique em "Add Bot"

## 2. Configurar Permissões

1. Na aba "Bot", copie o **Token** do bot (você precisará dele)
2. Na aba "OAuth2" > "URL Generator":
   - Selecione "bot" em Scopes
   - Selecione as seguintes permissões em Bot Permissions:
     - Send Messages
     - Use Slash Commands
     - Embed Links
3. Copie a URL gerada e use para adicionar o bot ao seu servidor

## 3. Configurar Interactions Endpoint

1. Na aba "General Information", encontre "Interactions Endpoint URL"
2. Configure para: `https://seu-dominio.vercel.app/api/discord-interactions`
3. **Importante**: O Discord irá verificar este endpoint, então certifique-se de que sua aplicação esteja deployada

## 4. Configurar Variáveis de Ambiente

Adicione as seguintes variáveis ao seu `.env.local`:

```env
# Webhook URL (já configurado)
DISCORD_WEBHOOK_URL=sua_webhook_url_aqui

# Token do Bot (necessário para interações)
DISCORD_BOT_TOKEN=seu_bot_token_aqui

# Public Key (necessário para verificar interações)
DISCORD_PUBLIC_KEY=sua_public_key_aqui
```

## 5. Instalar Dependência

Execute o comando para instalar a biblioteca de verificação do Discord:

```bash
npm install discord-interactions
```

## 6. Configuração no Vercel

Quando fizer deploy no Vercel, adicione todas as variáveis de ambiente:
- `DISCORD_WEBHOOK_URL`
- `DISCORD_BOT_TOKEN`
- `DISCORD_PUBLIC_KEY`

## Como Funciona

1. **Checkout**: Usuário preenche o formulário e clica em "Finalizar Compra"
2. **Webhook**: Sistema envia embed para Discord com botões "Confirmar" e "Rejeitar"
3. **Interação**: Admin clica em um dos botões no Discord
4. **Processamento**: API `/api/discord-interactions` processa a ação
5. **Atualização**: Embed é atualizado com o status (Confirmado/Rejeitado)

## Notas Importantes

- Os botões só funcionam com um Bot Discord configurado
- Para desenvolvimento local, você pode usar ngrok para expor sua aplicação
- A verificação de assinatura está comentada no código para desenvolvimento
- Em produção, descomente a verificação de assinatura para segurança

## Troubleshooting

Se os botões não aparecerem:
1. Verifique se o webhook URL está correto
2. Confirme se o bot tem permissões no servidor
3. Verifique os logs do console para erros
4. Teste primeiro com webhook simples antes de adicionar interações