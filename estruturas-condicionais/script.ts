// tsc nomedoarquivo.ts
// tsc watch nomedoarquivo.ts

// exercício de correção
let nome = prompt("Qual o seu nome");
let media = Number(prompt("Qual a média: "));

if (media >= 6) {
  console.log(nome, "Aprovado(a)");
} else {
  console.log(nome, "reprovado(a)");
}
