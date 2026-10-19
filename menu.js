fetch('/helpers/footer.html')
    .then(res => res.text())
    .then(html => {
        const contactEl = document.getElementById('contact');
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