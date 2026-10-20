fetch('/helpers/footer.html')
    .then(res => res.text())
    .then(html => {
        const contactEl = document.getElementById('contact-section');
        if (contactEl) {
            contactEl.innerHTML = html;
        }
    })
    .catch(err => console.error('Erreur lors du chargement du footer :', err));

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const dropdownToggle = document.querySelector('.dropdown-toggle');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
    }

    if (closeBtn && mobileMenu) {
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }

    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault(); 
            const parentLi = dropdownToggle.parentElement;
            parentLi.classList.toggle('open');
            
            const isExpanded = parentLi.classList.contains('open');
            dropdownToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    const menuLinks = document.querySelectorAll('.mobile-menu a:not(.dropdown-toggle)');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
            }
        });
    });
});



// -------------- Formulaire de contact ------------------
document.addEventListener('submit', async function(e) {
    if (e.target && e.target.id === 'contact-form') {
        e.preventDefault(); 

        const contactForm = e.target;
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const formData = new FormData(contactForm);

        const originalText = submitBtn.textContent;
        submitBtn.textContent = "Envoi en cours...";
        submitBtn.disabled = true;

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (response.ok) {
                alert('Merci ! Votre demande a bien été envoyée.');
                contactForm.reset(); 
            } else {
                alert('Erreur : ' + (data.message || 'Une erreur est survenue.'));
            }
        } catch (error) {
            console.error('Erreur :', error);
            alert('Impossible d’envoyer le formulaire pour le moment.');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }
});