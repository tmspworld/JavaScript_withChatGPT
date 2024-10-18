// Handle the hamburger click for mobile responsiveness
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling functionality
const navLinksArray = document.querySelectorAll('.nav-link');

navLinksArray.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        // Smooth scroll to section
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        // Remove active class from all links
        navLinksArray.forEach(l => l.classList.remove('active'));

        // Highlight the clicked link
        link.classList.add('active');
    });
});
