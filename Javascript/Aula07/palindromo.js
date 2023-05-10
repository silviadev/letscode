let str = "ana";
let cleanStr = str;

let isPalindrome = true;
for (let i = 0; i < cleanStr.length; i++) {
  if (cleanStr[i] !== cleanStr[cleanStr.length - i - 1]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(str + " é um palíndromo!");
} else {
  console.log(str + " não é um palíndromo.");
}
