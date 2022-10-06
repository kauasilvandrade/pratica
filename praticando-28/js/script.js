
//MUDOU TAMANHO DE TELA
function mudouTamanho() {
    if (window.innerWidth >= 768) {
        navMenu.style.display = 'block'
    } else {
        navMenu.style.display = 'none'
    }
}

// BOTÃO ABRIR MENU
function openMenu() {
    if (navMenu.style.display == 'block') {
        navMenu.style.display = 'none'
    } else {
        navMenu.style.display = 'block'
    }
}