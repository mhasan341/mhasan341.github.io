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
