// Blog pages are already rendered in their URL's language. Keep explicit links
// authoritative; only remember a choice for the rest of the site.
(() => {
  const toggle = document.getElementById('lang-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const lang = toggle.getAttribute('data-lang-target');
    if (lang !== 'en' && lang !== 'es') return;
    try {
      localStorage.setItem('velocibar-lang', lang);
    } catch (_) {
      // Navigation still works when storage is unavailable.
    }
  });
})();
