let contador: number = 0;
let entrada: number = 3;
let sequencia: number[] = [3, 6, 11, 18, 27, 38, 51, 66];

while (contador < 3) {
  console.log(sequencia[contador]);
  contador++;
}

// ou

/**
 * na questão ele dá a sequência: 3, 6, 11, 18, 27, 38, 51, 66
 * mas como formar essa sequência?
 * aqui usamos uma vriável número para receber o número da sequência da vez
 * e para pular para o próximo número da sequencia acrescenta ao número um incremento
 *
 */

let count: number = 0; // contador
let numero: number = 3; // primeiro número da sequencia
let incremento: number = 3; // o primeiro incremento

while (count < 3) {
  console.log(numero); // imprime o número da vez
  count++; // incrementa o count
  incremento += 2; // próximo incremento aumenta em 2
  numero += incremento; // número recebe o número da vez + o incremento (2)
}
