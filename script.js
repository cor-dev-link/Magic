document.addEventListener('DOMContentLoaded', () => {
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }

    const smoothScroll = () => {
        const links = document.querySelectorAll('a[href^="#"]');
        
        for (const link of links) {
            link.addEventListener('click', clickHandler);
        }
        
        function clickHandler(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const offsetTop = document.querySelector(href).offsetTop;
        
            scroll({
                top: offsetTop - 60,
                behavior: "smooth"
            });

            // Close mobile menu if open
            const nav = document.querySelector('.nav-links');
            const burger = document.querySelector('.burger');
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        }
    }

    const handleContactForm = () => {
        const form = document.getElementById('contact-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically send the form data to a server
            // For this example, we'll just log it to the console
            const formData = new FormData(form);
            console.log('Form submitted with data:', Object.fromEntries(formData));
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        });
    }

    const handleScroll = () => {
        const header = document.querySelector('header');
        const scrollTrigger = 60;

        window.addEventListener('scroll', () => {
            if (window.scrollY >= scrollTrigger) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    const initAOS = () => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }

    navSlide();
    smoothScroll();
    handleContactForm();
    handleScroll();
    initAOS();
});