/**
 * Carregador de Vídeos Shorts do YouTube
 *
 * Módulo para carregar vídeos curtos do canal do YouTube do Dr. João Diniz
 * de forma otimizada e moderna.
 *
 * @author Marshall Paiva
 * @version 1.0.0
 */

(function () {
  "use strict";

  // Configurações
  const CONFIG = {
    channelUsername: "dr.joaodiniz",
    maxShorts: 3,
  };

  // Lista de shorts recentes
  const SHORTS_DATA = [
    {
      id: "WV_snku7MY8",
      title: "Queda de Cabelo: O que você precisa saber",
      description:
        "Descubra as causas e soluções para a queda de cabelo com o Dr. João Diniz. Informações valiosas para manter seus cabelos saudáveis.",
    },
    {
      id: "AbZ_fKNj2rE",
      title: "Alerta: Esteroides e seus efeitos nos rins",
      description:
        "O Dr. João Diniz revela os riscos reais do uso de esteroides e seus impactos na saúde renal. Informação que pode salvar vidas.",
    },
    {
      id: "Wl09gVuMgWQ",
      title: "Hipertrofia: O caminho certo para ganhar massa",
      description:
        "Aprenda as técnicas corretas de hipertrofia com o Dr. João Diniz. Dicas profissionais para maximizar seus resultados de forma segura.",
    },
  ];

  /**
   * Inicializa o carregamento dos shorts
   */
  function init() {
    document.addEventListener("DOMContentLoaded", () => {
      renderShorts(SHORTS_DATA);
    });
  }

  /**
   * Renderiza os shorts na seção apropriada
   * @param {Array<Object>} shorts - Array de dados dos shorts
   */
  function renderShorts(shorts) {
    const shortsGrid = document.querySelector(".shorts-grid");
    if (!shortsGrid) return;

    if (!shorts || shorts.length === 0) {
      renderErrorMessage(shortsGrid);
      return;
    }

    shortsGrid.innerHTML = generateShortsHTML(shorts);
  }

  /**
   * Gera o HTML para os shorts
   * @param {Array<Object>} shorts - Array de dados dos shorts
   * @returns {string} HTML dos shorts formatado
   */
  function generateShortsHTML(shorts) {
    return shorts
      .map((short, index) => createShortItemHTML(short, index))
      .join("");
  }

  /**
   * Cria o HTML para um item de short individual
   * @param {Object} short - Dados do short
   * @param {number} index - Índice para o delay da animação
   * @returns {string} HTML formatado do item
   */
  function createShortItemHTML(short, index) {
    const delay = index * 100;

    return `
      <div class="shorts-item" data-aos="fade-up" data-aos-delay="${delay}">
        <div class="shorts-video">
          <iframe
            src="https://www.youtube.com/embed/${short.id}"
            title="${short.title}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
        <div class="shorts-info">
          <h3>${short.title}</h3>
          <p>${short.description}</p>
        </div>
      </div>
    `;
  }

  /**
   * Renderiza uma mensagem de erro quando os shorts não podem ser carregados
   * @param {HTMLElement} container - Elemento container para a mensagem
   */
  function renderErrorMessage(container) {
    container.innerHTML = `
      <div class="shorts-error">
        <i class="fas fa-exclamation-circle"></i>
        <p>Não foi possível carregar os shorts neste momento.</p>
        <p>Por favor, visite nosso canal no YouTube para ver todos os shorts.</p>
        <a href="https://www.youtube.com/@${CONFIG.channelUsername}/shorts" class="btn btn-secondary" target="_blank" rel="noopener">
          <i class="fab fa-youtube"></i> Ver shorts no YouTube
        </a>
      </div>
    `;
  }

  // Iniciar o módulo
  init();
})();
