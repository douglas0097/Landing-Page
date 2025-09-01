document.addEventListener('DOMContentLoaded', function() {
  
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                formMessage.textContent = 'Por favor, preencha todos os campos.';
                formMessage.className = 'error';
                return;
            }

            formMessage.textContent = `Obrigado, ${name}! Sua mensagem foi recebida com sucesso.`;
            formMessage.className = 'success';

            console.log('Formulário Enviado:');
            console.log(`Nome: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Mensagem: ${message}`);

            contactForm.reset();

            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = '';
            }, 5000);
        });
    }
});