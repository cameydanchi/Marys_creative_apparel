
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


// Select elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

// Toggle the mobile menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// Close the menu when a link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
    });
});
