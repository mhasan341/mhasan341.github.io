// Resolve the shared preference before styles paint; no network or analytics.
(() => {
  'use strict';
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const validTheme = value => value === 'light' || value === 'dark' ? value : null;
  let preference = null;
  try { preference = validTheme(localStorage.getItem('theme')); } catch { /* Private storage may be unavailable. */ }

  function applyTheme() {
    const theme = preference || (system.matches ? 'dark' : 'light');
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    const color = document.querySelector('meta[name="theme-color"]');
    if (color?.dataset[theme]) color.content = color.dataset[theme];
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      button.setAttribute('aria-pressed', String(theme === 'dark'));
      button.title = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;
    });
  }

  applyTheme();
  system.addEventListener('change', () => { if (!preference) applyTheme(); });
  window.addEventListener('storage', event => {
    if (event.key !== 'theme' && event.key !== null) return;
    preference = validTheme(event.newValue);
    applyTheme();
  });

  function connectControls() {
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      button.addEventListener('click', () => {
        preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem('theme', preference); } catch { /* The current page still switches normally. */ }
        applyTheme();
      });
    });
    applyTheme();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', connectControls, { once: true });
  } else {
    connectControls();
  }
})();
