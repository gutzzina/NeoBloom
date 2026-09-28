/* ==========================================================================
   NEOBLOOM · script.js  ·  JavaScript vanilla, sin librerías
   --------------------------------------------------------------------------
   QUÉ HACE, EN ORDEN:
     1 · Parallax     → mueve los elementos con [data-parallax] al scrollear
     2 · Reveal       → hace aparecer los elementos con [data-reveal]
     3 · Nav          → vuelve la barra de vidrio cuando bajás
     4 · Accesibilidad→ respeta "reducir movimiento" del sistema operativo

   Todo está encapsulado en una IIFE para no ensuciar el ámbito global.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     CONFIGURACIÓN RÁPIDA
     Tocá estos valores antes que el resto del archivo.
     ------------------------------------------------------------------------ */
  const CONFIG = {
    parallaxMax:   500,   // px máximos que puede desplazarse una capa (freno de seguridad)
    navOffset:     40,    // px de scroll a partir de los cuales la barra se opaca
    revealRatio:   0.18,  // % del elemento visible para disparar el fade-in (0 a 1)
    revealMargin:  '0px 0px -8% 0px', // adelanta/retrasa el disparo del reveal
    revealOnce:    true   // true = la animación ocurre una sola vez por elemento
  };

  /* ------------------------------------------------------------------------
     ¿El usuario pidió menos movimiento? (Ajustes del sistema / navegador)
     Si es así, no activamos parallax ni animaciones de entrada.
     ------------------------------------------------------------------------ */
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


  /* ========================================================================
     1 · PARALLAX
     ------------------------------------------------------------------------
     Cómo funciona: cada elemento con data-parallax="0.3" se desplaza en Y
     una fracción de lo que se desplazó la página desde que ese elemento
     entró en pantalla.
        · valor positivo (0.3)  → se mueve MENOS que el scroll → parece lejano
        · valor negativo (-0.1) → se mueve al revés → parece cercano
        · 0                     → queda quieto respecto al documento

     Usamos requestAnimationFrame para que el cálculo ocurra una sola vez por
     cuadro de animación, aunque el evento scroll dispare 60 veces por segundo.
     ======================================================================== */

  const parallaxItems = Array.from(document.querySelectorAll('[data-parallax]'));
  let ticking = false;   // evita encolar varios rAF a la vez

  function updateParallax() {
    const viewportH = window.innerHeight;

    parallaxItems.forEach(function (el) {
      const speed = parseFloat(el.dataset.parallax) || 0;

      // Posición del elemento respecto al viewport
      const rect = el.getBoundingClientRect();

      // Si está lejos de la pantalla, no calculamos nada (ahorro de CPU)
      if (rect.bottom < -viewportH || rect.top > viewportH * 2) return;

      // Distancia entre el centro de la pantalla y el centro del elemento
      const distance = (rect.top + rect.height / 2) - viewportH / 2;

      // Desplazamiento final, limitado por CONFIG.parallaxMax
      let shift = distance * speed * -1;
      shift = Math.max(-CONFIG.parallaxMax, Math.min(CONFIG.parallaxMax, shift));

      // translate3d activa la aceleración por GPU → movimiento fluido
      el.style.transform = 'translate3d(0, ' + shift.toFixed(2) + 'px, 0)';
    });

    ticking = false;
  }

  function requestParallax() {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  if (parallaxItems.length && !reducedMotion) {
    window.addEventListener('scroll', requestParallax, { passive: true });
    window.addEventListener('resize', requestParallax);
    updateParallax(); // posición inicial al cargar
  }


  /* ========================================================================
     2 · REVEAL (fade-in al entrar en pantalla)
     ------------------------------------------------------------------------
     El IntersectionObserver avisa cuando un elemento entra en el viewport.
     Ahí le agregamos la clase .is-visible y el CSS se encarga de la animación
     (ver el bloque [data-reveal] en style.css).
     ======================================================================== */

  const revealItems = document.querySelectorAll('[data-reveal]');

  if (revealItems.length) {

    if (reducedMotion || !('IntersectionObserver' in window)) {
      // Sin animación: mostramos todo de una
      revealItems.forEach(function (el) { el.classList.add('is-visible'); });

    } else {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (CONFIG.revealOnce) observer.unobserve(entry.target);
          } else if (!CONFIG.revealOnce) {
            entry.target.classList.remove('is-visible');
          }
        });
      }, {
        threshold:  CONFIG.revealRatio,
        rootMargin: CONFIG.revealMargin
      });

      revealItems.forEach(function (el) { observer.observe(el); });
    }
  }


/* ========================================================================
   3 · BARRA DE NAVEGACIÓN
   Añade/quita la clase .is-scrolled según la posición del scroll.
   ======================================================================== */

