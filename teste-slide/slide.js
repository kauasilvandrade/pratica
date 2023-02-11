let count = 1;
document.getElementById("btn1").checked = true;

setInterval (function() {

    proximaImagem();

}, 5000)

function proximaImagem() {
    count++;
    if (count > 5) {
        count = 1;
    }

    document.getElementById("btn"+count).checked = true;
}