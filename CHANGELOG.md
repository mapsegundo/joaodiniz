# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto segue [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [02/01/2025] - Versão 1.4.0

### ✨ Adicionado

- **Nova estrutura de planos** com modalidades mensais de cobrança
- **Plano Premium** (R$ 550,00/mês) - Acompanhamento completo médico + treinador
- **Seção de consulta avulsa** destacada separadamente
- Design responsivo aprimorado para a seção de planos
- feat: página de cursos médicos especializados totalmente redesenhada
- feat: integração de badges premium para cursos (🏆 Exclusivo para Médicos, 🎓 Padrão USP)
- feat: seção de credenciais com cards interativos e animações
- feat: design system atualizado com tokens CSS consistentes
- feat: animações avançadas (shimmer, pulse, hover effects)

### 🎨 Melhorado

- UI: redesign completo da página de cursos com layout moderno
- UX: centralização dos subtítulos dos cursos para melhor hierarquia visual
- design: cards de credenciais com grid responsivo (4 colunas → 2 → 1)
- perf: CSS otimizado com redução de 52% no tamanho (1068 → ~520 linhas)
- mobile: responsividade aprimorada em todos os breakpoints

### 🔧 Corrigido

- fix: remoção da linha verde decorativa abaixo do título "Referência em Educação Médica"
- fix: conflitos entre CSS inline e externo em badges
- fix: problemas de alinhamento em dispositivos móveis
- fix: limpeza de código não utilizado (50+ classes removidas)

### 🗑️ Removido

- Estilos órfãos e classes não utilizadas no CSS
- Elementos HTML não utilizados (credencial-pulse, team-member icons)
- CSS inline conflitante que causava problemas de layout

### 🔄 Alterado

- **Reestruturação completa dos planos de acompanhamento:**
  - Plano Premium: R$ 550,00/mês (Médico + Treinador) - antes "Plano Performance" R$ 1.185,00
  - Plano Black: R$ 450,00/mês (Apenas Médico) - antes R$ 1.185,00
  - Plano Básico: R$ 350,00/mês (Médico + Treinador Online) - antes "Plano Individual"
  - Consulta Médica Avulsa: mantida em R$ 600,00
- **Características dos novos planos:**
  - Premium: Suporte full-time WhatsApp, 2 consultas médicas + 2 consultas treinador a cada 60 dias
  - Black: Suporte full-time WhatsApp, 2 consultas médicas a cada 60 dias, bioimpedância incluída
  - Básico: Suporte via e-mail 1x/mês, 2 consultas online (médico + treinador) a cada 60 dias
- **Links de WhatsApp** atualizados para refletir os novos preços e planos

### 🎨 Design

- **CSS otimizado** da página de cursos com design system unificado
- **Badges premium** com ícones para credenciais dos cursos
- **Seção de credenciais** responsiva (4→2→1 colunas)
- **Animações avançadas** (shimmer, pulse, hover effects)
- **Remoção de elementos órfãos** e CSS conflitante

### 🐛 Corrigido

- **Badges dos cursos** agora estão centralizados corretamente
- **Elementos visuais** alinhados em todas as seções
- **CSS conflitante** removido (inline vs externo)
- **Linha verde decorativa** removida conforme solicitado
- **50+ classes CSS** não utilizadas removidas
- **Redução de 52%** no tamanho do CSS (1068 → ~520 linhas)

### 🚀 Performance

- **Cache-busting** implementado (v=3002) para CSS
- **Código otimizado** com remoção de dependências desnecessárias
- **Grid responsivo** aprimorado para melhor performance em dispositivos móveis

---

## [29/05/2025] - Versão 1.1.0

### ✨ Adicionado

- feat: alterar valores do plano individual para R$ 600,00 em 2x de R$ 330,00
- docs: criação do sistema de regras do Cursor para desenvolvimento estruturado
- docs: implementação de fluxo de commits padronizados
- docs: adicionar regras de implementação incremental e commits padronizados

### 📝 Alterado

- Plano Individual: valor alterado de R$ 800,00 (3x R$ 290) para R$ 600,00 (2x R$ 330)

---

## [Anterior] - Versão 1.0.0

### ✨ Adicionado

- Site completo do Dr. João Diniz - Medicina do Esporte
- Seção hero com apresentação profissional
- Seção de diferenciais da equipe médica
- Seção sobre o Dr. João Diniz
- Seção de planos de consultoria (Performance, Black, Individual)
- Seção de FAQ com perguntas frequentes
- Seção de contato com localização
- Integração com YouTube para vídeos shorts
- Botão flutuante do WhatsApp
- Design responsivo para todos os dispositivos
- Otimizações de performance e SEO
- Sistema de animações (AOS)

### 🎨 Design

- Interface moderna e profissional
- Cores baseadas na identidade médica
- Tipografia Montserrat para legibilidade
- Cards interativos com hover effects
- Gradientes e sombras suaves

### 📱 Responsividade

- Layout adaptável para mobile, tablet e desktop
- Menu hamburguer para dispositivos móveis
- Imagens otimizadas com lazy loading
- Performance otimizada para First Contentful Paint

### 🔧 Tecnologias

- HTML5 semântico
- CSS3 com custom properties
- JavaScript ES6+
- Font Awesome para ícones
- Google Fonts (Montserrat)
- Animate On Scroll (AOS)
- Schema.org para SEO
