document.querySelector('#bVermelho')?.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red'
})
document.querySelector('#bVerde')?.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green'
})
document.querySelector('#bNormal')?.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white'
})
document.querySelector('#bMsg')?.addEventListener('click', () => {
    alert('Olá, seja bem-vindo ao meu app da aula 01 Introdução ao JavaScript')
});