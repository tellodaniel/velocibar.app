/**
 * VelociBar — Landing Page Scripts
 * Minimal, accessible, no dependencies
 * With i18n support for Spanish and English
 */

(function () {
  'use strict';

  // --- i18n System ---
  const i18n = {
    currentLang: 'es',
    
    // Detect user's preferred language
    detectLanguage() {
      // Check localStorage first
      const saved = localStorage.getItem('velocibar-lang');
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
      localStorage.setItem('velocibar-lang', lang);
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

        const saved = localStorage.getItem('velocibar-lang');
        if ((saved === 'es' || saved === 'en') && saved !== staticLang) {
          // Send the visitor to this page's own translation, not the homepage
          const alt = document.querySelector('link[rel="alternate"][hreflang="' + saved + '"]');
          window.location.replace(alt ? alt.getAttribute('href') : (saved === 'en' ? '/en/' : '/'));
          return;
        }

        const toggle = document.getElementById('lang-toggle');
        if (toggle) {
          toggle.addEventListener('click', () => {
            const target = toggle.getAttribute('data-lang-target');
            if (target) localStorage.setItem('velocibar-lang', target);
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

  // --- Speed counter animation ---
  function animateSpeedCounter() {
    const counter = document.getElementById('speed-counter');
    if (!counter) return;

    const target = 92;
    const finalLabel = '92.4';
    const duration = 1800;
    const startTime = performance.now();

    // Easing function for smooth deceleration
    function easeOutExpo(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const currentValue = Math.floor(easedProgress * target);

      counter.textContent = currentValue;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = finalLabel;
      }
    }

    // Start animation when element is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(updateCounter);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(counter);
  }

  // --- Scroll-driven motion (homepage mocks & sections) ---
  // Motivated motion only: the mocks illustrate a live measuring app, so lines
  // draw in, numbers count up, and the two engine chips take turns. Everything
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

    const mocks = document.querySelectorAll('.mock, .vb-panel');
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

    // The two measurement engines take turns, like in the real app
    const chips = document.querySelectorAll('.source-row .source-chip');
    if (chips.length === 2) {
      setInterval(() => {
        chips.forEach((c) => c.classList.toggle('is-active'));
      }, 4000);
    }
  }

  // --- Initialize ---
  function init() {
    // Initialize i18n system
    i18n.init();

    // Start speed counter animation
    animateSpeedCounter();

    // Scroll-driven motion
    initMotion();

    // Initialize smooth scroll
    initSmoothScroll();

    // Keyboard accessibility for FAQ items
    document.querySelectorAll('.faq-item summary').forEach((summary) => {
      summary.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          summary.click();
        }
      });
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
