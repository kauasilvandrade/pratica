const listaMenu = document.querySelector('.cabecalho__listaLinks');
const imgHamburguer = document.querySelector('.botaoMenu__hamburguer');

// FUNCÃO BOTÃO ABRIR E FECHAR MENU 
function menuShow(event) {

    // MENU
    listaMenu.classList.toggle('ativado');

    // MUDAR IMAGEM
    if (listaMenu.classList.contains('ativado')) {
        imgHamburguer.src = "img/x-hamburguer.webp";
        imgHamburguer.style.width = '1.8rem';
        
    } else {
        imgHamburguer.src = "img/hamburguer.webp";
        imgHamburguer.style.width = '2.2rem';
    }

    // TOUCH NO CELULAR
    if (event.type == 'touchstart') event.preventDefault();

    // ACESSIBILIDADE
    const ativado = listaMenu.classList.contains('ativado');

    event.currentTarget.setAttribute('aria-expanded', ativado);

    if (ativado) {

        event.currentTarget.setAttribute('aria-label', 'Botão fechar menu');

    } else {
        
        event.currentTarget.setAttribute('aria-label', 'Botão abrir menu');
    }

}

// BOTÃO DE ABRIR E FECHAR MENU
const btnMenu = document.getElementById('openMenu');

btnMenu.addEventListener('click', menuShow);

btnMenu.addEventListener('touchstart', menuShow);


const subMenu = document.querySelector('.cabecalho__subMenu');

const abrirSubMenu = document.querySelector('.botaoSubMenu__AbrirSubmenu');

const fecharSubMenu = document.querySelector('.botaoSubMenu__FecharSubmenu');

// FUNCÃO PARA ABRIR O SUB MENU
function openSubMenu(event) {
    
    // SUB MENU
    subMenu.classList.toggle('ativado');

    // MUDAR ICONE 
    if (subMenu.classList.contains('ativado')) {

        abrirSubMenu.classList.add('ativado');

        fecharSubMenu.classList.add('ativado');
        
    } else {
        
        abrirSubMenu.classList.remove('ativado');

        fecharSubMenu.classList.remove('ativado');

    }

    // TOUCH NO CELULAR
    if (event.type == 'touchstart') event.preventDefault();

    // ACESSIBILIDADE
    const ativado = subMenu.classList.contains('ativado');

    event.currentTarget.setAttribute('aria-expanded', ativado);

    if (ativado) {

        event.currentTarget.setAttribute('aria-label', 'Botão fechar sub menu');

    } else {

        event.currentTarget.setAttribute('aria-label', 'Botão abrir sub menu');
    }

}

// BOTÃO DE ABRIR E FECHAR SUB MENU
const btnSubMenu = document.getElementById('openSubMenu');

btnSubMenu.addEventListener('click', openSubMenu);

btnSubMenu.addEventListener('touchstart', openSubMenu);

// MUDAR TAMANHO DE TELA
function mudouTamanho() {
    if (window.innerWidth >= 768) {
        
        listaMenu.classList.remove('ativado');

        subMenu.classList.remove('ativado');

        imgHamburguer.src = "img/hamburguer.webp";

        imgHamburguer.style.width = '2.2rem';

    }
}