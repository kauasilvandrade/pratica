
const btnMenu = document.querySelector('.btn-open');
const Menu = document.querySelector('.lista-menu');

btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('active');
    Menu.classList.toggle('active')
})