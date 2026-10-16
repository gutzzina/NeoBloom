/* ==========================================================================
   NEOBLOOM · script.js  ·  JavaScript vanilla, sin librerías
   --------------------------------------------------------------------------
   QUÉ HACE, EN ORDEN:
     1 · Parallax          → mueve los elementos con [data-parallax] al scrollear
     2 · Reveal            → hace aparecer los elementos con [data-reveal]
     3 · Nav               → vuelve la barra de vidrio cuando bajás + hamburguesa
     4 · Brillo en tarjetas→ extra opcional (cursor sobre las .card)
     5 · Grilla del Hero   → la retícula reacciona al cursor
     6 · Carrusel          → catálogo de biomateriales (3 en 3, 1 en 1 en móvil)
     7 · COUNTDOWN CO-BLOOM→ NUEVO: cuenta regresiva y botón "JUGAR AHORA"
     7b· Newsletter        → NUEVO: validación del formulario de suscripción
     8 · Modal             → botón "?" de la sección Simbiosis

   Todo está encapsulado en una IIFE para no ensuciar el ámbito global.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     CONFIGURACIÓN RÁPIDA
     ------------------------------------------------------------------------ */
  const CONFIG = {
    parallaxMax:   500,
    navOffset:     40,
    revealRatio:   0.18,
    revealMargin:  '0px 0px -8% 0px',
    revealOnce:    true
  };

  /* ------------------------------------------------------------------------
     ¿El usuario pidió menos movimiento? (Ajustes del sistema / navegador)
     ------------------------------------------------------------------------ */
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


  /* ========================================================================
     1 · PARALLAX
     ======================================================================== */

  const parallaxItems = Array.from(document.querySelectorAll('[data-parallax]'));
  let ticking = false;

  function updateParallax() {
    const viewportH = window.innerHeight;

    parallaxItems.forEach(function (el) {
      const speed = parseFloat(el.dataset.parallax) || 0;
      const rect = el.getBoundingClientRect();

      if (rect.bottom < -viewportH || rect.top > viewportH * 2) return;

      const distance = (rect.top + rect.height / 2) - viewportH / 2;

      let shift = distance * speed * -1;
      shift = Math.max(-CONFIG.parallaxMax, Math.min(CONFIG.parallaxMax, shift));

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
    updateParallax();
  }


  /* ========================================================================
     2 · REVEAL (fade-in al entrar en pantalla)
     ======================================================================== */

  const revealItems = document.querySelectorAll('[data-reveal]');

  if (revealItems.length) {

    if (reducedMotion || !('IntersectionObserver' in window)) {
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
     ======================================================================== */

  const nav = document.getElementById('nav');

  function updateNav() {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > CONFIG.navOffset);
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* --- Hamburguesa móvil --- */
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isOpen);
      navMenu.classList.toggle('is-open');
    });

    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
      });
    });

    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
      }
    });
  }


  /* ========================================================================
     4 · EXTRA OPCIONAL · brillo que sigue al cursor en las tarjetas
     Guarda la posición del mouse en --mx / --my por tarjeta (ver comentario
     original en versiones anteriores si querés usarlo con un ::after).
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
     ======================================================================== */
  const heroSection = document.querySelector('.hero');

  if (heroSection && !reducedMotion && window.matchMedia('(hover: hover)').matches) {
    heroSection.addEventListener('mousemove', function (e) {
      const r = heroSection.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      heroSection.style.setProperty('--mx', x + '%');
      heroSection.style.setProperty('--my', y + '%');
    });
  }


  /* ========================================================================
     EFECTO DE ENTRADA INICIAL DE LA PÁGINA
     ======================================================================== */
  window.addEventListener('load', function () {
    setTimeout(function () {
      document.body.classList.add('is-loaded');

      // Quita el loader del DOM cuando termina su animación de 1.2 s.
      // (Antes esperaba 12.000.000 ms ≈ 3 horas; ahora 1,4 s.)
      setTimeout(function () {
        const loader = document.querySelector('.page-loader');
        if (loader) loader.remove();
      }, 1400);
    }, 100);
  });


  /* ========================================================================
     6 · CARRUSEL DEL CATÁLOGO (auto-play por páginas, responsive)
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

      if (!originalHTML) {
        originalHTML = catalogGrid.innerHTML;
      }

      const allCards = catalogGrid.querySelectorAll('.carousel-page .card');
      if (allCards.length !== 9) return; // seguridad: se espera 9 tarjetas

      catalogGrid.innerHTML = '';

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

    startAutoPlay();

    catalogContainer.addEventListener('mouseenter', () => { isHovering = true; });
    catalogContainer.addEventListener('mouseleave', () => { isHovering = false; });

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

    window.addEventListener('resize', debouncedResize);

    if (isMobile()) {
      setupMobileCarousel();
    } else {
      updatePagesRef();
      updateCatalog();
    }
  }


  /* ========================================================================
     7 · LANZAMIENTO DE CO-BLOOM · CUENTA REGRESIVA  (NUEVO)
     ------------------------------------------------------------------------
     Maneja dos estados en la sección #co-bloom:

       ESTADO 1 → se ve la cuenta regresiva (#launch-countdown)
       ESTADO 2 → la cuenta regresiva se oculta (display: none) y aparece el
                  botón "JUGAR AHORA" (#play-btn)

     ► PARA CAMBIAR LA FECHA / HORA DE LANZAMIENTO: editá "targetDate" acá abajo.
       Formato ISO 8601:  'AAAA-MM-DDThh:mm:ss' + zona horaria.
       Argentina es UTC-03:00, así que se escribe  -03:00  al final.
       Ejemplos:
         '2026-10-16T20:30:00-03:00'   → 16 de octubre de 2026, 20:30 h (Argentina)
         '2026-11-01T00:00:00-03:00'   → 1 de noviembre de 2026, medianoche

     ► PARA TESTEAR O FORZAR EL ESTADO 2 A MANO:
       descomentá la línea marcada más abajo ("FORZAR ESTADO 2").
     ======================================================================== */

  const LAUNCH_CONFIG = {
    targetDate: '2026-10-16T23:59:00-03:00'   // ← CAMBIÁ ESTA FECHA
  };

  const launchCountdown = document.getElementById('launch-countdown');
  const playBtn         = document.getElementById('play-btn');
  const launchStatus    = document.getElementById('launch-status');
  const cdHours         = document.getElementById('cd-hours');
  const cdMinutes       = document.getElementById('cd-minutes');
  const cdSeconds       = document.getElementById('cd-seconds');
  const topCountdown    = document.getElementById('top-countdown');
  const topCdHours      = document.getElementById('top-cd-hours');
  const topCdMinutes    = document.getElementById('top-cd-minutes');
  const topCdSeconds    = document.getElementById('top-cd-seconds');

  if (launchCountdown && playBtn && cdHours && cdMinutes && cdSeconds && topCountdown && topCdHours && topCdMinutes && topCdSeconds) {

    let countdownTimer = null;

    // Agrega un cero adelante: 7 → "07"
    function pad(n) {
      return String(n).padStart(2, '0');
    }

    /* --- ESTADO 2: oculta el reloj y muestra el botón --- */
    function showGameState(announce) {
      if (countdownTimer) {
        clearInterval(countdownTimer);
        countdownTimer = null;
      }
      launchCountdown.style.display = 'none';
      topCountdown.classList.remove('is-visible');
      document.body.classList.remove('has-top-countdown');
      playBtn.classList.remove('is-hidden');

      if (announce && launchStatus) {
        launchStatus.textContent = 'Co-Bloom ya está disponible. Podés jugar ahora.';
      }
    }

    /* --- ESTADO 1: calcula y pinta el tiempo restante --- */
    function tick(announce) {
      const target = new Date(LAUNCH_CONFIG.targetDate).getTime();

      if (isNaN(target)) {
        console.error('[NeoBloom] LAUNCH_CONFIG.targetDate no es una fecha válida:', LAUNCH_CONFIG.targetDate);
        if (countdownTimer) { clearInterval(countdownTimer); countdownTimer = null; }
        return;
      }

      const remaining = target - Date.now();

      if (remaining <= 0) {
        showGameState(announce);
        return;
      }

      const totalSeconds = Math.floor(remaining / 1000);
      const hours   = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      cdHours.textContent   = pad(hours);
      cdMinutes.textContent = pad(minutes);
      cdSeconds.textContent = pad(seconds);
      topCdHours.textContent   = pad(hours);
      topCdMinutes.textContent = pad(minutes);
      topCdSeconds.textContent = pad(seconds);
    }

    // Pinta el estado inicial (sin avisar: si ya pasó la fecha, abre directo el juego)
    tick(false);
    topCountdown.classList.add('is-visible');
    document.body.classList.add('has-top-countdown');

    // Si todavía no llegó la hora, actualiza cada segundo
    if (launchCountdown.style.display !== 'none') {
      countdownTimer = setInterval(function () { tick(true); }, 1000);
    }

    // Top countdown: hide on scroll down, show on scroll up (after threshold)
    if (!reducedMotion && topCountdown) {
      let lastScrollY = window.scrollY;
      let ticking = false;

      function updateTopCountdownVisibility() {
        const currentScrollY = window.scrollY;
        const threshold = 100;

        if (currentScrollY > threshold) {
          if (currentScrollY > lastScrollY) {
            topCountdown.classList.add('is-hidden-on-scroll');
          } else {
            topCountdown.classList.remove('is-hidden-on-scroll');
          }
        } else {
          topCountdown.classList.remove('is-hidden-on-scroll');
        }

        lastScrollY = currentScrollY;
        ticking = false;
      }

      function onScroll() {
        if (!ticking) {
          window.requestAnimationFrame(updateTopCountdownVisibility);
          ticking = true;
        }
      }

      window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* ----------------------------------------------------------------------
       FORZAR ESTADO 2 MANUALMENTE (para probar el botón sin esperar)
       Descomentá la línea de abajo, guardá y recargá la página.
       Volvé a comentarla para que el reloj funcione otra vez.
       ---------------------------------------------------------------------- */
    // showGameState(false);   // ← FORZAR ESTADO 2: quitá las // del principio
  }


  /* ========================================================================
     7b · NEWSLETTER (formulario de suscripción)  (NUEVO)
     ------------------------------------------------------------------------
     Valida el correo y, si hay un servicio conectado, envía el formulario.
     ► Pegá en NEWSLETTER_ENDPOINT la URL de tu servicio (Formspree, Mailchimp,
       Google Apps Script, etc.). Mientras esté vacío, el formulario NO envía
       nada y avisa que las suscripciones se abren pronto.
     ======================================================================== */
  const NEWSLETTER_ENDPOINT = '';   // ← CAMBIÁ: URL que recibe el correo (POST)

  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterMsg  = document.getElementById('newsletter-msg');
  const newsletterMail = document.getElementById('newsletter-email');

  if (newsletterForm && newsletterMsg && newsletterMail) {

    function setNewsletterMsg(text, isError) {
      newsletterMsg.textContent = text;
      newsletterMsg.classList.toggle('is-error', !!isError);
    }

    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!newsletterMail.checkValidity() || !newsletterMail.value.trim()) {
        setNewsletterMsg('Revisá tu correo: parece que le falta algo.', true);
        newsletterMail.focus();
        return;
      }

      if (!NEWSLETTER_ENDPOINT) {
        setNewsletterMsg('Las suscripciones se abren muy pronto. ¡Volvé a pasar!', false);
        return;
      }

      setNewsletterMsg('Enviando…', false);

      fetch(NEWSLETTER_ENDPOINT, {
        method: 'POST',
        body: new FormData(newsletterForm),
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        newsletterForm.reset();
        setNewsletterMsg('¡Listo! Ya sos parte del cambio. Revisá tu correo.', false);
      }).catch(function () {
        setNewsletterMsg('Ups, algo falló. Probá de nuevo en un ratito.', true);
      });
    });
  }


  /* ========================================================================
     8 · MODAL DE INFORMACIÓN (botón "?" de la sección Simbiosis)
     Abre/cierra con el botón, la X, el fondo o la tecla Escape.
     Mientras está abierto: bloqueo de scroll, foco en la X y trampa de foco.
     ======================================================================== */
