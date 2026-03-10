async function buscarCep() {

    let cep = document.getElementById("cep").value;

    try {

        let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        let dados = await resposta.json();

        if (dados.erro) {

            document.getElementById("logradouro").innerText = "";
            document.getElementById("bairro").innerText = "";
            document.getElementById("cidade").innerText = "";
            document.getElementById("estado").innerText = "";

            alert("CEP não encontrado");

        } else {

            document.getElementById("logradouro").innerText = dados.logradouro;
            document.getElementById("bairro").innerText = dados.bairro;
            document.getElementById("cidade").innerText = dados.localidade;
            document.getElementById("estado").innerText = dados.uf;

        }

    } catch (erro) {

        alert("Erro ao buscar o CEP");

    }

}