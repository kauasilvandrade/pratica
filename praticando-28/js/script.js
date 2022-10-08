const btnMenu = document.querySelector('.btn-open');
const Menu = document.querySelector('.lista-menu');

function mudouTamanho() {
    if (window.innerWidth <= 768) {

        btnMenu.classList.remove('active');
        
        Menu.classList.remove('active');
    }
}

btnMenu.addEventListener('click', () => {

    btnMenu.classList.toggle('active');

    Menu.classList.toggle('active');

})