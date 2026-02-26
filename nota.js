let nota1 = Number(prompt('Digite a primeira nota: '));
let nota2 = Number(prompt('Digite a segunda nota: '));

let media = (nota1 + nota2) / 2 ;

console.log('Media: '+ media);

if ( media <= 4.5) {
    console.log('Aluno reprovado.');
}else if (media >= 5 && media <= 6.5) {
    console.log('Aluno em recuperação.');
}else if (media >= 7 && media <= 10){
    console.log('Aluno aprovado.');
}else{
    console.log('Nota não identificada!! Notas só de 1 a 10.');
}
