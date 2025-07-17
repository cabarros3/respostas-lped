let a: number = 9;
let b: number = 6;
let c: number = 7;

let soma: number = a + b + c;
let media: number = soma / 3;

const distanciaA: number = Math.abs(a - media);
const distanciaB: number = Math.abs(b - media);
const distanciaC: number = Math.abs(c - media);

let maisProxm: number = a;
let menorDistancia: number = distanciaA;

if (distanciaB < menorDistancia) {
  maisProxm = b;
  menorDistancia = distanciaB;
}

if (distanciaC < menorDistancia) {
  maisProxm = c;
  menorDistancia = distanciaC;
}

console.log(media);
console.log("Mais próximo da média:", maisProxm);
