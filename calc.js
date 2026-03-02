function soma(n1, n2){
    return n1 + n2
}
function sub(n1, n2){
    return n1 - n2
}
function multi(n1, n2){
    return n1 * n2
}
function divi(n1, n2){
    return n1 / n2
}


function calcular(operacao) {
    
    let n1 = Number(document.getElementById('num1').value)
    let n2 = Number(document.getElementById('num2').value)
    let result = 0
    switch (operacao) {
        case '+':
            result = soma(n1, n2)
            break;
        case '-':
            result = sub(n1, n2)
            break;
        case '*':
            result = multi(n1, n2)
            break;
        case '/':
            result = divi(n1, n2)
            break;
        
    }



    resultado.innerHTML = '<p>' + result + '</p>'
}



let botao_soma = document.querySelector('#btnsoma')
let botao_sub = document.querySelector('#btnsub')
let botao_multi = document.querySelector('#btnmulti')
let botao_divi = document.querySelector('#btndivi')
let botao_limpar = document.querySelector('#btnlimpar')
let result = document.querySelector('#resultado')
let num1 = 0
let num2 = 0

botao_soma.addEventListenner('click', () => {
    calcular('+')
})
botao_sub.addEventListenner('click', () => {
    console.log('subtracao')
    console.log(document.getElementById('num1'))
    let n1 = document.getElementById('num1')
    let n2 = document.getElementById('num2')
    let r = 0
    console.log('tipo elemento' + n1 + '' + n2)
    console.log('valor do elemento' + n1.value +' '+ n2.value)
    r = parseFloat(n1.value) - parseFloat(n2.value)
    result.innerHTML = '<p>' + r + '<p>'
})
botao_multi.addEventListenner('click', () => {
    console.log('subtracao')
    console.log(document.getElementById('num1'))
    let n1 = document.getElementById('num1')
    let n2 = document.getElementById('num2')
    let r = 0
    console.log('tipo elemento' + n1 + '' + n2)
    console.log('valor do elemento' + n1.value +' '+ n2.value)
    r = parseFloat(n1.value) * parseFloat(n2.value)
    result.innerHTML = '<p>' + r + '<p>'
})
botao_divi.addEventListenner('click', () => {
    console.log('subtracao')
    console.log(document.getElementById('num1'))
    let n1 = document.getElementById('num1')
    let n2 = document.getElementById('num2')
    let r = 0
    console.log('tipo elemento' + n1 + '' + n2)
    console.log('valor do elemento' + n1.value +' '+ n2.value)
    r = parseFloat(n1.value) / parseFloat(n2.value)
    result.innerHTML = '<p>' + r + '<p>'
})
botao_limpar.addEventListenner('click', () => {
    result.innerHTML = '<p>' + '0' + '<p>'
})

