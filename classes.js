const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const valor3 = document.getElementById("valor3");
const valor4 = document.getElementById("valor4");
const carrinho_btn = document.getElementById("carrinho_btn");

const quantidade = document.getElementById("quantidade");
const preco = document.getElementById("preco");

function calculo() {
    totalquantidade = Number(valor1.value) + Number(valor2.value) + Number(valor3.value) + Number(valor4.value);
    quantidade.innerHTML = totalquantidade;
    totalpreco = Number(valor1.value*8.50) + Number(valor2.value*6.00) + Number(valor3.value*10.50) + Number(valor4.value*5.00);
    preco.innerHTML = totalpreco;
}

carrinho_btn.addEventListener("click", calculo);