/**
 * VelociBar — Landing Page Scripts
 * Minimal, accessible, no dependencies
 * With i18n support for Spanish and English
 */

(function () {
  'use strict';

  // Private browsing may make storage unavailable; navigation still works.
  const languagePreference = {
    get() { try { return localStorage.getItem('velocibar-lang'); } catch { return null; } },
    set(lang) { try { localStorage.setItem('velocibar-lang', lang); } catch { /* Optional preference. */ } }
  };

  // --- i18n System ---
  const i18n = {
    currentLang: 'es',
    
    // Detect user's preferred language
    detectLanguage() {
      // Check localStorage first
      const saved = languagePreference.get();
      if (saved && (saved === 'es' || saved === 'en')) {
        return saved;
      }
      
      // Check browser language
      const browserLang = navigator.language || navigator.userLanguage || 'es';
      const lang = browserLang.toLowerCase().split('-')[0];
      
      // Return 'en' for English, 'es' for everything else (default)
      return lang === 'en' ? 'en' : 'es';
    },
    
    // Set language and save preference
    setLanguage(lang) {
      if (lang !== 'es' && lang !== 'en') return;
      
      this.currentLang = lang;
      languagePreference.set(lang);
      document.documentElement.lang = lang;
      
      this.applyTranslations();
      this.updateToggle();
    },
    
    // Toggle between languages
    toggleLanguage() {
      const newLang = this.currentLang === 'es' ? 'en' : 'es';
      this.setLanguage(newLang);
    },
    
    // Get translation by key path
    get(keyPath) {
      if (typeof translations === 'undefined') return keyPath;
      
      const keys = keyPath.split('.');
      let value = translations[this.currentLang];
      
      for (const key of keys) {
        if (value && typeof value === 'object' && key in value) {
          value = value[key];
        } else {
          return keyPath;
        }
      }
      
      return value;
    },
    
    // Apply translations to all elements with data-i18n attribute
    applyTranslations() {
      // Update elements with data-i18n attribute
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = this.get(key);
        
        if (translation && typeof translation === 'string') {
          // Check if we should use innerHTML (for elements with HTML content)
          if (el.hasAttribute('data-i18n-html')) {
            el.innerHTML = translation;
          } else {
            el.textContent = translation;
          }
        }
      });
      
      // Update placeholders
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const translation = this.get(key);
        if (translation) {
          el.placeholder = translation;
        }
      });
      
      // Update aria-labels
      document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        const translation = this.get(key);
        if (translation) {
          el.setAttribute('aria-label', translation);
        }
      });
      
      // Update page title
      const pageTitle = document.querySelector('title[data-i18n]');
      if (pageTitle) {
        const key = pageTitle.getAttribute('data-i18n');
        const translation = this.get(key);
        if (translation) {
          document.title = translation;
        }
      }
      
      // Update meta description
      const metaDesc = document.querySelector('meta[name="description"][data-i18n]');
      if (metaDesc) {
        const key = metaDesc.getAttribute('data-i18n');
        const translation = this.get(key);
        if (translation) {
          metaDesc.setAttribute('content', translation);
        }
      }
      
      // Update OG meta tags
      document.querySelectorAll('meta[property^="og:"][data-i18n]').forEach(meta => {
        const key = meta.getAttribute('data-i18n');
        const translation = this.get(key);
        if (translation) {
          meta.setAttribute('content', translation);
        }
      });
      
      // Update Twitter meta tags
      document.querySelectorAll('meta[name^="twitter:"][data-i18n]').forEach(meta => {
        const key = meta.getAttribute('data-i18n');
        const translation = this.get(key);
        if (translation) {
          meta.setAttribute('content', translation);
        }
      });
      
      // Update OG locale
      const ogLocale = document.querySelector('meta[property="og:locale"]');
      if (ogLocale) {
        ogLocale.setAttribute('content', this.currentLang === 'en' ? 'en_US' : 'es_ES');
      }
    },
    
    // Update toggle button state
    updateToggle() {
      const toggle = document.getElementById('lang-toggle');
      if (toggle) {
        const esSpan = toggle.querySelector('.lang-es');
        const enSpan = toggle.querySelector('.lang-en');
        
        if (esSpan && enSpan) {
          esSpan.classList.toggle('active', this.currentLang === 'es');
          enSpan.classList.toggle('active', this.currentLang === 'en');
        }
      }
    },
    
    // Initialize i18n
    init() {
      // Pages with data-static-lang on <html> are pre-rendered in one language
      // (/ is Spanish, /en/ is English) so crawlers index real content. There
      // the toggle is a plain link between the two URLs; here we only honor a
      // previously saved preference and remember new choices.
      const staticLang = document.documentElement.getAttribute('data-static-lang');
      if (staticLang) {
        this.currentLang = staticLang;

        const saved = languagePreference.get();
        if ((saved === 'es' || saved === 'en') && saved !== staticLang) {
          // Send the visitor to this page's own translation, not the homepage
          const alt = document.querySelector('link[rel="alternate"][hreflang="' + saved + '"]');
          const destination = alt ? new URL(alt.href).pathname : (saved === 'en' ? '/en/' : '/');
          window.location.replace(destination + window.location.search + window.location.hash);
          return;
        }

        const toggle = document.getElementById('lang-toggle');
        if (toggle) {
          toggle.addEventListener('click', () => {
            const target = toggle.getAttribute('data-lang-target');
            if (target) languagePreference.set(target);
          });
        }
        return;
      }

      // Legacy in-place translation (legal pages)
      this.currentLang = this.detectLanguage();
      document.documentElement.lang = this.currentLang;

      this.applyTranslations();
      this.updateToggle();

      // Bind toggle button
      const toggle = document.getElementById('lang-toggle');
      if (toggle) {
        toggle.addEventListener('click', () => this.toggleLanguage());
      }
    }
  };
  
  // Make i18n available globally
  window.i18n = i18n;

  // --- Smooth scroll for internal links ---
  function initSmoothScroll() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (event) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start',
        });

        // Update URL without triggering scroll
        history.pushState(null, '', targetId);

        // Focus target for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      });
    });
  }

  // --- Responsive navigation ---
  function initNavigation() {
    const nav = document.querySelector('.landing-page .nav');
    const toggle = document.querySelector('.menu-toggle');
    if (!nav || !toggle) return;
    const isEnglish = document.documentElement.lang === 'en';
    const setOpen = (open) => {
      nav.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', isEnglish ? (open ? 'Close menu' : 'Open menu') : (open ? 'Cerrar menú' : 'Abrir menú'));
    };
    nav.classList.add('nav-ready');
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
    document.addEventListener('click', event => { if (!nav.contains(event.target)) setOpen(false); });
    window.matchMedia('(min-width: 851px)').addEventListener('change', () => setOpen(false));

    if (!('IntersectionObserver' in window)) return;
    const links = [...nav.querySelectorAll('a[href^="#"]')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const link = links.find(item => item.hash === '#' + entry.target.id);
        if (entry.isIntersecting) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-15% 0px -55% 0px' });
    links.forEach(link => {
      const section = document.querySelector(link.hash);
      if (section) observer.observe(section);
    });
  }

  // A clearly labelled simulation: no network tests or scheduled jobs run here.
  function initPreview() {
    const button = document.getElementById('preview-run');
    if (!button) return;
    const isEnglish = document.documentElement.lang === 'en';
    const label = button.querySelector('span');
    const panel = document.querySelector('.vb-panel');
    const status = document.getElementById('preview-status');
    const interval = document.getElementById('preview-interval');
    const counter = document.getElementById('speed-counter');
    const restingLabel = label.textContent;
    const samples = [{ speed: '94.8', rpm: '1286' }, { speed: '88.7', rpm: '1180' }, { speed: '92.4', rpm: '1240' }];
    let sampleIndex = 0;
    let hasRun = false;
    const updateStatus = () => {
      status.textContent = isEnglish
        ? `Sample data${hasRun ? ' updated' : ''} · every ${interval.value} min in the app`
        : `Datos de ejemplo${hasRun ? ' actualizados' : ''} · cada ${interval.value} min en la app`;
    };
    button.hidden = false;
    interval.addEventListener('change', updateStatus);
    button.addEventListener('click', () => {
      if (button.disabled) return;
      const sample = samples[sampleIndex % samples.length];
      button.disabled = true;
      panel.classList.add('is-running');
      label.textContent = isEnglish ? 'Measuring…' : 'Midiendo…';
      status.textContent = isEnglish ? 'Simulating a test with sample data…' : 'Simulando una prueba con datos de ejemplo…';
      const finish = () => {
        counter.textContent = sample.speed;
        document.getElementById('preview-rpm').textContent = sample.rpm;
        document.getElementById('menubar-speed').textContent = Math.round(Number(sample.speed)) + ' Mbps';
        const points = Array.from({ length: 21 }, (_, i) => `${i * 15},${Math.round(25 + Math.sin(i * 1.8 + sampleIndex) * 8 + Math.cos(i * 0.6) * 5)}`);
        const line = 'M' + points.join(' L');
        document.querySelector('.preview-line').setAttribute('d', line);
        document.querySelector('.preview-area').setAttribute('d', line + ' L300,64 L0,64 Z');
        sampleIndex += 1;
        hasRun = true;
        panel.classList.remove('is-running');
        button.disabled = false;
        label.textContent = restingLabel;
        updateStatus();
      };
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) finish();
      else window.setTimeout(finish, 1100);
    });
  }

  // --- Scroll-driven motion (homepage mocks & sections) ---
  // Motivated motion only: the mocks illustrate a live measuring app, so lines
  // draw in and numbers count up once. Everything
  // is gated on prefers-reduced-motion and added by JS (no-JS stays static).
  function startCountUp(el) {
    if (el.dataset.counted) return;
    el.dataset.counted = '1';
    const finalText = el.textContent.trim();
    const target = parseFloat(finalText);
    if (isNaN(target)) return;
    const decimals = (finalText.split('.')[1] || '').length;
    const duration = 1600;
    const start = performance.now();
    const ease = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = (ease(p) * target).toFixed(decimals);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = finalText;
    }
    requestAnimationFrame(tick);
  }

  function initMotion() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const revealEls = document.querySelectorAll(
      '.feature-text, .stats .stat, .compare-head, .compare-intro, .compare-table-wrap, .compare-note'
    );
    revealEls.forEach((el) => el.classList.add('reveal'));

    const mocks = document.querySelectorAll('.mock');
    mocks.forEach((m) => {
      m.classList.add('motion');
      m.querySelectorAll('svg path').forEach((p) => {
        if (p.getAttribute('fill') === 'none') {
          const len = p.getTotalLength();
          p.style.strokeDasharray = len;
          p.style.strokeDashoffset = len;
          p.classList.add('draw-line');
        } else {
          p.classList.add('draw-fill');
        }
      });
      m.querySelectorAll('.reading .big, .rpm-num').forEach((el) =>
        el.setAttribute('data-countup', '')
      );
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.add('in-view');
          el.querySelectorAll('.draw-line').forEach((p) => {
            p.style.strokeDashoffset = 0;
          });
          el.querySelectorAll('[data-countup]').forEach(startCountUp);
          io.unobserve(el);
        });
      },
      { threshold: 0.35 }
    );

    revealEls.forEach((el) => io.observe(el));
    mocks.forEach((el) => io.observe(el));

  }

  // --- Initialize ---
  function init() {
    // Initialize i18n system
    i18n.init();

    initNavigation();
    initPreview();

    // Scroll-driven motion
    initMotion();

    // Initialize smooth scroll
    initSmoothScroll();

    // Native <details> supplies keyboard and screen-reader behavior for the FAQ.
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
