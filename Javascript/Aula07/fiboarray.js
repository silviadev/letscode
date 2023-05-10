let quant = 11; 
let fibonacci = [0, 1]; 

//console.log(fibonacci); 

for (let i = 2; i < quant; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; 
}

console.log(fibonacci); 
