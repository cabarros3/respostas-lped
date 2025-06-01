// se um número é primo usando recursao de funcao (não pode usar laco)

function isPrimo(n: number, divisor: number = 2): boolean {
  // Casos especiais: 0, 1 e negativos não são primos
  if (n <= 1) {
    return false;
  }

  // Se chegamos num divisor maior que a raiz de n, e nada dividiu, então é primo
  if (divisor * divisor > n) {
    return true;
  }

  // Se algum divisor dividir exatamente, não é primo
  if (n % divisor === 0) {
    return false;
  }

  // Chamada recursiva: testa o próximo divisor
  return isPrimo(n, divisor + 1);
}

console.log(isPrimo(4, 2));
