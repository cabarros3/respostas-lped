//ex 1 - n2

function divisiveisPor2E3(nA: number, nB: number, nC: number): number[] {
  const resultado: number[] = [];

  if (nA % 2 == 0 && nA % 3 == 0) {
    resultado.push(nA);
  }
  if (nB % 2 == 0 && nB % 3 == 0) {
    resultado.push(nB);
  }
  if (nC % 2 == 0 && nC % 3 == 0) {
    resultado.push(nC);
  }

  return resultado;
}

console.log(divisiveisPor2E3(12, 6, 15));

// ou

function divisiveisP2E3(nA: number, nB: number, nC: number): void {
  if (nA % 2 === 0 && nA % 3 === 0) {
    console.log(nA);
  }
  if (nB % 2 === 0 && nB % 3 === 0) {
    console.log(nB);
  }
  if (nC % 2 === 0 && nC % 3 === 0) {
    console.log(nC);
  }
}

divisiveisP2E3(12, 6, 15); // Saída no console: 12 6

//ex 2 - n2

function ordemCrescente(n1: number, n2: number, n3: number): void {
  let menor: number, medio: number, maior: number;

  if (n1 <= n2 && n1 <= n3) {
    menor = n1;
    if (n2 <= n3) {
      medio = n2;
      maior = n3;
    } else {
      medio = n3;
      maior = n2;
    }
  } else if (n2 <= n1 && n2 <= n3) {
    menor = n2;
    if (n1 <= n3) {
      medio = n1;
      maior = n3;
    } else {
      medio = n3;
      maior = n1;
    }
  } else {
    menor = n3;
    if (n1 <= n2) {
      medio = n1;
      maior = n2;
    } else {
      medio = n2;
      maior = n1;
    }
  }

  console.log(menor, medio, maior);
}

ordemCrescente(10, 8, 2);

//ex 3 - n2
function encontraNegativos(z: number, r: number): boolean {
  if (z < 0 || r < 0) {
    return true;
  } else {
    return false;
  }
}

let result: boolean = encontraNegativos(-7, 5);
console.log(result);

//ex 4 - n2

function maiorNumero(n1: number, n2: number, n3: number): number {
  let menor: number, medio: number, maior: number;

  if (n1 <= n2 && n1 <= n3) {
    menor = n1;
    if (n2 <= n3) {
      medio = n2;
      maior = n3;
    } else {
      medio = n3;
      maior = n2;
    }
  } else if (n2 <= n1 && n2 <= n3) {
    menor = n2;
    if (n1 <= n3) {
      medio = n1;
      maior = n3;
    } else {
      medio = n3;
      maior = n1;
    }
  } else {
    menor = n3;
    if (n1 <= n2) {
      medio = n1;
      maior = n2;
    } else {
      medio = n2;
      maior = n1;
    }
  }

  return maior;
}

let rMaior = maiorNumero(10, 15, 2);
console.log(rMaior);

//ex 4 - n2

function menorNumero(n1: number, n2: number, n3: number): number {
  let menor: number, medio: number, maior: number;

  if (n1 <= n2 && n1 <= n3) {
    menor = n1;
    if (n2 <= n3) {
      medio = n2;
      maior = n3;
    } else {
      medio = n3;
      maior = n2;
    }
  } else if (n2 <= n1 && n2 <= n3) {
    menor = n2;
    if (n1 <= n3) {
      medio = n1;
      maior = n3;
    } else {
      medio = n3;
      maior = n1;
    }
  } else {
    menor = n3;
    if (n1 <= n2) {
      medio = n1;
      maior = n2;
    } else {
      medio = n2;
      maior = n1;
    }
  }

  return menor;
}

let rMenor = menorNumero(10, 15, 2);
console.log(rMenor);

//ex 6 - n2
//Receber como parâmetro quatro números e retornar quantos números pares há entre eles;

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

// ou

function contarPares(a: number, b: number, c: number, d: number): number {
  let contador = 0;

  if (a % 2 === 0) contador++;
  if (b % 2 === 0) contador++;
  if (c % 2 === 0) contador++;
  if (d % 2 === 0) contador++;

  return contador;
}

// Exemplo de uso:
console.log(contarPares(1, 2, 3, 4));

//ex 7 - n2

function impares(n: number, m: number, o: number, p: number): number {
  let count: number = 0;

  if (n % 2 != 0) count++;
  if (m % 2 != 0) count++;
  if (o % 2 != 0) count++;
  if (p % 2 != 0) count++;

  return count;
}

console.log(impares(1, 3, 6, 8));

// ex 8 - n2
