/*
 * Script para otimização do carregamento da página
 * Inclui inicialização do AOS e funcionalidade de botão back-to-top
 */
document.addEventListener("DOMContentLoaded", function () {
  // Adicionar classe quando a imagem hero for carregada
  const heroImage = document.querySelector(".inicio-image img");
  if (heroImage) {
    heroImage.onload = function () {
      document.body.classList.add("hero-loaded");
    };
  }

  // Configurações ao carregar a página completamente
  window.addEventListener("load", function () {
    // Inicializar AOS (Animate on Scroll)
    if (typeof AOS.init === "function") {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        mirror: false,
        disable: window.innerWidth < 768 ? "mobile" : false,
      });
    }

    // Configurar botão Back-to-Top
    if (document.querySelector(".back-to-top")) {
      const backToTopBtn = document.querySelector(".back-to-top");

      const toggleBackToTopButton = () => {
        if (window.scrollY > 300) {
          backToTopBtn.classList.add("show");
        } else {
          backToTopBtn.classList.remove("show");
        }
      };

      window.addEventListener("scroll", toggleBackToTopButton);
      toggleBackToTopButton(); // Executa uma vez no carregamento

      backToTopBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  });
});
