/**
 * VelociBar — Landing Page Scripts
 * Minimal, accessible, no dependencies
 */

(function () {
  'use strict';

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
      showToast('El enlace de descarga estará disponible pronto.');
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

