// Implementar um subprograma que dado um array bidimensional e um número, multiplica cada elemento do array pelo número;

// function mult(elementos: number[][], numero: number): number[] {
//   let multiplica: number[] = [];
//   for (let i: number = 0; i < elementos.length; i++) {
//     for (let j: number = 0; j < elementos[i].length; j++) {
//       let operacao: number = elementos[i][j] * numero;
//       multiplica.push(operacao);
//     }
//   }

//   return multiplica;
// }

// let selectElements: number[][] = [
//   [2, 4, 6, 8],
//   [1, 3, 5, 7],
//   [0, 9, 10, 12],
// ];

// console.log(mult(selectElements, 2));

//Implementar um subprograma que dado um array bidimensional retorna true se a soma dos seus elementos for positiva ou false, caso contrário;

// function somaTrueOrFalse(elements: number[][]): boolean {
//   let soma: number = 0;
//   for (let i: number = 0; i < elements.length; i++) {
//     for (let j: number = 0; j < elements[i].length; j++) {
//       soma += elements[i][j];
//     }
//   }

//   return soma > 0;
// }

// let num: number[][] = [
//   [4, 5, 6],
//   [1, 2, 3],
//   [7, 8, 9],
// ];

// console.log(somaTrueOrFalse(num));

// Implementar um subprograma que retorna a quantidade de elementos ímpares em um array de duas dimensões;

// function guardaImpares(array: number[][]): number {
//   //   let guardaNumeros: number[] = [];
//   let count: number = 0;
//   for (let i: number = 0; i < array.length; i++) {
//     for (let j: number = 0; j < array[i].length; j++) {
//       if (array[i][j] % 2 === 1) {
//         count++;
//         // guardaNumeros.push(array[i][j]);
//       }
//     }
//   }
//   //   console.log(guardaNumeros)
//   // return guardaNumero.length
//   return count;
// }

// console.log(
//   guardaImpares([
//     [2, 3, 5],
//     [7, 9, 6],
//     [11, 12, 13],
//   ])
// );

// Implementar um subprograma que retorna  a quantidade de elementos pares em um array de duas dimensões;

// function contaPares(lista: number[][]): number {
//     let countP: number = 0
//     for(let numeros of lista){
//         for(let pares of numeros){
//             if(pares % 2 === 0){
//                 countP++
//             }
//         }
//     }

//     return countP
// }

// console.log(contaPares([[3,6,7],[11,13,12],[6,4,2]]))

// Implementar um subprograma que dados um array bidimensional e um número, subtrai o número de todos os elementos do array;

function subtraiElementos(nums: number[][], s: number): number[] {
  let subtracao: number = 0;
  let guardaNumSubtraidos: number[] = [];
  for (let i: number = 0; i < nums.length; i++) {
    for (let j: number = 0; j < nums[i].length; j++) {
      subtracao = nums[i][j] - s;
      guardaNumSubtraidos.push(subtracao);
    }
  }

  return guardaNumSubtraidos;
}

let arrayOriginal: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arrayOriginal);
console.log(subtraiElementos(arrayOriginal, 2));
