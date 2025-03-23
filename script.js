// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Handle all links that start with #
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    function smoothScroll(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const navbarToggler = document.querySelector('.navbar-toggler');
                navbarToggler.click();
            }
        }
    }
    
    // Add click event listener to all scroll links
    scrollLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    
    // Specifically handle the hero section button
    const heroButton = document.querySelector('.hero-buttons .btn');
    if (heroButton) {
        heroButton.addEventListener('click', smoothScroll);
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a.scroll-to').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 