'use strict'

const loginContainer = document.getElementById('login-container');

const moverOverlay = () => loginContainer.classList.toggle('mover') 

document.getElementById('open-register').addEventListener('click', moverOverlay);

document.getElementById('open-login').addEventListener('click', moverOverlay);

document.getElementById('open-register-mobile').addEventListener('click', moverOverlay);

document.getElementById('open-login-mobile').addEventListener('click', moverOverlay);