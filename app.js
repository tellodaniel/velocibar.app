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

  // --- Toast notification ---
  function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }

  // --- Download button handler ---
  function handleDownload(event) {
    event.preventDefault();
    // App Store URL for VelociBar
    const downloadUrl = 'https://apps.apple.com/us/app/velocibar/id6756196355';

    if (downloadUrl) {
      window.location.href = downloadUrl;
    } else {
      const message = i18n.get('toast.downloadSoon');
      showToast(message);
    }
  }

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

    const target = 847;
    const duration = 2000; // 2 seconds
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
        counter.textContent = target;
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

  // --- Initialize ---
  function init() {
    // Initialize i18n system
    i18n.init();
    
    // Bind download buttons
    const downloadBtns = document.querySelectorAll('#download-btn, #download-btn-footer');
    downloadBtns.forEach((btn) => {
      btn.addEventListener('click', handleDownload);
    });

    // Start speed counter animation
    animateSpeedCounter();

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
