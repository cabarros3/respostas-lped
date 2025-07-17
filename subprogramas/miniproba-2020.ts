// dadas duas datas (mes e ano) dizer quantos meses tem entre elas
// 1 - a
// function contaMeses(
//   mes1: number,
//   ano1: number,
//   mes2: number,
//   ano2: number
// ): number {
//   let mesesAno1: number = 12;
//   mesesAno1 -= mes1;
//   let resultado: number = 0;
//   resultado = mesesAno1 + mes2;

//   return resultado;
// }

// const count: number = contaMeses(3, 2024, 5, 2025);
// console.log(count);

// 1 - b
//Dados dois números x e y como parâmetros, imprimir um retângulo composto por $ com x linhas e y colunas.

function retanguto(x: number, y: number) {
  for (let i = 0; i < x; i++) {
    let linha = ""; // string vazia para armazenar a linha atual
    for (let j = 0; j < y; j++) {
      linha += "$"; // adiciona o caractere $ na linha
    }
    console.log(linha); // imprime a linha inteira de uma vez
  }
}

retanguto(3, 4);
