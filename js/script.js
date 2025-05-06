// ==== VARIÁVEIS GLOBAIS ====
const header = document.getElementById("header");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mainMenu = document.querySelector(".main-menu");
const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
const faqItems = document.querySelectorAll(".faq-item");
const backToTop = document.getElementById("back-to-top");

// ==== EVENTO PARA CARREGAR O DOM ====
document.addEventListener("DOMContentLoaded", function () {
  initApp();
});

// ==== INICIALIZAR APLICAÇÃO ====
function initApp() {
  setupMobileMenu();
  setupScrollEvents();
  setupFaqAccordion();
  setupSmoothScroll();
  setActiveMenu();
}

// ==== CONFIGURAÇÃO DO MENU MOBILE ====
function setupMobileMenu() {
  // Abrir/Fechar o menu ao clicar no botão
  mobileMenuBtn.addEventListener("click", toggleMobileMenu);

  // Fechar o menu ao clicar no overlay
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener("click", closeMobileMenu);
  }

  // Fechar menu ao clicar em um link
  const menuLinks = mainMenu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        closeMobileMenu();
      }
    });
  });

  // Fechar menu ao redimensionar para desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && mainMenu.classList.contains("active")) {
      closeMobileMenu();
    }
  });

  // Prevenir scroll quando menu está aberto
  document.addEventListener("scroll", function () {
    if (mainMenu.classList.contains("active") && window.innerWidth <= 768) {
      document.body.style.overflowY = "hidden";
    }
  });
}

function toggleMobileMenu() {
  mainMenu.classList.toggle("active");
  mobileMenuBtn.classList.toggle("active");
  if (mobileMenuOverlay) {
    mobileMenuOverlay.classList.toggle("active");
  }

  // Controlar scroll na página
  if (mainMenu.classList.contains("active")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
}

function closeMobileMenu() {
  mainMenu.classList.remove("active");
  mobileMenuBtn.classList.remove("active");
  if (mobileMenuOverlay) {
    mobileMenuOverlay.classList.remove("active");
  }
  document.body.style.overflowY = "auto";
}

// ==== EVENTOS DE SCROLL ====
function setupScrollEvents() {
  // Header scroll effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
      backToTop.classList.add("show");
    } else {
      header.classList.remove("scrolled");
      backToTop.classList.remove("show");
    }
  });

  // Botão Voltar ao Topo
  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ==== SETUP DO ACCORDION FAQ ====
function setupFaqAccordion() {
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function () {
      // Verifica se o item clicado já está ativo
      const isActive = item.classList.contains("active");

      // Fecha todos os itens abertos
      faqItems.forEach((faqItem) => {
        faqItem.classList.remove("active");
      });

      // Se o item clicado não estava aberto, abre-o
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

// ==== ROLAGEM SUAVE PARA LINKS DE ÂNCORA ====
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");

      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerOffset = header.offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// ==== ADICIONAR CLASSE ACTIVE NO LINK DO MENU ATUAL ====
function setActiveMenu() {
  const sections = document.querySelectorAll("section[id]");
  const scrollPosition = window.scrollY + 200; // Offset para melhor UX

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - header.offsetHeight;
    const sectionBottom = sectionTop + section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      document.querySelectorAll(".main-menu a").forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// Executar setActiveMenu no scroll
window.addEventListener("scroll", setActiveMenu);

// ==== ANIMAÇÃO DE ENTRADA (OPCIONAL) ====
// Esta função adiciona animações básicas aos elementos quando eles entram na viewport
function setupScrollAnimations() {
  const elementsToAnimate = document.querySelectorAll(
    ".fade-in, .slide-up, .slide-right"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
}
