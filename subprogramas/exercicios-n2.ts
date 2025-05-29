// ex 6 - n2
// Receber como parâmetro quatro números e retornar quantos números pares há entre eles;

function pares(a: number, b: number, c: number, d: number): number[] {
  let numeros: number[] = [a, b, c, d];
  let nPares: number[] = [];
  numeros.forEach((numero) => {
    if (numero % 2 == 0) {
      nPares.push(numero);
    }
  });
  return nPares;
}

console.log(pares(2, 5, 7, 8));
