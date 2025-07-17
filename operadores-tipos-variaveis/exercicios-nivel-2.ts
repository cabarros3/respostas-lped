// exercíco 1 - nível 2
// media
let num1: number = 5;
let num2: number = 3;
let num3: number = 9;
let num4: number = 7;
let num5: number = 8;
let num6: number = 6;
const soma: number = num1 + num2 + num3 + num4 + num5 + num6;
const media: number = soma / 6;

console.log(`A média é ${media.toFixed(2)}`);

// exercício 2 - n 2
// media ponderada
const peso1: number = 3;
const peso2: number = 1;
const peso3: number = 4;
const peso4: number = 2;

const mult1: number = num1 * peso1;
const mult2: number = num2 * peso2;
const mult3: number = num3 * peso3;
const mult4: number = num4 * peso4;

const somaMultiplicacoes: number = mult1 + mult2 + mult3 + mult4;
const somaPesos: number = peso1 + peso2 + peso3 + peso4;

const mediaPonderada: number = somaMultiplicacoes / somaPesos;
console.log(`A média ponderada é ${mediaPonderada}`);

// exercicio 3 - n2
// IMC
let peso: number = 85;
let altura: number = 1.64;
const imc: number = peso / altura ** 2;
console.log(`O valor do IMC é ${imc.toFixed(2)}`);

// exercício 4 - n2
// perímetro círculo
const pi: number = 3.14;
let raio: number = 9;
const perimetroC: number = 2 * pi * raio;
console.log(`O perímetro do círculo é ${perimetroC}`);

// exercício 5 - n2
// função f(x,z)
let x: number = 2;
let z: number = 5;

const f: number = x ** 3 + z ** 2 + 3 * x * z - 25;
console.log(`O resultado de f = ${f}`);

// exercício 6 - n2
// volume cilindro
const volumeCilindro = pi * raio ** 2 * altura;
console.log(`O volume do cilindro é ${volumeCilindro.toFixed(2)}`);

// exercício 7 - n2
// volume de uma caixa
let profundidade: number = 8;
let base: number = 7;
const volumeCaixa = base * altura * profundidade;
console.log(`O volume da caixa é ${volumeCaixa.toFixed(2)}`);

// exercício 8 - n2
// area triangulo isósceles
const areaTrianguloI = (base * altura) / 2;
console.log(`A área do triângulo Isósceles é ${areaTrianguloI.toFixed(2)}`);
