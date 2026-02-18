document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    // Scroll to Top & Sticky Navbar effects
    const floatUpBtn = document.querySelector('.float-up');
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        // Navbar shadow effect on scroll
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
        } else {
            navbar.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
        }

        // Show/Hide Scroll to Top Button
        if (window.scrollY > 300) {
            floatUpBtn.classList.add('visible');
        } else {
            floatUpBtn.classList.remove('visible');
        }
    });

    // Scroll to Top Action
    floatUpBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // WhatsApp Floating Button Action (Ensuring it works via script)
    const waBtn = document.querySelector('.float-wa');
    waBtn.addEventListener('click', (e) => {
        // Optional: Analytics or tracking here
        console.log("WhatsApp button clicked");
        // Navigation handled by href, but we can enforce it here if needed
    });
});
