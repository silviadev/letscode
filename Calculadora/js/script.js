function inserir(num){
    document.querySelector(".tela").innerHTML += num;
}

function limpar(){
    document.querySelector(".tela").innerHTML = "";
}

function apagar(){
    var resultado = document.querySelector('.tela').innerHTML;
    document.querySelector('.tela').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.querySelector('.tela').innerHTML;
    if(resultado){
        document.querySelector('.tela').innerHTML = eval(resultado);
    }
    else{
        document.querySelector('.tela').innerHTML = "0";
    }
}