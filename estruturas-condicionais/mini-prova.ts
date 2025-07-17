// questão 1
let salario: number = 1518;
let rendaPerCapta: number = salario / 2; // 759
let escolaPublica: boolean = true;
let tipo: string = "";

// = recebe
// == igual
// === igual em tipo e conteúdo

// template string

console.log(salario);
// console.log(rendaPerCapta);

// if (rendaPerCapta <= 759 && escolaPublica == true) {
//   tipo = "Cota por renda";
//   console.log(`Aluno contemplado com ${tipo}`);
//   // "aluno comtemplado" + tipo
// } else if (rendaPerCapta > 759 && escolaPublica == true) {
//   tipo = "Cota por escola pública";
//   console.log(`Aluno contemplado com ${tipo}`);
// } else {
//   console.log(
//     "Aluno não foi contemplado com nenhuma cota e concorrerá em ampla concorrência"
//   );
// }

//ou

// if (salario < salario * 1.5) {
//   if (escolaPublica == true) {
//     console.log("cota por renda");
//   }
// } else if (salario >= salario * 1.5) {
//   if (escolaPublica == true) {
//     console.log("cota por escola pública");
//   }
// } else {
//   console.log("ampla concorrência");
// }

// console.log(salario * 1.5);

//questão 2
let s: string = "i";
let t: string = "r";
let r: string = "e";

let nome: string = s;

if (r === t) {
  nome = s + nome + r;
  nome = t + nome + s;
} else if (nome !== t) {
  nome = r + t + nome;
  nome = nome + s;
}

console.log(nome);
