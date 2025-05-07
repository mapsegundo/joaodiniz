# Site Dr. João Diniz - Medicina do Esporte

![Logo Dr. João Diniz](img/logo-dr-joao-diniz.png)

Site profissional para o Dr. João Diniz, médico especialista em medicina do esporte, emagrecimento, hipertrofia e rejuvenescimento masculino.

**🌐 Site publicado: [joaodiniz.vercel.app](https://joaodiniz.vercel.app/)**

## Visão Geral

Este site foi desenvolvido como landing page de alta conversão para o Dr. João Diniz, apresentando seus serviços de consultoria médica especializada em transformação corporal. O design é moderno, responsivo e otimizado para gerar leads e agendamentos de consultas.

## Tecnologias Utilizadas

- HTML5 semântico com estrutura otimizada para acessibilidade
- CSS3 (variáveis, Flexbox, Grid e animações personalizadas)
- JavaScript vanilla para interações e otimizações
- Marcação estruturada Schema.org para médicos (JSON-LD)
- Metadados Open Graph e Twitter Cards para compartilhamento
- FontAwesome para ícones
- Google Fonts (Montserrat)
- Design totalmente responsivo (mobile-first)
- Otimizações avançadas para SEO e performance
- Lazy loading para imagens e recursos pesados
- AOS (Animate On Scroll) para animações elegantes durante a rolagem
- Compatível com todos os navegadores modernos

## Estrutura do Site

O site está organizado nas seguintes seções:

1. **Header** - Navegação principal e CTA de agendamento
2. **Início** - Hero section com proposta de valor principal
3. **Vídeos** - Carrossel responsivo de shorts do YouTube do Dr. João Diniz
4. **Diferenciais** - Equipe multidisciplinar (médico, nutricionista, treinador)
5. **Números** - Estatísticas e resultados comprovados
6. **Sobre** - História profissional e credenciais do Dr. João Diniz
7. **Planos** - Serviços oferecidos (Ultra Men, Consultoria Black, Plano Individual)
8. **FAQ** - Perguntas frequentes e respostas
9. **Contato** - Informações de contato, localização e redes sociais
10. **Footer** - Links rápidos, contato e credenciais

## Recursos Interativos

- Menu mobile responsivo com animação e navegação acessível
- Carrossel de vídeos do YouTube responsivo:
  - Grade de vídeos para telas grandes
  - Carrossel com navegação por arraste em dispositivos móveis
  - Indicadores de paginação e detecção do elemento centralizado
  - Transições suaves e otimizadas para performance
- Sistema de accordion para FAQ com suporte a teclado
- Rolagem suave para navegação interna
- Botão de "Voltar ao topo" com animação
- Botão flutuante de WhatsApp com efeitos visuais para aumentar conversão
- Integração com Google Maps com carregamento otimizado (lazy loading)
- Links diretos para WhatsApp com mensagens pré-formatadas
- Animações AOS (Animate On Scroll) nas seções principais do site:
  - Efeitos fade-in, fade-up, zoom-in e flip em diferentes elementos
  - Animações com delays escalonados para criar fluxo visual
  - Configuração adaptada para dispositivos móveis (desabilitada para melhorar performance)

## Otimizações para SEO

- Metadados completos (title, description, keywords, robots)
- Arquivo robots.txt configurado para indexação otimizada
- Sitemap XML para facilitar a indexação por mecanismos de busca
- Schema.org (JSON-LD) para marcação estruturada de médico/profissional
- URLs canônicas para evitar conteúdo duplicado
- Controle de cache para recursos estáticos (configurado para 7 dias)
- Tags semânticas HTML5 utilizadas corretamente
- Atributos alt descritivos em todas as imagens
- Compatibilidade com protocolo HTTP e HTTPS
- Correção de URLs para ambientes de teste e produção

## Compartilhamento Social

- Metadados Open Graph para compartilhamento no Facebook e LinkedIn
- Twitter Cards para compartilhamento no Twitter
- Imagens, títulos e descrições otimizadas para compartilhamento
- Configuração de locale e site_name para consistência da marca

## Acessibilidade

- Marcações ARIA para elementos interativos (aria-label, aria-expanded, role)
- Suporte completo a navegação por teclado
- Foco visual para navegação sem mouse
- Atributos title em iframes e elementos complexos
- Contraste de cores adequado para leitura
- Textos alternativos para imagens e ícones
- Navegação por leitores de tela facilitada

## Otimizações de Performance

- **Otimização avançada de imagens** (compressão da logomarca e imagens principais)
- **Minificação de JavaScript** com scripts otimizados
- **Carregamento assíncrono de CSS** com fallback para não bloquear renderização
- **Carregamento diferido de recursos** não críticos (media="print" onload)
- **DNS prefetch** para domínios externos (Google Fonts, FontAwesome, CDNs)
- Lazy loading nativo para todas imagens abaixo da dobra
- Carregamento otimizado do iframe do Google Maps com sandbox controlado
- Atributo defer em scripts para não bloquear renderização
- Configuração otimizada da biblioteca AOS para dispositivos móveis
- Controle de erro para problemas de acesso ao armazenamento em iframes
- Cache estendido (7 dias) para melhorar performance em visitas repetidas
- Preload apenas para recursos críticos acima da dobra
- Dimensões explícitas em imagens para evitar layout shifts

## Identidade Visual

A identidade visual segue um padrão profissional da área médica:

- Cor principal: Verde turquesa (#14b8a6)
- Cor secundária: Azul (#2563eb)
- Gradientes sutis para destacar elementos importantes
- Tipografia principal: Montserrat (300 a 800)
- Ícones: FontAwesome 6.4.0

## Estrutura de Arquivos

```
/
├── index.html          # Arquivo principal
├── css/
│   ├── style.css       # Estilos principais
│   └── responsive.css  # Estilos responsivos
├── js/
│   ├── script.js       # Funcionalidades JavaScript principais
│   ├── youtube-shorts.js    # Carregador de vídeos YouTube
│   └── carousel.js # Carrossel responsivo para vídeos
├── build/
│   └── js/
│       ├── script.min.js      # JavaScript principal minificado
│       ├── youtube-shorts.min.js   # Script de vídeos minificado
│       └── carousel.min.js    # Script de carrossel minificado
├── img/                # Imagens e recursos visuais
│   ├── logo-dr-joao-diniz.png  # Logo principal (otimizada)
│   ├── dr-joao-competicao.jpg  # Foto da seção Sobre
│   ├── dr-joao-diniz.png       # Imagem principal
│   └── favicon.ico             # Favicon do site
├── robots.txt          # Instruções para crawlers
├── sitemap.xml         # Mapa do site para indexação
├── .gitignore          # Configuração de exclusões para Git
└── README.md           # Este arquivo
```

## Instalação e Desenvolvimento

1. Clone este repositório:
   ```bash
   git clone https://github.com/mapsegundo/joaodiniz.git
   ```
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Para desenvolvimento, edite os arquivos JS na pasta `/js`
4. Os arquivos minificados ficam em `/build/js` (gerados com Node.js)

## Otimizações Recentes

- **Maio 2025:** Correção do comportamento de arrasto no carrossel para evitar interferência com o resto da página
- **Maio 2025:** Implementação de carrossel responsivo de vídeos do YouTube com otimizações de performance
- **Maio 2025:** Reorganização da estrutura do site para melhorar fluxo comercial
- **Maio 2025:** Minificação avançada de JavaScript com separação em módulos
- **Maio 2025:** Otimização completa de SEO com URLs relativas para compatibilidade HTTP/HTTPS
- **Maio 2025:** Refatoração do código JavaScript com padrões de Clean Code
- **Maio 2025:** Implementação de otimizações avançadas de performance (lazy loading, defer, prefetch)
- **Maio 2025:** Otimização de imagens para carregamento mais rápido
- **Maio 2025:** Aprimoramento de animações AOS para melhor desempenho em dispositivos móveis
- **Maio 2025:** Correção de problemas de armazenamento em iframes para evitar erros de console

## Melhorias Futuras

- Implementar backend para processamento do formulário de contato
- Adicionar galeria de depoimentos e resultados de pacientes
- Criar seção de blog para conteúdo educativo sobre medicina esportiva
- Implementar sistema de agendamento online integrado
- Implementar PWA (Progressive Web App) para instalação em dispositivos
- Automatizar processo de build e minificação

## Autor

- [Marshall Paiva](https://www.linkedin.com/in/marshallpaiva/) - Design e Desenvolvimento

## Licença

© 2025 Dr. João Diniz - Medicina do Esporte | CRM-SP 255.027. Todos os direitos reservados.