const nav = document.getElementById('nav');

function updateNav() {
  if (!nav) return;
  nav.classList.toggle('is-scrolled', window.scrollY > CONFIG.navOffset);
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

/* ========================================================================
   HAMBURGUESA MÓVIL
   Alterna la visibilidad del menú en pantallas pequeñas.
   ======================================================================== */
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', function () {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isOpen);
    navMenu.classList.toggle('is-open');
  });

  // Cerrar menú al hacer click en un enlace
  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('is-open');
    });
  });

  // Cerrar menú al hacer click fuera
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('is-open');
    }
  });
}


  /* ========================================================================
     4 · EXTRA OPCIONAL · brillo que sigue al cursor en las tarjetas
     ------------------------------------------------------------------------
     Guarda la posición del mouse en dos variables CSS (--mx, --my) por tarjeta.
     Para usarlo, agregá esto a style.css:

        .card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          opacity: 0;
          transition: opacity var(--dur-fast) var(--ease);
          background: radial-gradient(
            12rem 12rem at var(--mx, 50%) var(--my, 50%),
            rgba(168, 222, 139, 0.16),
            transparent 70%
          );
        }
        .card:hover::after { opacity: 1; }

     Si no lo vas a usar, podés borrar este bloque entero sin romper nada.
     ======================================================================== */

  if (!reducedMotion && window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', ((e.clientX - r.left) / r.width  * 100) + '%');
        card.style.setProperty('--my', ((e.clientY - r.top)  / r.height * 100) + '%');
      });
    });
  }

/* ========================================================================
     5 · GRILLA INTERACTIVA EN EL HERO
     Calcula la posición del cursor sobre la sección principal para mover
     la máscara (mask-image) de la retícula.
     ======================================================================== */
  const heroSection = document.querySelector('.hero');
  
  if (heroSection && !reducedMotion && window.matchMedia('(hover: hover)').matches) {
    heroSection.addEventListener('mousemove', function (e) {
      const r = heroSection.getBoundingClientRect();
      
      // Calculamos el % exacto de la posición X e Y del mouse
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      
      // Actualizamos las variables CSS en tiempo real
      heroSection.style.setProperty('--mx', x + '%');
      heroSection.style.setProperty('--my', y + '%');
    });
  }

/* ========================================================================
     EFECTO DE ENTRADA INICIAL DE LA PÁGINA
     ======================================================================== */
  window.addEventListener('load', function () {
    // Un pequeño retraso imperceptible (100ms) para asegurar que el navegador renderizó todo
    setTimeout(function () {
      document.body.classList.add('is-loaded');
      
      // Opcional: elimina el loader del DOM después de que termine la animación (1.2s) para liberar memoria
      setTimeout(function () {
        const loader = document.querySelector('.page-loader');
        if (loader) loader.remove();
      }, 12000000);
    }, 100);
  });
  
/* ========================================================================
   PAGINACIÓN / CARRUSEL DEL CATÁLOGO (Page-based auto-play, responsive)
   ======================================================================== */
const btnNext = document.querySelector('.carousel-btn--next');
const btnPrev = document.querySelector('.carousel-btn--prev');
const catalogContainer = document.querySelector('.catalog-container');
const catalogGrid = document.querySelector('.catalog__grid');

