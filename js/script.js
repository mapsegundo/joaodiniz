// Esperar pelo carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
  // Inicializar AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
    disable: "mobile",
  });

  // Refresh AOS ao redimensionar a janela
  window.addEventListener("resize", function () {
    AOS.refresh();
  });

  // Variáveis de elementos principais
  const header = document.getElementById("header");
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".main-menu");
  const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
  const backToTopBtn = document.getElementById("back-to-top");
  const faqItems = document.querySelectorAll(".faq-item");
  const menuLinks = document.querySelectorAll('a[href^="#"]');

  // Menu Fixed no Scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Exibir/Ocultar botão "Back to Top"
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  // Menu Mobile Toggle
  mobileMenuBtn.addEventListener("click", function () {
    mobileMenuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    mobileMenuOverlay.classList.toggle("active");
    document.body.classList.toggle("menu-open");

    // Acessibilidade: alterar aria-expanded
    const isExpanded = mobileMenuBtn.classList.contains("active");
    mobileMenuBtn.setAttribute("aria-expanded", isExpanded);

    // Impedir rolagem de página quando menu estiver aberto
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  // Fechar menu ao clicar no overlay
  mobileMenuOverlay.addEventListener("click", function () {
    mobileMenuBtn.classList.remove("active");
    mobileMenu.classList.remove("active");
    mobileMenuOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");
    document.body.style.overflow = "";
    mobileMenuBtn.setAttribute("aria-expanded", false);
  });

  // Fechar menu ao clicar em um link
  document.querySelectorAll(".main-menu a").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenuBtn.classList.remove("active");
      mobileMenu.classList.remove("active");
      mobileMenuOverlay.classList.remove("active");
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "";
      mobileMenuBtn.setAttribute("aria-expanded", false);
    });
  });

  // Back to Top button
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Acessibilidade: permitir uso do "Enter" para ativar o botão de voltar ao topo
  backToTopBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });

  // FAQ Accordion
  faqItems.forEach(function (item) {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function () {
      const isActive = item.classList.contains("active");

      // Fechar todos os itens
      faqItems.forEach(function (faqItem) {
        faqItem.classList.remove("active");
        const toggle = faqItem.querySelector(".toggle-icon i");
        toggle.className = "fas fa-plus";
      });

      // Abrir o item clicado (se não estivesse aberto)
      if (!isActive) {
        item.classList.add("active");
        const toggle = item.querySelector(".toggle-icon i");
        toggle.className = "fas fa-minus";
      }

      // Acessibilidade: atualizar aria-expanded
      faqItems.forEach(function (faqItem) {
        const expanded = faqItem.classList.contains("active");
        faqItem
          .querySelector(".faq-question")
          .setAttribute("aria-expanded", expanded);
      });
    });

    // Adicionar role e aria-expanded iniciais
    question.setAttribute("role", "button");
    question.setAttribute("aria-expanded", "false");
    question.setAttribute("tabindex", "0");

    // Acessibilidade: suporte a teclado para o FAQ
    question.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        question.click();
      }
    });
  });

  // Smooth Scroll para links internos
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Acessibilidade: Adicionar atributos para leitores de tela
  window.addEventListener("load", function () {
    document.querySelectorAll('a[target="_blank"]').forEach((link) => {
      if (!link.getAttribute("aria-label")) {
        link.setAttribute(
          "aria-label",
          link.textContent + " (abre em nova janela)"
        );
      }
    });
  });
});
