document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links').querySelector('ul');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('nav-visible');
        hamburger.classList.toggle('active');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('nav-visible');
            hamburger.classList.remove('active');
        }
    });
});