const infoBtn = document.querySelector('[aria-controls="info-modal"]');
  const infoModal = document.getElementById('info-modal');

  if (infoBtn && infoModal) {
    const closeBtn = infoModal.querySelector('.modal__close');
    const focusables = infoModal.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    let lastFocused = null;

    function openModal() {
      lastFocused = document.activeElement === document.body ? infoBtn : document.activeElement;
      infoModal.classList.add('is-open');
      infoModal.removeAttribute('aria-hidden');
      infoModal.removeAttribute('inert');
      document.body.classList.add('is-modal-open');

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

    infoModal.querySelectorAll('[data-modal-close]').forEach(function (el) {
      el.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', function (e) {
      if (!isOpen()) return;

      if (e.key === 'Escape') {
        closeModal();
        return;
      }

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
/* ========================================================================
     MINI MUESTRARIO (Slideshow con degradado)
     ======================================================================== */
  const slides = document.querySelectorAll('.tile--photo .slide');
  
  if (slides.length > 1 && !reducedMotion) {
    let currentSlide = 0;
    
    setInterval(function () {
      // Le quita la clase a la imagen actual (se desvanece)
      slides[currentSlide].classList.remove('is-active');
      
      // Pasa a la siguiente (o vuelve a la 0 si llegó a la última)
      currentSlide = (currentSlide + 1) % slides.length;
      
      // Le pone la clase a la nueva imagen (aparece con degradado)
      slides[currentSlide].classList.add('is-active');
      
    }, 4000); // 4000 milisegundos = 4 segundos por imagen. ¡Cámbialo a tu gusto!
  }

  /* ========================================================================
     OCULTAR TEXTO DE CARGA CUANDO SPLINE ESTÉ LISTO
     ======================================================================== */
  const splineViewer = document.querySelector('spline-viewer');
  const stagePlaceholder = document.querySelector('.stage__placeholder');

  if (splineViewer && stagePlaceholder) {
    // Escucha el evento 'load' nativo del componente de Spline
    splineViewer.addEventListener('load', function () {
      
      // Hace que el cartel se desvanezca suavemente en medio segundo
      stagePlaceholder.style.transition = 'opacity 0.5s ease';
      stagePlaceholder.style.opacity = '0';
      
      // Una vez invisible, lo quita por completo para que no estorbe
      setTimeout(function() {
        stagePlaceholder.style.display = 'none';
      }, 500);
    });
  }

  /* ========================================================================
     8b · CURSOR SPORE TRAIL (efecto de esporas al mover el ratón)
     ======================================================================== */
  if (!reducedMotion && window.matchMedia('(hover: hover)').matches) {
    const canvas = document.getElementById('spore-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let width = 0;
      let height = 0;
      let animationId = null;
      let lastSpawnTime = 0;

      const CONFIG = {
        maxParticles: 35,
        spawnInterval: 45,
        lifeMin: 900,
        lifeMax: 2200,
        sizeMin: 1,
        sizeMax: 3,
        drift: 0.12,
        gravity: -0.018,
        baseHue: 110
      };

      const particles = [];
      const pool = [];

      function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }

      function getColor() {
        const isBloom = Math.random() < 0.5;
        return isBloom ? 'rgba(155, 236, 111, {opacity})' : 'rgba(168, 222, 139, {opacity})';
      }

      function createParticle(x, y) {
        const p = pool.length ? pool.pop() : {};
        p.x = x;
        p.y = y;
        p.vx = (Math.random() - 0.5) * 0.4;
        p.vy = Math.random() * -0.3 - 0.1;
        p.life = CONFIG.lifeMin + Math.random() * (CONFIG.lifeMax - CONFIG.lifeMin);
        p.maxLife = p.life;
        p.size = CONFIG.sizeMin + Math.random() * (CONFIG.sizeMax - CONFIG.sizeMin);
        p.color = getColor();
        p.alpha = 1;
        return p;
      }

      function spawnBurst(x, y, count) {
        for (let i = 0; i < count; i++) {
          if (particles.length >= CONFIG.maxParticles) break;
          particles.push(createParticle(x, y));
        }
      }

      function updateParticles(deltaTime) {
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.life -= deltaTime;
          p.x += p.vx;
          p.y += p.vy;
          p.vy += CONFIG.gravity;
          p.vx += (Math.random() - 0.5) * CONFIG.drift;
          const lifeRatio = Math.max(0, p.life / p.maxLife);
          p.alpha = lifeRatio * lifeRatio;

          if (p.life <= 0 || p.y < -10 || p.x < -10 || p.x > width + 10 || p.y > height + 10) {
            pool.push(particles.splice(i, 1)[0]);
          }
        }
      }

      function drawParticles() {
        ctx.clearRect(0, 0, width, height);
        for (const p of particles) {
          const alpha = p.alpha * 0.7;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * p.alpha, 0, Math.PI * 2);
          ctx.fillStyle = p.color.replace('{opacity}', alpha.toFixed(2));
          ctx.fill();
        }
      }

      let lastTime = performance.now();
      function animate(time) {
        const deltaTime = time - lastTime;
        lastTime = time;

        updateParticles(deltaTime);
        drawParticles();

        animationId = requestAnimationFrame(animate);
      }

      function onMouseMove(e) {
        const now = performance.now();
        if (now - lastSpawnTime >= CONFIG.spawnInterval) {
          spawnBurst(e.clientX, e.clientY, 1);
          lastSpawnTime = now;
        }
      }

      function init() {
        resize();
        window.addEventListener('resize', resize, { passive: true });
        window.addEventListener('mousemove', onMouseMove, { passive: true });
        animationId = requestAnimationFrame(animate);
      }

      function destroy() {
        window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', onMouseMove);
        if (animationId) cancelAnimationFrame(animationId);
        ctx.clearRect(0, 0, width, height);
      }

      // Listen for reduced motion changes
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      function handleReducedMotionChange(e) {
        if (e.matches) {
          destroy();
          canvas.style.display = 'none';
        } else {
          canvas.style.display = '';
          init();
        }
      }
      mediaQuery.addEventListener('change', handleReducedMotionChange);

      init();
    }
  }
})();
