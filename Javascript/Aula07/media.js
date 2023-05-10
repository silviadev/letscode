let array = [2, 5, 3, 8, 9, 12, -4, 1, 19]
let soma = 0;
let media = 0;

for (let i = 0; i < array.length; i++) {
  soma = soma + array[i];
}

media = soma / array.length;

console.log(media); 