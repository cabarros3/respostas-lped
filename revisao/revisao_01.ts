// av1 - ipi - 2024
/**
 * solicitar a dispensa do componente curricular Fundamentos de Computação para Internet
 * precisa possuir média superior ou igual a 7
 * nos componentes curriculares Fundamentos de Computação e Desenvolvimento para Web I
 * se um estudante de TSI possui ou não os requisitos para pedir dispensa de Fundamentos de Computação para Internet.
 */

// function dispensa(mediaFC: number, mediaDW: number): boolean {
//   if (mediaFC >= 7 && mediaDW >= 7) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(dispensa(8, 8));

/**
 * [2.5] Implemente, sem utilizar os operadores da divisão e multiplicação, um programa capaz de, 
 * dado o número de dias, imprimir quantas semanas completas caberiam na quantidade de dias. 
 * Exemplo, entrada: 22 dias, saída: 3 semanas.

 */

// let entradaDias: number = 22;
// let guardaSemanas: number = 0;

// while (entradaDias >= 7) {
//   entradaDias -= 7;
//   guardaSemanas += 1;
// }

// console.log(`${guardaSemanas} semana(s)`);

// função

// function contaSemanas(entradaDias: number): number {
//   let guardaSemanas: number = 0;
//   while (entradaDias >= 7) {
//     entradaDias -= 7;
//     guardaSemanas += 1;
//   }
//   return guardaSemanas;
// }

// console.log(contaSemanas(22));

// let semanas = 3;

// console.log(semanas + "semanas");

// calculo de pa

// function calculaPA(a1: number, r: number, n: number) {
//   let an: number = 0;
//   for (let i: number = 0; i < n; i++) {
//     an = a1 + i * r; // isso calcula cada termo e não (n - 1) como foi dado na questão
//     console.log(an);
//   }
// }

// calculaPA(5, 2, 3);

// let a: number = 10;
// let b: number = 2;
// let r: number = 0;
// let i: number = 0; // começar em 0

// while (i < b) {
//   r = r + a;
//   i++;
// }

// console.log(r);

// imprimir o seguinte padrão
/**
 * xxxxx
 * zzzzz
 * xxxxx
 * zzzzz
 * xxxxx
 */

// let s: string = "";

// for (let i: number = 0; i < 5; i++) {
//   for (let j: number = 0; j < 5; j++) {
//     if (i % 2 == 0) {
//       s = s + "X";
//     } else {
//       s = s + "Z";
//     }
//   }
//   s = s + "\n";
// }

// console.log(s);

// let x: number = 1;
// let y: number = -1;
// let z: number = 0;
// let w: number = 2;
// let k: boolean = true;

// while (w != -1) {
//   if (w % 4 == 1 || w % 4 == 3) {
//     x = x * y + 2 * z;
//     z = x - z;
//   } else if (w % 3 == 0) {
//     y = x * x + w;
//   }

//   k = !k && (x > 0 || x < 0);
//   console.log(x, y, z, w, k);
//   w = w - 1;
// }

// let x: number = 1;
// let y: number = 0;
// let z: number = -1;
// let w: number = -1;
// let k: boolean = true;

// while (3 > y) {
//   if (y % 3 == 1) {
//     x = x * y + 2 * z;
//     z = x - z;
//   } else if (y % 3 != 0) {
//     w = x * x + w;
//     k = k && x > 0;
//   }

//   console.log(x, y, z, w, k);
//   y = y + 1;
// }

// function sr(g: number): string {
//   let w: string = "";
//   let m: boolean = true;
//   for (let i: number = 0; i <= g / 16; i++) {
//     if (m) {
//       w = w + "SUKI";
//     } else {
//       w = w + "NANDA!";
//     }
//     m = !m;
//   }
//   return w;
// }

// console.log(sr(48));

// function desc(n: number): void {
//   for (let i: number = n; i > 0; i--) {
//     console.log(i);
//   }
// }

// desc(5);

// let x: number = 6;
// let s: string = "";

// for (let i: number = x; i > 0; i--) {
//   for (let j: number = 0; j < i; j++) {
//     s = s + "*";
//   }
//   s = s + "\n";
// }
// console.log(s);

let x: number = 5;
let y: number = 5;
let s: string = "";
for (let i: number = 0; i < x; i++) {
  for (let j: number = 0; j < y; j++) {
    if (i == 0 || j / 2 == 1 || i == 4) {
      s = s + "#";
    } else {
      s = s + ".";
    }
  }
  s = s + "\n";
}

console.log(s);
