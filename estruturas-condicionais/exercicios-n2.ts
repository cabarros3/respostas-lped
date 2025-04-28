// ex 1 - n2
// let conjunto: number[] = [7, 4, 8];

// console.log(conjunto.sort());

// ou
// let a: number = 5;
// let b: number = 3;
// let c: number = 7;

// if (a <= b && a <= c) {
//   if (b <= c) {
//     console.log(a, b, c);
//   } else {
//     console.log(a, c, b);
//   }
// } else if (b <= a && b <= c) {
//   if (a <= c) {
//     console.log(b, a, c);
//   } else {
//     console.log(b, c, a);
//   }
// } else {
//   if (a <= b) {
//     console.log(c, a, b);
//   } else {
//     console.log(c, b, a);
//   }
// }

//ex3 - n2
// let nota1: number = 8;
// let nota2: number = 6;
// let nota3: number = 7;
// let nota4: number = 2;

// const media = (nota1 + nota2 + nota3 + nota4) / 4;

// if (media > 6) {
//   console.log(`Aluno com média ${media.toFixed(2)} está aprovado`);
// } else if (media < 4) {
//   console.log(`Aluno com média ${media.toFixed(2)} está reprovado`);
// } else {
//   console.log(`Aluno com média ${media.toFixed(2)} está em recuperação`);
// }

// ex6 - n2
// let dia1: string = "segunda";
// let dia2: string = "terça";
// let dia3: string = "quarta";
// let dia4: string = "quinta";
// let dia5: string = "sexta";

// let diaEscolhido: string = dia4;

// switch (diaEscolhido) {
//   case "segunda":
//     console.log(`Na segunda o aluno tem português e matemática`);
//     break;
//   case "terça":
//     console.log(`Na terça o aluno tem quimica e matemática`);
//     break;
//   case "quarta":
//     console.log(`Na quarta o aluno tem português e artes`);
//     break;
//   case "quinta":
//     console.log(`Na quinta o aluno tem português e inglês`);
//     break;
//   case "sexta":
//     console.log(`Na sexta o aluno tem português e matemática`);
//     break;
//   default:
//     console.log("O aluno não tem aula amanhã");
//     break;
// }

// ex - n2

let palavras: string[] = ["I", "you", "he", "she", "it", "we", "they"];

let escolhido: string = palavras[4];

switch (escolhido) {
  case "I":
    console.log(`A tradução de ${escolhido} é "eu"`);
    break;
  case "you":
    console.log(`A tradução de ${escolhido} é "você"`);
    break;
  case "he":
    console.log(`A tradução de ${escolhido} é "ele"`);
    break;
  case "she":
    console.log(`A tradução de ${escolhido} é "ela"`);
    break;
  case "it":
    console.log(`A tradução de ${escolhido} é "isto"`);
    break;
  case "we":
    console.log(`A tradução de ${escolhido} é "nós"`);
    break;
  case "they":
    console.log(`A tradução de ${escolhido} é "eles/elas"`);
    break;
  default:
    console.log("Escolha uma entrada válida");
    break;
}
