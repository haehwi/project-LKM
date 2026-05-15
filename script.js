document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile Menu Toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.querySelector('i').classList.remove('fa-xmark');
            hamburger.querySelector('i').classList.add('fa-bars');
        });
    });

    // Generate Animated Stars
    const starsBg = document.getElementById('stars-bg');
    if (starsBg) {
        for (let i = 0; i < 40; i++) {
            let star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + 'vw';
            star.style.width = (Math.random() * 15 + 5) + 'px';
            star.style.height = star.style.width;
            star.style.animationDuration = (Math.random() * 5 + 5) + 's';
            star.style.animationDelay = (Math.random() * 5) + 's';
            starsBg.appendChild(star);
        }
    }

    // Horizontal Scrolling
    const horizontalLayout = document.getElementById('horizontal-layout');
    if (horizontalLayout) {
        // Convert vertical mouse wheel to horizontal scroll
        horizontalLayout.addEventListener('wheel', (evt) => {
            if (evt.deltaY !== 0) {
                evt.preventDefault();
                horizontalLayout.scrollLeft += evt.deltaY * 3; // Multiplied for better speed
            }
        });

        // Navbar scroll effect & Active link highlighting for horizontal layout
        horizontalLayout.addEventListener('scroll', () => {
            if (horizontalLayout.scrollLeft > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            let current = '';
            const sections = document.querySelectorAll('.horizontal-layout > section, .horizontal-layout > footer');
            
            sections.forEach(section => {
                const sectionLeft = section.offsetLeft;
                if (horizontalLayout.scrollLeft >= (sectionLeft - window.innerWidth / 2)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (current && link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });
    }
});
