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
    // Placeholder: Replace with actual download URL when available
    const downloadUrl = null;

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

  // --- Initialize ---
  function init() {
    // Bind download buttons
    const downloadBtns = document.querySelectorAll('#download-btn, #download-btn-footer');
    downloadBtns.forEach((btn) => {
      btn.addEventListener('click', handleDownload);
    });

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

