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

    const items = document.querySelectorAll('.timeline-item');

    const isInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const run = () => {
        items.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('visible');
            }
        });
    };

    window.addEventListener('load', run);
    window.addEventListener('resize', run);
    window.addEventListener('scroll', run);

    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('message-sent');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        successMessage.style.display = 'block';

        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 3000);

        form.reset();
    });
});