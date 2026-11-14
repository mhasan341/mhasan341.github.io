// Theme is a local preference; it does not contact a service.
const themeToggle = document.getElementById('theme-toggle');
let savedTheme;
try { savedTheme = localStorage.getItem('theme'); } catch { /* Storage may be unavailable. */ }
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
function applyTheme(dark) {
    document.body.classList.toggle('dark-mode', dark);
    if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', String(dark));
        themeToggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
    }
}
applyTheme(savedTheme ? savedTheme === 'dark' : systemTheme.matches);
systemTheme.addEventListener('change', event => {
    if (!savedTheme) applyTheme(event.matches);
});
themeToggle?.addEventListener('click', () => {
    const dark = !document.body.classList.contains('dark-mode');
    applyTheme(dark);
    savedTheme = dark ? 'dark' : 'light';
    try { localStorage.setItem('theme', savedTheme); } catch { /* Keep the current page usable. */ }
});
// Navigation and content remain usable without JavaScript.
const navigation = document.querySelectorAll('.home-nav a[href^="#"]');
const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        navigation.forEach(link => {
            if (link.getAttribute('href') === `#${entry.target.id}`) {
                link.setAttribute('aria-current', 'location');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }
}, { rootMargin: '-15% 0px -65% 0px' });
document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
