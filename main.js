/**
 * Aiman Al-Tahir — Portfolio Core
 */
(function () {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  function initLoader() {
    const loader = $('#loader');
    if (!loader) return;

    const finish = () => {
      loader.classList.add('done');
      document.body.classList.add('loaded');
    };

    window.addEventListener('load', () => setTimeout(finish, 500));
    setTimeout(finish, 2800);
  }

  function initHeader() {
    const header = $('#header');
    const sections = $$('section[id]');
    const navLinks = $$('.nav-link');

    const onScroll = () => {
      const y = window.scrollY;
      header?.classList.toggle('scrolled', y > 40);

      let current = '';
      sections.forEach((sec) => {
        if (y >= sec.offsetTop - 130) current = sec.id;
      });

      navLinks.forEach((link) => {
        const href = link.getAttribute('href')?.slice(1);
        link.classList.toggle('active', href === current);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initMobileMenu() {
    const toggle = $('#nav-toggle');
    const menu = $('#nav-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    $$('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  function initReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    $$('.reveal').forEach((el) => observer.observe(el));
  }

  function initSkillBars() {
    const items = $$('.skill-item');
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const item = entry.target;
          const progress = parseInt(item.dataset.progress, 10) || 0;
          const fill = $('.skill-fill', item);
          const pct = $('.skill-pct', item);
          if (fill) fill.style.width = `${progress}%`;
          if (pct) animateNumber(pct, 0, progress, 1200);
          observer.unobserve(item);
        });
      },
      { threshold: 0.35 }
    );

    items.forEach((item) => observer.observe(item));
  }

  function animateNumber(el, start, end, duration) {
    const startTime = performance.now();
    const update = (now) => {
      const t = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      el.textContent = `${Math.round(start + (end - start) * ease)}%`;
      if (t < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  function initBackToTop() {
    const btn = $('#back-top');
    if (!btn) return;

    window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 500), {
      passive: true,
    });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  function initContactForm() {
    const form = $('#contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = $('#form-submit');
      const btnText = $('.btn-text', submitBtn);
      const btnLoading = $('.btn-loading', submitBtn);
      const status = $('#form-status');

      submitBtn.disabled = true;
      btnText?.classList.add('hidden');
      btnLoading?.classList.remove('hidden');
      status?.classList.add('hidden');

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });

        if (res.ok) {
          form.reset();
          status.textContent = I18n.t('contact.success');
          status.className = 'form-status success';
        } else {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || I18n.t('contact.error'));
        }
      } catch (err) {
        status.textContent = err.message || I18n.t('contact.error');
        status.className = 'form-status error';
      } finally {
        status?.classList.remove('hidden');
        submitBtn.disabled = false;
        btnText?.classList.remove('hidden');
        btnLoading?.classList.add('hidden');
      }
    });
  }

  function initSmoothAnchors() {
    $$('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const id = anchor.getAttribute('href');
        if (!id || id === '#') return;
        const target = $(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  function initPhotoFallback() {
    $$('.portfolio-photo').forEach((img) => {
      const fallback = img.dataset.fallback;
      if (!fallback) return;
      img.addEventListener('error', () => {
        if (img.dataset.triedFallback === 'true') return;
        img.dataset.triedFallback = 'true';
        img.src = fallback;
      });
    });
  }

  function initMagneticButtons() {
    $$('.btn-magnetic').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  function initMarquee() {
    const track = $('.marquee-track');
    if (!track) return;
    const clone = track.innerHTML;
    track.innerHTML += clone;
  }

  document.addEventListener('DOMContentLoaded', () => {
    I18n.init();
    initPhotoFallback();
    initLoader();
    Effects.init();
    initHeader();
    initMobileMenu();
    initReveal();
    initSkillBars();
    initBackToTop();
    initContactForm();
    initSmoothAnchors();
    initMagneticButtons();
    initMarquee();
  });
})();
