// Implemente um subprograma capaz de, dado um vetor, substituir seus itens com o número inteiros positivos em ordem crescente.

function substitui(vetor: number[]): void {
  for (let i: number = 0; i < vetor.length; i++) {
    vetor[i] = i + 1;
  }
}

let vetor: number[] = [-10, 0, 3, 2.5, 5, 8, 0];
substitui(vetor);
console.log(vetor);

function subtrai(vetor: number[], n: number) {
  for (let numero in vetor) {
    vetor[numero] = vetor[numero] - n;
  }
}

let lista: number[] = [-10, 0, 3, 2.5, 5, 8, 0];
subtrai(lista, 2);
console.log(lista);
