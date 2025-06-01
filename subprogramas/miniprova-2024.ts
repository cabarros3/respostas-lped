// mmdc entre dois número
// function mmdc(a: number, b: number): void{
//     let i: number = 0;
//     let j: number = 0

//     for(;i>=a; i++){

//     }
// }

// function jurina(x: number, y: number): string {
//   let n: string = "";

//   for (let a: number = 0; a < x; a++) {
//     for (let b: number = 0; b < y; b++) {
//       if (b % 3 == 2) {
//         n = n + "I";
//       } else if (b % 3 == 1) {
//         n = n + "TSU";
//       } else {
//         n = n + "MA";
//       }
//       n = n + ""; //ma tsu i
//     }
//     n = n + "\n";
//   }

//   return n;
// }

// console.log(jurina(4, 3));

// function somaDivisiveis(inicio: number, fim: number): number {
//   let soma: number = 0;
//   for (let i: number = 0; i <= fim; i++) {
//     if (inicio % 3 == 0) {
//       soma += inicio;
//       inicio += 1;
//     } else {
//       inicio += 1;
//     }
//   }
//   return soma;
// }

// let resultado: number = somaDivisiveis(1, 6);
// console.log(resultado);

function ie(i: number, e: number): string {
  let mm: string = "";

  for (let a: number = 0; a < i; a++) {
    for (let b: number = 0; b < e; b++) {
      if ((a + b) % 3 == 0) {
        mm = mm + "SAI";
      } else if ((a + b) % 3 == 1) {
        mm = mm + "KI";
      } else {
        mm = mm + "YOU";
      }
      mm = mm + ".";
    }
    mm = mm + "\n";
  }

  return mm;
}

console.log(ie(4, 6));
