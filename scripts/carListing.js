const menuToggle = document.querySelector('.menu-toggle');


menuToggle.addEventListener('click', toggleMenu);


function toggleMenu() {
    menuToggle.classList.toggle('open');
    document.querySelector('.side-nav').classList.toggle('active');
}