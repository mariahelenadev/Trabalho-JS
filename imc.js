// Função que será executada quando o botão for clicado
function calcularIMC() {

    // Pegando os valores digitados pelo usuário
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    // Convertendo os valores para número decimal
    peso = parseFloat(peso);
    altura = parseFloat(altura);

    // Verificando se os campos foram preenchidos corretamente
    if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
        document.getElementById("resultado").innerHTML = 
            "Por favor, insira valores válidos.";
        return; // interrompe a função
    }

    // Calculando o IMC (peso dividido pela altura ao quadrado)
    let imc = peso / (altura * altura);

    // Variável que vai guardar a classificação
    let classificacao = "";

    // Verificando a classificação do IMC
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } 
    else if (imc < 24.9) {
        classificacao = "Peso normal";
    } 
    else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } 
    else {
        classificacao = "Obesidade";
    }

    // Mostrando o resultado na tela (com 2 casas decimais)
    document.getElementById("resultado").innerHTML =
        "Seu IMC é " + imc.toFixed(2) + 
        "<br>Classificação: " + classificacao;
}