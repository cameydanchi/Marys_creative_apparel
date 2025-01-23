let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function showSlide(index) {
    const totalSlides = slides.length;
    if (index >= totalSlides) currentSlide = 0;
    if (index < 0) currentSlide = totalSlides - 1;
    const offset = -currentSlide * 100;
    document.querySelector('.slider-wrapper').style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    currentSlide--;
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide++;
    showSlide(currentSlide);
});

showSlide(currentSlide);