if (btnNext && btnPrev && catalogContainer && catalogGrid) {
  let currentPage = 0;
  let autoPlayInterval = null;
  let isHovering = false;
  let userInteracted = false;
  let resumeTimeout = null;
  let isMobileMode = false;
  let originalHTML = null;
  let pages = [];

  const AUTO_PLAY_DELAY = 6000;
  const RESUME_DELAY = 3000;
  const MOBILE_BREAKPOINT = '(max-width: 48rem)';

  function isMobile() {
    return window.matchMedia(MOBILE_BREAKPOINT).matches;
  }

  function getPages() {
    return catalogGrid.querySelectorAll('.carousel-page');
  }

  function updatePagesRef() {
    pages = Array.from(getPages());
  }

  function updateCatalog() {
    pages.forEach((page, index) => {
      page.classList.remove('is-active');
      if (index === currentPage) {
        page.classList.add('is-active');
      }
    });
    // Ajustar currentPage si excede el total
    if (currentPage >= pages.length) {
      currentPage = 0;
    } else if (currentPage < 0) {
      currentPage = pages.length - 1;
    }
  }

  function advanceCarousel(direction = 1) {
    currentPage += direction;
    if (currentPage >= pages.length) {
      currentPage = 0;
    } else if (currentPage < 0) {
      currentPage = pages.length - 1;
    }
    updateCatalog();
  }

  function startAutoPlay() {
    stopAutoPlay();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (prefersReducedMotion || isTouch) return;

    autoPlayInterval = setInterval(() => {
      if (!isHovering && !userInteracted) {
        advanceCarousel(1);
      }
    }, AUTO_PLAY_DELAY);
  }

  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }

  function scheduleResume() {
    if (resumeTimeout) clearTimeout(resumeTimeout);
    resumeTimeout = setTimeout(() => {
      userInteracted = false;
      startAutoPlay();
    }, RESUME_DELAY);
  }

  function setupMobileCarousel() {
    if (isMobileMode) return;
    
    // Guardar HTML original si no existe
    if (!originalHTML) {
      originalHTML = catalogGrid.innerHTML;
    }

    // Obtener todas las cards en orden
    const allCards = catalogGrid.querySelectorAll('.carousel-page .card');
    if (allCards.length !== 9) return; // seguridad

    // Vaciar grid
    catalogGrid.innerHTML = '';

    // Crear 9 páginas con 1 card cada una
    allCards.forEach((card, i) => {
      const page = document.createElement('div');
      page.className = 'carousel-page' + (i === 0 ? ' is-active' : '');
      page.appendChild(card.cloneNode(true));
      catalogGrid.appendChild(page);
    });

    isMobileMode = true;
    updatePagesRef();
    currentPage = 0;
    updateCatalog();
  }

  function restoreDesktopCarousel() {
    if (!isMobileMode) return;
    if (!originalHTML) return;

    catalogGrid.innerHTML = originalHTML;
    isMobileMode = false;
    updatePagesRef();
    currentPage = 0;
    updateCatalog();
  }

  // Debounce simple
  let resizeTimer = null;
  function debouncedResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (isMobile() && !isMobileMode) {
        setupMobileCarousel();
      } else if (!isMobile() && isMobileMode) {
        restoreDesktopCarousel();
      }
      updateCatalog();
    }, 150);
  }

  // Auto-play init
  startAutoPlay();

  // Hover del contenedor pausa el auto-play
  catalogContainer.addEventListener('mouseenter', () => {
    isHovering = true;
  });
  catalogContainer.addEventListener('mouseleave', () => {
    isHovering = false;
  });

  // Click en flechas: control manual + programar reanudación
  btnNext.addEventListener('click', function () {
    userInteracted = true;
    stopAutoPlay();
    advanceCarousel(1);
    scheduleResume();
  });

  btnPrev.addEventListener('click', function () {
    userInteracted = true;
    stopAutoPlay();
    advanceCarousel(-1);
    scheduleResume();
  });

  // Re-evaluar al cambiar tamaño de ventana
  window.addEventListener('resize', debouncedResize);

  // Inicialización correcta según breakpoint
  if (isMobile()) {
    setupMobileCarousel();
  } else {
    updatePagesRef();
    updateCatalog();
  }
}

/* ========================================================================
   6 · MODAL DE INFORMACIÓN (botón "?" de la sección Simbiosis)
   Abre/cierra con el botón, la X, el fondo o la tecla Escape.
   Mientras está abierto: bloqueo de scroll, foco en la X y trampa de foco
   (Tab no se sale del panel).
   ======================================================================== */
const infoBtn = document.querySelector('.info-btn');
const infoModal = document.getElementById('info-modal');

if (infoBtn && infoModal) {
  const closeBtn = infoModal.querySelector('.modal__close');
  const focusables = infoModal.querySelectorAll(
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  let lastFocused = null;

  function openModal() {
    // Si se abrió con un clic programático el foco sigue en el body:
    // en ese caso devolvemos el foco al botón que la abrió.
    lastFocused = document.activeElement === document.body ? infoBtn : document.activeElement;
    infoModal.classList.add('is-open');
    infoModal.removeAttribute('aria-hidden');
    infoModal.removeAttribute('inert');
    document.body.classList.add('is-modal-open');

    // El panel no depende de una transición para volverse enfocable
    // (ver .modal en style.css), así que el foco se traslada en el acto.
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    infoModal.classList.remove('is-open');
    infoModal.setAttribute('aria-hidden', 'true');
    infoModal.setAttribute('inert', '');
    document.body.classList.remove('is-modal-open');
    if (lastFocused) lastFocused.focus();
  }

  function isOpen() {
    return infoModal.classList.contains('is-open');
  }

  infoBtn.addEventListener('click', openModal);

  // Fondo y botón de cierre comparten el mismo atributo
  infoModal.querySelectorAll('[data-modal-close]').forEach(function (el) {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', function (e) {
    if (!isOpen()) return;

    if (e.key === 'Escape') {
      closeModal();
      return;
    }

    // Trampa de foco: Tab cicla dentro del modal
    if (e.key === 'Tab' && focusables.length) {
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

})();
