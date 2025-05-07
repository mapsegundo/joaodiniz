/**
 * Script Principal do Site - Dr. João Diniz
 *
 * Gerencia as funcionalidades principais como animações,
 * navegação, interações de UI e responsividade.
 *
 * @author Marshall Paiva
 * @version 1.0.0
 */

(function () {
  "use strict";

  // Constantes
  const BREAKPOINTS = {
    mobile: 768,
  };

  // Suprimir erros de console não críticos relacionados a armazenamento em iframes
  function setupErrorHandling() {
    const originalConsoleError = console.error;
    console.error = function (...args) {
      // Não registrar erros de armazenamento do iframe
      if (
        args[0] &&
        typeof args[0] === "object" &&
        args[0].message &&
        args[0].message.includes("Access to storage is not allowed")
      ) {
        return;
      }
      originalConsoleError.apply(console, args);
    };
  }

  // Gerenciador das animações AOS (Animate On Scroll)
  const animationManager = {
    init() {
      if (typeof AOS === "undefined") {
        console.warn("AOS library not loaded");
        return;
      }

      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        mirror: false,
        disable: window.innerWidth < BREAKPOINTS.mobile,
        startEvent: "DOMContentLoaded",
        offset: 120,
      });

      window.addEventListener("resize", this.handleResize);
    },

    handleResize() {
      if (!AOS) return;

      // Desabilitar em dispositivos móveis para melhorar performance
      if (window.innerWidth < BREAKPOINTS.mobile) {
        AOS.refreshHard(); // Força refresh completo
      } else {
        AOS.refresh();
      }
    },
  };

  // Gerenciador do menu e navegação
  const navManager = {
    init() {
      this.cacheElements();
      this.bindEvents();
      this.setupScrollMonitor();
    },

    cacheElements() {
      this.elements = {
        header: document.getElementById("header"),
        mobileMenuBtn: document.querySelector(".mobile-menu-btn"),
        mobileMenu: document.querySelector(".main-menu"),
        mobileMenuOverlay: document.querySelector(".mobile-menu-overlay"),
        backToTopBtn: document.getElementById("back-to-top"),
        menuLinks: document.querySelectorAll('a[href^="#"]'),
      };
    },

    bindEvents() {
      // Menu Mobile Toggle
      if (this.elements.mobileMenuBtn) {
        this.elements.mobileMenuBtn.addEventListener(
          "click",
          this.toggleMobileMenu.bind(this)
        );
      }

      // Fechar menu ao clicar no overlay
      if (this.elements.mobileMenuOverlay) {
        this.elements.mobileMenuOverlay.addEventListener(
          "click",
          this.closeMobileMenu.bind(this)
        );
      }

      // Fechar menu ao clicar em um link
      if (this.elements.mobileMenu) {
        const menuLinks = this.elements.mobileMenu.querySelectorAll("a");
        menuLinks.forEach((link) => {
          link.addEventListener("click", this.closeMobileMenu.bind(this));
        });
      }

      // Back to Top button
      if (this.elements.backToTopBtn) {
        this.elements.backToTopBtn.addEventListener("click", this.scrollToTop);
        this.elements.backToTopBtn.addEventListener("keydown", (e) => {
          if (e.key === "Enter") this.scrollToTop();
        });
      }

      // Smooth Scroll para links internos
      this.elements.menuLinks.forEach((link) => {
        link.addEventListener("click", this.handleSmoothScroll.bind(this));
      });
    },

    setupScrollMonitor() {
      window.addEventListener("scroll", () => {
        this.updateHeaderOnScroll();
        this.updateBackToTopButton();
      });
    },

    updateHeaderOnScroll() {
      if (!this.elements.header) return;

      if (window.scrollY > 50) {
        this.elements.header.classList.add("scrolled");
      } else {
        this.elements.header.classList.remove("scrolled");
      }
    },

    updateBackToTopButton() {
      if (!this.elements.backToTopBtn) return;

      if (window.scrollY > 300) {
        this.elements.backToTopBtn.classList.add("show");
      } else {
        this.elements.backToTopBtn.classList.remove("show");
      }
    },

    toggleMobileMenu() {
      this.elements.mobileMenuBtn.classList.toggle("active");
      this.elements.mobileMenu.classList.toggle("active");
      this.elements.mobileMenuOverlay.classList.toggle("active");
      document.body.classList.toggle("menu-open");

      const isExpanded =
        this.elements.mobileMenuBtn.classList.contains("active");
      this.elements.mobileMenuBtn.setAttribute("aria-expanded", isExpanded);
      document.body.style.overflow = isExpanded ? "hidden" : "";
    },

    closeMobileMenu() {
      this.elements.mobileMenuBtn.classList.remove("active");
      this.elements.mobileMenu.classList.remove("active");
      this.elements.mobileMenuOverlay.classList.remove("active");
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "";
      this.elements.mobileMenuBtn.setAttribute("aria-expanded", "false");
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },

    handleSmoothScroll(e) {
      e.preventDefault();

      const targetId = e.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement && this.elements.header) {
        const headerHeight = this.elements.header.offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    },
  };

  // Gerenciador do FAQ accordion
  const faqManager = {
    init() {
      this.faqItems = document.querySelectorAll(".faq-item");
      if (!this.faqItems.length) return;

      this.setupAccordion();
    },

    setupAccordion() {
      this.faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        if (!question) return;

        // Adicionar role e aria-expanded iniciais
        question.setAttribute("role", "button");
        question.setAttribute("aria-expanded", "false");
        question.setAttribute("tabindex", "0");

        // Adicionar eventos
        question.addEventListener("click", () => this.toggleFaqItem(item));

        // Acessibilidade: suporte a teclado
        question.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            this.toggleFaqItem(item);
          }
        });
      });
    },

    toggleFaqItem(selectedItem) {
      const isActive = selectedItem.classList.contains("active");

      // Fechar todos os itens
      this.faqItems.forEach((item) => {
        item.classList.remove("active");
        const toggle = item.querySelector(".toggle-icon i");
        if (toggle) toggle.className = "fas fa-plus";

        const itemQuestion = item.querySelector(".faq-question");
        if (itemQuestion) itemQuestion.setAttribute("aria-expanded", "false");
      });

      // Abrir o item clicado (se não estivesse aberto)
      if (!isActive) {
        selectedItem.classList.add("active");
        const toggle = selectedItem.querySelector(".toggle-icon i");
        if (toggle) toggle.className = "fas fa-minus";

        const itemQuestion = selectedItem.querySelector(".faq-question");
        if (itemQuestion) itemQuestion.setAttribute("aria-expanded", "true");
      }
    },
  };

  // Gerenciador de acessibilidade do site
  const a11yManager = {
    init() {
      window.addEventListener("load", () => {
        this.setupExternalLinks();
      });
    },

    setupExternalLinks() {
      document.querySelectorAll('a[target="_blank"]').forEach((link) => {
        if (!link.getAttribute("aria-label")) {
          link.setAttribute(
            "aria-label",
            `${link.textContent} (abre em nova janela)`
          );
        }
      });
    },
  };

  // Inicialização
  document.addEventListener("DOMContentLoaded", () => {
    setupErrorHandling();
    animationManager.init();
    navManager.init();
    faqManager.init();
    a11yManager.init();
  });
})();
