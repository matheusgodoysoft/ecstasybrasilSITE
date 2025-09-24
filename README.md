# Ecstasy Clone - Site Replicado

Este projeto é uma replicação fiel do site https://ecstasy.zip/ baseada em análise técnica detalhada usando Playwright.

## 🚀 Tecnologias Utilizadas

- **Next.js 14+** com App Router
- **TypeScript** para tipagem estática
- **Tailwind CSS v4** para estilização
- **React 19** como framework base

## 📋 Funcionalidades Implementadas

### ✅ Estrutura Completa
- **Layout responsivo** com navegação e footer
- **Sistema dark mode** nativo
- **Roteamento** com App Router (home, tos, dashboard)

### ✅ Componentes UI
- **Button** - Botão customizável com variantes
- **Card** - Cards para conteúdo estruturado
- **Tabs** - Sistema de abas para preços
- **Accordion** - FAQ expansível

### ✅ Seções Principais
- **Hero Section** - Seção principal com gradientes e CTA
- **Features Section** - Apresentação das funcionalidades
- **Pricing Section** - Planos com tabs (1 Week, 1 Month, 3 Months)
- **FAQ Section** - Perguntas frequentes com accordion

### ✅ Páginas Adicionais
- **Terms of Service** - Página de termos de uso
- **Dashboard** - Painel administrativo mockado

## 🎨 Design System

### Cores Personalizadas
```css
/* Light Mode */
--background: #ffffff
--foreground: #171717
--primary: #000000
--secondary: #f5f5f5

/* Dark Mode */
--background: #000000
--foreground: #ffffff
--primary: #ffffff
--secondary: #1a1a1a
```

### Efeitos Visuais
- **Gradientes** purple-to-blue em elementos principais
- **Backdrop blur** em cards e componentes
- **Animações** de hover e transição
- **Glassmorphism** effects
- **Particle-like** visual elements

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── (home)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── tos/
│   │       └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── features-section.tsx
│   │   ├── pricing-section.tsx
│   │   └── faq-section.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── tabs.tsx
│   │   └── accordion.tsx
│   ├── navigation.tsx
│   └── footer.tsx
└── lib/
    └── utils.ts
```

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Build para produção:**
   ```bash
   npm run build
   ```

4. **Iniciar produção:**
   ```bash
   npm start
   ```

## 📊 Comparação com o Original

### ✅ Fidelidade Visual
- [x] Layout idêntico ao original
- [x] Cores e tipografia matching
- [x] Componentes funcionais (tabs, accordion)
- [x] Responsividade completa
- [x] Dark mode nativo

### ✅ Funcionalidades
- [x] Navegação entre páginas
- [x] Sistema de preços com tabs
- [x] FAQ interativo
- [x] Links para redes sociais
- [x] Dashboard mockado

### ✅ Performance
- [x] Next.js 14+ otimizado
- [x] Tailwind CSS v4
- [x] TypeScript para segurança
- [x] Componentes reutilizáveis
- [x] SEO otimizado

## 📝 Notas Técnicas

- **Baseado na análise técnica** documentada em `TECH_ANALYSIS_ECSTASY.md`
- **Não utiliza Shadcn/UI ou Magic UI** (conforme identificado na análise)
- **Sistema customizado** baseado em Tailwind CSS
- **Componentes próprios** seguindo padrões modernos do React
- **Otimizado para performance** com Next.js 14+

## 🎯 Próximos Passos (Opcionais)

- [ ] Adicionar animações de partículas com Three.js
- [ ] Implementar sistema de autenticação real
- [ ] Conectar com API backend
- [ ] Adicionar mais micro-interações
- [ ] Implementar sistema de pagamentos

---

**Desenvolvido com base na análise técnica detalhada do site original usando Playwright Browser Automation.**