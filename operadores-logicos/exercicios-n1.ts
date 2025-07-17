// ex 1 - n1
let num1: number = 5;

if (num1 % 2 == 0 && num1 % 3 == 0) {
  console.log(`O número ${num1} é divisível por 2 e 3`);
} else {
  console.log(`O número ${num1} não é divisível por 2 e 3`);
}

// ex 2 - n1
let num2: number = 27;

if (num2 % 5 == 0 && num2 % 4 == 0) {
  console.log(`O número ${num2} é divisível por 5 e 4`);
} else {
  console.log(`O número ${num2} não é divisível por 5 e 4`);
}

// ex 3 - n1
let num3: number = 27;

if (num3 % 7 == 0 && num3 % 8 == 0) {
  console.log(`O número ${num3} é divisível por 7 e 8`);
} else {
  console.log(`O número ${num3} não é divisível por 7 e 8`);
}

// ex 4 - n1
let numero: number = 3;

if (numero >= 0 && numero <= 9) {
  console.log(`O número ${numero} está entre 0 e 9`);
} else {
  console.log(`O número ${numero} não está entre 0 e 9`);
}

// ex 5 - n1
let numero2: number = 13;

if (numero2 > 0 && numero2 < 15) {
  console.log(`O número ${numero2} está entre 0 e 15`);
} else {
  console.log(`O número ${numero2} não está entre 0 e 15`);
}

// ex 6 - n1
let d: number = -2;
let f: number = -3;

if (d < 0 && f < 0) {
  console.log("As duas variáveis são negativas");
} else {
  console.log("Ou as duas variáveis são positivas ou alguma delas é positiva");
}

// ex 7 - n1
let g: number = 3;
let h: number = 8;

if (g > 0 && h > 0) {
  console.log("As duas vairáveis são positivas");
} else {
  console.log("Ou as duas variáveis são negativas ou alguma delas é negativa");
}

// ex 7 - n1
let numeros: number[] = [70, 35, 10, 8];
let count: number = 0;

for (let i: number = 0; i < numeros.length; i++) {
  if (numeros[i] % 5 == 0 && numeros[i] % 7 == 0) {
    count += 1;
  }
}

console.log(`Foram identificados ${count} números divisíveis por 5 e 7`);

// ex 8 - n1
let conjNumeros: number[] = [12, 24, 48, 96];
let countNum: number = 0;

for (let i: number = 0; i < conjNumeros.length; i++) {
  if (conjNumeros[i] % 3 == 0 && conjNumeros[i] % 4 == 0) {
    countNum += 1;
  }
}

console.log(`Foram identificados ${countNum} números divisíveis por 3 e 4`);

// ou
let n1 = 12;
let n2 = 24;
let n3 = 48;
let n4 = 96;

let countN = 0;

if (n1 % 3 === 0 && n1 % 4 === 0) {
  countN += 1;
}
if (n2 % 3 === 0 && n2 % 4 === 0) {
  countN += 1;
}
if (n3 % 3 === 0 && n3 % 4 === 0) {
  countN += 1;
}
if (n4 % 3 === 0 && n4 % 4 === 0) {
  countN += 1;
}

console.log(`Foram identificados ${countN} números divisíveis por 3 e 4`);

// ex 9 - n1
let var1: number = -2;
let var2: number = -4;

if (var1 % 2 == 0 && var1 < 0) {
  if (var2 % 2 == 0 && var2 < 0) {
    console.log(`As duas variáveis são pares e negativas`);
  }
} else {
  console.log(
    "Ou as duas variáveis são positivas e ímpares ou algumas delas é positiva e ímpar"
  );
}

// ex 10 - n1
let var3: number = 3;
let var4: number = 5;

if (var3 % 2 > 0 && var3 > 0) {
  if (var4 % 2 > 0 && var4 > 0) {
    console.log(`As duas variáveis são ímpares e positivas`);
  }
} else {
  console.log(
    "Ou as duas variáveis são negativas e pares ou algumas delas é negativa e par"
  );
}
