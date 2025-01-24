// Select the navbar
const navbar = document.getElementById('navbar');

// Add scroll event listener to the window
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Add the "scrolled" class when scrolled more than 50px
        navbar.classList.add('scrolled');
    } else {
        // Remove the "scrolled" class when at the top
        navbar.classList.remove('scrolled');
    }
});

// Image Slider Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const intervalTime = 2000; // Time interval in milliseconds (e.g., 3000ms = 3 seconds)

// Update the slider function
function updateSlider() {
    const offset = -currentSlide * 100;
    document.querySelector('.slider-wrapper').style.transform = `translateX(${offset}%)`;
}

// Function to change slide
function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    updateSlider();
}

// Event listeners for next and previous buttons
document.querySelector('.next-btn').addEventListener('click', () => {
    changeSlide(1);
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    changeSlide(-1);
});

// Autoplay functionality
let autoplay = setInterval(() => {
    changeSlide(1); // Automatically go to the next slide every interval
}, intervalTime);

// Optionally, you can reset the autoplay timer when a user interacts with the slider
document.querySelector('.slider-container').addEventListener('mouseenter', () => {
    clearInterval(autoplay); // Stop autoplay on hover
});

document.querySelector('.slider-container').addEventListener('mouseleave', () => {
    autoplay = setInterval(() => {
        changeSlide(1); // Restart autoplay after user stops hovering
    }, intervalTime);
});

// Initializing the slider display
updateSlider();

// Scroll Visibility Logic
function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Add 'visible' class to elements when they come into view
function checkVisibility() {
    const aboutContent = document.querySelector('.about-content');
    if (isInView(aboutContent)) {
        aboutContent.classList.add('visible');
    }
}

// Listen for scroll events to check if element is in view
window.addEventListener('scroll', checkVisibility);

// Initial check if element is in view (for when page loads)
checkVisibility();


