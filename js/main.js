/* ========================================
   KSV DENTAL — Shared JavaScript
   Multi-page, zero-dependency
   ======================================== */
(function () {
  'use strict';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  // ========== NAVBAR ==========
  const navbar = $('#navbar');
  const toggle = $('#nav-toggle');
  const nav = $('#main-nav');

  // Scroll handler
  const onScroll = () => {
    if (window.scrollY > 40) navbar.classList.add('navbar--scrolled');
    else navbar.classList.remove('navbar--scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile toggle
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('nav--open');
      toggle.classList.toggle('nav-toggle--open');
      toggle.setAttribute('aria-expanded', open);
    });

    $$('.nav__link', nav).forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav--open');
        toggle.classList.remove('nav-toggle--open');
      });
    });
  }

  // ========== INTERSECTION OBSERVER — Reveals ==========
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  $$('.reveal').forEach((el, i) => {
    // Stagger within parent
    const parent = el.closest('[data-stagger]');
    if (parent) {
      const siblings = $$('.reveal', parent);
      el.style.setProperty('--i', siblings.indexOf(el));
    }
    revealObs.observe(el);
  });

  // ========== COUNTER ANIMATION ==========
  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    const dur = 2000;
    const start = performance.now();
    (function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString();
    })(start);
  }

  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        $$('[data-count]', e.target).forEach(animateCount);
        counterObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  const metrics = $('.hero__metrics') || $('[data-counter-group]');
  if (metrics) counterObs.observe(metrics);

  // ========== TESTIMONIAL SLIDER ==========
  const track = $('#test-track');
  const dotsWrap = $('#test-dots');
  const prevBtn = $('#test-prev');
  const nextBtn = $('#test-next');

  if (track && dotsWrap) {
    const cards = $$('.test-card', track);
    let curr = 0;
    const total = cards.length;

    cards.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.className = `test-dot${i === 0 ? ' test-dot--active' : ''}`;
      dot.addEventListener('click', () => go(i));
      dotsWrap.appendChild(dot);
    });

    function go(i) {
      curr = ((i % total) + total) % total;
      track.style.transform = `translateX(-${curr * 100}%)`;
      $$('.test-dot', dotsWrap).forEach((d, j) =>
        d.classList.toggle('test-dot--active', j === curr)
      );
    }

    if (prevBtn) prevBtn.addEventListener('click', () => go(curr - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => go(curr + 1));

    let auto = setInterval(() => go(curr + 1), 5500);
    const slider = track.closest('.test-slider');
    if (slider) {
      slider.addEventListener('mouseenter', () => clearInterval(auto));
      slider.addEventListener('mouseleave', () => {
        auto = setInterval(() => go(curr + 1), 5500);
      });
    }

    // Touch
    let sx = 0;
    track.addEventListener('touchstart', e => { sx = e.changedTouches[0].screenX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const d = sx - e.changedTouches[0].screenX;
      if (Math.abs(d) > 50) go(d > 0 ? curr + 1 : curr - 1);
    }, { passive: true });
  }

  // ========== APPOINTMENT FORM → WhatsApp ==========
  const form = $('#appt-form');
  if (form) {
    const dateInput = $('#appt-date');
    if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];

    form.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = fd.get('name')?.trim();
      const phone = fd.get('phone')?.trim();
      const treatment = fd.get('treatment');
      const date = fd.get('date');
      const msg = fd.get('message')?.trim();

      if (!name || !phone || !treatment || !date) {
        alert('Please fill in all required fields.');
        return;
      }

      const d = new Date(date).toLocaleDateString('en-IN', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      });

      const text = [
        `🦷 *New Appointment Request*`, '',
        `*Name:* ${name}`,
        `*Phone:* ${phone}`,
        `*Treatment:* ${treatment}`,
        `*Date:* ${d}`,
        msg ? `*Message:* ${msg}` : '',
        '', `_Sent from KSV Dental Clinic Website_`
      ].filter(Boolean).join('\n');

      window.open(`https://wa.me/919488021937?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  // ========== SMOOTH SCROLL ==========
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = $(id);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - (navbar?.offsetHeight || 76),
          behavior: 'smooth'
        });
      }
    });
  });

})();
