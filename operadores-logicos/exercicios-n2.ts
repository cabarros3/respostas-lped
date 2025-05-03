// ex 1 - n 2
let a: number = 2;
let b: number = 5;
let c: number = 4;

let maior: number;

if (a > b && a > c) {
  maior = a;
} else if (b > a && b > c) {
  maior = b;
} else {
  maior = c;
}

console.log(`Entre os números ${a}, ${b}, ${c} o maior número é ${maior}`);

// ou
let maiorNum: number = Math.max(a, b, c);
console.log(`Entre os números ${a}, ${b}, ${c} o maior número é ${maior}`);

// ex2 - n1
let menor: number;

if (a < b && a < c) {
  menor = a;
} else if (b < a && b < c) {
  menor = b;
} else {
  menor = c;
}

console.log(`Entre os números ${a}, ${b}, ${c} o menor número é ${menor}`);

// ou
let menorN: number = Math.min(a, b, c);
console.log(`Entre os números ${a}, ${b}, ${c} o menor número é ${menor}`);

// ex3 - n2
