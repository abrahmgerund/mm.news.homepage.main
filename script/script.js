const toggleMenu = document.querySelector('.nav__mobile-menu-toggle-open');
const toggleMenuClose = document.querySelector('.nav__mobile-menu-toggle-close');
const menuSlide = document.querySelector('.nav__mobile-menu-slide');
const mobileBlur = document.querySelector('body');
const nav = document.querySelector('nav');


const mobileMenu = function () {
    menuSlide.classList.toggle('active');
    mobileBlur.classList.toggle('mobile-menu-active');
}

const navOpaque = function () {
    if (window.scrollY > 0) {
        nav.classList.add('nav-scroll--active');
    } else {
        nav.classList.remove('nav-scroll--active');
    }

    console.log(window.scrollY);
}



toggleMenu.addEventListener('click', mobileMenu);
toggleMenuClose.addEventListener('click', mobileMenu);
window.addEventListener('scroll', navOpaque);

