const btnMenu = document.querySelector('.btn-open');
const Menu = document.querySelector('.lista-menu');
const btnClose = document.querySelector('.x-hamburguer')

function mudouTamanho() {
    if (window.innerWidth <= 768) {

        btnMenu.classList.remove('active');
        
        Menu.classList.remove('active');

        btnClose.classList.remove('active');

    }
}

btnMenu.addEventListener('click', () => {

    Menu.classList.toggle('active');
    
    btnClose.classList.toggle('active');

})

function fecharMenu() {
    if (Menu.classList.contains('active'), btnClose.classList.contains('active')) {
        Menu.classList.remove('active');
        btnClose.classList.remove('active');
    }
}