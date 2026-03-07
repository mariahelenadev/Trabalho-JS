let numeros = [];

for (let i = 0; i < 10; i++) {
    numeros[i] = Math.floor(Math.random() * 100) + 1;
}

console.log("Array original:", numeros);

let crescente = [...numeros];

for (let i = 0; i < crescente.length - 1; i++) {
    for (let j = 0; j < crescente.length - 1 - i; j++) {
        if (crescente[j] > crescente[j + 1]) {
            let temp = crescente[j];
            crescente[j] = crescente[j + 1];
            crescente[j + 1] = temp;
        }
    }
}

console.log("Ordem crescente:", crescente);

let decrescente = [...crescente];
let tempArray = [];

for (let i = decrescente.length - 1; i >= 0; i--) {
    tempArray.push(decrescente[i]);
}

console.log("Ordem decrescente:", tempArray);

let pares = [];
let impares = [];
let primos = [];

function ehPrimo(num) {
    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    } else {
        impares.push(numeros[i]);
    }

    if (ehPrimo(numeros[i])) {
        primos.push(numeros[i]);
    }
}

console.log("Números pares:", pares);
console.log("Números ímpares:", impares);
console.log("Números primos:", primos);