//put the header and footer in each page
fetch('/helpers/header.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('header').innerHTML = html;

        initMobileMenu();
        setActiveMenu();
});

fetch('/helpers/footer.html')
.then(res => res.text())
.then(html => {
    document.getElementById('contact').innerHTML = html;
});

function initMobileMenu() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const close = document.getElementById('close');
    const menu = document.querySelector('.menu');
    const linkContact = document.getElementById('link-contact')

    if (!hamburgerMenu || !close || !menu) return;

    hamburgerMenu.addEventListener('click', () => {
        menu.classList.remove('hidden');
        hamburgerMenu.classList.add('hidden');
        close.classList.remove('hidden');
    });

    close.addEventListener('click', () => {
        menu.classList.add('hidden');
        close.classList.add('hidden');
        hamburgerMenu.classList.remove('hidden');
    });

    linkContact.addEventListener('click', ()=>{
        menu.classList.add('hidden');
        hamburgerMenu.classList.remove('hidden');
        close.classList.add('hidden');
    });
}

function setActiveMenu() {
    const currentPath = window.location.pathname; 
    const links = document.querySelectorAll('.menu a');

    links.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
        }

        if (currentPath === '/' && link.getAttribute('href') === '/') {
        link.classList.add('active');
        }
    });
}



