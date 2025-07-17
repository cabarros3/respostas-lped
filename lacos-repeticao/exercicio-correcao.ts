// corrigindo os tipos das variáveis
let a: number = 10; //10 ou -10
let b: number = 2; //2 ou -2
let r: number = 0;
let i: number = 0; // corrige contador

// usa um if para verificar se é um número negativo ou positivo
if (b > 0) {
  while (i < b) {
    r = r + a;
    i++;
  }
} else {
  while (i > b) {
    r = r - a;
    i--;
  }
}
console.log(r);

//
