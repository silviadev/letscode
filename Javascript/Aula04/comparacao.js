let funcionario = {
    nome: "Maria",
    idade:"20",
    cargo:"Pintor"
}

let cargo = {
    cargo1: "Professor",
    cargo2: "Programador",
    cargo3: "gerente"
}

if (funcionario.nome==="mauricio"){
    console.log("Idade:", funcionario.idade);
}
else if (funcionario.cargo=== cargo.cargo1){
    console.log("Usuário Inexistente");
}
else{
    console.log("Erro");
}