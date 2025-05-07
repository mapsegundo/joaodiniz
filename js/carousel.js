/**
 * Carrossel Responsivo para Vídeos
 *
 * Este componente implementa um carrossel horizontal que é ativado apenas em
 * dispositivos com tela menor que 992px de largura. Em telas maiores,
 * exibe uma grade normal.
 *
 * @author Marshall Paiva
 * @version 1.0.0
 */

(function () {
  "use strict";

  // Constantes
  const BREAKPOINT = 992;
  const DEBOUNCE_DELAY = 100;
  const SCROLL_ANIMATION_DURATION = 300;

  // Esperar pelo carregamento do DOM
  document.addEventListener("DOMContentLoaded", initCarousel);

  /**
   * Inicializa o carrossel e os eventos relacionados
   */
  function initCarousel() {
    // Elementos principais
    const videosSection = document.getElementById("videos");
    if (!videosSection) return;

    const shortsGrid = videosSection.querySelector(".shorts-grid");
    if (!shortsGrid) return;

    // Estado do carrossel
    const state = {
      isCarouselActive: false,
      isDragging: false,
      touchData: {
        startX: 0,
        endX: 0,
      },
      dragData: {
        startX: 0,
        scrollLeft: 0,
      },
      scrollTimer: null,
    };

    // Métodos públicos do carrossel
    const carousel = {
      /**
       * Configura o carrossel com base na largura da tela
       */
      setup() {
        const shouldActivateCarousel = window.innerWidth < BREAKPOINT;

        // Se o estado não mudou, não fazemos nada
        if (shouldActivateCarousel === state.isCarouselActive) return;

        shouldActivateCarousel ? activateCarousel() : deactivateCarousel();
        state.isCarouselActive = shouldActivateCarousel;
      },

      /**
       * Atualiza indicadores de paginação
       * @param {number} activeIndex - Índice do item ativo
       */
      updateIndicators(activeIndex) {
        const indicators = videosSection.querySelectorAll(".indicator-dot");
        indicators.forEach((dot, index) => {
          dot.classList.toggle("active", index === activeIndex);
        });
      },

      /**
       * Atualiza o item ativo do carrossel
       * @param {HTMLElement} newActiveItem - O novo item ativo
       */
      updateActiveItem(newActiveItem) {
        if (!newActiveItem) return;

        const items = shortsGrid.querySelectorAll(".shorts-item");
        items.forEach((item) => item.classList.remove("active"));
        newActiveItem.classList.add("active");

        // Centraliza o item ativo com animação suave
        const targetScrollLeft =
          newActiveItem.offsetLeft -
          (shortsGrid.offsetWidth - newActiveItem.offsetWidth) / 2;

        // Usa API moderna ou fallback para navegadores antigos
        if ("scrollBehavior" in document.documentElement.style) {
          shortsGrid.scrollTo({
            left: targetScrollLeft,
            behavior: "smooth",
          });
        } else {
          animateScroll(targetScrollLeft);
        }
      },
    };

    // Métodos de controle do carrossel

    /**
     * Ativa o carrossel para dispositivos móveis
     */
    function activateCarousel() {
      shortsGrid.classList.add("carousel-active");
      createIndicators();
      attachEventListeners();
      setupInitialActiveItem();
    }

    /**
     * Desativa o carrossel e restaura a visualização em grade
     */
    function deactivateCarousel() {
      shortsGrid.classList.remove("carousel-active");
      resetItems();
      removeIndicators();
      detachEventListeners();
    }

    /**
     * Cria indicadores de paginação
     */
    function createIndicators() {
      if (videosSection.querySelector(".carousel-indicators")) return;

      const items = shortsGrid.querySelectorAll(".shorts-item");
      if (items.length === 0) return;

      const indicators = document.createElement("div");
      indicators.className = "carousel-indicators";

      items.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.className = "indicator-dot";
        if (index === 0) dot.classList.add("active");

        dot.addEventListener("click", () => {
          carousel.updateActiveItem(items[index]);
          carousel.updateIndicators(index);
        });

        indicators.appendChild(dot);
      });

      shortsGrid.parentNode.insertBefore(indicators, shortsGrid.nextSibling);
    }

    /**
     * Gerencia eventos de rolagem do carrossel
     */
    function handleScroll() {
      // Usa debounce para não sobrecarregar a renderização
      if (state.scrollTimer) clearTimeout(state.scrollTimer);

      state.scrollTimer = setTimeout(() => {
        if (!state.isDragging) {
          findAndActivateClosestItem();
        }
      }, DEBOUNCE_DELAY);
    }

    /**
     * Identifica e ativa o item mais próximo do centro
     */
    function findAndActivateClosestItem() {
      const items = shortsGrid.querySelectorAll(".shorts-item");
      const centerX = shortsGrid.scrollLeft + shortsGrid.offsetWidth / 2;

      let closestItem = null;
      let closestDistance = Infinity;

      items.forEach((item) => {
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const distance = Math.abs(itemCenter - centerX);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestItem = item;
        }
      });

      if (closestItem) {
        const activeIndex = Array.from(items).indexOf(closestItem);
        carousel.updateIndicators(activeIndex);

        // Evita remoção/adição desnecessária da classe se já for o item ativo
        if (!closestItem.classList.contains("active")) {
          items.forEach((item) => item.classList.remove("active"));
          closestItem.classList.add("active");
        }
      }
    }

    /**
     * Atribui o primeiro item como ativo inicialmente
     */
    function setupInitialActiveItem() {
      const items = shortsGrid.querySelectorAll(".shorts-item");
      if (items.length > 0) {
        items[0].classList.add("active");
        carousel.updateIndicators(0);
      }
    }

    /**
     * Limpa alterações nos itens do carrossel
     */
    function resetItems() {
      const items = shortsGrid.querySelectorAll(".shorts-item");
      items.forEach((item) => {
        item.classList.remove("active");
        item.removeAttribute("style");
      });
    }

    /**
     * Remove indicadores de paginação
     */
    function removeIndicators() {
      const indicators = videosSection.querySelector(".carousel-indicators");
      if (indicators) {
        indicators.remove();
      }
    }

    /**
     * Inicia arrastar com mouse
     * @param {Event} e - Evento do mouse
     */
    function startDrag(e) {
      // Prevenimos o comportamento padrão apenas para o elemento alvo correto
      if (shortsGrid.contains(e.target)) {
        e.preventDefault();
        e.stopPropagation();
        state.isDragging = true;
        state.dragData.startX = e.pageX - shortsGrid.offsetLeft;
        state.dragData.scrollLeft = shortsGrid.scrollLeft;
        shortsGrid.classList.add("grabbing");
      }
    }

    /**
     * Processa arrastar com mouse
     * @param {Event} e - Evento do mouse
     */
    function drag(e) {
      if (!state.isDragging) return;

      e.preventDefault();
      e.stopPropagation();
      const x = e.pageX - shortsGrid.offsetLeft;
      const walk = x - state.dragData.startX;
      shortsGrid.scrollLeft = state.dragData.scrollLeft - walk;
    }

    /**
     * Finaliza arrastar com mouse
     */
    function endDrag() {
      if (!state.isDragging) return;

      state.isDragging = false;
      shortsGrid.classList.remove("grabbing");
      findAndActivateClosestItem();
    }

    /**
     * Processa início de toque em tela
     * @param {Event} event - Evento de toque
     */
    function handleTouchStart(event) {
      // Verificamos se o toque ocorreu dentro do carrossel
      if (shortsGrid.contains(event.target)) {
        // Não podemos usar preventDefault aqui porque o evento é passivo
        event.stopPropagation();
        state.touchData.startX = event.changedTouches[0].screenX;
        state.dragData.startX = event.touches[0].pageX - shortsGrid.offsetLeft;
        state.dragData.scrollLeft = shortsGrid.scrollLeft;
        shortsGrid.classList.add("grabbing");
      }
    }

    /**
     * Processa movimento de toque em tela
     * @param {Event} event - Evento de toque
     */
    function handleTouchMove(event) {
      // Verificamos se estamos em um arrasto ativo e se o elemento alvo faz parte do carrossel
      if (shortsGrid.contains(event.target)) {
        event.stopPropagation();
        const x = event.touches[0].pageX - shortsGrid.offsetLeft;
        const walk = x - state.dragData.startX;
        shortsGrid.scrollLeft = state.dragData.scrollLeft - walk;
      }
    }

    /**
     * Processa fim de toque em tela
     * @param {Event} event - Evento de toque
     */
    function handleTouchEnd(event) {
      if (shortsGrid.contains(event.target)) {
        event.stopPropagation();
        state.touchData.endX = event.changedTouches[0].screenX;
        shortsGrid.classList.remove("grabbing");
        findAndActivateClosestItem();
      }
    }

    /**
     * Anima a rolagem suavemente (para navegadores sem suporte a scrollBehavior)
     * @param {number} targetPosition - Posição de destino para rolagem
     */
    function animateScroll(targetPosition) {
      const startPosition = shortsGrid.scrollLeft;
      const distance = targetPosition - startPosition;
      let startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / SCROLL_ANIMATION_DURATION, 1);
        const easeProgress = 0.5 - 0.5 * Math.cos(progress * Math.PI);

        shortsGrid.scrollLeft = startPosition + distance * easeProgress;

        if (elapsed < SCROLL_ANIMATION_DURATION) {
          window.requestAnimationFrame(step);
        }
      }

      window.requestAnimationFrame(step);
    }

    /**
     * Adiciona os ouvintes de eventos necessários
     */
    function attachEventListeners() {
      // Usar delegação de eventos para capturar apenas eventos dentro do carrossel
      shortsGrid.addEventListener("mousedown", startDrag, { passive: false });
      shortsGrid.addEventListener("touchstart", handleTouchStart, {
        passive: true, // Mantém passive para performance
      });
      shortsGrid.addEventListener("touchend", handleTouchEnd, {
        passive: true,
      });
      shortsGrid.addEventListener("touchmove", handleTouchMove, {
        passive: true,
      });
      shortsGrid.addEventListener("scroll", handleScroll);

      // Eventos globais para garantir que o arrasto continua fora do elemento
      window.addEventListener("mouseup", endDrag);
      window.addEventListener("mousemove", drag, { passive: false });
    }

    /**
     * Remove os ouvintes de eventos
     */
    function detachEventListeners() {
      shortsGrid.removeEventListener("mousedown", startDrag);
      shortsGrid.removeEventListener("touchstart", handleTouchStart);
      shortsGrid.removeEventListener("touchend", handleTouchEnd);
      shortsGrid.removeEventListener("touchmove", handleTouchMove);
      shortsGrid.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mouseup", endDrag);
      window.removeEventListener("mousemove", drag);
    }

    // Observa alterações nos vídeos para reconfigurar o carrossel quando necessário
    function observeContentChanges() {
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
            // Atraso para garantir que o DOM esteja atualizado
            setTimeout(carousel.setup, 100);
            break;
          }
        }
      });

      observer.observe(shortsGrid, { childList: true });

      // Desconectar observer se a página for descarregada
      window.addEventListener("beforeunload", () => observer.disconnect());
    }

    // Monitorar redimensionamento da janela para ativar/desativar o carrossel
    window.addEventListener("resize", () => {
      // Usar requestAnimationFrame para melhorar performance durante redimensionamento
      requestAnimationFrame(carousel.setup);
    });

    // Inicialização
    carousel.setup();
    observeContentChanges();
  }
})();
