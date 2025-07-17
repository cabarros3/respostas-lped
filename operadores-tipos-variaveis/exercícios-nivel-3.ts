// exercício1 - nível 3
// maior entre dois números
let a: number = 5;
let b: number = 9;

if (a > b) {
  console.log(`O número ${a} é maior que o número ${b}`);
} else {
  console.log(`O número ${b} é maior que o número ${a}`);
}

// exercício 2 - nível 3
// raízes de uma equação

let x: number = 6;
let c: number = 4;

const f = a * x ** 2 + b * x + c;
console.log(`O resultada das raízes de uma equação é ${f}`);

// exercício 3 - nível 3
// distância entre dois pontos

// par ordenado (8,6)
let xDeA: number = 8;
let yDeA: number = 6;

// par ordenado (5,7)
let xDeB: number = 5;
let yDeB: number = 7;

const resolvePontencias = (xDeB - xDeA) ** 2 + (yDeB - yDeA) ** 2;
const raiz = Math.sqrt(resolvePontencias);
console.log(`A distância entre os pontos A e B é ${raiz.toFixed(2)}`);

// exercício 4 - n3
// hipotenusa em triangulo retângulo
const h = Math.sqrt(a ** 2 + b ** 2);
console.log(`O valor da hipotenusa é ${h.toFixed(2)}`);

// exercício 5 - n3
// trocar o valor de duas variáveis
let y: number = 2;
a = y;
b = x;
console.log(`A = ${a} e b = ${b}`);
