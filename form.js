function Cliente(nome,cpf,data_nascimento,telefone,idade,situacao){
    this.nome = nome; 
    this.cpf = cpf;
    this.data_nascimento = data_nascimento;
    this.telefone = telefone;
    this.idade = idade;
    this.situacao = situacao;
}

let clnt = new Cliente('Maria', 
                            '13465789-00',
                            '22/04/2009', 
                            '31987744093', 
                            16, 
                            true);

console.log(cliente);
console.log(cliente['nome']);

let clnt2 = new Cliente('Helena', 
                            '123456789-00',
                            '04/04/2009', 
                            '3199999999', 
                            16, 
                            true);


console.log(clnt2);
console.log(clnt2['nome']);