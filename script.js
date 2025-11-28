// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle ? themeToggle.querySelector('i') : null;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    body.classList.add('dark-mode');
    if (icon) icon.classList.replace('fa-moon', 'fa-sun');
}

// Toggle Theme
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');

        // Update Icon with rotation animation
        if (icon) {
            icon.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                if (isDark) {
                    icon.classList.replace('fa-moon', 'fa-sun');
                } else {
                    icon.classList.replace('fa-sun', 'fa-moon');
                }
                icon.style.transform = 'rotate(0deg)';
            }, 200);
        }

        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// 3D Tilt Effect for Stats Cards
const cards = document.querySelectorAll('.stat');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// Profile Image Tilt & Shine
const profileContainer = document.querySelector('.profile-img-container');
const tiltWrapper = document.querySelector('.profile-tilt-wrapper');

if (profileContainer && tiltWrapper) {
    profileContainer.addEventListener('mousemove', (e) => {
        const rect = profileContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation (increased range)
        const rotateX = ((y - centerY) / centerY) * -25;
        const rotateY = ((x - centerX) / centerX) * 25;

        // Calculate translation (movement)
        const translateX = ((x - centerX) / centerX) * 10;
        const translateY = ((y - centerY) / centerY) * 10;

        // Update CSS variables for shine effect
        profileContainer.style.setProperty('--x', `${(x / rect.width) * 100}%`);
        profileContainer.style.setProperty('--y', `${(y / rect.height) * 100}%`);

        // Apply transformations to wrapper
        tiltWrapper.style.transform = `
            perspective(1000px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg) 
            scale(1.1) 
            translateX(${translateX}px) 
            translateY(${translateY}px)
        `;
    });

    profileContainer.addEventListener('mouseleave', () => {
        tiltWrapper.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1) translateX(0) translateY(0)';
        // Reset shine position to center
        profileContainer.style.setProperty('--x', '50%');
        profileContainer.style.setProperty('--y', '50%');
    });


}

// Hero Parallax Effect
const hero = document.querySelector('.hero');
if (hero) {
    hero.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        hero.style.backgroundPosition = `${x * 50}px ${y * 50}px`;

        const content = hero.querySelector('.hero-content');
        if (content) {
            content.style.transform = `translate(-${x * 20}px, -${y * 20}px)`;
        }
    });
}

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Elements to animate
const animateElements = document.querySelectorAll('.project-card, .experience-item, .skill-category, .section-title');

animateElements.forEach((el, index) => {
    // Set initial state
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

    // Stagger delay for grids
    if (el.classList.contains('project-card') || el.classList.contains('skill-category')) {
        el.style.transitionDelay = `${(index % 3) * 0.1}s`;
    }

    observer.observe(el);
});

// Smooth Scroll with Header Offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active State for Dock
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.dock-item a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
