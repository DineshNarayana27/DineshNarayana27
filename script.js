document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Placeholder for join functionality
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Thank you for your interest! The community platform is still under construction. Please check back soon!');
        });
    });

    // Animate cards on scroll
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 0.5s ease-out forwards`;
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        card.style.opacity = 0; // Hide cards initially
        observer.observe(card);
    });
});

// Add keyframes for the animation to the stylesheet
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}`;
document.head.appendChild(styleSheet);
