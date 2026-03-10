let usuarios = []

function incluirUsuario(){

    let cpf = document.getElementById("cpf").value
    let nome = document.getElementById("nome").value
    let data = document.getElementById("data").value
    let email = document.getElementById("email").value

    let usuario = {
        cpf: cpf,
        nome: nome,
        data: data,
        email: email
    }

    usuarios.push(usuario)

    listarUsuarios()
}

function listarUsuarios(){

    let lista = document.getElementById("listaUsuarios")
    lista.innerHTML = ""

    for(let i = 0; i < usuarios.length; i++){

        let item = document.createElement("li")

        item.textContent =
        usuarios[i].cpf + " - " +
        usuarios[i].nome + " - " +
        usuarios[i].data + " - " +
        usuarios[i].email

        lista.appendChild(item)
    }
}

function pesquisarUsuario(){

    let nomePesquisa = document.getElementById("pesquisa").value
    let lista = document.getElementById("listaUsuarios")

    lista.innerHTML = ""

    for(let i = 0; i < usuarios.length; i++){

        if(usuarios[i].nome.includes(nomePesquisa)){

            let item = document.createElement("li")

            item.textContent =
            usuarios[i].cpf + " - " +
            usuarios[i].nome + " - " +
            usuarios[i].data + " - " +
            usuarios[i].email

            lista.appendChild(item)
        }
    }
}

function excluirUsuario(){

    let cpf = document.getElementById("cpf").value

    for(let i = 0; i < usuarios.length; i++){

        if(usuarios[i].cpf == cpf){

            usuarios.splice(i,1)
            break
        }
    }

    listarUsuarios()
}

function alterarUsuario(){

    let cpf = document.getElementById("cpf").value
    let nome = document.getElementById("nome").value
    let data = document.getElementById("data").value
    let email = document.getElementById("email").value

    for(let i = 0; i < usuarios.length; i++){

        if(usuarios[i].cpf == cpf){

            usuarios[i].nome = nome
            usuarios[i].data = data
            usuarios[i].email = email
        }
    }

    listarUsuarios()
}