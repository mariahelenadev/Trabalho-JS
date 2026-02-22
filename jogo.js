// Aparece um número aleatório entre 1 e 10
let secreto = Math.floor(Math.random() * 10) + 1;

let tentativas = 3;
let acertou = false;

while (tentativas > 0 && !acertou) {

    let chute = Number(prompt("Adivinhe o número entre 1 e 10:"));

    if (chute === secreto) {
        alert("Parabéns! Você acertou o número!");
        acertou = true;
    } else {
        tentativas--;

        if (tentativas > 0) {
            if (chute > secreto) {
                alert("O número secreto é MENOR. Tentativas restantes: " + tentativas);
            } else {
                alert("O número secreto é MAIOR. Tentativas restantes: " + tentativas);
            }
        } else {
            alert("Suas tentativas acabaram! O número era: " + secreto);
        }
    }
}