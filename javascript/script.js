const navbar = document.getElementById('navbar');
const navbarToggle = document.getElementById('navbar-toggle');

// Toggle mobile navbar menu
navbarToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Add 'scrolled' class on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#klijenti-slider', {
        type: 'loop',
        perPage: 3,
        breakpoints: {
            1024: {
                perPage: 2,
            },
            768: {
                perPage: 1,
            },
        },
        gap: '20px',
        padding: { right: '50px', left: '50px' },
    }).mount();
    
    new Splide('#logo-track-slider', {
        type: 'loop',          // Loop mode for continuous scrolling
        perPage: 5,            // Number of logos shown at a time
        perMove: 1,            // Move one logo at a time
        autoplay: true,        // Auto-scroll
        interval: 2000,        // Interval between scrolls (milliseconds)
        speed: 500,            // Speed of the scrolling transition
        pauseOnHover: false,   // Keep moving when hovered
        arrows: false,         // Hide arrows
        pagination: false,     // Hide pagination
        breakpoints: {
            1024: { perPage: 4 },
            768: { perPage: 3 },
            480: { perPage: 2 },
        },
    }).mount();

    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
          const answer = question.nextElementSibling;
          const arrow = question.querySelector('.arrow');
      
          if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            arrow.style.transform = 'rotate(0deg)';
          } else {
            document.querySelectorAll('.faq-answer').forEach(item => item.style.maxHeight = null);
            document.querySelectorAll('.arrow').forEach(item => item.style.transform = 'rotate(0deg)');
      
            answer.style.maxHeight = answer.scrollHeight + 'px';
            arrow.style.transform = 'rotate(180deg)';
          }
        });
      });
});