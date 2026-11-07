const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('#nav-menu ul li a');

// Toggle mobile menu
burger.addEventListener('click', () => {
    navMenu.classList.toggle('nav-active');
});

// Header scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('nav-active');
    });
});

// Update current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Carousel Logic
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dotsContainer');

let counter = 0;
const size = 100; // 100% width for each slide

// Create dots
carouselImages.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (idx === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        counter = idx;
        updateCarousel();
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateCarousel() {
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + '%)';
    dots.forEach(dot => dot.classList.remove('active'));
    dots[counter].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        counter = carouselImages.length - 1;
    } else {
        counter--;
    }
    updateCarousel();
});

// Auto-play
let autoPlay = setInterval(() => {
    nextBtn.click();
}, 5000);

// Pause auto-play on hover or interaction
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', () => clearInterval(autoPlay));
carouselContainer.addEventListener('mouseleave', () => {
    autoPlay = setInterval(() => {
        nextBtn.click();
    }, 5000);
});
