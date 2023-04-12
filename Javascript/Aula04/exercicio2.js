/* 
 * 1. Escreva um programa para ler 2 valores (considere que não	serão informados valores iguais)	
 *    e escrever o maior deles.
*/

let numero1 = 13;
let numero2 = 12;

if (numero1 > numero2) {
    console.log("Numero 1 é maior que Numero 2");
} else {
    console.log("Numero 2 é maior que Numero 1");
}

/* 
 * 2. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que
 *    diga se ela poderá ou não votar este ano(não considerar o mês)
*/

let anoDeNascimento = 2007;
const anoAtual = 2023;

diferencaAno = anoAtual - anoDeNascimento;

if (diferencaAno >= 16) {
    console.log("Pode votar este ano!");
} else {
    console.log("Não pode votar este ano!");
}


/* 
 * 3. Escreva um programa para ler três números(n1, n2, n3) e imprimir na mesma sequencia de entrada,
 *    entretanto os valores devem está na ordem crescente
*/

let n1 = 3;
let n2 = 2;
let n3 = 4;

// ! LOGICA

// console.log("N1: ", n1);
// console.log("N2: ", n2);
// console.log("N3: ", n3);

N1: 2
N2: 3
N3: 4