/* ═══════════════════════════════════════════════════════════
   CLINICA S.EGIDIO — Main JS
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ── Navbar scroll behavior ─────────────────────────────── */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const SCROLL_THRESHOLD = 60;

  function updateNavbar() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();
})();


/* ── Mobile menu ────────────────────────────────────────── */
(function initMobileMenu() {
  const toggle    = document.getElementById('menuToggle');
  const menu      = document.getElementById('mobileMenu');
  const navLinks  = menu ? menu.querySelectorAll('.mobile-nav-link, .mobile-cta') : [];
  if (!toggle || !menu) return;

  function openMenu() {
    toggle.classList.add('is-open');
    menu.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Chiudi menu');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggle.classList.remove('is-open');
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Apri menu');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    toggle.classList.contains('is-open') ? closeMenu() : openMenu();
  });

  navLinks.forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
  });
})();


/* ── Smooth scroll for anchor links ─────────────────────── */
(function initSmoothScroll() {
  const NAV_OFFSET = 72;

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id     = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();

      const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });

      // Update URL without jump
      history.pushState(null, '', `#${id}`);
    });
  });
})();


/* ── Intersection Observer – reveal animations ──────────── */
(function initRevealAnimations() {
  if (!window.IntersectionObserver) {
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();


/* ── Active nav link highlight on scroll ────────────────── */
(function initActiveNavLinks() {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');
  if (!sections.length || !navLinks.length) return;

  const NAV_OFFSET = 80;

  function updateActive() {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - NAV_OFFSET - 10) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('is-active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('is-active');
      }
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
})();


/* ── Contact form ───────────────────────────────────────── */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const btnText    = form.querySelector('.btn-text');
    const btnSuccess = form.querySelector('.btn-success');
    const submitBtn  = form.querySelector('button[type="submit"]');

    submitBtn.disabled = true;

    // Simulate async form submission (replace with real endpoint)
    setTimeout(() => {
      if (btnText)    btnText.hidden = true;
      if (btnSuccess) btnSuccess.hidden = false;

      setTimeout(() => {
        form.reset();
        submitBtn.disabled = false;
        if (btnText)    btnText.hidden = false;
        if (btnSuccess) btnSuccess.hidden = true;
      }, 3500);
    }, 800);
  });

  // Live validation feedback
  const requiredInputs = form.querySelectorAll('[required]');
  requiredInputs.forEach(input => {
    input.addEventListener('blur', () => {
      const parent = input.closest('.form-group');
      if (!parent) return;
      if (!input.validity.valid) {
        parent.classList.add('has-error');
      } else {
        parent.classList.remove('has-error');
      }
    });
    input.addEventListener('input', () => {
      const parent = input.closest('.form-group');
      if (parent && input.validity.valid) {
        parent.classList.remove('has-error');
      }
    });
  });
})();


/* ── Parallax hero on scroll (subtle) ──────────────────── */
(function initHeroParallax() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();


/* ── Cursor glow on specialty cards ─────────────────────── */
(function initCardGlow() {
  const cards = document.querySelectorAll('.specialty-card, .value-card');
  if (!cards.length) return;
  if (window.matchMedia('(hover: none)').matches) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x    = ((e.clientX - rect.left) / rect.width) * 100;
      const y    = ((e.clientY - rect.top)  / rect.height) * 100;
      card.style.setProperty('--glow-x', `${x}%`);
      card.style.setProperty('--glow-y', `${y}%`);
    });
  });
})();
