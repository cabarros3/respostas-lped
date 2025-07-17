// 01 - imprimir os numeros negativos de 1 em 1, de -1 a -20

let numNegativos: number = -1;

while (numNegativos >= -20) {
  console.log(numNegativos);
  numNegativos--;
}

// 02 - numeros de 3 em 3 de 0 até 30
let tresEmtres: number = 0;

while (tresEmtres <= 30) {
  console.log(tresEmtres);
  tresEmtres = tresEmtres + 3;
}

// 03 - numeros de 3 em 3 de 0 até -30

let tresEmtresNegativos: number = 0;

while (tresEmtresNegativos >= -30) {
  console.log(tresEmtresNegativos);
  tresEmtresNegativos = tresEmtresNegativos - 3;
}

// 04 - 10 primeiros números ímpares

let numeros: number = 0;
let contador: number = 0;

while (contador < 10) {
  if (numeros % 2 != 0) {
    console.log(numeros);
    contador++;
  }
  numeros++;
}

//ex 05 - imprimir os 20 primeiros numeros divisíveis por 3

let num: number = 0;
let count: number = 0;

while (count <= 20) {
  if (num % 3 == 0) {
    console.log(num);
    count++;
  }
  num++;
}

//06 - 10 primeiros numeros divisiveis por 10

let numerous: number = 0;
let conta: number = 0;

while (conta < 10) {
  if (numerous % 10 == 0) {
    console.log(numerous);
    conta++;
  }
  numerous++;
}

//07 - quadrado dos 10 primeiros numeros inteiros

let numersoInteiros: number = 1;

while (numersoInteiros <= 10) {
  let quadrado: number = numersoInteiros ** 2;
  console.log(`O quadrado do número ${numersoInteiros} é ${quadrado}`);
  numersoInteiros++;
}

// 08 - Imprimir os números entre 0 e 25 em ordem decrescente.

let inicio: number = 0;
let fim: number = 25;

while (fim >= inicio) {
  console.log(fim);
  fim--;
}
