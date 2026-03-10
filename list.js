let lista = [];

    function adicionarItem(){

    let item = document.getElementById("item").value;

    lista.push(item);

    document.getElementById("resultado").innerHTML = "Item adicionado!";

}

function removerItem(){

    let item = document.getElementById("item").value;

    let posicao = lista.indexOf(item);

    if(posicao != -1){

    lista.splice(posicao,1);

    document.getElementById("resultado").innerHTML = "Item removido";

}
else{
    
    document.getElementById("resultado").innerHTML = "Item não encontrado";

}

}

function pesquisarNome(){

    let item = document.getElementById("item").value;

    let posicao = lista.indexOf(item);

    if(posicao != -1){

    document.getElementById("resultado").innerHTML = "Item encontrado na posição: " + posicao;

}else{

    document.getElementById("resultado").innerHTML = "Item não encontrado";

}

}

function pesquisarPosicao(){

    let pos = prompt("Digite a posição do item");

    if(pos >= 0 && pos < lista.length){

    document.getElementById("resultado").innerHTML = "Item na posição " + pos + ": " + lista[pos];

    }else{

    document.getElementById("resultado").innerHTML = "Posição inválida";

}

}

function mostrarLista(){

    document.getElementById("resultado").innerHTML = "Lista: " + lista.join(", ");

}