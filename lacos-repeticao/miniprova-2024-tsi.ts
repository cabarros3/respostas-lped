let contador: number = 0;
let entrada: number = 3;
let sequencia: number[] = [3, 6, 11, 18, 27, 38, 51, 66];

while (contador < 3) {
  console.log(sequencia[contador]);
  contador++;
}

// ou

let count: number = 0;
let numero: number = 3;
let incremento: number = 3;

while (count < 3) {
  console.log(numero);
  count++;
  incremento += 2; // próximo incremento aumenta em 2
  numero += incremento;
}
