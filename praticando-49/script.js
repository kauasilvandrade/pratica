// function GerarDespesa() {
//     let descricaoDespesa = document.getElementById('descricaoDespesa');
//     let valorDespesa = document.getElementById('valorDespesa');

//     if (descricaoDespesa.value.length == 0 || valorDespesa.value.length == 0) {
//         alert('Por favor, insira uma descrição válida e um valor maior que zero.');
//     } else {
//         let div = document.getElementsByTagName('div')[3];
//         let listaDespesa = document.createElement('ul');        
//         listaDespesa.innerHTML = `<li>${descricaoDespesa.value}: R$ ${valorDespesa.value} <button onclick="ApagarDespesa()">Remover</button></li>`
//         div.appendChild(listaDespesa)
        
//         let p = document.getElementById('res');
//         let temp;

//         if (valorDespesa.value > 0) {
//             temp = valorDespesa.value
//         }

//         if (valorDespesa.value >= temp || valorDespesa.value <= temp) {
//             temp = Number(valorDespesa.value) + Number(temp)
//             p.innerHTML = `Total de Despesas: ${Number(temp)}`
//         }

//         descricaoDespesa.value = '';
//         valorDespesa.value = '';

//     }
     
// } 
function GerarDespesa() {
    let descricaoDespesa = document.getElementById('descricaoDespesa');
    let valorDespesa = document.getElementById('valorDespesa');

    if (descricaoDespesa.value.length === 0 || parseFloat(valorDespesa.value) <= 0 || isNaN(parseFloat(valorDespesa.value))) {
        alert('Por favor, insira uma descrição válida e um valor maior que zero.');
    } else {
        let listaDespesas = document.getElementById('listaDespesas');
        let novaDespesa = document.createElement('li');
        novaDespesa.innerHTML = `${descricaoDespesa.value}: R$ ${valorDespesa.value} <button onclick="ApagarDespesa(this)">Remover</button>`;
        listaDespesas.appendChild(novaDespesa);

        let totalDespesas = document.getElementById('res');
        let valorTotal = parseFloat(totalDespesas.textContent.split(': ')[1]) || 0;
        valorTotal += parseFloat(valorDespesa.value);
        totalDespesas.textContent = `Total de Despesas: ${valorTotal.toFixed(2)}`;

        descricaoDespesa.value = '';
        valorDespesa.value = '';
    }
}

function ApagarDespesa(botao) {
    let valorDespesaRemovida = parseFloat(botao.parentElement.textContent.split(': R$ ')[1]);
    let totalDespesas = document.getElementById('res');
    let valorTotal = parseFloat(totalDespesas.textContent.split(': ')[1]);
    valorTotal -= valorDespesaRemovida;
    totalDespesas.textContent = `Total de Despesas: ${valorTotal.toFixed(2)}`;

    botao.parentElement.remove();
}
