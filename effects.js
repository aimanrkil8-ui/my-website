/**
 * Visual effects — particles, parallax, cursor, counters, project filter
 */
const Effects = {
  typingTimer: null,

  init() {
    this.initParticles();
    this.initParallax();
    this.initCursorGlow();
    this.initCounters();
    this.initProjectFilter();
    this.initTiltCards();
    this.initTyping();
    window.addEventListener('languageChanged', () => this.restartTyping());
  },

  /* ---------- Particle canvas ---------- */
  initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let w, h;
    let animId;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const colors = ['#6ee7a0', '#a78bfa', '#fb923c'];

    const create = () => {
      particles = [];
      const count = Math.min(80, Math.floor((w * h) / 18000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 2 + 0.5,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          c: colors[Math.floor(Math.random() * colors.length)],
          o: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.globalAlpha = p.o;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = p.c;
            ctx.globalAlpha = (1 - dist / 120) * 0.15;
            ctx.stroke();
          }
        }
      });
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };

    resize();
    create();
    draw();

    window.addEventListener('resize', () => {
      resize();
      create();
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(animId);
      else draw();
    });
  },

  /* ---------- Parallax ---------- */
  initParallax() {
    const heroVisual = document.querySelector('.hero-visual');
    const glow = document.querySelector('.hero-image-glow');
    if (!heroVisual) return;

    window.addEventListener(
      'scroll',
      () => {
        const y = window.scrollY;
        if (y > window.innerHeight) return;
        const offset = y * 0.12;
        heroVisual.style.transform = `translateY(${offset}px)`;
        if (glow) glow.style.transform = `translateY(${offset * 0.5}px) rotate(${y * 0.05}deg)`;
      },
      { passive: true }
    );

    document.addEventListener('mousemove', (e) => {
      if (window.innerWidth < 768) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      heroVisual.style.transform = `translate(${x}px, ${y}px)`;
    });
  },

  /* ---------- Cursor glow ---------- */
  initCursorGlow() {
    const glow = document.getElementById('cursor-glow');
    if (!glow || window.matchMedia('(pointer: coarse)').matches) return;

    let mx = 0,
      my = 0,
      cx = 0,
      cy = 0;

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      glow.classList.add('active');
    });

    document.addEventListener('mouseleave', () => glow.classList.remove('active'));

    const animate = () => {
      cx += (mx - cx) * 0.12;
      cy += (my - cy) * 0.12;
      glow.style.transform = `translate(${cx - 150}px, ${cy - 150}px)`;
      requestAnimationFrame(animate);
    };
    animate();
  },

  /* ---------- Stat counters ---------- */
  initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const end = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '';
          let start = 0;
          const duration = 1800;
          const startTime = performance.now();

          const tick = (now) => {
            const t = Math.min((now - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - t, 4);
            el.textContent = Math.round(start + (end - start) * ease) + suffix;
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((c) => observer.observe(c));
  },

  /* ---------- Project filter ---------- */
  initProjectFilter() {
    const tabs = document.querySelectorAll('.filter-tab');
    const cards = document.querySelectorAll('.project-card');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.dataset.filter;

        cards.forEach((card) => {
          const cat = card.dataset.category;
          const show = filter === 'all' || cat === filter;
          card.style.display = show ? '' : 'none';
          if (show) {
            card.classList.remove('visible');
            requestAnimationFrame(() => card.classList.add('visible'));
          }
        });
      });
    });
  },

  /* ---------- 3D tilt on cards ---------- */
  initTiltCards() {
    const cards = document.querySelectorAll('[data-tilt]');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  },

  /* ---------- Typing (language-aware) ---------- */
  restartTyping() {
    if (this.typingTimer) clearTimeout(this.typingTimer);
    this.initTyping();
  },

  initTyping() {
    const el = document.getElementById('typing-text');
    if (!el) return;

    const phrases = I18n.translations[I18n.lang]?.typing;
    if (!Array.isArray(phrases) || !phrases.length) return;

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const tick = () => {
      const current = phrases[phraseIndex];

      if (!isDeleting) {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          isDeleting = true;
          this.typingTimer = setTimeout(tick, 2000);
          return;
        }
        this.typingTimer = setTimeout(tick, 65);
      } else {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          this.typingTimer = setTimeout(tick, 400);
          return;
        }
        this.typingTimer = setTimeout(tick, 35);
      }
    };

    el.classList.remove('done');
    tick();
  },
};
