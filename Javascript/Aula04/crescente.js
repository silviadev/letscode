let n1 = prompt("Digite o primeiro número:");
let n2 = prompt("Digite o segundo número:");
let n3 = prompt("Digite o terceiro número:");
let aux = 0;

if(n1 > n3){
    aux = n3;
    n3 = n1;
    n1 = aux;
}
else if (n1 > n2){
    aux = n2;
    n2 = n1;
    n1 = aux;
}
else (n2 > n3); {
    aux = n3;
    n3 = n2;
    n2 = aux;
}

//console.log(n1, n2, n3)
alert(`O número é: ${n1}, ${n2}, ${n3}`);


