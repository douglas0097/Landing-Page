document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Ajustado o offset para compensar o header fixo e o novo padding
                window.scrollTo({
                    top: targetSection.offsetTop - 80, 
                    behavior: 'smooth'
                });
            }
        });
    });
});