# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto segue [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [02/01/2025] - Versão 1.4.0

### ✨ Adicionado

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
