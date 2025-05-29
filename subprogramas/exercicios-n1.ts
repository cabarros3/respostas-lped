// ex 1 - n1
// Receber quatro números como parâmetro e retornar a média dos quatro como resultado

function media(
  a: number,
  b: number,
  c: number,
  d: number,
  quantidade: number
): number {
  let soma: number = a + b + c + d;
  let resultado: number = soma / quantidade;
  return resultado;
}

// console.log(media(8, 9, 5, 6, 4));

// ex 2 - n1
//Receber um número como parâmetro e retornar true se ele for divisível 7 e false caso contrário

function divisivel(n: number): boolean {
  let res: boolean = false;
  if (n % 7 == 0) {
    res = true;
  } else {
    res = false;
  }

  return res;
}

console.log(divisivel(10));

// ex 3 - n1
//Receber como parâmetro a aresta de um cubo e retornar volume do cubo;

function volumeCubo(aresta: number): number {
  let v: number = aresta ** 3;
  return v;
}

console.log(volumeCubo(5));

// ex 4 - n1
// Receber como parâmetro quatro números e retornar o valor da soma dos seus quadrados;

function somaDosQuadrados(
  n1: number,
  n2: number,
  n3: number,
  n4: number
): number {
  let somaQuadrados: number = n1 ** 2 + n2 ** 2 + n3 ** 2 + n4 ** 2;
  return somaQuadrados;
}

console.log(somaDosQuadrados(2, 4, 6, 8));

// ex 5 - n1
// Computar e retornar o valor de f(x) na seguinte função matemática: f(x) = x² + 2x + 3;

function fDeX(x: number): number {
  let fx: number = x ** 2 + 2 * x + 3;
  return fx;
}

console.log(fDeX(2));

// ex 6 - n1
//Computar e retornar o valor de f(x) na seguinte função matemática: f(x) = x³ - 4x + 1;

function fDeY(y: number): number {
  let fy: number = y ** 3 - 4 * y + 1;
  return fy;
}

console.log(fDeY(2));

// ex 7 - n1
// Dados os catetos de um triângulo retângulo, calcular e imprimir o valor da sua hipotenusa;

function hipotenusa(a: number, b: number): number {
  let hipo: number = a ** 2 + b ** 2;
  let result: number = Math.sqrt(hipo);
  return result;
}

console.log(hipotenusa(8, 6));

// ex 8 - n1
// Dados os lados de um retângulo, retornar o valor da sua a área.

function areaRetangulo(b: number, h: number) {
  let areaR: number = b * h;
  return areaR;
}

console.log(areaRetangulo(2, 6));
